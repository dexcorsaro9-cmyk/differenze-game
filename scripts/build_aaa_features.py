import os

flying_coins_code = """import React, { useEffect, useState } from 'react';
import { sound } from '../utils/audio';

export interface CoinBurstEvent {
  id: string;
  startX: number;
  startY: number;
  count?: number;
}

interface Particle {
  id: string;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  midX: number;
  midY: number;
  delayMs: number;
  durationMs: number;
  rotation: number;
  scale: number;
  isSparkle: boolean;
}

interface FlyingCoinParticlesProps {
  bursts: CoinBurstEvent[];
  onBurstComplete: (burstId: string) => void;
  onCoinLanded: () => void;
}

export const FlyingCoinParticles: React.FC<FlyingCoinParticlesProps> = ({
  bursts,
  onBurstComplete,
  onCoinLanded,
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (bursts.length === 0) return;

    // Determine target location (Header coin counter element or fallback to top-right)
    const coinCounterEl = document.getElementById('header-coin-counter');
    let targetX = window.innerWidth - 75;
    let targetY = 32;

    if (coinCounterEl) {
      const rect = coinCounterEl.getBoundingClientRect();
      targetX = rect.left + rect.width / 2;
      targetY = rect.top + rect.height / 2;
    }

    const newParticles: Particle[] = [];

    bursts.forEach(burst => {
      const coinCount = burst.count || 8;
      for (let i = 0; i < coinCount; i++) {
        // Random burst offset for natural explosion
        const angle = Math.random() * Math.PI * 2;
        const spread = 25 + Math.random() * 55;
        const initialX = burst.startX + Math.cos(angle) * spread;
        const initialY = burst.startY + Math.sin(angle) * spread;

        // Quadratic bezier midpoint for arc curvature
        const midX = (initialX + targetX) / 2 + (Math.random() * 60 - 30);
        const midY = Math.min(initialY, targetY) - (50 + Math.random() * 80);

        newParticles.push({
          id: `${burst.id}_${i}`,
          startX: initialX,
          startY: initialY,
          targetX,
          targetY,
          midX,
          midY,
          delayMs: i * 42,
          durationMs: 650 + Math.random() * 120,
          rotation: Math.random() * 720 - 360,
          scale: 0.8 + Math.random() * 0.4,
          isSparkle: i % 3 === 0,
        });
      }

      // Schedule burst completion
      setTimeout(() => {
        onBurstComplete(burst.id);
      }, 1100);
    });

    setParticles(prev => [...prev, ...newParticles]);

    // Schedule coin land sound and counter bump
    const soundTimeout = setTimeout(() => {
      sound.playCoinBurst();
      onCoinLanded();
    }, 700);

    const cleanTimeout = setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.some(np => np.id === p.id)));
    }, 1300);

    return () => {
      clearTimeout(soundTimeout);
      clearTimeout(cleanTimeout);
    };
  }, [bursts, onBurstComplete, onCoinLanded]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: 0,
            top: 0,
            animation: `flyToHeader ${p.durationMs}ms cubic-bezier(0.2, 0.8, 0.3, 1) ${p.delayMs}ms forwards`,
            ['--start-x' as string]: `${p.startX}px`,
            ['--start-y' as string]: `${p.startY}px`,
            ['--mid-x' as string]: `${p.midX}px`,
            ['--mid-y' as string]: `${p.midY}px`,
            ['--target-x' as string]: `${p.targetX}px`,
            ['--target-y' as string]: `${p.targetY}px`,
            ['--end-rot' as string]: `${p.rotation}deg`,
          }}
        >
          {p.isSparkle ? (
            /* Radiant golden star sparkle */
            <div className="w-4 h-4 -ml-2 -mt-2 relative animate-spin">
              <div className="absolute inset-0 bg-yellow-300 rounded-full blur-[2px] opacity-90" />
              <div className="absolute inset-1 bg-white rounded-full" />
            </div>
          ) : (
            /* AAA 3D Embossed Golden Coin */
            <div
              className="w-5 h-5 sm:w-6 sm:h-6 -ml-3 -mt-3 rounded-full relative flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              style={{
                background: 'radial-gradient(circle at 35% 30%, #fff7b2 0%, #f59e0b 55%, #b45309 100%)',
                border: '1.5px solid #fef08a',
                boxShadow: '0 0 10px rgba(245, 158, 11, 0.8), inset 0 1px 2px rgba(255,255,255,0.8)',
              }}
            >
              {/* Inner ring & coin relief symbol */}
              <div className="w-3.5 h-3.5 rounded-full border border-amber-800/40 flex items-center justify-center">
                <span className="text-[9px] font-black text-amber-950 font-serif leading-none select-none">★</span>
              </div>
            </div>
          )}
        </div>
      ))}

      <style>{`
        @keyframes flyToHeader {
          0% {
            transform: translate3d(var(--start-x), var(--start-y), 0) scale(0.4) rotate(0deg);
            opacity: 0;
          }
          15% {
            transform: translate3d(var(--start-x), var(--start-y), 0) scale(1.2) rotate(45deg);
            opacity: 1;
          }
          45% {
            transform: translate3d(var(--mid-x), var(--mid-y), 0) scale(1) rotate(180deg);
            opacity: 1;
          }
          90% {
            transform: translate3d(var(--target-x), var(--target-y), 0) scale(0.9) rotate(var(--end-rot));
            opacity: 1;
          }
          100% {
            transform: translate3d(var(--target-x), var(--target-y), 0) scale(0.2) rotate(var(--end-rot));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
"""

with open("src/components/FlyingCoinParticles.tsx", "w", encoding="utf-8") as f:
    f.write(flying_coins_code)
print("Created FlyingCoinParticles.tsx")
