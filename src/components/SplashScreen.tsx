import React, { useState, useEffect } from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { assetUrl } from '../utils/assetUrl';

interface SplashScreenProps {
  onStart: () => void;
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
    const duration = 2500; // 2.5 seconds
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
    if (!isReady || isFadingOut) return;
    sound.playSelect();
    triggerHaptic('medium');
    setIsFadingOut(true);
    setTimeout(() => {
      onStart();
    }, 600);
  };

  const currentMsgIndex = Math.min(
    statusMessages.length - 1,
    Math.floor(progress * (statusMessages.length - 1))
  );

  return (
    <div
      onClick={handleStart}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between p-6 bg-stone-950 overflow-hidden cursor-pointer select-none transition-opacity duration-700 ${
        isFadingOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Background AAA Splash Art with slow Ken Burns effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={assetUrl('/splash_screen.jpg')}
          alt="Paititi Splash Art"
          className="w-full h-full object-cover object-center animate-kenburns transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/60" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
      </div>

      {/* Top Brand Tag */}
      <div className="relative z-10 pt-8 text-center animate-fadeIn">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-amber-500/40 backdrop-blur-md shadow-2xl">
          <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-amber-300 font-serif">
            Spedizione Archeologica • 1928
          </span>
        </div>
      </div>

      {/* Center Title Logo */}
      <div className="relative z-10 text-center space-y-2 max-w-sm">
        <h1 className="text-4xl sm:text-5xl font-black font-serif tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-300 to-yellow-600 drop-shadow-[0_4px_20px_rgba(245,158,11,0.5)] uppercase">
          Paititi
        </h1>
        <div className="h-0.5 w-36 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        <p className="text-sm font-serif italic text-amber-200/90 tracking-wide drop-shadow">
          Il Segreto della Città Perduta
        </p>
      </div>

      {/* Bottom Loading / Tap To Start */}
      <div className="relative z-10 w-full max-w-xs pb-8 flex flex-col items-center gap-4">
        {!isReady ? (
          <div className="w-full space-y-2">
            <div className="flex justify-between text-[11px] text-amber-300 font-mono">
              <span className="truncate max-w-[200px]">{statusMessages[currentMsgIndex]}</span>
              <span>{Math.round(progress * 100)}%</span>
            </div>
            {/* Ancient Incan Progress Bar */}
            <div className="w-full h-2 bg-stone-950/80 rounded-full border border-amber-600/50 p-0.5 overflow-hidden shadow-inner">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-300 shadow-[0_0_12px_#f59e0b] transition-all duration-75"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleStart}
            className="w-full py-3.5 px-6 rounded-2xl font-black font-serif tracking-[0.2em] text-sm uppercase bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 shadow-[0_0_35px_rgba(245,158,11,0.6)] flex items-center justify-center gap-2 animate-bounce cursor-pointer active:scale-95 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            Tocca per iniziare
          </button>
        )}

        <div className="text-[10px] text-stone-400 tracking-wider">
          Royal Geographical Society • Londra 1928
        </div>
      </div>
    </div>
  );
};
