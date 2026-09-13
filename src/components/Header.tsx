import React, { useState, useEffect } from 'react';
import {
  Heart,
  Clock,
  Star,
  Snowflake,
  Shield,
  Coins,
  Compass,
  Sparkles,
  Volume2,
  VolumeX,
  Flame,
  Maximize,
  Minimize,
} from 'lucide-react';
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
  onOpenHub: () => void;
  hasHubNotification?: boolean;
  isCoinBouncing?: boolean;
  onOpenShop?: () => void;
  soundEnabled?: boolean;
  onToggleSound?: () => void;
  comboStreak?: number;
  rpgPerksSummary?: {
    coinBonus: number;
    freezeBonus: number;
    radarBonus: number;
    hasShield: boolean;
  };
  activeSetBonus?: {
    name: string;
    badge: string;
    shortName: string;
    perkLabel: string;
    themeGradient: string;
    borderAccent: string;
  } | null;
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
  onOpenHub,
  hasHubNotification = false,
  isCoinBouncing = false,
  onOpenShop,
  soundEnabled = true,
  onToggleSound,
  comboStreak = 0,
  rpgPerksSummary,
  activeSetBonus,
}) => {
  const currentExplorer = EXPLORERS[profile.avatarId] || EXPLORERS.samira;

  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

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
      {/* ROW 1: Level Badge, Sound Toggle, Combo Streak & Campo Base QG Button */}
      <div className="flex items-center justify-between w-full gap-2">
        {/* Left: Level Pill with Explorer Avatar */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-full border border-amber-400 overflow-hidden shadow-sm bg-stone-900 shrink-0">
            <img
              src={currentExplorer.portrait}
              alt={profile.playerName}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex flex-col leading-none truncate">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black uppercase tracking-wider text-amber-300 font-serif">
                LIV. {currentLevel.id}
              </span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-200 border border-amber-500/30 font-bold">
                Tappa {currentLevel.chapterNumber}
              </span>
            </div>
            <span className="text-[10px] text-amber-200/80 font-medium truncate mt-0.5 max-w-[130px] sm:max-w-[220px]">
              {currentLevel.title}
            </span>
          </div>
        </div>

        {/* Center: Dynamic Combo / Streak Pill (Active when combo >= 2) */}
        {comboStreak >= 2 && (
          <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-600 text-stone-950 font-black text-[11px] shadow-[0_0_15px_rgba(245,158,11,0.8)] border border-yellow-200 animate-pulse shrink-0">
            <Flame className="w-3.5 h-3.5 fill-stone-950 text-stone-950 animate-bounce" />
            <span className="tracking-tight">COMBO x{comboStreak}!</span>
          </div>
        )}

        {/* Right: Fullscreen, Sound toggle, Coins counter & Prominent CAMPO BASE button */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Native Fullscreen Mode Toggle */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className={`p-1.5 rounded-full border transition cursor-pointer active:scale-95 ${
              isFullscreen
                ? 'bg-amber-500/40 border-amber-300 text-amber-100 shadow-[0_0_8px_rgba(245,158,11,0.5)]'
                : 'bg-amber-950/60 border-amber-500/40 text-amber-300 hover:text-white'
            }`}
            title={isFullscreen ? 'Disattiva Schermo Intero (Esc)' : 'Schermo Intero Nativo'}
          >
            {isFullscreen ? (
              <Minimize className="w-3.5 h-3.5" />
            ) : (
              <Maximize className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Quick Sound Mute/Unmute Toggle */}
          {onToggleSound && (
            <button
              type="button"
              onClick={onToggleSound}
              className={`p-1.5 rounded-full border transition cursor-pointer active:scale-95 ${
                soundEnabled
                  ? 'bg-amber-950/60 border-amber-500/40 text-amber-300 hover:text-white'
                  : 'bg-stone-900 border-stone-700 text-stone-500 hover:text-stone-300'
              }`}
              title={soundEnabled ? 'Disattiva Audio' : 'Attiva Audio'}
            >
              {soundEnabled ? (
                <Volume2 className="w-3.5 h-3.5" />
              ) : (
                <VolumeX className="w-3.5 h-3.5" />
              )}
            </button>
          )}

          {/* Coins Counter */}
          <button
            type="button"
            id="header-coin-counter"
            onClick={onOpenShop || onOpenHub}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 border border-amber-500/50 text-amber-200 shadow-sm active:scale-95 transition cursor-pointer ${
              isCoinBouncing ? 'animate-coin-bounce ring-2 ring-yellow-400' : ''
            }`}
            title="Monete d'Oro Guadagnate"
          >
            <Coins className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-black font-mono text-amber-200">{coins}</span>
          </button>

          {/* Dedicated Expedition Hub / Campo Base Button */}
          <button
            type="button"
            onClick={onOpenHub}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-500 text-stone-950 font-black text-xs font-serif uppercase tracking-wider shadow-[0_2px_12px_rgba(245,158,11,0.4)] border border-yellow-300 active:scale-95 transition cursor-pointer"
            title="Apri Quartier Generale di Spedizione (Mappamondo, Armeria RPG, Museo, Sfide)"
          >
            <Compass className="w-3.5 h-3.5 text-stone-950 animate-spin-slow" />
            <span className="hidden sm:inline">Campo Base</span>
            <span className="sm:hidden">QG</span>
            {hasHubNotification && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-stone-950 animate-pulse flex items-center justify-center">
                <Sparkles className="w-2 h-2 text-white" />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ROW 2: Tactical HUD Bar (Lives, 10 Difference Progress Orbs, Active RPG Buffs, Stopwatch & Stars) */}
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

        {/* Center: Wax Seal Evidence Indicators */}
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/50 border border-amber-900/60 shadow-inner">
          <div className="flex items-center gap-1">
            {Array.from({ length: totalDifferences }).map((_, idx) => {
              const isFound = idx < foundCount;
              return (
                <div
                  key={idx}
                  className={`transition-all duration-300 rounded-full flex items-center justify-center ${
                    isFound
                      ? 'w-3.5 h-3.5 sm:w-4 sm:h-4 bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-200 shadow-[0_0_10px_rgba(245,158,11,0.8)] scale-110 ring-1 ring-amber-300'
                      : 'w-3 h-3 sm:w-3.5 sm:h-3.5 border border-amber-950 bg-stone-900/90 shadow-inner'
                  }`}
                  title={isFound ? `Prova ${idx + 1} recuperata!` : `Prova ${idx + 1} occultata dalla Mano Oscura`}
                >
                  {isFound ? (
                    <span className="text-[8px] font-black text-amber-950 font-serif leading-none">✓</span>
                  ) : (
                    <span className="text-[7px] text-amber-500/50 font-serif leading-none font-bold">?</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Number indicator */}
          <div className="text-[11px] font-black text-amber-300 font-serif tracking-tight shrink-0 flex items-center gap-1 pl-1 border-l border-amber-800/40">
            <span className="text-[9px] uppercase tracking-wider text-amber-400/80 hidden sm:inline">Prove:</span>
            <span className="font-mono text-amber-200">{foundCount}/{totalDifferences}</span>
          </div>
        </div>

        {/* Right: Active RPG Perks Chip + Timer & Star Rating */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Active Equipment Set Bonus Synergy Pill */}
          {activeSetBonus && (
            <div
              className={`hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r ${activeSetBonus.themeGradient} border ${activeSetBonus.borderAccent} text-[9px] font-black text-amber-200 shadow-[0_0_8px_rgba(245,158,11,0.3)] animate-pulse`}
              title={`Sinergia di Set: ${activeSetBonus.name} (${activeSetBonus.perkLabel})`}
            >
              <span>{activeSetBonus.badge}</span>
              <span className="truncate max-w-[110px]">{activeSetBonus.shortName}</span>
            </div>
          )}

          {/* Active RPG Equipment Perks Pill */}
          {rpgPerksSummary && (rpgPerksSummary.coinBonus > 0 || rpgPerksSummary.radarBonus > 0) && (
            <div
              className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-950/80 border border-amber-500/40 text-[9px] font-bold text-amber-300"
              title={`Bonus Equipaggiamento Attivo: +${rpgPerksSummary.coinBonus}% Oro, +${rpgPerksSummary.radarBonus}% Radar`}
            >
              <Sparkles className="w-2.5 h-2.5 text-amber-400" />
              <span>+{rpgPerksSummary.coinBonus}% Oro</span>
            </div>
          )}

          {/* Active Shield Badge */}
          {isShieldActive && (
            <div
              className="flex items-center px-1.5 py-0.5 rounded-md bg-indigo-950 border border-indigo-400 text-indigo-300 text-[10px] font-bold animate-pulse shadow-sm"
              title="Scudo Protettivo Attivo (Para 1 Errore)"
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
