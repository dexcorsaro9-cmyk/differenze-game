import React, { useState, useEffect } from 'react';
import { X, Download, Share2, Award, Check, Loader2 } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import {
  renderCertificateCanvas,
  downloadCertificatePng,
  type CertificateData,
} from '../utils/certificateGenerator';
import type { ExplorerProfile } from '../data/avatarData';
import { getExpeditionTelemetry, formatPlayTime, getAccuracyPercentage } from '../utils/telemetry';

interface ExpeditionCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ExplorerProfile;
  completedLevelIds?: number[];
  levelStars?: Record<number, number>;
  bestTimes?: Record<number, number>;
  discoveredRelicCount?: number;
  endingId?: 'academy' | 'secret_archive' | 'sacred_jungle' | null;
  endingTitle?: string;
}

export const ExpeditionCertificateModal: React.FC<ExpeditionCertificateModalProps> = ({
  isOpen,
  onClose,
  profile,
  completedLevelIds = [],
  levelStars = {},
  bestTimes = {},
  discoveredRelicCount = 0,
  endingId = null,
  endingTitle = '',
}) => {
  const { t, language } = useTranslation();
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [shareSuccess, setShareSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) {
      setDataUrl(null);
      setIsLoading(true);
      return;
    }

    sound.playHeavyStamp();
    sound.playVictory();
    triggerHaptic('success');

    const telemetry = getExpeditionTelemetry(completedLevelIds, bestTimes);
    const totalStars = Object.values(levelStars).reduce((acc, s) => acc + (s || 0), 0);
    const accuracy = getAccuracyPercentage(telemetry);
    const playTimeStr = formatPlayTime(telemetry.totalPlayTimeSeconds);

    const certData: CertificateData = {
      profile,
      completedLevelsCount: completedLevelIds.length,
      totalStars,
      relicsCount: discoveredRelicCount,
      totalTimeFormatted: playTimeStr,
      accuracyPct: accuracy,
      endingId,
      endingTitle,
      language: language as 'it' | 'en' | 'es',
    };

    let isMounted = true;
    renderCertificateCanvas(certData)
      .then((canvas) => {
        if (isMounted) {
          setDataUrl(canvas.toDataURL('image/png'));
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error('Failed to generate certificate:', err);
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [
    isOpen,
    profile,
    completedLevelIds,
    levelStars,
    bestTimes,
    discoveredRelicCount,
    endingId,
    endingTitle,
    language,
  ]);

  if (!isOpen) return null;

  const handleDownload = async () => {
    setIsDownloading(true);
    sound.playPaperInspect();
    triggerHaptic('medium');

    const telemetry = getExpeditionTelemetry(completedLevelIds, bestTimes);
    const totalStars = Object.values(levelStars).reduce((acc, s) => acc + (s || 0), 0);

    const certData: CertificateData = {
      profile,
      completedLevelsCount: completedLevelIds.length,
      totalStars,
      relicsCount: discoveredRelicCount,
      totalTimeFormatted: formatPlayTime(telemetry.totalPlayTimeSeconds),
      accuracyPct: getAccuracyPercentage(telemetry),
      endingId,
      endingTitle,
      language: language as 'it' | 'en' | 'es',
    };

    try {
      await downloadCertificatePng(certData);
      sound.playSuccess();
      triggerHaptic('success');
    } catch (err) {
      console.error(err);
      sound.playError();
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = async () => {
    sound.playTap();
    if (navigator.share && dataUrl) {
      try {
        const blob = await (await fetch(dataUrl)).blob();
        const file = new File([blob], 'paititi_diploma_1928.png', { type: 'image/png' });
        await navigator.share({
          title: t.certificate.shareTitle,
          text: t.certificate.shareText,
          files: [file],
        });
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 3000);
      } catch {
        // user canceled or unsupported file share
      }
    } else if (navigator.clipboard && dataUrl) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 3000);
      } catch {}
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-5 bg-black/90 backdrop-blur-md animate-fade-in font-serif select-none"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#1b0e06] border-2 border-amber-600/80 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)]">
        {/* Header */}
        <div className="px-5 py-3.5 bg-gradient-to-r from-[#291407] via-[#3a1d0b] to-[#291407] border-b border-amber-500/40 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/60 flex items-center justify-center text-amber-300 shadow">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-amber-100 font-serif leading-tight">
                {t.certificate.modalTitle}
              </h3>
              <p className="text-[10px] font-mono text-amber-400/80 uppercase">
                {t.certificate.modalSubtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-600 transition cursor-pointer active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Parchment Display Viewport */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex items-center justify-center bg-[#0d0703]/80 custom-scrollbar">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3 text-amber-300">
              <Loader2 className="w-10 h-10 animate-spin text-amber-400" />
              <span className="text-xs font-mono uppercase tracking-widest">
                Composizione Diploma d'Onore 1928...
              </span>
            </div>
          ) : dataUrl ? (
            <div className="relative group max-w-full">
              <img
                src={dataUrl}
                alt="Certificato di Spedizione 1928"
                className="w-full h-auto max-h-[65vh] object-contain rounded-xl shadow-2xl border-4 border-[#5a3416] transition-transform duration-300 group-hover:scale-[1.01]"
              />
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/70 text-[10px] text-amber-200 font-mono pointer-events-none">
                1600 × 1130 px • HD
              </div>
            </div>
          ) : null}
        </div>

        {/* Footer Actions */}
        <div className="p-3.5 sm:p-4 bg-gradient-to-r from-[#241206] via-[#1b0d04] to-[#241206] border-t border-amber-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-amber-300/80 font-sans italic hidden sm:block">
            {shareSuccess ? (
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> {t.certificate.copiedNotice}
              </span>
            ) : (
              t.certificate.confermentText
            )}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto font-sans">
            <button
              type="button"
              onClick={handleShare}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-amber-600/40 text-amber-200 text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.certificate.shareBtn}</span>
            </button>

            <button
              type="button"
              disabled={isDownloading || isLoading}
              onClick={handleDownload}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:brightness-110 text-stone-950 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95 transition cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{t.certificate.downloadBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
