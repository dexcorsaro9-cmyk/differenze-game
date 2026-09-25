import type { PowerUpType } from '../types/game';

/**
 * Every coin value in the game, in one place.
 *
 * The problem this solves: a three-star level used to pay 319 coins while a power-up cost
 * 40-60, so a single level bought six of them. Coins accumulated about 2.3x faster than
 * anything could spend them (roughly 49,700 earned against 21,300 of sinks across a full
 * playthrough), which left the shop pointless after the first few levels and gave the
 * player no decision to make.
 *
 * The target the numbers below are tuned to:
 *
 *   1. A three-star level pays for about two power-ups, not six.
 *   2. The per-clue reward stays at 20 so the moment-to-moment feedback is unchanged;
 *      the cut falls on the completion bonuses, which were the free money.
 *   3. A completionist finishes with a small surplus rather than a fortune, so the last
 *      wardrobe pieces are a genuine goal.
 *
 * src/__tests__/economyTuning.test.ts asserts those ratios, so a future change to any
 * single number fails loudly instead of quietly reopening the gap.
 *
 * These are a starting point derived from the maths, not from play. They are deliberately
 * all in one file so a playtest can move them without hunting through components.
 */

/** Coins for spotting one clue, before the combo multiplier. */
export const COINS_PER_CLUE = 20;

/** Rewards a sustained streak. Index 0 is the first clue in a chain. */
export const COMBO_MULTIPLIERS = [1.0, 1.15, 1.3, 1.5] as const;

export function getComboMultiplier(streak: number): number {
  if (streak >= 4) return COMBO_MULTIPLIERS[3];
  if (streak === 3) return COMBO_MULTIPLIERS[2];
  if (streak === 2) return COMBO_MULTIPLIERS[1];
  return COMBO_MULTIPLIERS[0];
}

/**
 * Completion bonuses. Cut hard from 100/60/30: these were paying more than the eight
 * clues themselves on a good run, which is what broke the economy.
 */
export const STAR_BONUS: Record<1 | 2 | 3, number> = {
  3: 40,
  2: 25,
  1: 10,
};

/** Extra for closing a stage, every tenth level. Was 300. */
export const MILESTONE_BONUS = 150;

/** Coins a new expedition starts with. */
export const STARTING_COINS = 150;

/**
 * Power-up prices, shared by the in-bar quick buy and the shop so the two can never drift
 * apart again — the quick buy priced a hint at 50 while the shop only sold them in threes.
 */
export const POWER_UP_PRICES: Record<PowerUpType, number> = {
  freeze_time: 150,
  compass_radar: 100,
  hint: 125,
  error_shield: 110,
};

/** Bulk packs keep roughly the discount they had: three for the price of two and a half. */
export const BUNDLE_PRICES = {
  freeze_triple: 380,
  compass_triple: 250,
  hint_triple: 310,
  shield_triple: 280,
  expedition_bundle: 620,
} as const;

/** Relief for a player who has run dry. */
export const EMERGENCY_FUNDS = 60;

/** Total coins a full clean playthrough hands out, used by the balance test. */
export function estimateTotalEarnings(options: {
  levels: number;
  milestones: number;
  medalBounties: number;
  visaBounties: number;
}): number {
  const perLevelClues = Array.from({ length: 8 }, (_, i) =>
    Math.round(COINS_PER_CLUE * getComboMultiplier(i + 1))
  ).reduce((sum, coins) => sum + coins, 0);

  const perLevel = perLevelClues + STAR_BONUS[3];

  return (
    perLevel * options.levels +
    MILESTONE_BONUS * options.milestones +
    options.medalBounties +
    options.visaBounties +
    STARTING_COINS
  );
}
