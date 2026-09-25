import React, { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import type { Language, Translations } from './types';
import { it } from './locales/it';
import { en } from './locales/en';
import { es } from './locales/es';
import { safeStorage } from '../utils/storage';
import { loadClueTranslations, areClueTranslationsReady, getLocalizedDifference, getLocalizedDifferences } from './clues';
import type { Difference } from '../types/game';

const STORAGE_KEY_LANGUAGE = 'differenze_language_v1';

const dictionaries: Record<Language, Translations> = {
  it,
  en,
  es,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  interpolate: (template: string, params?: Record<string, string | number>) => string;
  /**
   * Clue localisers bound to the current language and to whichever dictionary has
   * arrived. Consumers depend on these identities rather than tracking load state
   * themselves: the function is replaced once the chunks land, so a memo that lists it
   * recomputes and picks up the translated strings.
   */
  localizeDifference: (diff: Difference | null) => Difference | null;
  localizeDifferences: (diffs: Difference[]) => Difference[];
}

export const LanguageContext = createContext<LanguageContextType | null>(null);

function detectDefaultLanguage(): Language {
  const saved = safeStorage.getItem(STORAGE_KEY_LANGUAGE);
  if (saved === 'it' || saved === 'en' || saved === 'es') {
    return saved;
  }
  if (typeof navigator !== 'undefined') {
    const navLang = (navigator.language || '').toLowerCase();
    if (navLang.startsWith('es')) return 'es';
    if (navLang.startsWith('it')) return 'it';
    if (navLang.startsWith('en')) return 'en';
  }
  return 'it';
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => detectDefaultLanguage());

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    safeStorage.setItem(STORAGE_KEY_LANGUAGE, lang);
  };

  // Incremented only when an async dictionary load completes, which is what makes the
  // localisers below a fresh identity. Readiness itself is read during render, not stored.
  const [loadedTick, setLoadedTick] = useState<number>(0);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  // Fetch this language's clue dictionary (a no-op for Italian, the source language).
  // Nothing is set synchronously here: if the dictionary is already in the cache, the
  // localisers below already see it on this render.
  useEffect(() => {
    if (areClueTranslationsReady(language)) return;

    let cancelled = false;
    loadClueTranslations(language).then(() => {
      if (!cancelled) setLoadedTick(tick => tick + 1);
    });
    return () => {
      cancelled = true;
    };
  }, [language]);

  const localizeDifference = useMemo(
    () => (diff: Difference | null) => getLocalizedDifference(diff, language),
    // loadedTick is the point of this memo: the dictionary it reads lives in a module
    // cache the linter cannot see, so a completed load has to invalidate the identity.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [language, loadedTick]
  );

  const localizeDifferences = useMemo(
    () => (diffs: Difference[]) => getLocalizedDifferences(diffs, language),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [language, loadedTick]
  );

  const t = useMemo(() => dictionaries[language] || dictionaries.it, [language]);

  const interpolate = (template: string, params?: Record<string, string | number>): string => {
    if (!template) return '';
    if (!params) {
      return template.replace(/\{(\w+)\}/g, '');
    }

    const resolved: Record<string, string | number> = { ...params };

    // Smart aliases: index / number / current / step / stage / sector / level
    const num = params.index ?? params.number ?? params.current ?? params.step ?? params.stage ?? params.sector ?? params.level;
    if (num !== undefined) {
      if (resolved.index === undefined) resolved.index = num;
      if (resolved.number === undefined) resolved.number = num;
      if (resolved.current === undefined) resolved.current = num;
      if (resolved.step === undefined) resolved.step = num;
      if (resolved.stage === undefined) resolved.stage = num;
      if (resolved.sector === undefined) resolved.sector = num;
      if (resolved.level === undefined) resolved.level = num;
    }

    // Smart aliases: count / days / total / completed / solved
    const cnt = params.count ?? params.days ?? params.solved ?? params.completed;
    if (cnt !== undefined) {
      if (resolved.count === undefined) resolved.count = cnt;
      if (resolved.days === undefined) resolved.days = cnt;
      if (resolved.solved === undefined) resolved.solved = cnt;
      if (resolved.completed === undefined) resolved.completed = cnt;
    }

    if (resolved.total === undefined) {
      if (params.stage !== undefined) resolved.total = 12;
      else if (params.step !== undefined) resolved.total = 3;
    }

    let result = Object.entries(resolved).reduce((acc, [key, val]) => {
      return acc.replace(new RegExp(`\\{${key}\\}`, 'g'), String(val));
    }, template);

    // Clean up any remaining unreplaced {placeholder} tags so raw code strings never leak to UI
    result = result.replace(/\{(\w+)\}/g, '');

    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, interpolate, localizeDifference, localizeDifferences }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function interpolate(tmpl: string, params?: Record<string, string | number>): string {
  if (!params) return tmpl;
  return Object.entries(params).reduce((acc, [k, v]) => acc.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v)), tmpl);
}

export function useTranslation(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback if rendered outside provider
    return {
      language: 'it',
      setLanguage: () => {},
      t: dictionaries.it,
      interpolate,
      localizeDifference: diff => diff,
      localizeDifferences: diffs => diffs,
    };
  }
  return context;
}
