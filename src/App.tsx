import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { ImageComparisonView } from './components/ImageComparisonView';
import { PowerUpBar } from './components/PowerUpBar';
import { ShopModal } from './components/ShopModal';
import { RelicMuseumModal } from './components/RelicMuseumModal';
import { RelicFoundModal } from './components/RelicFoundModal';
import { LoreClueToast } from './components/LoreClueToast';
import { LevelCompleteModal } from './components/LevelCompleteModal';
import { GameOverModal } from './components/GameOverModal';
import { JournalModal } from './components/JournalModal';
import { LevelSelectModal } from './components/LevelSelectModal';
import { SettingsModal } from './components/SettingsModal';
import { MappamondoModal } from './components/MappamondoModal';
import { SplashScreen } from './components/SplashScreen';
import { AvatarCreatorModal } from './components/AvatarCreatorModal';
import { WardrobeModal } from './components/WardrobeModal';
import { PrologueCutsceneModal } from './components/PrologueCutsceneModal';
import { ExpeditionTutorialModal } from './components/ExpeditionTutorialModal';
import { ExpeditionHubModal } from './components/ExpeditionHubModal';
import { StageLoreBriefingModal } from './components/StageLoreBriefingModal';
import { FlyingCoinParticles, type CoinBurstEvent } from './components/FlyingCoinParticles';
import { DailyExpeditionModal } from './components/DailyExpeditionModal';
import {
  hasPendingDaily,
  completeDailyExpedition,
  isTodayCompleted,
  getLevelIdForDate,
  getTodayDateString,
} from './utils/dailyChallenge';
import { ALL_120_LEVELS } from './data/levelRegistry';
import { ALL_COLLECTIBLE_RELICS, type CollectibleRelic } from './data/collectiblesData';
import {
  EXPLORERS,
  ALL_OUTFITS,
  ALL_ACCESSORIES,
  type ExplorerProfile,
} from './data/avatarData';
import type { Difference, GameSettings, PowerUpInventory, PowerUpType, RadarQuadrant, ShopItem } from './types/game';
import { sound } from './utils/audio';
import { triggerHaptic } from './utils/haptics';
import { Shield, Compass } from 'lucide-react';

export const App: React.FC = () => {
  // Persistence keys
  const STORAGE_KEY_PROGRESS = 'differenze_progress_v1';
  const STORAGE_KEY_SETTINGS = 'differenze_settings_v1';
  const STORAGE_KEY_ECONOMY = 'differenze_economy_v1';
  const STORAGE_KEY_INVENTORY = 'differenze_inventory_v1';
  const STORAGE_KEY_RELICS = 'differenze_relics_v1';
  const STORAGE_KEY_AVATAR = 'differenze_avatar_v1';
  const STORAGE_KEY_TUTORIAL = 'differenze_tutorial_v1';
  const STORAGE_KEY_SEEN_BRIEFINGS = 'differenze_seen_briefings_v1';

  const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;

  // Levels & Current Level
  const [levels] = useState(ALL_120_LEVELS);
  const [currentLevelId, setCurrentLevelId] = useState<number>(() => {
    const queryLvl = urlParams?.get('level');
    if (queryLvl) {
      const parsedLvl = parseInt(queryLvl, 10);
      if (!isNaN(parsedLvl) && parsedLvl >= 1 && parsedLvl <= 120) return parsedLvl;
    }
    const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
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

  // Power-Ups & Economy State
  const [coins, setCoins] = useState<number>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_ECONOMY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return typeof parsed.coins === 'number' ? parsed.coins : 150;
      } catch {
        return 150;
      }
    }
    return 150;
  });

  const [inventory, setInventory] = useState<PowerUpInventory>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_INVENTORY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // Fallback default
      }
    }
    return {
      freeze_time: 2,
      compass_radar: 2,
      hint: 3,
      error_shield: 1,
    };
  });

  const [isTimeFrozen, setIsTimeFrozen] = useState<boolean>(false);
  const [freezeSecondsLeft, setFreezeSecondsLeft] = useState<number>(0);
  const [isShieldActive, setIsShieldActive] = useState<boolean>(false);
  const [activeHint, setActiveHint] = useState<Difference | null>(null);
  const [activeRadar, setActiveRadar] = useState<RadarQuadrant | null>(null);
  const [shieldBlockedNotice, setShieldBlockedNotice] = useState<boolean>(false);
  const [levelCoinsEarned, setLevelCoinsEarned] = useState<number>(0);

  // Collectible Relics State
  const [discoveredRelicIds, setDiscoveredRelicIds] = useState<string[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_RELICS);
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
  const [isRelicMuseumOpen, setIsRelicMuseumOpen] = useState<boolean>(false);
  const [hasUnreadRelics, setHasUnreadRelics] = useState<boolean>(false);

  // Check if current level has a secret collectible relic
  const currentLevelHiddenRelic = ALL_COLLECTIBLE_RELICS.find(r => r.hiddenLevelId === currentLevel.id) || null;

  // Lore & Modals State
  const [activeClueToast, setActiveClueToast] = useState<Difference | null>(null);
  const [isLevelCompleteOpen, setIsLevelCompleteOpen] = useState<boolean>(false);
  const [isGameOverOpen, setIsGameOverOpen] = useState<boolean>(false);
  const [isJournalOpen, setIsJournalOpen] = useState<boolean>(false);
  const [isLevelSelectOpen, setIsLevelSelectOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [hasNewStageUnlocked, setHasNewStageUnlocked] = useState<boolean>(false);
  const [isShopOpen, setIsShopOpen] = useState<boolean>(false);
  const [hasUnreadJournal, setHasUnreadJournal] = useState<boolean>(false);

  // Continuous Procedural Orchestral BGM State
  const [isBgmPlaying, setIsBgmPlaying] = useState<boolean>(() => sound.getBGMEnabled());

  // Flying Coins Particle Bursts & Counter Bounce
  const [coinBursts, setCoinBursts] = useState<CoinBurstEvent[]>([]);
  const [isCoinBouncing, setIsCoinBouncing] = useState<boolean>(false);

  // Daily Challenge State & Modal
  const [isDailyModalOpen, setIsDailyModalOpen] = useState<boolean>(false);
  const [isDailyActive, setIsDailyActive] = useState<boolean>(false);
  const [hasUnreadDaily, setHasUnreadDaily] = useState<boolean>(() => hasPendingDaily());

  // Explorer Avatar & Wardrobe State
  const [explorerProfile, setExplorerProfile] = useState<ExplorerProfile>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_AVATAR);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {}
    }
    return {
      avatarId: 'samira',
      playerName: EXPLORERS.samira.name,
      equippedOutfitId: 'samira_base',
      equippedHeadgearId: null,
      equippedToolId: null,
      equippedTalismanId: null,
      unlockedOutfitIds: ['samira_base'],
      unlockedAccessoryIds: [],
    };
  });

  const [hasCompletedAvatarSetup, setHasCompletedAvatarSetup] = useState<boolean>(() => {
    return !!localStorage.getItem(STORAGE_KEY_AVATAR);
  });

  const initialView = urlParams?.get('view');

  const [hasCompletedTutorial, setHasCompletedTutorial] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEY_TUTORIAL) === 'true';
  });

  const [isSplashVisible, setIsSplashVisible] = useState<boolean>(() => {
    if (
      initialView === 'avatar' ||
      initialView === 'wardrobe' ||
      initialView === 'game' ||
      initialView === 'prologue' ||
      initialView === 'tutorial' ||
      initialView === 'map'
    )
      return false;
    return true;
  });
  const [isAvatarCreatorOpen, setIsAvatarCreatorOpen] = useState<boolean>(() => initialView === 'avatar');
  const [isWardrobeOpen, setIsWardrobeOpen] = useState<boolean>(() => initialView === 'wardrobe');
  const [isPrologueOpen, setIsPrologueOpen] = useState<boolean>(() => initialView === 'prologue');
  const [isTutorialOpen, setIsTutorialOpen] = useState<boolean>(() => initialView === 'tutorial');
  const [isTreasureMapOpen, setIsTreasureMapOpen] = useState<boolean>(() => initialView === 'map');
  const [isExpeditionHubOpen, setIsExpeditionHubOpen] = useState<boolean>(false);
  const [activeStageBriefing, setActiveStageBriefing] = useState<number | null>(() => {
    if (initialView === 'briefing') return 1;
    return null;
  });
  const [seenStageBriefings, setSeenStageBriefings] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_SEEN_BRIEFINGS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {}
    }
    return [];
  });

  // Active Explorer Perks Calculation
  const activeOutfit = ALL_OUTFITS.find(o => o.id === explorerProfile.equippedOutfitId);
  const activeHeadgear = ALL_ACCESSORIES.find(a => a.id === explorerProfile.equippedHeadgearId);
  const activeTool = ALL_ACCESSORIES.find(a => a.id === explorerProfile.equippedToolId);
  const activeTalisman = ALL_ACCESSORIES.find(a => a.id === explorerProfile.equippedTalismanId);

  const coinBonusPercent =
    (activeOutfit?.perk.type === 'coin_boost' ? activeOutfit.perk.value : 0) +
    (activeHeadgear?.perk?.type === 'coin_boost' ? activeHeadgear.perk.value : 0) +
    (activeTool?.perk?.type === 'coin_boost' ? activeTool.perk.value : 0) +
    (activeTalisman?.perk?.type === 'coin_boost' ? activeTalisman.perk.value : 0);

  const freezeBonusSeconds =
    (activeOutfit?.perk.type === 'freeze_boost' ? activeOutfit.perk.value : 0) +
    (activeHeadgear?.perk?.type === 'freeze_boost' ? activeHeadgear.perk.value : 0) +
    (activeTool?.perk?.type === 'freeze_boost' ? activeTool.perk.value : 0) +
    (activeTalisman?.perk?.type === 'freeze_boost' ? activeTalisman.perk.value : 0);

  const hasPassiveFreeShield =
    activeOutfit?.perk.type === 'free_shield' ||
    activeTool?.perk?.type === 'free_shield';

  // Persistent Progress: Completed Level IDs & Discovered Difference Clues
  const [completedLevelIds, setCompletedLevelIds] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
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
    const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
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

  // Settings
  const [settings, setSettings] = useState<GameSettings>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_SETTINGS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // Fallback default
      }
    }
    return {
      soundEnabled: true,
      vibrationEnabled: true,
      zenMode: false,
      layoutMode: 'vertical',
    };
  });

  // Sync settings with audio manager
  useEffect(() => {
    sound.setEnabled(settings.soundEnabled);
  }, [settings.soundEnabled]);

  // Save progress
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY_PROGRESS,
      JSON.stringify({
        currentLevelId,
        completedLevelIds,
        discoveredClues,
      })
    );
  }, [currentLevelId, completedLevelIds, discoveredClues]);

  // Save economy & inventory
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_ECONOMY, JSON.stringify({ coins }));
  }, [coins]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_INVENTORY, JSON.stringify(inventory));
  }, [inventory]);

  // Save relics
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_RELICS, JSON.stringify(discoveredRelicIds));
  }, [discoveredRelicIds]);

  // Save settings
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(settings));
  }, [settings]);

  // Save explorer avatar profile
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_AVATAR, JSON.stringify(explorerProfile));
  }, [explorerProfile]);

  // Timer Tick (Frozen when freeze power-up is running or modal open)
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    const isPaused =
      !isTimerRunning ||
      isTimeFrozen ||
      isSplashVisible ||
      isAvatarCreatorOpen ||
      isWardrobeOpen ||
      isPrologueOpen ||
      isTutorialOpen ||
      isLevelCompleteOpen ||
      isGameOverOpen ||
      isJournalOpen ||
      isLevelSelectOpen ||
      isSettingsOpen ||
      isTreasureMapOpen ||
      isShopOpen ||
      isRelicMuseumOpen ||
      isRelicFoundModalOpen ||
      isDailyModalOpen;

    if (!isPaused) {
      interval = setInterval(() => {
        setTimeElapsed(t => t + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [
    isTimerRunning,
    isTimeFrozen,
    isSplashVisible,
    isAvatarCreatorOpen,
    isWardrobeOpen,
    isPrologueOpen,
    isTutorialOpen,
    isLevelCompleteOpen,
    isGameOverOpen,
    isJournalOpen,
    isLevelSelectOpen,
    isSettingsOpen,
    isTreasureMapOpen,
    isShopOpen,
    isRelicMuseumOpen,
    isRelicFoundModalOpen,
    isDailyModalOpen,
  ]);

  // Auto-ignite procedural orchestral BGM on first user interaction (compliant with mobile autoplay policies)
  useEffect(() => {
    const handleFirstGesture = () => {
      if (sound.getBGMEnabled()) {
        sound.startBGM(currentLevel.chapterNumber <= 3 ? 'exploration' : 'excavation');
        setIsBgmPlaying(true);
      }
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };

    window.addEventListener('pointerdown', handleFirstGesture);
    window.addEventListener('keydown', handleFirstGesture);
    return () => {
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };
  }, [currentLevel.chapterNumber]);

  // Adjust theme dynamically when switching chapters
  useEffect(() => {
    sound.setBGMTheme(currentLevel.chapterNumber <= 3 ? 'exploration' : 'excavation');
  }, [currentLevel.chapterNumber]);

  const handleToggleBgm = useCallback(() => {
    const newState = sound.toggleBGM();
    setIsBgmPlaying(newState);
  }, []);

  const handleCoinBurstComplete = useCallback((burstId: string) => {
    setCoinBursts(prev => prev.filter(b => b.id !== burstId));
  }, []);

  const handleCoinLanded = useCallback(() => {
    setIsCoinBouncing(true);
    setTimeout(() => setIsCoinBouncing(false), 450);
  }, []);

  const handleStartDailyLevel = useCallback((levelId: number) => {
    setIsDailyActive(true);
    setIsDailyModalOpen(false);
    loadLevel(levelId);
  }, []);

  // Freeze Time Countdown Tick (20 seconds duration)
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

  // Reset state on level switch
  const loadLevel = useCallback((levelId: number) => {
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
    setIsLevelCompleteOpen(false);
    setIsGameOverOpen(false);
    setIsTimerRunning(true);
  }, [hasPassiveFreeShield]);

  // Handle Finding a Difference
  const handleDifferenceClick = useCallback(
    (
      diff: Difference,
      _clickPercentage?: { x: number; y: number },
      _imageIndex?: 0 | 1,
      screenPos?: { x: number; y: number }
    ) => {
      if (foundDifferenceIds.includes(diff.id)) return;

      // Sound & Haptics
      sound.playSuccess();
      triggerHaptic('success', settings.vibrationEnabled);

      // Trigger flying coin particles directly from the screen click coordinate!
      if (screenPos) {
        setCoinBursts(prev => [
          ...prev,
          {
            id: `${Date.now()}_${Math.random()}`,
            startX: screenPos.x,
            startY: screenPos.y,
            count: 8,
          },
        ]);
      }

      // Award coins with explorer perk bonus!
      const baseCoins = 20;
      const earnedCoins = Math.round(baseCoins * (1 + coinBonusPercent / 100));
      setCoins(c => c + earnedCoins);
      setLevelCoinsEarned(c => c + earnedCoins);

      // Add to found
      const nextFound = [...foundDifferenceIds, diff.id];
      setFoundDifferenceIds(nextFound);

      // Add to discovered lore clues
      if (!discoveredClues.includes(diff.id)) {
        setDiscoveredClues(prev => [...prev, diff.id]);
        setHasUnreadJournal(true);
      }

      // Show Lore Toast
      setActiveClueToast(diff);

      // Clear active hint or radar if this was the targeted diff
      if (activeHint && activeHint.id === diff.id) {
        setActiveHint(null);
      }
      if (activeRadar && activeRadar.targetDiffId === diff.id) {
        setActiveRadar(null);
      }

      // Check for Level Completion (all 10 differences found)
      if (nextFound.length >= currentLevel.differences.length) {
        setIsTimerRunning(false);
        setIsTimeFrozen(false);

        // Calculate time-based 3-star speed bonus coins:
        // <= 105s (1:45) = 3 stars -> +100 coins
        // <= 210s (3:30) = 2 stars -> +60 coins
        // > 210s = 1 star -> +30 coins
        const starBonus = timeElapsed <= 105 ? 100 : timeElapsed <= 210 ? 60 : 30;
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

        setCoins(c => c + totalBonus);
        setLevelCoinsEarned(c => c + totalBonus);

        if (!completedLevelIds.includes(currentLevel.id)) {
          setCompletedLevelIds(prev => [...prev, currentLevel.id]);
          if (isMilestone) {
            setHasNewStageUnlocked(true);
          }
        }
        setTimeout(() => {
          setIsLevelCompleteOpen(true);
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
      settings.vibrationEnabled,
      coinBonusPercent,
      isDailyActive,
    ]
  );

  // Handle Finding a Secret Collectible Relic
  const handleDiscoverRelic = useCallback(
    (relic: CollectibleRelic) => {
      if (discoveredRelicIds.includes(relic.id)) return;

      setDiscoveredRelicIds(prev => [...prev, relic.id]);
      setCoins(c => c + relic.coinReward);
      setLevelCoinsEarned(c => c + relic.coinReward);
      sound.playRelicFound();
      triggerHaptic('success', settings.vibrationEnabled);

      setActiveFoundRelic(relic);
      setIsRelicFoundModalOpen(true);
      setHasUnreadRelics(true);
    },
    [discoveredRelicIds, settings.vibrationEnabled]
  );

  const handleDismissClueToast = useCallback(() => {
    setActiveClueToast(null);
  }, []);

  // Handle Error Click (Wrong location)
  const handleErrorClick = useCallback(() => {
    // Check if protective shield is active
    if (isShieldActive) {
      setIsShieldActive(false);
      sound.playShieldBreak();
      triggerHaptic('medium', settings.vibrationEnabled);
      setShieldBlockedNotice(true);
      setTimeout(() => setShieldBlockedNotice(false), 2500);
      return;
    }

    sound.playError();
    triggerHaptic('error', settings.vibrationEnabled);
    setErrorsCount(e => e + 1);

    if (!settings.zenMode) {
      setLives(prevLives => {
        const nextLives = prevLives - 1;
        if (nextLives <= 0) {
          setIsTimerRunning(false);
          setIsGameOverOpen(true);
          return 0;
        }
        return nextLives;
      });
    }
  }, [isShieldActive, settings.vibrationEnabled, settings.zenMode]);

  // Handle Power-Up Usage from bottom bar
  const handleUsePowerUp = useCallback(
    (type: PowerUpType) => {
      if (type === 'freeze_time') {
        if (inventory.freeze_time <= 0 || isTimeFrozen) return;
        setInventory(inv => ({ ...inv, freeze_time: inv.freeze_time - 1 }));
        setIsTimeFrozen(true);
        setFreezeSecondsLeft(20 + freezeBonusSeconds);
        sound.playFreeze();
        triggerHaptic('medium', settings.vibrationEnabled);
      } else if (type === 'compass_radar') {
        if (inventory.compass_radar <= 0) return;
        const unfound = currentLevel.differences.find(d => !foundDifferenceIds.includes(d.id));
        if (!unfound) return;
        setInventory(inv => ({ ...inv, compass_radar: inv.compass_radar - 1 }));
        const quadX = Math.max(2, Math.min(68, unfound.x - 15));
        const quadY = Math.max(2, Math.min(68, unfound.y - 15));
        setActiveRadar({
          x: quadX,
          y: quadY,
          width: 30,
          height: 30,
          targetDiffId: unfound.id,
        });
        sound.playCompass();
        triggerHaptic('medium', settings.vibrationEnabled);
        setTimeout(() => {
          setActiveRadar(null);
        }, 8000);
      } else if (type === 'hint') {
        if (inventory.hint <= 0) return;
        const unfound = currentLevel.differences.find(d => !foundDifferenceIds.includes(d.id));
        if (!unfound) return;
        setInventory(inv => ({ ...inv, hint: inv.hint - 1 }));
        sound.playHint();
        triggerHaptic('medium', settings.vibrationEnabled);
        setActiveHint(unfound);
        setTimeout(() => {
          setActiveHint(null);
        }, 6000);
      } else if (type === 'error_shield') {
        if (inventory.error_shield <= 0 || isShieldActive) return;
        setInventory(inv => ({ ...inv, error_shield: inv.error_shield - 1 }));
        setIsShieldActive(true);
        sound.playShield();
        triggerHaptic('medium', settings.vibrationEnabled);
      }
    },
    [
      inventory,
      isTimeFrozen,
      isShieldActive,
      currentLevel.differences,
      foundDifferenceIds,
      settings.vibrationEnabled,
    ]
  );

  // Handle Quick In-Bar Purchase with Coins
  const handleQuickBuy = useCallback(
    (type: PowerUpType) => {
      const PRICES: Record<PowerUpType, number> = {
        freeze_time: 60,
        compass_radar: 40,
        hint: 50,
        error_shield: 45,
      };
      const price = PRICES[type];
      if (coins >= price) {
        setCoins(c => c - price);
        setInventory(inv => ({ ...inv, [type]: inv[type] + 1 }));
        sound.playCoin();
        triggerHaptic('success', settings.vibrationEnabled);
      } else {
        setIsShopOpen(true);
      }
    },
    [coins, settings.vibrationEnabled]
  );

  // Handle Store Item Purchase
  const handleBuyShopItem = useCallback(
    (item: ShopItem): boolean => {
      if (coins < item.coinPrice) return false;
      setCoins(c => c - item.coinPrice);

      if (item.type === 'bundle' && item.contents) {
        setInventory(inv => {
          const next = { ...inv };
          item.contents?.forEach(entry => {
            next[entry.type] = (next[entry.type] || 0) + entry.count;
          });
          return next;
        });
      } else if (item.powerUpType) {
        setInventory(inv => ({
          ...inv,
          [item.powerUpType!]: inv[item.powerUpType!] + item.quantity,
        }));
      }
      return true;
    },
    [coins]
  );

  // Emergency Expedition Relief
  const handleClaimEmergencyFunds = useCallback(() => {
    setCoins(c => c + 60);
  }, []);

  // Stage Lore Briefing Handlers
  const handleOpenStageBriefing = useCallback((stageNumber: number) => {
    setIsTimerRunning(false);
    setActiveStageBriefing(stageNumber);
  }, []);

  const handleCloseStageBriefing = useCallback(() => {
    setActiveStageBriefing(null);
    setIsTimerRunning(true);
  }, []);

  const handleStartStageFromBriefing = useCallback((stageNumber: number) => {
    setActiveStageBriefing(null);
    setSeenStageBriefings(prev => {
      if (prev.includes(stageNumber)) return prev;
      const next = [...prev, stageNumber];
      localStorage.setItem(STORAGE_KEY_SEEN_BRIEFINGS, JSON.stringify(next));
      return next;
    });

    const firstLevelInStage = (stageNumber - 1) * 10 + 1;
    if (currentLevel.id !== firstLevelInStage) {
      loadLevel(firstLevelInStage);
    } else {
      setIsTimerRunning(true);
    }
  }, [currentLevel.id, loadLevel]);

  // Next Level Handler: Triggers Stage Lore Briefing whenever entering a new Stage (every 10 levels)!
  const handleNextLevel = () => {
    const currentIndex = levels.findIndex(l => l.id === currentLevelId);
    if (currentIndex < levels.length - 1) {
      const nextLevel = levels[currentIndex + 1];
      const isNewStage = nextLevel.chapterNumber !== currentLevel.chapterNumber;
      if (isNewStage) {
        setIsLevelCompleteOpen(false);
        setIsTimerRunning(false);
        setActiveStageBriefing(nextLevel.chapterNumber);
        return;
      }
      loadLevel(nextLevel.id);
    } else {
      loadLevel(levels[0].id);
    }
  };

  // Splash & Avatar Handlers
  const handleSplashStart = useCallback(() => {
    setIsSplashVisible(false);
    if (!hasCompletedAvatarSetup) {
      setIsAvatarCreatorOpen(true);
    }
  }, [hasCompletedAvatarSetup]);

  const handleConfirmAvatarProfile = useCallback((profile: ExplorerProfile) => {
    setExplorerProfile(profile);
    setHasCompletedAvatarSetup(true);
    localStorage.setItem(STORAGE_KEY_AVATAR, JSON.stringify(profile));
    setIsAvatarCreatorOpen(false);

    // Launch the cinematic prologue if tutorial has not been completed yet!
    if (!hasCompletedTutorial) {
      setIsPrologueOpen(true);
    } else {
      setIsTimerRunning(true);
    }
  }, []);

  const handlePrologueComplete = useCallback(() => {
    setIsPrologueOpen(false);
    setIsTutorialOpen(true);
  }, []);

  const handleTutorialComplete = useCallback(() => {
    setIsTutorialOpen(false);
    setHasCompletedTutorial(true);
    localStorage.setItem(STORAGE_KEY_TUTORIAL, 'true');
    setIsTreasureMapOpen(false);
    loadLevel(1);
    setIsTimerRunning(true);
  }, [loadLevel]);

  return (
    <div className="w-full h-screen h-[100dvh] flex items-center justify-center bg-[#070402] text-stone-100 overflow-hidden font-sans select-none relative">
      {/* Background Ambience on Desktop (Vintage Explorer Vignette) */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none hidden md:block"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(217, 119, 6, 0.15) 0%, transparent 75%)',
        }}
      />

      {/* The Mobile Game Viewport Container (100% on phones, max-w-[440px] smartphone shell on desktop) */}
      <div className="w-full max-w-[440px] h-full h-[100dvh] flex flex-col bg-[#0f0905] relative shadow-[0_0_60px_rgba(0,0,0,0.95)] md:border-x-2 md:border-amber-900/60 overflow-hidden">
        {/* Indiana Jones Mobile Header with 10 Difference Indicators, Stopwatch, Coins & Campo Base Hub Button */}
        <Header
          currentLevel={currentLevel}
          foundCount={foundDifferenceIds.length}
          totalDifferences={currentLevel.differences.length}
          lives={lives}
          zenMode={settings.zenMode}
          timeElapsed={timeElapsed}
          isTimeFrozen={isTimeFrozen}
          freezeSecondsLeft={freezeSecondsLeft}
          coins={coins}
          isShieldActive={isShieldActive}
          profile={explorerProfile}
          onOpenHub={() => setIsExpeditionHubOpen(true)}
          hasHubNotification={
            hasUnreadDaily ||
            hasUnreadRelics ||
            hasNewStageUnlocked ||
            hasUnreadJournal ||
            !seenStageBriefings.includes(currentLevel.chapterNumber)
          }
          isCoinBouncing={isCoinBouncing}
          onOpenShop={() => setIsShopOpen(true)}
        />

        {/* Synchronized Viewport Area: Image A on Top, Image B on Bottom (Shielded during setup/prologue/splash) */}
        {!hasCompletedAvatarSetup || isPrologueOpen || isSplashVisible ? (
          <div className="flex-1 min-h-0 w-full flex flex-col items-center justify-center bg-gradient-to-b from-stone-950 via-[#0e0a07] to-stone-950 rounded-2xl border border-amber-900/30 p-6 select-none my-1">
            <div className="flex flex-col items-center gap-3 opacity-40 animate-pulse">
              <Compass className="w-16 h-16 text-amber-400 animate-[spin_30s_linear_infinite]" />
              <div className="text-center">
                <span className="text-xs font-serif tracking-[0.25em] text-amber-300 uppercase block font-bold">
                  Spedizione Archeologica
                </span>
                <span className="text-[10px] text-amber-500/80 font-sans tracking-wide">
                  Preparazione sito di scavo in corso...
                </span>
              </div>
            </div>
          </div>
        ) : (
          <ImageComparisonView
            imageA={currentLevel.imageA}
            imageB={currentLevel.imageB}
            differences={currentLevel.differences}
            foundDifferenceIds={foundDifferenceIds}
            activeHint={activeHint}
            activeRadar={activeRadar}
            isTimeFrozen={isTimeFrozen}
            hiddenRelic={currentLevelHiddenRelic}
            isRelicDiscovered={currentLevelHiddenRelic ? discoveredRelicIds.includes(currentLevelHiddenRelic.id) : true}
            onDiscoverRelic={handleDiscoverRelic}
            onDifferenceClick={handleDifferenceClick}
            onErrorClick={handleErrorClick}
            layoutMode={settings.layoutMode}
          />
        )}

        {/* Floating Shield Blocked Notice */}
        {shieldBlockedNotice && (
          <div className="absolute top-24 left-1/2 -translate-x-1/2 z-40 w-[90%] bg-indigo-900/95 border border-indigo-400 text-indigo-200 px-3 py-1.5 rounded-xl shadow-2xl flex items-center justify-center gap-2 animate-bounce">
            <Shield className="w-3.5 h-3.5 text-indigo-300 shrink-0" />
            <span className="text-[11px] font-bold">
              Scudo del Guardiano: Errore parato senza perdere vite!
            </span>
          </div>
        )}

        {/* Bottom Explorer Tool Belt (Freeze 20s, Compass Radar, Hint, Shield, Shop) */}
        <PowerUpBar
          inventory={inventory}
          coins={coins}
          isTimeFrozen={isTimeFrozen}
          freezeSecondsLeft={freezeSecondsLeft}
          isShieldActive={isShieldActive}
          onUsePowerUp={handleUsePowerUp}
          onQuickBuy={handleQuickBuy}
          onOpenShop={() => setIsShopOpen(true)}
        />

        {/* Floating Lore Clue Toast (Under Header) */}
        <LoreClueToast
          difference={activeClueToast}
          onDismiss={handleDismissClueToast}
        />
      </div>

      {/* Modals */}
      {isLevelCompleteOpen && (
        <LevelCompleteModal
          level={currentLevel}
          timeElapsed={timeElapsed}
          errorsCount={errorsCount}
          coinsEarned={levelCoinsEarned}
          onNextLevel={handleNextLevel}
          onReplay={() => loadLevel(currentLevel.id)}
          onOpenJournal={() => {
            setIsLevelCompleteOpen(false);
            setIsJournalOpen(true);
          }}
        />
      )}

      {isGameOverOpen && (
        <GameOverModal
          onRetry={() => loadLevel(currentLevel.id)}
          onEnableZenMode={() => {
            setSettings(s => ({ ...s, zenMode: true }));
            setIsGameOverOpen(false);
            setLives(3);
            setIsTimerRunning(true);
          }}
        />
      )}

      <ShopModal
        isOpen={isShopOpen}
        onClose={() => setIsShopOpen(false)}
        coins={coins}
        inventory={inventory}
        onBuyItem={handleBuyShopItem}
        onClaimEmergencyFunds={handleClaimEmergencyFunds}
      />

      <RelicMuseumModal
        isOpen={isRelicMuseumOpen}
        onClose={() => {
          setIsRelicMuseumOpen(false);
          setHasUnreadRelics(false);
        }}
        discoveredRelicIds={discoveredRelicIds}
      />

      <RelicFoundModal
        isOpen={isRelicFoundModalOpen}
        relic={activeFoundRelic}
        onClose={() => setIsRelicFoundModalOpen(false)}
        onOpenMuseum={() => {
          setIsRelicFoundModalOpen(false);
          setIsRelicMuseumOpen(true);
        }}
      />

      <JournalModal
        isOpen={isJournalOpen}
        onClose={() => setIsJournalOpen(false)}
        levels={levels}
        currentLevelId={currentLevel.id}
        completedLevelIds={completedLevelIds}
        discoveredDifferenceIds={discoveredClues}
      />

      <LevelSelectModal
        isOpen={isLevelSelectOpen}
        onClose={() => setIsLevelSelectOpen(false)}
        levels={levels}
        currentLevelId={currentLevel.id}
        completedLevelIds={completedLevelIds}
        onSelectLevel={id => loadLevel(id)}
      />

      <MappamondoModal
        isOpen={isTreasureMapOpen}
        onClose={() => {
          setIsTreasureMapOpen(false);
          setHasNewStageUnlocked(false);
        }}
        currentLevelId={currentLevel.id}
        completedLevelIds={completedLevelIds}
        onSelectLevel={id => loadLevel(id)}
        onOpenStageBriefing={handleOpenStageBriefing}
        profile={explorerProfile}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onUpdateSettings={newS => setSettings(s => ({ ...s, ...newS }))}
        onOpenTutorial={() => setIsTutorialOpen(true)}
        onResetProgress={() => {
          localStorage.removeItem(STORAGE_KEY_PROGRESS);
          localStorage.removeItem(STORAGE_KEY_ECONOMY);
          localStorage.removeItem(STORAGE_KEY_INVENTORY);
          localStorage.removeItem(STORAGE_KEY_RELICS);
          localStorage.removeItem(STORAGE_KEY_AVATAR);
          localStorage.removeItem(STORAGE_KEY_TUTORIAL);
          localStorage.removeItem(STORAGE_KEY_SEEN_BRIEFINGS);
          setCompletedLevelIds([]);
          setDiscoveredClues([]);
          setDiscoveredRelicIds([]);
          setCoins(150);
          setInventory({
            freeze_time: 2,
            compass_radar: 2,
            hint: 3,
            error_shield: 1,
          });
          setExplorerProfile({
            avatarId: 'samira',
            playerName: EXPLORERS.samira.name,
            equippedOutfitId: 'samira_base',
            equippedHeadgearId: null,
            equippedToolId: null,
            equippedTalismanId: null,
            unlockedOutfitIds: ['samira_base'],
            unlockedAccessoryIds: [],
          });
          setHasCompletedAvatarSetup(false);
          setHasCompletedTutorial(false);
          loadLevel(1);
        }}
      />

      {/* Central Expedition Headquarters / Campo Base Modal */}
      <ExpeditionHubModal
        isOpen={isExpeditionHubOpen}
        onClose={() => setIsExpeditionHubOpen(false)}
        currentLevel={currentLevel}
        profile={explorerProfile}
        coins={coins}
        discoveredRelicCount={discoveredRelicIds.length}
        totalRelics={ALL_COLLECTIBLE_RELICS.length}
        hasUnreadDaily={hasUnreadDaily}
        hasUnreadRelics={hasUnreadRelics}
        hasNewStageUnlocked={hasNewStageUnlocked}
        hasUnreadJournal={hasUnreadJournal}
        hasUnreadBriefing={!seenStageBriefings.includes(currentLevel.chapterNumber)}
        isBgmPlaying={isBgmPlaying}
        onToggleBgm={handleToggleBgm}
        onOpenTreasureMap={() => {
          setIsExpeditionHubOpen(false);
          setIsTreasureMapOpen(true);
          setHasNewStageUnlocked(false);
        }}
        onOpenMuseum={() => {
          setIsExpeditionHubOpen(false);
          setIsRelicMuseumOpen(true);
          setHasUnreadRelics(false);
        }}
        onOpenWardrobe={() => {
          setIsExpeditionHubOpen(false);
          setIsWardrobeOpen(true);
        }}
        onOpenDaily={() => {
          setIsExpeditionHubOpen(false);
          setIsDailyModalOpen(true);
        }}
        onOpenJournal={() => {
          setIsExpeditionHubOpen(false);
          setIsJournalOpen(true);
          setHasUnreadJournal(false);
        }}
        onOpenStageBriefing={() => {
          setIsExpeditionHubOpen(false);
          handleOpenStageBriefing(currentLevel.chapterNumber);
        }}
        onOpenShop={() => {
          setIsExpeditionHubOpen(false);
          setIsShopOpen(true);
        }}
        onOpenSettings={() => {
          setIsExpeditionHubOpen(false);
          setIsSettingsOpen(true);
        }}
        onOpenLevelSelect={() => {
          setIsExpeditionHubOpen(false);
          setIsLevelSelectOpen(true);
        }}
      />

      {/* AAA Splash Screen with "Tocca per iniziare" */}
      {isSplashVisible && (
        <SplashScreen onStart={handleSplashStart} />
      )}

      {/* Explorer Avatar Creation & Selection Modal */}
      <AvatarCreatorModal
        isOpen={isAvatarCreatorOpen}
        onConfirm={handleConfirmAvatarProfile}
        currentProfile={explorerProfile}
      />

      {/* Explorer Wardrobe & Coin Upgrades Modal */}
      <WardrobeModal
        isOpen={isWardrobeOpen}
        onClose={() => setIsWardrobeOpen(false)}
        profile={explorerProfile}
        coins={coins}
        currentLevelId={currentLevel.id}
        discoveredRelicCount={discoveredRelicIds.length}
        onUpdateProfile={p => setExplorerProfile(p)}
        onSpendCoins={amount => {
          if (coins >= amount) {
            setCoins(c => c - amount);
            return true;
          }
          return false;
        }}
        onOpenAvatarCreator={() => setIsAvatarCreatorOpen(true)}
      />

      {/* Cinematic Prologue Cutscene (Google Veo Video / In-Engine Motion Graphics) */}
      <PrologueCutsceneModal
        isOpen={isPrologueOpen}
        profile={explorerProfile}
        onComplete={handlePrologueComplete}
      />

      {/* High-Level Guided Expedition Graphic Tutorial (Guided by Avatar Face & Spotlight) */}
      <ExpeditionTutorialModal
        isOpen={isTutorialOpen && !isPrologueOpen}
        profile={explorerProfile}
        onComplete={handleTutorialComplete}
      />

      {/* Immersive 12-Stage Expedition Lore & Mission Briefing Dossier */}
      {activeStageBriefing !== null && (
        <StageLoreBriefingModal
          isOpen={activeStageBriefing !== null}
          stageNumber={activeStageBriefing}
          profile={explorerProfile}
          onClose={handleCloseStageBriefing}
          onStartStage={handleStartStageFromBriefing}
        />
      )}

      {/* AAA Flying Coins & Golden Sparks Particles */}
      <FlyingCoinParticles
        bursts={coinBursts}
        onBurstComplete={handleCoinBurstComplete}
        onCoinLanded={handleCoinLanded}
      />

      {/* 30-Day Expedition Daily Challenge & Streak Modal */}
      <DailyExpeditionModal
        isOpen={isDailyModalOpen}
        onClose={() => setIsDailyModalOpen(false)}
        onStartDailyLevel={handleStartDailyLevel}
        coins={coins}
      />
    </div>
  );
};

export default App;
