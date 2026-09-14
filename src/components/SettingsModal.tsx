import React, { useState, useRef } from 'react';
import { X, Volume2, VolumeX, Smartphone, Sparkles, Music, RotateCcw, Download, Upload, Archive, Check } from 'lucide-react';
import type { GameSettings } from '../types/game';

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
];

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: GameSettings;
  onUpdateSettings: (newSettings: Partial<GameSettings>) => void;
  onResetProgress: () => void;
  onOpenTutorial?: () => void;
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
  isInstalled = false,
  onOpenInstall,
  isOffline = false,
  isBgmPlaying = false,
  onToggleBgm,
  bgmTheme = 'auto',
  onChangeBgmTheme,
}) => {
  const [backupStatus, setBackupStatus] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleExportBackup = () => {
    try {
      const data: Record<string, any> = {
        game: 'Paititi_1928',
        version: '2.0',
        exportedAt: new Date().toISOString(),
        keys: {},
      };

      BACKUP_STORAGE_KEYS.forEach(key => {
        const val = localStorage.getItem(key);
        if (val !== null) {
          try {
            data.keys[key] = JSON.parse(val);
          } catch {
            data.keys[key] = val;
          }
        }
      });

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

      setBackupStatus('Salvataggio scaricato (.json) e copiato!');
      setTimeout(() => setBackupStatus(null), 3500);
    } catch {
      setBackupStatus('Errore esportazione backup.');
      setTimeout(() => setBackupStatus(null), 3000);
    }
  };

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
          alert('File di backup non valido per Paititi 1928.');
          return;
        }

        let count = 0;
        BACKUP_STORAGE_KEYS.forEach(key => {
          if (keysToRestore[key] !== undefined) {
            const val = typeof keysToRestore[key] === 'string'
              ? keysToRestore[key]
              : JSON.stringify(keysToRestore[key]);
            localStorage.setItem(key, val);
            count++;
          }
        });

        alert(`Salvataggio ripristinato con successo (${count} sezioni ripristinate). La pagina verrà ricaricata.`);
        window.location.reload();
      } catch {
        alert('Impossibile importare: file corrotto o non in formato JSON.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pb-4 pt-10 sm:pt-12 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 border border-slate-700/80 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] text-white max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <h3 className="text-xl font-extrabold text-white">
            Impostazioni
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-5 space-y-4">
          {/* Sound Toggle */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center gap-3">
              {settings.soundEnabled ? (
                <Volume2 className="w-5 h-5 text-amber-400" />
              ) : (
                <VolumeX className="w-5 h-5 text-slate-500" />
              )}
              <div>
                <h5 className="text-sm font-bold text-white">Effetti Sonori</h5>
                <p className="text-xs text-slate-400">Rintocchi armonici e feedback audio</p>
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
                <h5 className="text-sm font-bold text-white">Feedback Aptico</h5>
                <p className="text-xs text-slate-400">Vibrazioni al tocco (dispositivi supportati)</p>
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
                <h5 className="text-sm font-bold text-white">Modalità Zen</h5>
                <p className="text-xs text-slate-400">Vite infinite, senza penalità di game over</p>
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
                  <h5 className="text-sm font-bold text-white">Musica d'Epoca (Orchestrale)</h5>
                  <p className="text-xs text-slate-400">Sinfonia procedurale d'atmosfera 1928</p>
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
                  Tema Orchestrale della Spedizione:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {[
                    { id: 'auto', label: 'Auto (Cap.)' },
                    { id: 'exploration', label: '🌿 Giungla' },
                    { id: 'excavation', label: '⛏️ Cripte' },
                    { id: 'sacred_temple', label: '🏛️ Paititi' },
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

          {/* PWA & Offline Mode Section */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-stone-900/60 to-amber-950/40 border border-amber-600/40">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-amber-400" />
                <h5 className="text-xs font-bold text-amber-100 font-serif">Modalità Offline & Installazione</h5>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-mono font-bold">
                {isOffline ? 'Offline Attivo' : 'Cache Pronta'}
              </span>
            </div>
            <p className="text-[11px] text-stone-300 mb-3 font-sans">
              Archivio 1928 autonomo: tutti i 120 capitoli, la musica e i reperti funzionano senza connessione.
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
                {isInstalled ? '✓ Gioco Installato a Schermo Intero' : 'Installa Gioco su Schermo Home / Desktop'}
              </button>
            )}
          </div>

          {/* Backup & Ripristino Salvataggi */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-stone-900/90 via-amber-950/30 to-stone-900/90 border border-amber-600/40 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Archive className="w-4 h-4 text-amber-400" />
                <h5 className="text-xs font-bold text-amber-100 font-serif">Archivio & Backup Salvataggi</h5>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-950 border border-amber-500/40 text-amber-300 font-mono font-bold">
                JSON v2.0
              </span>
            </div>

            <p className="text-[11px] text-stone-300 font-sans leading-relaxed">
              Esporta la tua spedizione (capitoli, stelle, reperti, monete ed equipaggiamento) o ripristinala su un altro dispositivo mobile.
            </p>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={handleExportBackup}
                className="py-2 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400 text-amber-200 text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer active:scale-95"
              >
                <Download className="w-3.5 h-3.5 text-amber-300" />
                <span>Esporta Backup</span>
              </button>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-stone-200 text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer active:scale-95"
              >
                <Upload className="w-3.5 h-3.5 text-stone-300" />
                <span>Importa Backup</span>
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept=".json,application/json"
                className="hidden"
                onChange={handleImportBackup}
              />
            </div>

            {backupStatus && (
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 rounded-lg px-2.5 py-1.5 animate-fade-in font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{backupStatus}</span>
              </div>
            )}
          </div>
        </div>

        {/* Tutorial & Reset Progress Actions */}
        <div className="pt-2 border-t border-slate-800 space-y-2">
          {onOpenTutorial && (
            <button
              onClick={() => {
                onClose();
                onOpenTutorial();
              }}
              className="w-full py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Rivedi Tutorial & Manuale Esploratore
            </button>
          )}

          <button
            onClick={() => {
              if (confirm('Vuoi davvero azzerare i tuoi progressi e ricominciare la storia?')) {
                onResetProgress();
                onClose();
              }
            }}
            className="w-full py-2.5 rounded-xl text-rose-400 hover:bg-rose-950/40 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Azzera Progressi della Storia
          </button>
        </div>
      </div>
    </div>
  );
};
