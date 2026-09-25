import { describe, it, expect } from 'vitest';
import {
  TOLERANCE_BANDS,
  MIN_TOLERANCE,
  HINT_TOLERANCE,
  getToleranceFloor,
  getZoomAssist,
  buildNeighbourCaps,
  resolveHitTolerance,
  findHitDifference,
  resolveStageTap,
} from '../utils/hitDetection';
import { ALL_120_LEVELS } from '../data/levelRegistry';
import type { Difference } from '../types/game';

const clue = (id: string, x: number, y: number, radius = 5.5): Difference => ({
  id,
  x,
  y,
  radius,
  name: id,
  loreClue: id,
});

describe('tolerance bands', () => {
  it('gets stricter as the expedition advances', () => {
    expect(getToleranceFloor(1)).toBe(8.5);
    expect(getToleranceFloor(20)).toBe(8.5);
    expect(getToleranceFloor(21)).toBe(6.5);
    expect(getToleranceFloor(60)).toBe(6.5);
    expect(getToleranceFloor(61)).toBe(4.8);
    expect(getToleranceFloor(120)).toBe(4.8);
  });

  it('is monotonically decreasing and never zero', () => {
    const floors = TOLERANCE_BANDS.map(b => b.floor);
    expect(floors).toEqual([...floors].sort((a, b) => b - a));
    floors.forEach(f => expect(f).toBeGreaterThan(0));
  });

  it('falls back to the first band for a bogus level id', () => {
    expect(getToleranceFloor(0)).toBe(8.5);
    expect(getToleranceFloor(-3)).toBe(8.5);
  });
});

describe('zoom assist', () => {
  it('stays off at rest and is capped once zoomed', () => {
    expect(getZoomAssist(1)).toBe(0);
    expect(getZoomAssist(1.2)).toBe(0);
    expect(getZoomAssist(2)).toBeCloseTo(0.7, 5);
    expect(getZoomAssist(4)).toBe(1.4);
    expect(getZoomAssist(99)).toBe(1.4);
  });
});

describe('neighbour caps', () => {
  it('reports half the distance to the closest other clue', () => {
    const caps = buildNeighbourCaps([clue('a', 10, 10), clue('b', 10, 30), clue('c', 10, 70)]);
    expect(caps.a).toBeCloseTo(10, 5);
    expect(caps.b).toBeCloseTo(10, 5);
    expect(caps.c).toBeCloseTo(20, 5);
  });

  it('leaves a lone clue uncapped', () => {
    expect(buildNeighbourCaps([clue('only', 50, 50)]).only).toBe(Number.POSITIVE_INFINITY);
  });
});

describe('effective tolerance', () => {
  it('honours the band floor when the scene is roomy', () => {
    expect(resolveHitTolerance({ levelId: 5, diff: clue('a', 50, 50) })).toBe(8.5);
    expect(resolveHitTolerance({ levelId: 80, diff: clue('a', 50, 50) })).toBe(5.5);
  });

  it('respects a hand-authored radius larger than the floor', () => {
    expect(resolveHitTolerance({ levelId: 100, diff: clue('a', 50, 50, 7.5) })).toBe(7.5);
  });

  it('tightens around a close neighbour instead of swallowing it', () => {
    const tolerance = resolveHitTolerance({
      levelId: 1,
      diff: clue('a', 50, 50),
      neighbourCap: 4,
    });
    expect(tolerance).toBe(4);
    expect(tolerance).toBeLessThan(getToleranceFloor(1));
  });

  it('never shrinks a hitbox below the tappable minimum', () => {
    expect(
      resolveHitTolerance({ levelId: 1, diff: clue('a', 50, 50), neighbourCap: 0.1 })
    ).toBe(MIN_TOLERANCE);
  });

  it('opens up wide for a clue the player spent a hint on', () => {
    expect(
      resolveHitTolerance({ levelId: 120, diff: clue('a', 50, 50), isHintTarget: true })
    ).toBe(HINT_TOLERANCE);
  });
});

describe('tap resolution', () => {
  const scene = [clue('a', 25, 25), clue('b', 75, 75)];

  it('finds the clue under a direct tap', () => {
    expect(findHitDifference({ differences: scene, foundDifferenceIds: [], x: 25, y: 25, levelId: 1 })?.id)
      .toBe('a');
  });

  it('returns null for a tap in empty space', () => {
    expect(findHitDifference({ differences: scene, foundDifferenceIds: [], x: 50, y: 50, levelId: 1 }))
      .toBeNull();
  });

  it('ignores clues already found', () => {
    expect(findHitDifference({ differences: scene, foundDifferenceIds: ['a'], x: 25, y: 25, levelId: 1 }))
      .toBeNull();
  });

  it('awards the closest clue when two are in range', () => {
    const tight = [clue('near', 50, 50), clue('far', 56, 50)];
    expect(findHitDifference({ differences: tight, foundDifferenceIds: [], x: 51, y: 50, levelId: 1 })?.id)
      .toBe('near');
  });
});

/**
 * The guarantee that matters to a player: on every one of the 120 real scenes, tapping a
 * clue finds that clue and never its neighbour. This is what the neighbour cap exists for,
 * and it is asserted against shipped data rather than fixtures.
 */
describe('every shipped level is unambiguous', () => {
  it('resolves a tap on each clue centre to that exact clue', () => {
    const failures: string[] = [];

    ALL_120_LEVELS.forEach(level => {
      const caps = buildNeighbourCaps(level.differences);
      level.differences.forEach(target => {
        const hit = findHitDifference({
          differences: level.differences,
          foundDifferenceIds: [],
          x: target.x,
          y: target.y,
          levelId: level.id,
          neighbourCaps: caps,
        });
        if (!hit) failures.push(`${target.id} unreachable`);
        else if (hit.id !== target.id) failures.push(`${target.id} resolved to ${hit.id}`);
      });
    });

    expect(failures, failures.slice(0, 10).join(' | ')).toEqual([]);
  });

  it('never lets one clue catch radius reach another clue centre', () => {
    // The strict form of the guarantee: not just "the centre resolves correctly" but
    // "the hitboxes do not overlap at all", so taps between two clues stay honest.
    // Level 11 has the tightest pair in the game (a 7.98% gap) and only passes because
    // the neighbour cap tightens it; the bare band floor of 8.5% would swallow it.
    const overlaps: string[] = [];

    ALL_120_LEVELS.forEach(level => {
      const caps = buildNeighbourCaps(level.differences);
      level.differences.forEach(a => {
        const tolerance = resolveHitTolerance({
          levelId: level.id,
          diff: a,
          neighbourCap: caps[a.id],
        });
        level.differences.forEach(b => {
          if (a.id === b.id) return;
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist <= tolerance) {
            overlaps.push(`${a.id} (r=${tolerance.toFixed(2)}) covers ${b.id} at ${dist.toFixed(2)}`);
          }
        });
      });
    });

    expect(overlaps, overlaps.slice(0, 5).join(' | ')).toEqual([]);
  });

  it('keeps every clue reachable while zoomed in', () => {
    const failures: string[] = [];

    ALL_120_LEVELS.forEach(level => {
      const caps = buildNeighbourCaps(level.differences);
      level.differences.forEach(target => {
        const hit = findHitDifference({
          differences: level.differences,
          foundDifferenceIds: [],
          x: target.x,
          y: target.y,
          levelId: level.id,
          scale: 2.5,
          neighbourCaps: caps,
        });
        if (hit?.id !== target.id) failures.push(`${target.id} @2.5x -> ${hit?.id ?? 'miss'}`);
      });
    });

    expect(failures, failures.slice(0, 10).join(' | ')).toEqual([]);
  });
});

describe('sealed investigation', () => {
  const scene = [clue('a', 25, 25), clue('b', 75, 75)];

  const tap = (x: number, y: number, requiredDifferenceId?: string | null) =>
    resolveStageTap({
      differences: scene,
      foundDifferenceIds: [],
      x,
      y,
      levelId: 1,
      requiredDifferenceId,
    });

  it('claims the object when it matches the chosen riddle', () => {
    const result = tap(25, 25, 'a');
    expect(result.kind).toBe('hit');
    expect(result.difference?.id).toBe('a');
  });

  it('rejects the right eye with the wrong deduction', () => {
    // The player found a real clue, but not the one their riddle describes.
    const result = tap(75, 75, 'a');
    expect(result.kind).toBe('mismatch');
    expect(result.difference?.id).toBe('b');
  });

  it('still calls empty space a miss, not a mismatch', () => {
    expect(tap(50, 50, 'a').kind).toBe('miss');
  });

  it('behaves exactly like a free search when nothing is required', () => {
    expect(tap(75, 75, null).kind).toBe('hit');
    expect(tap(25, 25).kind).toBe('hit');
    expect(tap(50, 50).kind).toBe('miss');
  });
});
