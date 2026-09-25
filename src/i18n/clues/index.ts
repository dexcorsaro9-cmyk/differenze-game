import type { Language } from '../types';
import type { Difference } from '../../types/game';
import type { ClueTranslation } from './types';

export * from './types';

type ClueDictionary = Record<string, ClueTranslation>;
type TranslatedLanguage = Exclude<Language, 'it'>;

/**
 * Clue translations are loaded on demand, per language.
 *
 * Italian is the source language: the strings in data/levelCluesData.ts are already
 * Italian, so an Italian player downloads none of this. English and Spanish each pull
 * their own 12 stage chunks. Previously all 24 stage dictionaries shipped in the initial
 * bundle, so every player downloaded three languages to read one.
 *
 * The lookup stays synchronous by design: it is called from render paths all over the app.
 * Before the dictionary for a language has arrived, it returns the Italian original rather
 * than blocking or throwing, and LanguageProvider re-renders consumers once it lands.
 */
const STAGE_LOADERS: Record<TranslatedLanguage, (() => Promise<{ CLUES: ClueDictionary }>)[]> = {
  en: [
    () => import('./en/stage1'),
    () => import('./en/stage2'),
    () => import('./en/stage3'),
    () => import('./en/stage4'),
    () => import('./en/stage5'),
    () => import('./en/stage6'),
    () => import('./en/stage7'),
    () => import('./en/stage8'),
    () => import('./en/stage9'),
    () => import('./en/stage10'),
    () => import('./en/stage11'),
    () => import('./en/stage12'),
  ],
  es: [
    () => import('./es/stage1'),
    () => import('./es/stage2'),
    () => import('./es/stage3'),
    () => import('./es/stage4'),
    () => import('./es/stage5'),
    () => import('./es/stage6'),
    () => import('./es/stage7'),
    () => import('./es/stage8'),
    () => import('./es/stage9'),
    () => import('./es/stage10'),
    () => import('./es/stage11'),
    () => import('./es/stage12'),
  ],
};

const loaded: Partial<Record<TranslatedLanguage, ClueDictionary>> = {};
const inFlight: Partial<Record<TranslatedLanguage, Promise<ClueDictionary>>> = {};

function isTranslated(lang: Language): lang is TranslatedLanguage {
  return lang === 'en' || lang === 'es';
}

/** True when a lookup for this language will return translated strings. */
export function areClueTranslationsReady(lang: Language): boolean {
  return !isTranslated(lang) || loaded[lang] !== undefined;
}

/** Loads (once) every stage dictionary for a language. Resolves immediately for Italian. */
export async function loadClueTranslations(lang: Language): Promise<void> {
  if (!isTranslated(lang) || loaded[lang]) return;

  if (!inFlight[lang]) {
    inFlight[lang] = Promise.all(STAGE_LOADERS[lang].map(load => load()))
      .then(modules =>
        modules.reduce<ClueDictionary>((acc, mod) => Object.assign(acc, mod.CLUES), {})
      );
  }

  try {
    loaded[lang] = await inFlight[lang];
  } catch {
    // Offline or a failed chunk fetch: keep serving Italian and allow a later retry.
    delete inFlight[lang];
  }
}

export function getLocalizedDifference(diff: Difference, lang: Language): Difference;
export function getLocalizedDifference(diff: null, lang: Language): null;
export function getLocalizedDifference(diff: Difference | null, lang: Language): Difference | null;
export function getLocalizedDifference(diff: Difference | null, lang: Language): Difference | null {
  if (!diff) return null;
  if (!isTranslated(lang)) return diff;

  const trans = loaded[lang]?.[diff.id];
  if (!trans) return diff;

  return {
    ...diff,
    name: trans.name || diff.name,
    riddle: trans.riddle || diff.riddle,
    loreClue: trans.loreClue || diff.loreClue,
  };
}

export function getLocalizedDifferences(diffs: Difference[], lang: Language): Difference[] {
  if (!isTranslated(lang)) return diffs;
  return diffs.map(d => getLocalizedDifference(d, lang));
}
