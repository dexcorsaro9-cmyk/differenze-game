import React from 'react';
import { X, Star, CheckCircle2, Play } from 'lucide-react';
import type { Level } from '../types/game';


interface LevelSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  levels: Level[];
  currentLevelId: number;
  completedLevelIds: number[];
  onSelectLevel: (levelId: number) => void;
}

export const LevelSelectModal: React.FC<LevelSelectModalProps> = ({
  isOpen,
  onClose,
  levels,
  currentLevelId,
  completedLevelIds,
  onSelectLevel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-white flex flex-col max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-xl font-extrabold text-white">
              Capitoli & Memorie
            </h3>
            <p className="text-xs text-slate-400">
              Scegli una memoria da esplorare e ripristinare
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Level List Grid */}
        <div className="flex-1 overflow-y-auto py-5 space-y-3.5 pr-1">
          {levels.map(level => {
            const isCompleted = completedLevelIds.includes(level.id);
            const isCurrent = level.id === currentLevelId;

            return (
              <div
                key={level.id}
                onClick={() => {
                  onSelectLevel(level.id);
                  onClose();
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                  isCurrent
                    ? 'bg-amber-500/15 border-amber-400/80 shadow-[0_0_20px_rgba(251,191,36,0.15)]'
                    : isCompleted
                    ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-800/80'
                    : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Thumbnail Preview */}
                <div className="w-20 h-16 rounded-xl overflow-hidden bg-slate-950 border border-slate-700/60 shrink-0 relative">
                  <img
                    src={level.imageA}
                    alt={level.title}
                    className="w-full h-full object-cover"
                  />
                  {isCompleted && (
                    <div className="absolute inset-0 bg-emerald-950/40 backdrop-blur-[1px] flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400 drop-shadow" />
                    </div>
                  )}
                </div>

                {/* Level Title & Era */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 px-2 py-0.5 rounded-full bg-amber-950/60 border border-amber-500/30">
                      Capitolo {level.chapterNumber}
                    </span>
                    <span className="text-[10px] text-slate-400">{level.difficulty}</span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-white truncate mt-1">
                    {level.title}
                  </h4>
                  <p className="text-xs text-slate-400 truncate">
                    {level.era}
                  </p>
                </div>

                {/* Action button / Status */}
                <div className="flex items-center gap-3 shrink-0">
                  {isCompleted ? (
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                      <Star className="w-4 h-4 fill-amber-400" />
                    </div>
                  ) : (
                    <button className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow">
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Gioca</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
