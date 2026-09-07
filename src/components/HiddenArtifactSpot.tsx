import React from 'react';
import { Sparkles } from 'lucide-react';
import type { CollectibleRelic } from '../data/collectiblesData';

interface HiddenArtifactSpotProps {
  relic: CollectibleRelic;
  isDiscovered: boolean;
  onDiscover: (relic: CollectibleRelic) => void;
}

export const HiddenArtifactSpot: React.FC<HiddenArtifactSpotProps> = ({
  relic,
  isDiscovered,
  onDiscover,
}) => {
  if (isDiscovered) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Do not trigger scene error or difference clicks!
    onDiscover(relic);
  };

  return (
    <div
      onClick={handleClick}
      className="absolute -translate-x-1/2 -translate-y-1/2 z-25 cursor-pointer select-none group"
      style={{ left: `${relic.coords.x}%`, top: `${relic.coords.y}%` }}
      title="Un bagliore dorato... cosa c'è nascosto qui?!"
    >
      {/* Outer ambient golden aura */}
      <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center animate-relic-shimmer">
        {/* Soft golden beacon glow */}
        <div className="absolute inset-0 rounded-full bg-amber-400/25 blur-sm group-hover:bg-amber-400/40 transition-all" />

        {/* Golden Relic Idol Mini Glyph */}
        <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-1 shadow-[0_0_12px_rgba(251,191,36,0.9)] border border-amber-200 flex items-center justify-center group-hover:scale-125 transition-transform">
          <Sparkles className="w-3.5 h-3.5 text-amber-950 fill-amber-300 animate-spin" />
        </div>

        {/* Small sparkling glints */}
        <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-100 animate-ping" />
      </div>
    </div>
  );
};
