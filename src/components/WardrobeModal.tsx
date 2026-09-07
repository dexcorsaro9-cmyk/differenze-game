import React, { useState } from 'react';
import {
  EXPLORERS,
  ALL_OUTFITS,
  ALL_ACCESSORIES,
  type ExplorerProfile,
  type WardrobeOutfit,
  type WardrobeAccessory,
} from '../data/avatarData';
import { AvatarShowcase } from './AvatarShowcase';
import { ItemInspectModal } from './ItemInspectModal';
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
  UserCheck,
  Search,
} from 'lucide-react';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';

interface WardrobeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ExplorerProfile;
  coins: number;
  currentLevelId: number;
  discoveredRelicCount: number;
  onUpdateProfile: (newProfile: ExplorerProfile) => void;
  onSpendCoins: (amount: number) => boolean;
  onOpenAvatarCreator: () => void;
}

export const WardrobeModal: React.FC<WardrobeModalProps> = ({
  isOpen,
  onClose,
  profile,
  coins,
  currentLevelId,
  discoveredRelicCount,
  onUpdateProfile,
  onSpendCoins,
  onOpenAvatarCreator,
}) => {
  const [activeTab, setActiveTab] = useState<'outfits' | 'headgear' | 'tool' | 'talisman'>('outfits');

  // Live Fitting Room Previews (temporarily worn on avatar showcase)
  const [previewOutfitId, setPreviewOutfitId] = useState<string | null>(null);
  const [previewHeadgearId, setPreviewHeadgearId] = useState<string | null>(null);
  const [previewToolId, setPreviewToolId] = useState<string | null>(null);
  const [previewTalismanId, setPreviewTalismanId] = useState<string | null>(null);

  // Modal for Close-Up Item Inspection
  const [inspectItem, setInspectItem] = useState<WardrobeOutfit | WardrobeAccessory | null>(null);

  if (!isOpen) return null;

  const currentExplorer = EXPLORERS[profile.avatarId];

  // Filter outfits for this specific explorer
  const availableOutfits = ALL_OUTFITS.filter(o => o.avatarId === profile.avatarId);

  // Filter accessories for active tab
  const activeAccessories = ALL_ACCESSORIES.filter(a => a.slot === activeTab);

  const handleClearPreviews = () => {
    setPreviewOutfitId(null);
    setPreviewHeadgearId(null);
    setPreviewToolId(null);
    setPreviewTalismanId(null);
  };

  const handleTogglePreviewOutfit = (outfitId: string) => {
    if (previewOutfitId === outfitId) {
      setPreviewOutfitId(null);
    } else {
      setPreviewOutfitId(outfitId);
    }
    sound.playTap();
    triggerHaptic('light');
  };

  const handleTogglePreviewAccessory = (acc: WardrobeAccessory) => {
    if (acc.slot === 'headgear') {
      setPreviewHeadgearId(prev => (prev === acc.id ? null : acc.id));
    } else if (acc.slot === 'tool') {
      setPreviewToolId(prev => (prev === acc.id ? null : acc.id));
    } else if (acc.slot === 'talisman') {
      setPreviewTalismanId(prev => (prev === acc.id ? null : acc.id));
    }
    sound.playTap();
    triggerHaptic('light');
  };

  const handleInspectByItemId = (itemId: string, isOutfit: boolean) => {
    if (isOutfit) {
      const found = availableOutfits.find(o => o.id === itemId) || null;
      setInspectItem(found);
    } else {
      const found = ALL_ACCESSORIES.find(a => a.id === itemId) || null;
      setInspectItem(found);
    }
    sound.playTap();
    triggerHaptic('light');
  };

  // Equip or Buy Outfit
  const handleEquipOutfit = (outfit: WardrobeOutfit) => {
    const isUnlocked = profile.unlockedOutfitIds.includes(outfit.id) || outfit.cost === 0;

    if (!isUnlocked) {
      // Check level & relic condition
      if (currentLevelId < outfit.requiredLevel) {
        sound.playError();
        triggerHaptic('error');
        return;
      }
      if (outfit.requiredRelics && discoveredRelicCount < outfit.requiredRelics) {
        sound.playError();
        triggerHaptic('error');
        return;
      }

      // Check coins
      if (coins < outfit.cost) {
        sound.playError();
        triggerHaptic('error');
        return;
      }

      const success = onSpendCoins(outfit.cost);
      if (!success) return;

      const newProfile: ExplorerProfile = {
        ...profile,
        equippedOutfitId: outfit.id,
        unlockedOutfitIds: [...profile.unlockedOutfitIds, outfit.id],
      };
      onUpdateProfile(newProfile);
      setPreviewOutfitId(null);
      sound.playLevelWin();
      triggerHaptic('success');
    } else {
      // Already owned -> equip
      const newProfile: ExplorerProfile = {
        ...profile,
        equippedOutfitId: outfit.id,
      };
      onUpdateProfile(newProfile);
      setPreviewOutfitId(null);
      sound.playSelect();
      triggerHaptic('light');
    }
  };

  // Equip or Buy Accessory
  const handleEquipAccessory = (acc: WardrobeAccessory) => {
    const isUnlocked = profile.unlockedAccessoryIds.includes(acc.id);

    if (!isUnlocked) {
      // Check level
      if (currentLevelId < acc.requiredLevel) {
        sound.playError();
        triggerHaptic('error');
        return;
      }

      if (coins < acc.cost) {
        sound.playError();
        triggerHaptic('error');
        return;
      }

      const success = onSpendCoins(acc.cost);
      if (!success) return;

      const newProfile: ExplorerProfile = {
        ...profile,
        unlockedAccessoryIds: [...profile.unlockedAccessoryIds, acc.id],
        ...(acc.slot === 'headgear' && { equippedHeadgearId: acc.id }),
        ...(acc.slot === 'tool' && { equippedToolId: acc.id }),
        ...(acc.slot === 'talisman' && { equippedTalismanId: acc.id }),
      };
      onUpdateProfile(newProfile);
      if (acc.slot === 'headgear') setPreviewHeadgearId(null);
      if (acc.slot === 'tool') setPreviewToolId(null);
      if (acc.slot === 'talisman') setPreviewTalismanId(null);

      sound.playLevelWin();
      triggerHaptic('success');
    } else {
      // Toggle equip / unequip
      let newProfile = { ...profile };
      if (acc.slot === 'headgear') {
        newProfile.equippedHeadgearId = profile.equippedHeadgearId === acc.id ? null : acc.id;
        setPreviewHeadgearId(null);
      } else if (acc.slot === 'tool') {
        newProfile.equippedToolId = profile.equippedToolId === acc.id ? null : acc.id;
        setPreviewToolId(null);
      } else if (acc.slot === 'talisman') {
        newProfile.equippedTalismanId = profile.equippedTalismanId === acc.id ? null : acc.id;
        setPreviewTalismanId(null);
      }
      onUpdateProfile(newProfile);
      sound.playSelect();
      triggerHaptic('light');
    }
  };

  // Helper for accessory icon
  const renderAccessoryIcon = (iconName: string) => {
    const props = { className: 'w-4 h-4' };
    switch (iconName) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/85 backdrop-blur-md animate-fadeIn select-none">
      <div className="relative w-full max-w-lg bg-stone-900/95 border-2 border-amber-500/60 rounded-3xl shadow-[0_0_50px_rgba(217,119,6,0.3)] overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Ancient Header */}
        <div className="relative px-4 py-2.5 border-b border-amber-900/50 bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-amber-400/50 overflow-hidden shadow-md">
              <img
                src={currentExplorer.portrait}
                alt={currentExplorer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-black text-amber-100 font-serif leading-tight">
                Guardaroba & Camerino di Prova
              </h2>
              <div className="text-[10px] text-stone-400 font-medium">
                {profile.playerName} · <span className="text-amber-300">{currentExplorer.title}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Coins badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-950/60 border border-amber-500/40 rounded-full text-amber-300 font-bold text-xs shadow-inner">
              <Coins className="w-3.5 h-3.5 text-amber-400" />
              <span>{coins}</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white border border-stone-700 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Interactive Avatar Fitting Room Showcase */}
        <AvatarShowcase
          profile={profile}
          previewOutfitId={previewOutfitId}
          previewHeadgearId={previewHeadgearId}
          previewToolId={previewToolId}
          previewTalismanId={previewTalismanId}
          onClearPreview={handleClearPreviews}
          onSelectInspectItem={handleInspectByItemId}
        />

        {/* Change character link */}
        <div className="px-4 py-1 bg-stone-950/70 border-b border-stone-800 flex items-center justify-between text-[10px]">
          <span className="text-stone-400">
            Tocca <span className="text-amber-300 font-bold">Anteprima</span> su qualsiasi capo per vederlo subito sull'avatar.
          </span>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenAvatarCreator();
            }}
            className="text-amber-400 hover:text-amber-300 font-bold underline transition cursor-pointer flex items-center gap-1 shrink-0"
          >
            <UserCheck className="w-3 h-3" />
            Cambia Esploratore
          </button>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-4 gap-1 p-2 bg-stone-950 border-b border-stone-800 text-[11px] font-bold text-center">
          <button
            type="button"
            onClick={() => setActiveTab('outfits')}
            className={`py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'outfits'
                ? 'bg-amber-600 text-stone-950 font-black shadow-md'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Tenute
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('headgear')}
            className={`py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'headgear'
                ? 'bg-amber-600 text-stone-950 font-black shadow-md'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Copricapo
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tool')}
            className={`py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'tool'
                ? 'bg-amber-600 text-stone-950 font-black shadow-md'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Strumenti
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('talisman')}
            className={`py-1.5 rounded-xl transition-all cursor-pointer ${
              activeTab === 'talisman'
                ? 'bg-amber-600 text-stone-950 font-black shadow-md'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Amuleti
          </button>
        </div>

        {/* Scrollable Item Catalog */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2.5 custom-scrollbar bg-stone-900/60">
          
          {/* Outfits List */}
          {activeTab === 'outfits' && (
            <div className="space-y-2.5">
              {availableOutfits.map(outfit => {
                const isEquipped = profile.equippedOutfitId === outfit.id;
                const isPreviewing = previewOutfitId === outfit.id;
                const isUnlocked = profile.unlockedOutfitIds.includes(outfit.id) || outfit.cost === 0;
                const canUnlockLevel = currentLevelId >= outfit.requiredLevel;
                const canUnlockRelics = !outfit.requiredRelics || discoveredRelicCount >= outfit.requiredRelics;
                const canAfford = coins >= outfit.cost;

                return (
                  <div
                    key={outfit.id}
                    className={`p-3 rounded-2xl border transition-all ${
                      isPreviewing
                        ? 'bg-amber-950/60 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)] ring-1 ring-amber-400'
                        : isEquipped
                        ? 'bg-amber-950/30 border-amber-500/70 shadow-md'
                        : isUnlocked
                        ? 'bg-stone-950/60 border-stone-800 hover:border-stone-700'
                        : 'bg-stone-950/30 border-stone-800/60 opacity-85'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-xs font-bold text-stone-100 font-serif">
                            {outfit.name}
                          </span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-stone-800 text-amber-300 font-medium border border-stone-700">
                            {outfit.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-400 leading-relaxed">
                          {outfit.description}
                        </p>
                      </div>

                      {/* Perk badge */}
                      {outfit.perk.label !== 'Assetto Standard' && (
                        <div className="shrink-0 px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
                          {outfit.perk.label}
                        </div>
                      )}
                    </div>

                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-stone-800/80 gap-2">
                      {/* Price / Requirements */}
                      <div>
                        {!isUnlocked ? (
                          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                            <Coins className="w-3.5 h-3.5 text-amber-400" />
                            <span>{outfit.cost} Monete</span>
                            {!canUnlockLevel && (
                              <span className="text-[10px] text-red-400 font-normal">
                                (Liv. {outfit.requiredLevel})
                              </span>
                            )}
                            {!canUnlockRelics && (
                              <span className="text-[10px] text-red-400 font-normal">
                                ({outfit.requiredRelics} Reliquie)
                              </span>
                            )}
                          </div>
                        ) : (
                          <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" />
                            Acquistato
                          </div>
                        )}
                      </div>

                      {/* Action Buttons: Anteprima + Ispeziona + Acquista/Indossa */}
                      <div className="flex items-center gap-1.5">
                        {/* 1. ANTEPRIMA / PROVA SULL'AVATAR */}
                        <button
                          type="button"
                          onClick={() => handleTogglePreviewOutfit(outfit.id)}
                          className={`px-2.5 py-1 rounded-xl text-xs font-bold flex items-center gap-1 transition cursor-pointer active:scale-95 ${
                            isPreviewing
                              ? 'bg-amber-500 text-stone-950 shadow-[0_0_12px_#f59e0b]'
                              : 'bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-600/40'
                          }`}
                          title="Vedi subito questo capo indossato sull'avatar"
                        >
                          <Eye className="w-3 h-3" />
                          <span>{isPreviewing ? 'In Prova' : 'Anteprima'}</span>
                        </button>

                        {/* 2. ISPEZIONA SCHEDA COMPLETA */}
                        <button
                          type="button"
                          onClick={() => setInspectItem(outfit)}
                          className="p-1 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 transition cursor-pointer"
                          title="Ispeziona modello e dettagli"
                        >
                          <Search className="w-3.5 h-3.5" />
                        </button>

                        {/* 3. EQUIP / BUY */}
                        {isEquipped ? (
                          <span className="px-3 py-1 rounded-xl bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-bold flex items-center gap-1">
                            <Check className="w-3 h-3 stroke-[3]" />
                            Indossato
                          </span>
                        ) : isUnlocked ? (
                          <button
                            type="button"
                            onClick={() => handleEquipOutfit(outfit)}
                            className="px-3 py-1 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-100 text-xs font-bold border border-stone-600 transition cursor-pointer active:scale-95"
                          >
                            Indossa
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleEquipOutfit(outfit)}
                            disabled={!canUnlockLevel || !canUnlockRelics || !canAfford}
                            className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1 transition cursor-pointer active:scale-95 ${
                              canUnlockLevel && canUnlockRelics && canAfford
                                ? 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md'
                                : 'bg-stone-800 text-stone-500 border border-stone-700 cursor-not-allowed'
                            }`}
                          >
                            {!canUnlockLevel || !canUnlockRelics ? (
                              <>
                                <Lock className="w-3 h-3" />
                                Bloccato
                              </>
                            ) : (
                              <>
                                <Coins className="w-3 h-3" />
                                Sblocca
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Accessories List (Headgear, Tool, Talisman) */}
          {activeTab !== 'outfits' && (
            <div className="space-y-2.5">
              {activeAccessories.map(acc => {
                const isEquipped =
                  (acc.slot === 'headgear' && profile.equippedHeadgearId === acc.id) ||
                  (acc.slot === 'tool' && profile.equippedToolId === acc.id) ||
                  (acc.slot === 'talisman' && profile.equippedTalismanId === acc.id);
                
                const isPreviewing =
                  (acc.slot === 'headgear' && previewHeadgearId === acc.id) ||
                  (acc.slot === 'tool' && previewToolId === acc.id) ||
                  (acc.slot === 'talisman' && previewTalismanId === acc.id);

                const isUnlocked = profile.unlockedAccessoryIds.includes(acc.id);
                const canUnlockLevel = currentLevelId >= acc.requiredLevel;
                const canAfford = coins >= acc.cost;

                return (
                  <div
                    key={acc.id}
                    className={`p-3 rounded-2xl border transition-all ${
                      isPreviewing
                        ? 'bg-amber-950/60 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)] ring-1 ring-amber-400'
                        : isEquipped
                        ? 'bg-amber-950/30 border-amber-500/70 shadow-md'
                        : isUnlocked
                        ? 'bg-stone-950/60 border-stone-800 hover:border-stone-700'
                        : 'bg-stone-950/30 border-stone-800/60 opacity-85'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2.5 flex-1">
                        <div className="p-2 rounded-xl bg-stone-900 border border-stone-700 text-amber-400 shrink-0">
                          {renderAccessoryIcon(acc.iconName)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="text-xs font-bold text-stone-100 font-serif">
                              {acc.name}
                            </span>
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-stone-800 text-amber-300 font-medium border border-stone-700">
                              {acc.tag}
                            </span>
                          </div>
                          <p className="text-[11px] text-stone-400 leading-relaxed">
                            {acc.description}
                          </p>
                        </div>
                      </div>

                      {/* Perk badge */}
                      {acc.perk && (
                        <div className="shrink-0 px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
                          {acc.perk.label}
                        </div>
                      )}
                    </div>

                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-stone-800/80 gap-2">
                      {/* Price */}
                      <div>
                        {!isUnlocked ? (
                          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                            <Coins className="w-3.5 h-3.5 text-amber-400" />
                            <span>{acc.cost} Monete</span>
                            {!canUnlockLevel && (
                              <span className="text-[10px] text-red-400 font-normal">
                                (Livello {acc.requiredLevel})
                              </span>
                            )}
                          </div>
                        ) : (
                          <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" />
                            Posseduto
                          </div>
                        )}
                      </div>

                      {/* Action Buttons: Anteprima + Ispeziona + Equipaggia/Acquista */}
                      <div className="flex items-center gap-1.5">
                        {/* 1. ANTEPRIMA / PROVA SULL'AVATAR */}
                        <button
                          type="button"
                          onClick={() => handleTogglePreviewAccessory(acc)}
                          className={`px-2.5 py-1 rounded-xl text-xs font-bold flex items-center gap-1 transition cursor-pointer active:scale-95 ${
                            isPreviewing
                              ? 'bg-amber-500 text-stone-950 shadow-[0_0_12px_#f59e0b]'
                              : 'bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-600/40'
                          }`}
                          title="Vedi questo accessorio posizionato direttamente sull'avatar"
                        >
                          <Eye className="w-3 h-3" />
                          <span>{isPreviewing ? 'In Prova' : 'Anteprima'}</span>
                        </button>

                        {/* 2. ISPEZIONA SCHEDA COMPLETA */}
                        <button
                          type="button"
                          onClick={() => setInspectItem(acc)}
                          className="p-1 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 transition cursor-pointer"
                          title="Ispeziona modello e dettagli"
                        >
                          <Search className="w-3.5 h-3.5" />
                        </button>

                        {/* 3. EQUIP / BUY */}
                        {isEquipped ? (
                          <button
                            type="button"
                            onClick={() => handleEquipAccessory(acc)}
                            className="px-3 py-1 rounded-xl bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-bold flex items-center gap-1 hover:bg-amber-500/30 transition cursor-pointer"
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                            Rimuovi
                          </button>
                        ) : isUnlocked ? (
                          <button
                            type="button"
                            onClick={() => handleEquipAccessory(acc)}
                            className="px-3 py-1 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-100 text-xs font-bold border border-stone-600 transition cursor-pointer active:scale-95"
                          >
                            Equipaggia
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleEquipAccessory(acc)}
                            disabled={!canUnlockLevel || !canAfford}
                            className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1 transition cursor-pointer active:scale-95 ${
                              canUnlockLevel && canAfford
                                ? 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md'
                                : 'bg-stone-800 text-stone-500 border border-stone-700 cursor-not-allowed'
                            }`}
                          >
                            {!canUnlockLevel ? (
                              <>
                                <Lock className="w-3 h-3" />
                                Bloccato
                              </>
                            ) : (
                              <>
                                <Coins className="w-3 h-3" />
                                Sblocca
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer info note */}
        <div className="px-4 py-2 border-t border-amber-950/50 bg-stone-950/90 text-[10px] text-stone-400 text-center flex items-center justify-center gap-2">
          <Shield className="w-3 h-3 text-amber-400" />
          <span>I perk delle tenute e degli accessori si sommano automaticamente durante la spedizione.</span>
        </div>
      </div>

      {/* Close-Up Item Inspector Modal */}
      {inspectItem && (
        <ItemInspectModal
          item={inspectItem}
          isOpen={true}
          onClose={() => setInspectItem(null)}
          isUnlocked={
            'avatarId' in inspectItem
              ? profile.unlockedOutfitIds.includes(inspectItem.id) || inspectItem.cost === 0
              : profile.unlockedAccessoryIds.includes(inspectItem.id)
          }
          isEquipped={
            'avatarId' in inspectItem
              ? profile.equippedOutfitId === inspectItem.id
              : (inspectItem.slot === 'headgear' && profile.equippedHeadgearId === inspectItem.id) ||
                (inspectItem.slot === 'tool' && profile.equippedToolId === inspectItem.id) ||
                (inspectItem.slot === 'talisman' && profile.equippedTalismanId === inspectItem.id)
          }
          isPreviewing={
            'avatarId' in inspectItem
              ? previewOutfitId === inspectItem.id
              : (inspectItem.slot === 'headgear' && previewHeadgearId === inspectItem.id) ||
                (inspectItem.slot === 'tool' && previewToolId === inspectItem.id) ||
                (inspectItem.slot === 'talisman' && previewTalismanId === inspectItem.id)
          }
          canUnlockLevel={currentLevelId >= inspectItem.requiredLevel}
          canUnlockRelics={
            !('requiredRelics' in inspectItem) ||
            !inspectItem.requiredRelics ||
            discoveredRelicCount >= inspectItem.requiredRelics
          }
          canAfford={coins >= inspectItem.cost}
          onTryOn={() => {
            if ('avatarId' in inspectItem) {
              handleTogglePreviewOutfit(inspectItem.id);
            } else {
              handleTogglePreviewAccessory(inspectItem);
            }
            setInspectItem(null);
          }}
          onBuyOrEquip={() => {
            if ('avatarId' in inspectItem) {
              handleEquipOutfit(inspectItem);
            } else {
              handleEquipAccessory(inspectItem);
            }
            setInspectItem(null);
          }}
        />
      )}
    </div>
  );
};
