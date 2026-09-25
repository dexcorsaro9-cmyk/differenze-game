/**
 * Which scenes are investigated under seal.
 *
 * A sealed scene requires the player to name the riddle before claiming its object, which
 * turns the written clue from flavour into the mechanic. It is deliberately not the
 * default for every level: the free search is the game's resting state, and the seal is
 * the beat that closes each stage.
 */
export type SealedMode = 'never' | 'milestones' | 'always';

export const DEFAULT_SEALED_MODE: SealedMode = 'milestones';

/** Stage finales: level 10, 20, ... 120. */
export function isMilestoneLevel(levelId: number): boolean {
  return levelId > 0 && levelId % 10 === 0;
}

export function isSealedLevel(levelId: number, mode: SealedMode = DEFAULT_SEALED_MODE): boolean {
  if (mode === 'never') return false;
  if (mode === 'always') return true;
  return isMilestoneLevel(levelId);
}

/** How many of the 120 scenes a given mode seals, for the settings copy. */
export function countSealedLevels(mode: SealedMode, totalLevels = 120): number {
  if (mode === 'never') return 0;
  if (mode === 'always') return totalLevels;
  return Math.floor(totalLevels / 10);
}
