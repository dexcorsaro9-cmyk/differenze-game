import React, { useRef, useEffect, useState, useCallback } from 'react';
import { X, Crosshair } from 'lucide-react';
import { triggerHaptic } from '../utils/haptics';

interface BrassMagnifyingLoupeProps {
  imageSrc: string;
  containerRect: DOMRect | null;
  imgRect: DOMRect | null;
  pointerPos: { x: number; y: number }; // Relative to container: px
  imageNaturalSize?: { width: number; height: number };
  onClose: () => void;
  onLensClick: (clickPercentage: { x: number; y: number }) => void;
  magnification?: number; // Default 2.5
  lensSize?: number; // Default 196
  filterStyle?: string;
}

export const BrassMagnifyingLoupe: React.FC<BrassMagnifyingLoupeProps> = ({
  imageSrc,
  containerRect,
  imgRect,
  pointerPos,
  onClose,
  onLensClick,
  magnification = 2.5,
  lensSize = 196,
  filterStyle,
}) => {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: pointerPos.x, y: pointerPos.y });
  const isDraggingRef = useRef(false);
  const dragOffsetRef = useRef({ x: 0, y: 0 });

  // Update position when pointerPos changes externally (unless user is actively dragging the loupe)
  useEffect(() => {
    if (!isDraggingRef.current) {
      setPos(pointerPos);
    }
  }, [pointerPos]);

  // Compute percentage coordinates relative to the underlying image
  const getImgPercent = useCallback(
    (clientX: number, clientY: number) => {
      if (!imgRect || imgRect.width <= 0 || imgRect.height <= 0) return null;
      const relX = (clientX - imgRect.left) / imgRect.width;
      const relY = (clientY - imgRect.top) / imgRect.height;
      if (relX < 0 || relX > 1 || relY < 0 || relY > 1) return null;
      return { x: relX, y: relY };
    },
    [imgRect]
  );

  // Center coordinates relative to screen
  const screenCenterX = (containerRect?.left ?? 0) + pos.x;
  const screenCenterY = (containerRect?.top ?? 0) + pos.y;

  // Percentage on the photo at the exact center reticle
  const centerPercent = getImgPercent(screenCenterX, screenCenterY);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    isDraggingRef.current = true;
    dragOffsetRef.current = {
      x: e.clientX - screenCenterX,
      y: e.clientY - screenCenterY,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !containerRect) return;
    const newX = e.clientX - containerRect.left - dragOffsetRef.current.x;
    const newY = e.clientY - containerRect.top - dragOffsetRef.current.y;
    setPos({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if not captured
    }
  };

  const handleClickThrough = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (centerPercent) {
      triggerHaptic('light');
      onLensClick(centerPercent);
    }
  };

  // Background position for the magnified image
  // The center of the loupe should correspond to the image's coordinate under the center of the lens
  let bgStyle: React.CSSProperties = {};
  if (imgRect && containerRect && centerPercent) {
    const bgWidth = imgRect.width * magnification;
    const bgHeight = imgRect.height * magnification;
    const offsetX = centerPercent.x * bgWidth - lensSize / 2;
    const offsetY = centerPercent.y * bgHeight - lensSize / 2;

    bgStyle = {
      backgroundImage: `url(${imageSrc})`,
      backgroundSize: `${bgWidth}px ${bgHeight}px`,
      backgroundPosition: `-${offsetX}px -${offsetY}px`,
      backgroundRepeat: 'no-repeat',
      filter: filterStyle,
    };
  }

  const radius = lensSize / 2;

  return (
    <div
      className="absolute pointer-events-auto select-none z-30 touch-none group"
      style={{
        left: pos.x - radius,
        top: pos.y - radius,
        width: lensSize,
        height: lensSize,
        filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.65)) drop-shadow(0 3px 6px rgba(0,0,0,0.4))',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onClick={handleClickThrough}
    >
      {/* Outer Ornate Victorian Brass Ring */}
      <div
        className="w-full h-full rounded-full relative overflow-hidden flex items-center justify-center cursor-crosshair transition-transform duration-75 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #f5d061 0%, #d4af37 25%, #8b6508 50%, #e6ca65 75%, #5c3e06 100%)',
          padding: '9px',
          boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.7), inset 0 -3px 6px rgba(0,0,0,0.8)',
        }}
      >
        {/* Beveled Brass Inner Ring with Filigree Engravings */}
        <div
          className="w-full h-full rounded-full relative overflow-hidden"
          style={{
            border: '2.5px solid #2a1b07',
            boxShadow: 'inset 0 0 12px rgba(0,0,0,0.7)',
          }}
        >
          {/* Magnified Image Viewport */}
          <div
            className="w-full h-full rounded-full relative"
            style={{
              ...bgStyle,
              backgroundColor: '#1a1815',
            }}
          >
            {/* Convex Optical Glass Shading (Vignette & Spherical Distortion Illusion) */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 35%, rgba(0,0,0,0.1) 65%, rgba(0,0,0,0.55) 100%)',
                boxShadow: 'inset 0 0 16px rgba(0,0,0,0.65)',
              }}
            />

            {/* Specular Diagonal Reflection Glint */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none opacity-40 mix-blend-overlay"
              style={{
                background:
                  'linear-gradient(125deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 42%, rgba(255,255,255,0.3) 65%, rgba(255,255,255,0) 80%)',
              }}
            />

            {/* Brass Forensic Reticle Crosshair & Calibrated Ticks */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border border-amber-400/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_6px_rgba(245,208,97,0.9)]" />
              </div>
              {/* Horizontal Crosshair Hairlines */}
              <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
              {/* Vertical Crosshair Hairlines */}
              <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-amber-400/40 to-transparent" />
            </div>

            {/* Coordinate HUD pill badge at bottom */}
            {centerPercent && (
              <div className="absolute bottom-2 inset-x-0 mx-auto w-fit px-2 py-0.5 rounded-full bg-black/75 border border-amber-500/40 text-[9px] font-mono text-amber-200 tracking-wider backdrop-blur-sm pointer-events-none shadow-md">
                {Math.round(centerPercent.x * 100)}%E · {Math.round(centerPercent.y * 100)}%N
              </div>
            )}
          </div>
        </div>

        {/* Vintage Brass Handle Accent (Ornamental Pointer) */}
        <div
          className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full pointer-events-none -z-10"
          style={{
            background: 'linear-gradient(135deg, #8b6508 0%, #3e2704 100%)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.6)',
            transform: 'rotate(45deg)',
          }}
        />
      </div>

      {/* Floating Close Pill Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        title="Riponi Lente"
        className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-amber-950 border border-amber-400 text-amber-200 hover:bg-amber-900 hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg transition-transform z-40"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      {/* Loupe Tooltip Indicator */}
      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded bg-amber-950/90 border border-amber-500/50 text-[10px] text-amber-300 font-serif tracking-wide shadow-md pointer-events-none flex items-center gap-1">
        <Crosshair className="w-3 h-3 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
        <span>Lente 2.5× (Trascina o Tocca)</span>
      </div>
    </div>
  );
};
