import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Lock,
  ChevronRight,
  BookOpen,
  User,
  Stamp,
} from 'lucide-react';
import { CONSULAR_VISAS, type ConsularVisa } from '../data/passportData';
import type { ExplorerProfile } from '../data/avatarData';
import { EXPLORERS, ALL_OUTFITS } from '../data/avatarData';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { useTranslation } from '../i18n/LanguageContext';
import { getLocalizedVisa } from '../i18n/gameDataTranslations';

interface ExpeditionPassportModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ExplorerProfile;
  currentChapter: number;
  claimedVisaIds: string[];
  onClaimVisaBounty: (visa: ConsularVisa) => void;
}

export const ExpeditionPassportModal: React.FC<ExpeditionPassportModalProps> = ({
  isOpen,
  onClose,
  profile,
  currentChapter,
  claimedVisaIds,
  onClaimVisaBounty,
}) => {
  const { t, language } = useTranslation();
  const [activeTab, setActiveTab] = useState<'identity' | 'page_1' | 'page_2' | 'page_3'>('identity');
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

    // Slight organic stamp rotation based on index
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
              <span className="text-[10px] text-stone-600 font-serif font-semibold">
                • {locVisa.country}
              </span>
            </div>
            <h4 className="text-xs font-serif font-black text-amber-900 leading-tight">
              {locVisa.title}
            </h4>
          </div>

          <div className="text-right font-mono text-[9px] text-stone-600 shrink-0">
            {visa.protocolNumber}
          </div>
        </div>

        {/* Center Stamp Area */}
        <div className="relative my-2 py-1 flex items-center justify-center min-h-[70px]">
          {unlocked ? (
            <div
              className={`relative p-2.5 rounded-xl flex items-center gap-3 transition-transform duration-200 select-none ${
                isCurrentlyStamping ? 'scale-125 animate-bounce' : ''
              }`}
              style={{
                transform: `rotate(${rotation}deg)`,
                color: visa.inkColor.text,
                backgroundColor: visa.inkColor.bg,
                border: `2px dashed ${visa.inkColor.border}`,
                boxShadow: `0 0 10px ${visa.inkColor.bg}`,
              }}
            >
              <div className="text-2xl">{visa.symbol}</div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[10px] font-black uppercase tracking-wider font-mono">
                  {locVisa.territory}
                </span>
                <span className="text-[8px] font-bold tracking-widest mt-0.5 opacity-80">
                  {visa.date}
                </span>
                <span className="text-[8px] italic font-serif opacity-75 mt-0.5">
                  «{visa.motto}»
                </span>
              </div>

              {/* Rubber ink stamp badge */}
              <div
                className="absolute -top-2 -right-2 px-1 py-0.2 rounded text-[7px] font-mono font-black uppercase text-white shadow"
                style={{ backgroundColor: visa.inkColor.accent }}
              >
                {t.passport.stamped}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-stone-500 py-2">
              <Lock className="w-5 h-5 text-stone-400 mb-1" />
              <span className="text-[10px] font-serif font-bold text-center">
                {t.passport.consularAuthority}
              </span>
              <span className="text-[9px] font-mono text-stone-500 text-center">
                {t.header.chapter} {visa.chapterNumber}
              </span>
            </div>
          )}

          {/* Stamping Wooden Mallet Drop Animation */}
          {isCurrentlyStamping && (
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none animate-ping">
              <div className="w-20 h-20 rounded-full border-4 border-amber-600 bg-amber-500/30" />
            </div>
          )}
        </div>

        {/* Visa Footer & Bounty Claim */}
        <div className="pt-1.5 border-t border-stone-400/30 flex items-center justify-between">
          <span className="text-[9px] font-serif italic text-stone-600 truncate max-w-[140px]">
            {locVisa.consul}
          </span>

          {unlocked && (
            <div>
              {claimed ? (
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-900/10 text-emerald-800 border border-emerald-600/30 text-[9px] font-bold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>{t.passport.visaClaimed}</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => handleApplyStamp(visa)}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 text-amber-50 font-bold text-[10px] shadow active:scale-95 transition cursor-pointer border border-amber-400"
                >
                  <Stamp className="w-3 h-3" />
                  <span>{t.passport.applyStamp} (+{visa.bounty})</span>
                </button>
              )}
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
          {/* TAB 1: IDENTITY CREDENTIALS PAGE */}
          {activeTab === 'identity' && (
            <div className="space-y-4 animate-fade-in max-w-lg mx-auto">
              <div className="text-center border-b border-stone-400/40 pb-3">
                <div className="text-xs font-serif italic text-stone-600">
                  His Britannic Majesty's Foreign Office • Archaeological Expeditionary Corps
                </div>
                <h3 className="text-lg font-serif font-black tracking-wide text-amber-950 uppercase mt-0.5">
                  {language === 'en' ? "Identity Certificate & Safe Conduct" : language === 'es' ? "Certificado de Identidad y Salvoconducto" : "Certificato di Identità & Lasciapassare"}
                </h3>
                <span className="text-[10px] font-mono tracking-widest text-amber-900/80">
                  N° REGISTRO A-1928-884-ROYAL
                </span>
              </div>

              {/* Photo & Bio Details Grid */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-[#ede2d2]/70 border border-stone-400/50 shadow-sm">
                {/* Explorer Vintage Portrait Card */}
                <div className="relative w-28 h-36 rounded-lg bg-stone-900 border-2 border-stone-500 shadow-md overflow-hidden shrink-0 flex items-center justify-center">
                  <img
                    src={passportPortrait}
                    alt={currentExplorer.name}
                    className="w-full h-full object-cover object-top filter sepia-[0.2] contrast-[1.1]"
                  />
                  {/* Embossed Corner Brass Photo Mounts */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-400 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-amber-400 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-amber-400 pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-400 pointer-events-none" />

                  {/* Red Dry Seal Stamp on Photo */}
                  <div className="absolute bottom-1 right-1 w-9 h-9 rounded-full border-2 border-red-700/80 bg-red-600/20 flex items-center justify-center pointer-events-none rotate-12">
                    <span className="text-[6px] font-mono font-black text-red-800 text-center leading-tight">
                      FOREIGN<br />OFFICE
                    </span>
                  </div>
                </div>

                {/* Identity Form Fields */}
                <div className="flex-1 space-y-2 text-xs">
                  <div>
                    <span className="text-[9px] font-mono uppercase text-stone-500 block">
                      {language === 'en' ? "Bearer Explorer's Full Name" : language === 'es' ? "Nombre del Explorador Titular" : "Nome dell'Esploratore Titolare"}
                    </span>
                    <span className="text-sm font-serif font-black text-amber-950">
                      {profile.playerName}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-[9px] font-mono uppercase text-stone-500 block">
                        {language === 'en' ? "Expedition Rank" : language === 'es' ? "Rango de Expedición" : "Grado di Spedizione"}
                      </span>
                      <span className="font-serif font-bold text-stone-800">
                        {currentExplorer.title}
                      </span>
                    </div>

                    <div>
                      <span className="text-[9px] font-mono uppercase text-stone-500 block">
                        {language === 'en' ? "Date of Issue" : language === 'es' ? "Fecha de Emisión" : "Data di Rilascio"}
                      </span>
                      <span className="font-mono font-bold text-stone-800">
                        {language === 'en' ? "14 September 1928" : language === 'es' ? "14 de Septiembre de 1928" : "14 Settembre 1928"}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono uppercase text-stone-500 block">
                      {language === 'en' ? "Official Mandate" : language === 'es' ? "Misión Oficial" : "Missione Ufficiale"}
                    </span>
                    <span className="font-serif italic text-stone-700 text-[11px] block">
                      {language === 'en'
                        ? "Recovery of the Sacred Sun Disk and the 12 Hidden Relics of Vilcabamba and Paititi."
                        : language === 'es'
                        ? "Recuperación del Disco Solar Sagrado y las 12 Reliquias Ocultas de Vilcabamba y Paititi."
                        : "Recupero del Disco Solare e delle 12 Reliquie Celate di Vilcabamba e Paititi."}
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

              {/* Expedition Progress Banner */}
              <div className="p-3 rounded-2xl bg-amber-900/10 border border-amber-800/30 flex items-center justify-between">
                <div>
                  <span className="text-xs font-serif font-bold text-amber-900">
                    {language === 'en' ? "Passport Progress" : language === 'es' ? "Progreso del Pasaporte" : "Avanzamento Passaporto"}
                  </span>
                  <span className="text-[10px] text-stone-600 block">
                    {language === 'en'
                      ? `${unlockedCount} of 12 visas stamped • Current Chapter: ${currentChapter}`
                      : language === 'es'
                      ? `${unlockedCount} de 12 visados sellados • Capítulo actual: ${currentChapter}`
                      : `${unlockedCount} visti su 12 apposti • Capitolo attuale: ${currentChapter}`}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('page_1');
                    sound.playTap();
                    triggerHaptic('light');
                  }}
                  className="px-3 py-1 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow flex items-center gap-1 transition cursor-pointer active:scale-95"
                >
                  <span>{language === 'en' ? "Browse Visas" : language === 'es' ? "Examinar Visados" : "Sfoglia Visti"}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: VISAS PAGE 1 (Cap. 1-4) */}
          {activeTab === 'page_1' && (
            <div className="space-y-3 animate-fade-in">
              <div className="flex items-center justify-between border-b border-stone-400/40 pb-2">
                <h3 className="text-sm font-serif font-black uppercase text-amber-950">
                  Visti Consolari • Tratta Transatlantica & Amazzonia
                </h3>
                <span className="text-[10px] font-mono text-stone-600">
                  PAGINE 3 - 4
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page1Visas.map((visa, idx) => renderVisaStamp(visa, idx))}
              </div>
            </div>
          )}

          {/* TAB 3: VISAS PAGE 2 (Cap. 5-8) */}
          {activeTab === 'page_2' && (
            <div className="space-y-3 animate-fade-in">
              <div className="flex items-center justify-between border-b border-stone-400/40 pb-2">
                <h3 className="text-sm font-serif font-black uppercase text-amber-950">
                  Visti Consolari • Ande Centrali & Valle Sacra
                </h3>
                <span className="text-[10px] font-mono text-stone-600">
                  PAGINE 5 - 6
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page2Visas.map((visa, idx) => renderVisaStamp(visa, idx))}
              </div>
            </div>
          )}

          {/* TAB 4: VISAS PAGE 3 (Cap. 9-12) */}
          {activeTab === 'page_3' && (
            <div className="space-y-3 animate-fade-in">
              <div className="flex items-center justify-between border-b border-stone-400/40 pb-2">
                <h3 className="text-sm font-serif font-black uppercase text-amber-950">
                  Visti Consolari • Cittadella Sacra & Paititi
                </h3>
                <span className="text-[10px] font-mono text-stone-600">
                  PAGINE 7 - 8
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page3Visas.map((visa, idx) => renderVisaStamp(visa, idx))}
              </div>
            </div>
          )}
        </div>

        {/* Passport Booklet Footer */}
        <div className="px-5 py-2.5 bg-gradient-to-r from-[#2c0b11] via-[#3a1017] to-[#2c0b11] border-t border-amber-500/40 flex items-center justify-between shrink-0 text-amber-200/80 text-[10px]">
          <span className="font-serif italic">
            {language === 'en'
              ? "Official Property of the Royal Geographical Society • London 1928"
              : language === 'es'
              ? "Propiedad Oficial de la Real Sociedad Geográfica • Londres 1928"
              : "Proprietà Ufficiale della Royal Geographic Society • Londra 1928"}
          </span>
          <span className="font-mono">
            {language === 'en' ? "SERIES EXP-1928-VISAS" : language === 'es' ? "SERIE EXP-1928-VISADOS" : "SERIE SPE-1928-VISTI"}
          </span>
        </div>
      </div>
    </div>
  );
};
