import React, { useState } from 'react';
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

  const currentExplorer = EXPLORERS[profile.avatarId] || EXPLORERS.samira;

  const displayOutfitId = previewOutfitId || profile.equippedOutfitId;
  const displayHeadgearId = previewHeadgearId !== null ? previewHeadgearId : profile.equippedHeadgearId;
  const displayOffHandId = previewOffHandId !== null ? previewOffHandId : (profile.equippedOffHandId || 'off_compass_brass');
  const displayTalismanId = previewTalismanId !== null ? previewTalismanId : profile.equippedTalismanId;

  const displayHeadgear = ALL_ACCESSORIES.find(a => a.id === displayHeadgearId);
  const displayOffHand = ALL_ACCESSORIES.find(a => a.id === displayOffHandId);
  const displayTalisman = ALL_ACCESSORIES.find(a => a.id === displayTalismanId);

  const isAnyPreviewActive =
    previewOutfitId !== null ||
    previewHeadgearId !== null ||
    previewToolId !== null ||
    previewOffHandId !== null ||
    previewLegsId !== null ||
    previewBootsId !== null ||
    previewTalismanId !== null ||
    previewBackId !== null;

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
        return 'scale-[2.4] translate-y-[32%] translate-x-[0%]';
      case 'chest':
        return 'scale-[1.65] translate-y-[14%] translate-x-[0%]';
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
    <div className="relative w-full h-full min-h-[220px] sm:min-h-[320px] md:min-h-[460px] flex items-center justify-center bg-gradient-to-b from-[#25150a] via-[#120803] to-[#1c0e06] rounded-3xl border-2 border-amber-500/60 overflow-hidden select-none shadow-[inset_0_0_80px_rgba(0,0,0,0.95)]">
      
      {/* Spotlight Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-72 h-20 bg-yellow-500/30 rounded-full blur-2xl pointer-events-none" />

      {/* Fitting Room Preview Border Glow */}
      {isAnyPreviewActive && (
        <div className="absolute inset-0 border-2 border-amber-400 pointer-events-none z-30 shadow-[inset_0_0_35px_rgba(245,158,11,0.45)] animate-pulse rounded-3xl" />
      )}

      {/* Camera View Controls */}
      {showControls && (
        <div
          className={`absolute ${
            isAnyPreviewActive ? 'top-11 right-2 sm:right-3' : 'top-3 right-2 sm:right-3'
          } z-20 flex items-center gap-1 bg-black/80 backdrop-blur-md border border-amber-500/50 rounded-xl p-1 shadow-xl transition-all`}
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
        </div>
      )}

      {/* Top Banner if Preview Active */}
      {isAnyPreviewActive && (
        <div className="absolute top-2 left-2 right-2 sm:left-4 sm:right-4 z-30 flex items-center justify-between bg-stone-900/95 border border-amber-400/80 rounded-xl px-2.5 py-1 shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-1.5 text-xs text-amber-200 font-bold truncate">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-spin-slow" />
            <span className="text-[10px] uppercase text-amber-400 tracking-wider">Camerino RPG:</span>
            <span className="truncate text-[11px]">In Prova</span>
          </div>
          <button
            type="button"
            onClick={() => {
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

      {/* Main Pedestal & Character Render */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-2">
        <div
          className={`relative w-full h-full flex items-center justify-center transition-transform duration-500 origin-center ${getCameraTransformClass()}`}
        >
          {/* THE 100% FULL BODY HERO MODEL ON STONE PEDESTAL */}
          <img
            src={currentExplorer.image}
            alt={currentExplorer.name}
            className={`h-[94%] max-h-[580px] w-auto object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] transition-all duration-300 ${getOutfitShaderClass()}`}
          />

          {/* Special Visual Overlay: Solar Crown */}
          {displayHeadgear?.id === 'acc_solar_crown' && (
            <div className="absolute top-[8%] left-[49.5%] -translate-x-1/2 z-20 pointer-events-none animate-pulse flex flex-col items-center">
              <div className="w-14 h-7 bg-gradient-to-t from-yellow-500 via-amber-300 to-yellow-100 rounded-t-full border border-amber-300 shadow-[0_0_20px_#f59e0b] flex items-center justify-center">
                <Crown className="w-4 h-4 text-stone-950 fill-stone-950" />
              </div>
            </div>
          )}

          {/* Special Visual Overlay: Speleo Helmet Light Cone */}
          {displayHeadgear?.id === 'acc_speleo_helmet' && (
            <div className="absolute top-[8%] left-[49.5%] -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center">
              <div className="w-12 h-6 bg-gradient-to-b from-stone-700 to-stone-900 rounded-t-xl border border-stone-500 shadow-md flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-amber-300 shadow-[0_0_15px_#fde047] animate-pulse" />
              </div>
              <div
                className="w-16 h-28 bg-gradient-to-b from-amber-200/30 via-amber-100/10 to-transparent pointer-events-none blur-[2px]"
                style={{ clipPath: 'polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)' }}
              />
            </div>
          )}

          {/* Special Visual Overlay: Amulet Glow */}
          {displayTalisman && (
            <div className="absolute top-[20.5%] left-[50%] -translate-x-1/2 z-20 pointer-events-none">
              <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-200 border border-amber-300 shadow-[0_0_12px_#fbbf24] animate-pulse flex items-center justify-center">
                <Sparkles className="w-2.5 h-2.5 text-stone-950" />
              </div>
            </div>
          )}

          {/* Special Visual Overlay: Bronze Shield */}
          {displayOffHand?.id === 'off_sacred_shield' && (
            <div className="absolute top-[46%] left-[69%] -translate-x-1/2 z-20 pointer-events-none animate-fadeIn">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-700 via-yellow-500 to-amber-300 border-2 border-yellow-200 shadow-[0_0_18px_rgba(245,158,11,0.8)] flex items-center justify-center">
                <Shield className="w-5 h-5 text-stone-950 fill-stone-950/40" />
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* INTERACTIVE BODY TARGET NODES (CLICK BODY PART TO EQUIP SLOT)  */}
          {/* ============================================================== */}
          {showSlotNodes && (
            <div className="hidden md:contents">
              {/* Node 1: TESTA */}
              <button
                type="button"
                onClick={(e) => handleNodeClick(e, 'headgear')}
                className={`absolute top-[9%] left-[50%] -translate-x-1/2 z-25 p-1.5 rounded-full transition-all cursor-pointer ${
                  selectedSlot === 'headgear'
                    ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_18px_#f59e0b] ring-2 ring-yellow-300'
                    : 'bg-black/75 hover:bg-amber-600/80 text-amber-300 border border-amber-500/70 shadow-md'
                }`}
                title="Testa / Copricapo"
              >
                <Crown className="w-3.5 h-3.5" />
              </button>

              {/* Node 2: COLLO */}
              <button
                type="button"
                onClick={(e) => handleNodeClick(e, 'talisman')}
                className={`absolute top-[18.5%] left-[50%] -translate-x-1/2 z-25 p-1.5 rounded-full transition-all cursor-pointer ${
                  selectedSlot === 'talisman'
                    ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_18px_#f59e0b] ring-2 ring-yellow-300'
                    : 'bg-black/75 hover:bg-amber-600/80 text-amber-300 border border-amber-500/70 shadow-md'
                }`}
                title="Collo / Amuleto Sacro"
              >
                <Sparkles className="w-3.5 h-3.5" />
              </button>

              {/* Node 3: BUSTO */}
              <button
                type="button"
                onClick={(e) => handleNodeClick(e, 'torso')}
                className={`absolute top-[30%] left-[50%] -translate-x-1/2 z-25 p-1.5 rounded-full transition-all cursor-pointer ${
                  selectedSlot === 'torso'
                    ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_18px_#f59e0b] ring-2 ring-yellow-300'
                    : 'bg-black/75 hover:bg-amber-600/80 text-amber-300 border border-amber-500/70 shadow-md'
                }`}
                title="Busto / Tenuta & Giacca"
              >
                <Layers className="w-3.5 h-3.5" />
              </button>

              {/* Node 4: SCHIENA / ZAINO */}
              <button
                type="button"
                onClick={(e) => handleNodeClick(e, 'back')}
                className={`absolute top-[26%] left-[69%] -translate-x-1/2 z-25 p-1.5 rounded-full transition-all cursor-pointer ${
                  selectedSlot === 'back'
                    ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_18px_#f59e0b] ring-2 ring-yellow-300'
                    : 'bg-black/75 hover:bg-amber-600/80 text-amber-300 border border-amber-500/70 shadow-md'
                }`}
                title="Schiena / Zaino & Mantello"
              >
                <Compass className="w-3.5 h-3.5" />
              </button>

              {/* Node 5: MANO DESTRA */}
              <button
                type="button"
                onClick={(e) => handleNodeClick(e, 'main_hand')}
                className={`absolute top-[44%] left-[30%] -translate-x-1/2 z-25 p-1.5 rounded-full transition-all cursor-pointer ${
                  selectedSlot === 'main_hand'
                    ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_18px_#f59e0b] ring-2 ring-yellow-300'
                    : 'bg-black/75 hover:bg-amber-600/80 text-amber-300 border border-amber-500/70 shadow-md'
                }`}
                title="Mano Destra / Strumento Primario"
              >
                <Music className="w-3.5 h-3.5" />
              </button>

              {/* Node 6: MANO SINISTRA */}
              <button
                type="button"
                onClick={(e) => handleNodeClick(e, 'off_hand')}
                className={`absolute top-[44%] left-[70%] -translate-x-1/2 z-25 p-1.5 rounded-full transition-all cursor-pointer ${
                  selectedSlot === 'off_hand'
                    ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_18px_#f59e0b] ring-2 ring-yellow-300'
                    : 'bg-black/75 hover:bg-amber-600/80 text-amber-300 border border-amber-500/70 shadow-md'
                }`}
                title="Mano Sinistra / Scudo & Carte"
              >
                <Shield className="w-3.5 h-3.5" />
              </button>

              {/* Node 7: GAMBE */}
              <button
                type="button"
                onClick={(e) => handleNodeClick(e, 'legs')}
                className={`absolute top-[58%] left-[50%] -translate-x-1/2 z-25 p-1.5 rounded-full transition-all cursor-pointer ${
                  selectedSlot === 'legs'
                    ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_18px_#f59e0b] ring-2 ring-yellow-300'
                    : 'bg-black/75 hover:bg-amber-600/80 text-amber-300 border border-amber-500/70 shadow-md'
                }`}
                title="Gambe / Pantaloni Tattici"
              >
                <Shield className="w-3.5 h-3.5" />
              </button>

              {/* Node 8: PIEDI */}
              <button
                type="button"
                onClick={(e) => handleNodeClick(e, 'boots')}
                className={`absolute top-[80%] left-[50%] -translate-x-1/2 z-25 p-1.5 rounded-full transition-all cursor-pointer ${
                  selectedSlot === 'boots'
                    ? 'scale-125 bg-amber-500 text-stone-950 shadow-[0_0_18px_#f59e0b] ring-2 ring-yellow-300'
                    : 'bg-black/75 hover:bg-amber-600/80 text-amber-300 border border-amber-500/70 shadow-md'
                }`}
                title="Piedi / Stivali da Marcia"
              >
                <Compass className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>
      </div>

      {/* Pedestal Base Label */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="px-3.5 py-0.5 rounded-full bg-black/85 border border-amber-500/50 text-[9px] font-mono text-amber-300 uppercase tracking-widest shadow-xl">
          PIEDISTALLO ARCHEOLOGICO RGS • 1928
        </div>
      </div>

    </div>
  );
};
