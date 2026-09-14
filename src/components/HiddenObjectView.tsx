import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Sun,
  Sunset,
  Flame,
  Compass,
  MapPin,
  Shield,
  Layers,
  Scroll,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Search,
} from 'lucide-react';
import { AmbientParticles } from './AmbientParticles';
import { HiddenArtifactSpot } from './HiddenArtifactSpot';
import { EvidenceInspectModal } from './EvidenceInspectModal';
import type { Difference, RadarQuadrant } from '../types/game';
import type { CollectibleRelic } from '../data/collectiblesData';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { assetUrl } from '../utils/assetUrl';

interface HiddenObjectViewProps {
  imageA: string;
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
  comboStreak?: number;
  shieldBlockedNotice?: boolean;
  chapterNumber?: number;
  levelId?: number;
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

export const HiddenObjectView: React.FC<HiddenObjectViewProps> = ({
  imageA,
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
  levelId,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Pan & Zoom state
  const [scale, setScale] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Native Multi-Touch Pinch-to-Zoom tracking
  const touchStartDistRef = useRef<number | null>(null);
  const touchStartScaleRef = useRef<number>(1);
  const touchStartPanRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const touchStartCenterRef = useRef<{ x: number; y: number } | null>(null);
  const singleTouchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const lastTapRef = useRef<{ time: number; x: number; y: number } | null>(null);

  // Mouse pan drag state for desktop
  const mouseDragStartRef = useRef<{ x: number; y: number } | null>(null);

  // Visual effects state
  const [errorRipples, setErrorRipples] = useState<ErrorRipple[]>([]);
  const [discoveryPops, setDiscoveryPops] = useState<DiscoveryPop[]>([]);
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [magnesiumFlash, setMagnesiumFlash] = useState<{ id: string; x: number; y: number } | null>(null);

  // Clue inspector modal
  const [inspectingDiff, setInspectingDiff] = useState<Difference | null>(null);

  // Selected riddle highlight in bottom tray & scroll refs
  const [selectedRiddleIndex, setSelectedRiddleIndex] = useState<number>(0);
  const [isGridExpanded, setIsGridExpanded] = useState<boolean>(false);
  const ribbonRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 1928 Brass Field Magnifier (Lente d'Ottone) state
  const [isMagnifierActive, setIsMagnifierActive] = useState<boolean>(false);
  const [magnifierPos, setMagnifierPos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [isMagnifierHovering, setIsMagnifierHovering] = useState<boolean>(false);

  // Diurnal Lighting Atmosphere
  const [atmosphereMode, setAtmosphereMode] = useState<'dawn' | 'noon' | 'dusk' | 'lantern'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('differenze_atmosphere');
      if (saved === 'dawn' || saved === 'noon' || saved === 'dusk' || saved === 'lantern') return saved;
    }
    return 'dawn';
  });

  // Photo Plate Emulsion Filter
  const [photoFilter, setPhotoFilter] = useState<'silver' | 'cyanotype' | 'autochrome' | 'natural'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('differenze_photofilter');
      if (saved === 'silver' || saved === 'cyanotype' || saved === 'autochrome' || saved === 'natural') return saved;
    }
    return 'silver';
  });

  // Reset viewport and ALWAYS start from riddle 0 with ribbon scrolled to left when image or levelId changes
  useEffect(() => {
    setScale(1);
    setPan({ x: 0, y: 0 });
    setSelectedRiddleIndex(0);
    setIsGridExpanded(false);
    if (ribbonRef.current) {
      ribbonRef.current.scrollLeft = 0;
    }
  }, [imageA, levelId]);

  // Smoothly scroll the selected riddle card into view whenever selectedRiddleIndex changes
  useEffect(() => {
    const cardEl = cardRefs.current[selectedRiddleIndex];
    if (cardEl && ribbonRef.current) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [selectedRiddleIndex]);

  // Automatically advance selected riddle to the first uncompleted one
  // CRITICAL: At the start of a level (0 found), rigidly guarantee starting on riddle #1 (index 0) with ribbon at 0!
  useEffect(() => {
    if (foundDifferenceIds.length === 0) {
      setSelectedRiddleIndex(0);
      if (ribbonRef.current) {
        ribbonRef.current.scrollLeft = 0;
      }
      return;
    }
    const firstUnfoundIdx = differences.findIndex(d => !foundDifferenceIds.includes(d.id));
    if (firstUnfoundIdx !== -1) {
      setSelectedRiddleIndex(firstUnfoundIdx);
    }
  }, [foundDifferenceIds, differences]);

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
    if (photoFilter === 'cyanotype') {
      filters.push('sepia(0.85)', 'hue-rotate(180deg)', 'saturate(2.4)', 'contrast(1.25)', 'brightness(0.92)');
    } else if (photoFilter === 'autochrome') {
      filters.push('sepia(0.35)', 'hue-rotate(8deg)', 'saturate(1.45)', 'contrast(1.1)', 'brightness(1.02)');
    } else if (photoFilter === 'natural') {
      filters.push('contrast(1.05)', 'brightness(1.0)');
    } else {
      filters.push('sepia(0.18)', 'contrast(1.12)', 'saturate(0.96)');
    }

    if (atmosphereMode === 'dawn') {
      filters.push('brightness(1.06)', 'contrast(1.05)');
    } else if (atmosphereMode === 'noon') {
      filters.push('brightness(1.02)', 'contrast(1.14)');
    } else if (atmosphereMode === 'dusk') {
      filters.push('brightness(0.92)', 'sepia(0.28)', 'hue-rotate(-12deg)', 'contrast(1.12)');
    } else if (atmosphereMode === 'lantern') {
      filters.push('brightness(0.82)', 'contrast(1.25)');
    }

    return filters.join(' ');
  };

  const handleResetZoom = useCallback(() => {
    setScale(1);
    setPan({ x: 0, y: 0 });
    sound.playTap();
    triggerHaptic('light');
  }, []);

  // Focus and zoom smoothly on a specific clue from the specimen dossier
  const handleFocusClueScene = useCallback((xPercent: number, yPercent: number) => {
    const targetScale = 2.4;
    const targetPanX = (50 - xPercent) * 3.0;
    const targetPanY = (50 - yPercent) * 3.0;
    const maxOffset = (targetScale - 1) * 280;
    setScale(targetScale);
    setPan({
      x: Math.max(-maxOffset, Math.min(maxOffset, targetPanX)),
      y: Math.max(-maxOffset, Math.min(maxOffset, targetPanY)),
    });
    setMagnesiumFlash({ id: String(Date.now()), x: xPercent, y: yPercent });
    setTimeout(() => {
      setMagnesiumFlash(null);
    }, 1200);
  }, []);

  // --- 1928 BRASS FIELD MAGNIFIER POSITION TRACKING ---
  const updateMagnifierPosition = useCallback((clientX: number, clientY: number) => {
    const imgElement = imgRef.current;
    if (!imgElement) return;
    const rect = imgElement.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const xPct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    const yPct = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));
    setMagnifierPos({ x: Number(xPct.toFixed(2)), y: Number(yPct.toFixed(2)) });
  }, []);

  // --- NATIVE MULTI-TOUCH PINCH-TO-ZOOM ENGINE ---
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      // 2 fingers: start pinch-to-zoom
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const dist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      touchStartDistRef.current = dist;
      touchStartScaleRef.current = scale;
      touchStartPanRef.current = { ...pan };
      touchStartCenterRef.current = {
        x: (t1.clientX + t2.clientX) / 2,
        y: (t1.clientY + t2.clientY) / 2,
      };
      isDraggingRef.current = false;
    } else if (e.touches.length === 1) {
      const t = e.touches[0];
      singleTouchStartRef.current = { x: t.clientX, y: t.clientY, time: Date.now() };
      touchStartPanRef.current = { ...pan };
      isDraggingRef.current = false;
      if (isMagnifierActive) {
        setIsMagnifierHovering(true);
        updateMagnifierPosition(t.clientX, t.clientY);
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isMagnifierActive && e.touches.length === 1) {
      const t = e.touches[0];
      setIsMagnifierHovering(true);
      updateMagnifierPosition(t.clientX, t.clientY);
    }
    if (e.touches.length === 2 && touchStartDistRef.current !== null) {
      // Pinch gesture
      e.preventDefault();
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const newDist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      const ratio = newDist / touchStartDistRef.current;
      const newScale = Math.min(4.0, Math.max(1.0, touchStartScaleRef.current * ratio));

      setScale(newScale);
      if (newScale <= 1.05) {
        setPan({ x: 0, y: 0 });
      } else {
        const maxOffset = (newScale - 1) * 280;
        setPan(prev => ({
          x: Math.max(-maxOffset, Math.min(maxOffset, prev.x)),
          y: Math.max(-maxOffset, Math.min(maxOffset, prev.y)),
        }));
      }
      isDraggingRef.current = true;
    } else if (e.touches.length === 1 && singleTouchStartRef.current && scale > 1) {
      // Pan gesture when zoomed
      const t = e.touches[0];
      const dx = t.clientX - singleTouchStartRef.current.x;
      const dy = t.clientY - singleTouchStartRef.current.y;
      if (Math.hypot(dx, dy) > 8) {
        isDraggingRef.current = true;
      }
      if (isDraggingRef.current) {
        e.preventDefault();
        const maxOffset = (scale - 1) * 280;
        setPan({
          x: Math.max(-maxOffset, Math.min(maxOffset, touchStartPanRef.current.x + dx)),
          y: Math.max(-maxOffset, Math.min(maxOffset, touchStartPanRef.current.y + dy)),
        });
      }
    }
  };

  const handleTouchEnd = () => {
    touchStartDistRef.current = null;
    touchStartCenterRef.current = null;
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 50);
  };

  // --- DESKTOP MOUSE ZOOM & PAN ---
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.25 : 0.25;
    setScale(s => {
      const next = Math.min(4.0, Math.max(1.0, Number((s + delta).toFixed(2))));
      if (next <= 1.05) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      mouseDragStartRef.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
      isDraggingRef.current = false;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMagnifierActive) {
      updateMagnifierPosition(e.clientX, e.clientY);
    }
    if (mouseDragStartRef.current && scale > 1) {
      isDraggingRef.current = true;
      const newX = e.clientX - mouseDragStartRef.current.x;
      const newY = e.clientY - mouseDragStartRef.current.y;
      const maxOffset = (scale - 1) * 280;
      setPan({
        x: Math.max(-maxOffset, Math.min(maxOffset, newX)),
        y: Math.max(-maxOffset, Math.min(maxOffset, newY)),
      });
    }
  };

  const handleMouseUp = () => {
    mouseDragStartRef.current = null;
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 50);
  };

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

  // Tap Detection on the Scene
  const handleStageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDraggingRef.current) return;
    const imgElement = imgRef.current;
    if (!imgElement) return;

    const rect = imgElement.getBoundingClientRect();
    const clickXPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const clickYPercent = ((e.clientY - rect.top) / rect.height) * 100;

    // Double-tap to zoom in (2.5x) or zoom out back to 1.0x
    const now = Date.now();
    if (
      lastTapRef.current &&
      now - lastTapRef.current.time < 350 &&
      Math.hypot(e.clientX - lastTapRef.current.x, e.clientY - lastTapRef.current.y) < 35
    ) {
      lastTapRef.current = null;
      if (scale > 1.1) {
        handleResetZoom();
      } else {
        const targetX = (50 - clickXPercent) * 3.0;
        const targetY = (50 - clickYPercent) * 3.0;
        setScale(2.5);
        setPan({ x: targetX, y: targetY });
        sound.playTap();
        triggerHaptic('medium');
      }
      return;
    }
    lastTapRef.current = { time: now, x: e.clientX, y: e.clientY };

    // Check hit against all unfound clues:
    // Finds the closest unfound clue whose tolerance contains the tap point.
    // Nearest-neighbor matching guarantees that tapping directly on an object will ALWAYS
    // select that object, and adjacent objects will never steal or block clicks from each other!
    let matchedDiff: Difference | null = null;
    let minDistance = Infinity;

    for (const diff of differences) {
      if (foundDifferenceIds.includes(diff.id)) continue;
      const tolerance = Math.min(diff.radius || 5.5, 6.5);
      const dx = clickXPercent - diff.x;
      const dy = clickYPercent - diff.y;
      const dist = Math.hypot(dx, dy);

      if (dist <= tolerance && dist < minDistance) {
        minDistance = dist;
        matchedDiff = diff;
      }
    }

    if (matchedDiff) {
      // 1928 Magnesium Flash Celebration
      setMagnesiumFlash({ id: String(Date.now()), x: clickXPercent, y: clickYPercent });
      sound.playMagnesiumFlash();
      setTimeout(() => {
        setMagnesiumFlash(null);
      }, 650);

      // Discovery floating popup
      const pop: DiscoveryPop = {
        id: `${Date.now()}_${Math.random()}`,
        x: clickXPercent,
        y: clickYPercent,
        text: comboStreak >= 1 ? `Indizio Decifrato! (x${comboStreak + 1})` : 'Indizio Decifrato!',
        name: matchedDiff.name,
      };
      setDiscoveryPops(prev => [...prev, pop]);
      setTimeout(() => {
        setDiscoveryPops(prev => prev.filter(p => p.id !== pop.id));
      }, 1600);

      onDifferenceClick(
        matchedDiff,
        { x: clickXPercent, y: clickYPercent },
        0,
        { x: e.clientX, y: e.clientY }
      );
    } else {
      addErrorFeedback(clickXPercent, clickYPercent);
      onErrorClick({ x: clickXPercent, y: clickYPercent }, 0);
    }
  };

  const foundCount = differences.filter(d => foundDifferenceIds.includes(d.id)).length;
  const totalCount = differences.length;
  const activeRiddleDiff = differences[selectedRiddleIndex] || differences[0];
  const isActiveRiddleFound = activeRiddleDiff ? foundDifferenceIds.includes(activeRiddleDiff.id) : false;

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex flex-col select-none overflow-hidden bg-stone-950 ${
        isShaking ? 'animate-[shake_0.35s_ease-in-out]' : ''
      }`}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      style={{ touchAction: scale > 1 ? 'none' : 'pan-y' }}
    >
      {/* Floating Shield Blocked Notice */}
      {shieldBlockedNotice && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm bg-indigo-950/95 border border-indigo-400 text-indigo-200 px-3.5 py-1.5 rounded-xl shadow-2xl flex items-center justify-center gap-2 animate-bounce">
          <Shield className="w-4 h-4 text-indigo-300 shrink-0" />
          <span className="text-xs font-bold">
            Scudo del Guardiano: Errore parato senza perdere vite!
          </span>
        </div>
      )}

      {/* Floating Controls: Diurnal Atmosphere, Photo Filters & Zoom Reset Badge */}
      <div className="absolute top-2.5 right-2.5 z-30 flex items-center gap-1.5">
        {/* Floating Zoom Reset Badge (Appears when user pinches/zooms in) */}
        {scale > 1.1 && (
          <button
            onClick={handleResetZoom}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500 text-stone-950 font-black text-[11px] shadow-[0_0_15px_rgba(245,158,11,0.8)] border border-amber-200 transition-transform active:scale-95 animate-fade-in"
            title="Tocca per ripristinare la visuale intera"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{scale.toFixed(1)}x • Ripristina</span>
          </button>
        )}

        <div className="flex items-center gap-1 bg-stone-900/85 backdrop-blur-md px-2 py-1 rounded-full border border-amber-500/30 shadow-xl">
          {/* 1928 Brass Field Magnifier (Lente d'Ottone) Toggle */}
          <button
            onClick={() => {
              setIsMagnifierActive(prev => {
                const next = !prev;
                if (next) {
                  setIsMagnifierHovering(true);
                  sound.playPaperInspect();
                  triggerHaptic('medium');
                } else {
                  sound.playTap();
                }
                return next;
              });
            }}
            className={`p-1 rounded-full transition-all duration-200 ${
              isMagnifierActive
                ? 'bg-amber-500 text-stone-950 font-bold shadow-[0_0_12px_rgba(245,158,11,0.8)] ring-1 ring-amber-200 scale-105'
                : 'text-amber-300/80 hover:text-amber-200 hover:bg-stone-800'
            }`}
            title={isMagnifierActive ? "Disattiva Lente d'Ottone" : "Attiva Lente d'Ottone 1928 (Ingranditore di Campo 2.4x)"}
          >
            <Search className="w-3.5 h-3.5" />
          </button>

          {/* Diurnal Atmosphere Toggle */}
          <button
            onClick={cycleAtmosphere}
            className="p-1 rounded-full text-amber-300/80 hover:text-amber-200 hover:bg-stone-800 transition-colors"
            title={`Atmosfera Luce: ${atmosphereMode}`}
          >
            {atmosphereMode === 'dawn' && <Sun className="w-3.5 h-3.5 text-amber-400" />}
            {atmosphereMode === 'noon' && <Sun className="w-3.5 h-3.5 text-yellow-300" />}
            {atmosphereMode === 'dusk' && <Sunset className="w-3.5 h-3.5 text-orange-400" />}
            {atmosphereMode === 'lantern' && <Flame className="w-3.5 h-3.5 text-amber-500" />}
          </button>

          {/* Photo Plate Emulsion Filter */}
          <button
            onClick={cyclePhotoFilter}
            className="p-1 rounded-full text-amber-300/80 hover:text-amber-200 hover:bg-stone-800 transition-colors"
            title={`Filtro Lastra Fotografica: ${photoFilter}`}
          >
            <Layers className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Single Master Photograph Viewport */}
      <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center p-1">
        {/* Subtle Ambient Historical Dust/Spore Particles */}
        <AmbientParticles imageIndex={0} chapterNumber={chapterNumber} />

        <div
          className="relative max-w-full max-h-full aspect-[1200/896] flex items-center justify-center cursor-crosshair rounded-lg overflow-hidden shadow-2xl border border-amber-900/40 bg-stone-900"
          style={{
            transform: `scale(${scale}) translate(${pan.x / scale}px, ${pan.y / scale}px)`,
            transition: isDraggingRef.current ? 'none' : 'transform 0.15s ease-out',
          }}
          onClick={handleStageClick}
          onMouseEnter={() => isMagnifierActive && setIsMagnifierHovering(true)}
          onMouseLeave={() => setIsMagnifierHovering(false)}
        >
          {/* --- 1928 BRASS FIELD MAGNIFIER (LENTE D'OTTONE) --- */}
          {isMagnifierActive && (
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-35 transition-opacity duration-150"
              style={{
                left: `${magnifierPos.x}%`,
                top: `${magnifierPos.y}%`,
                opacity: isMagnifierHovering ? 1 : 0.4,
              }}
            >
              {/* Outer Vintage Brass Bezel with Rivets & Metallic Gradient */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-2 bg-gradient-to-br from-amber-200 via-amber-700 to-amber-950 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(217,119,6,0.6)] border-2 border-amber-300">
                {/* Inner Mechanical Brass Rim */}
                <div className="w-full h-full rounded-full p-1 bg-stone-900 border border-amber-500/80 overflow-hidden relative shadow-inner">
                  {/* Magnified Image Viewport: 2.4x magnification centered on magnifierPos */}
                  <div className="w-full h-full rounded-full overflow-hidden relative bg-stone-950">
                    <img
                      src={assetUrl(imageA)}
                      alt="Ingrandimento Ottico"
                      className="absolute max-w-none pointer-events-none select-none"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transformOrigin: `${magnifierPos.x}% ${magnifierPos.y}%`,
                        transform: 'scale(2.4)',
                        filter: getPhotoFilterStyle(),
                      }}
                    />

                    {/* Surveyor 1928 Crosshairs Reticle */}
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-amber-400/40 -translate-y-1/2 pointer-events-none" />
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-amber-400/40 -translate-x-1/2 pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border border-amber-400/50 pointer-events-none shadow-[0_0_8px_rgba(251,191,36,0.4)]" />

                    {/* Curved Convex Glass Glare Reflections */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-amber-100/30 pointer-events-none" />
                    <div className="absolute -inset-1 rounded-full shadow-[inset_0_4px_12px_rgba(255,255,255,0.45),inset_0_-6px_16px_rgba(0,0,0,0.8)] pointer-events-none" />
                  </div>
                </div>

                {/* Brass Screws / Rivets */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-200 border border-stone-800 shadow" />
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-200 border border-stone-800 shadow" />
                <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-200 border border-stone-800 shadow" />
                <div className="absolute right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-200 border border-stone-800 shadow" />

                {/* Vintage Brass Badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-stone-950 border border-amber-400 text-amber-300 font-mono text-[9px] font-black tracking-widest uppercase shadow-lg whitespace-nowrap">
                  2.4× Lente 1928
                </div>
              </div>
            </div>
          )}
          {/* Pristine Master Photograph (Single high-definition 1928 archival plate) */}
          <img
            ref={imgRef}
            src={assetUrl(imageA)}
            alt="Scena di Ricerca Storica"
            className="w-full h-full object-cover pointer-events-none select-none transition-[filter] duration-300"
            style={{
              filter: getPhotoFilterStyle(),
            }}
            draggable={false}
          />

          {/* Freeze Time Frost Overlay */}
          {isTimeFrozen && (
            <div className="absolute inset-0 pointer-events-none border-4 border-cyan-400/50 shadow-[inset_0_0_30px_rgba(34,211,238,0.35)] z-25 animate-pulse" />
          )}

          {/* Discovered Clues: Golden Wax Seals & Rings (POINTER-EVENTS-NONE to never block nearby objects!) */}
          {differences.map(diff => {
            const isFound = foundDifferenceIds.includes(diff.id);
            if (!isFound) return null;
            const ringRadius = Math.min(diff.radius || 5.5, 6.5);
            return (
              <div
                key={`found_${diff.id}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
                style={{
                  left: `${diff.x}%`,
                  top: `${diff.y}%`,
                  width: `${ringRadius * 2}%`,
                  height: `${ringRadius * 2}%`,
                }}
              >
                {/* Vintage Brass/Emerald Discovery Ring with Wax Seal */}
                <div className="w-full h-full rounded-full border-2 border-amber-400 bg-amber-500/20 shadow-[0_0_15px_rgba(251,191,36,0.6)] animate-pulse flex items-center justify-center">
                  <div className="bg-stone-950/90 border border-amber-400/90 rounded-full p-1 shadow-lg">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Active Hint Golden Compass Beacon */}
          {activeHint && !foundDifferenceIds.includes(activeHint.id) && (
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
              style={{
                left: `${activeHint.x}%`,
                top: `${activeHint.y}%`,
              }}
            >
              <div className="relative flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-amber-300/80 bg-amber-400/25 animate-ping" />
                <div className="absolute w-12 h-12 rounded-full border-2 border-amber-200 bg-amber-400/40 shadow-[0_0_25px_rgba(251,191,36,0.9)] animate-pulse flex items-center justify-center">
                  <Compass className="w-6 h-6 text-amber-100 animate-spin" />
                </div>
              </div>
            </div>
          )}

          {/* Radar Quadrant Sweep Overlay */}
          {activeRadar && (
            <div
              className="absolute pointer-events-none border-2 border-cyan-400 bg-cyan-500/15 shadow-[0_0_30px_rgba(34,211,238,0.4)] z-15 animate-pulse"
              style={{
                left: `${activeRadar.x}%`,
                top: `${activeRadar.y}%`,
                width: `${activeRadar.width}%`,
                height: `${activeRadar.height}%`,
              }}
            >
              <div className="absolute top-2 left-2 flex items-center gap-1 bg-stone-900/85 px-2 py-0.5 rounded text-[10px] text-cyan-300 font-mono tracking-wider border border-cyan-500/40">
                <MapPin className="w-3 h-3 text-cyan-400" />
                QUADRANTE ATTIVO
              </div>
            </div>
          )}

          {/* Hidden Collectible Relic Spot */}
          {hiddenRelic && (
            <HiddenArtifactSpot
              relic={hiddenRelic}
              isDiscovered={isRelicDiscovered}
              onDiscover={relic => onDiscoverRelic && onDiscoverRelic(relic)}
            />
          )}

          {/* 1928 Magnesium Powder Flash Explosion FX */}
          {magnesiumFlash && (
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30"
              style={{
                left: `${magnesiumFlash.x}%`,
                top: `${magnesiumFlash.y}%`,
              }}
            >
              <div className="w-32 h-32 rounded-full bg-amber-100/95 blur-md animate-ping" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-amber-200 animate-spin" />
              </div>
            </div>
          )}

          {/* Floating Discovery Notification Popups */}
          {discoveryPops.map(pop => (
            <div
              key={pop.id}
              className="absolute -translate-x-1/2 -translate-y-full pointer-events-none z-40 flex flex-col items-center animate-fade-in-up"
              style={{
                left: `${pop.x}%`,
                top: `${pop.y}%`,
              }}
            >
              <div
                className={`flex items-center gap-1.5 px-3.5 py-1 rounded-full text-stone-950 font-black text-xs transition-all ${
                  comboStreak >= 3
                    ? 'bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 shadow-[0_0_25px_rgba(251,191,36,0.95)] border-2 border-yellow-100 ring-2 ring-amber-500/60 scale-110'
                    : 'bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 shadow-[0_4px_20px_rgba(245,158,11,0.9)] border border-amber-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 fill-stone-950" />
                <span>{pop.text}</span>
              </div>
              <div className="mt-0.5 bg-stone-950/95 text-amber-200 text-[11px] font-serif font-bold px-2.5 py-0.5 rounded shadow border border-amber-500/40">
                {pop.name}
              </div>
            </div>
          ))}

          {/* Error Tap Ripples */}
          {errorRipples.map(ripple => (
            <div
              key={ripple.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30"
              style={{
                left: `${ripple.x}%`,
                top: `${ripple.y}%`,
              }}
            >
              <div className="w-12 h-12 rounded-full border-2 border-rose-500 bg-rose-500/25 animate-ping" />
            </div>
          ))}
        </div>
      </div>

      {/* --- IL TACCUINO DEL PROFESSOR BELLINI (8 INDOVINELLI INVESTIGATIVI) --- */}
      <div className="relative z-20 w-full bg-gradient-to-t from-stone-950 via-[#140d07] to-stone-900/95 border-t-2 border-amber-700/60 shadow-[0_-10px_30px_rgba(0,0,0,0.9)] px-2 sm:px-4 pt-2 pb-2">
        {/* Header: Title, Solved counter and Grid Expand toggle */}
        <div className="flex items-center justify-between max-w-4xl mx-auto mb-1.5 text-xs">
          <div className="flex items-center gap-1.5 text-amber-300 font-serif font-bold tracking-wide">
            <Scroll className="w-3.5 h-3.5 text-amber-400" />
            <span className="uppercase text-[11px] tracking-wider font-sans">Taccuino di Spedizione (8 Indovinelli)</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-[11px]">
              <span className="text-stone-400 hidden sm:inline">Decifrati:</span>
              <span className="text-amber-300 font-mono font-bold bg-stone-950 px-2 py-0.5 rounded border border-amber-600/40 shadow-inner">
                {foundCount} / {totalCount}
              </span>
            </div>

            {/* Toggle expanded 8-card grid */}
            <button
              onClick={() => setIsGridExpanded(prev => !prev)}
              className="flex items-center gap-0.5 text-[10px] text-amber-300/80 hover:text-amber-200 bg-stone-900/90 px-2 py-0.5 rounded border border-amber-700/40 transition cursor-pointer"
              title={isGridExpanded ? 'Comprimi Taccuino' : 'Espandi tutti gli 8 Indovinelli'}
            >
              <span>{isGridExpanded ? 'Comprimi' : 'Tutti gli 8'}</span>
              {isGridExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* ACTIVE RIDDLE SPOTLIGHT BANNER: Shows the selected riddle with crisp readable typography */}
        {activeRiddleDiff && (
          <div
            onClick={() => {
              if (isActiveRiddleFound) {
                setInspectingDiff(activeRiddleDiff);
              }
            }}
            className={`max-w-4xl mx-auto mb-2 px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
              isActiveRiddleFound
                ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200 shadow-[inset_0_1px_4px_rgba(16,185,129,0.2)]'
                : 'bg-amber-950/30 border-amber-500/40 text-amber-100 shadow-md'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold flex items-center justify-center border border-amber-500/40">
                  {selectedRiddleIndex + 1}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400">
                  {isActiveRiddleFound ? 'Indizio Decifrato:' : 'Indovinello Attivo:'}
                </span>
              </div>

              <div className="text-[9px] text-stone-400 flex items-center gap-1">
                <span>Pinch con due dita per zoomare sulla foto</span>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs font-serif italic text-amber-200/95 mt-0.5 line-clamp-2 leading-snug">
              {isActiveRiddleFound ? (
                <span>
                  <strong className="text-emerald-300 not-italic font-sans mr-1">{activeRiddleDiff.name}:</strong>
                  {activeRiddleDiff.loreClue}
                </span>
              ) : (
                <span>"{activeRiddleDiff.riddle || activeRiddleDiff.loreClue}"</span>
              )}
            </p>
          </div>
        )}

        {/* 8 RIDDLE CARDS CONTAINER */}
        {isGridExpanded ? (
          /* EXPANDED 4x2 GRID VIEW */
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-1.5 max-h-48 overflow-y-auto pr-0.5 custom-scrollbar">
            {differences.map((item, idx) => {
              const isFound = foundDifferenceIds.includes(item.id);
              const isSelected = selectedRiddleIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedRiddleIndex(idx);
                    if (isFound) {
                      setInspectingDiff(item);
                    } else {
                      sound.playTap();
                      triggerHaptic('light');
                    }
                  }}
                  className={`p-2 rounded-lg border transition-all cursor-pointer relative flex flex-col justify-between ${
                    isFound
                      ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
                      : isSelected
                      ? 'bg-amber-950/60 border-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.3)] text-amber-100'
                      : 'bg-stone-950/80 border-amber-900/40 text-stone-300 hover:border-amber-600/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold text-amber-400">#{idx + 1}</span>
                    {isFound ? (
                      <span className="text-[8px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40">
                        DECIFRATO
                      </span>
                    ) : (
                      <span className="text-[8px] text-stone-500 font-mono">DA TROVARE</span>
                    )}
                  </div>

                  <div className="text-[10px] sm:text-[11px] font-serif leading-tight line-clamp-2">
                    {isFound ? (
                      <span className="text-emerald-300 font-sans font-bold">{item.name}</span>
                    ) : (
                      <span className="italic text-amber-200/90">"{item.riddle || item.loreClue}"</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* COMPACT HORIZONTAL SNAP SCROLL RIBBON (8 Cards) */
          <div
            ref={ribbonRef}
            className="max-w-4xl mx-auto flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar snap-x scroll-smooth"
          >
            {differences.map((item, idx) => {
              const isFound = foundDifferenceIds.includes(item.id);
              const isSelected = selectedRiddleIndex === idx;
              return (
                <div
                  key={item.id}
                  ref={el => {
                    cardRefs.current[idx] = el;
                  }}
                  onClick={() => {
                    setSelectedRiddleIndex(idx);
                    if (isFound) {
                      setInspectingDiff(item);
                    } else {
                      sound.playTap();
                      triggerHaptic('light');
                    }
                  }}
                  className={`snap-start shrink-0 w-[110px] sm:w-[135px] p-1.5 rounded-lg border transition-all cursor-pointer relative ${
                    isFound
                      ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200 shadow-[inset_0_1px_4px_rgba(16,185,129,0.2)]'
                      : isSelected
                      ? 'bg-amber-950/60 border-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.3)] text-amber-100'
                      : 'bg-stone-950/80 border-amber-900/40 text-stone-300 hover:border-amber-600/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[9px] font-mono font-bold text-amber-400">#{idx + 1}</span>
                    {isFound ? (
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <HelpCircle className="w-3 h-3 text-amber-500/50" />
                    )}
                  </div>

                  <div className="text-[9px] sm:text-[10px] font-serif leading-tight truncate">
                    {isFound ? (
                      <span className="text-emerald-300 font-sans font-bold">{item.name}</span>
                    ) : (
                      <span className="italic text-amber-200/90 truncate block">"{item.riddle || item.name}"</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Clue Dossier / Historical Lore Inspect Modal */}
      {inspectingDiff && (
        <EvidenceInspectModal
          difference={inspectingDiff}
          isOpen={true}
          onClose={() => setInspectingDiff(null)}
          onFocusScene={handleFocusClueScene}
          index={differences.findIndex(d => d.id === inspectingDiff.id) + 1}
          total={differences.length}
          chapterNumber={chapterNumber}
        />
      )}
    </div>
  );
};
