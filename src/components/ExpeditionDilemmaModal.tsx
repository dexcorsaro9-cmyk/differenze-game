import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Compass,
  Award,
  Sparkles,
  Shield,
  Coins,
  Search,
  Timer,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Scroll
} from 'lucide-react';
import type { ExpeditionDilemma, DilemmaChoice } from '../data/expeditionDilemmas';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';

interface ExpeditionDilemmaModalProps {
  isOpen: boolean;
  dilemma: ExpeditionDilemma;
  onResolveChoice: (choice: DilemmaChoice) => void;
}

export const ExpeditionDilemmaModal: React.FC<ExpeditionDilemmaModalProps> = ({
  isOpen,
  dilemma,
  onResolveChoice,
}) => {
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  if (!isOpen || !dilemma || !Array.isArray(dilemma.choices) || dilemma.choices.length < 2) return null;

  const handleSelect = (choice: DilemmaChoice) => {
    if (isConfirmed) return;
    setSelectedChoiceId(choice.id);
    setIsConfirmed(true);

    sound.playPaperInspect();
    sound.playLevelWin();
    triggerHaptic('success');

    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // Graceful fallback if canvas confetti is unavailable
    }

    setTimeout(() => {
      onResolveChoice(choice);
    }, 1800);
  };

  const choiceA = dilemma.choices[0];
  const choiceB = dilemma.choices[1];

  const getRewardIcon = (type: string) => {
    switch (type) {
      case 'shield':
        return <Shield className="w-4 h-4 text-indigo-300 shrink-0" />;
      case 'coins':
        return <Coins className="w-4 h-4 text-amber-300 shrink-0" />;
      case 'hint':
        return <Search className="w-4 h-4 text-emerald-300 shrink-0" />;
      case 'freeze':
        return <Timer className="w-4 h-4 text-cyan-300 shrink-0" />;
      case 'compass':
        return <Compass className="w-4 h-4 text-yellow-300 shrink-0" />;
      default:
        return <Award className="w-4 h-4 text-amber-300 shrink-0" />;
    }
  };

  const getAlignmentStyle = (alignment: string) => {
    switch (alignment) {
      case 'academy':
        return 'border-amber-500/40 bg-amber-950/40 text-amber-300';
      case 'secret_archive':
        return 'border-indigo-500/40 bg-indigo-950/40 text-indigo-300';
      case 'sacred_jungle':
        return 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300';
      default:
        return 'border-stone-500/40 bg-stone-950/40 text-stone-300';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-3 pb-3 pt-6 sm:px-4 sm:pb-4 sm:pt-8 bg-black/92 backdrop-blur-xl animate-fade-in select-none">
      <div className="relative w-full max-w-xl bg-gradient-to-b from-[#241407] via-[#150a03] to-[#0a0502] border-2 border-amber-500/80 rounded-3xl shadow-[0_0_60px_rgba(245,158,11,0.45)] text-white overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Top ambient glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-36 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Vintage Dispatch Telegram Header */}
        <div className="w-full leather-belt px-5 py-3.5 flex items-center justify-between border-b-2 border-amber-500/60 shrink-0 bg-stone-950/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full border border-amber-400/80 bg-amber-950/80 flex items-center justify-center shadow-lg shrink-0">
              <Compass className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '18s' }} />
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-amber-400/80 font-bold">
                DILEMMI DI SPEDIZIONE • TAPPA {dilemma.stageNumber} / 12
              </div>
              <div className="text-xs font-serif font-black text-amber-100 tracking-wide">
                {dilemma.location} ({dilemma.era})
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>BIVIO MORALE</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          
          {/* Situation Card */}
          <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-500/30 shadow-inner">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-serif font-bold uppercase tracking-wider mb-1.5">
              <Scroll className="w-3.5 h-3.5 text-amber-400" />
              <span>{dilemma.title}</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-serif italic">
              "{dilemma.situation}"
            </p>
          </div>

          <div className="text-center text-[11px] font-bold tracking-wider uppercase text-amber-400/90 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-amber-500/40" />
            <span>Scegli come deve agire la spedizione</span>
            <span className="w-8 h-px bg-amber-500/40" />
          </div>

          {/* 2 Interactive Dilemma Choice Cards */}
          <div className="grid grid-cols-1 gap-3">
            {[choiceA, choiceB].map((choice) => {
              const isSelected = selectedChoiceId === choice.id;
              return (
                <button
                  key={choice.id}
                  disabled={isConfirmed}
                  onClick={() => handleSelect(choice)}
                  type="button"
                  className={`relative text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-amber-300 bg-amber-500/25 shadow-[0_0_30px_rgba(251,191,36,0.6)] scale-[1.01]'
                      : isConfirmed
                      ? 'opacity-40 border-stone-800 bg-stone-950/40 cursor-default'
                      : 'border-amber-900/50 bg-stone-950/70 hover:border-amber-500/80 hover:bg-stone-900/90 active:scale-[0.99] shadow-lg'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2.5 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl leading-none">{choice.icon}</span>
                      <span className="text-sm font-serif font-black text-amber-100 tracking-wide">
                        {choice.title}
                      </span>
                    </div>

                    <div className={`px-2 py-0.5 rounded-full border text-[9px] font-bold tracking-wider uppercase flex items-center gap-1 ${getAlignmentStyle(choice.alignment)}`}>
                      <span>{choice.badge}</span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed mb-3">
                    {choice.description}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-amber-900/40">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-900/90 border border-amber-500/40 text-[11px] font-bold text-amber-200 shadow-sm">
                      {getRewardIcon(choice.rewardType)}
                      <span>Ricompensa: {choice.rewardText}</span>
                    </div>

                    {isSelected ? (
                      <div className="flex items-center gap-1 text-xs font-bold text-emerald-300 animate-pulse">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Scelta Adottata!</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-[11px] font-bold text-amber-400/80">
                        <span>Adotta Strategia</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {isConfirmed && (
            <div className="p-3 rounded-xl bg-amber-950/50 border border-amber-400/60 text-center text-xs font-serif text-amber-200 animate-fade-in shadow-lg">
              <Sparkles className="w-4 h-4 text-amber-300 inline-block mr-1.5 animate-spin" />
              <span>Rotta aggiornata nel Taccuino di Spedizione! Proseguimento verso la prossima tappa...</span>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
