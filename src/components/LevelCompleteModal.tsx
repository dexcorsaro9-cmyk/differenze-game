import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Star,
  Clock,
  ArrowRight,
  BookOpen,
  RotateCcw,
  Coins,
  Sparkles,
  CheckCircle2,
  Trophy,
  Shield,
  Zap,
  Award,
  Compass,
} from 'lucide-react';
import type { Level } from '../types/game';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';

interface LevelCompleteModalProps {
  level: Level;
  timeElapsed: number;
  errorsCount: number;
  coinsEarned: number;
  onNextLevel: () => void;
  onReplay: () => void;
  onOpenJournal: () => void;
  onOpenGrandFinale?: () => void;
  onOpenDilemma?: () => void;
  isRelicFound?: boolean;
  bestTime?: number;
  isNewRecord?: boolean;
}

export const LevelCompleteModal: React.FC<LevelCompleteModalProps> = ({
  level,
  timeElapsed,
  errorsCount,
  coinsEarned,
  onNextLevel,
  onReplay,
  onOpenJournal,
  onOpenGrandFinale,
  onOpenDilemma,
  isRelicFound = false,
  bestTime,
  isNewRecord = false,
}) => {
  const [isStamped, setIsStamped] = useState(false);
  const [revealedStars, setRevealedStars] = useState<number>(0);
  const [displayCoins, setDisplayCoins] = useState<number>(0);

  // Calculate 1 to 3 stars based on completion time:
  // Under 105s (1m 45s) = 3 stars, under 210s (3m 30s) = 2 stars, otherwise 1 star
  const stars = timeElapsed <= 105 ? 3 : timeElapsed <= 210 ? 2 : 1;

  useEffect(() => {
    // Initial celebration
    sound.playVictory();

    // 1. Sequential Star Reveals (Star 1 at 400ms, Star 2 at 800ms, Star 3 at 1200ms)
    const t1 = setTimeout(() => {
      setRevealedStars(1);
      sound.playStarSound(1);
      triggerHaptic('light');
    }, 400);

    let t2: ReturnType<typeof setTimeout> | undefined;
    if (stars >= 2) {
      t2 = setTimeout(() => {
        setRevealedStars(2);
        sound.playStarSound(2);
        triggerHaptic('medium');
      }, 800);
    }

    let t3: ReturnType<typeof setTimeout> | undefined;
    if (stars >= 3) {
      t3 = setTimeout(() => {
        setRevealedStars(3);
        sound.playStarSound(3);
        triggerHaptic('three_stars');
      }, 1200);
    }

    // 2. Tactile Wax Seal Stamp at 1500ms
    const stampTimer = setTimeout(() => {
      setIsStamped(true);
      sound.playStamp();
      triggerHaptic('medium');
    }, 1500);

    // 3. Smooth Coin Count-Up Ticker starting at 1000ms
    const coinTimer = setTimeout(() => {
      const steps = 15;
      const stepValue = Math.max(1, Math.floor(coinsEarned / steps));
      let current = 0;
      const coinInterval = setInterval(() => {
        current += stepValue;
        if (current >= coinsEarned) {
          setDisplayCoins(coinsEarned);
          clearInterval(coinInterval);
        } else {
          setDisplayCoins(current);
          sound.playCoinTick();
        }
      }, 50);
    }, 900);

    // 4. Confetti Cannon
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
    }, 300);

    return () => {
      clearTimeout(t1);
      if (t2) clearTimeout(t2);
      if (t3) clearTimeout(t3);
      clearTimeout(stampTimer);
      clearTimeout(coinTimer);
      clearInterval(interval);
    };
  }, [stars, coinsEarned]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#180f08] via-[#1f140c] to-[#120a05] border-2 border-amber-500/70 rounded-3xl p-5 sm:p-7 shadow-[0_0_60px_rgba(217,119,6,0.35)] text-center text-white overflow-hidden max-h-[95vh] overflow-y-auto custom-scrollbar">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Tactile Wax Seal Stamp ("Timbro di Ceralacca") */}
        {isStamped && (
          <div className="absolute top-3 right-3 sm:top-5 sm:right-5 pointer-events-none z-20">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full wax-seal flex flex-col items-center justify-center text-white border-2 border-rose-300/80 shadow-[0_8px_25px_rgba(225,29,72,0.7)] animate-stamp-slam rotate-[-8deg]">
              <div className="w-[88%] h-[88%] rounded-full border border-dashed border-rose-200/50 flex flex-col items-center justify-center p-1 text-center">
                <span className="text-[7px] font-black uppercase tracking-wider text-rose-200/90 font-serif leading-none">
                  RGS • 1928
                </span>
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-rose-100 my-0.5 drop-shadow" />
                <span className="text-[7px] font-black uppercase tracking-widest text-rose-200/90 font-serif leading-none">
                  VERIFICATO
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Header Ribbon */}
        <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs sm:text-sm font-bold tracking-wide uppercase mb-2 font-serif shadow-sm">
          {level.id === 120 ? '🏆 Mistero Supremo di Paititi Risolto!' : 'Sito Archeologico Decifrato!'}
        </span>

        <h2 className="text-xl sm:text-2xl font-black text-amber-100 font-serif tracking-tight">
          {level.title}
        </h2>
        <p className="text-xs text-amber-200/70 mt-0.5 font-medium">
          Capitolo {level.chapterNumber} • {level.era}
        </p>

        {/* 3 Sequential Stars Animation */}
        <div className="flex flex-col items-center justify-center my-3 sm:my-4">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            {[1, 2, 3].map(starNum => {
              const isRevealed = starNum <= revealedStars;
              const isTargetEarned = starNum <= stars;

              return (
                <div
                  key={starNum}
                  className={`transition-all duration-300 transform ${
                    isRevealed
                      ? 'scale-110 text-amber-400 drop-shadow-[0_0_18px_rgba(251,191,36,0.9)]'
                      : isTargetEarned
                      ? 'scale-75 text-stone-700 opacity-40'
                      : 'scale-75 text-stone-800 opacity-25'
                  }`}
                >
                  <Star
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${
                      isRevealed
                        ? 'fill-amber-400 text-amber-300 animate-coin-bounce'
                        : 'fill-stone-900 text-stone-700'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          <span className="text-xs font-bold text-amber-300 mt-2 font-serif">
            {stars === 3
              ? '⭐⭐⭐ Velocità da Maestro! (Tempo < 1m 45s)'
              : stars === 2
              ? '⭐⭐ Ritmo Solido! (Tempo < 3m 30s)'
              : '⭐ Completato! (Tempo > 3m 30s)'}
          </span>
        </div>

        {/* Performance Accolades / Merit Badges */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-3">
          {isNewRecord && (
            <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-950 text-[10px] font-black shadow-[0_0_12px_rgba(245,158,11,0.8)] border border-yellow-200 animate-bounce">
              <Trophy className="w-3 h-3 fill-stone-950 text-stone-950" />
              <span>Nuovo Record di Spedizione!</span>
            </div>
          )}
          {errorsCount === 0 && (
            <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 text-[10px] font-bold shadow-md">
              <Shield className="w-3 h-3 text-emerald-400" />
              <span>Spedizione Impeccabile (0 Errori!)</span>
            </div>
          )}
          {timeElapsed <= 60 && (
            <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/60 text-cyan-300 text-[10px] font-bold shadow-md">
              <Zap className="w-3 h-3 text-cyan-400" />
              <span>Occhio di Falco (&lt; 60s)</span>
            </div>
          )}
          {isRelicFound && (
            <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-950/80 border border-purple-500/60 text-purple-300 text-[10px] font-bold shadow-md">
              <Award className="w-3 h-3 text-purple-400" />
              <span>Reliquia Scoperta!</span>
            </div>
          )}
        </div>

        {/* Coins Reward Card with Count-Up */}
        <div className="flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-amber-500/20 via-yellow-500/30 to-amber-500/20 border border-amber-500/60 rounded-2xl max-w-xs mx-auto mb-3 shadow-lg">
          <Coins className="w-5 h-5 text-amber-400 fill-amber-400 animate-pulse" />
          <span className="text-base font-black text-amber-200 font-mono tracking-tight">
            +{displayCoins} Monete d'Oro
          </span>
          <Sparkles className="w-4 h-4 text-amber-300" />
        </div>

        {/* Stats Row & Personal Speedrun Record */}
        <div className="flex flex-col items-center gap-1.5 py-2 px-4 bg-black/60 rounded-2xl border border-amber-900/60 max-w-xs mx-auto mb-4 text-xs shadow-inner">
          <div className="flex items-center justify-center gap-5 w-full">
            <div className="flex items-center gap-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Tempo: <strong className="text-amber-200 font-mono">{formatTime(timeElapsed)}</strong></span>
            </div>
            <div className="text-stone-600">•</div>
            <div className="text-stone-300">
              Errori: <strong className={errorsCount === 0 ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>{errorsCount}</strong>
            </div>
          </div>

          {bestTime !== undefined && (
            <div className="flex items-center justify-between w-full pt-1.5 border-t border-amber-900/40 text-[11px]">
              <div className="flex items-center gap-1 text-amber-400/90 font-medium">
                <Trophy className="w-3 h-3 text-yellow-400" />
                <span>Miglior Tempo:</span>
                <span className="font-mono font-bold text-amber-200">{formatTime(bestTime)}</span>
              </div>
              {isNewRecord && (
                <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-950 font-black text-[9px] shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-pulse">
                  ⚡ NUOVO RECORD!
                </span>
              )}
            </div>
          )}
        </div>

        {/* Story Resolution & Unlocked Secret Card */}
        <div className="text-left bg-black/60 border border-amber-500/30 rounded-2xl p-3 sm:p-4 mb-5 shadow-inner space-y-2">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider font-serif">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Resoconto della Spedizione</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed italic">
            "{level.story.resolution}"
          </p>

          <div className="pt-2 border-t border-stone-800/80">
            <span className="text-[10px] font-bold text-amber-300 block mb-1">
              Nuova Pagina del Taccuino Sbloccata:
            </span>
            <p className="text-xs text-amber-200/90 leading-relaxed font-serif bg-amber-950/40 p-2 rounded-lg border border-amber-500/20">
              {level.story.unlockedSecret}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 justify-center">
          <button
            type="button"
            onClick={onReplay}
            className="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-stone-300 font-bold text-xs border border-stone-700 flex items-center justify-center gap-1.5 active:scale-95 transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Rigioca</span>
          </button>

          <button
            type="button"
            onClick={onOpenJournal}
            className="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-amber-950/60 hover:bg-amber-900/80 text-amber-200 border border-amber-600/40 font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Leggi Diario</span>
          </button>

          {level.id === 120 && onOpenGrandFinale ? (
            <button
              type="button"
              onClick={onOpenGrandFinale}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm shadow-[0_0_25px_rgba(251,191,36,0.65)] flex items-center justify-center gap-2 active:scale-95 transition cursor-pointer animate-pulse"
            >
              <Trophy className="w-4 h-4 text-slate-950 fill-slate-950" />
              <span>SVELA IL FINALE DELLA SAGA!</span>
            </button>
          ) : level.id % 10 === 0 && level.id < 120 && onOpenDilemma ? (
            <button
              type="button"
              onClick={onOpenDilemma}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 text-stone-950 font-black text-sm shadow-[0_0_25px_rgba(245,158,11,0.65)] flex items-center justify-center gap-2 active:scale-95 transition cursor-pointer animate-pulse"
            >
              <Compass className="w-4 h-4 text-stone-950 animate-spin" style={{ animationDuration: '12s' }} />
              <span>BIVIO DI SPEDIZIONE</span>
              <ArrowRight className="w-4 h-4 text-stone-950" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onNextLevel}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 text-stone-950 font-black text-sm shadow-[0_4px_15px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2 active:scale-95 transition cursor-pointer"
            >
              <span>Prossima Tappa</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
