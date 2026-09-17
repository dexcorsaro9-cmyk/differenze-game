import React, { useEffect } from 'react';
import {
  X,
  Crosshair,
  Compass,
  FileText,
  MapPin,
  CheckCircle2,
  Sparkles,
  Shield,
  KeyRound,
  AlertTriangle,
  ZoomIn,
} from 'lucide-react';
import type { Difference } from '../types/game';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { useTranslation } from '../i18n/LanguageContext';

interface EvidenceInspectModalProps {
  difference: Difference | null;
  isOpen: boolean;
  onClose: () => void;
  onFocusScene?: (x: number, y: number) => void;
  index: number;
  total: number;
  chapterNumber?: number;
}

export const EvidenceInspectModal: React.FC<EvidenceInspectModalProps> = ({
  difference,
  isOpen,
  onClose,
  onFocusScene,
  index,
  total,
  chapterNumber = 1,
}) => {
  const { t, interpolate } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      sound.playPaperInspect();
      triggerHaptic('light');
    }
  }, [isOpen]);

  if (!isOpen || !difference) return null;

  const handleFocus = () => {
    sound.playArchiveLens();
    triggerHaptic('medium');
    if (onFocusScene) {
      onFocusScene(difference.x, difference.y);
    }
    onClose();
  };

  // Determine clue type display
  const getClueBadge = () => {
    switch (difference.clueType) {
      case 'stolen_relic':
        return {
          label: t.evidenceInspect.stolenRelic,
          icon: Shield,
          color: 'text-amber-400 bg-amber-950/60 border-amber-500/40',
        };
      case 'sabotage':
        return {
          label: t.evidenceInspect.sabotage,
          icon: AlertTriangle,
          color: 'text-rose-400 bg-rose-950/60 border-rose-500/40',
        };
      case 'dark_seal':
        return {
          label: t.evidenceInspect.darkSeal,
          icon: Sparkles,
          color: 'text-purple-400 bg-purple-950/60 border-purple-500/40',
        };
      case 'forced_lock':
        return {
          label: t.evidenceInspect.forcedLock,
          icon: KeyRound,
          color: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/40',
        };
      case 'torn_evidence':
        return {
          label: t.evidenceInspect.tornEvidence,
          icon: FileText,
          color: 'text-cyan-400 bg-cyan-950/60 border-cyan-500/40',
        };
      default:
        return {
          label: t.evidenceInspect.spatialAnomaly,
          icon: Compass,
          color: 'text-amber-300 bg-amber-950/50 border-amber-500/30',
        };
    }
  };

  const badge = getClueBadge();
  const BadgeIcon = badge.icon;

  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn select-none">
      {/* 1928 Vintage Polaroid / Specimen Card Container */}
      <div className="relative w-full max-w-sm bg-[#fcf8ee] text-stone-900 border-4 border-[#e6dbc4] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(217,119,6,0.3)] overflow-hidden flex flex-col font-serif transform transition-all duration-300 hover:scale-[1.01]">
        
        {/* Top Header Strip with Catalog Tag & Close Button */}
        <div className="px-4 py-2.5 bg-[#ebe0cb] border-b border-[#d8c8aa] flex items-center justify-between text-stone-700">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-amber-900/10 border border-amber-900/20 text-[10px] font-mono font-bold tracking-widest text-amber-950 uppercase">
              SPECIMEN #{String(index).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-sans font-medium text-stone-600 uppercase">
              {t.header.chapter} {chapterNumber}
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              sound.playTap();
              onClose();
            }}
            className="p-1 rounded-full bg-stone-300/60 hover:bg-stone-400/60 text-stone-800 transition cursor-pointer"
            aria-label={t.common.close}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Vintage Polaroid / Specimen Photo Mockup */}
        <div className="p-4 flex flex-col items-center">
          <div className="relative w-full aspect-video bg-gradient-to-br from-stone-800 via-stone-900 to-amber-950 rounded-lg border-2 border-stone-400/40 shadow-inner overflow-hidden flex items-center justify-center">
            {/* Grid Reticle overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            />

            {/* Target crosshair at relative position */}
            <div
              className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-amber-400/80 flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(251,191,36,0.6)]"
              style={{
                left: `${Math.min(85, Math.max(15, difference.x))}%`,
                top: `${Math.min(80, Math.max(20, difference.y))}%`,
              }}
            >
              <Crosshair className="w-6 h-6 text-amber-300" />
              <div className="absolute -top-4 bg-amber-500 text-stone-950 text-[9px] font-mono font-black px-1 rounded shadow">
                X:{Math.round(difference.x)} Y:{Math.round(difference.y)}
              </div>
            </div>

            {/* Rubber Stamp mark in corner */}
            <div className="absolute top-2 right-2 rotate-[-12deg] border-2 border-red-700/80 text-red-700/90 px-2 py-0.5 rounded text-[10px] font-mono font-black uppercase tracking-wider select-none pointer-events-none bg-red-100/40 shadow-sm">
              {t.evidenceInspect.acquiredStamp}
            </div>

            {/* Bottom Coordinate Indicator */}
            <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10 text-amber-300 text-[10px] font-mono">
              <MapPin className="w-3 h-3 text-amber-400" />
              {interpolate(t.evidenceInspect.coordinates, { x: Math.round(difference.x), y: Math.round(difference.y) })}
            </div>
          </div>

          {/* Clue Type Tag */}
          <div className="w-full mt-3 flex items-center justify-between">
            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-sans font-bold shadow-xs ${badge.color}`}>
              <BadgeIcon className="w-3.5 h-3.5" />
              {badge.label}
            </div>
            <div className="flex items-center gap-1 text-emerald-700 text-xs font-sans font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              {t.evidenceInspect.detectedOnScene}
            </div>
          </div>

          {/* Clue Title & Lore Note */}
          <div className="w-full mt-3 text-left">
            <h3 className="text-base font-bold text-stone-900 tracking-tight flex items-center gap-1.5">
              <span>{difference.name}</span>
            </h3>

            {/* Typewriter text note */}
            <div className="relative mt-2 p-3 bg-[#f4ebd5] border-l-4 border-amber-700 rounded-r-lg shadow-inner">
              <p className="text-xs italic text-stone-800 font-mono leading-relaxed">
                &ldquo;{difference.loreClue}&rdquo;
              </p>
              <div className="mt-1 text-right text-[10px] font-mono text-stone-500">
                {t.evidenceInspect.typewriterFooter}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full mt-4 flex items-center gap-2">
            {onFocusScene && (
              <button
                type="button"
                onClick={handleFocus}
                className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 active:scale-95 text-stone-950 font-sans font-black text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5 transition cursor-pointer border border-amber-400/60"
              >
                <ZoomIn className="w-4 h-4" />
                {t.evidenceInspect.focusScene}
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                sound.playTap();
                onClose();
              }}
              className="py-2.5 px-4 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-700 font-sans font-bold text-xs uppercase tracking-wider transition cursor-pointer border border-stone-300"
            >
              {t.common.close}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
