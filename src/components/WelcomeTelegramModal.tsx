import React, { useEffect } from 'react';
import { X, ZoomIn, Scroll, Compass, ShieldAlert, Stamp } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';

interface WelcomeTelegramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WelcomeTelegramModal: React.FC<WelcomeTelegramModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      sound.playPaperInspect();
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAccept = () => {
    sound.playHeavyStamp();
    triggerHaptic('relic_discovered');
    try {
      localStorage.setItem('paititi_seen_telegram_v1', 'true');
    } catch {
      // safe fallback
    }
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="telegram-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl my-auto bg-[#fbf6e9] text-[#2c1810] rounded-lg shadow-2xl border-4 border-[#8b5a2b]/60 overflow-hidden font-serif">
        {/* Vintage Telegraph Tape / Marconi Borders */}
        <div className="h-3 bg-gradient-to-r from-[#8b5a2b] via-[#c99738] to-[#8b5a2b] opacity-80" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-[#ebdcc2] hover:bg-[#dfcaa8] text-[#5a3614] transition-colors border border-[#8b5a2b]/30 shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-5 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto custom-scrollbar">
          {/* Telegraph Header */}
          <div className="text-center border-b-2 border-dashed border-[#8b5a2b]/40 pb-4">
            <div className="text-[10px] sm:text-xs font-mono tracking-widest text-[#8b5a2b] uppercase font-bold mb-1">
              {t.welcomeTelegram.headerTop}
            </div>
            <div className="text-xs sm:text-sm font-mono tracking-wider text-[#4a2e18] font-semibold">
              {t.welcomeTelegram.dispatchNumber}
            </div>
          </div>

          {/* Metadata Grid & Confidential Red Stamp */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-[#f2e7d0]/70 p-3 rounded border border-[#8b5a2b]/20 text-xs font-mono">
            <div className="space-y-1">
              <div className="text-[#6d4624]">
                <span className="font-bold text-[#3d2310]">ORIGINE:</span> {t.welcomeTelegram.originDate}
              </div>
              <div className="text-[#6d4624]">
                <span className="font-bold text-[#3d2310]">INFO:</span> {t.welcomeTelegram.recipientLabel}
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 border-2 border-red-700/80 text-red-700 font-bold uppercase tracking-widest text-xs rounded -rotate-2 bg-red-50/50 shadow-sm">
              <ShieldAlert className="w-3.5 h-3.5 text-red-700" />
              {t.welcomeTelegram.confidentialStamp}
            </div>
          </div>

          {/* Letter Body */}
          <div className="space-y-3 text-sm sm:text-base leading-relaxed text-[#3a2012]">
            <p className="font-bold italic text-base sm:text-lg text-[#2a1508]" id="telegram-title">
              {t.welcomeTelegram.salutation}
            </p>
            <p className="font-serif">
              {t.welcomeTelegram.introBody}
            </p>
          </div>

          {/* 3 Core Field Directives */}
          <div className="space-y-3 pt-2">
            {/* Directive 1 */}
            <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-[#8b5a2b]/25 shadow-sm">
              <div className="p-2 rounded-full bg-[#e8d7be] text-[#7a491e] shrink-0 mt-0.5">
                <ZoomIn className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#3d2310]">
                  {t.welcomeTelegram.directive1Title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5d381c] mt-0.5 leading-relaxed">
                  {t.welcomeTelegram.directive1Desc}
                </p>
              </div>
            </div>

            {/* Directive 2 */}
            <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-[#8b5a2b]/25 shadow-sm">
              <div className="p-2 rounded-full bg-[#e8d7be] text-[#7a491e] shrink-0 mt-0.5">
                <Scroll className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#3d2310]">
                  {t.welcomeTelegram.directive2Title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5d381c] mt-0.5 leading-relaxed">
                  {t.welcomeTelegram.directive2Desc}
                </p>
              </div>
            </div>

            {/* Directive 3 */}
            <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-[#8b5a2b]/25 shadow-sm">
              <div className="p-2 rounded-full bg-[#e8d7be] text-[#7a491e] shrink-0 mt-0.5">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#3d2310]">
                  {t.welcomeTelegram.directive3Title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5d381c] mt-0.5 leading-relaxed">
                  {t.welcomeTelegram.directive3Desc}
                </p>
              </div>
            </div>
          </div>

          {/* Urgent Warning & Bellini Signature */}
          <div className="pt-2 border-t border-[#8b5a2b]/30 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div className="text-xs italic text-[#724520] max-w-xs font-serif">
              "{t.welcomeTelegram.closingUrgent}"
            </div>
            <div className="text-right self-end sm:self-auto font-mono">
              <div className="text-sm sm:text-base font-bold text-[#311707] tracking-wide">
                {t.welcomeTelegram.senderSignature}
              </div>
              <div className="text-[11px] text-[#784e27] italic">
                {t.welcomeTelegram.senderTitle}
              </div>
            </div>
          </div>

          {/* Wax Seal Action Button */}
          <div className="pt-4 flex justify-center">
            <button
              onClick={handleAccept}
              className="group relative flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#991b1b] via-[#b91c1c] to-[#7f1d1d] text-[#fef2f2] font-serif font-bold text-sm sm:text-base tracking-wider uppercase shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all border-2 border-[#fca5a5]/40"
            >
              <div className="w-7 h-7 rounded-full bg-[#7f1d1d] border border-[#fca5a5]/60 flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform">
                <Stamp className="w-4 h-4 text-[#fef08a]" />
              </div>
              <span>{t.welcomeTelegram.acceptMissionBtn}</span>
            </button>
          </div>
        </div>

        {/* Vintage Bottom Strip */}
        <div className="h-2 bg-[#8b5a2b]/40" />
      </div>
    </div>
  );
};
