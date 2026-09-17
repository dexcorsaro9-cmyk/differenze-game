import React, { useState } from 'react';
import { BookOpen, X, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import type { Level } from '../types/game';
import { useTranslation } from '../i18n/LanguageContext';
import { getLocalizedLevelTitle } from '../i18n/gameDataTranslations';

interface JournalModalProps {
  isOpen: boolean;
  onClose: () => void;
  levels: Level[];
  currentLevelId: number;
  completedLevelIds: number[];
  discoveredDifferenceIds: string[];
}

export const JournalModal: React.FC<JournalModalProps> = ({
  isOpen,
  onClose,
  levels,
  currentLevelId,
  completedLevelIds,
  discoveredDifferenceIds,
}) => {
  const { t, language } = useTranslation();
  const [selectedLevelId, setSelectedLevelId] = useState<number>(currentLevelId);

  if (!isOpen) return null;

  const selectedLevel = levels.find(l => l.id === selectedLevelId) || levels[0];
  const isCompleted = completedLevelIds.includes(selectedLevel.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-3 pb-3 pt-8 sm:px-6 sm:pb-6 sm:pt-10 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl h-[80vh] sm:h-[82vh] bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 border border-amber-500/40 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col text-white overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                {t.journal.title}
                <span className="text-xs font-normal text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded-full">
                  {t.journal.edition}
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                {t.journal.subtitle}
              </p>

            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Two Column / Tabs */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Chapter Selector Sidebar */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-800/80 bg-slate-950/40 p-3 overflow-y-auto flex md:flex-col gap-2 shrink-0">
            {levels.map(level => {
              const completed = completedLevelIds.includes(level.id);
              const isSelected = level.id === selectedLevelId;

              return (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevelId(level.id)}
                  className={`text-left p-3 rounded-2xl transition-all flex items-center justify-between shrink-0 md:shrink md:w-full border ${
                    isSelected
                      ? 'bg-amber-500/20 border-amber-400/60 text-white shadow-lg'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  <div className="pr-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400/80 block">
                      {t.header.chapter} {level.chapterNumber}
                    </span>
                    <h5 className="text-xs sm:text-sm font-bold text-white truncate max-w-[140px] sm:max-w-[160px]">
                      {getLocalizedLevelTitle(level.id, level.chapterNumber, level.levelNumberInStage || ((level.id - 1) % 10 + 1), language, level.title)}
                    </h5>
                    <span className="text-[10px] text-slate-400 block truncate">
                      {(level.era || '').split(' - ')[0] || level.era}
                    </span>
                  </div>

                  {completed ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Chapter Lore Detail Content */}
          <div className="flex-1 p-5 sm:p-7 overflow-y-auto space-y-6">
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-3 py-1 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold rounded-full">
                  {t.header.chapter} {selectedLevel.chapterNumber}
                </span>
                <span className="text-xs text-slate-400">{selectedLevel.era}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                {getLocalizedLevelTitle(selectedLevel.id, selectedLevel.chapterNumber, selectedLevel.levelNumberInStage || ((selectedLevel.id - 1) % 10 + 1), language, selectedLevel.title)}
              </h2>
            </div>

            {/* Prologue Section */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                {t.journal.belliniNotes}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedLevel.story.prologue}
              </p>
            </div>

            {/* Discovered Clues Section */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {t.journal.cluesFound} ({selectedLevel.differences?.length || 8})
                </span>
                <span className="text-[10px] font-mono text-amber-300">
                  {selectedLevel.differences.filter(d => discoveredDifferenceIds.includes(d.id) || isCompleted).length} / {selectedLevel.differences.length}
                </span>
              </h4>

              <div className="space-y-2.5">
                {selectedLevel.differences.map((diff, index) => {
                  const isFound = discoveredDifferenceIds.includes(diff.id) || isCompleted;

                  return (
                    <div
                      key={diff.id}
                      className={`p-3 rounded-2xl border transition-all ${
                        isFound
                          ? 'bg-slate-900/90 border-slate-700/80 text-slate-200 shadow-sm'
                          : 'bg-slate-950/40 border-slate-900/80 text-slate-500'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                          <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center text-[10px] font-mono font-bold">
                            {index + 1}
                          </span>
                          <span>{diff.name}</span>
                        </span>
                        {isFound ? (
                          <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>{t.hiddenObject.deciphered}</span>
                          </span>
                        ) : (
                          <span className="text-[10px] text-stone-500 font-semibold px-2 py-0.5 rounded-full bg-stone-900 border border-stone-800">
                            {t.hiddenObject.toFind}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed italic font-serif">
                        {isFound ? `"${diff.loreClue}"` : `🔒 [${t.journal.riddleHint}]`}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Secret Unlocked Diary */}
            {isCompleted ? (
              <div className="bg-gradient-to-r from-amber-950/40 to-slate-900/90 border border-amber-500/40 rounded-2xl p-4 sm:p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  {t.journal.secretArchive}
                </h4>

                <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-serif italic bg-amber-950/30 p-3 rounded-xl border border-amber-500/20">
                  {selectedLevel.story.unlockedSecret}
                </p>
              </div>
            ) : (
              <div className="border border-dashed border-amber-900/40 bg-black/30 rounded-2xl p-5 text-center text-stone-400 text-xs sm:text-sm">
                🔒 {t.journal.evidenceNotes}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
