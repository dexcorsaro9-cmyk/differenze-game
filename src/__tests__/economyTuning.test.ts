import { describe, it, expect } from 'vitest';
import {
  COINS_PER_CLUE,
  STAR_BONUS,
  MILESTONE_BONUS,
  POWER_UP_PRICES,
  BUNDLE_PRICES,
  STARTING_COINS,
  getComboMultiplier,
  estimateTotalEarnings,
} from '../data/economyTuning';
import { ALL_ACHIEVEMENTS } from '../data/achievementsData';
import { CONSULAR_VISAS } from '../data/passportData';
import { ALL_OUTFITS, ALL_ACCESSORIES } from '../data/avatarData';
import { ALL_120_LEVELS } from '../data/levelRegistry';
import type { PowerUpType } from '../types/game';

const LEVELS = ALL_120_LEVELS.length;
const MILESTONES = ALL_120_LEVELS.filter(l => l.id % 10 === 0).length;

const sum = (values: number[]) => values.reduce((a, b) => a + b, 0);

const medalBounties = sum(ALL_ACHIEVEMENTS.map(a => a.coinReward ?? 0));
const visaBounties = sum(CONSULAR_VISAS.map(v => v.bounty ?? 0));
const wardrobeSink = sum([...ALL_OUTFITS, ...ALL_ACCESSORIES].map(i => i.cost ?? 0));

const totalEarnings = estimateTotalEarnings({
  levels: LEVELS,
  milestones: MILESTONES,
  medalBounties,
  visaBounties,
});

/** What a clean three-star level pays, combo chain included. */
function threeStarLevelIncome(): number {
  const clues = sum(
    Array.from({ length: 8 }, (_, i) => Math.round(COINS_PER_CLUE * getComboMultiplier(i + 1)))
  );
  return clues + STAR_BONUS[3];
}

const POWER_UPS = Object.keys(POWER_UP_PRICES) as PowerUpType[];
const averagePowerUpPrice = sum(POWER_UPS.map(p => POWER_UP_PRICES[p])) / POWER_UPS.length;

describe('combo multipliers', () => {
  it('rewards a longer streak and then plateaus', () => {
    expect(getComboMultiplier(1)).toBe(1.0);
    expect(getComboMultiplier(2)).toBeGreaterThan(getComboMultiplier(1));
    expect(getComboMultiplier(3)).toBeGreaterThan(getComboMultiplier(2));
    expect(getComboMultiplier(4)).toBeGreaterThan(getComboMultiplier(3));
    expect(getComboMultiplier(99)).toBe(getComboMultiplier(4));
  });
});

describe('star bonuses', () => {
  it('pays more for a faster run', () => {
    expect(STAR_BONUS[3]).toBeGreaterThan(STAR_BONUS[2]);
    expect(STAR_BONUS[2]).toBeGreaterThan(STAR_BONUS[1]);
  });

  it('never out-pays the eight clues themselves', () => {
    // The completion bonus paying more than the work was what broke the old economy.
    const clueIncome = threeStarLevelIncome() - STAR_BONUS[3];
    expect(STAR_BONUS[3]).toBeLessThan(clueIncome / 2);
    expect(MILESTONE_BONUS).toBeLessThan(clueIncome);
  });
});

describe('a level against a power-up', () => {
  it('pays for about two power-ups, not six', () => {
    const ratio = threeStarLevelIncome() / averagePowerUpPrice;
    expect(ratio).toBeGreaterThan(1.4);
    expect(ratio).toBeLessThan(2.6);
  });

  it('cannot afford a power-up on the opening balance alone without thought', () => {
    // Enough to start, not enough to ignore the economy.
    expect(STARTING_COINS).toBeLessThan(averagePowerUpPrice * 2);
  });
});

describe('bulk packs', () => {
  it('are cheaper per unit than buying singly, but not free money', () => {
    const cases: [number, PowerUpType][] = [
      [BUNDLE_PRICES.freeze_triple, 'freeze_time'],
      [BUNDLE_PRICES.compass_triple, 'compass_radar'],
      [BUNDLE_PRICES.hint_triple, 'hint'],
      [BUNDLE_PRICES.shield_triple, 'error_shield'],
    ];

    cases.forEach(([bundlePrice, powerUp]) => {
      const singly = POWER_UP_PRICES[powerUp] * 3;
      expect(bundlePrice, powerUp).toBeLessThan(singly);
      expect(bundlePrice, powerUp).toBeGreaterThan(singly * 0.7);
    });
  });
});

describe('whole-playthrough balance', () => {
  it('has sinks worth a large majority of what the game pays out', () => {
    // Wardrobe plus a modest power-up habit: roughly one and a half per level.
    const powerUpSpend = averagePowerUpPrice * 1.5 * LEVELS;
    const totalSinks = wardrobeSink + powerUpSpend;

    // Before this tuning the ratio was 2.3 earned for every 1 spendable.
    const ratio = totalEarnings / totalSinks;
    expect(
      ratio,
      `earn ${Math.round(totalEarnings)} vs sinks ${Math.round(totalSinks)}`
    ).toBeLessThan(1.25);
    expect(ratio, 'the player should still finish comfortable, not broke').toBeGreaterThan(0.85);
  });

  it('keeps the wardrobe out of reach of a casual playthrough', () => {
    // Half the game should not buy every outfit in it.
    const halfwayEarnings = totalEarnings / 2;
    expect(wardrobeSink).toBeGreaterThan(halfwayEarnings * 0.6);
  });
});
