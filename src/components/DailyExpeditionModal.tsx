import React, { useState, useMemo } from 'react';
import {
  Calendar,
  Flame,
  X,
  Trophy,
  Compass,
  CheckCircle2,
  Lock,
  Coins,
  ArrowRight,
  Gift,
  Award
} from 'lucide-react';
import {
  getDailyExpeditionState,
  get30DayExpeditionCalendar,
  getModifierForDate,
  getTodayDateString,
  getLevelIdForDate,
  DAILY_MILESTONES,
  type DailyExpeditionState,
  type CalendarDayInfo,
  type MilestoneReward,
} from '../utils/dailyChallenge';
import { ALL_120_LEVELS } from '../data/levelRegistry';
import { sound } from '../utils/audio';

interface DailyExpeditionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartDailyLevel: (levelId: number) => void;
  coins: number;
}

export const DailyExpeditionModal: React.FC<DailyExpeditionModalProps> = ({
  isOpen,
  onClose,
  onStartDailyLevel,
}) => {
  const [dailyState] = useState<DailyExpeditionState>(() => getDailyExpeditionState());

  const todayStr = getTodayDateString();
  const todayLevelId = getLevelIdForDate(todayStr);
  const todayLevel = ALL_120_LEVELS.find(l => l.id === todayLevelId) || ALL_120_LEVELS[0];
  const todayModifier = getModifierForDate(todayStr);
  const isTodayDone = dailyState.completedDates.includes(todayStr);

  const calendarDays = useMemo(() => get30DayExpeditionCalendar(), []);

  if (!isOpen) return null;

  const handleStartToday = () => {
    sound.playTap();
    onStartDailyLevel(todayLevel.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-gradient-to-b from-[#1c120a] via-[#150d06] to-[#0d0703] border-2 border-amber-500/70 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-white overflow-hidden">
        
        {/* Top Antique Brass Bar */}
        <div className="w-full leather-belt px-4 py-2.5 flex items-center justify-between border-b border-amber-600/40">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold font-serif block">
                Royal Geographical Society • 1928
              </span>
              <h2 className="text-base sm:text-lg font-black text-amber-100 font-serif leading-none">
                Spedizione Quotidiana Archeologica
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Active Streak Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-orange-600/40 to-amber-500/30 border border-orange-400/60 shadow-inner">
              <Flame className="w-4 h-4 text-orange-400 fill-orange-400 animate-pulse" />
              <span className="text-xs font-black text-amber-200 font-mono">
                {dailyState.streak} {dailyState.streak === 1 ? 'GIORNO' : 'GIORNI'}
              </span>
            </div>

            <button
              onClick={() => {
                sound.playTap();
                onClose();
              }}
              className="p-1.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-400 hover:text-white border border-stone-700 active:scale-90 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-3.5 sm:p-5 overflow-y-auto space-y-4 flex-1">
          
          {/* Today's Special Mission Card */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-xl bg-gradient-to-br from-[#2b1a0d] via-[#1f1207] to-[#120a03] p-3.5 sm:p-4">
            {/* Background Map Watermark */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4">
              {/* Level Thumbnail with Wax Seal / Stamp */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-amber-500/50 shadow-md">
                <img
                  src={todayLevel.imageA}
                  alt={todayLevel.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Status Overlay */}
                {isTodayDone ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-[1px]">
                    <div className="w-12 h-12 rounded-full wax-seal flex items-center justify-center border-2 border-rose-300/60 shadow-lg animate-stamp-slam">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[10px] font-black text-rose-300 font-serif tracking-wider uppercase mt-1">
                      SIGILLATO
                    </span>
                  </div>
                ) : (
                  <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-md bg-amber-500/90 text-stone-950 font-black text-[9px] uppercase tracking-wider shadow">
                    OGGI
                  </div>
                )}
              </div>

              {/* Mission Details & Modifier */}
              <div className="flex-1 text-center sm:text-left space-y-1.5">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold uppercase tracking-wider">
                    Tappa {todayLevel.chapterNumber} • Livello {todayLevel.id}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/40 text-[10px] font-black tracking-wide">
                    {todayModifier.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-amber-200 font-serif">
                  {todayLevel.title}
                </h3>
                <p className="text-xs text-stone-300 leading-snug font-sans">
                  {todayModifier.desc}
                </p>

                <div className="flex items-center justify-center sm:justify-start gap-2 pt-1 text-xs">
                  <span className="text-amber-400 font-semibold flex items-center gap-1">
                    <Coins className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    +150 Monete Base
                  </span>
                  <span className="text-stone-500">•</span>
                  <span className="text-emerald-400 font-semibold">
                    +{todayModifier.bonusCoins} Bonus Missione
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="w-full sm:w-auto shrink-0 flex justify-center">
                {isTodayDone ? (
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 text-xs font-bold shadow-md">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Spedizione Completata!</span>
                  </div>
                ) : (
                  <button
                    onClick={handleStartToday}
                    className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-black text-xs sm:text-sm shadow-[0_4px_15px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>AVVIA SPEDIZIONE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* 30-Day Expedition Field Ledger Calendar Grid */}
          <div className="bg-[#180f08]/90 border border-amber-500/30 rounded-2xl p-3 sm:p-4 shadow-inner">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 font-serif">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Calendario di Spedizione (Ciclo 30 Giorni)</span>
              </div>
              <span className="text-[11px] font-mono text-stone-400">
                {dailyState.totalDailiesCompleted} Timbri Conseguiti
              </span>
            </div>

            {/* Grid of 30 Calendar Days */}
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-1.5">
              {calendarDays.map((day: CalendarDayInfo) => {
                const isMilestone = !!day.milestone;

                return (
                  <div
                    key={day.dayNumber}
                    className={`relative rounded-xl p-1 sm:p-1.5 flex flex-col items-center justify-between min-h-[58px] transition-all border ${
                      day.isToday
                        ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.5)] ring-1 ring-amber-300 scale-105 z-10'
                        : day.isCompleted
                        ? 'bg-stone-900/90 border-rose-900/60 text-stone-300'
                        : isMilestone
                        ? 'bg-amber-950/40 border-amber-500/40'
                        : 'bg-stone-950/60 border-stone-800 text-stone-500'
                    }`}
                  >
                    {/* Day Number Header */}
                    <span className={`text-[10px] font-black font-mono leading-none ${
                      day.isToday ? 'text-amber-300' : 'text-stone-400'
                    }`}>
                      G{day.dayNumber}
                    </span>

                    {/* Center Icon: Stamp, Today Compass, Milestone Chest, or Lock */}
                    <div className="my-0.5 flex items-center justify-center">
                      {day.isCompleted ? (
                        /* Stamped Wax Seal */
                        <div className="w-6 h-6 rounded-full wax-seal flex items-center justify-center shadow-md scale-95">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        </div>
                      ) : day.isToday ? (
                        /* Pulsing Today Compass */
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center shadow animate-pulse">
                          <Compass className="w-4 h-4 text-stone-950 animate-spin-slow" />
                        </div>
                      ) : isMilestone ? (
                        /* Milestone Chest */
                        <div className="w-6 h-6 rounded-full bg-amber-500/30 border border-amber-400/60 flex items-center justify-center">
                          <Gift className="w-3 h-3 text-amber-300" />
                        </div>
                      ) : (
                        /* Locked Future */
                        <Lock className="w-3 h-3 text-stone-600" />
                      )}
                    </div>

                    {/* Footer / Level ID or Milestone Tag */}
                    <span className="text-[8px] font-bold text-stone-400 truncate max-w-full">
                      {isMilestone ? '★ BONUS' : `L.${day.levelId}`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Streak Milestone Rewards Track */}
          <div className="bg-gradient-to-r from-[#201409] via-[#1a0f06] to-[#201409] border border-amber-500/30 rounded-2xl p-3 sm:p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 font-serif">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Traguardi di Fedeltà (Streak Milestones)</span>
              </div>
              <span className="text-[10px] text-amber-400/80 font-medium">
                Sblocca dobloni e reliquie esclusive
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {DAILY_MILESTONES.map((m: MilestoneReward) => {
                const isUnlocked = dailyState.streak >= m.day;
                const isClaimed = dailyState.claimedMilestones.includes(m.day);

                return (
                  <div
                    key={m.day}
                    className={`rounded-xl p-2.5 border transition-all flex items-center gap-2.5 ${
                      isUnlocked
                        ? 'bg-amber-500/15 border-amber-400/60 text-amber-100 shadow-md'
                        : 'bg-stone-900/60 border-stone-800 text-stone-400 opacity-75'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border ${
                      isUnlocked
                        ? 'bg-gradient-to-tr from-amber-600 to-yellow-400 border-amber-300 text-stone-950 shadow-md'
                        : 'bg-stone-800 border-stone-700 text-stone-500'
                    }`}>
                      <Award className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-amber-300 truncate">
                          {m.day} Giorni
                        </span>
                        <span className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded ${
                          isClaimed
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                            : isUnlocked
                            ? 'bg-amber-500/30 text-amber-300 border border-amber-400/40'
                            : 'text-stone-500'
                        }`}>
                          {isClaimed ? 'Riscosso' : isUnlocked ? 'Sbloccato' : 'In Corso'}
                        </span>
                      </div>
                      <p className="text-[10px] text-stone-300 truncate font-medium">
                        {m.badgeName}
                      </p>
                      {m.powerUp && (
                        <span className="text-[9px] text-amber-400/90 block truncate">
                          + {m.powerUp.name}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer info note */}
        <div className="p-3 bg-black/60 border-t border-amber-900/40 text-center">
          <p className="text-[10px] text-stone-400 font-serif italic">
            "La costanza dell'archeologo svela i segreti che i secoli hanno tentato di seppellire." — Taccuino RGS, Londra 1928
          </p>
        </div>

      </div>
    </div>
  );
};
