import React from 'react';
import {
  X,
  Trophy,
  Eye,
  Zap,
  Shield,
  Crown,
  BookOpen,
  Sparkles,
  Compass,
  Sun,
  Flame,
  MapPin,
  Coins,
  Award,
  Lock,
} from 'lucide-react';
import { EXPEDITION_MEDALS, type ExpeditionMedal } from '../data/achievementsData';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { useTranslation } from '../i18n/LanguageContext';
import { getLocalizedMedal } from '../i18n/gameDataTranslations';

interface MedalsCabinetModalProps {
  isOpen: boolean;
  onClose: () => void;
  unlockedMedalIds: string[];
  onClaimMedalReward?: (medalId: string, coins: number) => void;
  onClaimBounty?: (medalId: string) => void;
  claimedMedalIds?: string[];
}

export const MedalsCabinetModal: React.FC<MedalsCabinetModalProps> = ({
  isOpen,
  onClose,
  unlockedMedalIds,
  onClaimMedalReward,
  onClaimBounty,
  claimedMedalIds = [],
}) => {
  const { t, language } = useTranslation();
  if (!isOpen) return null;

  const unlockedCount = unlockedMedalIds.length;
  const totalMedals = EXPEDITION_MEDALS.length;

  const renderMedalIcon = (iconName: string, className = 'w-6 h-6') => {
    const props = { className };
    switch (iconName) {
      case 'Eye': return <Eye {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Shield': return <Shield {...props} />;
      case 'Crown': return <Crown {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'Sun': return <Sun {...props} />;
      case 'Flame': return <Flame {...props} />;
      case 'MapPin': return <MapPin {...props} />;
      case 'Coins': return <Coins {...props} />;
      default: return <Trophy {...props} />;
    }
  };

  const getTierBadge = (tier: ExpeditionMedal['medalTier']) => {
    switch (tier) {
      case 'legendary':
        return {
          border: 'border-yellow-300 shadow-[0_0_15px_rgba(234,179,8,0.7)]',
          badge: 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-stone-950',
          metal: 'bg-gradient-to-tr from-yellow-600 via-amber-300 to-yellow-200 text-stone-950',
          label: t.medals.legendary,
        };
      case 'gold':
        return {
          border: 'border-amber-400/80 shadow-[0_0_12px_rgba(245,158,11,0.5)]',
          badge: 'bg-amber-500/30 border border-amber-400 text-amber-200',
          metal: 'bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-300 text-stone-950',
          label: t.medals.gold,
        };
      case 'silver':
        return {
          border: 'border-slate-400/70',
          badge: 'bg-slate-500/30 border border-slate-400 text-slate-200',
          metal: 'bg-gradient-to-tr from-slate-500 via-slate-200 to-slate-400 text-stone-950',
          label: t.medals.silver,
        };
      case 'bronze':
      default:
        return {
          border: 'border-amber-800/70',
          badge: 'bg-amber-900/40 border border-amber-700 text-amber-300',
          metal: 'bg-gradient-to-tr from-amber-900 via-amber-700 to-amber-800 text-amber-100',
          label: t.medals.bronze,
        };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2 pb-2 pt-8 sm:px-4 sm:pb-4 sm:pt-10 bg-black/85 backdrop-blur-md animate-fade-in select-none">
      {/* Victorian Walnut Wood & Brass Cabinet Frame */}
      <div className="relative w-full max-w-2xl max-h-[85vh] sm:max-h-[88vh] flex flex-col rounded-3xl bg-[#1c120a] border-4 border-amber-600/70 shadow-[0_0_80px_rgba(0,0,0,0.95)] overflow-hidden">
        
        {/* Brass corner brackets */}
        <div className="brass-corner-bracket brass-corner-tl" />
        <div className="brass-corner-bracket brass-corner-tr" />
        <div className="brass-corner-bracket brass-corner-bl" />
        <div className="brass-corner-bracket brass-corner-br" />

        {/* Top Header Bar */}
        <div className="leather-belt px-4 py-3 flex items-center justify-between border-b-2 border-amber-600/70 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300 shadow-inner">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 font-mono block">
                {t.medals.subtitle}
              </span>
              <h2 className="text-lg font-black text-amber-100 font-serif leading-none flex items-center gap-2">
                {t.medals.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Progress Counter Pill */}
            <div className="px-3 py-1 rounded-full bg-black/60 border border-amber-500/50 flex items-center gap-1.5 text-xs font-serif font-black text-amber-300 shadow-inner">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>{unlockedCount}/{totalMedals}</span>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                sound.playTap();
                triggerHaptic('light');
                onClose();
              }}
              className="p-1.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-400 hover:text-white border border-stone-700 transition cursor-pointer active:scale-95"
              title={t.common.close}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cabinet Inner Display (Deep Velvet Background) */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 custom-scrollbar bg-gradient-to-b from-[#140b05] via-[#1a0e07] to-[#0f0703]">
          
          <div className="text-center pb-1">
            <p className="text-xs text-amber-200/80 font-serif italic">
              {t.medals.subtitle}
            </p>
          </div>

          {/* 12 Medals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {EXPEDITION_MEDALS.map(medal => {
              const isUnlocked = unlockedMedalIds.includes(medal.id);
              const isClaimed = claimedMedalIds.includes(medal.id);
              const tierInfo = getTierBadge(medal.medalTier);
              const locMedal = getLocalizedMedal(medal, language);

              return (
                <div
                  key={medal.id}
                  className={`relative p-3 rounded-2xl border transition-all flex items-start gap-3 shadow-md ${
                    isUnlocked
                      ? `bg-stone-900/90 ${tierInfo.border} ring-1 ring-amber-400/30`
                      : 'bg-black/60 border-stone-800/80 opacity-60'
                  }`}
                >
                  {/* Medal Ribbon & Medallion */}
                  <div className="flex flex-col items-center shrink-0">
                    {/* Silk Ribbon */}
                    <div
                      className={`w-7 h-5 rounded-t-sm bg-gradient-to-r ${medal.ribbonColor} shadow-inner border-t border-x border-amber-300/30`}
                    />
                    {/* Round Embossed Metal Medallion */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center -mt-1 shadow-xl border-2 ${
                        isUnlocked ? tierInfo.metal : 'bg-stone-800 border-stone-700 text-stone-600'
                      }`}
                    >
                      {isUnlocked ? (
                        renderMedalIcon(medal.iconName, 'w-6 h-6 drop-shadow')
                      ) : (
                        <Lock className="w-5 h-5 text-stone-600" />
                      )}
                    </div>
                  </div>

                  {/* Medal Description & Status */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <h4
                        className={`text-xs sm:text-sm font-black font-serif truncate leading-snug ${
                          isUnlocked ? 'text-amber-100' : 'text-stone-400'
                        }`}
                      >
                        {locMedal.title}
                      </h4>
                      <span className={`text-[8px] font-black px-1.5 py-0.2 rounded shrink-0 ${tierInfo.badge}`}>
                        {tierInfo.label}
                      </span>
                    </div>

                    <span className="text-[10px] text-amber-400/90 font-medium block leading-tight font-serif italic mb-1">
                      {locMedal.subtitle}
                    </span>

                    <p className="text-[10px] text-stone-300 leading-relaxed line-clamp-2">
                      {locMedal.description}
                    </p>

                    {/* Reward & Claim */}
                    <div className="mt-2 pt-1.5 border-t border-amber-950/60 flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-1 text-amber-300 font-mono font-bold">
                        <Coins className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span>+{medal.coinReward}</span>
                      </div>

                      {isUnlocked ? (
                        isClaimed ? (
                          <span className="text-[9px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                            {t.medals.bountyClaimed}
                          </span>
                        ) : onClaimBounty || onClaimMedalReward ? (
                          <button
                            type="button"
                            onClick={() => {
                              sound.playCoinBurst();
                              triggerHaptic('success');
                              if (onClaimBounty) {
                                onClaimBounty(medal.id);
                              } else if (onClaimMedalReward) {
                                onClaimMedalReward(medal.id, medal.coinReward);
                              }
                            }}
                            className="px-2 py-0.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-950 font-black text-[9px] shadow active:scale-95 transition cursor-pointer hover:brightness-110 animate-pulse"
                          >
                            {t.medals.claimBounty}
                          </button>
                        ) : (
                          <span className="text-[9px] text-amber-400 font-bold">
                            {t.common.unlocked}
                          </span>
                        )
                      ) : (
                        <span className="text-[9px] text-stone-500 font-medium">
                          {t.common.locked}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#120a05] border-t border-amber-900/60 flex items-center justify-between text-xs text-amber-300/80 font-serif">
          <span>{t.medals.subtitle}</span>
          <button
            type="button"
            onClick={() => {
              sound.playTap();
              onClose();
            }}
            className="px-4 py-1 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-black font-serif uppercase tracking-wider text-xs shadow transition cursor-pointer active:scale-95"
          >
            {t.common.close}
          </button>
        </div>
      </div>
    </div>
  );
};
