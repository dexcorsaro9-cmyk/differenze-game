import React from 'react';
import { X, Volume2, VolumeX, Smartphone, Sparkles, Layout, RotateCcw, Download } from 'lucide-react';
import type { GameSettings } from '../types/game';

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
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pb-4 pt-10 sm:pt-12 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 border border-slate-700/80 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] text-white">
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

          {/* Layout Mode Selector */}
          <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center gap-3 mb-2.5">
              <Layout className="w-5 h-5 text-indigo-400" />
              <div>
                <h5 className="text-sm font-bold text-white">Disposizione Immagini</h5>
                <p className="text-xs text-slate-400">Come visualizzare le due scene</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {(['auto', 'vertical', 'horizontal'] as const).map(mode => (
                <button
                  key={mode}
                  onClick={() => onUpdateSettings({ layoutMode: mode })}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold capitalize border transition-all ${
                    settings.layoutMode === mode
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow'
                      : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  {mode === 'auto' ? 'Auto' : mode === 'vertical' ? 'Verticale' : 'Affiancate'}
                </button>
              ))}
            </div>
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
