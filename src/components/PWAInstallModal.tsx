import React from 'react';
import { Download, Sparkles, WifiOff, Maximize, X, CheckCircle, Share2, PlusSquare } from 'lucide-react';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';

interface PWAInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  canInstall: boolean;
  isInstalled: boolean;
  isIOS: boolean;
  onPromptInstall: () => Promise<boolean>;
}

export const PWAInstallModal: React.FC<PWAInstallModalProps> = ({
  isOpen,
  onClose,
  canInstall,
  isInstalled,
  isIOS,
  onPromptInstall,
}) => {
  if (!isOpen) return null;

  const handleInstallClick = async () => {
    sound.playAchievementUnlock();
    triggerHaptic('success');
    const accepted = await onPromptInstall();
    if (accepted) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md select-none animate-fadeIn">
      <div className="relative w-full max-w-md flex flex-col rounded-3xl bg-gradient-to-b from-[#25150a] via-[#1a0e06] to-[#0d0703] border-2 border-amber-500/70 shadow-[0_20px_60px_rgba(0,0,0,0.95)] text-stone-200 overflow-hidden">
        
        {/* Top Header / Royal Post Telegram Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-amber-950 via-[#2f190c] to-amber-950 border-b border-amber-600/50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/60 flex items-center justify-center text-amber-300 shadow-inner">
              <Download className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="text-sm font-black text-amber-100 font-serif uppercase tracking-wider leading-none">
                Installazione Applicazione
              </h2>
              <span className="text-[10px] text-amber-400/80 font-mono">
                Dispaccio Ufficiale Spedizione 1928
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              sound.playTap();
              onClose();
            }}
            className="p-1.5 rounded-full bg-stone-900/80 border border-amber-600/40 text-stone-400 hover:text-white cursor-pointer transition active:scale-90"
            title="Chiudi"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 flex flex-col gap-4 overflow-y-auto max-h-[75vh]">
          {/* Hero Seal & App Name */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-black/40 border border-amber-600/30">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-md shrink-0 bg-stone-900">
              <img
                src={import.meta.env.BASE_URL ? `${import.meta.env.BASE_URL}icon-192.png` : '/icon-192.png'}
                alt="Icona Paititi 1928"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/favicon.svg';
                }}
              />
            </div>
            <div>
              <div className="text-base font-black text-amber-200 font-serif leading-tight">
                Il Taccuino di Paititi 1928
              </div>
              <p className="text-xs text-stone-400 font-serif mt-0.5">
                Avventura Archeologica a Schermo Intero
              </p>
              <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-[9px] font-mono text-amber-300 font-bold">
                <Sparkles className="w-2.5 h-2.5" />
                PWA Progressive Web App
              </div>
            </div>
          </div>

          {/* 3 Core Benefits */}
          <div className="space-y-2.5">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1e1107] border border-amber-600/30">
              <div className="p-2 rounded-lg bg-amber-500/15 text-amber-300 shrink-0 mt-0.5">
                <Maximize className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-100 block font-serif">
                  Schermo Intero a Tutto Tondo (Full-Screen)
                </span>
                <span className="text-[11px] text-stone-400 leading-relaxed block">
                  Zero barre di navigazione del browser, layout nativo edge-to-edge ottimizzato per notch e dynamic island.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1e1107] border border-amber-600/30">
              <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-300 shrink-0 mt-0.5">
                <WifiOff className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-100 block font-serif">
                  Archivio Offline Completo
                </span>
                <span className="text-[11px] text-stone-400 leading-relaxed block">
                  I 120 livelli, immagini, musica orchestrale, passaporto e reperti restano giocabili ovunque senza connessione internet.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1e1107] border border-amber-600/30">
              <div className="p-2 rounded-lg bg-yellow-500/15 text-yellow-300 shrink-0 mt-0.5">
                <Download className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-100 block font-serif">
                  Icona Consolare su Schermo Home / Desktop
                </span>
                <span className="text-[11px] text-stone-400 leading-relaxed block">
                  Accesso istantaneo con un tocco dal desktop del PC o dalla schermata principale del tuo smartphone o tablet.
                </span>
              </div>
            </div>
          </div>

          {/* Action Area: Dynamic based on platform */}
          {isInstalled ? (
            <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/50 flex items-center justify-center gap-2 text-emerald-300">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-bold font-serif">
                Applicazione Già Installata a Schermo Intero!
              </span>
            </div>
          ) : isIOS ? (
            <div className="p-4 rounded-2xl bg-gradient-to-b from-[#2a170a] to-[#1a0e06] border border-amber-500/50 flex flex-col gap-2.5">
              <div className="text-xs font-black text-amber-200 font-serif flex items-center gap-1.5">
                <Share2 className="w-4 h-4 text-amber-400" />
                Istruzioni per iPhone e iPad (Safari):
              </div>
              <ol className="text-[11px] text-stone-300 space-y-1.5 pl-4 list-decimal marker:text-amber-400">
                <li>
                  Tocca l'icona <span className="text-amber-200 font-bold">Condividi</span> (quadrato con freccia ⎘) nella barra di Safari in basso.
                </li>
                <li>
                  Scorri l'elenco e tocca <span className="text-amber-200 font-bold inline-flex items-center gap-1">"Aggiungi alla schermata Home" <PlusSquare className="w-3 h-3 text-amber-400 inline" /></span>.
                </li>
                <li>
                  Tocca <span className="text-amber-200 font-bold">"Aggiungi"</span> in alto a destra per completare!
                </li>
              </ol>
            </div>
          ) : canInstall ? (
            <button
              type="button"
              onClick={handleInstallClick}
              className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-stone-950 font-black text-sm font-serif uppercase tracking-wider shadow-[0_4px_20px_rgba(245,158,11,0.4)] border-2 border-yellow-300 active:scale-95 transition cursor-pointer flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Installa Subito sul Dispositivo
            </button>
          ) : (
            <div className="p-3.5 rounded-2xl bg-stone-900/60 border border-stone-700/60 text-center">
              <span className="text-xs text-stone-400 font-serif block">
                Per installare, tocca i tre puntini del browser (⋮) e seleziona "Installa Applicazione" o "Aggiungi a Schermo Home".
              </span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-black/40 border-t border-amber-600/30 flex items-center justify-between text-[10px] text-stone-400 font-mono">
          <span>Cache Spedizione: v1.4</span>
          <button
            type="button"
            onClick={() => {
              sound.playTap();
              onClose();
            }}
            className="text-amber-400 hover:text-amber-300 font-serif font-bold cursor-pointer"
          >
            Chiudi
          </button>
        </div>

      </div>
    </div>
  );
};
