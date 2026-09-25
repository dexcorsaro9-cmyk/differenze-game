import { describe, it, expect } from 'vitest';
import {
  isSealedLevel,
  isMilestoneLevel,
  countSealedLevels,
  DEFAULT_SEALED_MODE,
} from '../data/sealedLevels';

describe('sealed level selection', () => {
  it('seals the stage finales by default', () => {
    expect(DEFAULT_SEALED_MODE).toBe('milestones');
    [10, 20, 50, 120].forEach(id => expect(isSealedLevel(id)).toBe(true));
    [1, 9, 11, 119].forEach(id => expect(isSealedLevel(id)).toBe(false));
  });

  it('recognises a milestone', () => {
    expect(isMilestoneLevel(10)).toBe(true);
    expect(isMilestoneLevel(11)).toBe(false);
    expect(isMilestoneLevel(0)).toBe(false);
  });

  it('honours the player preference at both extremes', () => {
    expect(isSealedLevel(10, 'never')).toBe(false);
    expect(isSealedLevel(120, 'never')).toBe(false);
    expect(isSealedLevel(1, 'always')).toBe(true);
    expect(isSealedLevel(37, 'always')).toBe(true);
  });

  it('counts how much of the game each mode seals', () => {
    expect(countSealedLevels('never')).toBe(0);
    expect(countSealedLevels('milestones')).toBe(12);
    expect(countSealedLevels('always')).toBe(120);
  });
});
