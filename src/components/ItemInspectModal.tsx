import React from 'react';
import {
  type WardrobeOutfit,
  type WardrobeAccessory,
} from '../data/avatarData';
import {
  X,
  Sparkles,
  Shield,
  Check,
  Lock,
  Coins,
  Compass,
  Eye,
  Crosshair,
  BookOpen,
  Glasses,
  Lightbulb,
  Crown,
  Zap,
  Sun,
  Music,
} from 'lucide-react';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';

interface ItemInspectModalProps {
  item: WardrobeOutfit | WardrobeAccessory | null;
  isOpen: boolean;
  onClose: () => void;
  isUnlocked: boolean;
  isEquipped: boolean;
  isPreviewing: boolean;
  canUnlockLevel: boolean;
  canUnlockRelics: boolean;
  canAfford: boolean;
  onTryOn: () => void;
  onBuyOrEquip: () => void;
}

export const ItemInspectModal: React.FC<ItemInspectModalProps> = ({
  item,
  isOpen,
  onClose,
  isUnlocked,
  isEquipped,
  isPreviewing,
  canUnlockLevel,
  canUnlockRelics,
  canAfford,
  onTryOn,
  onBuyOrEquip,
}) => {
  if (!isOpen || !item) return null;

  const isOutfit = 'avatarId' in item;

  const renderIcon = () => {
    if (isOutfit) {
      return <Sparkles className="w-12 h-12 text-amber-400" />;
    }
    const acc = item as WardrobeAccessory;
    const props = { className: 'w-12 h-12 text-amber-400' };
    switch (acc.iconName) {
      case 'Glasses': return <Glasses {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'Lightbulb': return <Lightbulb {...props} />;
      case 'Crown': return <Crown {...props} />;
      case 'Music': return <Music {...props} />;
      case 'Eye': return <Eye {...props} />;
      case 'Crosshair': return <Crosshair {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      case 'Shield': return <Shield {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Sun': return <Sun {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn select-none">
      <div className="relative w-full max-w-sm bg-stone-900 border-2 border-amber-500/70 rounded-3xl shadow-[0_0_60px_rgba(217,119,6,0.35)] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="relative px-4 py-3 border-b border-amber-900/50 bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
            <Eye className="w-3 h-3 text-amber-400" />
            Scheda Oggetto & Anteprima
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white border border-stone-700 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 3D Showcase Icon Container */}
        <div className="relative h-44 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 flex flex-col items-center justify-center border-b border-stone-800 p-4 overflow-hidden">
          {/* Ambient Lighting Rays */}
          <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />
          <div className="absolute w-32 h-32 rounded-full bg-amber-500/15 blur-2xl pointer-events-none" />

          {/* Central Item Visual */}
          <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-tr from-stone-900 to-stone-800 border-2 border-amber-400/60 shadow-[0_0_25px_rgba(245,158,11,0.3)] flex items-center justify-center p-3 animate-float">
            {renderIcon()}
          </div>

          <div className="relative z-10 mt-3 flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
              {item.tag}
            </span>
            <span className="text-[10px] text-stone-400 font-mono">
              Liv. Richiesto {item.requiredLevel}
            </span>
          </div>
        </div>

        {/* Content & Lore */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="text-base font-bold text-amber-100 font-serif leading-tight">
              {item.name}
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed mt-1">
              {item.description}
            </p>
          </div>

          {/* Perk Card */}
          {item.perk && (
            <div className="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-500/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-emerald-400/80 tracking-wider">
                    Vantaggio di Spedizione
                  </div>
                  <div className="text-xs font-bold text-emerald-200">
                    {item.perk.label}
                  </div>
                </div>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          )}

          {/* Price / Unlock Requirements */}
          <div className="flex items-center justify-between pt-1 text-xs">
            <span className="text-stone-400 font-medium">Costo Spedizione:</span>
            {!isUnlocked ? (
              <span className="font-bold text-amber-300 flex items-center gap-1">
                <Coins className="w-3.5 h-3.5 text-amber-400" />
                {item.cost === 0 ? 'Gratuito' : `${item.cost} Monete`}
              </span>
            ) : (
              <span className="font-bold text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Posseduto
              </span>
            )}
          </div>
        </div>

        {/* Actions Footer: Prova sull'Avatar & Acquista */}
        <div className="p-4 pt-2 border-t border-amber-950/60 bg-stone-950 flex gap-2">
          <button
            type="button"
            onClick={() => {
              onTryOn();
              sound.playTap();
              triggerHaptic('light');
            }}
            className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              isPreviewing
                ? 'bg-amber-600/30 border border-amber-400 text-amber-200 shadow-inner'
                : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-600'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-amber-400" />
            {isPreviewing ? 'In Prova' : 'Prova sull\'Avatar'}
          </button>

          <button
            type="button"
            onClick={() => {
              onBuyOrEquip();
            }}
            disabled={!isUnlocked && (!canUnlockLevel || !canUnlockRelics || !canAfford)}
            className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              isEquipped
                ? 'bg-amber-500/20 border border-amber-400/50 text-amber-300'
                : isUnlocked
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md'
                : canUnlockLevel && canUnlockRelics && canAfford
                ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-black shadow-md'
                : 'bg-stone-800 text-stone-500 border border-stone-700 cursor-not-allowed'
            }`}
          >
            {isEquipped ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                Indossato
              </>
            ) : isUnlocked ? (
              <>
                <Check className="w-3.5 h-3.5" />
                Indossa
              </>
            ) : !canUnlockLevel || !canUnlockRelics ? (
              <>
                <Lock className="w-3.5 h-3.5" />
                Bloccato
              </>
            ) : (
              <>
                <Coins className="w-3.5 h-3.5" />
                Acquista
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
