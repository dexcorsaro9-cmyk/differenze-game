import { useState } from 'react';

export const useModalManager = (isRelicFoundModalOpen = false) => {
  const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const initialView = urlParams?.get('view');

  const [isCompanyIntroVisible, setIsCompanyIntroVisible] = useState<boolean>(() => {
    if (
      initialView === 'avatar' ||
      initialView === 'wardrobe' ||
      initialView === 'game' ||
      initialView === 'prologue' ||
      initialView === 'tutorial' ||
      initialView === 'map' ||
      initialView === 'finale' ||
      initialView === 'install' ||
      initialView === 'passport' ||
      initialView === 'medals' ||
      initialView === 'museum' ||
      initialView === 'dilemma'
    )
      return false;
    return true;
  });

  const [isSplashVisible, setIsSplashVisible] = useState<boolean>(() => initialView === 'splash');
  const [isAvatarCreatorOpen, setIsAvatarCreatorOpen] = useState<boolean>(() => initialView === 'avatar');
  const [isWardrobeOpen, setIsWardrobeOpen] = useState<boolean>(() => initialView === 'wardrobe');
  const [isPrologueOpen, setIsPrologueOpen] = useState<boolean>(() => initialView === 'prologue');
  const [isTutorialOpen, setIsTutorialOpen] = useState<boolean>(() => initialView === 'tutorial');
  const [isTreasureMapOpen, setIsTreasureMapOpen] = useState<boolean>(() => initialView === 'map');
  const [isGrandFinaleOpen, setIsGrandFinaleOpen] = useState<boolean>(() => initialView === 'finale');
  const [isMedalsCabinetOpen, setIsMedalsCabinetOpen] = useState<boolean>(() => initialView === 'medals');
  const [isPassportOpen, setIsPassportOpen] = useState<boolean>(() => initialView === 'passport');
  const [isInstallModalOpen, setIsInstallModalOpen] = useState<boolean>(() => initialView === 'install');
  const [isDilemmaOpen, setIsDilemmaOpen] = useState<boolean>(() => initialView === 'dilemma');
  const [isRelicMuseumOpen, setIsRelicMuseumOpen] = useState<boolean>(() => initialView === 'museum');
  const [activeStageBriefing, setActiveStageBriefing] = useState<number | null>(() => (initialView === 'briefing' ? 1 : null));

  const [isLevelCompleteOpen, setIsLevelCompleteOpen] = useState<boolean>(false);
  const [isGameOverOpen, setIsGameOverOpen] = useState<boolean>(false);
  const [isJournalOpen, setIsJournalOpen] = useState<boolean>(false);
  const [isLevelSelectOpen, setIsLevelSelectOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isShopOpen, setIsShopOpen] = useState<boolean>(false);
  const [isDailyModalOpen, setIsDailyModalOpen] = useState<boolean>(false);
  const [isExpeditionHubOpen, setIsExpeditionHubOpen] = useState<boolean>(false);
  const [isBackgroundPaused, setIsBackgroundPaused] = useState<boolean>(false);

  const isAnyModalOpen =
    isBackgroundPaused ||
    isCompanyIntroVisible ||
    isSplashVisible ||
    isAvatarCreatorOpen ||
    isWardrobeOpen ||
    isPrologueOpen ||
    isTutorialOpen ||
    isExpeditionHubOpen ||
    isGrandFinaleOpen ||
    activeStageBriefing !== null ||
    isLevelCompleteOpen ||
    isGameOverOpen ||
    isJournalOpen ||
    isLevelSelectOpen ||
    isSettingsOpen ||
    isTreasureMapOpen ||
    isShopOpen ||
    isRelicMuseumOpen ||
    isRelicFoundModalOpen ||
    isDailyModalOpen ||
    isMedalsCabinetOpen ||
    isPassportOpen ||
    isInstallModalOpen ||
    isDilemmaOpen;

  const isStartupActive = isCompanyIntroVisible || isSplashVisible;

  return {
    isCompanyIntroVisible,
    setIsCompanyIntroVisible,
    isSplashVisible,
    setIsSplashVisible,
    isAvatarCreatorOpen,
    setIsAvatarCreatorOpen,
    isWardrobeOpen,
    setIsWardrobeOpen,
    isPrologueOpen,
    setIsPrologueOpen,
    isTutorialOpen,
    setIsTutorialOpen,
    isTreasureMapOpen,
    setIsTreasureMapOpen,
    isGrandFinaleOpen,
    setIsGrandFinaleOpen,
    isMedalsCabinetOpen,
    setIsMedalsCabinetOpen,
    isPassportOpen,
    setIsPassportOpen,
    isInstallModalOpen,
    setIsInstallModalOpen,
    isDilemmaOpen,
    setIsDilemmaOpen,
    isRelicMuseumOpen,
    setIsRelicMuseumOpen,
    activeStageBriefing,
    setActiveStageBriefing,
    isLevelCompleteOpen,
    setIsLevelCompleteOpen,
    isGameOverOpen,
    setIsGameOverOpen,
    isJournalOpen,
    setIsJournalOpen,
    isLevelSelectOpen,
    setIsLevelSelectOpen,
    isSettingsOpen,
    setIsSettingsOpen,
    isShopOpen,
    setIsShopOpen,
    isDailyModalOpen,
    setIsDailyModalOpen,
    isExpeditionHubOpen,
    setIsExpeditionHubOpen,
    isBackgroundPaused,
    setIsBackgroundPaused,
    isAnyModalOpen,
    isStartupActive,
  };
};
