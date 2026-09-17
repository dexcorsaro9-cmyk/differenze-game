import React, { useState, useMemo } from 'react';
import {
  X,
  Star,
  CheckCircle2,
  Play,
  RotateCcw,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Compass,
} from 'lucide-react';
import type { Level } from '../types/game';
import { SAGA_MILESTONES_120 } from '../data/sagaLore';
import { useTranslation } from '../i18n/LanguageContext';
import { getLocalizedLevelTitle } from '../i18n/gameDataTranslations';
import type { Language } from '../i18n/types';

interface LevelSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  levels: Level[];
  currentLevelId: number;
  completedLevelIds: number[];
  levelStars?: Record<number, number>;
  bestTimes?: Record<number, number>;
  onSelectLevel: (levelId: number) => void;
}

const CHAPTER_NAMES: Record<Language, Record<number, { title: string; location: string; short: string }>> = {
  it: {
    1: { title: "Lo Studio di Oxford", location: "Oxford, Inghilterra", short: "1. Oxford" },
    2: { title: "I Sotterranei dell'Ossario", location: "Catacombe di Parigi", short: "2. Parigi" },
    3: { title: "La Bottega dell'Alchimista", location: "Venezia, Italia", short: "3. Venezia" },
    4: { title: "Il Labirinto di Minosse", location: "Cnosso, Creta", short: "4. Creta" },
    5: { title: "La Biblioteca Sommersa", location: "Alessandria, Egitto", short: "5. Alessandria" },
    6: { title: "La Tomba dei Trenta Sacerdoti", location: "Valle dei Re, Luxor", short: "6. Luxor" },
    7: { title: "L'Oracolo delle Dune", location: "Oasi di Siwa, Sahara", short: "7. Siwa" },
    8: { title: "La Porta Scavata nella Roccia", location: "Petra, Giordania", short: "8. Petra" },
    9: { title: "La Gola del Tuono d'Acqua", location: "Cascate dell'Iguazú", short: "9. Iguazú" },
    10: { title: "I Geoglifi degli Dei", location: "Deserto di Nazca, Perù", short: "10. Nazca" },
    11: { title: "La Cittadella tra le Nubi", location: "Machu Picchu, Ande", short: "11. Ande" },
    12: { title: "La Camera d'Oro di Paititi", location: "Santuario di Paititi", short: "12. Paititi" },
  },
  en: {
    1: { title: "Oxford Night Study", location: "Oxford, England", short: "1. Oxford" },
    2: { title: "Catacomb Ossuary Vaults", location: "Paris Catacombs", short: "2. Paris" },
    3: { title: "The Alchemist's Workshop", location: "Venice, Italy", short: "3. Venice" },
    4: { title: "The Labyrinth of Minos", location: "Knossos, Crete", short: "4. Crete" },
    5: { title: "The Sunken Library", location: "Alexandria, Egypt", short: "5. Alexandria" },
    6: { title: "Tomb of the Thirty Priests", location: "Valley of the Kings, Luxor", short: "6. Luxor" },
    7: { title: "The Oracle of the Dunes", location: "Siwa Oasis, Sahara", short: "7. Siwa" },
    8: { title: "The Rock-Hewn Gate", location: "Petra, Jordan", short: "8. Petra" },
    9: { title: "The Gorge of Thunder Water", location: "Iguazú Falls", short: "9. Iguazú" },
    10: { title: "Geoglyphs of the Gods", location: "Nazca Desert, Peru", short: "10. Nazca" },
    11: { title: "Citadel Among the Clouds", location: "Machu Picchu, Andes", short: "11. Andes" },
    12: { title: "The Golden Chamber of Paititi", location: "Sanctuary of Paititi", short: "12. Paititi" },
  },
  es: {
    1: { title: "El Estudio de Oxford", location: "Oxford, Inglaterra", short: "1. Oxford" },
    2: { title: "Osario Subterráneo", location: "Catacumbas de París", short: "2. París" },
    3: { title: "El Taller del Alquimista", location: "Venecia, Italia", short: "3. Venecia" },
    4: { title: "El Laberinto de Minos", location: "Cnosos, Creta", short: "4. Creta" },
    5: { title: "La Biblioteca Sumergida", location: "Alejandría, Egipto", short: "5. Alejandría" },
    6: { title: "La Tumba de los Treinta Sacerdotes", location: "Valle de los Reyes, Luxor", short: "6. Luxor" },
    7: { title: "El Oráculo de las Dunas", location: "Oasis de Siwa, Sáhara", short: "7. Siwa" },
    8: { title: "La Puerta Tallada en la Roca", location: "Petra, Jordania", short: "8. Petra" },
    9: { title: "La Garganta del Agua Atronadora", location: "Cataratas del Iguazú", short: "9. Iguazú" },
    10: { title: "Los Geoglifos de los Dioses", location: "Desierto de Nazca, Perú", short: "10. Nazca" },
    11: { title: "La Ciudadela entre las Nubes", location: "Machu Picchu, Andes", short: "11. Andes" },
    12: { title: "La Cámara de Oro de Paititi", location: "Santuario de Paititi", short: "12. Paititi" },
  }
};

export const LevelSelectModal: React.FC<LevelSelectModalProps> = ({
  isOpen,
  onClose,
  levels,
  currentLevelId,
  completedLevelIds,
  levelStars = {},
  bestTimes = {},
  onSelectLevel,
}) => {
  const { language, t, interpolate } = useTranslation();

  const currentChapter = useMemo(() => {
    const curLevel = levels.find(l => l.id === currentLevelId);
    return curLevel ? curLevel.chapterNumber : 1;
  }, [levels, currentLevelId]);

  const [selectedChapter, setSelectedChapter] = useState<number>(currentChapter);

  // Calculate total stars collected across all 120 levels (max 360)
  const totalStars = useMemo(() => {
    return Object.values(levelStars).reduce((sum, s) => sum + (s || 0), 0);
  }, [levelStars]);

  if (!isOpen) return null;

  const chapterLevels = levels.filter(l => l.chapterNumber === selectedChapter);
  const chapterMilestone = SAGA_MILESTONES_120.find(m => m.stageNumber === selectedChapter);
  const chapterMeta = CHAPTER_NAMES[language]?.[selectedChapter] || CHAPTER_NAMES.it[selectedChapter] || {
    title: `${t.header.chapter} ${selectedChapter}`,
    location: language === 'en' ? "1928 Expedition" : language === 'es' ? "Expedición 1928" : "Spedizione 1928",
    short: `${selectedChapter}`
  };

  const completedInChapter = chapterLevels.filter(l => completedLevelIds.includes(l.id)).length;
  const chapterStars = chapterLevels.reduce((sum, l) => sum + (levelStars[l.id] || 0), 0);
  const maxChapterStars = chapterLevels.length * 3;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-3 pb-3 pt-6 sm:px-6 sm:pb-6 sm:pt-8 bg-black/85 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-4xl bg-gradient-to-b from-[#1c120a] via-[#140c06] to-[#0a0502] border-2 border-amber-600/60 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.95)] text-white flex flex-col max-h-[90vh] sm:max-h-[88vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-amber-900/60 bg-black/40">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-amber-100 font-serif tracking-wide flex items-center gap-2">
                {t.levelSelect.title}
                <span className="text-[10px] font-sans font-bold text-amber-400 bg-amber-950/70 border border-amber-500/30 px-2 py-0.5 rounded-full">
                  {t.levelSelect.stageMilestones}
                </span>
              </h3>
              <p className="text-xs text-amber-200/60 font-serif hidden sm:block">
                {t.levelSelect.subtitle}
              </p>
            </div>
          </div>

          {/* Global Stars Counter & Close Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.3)]">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs font-black font-mono text-amber-300">
                {totalStars}
              </span>
              <span className="text-[10px] text-amber-200/60 font-mono">/ 360</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-all active:scale-95 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 12 Chapters Horizontal Tab Selector */}
        <div className="px-3 sm:px-6 py-2.5 bg-black/60 border-b border-amber-950/80 overflow-x-auto scrollbar-none flex items-center gap-1.5 shrink-0">
          {Array.from({ length: 12 }, (_, i) => i + 1).map(chapNum => {
            const isSelected = selectedChapter === chapNum;
            const meta = CHAPTER_NAMES[language]?.[chapNum] || CHAPTER_NAMES.it[chapNum];
            const chapLvs = levels.filter(l => l.chapterNumber === chapNum);
            const isChapComplete = chapLvs.length > 0 && chapLvs.every(l => completedLevelIds.includes(l.id));
            const chapStCount = chapLvs.reduce((sum, l) => sum + (levelStars[l.id] || 0), 0);

            return (
              <button
                key={chapNum}
                type="button"
                onClick={() => setSelectedChapter(chapNum)}
                className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-[0_0_15px_rgba(245,158,11,0.5)] border border-amber-300 scale-[1.02]'
                    : isChapComplete
                    ? 'bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-500/30'
                    : 'bg-stone-900/60 hover:bg-stone-800/80 text-amber-200/80 border border-amber-900/40'
                }`}
              >
                {isChapComplete && !isSelected && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                )}
                <span>{meta.short}</span>
                {chapStCount > 0 && (
                  <span className={`text-[10px] font-mono font-bold px-1 rounded ${isSelected ? 'bg-black/30 text-stone-950' : 'bg-black/40 text-amber-400'}`}>
                    {chapStCount}★
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Chapter Banner */}
        <div className="px-4 sm:px-6 py-3 bg-gradient-to-r from-amber-950/40 via-stone-900/60 to-amber-950/40 border-b border-amber-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-950/80 border border-amber-500/30">
                {interpolate(t.levelSelect.chapterOf, { current: selectedChapter, total: 12 })}
              </span>
              <span className="text-xs text-amber-300/80 font-serif flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {chapterMeta.location}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-black text-amber-100 font-serif mt-0.5">
              {chapterMeta.title}
            </h4>
            {chapterMilestone && (
              <p className="text-[11px] text-amber-200/70 font-serif line-clamp-1 max-w-xl italic mt-0.5">
                "{chapterMilestone.storyFragment}"
              </p>
            )}
          </div>

          {/* Chapter Stats */}
          <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
            <div className="text-right">
              <div className="text-[10px] text-amber-300/70 font-serif uppercase tracking-wider">{t.levelSelect.progress}</div>
              <div className="text-xs font-bold text-amber-100 font-mono">
                {interpolate(t.levelSelect.levelsCount, { completed: completedInChapter, total: chapterLevels.length })}
              </div>
            </div>
            <div className="px-2.5 py-1 rounded-xl bg-amber-950/60 border border-amber-500/30 flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs font-black font-mono text-amber-300">
                {chapterStars} / {maxChapterStars}
              </span>
            </div>
          </div>
        </div>

        {/* 10 Level Cards Grid */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-3">
          {chapterLevels.map(level => {
            const isCompleted = completedLevelIds.includes(level.id);
            const isCurrent = level.id === currentLevelId;
            const starsEarned = levelStars[level.id] || 0;
            const bestTime = bestTimes[level.id];
            const localizedTitle = getLocalizedLevelTitle(
              level.id,
              level.chapterNumber,
              level.levelNumberInStage || ((level.id - 1) % 10 + 1),
              language,
              level.title
            );

            return (
              <div
                key={level.id}
                onClick={() => {
                  onSelectLevel(level.id);
                  onClose();
                }}
                className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 select-none ${
                  isCurrent
                    ? 'bg-amber-500/15 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.25)] ring-1 ring-amber-400'
                    : isCompleted
                    ? 'bg-[#1a0f07]/90 border-amber-900/40 hover:border-amber-600 hover:bg-[#24150a]'
                    : 'bg-[#120a05]/70 border-stone-800/80 hover:border-stone-700'
                }`}
              >
                {/* Thumbnail Preview */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden bg-black border border-amber-900/50 shrink-0 relative">
                  <img
                    src={level.imageA}
                    alt={localizedTitle}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {isCompleted && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px] flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 drop-shadow" />
                    </div>
                  )}
                  <span className="absolute bottom-1 left-1 px-1.5 py-0.2 rounded bg-black/75 text-[9px] font-mono font-bold text-amber-300">
                    #{level.id}
                  </span>
                </div>

                {/* Level Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-amber-400 px-1.5 py-0.2 rounded bg-amber-950/70 border border-amber-500/30">
                      {t.levelSelect.stage} {level.levelNumberInStage || ((level.id - 1) % 10 + 1)}
                    </span>
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                        level.difficulty === 'Facile'
                          ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
                          : level.difficulty === 'Normale'
                          ? 'bg-amber-950/60 text-amber-300 border border-amber-500/30'
                          : 'bg-rose-950/60 text-rose-300 border border-rose-500/30'
                      }`}
                    >
                      {level.difficulty === 'Facile' ? t.levelSelect.easy : level.difficulty === 'Normale' ? t.levelSelect.normal : t.levelSelect.expert}
                    </span>
                  </div>

                  <h5 className="text-xs sm:text-sm font-black text-amber-100 font-serif truncate mt-1">
                    {localizedTitle}
                  </h5>

                  {/* 3 Real Stars & Speedrun Best Time */}
                  <div className="flex items-center gap-3 mt-1.5">
                    {/* Stars */}
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3].map(starNum => {
                        const isEarned = starNum <= starsEarned;
                        return (
                          <Star
                            key={starNum}
                            className={`w-3.5 h-3.5 ${
                              isEarned
                                ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.6)]'
                                : 'text-stone-700 fill-stone-900/60'
                            }`}
                          />
                        );
                      })}
                    </div>

                    {/* Best Time Display */}
                    {bestTime !== undefined && (
                      <div className="text-[10px] text-amber-300/80 flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3 text-amber-400" />
                        <span>{formatTime(bestTime)}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Play Button */}
                <div className="shrink-0">
                  {isCurrent ? (
                    <button
                      type="button"
                      className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 text-stone-950 font-black text-xs shadow-[0_0_12px_rgba(245,158,11,0.6)] flex items-center gap-1"
                    >
                      <Play className="w-3 h-3 fill-stone-950" />
                      <span>{t.levelSelect.inProgress}</span>
                    </button>
                  ) : isCompleted ? (
                    <button
                      type="button"
                      className="px-2.5 py-1.5 rounded-xl bg-amber-950/60 hover:bg-amber-900/80 text-amber-200 border border-amber-600/40 text-xs font-bold flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3 text-amber-400" />
                      <span>{t.levelSelect.replayingLevel}</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs shadow flex items-center gap-1"
                    >
                      <Play className="w-3 h-3 fill-stone-950" />
                      <span>{t.levelSelect.playingLevel}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer Navigation */}
        <div className="px-4 sm:px-6 py-2.5 border-t border-amber-900/40 bg-black/40 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setSelectedChapter(prev => Math.max(1, prev - 1))}
            disabled={selectedChapter <= 1}
            className="px-3 py-1 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:opacity-40 text-stone-300 text-xs font-serif font-bold border border-stone-700 flex items-center gap-1 cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>{t.common.previous}</span>
          </button>

          <span className="text-xs text-amber-300/80 font-mono">
            {selectedChapter} / 12
          </span>

          <button
            type="button"
            onClick={() => setSelectedChapter(prev => Math.min(12, prev + 1))}
            disabled={selectedChapter >= 12}
            className="px-3 py-1 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:opacity-40 text-stone-300 text-xs font-serif font-bold border border-stone-700 flex items-center gap-1 cursor-pointer"
          >
            <span>{t.common.next}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
