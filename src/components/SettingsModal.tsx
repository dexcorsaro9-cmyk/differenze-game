import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Volume2,
  VolumeX,
  Smartphone,
  Sparkles,
  Music,
  RotateCcw,
  Download,
  Upload,
  Archive,
  Check,
  Globe,
  ShieldCheck,
  ExternalLink,
  Copy,
  Clipboard,
  Scroll,
  CheckCircle2,
  HardDriveDownload,
} from 'lucide-react';
import type { GameSettings } from '../types/game';
import { useTranslation } from '../i18n/LanguageContext';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import {
  getOfflineCacheStatus,
  downloadExpeditionOffline,
  type OfflineCacheStatus,
} from '../utils/offlineManager';

const BACKUP_STORAGE_KEYS = [
  'differenze_progress_v1',
  'differenze_level_stars_v1',
  'differenze_best_times_v1',
  'differenze_economy_v1',
  'differenze_inventory_v1',
  'differenze_relics_v1',
  'differenze_medals_v1',
  'differenze_claimed_medals_v1',
  'differenze_claimed_visas_v1',
  'differenze_avatar_v1',
  'differenze_expedition_choices_v1',
  'differenze_tutorial_v1',
  'differenze_seen_briefings_v1',
  'differenze_settings_v1',
  'paititi_daily_challenge_v1',
  'differenze_atmosphere',
  'differenze_photofilter',
  'differenze_vintage_crackle',
  'differenze_bgm_enabled',
  'paititi_seen_telegram_v1',
  'differenze_telemetry_v1',
];

function buildBackupPayload(): Record<string, any> {
  const data: Record<string, any> = {
    game: 'Paititi_1928',
    version: '2.0',
    exportedAt: new Date().toISOString(),
    keys: {},
  };

  BACKUP_STORAGE_KEYS.forEach((key) => {
    const val = localStorage.getItem(key);
    if (val !== null) {
      try {
        data.keys[key] = JSON.parse(val);
      } catch {
        data.keys[key] = val;
      }
    }
  });

  return data;
}

function encodeSaveCode(data: Record<string, any>): string {
  const jsonStr = JSON.stringify(data);
  const base64 = btoa(
    encodeURIComponent(jsonStr).replace(/%([0-9A-F]{2})/g, (_, p1) =>
      String.fromCharCode(parseInt(p1, 16))
    )
  );
  return `PAITITI_1928_SAVE:${base64}`;
}

function decodeSaveCode(code: string): Record<string, any> | null {
  try {
    let raw = code.trim();
    if (raw.startsWith('PAITITI_1928_SAVE:')) {
      raw = raw.replace('PAITITI_1928_SAVE:', '').trim();
    }
    const decodedStr = decodeURIComponent(
      Array.prototype.map
        .call(atob(raw), (c: string) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(decodedStr);
  } catch {
    try {
      return JSON.parse(code.trim());
    } catch {
      return null;
    }
  }
}

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: GameSettings;
  onUpdateSettings: (newSettings: Partial<GameSettings>) => void;
  onResetProgress: () => void;
  onOpenTutorial?: () => void;
  onOpenTelegram?: () => void;
  isInstalled?: boolean;
  onOpenInstall?: () => void;
  isOffline?: boolean;
  isBgmPlaying?: boolean;
  onToggleBgm?: () => void;
  bgmTheme?: 'auto' | 'exploration' | 'excavation' | 'sacred_temple';
  onChangeBgmTheme?: (theme: 'auto' | 'exploration' | 'excavation' | 'sacred_temple') => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  onResetProgress,
  onOpenTutorial,
  onOpenTelegram,
  isInstalled = false,
  onOpenInstall,
  isOffline = false,
  isBgmPlaying = false,
  onToggleBgm,
  bgmTheme = 'auto',
  onChangeBgmTheme,
}) => {
  const { language, setLanguage, t, interpolate } = useTranslation();
  const [backupStatus, setBackupStatus] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Code backup sub-modal
  const [isCodeModalOpen, setIsCodeModalOpen] = useState<boolean>(false);
  const [codeModalMode, setCodeModalMode] = useState<'copy' | 'paste'>('copy');
  const [saveCodeText, setSaveCodeText] = useState<string>('');
  const [codeCopiedToast, setCodeCopiedToast] = useState<boolean>(false);

  // Offline pre-caching state
  const [offlineStatus, setOfflineStatus] = useState<OfflineCacheStatus | null>(null);
  const [isDownloadingOffline, setIsDownloadingOffline] = useState<boolean>(false);
  const [downloadProgress, setDownloadProgress] = useState<{ loaded: number; total: number; percent: number } | null>(null);
  const [offlineMessage, setOfflineMessage] = useState<string | null>(null);

  // Load offline status when modal opens
  useEffect(() => {
    if (isOpen) {
      getOfflineCacheStatus()
        .then(setOfflineStatus)
        .catch(() => {});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Handle Export Backup JSON File
  const handleExportBackup = () => {
    try {
      const data = buildBackupPayload();
      const jsonStr = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const nowStr = new Date().toISOString().slice(0, 10);
      a.href = url;
      a.download = `paititi_1928_backup_${nowStr}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(jsonStr).catch(() => {});
      }

      sound.playSuccess();
      setBackupStatus(t.settings.backupExportSuccess);
      setTimeout(() => setBackupStatus(null), 3500);
    } catch {
      sound.playError();
      setBackupStatus(t.settings.backupExportError);
      setTimeout(() => setBackupStatus(null), 3000);
    }
  };

  // Handle Import Backup JSON File
  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const parsed = JSON.parse(text);

        const keysToRestore = parsed.keys || parsed;
        if (!keysToRestore || (!keysToRestore.differenze_progress_v1 && !keysToRestore.differenze_economy_v1)) {
          sound.playError();
          alert(t.settings.backupInvalidFile);
          return;
        }

        let count = 0;
        BACKUP_STORAGE_KEYS.forEach((key) => {
          if (keysToRestore[key] !== undefined) {
            const val =
              typeof keysToRestore[key] === 'string'
                ? keysToRestore[key]
                : JSON.stringify(keysToRestore[key]);
            localStorage.setItem(key, val);
            count++;
          }
        });

        sound.playVictory();
        alert(interpolate(t.settings.backupImportSuccess, { count }));
        window.location.reload();
      } catch {
        sound.playError();
        alert(t.settings.backupCorrupted);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Open Export Code Modal
  const handleOpenExportCode = () => {
    try {
      const data = buildBackupPayload();
      const code = encodeSaveCode(data);
      setSaveCodeText(code);
      setCodeModalMode('copy');
      setIsCodeModalOpen(true);

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(code)
          .then(() => {
            setCodeCopiedToast(true);
            setTimeout(() => setCodeCopiedToast(false), 2500);
          })
          .catch(() => {});
      }
      sound.playPaperInspect();
    } catch {
      sound.playError();
    }
  };

  // Open Import Code Modal
  const handleOpenImportCode = () => {
    setSaveCodeText('');
    setCodeModalMode('paste');
    setIsCodeModalOpen(true);
    sound.playTap();
  };

  // Execute Restore from Code
  const handleRestoreFromCode = () => {
    if (!saveCodeText.trim()) return;

    const parsed = decodeSaveCode(saveCodeText);
    if (!parsed) {
      sound.playError();
      alert(t.settings.invalidCode);
      return;
    }

    const keysToRestore = parsed.keys || parsed;
    if (!keysToRestore || (!keysToRestore.differenze_progress_v1 && !keysToRestore.differenze_economy_v1)) {
      sound.playError();
      alert(t.settings.invalidCode);
      return;
    }

    let count = 0;
    BACKUP_STORAGE_KEYS.forEach((key) => {
      if (keysToRestore[key] !== undefined) {
        count++;
      }
    });

    const confirmMsg = interpolate(t.settings.restoreConfirm, { count });
    if (!window.confirm(confirmMsg)) return;

    BACKUP_STORAGE_KEYS.forEach((key) => {
      if (keysToRestore[key] !== undefined) {
        const val =
          typeof keysToRestore[key] === 'string'
            ? keysToRestore[key]
            : JSON.stringify(keysToRestore[key]);
        localStorage.setItem(key, val);
      }
    });

    sound.playVictory();
    triggerHaptic('success');
    alert(interpolate(t.settings.backupImportSuccess, { count }));
    window.location.reload();
  };

  // Handle Download Offline Assets
  const handleStartOfflineDownload = async () => {
    if (isDownloadingOffline) return;

    setIsDownloadingOffline(true);
    setOfflineMessage(t.settings.downloadingOffline);
    sound.playTap();
    triggerHaptic('medium');

    try {
      const result = await downloadExpeditionOffline((loaded, total, percent) => {
        setDownloadProgress({ loaded, total, percent });
      });

      const updatedStatus = await getOfflineCacheStatus();
      setOfflineStatus(updatedStatus);

      if (result.success) {
        sound.playSuccess();
        triggerHaptic('success');
        setOfflineMessage(t.settings.offlineReady);
      } else {
        sound.playError();
        setOfflineMessage(t.settings.offlineError);
      }
    } catch (err) {
      console.error(err);
      sound.playError();
      setOfflineMessage(t.settings.offlineError);
    } finally {
      setIsDownloadingOffline(false);
      setTimeout(() => {
        setOfflineMessage(null);
        setDownloadProgress(null);
      }, 4000);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pb-4 pt-10 sm:pt-12 bg-black/80 backdrop-blur-md animate-fade-in">
        <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 border border-slate-700/80 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] text-white max-h-[90vh] overflow-y-auto custom-scrollbar">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <h3 className="text-xl font-extrabold text-white font-serif">
              {t.settings.title}
            </h3>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="py-5 space-y-4">
            {/* Language Selector (IT / EN / ES) */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-stone-900/70 to-amber-950/40 border border-amber-600/50 space-y-2.5">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <h5 className="text-sm font-bold text-white font-serif">{t.settings.language}</h5>
                  <p className="text-xs text-amber-200/70">{t.settings.languageHelp}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1">
                {[
                  { id: 'it', label: 'Italiano', flag: '🇮🇹' },
                  { id: 'en', label: 'English', flag: '🇬🇧' },
                  { id: 'es', label: 'Español', flag: '🇪🇸' },
                ].map(lang => (
                  <button
                    key={lang.id}
                    type="button"
                    onClick={() => setLanguage(lang.id as any)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      language === lang.id
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 border-amber-300 text-stone-950 shadow-[0_0_12px_rgba(245,158,11,0.6)] font-black'
                        : 'bg-slate-900/80 border-slate-700 text-stone-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-base leading-none">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sound Toggle */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
              <div className="flex items-center gap-3">
                {settings.soundEnabled ? (
                  <Volume2 className="w-5 h-5 text-amber-400" />
                ) : (
                  <VolumeX className="w-5 h-5 text-slate-500" />
                )}
                <div>
                  <h5 className="text-sm font-bold text-white">{t.settings.soundEffects}</h5>
                  <p className="text-xs text-slate-400">{t.settings.soundEffectsHelp}</p>
                </div>
              </div>

              <button
                onClick={() => onUpdateSettings({ soundEnabled: !settings.soundEnabled })}
                className={`w-12 h-7 rounded-full transition-colors relative p-1 ${
                  settings.soundEnabled ? 'bg-amber-500' : 'bg-slate-700'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    settings.soundEnabled ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Vibration Toggle */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
              <div className="flex items-center gap-3">
                <Smartphone className={`w-5 h-5 ${settings.vibrationEnabled ? 'text-amber-400' : 'text-slate-500'}`} />
                <div>
                  <h5 className="text-sm font-bold text-white">{t.settings.vibration}</h5>
                  <p className="text-xs text-slate-400">{t.settings.vibrationHelp}</p>
                </div>
              </div>

              <button
                onClick={() => onUpdateSettings({ vibrationEnabled: !settings.vibrationEnabled })}
                className={`w-12 h-7 rounded-full transition-colors relative p-1 ${
                  settings.vibrationEnabled ? 'bg-amber-500' : 'bg-slate-700'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    settings.vibrationEnabled ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Zen Mode Toggle */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
              <div className="flex items-center gap-3">
                <Sparkles className={`w-5 h-5 ${settings.zenMode ? 'text-teal-400' : 'text-slate-500'}`} />
                <div>
                  <h5 className="text-sm font-bold text-white">{t.settings.zenMode}</h5>
                  <p className="text-xs text-slate-400">{t.settings.zenModeHelp}</p>
                </div>
              </div>

              <button
                onClick={() => onUpdateSettings({ zenMode: !settings.zenMode })}
                className={`w-12 h-7 rounded-full transition-colors relative p-1 ${
                  settings.zenMode ? 'bg-teal-500' : 'bg-slate-700'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    settings.zenMode ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* BGM Orchestral Music Toggle & Themes */}
            <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Music className={`w-5 h-5 ${isBgmPlaying ? 'text-amber-400' : 'text-slate-500'}`} />
                  <div>
                    <h5 className="text-sm font-bold text-white">{t.settings.bgmTitle}</h5>
                    <p className="text-xs text-slate-400">{t.settings.bgmSubtitle}</p>
                  </div>
                </div>

                {onToggleBgm && (
                  <button
                    type="button"
                    onClick={onToggleBgm}
                    className={`w-12 h-7 rounded-full transition-colors relative p-1 cursor-pointer ${
                      isBgmPlaying ? 'bg-amber-500' : 'bg-slate-700'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white transition-transform ${
                        isBgmPlaying ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* BGM Theme Selector */}
              {isBgmPlaying && onChangeBgmTheme && (
                <div className="pt-2 border-t border-slate-700/60">
                  <div className="text-[11px] text-amber-300 font-serif font-bold mb-1.5">
                    {t.settings.bgmThemeTitle}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    {[
                      { id: 'auto', label: t.settings.themeAuto },
                      { id: 'exploration', label: t.settings.themeExploration },
                      { id: 'excavation', label: t.settings.themeExcavation },
                      { id: 'sacred_temple', label: t.settings.themeSacredTemple },
                    ].map(item => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => onChangeBgmTheme(item.id as any)}
                        className={`py-1.5 px-2 rounded-xl text-[11px] font-bold border transition-all cursor-pointer ${
                          bgmTheme === item.id
                            ? 'bg-amber-500 border-amber-300 text-stone-950 shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                            : 'bg-slate-900 border-slate-700 text-stone-300 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* PWA App Installation Section */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-stone-900/60 to-amber-950/40 border border-amber-600/40">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-amber-400" />
                  <h5 className="text-xs font-bold text-amber-100 font-serif">{t.settings.offlineModeTitle}</h5>
                </div>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-mono font-bold">
                  {isOffline ? t.settings.offlineStatusActive : t.settings.offlineStatusReady}
                </span>
              </div>
              <p className="text-[11px] text-stone-300 mb-3 font-sans">
                {t.settings.offlineModeDesc}
              </p>
              {onOpenInstall && (
                <button
                  type="button"
                  onClick={onOpenInstall}
                  className={`w-full py-2.5 px-3 rounded-xl border font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer active:scale-95 ${
                    isInstalled
                      ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-300'
                      : 'bg-amber-500/20 hover:bg-amber-500/30 border-amber-400 text-amber-200 shadow-md'
                  }`}
                >
                  <Download className="w-3.5 h-3.5" />
                  {isInstalled ? t.settings.installedButton : t.settings.installButton}
                </button>
              )}
            </div>

            {/* Offline Pre-cache Engine (Point 2) */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-stone-900/90 via-amber-950/30 to-stone-900/90 border border-amber-600/40 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <HardDriveDownload className="w-4 h-4 text-amber-400" />
                  <h5 className="text-xs font-bold text-amber-100 font-serif">
                    {t.settings.offlineStorageTitle}
                  </h5>
                </div>
                {offlineStatus?.isReady ? (
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-mono font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                    100% Offline
                  </span>
                ) : (
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 font-mono font-bold">
                    {offlineStatus?.cached ?? 0} / {offlineStatus?.total ?? 264}
                  </span>
                )}
              </div>

              <p className="text-[11px] text-stone-300 font-sans leading-relaxed">
                {t.settings.offlineStorageDesc}
              </p>

              {/* Progress Bar when downloading */}
              {isDownloadingOffline && downloadProgress && (
                <div className="space-y-1.5 py-1">
                  <div className="flex justify-between text-[10px] font-mono text-amber-300">
                    <span>{interpolate(t.settings.offlineProgress, {
                      loaded: downloadProgress.loaded,
                      total: downloadProgress.total,
                      percent: downloadProgress.percent,
                    })}</span>
                    <span>{downloadProgress.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-950 rounded-full overflow-hidden border border-amber-600/40">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 via-emerald-400 to-amber-300 transition-all duration-200"
                      style={{ width: `${downloadProgress.percent}%` }}
                    />
                  </div>
                </div>
              )}

              {offlineMessage && (
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 rounded-lg px-2.5 py-1.5 animate-fade-in font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{offlineMessage}</span>
                </div>
              )}

              {!isDownloadingOffline && (
                <button
                  type="button"
                  onClick={handleStartOfflineDownload}
                  className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-600/30 to-amber-500/20 hover:from-amber-600/40 hover:to-amber-500/30 border border-amber-500/50 text-amber-200 text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer active:scale-95"
                >
                  <HardDriveDownload className="w-3.5 h-3.5 text-amber-300" />
                  <span>
                    {offlineStatus?.isReady ? t.settings.offlineReady : t.settings.downloadOfflineBtn}
                  </span>
                </button>
              )}
            </div>

            {/* Backup & Ripristino Integrale Salvataggi (Point 1) */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-stone-900/90 via-amber-950/30 to-stone-900/90 border border-amber-600/40 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Archive className="w-4 h-4 text-amber-400" />
                  <h5 className="text-xs font-bold text-amber-100 font-serif">{t.settings.backupSection}</h5>
                </div>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-950 border border-amber-500/40 text-amber-300 font-mono font-bold">
                  JSON & Code v2.0
                </span>
              </div>

              <p className="text-[11px] text-stone-300 font-sans leading-relaxed">
                {t.settings.backupDesc}
              </p>

              {/* JSON Export/Import buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleExportBackup}
                  className="py-2 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400 text-amber-200 text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer active:scale-95"
                >
                  <Download className="w-3.5 h-3.5 text-amber-300" />
                  <span>{t.settings.exportBackup}</span>
                </button>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-stone-200 text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer active:scale-95"
                >
                  <Upload className="w-3.5 h-3.5 text-stone-300" />
                  <span>{t.settings.importBackup}</span>
                </button>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json,application/json"
                  className="hidden"
                  onChange={handleImportBackup}
                />
              </div>

              {/* Mobile Text Code Copy / Paste buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={handleOpenExportCode}
                  className="py-2 px-3 rounded-xl bg-indigo-950/40 hover:bg-indigo-900/50 border border-indigo-500/40 text-indigo-200 text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer active:scale-95"
                >
                  <Copy className="w-3.5 h-3.5 text-indigo-300" />
                  <span>{t.settings.exportCode}</span>
                </button>

                <button
                  type="button"
                  onClick={handleOpenImportCode}
                  className="py-2 px-3 rounded-xl bg-indigo-950/40 hover:bg-indigo-900/50 border border-indigo-500/40 text-indigo-200 text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer active:scale-95"
                >
                  <Clipboard className="w-3.5 h-3.5 text-indigo-300" />
                  <span>{t.settings.pasteCode}</span>
                </button>
              </div>

              {backupStatus && (
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 rounded-lg px-2.5 py-1.5 animate-fade-in font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{backupStatus}</span>
                </div>
              )}
            </div>

            {/* Privacy Policy */}
            <div className="p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <h5 className="text-sm font-bold text-white">{t.settings.privacyPolicy}</h5>
                  <p className="text-xs text-slate-400">{t.settings.privacyPolicyDesc}</p>
                </div>
              </div>

              <a
                href="/privacy-policy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-3 rounded-xl bg-slate-700/70 hover:bg-slate-700 border border-slate-600 text-xs font-semibold text-amber-300 hover:text-amber-200 flex items-center gap-1.5 transition-all shrink-0 cursor-pointer"
              >
                <span>{t.common.read}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Action buttons: Telegram, Tutorial, Reset Progress */}
          <div className="pt-2 border-t border-slate-800 space-y-2">
            {onOpenTelegram && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenTelegram();
                }}
                className="w-full py-2.5 rounded-xl bg-amber-950/40 hover:bg-amber-900/50 border border-amber-600/40 text-amber-200 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Scroll className="w-3.5 h-3.5 text-amber-400" />
                {t.settings.viewWelcomeTelegram}
              </button>
            )}

            {onOpenTutorial && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenTutorial();
                }}
                className="w-full py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {t.settings.reviewTutorial}
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                if (confirm(t.settings.resetConfirm)) {
                  onResetProgress();
                  onClose();
                }
              }}
              className="w-full py-2.5 rounded-xl text-rose-400 hover:bg-rose-950/40 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {t.settings.resetProgress}
            </button>
          </div>
        </div>
      </div>

      {/* Text Code Copy/Paste Modal */}
      {isCodeModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in font-serif"
        >
          <div className="relative w-full max-w-md bg-[#25150a] border-2 border-amber-600/80 rounded-2xl p-6 shadow-2xl text-amber-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-amber-900/60">
              <h4 className="text-base font-bold text-amber-200 font-serif flex items-center gap-2">
                <Clipboard className="w-4 h-4 text-amber-400" />
                {t.settings.codeModalTitle}
              </h4>
              <button
                onClick={() => setIsCodeModalOpen(false)}
                className="p-1 rounded-full text-amber-400 hover:text-white hover:bg-amber-900/40"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-stone-300 font-sans leading-relaxed">
              {t.settings.codeModalDesc}
            </p>

            <textarea
              value={saveCodeText}
              onChange={(e) => setSaveCodeText(e.target.value)}
              readOnly={codeModalMode === 'copy'}
              placeholder={codeModalMode === 'paste' ? t.settings.pasteCode : ''}
              className="w-full h-32 p-3 bg-stone-950/80 border border-amber-800/60 rounded-xl text-amber-300 font-mono text-[11px] leading-tight focus:outline-none focus:border-amber-400 resize-none select-all"
              onClick={(e) => {
                if (codeModalMode === 'copy') {
                  (e.target as HTMLTextAreaElement).select();
                }
              }}
            />

            {codeCopiedToast && (
              <div className="text-xs text-emerald-400 font-mono flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-500/40 rounded-lg p-2">
                <Check className="w-3.5 h-3.5" />
                {t.settings.codeCopied}
              </div>
            )}

            <div className="flex justify-end gap-2 pt-2 border-t border-amber-900/60 font-sans">
              <button
                type="button"
                onClick={() => setIsCodeModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-400 hover:text-white"
              >
                {t.common.cancel}
              </button>

              {codeModalMode === 'copy' ? (
                <button
                  type="button"
                  onClick={() => {
                    if (navigator.clipboard && navigator.clipboard.writeText) {
                      navigator.clipboard.writeText(saveCodeText).then(() => {
                        setCodeCopiedToast(true);
                        setTimeout(() => setCodeCopiedToast(false), 2000);
                      });
                    }
                    sound.playTap();
                  }}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
                >
                  <Copy className="w-3.5 h-3.5" />
                  {t.settings.copyCode}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleRestoreFromCode}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
                >
                  <Upload className="w-3.5 h-3.5" />
                  {t.settings.importCode}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
