import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Lock,
  BookOpen,
  User,
  Stamp,
  BarChart3,
  Clock,
  Target,
  Award,
  Zap,
  Scroll,
} from 'lucide-react';
import { CONSULAR_VISAS, type ConsularVisa } from '../data/passportData';
import type { ExplorerProfile } from '../data/avatarData';
import { EXPLORERS, ALL_OUTFITS } from '../data/avatarData';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { useTranslation } from '../i18n/LanguageContext';
import { getLocalizedVisa } from '../i18n/gameDataTranslations';
import {
  getExpeditionTelemetry,
  formatPlayTime,
  getAccuracyPercentage,
} from '../utils/telemetry';

interface ExpeditionPassportModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ExplorerProfile;
  currentChapter: number;
  claimedVisaIds: string[];
  onClaimVisaBounty: (visa: ConsularVisa) => void;
  completedLevelIds?: number[];
  levelStars?: Record<number, number>;
  bestTimes?: Record<number, number>;
  discoveredRelicCount?: number;
  onOpenCertificate?: () => void;
}

export const ExpeditionPassportModal: React.FC<ExpeditionPassportModalProps> = ({
  isOpen,
  onClose,
  profile,
  currentChapter,
  claimedVisaIds,
  onClaimVisaBounty,
  completedLevelIds = [],
  levelStars = {},
  bestTimes = {},
  discoveredRelicCount = 0,
  onOpenCertificate,
}) => {
  const { t, language } = useTranslation();
  const [activeTab, setActiveTab] = useState<'identity' | 'telemetry' | 'page_1' | 'page_2' | 'page_3'>('identity');
  const [stampingVisaId, setStampingVisaId] = useState<string | null>(null);

  const currentExplorer = EXPLORERS[profile?.avatarId || 'samira'] || EXPLORERS.samira;
  const activeOutfit = ALL_OUTFITS.find(o => o.id === profile?.equippedOutfitId);
  const passportPortrait = activeOutfit?.image || currentExplorer.portrait;

  useEffect(() => {
    if (isOpen) {
      sound.playPassportOpen();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Telemetry computation
  const telemetry = getExpeditionTelemetry(completedLevelIds, bestTimes);
  const totalPlayTimeStr = formatPlayTime(telemetry.totalPlayTimeSeconds);
  const accuracyPct = getAccuracyPercentage(telemetry);
  const totalStars = Object.values(levelStars).reduce((acc, s) => acc + (s || 0), 0);

  // Filter visas per booklet page
  const page1Visas = CONSULAR_VISAS.slice(0, 4);   // Cap. 1-4
  const page2Visas = CONSULAR_VISAS.slice(4, 8);   // Cap. 5-8
  const page3Visas = CONSULAR_VISAS.slice(8, 12);  // Cap. 9-12

  const isVisaUnlocked = (visa: ConsularVisa) => currentChapter >= visa.chapterNumber;
  const unlockedCount = CONSULAR_VISAS.filter(v => isVisaUnlocked(v)).length;

  const handleApplyStamp = (visa: ConsularVisa) => {
    if (!isVisaUnlocked(visa)) return;
    setStampingVisaId(visa.id);
    sound.playHeavyStamp();
    triggerHaptic('success');

    setTimeout(() => {
      onClaimVisaBounty(visa);
      setStampingVisaId(null);
    }, 600);
  };

  const renderVisaStamp = (visa: ConsularVisa, index: number) => {
    const unlocked = isVisaUnlocked(visa);
    const safeClaimed = Array.isArray(claimedVisaIds) ? claimedVisaIds : [];
    const claimed = safeClaimed.includes(visa.id);
    const isCurrentlyStamping = stampingVisaId === visa.id;
    const locVisa = getLocalizedVisa(visa, language);

    const angles = [-2, 1.5, -1.2, 2.2];
    const rotation = angles[index % angles.length];

    return (
      <div
        key={visa.id}
        className={`relative p-3.5 rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[175px] ${
          unlocked
            ? 'bg-[#f4ebe1]/90 border-amber-900/40 shadow-md hover:shadow-lg'
            : 'bg-[#e2d5c3]/40 border-stone-400/40 opacity-75'
        }`}
        style={{
          boxShadow: unlocked ? 'inset 0 0 15px rgba(180,140,90,0.15)' : undefined,
        }}
      >
        {/* Visa Header */}
        <div className="flex items-start justify-between gap-2 border-b border-stone-400/30 pb-1.5">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-mono font-black tracking-wider text-amber-950 uppercase">
                {t.header.chapter} {visa.chapterNumber}
              </span>
              <span className="text-[10px] text-stone-600 font-serif italic">
                • {locVisa.country}
              </span>
            </div>
            <h4 className="text-sm font-serif font-black text-stone-900 leading-tight mt-0.5">
              {locVisa.title}
            </h4>
          </div>

          <span className="text-xl shrink-0" role="img" aria-label="Visa Symbol">
            {visa.symbol}
          </span>
        </div>

        {/* Visa Description / Lore */}
        <p className="text-[11px] font-serif text-stone-700 leading-relaxed my-2">
          {locVisa.description}
        </p>

        {/* Rubber Stamp Stamp Area */}
        <div className="pt-2 border-t border-stone-400/30 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-mono uppercase text-stone-500 font-bold">
              {visa.territory}
            </span>
          </div>

          {claimed ? (
            <div
              className="px-2.5 py-1 rounded-lg border-2 border-emerald-700/80 bg-emerald-900/10 text-emerald-900 font-mono font-black text-[10px] tracking-wider uppercase flex items-center gap-1 shadow-sm"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>{t.passport.stamped}</span>
            </div>
          ) : unlocked ? (
            <button
              type="button"
              disabled={isCurrentlyStamping}
              onClick={() => handleApplyStamp(visa)}
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-mono font-black text-[10px] tracking-wider uppercase flex items-center gap-1.5 shadow-md active:scale-95 transition cursor-pointer"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <Stamp className="w-3.5 h-3.5" />
              <span>{t.passport.applyStamp}</span>
            </button>
          ) : (
            <div className="flex items-center gap-1 text-[10px] font-mono text-stone-500">
              <Lock className="w-3 h-3" />
              <span>Cap. {visa.chapterNumber}</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2 pb-2 pt-8 sm:px-4 sm:pb-4 sm:pt-10 bg-black/85 backdrop-blur-md animate-fade-in select-none">
      {/* Outer Passport Leather Booklet */}
      <div
        className="relative w-full max-w-2xl max-h-[85vh] sm:max-h-[88vh] flex flex-col rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] border-4 border-[#5a1c24]"
        style={{
          background: 'linear-gradient(135deg, #3d1218 0%, #240a0e 50%, #44141c 100%)',
          boxShadow: 'inset 0 2px 6px rgba(255,255,255,0.2), 0 20px 50px rgba(0,0,0,0.9)',
        }}
      >
        {/* Leather Grain Highlight & Stitching */}
        <div className="absolute inset-1 rounded-[22px] border border-amber-500/30 pointer-events-none" />
        <div className="absolute inset-2 rounded-[20px] border border-dashed border-amber-400/20 pointer-events-none" />

        {/* Passport Booklet Header */}
        <div className="px-5 py-3.5 bg-gradient-to-r from-[#2c0b11] via-[#3a1017] to-[#2c0b11] border-b border-amber-500/40 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/60 flex items-center justify-center text-amber-300 shadow-inner">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-amber-300/80 uppercase block">
                {t.passport.subtitle}
              </span>
              <h2 className="text-base font-serif font-black text-amber-100 leading-tight">
                {t.passport.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-xs font-mono font-bold text-amber-300">
              <Stamp className="w-3.5 h-3.5 text-amber-400" />
              <span>{unlockedCount}/12 {t.passport.visasTitle}</span>
            </div>

            <button
              onClick={() => {
                sound.playTap();
                triggerHaptic('light');
                onClose();
              }}
              className="w-8 h-8 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-600 flex items-center justify-center transition cursor-pointer active:scale-95"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Booklet Ribbon Page Selector Tabs */}
        <div className="px-4 py-2 bg-[#20080d] border-b border-amber-600/30 flex items-center gap-1.5 overflow-x-auto custom-scrollbar shrink-0">
          <button
            onClick={() => {
              setActiveTab('identity');
              sound.playTap();
              triggerHaptic('light');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'identity'
                ? 'bg-amber-500 text-stone-950 shadow-md ring-1 ring-amber-300'
                : 'bg-stone-900/60 text-amber-200/70 hover:bg-stone-800 hover:text-amber-100'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>{t.passport.tabIdentity}</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('telemetry');
              sound.playTap();
              triggerHaptic('light');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'telemetry'
                ? 'bg-amber-500 text-stone-950 shadow-md ring-1 ring-amber-300'
                : 'bg-stone-900/60 text-amber-200/70 hover:bg-stone-800 hover:text-amber-100'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{t.passport.tabTelemetry}</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('page_1');
              sound.playTap();
              triggerHaptic('light');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'page_1'
                ? 'bg-amber-500 text-stone-950 shadow-md ring-1 ring-amber-300'
                : 'bg-stone-900/60 text-amber-200/70 hover:bg-stone-800 hover:text-amber-100'
            }`}
          >
            <Stamp className="w-3.5 h-3.5" />
            <span>{t.passport.tabPage1}</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('page_2');
              sound.playTap();
              triggerHaptic('light');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'page_2'
                ? 'bg-amber-500 text-stone-950 shadow-md ring-1 ring-amber-300'
                : 'bg-stone-900/60 text-amber-200/70 hover:bg-stone-800 hover:text-amber-100'
            }`}
          >
            <Stamp className="w-3.5 h-3.5" />
            <span>{t.passport.tabPage2}</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('page_3');
              sound.playTap();
              triggerHaptic('light');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'page_3'
                ? 'bg-amber-500 text-stone-950 shadow-md ring-1 ring-amber-300'
                : 'bg-stone-900/60 text-amber-200/70 hover:bg-stone-800 hover:text-amber-100'
            }`}
          >
            <Stamp className="w-3.5 h-3.5" />
            <span>{t.passport.tabPage3}</span>
          </button>
        </div>

        {/* INNER PARCHMENT PAGE CONTENT */}
        <div
          className="flex-1 overflow-y-auto p-4 sm:p-5 custom-scrollbar text-amber-950"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, #fdf6ec 0%, #f4eae0 65%, #e8dac8 100%)',
            boxShadow: 'inset 0 0 40px rgba(120,70,30,0.15)',
          }}
        >
          {/* TAB 1: EXPLORER IDENTITY */}
          {activeTab === 'identity' && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl bg-[#f5ecdf]/80 border-2 border-amber-900/40 shadow-inner">
                {/* Passport Portrait */}
                <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-xl overflow-hidden border-2 border-amber-900/60 shrink-0 shadow-md bg-stone-900 relative mx-auto sm:mx-0">
                  <img
                    src={passportPortrait}
                    alt={currentExplorer.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 px-1 py-0.5 rounded bg-black/60 text-[9px] font-mono text-center text-amber-300 font-bold uppercase">
                    1928 • ID
                  </div>
                </div>

                {/* Identity Dossier Fields */}
                <div className="flex-1 space-y-2 text-stone-900">
                  <div className="border-b border-stone-400/40 pb-1.5">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-stone-500 block">
                      {language === 'en' ? 'Bearer Name / Identifier' : language === 'es' ? 'Nombre del Titular' : 'Nome Titolare / Esploratore'}
                    </span>
                    <h3 className="text-lg font-serif font-black text-amber-950 leading-tight">
                      {profile.playerName || currentExplorer.name}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[9px] font-mono uppercase text-stone-500 block">
                        {language === 'en' ? 'Archaeological Role' : language === 'es' ? 'Rol Arqueológico' : 'Ruolo Archeologico'}
                      </span>
                      <span className="font-serif font-bold text-stone-800">
                        {currentExplorer.title}
                      </span>
                    </div>

                    <div>
                      <span className="text-[9px] font-mono uppercase text-stone-500 block">
                        {language === 'en' ? 'Specialty / Perk' : language === 'es' ? 'Especialidad' : 'Specializzazione'}
                      </span>
                      <span className="font-serif font-bold text-stone-800">
                        {currentExplorer.specialization}
                      </span>
                    </div>

                    <div>
                      <span className="text-[9px] font-mono uppercase text-stone-500 block">
                        {language === 'en' ? 'Issuing Consulate' : language === 'es' ? 'Consulado Emisor' : 'Consolato Emittente'}
                      </span>
                      <span className="font-serif font-bold text-stone-800">
                        London & Lima
                      </span>
                    </div>

                    <div>
                      <span className="text-[9px] font-mono uppercase text-stone-500 block">
                        {language === 'en' ? 'Expedition Status' : language === 'es' ? 'Estado' : 'Stato Spedizione'}
                      </span>
                      <span className="font-serif font-bold text-emerald-800">
                        {unlockedCount === 12 ? 'Gran Maestro 1928' : `Attivo (Cap. ${currentChapter})`}
                      </span>
                    </div>
                  </div>

                  <div className="pt-1.5 border-t border-stone-400/40">
                    <span className="text-[9px] font-mono uppercase text-stone-500 block">
                      {language === 'en' ? 'Expedition Mandate' : language === 'es' ? 'Mandato Oficial' : 'Mandato Consolare'}
                    </span>
                    <span className="text-[11px] font-serif italic text-stone-700 leading-snug block">
                      {language === 'en'
                        ? 'Recovery of the Sacred Sun Disk and the 12 Hidden Relics of Vilcabamba and Paititi.'
                        : language === 'es'
                        ? 'Recuperación del Disco Solar Sagrado y las 12 Reliquias Ocultas de Vilcabamba y Paititi.'
                        : 'Recupero del Disco Solare e delle 12 Reliquie Celate di Vilcabamba e Paititi.'}
                    </span>
                  </div>

                  {/* Signatures & Seal */}
                  <div className="pt-2 border-t border-stone-400/40 flex items-center justify-between">
                    <div>
                      <span className="text-[8px] font-mono uppercase text-stone-500 block">
                        {language === 'en' ? "Consular Officer's Signature" : language === 'es' ? "Firma del Oficial Cónsul" : "Firma dell'Ufficiale Console"}
                      </span>
                      <span className="font-serif italic font-bold text-indigo-950 text-xs">
                        Arthur Penhaligon, K.C.B.
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-full border-2 border-dashed border-indigo-900/60 flex items-center justify-center text-indigo-950 font-mono text-[8px] font-bold text-center leading-none">
                      SEAL<br />1928
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Banner to Issue Official 1928 Diploma */}
              {onOpenCertificate && (
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-900/20 via-amber-800/10 to-amber-900/20 border-2 border-amber-700/50 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-600/50 flex items-center justify-center text-amber-900 shadow-inner shrink-0">
                      <Scroll className="w-5 h-5 text-amber-800" />
                    </div>
                    <div>
                      <span className="text-xs font-serif font-black text-amber-950 block">
                        {t.certificate.diplomaHeading}
                      </span>
                      <span className="text-[10px] text-stone-600 block">
                        {t.certificate.confermentText}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      sound.playHeavyStamp();
                      triggerHaptic('medium');
                      onOpenCertificate();
                    }}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 hover:brightness-110 text-stone-950 font-black text-xs uppercase tracking-wider shadow-md active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer shrink-0"
                  >
                    <Award className="w-4 h-4" />
                    <span>{t.passport.emitCertificateBtn}</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: GEODETIC TELEMETRY & HALL OF RECORDS */}
          {activeTab === 'telemetry' && (
            <div className="space-y-4 animate-fade-in">
              {/* Telemetry Header */}
              <div className="border-b border-stone-400/40 pb-2 flex items-center justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-serif font-black text-amber-950">
                    {t.passport.telemetryTitle}
                  </h3>
                  <p className="text-[11px] text-stone-600 font-serif italic">
                    {t.passport.telemetrySubtitle}
                  </p>
                </div>

                <div className="px-3 py-1 rounded-full bg-amber-900/15 border border-amber-800/30 text-xs font-mono font-bold text-amber-900">
                  {completedLevelIds.length} / 120 Livelli
                </div>
              </div>

              {/* 4 Main Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* 1. Total Playtime */}
                <div className="p-3.5 rounded-2xl bg-[#f4ebd0]/90 border border-amber-800/40 shadow-sm flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-700/50 flex items-center justify-center text-amber-900 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-stone-600 block">
                      {t.passport.statTotalTime}
                    </span>
                    <span className="text-xl font-serif font-black text-amber-950 block mt-0.5">
                      {totalPlayTimeStr}
                    </span>
                    <span className="text-[10px] text-stone-500 italic">
                      120 Tavole Fotografiche
                    </span>
                  </div>
                </div>

                {/* 2. Touch Accuracy */}
                <div className="p-3.5 rounded-2xl bg-[#f4ebd0]/90 border border-amber-800/40 shadow-sm flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-700/50 flex items-center justify-center text-emerald-900 shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono uppercase text-stone-600 block">
                      {t.passport.statAccuracy}
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-xl font-serif font-black text-emerald-900">
                        {accuracyPct}%
                      </span>
                      <span className="text-[10px] text-emerald-700 font-bold">
                        {accuracyPct >= 90 ? '★ Eccellente' : 'Buona'}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-stone-300 rounded-full mt-1.5 overflow-hidden">
                      <div
                        className="h-full bg-emerald-600 rounded-full"
                        style={{ width: `${accuracyPct}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Independent Riddles Solved */}
                <div className="p-3.5 rounded-2xl bg-[#f4ebd0]/90 border border-amber-800/40 shadow-sm flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-700/50 flex items-center justify-center text-indigo-900 shrink-0">
                    <Scroll className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-stone-600 block">
                      {t.passport.statIndependentRiddles}
                    </span>
                    <span className="text-xl font-serif font-black text-indigo-950 block mt-0.5">
                      {telemetry.independentHits} Enigmi
                    </span>
                    <span className="text-[10px] text-stone-500 italic">
                      Risolti senza Lente o Aiuti
                    </span>
                  </div>
                </div>

                {/* 4. Fastest Level Record */}
                <div className="p-3.5 rounded-2xl bg-[#f4ebd0]/90 border border-amber-800/40 shadow-sm flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-700/50 flex items-center justify-center text-amber-900 shrink-0">
                    <Zap className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-stone-600 block">
                      {t.passport.statFastestLevel}
                    </span>
                    <span className="text-xl font-serif font-black text-amber-950 block mt-0.5">
                      {telemetry.fastestTimeSeconds ? `${telemetry.fastestTimeSeconds}s` : '—'}
                    </span>
                    <span className="text-[10px] text-stone-500 italic">
                      {telemetry.fastestLevelId ? `Capitolo ${telemetry.fastestLevelId}` : 'Nessun record'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Summary Cards */}
              <div className="p-3.5 rounded-2xl bg-[#eedec7]/70 border border-stone-400/40 flex items-center justify-around text-center">
                <div>
                  <span className="text-[10px] font-mono uppercase text-stone-600 block">
                    {t.passport.statCompletedLevels}
                  </span>
                  <span className="text-base font-serif font-bold text-stone-900">
                    {completedLevelIds.length} / 120
                  </span>
                </div>
                <div className="w-px h-8 bg-stone-400/40" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-stone-600 block">
                    {t.passport.statTotalStars}
                  </span>
                  <span className="text-base font-serif font-bold text-amber-800">
                    ⭐ {totalStars} / 360
                  </span>
                </div>
                <div className="w-px h-8 bg-stone-400/40" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-stone-600 block">
                    {t.passport.statRelicsFound}
                  </span>
                  <span className="text-base font-serif font-bold text-stone-900">
                    🏺 {discoveredRelicCount} / 30
                  </span>
                </div>
              </div>

              {/* Emit Certificate Button */}
              {onOpenCertificate && (
                <div className="pt-2 flex justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      sound.playHeavyStamp();
                      triggerHaptic('medium');
                      onOpenCertificate();
                    }}
                    className="w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 hover:brightness-110 text-stone-950 font-serif font-bold text-sm tracking-wider uppercase shadow-xl flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition"
                  >
                    <Award className="w-5 h-5" />
                    <span>{t.passport.emitCertificateBtn}</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: VISAS PAGE 1 (Cap. 1-4) */}
          {activeTab === 'page_1' && (
            <div className="space-y-3 animate-fade-in">
              <div className="flex items-center justify-between border-b border-stone-400/40 pb-2">
                <div>
                  <span className="text-[10px] font-mono uppercase text-stone-500 block">
                    {t.passport.tabPage1}
                  </span>
                  <h3 className="text-sm font-serif font-black text-amber-950">
                    Londra, Gibilterra & Transatlantico
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-stone-600">
                  {page1Visas.filter(v => (claimedVisaIds || []).includes(v.id)).length}/4 Bollati
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page1Visas.map((v, i) => renderVisaStamp(v, i))}
              </div>
            </div>
          )}

          {/* TAB 4: VISAS PAGE 2 (Cap. 5-8) */}
          {activeTab === 'page_2' && (
            <div className="space-y-3 animate-fade-in">
              <div className="flex items-center justify-between border-b border-stone-400/40 pb-2">
                <div>
                  <span className="text-[10px] font-mono uppercase text-stone-500 block">
                    {t.passport.tabPage2}
                  </span>
                  <h3 className="text-sm font-serif font-black text-amber-950">
                    Rio, Pantanal, Manaus & Giungla del Guaporé
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-stone-600">
                  {page2Visas.filter(v => (claimedVisaIds || []).includes(v.id)).length}/4 Bollati
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page2Visas.map((v, i) => renderVisaStamp(v, i + 4))}
              </div>
            </div>
          )}

          {/* TAB 5: VISAS PAGE 3 (Cap. 9-12) */}
          {activeTab === 'page_3' && (
            <div className="space-y-3 animate-fade-in">
              <div className="flex items-center justify-between border-b border-stone-400/40 pb-2">
                <div>
                  <span className="text-[10px] font-mono uppercase text-stone-500 block">
                    {t.passport.tabPage3}
                  </span>
                  <h3 className="text-sm font-serif font-black text-amber-950">
                    Cuzco, Machu Picchu, Vilcabamba & Paititi
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-stone-600">
                  {page3Visas.filter(v => (claimedVisaIds || []).includes(v.id)).length}/4 Bollati
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page3Visas.map((v, i) => renderVisaStamp(v, i + 8))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
