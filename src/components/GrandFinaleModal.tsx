import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Trophy,
  Crown,
  Sparkles,
  BookOpen,
  Globe,
  Check,
  Coins,
  ChevronRight,
  Award
} from 'lucide-react';
import { EXPLORERS, ALL_OUTFITS, type ExplorerProfile } from '../data/avatarData';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { safeStorage } from '../utils/storage';
import { useTranslation } from '../i18n/LanguageContext';
import { getLocalizedExplorer } from '../i18n/gameDataTranslations';

interface GrandFinaleModalProps {
  isOpen: boolean;
  profile: ExplorerProfile;
  onClose: () => void;
  onOpenJournal: () => void;
  onOpenMappamondo: () => void;
}

type EndingType = 'academy' | 'secret_archive' | 'sacred_jungle';

interface EndingDetail {
  id: EndingType;
  title: string;
  badge: string;
  icon: string;
  shortDesc: string;
  epilogue: string;
  loreTitle: string;
  themeColor: string;
  borderColor: string;
  accentBg: string;
}

export const GrandFinaleModal: React.FC<GrandFinaleModalProps> = ({
  isOpen,
  profile,
  onClose,
  onOpenJournal,
  onOpenMappamondo,
}) => {
  const { language, t, interpolate } = useTranslation();
  const [selectedEnding, setSelectedEnding] = useState<EndingType | null>(() => {
    return (safeStorage.getItem('differenze_saga_ending_v1') as EndingType) || null;
  });
  const [isEndingConfirmed, setIsEndingConfirmed] = useState<boolean>(() => {
    return Boolean(safeStorage.getItem('differenze_saga_ending_v1'));
  });

  if (!isOpen) return null;

  const sagaEndings: Record<EndingType, EndingDetail> = {
    academy: {
      id: 'academy',
      title: t.grandFinale.endingAcademyTitle,
      badge: t.grandFinale.endingAcademyBadge,
      icon: '🏛️',
      shortDesc: t.grandFinale.endingAcademyDesc,
      epilogue: t.grandFinale.endingAcademyEpilogue,
      loreTitle: t.grandFinale.endingAcademyHonor,
      themeColor: 'text-amber-300',
      borderColor: 'border-amber-400',
      accentBg: 'bg-amber-950/70',
    },
    secret_archive: {
      id: 'secret_archive',
      title: t.grandFinale.endingArchiveTitle,
      badge: t.grandFinale.endingArchiveBadge,
      icon: '🗝️',
      shortDesc: t.grandFinale.endingArchiveDesc,
      epilogue: t.grandFinale.endingArchiveEpilogue,
      loreTitle: t.grandFinale.endingArchiveHonor,
      themeColor: 'text-indigo-300',
      borderColor: 'border-indigo-400',
      accentBg: 'bg-indigo-950/70',
    },
    sacred_jungle: {
      id: 'sacred_jungle',
      title: t.grandFinale.endingJungleTitle,
      badge: t.grandFinale.endingJungleBadge,
      icon: '🌿',
      shortDesc: t.grandFinale.endingJungleDesc,
      epilogue: t.grandFinale.endingJungleEpilogue,
      loreTitle: t.grandFinale.endingJungleHonor,
      themeColor: 'text-emerald-300',
      borderColor: 'border-emerald-400',
      accentBg: 'bg-emerald-950/70',
    },
  };

  const explorer = getLocalizedExplorer(EXPLORERS[profile?.avatarId || 'samira'] || EXPLORERS.samira, language);
  const activeOutfit = ALL_OUTFITS.find(o => o.id === profile?.equippedOutfitId);
  const explorerPortrait = activeOutfit?.image || explorer.portrait;

  const handleChooseEnding = (ending: EndingType) => {
    setSelectedEnding(ending);
    setIsEndingConfirmed(true);
    safeStorage.setItem('differenze_saga_ending_v1', ending);
    sound.playVictory();
    triggerHaptic('success');

    try {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 },
      });
    } catch {
      // Graceful fallback if canvas/confetti is unavailable
    }
  };

  const activeEndingData = selectedEnding ? sagaEndings[selectedEnding] : null;

  // Calculate player's expedition alignment from their milestone dilemma choices
  const dilemmaStats = (() => {
    try {
      const saved = JSON.parse(localStorage.getItem('differenze_expedition_choices_v1') || '{}');
      const counts = { academy: 0, secret_archive: 0, sacred_jungle: 0 };
      Object.values(saved).forEach((val: any) => {
        if (val && val.alignment && counts[val.alignment as keyof typeof counts] !== undefined) {
          counts[val.alignment as keyof typeof counts]++;
        }
      });
      const total = counts.academy + counts.secret_archive + counts.sacred_jungle;
      let dominant: EndingType = 'academy';
      if (counts.secret_archive > counts.academy && counts.secret_archive >= counts.sacred_jungle) {
        dominant = 'secret_archive';
      } else if (counts.sacred_jungle > counts.academy && counts.sacred_jungle > counts.secret_archive) {
        dominant = 'sacred_jungle';
      }
      return { counts, total, dominant };
    } catch {
      return { counts: { academy: 0, secret_archive: 0, sacred_jungle: 0 }, total: 0, dominant: 'academy' as EndingType };
    }
  })();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-3 pb-3 pt-8 sm:px-4 sm:pb-4 sm:pt-10 bg-black/90 backdrop-blur-xl animate-fade-in select-none">
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#2a1708] via-[#1a0e04] to-[#0c0602] border-2 border-amber-400/80 rounded-3xl shadow-[0_0_60px_rgba(245,158,11,0.5)] text-white overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[88vh]">
        
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-amber-500/25 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full leather-belt px-5 py-3.5 flex items-center justify-between border-b-2 border-amber-500/60 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full border-2 border-amber-300 overflow-hidden shadow-lg bg-stone-950 shrink-0">
              <img
                src={explorerPortrait}
                alt={explorer.name}
                className="w-full h-full object-cover object-top scale-105"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-amber-300" />
                <span className="text-sm font-black text-amber-200 font-serif tracking-wide uppercase">
                  {t.grandFinale.title}
                </span>
                <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] font-bold">
                  {t.grandFinale.levelsCompletedBadge}
                </span>
              </div>
              <span className="text-[10px] text-amber-400/80 font-serif block">
                {t.grandFinale.solvedPaititi}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 font-mono text-xs font-black shadow-inner">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span>{t.grandFinale.completed100}</span>
          </div>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          
          <div className="relative rounded-2xl bg-gradient-to-b from-amber-950/80 via-yellow-950/50 to-stone-950/90 border-2 border-amber-500/60 p-4 sm:p-5 text-center shadow-2xl overflow-hidden">
            <div className="absolute top-2 right-3 flex items-center gap-1 text-[10px] font-mono text-amber-400/80">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin-slow" />
              <span>{t.grandFinale.paititiLevel120}</span>
            </div>

            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-100 border-2 border-yellow-200 shadow-[0_0_35px_rgba(245,158,11,0.8)] flex items-center justify-center text-3xl sm:text-4xl animate-pulse mb-3">
              💎
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-amber-100 font-serif leading-tight">
              {t.grandFinale.conqueredHeart}
            </h2>
            <p className="text-xs sm:text-sm text-amber-200/90 max-w-lg mx-auto font-serif italic mt-1.5 leading-relaxed">
              "{t.grandFinale.epicSagaDesc}"
            </p>
          </div>

          {isEndingConfirmed && activeEndingData ? (
            <div className={`p-4 sm:p-5 rounded-2xl border-2 shadow-2xl space-y-3 transition-all ${activeEndingData.accentBg} ${activeEndingData.borderColor}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-amber-400 font-serif flex items-center gap-1.5">
                  <span className="text-lg">{activeEndingData.icon}</span>
                  {activeEndingData.badge}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-black/60 border border-white/10 text-xs font-bold text-amber-200">
                  {t.grandFinale.chosenEpilogue}
                </span>
              </div>

              <h3 className={`text-lg sm:text-xl font-black font-serif ${activeEndingData.themeColor}`}>
                {activeEndingData.title}
              </h3>

              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-serif italic bg-black/40 p-3.5 rounded-xl border border-white/10">
                "{activeEndingData.epilogue}"
              </p>

              <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <span className="font-bold text-amber-300 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-yellow-400" />
                  {activeEndingData.loreTitle}
                </span>
                <button
                  type="button"
                  onClick={() => setIsEndingConfirmed(false)}
                  className="text-[11px] text-amber-400 hover:text-amber-300 underline cursor-pointer text-left"
                >
                  {t.grandFinale.changeDecision}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="text-center">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold uppercase tracking-wider">
                  {t.grandFinale.fateOfGold}
                </span>
                <h3 className="text-base sm:text-lg font-black text-amber-100 font-serif mt-1">
                  {t.grandFinale.whatIsDestiny}
                </h3>
                <p className="text-xs text-amber-300/70 mb-2">
                  {t.grandFinale.tapChoicePrompt}
                </p>

                {dilemmaStats.total > 0 && (
                  <div className="mb-1 px-3 py-1.5 rounded-xl bg-black/50 border border-amber-500/30 text-[10.5px] text-amber-200/90 flex flex-wrap items-center justify-center gap-2">
                    <span className="font-bold text-amber-300">{t.grandFinale.dilemmaConduct}</span>
                    <span className="px-1.5 py-0.5 rounded bg-amber-950/60 border border-amber-500/30 text-amber-300">
                      🏛️ {dilemmaStats.counts.academy} {t.tutorial.step4Academy}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30 text-indigo-300">
                      🗝️ {dilemmaStats.counts.secret_archive} {t.tutorial.step4Archive}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                      🌿 {dilemmaStats.counts.sacred_jungle} {t.tutorial.step4Nature}
                    </span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {(Object.keys(sagaEndings) as EndingType[]).map(key => {
                  const item = sagaEndings[key];
                  const isAffinity = dilemmaStats.total > 0 && dilemmaStats.dominant === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleChooseEnding(key)}
                      className={`p-3.5 rounded-2xl border-2 flex flex-col text-left justify-between gap-2 transition-all cursor-pointer active:scale-95 group select-none ${item.accentBg} ${item.borderColor} hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] ${isAffinity ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-black' : ''}`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-2xl">{item.icon}</span>
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-amber-300 uppercase">
                              {item.badge}
                            </span>
                            {isAffinity && (
                              <span className="text-[8px] font-black px-1.5 py-0.2 rounded bg-amber-400 text-stone-950 uppercase tracking-tighter animate-pulse">
                                {t.grandFinale.affinityBadge}
                              </span>
                            )}
                          </div>
                        </div>
                        <h4 className="text-sm font-black text-amber-100 font-serif leading-tight group-hover:text-yellow-300">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-stone-300 mt-1 leading-snug">
                          {item.shortDesc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-bold text-amber-400 mt-2 pt-2 border-t border-white/10">
                        <span>{t.grandFinale.chooseThisEnding}</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="bg-gradient-to-r from-amber-950/90 via-[#201309] to-amber-950/90 border border-amber-500/40 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-inner">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-amber-300 text-2xl shrink-0 shadow">
                📜
              </div>
              <div className="text-left">
                <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider block font-serif">
                  {t.grandFinale.officialCertificate}
                </span>
                <span className="text-sm font-bold text-amber-100 font-serif block">
                  {interpolate(t.grandFinale.grandMasterTitle, { name: profile.playerName })}
                </span>
                <span className="text-[11px] text-stone-300">
                  {t.grandFinale.allChaptersRecorded}
                </span>
              </div>
            </div>

            <div className="hidden sm:flex flex-col items-end shrink-0">
              <div className="flex items-center gap-1 text-amber-300 font-mono font-black text-xs">
                <Coins className="w-4 h-4 text-yellow-400" />
                <span>{t.grandFinale.bonusGold}</span>
              </div>
              <span className="text-[9px] text-emerald-400 font-bold uppercase">{t.grandFinale.credited}</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-black/80 border-t border-amber-900/50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                sound.playTap();
                onOpenJournal();
              }}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-500/50 text-indigo-200 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition active:scale-95"
            >
              <BookOpen className="w-4 h-4" />
              <span>{t.grandFinale.openJournal}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sound.playTap();
                onOpenMappamondo();
              }}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-amber-950/80 hover:bg-amber-900 border border-amber-500/50 text-amber-200 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition active:scale-95"
            >
              <Globe className="w-4 h-4" />
              <span>{t.grandFinale.openMappamondo}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              sound.playTap();
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-black font-serif tracking-wider text-xs uppercase bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 text-stone-950 shadow-[0_0_20px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition"
          >
            <span>{t.grandFinale.backToBaseCamp}</span>
            <Check className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

      </div>
    </div>
  );
};
