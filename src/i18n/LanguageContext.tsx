import React, { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import type { Language, Translations } from './types';
import { it } from './locales/it';
import { en } from './locales/en';
import { es } from './locales/es';
import { safeStorage } from '../utils/storage';
import { loadClueTranslations, areClueTranslationsReady } from './clues';

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
   * Bumped when a language's clue dictionary finishes loading. Memoised localisations of
   * clue text must list it as a dependency, or they keep the Italian fallback they
   * computed before the chunks arrived.
   */
  cluesVersion: number;
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

  const [cluesVersion, setCluesVersion] = useState<number>(0);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  // Fetch this language's clue dictionary (a no-op for Italian, the source language) and
  // re-render consumers once it is in place.
  useEffect(() => {
    if (areClueTranslationsReady(language)) {
      setCluesVersion(v => v + 1);
      return;
    }

    let cancelled = false;
    loadClueTranslations(language).then(() => {
      if (!cancelled) setCluesVersion(v => v + 1);
    });
    return () => {
      cancelled = true;
    };
  }, [language]);

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
    <LanguageContext.Provider value={{ language, setLanguage, t, interpolate, cluesVersion }}>
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
      cluesVersion: 0,
    };
  }
  return context;
}
