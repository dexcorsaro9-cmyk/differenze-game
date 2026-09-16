import React from 'react';
import {
  Globe,
  Landmark,
  Sparkles,
  Calendar,
  BookOpen,
  ShoppingBag,
  Settings,
  X,
  Play,
  Volume2,
  VolumeX,
  Coins,
  LayoutGrid,
  ScrollText,
  Compass,
  Award,
  Stamp,
  Download,
} from 'lucide-react';
import type { Level } from '../types/game';
import type { ExplorerProfile } from '../data/avatarData';
import { EXPLORERS, ALL_OUTFITS } from '../data/avatarData';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';

interface ExpeditionHubModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLevel: Level;
  profile: ExplorerProfile;
  coins: number;
  discoveredRelicCount: number;
  totalRelics: number;
  hasUnreadDaily?: boolean;
  hasUnreadRelics?: boolean;
  hasNewStageUnlocked?: boolean;
  hasUnreadJournal?: boolean;
  hasUnreadBriefing?: boolean;
  isBgmPlaying?: boolean;
  onToggleBgm?: () => void;
  onOpenTreasureMap: () => void;
  onOpenMuseum: () => void;
  onOpenWardrobe: () => void;
  onOpenDaily: () => void;
  onOpenJournal: () => void;
  onOpenStageBriefing: () => void;
  onOpenShop: () => void;
  onOpenSettings: () => void;
  onOpenLevelSelect: () => void;
  isLevel120Completed?: boolean;
  onOpenGrandFinale?: () => void;
  onOpenMedals?: () => void;
  unlockedMedalsCount?: number;
  totalMedals?: number;
  onOpenPassport?: () => void;
  unlockedVisasCount?: number;
  onOpenInstall?: () => void;
  isInstalled?: boolean;
}

export const ExpeditionHubModal: React.FC<ExpeditionHubModalProps> = ({
  isOpen,
  onClose,
  currentLevel,
  profile,
  coins,
  discoveredRelicCount,
  totalRelics,
  hasUnreadDaily,
  hasUnreadRelics,
  hasNewStageUnlocked,
  hasUnreadJournal,
  hasUnreadBriefing,
  isBgmPlaying,
  onToggleBgm,
  onOpenTreasureMap,
  onOpenMuseum,
  onOpenWardrobe,
  onOpenDaily,
  onOpenJournal,
  onOpenStageBriefing,
  onOpenShop,
  onOpenSettings,
  onOpenLevelSelect,
  isLevel120Completed = false,
  onOpenGrandFinale,
  onOpenMedals,
  unlockedMedalsCount = 0,
  totalMedals = 12,
  onOpenPassport,
  unlockedVisasCount = 0,
  onOpenInstall,
  isInstalled = false,
}) => {
  if (!isOpen) return null;

  const currentExplorer = EXPLORERS[profile?.avatarId || 'samira'] || EXPLORERS.samira;
  const activeOutfit = ALL_OUTFITS.find(o => o.id === profile?.equippedOutfitId);
  const activePortrait = activeOutfit?.image || currentExplorer.portrait;

  const handleAction = (action?: () => void) => {
    sound.playTap();
    triggerHaptic('light');
    onClose();
    if (action) {
      action();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-3 pb-3 pt-9 sm:px-5 sm:pb-5 sm:pt-12 bg-black/90 backdrop-blur-md select-none animate-fadeIn">
      <div className="relative w-full max-w-lg max-h-[85vh] sm:max-h-[88vh] flex flex-col rounded-3xl bg-gradient-to-b from-[#21150c] via-[#160d06] to-[#0a0502] border-2 border-amber-500/70 shadow-[0_20px_60px_rgba(0,0,0,0.95)] text-stone-200 overflow-hidden">
        
        {/* Top Header / Explorer Passport */}
        <div className="px-4 sm:px-5 py-3.5 bg-gradient-to-r from-amber-950/80 via-[#26150a] to-amber-950/80 border-b border-amber-600/50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full border-2 border-amber-400 overflow-hidden shadow-md bg-stone-900 shrink-0">
              <img
                src={activePortrait}
                alt={currentExplorer.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-black text-amber-100 font-serif leading-none">
                  {profile.playerName}
                </span>
                <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] font-bold">
                  {currentExplorer.title}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-amber-400/80 mt-0.5">
                <span>Livello {currentLevel.id} • Tappa {currentLevel.chapterNumber}</span>
                <span>•</span>
                <span className="flex items-center gap-0.5 text-amber-300 font-mono font-bold">
                  <Coins className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  {coins} Monete
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onToggleBgm && (
              <button
                type="button"
                onClick={() => {
                  sound.playTap();
                  triggerHaptic('light');
                  onToggleBgm();
                }}
                className={`p-2 rounded-full border transition cursor-pointer active:scale-90 ${
                  isBgmPlaying
                    ? 'bg-amber-500/25 border-amber-400 text-amber-300 shadow-[0_0_8px_rgba(245,158,11,0.4)]'
                    : 'bg-stone-900 border-stone-700 text-stone-500'
                }`}
                title={isBgmPlaying ? 'Musica Attiva' : 'Musica Disattivata'}
              >
                {isBgmPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                sound.playTap();
                triggerHaptic('light');
                onClose();
              }}
              className="p-1.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-400 hover:text-white border border-stone-700 transition cursor-pointer active:scale-90"
              title="Chiudi Campo Base e torna al gioco"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Title Banner */}
        <div className="px-5 pt-3 pb-1 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-mono block">
              CAMPO BASE • SPEDIZIONE 1928
            </span>
            <h2 className="text-lg font-black text-amber-100 font-serif leading-none">
              Quartier Generale
            </h2>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-amber-400 bg-amber-950/60 border border-amber-500/40 px-2.5 py-1 rounded-xl">
            <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
            <span className="font-serif italic font-medium">{currentLevel.title}</span>
          </div>
        </div>

        {/* Scrollable 6-Card Expedition Grid */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2.5 custom-scrollbar">
          
          {/* Card 1: Mappamondo 3D & Rotta */}
          <button
            type="button"
            onClick={() => handleAction(onOpenTreasureMap)}
            className="w-full p-3 rounded-2xl bg-gradient-to-r from-[#2a1b0d] via-[#1f1309] to-[#2a1b0d] border border-amber-500/50 hover:border-amber-400 shadow-md text-left flex items-center justify-between gap-3 group transition cursor-pointer active:scale-98"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-400/60 flex items-center justify-center text-amber-300 group-hover:scale-105 transition-transform shadow-inner">
                <Globe className="w-6 h-6 animate-spin-slow" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-black text-amber-100 font-serif">
                    Mappamondo 3D & Rotta
                  </span>
                  {hasNewStageUnlocked && (
                    <span className="px-1.5 py-0.2 rounded-full bg-yellow-400 text-stone-950 text-[9px] font-black animate-pulse">
                      NUOVA TAPPA!
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-stone-400 block font-serif">
                  12 Capitoli geografici da Oxford a Paititi • 120 Livelli
                </span>
              </div>
            </div>
            <span className="text-xs text-amber-400 font-bold px-2 py-1 rounded-xl bg-stone-900/60 border border-amber-600/30">
              Apri Globo ➔
            </span>
          </button>

          {/* Card 2: Museo delle Reliquie 3D */}
          <button
            type="button"
            onClick={() => handleAction(onOpenMuseum)}
            className="w-full p-3 rounded-2xl bg-gradient-to-r from-[#2a1b0d] via-[#1f1309] to-[#2a1b0d] border border-amber-500/50 hover:border-amber-400 shadow-md text-left flex items-center justify-between gap-3 group transition cursor-pointer active:scale-98"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-400/60 flex items-center justify-center text-amber-300 group-hover:scale-105 transition-transform shadow-inner">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-black text-amber-100 font-serif">
                    Museo delle Reliquie 3D
                  </span>
                  {hasUnreadRelics && (
                    <span className="px-1.5 py-0.2 rounded-full bg-red-500 text-white text-[9px] font-black animate-ping">
                      NUOVO!
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-stone-400 block font-serif">
                  Teca rotante in cristallo & idoli sepolti • {discoveredRelicCount}/{totalRelics} Trovate
                </span>
              </div>
            </div>
            <span className="text-xs text-amber-400 font-bold px-2 py-1 rounded-xl bg-stone-900/60 border border-amber-600/30">
              Visita Sala ➔
            </span>
          </button>

          {/* Card 2B: Medagliere Reale della Spedizione */}
          {onOpenMedals && (
            <button
              type="button"
              onClick={() => handleAction(onOpenMedals)}
              className="w-full p-3 rounded-2xl bg-gradient-to-r from-[#2c1d0f] via-[#211409] to-[#2c1d0f] border border-amber-500/60 hover:border-amber-400 shadow-md text-left flex items-center justify-between gap-3 group transition cursor-pointer active:scale-98"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500/30 to-amber-700/20 border border-amber-400/70 flex items-center justify-center text-amber-300 group-hover:scale-105 transition-transform shadow-inner">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-black text-amber-100 font-serif">
                      Medagliere Reale della Spedizione
                    </span>
                    <span className="px-1.5 py-0.2 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[9px] font-mono font-bold">
                      {unlockedMedalsCount}/{totalMedals}
                    </span>
                  </div>
                  <span className="text-[11px] text-stone-400 block font-serif">
                    12 Onorificenze vittoriane con nastri in seta & taglie d'oro
                  </span>
                </div>
              </div>
              <span className="text-xs text-amber-400 font-bold px-2 py-1 rounded-xl bg-stone-900/60 border border-amber-600/30 shrink-0">
                Apri Teca ➔
              </span>
            </button>
          )}

          {/* Card 2C: Passaporto della Spedizione 1928 */}
          {onOpenPassport && (
            <button
              type="button"
              onClick={() => handleAction(onOpenPassport)}
              className="w-full p-3 rounded-2xl bg-gradient-to-r from-[#2c0d13] via-[#1f090d] to-[#2c0d13] border border-rose-600/50 hover:border-rose-400 shadow-md text-left flex items-center justify-between gap-3 group transition cursor-pointer active:scale-98"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-600/30 to-amber-700/20 border border-rose-400/70 flex items-center justify-center text-rose-300 group-hover:scale-105 transition-transform shadow-inner">
                  <Stamp className="w-6 h-6 text-rose-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-black text-amber-100 font-serif">
                      Passaporto della Spedizione 1928
                    </span>
                    <span className="px-1.5 py-0.2 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-[9px] font-mono font-bold">
                      {unlockedVisasCount}/12 Visti
                    </span>
                  </div>
                  <span className="text-[11px] text-stone-400 block font-serif">
                    12 Visti consolari timbrati a mano con sigilli d'epoca e credenziali
                  </span>
                </div>
              </div>
              <span className="text-xs text-amber-400 font-bold px-2 py-1 rounded-xl bg-stone-900/60 border border-amber-600/30 shrink-0">
                Apri Visti ➔
              </span>
            </button>
          )}

          {/* Grand Finale Epilogue & Certificate (Unlocked when Level 120 is beaten) */}
          {isLevel120Completed && onOpenGrandFinale && (
            <button
              type="button"
              onClick={() => handleAction(onOpenGrandFinale)}
              className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-amber-600/40 via-yellow-500/30 to-amber-600/40 border-2 border-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.35)] text-left flex items-center justify-between gap-3 group transition cursor-pointer active:scale-98 animate-pulse"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-yellow-500/30 border border-yellow-400 flex items-center justify-center text-yellow-200 group-hover:scale-105 transition-transform shadow-inner text-xl">
                  🏆
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-black text-yellow-200 font-serif">
                      Gran Finale di Paititi
                    </span>
                    <span className="px-1.5 py-0.2 rounded-full bg-yellow-400 text-stone-950 text-[9px] font-black">
                      COMPLETATO
                    </span>
                  </div>
                  <span className="text-[11px] text-amber-200/90 block font-serif">
                    Rivedi il finale della saga & i 3 destini dell'umanità
                  </span>
                </div>
              </div>
              <span className="text-xs text-stone-950 font-black px-2.5 py-1 rounded-xl bg-yellow-400 border border-yellow-300 shrink-0">
                Epilogo ➔
              </span>
            </button>
          )}

          {/* 2-Column Grid for Secondary Cards */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* Card 3: Guardaroba */}
            <button
              type="button"
              onClick={() => handleAction(onOpenWardrobe)}
              className="p-3 rounded-2xl bg-gradient-to-b from-[#2a1b0d] to-[#170e06] border border-amber-500/40 hover:border-amber-400 shadow text-left flex flex-col justify-between group transition cursor-pointer active:scale-98"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-400/50 text-amber-300">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-[9px] text-emerald-400 font-bold bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                  Perk Attivi
                </span>
              </div>
              <div>
                <span className="text-xs font-black text-amber-100 font-serif block leading-tight">
                  Guardaroba & Outfit
                </span>
                <span className="text-[10px] text-stone-400 mt-0.5 block">
                  Tenute, copricapi e amuleti
                </span>
              </div>
            </button>

            {/* Card 4: Spedizione Quotidiana */}
            <button
              type="button"
              onClick={() => handleAction(onOpenDaily)}
              className="p-3 rounded-2xl bg-gradient-to-b from-[#2a1b0d] to-[#170e06] border border-amber-500/40 hover:border-amber-400 shadow text-left flex flex-col justify-between group transition cursor-pointer active:scale-98"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-orange-500/20 border border-orange-400/50 text-orange-300">
                  <Calendar className="w-4 h-4" />
                </div>
                {hasUnreadDaily && (
                  <span className="text-[9px] text-orange-300 font-bold bg-orange-950/80 px-1.5 py-0.5 rounded border border-orange-500/40 animate-pulse">
                    Oggi Disponibile!
                  </span>
                )}
              </div>
              <div>
                <span className="text-xs font-black text-amber-100 font-serif block leading-tight">
                  Spedizione Quotidiana
                </span>
                <span className="text-[10px] text-stone-400 mt-0.5 block">
                  Sfida del giorno & timbri ceralacca
                </span>
              </div>
            </button>

            {/* Card 5: Taccuino di Spedizione */}
            <button
              type="button"
              onClick={() => handleAction(onOpenJournal)}
              className="p-3 rounded-2xl bg-gradient-to-b from-[#2a1b0d] to-[#170e06] border border-amber-500/40 hover:border-amber-400 shadow text-left flex flex-col justify-between group transition cursor-pointer active:scale-98"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-400/50 text-amber-300">
                  <BookOpen className="w-4 h-4" />
                </div>
                {hasUnreadJournal && (
                  <span className="text-[9px] text-amber-300 font-bold bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-500/40">
                    Nuovo Indizio
                  </span>
                )}
              </div>
              <div>
                <span className="text-xs font-black text-amber-100 font-serif block leading-tight">
                  Taccuino & Note di Campo
                </span>
                <span className="text-[10px] text-stone-400 mt-0.5 block">
                  Archivio Bellini & 120 capitoli
                </span>
              </div>
            </button>

            {/* Card 6: Emporio Archeologico */}
            <button
              type="button"
              onClick={() => handleAction(onOpenShop)}
              className="p-3 rounded-2xl bg-gradient-to-b from-[#2a1b0d] to-[#170e06] border border-amber-500/40 hover:border-amber-400 shadow text-left flex flex-col justify-between group transition cursor-pointer active:scale-98"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-yellow-500/20 border border-yellow-400/50 text-yellow-300">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <span className="text-[9px] text-yellow-300 font-bold bg-amber-950/80 px-1.5 py-0.5 rounded border border-yellow-500/40">
                  Scorte
                </span>
              </div>
              <div>
                <span className="text-xs font-black text-amber-100 font-serif block leading-tight">
                  Emporio Archeologico
                </span>
                <span className="text-[10px] text-stone-400 mt-0.5 block">
                  Bussola, Congela-Tempo, Scudi
                </span>
              </div>
            </button>
          </div>

          {/* PWA Standalone & Offline Banner */}
          {onOpenInstall && (
            <button
              type="button"
              onClick={() => handleAction(onOpenInstall)}
              className="w-full p-3 rounded-2xl bg-gradient-to-r from-[#1d1209] via-[#2a170b] to-[#1d1209] border border-amber-500/50 hover:border-amber-400 shadow text-left flex items-center justify-between gap-3 group transition cursor-pointer active:scale-98"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 group-hover:scale-105 transition-transform">
                  <Download className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-black text-amber-100 font-serif">
                      {isInstalled ? 'Archivio Spedizione Installato' : 'Installa App su Schermo'}
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-mono font-bold">
                      Offline 100%
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-400 block font-serif">
                    {isInstalled
                      ? 'Modalità a schermo intero nativa attiva senza barre del browser'
                      : 'Schermo intero immersivo, zero barre del browser & gioco senza rete'}
                  </span>
                </div>
              </div>
              <span className="text-xs text-amber-400 font-bold px-2 py-1 rounded-xl bg-stone-900/60 border border-amber-600/30 shrink-0">
                {isInstalled ? 'Dettagli ➔' : 'Installa ➔'}
              </span>
            </button>
          )}

          {/* Row for Stage Briefing & Level Selector */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <button
              type="button"
              onClick={() => handleAction(onOpenStageBriefing)}
              className="p-2.5 rounded-xl bg-stone-900/80 border border-amber-600/30 hover:border-amber-400 text-left flex items-center gap-2 transition cursor-pointer"
            >
              <ScrollText className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-bold text-amber-200 block truncate">
                  Dispaccio di Tappa
                </span>
                <span className="text-[9px] text-stone-400 block truncate">
                  Tappa {currentLevel.chapterNumber} di 12
                </span>
              </div>
              {hasUnreadBriefing && (
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping shrink-0" />
              )}
            </button>

            <button
              type="button"
              onClick={() => handleAction(onOpenLevelSelect)}
              className="p-2.5 rounded-xl bg-stone-900/80 border border-amber-600/30 hover:border-amber-400 text-left flex items-center gap-2 transition cursor-pointer"
            >
              <LayoutGrid className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-bold text-amber-200 block truncate">
                  Seleziona Livello
                </span>
                <span className="text-[9px] text-stone-400 block truncate">
                  Rigioca i 120 livelli
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Actions Bar */}
        <div className="p-3.5 bg-black/70 border-t border-amber-900/50 flex items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleAction(onOpenSettings)}
            className="py-2.5 px-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 flex items-center gap-1.5 text-xs font-bold transition cursor-pointer active:scale-95"
          >
            <Settings className="w-4 h-4 text-amber-400" />
            <span>Opzioni</span>
          </button>

          <button
            type="button"
            onClick={() => {
              sound.playTap();
              triggerHaptic('medium');
              onClose();
            }}
            className="flex-1 py-2.5 px-5 rounded-xl font-black font-serif tracking-wider text-xs sm:text-sm uppercase bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 text-stone-950 shadow-[0_0_20px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition border border-yellow-200"
          >
            <Play className="w-4 h-4 fill-stone-950" />
            <span>RITORNA ALLO SCAVO (LIV. {currentLevel.id})</span>
          </button>
        </div>

      </div>
    </div>
  );
};
