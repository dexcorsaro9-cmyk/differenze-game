import { describe, it, expect } from 'vitest';
import {
  DIFFICULTY_TUNING,
  getEarnedStars,
  getStartingLives,
  getDifficultyTuning,
  type Difficulty,
} from '../data/difficultyTuning';
import { ALL_120_LEVELS } from '../data/levelRegistry';

const ALL: Difficulty[] = ['Facile', 'Normale', 'Esperto'];

describe('difficulty tuning', () => {
  it('gives later bands more time for the same star rating', () => {
    expect(DIFFICULTY_TUNING.Facile.threeStarSeconds)
      .toBeLessThan(DIFFICULTY_TUNING.Normale.threeStarSeconds);
    expect(DIFFICULTY_TUNING.Normale.threeStarSeconds)
      .toBeLessThan(DIFFICULTY_TUNING.Esperto.threeStarSeconds);
  });

  it('keeps the two-star window above the three-star one everywhere', () => {
    ALL.forEach(d => {
      const t = getDifficultyTuning(d);
      expect(t.twoStarSeconds).toBeGreaterThan(t.threeStarSeconds);
    });
  });

  it('never starts a run without lives', () => {
    ALL.forEach(d => expect(getStartingLives(d)).toBeGreaterThanOrEqual(3));
  });

  it('awards stars on the right side of each boundary', () => {
    ALL.forEach(d => {
      const t = getDifficultyTuning(d);
      expect(getEarnedStars(d, 0)).toBe(3);
      expect(getEarnedStars(d, t.threeStarSeconds)).toBe(3);
      expect(getEarnedStars(d, t.threeStarSeconds + 1)).toBe(2);
      expect(getEarnedStars(d, t.twoStarSeconds)).toBe(2);
      expect(getEarnedStars(d, t.twoStarSeconds + 1)).toBe(1);
      expect(getEarnedStars(d, 99999)).toBe(1);
    });
  });

  it('falls back to Normale for an unknown difficulty', () => {
    expect(getDifficultyTuning('Impossibile' as Difficulty)).toEqual(DIFFICULTY_TUNING.Normale);
  });

  it('covers every difficulty the level registry actually produces', () => {
    const used = new Set(ALL_120_LEVELS.map(l => l.difficulty));
    used.forEach(d => {
      expect(DIFFICULTY_TUNING[d], `no tuning for "${d}"`).toBeDefined();
    });
    expect(used.size).toBeGreaterThan(1);
  });
});
