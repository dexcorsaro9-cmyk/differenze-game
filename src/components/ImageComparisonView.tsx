import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Sparkles, X, Compass, MapPin } from 'lucide-react';
import { AmbientParticles } from './AmbientParticles';
import { HiddenArtifactSpot } from './HiddenArtifactSpot';
import type { Difference, RadarQuadrant } from '../types/game';
import type { CollectibleRelic } from '../data/collectiblesData';

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
  onDifferenceClick: (diff: Difference, clickPercentage: { x: number; y: number }, imageIndex: 0 | 1) => void;
  onErrorClick: (clickPercentage: { x: number; y: number }, imageIndex: 0 | 1) => void;
  layoutMode?: 'auto' | 'vertical' | 'horizontal';
}

interface ErrorRipple {
  id: string;
  x: number;
  y: number;
  imageIndex: 0 | 1;
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
  layoutMode: _layoutMode = 'vertical',
}) => {
  const [scale, setScale] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [errorRipples, setErrorRipples] = useState<ErrorRipple[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const imgRefA = useRef<HTMLImageElement>(null);
  const imgRefB = useRef<HTMLImageElement>(null);
  const touchDistRef = useRef<number | null>(null);

  // Multi-touch Pinch to Zoom Handler for Mobile
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

  // Auto-focus hint when active
  useEffect(() => {
    if (activeHint) {
      // Zoom into the hint target (approximate center coordinates)
      setScale(2.2);
      // Center the hint: calculate pan
      // In percentage, center is 50%, offset is (50 - target) * factor
      const targetX = (50 - activeHint.x) * 4;
      const targetY = (50 - activeHint.y) * 4;
      setPan({ x: targetX, y: targetY });
    }
  }, [activeHint]);

  // Remove error ripple after animation
  const addErrorFeedback = (x: number, y: number, imageIndex: 0 | 1) => {
    const newRipple: ErrorRipple = {
      id: `${Date.now()}_${Math.random()}`,
      x,
      y,
      imageIndex,
    };
    setErrorRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setErrorRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
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

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    setScale(s => {
      const next = Math.min(4, Math.max(1, Number((s + delta).toFixed(2))));
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  // Mouse/Touch Dragging for Panning
  const handlePointerDown = (e: React.PointerEvent) => {
    // Only drag if zoomed in
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging && scale > 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      // Clamp bounds based on scale
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

  // Hit-testing on image click
  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>, imageIndex: 0 | 1) => {
    // If user was dragging, don't trigger click
    if (isDragging) return;

    const imgElement = imageIndex === 0 ? imgRefA.current : imgRefB.current;
    if (!imgElement) return;

    const rect = imgElement.getBoundingClientRect();
    // Normalized percentage within the image bounds
    const clickXPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const clickYPercent = ((e.clientY - rect.top) / rect.height) * 100;

    // Check if clicked near an unfound difference (generous tolerance for mobile thumbs)
    let matchedDiff: Difference | null = null;

    for (const diff of differences) {
      if (foundDifferenceIds.includes(diff.id)) continue;

      const tolerance = diff.radius || 8.5;
      const dx = clickXPercent - diff.x;
      const dy = clickYPercent - diff.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= tolerance) {
        matchedDiff = diff;
        break;
      }
    }

    if (matchedDiff) {
      onDifferenceClick(matchedDiff, { x: clickXPercent, y: clickYPercent }, imageIndex);
    } else {
      addErrorFeedback(clickXPercent, clickYPercent, imageIndex);
      onErrorClick({ x: clickXPercent, y: clickYPercent }, imageIndex);
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
      className="relative w-full flex-1 min-h-0 bg-[#0b0704] overflow-hidden flex flex-col items-center justify-between p-1 sm:p-1.5 gap-1 select-none"
      style={{ cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'crosshair' }}
    >
      {/* Viewport 1 (Originale / Image A - Sopra) */}
      <div
        className={`relative flex-1 min-h-0 w-full flex items-center justify-center overflow-hidden rounded-xl archeo-cage transition-all duration-300 ${
          isTimeFrozen
            ? 'border-cyan-400 shadow-[inset_0_0_35px_rgba(34,211,238,0.35),0_0_25px_rgba(56,189,248,0.25)] ring-2 ring-cyan-400/50'
            : ''
        }`}
      >
        {/* 4 Antique Brass Corner Brackets */}
        <div className="brass-corner-bracket brass-corner-tl" />
        <div className="brass-corner-bracket brass-corner-tr" />
        <div className="brass-corner-bracket brass-corner-bl" />
        <div className="brass-corner-bracket brass-corner-br" />

        {/* Minimal Cartouche Badge */}
        <div className="absolute top-2 left-2 z-20 cartouche-plate px-2 py-0.5 rounded-lg text-[9px] font-bold text-amber-300 pointer-events-none flex items-center gap-1 shadow-md border border-amber-500/60 font-serif">
          <Compass className="w-3 h-3 text-amber-400" />
          <span>ORIGINALE (A)</span>
        </div>

        {isTimeFrozen && (
          <div className="absolute top-2 right-2 z-20 px-2 py-0.5 bg-cyan-950/90 border border-cyan-400/60 rounded-full text-[9px] font-bold text-cyan-300 flex items-center gap-1 animate-pulse shadow">
            <span>❄️ Tempo Fermo</span>
          </div>
        )}

        <div
          className="relative w-full h-full flex items-center justify-center transition-transform duration-75 ease-out origin-center"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
          }}
          onClick={e => handleImageClick(e, 0)}
        >
          <img
            ref={imgRefA}
            src={imageA}
            alt="Scena A"
            draggable={false}
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg select-none pointer-events-auto block"
          />

          {/* Living Scene Atmospheric Particle Engine (dust motes + sparkles) */}
          <AmbientParticles imageIndex={0} hasSteam={false} />

          {/* Secret Ancient Collectible Relic (Image A) */}
          {hiddenRelic && (
            <HiddenArtifactSpot
              relic={hiddenRelic}
              isDiscovered={isRelicDiscovered}
              onDiscover={onDiscoverRelic || (() => {})}
            />
          )}

          {/* Astrolabe Radar Quadrant Highlight (Image A) */}
          {activeRadar && !foundDifferenceIds.includes(activeRadar.targetDiffId) && (
            <div
              className="absolute pointer-events-none z-20 border-2 border-dashed border-amber-400 bg-amber-400/15 rounded-xl animate-pulse shadow-[0_0_20px_rgba(251,191,36,0.6)]"
              style={{
                left: `${activeRadar.x}%`,
                top: `${activeRadar.y}%`,
                width: `${activeRadar.width}%`,
                height: `${activeRadar.height}%`,
              }}
            >
              <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-amber-950/85 border border-amber-400/50 text-[9px] text-amber-300 font-bold flex items-center gap-1 shadow">
                <Compass className="w-3 h-3 text-amber-400 animate-spin" />
                <span>Settore Rilevato</span>
              </div>
            </div>
          )}

          {/* Render Found Differences Markers */}
          {differences
            .filter(d => foundDifferenceIds.includes(d.id))
            .map(diff => (
              <div
                key={`marker_A_${diff.id}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 animate-ring-pulse"
                style={{ left: `${diff.x}%`, top: `${diff.y}%` }}
              >
                {/* Compact elegant discovery marker */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-[1.5px] border-emerald-400/90 bg-emerald-500/10 shadow-[0_0_6px_rgba(52,211,153,0.5)] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-emerald-300/90" />
                </div>
              </div>
            ))}

          {/* Hint Highlight Spotlight */}
          {activeHint && !foundDifferenceIds.includes(activeHint.id) && (
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-25 animate-hint-glow"
              style={{ left: `${activeHint.x}%`, top: `${activeHint.y}%` }}
            >
              <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full border-3 border-amber-400 bg-amber-400/25 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
              </div>
            </div>
          )}

          {/* Error Ripples on Image A */}
          {errorRipples
            .filter(r => r.imageIndex === 0)
            .map(r => (
              <div
                key={r.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 flex items-center justify-center animate-error-ripple"
                style={{ left: `${r.x}%`, top: `${r.y}%` }}
              >
                <div className="w-8 h-8 rounded-full border-2 border-red-500 bg-red-500/30 flex items-center justify-center shadow-lg">
                  <X className="w-5 h-5 text-red-500 stroke-[3]" />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Antique Brass Separator between Top and Bottom */}
      <div className="w-full flex items-center justify-center gap-2 py-1 px-4 shrink-0">
        <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-amber-500/40 to-amber-400/70" />
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#2a1b0d] via-[#3a2512] to-[#2a1b0d] border border-amber-400/50 shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          <Sparkles className="w-2.5 h-2.5 text-amber-400 animate-spin-slow" />
          <span className="text-[9px] font-black uppercase tracking-wider text-amber-300 font-serif">
            Trova le 10 Differenze Sotto
          </span>
          <Sparkles className="w-2.5 h-2.5 text-amber-400 animate-spin-slow" />
        </div>
        <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-amber-500/40 to-amber-400/70" />
      </div>

      {/* Viewport 2 (Sito Archeologico / Image B - Sotto) */}
      <div
        className={`relative flex-1 min-h-0 w-full flex items-center justify-center overflow-hidden rounded-xl archeo-cage transition-all duration-300 ${
          isTimeFrozen
            ? 'border-cyan-400 shadow-[inset_0_0_35px_rgba(34,211,238,0.35),0_0_25px_rgba(56,189,248,0.25)] ring-2 ring-cyan-400/50'
            : ''
        }`}
      >
        {/* 4 Antique Brass Corner Brackets */}
        <div className="brass-corner-bracket brass-corner-tl" />
        <div className="brass-corner-bracket brass-corner-tr" />
        <div className="brass-corner-bracket brass-corner-bl" />
        <div className="brass-corner-bracket brass-corner-br" />

        {/* Minimal Cartouche Badge */}
        <div className="absolute top-2 left-2 z-20 cartouche-plate px-2 py-0.5 rounded-lg text-[9px] font-bold text-emerald-300 pointer-events-none flex items-center gap-1 shadow-md border border-emerald-500/60 font-serif">
          <MapPin className="w-3 h-3 text-emerald-400" />
          <span>SITO SCAVO (B)</span>
        </div>

        {isTimeFrozen && (
          <div className="absolute top-2 right-2 z-20 px-2.5 py-0.5 bg-cyan-950/90 border border-cyan-400/60 rounded-full text-[9px] font-bold text-cyan-300 flex items-center gap-1 animate-pulse shadow">
            <span>❄️ Tempo Fermo</span>
          </div>
        )}

        <div
          className="relative w-full h-full flex items-center justify-center transition-transform duration-75 ease-out origin-center"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
          }}
          onClick={e => handleImageClick(e, 1)}
        >
          <img
            ref={imgRefB}
            src={imageB}
            alt="Scena B"
            draggable={false}
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg select-none pointer-events-auto block"
          />

          {/* Living Scene Atmospheric Particle Engine (Image B has NO steam over the cup! Dust motes & glints only) */}
          <AmbientParticles imageIndex={1} hasSteam={false} />

          {/* Secret Ancient Collectible Relic (Synchronized on Image B) */}
          {hiddenRelic && (
            <HiddenArtifactSpot
              relic={hiddenRelic}
              isDiscovered={isRelicDiscovered}
              onDiscover={onDiscoverRelic || (() => {})}
            />
          )}

          {/* Astrolabe Radar Quadrant Highlight (Image B - SYNCHRONIZED) */}
          {activeRadar && !foundDifferenceIds.includes(activeRadar.targetDiffId) && (
            <div
              className="absolute pointer-events-none z-20 border-2 border-dashed border-amber-400 bg-amber-400/15 rounded-xl animate-pulse shadow-[0_0_20px_rgba(251,191,36,0.6)]"
              style={{
                left: `${activeRadar.x}%`,
                top: `${activeRadar.y}%`,
                width: `${activeRadar.width}%`,
                height: `${activeRadar.height}%`,
              }}
            >
              <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-amber-950/85 border border-amber-400/50 text-[9px] text-amber-300 font-bold flex items-center gap-1 shadow">
                <Compass className="w-3 h-3 text-amber-400 animate-spin" />
                <span>Settore Rilevato</span>
              </div>
            </div>
          )}

          {/* Render Found Differences Markers (SYNCHRONIZED on Image B) */}
          {differences
            .filter(d => foundDifferenceIds.includes(d.id))
            .map(diff => (
              <div
                key={`marker_B_${diff.id}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 animate-ring-pulse"
                style={{ left: `${diff.x}%`, top: `${diff.y}%` }}
              >
                {/* Compact elegant discovery marker */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-[1.5px] border-emerald-400/90 bg-emerald-500/10 shadow-[0_0_6px_rgba(52,211,153,0.5)] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-emerald-300/90" />
                </div>
              </div>
            ))}

          {/* Hint Highlight Spotlight (SYNCHRONIZED on Image B) */}
          {activeHint && !foundDifferenceIds.includes(activeHint.id) && (
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-25 animate-hint-glow"
              style={{ left: `${activeHint.x}%`, top: `${activeHint.y}%` }}
            >
              <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full border-3 border-amber-400 bg-amber-400/25 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
              </div>
            </div>
          )}

          {/* Error Ripples on Image B */}
          {errorRipples
            .filter(r => r.imageIndex === 1)
            .map(r => (
              <div
                key={r.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 flex items-center justify-center animate-error-ripple"
                style={{ left: `${r.x}%`, top: `${r.y}%` }}
              >
                <div className="w-8 h-8 rounded-full border-2 border-red-500 bg-red-500/30 flex items-center justify-center shadow-lg">
                  <X className="w-5 h-5 text-red-500 stroke-[3]" />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Floating Minimal Zoom Controls */}
      <div className="absolute bottom-2 right-2 z-30 flex items-center gap-1 bg-[#1a0f07]/90 backdrop-blur-md p-1 rounded-full border border-amber-500/40 shadow-xl">
        <button
          onClick={handleZoomOut}
          disabled={scale <= 1}
          className="p-1 rounded-full hover:bg-stone-800 disabled:opacity-30 text-amber-300 active:scale-90 transition-all"
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
          className="p-1 rounded-full hover:bg-stone-800 disabled:opacity-30 text-amber-300 active:scale-90 transition-all"
          title="Zoom Avanti"
        >
          <ZoomIn className="w-3.5 h-3.5" />
        </button>

        {scale > 1 && (
          <button
            onClick={handleResetZoom}
            className="p-1 rounded-full bg-amber-500/30 hover:bg-amber-500/50 text-amber-200 active:scale-90 transition-all"
            title="Reimposta (100%)"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
