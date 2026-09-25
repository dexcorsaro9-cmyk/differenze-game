import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Header } from './components/Header';
import { HiddenObjectView } from './components/HiddenObjectView';
import { PowerUpBar } from './components/PowerUpBar';
import { ShopModal } from './components/ShopModal';
import { RelicFoundModal } from './components/RelicFoundModal';
import { LoreClueToast } from './components/LoreClueToast';
import { LevelCompleteModal } from './components/LevelCompleteModal';
import { GameOverModal } from './components/GameOverModal';
import { JournalModal } from './components/JournalModal';
import { LevelSelectModal } from './components/LevelSelectModal';
import { SettingsModal } from './components/SettingsModal';
import { SplashScreen } from './components/SplashScreen';
import { CompanyLogoIntro } from './components/CompanyLogoIntro';
import { AvatarCreatorModal } from './components/AvatarCreatorModal';
import { WardrobeModal } from './components/WardrobeModal';
import { MedalsCabinetModal } from './components/MedalsCabinetModal';
import { RelicMuseumModal } from './components/RelicMuseumModal';
import { StageLoreBriefingModal } from './components/StageLoreBriefingModal';
import { MappamondoModal } from './components/MappamondoModal';
import { ExpeditionPassportModal } from './components/ExpeditionPassportModal';
import { DailyExpeditionModal } from './components/DailyExpeditionModal';
import { ExpeditionHubModal } from './components/ExpeditionHubModal';
import { ExpeditionTutorialModal } from './components/ExpeditionTutorialModal';
import { GrandFinaleModal } from './components/GrandFinaleModal';
import { PWAInstallModal } from './components/PWAInstallModal';
import { FlyingCoinParticles } from './components/FlyingCoinParticles';
import { ErrorBoundary } from './components/ErrorBoundary';
import { WelcomeTelegramModal } from './components/WelcomeTelegramModal';
import { ExpeditionCertificateModal } from './components/ExpeditionCertificateModal';
import { PrologueCutsceneModal } from './components/PrologueCutsceneModal';
import { ExpeditionDilemmaModal } from './components/ExpeditionDilemmaModal';
import { EXPEDITION_DILEMMAS, type DilemmaChoice } from './data/expeditionDilemmas';
import { OfflineStatusToast } from './components/OfflineStatusToast';
import { usePWA } from './hooks/usePWA';
import { useEconomy } from './hooks/useEconomy';
import { useGameSession } from './hooks/useGameSession';
import { useModalManager } from './hooks/useModalManager';
import { useTranslation } from './i18n/LanguageContext';
import { getLocalizedMedal } from './i18n';
import { hasPendingDaily } from './utils/dailyChallenge';
import { safeStorage } from './utils/storage';
import { ALL_COLLECTIBLE_RELICS } from './data/collectiblesData';
import { ALL_ACHIEVEMENTS } from './data/achievementsData';
import { CONSULAR_VISAS } from './data/passportData';
import { normalizeExplorerProfile, type ExplorerProfile } from './data/avatarData';
import { useExplorerPerks } from './hooks/useExplorerPerks';
import { useMedalWatcher } from './hooks/useMedalWatcher';
import { useSaveSync } from './hooks/useSaveSync';
import {
  usePersistentJson,
  usePersistentFlag,
  hasStoredValue,
} from './hooks/usePersistentState';
import type { GameSettings } from './types/game';
import { isSealedLevel, DEFAULT_SEALED_MODE } from './data/sealedLevels';
import { sound } from './utils/audio';
import { triggerHaptic } from './utils/haptics';
import { Shield, Award, Compass, Play } from 'lucide-react';

export const App: React.FC = () => {
  const { t, language, localizeDifference, localizeDifferences } = useTranslation();

  // Persistence keys
  const STORAGE_KEY_SETTINGS = 'differenze_settings_v1';
  const STORAGE_KEY_AVATAR = 'differenze_avatar_v1';
  const STORAGE_KEY_TUTORIAL = 'differenze_tutorial_v1';
  const STORAGE_KEY_SEEN_BRIEFINGS = 'differenze_seen_briefings_v1';
  const STORAGE_KEY_EXPEDITION_CHOICES = 'differenze_expedition_choices_v1';

  // Explorer Avatar & Wardrobe Profile State
  const [explorerProfile, setExplorerProfile] = usePersistentJson<ExplorerProfile>(
    STORAGE_KEY_AVATAR,
    normalizeExplorerProfile(null),
    parsed => normalizeExplorerProfile(parsed as Partial<ExplorerProfile> | null)
  );

  const [hasCompletedAvatarSetup, setHasCompletedAvatarSetup] = useState<boolean>(() =>
    hasStoredValue(STORAGE_KEY_AVATAR)
  );

  const [hasCompletedTutorial, setHasCompletedTutorial] = usePersistentFlag(STORAGE_KEY_TUTORIAL);

  const [seenStageBriefings, setSeenStageBriefings] = usePersistentJson<number[]>(
    STORAGE_KEY_SEEN_BRIEFINGS,
    []
  );

  // Active Notification Flags
  const [hasUnreadDaily, setHasUnreadDaily] = useState<boolean>(() => hasPendingDaily());
  const [hasUnreadRelics, setHasUnreadRelics] = useState<boolean>(false);
  const [hasNewStageUnlocked, setHasNewStageUnlocked] = useState<boolean>(false);
  const [hasUnreadJournal, setHasUnreadJournal] = useState<boolean>(false);
  const [isDailyActive, setIsDailyActive] = useState<boolean>(false);
  const [isTelegramOpen, setIsTelegramOpen] = useState<boolean>(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState<boolean>(false);

  // Settings State
  const [settings, setSettings] = usePersistentJson<GameSettings>(
    STORAGE_KEY_SETTINGS,
    {
      soundEnabled: true,
      vibrationEnabled: true,
      zenMode: false,
      layoutMode: 'vertical',
      sealedMode: DEFAULT_SEALED_MODE,
    },
    parsed => ({
      soundEnabled: true,
      vibrationEnabled: true,
      zenMode: false,
      layoutMode: 'vertical',
      sealedMode: DEFAULT_SEALED_MODE,
      ...(parsed as Partial<GameSettings> | null),
    })
  );

  // Modal Manager Hook
  const modals = useModalManager();

  // Economy Hook
  const economy = useEconomy(() => modals.setIsShopOpen(true));

  // Equipment perks across the eight RPG slots, plus any active set synergies
  const {
    primaryActiveSet,
    coinBonusPercent,
    freezeBonusSeconds,
    radarBonusPercent,
    hasPassiveFreeShield,
  } = useExplorerPerks(explorerProfile);

  // Game Session Hook
  const game = useGameSession({
    inventory: economy.inventory,
    setInventory: economy.setInventory,
    onEarnCoins: amount => economy.setCoins(c => c + amount),
    onUnlockMedal: economy.unlockMedal,
    onTriggerCoinBurst: economy.triggerCoinBurst,
    coinBonusPercent,
    freezeBonusSeconds,
    radarBonusPercent,
    hasPassiveFreeShield,
    vibrationEnabled: settings.vibrationEnabled,
    zenMode: settings.zenMode,
    isAnyModalOpen: modals.isAnyModalOpen,
    onOpenLevelComplete: () => modals.setIsLevelCompleteOpen(true),
    onOpenGameOver: () => modals.setIsGameOverOpen(true),
    isDailyActive,
    setIsDailyActive,
    setHasUnreadDaily,
    setHasNewStageUnlocked,
    setHasUnreadJournal,
    setHasUnreadRelics,
  });

  // Continuous Procedural Orchestral BGM State
  const [isBgmPlaying, setIsBgmPlaying] = useState<boolean>(() => sound.getBGMEnabled());
  const [customBgmTheme, setCustomBgmTheme] = useState<'auto' | 'exploration' | 'excavation' | 'sacred_temple'>('auto');

  // PWA & Offline capability hook
  const { canInstall, isInstalled, isOffline, isIOS, promptInstall } = usePWA();

  // Sync settings with audio manager & storage
  useEffect(() => {
    sound.setEnabled(settings.soundEnabled);
    safeStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    safeStorage.setItem(STORAGE_KEY_AVATAR, JSON.stringify(explorerProfile));
  }, [explorerProfile]);

  const getStageBgmTheme = (chapNum: number): 'exploration' | 'excavation' | 'sacred_temple' => {
    if (chapNum >= 9) return 'sacred_temple';
    if (chapNum >= 5) return 'excavation';
    return 'exploration';
  };

  const getActiveBgmTheme = useCallback(
    (chapNum: number): 'exploration' | 'excavation' | 'sacred_temple' => {
      if (customBgmTheme !== 'auto') return customBgmTheme;
      return getStageBgmTheme(chapNum);
    },
    [customBgmTheme]
  );

  // Auto-ignite procedural orchestral BGM on first user interaction
  useEffect(() => {
    const handleFirstGesture = () => {
      if (sound.getBGMEnabled()) {
        sound.startBGM(getActiveBgmTheme(game.currentLevel.chapterNumber));
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
  }, [game.currentLevel.chapterNumber, getActiveBgmTheme]);

  // Adjust theme dynamically when switching chapters or manual theme
  useEffect(() => {
    sound.setBGMTheme(getActiveBgmTheme(game.currentLevel.chapterNumber));
  }, [game.currentLevel.chapterNumber, getActiveBgmTheme]);

  const handleToggleBgm = useCallback(() => {
    const newState = sound.toggleBGM();
    setIsBgmPlaying(newState);
    if (newState && !sound.getBGMPlaying()) {
      sound.startBGM(getActiveBgmTheme(game.currentLevel.chapterNumber));
    }
  }, [getActiveBgmTheme, game.currentLevel.chapterNumber]);

  const handleChangeBgmTheme = useCallback(
    (theme: 'auto' | 'exploration' | 'excavation' | 'sacred_temple') => {
      setCustomBgmTheme(theme);
      const effective = theme === 'auto' ? getStageBgmTheme(game.currentLevel.chapterNumber) : theme;
      sound.setBGMTheme(effective);
      if (!isBgmPlaying) {
        sound.setBGMEnabled(true);
        sound.startBGM(effective);
        setIsBgmPlaying(true);
      }
    },
    [game.currentLevel.chapterNumber, isBgmPlaying]
  );

  // Intelligent Background Pause (Mobile Lifecycle)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (!modals.isSplashVisible && !modals.isCompanyIntroVisible && !modals.isLevelCompleteOpen && !modals.isGameOverOpen) {
          modals.setIsBackgroundPaused(true);
          sound.pauseBGM();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [modals]);

  const handleResumeFromBackground = useCallback(() => {
    sound.resumeAudioContext();
    if (sound.getBGMEnabled()) {
      sound.startBGM(getActiveBgmTheme(game.currentLevel.chapterNumber));
      setIsBgmPlaying(true);
    }
    sound.playNeedleDrop();
    triggerHaptic('tap', settings.vibrationEnabled);
    modals.setIsBackgroundPaused(false);
  }, [getActiveBgmTheme, game.currentLevel.chapterNumber, settings.vibrationEnabled, modals]);

  // Destructured so these effects depend on the exact values they read. Reaching through
  // `economy.` made the linter ask for the whole object, which changes every render.
  const { unlockMedal, coins: currentCoins } = economy;

  // Reconcile with the remote save slot on start and whenever a level is completed.
  // No backend configured means this is a no-op (see utils/saveSync.ts).
  useSaveSync(game.completedLevelIds.length);

  useMedalWatcher({
    unlockMedal,
    coins: currentCoins,
    hasFullSetSynergy: !!primaryActiveSet,
    discoveredCluesCount: game.discoveredClues.length,
    discoveredRelicsCount: game.discoveredRelicIds.length,
    currentChapterNumber: game.currentLevel.chapterNumber,
    completedLevelIds: game.completedLevelIds,
    isTreasureMapOpen: modals.isTreasureMapOpen,
  });

  // Stage Lore Briefing Handlers
  const handleOpenStageBriefing = useCallback(
    (stageNumber: number) => {
      game.setIsTimerRunning(false);
      modals.setActiveStageBriefing(stageNumber);
    },
    [game, modals]
  );

  const handleCloseStageBriefing = useCallback(() => {
    modals.setActiveStageBriefing(null);
    game.setIsTimerRunning(true);
  }, [game, modals]);

  const handleStartStageFromBriefing = useCallback(
    (stageNumber: number) => {
      modals.setActiveStageBriefing(null);
      setSeenStageBriefings(prev => {
        if (prev.includes(stageNumber)) return prev;
        const next = [...prev, stageNumber];
        safeStorage.setItem(STORAGE_KEY_SEEN_BRIEFINGS, JSON.stringify(next));
        return next;
      });

      const firstLevelInStage = (stageNumber - 1) * 10 + 1;
      if (game.currentLevel.id !== firstLevelInStage) {
        game.loadLevel(firstLevelInStage);
      } else {
        game.setIsTimerRunning(true);
      }
    },
    [game, modals, setSeenStageBriefings]
  );

  // Next Level Handler
  const handleNextLevel = useCallback(() => {
    const currentIndex = game.levels.findIndex(l => l.id === game.currentLevelId);
    if (currentIndex < game.levels.length - 1) {
      const nextLevel = game.levels[currentIndex + 1];
      const isNewStage = nextLevel.chapterNumber !== game.currentLevel.chapterNumber;
      if (isNewStage) {
        modals.setIsLevelCompleteOpen(false);
        game.setIsTimerRunning(false);
        modals.setActiveStageBriefing(nextLevel.chapterNumber);
        return;
      }
      game.loadLevel(nextLevel.id);
    } else {
      modals.setIsLevelCompleteOpen(false);
      game.setIsTimerRunning(false);
      modals.setIsGrandFinaleOpen(true);
    }
  }, [game, modals]);

  // Milestone Tactical Dilemma Handler
  const handleResolveDilemmaChoice = useCallback(
    (choice: DilemmaChoice) => {
      try {
        const saved = JSON.parse(safeStorage.getItem(STORAGE_KEY_EXPEDITION_CHOICES) || '{}');
        saved[game.currentLevel.chapterNumber] = {
          choiceId: choice.id,
          alignment: choice.alignment,
          timestamp: Date.now(),
        };
        safeStorage.setItem(STORAGE_KEY_EXPEDITION_CHOICES, JSON.stringify(saved));
      } catch (e) {
        console.error('Failed to save expedition dilemma choice', e);
      }

      if (choice.rewardType === 'coins') {
        economy.setCoins(c => c + (choice.rewardValue || 250));
      } else if (choice.rewardType === 'shield') {
        economy.setInventory(inv => ({ ...inv, error_shield: inv.error_shield + (choice.rewardValue || 1) }));
      } else if (choice.rewardType === 'hint') {
        economy.setInventory(inv => ({ ...inv, hint: inv.hint + (choice.rewardValue || 2) }));
      } else if (choice.rewardType === 'freeze') {
        economy.setInventory(inv => ({ ...inv, freeze_time: inv.freeze_time + (choice.rewardValue || 1) }));
      } else if (choice.rewardType === 'compass') {
        economy.setInventory(inv => ({ ...inv, compass_radar: inv.compass_radar + (choice.rewardValue || 1) }));
      } else {
        economy.setCoins(c => c + (choice.rewardValue || 150));
      }

      modals.setIsDilemmaOpen(false);
      handleNextLevel();
    },
    [game.currentLevel.chapterNumber, economy, modals, handleNextLevel]
  );

  // Splash & Avatar Flow Handlers
  const handleSplashStart = useCallback(() => {
    modals.setIsSplashVisible(false);
    if (settings.soundEnabled && !isBgmPlaying) {
      sound.setBGMEnabled(true);
      sound.startBGM(getActiveBgmTheme(game.currentLevel.chapterNumber));
    }
    if (!hasCompletedAvatarSetup) {
      modals.setIsAvatarCreatorOpen(true);
    } else if (!safeStorage.getItem('paititi_seen_telegram_v1')) {
      setIsTelegramOpen(true);
    } else {
      game.setIsTimerRunning(true);
    }
  }, [hasCompletedAvatarSetup, settings.soundEnabled, isBgmPlaying, getActiveBgmTheme, game, modals]);

  const handleQuickPlay = useCallback(() => {
    modals.setIsSplashVisible(false);
    if (settings.soundEnabled && isBgmPlaying) {
      sound.setBGMEnabled(true);
      sound.startBGM(getActiveBgmTheme(game.currentLevel.chapterNumber));
    }
    setHasCompletedAvatarSetup(true);
    modals.setIsAvatarCreatorOpen(false);
    modals.setIsPrologueOpen(false);
    modals.setIsTutorialOpen(false);
    if (!safeStorage.getItem('paititi_seen_telegram_v1')) {
      setIsTelegramOpen(true);
    } else {
      game.setIsTimerRunning(true);
    }
  }, [settings.soundEnabled, isBgmPlaying, getActiveBgmTheme, game, modals]);

  const handleConfirmAvatarProfile = useCallback(
    (profile: ExplorerProfile) => {
      setExplorerProfile(profile);
      setHasCompletedAvatarSetup(true);
      safeStorage.setItem(STORAGE_KEY_AVATAR, JSON.stringify(profile));
      modals.setIsAvatarCreatorOpen(false);

      if (!hasCompletedTutorial) {
        modals.setIsPrologueOpen(true);
      } else if (!safeStorage.getItem('paititi_seen_telegram_v1')) {
        setIsTelegramOpen(true);
      } else {
        game.setIsTimerRunning(true);
      }
    },
    [hasCompletedTutorial, modals, game, setExplorerProfile]
  );

  const handlePrologueComplete = useCallback(() => {
    modals.setIsPrologueOpen(false);
    if (!safeStorage.getItem('paititi_seen_telegram_v1')) {
      setIsTelegramOpen(true);
    } else {
      modals.setIsTutorialOpen(true);
    }
  }, [modals]);

  const handleCloseTelegram = useCallback(() => {
    setIsTelegramOpen(false);
    safeStorage.setItem('paititi_seen_telegram_v1', 'true');
    if (!hasCompletedTutorial) {
      modals.setIsTutorialOpen(true);
    } else {
      game.setIsTimerRunning(true);
    }
  }, [hasCompletedTutorial, modals, game]);

  const handleTutorialComplete = useCallback(() => {
    modals.setIsTutorialOpen(false);
    setHasCompletedTutorial(true);
    safeStorage.setItem(STORAGE_KEY_TUTORIAL, 'true');
    modals.setIsTreasureMapOpen(false);
    game.loadLevel(1);
    game.setIsTimerRunning(true);
  }, [modals, game, setHasCompletedTutorial]);

  const handleStartDailyLevel = useCallback(
    (levelId: number) => {
      setIsDailyActive(true);
      modals.setIsDailyModalOpen(false);
      game.loadLevel(levelId);
    },
    [game, modals]
  );

  const handleResetAllProgress = useCallback(() => {
    safeStorage.removeItem(STORAGE_KEY_SETTINGS);
    safeStorage.removeItem(STORAGE_KEY_AVATAR);
    safeStorage.removeItem(STORAGE_KEY_TUTORIAL);
    safeStorage.removeItem(STORAGE_KEY_SEEN_BRIEFINGS);
    safeStorage.removeItem(STORAGE_KEY_EXPEDITION_CHOICES);
    economy.resetEconomy();
    game.resetProgress();
    setExplorerProfile(normalizeExplorerProfile(null));
    setHasCompletedAvatarSetup(false);
    setHasCompletedTutorial(false);
    setSeenStageBriefings([]);
  }, [economy, game, setExplorerProfile, setHasCompletedTutorial, setSeenStageBriefings]);

  // Memoized localized differences & clues for current level
  // The localisers come from the language context and are replaced when a clue dictionary
  // finishes loading, so these memos recompute and pick up the translated strings.
  const localizedDifferences = useMemo(
    () => localizeDifferences(game.currentLevel.differences),
    [game.currentLevel.differences, localizeDifferences]
  );

  const localizedActiveHint = useMemo(
    () => localizeDifference(game.activeHint),
    [game.activeHint, localizeDifference]
  );

  const localizedActiveClueToast = useMemo(
    () => localizeDifference(game.activeClueToast),
    [game.activeClueToast, localizeDifference]
  );

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#070402] text-stone-100 overflow-hidden font-sans select-none relative">
      {/* Vintage Explorer Vignette */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none hidden md:block"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(217, 119, 6, 0.15) 0%, transparent 75%)',
        }}
      />

      {/* Primary Responsive Game Viewport */}
      <div
        className={`w-full max-w-[440px] md:max-w-4xl lg:max-w-5xl h-full flex flex-col bg-[#0f0905] relative shadow-[0_0_80px_rgba(0,0,0,0.95)] md:border-x-2 md:border-amber-900/60 overflow-hidden transition-opacity duration-500 ${
          modals.isStartupActive ? 'opacity-0 pointer-events-none invisible' : 'opacity-100'
        }`}
        aria-hidden={modals.isStartupActive}
      >
        {/* Offline Status */}
        <OfflineStatusToast isOffline={isOffline} />

        {/* Mobile Header with 10 Difference Indicators, Stopwatch, Coins & Campo Base Button */}
        <Header
          currentLevel={game.currentLevel}
          foundCount={game.foundDifferenceIds.length}
          totalDifferences={game.currentLevel.differences.length}
          lives={game.lives}
          zenMode={settings.zenMode}
          timeElapsed={game.timeElapsed}
          isTimeFrozen={game.isTimeFrozen}
          freezeSecondsLeft={game.freezeSecondsLeft}
          coins={economy.coins}
          isShieldActive={game.isShieldActive}
          profile={explorerProfile}
          onOpenHub={() => modals.setIsExpeditionHubOpen(true)}
          onOpenPassport={() => modals.setIsPassportOpen(true)}
          onOpenInstall={() => modals.setIsInstallModalOpen(true)}
          isInstalled={isInstalled}
          hasHubNotification={
            hasUnreadDaily ||
            hasUnreadRelics ||
            hasNewStageUnlocked ||
            hasUnreadJournal ||
            !seenStageBriefings.includes(game.currentLevel.chapterNumber)
          }
          isCoinBouncing={economy.isCoinBouncing}
          onOpenShop={() => modals.setIsShopOpen(true)}
          soundEnabled={settings.soundEnabled}
          onToggleSound={() => setSettings(s => ({ ...s, soundEnabled: !s.soundEnabled }))}
          comboStreak={game.comboStreak}
          rpgPerksSummary={{
            coinBonus: coinBonusPercent,
            freezeBonus: freezeBonusSeconds,
            radarBonus: radarBonusPercent,
            hasShield: hasPassiveFreeShield,
          }}
          activeSetBonus={
            primaryActiveSet
              ? {
                  name: primaryActiveSet.set.name,
                  badge: primaryActiveSet.set.badge,
                  shortName: primaryActiveSet.set.shortName,
                  perkLabel: primaryActiveSet.set.perk.label,
                  themeGradient: primaryActiveSet.set.themeGradient,
                  borderAccent: primaryActiveSet.set.borderAccent,
                }
              : null
          }
        />

        {/* Primary Gameplay Viewport: Archeologia Investigativa Hidden Object View */}
        <HiddenObjectView
          key={`hidden_obj_lvl_${game.currentLevel.id}`}
          levelId={game.currentLevel.id}
          imageA={game.currentLevel.imageA}
          differences={localizedDifferences}
          foundDifferenceIds={game.foundDifferenceIds}
          activeHint={localizedActiveHint}
          activeRadar={game.activeRadar}
          isTimeFrozen={game.isTimeFrozen}
          hiddenRelic={game.currentLevelHiddenRelic}
          isRelicDiscovered={
            game.currentLevelHiddenRelic ? game.discoveredRelicIds.includes(game.currentLevelHiddenRelic.id) : true
          }
          onDiscoverRelic={game.handleDiscoverRelic}
          onDifferenceClick={game.handleDifferenceClick}
          onErrorClick={game.handleErrorClick}
          comboStreak={game.comboStreak}
          shieldBlockedNotice={game.shieldBlockedNotice}
          chapterNumber={game.currentLevel.chapterNumber}
          isSealed={isSealedLevel(game.currentLevel.id, settings.sealedMode ?? DEFAULT_SEALED_MODE)}
        />

        {/* Floating Shield Blocked Notice */}
        {game.shieldBlockedNotice && (
          <div className="absolute top-24 left-1/2 -translate-x-1/2 z-40 w-[90%] bg-indigo-900/95 border border-indigo-400 text-indigo-200 px-3 py-1.5 rounded-xl shadow-2xl flex items-center justify-center gap-2 animate-bounce">
            <Shield className="w-3.5 h-3.5 text-indigo-300 shrink-0" />
            <span className="text-[11px] font-bold">
              {t.powerUps.shieldBlocked}
            </span>
          </div>
        )}

        {/* Bottom Explorer Tool Belt */}
        <PowerUpBar
          inventory={economy.inventory}
          coins={economy.coins}
          isTimeFrozen={game.isTimeFrozen}
          freezeSecondsLeft={game.freezeSecondsLeft}
          isShieldActive={game.isShieldActive}
          onUsePowerUp={game.handleUsePowerUp}
          onQuickBuy={type => economy.handleQuickBuy(type, settings.vibrationEnabled)}
          onOpenShop={() => modals.setIsShopOpen(true)}
        />

        {/* Floating Lore Clue Toast */}
        <LoreClueToast
          difference={localizedActiveClueToast}
          onDismiss={game.handleDismissClueToast}
        />
      </div>

      {/* Modals & Overlays */}
      {modals.isLevelCompleteOpen && (
        <LevelCompleteModal
          level={game.currentLevel}
          timeElapsed={game.timeElapsed}
          errorsCount={game.errorsCount}
          coinsEarned={game.levelCoinsEarned}
          onNextLevel={handleNextLevel}
          onReplay={() => {
            modals.setIsLevelCompleteOpen(false);
            game.loadLevel(game.currentLevel.id);
          }}
          onOpenJournal={() => {
            modals.setIsLevelCompleteOpen(false);
            modals.setIsJournalOpen(true);
          }}
          onOpenGrandFinale={() => {
            modals.setIsLevelCompleteOpen(false);
            game.setIsTimerRunning(false);
            modals.setIsGrandFinaleOpen(true);
          }}
          onOpenDilemma={() => {
            modals.setIsLevelCompleteOpen(false);
            game.setIsTimerRunning(false);
            modals.setIsDilemmaOpen(true);
          }}
          isRelicFound={
            game.currentLevelHiddenRelic ? game.discoveredRelicIds.includes(game.currentLevelHiddenRelic.id) : false
          }
          bestTime={game.lastWinRecordInfo.bestTime}
          isNewRecord={game.lastWinRecordInfo.isRecord}
        />
      )}

      {modals.isGameOverOpen && (
        <GameOverModal
          onRetry={() => {
            modals.setIsGameOverOpen(false);
            game.loadLevel(game.currentLevel.id);
          }}
          onEnableZenMode={() => {
            setSettings(s => ({ ...s, zenMode: true }));
            modals.setIsGameOverOpen(false);
            game.setLives(3);
            game.setIsTimerRunning(true);
          }}
        />
      )}

      <ErrorBoundary>
        <ShopModal
          isOpen={modals.isShopOpen}
          onClose={() => modals.setIsShopOpen(false)}
          coins={economy.coins}
          inventory={economy.inventory}
          onBuyItem={economy.handleBuyShopItem}
          onClaimEmergencyFunds={economy.handleClaimEmergencyFunds}
        />
      </ErrorBoundary>

      {modals.isRelicMuseumOpen && (
        <ErrorBoundary>
          <RelicMuseumModal
            isOpen={modals.isRelicMuseumOpen}
            onClose={() => {
              modals.setIsRelicMuseumOpen(false);
              setHasUnreadRelics(false);
            }}
            discoveredRelicIds={Array.isArray(game.discoveredRelicIds) ? game.discoveredRelicIds : []}
          />
        </ErrorBoundary>
      )}

      <ErrorBoundary>
        <RelicFoundModal
          isOpen={game.isRelicFoundModalOpen}
          relic={game.activeFoundRelic}
          onClose={() => game.setIsRelicFoundModalOpen(false)}
          onOpenMuseum={() => {
            game.setIsRelicFoundModalOpen(false);
            modals.setIsRelicMuseumOpen(true);
          }}
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <JournalModal
          isOpen={modals.isJournalOpen}
          onClose={() => modals.setIsJournalOpen(false)}
          levels={game.levels}
          currentLevelId={game.currentLevel.id}
          completedLevelIds={game.completedLevelIds}
          discoveredDifferenceIds={game.discoveredClues}
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <LevelSelectModal
          isOpen={modals.isLevelSelectOpen}
          onClose={() => modals.setIsLevelSelectOpen(false)}
          levels={game.levels}
          currentLevelId={game.currentLevel.id}
          completedLevelIds={game.completedLevelIds}
          levelStars={game.levelStars}
          bestTimes={game.bestTimes}
          onSelectLevel={id => {
            modals.setIsLevelSelectOpen(false);
            game.loadLevel(id);
          }}
        />
      </ErrorBoundary>

      {modals.isTreasureMapOpen && (
        <ErrorBoundary>
          <MappamondoModal
            isOpen={modals.isTreasureMapOpen}
            onClose={() => {
              modals.setIsTreasureMapOpen(false);
              setHasNewStageUnlocked(false);
            }}
            currentLevelId={game.currentLevel.id}
            completedLevelIds={game.completedLevelIds}
            onSelectLevel={id => {
              modals.setIsTreasureMapOpen(false);
              game.loadLevel(id);
            }}
            onOpenStageBriefing={handleOpenStageBriefing}
            profile={explorerProfile}
          />
        </ErrorBoundary>
      )}

      <ErrorBoundary>
        <SettingsModal
          isOpen={modals.isSettingsOpen}
          onClose={() => modals.setIsSettingsOpen(false)}
          settings={settings}
          onUpdateSettings={newS => setSettings(s => ({ ...s, ...newS }))}
          onOpenTutorial={() => modals.setIsTutorialOpen(true)}
          onOpenTelegram={() => setIsTelegramOpen(true)}
          onOpenInstall={() => modals.setIsInstallModalOpen(true)}
          isInstalled={isInstalled}
          isOffline={isOffline}
          isBgmPlaying={isBgmPlaying}
          onToggleBgm={handleToggleBgm}
          bgmTheme={customBgmTheme}
          onChangeBgmTheme={handleChangeBgmTheme}
          onResetProgress={handleResetAllProgress}
        />
      </ErrorBoundary>

      {/* 1928 Imperial Consular Welcome Telegram */}
      <ErrorBoundary>
        <WelcomeTelegramModal
          isOpen={isTelegramOpen}
          onClose={handleCloseTelegram}
        />
      </ErrorBoundary>

      {/* Central Expedition Headquarters / Campo Base Modal */}
      <ErrorBoundary>
        <ExpeditionHubModal
          isOpen={modals.isExpeditionHubOpen}
          onClose={() => modals.setIsExpeditionHubOpen(false)}
          currentLevel={game.currentLevel}
          profile={explorerProfile}
          coins={economy.coins}
          discoveredRelicCount={game.discoveredRelicIds.length}
          totalRelics={ALL_COLLECTIBLE_RELICS.length}
          hasUnreadDaily={hasUnreadDaily}
          hasUnreadRelics={hasUnreadRelics}
          hasNewStageUnlocked={hasNewStageUnlocked}
          hasUnreadJournal={hasUnreadJournal}
          hasUnreadBriefing={!seenStageBriefings.includes(game.currentLevel.chapterNumber)}
          isBgmPlaying={isBgmPlaying}
          onToggleBgm={handleToggleBgm}
          onOpenTreasureMap={() => {
            modals.setIsExpeditionHubOpen(false);
            modals.setIsTreasureMapOpen(true);
            setHasNewStageUnlocked(false);
          }}
          onOpenMuseum={() => {
            modals.setIsExpeditionHubOpen(false);
            modals.setIsRelicMuseumOpen(true);
            setHasUnreadRelics(false);
          }}
          onOpenWardrobe={() => {
            modals.setIsExpeditionHubOpen(false);
            modals.setIsWardrobeOpen(true);
          }}
          onOpenDaily={() => {
            modals.setIsExpeditionHubOpen(false);
            modals.setIsDailyModalOpen(true);
          }}
          onOpenJournal={() => {
            modals.setIsExpeditionHubOpen(false);
            modals.setIsJournalOpen(true);
            setHasUnreadJournal(false);
          }}
          onOpenStageBriefing={() => {
            modals.setIsExpeditionHubOpen(false);
            handleOpenStageBriefing(game.currentLevel.chapterNumber);
          }}
          onOpenShop={() => {
            modals.setIsExpeditionHubOpen(false);
            modals.setIsShopOpen(true);
          }}
          onOpenSettings={() => {
            modals.setIsExpeditionHubOpen(false);
            modals.setIsSettingsOpen(true);
          }}
          onOpenLevelSelect={() => {
            modals.setIsExpeditionHubOpen(false);
            modals.setIsLevelSelectOpen(true);
          }}
          isLevel120Completed={game.completedLevelIds.includes(120)}
          onOpenGrandFinale={() => {
            modals.setIsExpeditionHubOpen(false);
            modals.setIsGrandFinaleOpen(true);
          }}
          onOpenMedals={() => {
            modals.setIsExpeditionHubOpen(false);
            modals.setIsMedalsCabinetOpen(true);
          }}
          unlockedMedalsCount={economy.unlockedMedalIds.length}
          totalMedals={ALL_ACHIEVEMENTS.length}
          onOpenPassport={() => {
            modals.setIsExpeditionHubOpen(false);
            modals.setIsPassportOpen(true);
          }}
          unlockedVisasCount={CONSULAR_VISAS.filter(v => game.currentLevel.chapterNumber >= v.chapterNumber).length}
          onOpenInstall={() => {
            modals.setIsExpeditionHubOpen(false);
            modals.setIsInstallModalOpen(true);
          }}
          isInstalled={isInstalled}
        />
      </ErrorBoundary>

      {/* AAA Splash Screen */}
      {modals.isSplashVisible && (
        <SplashScreen onStart={handleSplashStart} onQuickPlay={handleQuickPlay} />
      )}

      {/* 1928 Studio Logo Reveal */}
      {modals.isCompanyIntroVisible && (
        <CompanyLogoIntro
          onComplete={() => modals.setIsCompanyIntroVisible(false)}
          onStartExit={() => modals.setIsSplashVisible(true)}
          companyName="SANTON LABS"
          subtitle="PRESENTA"
        />
      )}

      {/* Explorer Avatar Creation & Selection Modal */}
      <ErrorBoundary>
        <AvatarCreatorModal
          isOpen={modals.isAvatarCreatorOpen}
          onConfirm={handleConfirmAvatarProfile}
          currentProfile={explorerProfile}
        />
      </ErrorBoundary>

      {/* Explorer Wardrobe & Upgrades Modal */}
      {modals.isWardrobeOpen && (
        <ErrorBoundary>
          <WardrobeModal
            isOpen={modals.isWardrobeOpen}
            onClose={() => modals.setIsWardrobeOpen(false)}
            profile={explorerProfile}
            coins={economy.coins}
            currentLevelId={game.currentLevel.id}
            discoveredRelicCount={Array.isArray(game.discoveredRelicIds) ? game.discoveredRelicIds.length : 0}
            onUpdateProfile={p => setExplorerProfile(p)}
            onSpendCoins={economy.spendCoins}
            onOpenAvatarCreator={() => modals.setIsAvatarCreatorOpen(true)}
          />
        </ErrorBoundary>
      )}

      {/* Cinematic Prologue Cutscene */}
      <PrologueCutsceneModal
        isOpen={modals.isPrologueOpen}
        profile={explorerProfile}
        onComplete={handlePrologueComplete}
      />

      {/* Guided Expedition Tutorial */}
      <ExpeditionTutorialModal
        isOpen={modals.isTutorialOpen && !modals.isPrologueOpen}
        profile={explorerProfile}
        onComplete={handleTutorialComplete}
      />

      {/* 12-Stage Expedition Lore & Mission Briefing Dossier */}
      {modals.activeStageBriefing !== null && (
        <ErrorBoundary>
          <StageLoreBriefingModal
            isOpen={modals.activeStageBriefing !== null}
            stageNumber={modals.activeStageBriefing}
            profile={explorerProfile}
            onClose={handleCloseStageBriefing}
            onStartStage={handleStartStageFromBriefing}
          />
        </ErrorBoundary>
      )}

      {/* AAA Flying Coins & Golden Sparks Particles */}
      <FlyingCoinParticles
        bursts={economy.coinBursts}
        onBurstComplete={economy.handleCoinBurstComplete}
        onCoinLanded={economy.handleCoinLanded}
      />

      {/* 30-Day Expedition Daily Challenge & Streak Modal */}
      {modals.isDailyModalOpen && (
        <ErrorBoundary>
          <DailyExpeditionModal
            isOpen={modals.isDailyModalOpen}
            onClose={() => modals.setIsDailyModalOpen(false)}
            onStartDailyLevel={handleStartDailyLevel}
            coins={economy.coins}
          />
        </ErrorBoundary>
      )}

      {/* Milestone Expedition Tactical Dilemma Modal */}
      {modals.isDilemmaOpen && EXPEDITION_DILEMMAS[game.currentLevel.chapterNumber] && (
        <ErrorBoundary>
          <ExpeditionDilemmaModal
            isOpen={modals.isDilemmaOpen}
            dilemma={EXPEDITION_DILEMMAS[game.currentLevel.chapterNumber]}
            onResolveChoice={handleResolveDilemmaChoice}
          />
        </ErrorBoundary>
      )}

      {/* Grand Finale Expedition Endings Modal */}
      {modals.isGrandFinaleOpen && (
        <ErrorBoundary>
          <GrandFinaleModal
            isOpen={modals.isGrandFinaleOpen}
            profile={explorerProfile}
            onClose={() => modals.setIsGrandFinaleOpen(false)}
            onOpenJournal={() => {
              modals.setIsGrandFinaleOpen(false);
              modals.setIsJournalOpen(true);
            }}
            onOpenMappamondo={() => {
              modals.setIsGrandFinaleOpen(false);
              modals.setIsTreasureMapOpen(true);
            }}
            onOpenCertificate={() => setIsCertificateOpen(true)}
          />
        </ErrorBoundary>
      )}

      {/* Victorian Walnut & Brass Medals Showcase */}
      {modals.isMedalsCabinetOpen && (
        <ErrorBoundary>
          <MedalsCabinetModal
            isOpen={modals.isMedalsCabinetOpen}
            onClose={() => modals.setIsMedalsCabinetOpen(false)}
            unlockedMedalIds={economy.unlockedMedalIds}
            claimedMedalIds={economy.claimedMedalIds}
            onClaimBounty={economy.handleClaimMedalBounty}
          />
        </ErrorBoundary>
      )}

      {/* 1928 Royal Expedition Passport & Consular Visas Modal */}
      {modals.isPassportOpen && (
        <ErrorBoundary>
          <ExpeditionPassportModal
            isOpen={modals.isPassportOpen}
            onClose={() => modals.setIsPassportOpen(false)}
            profile={explorerProfile}
            currentChapter={game.currentLevel.chapterNumber}
            claimedVisaIds={economy.claimedVisaIds}
            onClaimVisaBounty={economy.handleClaimVisaBounty}
            completedLevelIds={game.completedLevelIds}
            levelStars={game.levelStars}
            bestTimes={game.bestTimes}
            discoveredRelicCount={game.discoveredRelicIds.length}
            onOpenCertificate={() => setIsCertificateOpen(true)}
          />
        </ErrorBoundary>
      )}

      {/* 1928 Official Downloadable Expedition Diploma Modal */}
      {isCertificateOpen && (
        <ErrorBoundary>
          <ExpeditionCertificateModal
            isOpen={isCertificateOpen}
            onClose={() => setIsCertificateOpen(false)}
            profile={explorerProfile}
            completedLevelIds={game.completedLevelIds}
            levelStars={game.levelStars}
            bestTimes={game.bestTimes}
            discoveredRelicCount={game.discoveredRelicIds.length}
            endingId={safeStorage.getItem('differenze_saga_ending_v1') as any}
          />
        </ErrorBoundary>
      )}

      {/* PWA Full-Screen Standalone & Offline Installation Modal */}
      {modals.isInstallModalOpen && (
        <ErrorBoundary>
          <PWAInstallModal
            isOpen={modals.isInstallModalOpen}
            onClose={() => modals.setIsInstallModalOpen(false)}
            canInstall={canInstall}
            isInstalled={isInstalled}
            isIOS={isIOS}
            onPromptInstall={promptInstall}
          />
        </ErrorBoundary>
      )}

      {/* Floating Royal Medal Unlock Celebration Toast */}
      {economy.unlockedToastMedal && (() => {
        const locMedal = getLocalizedMedal(economy.unlockedToastMedal, language);
        return (
          <div
            onClick={() => {
              modals.setIsMedalsCabinetOpen(true);
              economy.setUnlockedToastMedal(null);
            }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-80 w-auto max-w-sm px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#2c1d0f] via-[#1a0e06] to-[#2c1d0f] border-2 border-amber-400 shadow-[0_10px_30px_rgba(245,158,11,0.5),0_0_20px_rgba(251,191,36,0.3)] flex items-center gap-3 cursor-pointer animate-slideDown select-none hover:scale-105 transition-transform"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/80 flex items-center justify-center text-amber-300 text-xl shadow-inner shrink-0 animate-bounce">
              <Award className="w-6 h-6 text-amber-400" />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono font-black text-amber-400 uppercase tracking-widest">
                  {t.medals.unlockedToast}
                </span>
                <span className="text-[9px] px-1 rounded bg-amber-400/20 text-amber-300 font-mono">
                  +{economy.unlockedToastMedal.coinReward} 🪙
                </span>
              </div>
              <div className="text-xs font-bold font-serif text-amber-100 truncate">
                {locMedal.title}
              </div>
              <div className="text-[10px] text-stone-400 font-serif truncate">
                {locMedal.description}
              </div>
            </div>
          </div>
        );
      })()}

      {/* 1928 Expedition Vintage Background Pause Modal */}
      {modals.isBackgroundPaused && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-sm w-full bg-gradient-to-b from-[#2a1a0c] via-[#1a0f06] to-[#120803] border-2 border-amber-600/80 rounded-3xl p-6 text-center shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.5)]">
              <Compass className="w-8 h-8 text-amber-300 animate-spin-slow" />
            </div>

            <span className="text-[10px] font-mono tracking-widest text-amber-400/90 uppercase font-bold">
              {t.pause.expedition}
            </span>
            <h3 className="text-xl font-serif font-black text-amber-100 mt-1 mb-2 tracking-wide">
              {t.pause.title}
            </h3>

            <p className="text-xs text-stone-300 font-sans leading-relaxed mb-6">
              {t.pause.description}
            </p>

            <button
              type="button"
              onClick={handleResumeFromBackground}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-stone-950 font-black text-sm tracking-wider uppercase border border-amber-300 shadow-[0_4px_25px_rgba(245,158,11,0.6)] hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-stone-950" />
              {t.pause.resume}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
