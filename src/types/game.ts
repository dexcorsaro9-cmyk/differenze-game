export interface Difference {
  id: string;
  x: number; // Percentage 0 - 100
  y: number; // Percentage 0 - 100
  radius?: number; // Tolerance radius in percentage (default: 6)
  name: string; // Brief name
  loreClue: string; // Story clue revealed when spotted
  description?: string;
  clueType?: 'stolen_relic' | 'sabotage' | 'dark_seal' | 'forced_lock' | 'torn_evidence';
  riddle?: string; // Enigmatic deduction riddle for detective mode
}

export interface SagaMilestone {
  stageNumber: number; // 1 to 30 (unlocked every 10 levels)
  targetLevel: number; // 10, 20, 30... 300
  zoneName: string; // e.g. "Europa Antica", "Le Sabbie d'Oriente", etc.
  stageTitle: string; // e.g. "La Cripta dei Templari a Parigi"
  location: string; // Geographic location
  diaryPageNumber: number;
  storyFragment: string; // The rich story narrative by Professor Bellini
  unlockedRelic: string; // Relic name (e.g. "Bussola d'Astrolabio")
  relicDescription: string;
  mapCoordinates: string; // Coordinates revealed
}

export interface ChapterStory {
  prologue: string;
  resolution: string;
  unlockedSecret: string;
}

export interface Level {
  id: number;
  chapterNumber: number; // Which stage (1-30) it belongs to
  levelNumberInStage?: number; // 1 to 10

  title: string;
  subtitle: string;
  era: string;
  category: string;
  difficulty: 'Facile' | 'Normale' | 'Esperto';
  imageA: string;
  imageB: string;
  differences: Difference[];
  story: ChapterStory;
  milestone?: SagaMilestone; // Populated every 10 levels
}

export interface LevelProgress {
  levelId: number;
  completed: boolean;
  stars: number; // 1, 2, or 3
  bestTime: number; // In seconds
  unlockedClues: string[];
}

export interface GameSettings {
  soundEnabled: boolean;
  vibrationEnabled: boolean;
  zenMode: boolean; // Infinite lives
  layoutMode: 'auto' | 'vertical' | 'horizontal';
}

export interface ClickFeedback {
  id: string;
  x: number;
  y: number;
  type: 'success' | 'error';
  imageIndex: 0 | 1;
}

export type PowerUpType = 'freeze_time' | 'compass_radar' | 'hint' | 'error_shield';

export interface PowerUpInventory {
  freeze_time: number;
  compass_radar: number;
  hint: number;
  error_shield: number;
}

export interface RadarQuadrant {
  x: number; // percentage min
  y: number; // percentage min
  width: number;
  height: number;
  targetDiffId: string;
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  type: PowerUpType | 'bundle';
  powerUpType?: PowerUpType;
  quantity: number;
  coinPrice: number;
  iconName: string;
  badge?: string;
  contents?: { type: PowerUpType; count: number }[];
}
