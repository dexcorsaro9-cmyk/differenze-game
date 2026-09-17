import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, Coins, Landmark, BookOpen } from 'lucide-react';
import type { CollectibleRelic } from '../data/collectiblesData';
import { assetUrl } from '../utils/assetUrl';
import { useTranslation } from '../i18n/LanguageContext';
import { getLocalizedRelic } from '../i18n/gameDataTranslations';

interface RelicFoundModalProps {
  relic: CollectibleRelic | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenMuseum: () => void;
}

export const RelicFoundModal: React.FC<RelicFoundModalProps> = ({
  relic,
  isOpen,
  onClose,
  onOpenMuseum,
}) => {
  const { language, t } = useTranslation();

  useEffect(() => {
    if (isOpen && relic) {
      // Golden fireworks confetti burst
      const end = Date.now() + 1800;
      const colors = ['#f59e0b', '#fbbf24', '#fef08a', '#d97706'];
      let animId: number | null = null;

      const frame = () => {
        try {
          confetti({
            particleCount: 4,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors,
          });
          confetti({
            particleCount: 4,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors,
          });
        } catch {
          // Confetti unavailable in certain embedded environments
        }

        if (Date.now() < end) {
          animId = requestAnimationFrame(frame);
        }
      };
      animId = requestAnimationFrame(frame);

      return () => {
        if (animId !== null) {
          cancelAnimationFrame(animId);
        }
      };
    }
  }, [isOpen, relic]);

  if (!isOpen || !relic) return null;

  const localizedRelic = getLocalizedRelic(relic, language);
  const rarityLabel = 
    relic.rarity === 'Mitico' ? t.relics.rarityMythic :
    relic.rarity === 'Leggendario' ? t.relics.rarityLegendary :
    relic.rarity === 'Raro' ? t.relics.rarityRare : t.relics.rarityCommon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#231509] via-[#1a0f06] to-[#0d0703] border-2 border-amber-500/80 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-center text-white overflow-hidden">
        {/* Top-Right Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full hover:bg-amber-950/80 text-amber-400 hover:text-amber-200 active:scale-95 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Ornate Brass Corner Brackets */}
        <div className="brass-corner-bracket brass-corner-tl" />
        <div className="brass-corner-bracket brass-corner-tr" />
        <div className="brass-corner-bracket brass-corner-bl" />
        <div className="brass-corner-bracket brass-corner-br" />

        {/* Sunburst Ray Background behind Relic */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-amber-500/20 via-yellow-400/30 to-amber-500/20 rounded-full blur-2xl pointer-events-none animate-pulse" />

        {/* Header Ribbon */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-amber-500/20 border border-amber-400/60 text-amber-300 text-xs font-black uppercase tracking-widest mb-3 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{t.relics.relicDiscoveredAlert}</span>
        </div>

        {/* Big Glowing Relic Display */}
        <div className="relative my-4 flex items-center justify-center">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-[0_0_35px_rgba(251,191,36,0.6)] transform hover:scale-105 transition-transform bg-[#120a05]">
            <img 
              src={assetUrl(relic.image)} 
              alt={localizedRelic.name}
              className="w-full h-full object-cover select-none pointer-events-none"
            />
            {/* Specular sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/25 pointer-events-none" />
            <div className="absolute inset-0 border border-amber-300/40 rounded-2xl pointer-events-none" />
          </div>

          <div className="absolute -bottom-2.5 px-3 py-0.5 rounded-full bg-slate-950/95 border border-amber-400 text-[11px] font-extrabold text-amber-300 tracking-wider uppercase shadow-lg">
            {rarityLabel}
          </div>
        </div>

        {/* Relic Titles */}
        <h3 className="text-xl sm:text-2xl font-black text-amber-200 tracking-tight font-serif mt-3">
          {localizedRelic.name}
        </h3>
        <p className="text-xs text-amber-400/90 font-medium italic mt-0.5">
          {localizedRelic.subtitle}
        </p>

        {/* Archaeological Details Pill */}
        <div className="flex items-center justify-center gap-3 text-[11px] text-amber-300/75 my-2">
          <span>{localizedRelic.era}</span>
          <span>•</span>
          <span>{localizedRelic.location}</span>
        </div>

        {/* Bellini Diary Excerpt */}
        <div className="text-left bg-[#2e1d0d]/80 border border-amber-500/30 rounded-2xl p-3.5 sm:p-4 my-3.5 shadow-inner">
          <div className="flex items-center gap-1.5 text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.relics.belliniDiary}</span>
          </div>
          <p className="text-xs text-amber-100/90 leading-relaxed font-serif italic">
            "{localizedRelic.lore}"
          </p>
        </div>

        {/* Coin Bounty Award */}
        <div className="flex items-center justify-center gap-2 py-2 px-4 bg-amber-500/20 border border-amber-500/50 rounded-xl max-w-xs mx-auto mb-5 shadow">
          <Coins className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-xs font-black text-amber-300">
            +{relic.coinReward} {t.relics.coinsAddedToPouch}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 justify-center">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-all active:scale-95"
          >
            {t.relics.continueExploring}
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenMuseum();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/30 flex items-center justify-center gap-1.5 transition-all active:scale-95"
          >
            <Landmark className="w-3.5 h-3.5" />
            <span>{t.relics.admireInMuseum}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
