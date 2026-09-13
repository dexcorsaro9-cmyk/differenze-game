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
  Camera,
  AlertTriangle,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { AmbientParticles } from './AmbientParticles';
import { HiddenArtifactSpot } from './HiddenArtifactSpot';
import type { Difference, RadarQuadrant } from '../types/game';
import type { CollectibleRelic } from '../data/collectiblesData';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';

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
}

interface ErrorRipple {
  id: string;
  x: number;
  y: number;
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
}) => {
  // Mode: Full-screen Crime Scene Investigation (Default AAA) vs Classic Split Screen
  const [viewMode, setViewMode] = useState<'crime_scene' | 'split'>('crime_scene');

  // Lente d'Archivio (Past Vision) states
  const [isArchiveLensActive, setIsArchiveLensActive] = useState<boolean>(false);
  const [selectedClueId, setSelectedClueId] = useState<string | null>(null);

  // Pan & Zoom
  const [scale, setScale] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Error feedback & shake
  const [errorRipples, setErrorRipples] = useState<ErrorRipple[]>([]);
  const [isShaking, setIsShaking] = useState<boolean>(false);

  // References
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRefMain = useRef<HTMLImageElement>(null);
  const imgRefA = useRef<HTMLImageElement>(null);
  const imgRefB = useRef<HTMLImageElement>(null);
  const touchDistRef = useRef<number | null>(null);
  const lensPressTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-focus hint when active
  useEffect(() => {
    if (activeHint) {
      setScale(2.2);
      const targetX = (50 - activeHint.x) * 4;
      const targetY = (50 - activeHint.y) * 4;
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
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging && scale > 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      const maxOffset = (scale - 1) * 200;
      setPan({
        x: Math.max(-maxOffset, Math.min(maxOffset, newX)),
        y: Math.max(-maxOffset, Math.min(maxOffset, newY)),
      });
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
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

  // Hit test click on image
  const handleStageClick = (e: React.MouseEvent<HTMLDivElement>, imageTarget: 0 | 1 = 1) => {
    if (isDragging) return;

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

    let matchedDiff: Difference | null = null;
    for (const diff of differences) {
      if (foundDifferenceIds.includes(diff.id)) continue;
      const tolerance = diff.radius || 8.0;
      const dx = clickXPercent - diff.x;
      const dy = clickYPercent - diff.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= tolerance) {
        matchedDiff = diff;
        break;
      }
    }

    if (matchedDiff) {
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
        return <Shield className="w-3.5 h-3.5 text-amber-400" />;
      case 'sabotage':
        return <AlertTriangle className="w-3.5 h-3.5 text-red-400" />;
      case 'dark_seal':
        return <Lock className="w-3.5 h-3.5 text-purple-400" />;
      case 'torn_evidence':
        return <FileText className="w-3.5 h-3.5 text-amber-300" />;
      default:
        return <Camera className="w-3.5 h-3.5 text-amber-400" />;
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
      className={`relative w-full flex-1 min-h-0 bg-[#070402] overflow-hidden flex flex-col items-center justify-between p-1 select-none transition-all duration-75 ${
        isShaking ? 'animate-screen-shake ring-2 ring-red-500/50' : ''
      }`}
      style={{ cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'crosshair' }}
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
          <div className="brass-corner-bracket brass-corner-tl" />
          <div className="brass-corner-bracket brass-corner-tr" />
          <div className="brass-corner-bracket brass-corner-bl" />
          <div className="brass-corner-bracket brass-corner-br" />

          {/* Top Status Plate / Dossier Header */}
          <div className="absolute top-2.5 left-2.5 z-25 flex items-center gap-2 pointer-events-none">
            {isArchiveLensActive ? (
              <div className="cartouche-plate px-3 py-1 rounded-xl text-[10px] sm:text-xs font-black text-amber-300 flex items-center gap-1.5 shadow-xl border border-amber-400/80 font-serif animate-pulse bg-amber-950/90 backdrop-blur-md">
                <Eye className="w-3.5 h-3.5 text-amber-400" />
                <span className="tracking-wide">LENTE D'ARCHIVIO: STATO ORIGINALE (1924)</span>
              </div>
            ) : (
              <div className="cartouche-plate px-3 py-1 rounded-xl text-[10px] sm:text-xs font-black text-emerald-300 flex items-center gap-1.5 shadow-xl border border-emerald-500/70 font-serif bg-stone-950/90 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="tracking-wide">SCENA DEL CRIMINE: RILEVA LE MANOMISSIONI</span>
              </div>
            )}

            {isTimeFrozen && (
              <div className="px-2.5 py-0.5 bg-cyan-950/90 border border-cyan-400/80 rounded-full text-[10px] font-bold text-cyan-300 flex items-center gap-1 animate-pulse shadow-lg">
                <span>❄️ Tempo Fermo</span>
              </div>
            )}
          </div>

          {/* Top-Right: Quick Switcher to Split View */}
          <div className="absolute top-2.5 right-2.5 z-25 flex items-center gap-1">
            <button
              onClick={() => setViewMode(v => (v === 'crime_scene' ? 'split' : 'crime_scene'))}
              className="px-2.5 py-1 rounded-full bg-[#1e130a]/90 hover:bg-amber-950/90 text-amber-300 border border-amber-500/50 shadow-lg text-[10px] font-serif font-bold flex items-center gap-1 active:scale-95 transition cursor-pointer"
              title="Passa a Vista Divisa (Split Screen)"
            >
              <Layers className="w-3 h-3 text-amber-400" />
              <span className="hidden sm:inline">Vista Split</span>
            </button>
          </div>

          {/* Zoom & Pan Container */}
          <div
            className="relative w-full h-full flex items-center justify-center transition-transform duration-75 ease-out origin-center"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
            }}
          >
            {/* Aspect Ratio Bounded Stage */}
            <div
              className="relative max-w-full max-h-full aspect-[1200/896] flex items-center justify-center shrink-0 cursor-crosshair group"
              onClick={e => handleStageClick(e, isArchiveLensActive ? 0 : 1)}
            >
              {/* PRIMARY CRIME SCENE IMAGE (Image B: Sabotaged Site) */}
              <img
                ref={imgRefMain}
                src={imageB}
                alt="Scena del Crimine Archeologica"
                draggable={false}
                className="w-full h-full object-contain rounded-xl select-none pointer-events-auto block transition-all duration-300"
              />

              {/* OVERLAY: PRISTINE ARCHIVE IMAGE (Image A) with Crossfade & Vintage Vignette */}
              <div
                className={`absolute inset-0 rounded-xl overflow-hidden pointer-events-none transition-opacity duration-300 ${
                  isArchiveLensActive ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={imageA}
                  alt="Archivio Originale 1924"
                  draggable={false}
                  className="w-full h-full object-contain rounded-xl select-none block filter sepia-[0.18] contrast-[1.05]"
                />
                {/* Archival Film Vignette & Watermark */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 shadow-[inset_0_0_90px_rgba(0,0,0,0.85)] pointer-events-none" />
                <div className="absolute bottom-4 right-4 pointer-events-none px-2 py-0.5 rounded bg-black/70 border border-amber-400/40 text-[9px] font-mono tracking-widest text-amber-300/80 uppercase">
                  REGISTRO ACCADEMICO OXFORD #1924-A
                </div>
              </div>

              {/* Living Atmospheric Particle Engine */}
              <AmbientParticles imageIndex={1} hasSteam={false} />

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

              {/* Render Found Evidence Markers (Golden Wax Seal with Name Tag) */}
              {differences
                .filter(d => foundDifferenceIds.includes(d.id))
                .map((diff, idx) => (
                  <div
                    key={`evidence_${diff.id}`}
                    className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-25 group/marker animate-fade-in"
                    style={{ left: `${diff.x}%`, top: `${diff.y}%` }}
                    onClick={e => {
                      e.stopPropagation();
                      setSelectedClueId(diff.id);
                    }}
                  >
                    {/* Pulsing Golden Seal Disc */}
                    <div className="relative flex items-center justify-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-amber-700 via-amber-500 to-yellow-300 border-2 border-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.8)] flex items-center justify-center ring-2 ring-amber-900/60 active:scale-95 transition cursor-pointer">
                        <span className="text-[10px] sm:text-xs font-black text-amber-950 font-serif">
                          #{idx + 1}
                        </span>
                      </div>

                      {/* Evidence Tag Banner */}
                      <div className="absolute top-full mt-1 px-2 py-0.5 rounded-md bg-[#180f08]/90 border border-amber-400/60 shadow-lg text-[9px] sm:text-[10px] text-amber-200 font-serif font-bold whitespace-nowrap pointer-events-none opacity-90 group-hover/marker:opacity-100">
                        {diff.name}
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
            </div>
          </div>

          {/* INTERACTIVE LENTE D'ARCHIVIO FLOATING TRIGGER */}
          <div className="absolute bottom-3 right-3 z-30 flex flex-col items-end gap-2">
            <button
              onClick={toggleArchiveLens}
              onPointerDown={handleLensPointerDown}
              onPointerUp={handleLensPointerUp}
              className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-2xl border shadow-[0_8px_25px_rgba(0,0,0,0.8)] active:scale-95 transition-all duration-200 cursor-pointer select-none ${
                isArchiveLensActive
                  ? 'bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 border-yellow-200 text-stone-950 shadow-[0_0_25px_rgba(245,158,11,0.9)] ring-2 ring-amber-300'
                  : 'bg-gradient-to-r from-[#2c1a0e]/95 via-[#3d2513]/95 to-[#2c1a0e]/95 hover:from-[#3a2212] border-amber-500/60 text-amber-200 hover:border-amber-400'
              }`}
              title="Tieni premuto o clicca per visualizzare la fotografia originale prima del furto"
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center ${
                  isArchiveLensActive ? 'bg-amber-950 text-amber-300' : 'bg-amber-500/20 text-amber-400'
                }`}
              >
                {isArchiveLensActive ? (
                  <EyeOff className="w-4 h-4 animate-pulse" />
                ) : (
                  <Eye className="w-4 h-4 animate-bounce" />
                )}
              </div>

              <div className="flex flex-col text-left leading-none">
                <span className="text-xs font-black font-serif uppercase tracking-wider">
                  {isArchiveLensActive ? "Torna alla Scena" : "Lente d'Archivio"}
                </span>
                <span
                  className={`text-[9px] font-sans ${
                    isArchiveLensActive ? 'text-amber-950 font-bold' : 'text-amber-300/70'
                  }`}
                >
                  {isArchiveLensActive ? 'Mostra scena sabotata' : 'Vedi prima del furto'}
                </span>
              </div>
            </button>

            {/* Floating Minimal Zoom Controls */}
            <div className="flex items-center gap-1 bg-[#1a0f07]/90 backdrop-blur-md p-1 rounded-full border border-amber-500/40 shadow-xl">
              <button
                onClick={handleZoomOut}
                disabled={scale <= 1}
                className="p-1 rounded-full hover:bg-stone-800 disabled:opacity-30 text-amber-300 active:scale-90 transition-all cursor-pointer"
                title="Zoom Indietro"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>

              <span className="text-[10px] font-bold px-1 text-amber-200 min-w-[28px] text-center font-mono">
                {Math.round(scale * 100)}%
              </span>

              <button
                onClick={handleZoomIn}
                disabled={scale >= 4}
                className="p-1 rounded-full hover:bg-stone-800 disabled:opacity-30 text-amber-300 active:scale-90 transition-all cursor-pointer"
                title="Zoom Avanti"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>

              {scale > 1 && (
                <button
                  onClick={handleResetZoom}
                  className="p-1 rounded-full bg-amber-500/30 hover:bg-amber-500/50 text-amber-200 active:scale-90 transition-all cursor-pointer"
                  title="Reimposta (100%)"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* MODE B: CLASSIC SPLIT SCREEN (FALLBACK) */
        <div className="relative flex-1 min-h-0 w-full flex flex-col items-center justify-between gap-1 overflow-hidden">
          {/* Viewport 1 (Originale / Image A - Sopra) */}
          <div className="relative flex-1 min-h-0 w-full flex items-center justify-center overflow-hidden rounded-xl archeo-cage">
            <div className="brass-corner-bracket brass-corner-tl" />
            <div className="brass-corner-bracket brass-corner-tr" />
            <div className="brass-corner-bracket brass-corner-bl" />
            <div className="brass-corner-bracket brass-corner-br" />

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
                  src={imageA}
                  alt="Scena A"
                  draggable={false}
                  className="w-full h-full object-contain rounded-lg select-none pointer-events-auto block"
                />
                <AmbientParticles imageIndex={0} hasSteam={false} />
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full flex items-center justify-between px-3 py-0.5 shrink-0">
            <div className="h-[1px] flex-1 bg-amber-500/30" />
            <button
              onClick={() => setViewMode('crime_scene')}
              className="mx-2 px-2.5 py-0.5 rounded-full bg-amber-900/60 border border-amber-500/50 text-amber-200 text-[9px] font-serif font-bold hover:bg-amber-800 transition flex items-center gap-1 cursor-pointer"
            >
              <span>Passa a Schermo Intero AAA</span>
            </button>
            <div className="h-[1px] flex-1 bg-amber-500/30" />
          </div>

          {/* Viewport 2 (Sito Scavo / Image B - Sotto) */}
          <div className="relative flex-1 min-h-0 w-full flex items-center justify-center overflow-hidden rounded-xl archeo-cage">
            <div className="brass-corner-bracket brass-corner-tl" />
            <div className="brass-corner-bracket brass-corner-tr" />
            <div className="brass-corner-bracket brass-corner-bl" />
            <div className="brass-corner-bracket brass-corner-br" />

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
                  src={imageB}
                  alt="Scena B"
                  draggable={false}
                  className="w-full h-full object-contain rounded-lg select-none pointer-events-auto block"
                />
                <AmbientParticles imageIndex={1} hasSteam={false} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM PARCHMENT DOSSIER TRAY */}
      <div className="w-full shrink-0 bg-gradient-to-r from-[#170e07] via-[#24160a] to-[#170e07] rounded-xl border border-amber-600/50 p-1.5 shadow-xl mt-1 flex flex-col gap-1">
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
            Tocca la Lente d'Archivio per scoprire cosa è stato sottratto
          </span>
        </div>

        {/* Clue Badges Row */}
        <div className="grid grid-cols-5 gap-1 w-full">
          {differences.map((diff, index) => {
            const isFound = foundDifferenceIds.includes(diff.id);
            const isSelected = selectedClueId === diff.id;

            return (
              <button
                key={diff.id}
                type="button"
                onClick={() => {
                  sound.playTap();
                  setSelectedClueId(diff.id);
                }}
                className={`flex flex-col items-center justify-center p-1 sm:p-1.5 rounded-lg border transition-all text-center select-none cursor-pointer ${
                  isFound
                    ? 'bg-gradient-to-b from-amber-900/60 to-yellow-950/80 border-amber-400/80 shadow-[0_0_8px_rgba(245,158,11,0.4)] ring-1 ring-amber-300/50'
                    : 'bg-black/40 border-stone-800 text-stone-500 hover:border-amber-900/50'
                } ${isSelected ? 'ring-2 ring-yellow-400' : ''}`}
                title={isFound ? diff.name : `Prova #${index + 1} ancora nascosta`}
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
                  className={`text-[8px] sm:text-[9px] font-serif leading-tight truncate max-w-full ${
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
          <div className="flex items-center justify-between bg-black/60 border border-amber-500/40 rounded-lg px-2.5 py-1 text-[10px] text-amber-200 animate-fade-in">
            <div className="flex items-center gap-1.5 truncate">
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
            <button
              onClick={() => setSelectedClueId(null)}
              className="text-stone-400 hover:text-white ml-2 text-xs cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
