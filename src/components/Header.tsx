import React from 'react';
import { Heart, BookOpen, Settings, LayoutGrid, Globe, Clock, Star, Snowflake, Shield, Coins, Landmark, ScrollText } from 'lucide-react';
import type { Level } from '../types/game';
import type { ExplorerProfile } from '../data/avatarData';
import { EXPLORERS } from '../data/avatarData';

interface HeaderProps {
  currentLevel: Level;
  foundCount: number;
  totalDifferences: number;
  lives: number;
  zenMode: boolean;
  timeElapsed: number;
  isTimeFrozen: boolean;
  freezeSecondsLeft: number;
  coins: number;
  isShieldActive: boolean;
  profile: ExplorerProfile;
  onOpenSettings: () => void;
  onOpenLevelSelect: () => void;
  onOpenJournal: () => void;
  onOpenTreasureMap: () => void;
  onOpenShop: () => void;
  onOpenMuseum: () => void;
  onOpenWardrobe: () => void;
  onOpenStageBriefing?: () => void;
  hasUnreadBriefing?: boolean;
  hasUnreadJournal?: boolean;
  hasUnreadRelics?: boolean;
  hasNewStageUnlocked?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentLevel,
  foundCount,
  totalDifferences,
  lives,
  zenMode,
  timeElapsed,
  isTimeFrozen,
  freezeSecondsLeft,
  coins,
  isShieldActive,
  profile,
  onOpenSettings,
  onOpenLevelSelect,
  onOpenJournal,
  onOpenTreasureMap,
  onOpenShop,
  onOpenMuseum,
  onOpenWardrobe,
  onOpenStageBriefing,
  hasUnreadBriefing,
  hasUnreadJournal,
  hasUnreadRelics,
  hasNewStageUnlocked,
}) => {
  const currentExplorer = EXPLORERS[profile.avatarId];

  // Star rating calculation based on time elapsed
  // Under 105s (1m 45s) = 3 stars, Under 210s (3m 30s) = 2 stars, otherwise 1 star
  const currentStars = timeElapsed <= 105 ? 3 : timeElapsed <= 210 ? 2 : 1;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <header className="w-full leather-belt safe-pt px-2.5 sm:px-4 py-2 select-none z-30 flex flex-col gap-1.5 shadow-2xl border-b-2 border-amber-600/70 shrink-0">
      {/* ROW 1: Mobile Navigation Bar (Level, Relics, Map, Journal, Coins, Settings) */}
      <div className="flex items-center justify-between w-full gap-1.5">
        {/* Left: Avatar Wardrobe Button & Level Select Pill Button */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Circular Explorer Avatar Portrait */}
          <button
            onClick={onOpenWardrobe}
            className="relative w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-500 to-amber-300 p-[1.5px] shadow-[0_2px_10px_rgba(245,158,11,0.4)] active:scale-90 transition-all cursor-pointer group shrink-0"
            title={`Guardaroba Esploratore • ${profile.playerName} (${currentExplorer.title})`}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-stone-900 border border-amber-950">
              <img
                src={currentExplorer.portrait}
                alt={profile.playerName}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform"
              />
            </div>
            {/* Tiny status indicator */}
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-stone-950 flex items-center justify-center shadow-sm" />
          </button>

          {/* Level Select Pill Button */}
          <button
            onClick={onOpenLevelSelect}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-gradient-to-b from-[#3a2211] via-[#2a1b0d] to-[#1a1007] hover:from-[#4a2c16] text-amber-200 border-2 border-amber-400/60 active:scale-95 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            title="Seleziona Livello / Capitolo"
          >
            <div className="p-1 rounded-full bg-amber-500/20 text-amber-300">
              <LayoutGrid className="w-3 h-3" />
            </div>
            <div className="flex flex-col text-left leading-none pr-0.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 font-serif">
                LIV. {currentLevel.id}
              </span>
              <span className="text-[9px] text-amber-400/80 font-medium truncate max-w-[65px] sm:max-w-[80px]">
                {currentLevel.title.replace(/^(Lo |Il |La |L'|I |Gli |Le )/i, '').split(' ')[0]}
              </span>
            </div>
          </button>
        </div>

        {/* Center: Quick Expedition Tools Dock */}
        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-1.5 py-1 rounded-full border border-amber-500/30 shadow-inner">
          {/* Museo delle Reliquie 3D */}
          <button
            onClick={onOpenMuseum}
            className="relative p-2 rounded-full bg-gradient-to-b from-amber-500/30 to-amber-700/40 hover:from-amber-500/40 hover:to-amber-700/50 text-amber-300 border border-amber-400/60 active:scale-90 transition-all shadow-md flex items-center justify-center min-w-[34px] min-h-[34px]"
            title="Museo delle Reliquie 3D"
          >
            <Landmark className="w-4 h-4 text-amber-300" />
            {hasUnreadRelics && (
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border border-slate-900 animate-ping" />
            )}
            {hasUnreadRelics && (
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border border-slate-900" />
            )}
          </button>

          {/* Mappamondo 3D delle 12 Tappe (Sblocco ogni 10 Livelli) */}
          <button
            onClick={onOpenTreasureMap}
            className="relative p-2 rounded-full bg-gradient-to-b from-amber-500/30 to-yellow-600/40 hover:from-amber-500/40 hover:to-yellow-600/50 text-amber-300 border border-amber-400/60 active:scale-90 transition-all shadow-md flex items-center justify-center min-w-[34px] min-h-[34px]"
            title="Mappamondo 3D (12 Tappe di Spedizione • Sblocco ogni 10 Livelli)"
          >
            <Globe className="w-4 h-4 text-amber-300 animate-spin-slow" />
            {hasNewStageUnlocked && (
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-yellow-400 rounded-full border border-slate-900 animate-ping" />
            )}
            {hasNewStageUnlocked && (
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-yellow-400 rounded-full border border-slate-900" />
            )}
          </button>

          {/* Taccuino del Professore */}
          <button
            onClick={onOpenJournal}
            className="relative p-2 rounded-full bg-[#2a1b0d]/90 hover:bg-[#3d2713] text-amber-300 border border-amber-500/40 active:scale-90 transition-all shadow-md flex items-center justify-center min-w-[34px] min-h-[34px]"
            title="Taccuino di Spedizione"
          >
            <BookOpen className="w-4 h-4" />
            {hasUnreadJournal && (
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-500 rounded-full border border-slate-900 animate-ping" />
            )}
            {hasUnreadJournal && (
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-500 rounded-full border border-slate-900" />
            )}
          </button>

          {/* Dispaccio Archeologico di Tappa */}
          {onOpenStageBriefing && (
            <button
              onClick={onOpenStageBriefing}
              className="relative p-2 rounded-full bg-gradient-to-b from-amber-600/35 via-yellow-700/35 to-amber-900/35 hover:from-amber-500/40 text-amber-300 border border-amber-400/60 active:scale-90 transition-all shadow-md flex items-center justify-center min-w-[34px] min-h-[34px]"
              title={`Dispaccio di Spedizione • Tappa ${currentLevel.chapterNumber}`}
            >
              <ScrollText className="w-4 h-4" />
              {hasUnreadBriefing && (
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-400 rounded-full border border-slate-900 animate-ping" />
              )}
              {hasUnreadBriefing && (
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-400 rounded-full border border-slate-900" />
              )}
            </button>
          )}
        </div>

        {/* Right: Coins (Click to open Shop) & Settings Button */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={onOpenShop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-b from-amber-500/30 via-yellow-600/35 to-amber-700/25 hover:from-amber-500/40 border-2 border-amber-400/70 text-amber-200 shadow-[0_2px_8px_rgba(0,0,0,0.6)] active:scale-95 transition-all"
            title="Monete d'Oro • Apri Emporio"
          >
            <Coins className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-black tracking-wide font-mono text-amber-200">{coins}</span>
            <span className="text-[10px] text-amber-400 font-bold bg-amber-900/80 px-1 rounded-full">+</span>
          </button>

          <button
            onClick={onOpenSettings}
            className="p-2 rounded-full bg-[#2a1b0d]/90 hover:bg-[#3d2713] text-amber-400/90 hover:text-amber-200 border border-amber-500/40 active:scale-90 transition-all shadow-md flex items-center justify-center min-w-[34px] min-h-[34px]"
            title="Impostazioni"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ROW 2: Tactical HUD Bar (Lives, 10 Difference Progress Orbs, Stopwatch & Stars) */}
      <div className="flex items-center justify-between w-full bg-gradient-to-r from-[#180f07]/90 via-[#231509]/90 to-[#180f07]/90 rounded-full px-3 py-1 border border-amber-500/30 shadow-inner gap-1.5">
        {/* Lives (Cuori di Rubino) */}
        <div className="flex items-center gap-1 shrink-0">
          {zenMode ? (
            <div className="flex items-center gap-1 text-teal-400 text-xs font-bold px-1">
              <span>Zen</span>
              <span className="text-sm">∞</span>
            </div>
          ) : (
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 3 }).map((_, i) => (
                <Heart
                  key={i}
                  className={`w-3.5 h-3.5 transition-all duration-300 ${
                    i < lives
                      ? 'fill-red-500 text-red-500 scale-100 drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]'
                      : 'text-stone-700 scale-75 opacity-40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Center: 10 Difference Progress Orbs with Counter */}
        <div className="flex items-center gap-1.5">
          {/* 10 Gem Indicators */}
          <div className="flex items-center gap-1">
            {Array.from({ length: totalDifferences }).map((_, idx) => {
              const isFound = idx < foundCount;
              return (
                <div
                  key={idx}
                  className={`transition-all duration-300 rounded-full flex items-center justify-center ${
                    isFound
                      ? 'w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-tr from-emerald-600 via-emerald-400 to-emerald-200 shadow-[0_0_8px_#10b981] scale-110 ring-1 ring-emerald-300'
                      : 'w-2 h-2 sm:w-2.5 sm:h-2.5 border border-stone-600 bg-stone-900/80'
                  }`}
                  title={isFound ? `Differenza ${idx + 1} trovata!` : `Differenza ${idx + 1}`}
                />
              );
            })}
          </div>

          {/* Number indicator */}
          <div className="text-[11px] font-black text-amber-200 font-mono tracking-tight shrink-0">
            {foundCount}/{totalDifferences}
          </div>
        </div>

        {/* Right: Timer & Star Rating / Active Buffs */}
        <div className="flex items-center gap-1 shrink-0">
          {/* Active Shield Badge */}
          {isShieldActive && (
            <div
              className="flex items-center px-1.5 py-0.5 rounded-md bg-indigo-950 border border-indigo-400 text-indigo-300 text-[10px] font-bold animate-pulse shadow-sm"
              title="Scudo del Guardiano Attivo"
            >
              <Shield className="w-3 h-3 text-indigo-300 fill-indigo-400/50" />
            </div>
          )}

          {/* Live Timer or Freeze Badge */}
          {isTimeFrozen ? (
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-cyan-950/90 border border-cyan-400 text-cyan-300 text-[11px] font-bold shadow-sm animate-pulse">
              <Snowflake className="w-3 h-3 text-cyan-300 animate-spin" />
              <span>{freezeSecondsLeft}s</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-[11px] font-bold font-mono text-stone-200">
              <Clock className="w-3 h-3 text-amber-400 shrink-0" />
              <span>{formatTime(timeElapsed)}</span>
            </div>
          )}

          {/* Star Threshold Preview */}
          <div className="flex items-center gap-0.5 ml-0.5 border-l border-amber-900/60 pl-1">
            {[1, 2, 3].map(s => (
              <Star
                key={s}
                className={`w-2.5 h-2.5 ${
                  s <= currentStars
                    ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.6)]'
                    : 'fill-stone-800 text-stone-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

