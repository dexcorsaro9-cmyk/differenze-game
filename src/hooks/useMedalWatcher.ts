import { useEffect } from 'react';

interface MedalWatcherInput {
  unlockMedal: (medalId: string) => void;
  coins: number;
  hasFullSetSynergy: boolean;
  discoveredCluesCount: number;
  discoveredRelicsCount: number;
  currentChapterNumber: number;
  completedLevelIds: number[];
  isTreasureMapOpen: boolean;
}

/**
 * Watches progress and unlocks the passive milestone medals.
 *
 * These are the awards that cannot be granted at the moment they are earned, because they
 * depend on a running total rather than a single event. unlockMedal is idempotent, so
 * re-evaluating on every change is safe.
 */
export function useMedalWatcher({
  unlockMedal,
  coins,
  hasFullSetSynergy,
  discoveredCluesCount,
  discoveredRelicsCount,
  currentChapterNumber,
  completedLevelIds,
  isTreasureMapOpen,
}: MedalWatcherInput): void {
  useEffect(() => {
    if (hasFullSetSynergy) unlockMedal('full_set_synergy');
    if (coins >= 1000) unlockMedal('wealthy_explorer');
    if (discoveredCluesCount >= 20) unlockMedal('lore_master');
    if (discoveredRelicsCount >= 3) unlockMedal('relic_hunter');
    if (currentChapterNumber >= 5 || completedLevelIds.some(id => id >= 41)) {
      unlockMedal('andes_climber');
    }
    if (currentChapterNumber >= 9 || completedLevelIds.some(id => id >= 81)) {
      unlockMedal('sun_priest');
    }
    if (completedLevelIds.length >= 120) unlockMedal('grand_archaeologist');
  }, [
    unlockMedal,
    coins,
    hasFullSetSynergy,
    discoveredCluesCount,
    discoveredRelicsCount,
    currentChapterNumber,
    completedLevelIds,
  ]);

  // Cartographer is earned by consulting the globe once enough of the world is charted.
  useEffect(() => {
    if (!isTreasureMapOpen) return;
    const completedStagesCount = completedLevelIds.filter(id => id % 10 === 0).length;
    if (completedStagesCount >= 10 || completedLevelIds.length >= 100) {
      unlockMedal('cartographer');
    }
  }, [isTreasureMapOpen, completedLevelIds, unlockMedal]);
}
