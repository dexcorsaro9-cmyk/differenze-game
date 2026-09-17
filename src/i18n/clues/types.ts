export interface ClueTranslation {
  name: string;
  riddle: string;
  loreClue: string;
}

export type StageCluesTranslations = Record<string, Record<'en' | 'es', ClueTranslation>>;
