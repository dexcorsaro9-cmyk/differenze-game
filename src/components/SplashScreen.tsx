import React, { useState, useEffect } from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { assetUrl } from '../utils/assetUrl';

interface SplashScreenProps {
  onStart: () => void;
  onQuickPlay?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onStart }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  const statusMessages = [
    'Decifrazione simboli pre-incaici...',
    'Allineamento dell\'Astrolabio Solare...',
    'Consultazione del Taccuino di Bellini...',
    'Apertura del varco per Paititi...',
    'Spedizione Pronta!',
  ];

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

  const currentMsgIndex = Math.min(
    statusMessages.length - 1,
    Math.floor(progress * (statusMessages.length - 1))
  );

  return (
    <div
      onClick={handleStart}
      className={`fixed inset-0 z-[90] flex flex-col items-center justify-between px-4 pb-10 pt-16 sm:pt-24 sm:pb-14 bg-[#070402] overflow-hidden select-none cursor-pointer transition-all duration-400 ${
        isFadingOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
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

      {/* Top breathing space to comfortably lower the title */}
      <div className="h-4 sm:h-10 shrink-0 pointer-events-none" />

      {/* Center Title Logo - Lowered & Grand */}
      <div className="relative z-10 text-center space-y-2.5 max-w-sm sm:max-w-md my-auto animate-fadeIn">
        <div className="inline-flex items-center justify-center p-2.5 mb-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 backdrop-blur-md shadow-[0_0_25px_rgba(245,158,11,0.3)]">
          <Compass className="w-5 h-5 text-amber-400 animate-spin-slow" />
        </div>

        <h1 className="text-4xl sm:text-6xl font-black font-serif tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-300 to-yellow-600 drop-shadow-[0_4px_24px_rgba(245,158,11,0.6)] uppercase">
          Paititi
        </h1>
        <div className="h-0.5 w-44 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
        <p className="text-xs sm:text-base font-serif italic text-amber-200/90 tracking-widest drop-shadow">
          Il Segreto della Città Perduta
        </p>
      </div>

      {/* Bottom Section: Progress Bar or Prominent "INIZIA LA SPEDIZIONE" Button */}
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center shrink-0">
        {!isReady ? (
          <div className="w-full max-w-xs space-y-2.5">
            <div className="flex justify-between text-[11px] text-amber-300 font-mono">
              <span className="truncate max-w-[200px]">{statusMessages[currentMsgIndex]}</span>
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
              Tocca per entrare subito »
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
              className="group relative w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-700 via-amber-500 to-amber-600 hover:from-amber-600 hover:via-amber-400 hover:to-amber-500 text-stone-950 font-black font-serif uppercase tracking-widest text-base sm:text-lg shadow-[0_0_40px_rgba(245,158,11,0.7)] border-2 border-amber-300 active:scale-95 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-1 animate-pulse"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-stone-950" />
                <span>INIZIA LA SPEDIZIONE</span>
                <Sparkles className="w-4 h-4 text-stone-950" />
              </div>
              <span className="text-[10px] text-stone-900/90 font-mono tracking-wider normal-case font-bold">
                Tocca per esplorare il tempio
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
