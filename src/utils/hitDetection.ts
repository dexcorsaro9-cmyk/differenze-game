import type { Difference } from '../types/game';

/**
 * Tap resolution for the investigation stage.
 *
 * Kept as pure functions so the rule that decides "did this tap find a clue?" can be
 * unit-tested against all 120 levels of real data instead of only being exercised by hand
 * on a device.
 */

/** Forgiving early levels, authentic object-sized hitboxes late. Percentage of image size. */
export const TOLERANCE_BANDS: { maxLevel: number; floor: number }[] = [
  { maxLevel: 20, floor: 8.5 },
  { maxLevel: 60, floor: 6.5 },
  { maxLevel: Number.POSITIVE_INFINITY, floor: 4.8 },
];

/** A hitbox is never shrunk below this, or dense scenes would stop being tappable. */
export const MIN_TOLERANCE = 3.2;

/** An explicitly spent hint opens up a wide catch radius on its target. */
export const HINT_TOLERANCE = 16.0;

export function getToleranceFloor(levelId: number): number {
  const lvl = levelId > 0 ? levelId : 1;
  const band = TOLERANCE_BANDS.find(b => lvl <= b.maxLevel);
  return band ? band.floor : TOLERANCE_BANDS[TOLERANCE_BANDS.length - 1].floor;
}

/**
 * Small touch buffer once the player has pinched in to inspect details, so hitting the
 * magnified object stays responsive on a touchscreen.
 */
export function getZoomAssist(scale: number): number {
  if (scale <= 1.2) return 0;
  return Math.min((scale - 1) * 0.7, 1.4);
}

/**
 * Half the distance to the closest other clue in the scene, per clue.
 *
 * This is what keeps a forgiving hitbox from swallowing its neighbour: in a dense
 * composition the cap tightens automatically, so a single tap can never sit inside two
 * clues at once and the hand-authored `radius` values stop being overridden wholesale by
 * the band floor.
 */
export function buildNeighbourCaps(differences: Difference[]): Record<string, number> {
  const caps: Record<string, number> = {};

  differences.forEach(diff => {
    let nearest = Number.POSITIVE_INFINITY;
    differences.forEach(other => {
      if (other.id === diff.id) return;
      const dist = Math.hypot(diff.x - other.x, diff.y - other.y);
      if (dist < nearest) nearest = dist;
    });
    caps[diff.id] = nearest === Number.POSITIVE_INFINITY ? Number.POSITIVE_INFINITY : nearest / 2;
  });

  return caps;
}

export interface ToleranceInput {
  levelId: number;
  diff: Difference;
  scale?: number;
  neighbourCap?: number;
  isHintTarget?: boolean;
}

/** Effective catch radius, in percentage of image size, for one clue right now. */
export function resolveHitTolerance({
  levelId,
  diff,
  scale = 1,
  neighbourCap = Number.POSITIVE_INFINITY,
  isHintTarget = false,
}: ToleranceInput): number {
  if (isHintTarget) return HINT_TOLERANCE;

  const nominal = Math.max(diff.radius || 0, getToleranceFloor(levelId));
  const withAssist = nominal + getZoomAssist(scale);
  const capped = Math.min(withAssist, neighbourCap);

  return Math.max(capped, MIN_TOLERANCE);
}

export interface HitTestInput {
  differences: Difference[];
  foundDifferenceIds: string[];
  x: number;
  y: number;
  levelId: number;
  scale?: number;
  activeHintId?: string | null;
  neighbourCaps?: Record<string, number>;
}

/**
 * Returns the unfound clue a tap at (x, y) resolves to, or null for a miss.
 * When several are in range the closest wins, so overlap is resolved deterministically.
 */
export function findHitDifference({
  differences,
  foundDifferenceIds,
  x,
  y,
  levelId,
  scale = 1,
  activeHintId = null,
  neighbourCaps,
}: HitTestInput): Difference | null {
  const caps = neighbourCaps || buildNeighbourCaps(differences);

  let matched: Difference | null = null;
  let minDistance = Number.POSITIVE_INFINITY;

  for (const diff of differences) {
    if (foundDifferenceIds.includes(diff.id)) continue;

    const tolerance = resolveHitTolerance({
      levelId,
      diff,
      scale,
      neighbourCap: caps[diff.id],
      isHintTarget: activeHintId === diff.id,
    });

    const dist = Math.hypot(x - diff.x, y - diff.y);
    if (dist <= tolerance && dist < minDistance) {
      minDistance = dist;
      matched = diff;
    }
  }

  return matched;
}

/**
 * Sealed investigation.
 *
 * In a sealed scene the player must first choose which riddle they are answering, and only
 * the object that riddle describes will register. Tapping a different object that happens
 * to be a clue is a mismatch: the deduction was wrong, even though the eye was right.
 *
 * This is what makes the 960 written riddles load-bearing. Without it a player can ignore
 * the text entirely and sweep the photograph, which is how the game played before.
 */
export type StageTapKind = 'hit' | 'mismatch' | 'miss';

export interface StageTapResult {
  kind: StageTapKind;
  /** The clue that was touched, for a hit or a mismatch. */
  difference: Difference | null;
}

export interface StageTapInput extends HitTestInput {
  /**
   * When set, only this clue can be claimed. Touching any other unfound clue resolves as
   * a mismatch instead of a hit. Leave undefined for a free-search scene.
   */
  requiredDifferenceId?: string | null;
}

export function resolveStageTap({
  requiredDifferenceId = null,
  ...hitTest
}: StageTapInput): StageTapResult {
  const touched = findHitDifference(hitTest);

  if (!touched) return { kind: 'miss', difference: null };
  if (!requiredDifferenceId) return { kind: 'hit', difference: touched };

  if (touched.id === requiredDifferenceId) {
    return { kind: 'hit', difference: touched };
  }

  return { kind: 'mismatch', difference: touched };
}
