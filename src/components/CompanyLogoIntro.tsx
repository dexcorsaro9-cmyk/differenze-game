import React, { useState, useEffect, useCallback } from 'react';
import { sound } from '../utils/audio';

interface CompanyLogoIntroProps {
  onComplete: () => void;
  onStartExit?: () => void;
  companyName?: string;
  subtitle?: string;
  logoUrl?: string;
}

export const CompanyLogoIntro: React.FC<CompanyLogoIntroProps> = ({
  onComplete,
  onStartExit,
  companyName = 'SANTON LABS S.R.L.',
  subtitle = 'PRESENTA',
  logoUrl,
}) => {
  const [phase, setPhase] = useState<'entering' | 'revealed' | 'exiting'>('entering');
  const [hasStartedAudio, setHasStartedAudio] = useState<boolean>(false);

  const finishIntro = useCallback(() => {
    if (phase === 'exiting') return;
    setPhase('exiting');
    if (onStartExit) onStartExit();
    setTimeout(() => {
      onComplete();
    }, 450);
  }, [phase, onComplete, onStartExit]);

  // Handle first user gesture to unlock audio context and play sting
  const handleInteraction = useCallback(() => {
    if (!hasStartedAudio) {
      sound.playStudioLogoSting();
      setHasStartedAudio(true);
    }
    finishIntro();
  }, [hasStartedAudio, finishIntro]);

  useEffect(() => {
    // Try to play cinematic audio sting
    sound.playStudioLogoSting();
    setHasStartedAudio(true);

    // Timeline:
    // 0ms - 350ms: pitch black
    // 350ms: revealed with smooth zoom & glow
    // 3200ms: start fading out
    // 3650ms: transition to splash screen
    const revealTimer = setTimeout(() => {
      setPhase('revealed');
    }, 350);

    const exitTimer = setTimeout(() => {
      finishIntro();
    }, 3200);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter' || e.key === 'Escape') {
        handleInteraction();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(exitTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [finishIntro, handleInteraction]);

  const activeLogo = logoUrl || `${import.meta.env.BASE_URL}santon_labs_logo.png`;

  return (
    <div
      onClick={handleInteraction}
      className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center select-none overflow-hidden cursor-pointer transition-opacity duration-500 ${
        phase === 'exiting' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* High-Tech Cybernetic Spotlight (Cyan & Purple Neon Gradient) */}
      <div
        className={`absolute w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none transition-all duration-1000 ${
          phase === 'revealed' ? 'opacity-40 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.28) 0%, rgba(168, 85, 247, 0.18) 45%, transparent 70%)',
        }}
      />

      {/* Main Studio Logo & Title Container */}
      <div
        className={`relative flex flex-col items-center justify-center p-6 text-center transform transition-all duration-1000 ease-out ${
          phase === 'revealed'
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-3'
        }`}
      >
        {/* Official Santon Labs Cutout Logo with Dynamic Neon Glow */}
        <div className="relative flex items-center justify-center mb-4">
          <img
            src={activeLogo}
            alt={companyName}
            className="w-[280px] sm:w-[420px] md:w-[480px] max-w-[90vw] h-auto object-contain filter drop-shadow-[0_0_35px_rgba(0,229,255,0.45)] drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Sleek Cyan-to-Purple Neon Divider */}
        <div className="w-36 sm:w-56 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-2 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />

        {/* Subtitle / "PRESENTA" */}
        <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.55em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-100 to-purple-300 font-bold drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
          {subtitle}
        </p>
      </div>

      {/* Bottom Subtle Skip Prompt */}
      <div
        className={`absolute bottom-6 right-6 text-[10px] text-stone-500 font-mono tracking-wider transition-opacity duration-700 ${
          phase === 'revealed' ? 'opacity-60 hover:opacity-100' : 'opacity-0'
        }`}
      >
        Tocca per saltare ➔
      </div>
    </div>
  );
};
