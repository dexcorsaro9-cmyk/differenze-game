export type Language = 'it' | 'en' | 'es';

export interface Translations {
  common: {
    close: string;
    back: string;
    confirm: string;
    cancel: string;
    continue: string;
    retry: string;
    claim: string;
    claimed: string;
    level: string;
    stage: string;
    coins: string;
    stars: string;
    play: string;
    next: string;
    previous: string;
    unlocked: string;
    locked: string;
    loading: string;
    success: string;
    error: string;
    reward: string;
  };
  header: {
    title: string;
    chapter: string;
    levelOf: string;
    lives: string;
    zenMode: string;
    shieldActive: string;
    openMap: string;
    openHub: string;
    openSettings: string;
  };
  powerUps: {
    freezeTime: string;
    freezeTimeDesc: string;
    compassRadar: string;
    compassRadarDesc: string;
    hint: string;
    hintDesc: string;
    errorShield: string;
    errorShieldDesc: string;
    quadrantActive: string;
    shieldBlocked: string;
    quickBuyPrompt: string;
  };
  controls: {
    magnifier: string;
    magnifierActive: string;
    resetZoom: string;
    atmosphere: string;
    photoFilter: string;
    dawn: string;
    noon: string;
    dusk: string;
    lantern: string;
    silver: string;
    cyanotype: string;
    autochrome: string;
    natural: string;
  };
  levelComplete: {
    title: string;
    finaleTitle: string;
    verifiedStamp: string;
    timeElapsed: string;
    errorsMade: string;
    coinsWon: string;
    newSpeedRecord: string;
    bestRecord: string;
    replayLevel: string;
    nextLevel: string;
    inspectJournal: string;
    openDilemma: string;
    openFinale: string;
  };
  gameOver: {
    title: string;
    description: string;
    retry: string;
    switchToZen: string;
  };
  settings: {
    title: string;
    soundEffects: string;
    vibration: string;
    zenMode: string;
    zenModeHelp: string;
    language: string;
    languageHelp: string;
    audioTheme: string;
    themeAuto: string;
    themeExploration: string;
    themeExcavation: string;
    themeSacredTemple: string;
    backupSection: string;
    exportBackup: string;
    importBackup: string;
    resetProgress: string;
    resetConfirm: string;
    version: string;
  };
  shop: {
    title: string;
    subtitle: string;
    yourPurse: string;
    buy: string;
    owned: string;
    emergencyAid: string;
    emergencyDesc: string;
  };
  medals: {
    title: string;
    subtitle: string;
    unlockedCount: string;
    claimBounty: string;
    bountyClaimed: string;
    legendary: string;
    gold: string;
    silver: string;
    bronze: string;
  };
  passport: {
    title: string;
    subtitle: string;
    visasTitle: string;
    stampsCount: string;
    claimVisa: string;
    visaClaimed: string;
  };
  journal: {
    title: string;
    subtitle: string;
    belliniNotes: string;
    cluesFound: string;
    riddleHint: string;
  };
  daily: {
    title: string;
    subtitle: string;
    streakDays: string;
    todayDone: string;
    playToday: string;
    milestoneTitle: string;
    claimed: string;
  };
  wardrobe: {
    title: string;
    subtitle: string;
    equip: string;
    equipped: string;
    preview: string;
    perkBonus: string;
    setSynergy: string;
  };
  relics: {
    modalTitle: string;
    discoveredTitle: string;
    museumTitle: string;
    museumSubtitle: string;
    inspect3D: string;
    addToCollection: string;
    visitMuseum: string;
  };
  dilemma: {
    badge: string;
    title: string;
    subtitle: string;
    choosePath: string;
  };
  grandFinale: {
    badge: string;
    title: string;
    subtitle: string;
    chooseEnding: string;
    epilogueTitle: string;
  };
  splash: {
    title: string;
    subtitle: string;
    startExpedition: string;
    quickPlay: string;
  };
}
