import React, { useEffect, useState } from 'react';
import { WifiOff, Wifi, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/audio';
import { useTranslation } from '../i18n/LanguageContext';

interface OfflineStatusToastProps {
  isOffline: boolean;
}

export const OfflineStatusToast: React.FC<OfflineStatusToastProps> = ({ isOffline }) => {
  const { t } = useTranslation();
  const [showToast, setShowToast] = useState<boolean>(isOffline);
  const [wasOffline, setWasOffline] = useState<boolean>(isOffline);
  const [justReconnected, setJustReconnected] = useState<boolean>(false);

  useEffect(() => {
    if (isOffline) {
      setShowToast(true);
      setWasOffline(true);
      setJustReconnected(false);
      sound.playTap();
    } else if (wasOffline) {
      // Just reconnected
      setJustReconnected(true);
      setShowToast(true);
      sound.playSuccess();
      const timer = setTimeout(() => {
        setShowToast(false);
        setJustReconnected(false);
        setWasOffline(false);
      }, 3500);
      return () => clearTimeout(timer);
    } else {
      setShowToast(false);
    }
  }, [isOffline, wasOffline]);

  if (!showToast) return null;

  return (
    <aside
      aria-label={justReconnected ? t.offline.reconnectedTitle : t.offline.offlineTitle}
      className="fixed top-3 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-bounce-short max-w-[92vw]"
    >
      <div
        className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border shadow-[0_4px_20px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 ${
          justReconnected
            ? 'bg-emerald-950/90 border-emerald-500/70 text-emerald-200'
            : 'bg-gradient-to-r from-amber-950/95 via-stone-900/95 to-amber-950/95 border-amber-500/70 text-amber-200'
        }`}
      >
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${
            justReconnected
              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
              : 'bg-amber-500/20 border-amber-400 text-amber-300 animate-pulse'
          }`}
        >
          {justReconnected ? (
            <CheckCircle2 className="w-3.5 h-3.5" />
          ) : (
            <WifiOff className="w-3.5 h-3.5" />
          )}
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-[11px] font-black font-serif uppercase tracking-wider text-amber-100">
            {justReconnected ? t.offline.reconnectedTitle : t.offline.offlineTitle}
          </span>
          <span className="text-[9px] text-stone-300 font-sans">
            {justReconnected ? t.offline.reconnectedDesc : t.offline.offlineDesc}
          </span>
        </div>

        {justReconnected && <Wifi className="w-3.5 h-3.5 text-emerald-400 ml-1 shrink-0" />}
      </div>
    </aside>
  );
};
