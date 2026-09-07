import React, { useState } from 'react';
import {
  EXPLORERS,
  ALL_OUTFITS,
  ALL_ACCESSORIES,
  type ExplorerProfile,
} from '../data/avatarData';
import {
  Sparkles,
  RotateCcw,
  Eye,
  Crown,
  Music,
  Crosshair,
  BookOpen,
  Shield,
  Sun,
} from 'lucide-react';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';

interface AvatarShowcaseProps {
  profile: ExplorerProfile;
  previewOutfitId: string | null;
  previewHeadgearId: string | null;
  previewToolId: string | null;
  previewTalismanId: string | null;
  onClearPreview: () => void;
  onSelectInspectItem: (itemId: string, isOutfit: boolean) => void;
}

export const AvatarShowcase: React.FC<AvatarShowcaseProps> = ({
  profile,
  previewOutfitId,
  previewHeadgearId,
  previewToolId,
  previewTalismanId,
  onClearPreview,
  onSelectInspectItem,
}) => {
  const [cameraZoom, setCameraZoom] = useState<'full' | 'face' | 'chest'>('full');

  const currentExplorer = EXPLORERS[profile.avatarId];

  // The displayed outfit: preview takes priority over equipped
  const displayOutfitId = previewOutfitId || profile.equippedOutfitId;
  const displayOutfit = ALL_OUTFITS.find(o => o.id === displayOutfitId) || ALL_OUTFITS[0];

  // Displayed accessories: preview takes priority over equipped
  const displayHeadgearId = previewHeadgearId !== null ? previewHeadgearId : profile.equippedHeadgearId;
  const displayToolId = previewToolId !== null ? previewToolId : profile.equippedToolId;
  const displayTalismanId = previewTalismanId !== null ? previewTalismanId : profile.equippedTalismanId;

  const displayHeadgear = ALL_ACCESSORIES.find(a => a.id === displayHeadgearId);
  const displayTool = ALL_ACCESSORIES.find(a => a.id === displayToolId);
  const displayTalisman = ALL_ACCESSORIES.find(a => a.id === displayTalismanId);

  const isAnyPreviewActive =
    previewOutfitId !== null ||
    previewHeadgearId !== null ||
    previewToolId !== null ||
    previewTalismanId !== null;

  // Active preview item name for banner
  let previewItemName = '';
  if (previewOutfitId) {
    const o = ALL_OUTFITS.find(item => item.id === previewOutfitId);
    previewItemName = o?.name || '';
  } else if (previewHeadgearId) {
    const a = ALL_ACCESSORIES.find(item => item.id === previewHeadgearId);
    previewItemName = a?.name || '';
  } else if (previewToolId) {
    const a = ALL_ACCESSORIES.find(item => item.id === previewToolId);
    previewItemName = a?.name || '';
  } else if (previewTalismanId) {
    const a = ALL_ACCESSORIES.find(item => item.id === previewTalismanId);
    previewItemName = a?.name || '';
  }

  // Visual style / shader presets based on outfit
  const getOutfitShaderClass = () => {
    switch (displayOutfitId) {
      case 'samira_speleo':
      case 'mateo_recon':
        return 'hue-rotate-[-30deg] saturate-125 contrast-110';
      case 'samira_rain':
      case 'mateo_alpine':
        return 'sepia-[0.3] contrast-105';
      case 'samira_cenote':
      case 'mateo_jungle':
        return 'hue-rotate-[45deg] saturate-150 brightness-105';
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

  const getAuraEffect = () => {
    if (displayOutfitId === 'samira_inti' || displayOutfitId === 'mateo_guard') {
      return (
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 via-yellow-400/15 to-transparent animate-pulse pointer-events-none" />
      );
    }
    if (displayOutfitId === 'samira_cenote' || displayOutfitId === 'mateo_jungle') {
      return (
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/15 via-teal-400/10 to-transparent pointer-events-none" />
      );
    }
    if (displayOutfitId === 'samira_speleo' || displayOutfitId === 'mateo_recon') {
      return (
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 via-blue-900/15 to-transparent pointer-events-none" />
      );
    }
    return null;
  };

  // Camera zoom styling
  const getCameraTransformClass = () => {
    switch (cameraZoom) {
      case 'face':
        return 'scale-[2.4] translate-y-[32%] translate-x-[0%]';
      case 'chest':
        return 'scale-[1.8] translate-y-[15%] translate-x-[0%]';
      default:
        return 'scale-100 translate-y-0';
    }
  };

  return (
    <div className="relative w-full h-56 bg-stone-950 border-b border-amber-900/40 overflow-hidden flex items-center justify-between select-none">
      
      {/* Fitting Room Preview Glow Border */}
      {isAnyPreviewActive && (
        <div className="absolute inset-0 border-2 border-amber-400/90 pointer-events-none z-30 shadow-[inset_0_0_25px_rgba(245,158,11,0.35)] animate-pulse" />
      )}

      {/* Floating Fitting Room Banner (Anteprima in corso) */}
      {isAnyPreviewActive && (
        <div className="absolute top-2 left-3 right-3 z-30 flex items-center justify-between bg-stone-900/95 border border-amber-400/80 rounded-xl px-3 py-1.5 shadow-xl backdrop-blur-md animate-slideDown">
          <div className="flex items-center gap-1.5 text-xs text-amber-200 font-bold truncate">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-spin-slow" />
            <span className="text-[10px] uppercase text-amber-400 tracking-wider">Camerino:</span>
            <span className="truncate max-w-[170px]">{previewItemName}</span>
          </div>
          <button
            type="button"
            onClick={() => {
              onClearPreview();
              sound.playTap();
              triggerHaptic('light');
            }}
            className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 text-[10px] font-bold border border-stone-600 transition cursor-pointer shrink-0"
            title="Ripristina tenuta ed equipaggiamento salvato"
          >
            <RotateCcw className="w-3 h-3" />
            Ripristina
          </button>
        </div>
      )}

      {/* Camera View Selector Buttons */}
      <div className="absolute bottom-2.5 right-3 z-20 flex items-center gap-1 bg-black/70 backdrop-blur-md border border-stone-800 rounded-xl p-1 shadow-lg">
        <button
          type="button"
          onClick={() => {
            setCameraZoom('full');
            sound.playTap();
          }}
          className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition cursor-pointer ${
            cameraZoom === 'full'
              ? 'bg-amber-600 text-stone-950 font-black shadow-sm'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          Figura Intera
        </button>
        <button
          type="button"
          onClick={() => {
            setCameraZoom('chest');
            sound.playTap();
          }}
          className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition cursor-pointer ${
            cameraZoom === 'chest'
              ? 'bg-amber-600 text-stone-950 font-black shadow-sm'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          Busto
        </button>
        <button
          type="button"
          onClick={() => {
            setCameraZoom('face');
            sound.playTap();
          }}
          className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition cursor-pointer ${
            cameraZoom === 'face'
              ? 'bg-amber-600 text-stone-950 font-black shadow-sm'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          Viso
        </button>
      </div>

      {/* Left Column: Explorer Specs & Active Perks */}
      <div className="relative z-10 max-w-[54%] pl-4 space-y-1.5 pointer-events-auto">
        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-stone-900/80 border border-amber-500/30 text-amber-300 text-[9px] font-bold uppercase tracking-wider">
          <Eye className="w-2.5 h-2.5" />
          {isAnyPreviewActive ? 'Anteprima Camerino' : 'Assetto Attivo'}
        </div>

        <h3 className="text-sm font-black text-amber-100 font-serif leading-tight">
          {displayOutfit.name}
        </h3>

        <div className="flex flex-wrap gap-1">
          {displayOutfit.perk.label !== 'Assetto Standard' && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-[9px] font-bold shadow-sm">
              <Shield className="w-2.5 h-2.5 text-emerald-400" />
              {displayOutfit.perk.label}
            </span>
          )}
          {displayHeadgear?.perk && (
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-[9px] font-bold">
              {displayHeadgear.name.split(' ')[0]} ({displayHeadgear.perk.label})
            </span>
          )}
          {displayTool?.perk && (
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-amber-950/80 border border-amber-500/40 text-amber-300 text-[9px] font-bold">
              {displayTool.name.split(' ')[0]} ({displayTool.perk.label})
            </span>
          )}
          {displayTalisman?.perk && (
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-purple-950/80 border border-purple-500/40 text-purple-300 text-[9px] font-bold">
              {displayTalisman.name.split(' ')[0]} ({displayTalisman.perk.label})
            </span>
          )}
        </div>

        {/* Equipped Badges Row */}
        <div className="pt-1 flex items-center gap-1 text-[10px] text-stone-400">
          <span className="font-semibold text-stone-300">Accessori:</span>
          {displayHeadgear ? (
            <span
              onClick={() => onSelectInspectItem(displayHeadgear.id, false)}
              className="px-1.5 py-0.2 rounded bg-stone-900 border border-amber-500/40 text-amber-300 hover:text-amber-200 cursor-pointer text-[9px]"
              title={`Ispeziona ${displayHeadgear.name}`}
            >
              🧢 {displayHeadgear.name.split(' ')[0]}
            </span>
          ) : (
            <span className="text-[9px] text-stone-500">Nessun copricapo</span>
          )}
          {displayTool && (
            <span
              onClick={() => onSelectInspectItem(displayTool.id, false)}
              className="px-1.5 py-0.2 rounded bg-stone-900 border border-amber-500/40 text-amber-300 hover:text-amber-200 cursor-pointer text-[9px]"
              title={`Ispeziona ${displayTool.name}`}
            >
              🧭 {displayTool.name.split(' ')[0]}
            </span>
          )}
          {displayTalisman && (
            <span
              onClick={() => onSelectInspectItem(displayTalisman.id, false)}
              className="px-1.5 py-0.2 rounded bg-stone-900 border border-amber-500/40 text-amber-300 hover:text-amber-200 cursor-pointer text-[9px]"
              title={`Ispeziona ${displayTalisman.name}`}
            >
              ✨ {displayTalisman.name.split(' ')[0]}
            </span>
          )}
        </div>
      </div>

      {/* Right: 3D Pedestal Explorer Render with Dynamic Zoom & Accessory Overlays */}
      <div className="relative h-full w-[46%] flex items-center justify-center overflow-hidden">
        
        {/* The Explorer Master Render with dynamic shader & zoom transform */}
        <div
          className={`relative w-full h-full flex items-center justify-center transition-transform duration-500 origin-center ${getCameraTransformClass()}`}
        >
          <img
            src={currentExplorer.image}
            alt={currentExplorer.name}
            className={`h-[120%] w-auto max-w-none object-cover object-top drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] transition-all duration-300 ${getOutfitShaderClass()}`}
          />

          {/* Dynamic Aura Effect for special outfits */}
          {getAuraEffect()}

          {/* ============================================================== */}
          {/* ACCESSORY VISUAL OVERLAYS (Positioned Directly on the Character) */}
          {/* ============================================================== */}

          {/* 1. HEADGEAR OVERLAY (Forehead / Head ~14% from top) */}
          {displayHeadgear && (
            <div
              className={`absolute top-[12%] left-[48%] -translate-x-1/2 z-20 pointer-events-none transition-all duration-300 animate-fadeIn ${
                displayHeadgear.id === 'acc_solar_crown' ? 'animate-pulse' : ''
              }`}
            >
              {displayHeadgear.id === 'acc_solar_crown' && (
                <div className="relative flex flex-col items-center">
                  <div className="w-12 h-6 bg-gradient-to-t from-yellow-500 via-amber-300 to-yellow-100 rounded-t-full border border-amber-300 shadow-[0_0_15px_#f59e0b] flex items-center justify-center">
                    <Crown className="w-4 h-4 text-stone-950 fill-stone-950" />
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent blur-[1px]" />
                </div>
              )}

              {displayHeadgear.id === 'acc_speleo_helmet' && (
                <div className="relative flex flex-col items-center">
                  <div className="w-10 h-5 bg-gradient-to-b from-stone-700 to-stone-900 rounded-t-xl border border-stone-500 shadow-md flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-amber-300 shadow-[0_0_12px_#fde047] animate-pulse" />
                  </div>
                  {/* Light Cone beam projected down */}
                  <div
                    className="w-14 h-24 bg-gradient-to-b from-amber-200/30 via-amber-100/10 to-transparent pointer-events-none blur-[2px]"
                    style={{ clipPath: 'polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)' }}
                  />
                </div>
              )}

              {displayHeadgear.id === 'acc_wax_hat' && (
                <div className="relative flex flex-col items-center">
                  <div className="w-14 h-4 bg-[#4a3520] rounded-full border border-[#2b1f13] shadow-lg flex items-center justify-center">
                    <div className="w-8 h-3 bg-[#382716] rounded-t-lg -mt-2 border-t border-[#5c4228]" />
                  </div>
                </div>
              )}

              {displayHeadgear.id === 'acc_bandana' && (
                <div className="relative">
                  <div className="w-11 h-2.5 bg-emerald-700 rounded-full border border-emerald-400 shadow-sm" />
                </div>
              )}

              {displayHeadgear.id === 'acc_visor' && (
                <div className="relative">
                  <div className="w-10 h-2 bg-stone-900 border border-amber-400/80 rounded-sm shadow-md" />
                </div>
              )}
            </div>
          )}

          {/* 2. TALISMAN OVERLAY (Neck / Chest ~25% from top) */}
          {displayTalisman && (
            <div className="absolute top-[25%] left-[50%] -translate-x-1/2 z-20 pointer-events-none transition-all duration-300 animate-fadeIn">
              {displayTalisman.id === 'talisman_amber' && (
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 border border-amber-300 shadow-[0_0_8px_#f59e0b] animate-pulse" />
              )}
              {displayTalisman.id === 'talisman_jade_chachapoya' && (
                <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-emerald-700 via-emerald-500 to-teal-200 border border-emerald-300 shadow-[0_0_10px_#10b981]" />
              )}
              {displayTalisman.id === 'talisman_jaguar_tooth' && (
                <div className="w-3 h-5 bg-gradient-to-b from-stone-300 via-amber-100 to-stone-400 border border-amber-400 shadow-md rounded-b-full transform rotate-12" />
              )}
              {displayTalisman.id === 'talisman_sun_disk_mini' && (
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-yellow-100 border border-yellow-300 shadow-[0_0_12px_#eab308] flex items-center justify-center animate-spin-slow">
                  <Sun className="w-3 h-3 text-stone-950 fill-stone-950" />
                </div>
              )}
            </div>
          )}

          {/* 3. TOOL OVERLAY (Hip / Belt ~38% from top) */}
          {displayTool && (
            <div className="absolute top-[40%] left-[36%] z-20 pointer-events-none transition-all duration-300 animate-fadeIn">
              {displayTool.id === 'tool_tuning_fork' && (
                <div className="p-1 rounded-lg bg-stone-900/90 border border-amber-400/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]">
                  <Music className="w-3.5 h-3.5 text-amber-300 animate-bounce" />
                </div>
              )}
              {displayTool.id === 'tool_monocle' && (
                <div className="p-1 rounded-lg bg-stone-900/90 border border-amber-400/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]">
                  <Eye className="w-3.5 h-3.5 text-amber-300" />
                </div>
              )}
              {displayTool.id === 'tool_theodolite' && (
                <div className="p-1 rounded-lg bg-stone-900/90 border border-amber-400/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]">
                  <Crosshair className="w-3.5 h-3.5 text-amber-300" />
                </div>
              )}
              {displayTool.id === 'tool_notebook_silver' && (
                <div className="p-1 rounded-lg bg-stone-900/90 border border-cyan-400/80 shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-300" />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Ambient Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-transparent to-stone-950/40 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-stone-950 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
