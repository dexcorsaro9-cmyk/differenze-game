import React, { useState } from 'react';
import { EXPLORERS, type ExplorerProfile } from '../data/avatarData';
import {
  Compass,
  Sparkles,
  Globe,
  Shield,
  ArrowRight,
  ArrowLeft,
  Check,
  X,
  Eye,
  Zap,
  Search,
  Snowflake,
  ZoomIn,
  Move,
  MousePointerClick,
  CheckCircle2,
  Award
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
  const [hasPracticedDifference, setHasPracticedDifference] = useState<boolean>(false);
  const [practiceZoom, setPracticeZoom] = useState<number>(1);
  const [selectedToolId, setSelectedToolId] = useState<string>('hint');

  if (!isOpen) return null;

  const explorer = EXPLORERS[profile.avatarId] || EXPLORERS.samira;

  const handleTestDifferenceClick = () => {
    if (!hasPracticedDifference) {
      setHasPracticedDifference(true);
      sound.playSuccess();
      triggerHaptic('success');
    }
  };

  const steps = [
    {
      id: 'differences',
      title: 'Obiettivo: Decifra gli 8 Indovinelli',
      subtitle: 'Consulta il Taccuino del Professore e tocca i reperti nella scena con pinch-to-zoom',
      badge: 'FONDAMENTI DI GIOCO',
      icon: Eye,
      renderIllustration: () => (
        <div className="w-full bg-[#1c120a] border-2 border-amber-500/50 rounded-2xl p-3 sm:p-4 space-y-3 shadow-inner">
          <div className="flex items-center justify-between text-[11px] font-serif text-amber-300">
            <span className="font-bold flex items-center gap-1.5">
              <MousePointerClick className="w-4 h-4 text-amber-400 animate-bounce" />
              Decifra l'indizio e tocca il reperto:
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[10px] border border-emerald-500/40">
              8 INDOVINELLI PER LIVELLO
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {/* Mockup Scene A */}
            <div className="relative bg-gradient-to-b from-[#2d1e11] to-[#1a1008] border border-amber-600/60 rounded-xl p-2.5 flex flex-col items-center justify-center min-h-[110px] shadow-md">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 font-serif mb-2">
                Tavola A • Archivio Originale
              </span>
              <div className="relative w-full h-14 bg-stone-900/80 rounded-lg border border-amber-900/60 flex items-center justify-center gap-3">
                <span className="text-2xl filter drop-shadow">🏛️</span>
                <span className="text-2xl filter drop-shadow">📜</span>
                <div className="relative flex items-center justify-center">
                  <span className="text-2xl filter drop-shadow">🏆</span>
                  <span className="text-[8px] font-bold text-amber-300 absolute -bottom-3 font-mono">Presente</span>
                </div>
              </div>
            </div>

            {/* Mockup Scene B (Interactive Practice!) */}
            <div
              onClick={handleTestDifferenceClick}
              className={`relative bg-gradient-to-b from-[#2d1e11] to-[#1a1008] border-2 rounded-xl p-2.5 flex flex-col items-center justify-center min-h-[110px] cursor-pointer transition-all active:scale-95 select-none ${
                hasPracticedDifference
                  ? 'border-emerald-400 bg-emerald-950/30 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                  : 'border-amber-400/80 hover:border-yellow-300 hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]'
              }`}
            >
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 font-serif mb-2 flex items-center gap-1">
                Tavola B • Scena Sabotata
                {!hasPracticedDifference && <span className="text-[9px] text-amber-400 animate-pulse">(Tocca qui!)</span>}
              </span>

              <div className="relative w-full h-14 bg-stone-900/80 rounded-lg border border-amber-900/60 flex items-center justify-center gap-3">
                <span className="text-2xl filter drop-shadow">🏛️</span>
                <span className="text-2xl filter drop-shadow">📜</span>
                
                {/* Difference spot */}
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full border-2 border-dashed border-amber-400/70 hover:bg-amber-500/20 transition-all">
                  {hasPracticedDifference ? (
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-stone-950 flex items-center justify-center font-black text-sm shadow-[0_0_12px_#10b981] animate-stamp-slam">
                      ✓
                    </div>
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                  )}
                  <span className="text-[8px] font-bold text-rose-300 absolute -bottom-3 font-mono">
                    {hasPracticedDifference ? 'Trovato!' : 'Mancante'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-2.5 rounded-xl border text-center transition-all ${
            hasPracticedDifference
              ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200 text-xs font-bold'
              : 'bg-amber-950/50 border-amber-500/30 text-amber-200/90 text-xs'
          }`}>
            {hasPracticedDifference ? (
              <span className="flex items-center justify-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Eccellente! Hai scovato l'anomalia. Puoi toccarla liberamente su Tavola A o Tavola B!
              </span>
            ) : (
              <span>
                💡 <strong>Regola d'Oro:</strong> Confronta i dettagli tra le due immagini. Trova le <strong>6 prove</strong> della Mano Oscura per decifrare il sito!
              </span>
            )}
          </div>
        </div>
      ),
      message:
        "Ogni livello mette a confronto due splendide tavole fotografiche. Gli agenti della Mano Oscura hanno sottratto o manomesso esattamente 6 oggetti storici. Tocca con sicurezza l'oggetto anomalo per registrarlo nel tuo taccuino!",
      tip: "Tocca sia sull'immagine superiore che su quella inferiore: entrambe rispondono al tocco con precisione.",
    },
    {
      id: 'zoom_and_pan',
      title: 'Zoom ad Alta Definizione & Navigazione',
      subtitle: 'Pizzica con due dita o usa la rotella per esplorare a 4x',
      badge: 'CONTROLLI & MOVIMENTO',
      icon: ZoomIn,
      renderIllustration: () => (
        <div className="w-full bg-[#1c120a] border-2 border-amber-500/50 rounded-2xl p-3.5 space-y-3 shadow-inner">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-300 font-serif flex items-center gap-1.5">
              <ZoomIn className="w-4 h-4 text-amber-400" />
              Livello d'Ingrandimento: {practiceZoom}x
            </span>
            <div className="flex items-center gap-1.5">
              {[1, 2, 4].map(lvl => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => {
                    setPracticeZoom(lvl);
                    sound.playTap();
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    practiceZoom === lvl
                      ? 'bg-amber-500 text-stone-950 shadow-[0_0_10px_rgba(245,158,11,0.6)]'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  {lvl}x
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full h-24 bg-stone-950 rounded-xl overflow-hidden border border-amber-900/60 flex items-center justify-center">
            <div
              className="transition-transform duration-300 flex items-center gap-4 select-none"
              style={{ transform: `scale(${practiceZoom})` }}
            >
              <div className="flex flex-col items-center">
                <span className="text-3xl">🏺</span>
                <span className="text-[8px] text-amber-400 font-mono">Vaso Minoico</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl">🧭</span>
                <span className="text-[8px] text-amber-400 font-mono">Bussola Reale</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl">🗝️</span>
                <span className="text-[8px] text-amber-400 font-mono">Sigillo Segreto</span>
              </div>
            </div>

            {/* Gesture Guide Overlay */}
            <div className="absolute bottom-1.5 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/70 border border-amber-500/30 text-[9px] text-amber-300 font-mono">
              <Move className="w-3 h-3 text-amber-400 animate-pulse" />
              <span>Trascina per muoverti</span>
            </div>
          </div>

          <div className="text-center text-xs text-amber-200/90 font-medium">
            🔍 Su smartphone o tablet, <strong>pizzica con due dita</strong>. Su computer, usa la <strong>rotella del mouse</strong> o i pulsanti a schermo!
          </div>
        </div>
      ),
      message:
        "I dettagli archeologici sono ricchi e minuziosi. Ingrandisci senza timore: puoi navigare liberamente all'interno dell'immagine per esaminare iscrizioni, fessure nelle tombe e indizi minuscoli.",
      tip: "Quando sei ingrandito a 2x o 4x, trascina con un dito o con il mouse per spostare l'inquadratura.",
    },
    {
      id: 'powerups',
      title: 'I 4 Strumenti di Soccorso Tattico',
      subtitle: 'Aiuti istantanei nella barra inferiore quando sei in difficoltà',
      badge: 'STRUMENTI DA CAMPO',
      icon: Zap,
      renderIllustration: () => {
        const toolDetails: Record<string, { title: string; desc: string; color: string; icon: React.ReactNode }> = {
          freeze: {
            title: 'Congela Tempo (20s)',
            desc: 'Ferma il cronometro per 20 secondi. Perfetto per conquistare le 3 Stelle d\'Oro senza fretta!',
            color: 'text-cyan-300 border-cyan-500/60 bg-cyan-950/50',
            icon: <Snowflake className="w-5 h-5 text-cyan-400" />
          },
          radar: {
            title: 'Bussola Radar',
            desc: 'Scannerizza la scena e illumina il quadrante esatto in cui si nasconde una differenza non trovata.',
            color: 'text-amber-300 border-amber-500/60 bg-amber-950/50',
            icon: <Compass className="w-5 h-5 text-amber-400" />
          },
          hint: {
            title: 'Lente d\'Ingrandimento',
            desc: 'Rivelazione chirurgica: un mirino luminoso ti indica subito la posizione esatta di una prova nascosta.',
            color: 'text-yellow-300 border-yellow-500/60 bg-yellow-950/50',
            icon: <Search className="w-5 h-5 text-yellow-400" />
          },
          shield: {
            title: 'Scudo del Guardiano',
            desc: 'Protezione totale: il tuo prossimo tocco errato non ti farà perdere cuori né penalizzerà il tempo!',
            color: 'text-indigo-300 border-indigo-500/60 bg-indigo-950/50',
            icon: <Shield className="w-5 h-5 text-indigo-400" />
          },
        };

        const activeTool = toolDetails[selectedToolId];

        return (
          <div className="w-full bg-[#1c120a] border-2 border-amber-500/50 rounded-2xl p-3 sm:p-4 space-y-3 shadow-inner">
            <div className="grid grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => {
                  setSelectedToolId('freeze');
                  sound.playFreeze();
                }}
                className={`p-2 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                  selectedToolId === 'freeze'
                    ? 'bg-cyan-950 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.6)] scale-105'
                    : 'bg-stone-900/80 border-stone-800 text-stone-400 hover:border-cyan-500/50'
                }`}
              >
                <Snowflake className="w-5 h-5 text-cyan-300" />
                <span className="text-[9px] font-black uppercase text-cyan-200">Congela</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedToolId('radar');
                  sound.playCompass();
                }}
                className={`p-2 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                  selectedToolId === 'radar'
                    ? 'bg-amber-950 border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.6)] scale-105'
                    : 'bg-stone-900/80 border-stone-800 text-stone-400 hover:border-amber-500/50'
                }`}
              >
                <Compass className="w-5 h-5 text-amber-300" />
                <span className="text-[9px] font-black uppercase text-amber-200">Radar</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedToolId('hint');
                  sound.playHint();
                }}
                className={`p-2 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                  selectedToolId === 'hint'
                    ? 'bg-yellow-950 border-yellow-400 shadow-[0_0_12px_rgba(234,179,8,0.6)] scale-105'
                    : 'bg-stone-900/80 border-stone-800 text-stone-400 hover:border-yellow-500/50'
                }`}
              >
                <Search className="w-5 h-5 text-yellow-300" />
                <span className="text-[9px] font-black uppercase text-yellow-200">Lente</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedToolId('shield');
                  sound.playShield();
                }}
                className={`p-2 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                  selectedToolId === 'shield'
                    ? 'bg-indigo-950 border-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.6)] scale-105'
                    : 'bg-stone-900/80 border-stone-800 text-stone-400 hover:border-indigo-500/50'
                }`}
              >
                <Shield className="w-5 h-5 text-indigo-300" />
                <span className="text-[9px] font-black uppercase text-indigo-200">Scudo</span>
              </button>
            </div>

            {/* Selected Tool Details Banner */}
            <div className={`p-2.5 rounded-xl border flex items-center gap-3 transition-all ${activeTool.color}`}>
              <div className="shrink-0 p-1.5 rounded-lg bg-black/40 border border-white/10">
                {activeTool.icon}
              </div>
              <div className="text-left leading-snug">
                <h4 className="text-xs font-black font-serif uppercase tracking-wide">
                  {activeTool.title}
                </h4>
                <p className="text-[11px] opacity-90 font-medium">
                  {activeTool.desc}
                </p>
              </div>
            </div>
          </div>
        );
      },
      message:
        "Se una prova si rivela particolarmente sfuggente, non esitare a ricorrere alla tua cintura degli attrezzi. Guadagni monete d'oro a ogni livello decifrato e puoi rifornirti nell'Emporio quando vuoi!",
      tip: "Tocca i 4 strumenti nella barra inferiore durante il gioco per attivarli istantaneamente.",
    },
    {
      id: 'saga_expedition',
      title: 'La Spedizione a 12 Tappe (120 Livelli)',
      subtitle: 'Da Oxford al Gran Finale di Paititi con Reliquie Supreme',
      badge: 'PROGRESSIONE E FINALE',
      icon: Globe,
      renderIllustration: () => (
        <div className="w-full bg-[#1c120a] border-2 border-amber-500/50 rounded-2xl p-3.5 space-y-3 shadow-inner text-left">
          <div className="flex items-center gap-2.5 pb-2 border-b border-amber-900/60">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center shrink-0 shadow">
              <Globe className="w-5 h-5 text-amber-300 animate-spin-slow" />
            </div>
            <div>
              <h4 className="text-xs font-black text-amber-100 font-serif uppercase tracking-wider">
                12 Capitoli Mondiali • 120 Livelli
              </h4>
              <p className="text-[10px] text-amber-400/80 font-mono">
                Oxford → Parigi → Venezia → Creta → Alessandria → Luxor → Siwa → Petra → Iguazù → Nazca → Machu Picchu → Paititi
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 rounded-xl bg-amber-950/60 border border-amber-600/40 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-300 font-bold text-[11px]">
                <Award className="w-3.5 h-3.5 text-yellow-400" />
                <span>12 Reliquie Supreme</span>
              </div>
              <p className="text-[10px] text-stone-300 leading-tight">
                Ogni 10 livelli completi uno stage, sblocchi una reliquia leggendaria per il tuo Museo 3D e ricevi il telegramma storico!
              </p>
            </div>

            <div className="p-2 rounded-xl bg-amber-950/60 border border-amber-600/40 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-300 font-bold text-[11px]">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>I 3 Grandi Finali</span>
              </div>
              <p className="text-[10px] text-stone-300 leading-tight">
                Al Livello 120 nel cuore di Paititi sarai tu a scegliere il destino della città d'oro tra i 3 bivi della lore!
              </p>
            </div>
          </div>
        </div>
      ),
      message:
        "Tutto è collegato: il diario di Padre Lopez, le lettere del Professor Bellini e l'inseguimento della Mano Oscura. Consulta il Mappamondo e il Diario di Bordo dal Campo Base per seguire ogni svolta della trama!",
      tip: "Tocca 'Campo Base' in alto a destra in qualsiasi momento per accedere a Mappa, Museo, Emporio e Guardaroba.",
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
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#22160d] via-[#170e07] to-[#0e0703] border-2 border-amber-500/70 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-white overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header Bar inside Modal */}
        <div className="w-full leather-belt px-4 py-3 flex items-center justify-between border-b border-amber-600/40 shrink-0">
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
                Manuale Ufficiale di Spedizione • 1928
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Step Counter Dots */}
            <div className="flex items-center gap-1">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setCurrentStep(idx);
                    sound.playTap();
                  }}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentStep
                      ? 'w-6 bg-amber-400 shadow-[0_0_8px_#f59e0b]'
                      : 'w-2 bg-stone-700 hover:bg-stone-500'
                  }`}
                  title={`Passo ${idx + 1}`}
                />
              ))}
            </div>

            {/* Skip Button */}
            <button
              type="button"
              onClick={handleComplete}
              className="px-2.5 py-1 rounded-full bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-[11px] font-bold border border-amber-600/60 transition cursor-pointer active:scale-90 flex items-center gap-1 shadow"
              title="Chiudi il tutorial e inizia a giocare"
            >
              <span>Salta</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Scrollable Center Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3.5 flex-1">
          
          {/* Step Category Badge & Title */}
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] font-bold uppercase tracking-wider mb-1">
              {currentStepData.badge} • PASSO {currentStep + 1} DI {steps.length}
            </span>
            <h2 className="text-lg sm:text-xl font-black text-amber-100 font-serif leading-tight">
              {currentStepData.title}
            </h2>
            <p className="text-xs text-amber-300/80 font-medium">
              {currentStepData.subtitle}
            </p>
          </div>

          {/* Illustrated Visual Card */}
          {currentStepData.renderIllustration()}

          {/* Guide Dialogue */}
          <div className="bg-stone-950/80 border border-amber-900/50 rounded-2xl p-3 sm:p-3.5 shadow-inner">
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
        <div className="p-3 sm:p-4 bg-black/70 border-t border-amber-900/40 flex items-center justify-between gap-3 shrink-0">
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
