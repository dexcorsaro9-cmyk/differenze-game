import React, { useState, useEffect } from 'react';
import { Compass, Sparkles, Globe, Check } from 'lucide-react';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { assetUrl } from '../utils/assetUrl';
import { useTranslation } from '../i18n/LanguageContext';
import type { Language } from '../i18n/types';

interface SplashScreenProps {
  onStart: () => void;
  onQuickPlay?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onStart }) => {
  const { language, setLanguage, t } = useTranslation();
  const [progress, setProgress] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  const languages: { id: Language; label: string; flag: string; short: string }[] = [
    { id: 'it', label: 'Italiano', flag: '🇮🇹', short: 'IT' },
    { id: 'en', label: 'English', flag: '🇬🇧', short: 'EN' },
    { id: 'es', label: 'Español', flag: '🇪🇸', short: 'ES' },
  ];

  const statusMessagesMap: Record<Language, string[]> = {
    it: [
      'Decifrazione simboli pre-incaici...',
      'Allineamento dell\'Astrolabio Solare...',
      'Consultazione del Taccuino di Bellini...',
      'Apertura del varco per Paititi...',
      'Spedizione Pronta!',
    ],
    en: [
      'Deciphering pre-Incan glyphs...',
      'Aligning Solar Astrolabe...',
      'Consulting Bellini\'s Journal...',
      'Opening gateway to Paititi...',
      'Expedition Ready!',
    ],
    es: [
      'Descifrando glifos preincaicos...',
      'Alineando el Astrolabio Solar...',
      'Consultando el Diario de Bellini...',
      'Abriendo el paso a Paititi...',
      '¡Expedición Lista!',
    ],
  };

  const statusMessages = statusMessagesMap[language] || statusMessagesMap.it;

  useEffect(() => {
    const duration = 2200; // 2.2 seconds
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const p = Math.min(1, currentStep / steps);
      setProgress(p);

      if (p >= 1) {
        clearInterval(timer);
        setIsReady(true);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const handleStart = () => {
    if (isFadingOut) return;
    sound.playSelect();
    triggerHaptic('medium');
    setIsFadingOut(true);
    setTimeout(() => {
      onStart();
    }, 400);
  };

  const handleSelectLanguage = (langId: Language, e: React.MouseEvent) => {
    e.stopPropagation();
    if (language === langId) return;
    setLanguage(langId);
    sound.playTap();
    triggerHaptic('light');
  };

  const currentMsgIndex = Math.min(
    statusMessages.length - 1,
    Math.floor(progress * (statusMessages.length - 1))
  );

  return (
    <div
      onClick={handleStart}
      className={`fixed inset-0 z-[90] flex flex-col items-center justify-between px-4 pb-8 sm:pb-12 bg-[#070402] overflow-hidden select-none cursor-pointer transition-all duration-400 ${
        isFadingOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
      style={{
        paddingTop: 'max(1.25rem, env(safe-area-inset-top))',
        paddingBottom: 'max(2rem, env(safe-area-inset-bottom))',
      }}
    >
      {/* Background AAA Splash Art with subtle cinematic Ken Burns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#070402]">
        <img
          src={assetUrl('/splash_screen.jpg')}
          alt="Paititi Splash Art"
          className="w-full h-full object-cover object-center animate-kenburns transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/60" />
        <div className="absolute inset-0 bg-radial-vignette opacity-75" />
      </div>

      {/* Top Header Bar: Vintage Edition Badge & Quick Language Switcher */}
      <div className="relative z-20 w-full max-w-sm sm:max-w-lg flex items-center justify-between px-2 pt-1">
        {/* Vintage 1928 Expedition Seal */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950/80 border border-amber-500/40 backdrop-blur-md shadow-lg">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
          <span className="text-[10px] sm:text-xs font-serif font-bold text-amber-200 uppercase tracking-wider">
            {t.splash.expeditionEdition}
          </span>
        </div>

        {/* Top Floating Language Switcher Capsule */}
        <div className="flex items-center gap-1 p-1 rounded-full bg-stone-950/90 border border-amber-500/60 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.9)]">
          <Globe className="w-3.5 h-3.5 text-amber-400 ml-1.5 mr-0.5 shrink-0" />
          {languages.map(lang => {
            const isSelected = language === lang.id;
            return (
              <button
                key={lang.id}
                type="button"
                onClick={(e) => handleSelectLanguage(lang.id, e)}
                className={`px-2.5 py-0.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-[0_0_12px_rgba(245,158,11,0.85)] font-black scale-105'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800/80'
                }`}
                title={lang.label}
              >
                <span>{lang.flag}</span>
                <span className="font-mono text-[10.5px]">{lang.short}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Center Plaque - Complements the glorious baked-in art title */}
      <div className="relative z-10 text-center space-y-3 max-w-sm sm:max-w-md my-auto animate-fadeIn mt-20 sm:mt-28">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-950/80 border border-amber-500/50 text-amber-300 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.9)]">
          <Compass className="w-4 h-4 text-amber-400 animate-spin-slow" />
          <span className="text-xs sm:text-sm font-serif italic text-amber-200 tracking-widest uppercase font-bold">
            {t.splash.subtitle}
          </span>
        </div>
      </div>

      {/* Bottom Section: Language Selector Bar & Progress / Start Button */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md flex flex-col items-center shrink-0 space-y-3.5">
        {/* Prominent Language Bar (Easy 1-tap language choice) */}
        <div className="w-full max-w-xs flex flex-col items-center gap-1.5 animate-fadeIn">
          <span className="text-[10px] sm:text-[11px] font-serif uppercase tracking-widest text-amber-300/80 font-bold flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-amber-400" />
            {t.splash.selectLanguage}
          </span>
          <div className="flex items-center justify-between w-full p-1.5 rounded-2xl bg-stone-950/90 border-2 border-amber-500/60 shadow-[0_0_30px_rgba(0,0,0,0.95)] backdrop-blur-md">
            {languages.map(lang => {
              const isSelected = language === lang.id;
              return (
                <button
                  key={lang.id}
                  type="button"
                  onClick={(e) => handleSelectLanguage(lang.id, e)}
                  className={`flex-1 py-1.5 px-2 rounded-xl flex items-center justify-center gap-1.5 text-xs font-serif font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-stone-950 shadow-[0_0_16px_rgba(245,158,11,0.9)] border border-amber-200 scale-105 font-black'
                      : 'text-amber-200/80 hover:text-white hover:bg-stone-900/80 border border-transparent'
                  }`}
                >
                  <span className="text-sm sm:text-base">{lang.flag}</span>
                  <span className="truncate">{lang.label}</span>
                  {isSelected && <Check className="w-3 h-3 text-stone-950 stroke-[3]" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Loading Progress or Prominent Adventure Start Button */}
        {!isReady ? (
          <div className="w-full max-w-xs space-y-2">
            <div className="flex justify-between text-[11px] text-amber-300 font-mono">
              <span className="truncate max-w-[210px]">{statusMessages[currentMsgIndex]}</span>
              <span>{Math.round(progress * 100)}%</span>
            </div>
            {/* Ancient Incan Progress Bar */}
            <div className="w-full h-2.5 bg-stone-950/80 rounded-full border border-amber-600/50 p-0.5 overflow-hidden shadow-inner">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-300 shadow-[0_0_12px_#f59e0b] transition-all duration-75"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <div className="text-center text-[10px] text-amber-400/80 font-mono animate-pulse">
              {t.splash.quickPlay} »
            </div>
          </div>
        ) : (
          <div className="w-full max-w-xs flex flex-col items-center animate-fadeIn">
            {/* Prominent Golden Adventure Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleStart();
              }}
              className="group relative w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-700 via-amber-500 to-amber-600 hover:from-amber-600 hover:via-amber-400 hover:to-amber-500 text-stone-950 font-black font-serif uppercase tracking-widest text-base sm:text-lg shadow-[0_0_40px_rgba(245,158,11,0.75)] border-2 border-amber-300 active:scale-95 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-1 animate-pulse"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-stone-950" />
                <span>{t.splash.startExpedition}</span>
                <Sparkles className="w-4 h-4 text-stone-950" />
              </div>
              <span className="text-[10px] text-stone-900/90 font-mono tracking-wider normal-case font-bold">
                {t.splash.quickPlay}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
