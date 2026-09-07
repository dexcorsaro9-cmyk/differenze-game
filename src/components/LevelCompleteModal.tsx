import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Star, Clock, ArrowRight, BookOpen, RotateCcw, Coins, Sparkles } from 'lucide-react';
import type { Level } from '../types/game';
import { sound } from '../utils/audio';

interface LevelCompleteModalProps {
  level: Level;
  timeElapsed: number;
  errorsCount: number;
  coinsEarned: number;
  onNextLevel: () => void;
  onReplay: () => void;
  onOpenJournal: () => void;
}

export const LevelCompleteModal: React.FC<LevelCompleteModalProps> = ({
  level,
  timeElapsed,
  errorsCount,
  coinsEarned,
  onNextLevel,
  onReplay,
  onOpenJournal,
}) => {
  // Calculate 1 to 3 stars based on completion time:
  // Under 105s (1m 45s) = 3 stars, under 210s (3m 30s) = 2 stars, otherwise 1 star
  const stars = timeElapsed <= 105 ? 3 : timeElapsed <= 210 ? 2 : 1;

  useEffect(() => {
    // Sound effect
    sound.playVictory();

    // Fire fireworks confetti
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        return clearInterval(interval);
      }

      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)] text-center text-white overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header Ribbon */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
          Sito Archeologico Decifrato!
        </span>


        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {level.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Capitolo {level.chapterNumber} • {level.era}
        </p>

        {/* 3 Stars Animation */}
        <div className="flex flex-col items-center justify-center my-4 sm:my-5">
          <div className="flex items-center justify-center gap-3">
            {[1, 2, 3].map(starNum => {
              const isEarned = starNum <= stars;
              return (
                <div
                  key={starNum}
                  className={`transition-all duration-500 transform ${
                    isEarned
                      ? 'scale-110 text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]'
                      : 'scale-90 text-slate-700'
                  }`}
                >
                  <Star
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${
                      isEarned ? 'fill-amber-400' : 'fill-slate-800'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          <span className="text-xs sm:text-sm font-semibold text-amber-300 mt-2">
            {stars === 3
              ? '⭐⭐⭐ Velocità da Maestro! (Tempo < 1m 45s)'
              : stars === 2
              ? '⭐⭐ Ritmo Solido! (Tempo < 3m 30s)'
              : '⭐ Completato! (Tempo > 3m 30s)'}
          </span>
        </div>

        {/* Coins Reward Card */}
        <div className="flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-amber-500/20 via-amber-500/30 to-amber-500/20 border border-amber-500/50 rounded-2xl max-w-xs mx-auto mb-4 shadow-lg animate-pulse">
          <Coins className="w-5 h-5 text-amber-400 fill-amber-400" />
          <span className="text-sm font-black text-amber-200">
            +{coinsEarned} Monete d'Oro Vinte!
          </span>
          <Sparkles className="w-4 h-4 text-amber-300" />
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-center gap-6 py-2.5 px-4 bg-slate-800/60 rounded-2xl border border-slate-700/60 max-w-xs mx-auto mb-5">
          <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
            <Clock className="w-4 h-4 text-sky-400" />
            <span>Tempo: <strong>{formatTime(timeElapsed)}</strong></span>
          </div>
          <div className="text-slate-500">•</div>
          <div className="text-xs sm:text-sm text-slate-300">
            Errori: <strong className={errorsCount === 0 ? 'text-emerald-400' : 'text-amber-400'}>{errorsCount}</strong>
          </div>
        </div>

        {/* Story Resolution & Unlocked Secret Card */}
        <div className="text-left bg-slate-950/80 border border-amber-500/30 rounded-2xl p-4 sm:p-5 mb-6 shadow-inner space-y-2.5">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Resoconto della Spedizione</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
            "{level.story.resolution}"
          </p>

          <div className="pt-2 border-t border-slate-800/80">
            <span className="text-[11px] font-bold text-amber-300 block mb-1">
              Nuova Pagina del Taccuino Sbloccata:
            </span>
            <p className="text-xs text-amber-200/90 leading-relaxed font-serif bg-amber-950/30 p-2.5 rounded-lg border border-amber-500/20">
              {level.story.unlockedSecret}
            </p>
          </div>
        </div>


        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
          <button
            onClick={onReplay}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            Rigioca
          </button>

          <button
            onClick={onOpenJournal}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-indigo-900/60 hover:bg-indigo-800/80 text-indigo-200 border border-indigo-500/40 font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <BookOpen className="w-4 h-4" />
            Leggi Diario
          </button>

          <button
            onClick={onNextLevel}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <span>Prossimo Capitolo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
