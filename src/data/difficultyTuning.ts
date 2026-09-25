/**
 * Per-difficulty tuning for a run.
 *
 * Both values used to be flat across the whole game: three stars at 105 seconds and three
 * lives, from level 1 to level 120. That undervalued late scenes, which are denser, and
 * whose clue hitboxes are deliberately tighter (4.8% of image size past level 60 against
 * 8.5% in the first twenty), so the same three stars asked for much more on level 110
 * than on level 3.
 *
 * Thresholds and lives now follow the difficulty band the level registry assigns.
 */
export type Difficulty = 'Facile' | 'Normale' | 'Esperto';

export interface DifficultyTuning {
  /** Seconds at or under which the run earns three stars. */
  threeStarSeconds: number;
  /** Seconds at or under which the run earns two stars. */
  twoStarSeconds: number;
  /** Lives the run starts with, outside zen mode. */
  startingLives: number;
}

export const DIFFICULTY_TUNING: Record<Difficulty, DifficultyTuning> = {
  // Levels 1-30: forgiving hitboxes, roomy compositions.
  Facile: { threeStarSeconds: 95, twoStarSeconds: 190, startingLives: 3 },
  // Levels 31-70: tighter hitboxes, busier scenes.
  Normale: { threeStarSeconds: 125, twoStarSeconds: 250, startingLives: 3 },
  // Levels 71-120: object-sized hitboxes that reward zooming in, which takes time.
  // The extra life offsets the higher chance of an honest near-miss.
  Esperto: { threeStarSeconds: 160, twoStarSeconds: 320, startingLives: 4 },
};

export function getDifficultyTuning(difficulty: Difficulty): DifficultyTuning {
  return DIFFICULTY_TUNING[difficulty] || DIFFICULTY_TUNING.Normale;
}

/** Stars earned for finishing a level of this difficulty in this many seconds. */
export function getEarnedStars(difficulty: Difficulty, timeElapsedSeconds: number): 1 | 2 | 3 {
  const tuning = getDifficultyTuning(difficulty);
  if (timeElapsedSeconds <= tuning.threeStarSeconds) return 3;
  if (timeElapsedSeconds <= tuning.twoStarSeconds) return 2;
  return 1;
}

export function getStartingLives(difficulty: Difficulty): number {
  return getDifficultyTuning(difficulty).startingLives;
}
