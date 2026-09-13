import React, { useState, useRef, useEffect } from 'react';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  X,
  Compass,
  MapPin,
  Eye,
  EyeOff,
  Layers,
  Shield,
  FileText,
  Lock,
  CheckCircle2,
  Info,
  Sun,
  Sunset,
  Flame,
  Search,
  Camera,
  Maximize2,
} from 'lucide-react';
import { AmbientParticles } from './AmbientParticles';
import { HiddenArtifactSpot } from './HiddenArtifactSpot';
import { EvidenceInspectModal } from './EvidenceInspectModal';
import { BrassMagnifyingLoupe } from './BrassMagnifyingLoupe';
import type { Difference, RadarQuadrant } from '../types/game';
import type { CollectibleRelic } from '../data/collectiblesData';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { assetUrl } from '../utils/assetUrl';

interface ImageComparisonViewProps {
  imageA: string;
  imageB: string;
  differences: Difference[];
  foundDifferenceIds: string[];
  activeHint: Difference | null;
  activeRadar?: RadarQuadrant | null;
  isTimeFrozen?: boolean;
  hiddenRelic?: CollectibleRelic | null;
  isRelicDiscovered?: boolean;
  onDiscoverRelic?: (relic: CollectibleRelic) => void;
  onDifferenceClick: (
    diff: Difference,
    clickPercentage: { x: number; y: number },
    imageIndex: 0 | 1,
    screenPos?: { x: number; y: number }
  ) => void;
  onErrorClick: (clickPercentage: { x: number; y: number }, imageIndex: 0 | 1) => void;
  layoutMode?: 'auto' | 'vertical' | 'horizontal';
  comboStreak?: number;
  shieldBlockedNotice?: boolean;
  chapterNumber?: number;
}

interface ErrorRipple {
  id: string;
  x: number;
  y: number;
}

interface DiscoveryPop {
  id: string;
  x: number;
  y: number;
  text: string;
  name: string;
}

export const ImageComparisonView: React.FC<ImageComparisonViewProps> = ({
  imageA,
  imageB,
  differences,
  foundDifferenceIds,
  activeHint,
  activeRadar = null,
  isTimeFrozen = false,
  hiddenRelic = null,
  isRelicDiscovered = false,
  onDiscoverRelic,
  onDifferenceClick,
  onErrorClick,
  comboStreak = 0,
  shieldBlockedNotice = false,
  chapterNumber = 1,
}) => {
  // Mode: Full-screen Crime Scene Investigation (Default AAA) vs Classic Split Screen
  const [viewMode, setViewMode] = useState<'crime_scene' | 'split'>('crime_scene');

  // Lente d'Archivio (Past Vision) states
  const [isArchiveLensActive, setIsArchiveLensActive] = useState<boolean>(false);
  const [selectedClueId, setSelectedClueId] = useState<string | null>(null);
  const [inspectingDiff, setInspectingDiff] = useState<Difference | null>(null);

  // 3D Glass-plate Photo Perspective Tilt
  const [photoTilt, setPhotoTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Interactive Victorian Brass Loupe (2.5x Handheld Magnifier)
  const [isLoupeActive, setIsLoupeActive] = useState<boolean>(false);
  const [loupePos, setLoupePos] = useState<{ x: number; y: number }>({ x: 260, y: 220 });

  // 1928 Diurnal Time-of-Day Lighting Engine
  const [atmosphereMode, setAtmosphereMode] = useState<'dawn' | 'noon' | 'dusk' | 'lantern'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('differenze_atmosphere');
      if (saved === 'dawn' || saved === 'noon' || saved === 'dusk' || saved === 'lantern') return saved;
    }
    return 'dawn';
  });

  // Historical Photo Plate Film Emulsion Filters
  const [photoFilter, setPhotoFilter] = useState<'silver' | 'cyanotype' | 'autochrome' | 'natural'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('differenze_photofilter');
      if (saved === 'silver' || saved === 'cyanotype' || saved === 'autochrome' || saved === 'natural') return saved;
    }
    return 'silver';
  });

  // Lantern position (for gas lantern illumination cone in 'lantern' mode)
  const [lanternPos, setLanternPos] = useState<{ x: number; y: number }>({ x: 300, y: 200 });

  // 1928 Magnesium Powder Flash Clue Celebration
  const [magnesiumFlash, setMagnesiumFlash] = useState<{ id: string; x: number; y: number } | null>(null);

  const handleMouseMoveTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    setLanternPos({ x: relX, y: relY });

    if (!isLoupeActive && containerRef.current) {
      const cRect = containerRef.current.getBoundingClientRect();
      setLoupePos({ x: e.clientX - cRect.left, y: e.clientY - cRect.top });
    }

    if (scale <= 1) {
      const x = relX / rect.width - 0.5;
      const y = relY / rect.height - 0.5;
      setPhotoTilt({ x: -y * 3.5, y: x * 3.5 });
    }
  };

  const handleMouseLeaveTilt = () => {
    setPhotoTilt({ x: 0, y: 0 });
  };

  const toggleLoupe = () => {
    const next = !isLoupeActive;
    setIsLoupeActive(next);
    sound.playLoupeToggle(next);
    triggerHaptic('medium');
    if (next && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setLoupePos({ x: rect.width / 2, y: rect.height / 2 });
    }
  };

  const cycleAtmosphere = () => {
    const modes: ('dawn' | 'noon' | 'dusk' | 'lantern')[] = ['dawn', 'noon', 'dusk', 'lantern'];
    const nextIdx = (modes.indexOf(atmosphereMode) + 1) % modes.length;
    const nextMode = modes[nextIdx];
    setAtmosphereMode(nextMode);
    localStorage.setItem('differenze_atmosphere', nextMode);
    sound.playAtmosphereChange();
    triggerHaptic('light');
  };

  const cyclePhotoFilter = () => {
    const filters: ('silver' | 'cyanotype' | 'autochrome' | 'natural')[] = ['silver', 'cyanotype', 'autochrome', 'natural'];
    const nextIdx = (filters.indexOf(photoFilter) + 1) % filters.length;
    const nextFilter = filters[nextIdx];
    setPhotoFilter(nextFilter);
    localStorage.setItem('differenze_photofilter', nextFilter);
    sound.playPaperInspect();
    triggerHaptic('light');
  };

  const getPhotoFilterStyle = (): string => {
    const filters: string[] = [];

    // 1. Historical Plate Emulsion Tone
    if (photoFilter === 'cyanotype') {
      filters.push('sepia(0.85)', 'hue-rotate(180deg)', 'saturate(2.4)', 'contrast(1.25)', 'brightness(0.92)');
    } else if (photoFilter === 'autochrome') {
      filters.push('sepia(0.35)', 'hue-rotate(8deg)', 'saturate(1.45)', 'contrast(1.1)', 'brightness(1.02)');
    } else if (photoFilter === 'natural') {
      filters.push('contrast(1.05)', 'brightness(1.0)');
    } else {
      // silver: Classic 1928 Silver Gelatin Bromide
      filters.push('sepia(0.18)', 'contrast(1.12)', 'saturate(0.96)');
    }

    // 2. Diurnal Atmospheric Lighting
    if (atmosphereMode === 'dawn') {
      filters.push('brightness(1.06)', 'contrast(1.05)');
    } else if (atmosphereMode === 'noon') {
      filters.push('brightness(1.02)', 'contrast(1.14)');
    } else if (atmosphereMode === 'dusk') {
      filters.push('brightness(0.92)', 'sepia(0.28)', 'hue-rotate(-12deg)', 'contrast(1.12)');
    } else if (atmosphereMode === 'lantern') {
      filters.push('brightness(0.8)', 'contrast(1.28)');
    }

    return filters.join(' ');
  };

  // Pan & Zoom
  const [scale, setScale] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Reliable tap vs drag & Double-Tap detection
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const lastTapRef = useRef<{ time: number; x: number; y: number } | null>(null);

  // Visual Celebrations & Error feedback
  const [errorRipples, setErrorRipples] = useState<ErrorRipple[]>([]);
  const [discoveryPops, setDiscoveryPops] = useState<DiscoveryPop[]>([]);
  const [isShaking, setIsShaking] = useState<boolean>(false);

  // Dynamic Inactivity Environmental Assist (Difficoltà Adattiva Dinamica)
  const lastInteractionTimeRef = useRef<number>(Date.now());
  const [idleAssistDiff, setIdleAssistDiff] = useState<Difference | null>(null);

  const registerInteraction = () => {
    lastInteractionTimeRef.current = Date.now();
    setIdleAssistDiff(null);
  };

  // Reset timer on found difference change or active hint
  useEffect(() => {
    registerInteraction();
  }, [foundDifferenceIds, activeHint]);

  // Periodic check: after 45s of inactivity without hints, highlight one unfound clue softly without penalty
  useEffect(() => {
    const timer = setInterval(() => {
      const elapsedSinceActivity = Date.now() - lastInteractionTimeRef.current;
      const unfound = differences.filter(d => !foundDifferenceIds.includes(d.id));

      if (elapsedSinceActivity > 45000 && unfound.length > 0 && !activeHint) {
        setIdleAssistDiff(prev => {
          if (prev && !foundDifferenceIds.includes(prev.id)) return prev;
          return unfound[0];
        });
      } else {
        setIdleAssistDiff(null);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [differences, foundDifferenceIds, activeHint]);

  // References
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRefMain = useRef<HTMLImageElement>(null);
  const imgRefA = useRef<HTMLImageElement>(null);
  const imgRefB = useRef<HTMLImageElement>(null);
  const touchDistRef = useRef<number | null>(null);
  const lensPressTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Spacebar keyboard shortcut to toggle/hold Lente d'Archivio
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !e.repeat && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        registerInteraction();
        setIsArchiveLensActive(true);
        sound.playArchiveLens();
        triggerHaptic('light');
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        registerInteraction();
        setIsArchiveLensActive(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Auto-focus hint when active
  useEffect(() => {
    if (activeHint) {
      registerInteraction();
      setScale(2.2);
      const targetX = (50 - activeHint.x) * 3.8;
      const targetY = (50 - activeHint.y) * 3.8;
      setPan({ x: targetX, y: targetY });
    }
  }, [activeHint]);

  // Mobile Pinch to Zoom
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchDistRef.current = dist;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchDistRef.current !== null) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const delta = (dist - touchDistRef.current) * 0.008;
      setScale(s => {
        const next = Math.min(4, Math.max(1, Number((s + delta).toFixed(2))));
        if (next === 1) setPan({ x: 0, y: 0 });
        return next;
      });
      touchDistRef.current = dist;
    }
  };

  const handleTouchEnd = () => {
    touchDistRef.current = null;
  };

  // Zoom controls
  const handleZoomIn = () => setScale(s => Math.min(4, Number((s + 0.5).toFixed(1))));
  const handleZoomOut = () => {
    setScale(s => {
      const next = Math.max(1, Number((s - 0.5).toFixed(1)));
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };
  const handleResetZoom = () => {
    setScale(1);
    setPan({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    setScale(s => {
      const next = Math.min(4, Math.max(1, Number((s + delta).toFixed(2))));
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
    isDraggingRef.current = false;
    if (scale > 1) {
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (pointerStartRef.current) {
      const dist = Math.hypot(
        e.clientX - pointerStartRef.current.x,
        e.clientY - pointerStartRef.current.y
      );
      if (dist > 8) {
        isDraggingRef.current = true;
      }
    }

    if (isDraggingRef.current && scale > 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      const maxOffset = (scale - 1) * 220;
      setPan({
        x: Math.max(-maxOffset, Math.min(maxOffset, newX)),
        y: Math.max(-maxOffset, Math.min(maxOffset, newY)),
      });
    }
  };

  const handlePointerUp = () => {
    pointerStartRef.current = null;
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 50);
  };

  // Add error feedback
  const addErrorFeedback = (x: number, y: number) => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 380);

    const newRipple: ErrorRipple = {
      id: `${Date.now()}_${Math.random()}`,
      x,
      y,
    };
    setErrorRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setErrorRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
  };

  // Hit test click on image with Double-Tap to Zoom support
  const handleStageClick = (e: React.MouseEvent<HTMLDivElement>, imageTarget: 0 | 1 = 1) => {
    if (isDraggingRef.current) return;
    registerInteraction();

    const imgElement =
      viewMode === 'crime_scene'
        ? imgRefMain.current
        : imageTarget === 0
        ? imgRefA.current
        : imgRefB.current;

    if (!imgElement) return;

    const rect = imgElement.getBoundingClientRect();
    const clickXPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const clickYPercent = ((e.clientY - rect.top) / rect.height) * 100;

    // Check for a double-tap gesture
    const now = Date.now();
    if (
      lastTapRef.current &&
      now - lastTapRef.current.time < 350 &&
      Math.hypot(e.clientX - lastTapRef.current.x, e.clientY - lastTapRef.current.y) < 30
    ) {
      lastTapRef.current = null;
      if (scale > 1) {
        handleResetZoom();
      } else {
        const targetX = (50 - clickXPercent) * 2.8;
        const targetY = (50 - clickYPercent) * 2.8;
        setScale(2.2);
        setPan({ x: targetX, y: targetY });
      }
      sound.playTap();
      triggerHaptic('light');
      return;
    }
    lastTapRef.current = { time: now, x: e.clientX, y: e.clientY };

    // Check hit against differences
    let matchedDiff: Difference | null = null;
    for (const diff of differences) {
      if (foundDifferenceIds.includes(diff.id)) continue;
      const tolerance = diff.radius || 10.0;
      const dx = clickXPercent - diff.x;
      const dy = clickYPercent - diff.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= tolerance) {
        matchedDiff = diff;
        break;
      }
    }

    if (matchedDiff) {
      // Trigger 1928 Magnesium Powder Flash FX
      setMagnesiumFlash({ id: String(Date.now()), x: clickXPercent, y: clickYPercent });
      sound.playMagnesiumFlash();
      setTimeout(() => {
        setMagnesiumFlash(null);
      }, 650);

      // Spawn floating discovery score notification
      const pop: DiscoveryPop = {
        id: `${Date.now()}_${Math.random()}`,
        x: clickXPercent,
        y: clickYPercent,
        text: comboStreak >= 1 ? `+Monete! (x${comboStreak + 1} Combo)` : '+Monete!',
        name: matchedDiff.name,
      };
      setDiscoveryPops(prev => [...prev, pop]);
      setTimeout(() => {
        setDiscoveryPops(prev => prev.filter(p => p.id !== pop.id));
      }, 1400);

      onDifferenceClick(
        matchedDiff,
        { x: clickXPercent, y: clickYPercent },
        imageTarget,
        { x: e.clientX, y: e.clientY }
      );
    } else {
      addErrorFeedback(clickXPercent, clickYPercent);
      onErrorClick({ x: clickXPercent, y: clickYPercent }, imageTarget);
    }
  };

  // Hit test through the Brass Magnifying Loupe with forensic precision
  const handleLoupeClick = (clickPct: { x: number; y: number }) => {
    registerInteraction();
    const clickXPercent = clickPct.x * 100;
    const clickYPercent = clickPct.y * 100;

    let matchedDiff: Difference | null = null;
    for (const diff of differences) {
      if (foundDifferenceIds.includes(diff.id)) continue;
      const tolerance = (diff.radius || 10.0) * 1.25;
      const dx = clickXPercent - diff.x;
      const dy = clickYPercent - diff.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= tolerance) {
        matchedDiff = diff;
        break;
      }
    }

    if (matchedDiff) {
      // Trigger 1928 Magnesium Powder Flash FX
      setMagnesiumFlash({ id: String(Date.now()), x: clickXPercent, y: clickYPercent });
      sound.playMagnesiumFlash();
      setTimeout(() => {
        setMagnesiumFlash(null);
      }, 650);

      const pop: DiscoveryPop = {
        id: `${Date.now()}_${Math.random()}`,
        x: clickXPercent,
        y: clickYPercent,
        text: comboStreak >= 1 ? `+Monete! (x${comboStreak + 1} Combo)` : '+Monete!',
        name: matchedDiff.name,
      };
      setDiscoveryPops(prev => [...prev, pop]);
      setTimeout(() => {
        setDiscoveryPops(prev => prev.filter(p => p.id !== pop.id));
      }, 1400);

      onDifferenceClick(
        matchedDiff,
        { x: clickXPercent, y: clickYPercent },
        isArchiveLensActive ? 0 : 1
      );
    } else {
      addErrorFeedback(clickXPercent, clickYPercent);
      onErrorClick({ x: clickXPercent, y: clickYPercent }, isArchiveLensActive ? 0 : 1);
    }
  };

  // Center camera on a specific clue
  const handleAimClue = (diff: Difference) => {
    setScale(2.2);
    const targetX = (50 - diff.x) * 3.2;
    const targetY = (50 - diff.y) * 3.2;
    setPan({ x: targetX, y: targetY });
    sound.playTap();
    triggerHaptic('light');
  };

  // Lente d'Archivio Press/Toggle Handlers
  const handleLensPointerDown = () => {
    sound.playArchiveLens();
    triggerHaptic('light');
    lensPressTimerRef.current = setTimeout(() => {
      setIsArchiveLensActive(true);
    }, 50);
  };

  const handleLensPointerUp = () => {
    if (lensPressTimerRef.current) {
      clearTimeout(lensPressTimerRef.current);
    }
  };

  const toggleArchiveLens = () => {
    sound.playArchiveLens();
    triggerHaptic('medium');
    setIsArchiveLensActive(prev => !prev);
  };

  // Get clue type icon & badge
  const getClueIcon = (clueType?: string) => {
    switch (clueType) {
      case 'stolen_relic':
        return <Sun className="w-3.5 h-3.5 text-amber-400" />;
      case 'sabotage':
        return <Compass className="w-3.5 h-3.5 text-blue-400" />;
      case 'dark_seal':
        return <Lock className="w-3.5 h-3.5 text-purple-400" />;
      case 'torn_evidence':
        return <FileText className="w-3.5 h-3.5 text-amber-300" />;
      default:
        return <Shield className="w-3.5 h-3.5 text-amber-400" />;
    }
  };

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative w-full flex-1 min-h-0 bg-[#070402] overflow-hidden flex flex-col items-center justify-between p-1 sm:p-2 select-none transition-all duration-75 ${
        isShaking ? 'animate-screen-shake ring-2 ring-red-500/60' : ''
      }`}
      style={{ cursor: scale > 1 ? (isDraggingRef.current ? 'grabbing' : 'grab') : 'crosshair' }}
    >
      {/* MODE A: AAA IMMERSIVE CRIME SCENE (FULL SCREEN 100% VIEWPORT) */}
      {viewMode === 'crime_scene' ? (
        <div
          className={`relative flex-1 min-h-0 w-full flex items-center justify-center overflow-hidden rounded-2xl archeo-cage transition-all duration-300 ${
            isTimeFrozen
              ? 'border-cyan-400 shadow-[inset_0_0_40px_rgba(34,211,238,0.4),0_0_30px_rgba(56,189,248,0.3)] ring-2 ring-cyan-400/60'
              : 'border-amber-900/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          }`}
        >
          {/* 4 Antique Brass Corner Brackets */}
          <div className="brass-corner-bracket brass-corner-tl pointer-events-none" />
          <div className="brass-corner-bracket brass-corner-tr pointer-events-none" />
          <div className="brass-corner-bracket brass-corner-bl pointer-events-none" />
          <div className="brass-corner-bracket brass-corner-br pointer-events-none" />

          {/* Top Unified HUD Bar: Status on Left, Controls on Right (Non-overlapping) */}
          <div className="absolute top-1.5 sm:top-2.5 inset-x-1.5 sm:inset-x-3 z-25 flex items-center justify-between gap-1 pointer-events-none">
            {/* Left Status Badge */}
            <div className="pointer-events-auto flex items-center gap-1 min-w-0">
              {isArchiveLensActive ? (
                <div className="cartouche-plate px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-[9px] sm:text-xs font-black text-amber-300 flex items-center gap-1 shadow-md border border-amber-400/80 font-serif animate-pulse bg-amber-950/95 backdrop-blur-md">
                  <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 shrink-0" />
                  <span className="tracking-wide hidden sm:inline">LENTE D'ARCHIVIO: STATO 1928</span>
                  <span className="tracking-wide sm:hidden">ORIGINALE</span>
                </div>
              ) : (
                <div className="cartouche-plate px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-[9px] sm:text-xs font-black text-emerald-300 flex items-center gap-1 shadow-md border border-emerald-500/70 font-serif bg-stone-950/90 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping shrink-0" />
                  <span className="tracking-wide hidden sm:inline">SCENA DEL CRIMINE</span>
                  <span className="tracking-wide sm:hidden">SABOTAGGIO</span>
                </div>
              )}

              {isTimeFrozen && (
                <div className="px-1.5 sm:px-2 py-0.5 bg-cyan-950/90 border border-cyan-400/80 rounded-full text-[9px] sm:text-[10px] font-bold text-cyan-300 flex items-center gap-1 animate-pulse shadow-md">
                  <span>❄️</span>
                </div>
              )}
            </div>

            {/* Right: Atmosphere Diurnal Cycle + Vintage Plate Filter + Quick Switcher to Split View */}
            <div className="pointer-events-auto flex items-center gap-1 sm:gap-1.5 shrink-0">
              {/* Diurnal Lighting Mode Pill */}
              <button
                onClick={cycleAtmosphere}
                className="p-1 sm:px-2.5 sm:py-1 rounded-full bg-[#20140a]/90 hover:bg-[#2d1b0e] text-amber-200 border border-amber-500/60 shadow-md text-[10px] sm:text-xs font-serif font-semibold flex items-center gap-1 active:scale-95 transition cursor-pointer"
                title={`Ciclo Orario Spedizione: ${atmosphereMode.toUpperCase()} (Clicca per cambiare ora del giorno)`}
              >
                {atmosphereMode === 'dawn' && <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '24s' }} />}
                {atmosphereMode === 'noon' && <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-300" />}
                {atmosphereMode === 'dusk' && <Sunset className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400" />}
                {atmosphereMode === 'lantern' && <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 animate-pulse" />}
                <span className="hidden sm:inline">
                  {atmosphereMode === 'dawn' && 'Alba'}
                  {atmosphereMode === 'noon' && 'Mezzogiorno'}
                  {atmosphereMode === 'dusk' && 'Crepuscolo'}
                  {atmosphereMode === 'lantern' && 'Lanterna'}
                </span>
              </button>

              {/* Historical Plate Filter Pill */}
              <button
                onClick={cyclePhotoFilter}
                className="p-1 sm:px-2.5 sm:py-1 rounded-full bg-[#20140a]/90 hover:bg-[#2d1b0e] text-amber-200 border border-amber-500/60 shadow-md text-[10px] sm:text-xs font-serif font-semibold flex items-center gap-1 active:scale-95 transition cursor-pointer"
                title={`Filtro Lastra Archeologica: ${photoFilter.toUpperCase()} (Clicca per cambiare emulsione fotografica)`}
              >
                <Camera className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300" />
                <span className="hidden sm:inline">
                  {photoFilter === 'silver' && "Bromuro"}
                  {photoFilter === 'cyanotype' && 'Cianotipia'}
                  {photoFilter === 'autochrome' && 'Autocromia'}
                  {photoFilter === 'natural' && 'HD'}
                </span>
              </button>

              {/* Quick Switcher to Split View */}
              <button
                onClick={() => setViewMode(v => (v === 'crime_scene' ? 'split' : 'crime_scene'))}
                className="px-2 sm:px-2.5 py-1 rounded-full bg-amber-950/90 hover:bg-amber-900 text-amber-200 border border-amber-500/70 shadow-md text-[9px] sm:text-xs font-serif font-bold flex items-center gap-1 active:scale-95 transition cursor-pointer"
                title="Passa a Vista Doppia Confronto (A / B)"
              >
                <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                <span className="text-[9px] sm:text-xs">A/B</span>
              </button>
            </div>
          </div>

          {/* Zoom & Pan Container */}
          <div
            className="relative w-full h-full flex items-center justify-center transition-transform duration-75 ease-out origin-center"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
            }}
          >
            {/* Aspect Ratio Bounded Stage with 3D Tactile Photo Tilt */}
            <div
              className="relative max-w-full max-h-full aspect-[1200/896] flex items-center justify-center shrink-0 cursor-crosshair group transition-transform duration-150 ease-out"
              style={{
                transform: scale === 1 ? `perspective(1000px) rotateX(${photoTilt.x}deg) rotateY(${photoTilt.y}deg)` : undefined,
              }}
              onMouseMove={handleMouseMoveTilt}
              onMouseLeave={handleMouseLeaveTilt}
              onClick={e => handleStageClick(e, isArchiveLensActive ? 0 : 1)}
            >
              {/* PRIMARY CRIME SCENE IMAGE (Image B: Sabotaged Site) */}
              <img
                ref={imgRefMain}
                src={assetUrl(imageB)}
                alt="Scena del Crimine Archeologica"
                draggable={false}
                onError={() => {
                  console.warn('Image B failed to load:', imageB);
                }}
                className="w-full h-full object-contain rounded-xl select-none pointer-events-auto block transition-all duration-500"
                style={{ filter: getPhotoFilterStyle() }}
              />

              {/* Atmospheric Diurnal Overlays */}
              {atmosphereMode === 'lantern' && (
                <div
                  className="absolute inset-0 pointer-events-none rounded-xl z-20 transition-all duration-300"
                  style={{
                    background: `radial-gradient(circle 240px at ${lanternPos.x}px ${lanternPos.y}px, rgba(255, 235, 170, 0.08) 0%, rgba(220, 140, 20, 0.18) 40%, rgba(10, 6, 2, 0.82) 75%, rgba(3, 2, 1, 0.94) 100%)`,
                    boxShadow: 'inset 0 0 100px rgba(0,0,0,0.95)',
                  }}
                >
                  {/* Subtle Gas Lamp Flicker Aura */}
                  <div
                    className="absolute w-36 h-36 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-pulse"
                    style={{
                      left: lanternPos.x,
                      top: lanternPos.y,
                      background: 'radial-gradient(circle, rgba(255, 220, 120, 0.25) 0%, transparent 70%)',
                      animationDuration: '2s',
                    }}
                  />
                </div>
              )}

              {atmosphereMode === 'dawn' && (
                <div
                  className="absolute inset-0 pointer-events-none rounded-xl z-15 transition-opacity duration-500 opacity-20 mix-blend-screen"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,215,110,0.45) 0%, rgba(255,160,30,0.15) 45%, transparent 75%)',
                  }}
                />
              )}

              {atmosphereMode === 'dusk' && (
                <div
                  className="absolute inset-0 pointer-events-none rounded-xl z-15 transition-opacity duration-500 opacity-25 mix-blend-color-burn"
                  style={{
                    background: 'linear-gradient(180deg, rgba(160,50,90,0.3) 0%, rgba(220,110,30,0.18) 50%, rgba(50,20,40,0.35) 100%)',
                  }}
                />
              )}

              {/* OVERLAY: PRISTINE ARCHIVE IMAGE (Image A) with Crossfade & Vintage Vignette */}
              <div
                className={`absolute inset-0 rounded-xl overflow-hidden pointer-events-none transition-opacity duration-300 ${
                  isArchiveLensActive ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={assetUrl(imageA)}
                  alt="Archivio Originale 1928"
                  draggable={false}
                  onError={() => {
                    console.warn('Image A failed to load:', imageA);
                  }}
                  className="w-full h-full object-contain rounded-xl select-none block transition-all duration-500"
                  style={{ filter: getPhotoFilterStyle() }}
                />
                {/* Archival Film Vignette & Watermark */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 shadow-[inset_0_0_90px_rgba(0,0,0,0.85)] pointer-events-none" />
                <div className="absolute bottom-4 right-4 pointer-events-none px-2 py-0.5 rounded bg-black/70 border border-amber-400/40 text-[9px] font-mono tracking-widest text-amber-300/80 uppercase">
                  REGISTRO ACCADEMICO OXFORD #1928-A
                </div>
              </div>

              {/* Living Atmospheric Particle Engine */}
              <AmbientParticles imageIndex={1} hasSteam={false} chapterNumber={chapterNumber} />

              {/* Secret Ancient Collectible Relic */}
              {hiddenRelic && (
                <HiddenArtifactSpot
                  relic={hiddenRelic}
                  isDiscovered={isRelicDiscovered}
                  onDiscover={onDiscoverRelic || (() => {})}
                />
              )}

              {/* Astrolabe Radar Quadrant Highlight */}
              {activeRadar && !foundDifferenceIds.includes(activeRadar.targetDiffId) && (
                <div
                  className="absolute pointer-events-none z-20 border-2 border-dashed border-amber-400 bg-amber-400/20 rounded-2xl animate-pulse shadow-[0_0_30px_rgba(251,191,36,0.7)]"
                  style={{
                    left: `${activeRadar.x}%`,
                    top: `${activeRadar.y}%`,
                    width: `${activeRadar.width}%`,
                    height: `${activeRadar.height}%`,
                  }}
                >
                  <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-amber-950/90 border border-amber-400/70 text-[10px] text-amber-300 font-bold flex items-center gap-1.5 shadow-lg">
                    <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                    <span>Settore Rilevato dall'Astrolabio</span>
                  </div>
                </div>
              )}

              {/* Render Found Evidence Markers: Discreet, compact checkmark ring */}
              {differences
                .filter(d => foundDifferenceIds.includes(d.id))
                .map((diff, idx) => (
                  <div
                    key={`evidence_${diff.id}`}
                    className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-20 group/marker animate-fade-in"
                    style={{ left: `${diff.x}%`, top: `${diff.y}%` }}
                    onClick={e => {
                      e.stopPropagation();
                      setSelectedClueId(diff.id);
                    }}
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-black/70 border-2 border-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)] flex items-center justify-center backdrop-blur-[1px] active:scale-90 hover:scale-125 transition-transform cursor-pointer">
                        <CheckCircle2 className="w-3 h-3 text-emerald-300 stroke-[3]" />
                      </div>

                      {/* Tooltip on hover */}
                      <div className="absolute bottom-full mb-1.5 px-2 py-0.5 rounded-md bg-stone-950/95 border border-emerald-500/70 shadow-lg text-[9px] text-emerald-200 font-serif font-bold whitespace-nowrap pointer-events-none opacity-0 group-hover/marker:opacity-100 transition-opacity duration-150 z-30">
                        #{idx + 1} {diff.name}
                      </div>
                    </div>
                  </div>
                ))}

              {/* Active Hint Spotlight */}
              {activeHint && !foundDifferenceIds.includes(activeHint.id) && (
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-25 animate-hint-glow"
                  style={{ left: `${activeHint.x}%`, top: `${activeHint.y}%` }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-3 border-amber-400 bg-amber-400/25 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.9)]">
                    <Sparkles className="w-6 h-6 text-amber-300 animate-spin" />
                  </div>
                </div>
              )}

              {/* Dynamic Inactivity Environmental Assist (Difficoltà Adattiva Dinamica - Shimmer Ambientale) */}
              {idleAssistDiff && !activeHint && !foundDifferenceIds.includes(idleAssistDiff.id) && (
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
                  style={{ left: `${idleAssistDiff.x}%`, top: `${idleAssistDiff.y}%` }}
                >
                  <div className="relative flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-amber-300/40 bg-amber-400/10 animate-ping opacity-60" />
                    <div className="absolute w-8 h-8 rounded-full border border-amber-400/70 bg-amber-300/20 shadow-[0_0_20px_rgba(251,191,36,0.5)] animate-pulse" />
                    <Sparkles className="absolute w-3.5 h-3.5 text-amber-300/80 animate-spin" />
                  </div>
                </div>
              )}

              {/* Floating Discovery Celebration Pops */}
              {discoveryPops.map(pop => (
                <div
                  key={pop.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-35 flex flex-col items-center animate-coin-float"
                  style={{ left: `${pop.x}%`, top: `${pop.y}%` }}
                >
                  <div className="px-3 py-1 rounded-full bg-amber-500 text-stone-950 font-black text-xs shadow-[0_0_20px_#f59e0b] border border-yellow-200 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-stone-950" />
                    <span>{pop.text}</span>
                  </div>
                  <span className="text-[10px] text-amber-200 font-bold drop-shadow mt-0.5">
                    {pop.name}
                  </span>
                </div>
              ))}

              {/* Error Ripples on Crime Scene */}
              {errorRipples.map(r => (
                <div
                  key={r.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 flex items-center justify-center animate-error-ripple"
                  style={{ left: `${r.x}%`, top: `${r.y}%` }}
                >
                  <div className="w-10 h-10 rounded-full border-2 border-red-500 bg-red-500/35 flex items-center justify-center shadow-2xl ring-2 ring-red-400/60">
                    <X className="w-6 h-6 text-red-400 stroke-[3]" />
                  </div>
                </div>
              ))}

              {/* Crystalline Shield Parried Effect */}
              {shieldBlockedNotice && (
                <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center animate-pulse">
                  <div className="w-40 h-40 rounded-full border-4 border-indigo-400 bg-indigo-500/20 shadow-[0_0_50px_rgba(99,102,241,0.8)] flex flex-col items-center justify-center text-indigo-200">
                    <Shield className="w-16 h-16 text-indigo-300 fill-indigo-400/40 animate-bounce" />
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-100 mt-1">
                      PARATO!
                    </span>
                  </div>
                </div>
              )}
              {/* 1928 Magnesium Powder Flash Clue Celebration */}
              {magnesiumFlash && (
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-40"
                  style={{ left: `${magnesiumFlash.x}%`, top: `${magnesiumFlash.y}%` }}
                >
                  <div
                    className="w-28 h-28 rounded-full animate-ping opacity-95 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,240,160,0.9) 35%, rgba(245,160,20,0.4) 65%, transparent 85%)',
                      animationDuration: '0.45s',
                    }}
                  />
                  <div className="absolute inset-0 m-auto w-7 h-7 flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-yellow-100 drop-shadow-[0_0_12px_#ffffff] animate-spin" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* INTERACTIVE FLOATING TOOLBAR: Lente d'Archivio + Lente d'Ingrandimento + Zoom (Compact on mobile) */}
          <div className="absolute bottom-1.5 sm:bottom-3 right-1.5 sm:right-3 z-30 flex items-center sm:flex-col sm:items-end gap-1 sm:gap-2 pointer-events-auto">
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Brass Handheld Magnifying Loupe Toggle */}
              <button
                onClick={toggleLoupe}
                className={`group relative flex items-center gap-1.5 p-1.5 sm:px-3 sm:py-2.5 rounded-xl sm:rounded-2xl border shadow-md sm:shadow-[0_8px_25px_rgba(0,0,0,0.8)] active:scale-95 transition-all duration-200 cursor-pointer select-none ${
                  isLoupeActive
                    ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 border-yellow-200 text-stone-950 shadow-[0_0_20px_rgba(245,158,11,0.9)] ring-2 ring-amber-300'
                    : 'bg-[#211409]/95 hover:bg-[#2e1c0d] border-amber-500/60 text-amber-200 hover:border-amber-400'
                }`}
                title="Attiva la Lente d'Ingrandimento Vittoriana in Ottone (2.5x)"
              >
                <div
                  className={`w-6 sm:w-7 h-6 sm:h-7 rounded-full flex items-center justify-center ${
                    isLoupeActive ? 'bg-stone-900 text-amber-300' : 'bg-amber-500/20 text-amber-400'
                  }`}
                >
                  <Search className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </div>
                <div className="hidden sm:flex flex-col text-left leading-none">
                  <span className="text-[11px] sm:text-xs font-black font-serif uppercase tracking-wider flex items-center gap-1">
                    <span>{isLoupeActive ? 'Riponi Lente' : 'Lente 2.5×'}</span>
                  </span>
                  <span
                    className={`text-[8px] sm:text-[9px] font-sans mt-0.5 ${
                      isLoupeActive ? 'text-stone-950 font-bold' : 'text-amber-300/70'
                    }`}
                  >
                    {isLoupeActive ? 'In uso sulla scena' : 'Ottica in ottone'}
                  </span>
                </div>
              </button>

              {/* Lente d'Archivio Toggle */}
              <button
                onClick={toggleArchiveLens}
                onPointerDown={handleLensPointerDown}
                onPointerUp={handleLensPointerUp}
                className={`group relative flex items-center gap-1.5 p-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl border shadow-md sm:shadow-[0_8px_25px_rgba(0,0,0,0.8)] active:scale-95 transition-all duration-200 cursor-pointer select-none ${
                  isArchiveLensActive
                    ? 'bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 border-yellow-200 text-stone-950 shadow-[0_0_20px_rgba(245,158,11,0.9)] ring-2 ring-amber-300'
                    : 'bg-gradient-to-r from-[#2c1a0e]/95 via-[#3d2513]/95 to-[#2c1a0e]/95 hover:from-[#3a2212] border-amber-500/60 text-amber-200 hover:border-amber-400'
                }`}
                title="Tieni premuto, clicca o premi [Spazio] per visualizzare la fotografia originale del 1928"
              >
                <div
                  className={`w-6 sm:w-7 h-6 sm:h-7 rounded-full flex items-center justify-center ${
                    isArchiveLensActive ? 'bg-amber-950 text-amber-300' : 'bg-amber-500/20 text-amber-400'
                  }`}
                >
                  {isArchiveLensActive ? (
                    <EyeOff className="w-3.5 sm:w-4 h-3.5 sm:h-4 animate-pulse" />
                  ) : (
                    <Eye className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  )}
                </div>

                <div className="hidden sm:flex flex-col text-left leading-none">
                  <span className="text-[11px] sm:text-xs font-black font-serif uppercase tracking-wider flex items-center gap-1">
                    <span>{isArchiveLensActive ? 'Torna alla Scena' : "Lente d'Archivio"}</span>
                    <span className="hidden sm:inline-block px-1 py-0.2 rounded bg-black/40 text-[8px] font-mono border border-amber-400/40">
                      Spazio
                    </span>
                  </span>
                  <span
                    className={`text-[8px] sm:text-[9px] font-sans mt-0.5 ${
                      isArchiveLensActive ? 'text-amber-950 font-bold' : 'text-amber-300/70'
                    }`}
                  >
                    {isArchiveLensActive ? 'Mostra scena sabotata' : 'Vedi prima del furto'}
                  </span>
                </div>
              </button>
            </div>

            {/* Floating Minimal Zoom Controls */}
            <div className="flex items-center gap-0.5 sm:gap-1 bg-[#1a0f07]/90 backdrop-blur-md p-0.5 sm:p-1 rounded-full border border-amber-500/40 shadow-lg">
              <button
                onClick={handleZoomOut}
                disabled={scale <= 1}
                className="p-1 rounded-full hover:bg-stone-800 disabled:opacity-30 text-amber-300 active:scale-90 transition-all cursor-pointer"
                title="Zoom Indietro"
              >
                <ZoomOut className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>

              <span className="text-[9px] sm:text-[10px] font-bold px-0.5 sm:px-1 text-amber-200 min-w-[24px] sm:min-w-[28px] text-center font-mono">
                {Math.round(scale * 100)}%
              </span>

              <button
                onClick={handleZoomIn}
                disabled={scale >= 4}
                className="p-1 rounded-full hover:bg-stone-800 disabled:opacity-30 text-amber-300 active:scale-90 transition-all cursor-pointer"
                title="Zoom Avanti"
              >
                <ZoomIn className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>

              {scale > 1 && (
                <button
                  onClick={handleResetZoom}
                  className="p-1 rounded-full bg-amber-500/30 hover:bg-amber-500/50 text-amber-200 active:scale-90 transition-all cursor-pointer"
                  title="Reimposta (100%)"
                >
                  <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* MODE B: CLASSIC SPLIT SCREEN (FALLBACK DUAL VIEW) */
        <div className="relative flex-1 min-h-0 w-full flex flex-col md:flex-row items-center justify-between gap-1 overflow-hidden">
          {/* Viewport 1 (Originale / Image A) */}
          <div className="relative flex-1 min-h-0 w-full md:h-full flex items-center justify-center overflow-hidden rounded-xl archeo-cage">
            <div className="brass-corner-bracket brass-corner-tl pointer-events-none" />
            <div className="brass-corner-bracket brass-corner-tr pointer-events-none" />
            <div className="brass-corner-bracket brass-corner-bl pointer-events-none" />
            <div className="brass-corner-bracket brass-corner-br pointer-events-none" />

            <div className="absolute top-2 left-2 z-20 cartouche-plate px-2 py-0.5 rounded-lg text-[9px] font-bold text-amber-300 pointer-events-none flex items-center gap-1 shadow-md border border-amber-500/60 font-serif">
              <Compass className="w-3 h-3 text-amber-400" />
              <span>ORIGINALE (ARCHIVIO A)</span>
            </div>

            <div
              className="relative w-full h-full flex items-center justify-center transition-transform duration-75 ease-out origin-center"
              style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})` }}
            >
              <div
                className="relative max-w-full max-h-full aspect-[1200/896] flex items-center justify-center shrink-0 cursor-crosshair"
                onClick={e => handleStageClick(e, 0)}
              >
                <img
                  ref={imgRefA}
                  src={assetUrl(imageA)}
                  alt="Scena A"
                  draggable={false}
                  onError={() => {
                    console.warn('Split Image A failed:', imageA);
                  }}
                  className="w-full h-full object-contain rounded-lg select-none pointer-events-auto block"
                />
                <AmbientParticles imageIndex={0} hasSteam={false} chapterNumber={chapterNumber} />
              </div>
            </div>
          </div>

          {/* Separator / Switcher */}
          <div className="w-full md:w-auto flex md:flex-col items-center justify-between px-2 py-0.5 shrink-0">
            <div className="h-[1px] md:h-8 flex-1 md:w-[1px] bg-amber-500/30" />
            <button
              onClick={() => setViewMode('crime_scene')}
              className="mx-1 px-2.5 py-1 rounded-full bg-amber-950/90 border border-amber-500/70 text-amber-200 text-[10px] font-serif font-bold hover:bg-amber-900 transition flex items-center gap-1.5 cursor-pointer shadow-md active:scale-95 shrink-0"
            >
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>Scena Singola</span>
            </button>
            <div className="h-[1px] md:h-8 flex-1 md:w-[1px] bg-amber-500/30" />
          </div>

          {/* Viewport 2 (Sito Sabotato / Image B) */}
          <div className="relative flex-1 min-h-0 w-full md:h-full flex items-center justify-center overflow-hidden rounded-xl archeo-cage">
            <div className="brass-corner-bracket brass-corner-tl pointer-events-none" />
            <div className="brass-corner-bracket brass-corner-tr pointer-events-none" />
            <div className="brass-corner-bracket brass-corner-bl pointer-events-none" />
            <div className="brass-corner-bracket brass-corner-br pointer-events-none" />

            <div className="absolute top-2 left-2 z-20 cartouche-plate px-2 py-0.5 rounded-lg text-[9px] font-bold text-emerald-300 pointer-events-none flex items-center gap-1 shadow-md border border-emerald-500/60 font-serif">
              <MapPin className="w-3 h-3 text-emerald-400" />
              <span>SITO SABOTATO (B)</span>
            </div>

            <div
              className="relative w-full h-full flex items-center justify-center transition-transform duration-75 ease-out origin-center"
              style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})` }}
            >
              <div
                className="relative max-w-full max-h-full aspect-[1200/896] flex items-center justify-center shrink-0 cursor-crosshair"
                onClick={e => handleStageClick(e, 1)}
              >
                <img
                  ref={imgRefB}
                  src={assetUrl(imageB)}
                  alt="Scena B"
                  draggable={false}
                  onError={() => {
                    console.warn('Split Image B failed:', imageB);
                  }}
                  className="w-full h-full object-contain rounded-lg select-none pointer-events-auto block"
                />
                <AmbientParticles imageIndex={1} hasSteam={false} chapterNumber={chapterNumber} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE COMPACT EVIDENCE STRIP (sm:hidden, saves 60px of vertical space) */}
      <div className="w-full shrink-0 flex sm:hidden items-center justify-between px-2 py-0.5 bg-gradient-to-r from-[#170e07]/90 via-[#24160a]/90 to-[#170e07]/90 rounded-lg border border-amber-600/40 shadow-sm mt-0.5 text-[10px]">
        <div className="flex items-center gap-1.5 font-serif text-amber-300 font-bold">
          <span>Prove:</span>
          <span className="text-amber-100 font-mono bg-amber-500/20 px-1.5 py-0.2 rounded border border-amber-500/30">
            {foundDifferenceIds.length}/{differences.length}
          </span>
        </div>
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5 max-w-[65%]">
          {differences.map((diff, index) => {
            const isFound = foundDifferenceIds.includes(diff.id);
            return (
              <button
                key={diff.id}
                type="button"
                onClick={() => {
                  if (isFound) setInspectingDiff(diff);
                }}
                className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-mono transition-all ${
                  isFound
                    ? 'bg-amber-400 text-stone-950 font-bold shadow-sm ring-1 ring-amber-200 cursor-pointer active:scale-95'
                    : 'bg-stone-900 border border-stone-700 text-stone-500'
                }`}
                title={isFound ? `${diff.name} (Tocca per ispezionare)` : `Prova #${index + 1}`}
              >
                {isFound ? '✓' : index + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* DESKTOP / TABLET RICH PARCHMENT TRAY (hidden sm:flex) */}
      <div className="hidden sm:flex w-full shrink-0 bg-gradient-to-r from-[#170e07] via-[#24160a] to-[#170e07] rounded-xl border border-amber-600/50 p-1.5 shadow-xl mt-1 flex-col gap-1">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 font-serif">
              Prove della Mano Oscura
            </span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono font-bold">
              {foundDifferenceIds.length}/{differences.length}
            </span>
          </div>

          <span className="text-[9px] text-amber-400/70 font-sans hidden sm:inline">
            Doppio tocco sulla scena per zoomare • Tieni premuto [Spazio] per la Lente d'Archivio
          </span>
        </div>

        {/* Dynamic Clue Badges Row adapting cleanly */}
        <div
          className="grid gap-1 w-full"
          style={{
            gridTemplateColumns: `repeat(${Math.max(4, differences.length)}, minmax(0, 1fr))`,
          }}
        >
          {differences.map((diff, index) => {
            const isFound = foundDifferenceIds.includes(diff.id);
            const isSelected = selectedClueId === diff.id;

            return (
              <button
                key={diff.id}
                type="button"
                onClick={() => {
                  setSelectedClueId(diff.id);
                  if (isFound) {
                    setInspectingDiff(diff);
                  } else {
                    sound.playTap();
                  }
                }}
                className={`flex flex-col items-center justify-center p-1 rounded-lg border transition-all text-center select-none cursor-pointer ${
                  isFound
                    ? 'bg-gradient-to-b from-amber-900/60 to-yellow-950/80 border-amber-400/80 shadow-[0_0_8px_rgba(245,158,11,0.4)] ring-1 ring-amber-300/50 hover:brightness-110 active:scale-95'
                    : 'bg-black/40 border-stone-800 text-stone-500 hover:border-amber-900/50'
                } ${isSelected ? 'ring-2 ring-yellow-400' : ''}`}
                title={isFound ? `${diff.name} (Tocca per ispezionare la scheda)` : `Prova #${index + 1} ancora nascosta`}
              >
                <div className="flex items-center gap-1 mb-0.5">
                  {isFound ? (
                    getClueIcon(diff.clueType)
                  ) : (
                    <span className="text-[10px] text-stone-500 font-mono">#{index + 1}</span>
                  )}
                  {isFound && <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />}
                </div>

                <span
                  className={`text-[8px] font-serif leading-tight truncate max-w-full ${
                    isFound ? 'text-amber-200 font-bold' : 'text-stone-500'
                  }`}
                >
                  {isFound ? diff.name : 'Occultata'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Clue Inspector Banner */}
        {selectedClueId && (
          <div className="flex items-center justify-between bg-black/75 border border-amber-500/50 rounded-lg px-2.5 py-1 text-[10px] text-amber-200 animate-fade-in shadow-lg">
            <div className="flex items-center gap-1.5 truncate flex-1 min-w-0 mr-2">
              <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              {(() => {
                const sel = differences.find(d => d.id === selectedClueId);
                const isFound = foundDifferenceIds.includes(selectedClueId);
                if (!sel) return null;
                return (
                  <span className="truncate">
                    <strong className="text-amber-300">{sel.name}:</strong>{' '}
                    {isFound
                      ? sel.loreClue
                      : "Usa la Lente d'Archivio per individuare questa manomissione sulla scena!"}
                  </span>
                );
              })()}
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {foundDifferenceIds.includes(selectedClueId) && (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      const sel = differences.find(d => d.id === selectedClueId);
                      if (sel) setInspectingDiff(sel);
                    }}
                    className="px-2 py-0.5 rounded bg-amber-600/40 hover:bg-amber-600/60 border border-amber-400/60 text-[9px] font-bold text-amber-200 flex items-center gap-1 transition cursor-pointer"
                    title="Apri scheda vintage polaroid 1928"
                  >
                    <FileText className="w-2.5 h-2.5 text-amber-300" />
                    <span>Scheda</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const sel = differences.find(d => d.id === selectedClueId);
                      if (sel) handleAimClue(sel);
                    }}
                    className="px-2 py-0.5 rounded bg-amber-500/30 hover:bg-amber-500/50 border border-amber-400/50 text-[9px] font-bold text-amber-300 flex items-center gap-1 transition cursor-pointer"
                    title="Centra telecamera su questa prova"
                  >
                    <Maximize2 className="w-2.5 h-2.5" />
                    <span>Inquadra</span>
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={() => setSelectedClueId(null)}
                className="text-stone-400 hover:text-white text-xs cursor-pointer p-0.5"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Victorian Brass Magnifying Loupe (2.5x Handheld) */}
      {isLoupeActive && viewMode === 'crime_scene' && (
        <BrassMagnifyingLoupe
          imageSrc={assetUrl(isArchiveLensActive ? imageA : imageB)}
          containerRect={containerRef.current?.getBoundingClientRect() ?? null}
          imgRect={imgRefMain.current?.getBoundingClientRect() ?? null}
          pointerPos={loupePos}
          onClose={() => {
            setIsLoupeActive(false);
            sound.playLoupeToggle(false);
          }}
          onLensClick={handleLoupeClick}
          magnification={2.5}
          filterStyle={getPhotoFilterStyle()}
        />
      )}

      {/* 1928 Vintage Specimen Evidence Inspection Dossier */}
      <EvidenceInspectModal
        difference={inspectingDiff}
        isOpen={!!inspectingDiff}
        onClose={() => setInspectingDiff(null)}
        onFocusScene={(x, y) => {
          handleAimClue({ x, y, id: inspectingDiff?.id || '', name: '', loreClue: '' } as Difference);
        }}
        index={inspectingDiff ? differences.findIndex(d => d.id === inspectingDiff.id) : 0}
        total={differences.length}
        chapterNumber={chapterNumber}
      />
    </div>
  );
};
