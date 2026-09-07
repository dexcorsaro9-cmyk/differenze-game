daily_challenge_code = """import { ALL_120_LEVELS } from '../data/levelRegistry';

export const STORAGE_KEY_DAILY = 'differenze_daily_v1';

export interface MilestoneReward {
  day: number;
  title: string;
  coins: number;
  powerUp?: { type: 'hint' | 'compass_radar' | 'freeze_time' | 'error_shield'; count: number; name: string };
  badgeName: string;
  desc: string;
}

export const DAILY_MILESTONES: MilestoneReward[] = [
  {
    day: 3,
    title: 'Bussola di Bronzo',
    coins: 150,
    powerUp: { type: 'hint', count: 1, name: 'Lente d\\\'Ingrandimento' },
    badgeName: '🥉 Esploratore Costante',
    desc: 'Completa 3 giorni consecutivi di spedizione',
  },
  {
    day: 7,
    title: 'Sigillo d\\\'Argento RGS',
    coins: 300,
    powerUp: { type: 'compass_radar', count: 2, name: 'Bussola Radar' },
    badgeName: '🥈 Pioniere dell\\\'Avventura',
    desc: 'Una settimana ininterrotta di scavi sul campo',
  },
  {
    day: 14,
    title: 'Medaglia delle Due Settimane',
    coins: 600,
    powerUp: { type: 'freeze_time', count: 2, name: 'Congela Tempo' },
    badgeName: '🎖️ Veterano della Spedizione',
    desc: '14 giorni di fedeltà cartografica assoluta',
  },
  {
    day: 21,
    title: 'Rune del Guardiano d\\\'Oro',
    coins: 1000,
    powerUp: { type: 'error_shield', count: 2, name: 'Scudo Protettivo' },
    badgeName: '🛡️ Campione della Loggia',
    desc: 'Tre settimane di indagini senza sosta',
  },
  {
    day: 30,
    title: 'Corona d\\\'Oro di Paititi',
    coins: 2500,
    powerUp: { type: 'hint', count: 5, name: 'Scorta d\\\'Archeologo' },
    badgeName: '👑 Gran Maestro Esploratore 1928',
    desc: 'Un mese completo di trionfi archeologici mondiali',
  },
];

export interface DailyChallengeModifier {
  title: string;
  desc: string;
  badge: string;
  bonusCoins: number;
}

export const DAILY_MODIFIERS: DailyChallengeModifier[] = [
  {
    title: 'Spedizione d\\\'Oro Massiccio',
    desc: 'La camera segreta contiene doppi forzieri di dobloni coloniali!',
    badge: '💰 2X DOBLONI',
    bonusCoins: 150,
  },
  {
    title: 'Precisione Archeologica Reale',
    desc: 'Scavo delicatissimo: le tavole grafiche richiedono massima attenzione.',
    badge: '🎯 BONUS PERFEZIONE',
    bonusCoins: 180,
  },
  {
    title: 'Scavo Rapido prima del Crepuscolo',
    desc: 'La tempesta di sabbia si avvicina: decifra il sito prima del tramonto!',
    badge: '⚡ VELOCITÀ PREMIATA',
    bonusCoins: 200,
  },
  {
    title: 'Mistero delle Tavole Perdute',
    desc: 'Una spedizione ad altissimo valore accademico della Royal Geographical Society.',
    badge: '📜 RESOCONTO D\\\'ELITE',
    bonusCoins: 160,
  },
];

export interface DailyExpeditionState {
  streak: number;
  lastCompletedDate: string; // 'YYYY-MM-DD'
  completedDates: string[];  // ['2026-09-07', '2026-09-08', ...]
  claimedMilestones: number[]; // [3, 7, ...]
  totalDailiesCompleted: number;
}

export interface CalendarDayInfo {
  dayNumber: number; // 1..30
  dateStr: string;
  isToday: boolean;
  isPast: boolean;
  isFuture: boolean;
  isCompleted: boolean;
  levelId: number;
  levelTitle: string;
  milestone?: MilestoneReward;
}

// Get standard date string YYYY-MM-DD
export function getTodayDateString(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// Deterministically map a date to a level between 1 and 120
export function getLevelIdForDate(dateStr: string): number {
  const parts = dateStr.split('-').map(Number);
  const year = parts[0] || 2026;
  const month = parts[1] || 1;
  const day = parts[2] || 1;
  const hash = Math.abs((year * 372 + month * 31 + day) * 2654435761);
  return (hash % 120) + 1;
}

// Deterministically pick today's daily modifier
export function getModifierForDate(dateStr: string): DailyChallengeModifier {
  const parts = dateStr.split('-').map(Number);
  const day = parts[2] || 1;
  return DAILY_MODIFIERS[day % DAILY_MODIFIERS.length];
}

// Load daily expedition state
export function getDailyExpeditionState(): DailyExpeditionState {
  if (typeof window === 'undefined') {
    return {
      streak: 0,
      lastCompletedDate: '',
      completedDates: [],
      claimedMilestones: [],
      totalDailiesCompleted: 0,
    };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY_DAILY);
    if (!raw) {
      return {
        streak: 1, // Welcome streak of 1
        lastCompletedDate: '',
        completedDates: [],
        claimedMilestones: [],
        totalDailiesCompleted: 0,
      };
    }
    const parsed = JSON.parse(raw);
    return {
      streak: typeof parsed.streak === 'number' ? parsed.streak : 0,
      lastCompletedDate: parsed.lastCompletedDate || '',
      completedDates: Array.isArray(parsed.completedDates) ? parsed.completedDates : [],
      claimedMilestones: Array.isArray(parsed.claimedMilestones) ? parsed.claimedMilestones : [],
      totalDailiesCompleted: typeof parsed.totalDailiesCompleted === 'number' ? parsed.totalDailiesCompleted : 0,
    };
  } catch {
    return {
      streak: 0,
      lastCompletedDate: '',
      completedDates: [],
      claimedMilestones: [],
      totalDailiesCompleted: 0,
    };
  }
}

// Save daily expedition state
export function saveDailyExpeditionState(state: DailyExpeditionState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_DAILY, JSON.stringify(state));
  } catch {
    // LocalStorage error fallback
  }
}

// Check if today's daily challenge is completed
export function isTodayCompleted(): boolean {
  const todayStr = getTodayDateString();
  const state = getDailyExpeditionState();
  return state.completedDates.includes(todayStr) || state.lastCompletedDate === todayStr;
}

// Has pending daily challenge for notification dot
export function hasPendingDaily(): boolean {
  return !isTodayCompleted();
}

// Mark today's daily challenge completed
export function completeDailyExpedition(): {
  newState: DailyExpeditionState;
  bonusCoins: number;
  isNewStreak: boolean;
  unlockedMilestone: MilestoneReward | null;
} {
  const state = getDailyExpeditionState();
  const todayStr = getTodayDateString();

  if (state.completedDates.includes(todayStr)) {
    return {
      newState: state,
      bonusCoins: 0,
      isNewStreak: false,
      unlockedMilestone: null,
    };
  }

  // Calculate streak continuity (yesterday vs older)
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const yStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

  let newStreak = state.streak;
  if (state.lastCompletedDate === yStr) {
    newStreak = state.streak + 1;
  } else if (state.lastCompletedDate === '') {
    newStreak = 1;
  } else {
    // Reset streak if missed more than 1 day
    newStreak = 1;
  }

  const modifier = getModifierForDate(todayStr);
  const bonusCoins = 150 + modifier.bonusCoins;

  const nextCompletedDates = [...state.completedDates, todayStr];
  const nextTotal = state.totalDailiesCompleted + 1;

  // Check if a milestone is hit
  const unlockedMilestone = DAILY_MILESTONES.find(
    m => m.day === newStreak && !state.claimedMilestones.includes(m.day)
  ) || null;

  const newState: DailyExpeditionState = {
    streak: newStreak,
    lastCompletedDate: todayStr,
    completedDates: nextCompletedDates,
    claimedMilestones: unlockedMilestone ? [...state.claimedMilestones, unlockedMilestone.day] : state.claimedMilestones,
    totalDailiesCompleted: nextTotal,
  };

  saveDailyExpeditionState(newState);

  return {
    newState,
    bonusCoins,
    isNewStreak: true,
    unlockedMilestone,
  };
}

// Generate the 30-day expedition calendar grid for the current cycle
export function get30DayExpeditionCalendar(): CalendarDayInfo[] {
  const state = getDailyExpeditionState();
  const todayStr = getTodayDateString();
  const todayDate = new Date();
  const currentDayOfMonth = todayDate.getDate(); // 1 to 31

  const calendarDays: CalendarDayInfo[] = [];

  for (let dayNum = 1; dayNum <= 30; dayNum++) {
    // Calculate date for this day number relative to current month
    const d = new Date(todayDate.getFullYear(), todayDate.getMonth(), dayNum);
    const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

    const isToday = dateStr === todayStr;
    const isPast = dayNum < currentDayOfMonth;
    const isFuture = dayNum > currentDayOfMonth;
    const isCompleted = state.completedDates.includes(dateStr);

    const levelId = getLevelIdForDate(dateStr);
    const levelObj = ALL_120_LEVELS.find(l => l.id === levelId) || ALL_120_LEVELS[0];
    const milestone = DAILY_MILESTONES.find(m => m.day === dayNum);

    calendarDays.push({
      dayNumber: dayNum,
      dateStr,
      isToday,
      isPast,
      isFuture,
      isCompleted,
      levelId,
      levelTitle: levelObj.title,
      milestone,
    });
  }

  return calendarDays;
}
"""

with open("src/utils/dailyChallenge.ts", "w", encoding="utf-8") as f:
    f.write(daily_challenge_code)
print("Created dailyChallenge.ts")
