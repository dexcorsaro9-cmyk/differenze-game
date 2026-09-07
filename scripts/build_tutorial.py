tutorial_code = """import React, { useState } from 'react';
import { EXPLORERS, type ExplorerProfile } from '../data/avatarData';
import {
  Compass,
  Sparkles,
  Globe,
  Shield,
  Layers,
  ArrowRight,
  ArrowLeft,
  Check,
  X,
  Eye,
  Zap,
  Calendar,
  Search,
  Snowflake
} from 'lucide-react';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';

interface ExpeditionTutorialModalProps {
  isOpen: boolean;
  profile: ExplorerProfile;
  onComplete: () => void;
}

export const ExpeditionTutorialModal: React.FC<ExpeditionTutorialModalProps> = ({
  isOpen,
  profile,
  onComplete,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  if (!isOpen) return null;

  const explorer = EXPLORERS[profile.avatarId];

  const steps = [
    {
      id: 'differences',
      title: 'Come Trovare le 10 Anomalie',
      subtitle: 'Confronto A/B tra Archivio Storico e Sito Reale',
      badge: 'FONDAMENTI DI GIOCO',
      icon: Eye,
      renderIllustration: () => (
        <div className="w-full bg-[#1c120a] border border-amber-500/40 rounded-2xl p-3 space-y-2 shadow-inner">
          <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-mono">
            {/* Mockup Image A */}
            <div className="bg-[#2a1b0d] border border-amber-600/50 rounded-xl p-2 flex flex-col items-center justify-center min-h-[75px] relative">
              <span className="text-[9px] font-black uppercase text-amber-300 font-serif">Tavola A • Archivio 1928</span>
              <div className="w-8 h-8 rounded-lg bg-amber-900/40 border border-amber-700/60 mt-1 flex items-center justify-center text-stone-400">
                🏛️
              </div>
            </div>
            {/* Mockup Image B with glowing difference */}
            <div className="bg-[#2a1b0d] border-2 border-emerald-400/80 rounded-xl p-2 flex flex-col items-center justify-center min-h-[75px] relative shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <span className="text-[9px] font-black uppercase text-emerald-300 font-serif">Tavola B • Sito Reale</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border-2 border-emerald-400 mt-1 flex items-center justify-center text-emerald-300 animate-pulse relative">
                ✨
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full flex items-center justify-center text-[8px] text-stone-950 font-black">✓</span>
              </div>
            </div>
          </div>
          <div className="text-center text-[11px] text-amber-200/90 font-medium">
            Tocca l\'anomalia sull\'immagine in basso: si accenderà di smeraldo (+20 Monete)!
          </div>
        </div>
      ),
      message:
        profile.avatarId === 'samira'
          ? 'Confronta la documentazione d\'archivio in alto con la veduta reale del sito in basso. Ogni livello nasconde esattamente 10 differenze archeologiche. Tocca con precisione: puoi usare il pinch-to-zoom a due dita per ingrandire ogni dettaglio!'
          : 'La nostra indagine si basa sulla comparazione visiva: osserva l\'archivio sopra e il terreno sotto. Individua le 10 discrepanze e toccale. Puoi ingrandire e spostare l\'inquadratura con il tocco per non perdere nessun particolare.',
      tip: 'Consiglio: pizzica con due dita per ingrandire fino a 4x e trascina per esplorare.',
    },
    {
      id: 'powerups',
      title: 'La Cintura dei 4 Strumenti da Campo',
      subtitle: 'Aiuti tattici salvavita a portata di pollice',
      badge: 'POTENZIAMENTI TATTICI',
      icon: Zap,
      renderIllustration: () => (
        <div className="w-full bg-[#1c120a] border border-amber-500/40 rounded-2xl p-2.5 shadow-inner">
          <div className="grid grid-cols-4 gap-1.5 text-center">
            <div className="bg-cyan-950/80 border border-cyan-500/60 rounded-xl p-1.5 flex flex-col items-center">
              <Snowflake className="w-4 h-4 text-cyan-300 mb-0.5" />
              <span className="text-[9px] font-black text-cyan-200">Congela</span>
              <span className="text-[8px] text-cyan-400/80 font-mono">20s Pausa</span>
            </div>
            <div className="bg-amber-950/80 border border-amber-500/60 rounded-xl p-1.5 flex flex-col items-center">
              <Compass className="w-4 h-4 text-amber-300 mb-0.5" />
              <span className="text-[9px] font-black text-amber-200">Radar</span>
              <span className="text-[8px] text-amber-400/80 font-mono">1 Settore</span>
            </div>
            <div className="bg-yellow-950/80 border border-yellow-500/60 rounded-xl p-1.5 flex flex-col items-center">
              <Search className="w-4 h-4 text-yellow-300 mb-0.5" />
              <span className="text-[9px] font-black text-yellow-200">Lente</span>
              <span className="text-[8px] text-yellow-400/80 font-mono">Indizio</span>
            </div>
            <div className="bg-indigo-950/80 border border-indigo-500/60 rounded-xl p-1.5 flex flex-col items-center">
              <Shield className="w-4 h-4 text-indigo-300 mb-0.5" />
              <span className="text-[9px] font-black text-indigo-200">Scudo</span>
              <span className="text-[8px] text-indigo-400/80 font-mono">Para Errore</span>
            </div>
          </div>
        </div>
      ),
      message:
        profile.avatarId === 'samira'
          ? 'Nella barra inferiore trovi i tuoi strumenti: Congela per fermare il tempo, la Bussola Radar per restringere l\'area, la Lente d\'Ingrandimento per un indizio esatto e lo Scudo per parare un errore senza perdere vite.'
          : 'I quattro tasti rapidi in basso ti permettono di superare anche i livelli più complessi. Puoi acquistare ulteriori scorte nell\'Emporio spendendo le monete d\'oro vinte durante le indagini.',
      tip: 'Consiglio: lo Scudo ti salva da un tocco sbagliato senza azzerare la tua valutazione a 3 stelle.',
    },
    {
      id: 'mappamondo',
      title: 'Mappamondo 3D & Rotta a 12 Tappe',
      subtitle: 'Da Oxford a Paititi: 120 Livelli con sblocco continuo',
      badge: 'PROGRESSIONE CAMPAGNA',
      icon: Globe,
      renderIllustration: () => (
        <div className="w-full bg-[#1c120a] border border-amber-500/40 rounded-2xl p-2.5 flex items-center justify-between gap-3 shadow-inner">
          <div className="w-12 h-12 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center shrink-0">
            <Globe className="w-7 h-7 text-amber-300 animate-spin-slow" />
          </div>
          <div className="flex-1 text-left text-xs">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wide block">
              12 Capitoli Geografici
            </span>
            <span className="text-stone-300 text-[11px] leading-tight block">
              Ogni 10 livelli completati si sblocca una nuova tappa sul globo e il Dispaccio Storico del 1928!
            </span>
          </div>
        </div>
      ),
      message:
        profile.avatarId === 'samira'
          ? 'Il viaggio è tracciato sul Mappamondo 3D in 12 capitoli: Oxford, Venezia, Alessandria, Petra, fino al cuore di Paititi. Raggiungi il livello 10, 20, 30... per sbloccare la tappa successiva e consultare il telegrafo archeologico!'
          : 'Ogni capitolo introduce tavole grafiche d\'epoca sempre più ricche e misteriose. Tocca l\'icona del Mappamondo nella barra in alto ogni volta che desideri rivedere la rotta o rigiocare tappe passate.',
      tip: 'Consiglio: nei siti sono celate anche antiche reliquie 3D che arricchiscono il tuo Museo privato.',
    },
    {
      id: 'daily',
      title: 'Spedizione Quotidiana & Guardaroba',
      subtitle: 'Sfida del giorno, serie di 30 giorni e perk avatar',
      badge: 'RICOMPENSE & PERSONALIZZAZIONE',
      icon: Calendar,
      renderIllustration: () => (
        <div className="w-full bg-[#1c120a] border border-amber-500/40 rounded-2xl p-2.5 flex items-center justify-around gap-2 shadow-inner">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-950/80 border border-orange-500/50">
            <span className="text-sm">🔥</span>
            <div className="text-left">
              <span className="text-[9px] font-black text-orange-300 uppercase block">Spedizione Quotidiana</span>
              <span className="text-[10px] font-mono text-amber-200 font-bold">+150 Monete Bonus</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-950/80 border border-amber-500/50">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <div className="text-left">
              <span className="text-[9px] font-black text-amber-300 uppercase block">Guardaroba</span>
              <span className="text-[10px] text-amber-200">Perk & Outfit</span>
            </div>
          </div>
        </div>
      ),
      message:
        profile.avatarId === 'samira'
          ? 'Tocca l\'icona del Calendario in alto per affrontare la Spedizione del Giorno e collezionare i timbri in ceralacca sul registro a 30 giorni! Nel Guardaroba potrai equipaggiare outfit con vantaggi passivi.'
          : 'Ogni giorno ti attende una missione speciale con modificatori e doppie ricompense. Mantieni viva la tua serie consecutiva (streak) per sbloccare forzieri di dobloni e il titolo di Gran Maestro Esploratore.',
      tip: 'Consiglio: controlla il pallino arancione sul calendario per non perdere la sfida di oggi!',
    },
  ];

  const currentStepData = steps[currentStep];

  const handleNext = () => {
    sound.playTap();
    triggerHaptic('light');

    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    sound.playTap();
    triggerHaptic('light');

    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleComplete = () => {
    sound.playLevelWin();
    triggerHaptic('success');
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#22160d] via-[#170e07] to-[#0e0703] border-2 border-amber-500/70 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-white overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Top Header Bar inside Modal */}
        <div className="w-full leather-belt px-4 py-3 flex items-center justify-between border-b border-amber-600/40">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full border-2 border-amber-400 overflow-hidden shadow-md shrink-0 bg-stone-900">
              <img
                src={explorer.portrait}
                alt={explorer.name}
                className="w-full h-full object-cover object-top scale-105"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-black text-amber-100 font-serif leading-none">
                  {profile.playerName}
                </h3>
                <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] font-bold">
                  {explorer.title}
                </span>
              </div>
              <span className="text-[10px] text-amber-400/80 font-serif mt-0.5 block">
                Istruzioni per la Spedizione • 1928
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Step Counter Dots */}
            <div className="flex items-center gap-1">
              {steps.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentStep
                      ? 'w-5 bg-amber-400 shadow-[0_0_8px_#f59e0b]'
                      : 'bg-stone-700'
                  }`}
                />
              ))}
            </div>

            {/* Skip Button */}
            <button
              type="button"
              onClick={handleComplete}
              className="p-1.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-400 hover:text-white border border-stone-700 transition cursor-pointer active:scale-90"
              title="Chiudi e inizia a giocare"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Center Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3.5 flex-1">
          
          {/* Step Category Badge & Title */}
          <div>
            <span className="inline-block px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] font-bold uppercase tracking-wider mb-1">
              {currentStepData.badge} • PASSO {currentStep + 1} DI {steps.length}
            </span>
            <h2 className="text-lg sm:text-xl font-black text-amber-100 font-serif leading-tight">
              {currentStepData.title}
            </h2>
            <p className="text-xs text-amber-300/70 font-medium">
              {currentStepData.subtitle}
            </p>
          </div>

          {/* Illustrated Visual Card */}
          {currentStepData.renderIllustration()}

          {/* Guide Dialogue */}
          <div className="bg-stone-950/80 border border-amber-900/40 rounded-2xl p-3 shadow-inner">
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-serif italic">
              "{currentStepData.message}"
            </p>

            {/* Practical Tip */}
            <div className="mt-2.5 pt-2 border-t border-stone-800/80 flex items-center gap-2 text-[11px] text-emerald-300 font-medium">
              <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{currentStepData.tip}</span>
            </div>
          </div>
        </div>

        {/* Bottom Actions Bar */}
        <div className="p-3.5 bg-black/60 border-t border-amber-900/40 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`py-2 px-3.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition ${
              currentStep > 0
                ? 'bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-600 cursor-pointer active:scale-95'
                : 'opacity-30 cursor-not-allowed text-stone-600'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Indietro</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="py-2.5 px-5 rounded-xl font-black font-serif tracking-wider text-xs uppercase bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 text-stone-950 shadow-[0_0_20px_rgba(245,158,11,0.5)] flex items-center gap-2 cursor-pointer active:scale-95 transition"
          >
            <span>{currentStep === steps.length - 1 ? 'INIZIA LA SPEDIZIONE!' : 'AVANTI'}</span>
            {currentStep === steps.length - 1 ? (
              <Check className="w-4 h-4 stroke-[3]" />
            ) : (
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
"""

with open("src/components/ExpeditionTutorialModal.tsx", "w", encoding="utf-8") as f:
    f.write(tutorial_code)
print("Updated ExpeditionTutorialModal.tsx")
