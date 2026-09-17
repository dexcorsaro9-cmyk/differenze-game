import React, { useEffect, useRef } from 'react';
import { Sparkles, X } from 'lucide-react';
import type { Difference } from '../types/game';
import { useTranslation } from '../i18n/LanguageContext';

interface LoreClueToastProps {
  difference: Difference | null;
  onDismiss: () => void;
}

export const LoreClueToast: React.FC<LoreClueToastProps> = ({ difference, onDismiss }) => {
  const { t } = useTranslation();
  const onDismissRef = useRef(onDismiss);
  onDismissRef.current = onDismiss;

  useEffect(() => {
    if (!difference) return;

    // Fixed 2.3 second auto-dismiss timer (unaffected by parent re-renders)
    const timer = setTimeout(() => {
      onDismissRef.current();
    }, 2300);

    return () => clearTimeout(timer);
  }, [difference?.id]);

  if (!difference) return null;

  return (
    <div
      onClick={onDismiss}
      className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-40 max-w-lg w-[92%] sm:w-auto cursor-pointer select-none animate-in fade-in slide-in-from-top-4 duration-300 transition-all hover:scale-[1.01] active:scale-[0.99]"
      title={t.loreClue.dismissTooltip}
    >
      <div className="relative overflow-hidden bg-gradient-to-r from-stone-900/95 via-amber-950/90 to-stone-900/95 backdrop-blur-xl border-2 border-amber-500/80 text-amber-100 rounded-2xl p-3.5 sm:p-4 shadow-[0_12px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(245,158,11,0.25)] flex items-start gap-3">
        <div className="p-2 rounded-xl bg-amber-500/25 text-amber-300 border border-amber-400/50 shrink-0 mt-0.5 shadow-inner">
          <Sparkles className="w-5 h-5 animate-spin" />
        </div>

        <div className="flex-1 min-w-0 pr-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-amber-400">
              {t.loreClue.enigmaSolved}
            </span>
            <span className="text-xs text-amber-600">•</span>
            <h4 className="text-xs sm:text-sm font-bold text-white truncate">
              {difference.name}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-200 mt-1 leading-relaxed font-serif italic">
            "{difference.loreClue}"
          </p>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDismiss();
          }}
          className="p-1 rounded-lg text-amber-400/70 hover:text-white hover:bg-amber-900/40 active:scale-95 transition-all shrink-0"
          aria-label={t.loreClue.close}
        >
          <X className="w-4 h-4" />
        </button>

        {/* 2.2s Animated Shrinking Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-950/50 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-yellow-300"
            style={{
              animation: 'shrinkWidth 2.2s linear forwards',
            }}
          />
        </div>
      </div>
    </div>
  );
};
