import React, { useState } from 'react';
import { EXPLORERS, type ExplorerProfile } from '../data/avatarData';
import { Compass, BookOpen, Check, Sparkles, Shield, User } from 'lucide-react';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { useTranslation } from '../i18n/LanguageContext';
import { getLocalizedExplorer } from '../i18n/gameDataTranslations';

interface AvatarCreatorModalProps {
  isOpen: boolean;
  onConfirm: (profile: ExplorerProfile) => void;
  currentProfile?: ExplorerProfile | null;
}

export const AvatarCreatorModal: React.FC<AvatarCreatorModalProps> = ({
  isOpen,
  onConfirm,
  currentProfile,
}) => {
  const { language, t } = useTranslation();
  const [selectedAvatarId, setSelectedAvatarId] = useState<'samira' | 'mateo'>(
    currentProfile?.avatarId || 'samira'
  );
  const [customName, setCustomName] = useState<string>(
    currentProfile?.playerName || EXPLORERS[selectedAvatarId].name
  );

  if (!isOpen) return null;

  const currentExplorer = getLocalizedExplorer(EXPLORERS[selectedAvatarId] || EXPLORERS.samira, language);
  const [imgError, setImgError] = useState<boolean>(false);

  const handleSelectExplorer = (id: 'samira' | 'mateo') => {
    setSelectedAvatarId(id);
    if (!currentProfile || customName === EXPLORERS[selectedAvatarId].name) {
      setCustomName(EXPLORERS[id].name);
    }
    sound.playSelect();
    triggerHaptic('light');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = customName.trim() || currentExplorer.name;
    const isSwitchingAvatar = currentProfile && currentProfile.avatarId !== selectedAvatarId;

    // If switching character, equip the default outfit of the new character
    const safeEquippedOutfit = (!isSwitchingAvatar && currentProfile?.equippedOutfitId)
      ? currentProfile.equippedOutfitId
      : currentExplorer.defaultOutfitId;

    const safeUnlockedOutfits = currentProfile?.unlockedOutfitIds
      ? Array.from(new Set([...currentProfile.unlockedOutfitIds, currentExplorer.defaultOutfitId]))
      : [currentExplorer.defaultOutfitId];

    const safeUnlockedAccessories = Array.isArray(currentProfile?.unlockedAccessoryIds)
      ? currentProfile.unlockedAccessoryIds
      : ['off_compass_brass', 'legs_cargo_khaki', 'boots_leather_hiker'];

    const profile: ExplorerProfile = {
      avatarId: selectedAvatarId,
      playerName: finalName,
      equippedOutfitId: safeEquippedOutfit,
      equippedHeadgearId: currentProfile?.equippedHeadgearId ?? null,
      equippedToolId: currentProfile?.equippedToolId ?? null,
      equippedOffHandId: currentProfile?.equippedOffHandId ?? 'off_compass_brass',
      equippedLegsId: currentProfile?.equippedLegsId ?? 'legs_cargo_khaki',
      equippedBootsId: currentProfile?.equippedBootsId ?? 'boots_leather_hiker',
      equippedTalismanId: currentProfile?.equippedTalismanId ?? null,
      equippedBackId: currentProfile?.equippedBackId ?? null,
      unlockedOutfitIds: safeUnlockedOutfits,
      unlockedAccessoryIds: safeUnlockedAccessories,
    };

    sound.playLevelWin();
    triggerHaptic('success');
    onConfirm(profile);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-3 pb-3 pt-8 sm:pt-10 bg-black/85 backdrop-blur-md animate-fadeIn select-none">
      <div className="relative w-full max-w-md bg-stone-900/95 border-2 border-amber-500/60 rounded-3xl shadow-[0_0_50px_rgba(217,119,6,0.3)] overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Ancient Stone Header */}
        <div className="relative px-5 pt-4 pb-3 border-b border-amber-900/50 bg-gradient-to-b from-stone-800 to-stone-900 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-bold uppercase tracking-widest mb-1 shadow-inner">
            <Compass className="w-3 h-3 text-amber-400 animate-spin-slow" />
            {t.avatarCreator.academyBadge}
          </div>
          <h2 className="text-xl font-black text-amber-100 font-serif tracking-wide drop-shadow-md">
            {t.avatarCreator.title}
          </h2>
          <p className="text-stone-400 text-xs mt-0.5">
            {t.avatarCreator.subtitle}
          </p>
        </div>

        {/* Character Selector Toggle */}
        <div className="px-5 pt-3 pb-1">
          <div className="grid grid-cols-2 gap-2 p-1 bg-stone-950/80 rounded-2xl border border-stone-800">
            <button
              type="button"
              onClick={() => handleSelectExplorer('samira')}
              className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs transition-all duration-200 ${
                selectedAvatarId === 'samira'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-emerald-50 shadow-[0_0_15px_rgba(16,185,129,0.35)] border border-emerald-400/50 scale-[1.02]'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Dr. Samira Cruz
            </button>
            <button
              type="button"
              onClick={() => handleSelectExplorer('mateo')}
              className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs transition-all duration-200 ${
                selectedAvatarId === 'mateo'
                  ? 'bg-gradient-to-r from-amber-600 to-amber-800 text-amber-50 shadow-[0_0_15px_rgba(217,119,6,0.35)] border border-amber-400/50 scale-[1.02]'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Mateo Solano
            </button>
          </div>
        </div>

        {/* Scrollable Character Showcase */}
        <div className="flex-1 overflow-y-auto px-5 py-3 space-y-3.5 custom-scrollbar">
          
          {/* Pedestal Render Showcase */}
          <div className="relative w-full aspect-[3/4] max-h-[320px] mx-auto rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-[0_8px_30px_rgba(0,0,0,0.7)] group bg-stone-950 flex items-center justify-center">
            {!imgError ? (
              <img
                src={currentExplorer.image}
                alt={currentExplorer.name}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-amber-300 p-4 text-center bg-stone-900">
                <User className="w-16 h-16 text-amber-400 mb-2" />
                <span className="font-serif font-black text-sm">{currentExplorer.name}</span>
                <span className="text-[11px] text-stone-400">{currentExplorer.title}</span>
              </div>
            )}
            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/30 pointer-events-none" />
            
            {/* Pedestal Inscription Badge */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-stone-900/90 backdrop-blur-md border border-amber-500/40 rounded-xl p-2.5 flex items-center justify-between shadow-lg">
              <div>
                <div className="text-[11px] font-bold text-amber-300 font-serif flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  {t.avatarCreator.initialOutfit}
                </div>
                <div className="text-[10px] text-stone-300">
                  {selectedAvatarId === 'samira' ? t.avatarCreator.samiraInitialOutfit : t.avatarCreator.mateoInitialOutfit}
                </div>
              </div>
              <div className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                {t.avatarCreator.included}
              </div>
            </div>
          </div>

          {/* Character Dossier Card */}
          <div className="bg-stone-950/70 border border-stone-800 rounded-2xl p-3.5 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-bold text-stone-100 font-serif">
                  {currentExplorer.name}
                </h3>
                <p className="text-xs text-amber-400/90 font-medium">
                  {currentExplorer.title}
                </p>
              </div>
              <div className="p-1.5 rounded-xl bg-stone-900 border border-stone-700 text-stone-300">
                <BookOpen className="w-4 h-4 text-amber-400" />
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              {currentExplorer.bio}
            </p>

            <div className="pt-1.5 flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-stone-900 border border-stone-700 text-[10px] text-stone-300">
                <Shield className="w-2.5 h-2.5 text-blue-400" />
                {currentExplorer.specialization}
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-950/40 border border-amber-700/40 text-[10px] text-amber-300">
                {t.avatarCreator.upgradesAvailable}
              </span>
            </div>
          </div>

          {/* Name Customization Input */}
          <div className="bg-stone-950/70 border border-stone-800 rounded-2xl p-3">
            <label className="block text-[11px] font-bold text-stone-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-amber-400" />
              {t.avatarCreator.nameLabel}
            </label>
            <input
              type="text"
              value={customName}
              onChange={e => setCustomName(e.target.value)}
              placeholder={currentExplorer.name}
              maxLength={24}
              className="w-full px-3 py-2 bg-stone-900 border border-amber-600/40 focus:border-amber-400 rounded-xl text-stone-100 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-amber-400/50 placeholder-stone-500 shadow-inner"
            />
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-4 border-t border-amber-950/50 bg-stone-950/90 flex gap-3">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-3 px-4 rounded-2xl font-black font-serif tracking-wider text-sm uppercase bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 shadow-[0_0_25px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2 active:scale-95 transition-all duration-150 cursor-pointer"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            {t.avatarCreator.confirmAndStart}
          </button>
        </div>
      </div>
    </div>
  );
};
