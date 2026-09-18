import { useState, useEffect, useCallback, useRef } from 'react';
import { safeStorage } from '../utils/storage';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { ALL_120_LEVELS } from '../data/levelRegistry';
import { ALL_COLLECTIBLE_RELICS, type CollectibleRelic } from '../data/collectiblesData';
import {
  completeDailyExpedition,
  isTodayCompleted,
  getLevelIdForDate,
  getTodayDateString,
} from '../utils/dailyChallenge';
import { assetUrl } from '../utils/assetUrl';
import { recordHit, recordError, recordHintUsed, recordLevelCompletion } from '../utils/telemetry';
import type { Difference, Level, PowerUpInventory, PowerUpType, RadarQuadrant } from '../types/game';

const STORAGE_KEY_PROGRESS = 'differenze_progress_v1';
const STORAGE_KEY_RELICS = 'differenze_relics_v1';

interface UseGameSessionProps {
  inventory: PowerUpInventory;
  setInventory: React.Dispatch<React.SetStateAction<PowerUpInventory>>;
  onEarnCoins: (amount: number) => void;
  onUnlockMedal: (medalId: string) => void;
  onTriggerCoinBurst: (startX: number, startY: number, count: number) => void;
  coinBonusPercent: number;
  freezeBonusSeconds: number;
  radarBonusPercent: number;
  hasPassiveFreeShield: boolean;
  vibrationEnabled: boolean;
  zenMode: boolean;
  isAnyModalOpen: boolean;
  onOpenLevelComplete: () => void;
  onOpenGameOver: () => void;
  isDailyActive: boolean;
  setIsDailyActive: React.Dispatch<React.SetStateAction<boolean>>;
  setHasUnreadDaily: React.Dispatch<React.SetStateAction<boolean>>;
  setHasNewStageUnlocked: React.Dispatch<React.SetStateAction<boolean>>;
  setHasUnreadJournal: React.Dispatch<React.SetStateAction<boolean>>;
  setHasUnreadRelics: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useGameSession = ({
  inventory,
  setInventory,
  onEarnCoins,
  onUnlockMedal,
  onTriggerCoinBurst,
  coinBonusPercent,
  freezeBonusSeconds,
  radarBonusPercent,
  hasPassiveFreeShield,
  vibrationEnabled,
  zenMode,
  isAnyModalOpen,
  onOpenLevelComplete,
  onOpenGameOver,
  isDailyActive,
  setIsDailyActive,
  setHasUnreadDaily,
  setHasNewStageUnlocked,
  setHasUnreadJournal,
  setHasUnreadRelics,
}: UseGameSessionProps) => {
  const [levels] = useState<Level[]>(ALL_120_LEVELS);

  // Initial Level ID from URL or Storage
  const [currentLevelId, setCurrentLevelId] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const queryLvl = urlParams.get('level');
      if (queryLvl) {
        const parsedLvl = parseInt(queryLvl, 10);
        if (!isNaN(parsedLvl) && parsedLvl >= 1 && parsedLvl <= 120) return parsedLvl;
      }
    }
    const saved = safeStorage.getItem(STORAGE_KEY_PROGRESS);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.currentLevelId || 1;
      } catch {
        return 1;
      }
    }
    return 1;
  });

  const currentLevel = levels.find(l => l.id === currentLevelId) || levels[0];

  // Gameplay State
  const [foundDifferenceIds, setFoundDifferenceIds] = useState<string[]>([]);
  const [lives, setLives] = useState<number>(3);
  const [errorsCount, setErrorsCount] = useState<number>(0);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const usedAssistanceThisLevelRef = useRef<boolean>(false);

  // Power-Ups & Assists State
  const [isTimeFrozen, setIsTimeFrozen] = useState<boolean>(false);
  const [freezeSecondsLeft, setFreezeSecondsLeft] = useState<number>(0);
  const [isShieldActive, setIsShieldActive] = useState<boolean>(hasPassiveFreeShield);
  const [activeHint, setActiveHint] = useState<Difference | null>(null);
  const [activeRadar, setActiveRadar] = useState<RadarQuadrant | null>(null);
  const [shieldBlockedNotice, setShieldBlockedNotice] = useState<boolean>(false);
  const [levelCoinsEarned, setLevelCoinsEarned] = useState<number>(0);
  const [comboStreak, setComboStreak] = useState<number>(0);
  const comboTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Relics State
  const [discoveredRelicIds, setDiscoveredRelicIds] = useState<string[]>(() => {
    const saved = safeStorage.getItem(STORAGE_KEY_RELICS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });
  const [activeFoundRelic, setActiveFoundRelic] = useState<CollectibleRelic | null>(null);
  const [isRelicFoundModalOpen, setIsRelicFoundModalOpen] = useState<boolean>(false);

  const currentLevelHiddenRelic = ALL_COLLECTIBLE_RELICS.find(r => r.hiddenLevelId === currentLevel.id) || null;

  // Lore Clues & Toast
  const [activeClueToast, setActiveClueToast] = useState<Difference | null>(null);

  // Persistent Progress: Completed Level IDs & Discovered Difference Clues
  const [completedLevelIds, setCompletedLevelIds] = useState<number[]>(() => {
    const saved = safeStorage.getItem(STORAGE_KEY_PROGRESS);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.completedLevelIds || [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [discoveredClues, setDiscoveredClues] = useState<string[]>(() => {
    const saved = safeStorage.getItem(STORAGE_KEY_PROGRESS);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.discoveredClues || [];
      } catch {
        return [];
      }
    }
    return [];
  });

  // Speedrun Records
  const [bestTimes, setBestTimes] = useState<Record<number, number>>(() => {
    const saved = safeStorage.getItem(STORAGE_KEY_PROGRESS);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.bestTimes || {};
      } catch {
        return {};
      }
    }
    return {};
  });

  // Level Stars
  const [levelStars, setLevelStars] = useState<Record<number, number>>(() => {
    const saved = safeStorage.getItem(STORAGE_KEY_PROGRESS);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.levelStars && typeof parsed.levelStars === 'object') {
          return parsed.levelStars;
        }
        if (Array.isArray(parsed.completedLevelIds)) {
          const fallback: Record<number, number> = {};
          parsed.completedLevelIds.forEach((id: number) => {
            fallback[id] = 3;
          });
          return fallback;
        }
      } catch {
        return {};
      }
    }
    return {};
  });

  const [lastWinRecordInfo, setLastWinRecordInfo] = useState<{ isRecord: boolean; bestTime: number }>({
    isRecord: false,
    bestTime: 0,
  });

  // Save progress
  useEffect(() => {
    safeStorage.setItem(
      STORAGE_KEY_PROGRESS,
      JSON.stringify({
        currentLevelId,
        completedLevelIds,
        discoveredClues,
        bestTimes,
        levelStars,
      })
    );
  }, [currentLevelId, completedLevelIds, discoveredClues, bestTimes, levelStars]);

  // Save relics
  useEffect(() => {
    safeStorage.setItem(STORAGE_KEY_RELICS, JSON.stringify(discoveredRelicIds));
  }, [discoveredRelicIds]);

  // Timer Tick (Frozen when freeze power-up is running or modal open)
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    const isPaused = !isTimerRunning || isTimeFrozen || isAnyModalOpen;

    if (!isPaused) {
      interval = setInterval(() => {
        setTimeElapsed(t => t + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, isTimeFrozen, isAnyModalOpen]);

  // Freeze Time Countdown Tick (20 seconds duration + perk bonus)
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isTimeFrozen && freezeSecondsLeft > 0) {
      interval = setInterval(() => {
        setFreezeSecondsLeft(sec => {
          if (sec <= 1) {
            setIsTimeFrozen(false);
            return 0;
          }
          return sec - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimeFrozen, freezeSecondsLeft]);

  // Intelligent Preloading: preloads next level's photograph
  useEffect(() => {
    const nextLevel = levels.find(l => l.id === currentLevelId + 1);
    if (nextLevel && nextLevel.imageA) {
      const img = new Image();
      img.src = assetUrl(nextLevel.imageA);
    }
  }, [currentLevelId, levels]);

  // Reset state on level switch
  const loadLevel = useCallback(
    (levelId: number) => {
      setCurrentLevelId(levelId);
      setFoundDifferenceIds([]);
      setLives(3);
      setErrorsCount(0);
      setTimeElapsed(0);
      setIsTimeFrozen(false);
      setFreezeSecondsLeft(0);
      setIsShieldActive(hasPassiveFreeShield);
      setActiveHint(null);
      setActiveRadar(null);
      setActiveClueToast(null);
      setLevelCoinsEarned(0);
      setComboStreak(0);
      usedAssistanceThisLevelRef.current = false;
      if (comboTimerRef.current) clearTimeout(comboTimerRef.current);
      setIsTimerRunning(true);
    },
    [hasPassiveFreeShield]
  );

  // Handle Finding a Difference
  const handleDifferenceClick = useCallback(
    (
      diff: Difference,
      _clickPercentage?: { x: number; y: number },
      _imageIndex?: 0 | 1,
      screenPos?: { x: number; y: number }
    ) => {
      if (foundDifferenceIds.includes(diff.id)) return;

      // Update combo streak and timer (6s window)
      const nextStreak = comboStreak + 1;
      setComboStreak(nextStreak);
      if (comboTimerRef.current) clearTimeout(comboTimerRef.current);
      comboTimerRef.current = setTimeout(() => {
        setComboStreak(0);
      }, 6000);

      // Ascending Sound & Haptics
      sound.playComboSuccess(nextStreak);
      triggerHaptic(nextStreak >= 3 ? 'combo' : 'clue_found', vibrationEnabled);

      // Trigger flying coin particles
      if (screenPos) {
        onTriggerCoinBurst(screenPos.x, screenPos.y, nextStreak >= 3 ? 12 : 8);
      }

      // Award coins with explorer perk bonus and dynamic combo multiplier!
      const comboMult = nextStreak >= 4 ? 1.5 : nextStreak >= 3 ? 1.3 : nextStreak >= 2 ? 1.15 : 1.0;
      const baseCoins = 20;
      const earnedCoins = Math.round(baseCoins * (1 + coinBonusPercent / 100) * comboMult);
      onEarnCoins(earnedCoins);
      setLevelCoinsEarned(c => c + earnedCoins);

      // Add to found
      const nextFound = [...foundDifferenceIds, diff.id];
      setFoundDifferenceIds(nextFound);
      recordHit(!usedAssistanceThisLevelRef.current);

      // Add to discovered lore clues
      if (!discoveredClues.includes(diff.id)) {
        setDiscoveredClues(prev => [...prev, diff.id]);
        setHasUnreadJournal(true);
      }

      // Show Lore Toast
      setActiveClueToast(diff);

      // Check Real-time Expedition Medal Unlocks
      if (nextStreak >= 4) onUnlockMedal('combo_master');
      if (discoveredClues.length + 1 >= 20) onUnlockMedal('lore_master');
      if (nextFound.length >= 5 && !usedAssistanceThisLevelRef.current) onUnlockMedal('hawk_eye');

      // Clear active hint or radar if this was the targeted diff
      if (activeHint && activeHint.id === diff.id) {
        setActiveHint(null);
      }
      if (activeRadar && activeRadar.targetDiffId === diff.id) {
        setActiveRadar(null);
      }

      // Check for Level Completion
      if (nextFound.length >= currentLevel.differences.length) {
        setIsTimerRunning(false);
        setIsTimeFrozen(false);
        recordLevelCompletion(currentLevel.id, timeElapsed);

        // Check Victory Medals
        if (errorsCount === 0) onUnlockMedal('flawless_run');
        if (timeElapsed < 45) onUnlockMedal('speed_demon');
        if (currentLevel.chapterNumber >= 5) onUnlockMedal('andes_climber');
        if (currentLevel.chapterNumber >= 9) onUnlockMedal('sun_priest');
        if (currentLevel.id >= 120 || completedLevelIds.length + 1 >= 120) onUnlockMedal('grand_archaeologist');
        if (!usedAssistanceThisLevelRef.current) onUnlockMedal('hawk_eye');

        // Calculate time-based 3-star speed bonus coins
        const earnedStars = timeElapsed <= 105 ? 3 : timeElapsed <= 210 ? 2 : 1;
        setLevelStars(prev => ({
          ...prev,
          [currentLevel.id]: Math.max(prev[currentLevel.id] || 0, earnedStars),
        }));
        const starBonus = earnedStars === 3 ? 100 : earnedStars === 2 ? 60 : 30;
        const isMilestone = currentLevel.id % 10 === 0;
        const milestoneBonus = isMilestone ? 300 : 0;
        let totalBonus = Math.round((starBonus + milestoneBonus) * (1 + coinBonusPercent / 100));

        // Check if level was played as Daily Challenge or matches today's daily
        const todayStr = getTodayDateString();
        const todayLvlId = getLevelIdForDate(todayStr);
        if (isDailyActive || (currentLevel.id === todayLvlId && !isTodayCompleted())) {
          const dailyResult = completeDailyExpedition();
          totalBonus += dailyResult.bonusCoins;
          setHasUnreadDaily(false);
          setIsDailyActive(false);
          sound.playDailyRewardClaim();
        }

        onEarnCoins(totalBonus);
        setLevelCoinsEarned(c => c + totalBonus);

        // Evaluate Speedrun Record (Best Time)
        const prevBest = bestTimes[currentLevel.id];
        const isNewRecord = prevBest === undefined || timeElapsed < prevBest;
        const recordedBest = isNewRecord ? timeElapsed : prevBest;

        if (isNewRecord) {
          setBestTimes(prev => ({ ...prev, [currentLevel.id]: timeElapsed }));
        }
        setLastWinRecordInfo({
          isRecord: isNewRecord,
          bestTime: recordedBest,
        });

        if (!completedLevelIds.includes(currentLevel.id)) {
          setCompletedLevelIds(prev => [...prev, currentLevel.id]);
          if (isMilestone) {
            setHasNewStageUnlocked(true);
          }
        }
        setTimeout(() => {
          onOpenLevelComplete();
        }, 600);
      }
    },
    [
      foundDifferenceIds,
      discoveredClues,
      activeHint,
      activeRadar,
      currentLevel,
      completedLevelIds,
      timeElapsed,
      vibrationEnabled,
      coinBonusPercent,
      isDailyActive,
      bestTimes,
      comboStreak,
      errorsCount,
      onUnlockMedal,
      onTriggerCoinBurst,
      onEarnCoins,
      setHasUnreadDaily,
      setIsDailyActive,
      setHasUnreadJournal,
      setHasNewStageUnlocked,
      onOpenLevelComplete,
    ]
  );

  // Handle Finding a Secret Collectible Relic
  const handleDiscoverRelic = useCallback(
    (relic: CollectibleRelic) => {
      if (discoveredRelicIds.includes(relic.id)) return;

      setDiscoveredRelicIds(prev => {
        const next = [...prev, relic.id];
        if (next.length >= 3) onUnlockMedal('relic_hunter');
        return next;
      });
      onEarnCoins(relic.coinReward);
      setLevelCoinsEarned(c => c + relic.coinReward);
      sound.playRelicFound();
      triggerHaptic('success', vibrationEnabled);

      setActiveFoundRelic(relic);
      setIsRelicFoundModalOpen(true);
      setHasUnreadRelics(true);
    },
    [discoveredRelicIds, vibrationEnabled, onUnlockMedal, onEarnCoins, setHasUnreadRelics]
  );

  const handleDismissClueToast = useCallback(() => {
    setActiveClueToast(null);
  }, []);

  // Handle Error Click (Wrong location)
  const handleErrorClick = useCallback(() => {
    if (isShieldActive) {
      setIsShieldActive(false);
      sound.playShieldBreak();
      triggerHaptic('medium', vibrationEnabled);
      setShieldBlockedNotice(true);
      setTimeout(() => setShieldBlockedNotice(false), 2500);
      return;
    }

    setComboStreak(0);
    if (comboTimerRef.current) clearTimeout(comboTimerRef.current);

    sound.playError();
    triggerHaptic('error', vibrationEnabled);
    setErrorsCount(e => e + 1);
    recordError();

    if (!zenMode) {
      setLives(prevLives => {
        const nextLives = prevLives - 1;
        if (nextLives <= 0) {
          setIsTimerRunning(false);
          onOpenGameOver();
          return 0;
        }
        return nextLives;
      });
    }
  }, [isShieldActive, vibrationEnabled, zenMode, onOpenGameOver]);

  // Handle Power-Up Usage
  const handleUsePowerUp = useCallback(
    (type: PowerUpType) => {
      if (type === 'freeze_time') {
        if (inventory.freeze_time <= 0 || isTimeFrozen) return;
        setInventory(inv => ({ ...inv, freeze_time: inv.freeze_time - 1 }));
        setIsTimeFrozen(true);
        setFreezeSecondsLeft(20 + freezeBonusSeconds);
        sound.playFreeze();
        triggerHaptic('powerup_used', vibrationEnabled);
      } else if (type === 'compass_radar') {
        if (inventory.compass_radar <= 0) return;
        usedAssistanceThisLevelRef.current = true;
        recordHintUsed();
        const unfound = currentLevel.differences.find(d => !foundDifferenceIds.includes(d.id));
        if (!unfound) return;
        setInventory(inv => ({ ...inv, compass_radar: inv.compass_radar - 1 }));
        const quadSize = Math.min(45, Math.round(30 * (1 + radarBonusPercent / 100)));
        const quadX = Math.max(2, Math.min(98 - quadSize, unfound.x - quadSize / 2));
        const quadY = Math.max(2, Math.min(98 - quadSize, unfound.y - quadSize / 2));
        setActiveRadar({
          x: quadX,
          y: quadY,
          width: quadSize,
          height: quadSize,
          targetDiffId: unfound.id,
        });
        sound.playCompass();
        triggerHaptic('powerup_used', vibrationEnabled);
        setTimeout(() => {
          setActiveRadar(null);
        }, 8000);
      } else if (type === 'hint') {
        if (inventory.hint <= 0) return;
        usedAssistanceThisLevelRef.current = true;
        recordHintUsed();
        const unfound = currentLevel.differences.find(d => !foundDifferenceIds.includes(d.id));
        if (!unfound) return;
        setInventory(inv => ({ ...inv, hint: inv.hint - 1 }));
        sound.playHint();
        triggerHaptic('powerup_used', vibrationEnabled);
        setActiveHint(unfound);
        setTimeout(() => {
          setActiveHint(null);
        }, 6000);
      } else if (type === 'error_shield') {
        if (inventory.error_shield <= 0 || isShieldActive) return;
        setInventory(inv => ({ ...inv, error_shield: inv.error_shield - 1 }));
        setIsShieldActive(true);
        sound.playShield();
        triggerHaptic('powerup_used', vibrationEnabled);
      }
    },
    [
      inventory,
      isTimeFrozen,
      isShieldActive,
      currentLevel.differences,
      foundDifferenceIds,
      vibrationEnabled,
      freezeBonusSeconds,
      radarBonusPercent,
      setInventory,
    ]
  );

  const resetProgress = useCallback(() => {
    safeStorage.removeItem(STORAGE_KEY_PROGRESS);
    safeStorage.removeItem(STORAGE_KEY_RELICS);
    setCompletedLevelIds([]);
    setDiscoveredClues([]);
    setDiscoveredRelicIds([]);
    setBestTimes({});
    setLevelStars({});
    loadLevel(1);
  }, [loadLevel]);

  return {
    levels,
    currentLevelId,
    setCurrentLevelId,
    currentLevel,
    foundDifferenceIds,
    lives,
    setLives,
    errorsCount,
    timeElapsed,
    isTimerRunning,
    setIsTimerRunning,
    isTimeFrozen,
    freezeSecondsLeft,
    isShieldActive,
    shieldBlockedNotice,
    activeHint,
    activeRadar,
    levelCoinsEarned,
    comboStreak,
    discoveredRelicIds,
    activeFoundRelic,
    isRelicFoundModalOpen,
    setIsRelicFoundModalOpen,
    currentLevelHiddenRelic,
    activeClueToast,
    completedLevelIds,
    setCompletedLevelIds,
    discoveredClues,
    bestTimes,
    levelStars,
    lastWinRecordInfo,
    loadLevel,
    handleDifferenceClick,
    handleDiscoverRelic,
    handleDismissClueToast,
    handleErrorClick,
    handleUsePowerUp,
    resetProgress,
  };
};
