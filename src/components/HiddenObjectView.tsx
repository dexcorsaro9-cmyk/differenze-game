import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  Search,
  CheckCircle2,
  Info,
  Sun,
  Sunset,
  Flame,
  Compass,
  MapPin,
  Shield,
  Layers,
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
}) => {
  // Container & Image refs
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Pan & Zoom
  const [scale, setScale] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Touch gesture & drag refs
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const lastTapRef = useRef<{ time: number; x: number; y: number } | null>(null);

  // Loupe state
  const [isLoupeActive, setIsLoupeActive] = useState<boolean>(false);
  const [loupePos, setLoupePos] = useState<{ x: number; y: number }>({ x: 260, y: 220 });

  // Visual effects
  const [errorRipples, setErrorRipples] = useState<ErrorRipple[]>([]);
  const [discoveryPops, setDiscoveryPops] = useState<DiscoveryPop[]>([]);
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [magnesiumFlash, setMagnesiumFlash] = useState<{ id: string; x: number; y: number } | null>(null);

  // Clue inspector modal
  const [inspectingDiff, setInspectingDiff] = useState<Difference | null>(null);

  // 1928 Diurnal Atmosphere Mode
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

  // Reset zoom on level change
  useEffect(() => {
    setScale(1);
    setPan({ x: 0, y: 0 });
    setIsLoupeActive(false);
  }, [imageA]);

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

  // Zoom handlers
  const handleZoomIn = () => {
    setScale(s => Math.min(3.5, Number((s + 0.4).toFixed(1))));
    sound.playTap();
    triggerHaptic('light');
  };

  const handleZoomOut = () => {
    setScale(s => {
      const next = Math.max(1, Number((s - 0.4).toFixed(1)));
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
    sound.playTap();
    triggerHaptic('light');
  };

  const handleResetZoom = () => {
    setScale(1);
    setPan({ x: 0, y: 0 });
    sound.playTap();
    triggerHaptic('medium');
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    setScale(s => {
      const next = Math.min(3.5, Math.max(1, Number((s + delta).toFixed(2))));
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
      const maxOffset = (scale - 1) * 280;
      setPan({
        x: Math.max(-maxOffset, Math.min(maxOffset, newX)),
        y: Math.max(-maxOffset, Math.min(maxOffset, newY)),
      });
    }

    if (isLoupeActive && containerRef.current) {
      const cRect = containerRef.current.getBoundingClientRect();
      setLoupePos({ x: e.clientX - cRect.left, y: e.clientY - cRect.top });
    }
  };

  const handlePointerUp = () => {
    pointerStartRef.current = null;
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

  // Tap Detection on the Photograph
  const handleStageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDraggingRef.current) return;
    const imgElement = imgRef.current;
    if (!imgElement) return;

    const rect = imgElement.getBoundingClientRect();
    const clickXPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const clickYPercent = ((e.clientY - rect.top) / rect.height) * 100;

    // Double tap to zoom
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
        0,
        { x: e.clientX, y: e.clientY }
      );
    } else {
      addErrorFeedback(clickXPercent, clickYPercent);
      onErrorClick({ x: clickXPercent, y: clickYPercent }, 0);
    }
  };

  const handleLoupeLensClick = useCallback(
    (clickPercentage: { x: number; y: number }) => {
      let matchedDiff: Difference | null = null;
      for (const diff of differences) {
        if (foundDifferenceIds.includes(diff.id)) continue;
        const tolerance = diff.radius || 10.0;
        const dx = clickPercentage.x - diff.x;
        const dy = clickPercentage.y - diff.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist <= tolerance) {
          matchedDiff = diff;
          break;
        }
      }

      if (matchedDiff) {
        setMagnesiumFlash({ id: String(Date.now()), x: clickPercentage.x, y: clickPercentage.y });
        sound.playMagnesiumFlash();
        setTimeout(() => setMagnesiumFlash(null), 650);

        onDifferenceClick(matchedDiff, clickPercentage, 0);
      } else {
        addErrorFeedback(clickPercentage.x, clickPercentage.y);
        onErrorClick(clickPercentage, 0);
      }
    },
    [differences, foundDifferenceIds, onDifferenceClick, onErrorClick]
  );

  const foundCount = differences.filter(d => foundDifferenceIds.includes(d.id)).length;
  const totalCount = differences.length;

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex flex-col select-none overflow-hidden bg-stone-950 ${
        isShaking ? 'animate-[shake_0.35s_ease-in-out]' : ''
      }`}
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ touchAction: scale > 1 ? 'none' : 'pan-y' }}
    >
      {/* Floating Shield Blocked Notice */}
      {shieldBlockedNotice && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm bg-indigo-950/95 border border-indigo-400 text-indigo-200 px-3.5 py-2 rounded-xl shadow-2xl flex items-center justify-center gap-2 animate-bounce">
          <Shield className="w-4 h-4 text-indigo-300 shrink-0" />
          <span className="text-xs font-bold">
            Scudo del Guardiano: Errore parato senza perdere vite!
          </span>
        </div>
      )}

      {/* Floating Top-Right Tool Controls (Loupe, Zoom, Atmosphere, Filter) */}
      <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-stone-900/80 backdrop-blur-md px-2 py-1.5 rounded-full border border-amber-500/30 shadow-xl">
        {/* Brass Loupe Toggle */}
        <button
          onClick={toggleLoupe}
          className={`p-1.5 rounded-full transition-all ${
            isLoupeActive
              ? 'bg-amber-500 text-stone-950 font-bold shadow-[0_0_12px_rgba(245,158,11,0.6)]'
              : 'text-amber-300/80 hover:text-amber-200 hover:bg-stone-800'
          }`}
          title="Lente d'Ingrandimento Vittoriana"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Diurnal Atmosphere Toggle */}
        <button
          onClick={cycleAtmosphere}
          className="p-1.5 rounded-full text-amber-300/80 hover:text-amber-200 hover:bg-stone-800 transition-colors"
          title={`Atmosfera: ${atmosphereMode}`}
        >
          {atmosphereMode === 'dawn' && <Sun className="w-4 h-4 text-amber-400" />}
          {atmosphereMode === 'noon' && <Sun className="w-4 h-4 text-yellow-300" />}
          {atmosphereMode === 'dusk' && <Sunset className="w-4 h-4 text-orange-400" />}
          {atmosphereMode === 'lantern' && <Flame className="w-4 h-4 text-amber-500" />}
        </button>

        {/* Photo Plate Emulsion Filter Toggle */}
        <button
          onClick={cyclePhotoFilter}
          className="p-1.5 rounded-full text-amber-300/80 hover:text-amber-200 hover:bg-stone-800 transition-colors"
          title={`Filtro Lastra Fotografica: ${photoFilter}`}
        >
          <Layers className="w-4 h-4" />
        </button>

        <div className="w-[1px] h-4 bg-amber-500/30 mx-0.5" />

        {/* Zoom Controls */}
        <button
          onClick={handleZoomIn}
          disabled={scale >= 3.5}
          className="p-1.5 rounded-full text-amber-300/80 hover:text-amber-200 hover:bg-stone-800 disabled:opacity-40 transition-colors"
          title="Ingrandisci Scena"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={handleZoomOut}
          disabled={scale <= 1}
          className="p-1.5 rounded-full text-amber-300/80 hover:text-amber-200 hover:bg-stone-800 disabled:opacity-40 transition-colors"
          title="Riduci Ingrandimento"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        {scale > 1 && (
          <button
            onClick={handleResetZoom}
            className="p-1.5 rounded-full bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition-colors"
            title="Reimposta Vista"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Main Single Master Photograph Viewport */}
      <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center p-1 sm:p-2">
        {/* Subtle Ambient Particles */}
        <AmbientParticles imageIndex={0} chapterNumber={chapterNumber} />

        <div
          className="relative max-w-full max-h-full aspect-[4/3] flex items-center justify-center cursor-crosshair rounded-lg overflow-hidden shadow-2xl border border-amber-900/40 bg-stone-900"
          style={{
            transform: `scale(${scale}) translate(${pan.x / scale}px, ${pan.y / scale}px)`,
            transition: isDraggingRef.current ? 'none' : 'transform 0.15s ease-out',
          }}
          onClick={handleStageClick}
        >
          {/* Pristine Master Photograph */}
          <img
            ref={imgRef}
            src={assetUrl(imageA)}
            alt="Scena di Ricerca Storica"
            className="w-full h-full object-contain pointer-events-none select-none transition-[filter] duration-300"
            style={{
              filter: getPhotoFilterStyle(),
            }}
            draggable={false}
          />

          {/* Freeze Time Frost Overlay */}
          {isTimeFrozen && (
            <div className="absolute inset-0 pointer-events-none border-4 border-cyan-400/50 shadow-[inset_0_0_30px_rgba(34,211,238,0.35)] z-25 animate-pulse" />
          )}

          {/* Golden Rings & Badges for Discovered Objects */}
          {differences.map(diff => {
            const isFound = foundDifferenceIds.includes(diff.id);
            if (!isFound) return null;
            return (
              <div
                key={`found_${diff.id}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer group"
                style={{
                  left: `${diff.x}%`,
                  top: `${diff.y}%`,
                  width: `${(diff.radius || 10) * 2}%`,
                  height: `${(diff.radius || 10) * 2}%`,
                }}
                onClick={e => {
                  e.stopPropagation();
                  setInspectingDiff(diff);
                }}
                title={`Esamina ${diff.name}`}
              >
                {/* Vintage Brass/Emerald Discovery Ring */}
                <div className="w-full h-full rounded-full border-2 border-amber-400 bg-amber-500/20 shadow-[0_0_15px_rgba(251,191,36,0.6)] animate-pulse flex items-center justify-center group-hover:bg-amber-500/35 transition-all">
                  <div className="bg-stone-900/90 border border-amber-400/80 rounded-full p-1 shadow-md group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Active Hint Golden Pulsing Beacon */}
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

          {/* 1928 Magnesium Powder Flash Effect */}
          {magnesiumFlash && (
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30"
              style={{
                left: `${magnesiumFlash.x}%`,
                top: `${magnesiumFlash.y}%`,
              }}
            >
              <div className="w-32 h-32 rounded-full bg-amber-100/90 blur-md animate-ping" />
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
              <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-stone-950 font-black text-xs px-3 py-1 rounded-full shadow-[0_4px_15px_rgba(245,158,11,0.8)] border border-amber-200">
                {pop.text}
              </div>
              <div className="mt-0.5 bg-stone-900/90 text-amber-200 text-[11px] font-semibold px-2 py-0.5 rounded shadow border border-amber-500/30">
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

        {/* Victorian Brass Magnifying Loupe */}
        {isLoupeActive && containerRef.current && (
          <BrassMagnifyingLoupe
            imageSrc={assetUrl(imageA)}
            containerRect={containerRef.current.getBoundingClientRect()}
            imgRect={imgRef.current?.getBoundingClientRect() ?? null}
            pointerPos={loupePos}
            onClose={() => setIsLoupeActive(false)}
            onLensClick={handleLoupeLensClick}
            filterStyle={getPhotoFilterStyle()}
            magnification={2.8}
            lensSize={200}
          />
        )}
      </div>

      {/* Investigator's Bottom Target Tray (Vassoio Oggetti da Cercare) */}
      <div className="relative z-20 w-full bg-gradient-to-t from-stone-950 via-stone-900 to-stone-900/95 border-t-2 border-amber-700/50 shadow-[0_-8px_25px_rgba(0,0,0,0.8)] px-2 sm:px-4 py-2 sm:py-3">
        {/* Bar Header: Investigation Objective and Progress */}
        <div className="flex items-center justify-between max-w-4xl mx-auto mb-1.5 text-xs">
          <div className="flex items-center gap-1.5 text-amber-300 font-semibold tracking-wide">
            <Search className="w-3.5 h-3.5 text-amber-400" />
            <span className="uppercase text-[11px] tracking-wider">Oggetti da Scoprire</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-stone-400 text-[11px]">
              Completamento indagine:
            </span>
            <span className="text-amber-300 font-mono font-bold bg-stone-950 px-2 py-0.5 rounded border border-amber-600/40 shadow-inner">
              {foundCount} / {totalCount}
            </span>
          </div>
        </div>

        {/* Horizontal Grid / Tray of Target Objects */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1.5 sm:gap-2">
          {differences.map((item, idx) => {
            const isFound = foundDifferenceIds.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => {
                  if (isFound) {
                    setInspectingDiff(item);
                  } else {
                    sound.playTap();
                    triggerHaptic('light');
                  }
                }}
                className={`relative flex items-center gap-2 p-1.5 sm:p-2 rounded-lg border transition-all select-none cursor-pointer ${
                  isFound
                    ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200/90 shadow-[inset_0_1px_4px_rgba(16,185,129,0.2)]'
                    : 'bg-stone-950/80 border-amber-900/40 text-stone-300 hover:border-amber-500/50 hover:bg-stone-800/80 shadow-md'
                }`}
                title={isFound ? `Visualizza indizio per ${item.name}` : item.name}
              >
                {/* Status Icon Indicator */}
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${
                    isFound
                      ? 'bg-emerald-900/70 border-emerald-400 text-emerald-300'
                      : 'bg-stone-900 border-amber-700/50 text-amber-400/80'
                  }`}
                >
                  {isFound ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                  ) : (
                    <span className="text-[10px] font-mono font-bold">{idx + 1}</span>
                  )}
                </div>

                {/* Target Name */}
                <div className="flex-1 min-w-0">
                  <div
                    className={`text-[11px] sm:text-xs font-medium truncate ${
                      isFound ? 'line-through text-emerald-300/70' : 'text-stone-200'
                    }`}
                  >
                    {item.name}
                  </div>
                  <div className="text-[9px] text-stone-500 uppercase tracking-wider flex items-center gap-1">
                    {isFound ? (
                      <span className="text-emerald-400 font-semibold">Trovato</span>
                    ) : (
                      <span>Cerca nella scena</span>
                    )}
                  </div>
                </div>

                {/* Inspect Info Button for Found Items */}
                {isFound && (
                  <Info className="w-3.5 h-3.5 text-emerald-400/70 shrink-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Clue Inspector Modal */}
      {inspectingDiff && (
        <EvidenceInspectModal
          difference={inspectingDiff}
          isOpen={true}
          onClose={() => setInspectingDiff(null)}
          index={differences.findIndex(d => d.id === inspectingDiff.id) + 1}
          total={differences.length}
          chapterNumber={chapterNumber}
        />
      )}
    </div>
  );
};
