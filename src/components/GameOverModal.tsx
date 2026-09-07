import React from 'react';
import { HeartCrack, RotateCcw, Sparkles } from 'lucide-react';

interface GameOverModalProps {
  onRetry: () => void;
  onEnableZenMode: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({ onRetry, onEnableZenMode }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900 via-slate-900 to-red-950/40 border border-red-900/60 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)] text-center text-white">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-red-500/20 border-2 border-red-500/40 flex items-center justify-center text-red-500 shadow-[0_0_25px_rgba(239,68,68,0.4)]">
          <HeartCrack className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Frattura Temporale!
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
          Troppi errori hanno corrotto irrimediabilmente questo frammento di memoria. Nexus ha preso il sopravvento.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={onRetry}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Riprova il Capitolo (3 Vite)</span>
          </button>

          <button
            onClick={onEnableZenMode}
            className="w-full py-3.5 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/30 font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>Passa a Modalità Zen (Vite Infinite)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
