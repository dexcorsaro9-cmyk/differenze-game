import React from 'react';
import { Map, X, Award, CheckCircle2, Lock, Sparkles, Navigation } from 'lucide-react';
import { SAGA_MILESTONES_120 } from '../data/sagaLore';
import { useTranslation } from '../i18n/LanguageContext';

interface TreasureMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLevelId: number;
  completedLevelIds: number[];
}

export const TreasureMapModal: React.FC<TreasureMapModalProps> = ({
  isOpen,
  onClose,
  currentLevelId,
  completedLevelIds,
}) => {
  const { language, t, interpolate } = useTranslation();
  if (!isOpen) return null;

  // Number of stages unlocked (each stage is 10 levels)
  const completedStagesCount = SAGA_MILESTONES_120.filter(m =>
    completedLevelIds.includes(m.targetLevel)
  ).length;

  const progressPercent = Math.min(100, Math.round((completedLevelIds.length / 120) * 100));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl h-[88vh] bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/40 border-2 border-amber-500/50 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col text-white overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-amber-500/30 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
              <Map className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2">
                {t.treasureMap.title}
                <span className="text-xs font-bold text-amber-300 bg-amber-950/80 border border-amber-500/40 px-2.5 py-0.5 rounded-full">
                  {t.treasureMap.stageMilestones}
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                {t.treasureMap.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all active:scale-95"
            title={t.common.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Global Progress Bar */}
        <div className="px-6 py-3 bg-amber-950/25 border-b border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs text-amber-200">
            <Navigation className="w-4 h-4 text-amber-400" />
            <span>{interpolate(t.treasureMap.progress, { level: currentLevelId, total: 120, percent: progressPercent })}</span>
          </div>

          <div className="w-full sm:w-64 bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-700">
            <div
              className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 h-full rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(251,191,36,0.8)]"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="text-xs font-bold text-amber-300">
            {interpolate(t.levelSelect.levelsCount, { completed: completedStagesCount, total: 12 })}
          </div>
        </div>

        {/* 12 Expedition Milestones Grid */}
        <div className="flex-1 p-5 sm:p-6 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {SAGA_MILESTONES_120.map((milestone) => {
              const isStageCompleted = completedLevelIds.includes(milestone.targetLevel);
              const isCurrentStage =
                currentLevelId > (milestone.stageNumber - 1) * 10 &&
                currentLevelId <= milestone.stageNumber * 10;

              return (
                <div
                  key={milestone.stageNumber}
                  className={`p-4 rounded-2xl border transition-all flex flex-col justify-between relative overflow-hidden ${
                    isStageCompleted
                      ? 'bg-gradient-to-br from-amber-950/40 via-slate-900/90 to-slate-900/90 border-amber-400/60 shadow-[0_0_15px_rgba(251,191,36,0.15)]'
                      : isCurrentStage
                      ? 'bg-slate-900/90 border-amber-500/80 ring-2 ring-amber-400/40'
                      : 'bg-slate-950/40 border-slate-800/80 opacity-65'
                  }`}
                >
                  <div>
                    {/* Stage Header */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                        {t.levelSelect.stage} {milestone.stageNumber} • {t.levelSelect.level} {milestone.targetLevel}
                      </span>

                      {isStageCompleted ? (
                        <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>{t.hiddenObject.deciphered.replace(':', '')}</span>
                        </div>
                      ) : isCurrentStage ? (
                        <div className="flex items-center gap-1 text-amber-400 text-xs font-bold animate-pulse">
                          <Navigation className="w-3.5 h-3.5" />
                          <span>{t.treasureMap.inProgressStage}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-slate-500 text-xs">
                          <Lock className="w-3.5 h-3.5" />
                          <span>{t.treasureMap.lockedStage}</span>
                        </div>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-white leading-snug">
                      {milestone.stageTitle}
                    </h4>
                    <p className="text-xs text-amber-200/80 mb-2">
                      📍 {milestone.location}
                    </p>

                    {/* Fragment Snippet */}
                    <p className="text-[11px] text-slate-300 line-clamp-3 italic leading-relaxed">
                      {isStageCompleted
                        ? `"${milestone.storyFragment}"`
                        : (language === 'en'
                          ? "Protected cartographic fragment. Reach the milestone level to decipher it."
                          : language === 'es'
                          ? "Fragmento cartográfico protegido. Alcanza el nivel clave para descifrarlo."
                          : "Frammento cartografico protetto. Raggiungi il livello per sbloccarlo.")}
                    </p>
                  </div>

                  {/* Relic Unlocked Footer */}
                  <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold truncate pr-2">
                      <Award className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="truncate">{milestone.unlockedRelic}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 shrink-0 font-mono">
                      {milestone.mapCoordinates.split(' - ')[0]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Final Treasure Shrine Preview */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-950/60 via-yellow-950/40 to-slate-900/90 border-2 border-amber-400/80 text-center relative overflow-hidden shadow-2xl mt-4">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-amber-500/20 border-2 border-amber-400/50 flex items-center justify-center text-amber-300 shadow-[0_0_30px_rgba(251,191,36,0.5)]">
              <Sparkles className="w-8 h-8 animate-spin" />
            </div>

            <span className="text-xs uppercase font-bold tracking-widest text-amber-400 block mb-1">
              {language === 'en'
                ? "Final Expedition Objective (Level 120)"
                : language === 'es'
                ? "Objetivo Final de la Expedición (Nivel 120)"
                : "Obiettivo Finale Spedizione (Livello 120)"}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {language === 'en'
                ? "The Supreme Eye of Quetzalcoatl & The Gold of Paititi"
                : language === 'es'
                ? "El Ojo Supremo de Quetzalcoatl y el Oro de Paititi"
                : "L'Occhio Supremo di Quetzalcoatl & L'Oro di Paititi"}
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/90 max-w-xl mx-auto mt-2 leading-relaxed">
              {language === 'en'
                ? "The hidden sanctuary in the heart of the Peruvian Andes will open only to those who complete all 12 stages, deciphering the 8 riddles of each plate. Eternal glory awaits you at the end of the journal!"
                : language === 'es'
                ? "El santuario oculto en el corazón de los Andes peruanos solo se abrirá a quien complete las 12 etapas descifrando los 8 enigmas de cada lámina. ¡La gloria eterna te aguarda al final del cuaderno!"
                : "Il santuario nascosto nel cuore delle Ande peruviane si aprirà solo a chi completerà tutte le 12 tappe decifrando gli 8 indovinelli di ciascuna tavola. La gloria eterna ti attende alla fine del taccuino!"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
