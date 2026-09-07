import React, { useState } from 'react';
import { EXPLORERS, type ExplorerProfile } from '../data/avatarData';
import {
  Compass,
  Sparkles,
  Globe,
  Landmark,
  Shield,
  Layers,
  ArrowRight,
  ArrowLeft,
  Check,
  X,
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
      title: 'Il Taccuino di Spedizione (10 Differenze)',
      subtitle: 'Confronto A/B & Rilevamento Anomalie',
      icon: Layers,
      highlightArea: 'center', // Image comparison area
      targetDescription: 'Schermata Centrale: Immagine A (in alto) e Immagine B (in basso)',
      message:
        profile.avatarId === 'samira'
          ? 'Guarda attentamente le due illustrazioni: in alto abbiamo i documenti d\'archivio storici, in basso il sito di scavo sul campo. Ogni livello custodisce 10 differenze archeologiche nascoste. Tocca l\'anomalia sul sito in basso per registrarla sul taccuino!'
          : 'La nostra indagine si basa sul confronto topografico: confronta l\'archivio in alto con lo scavo reale in basso. Individua le 10 discrepanze visive e toccale con precisione. Puoi pizzicare lo schermo per eseguire lo zoom a due dita!',
      tip: 'Ogni differenza trovata ti premia con +20 Monete d\'Oro!',
    },
    {
      id: 'mappamondo',
      title: 'Il Mappamondo 3D delle 12 Tappe',
      subtitle: 'Rotta Geografica & Sblocco Livelli',
      icon: Globe,
      highlightArea: 'top-globe', // Top center globe
      targetDescription: 'Barra Superiore: Icona Mappamondo Rotante',
      message:
        profile.avatarId === 'samira'
          ? 'Questo mappamondo tolemaico traccia la nostra spedizione attraverso l\'America del Sud. È suddiviso in 12 capitoli geografici da 10 livelli ciascuno. Raggiungi il livello 10, 20, 30... per sbloccare nuove tappe fino all\'ingresso di Paititi!'
          : 'La nostra rotta di triangolazione è suddivisa in 12 tappe montane e fluviali. Ogni 10 livelli completati, la bussola sblocca un nuovo capitolo con scenari sempre più remoti e impegnativi.',
      tip: 'Tocca il Mappamondo per esplorare il globo 3D in qualunque momento.',
    },
    {
      id: 'relics',
      title: 'La Sala delle Reliquie e degli Idoli 3D',
      subtitle: 'Manufatti Antichi e Collezione',
      icon: Landmark,
      highlightArea: 'top-relics', // Top center temple
      targetDescription: 'Barra Superiore: Icona Tempio / Teca di Cristallo',
      message:
        profile.avatarId === 'samira'
          ? 'Nei siti di scavo sono celate reliquie leggendarie pre-incaiche: l\'Idolo d\'Oro di Chachapoya, la Maschera di Giada e il Teschio di Cristallo! Quando scovi una reliquia segreta, viene esposta nel nostro Museo 3D e ti ricompensa con un ricco bottino di monete.'
          : 'Oltre alle 10 differenze standard, alcuni livelli nascondono manufatti sacri intagliati nella pietra e nell\'oro. Trovali per arricchire la nostra collezione archeologica e ottenere finanziamenti per la spedizione.',
      tip: 'Le reliquie sbloccano anche le prestigiose tenute cerimoniali nel Guardaroba.',
    },
    {
      id: 'wardrobe',
      title: 'Il Guardaroba & Camerino di Prova',
      subtitle: 'Personalizzazione Avatar & Perk Attivi',
      icon: Sparkles,
      highlightArea: 'top-avatar', // Top left avatar badge
      targetDescription: 'Barra Superiore a Sinistra: Badge Circolare dell\'Avatar',
      message:
        profile.avatarId === 'samira'
          ? 'Tocca il mio ritratto in alto a sinistra per aprire il Guardaroba! Potrai provare in anteprima e sbloccare con le monete d\'oro nuove tenute protettive, copricapi, strumenti epigrafici e amuleti. Ciascun oggetto indossato ti dona vantaggi speciali durante il gioco!'
          : 'Il badge del mio ritratto ti conduce al nostro equipaggiamento da campo. Nel camerino puoi provare tenute da scalata, orologi barometrici e bussole geodesiche. I perk degli accessori si sommano per darti più tempo, monete extra e scudi di protezione!',
      tip: 'Usa il tasto "Anteprima" per vedere subito l\'oggetto indossato prima di acquistarlo!',
    },
    {
      id: 'powerups',
      title: 'La Cintura degli Strumenti da Campo',
      subtitle: 'I 4 Power-Up con Tasti per il Pollice',
      icon: Shield,
      highlightArea: 'bottom-dock', // Bottom power-up dock
      targetDescription: 'Dock Inferiore Stondato: Congela, Radar, Indizio, Scudo, Emporio',
      message:
        profile.avatarId === 'samira'
          ? 'In basso trovi i tuoi aiuti d\'emergenza: Congela il Tempo per fermare il cronometro per 20 secondi, usa la Bussola Radar per restringere l\'area di ricerca a un settore, attiva la Lente d\'Ingrandimento per un indizio esatto o equipaggia lo Scudo per parare un tocco errato!'
          : 'I quattro pulsanti sagomati per il pollice ti permettono di superare anche i livelli più complessi. Gestisci le scorte con saggezza e visita l\'Emporio toccando il tasto d\'oro con la borsa per rifornire la tua cintura!',
      tip: 'Completando i livelli con 3 stelle guadagnerai grandi bonus in monete d\'oro.',
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
    <div className="fixed inset-0 z-50 flex flex-col justify-between p-3 select-none pointer-events-auto animate-fadeIn">
      {/* Darkened Semi-Transparent Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] pointer-events-none" />

      {/* ============================================================== */}
      {/* SPOTLIGHT POINTERS ON HUD (Dynamic placement based on step) */}
      {/* ============================================================== */}

      {/* 1. Top-Left Spotlight (Avatar Badge) */}
      {currentStepData.highlightArea === 'top-avatar' && (
        <div className="absolute top-2.5 left-2.5 sm:left-4 z-20 w-11 h-11 rounded-full ring-4 ring-amber-400 ring-offset-4 ring-offset-black/70 animate-pulse pointer-events-none shadow-[0_0_35px_#f59e0b]">
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-amber-500 text-stone-950 font-black text-[10px] tracking-wider uppercase whitespace-nowrap shadow-lg animate-bounce">
            Tocca Qui
          </div>
        </div>
      )}

      {/* 2. Top-Center Globe Spotlight (Mappamondo) */}
      {currentStepData.highlightArea === 'top-globe' && (
        <div className="absolute top-2.5 left-1/2 -translate-x-[2px] z-20 w-10 h-10 rounded-full ring-4 ring-amber-400 ring-offset-4 ring-offset-black/70 animate-pulse pointer-events-none shadow-[0_0_35px_#f59e0b]">
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-amber-500 text-stone-950 font-black text-[10px] tracking-wider uppercase whitespace-nowrap shadow-lg animate-bounce">
            Mappamondo 3D
          </div>
        </div>
      )}

      {/* 3. Top-Center Temple Spotlight (Museo Reliquie) */}
      {currentStepData.highlightArea === 'top-relics' && (
        <div className="absolute top-2.5 left-1/2 -translate-x-[42px] z-20 w-10 h-10 rounded-full ring-4 ring-amber-400 ring-offset-4 ring-offset-black/70 animate-pulse pointer-events-none shadow-[0_0_35px_#f59e0b]">
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-amber-500 text-stone-950 font-black text-[10px] tracking-wider uppercase whitespace-nowrap shadow-lg animate-bounce">
            Museo 3D
          </div>
        </div>
      )}

      {/* 4. Center Spotlight (Images A/B) */}
      {currentStepData.highlightArea === 'center' && (
        <div className="absolute top-24 inset-x-4 bottom-24 z-10 border-2 border-amber-400/80 rounded-2xl ring-4 ring-amber-500/30 animate-pulse pointer-events-none shadow-[0_0_40px_rgba(245,158,11,0.25)] flex items-center justify-center">
          <div className="px-3 py-1 rounded-full bg-amber-500 text-stone-950 font-black text-xs uppercase tracking-wider shadow-lg">
            Area Confronto A/B
          </div>
        </div>
      )}

      {/* 5. Bottom Dock Spotlight (Power-Ups) */}
      {currentStepData.highlightArea === 'bottom-dock' && (
        <div className="absolute bottom-2 inset-x-2 sm:inset-x-4 h-20 z-20 border-2 border-amber-400 rounded-2xl ring-4 ring-amber-400/50 animate-pulse pointer-events-none shadow-[0_0_35px_#f59e0b] flex items-center justify-center">
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-amber-500 text-stone-950 font-black text-[10px] tracking-wider uppercase whitespace-nowrap shadow-lg animate-bounce">
            Cintura Strumenti
          </div>
        </div>
      )}

      {/* Top Header: Title & Skip Button */}
      <div className="relative z-30 flex items-center justify-between w-full max-w-md mx-auto pt-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/90 border border-amber-500/40 text-amber-300 text-[10px] font-bold uppercase tracking-widest font-serif shadow-lg">
          <Compass className="w-3 h-3 text-amber-400 animate-spin-slow" />
          Manuale da Campo della Spedizione
        </div>

        <button
          type="button"
          onClick={handleComplete}
          className="flex items-center gap-1 px-3 py-1 rounded-full bg-stone-900/90 border border-stone-700 hover:border-amber-400 text-stone-300 hover:text-amber-200 text-xs font-bold transition cursor-pointer shadow-lg"
        >
          <span>Salta</span>
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Guided Dialogue Box (Positioned dynamically: bottom or top depending on spotlight area) */}
      <div
        className={`relative z-30 w-full max-w-md mx-auto transition-all duration-300 ${
          currentStepData.highlightArea === 'bottom-dock' ? 'mb-auto mt-14' : 'mt-auto mb-2'
        }`}
      >
        <div className="bg-stone-900/95 border-2 border-amber-500/70 rounded-3xl p-4 shadow-[0_0_50px_rgba(0,0,0,0.95)] backdrop-blur-md space-y-3">
          
          {/* Avatar Header & Step Badges */}
          <div className="flex items-center justify-between border-b border-amber-950 pb-2.5">
            <div className="flex items-center gap-3">
              {/* Explorer Avatar Face */}
              <div className="relative w-12 h-12 rounded-full border-2 border-amber-400 overflow-hidden shadow-lg shrink-0 bg-stone-950">
                <img
                  src={explorer.portrait}
                  alt={explorer.name}
                  className="w-full h-full object-cover object-top scale-105"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-stone-950" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-black text-amber-100 font-serif leading-none">
                    {profile.playerName}
                  </h3>
                  <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] font-bold">
                    Guida
                  </span>
                </div>
                <div className="text-[11px] text-amber-300/80 font-medium">
                  {explorer.title}
                </div>
              </div>
            </div>

            {/* Step Counter */}
            <div className="text-right">
              <span className="text-xs font-black text-amber-300 font-mono">
                {currentStep + 1}/{steps.length}
              </span>
              <div className="flex items-center gap-1 mt-1">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentStep
                        ? 'bg-amber-400 scale-125 shadow-[0_0_6px_#f59e0b]'
                        : 'bg-stone-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Step Title & Target */}
          <div>
            <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider font-serif flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              {currentStepData.title}
            </div>
            <div className="text-[10px] text-stone-400 font-medium mt-0.5">
              🎯 Bersaglio: <span className="text-stone-200">{currentStepData.targetDescription}</span>
            </div>
          </div>

          {/* Dialogue Message */}
          <div className="bg-stone-950/70 border border-stone-800 rounded-2xl p-3">
            <p className="text-xs text-stone-200 leading-relaxed font-serif">
              "{currentStepData.message}"
            </p>

            {/* Explorer Tip */}
            <div className="mt-2 pt-2 border-t border-stone-800/80 flex items-center gap-1.5 text-[10px] text-emerald-300 font-medium">
              <Shield className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>{currentStepData.tip}</span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-1">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`py-2 px-3 rounded-xl font-bold text-xs flex items-center gap-1 transition ${
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
              className="py-2 px-4 rounded-xl font-black font-serif tracking-wider text-xs uppercase bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 text-stone-950 shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center gap-1.5 cursor-pointer active:scale-95 transition"
            >
              <span>{currentStep === steps.length - 1 ? 'Inizia Spedizione!' : 'Avanti'}</span>
              {currentStep === steps.length - 1 ? (
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              ) : (
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
