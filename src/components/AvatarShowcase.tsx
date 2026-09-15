import React, { useState, useRef, useEffect } from 'react';
import {
  EXPLORERS,
  ALL_ACCESSORIES,
  type ExplorerProfile,
} from '../data/avatarData';
import {
  Sparkles,
  RotateCcw,
  Crown,
  Music,
  Shield,
  Compass,
  Layers,
  RotateCw,
  Eye,
  Backpack,
  Footprints,
  Hammer,
  Play,
  Pause,
} from 'lucide-react';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';

export type EquipmentSlotType =
  | 'headgear'
  | 'talisman'
  | 'torso'
  | 'back'
  | 'main_hand'
  | 'off_hand'
  | 'legs'
  | 'boots';

export interface AvatarShowcaseProps {
  profile: ExplorerProfile;
  previewOutfitId: string | null;
  previewHeadgearId: string | null;
  previewToolId: string | null;
  previewOffHandId?: string | null;
  previewLegsId?: string | null;
  previewBootsId?: string | null;
  previewTalismanId: string | null;
  previewBackId?: string | null;
  selectedSlot: EquipmentSlotType;
  onSelectSlot: (slot: EquipmentSlotType) => void;
  onClearPreview: () => void;
  onSelectInspectItem: (itemId: string, isOutfit: boolean) => void;
  showSlotNodes?: boolean;
  showControls?: boolean;
}

export const AvatarShowcase: React.FC<AvatarShowcaseProps> = ({
  profile,
  previewOutfitId,
  previewHeadgearId,
  previewToolId,
  previewOffHandId,
  previewLegsId,
  previewBootsId,
  previewTalismanId,
  previewBackId,
  selectedSlot,
  onSelectSlot,
  onClearPreview,
  showSlotNodes = true,
  showControls = true,
}) => {
  const [cameraZoom, setCameraZoom] = useState<'full' | 'chest' | 'face'>('full');
  const [rotation, setRotation] = useState<number>(0); // 0 = front, 180 = back
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [dragStartRot, setDragStartRot] = useState<number>(0);
  const [isAutoSpin, setIsAutoSpin] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const currentExplorer = EXPLORERS[profile.avatarId] || EXPLORERS.samira;

  // Active items (preview or equipped)
  const displayOutfitId = previewOutfitId || profile.equippedOutfitId;
  const displayHeadgearId = previewHeadgearId !== null ? previewHeadgearId : profile.equippedHeadgearId;
  const displayToolId = previewToolId !== null ? previewToolId : (profile.equippedToolId || 'tool_theodolite');
  const displayOffHandId = previewOffHandId !== null ? previewOffHandId : (profile.equippedOffHandId || 'off_compass_brass');
  const displayLegsId = previewLegsId !== null ? previewLegsId : (profile.equippedLegsId || 'legs_cargo_khaki');
  const displayBootsId = previewBootsId !== null ? previewBootsId : (profile.equippedBootsId || 'boots_leather_hiker');
  const displayTalismanId = previewTalismanId !== null ? previewTalismanId : profile.equippedTalismanId;
  const displayBackId = previewBackId !== null ? previewBackId : (profile.equippedBackId || 'back_canvas_pack');

  const displayHeadgear = ALL_ACCESSORIES.find(a => a.id === displayHeadgearId);
  const displayTool = ALL_ACCESSORIES.find(a => a.id === displayToolId);
  const displayOffHand = ALL_ACCESSORIES.find(a => a.id === displayOffHandId);
  const displayLegs = ALL_ACCESSORIES.find(a => a.id === displayLegsId);
  const displayBoots = ALL_ACCESSORIES.find(a => a.id === displayBootsId);
  const displayTalisman = ALL_ACCESSORIES.find(a => a.id === displayTalismanId);
  const displayBack = ALL_ACCESSORIES.find(a => a.id === displayBackId);

  const isAnyPreviewActive =
    previewOutfitId !== null ||
    previewHeadgearId !== null ||
    previewToolId !== null ||
    previewOffHandId !== null ||
    previewLegsId !== null ||
    previewBootsId !== null ||
    previewTalismanId !== null ||
    previewBackId !== null;

  // Normalized rotation in [0, 360)
  const normRot = ((rotation % 360) + 360) % 360;
  // If angle is between 90 and 270, we are looking at the BACK of the character!
  const isFacingBack = normRot > 90 && normRot < 270;

  // Auto spin animation loop
  useEffect(() => {
    if (!isAutoSpin) return;
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isAutoSpin]);

  // Smoothly turn character to rear view (180°) when selecting back equipment slot
  useEffect(() => {
    if (selectedSlot === 'back') {
      setIsAutoSpin(false);
      setRotation(180);
    }
  }, [selectedSlot]);

  // Touch & Mouse Drag Handlers for 3D Turntable
  const handlePointerDown = (clientX: number) => {
    setIsDragging(true);
    setIsAutoSpin(false);
    setDragStartX(clientX);
    setDragStartRot(rotation);
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDragging) return;
    const deltaX = clientX - dragStartX;
    // 0.8 degrees per pixel of horizontal drag
    const newRot = dragStartRot + deltaX * 0.8;
    setRotation(newRot);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const rotateTo = (deg: number) => {
    setIsAutoSpin(false);
    sound.playTap();
    triggerHaptic('light');
    setRotation(deg);
  };

  const rotateBy = (delta: number) => {
    setIsAutoSpin(false);
    sound.playTap();
    triggerHaptic('light');
    setRotation(prev => prev + delta);
  };

  const getOutfitShaderClass = () => {
    switch (displayOutfitId) {
      case 'samira_speleo':
      case 'mateo_recon':
        return 'hue-rotate-[-25deg] saturate-125 contrast-110';
      case 'samira_rain':
      case 'mateo_alpine':
        return 'sepia-[0.25] contrast-105';
      case 'samira_cenote':
      case 'mateo_jungle':
        return 'hue-rotate-[40deg] saturate-140 brightness-105';
      case 'samira_society':
      case 'mateo_guild':
        return 'sepia-[0.15] contrast-115 brightness-105';
      case 'samira_inti':
      case 'mateo_guard':
        return 'sepia-[0.35] saturate-150 brightness-110';
      default:
        return '';
    }
  };

  const getCameraTransformClass = () => {
    switch (cameraZoom) {
      case 'face':
        return 'scale-[2.3] translate-y-[28%] translate-x-[0%]';
      case 'chest':
        return 'scale-[1.55] translate-y-[12%] translate-x-[0%]';
      default:
        return 'scale-100 translate-y-0';
    }
  };

  const handleNodeClick = (e: React.MouseEvent, slot: EquipmentSlotType) => {
    e.stopPropagation();
    onSelectSlot(slot);
    sound.playTap();
    triggerHaptic('light');
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={(e) => {
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch {}
        handlePointerDown(e.clientX);
      }}
      onPointerMove={(e) => {
        handlePointerMove(e.clientX);
      }}
      onPointerUp={(e) => {
        try {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId);
          }
        } catch {}
        handlePointerUp();
      }}
      onPointerCancel={(e) => {
        try {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId);
          }
        } catch {}
        handlePointerUp();
      }}
      className="relative w-full h-full min-h-[300px] sm:min-h-[380px] md:min-h-[480px] flex items-center justify-center bg-gradient-to-b from-[#22130a] via-[#100602] to-[#1a0c05] rounded-3xl border-2 border-amber-500/60 overflow-hidden select-none shadow-[inset_0_0_90px_rgba(0,0,0,0.95)] cursor-grab active:cursor-grabbing touch-none"
      style={{ perspective: '1200px', touchAction: 'none' }}
    >
      {/* Dynamic 3D Atmosphere Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-80 h-28 bg-yellow-500/25 rounded-full blur-2xl pointer-events-none" />

      {/* Fitting Room Preview Border Glow */}
      {isAnyPreviewActive && (
        <div className="absolute inset-0 border-2 border-amber-400 pointer-events-none z-30 shadow-[inset_0_0_40px_rgba(245,158,11,0.5)] animate-pulse rounded-3xl" />
      )}

      {/* Top Banner if Preview Active */}
      {isAnyPreviewActive && (
        <div className="absolute top-2 left-2 right-2 sm:left-4 sm:right-4 z-40 flex items-center justify-between bg-stone-900/95 border border-amber-400/80 rounded-xl px-2.5 py-1.5 shadow-2xl backdrop-blur-md pointer-events-auto">
          <div className="flex items-center gap-1.5 text-xs text-amber-200 font-bold truncate">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-spin-slow" />
            <span className="text-[10px] uppercase text-amber-400 tracking-wider">Camerino RPG:</span>
            <span className="truncate text-[11px]">Oggetti in Prova Attivi</span>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClearPreview();
              sound.playTap();
              triggerHaptic('light');
            }}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 text-[10px] font-bold border border-stone-600 transition cursor-pointer shrink-0 active:scale-95"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Ripristina</span>
          </button>
        </div>
      )}

      {/* Top Controls: Camera Zoom & Auto-Turntable */}
      {showControls && (
        <div
          className={`absolute ${
            isAnyPreviewActive ? 'top-12' : 'top-3'
          } right-2 sm:right-3 z-30 flex items-center gap-1 bg-black/85 backdrop-blur-md border border-amber-500/50 rounded-xl p-1 shadow-2xl transition-all pointer-events-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => { setCameraZoom('full'); sound.playTap(); }}
            className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition cursor-pointer ${
              cameraZoom === 'full' ? 'bg-amber-500 text-stone-950 font-black' : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Intera
          </button>
          <button
            type="button"
            onClick={() => { setCameraZoom('chest'); sound.playTap(); }}
            className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition cursor-pointer ${
              cameraZoom === 'chest' ? 'bg-amber-500 text-stone-950 font-black' : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Busto
          </button>
          <button
            type="button"
            onClick={() => { setCameraZoom('face'); sound.playTap(); }}
            className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition cursor-pointer ${
              cameraZoom === 'face' ? 'bg-amber-500 text-stone-950 font-black' : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Viso
          </button>
          <div className="w-[1px] h-3.5 bg-amber-500/40 mx-0.5" />
          <button
            type="button"
            onClick={() => { setIsAutoSpin(prev => !prev); sound.playTap(); }}
            title={isAutoSpin ? "Pausa Rotazione 3D" : "Avvia Rotazione 3D Automatica"}
            className={`p-1 rounded-lg text-[10px] transition cursor-pointer ${
              isAutoSpin ? 'bg-amber-500 text-stone-950' : 'text-amber-400/80 hover:text-amber-200'
            }`}
          >
            {isAutoSpin ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
        </div>
      )}

      {/* 3D Directional Quick-View Compass / Angle Indicator (Top Left) */}
      <div
        className={`absolute ${
          isAnyPreviewActive ? 'top-12' : 'top-3'
        } left-2 sm:left-3 z-30 flex items-center gap-1.5 bg-black/85 backdrop-blur-md border border-amber-500/50 rounded-xl px-2.5 py-1 shadow-2xl transition-all pointer-events-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <Compass className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
        <span className="text-[10px] font-mono font-bold text-amber-300">
          {Math.round(normRot)}° • {isFacingBack ? 'RETRO' : 'FRONTE'}
        </span>
      </div>

      {/* ============================================================== */}
      {/* 3D ROTATABLE HERO CHARACTER CONTAINER (Fills entire box)        */}
      {/* ============================================================== */}
      <div className="relative w-full h-full flex items-center justify-center p-1 sm:p-2 overflow-hidden pointer-events-none">
        <div
          className={`relative w-full h-full flex items-center justify-center transition-transform duration-500 origin-center ${getCameraTransformClass()}`}
        >
          {/* THE 3D ROTATABLE CARD WITH PRESERVE-3D */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{
              transform: `rotateY(${rotation}deg)`,
              transformStyle: 'preserve-3d',
              transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* FRONT VIEW (Visible when rotation is facing front: -90° to +90°) */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
                isFacingBack ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              {/* Main Front Character Image: Fills height & width naturally, centered */}
              <img
                src={currentExplorer.image}
                alt={currentExplorer.name}
                className={`h-full w-full max-h-full max-w-full object-contain object-center drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] transition-all duration-300 ${getOutfitShaderClass()}`}
              />

              {/* ========================================================== */}
              {/* FRONT VISUAL OVERLAYS: GEAR SHOWN DIRECTLY ON CHARACTER    */}
              {/* ========================================================== */}

              {/* 1. HEADGEAR OVERLAYS */}
              {displayHeadgear?.id === 'acc_solar_crown' && (
                <div className="absolute top-[7.5%] left-[50%] -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center">
                  <div className="w-16 h-8 bg-gradient-to-t from-yellow-500 via-amber-300 to-yellow-100 rounded-t-full border-2 border-amber-300 shadow-[0_0_25px_#f59e0b] flex items-center justify-center animate-pulse">
                    <Crown className="w-4 h-4 text-stone-950 fill-stone-950" />
                  </div>
                </div>
              )}

              {displayHeadgear?.id === 'acc_speleo_helmet' && (
                <div className="absolute top-[8%] left-[50%] -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center">
                  <div className="w-14 h-6 bg-gradient-to-b from-stone-700 via-stone-800 to-stone-950 rounded-t-xl border border-amber-500/60 shadow-lg flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-amber-300 shadow-[0_0_20px_#fde047] border border-white animate-pulse" />
                  </div>
                  {/* Spotlight projection cone down the body */}
                  <div
                    className="w-24 h-44 bg-gradient-to-b from-amber-200/35 via-amber-100/15 to-transparent pointer-events-none blur-[3px]"
                    style={{ clipPath: 'polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)' }}
                  />
                </div>
              )}

              {displayHeadgear?.id === 'acc_wax_hat' && (
                <div className="absolute top-[7.5%] left-[50%] -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center">
                  {/* Fedora/Safari Brim */}
                  <div className="w-24 h-4 bg-[#4a2e18] rounded-full border border-amber-800 shadow-md flex items-center justify-center">
                    <div className="w-16 h-5 -mt-3 bg-gradient-to-t from-[#3d2412] to-[#5a381e] rounded-t-lg border-t border-amber-700/60" />
                  </div>
                  <div className="w-16 h-1 bg-amber-600/80 -mt-1 rounded-full" />
                </div>
              )}

              {displayHeadgear?.id === 'acc_visor' && (
                <div className="absolute top-[11.5%] left-[50%] -translate-x-1/2 z-20 pointer-events-none">
                  <div className="w-16 h-4 bg-gradient-to-r from-amber-500/80 via-yellow-400/90 to-amber-500/80 rounded-md border border-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.7)] backdrop-blur-xs flex items-center justify-center">
                    <div className="w-14 h-0.5 bg-amber-100/80" />
                  </div>
                </div>
              )}

              {displayHeadgear?.id === 'acc_bandana' && (
                <div className="absolute top-[10.5%] left-[50%] -translate-x-1/2 z-20 pointer-events-none">
                  <div className="w-16 h-3.5 bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 rounded-sm border-y border-emerald-400 shadow-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-300 rounded-full animate-ping" />
                  </div>
                </div>
              )}

              {/* 2. TALISMAN / NECK OVERLAYS */}
              {displayTalisman?.id === 'talisman_jade_chachapoya' && (
                <div className="absolute top-[20.5%] left-[50%] -translate-x-1/2 z-20 pointer-events-none">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-emerald-700 via-emerald-400 to-teal-200 border-2 border-emerald-300 shadow-[0_0_18px_#10b981] animate-pulse flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-emerald-950" />
                  </div>
                </div>
              )}

              {displayTalisman?.id === 'talisman_jaguar_tooth' && (
                <div className="absolute top-[21%] left-[50%] -translate-x-1/2 z-20 pointer-events-none">
                  <div className="w-3.5 h-6 bg-gradient-to-b from-amber-100 via-yellow-300 to-amber-600 rounded-b-full border border-amber-400 shadow-[0_0_12px_#f59e0b] transform rotate-12 flex items-center justify-center">
                    <div className="w-1 h-3 bg-amber-800 rounded-full" />
                  </div>
                </div>
              )}

              {displayTalisman?.id === 'talisman_sun_disk_mini' && (
                <div className="absolute top-[20.5%] left-[50%] -translate-x-1/2 z-20 pointer-events-none">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-200 border-2 border-amber-300 shadow-[0_0_16px_#fbbf24] animate-pulse flex items-center justify-center">
                    <Crown className="w-3 h-3 text-stone-950" />
                  </div>
                </div>
              )}

              {/* 3. TORSO / OUTFIT EMBLEMS & SASHES */}
              {displayOutfitId?.includes('inti') && (
                <div className="absolute top-[26%] left-[50%] -translate-x-1/2 z-15 pointer-events-none">
                  <div className="w-20 h-2 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 rounded-full shadow-[0_0_10px_#f59e0b] border border-amber-300" />
                </div>
              )}

              {displayOutfitId?.includes('society') && (
                <div className="absolute top-[28%] left-[45%] z-15 pointer-events-none">
                  <div className="w-4 h-4 rounded-full bg-amber-400 border border-white shadow-md flex items-center justify-center text-[7px] font-black text-stone-900">
                    RGS
                  </div>
                </div>
              )}

              {/* 4. MAIN HAND TOOL (Right side of screen = character's left/right hand) */}
              {displayTool && (
                <div className="absolute top-[44%] left-[28%] -translate-x-1/2 z-20 pointer-events-none animate-fadeIn">
                  <div className="flex flex-col items-center p-1 rounded-xl bg-black/85 border border-amber-400/90 shadow-[0_0_15px_rgba(245,158,11,0.6)]">
                    {displayTool.id === 'tool_tuning_fork' ? (
                      <Music className="w-5 h-5 text-amber-300 animate-pulse" />
                    ) : displayTool.id === 'tool_monocle' ? (
                      <Eye className="w-5 h-5 text-cyan-300 animate-pulse" />
                    ) : (
                      <Hammer className="w-5 h-5 text-amber-400" />
                    )}
                  </div>
                </div>
              )}

              {/* 5. OFF-HAND ITEM (Left side of screen = character's opposite hand) */}
              {displayOffHand && (
                <div className="absolute top-[44%] left-[72%] -translate-x-1/2 z-20 pointer-events-none animate-fadeIn">
                  <div className="flex flex-col items-center p-1 rounded-xl bg-black/85 border border-amber-400/90 shadow-[0_0_15px_rgba(245,158,11,0.6)]">
                    {displayOffHand.id === 'off_sacred_shield' ? (
                      <Shield className="w-6 h-6 text-yellow-400 fill-amber-500/30" />
                    ) : displayOffHand.id === 'off_lantern_brass' ? (
                      <div className="w-6 h-6 bg-gradient-to-t from-amber-700 to-yellow-300 rounded-lg flex items-center justify-center shadow-[0_0_20px_#f59e0b]">
                        <Sparkles className="w-4 h-4 text-stone-950" />
                      </div>
                    ) : (
                      <Compass className="w-5 h-5 text-amber-300" />
                    )}
                  </div>
                </div>
              )}

              {/* 6. LEGS GEAR BADGE */}
              {displayLegs && displayLegs.id !== 'legs_cargo_khaki' && (
                <div className="absolute top-[62%] left-[50%] -translate-x-1/2 z-15 pointer-events-none">
                  <div className="px-2 py-0.5 rounded-full bg-stone-900/90 border border-amber-500/60 text-[8px] font-bold text-amber-300 shadow-md flex items-center gap-1">
                    <Shield className="w-2.5 h-2.5 text-amber-400" />
                    <span className="truncate max-w-[80px]">{displayLegs.name.split(' ')[0]}</span>
                  </div>
                </div>
              )}

              {/* 7. BOOTS GEAR BADGE */}
              {displayBoots && displayBoots.id !== 'boots_leather_hiker' && (
                <div className="absolute top-[82%] left-[50%] -translate-x-1/2 z-15 pointer-events-none">
                  <div className="px-2 py-0.5 rounded-full bg-stone-900/90 border border-amber-500/60 text-[8px] font-bold text-amber-300 shadow-md flex items-center gap-1">
                    <Footprints className="w-2.5 h-2.5 text-amber-400" />
                    <span className="truncate max-w-[80px]">{displayBoots.name.split(' ')[0]}</span>
                  </div>
                </div>
              )}
            </div>

            {/* BACK VIEW (Visible when rotation is facing rear: 90° to 270°) */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
                isFacingBack ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              style={{ transform: 'rotateY(180deg)' }}
            >
              {/* Back Character Image: Full body on stone pedestal seen from behind */}
              <img
                src={currentExplorer.backImage}
                alt={`${currentExplorer.name} (Vista Posteriore)`}
                className={`h-full w-full max-h-full max-w-full object-contain object-center drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] transition-all duration-300 ${getOutfitShaderClass()}`}
              />

              {/* ========================================================== */}
              {/* BACK VISUAL OVERLAYS: GEAR SHOWN ON CHARACTER'S REAR       */}
              {/* ========================================================== */}

              {/* BACK EQUIPMENT BADGE & HARNESS OVERLAYS */}
              {displayBack && (
                <div className="absolute top-[28%] left-[50%] -translate-x-1/2 z-25 pointer-events-none animate-fadeIn">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-xl bg-black/90 border-2 border-amber-400/90 shadow-[0_0_20px_rgba(245,158,11,0.8)] text-amber-200">
                    <Backpack className="w-4 h-4 text-amber-400 animate-pulse" />
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] font-black text-amber-300 uppercase tracking-wider">
                        {displayBack.name}
                      </span>
                      <span className="text-[7.5px] text-stone-400">Equipaggiato sulla Schiena</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Rear Hat / Headgear Indicator */}
              {displayHeadgear && (
                <div className="absolute top-[8%] left-[50%] -translate-x-1/2 z-20 pointer-events-none">
                  <div className="w-12 h-3 bg-amber-900/80 rounded-full border border-amber-600/50 shadow-sm" />
                </div>
              )}

              {/* Rear Legs Indicator */}
              {displayLegs && displayLegs.id !== 'legs_cargo_khaki' && (
                <div className="absolute top-[62%] left-[50%] -translate-x-1/2 z-15 pointer-events-none">
                  <div className="px-2 py-0.5 rounded-full bg-stone-900/90 border border-amber-500/60 text-[8px] font-bold text-amber-300 shadow-md flex items-center gap-1">
                    <Shield className="w-2.5 h-2.5 text-amber-400" />
                    <span className="truncate max-w-[80px]">{displayLegs.name.split(' ')[0]}</span>
                  </div>
                </div>
              )}

              {/* Rear Boots Indicator */}
              {displayBoots && displayBoots.id !== 'boots_leather_hiker' && (
                <div className="absolute top-[82%] left-[50%] -translate-x-1/2 z-15 pointer-events-none">
                  <div className="px-2 py-0.5 rounded-full bg-stone-900/90 border border-amber-500/60 text-[8px] font-bold text-amber-300 shadow-md flex items-center gap-1">
                    <Footprints className="w-2.5 h-2.5 text-amber-400" />
                    <span className="truncate max-w-[80px]">{displayBoots.name.split(' ')[0]}</span>
                  </div>
                </div>
              )}
            </div>

            {/* ============================================================== */}
            {/* INTERACTIVE BODY TARGET NODES (CLICK BODY PART TO EQUIP SLOT)  */}
            {/* ============================================================== */}
            {showSlotNodes && !isFacingBack && (
              <div className="hidden md:contents pointer-events-auto">
                {/* Node 1: TESTA */}
                <button
                  type="button"
                  onClick={(e) => handleNodeClick(e, 'headgear')}
                  className={`absolute top-[9%] left-[50%] -translate-x-1/2 z-30 p-1.5 rounded-full transition-all cursor-pointer ${
                    selectedSlot === 'headgear'
                      ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_20px_#f59e0b] ring-2 ring-yellow-300'
                      : 'bg-black/80 hover:bg-amber-600/90 text-amber-300 border border-amber-500/70 shadow-md'
                  }`}
                  title="Testa / Copricapo"
                >
                  <Crown className="w-3.5 h-3.5" />
                </button>

                {/* Node 2: COLLO */}
                <button
                  type="button"
                  onClick={(e) => handleNodeClick(e, 'talisman')}
                  className={`absolute top-[18.5%] left-[50%] -translate-x-1/2 z-30 p-1.5 rounded-full transition-all cursor-pointer ${
                    selectedSlot === 'talisman'
                      ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_20px_#f59e0b] ring-2 ring-yellow-300'
                      : 'bg-black/80 hover:bg-amber-600/90 text-amber-300 border border-amber-500/70 shadow-md'
                  }`}
                  title="Collo / Amuleto Sacro"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                </button>

                {/* Node 3: BUSTO */}
                <button
                  type="button"
                  onClick={(e) => handleNodeClick(e, 'torso')}
                  className={`absolute top-[30%] left-[50%] -translate-x-1/2 z-30 p-1.5 rounded-full transition-all cursor-pointer ${
                    selectedSlot === 'torso'
                      ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_20px_#f59e0b] ring-2 ring-yellow-300'
                      : 'bg-black/80 hover:bg-amber-600/90 text-amber-300 border border-amber-500/70 shadow-md'
                  }`}
                  title="Busto / Tenuta & Giacca"
                >
                  <Layers className="w-3.5 h-3.5" />
                </button>

                {/* Node 4: SCHIENA / ZAINO */}
                <button
                  type="button"
                  onClick={(e) => {
                    handleNodeClick(e, 'back');
                    rotateTo(180); // Auto-turn to back when back slot clicked!
                  }}
                  className={`absolute top-[26%] left-[69%] -translate-x-1/2 z-30 p-1.5 rounded-full transition-all cursor-pointer ${
                    selectedSlot === 'back'
                      ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_20px_#f59e0b] ring-2 ring-yellow-300'
                      : 'bg-black/80 hover:bg-amber-600/90 text-amber-300 border border-amber-500/70 shadow-md'
                  }`}
                  title="Schiena / Zaino & Mantello (Clicca per girare al retro)"
                >
                  <Backpack className="w-3.5 h-3.5" />
                </button>

                {/* Node 5: MANO DESTRA */}
                <button
                  type="button"
                  onClick={(e) => handleNodeClick(e, 'main_hand')}
                  className={`absolute top-[44%] left-[28%] -translate-x-1/2 z-30 p-1.5 rounded-full transition-all cursor-pointer ${
                    selectedSlot === 'main_hand'
                      ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_20px_#f59e0b] ring-2 ring-yellow-300'
                      : 'bg-black/80 hover:bg-amber-600/90 text-amber-300 border border-amber-500/70 shadow-md'
                  }`}
                  title="Mano Destra / Strumento Primario"
                >
                  <Hammer className="w-3.5 h-3.5" />
                </button>

                {/* Node 6: MANO SINISTRA */}
                <button
                  type="button"
                  onClick={(e) => handleNodeClick(e, 'off_hand')}
                  className={`absolute top-[44%] left-[72%] -translate-x-1/2 z-30 p-1.5 rounded-full transition-all cursor-pointer ${
                    selectedSlot === 'off_hand'
                      ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_20px_#f59e0b] ring-2 ring-yellow-300'
                      : 'bg-black/80 hover:bg-amber-600/90 text-amber-300 border border-amber-500/70 shadow-md'
                  }`}
                  title="Mano Sinistra / Scudo & Carte"
                >
                  <Shield className="w-3.5 h-3.5" />
                </button>

                {/* Node 7: GAMBE */}
                <button
                  type="button"
                  onClick={(e) => handleNodeClick(e, 'legs')}
                  className={`absolute top-[60%] left-[50%] -translate-x-1/2 z-30 p-1.5 rounded-full transition-all cursor-pointer ${
                    selectedSlot === 'legs'
                      ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_20px_#f59e0b] ring-2 ring-yellow-300'
                      : 'bg-black/80 hover:bg-amber-600/90 text-amber-300 border border-amber-500/70 shadow-md'
                  }`}
                  title="Gambe / Pantaloni Tattici"
                >
                  <Shield className="w-3.5 h-3.5" />
                </button>

                {/* Node 8: PIEDI */}
                <button
                  type="button"
                  onClick={(e) => handleNodeClick(e, 'boots')}
                  className={`absolute top-[80%] left-[50%] -translate-x-1/2 z-30 p-1.5 rounded-full transition-all cursor-pointer ${
                    selectedSlot === 'boots'
                      ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_20px_#f59e0b] ring-2 ring-yellow-300'
                      : 'bg-black/80 hover:bg-amber-600/90 text-amber-300 border border-amber-500/70 shadow-md'
                  }`}
                  title="Piedi / Stivali da Marcia"
                >
                  <Footprints className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* ============================================================== */}
            {/* REAR INTERACTIVE BODY TARGET NODES (CLICK REAR BODY PART)      */}
            {/* ============================================================== */}
            {showSlotNodes && isFacingBack && (
              <div className="hidden md:contents pointer-events-auto">
                {/* Rear Node 1: TESTA POSTERIORE */}
                <button
                  type="button"
                  onClick={(e) => handleNodeClick(e, 'headgear')}
                  className={`absolute top-[9%] left-[50%] -translate-x-1/2 z-30 p-1.5 rounded-full transition-all cursor-pointer ${
                    selectedSlot === 'headgear'
                      ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_20px_#f59e0b] ring-2 ring-yellow-300'
                      : 'bg-black/80 hover:bg-amber-600/90 text-amber-300 border border-amber-500/70 shadow-md'
                  }`}
                  title="Testa / Copricapo Posteriore"
                >
                  <Crown className="w-3.5 h-3.5" />
                </button>

                {/* Rear Node 2: SCHIENA / ZAINO (CENTRO PIENO) */}
                <button
                  type="button"
                  onClick={(e) => handleNodeClick(e, 'back')}
                  className={`absolute top-[30%] left-[50%] -translate-x-1/2 z-30 p-2 rounded-full transition-all cursor-pointer ${
                    selectedSlot === 'back'
                      ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_20px_#f59e0b] ring-2 ring-yellow-300'
                      : 'bg-black/80 hover:bg-amber-600/90 text-amber-300 border-2 border-amber-500 shadow-lg'
                  }`}
                  title="Schiena / Zaino & Equipaggiamento da Spalla"
                >
                  <Backpack className="w-4 h-4" />
                </button>

                {/* Rear Node 3: BUSTO POSTERIORE / MANTELLO */}
                <button
                  type="button"
                  onClick={(e) => handleNodeClick(e, 'torso')}
                  className={`absolute top-[48%] left-[50%] -translate-x-1/2 z-30 p-1.5 rounded-full transition-all cursor-pointer ${
                    selectedSlot === 'torso'
                      ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_20px_#f59e0b] ring-2 ring-yellow-300'
                      : 'bg-black/80 hover:bg-amber-600/90 text-amber-300 border border-amber-500/70 shadow-md'
                  }`}
                  title="Busto Posteriore / Mantello"
                >
                  <Layers className="w-3.5 h-3.5" />
                </button>

                {/* Rear Node 4: GAMBE POSTERIORI */}
                <button
                  type="button"
                  onClick={(e) => handleNodeClick(e, 'legs')}
                  className={`absolute top-[64%] left-[50%] -translate-x-1/2 z-30 p-1.5 rounded-full transition-all cursor-pointer ${
                    selectedSlot === 'legs'
                      ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_20px_#f59e0b] ring-2 ring-yellow-300'
                      : 'bg-black/80 hover:bg-amber-600/90 text-amber-300 border border-amber-500/70 shadow-md'
                  }`}
                  title="Gambe Posteriori / Tasche Tattiche"
                >
                  <Shield className="w-3.5 h-3.5" />
                </button>

                {/* Rear Node 5: TACCHI / STIVALI POSTERIORI */}
                <button
                  type="button"
                  onClick={(e) => handleNodeClick(e, 'boots')}
                  className={`absolute top-[82%] left-[50%] -translate-x-1/2 z-30 p-1.5 rounded-full transition-all cursor-pointer ${
                    selectedSlot === 'boots'
                      ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_20px_#f59e0b] ring-2 ring-yellow-300'
                      : 'bg-black/80 hover:bg-amber-600/90 text-amber-300 border border-amber-500/70 shadow-md'
                  }`}
                  title="Piedi Posteriori / Stivali da Marcia"
                >
                  <Footprints className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3D ROTATION TACTILE CONTROL BAR (BOTTOM)                       */}
      {/* ============================================================== */}
      <div
        className="absolute bottom-2 left-2 right-2 sm:left-4 sm:right-4 z-30 flex items-center justify-between pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Rotate Left Button */}
        <button
          type="button"
          onClick={() => rotateBy(-90)}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-black/80 hover:bg-amber-600/80 text-amber-300 text-[10px] font-bold border border-amber-500/50 shadow-lg transition cursor-pointer active:scale-95"
          title="Ruota 90° a Sinistra"
        >
          <RotateCcw className="w-3 h-3" />
          <span className="hidden sm:inline">SX 90°</span>
        </button>

        {/* Quick View Presets: Fronte (0°) & Retro (180°) */}
        <div className="flex items-center gap-1.5 bg-black/85 backdrop-blur-md border border-amber-500/50 rounded-xl p-1 shadow-2xl">
          <button
            type="button"
            onClick={() => rotateTo(0)}
            className={`flex items-center gap-1 px-3 py-1 rounded-lg text-[10px] font-black transition cursor-pointer ${
              !isFacingBack
                ? 'bg-amber-500 text-stone-950 shadow-[0_0_12px_#f59e0b]'
                : 'text-stone-400 hover:text-amber-200'
            }`}
          >
            <Eye className="w-3 h-3" />
            <span>Fronte (0°)</span>
          </button>
          <button
            type="button"
            onClick={() => rotateTo(180)}
            className={`flex items-center gap-1 px-3 py-1 rounded-lg text-[10px] font-black transition cursor-pointer ${
              isFacingBack
                ? 'bg-amber-500 text-stone-950 shadow-[0_0_12px_#f59e0b]'
                : 'text-stone-400 hover:text-amber-200'
            }`}
          >
            <Backpack className="w-3 h-3" />
            <span>Retro (180°)</span>
          </button>
        </div>

        {/* Rotate Right Button */}
        <button
          type="button"
          onClick={() => rotateBy(90)}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-black/80 hover:bg-amber-600/80 text-amber-300 text-[10px] font-bold border border-amber-500/50 shadow-lg transition cursor-pointer active:scale-95"
          title="Ruota 90° a Destra"
        >
          <span className="hidden sm:inline">90° DX</span>
          <RotateCw className="w-3 h-3" />
        </button>
      </div>

    </div>
  );
};
