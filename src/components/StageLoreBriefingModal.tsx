import React from 'react';
import { 
  X, 
  Compass, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  ScrollText, 
  ShieldCheck,
  Feather
} from 'lucide-react';
import { STAGE_BRIEFINGS, type StageBriefing } from '../data/stageBriefingsData';
import { EXPLORERS, ALL_OUTFITS, type ExplorerProfile } from '../data/avatarData';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { assetUrl } from '../utils/assetUrl';
import { useTranslation } from '../i18n/LanguageContext';
import { getLocalizedBriefing } from '../i18n/gameDataTranslations';

interface StageLoreBriefingModalProps {
  isOpen: boolean;
  stageNumber: number;
  profile: ExplorerProfile;
  onClose: () => void;
  onStartStage: (stageNumber: number) => void;
}

export const StageLoreBriefingModal: React.FC<StageLoreBriefingModalProps> = ({
  isOpen,
  stageNumber,
  profile,
  onClose,
  onStartStage,
}) => {
  const { language, t, interpolate } = useTranslation();
  if (!isOpen) return null;

  const rawBriefing: StageBriefing = STAGE_BRIEFINGS[stageNumber] || STAGE_BRIEFINGS[1];
  const briefing = getLocalizedBriefing(rawBriefing, language);
  const explorer = EXPLORERS[profile?.avatarId || 'samira'] || EXPLORERS.samira;
  const activeOutfit = ALL_OUTFITS.find(o => o.id === profile?.equippedOutfitId);
  const explorerPortrait = activeOutfit?.image || explorer.portrait;
  const explorerQuote = profile?.avatarId === 'mateo' 
    ? briefing.explorerQuotes.mateo 
    : briefing.explorerQuotes.samira;

  const handleStart = () => {
    sound.playTap();
    triggerHaptic('medium');
    onStartStage(stageNumber);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-3 pb-3 pt-8 sm:px-5 sm:pb-5 sm:pt-10 bg-black/85 backdrop-blur-md overflow-hidden animate-fadeIn select-none">
      {/* Antique Ledger Container */}
      <div className="relative w-full max-w-2xl max-h-[85vh] sm:max-h-[88vh] flex flex-col rounded-3xl bg-gradient-to-b from-[#1b1008] via-[#120a05] to-[#0a0502] border-2 border-amber-500/70 shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(245,158,11,0.25)] text-stone-200 overflow-hidden">
        
        {/* Vintage Archival Top Banner */}
        <div className="relative px-5 py-3.5 bg-gradient-to-r from-amber-950/80 via-[#26150a] to-amber-950/80 border-b border-amber-600/50 flex items-center justify-between shrink-0">
          {/* Dispatch Stamp */}
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-xl bg-amber-500/20 border border-amber-400/50 text-amber-300">
              <ScrollText className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 font-mono">
                  {briefing.dispatchCode}
                </span>
                <span className="px-2 py-0.2 rounded-full bg-amber-500/20 border border-amber-500/40 text-[9px] font-bold text-amber-200 font-serif">
                  {briefing.actTitle}
                </span>
              </div>
              <h2 className="text-sm sm:text-base font-black text-amber-100 font-serif tracking-tight leading-none mt-0.5">
                {briefing.stageTitle}
              </h2>
            </div>
          </div>

          {/* Close / Dismiss button */}
          <button
            onClick={() => {
              sound.playTap();
              onClose();
            }}
            className="p-1.5 rounded-full bg-stone-900/80 hover:bg-amber-900/50 border border-stone-700 hover:border-amber-500/50 text-stone-400 hover:text-white transition-all cursor-pointer"
            title={t.common.close}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-4 [scrollbar-width:thin] [scrollbar-color:#78350f_#1c1917]">
          
          {/* Cover & Atmospheric Header Card */}
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/40 shadow-xl bg-stone-950 group h-36 sm:h-44 shrink-0">
            <img 
              src={assetUrl(briefing.bannerImage)} 
              alt={briefing.stageTitle}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-80"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = assetUrl('/antique_world_map.jpg');
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
            
            {/* Overlay Badges */}
            <div className="absolute bottom-3 inset-x-3 flex items-end justify-between gap-2">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-300 font-serif">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{briefing.location}</span>
                </div>
                <p className="text-xs text-stone-300 font-serif italic max-w-sm line-clamp-1">
                  "{briefing.tagline}"
                </p>
              </div>

              <div className="text-right shrink-0 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded-xl border border-amber-500/30">
                <div className="flex items-center gap-1 text-[10px] text-amber-400 font-mono font-bold">
                  <Calendar className="w-3 h-3" />
                  <span>{briefing.date.split('—')[0]}</span>
                </div>
                <div className="flex items-center gap-1 text-[9px] text-stone-400 font-mono">
                  <Compass className="w-3 h-3 text-amber-500" />
                  <span>{briefing.coordinates}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Narrative Lore Section */}
          <div className="bg-[#140c06]/90 border border-amber-600/30 rounded-2xl p-4 sm:p-5 shadow-inner space-y-2.5">
            <div className="flex items-center justify-between border-b border-amber-900/60 pb-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider font-serif">
                <BookOpen className="w-4 h-4 text-amber-500" />
                <span>{t.briefing.fieldReport}</span>
              </div>
              <span className="text-[10px] text-amber-500/80 font-mono font-bold">
                {interpolate(t.briefing.stageOf, { current: briefing.stageNumber, total: 12, stage: briefing.stageNumber })}
              </span>
            </div>

            <div className="space-y-2 text-xs sm:text-[13px] text-stone-300 leading-relaxed font-serif">
              {briefing.loreStory.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "first-letter:text-2xl first-letter:font-black first-letter:text-amber-400 first-letter:float-left first-letter:mr-2 first-letter:font-serif" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Mission Objectives & Target Relic Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Objectives */}
            <div className="bg-[#140c06]/90 border border-amber-600/30 rounded-2xl p-3.5 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider font-serif border-b border-amber-900/60 pb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.briefing.objectives}</span>
              </div>
              <ul className="space-y-1.5 text-[11px] sm:text-xs text-stone-300 font-serif">
                {briefing.missionObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Relic Card */}
            <div className="bg-[#140c06]/90 border border-amber-600/30 rounded-2xl p-3.5 space-y-1.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider font-serif border-b border-amber-900/60 pb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.briefing.targetRelic}</span>
                </div>
                <div className="flex items-start gap-2.5 mt-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 via-yellow-600/30 to-amber-950 border border-amber-400/50 flex items-center justify-center text-lg shrink-0 shadow-md">
                    {briefing.stageNumber === 1 ? '🏷️' :
                     briefing.stageNumber === 2 ? '✝️' :
                     briefing.stageNumber === 3 ? '🏺' :
                     briefing.stageNumber === 4 ? '📜' :
                     briefing.stageNumber === 5 ? '🔍' :
                     briefing.stageNumber === 6 ? '𓆣' :
                     briefing.stageNumber === 7 ? '🔱' :
                     briefing.stageNumber === 8 ? '🏆' :
                     briefing.stageNumber === 9 ? '🪶' :
                     briefing.stageNumber === 10 ? '☀️' :
                     briefing.stageNumber === 11 ? '🗝️' : '👑'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-black text-amber-200 font-serif leading-tight">
                      {briefing.targetRelic.name}
                    </h4>
                    <p className="text-[11px] text-stone-400 font-serif italic mt-0.5 leading-snug">
                      {briefing.targetRelic.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-1 text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                <span>{interpolate(t.briefing.unlocksAtLevel, { level: briefing.stageNumber * 10 })}</span>
              </div>
            </div>
          </div>

          {/* Explorer Voice Card */}
          <div className="bg-gradient-to-r from-[#1f1207] via-[#170e06] to-[#1f1207] border border-amber-500/50 rounded-2xl p-3 sm:p-3.5 shadow-md flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-amber-400/80 overflow-hidden shadow-md shrink-0 bg-stone-900 flex items-center justify-center relative">
              <img 
                src={explorerPortrait} 
                alt={explorer.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 -z-10 flex items-center justify-center bg-amber-950/80 text-amber-300 font-serif font-black text-sm">
                {profile.playerName.slice(0, 2).toUpperCase()}
              </div>
            </div>
            <div className="space-y-0.5 flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <Feather className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider font-serif">
                  {interpolate(t.briefing.explorerNotes, { name: profile.playerName, title: explorer.title })}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-stone-200 font-serif italic leading-snug">
                "{explorerQuote}"
              </p>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-5 py-3.5 bg-gradient-to-r from-stone-950 via-[#1a0f07] to-stone-950 border-t border-amber-600/40 flex items-center justify-between gap-3 shrink-0">
          <div className="text-[11px] text-stone-400 font-serif hidden sm:block">
            {interpolate(t.briefing.levelsRange, { start: ((briefing.stageNumber - 1) * 10) + 1, end: briefing.stageNumber * 10 })}
          </div>

          <button
            onClick={handleStart}
            className="w-full sm:w-auto px-6 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-black text-xs sm:text-sm font-serif uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.5)] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-yellow-200"
          >
            <span>{t.briefing.startStage}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
