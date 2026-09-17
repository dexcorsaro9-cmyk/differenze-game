import React, { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import type { Language, Translations } from './types';
import { it } from './locales/it';
import { en } from './locales/en';
import { es } from './locales/es';
import { safeStorage } from '../utils/storage';

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

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = useMemo(() => dictionaries[language] || dictionaries.it, [language]);

  const interpolate = (template: string, params?: Record<string, string | number>): string => {
    if (!params) return template;
    return Object.entries(params).reduce((acc, [key, val]) => {
      return acc.replace(new RegExp(`\\{${key}\\}`, 'g'), String(val));
    }, template);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, interpolate }}>
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
    };
  }
  return context;
}
