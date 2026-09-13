import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Trophy,
  Crown,
  Sparkles,
  BookOpen,
  Globe,
  Check,
  Coins,
  ChevronRight,
  Award
} from 'lucide-react';
import { EXPLORERS, type ExplorerProfile } from '../data/avatarData';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';

interface GrandFinaleModalProps {
  isOpen: boolean;
  profile: ExplorerProfile;
  onClose: () => void;
  onOpenJournal: () => void;
  onOpenMappamondo: () => void;
}

type EndingType = 'academy' | 'secret_archive' | 'sacred_jungle';

interface EndingDetail {
  id: EndingType;
  title: string;
  badge: string;
  icon: string;
  shortDesc: string;
  epilogue: string;
  loreTitle: string;
  themeColor: string;
  borderColor: string;
  accentBg: string;
}

const SAGA_ENDINGS: Record<EndingType, EndingDetail> = {
  academy: {
    id: 'academy',
    title: "L'Accademia della Luce",
    badge: 'RIVELAZIONE AL MONDO',
    icon: '🏛️',
    shortDesc: "Condividi la scoperta con la Royal Geographic Society e l'umanità intera.",
    epilogue:
      "Hai scelto la via della verità e della conoscenza scientifica. Le tue 120 tavole archeologiche e i 12 Sigilli vengono esposti nelle più illustri università e musei di Londra, Parigi e Roma. La Mano Oscura viene smascherata pubblicamente dai resoconti della spedizione. Il Professor Bellini e Padre Lopez vengono riabilitati come pionieri immortali dell'archeologia moderna.",
    loreTitle: 'Titolo Onorifico: Gran Maestro del Sapere Universale',
    themeColor: 'text-amber-300',
    borderColor: 'border-amber-400',
    accentBg: 'bg-amber-950/70',
  },
  secret_archive: {
    id: 'secret_archive',
    title: 'Il Sigillo dei Guardiani',
    badge: "L'ARCHIVIO SEGRETO",
    icon: '🗝️',
    shortDesc: 'Sigilla per sempre le coordinate di Paititi per proteggerla dalla cupidigia umana.',
    epilogue:
      "Riconosci che il mondo del 1928 non è ancora pronto per il potere del Cuore di Paititi. Insieme a Padre Lopez, riponi i 12 Sigilli in una cassaforte sotterranea inespugnabile, cancellando le coordinate dalla mappa. La Mano Oscura non troverà mai la Città dell'Oro. Sei diventato il Custode Silenzioso del più grande enigma del pianeta.",
    loreTitle: 'Titolo Onorifico: Cavaliere del Silenzio Eterno',
    themeColor: 'text-indigo-300',
    borderColor: 'border-indigo-400',
    accentBg: 'bg-indigo-950/70',
  },
  sacred_jungle: {
    id: 'sacred_jungle',
    title: 'Il Respiro di Paititi',
    badge: "L'EQUILIBRIO ANCESTRALE",
    icon: '🌿',
    shortDesc: "Restituisci il Cuore d'Oro ai guardiani nativi e alla foresta pluviale.",
    epilogue:
      "Comprendi che Paititi non appartiene a imperi né a collezioni d'antiquariato. Deponi il Cuore d'Oro tra le braccia dei saggi anziani del Madre de Dios e delle cascate sacre. Le liane della giungla richiudono il portale ciclopico per sempre, preservando l'armonia millenaria tra uomo e natura. La tua leggenda vivrà nei canti degli spiriti delle Ande.",
    loreTitle: 'Titolo Onorifico: Protettore della Pachamama',
    themeColor: 'text-emerald-300',
    borderColor: 'border-emerald-400',
    accentBg: 'bg-emerald-950/70',
  },
};

export const GrandFinaleModal: React.FC<GrandFinaleModalProps> = ({
  isOpen,
  profile,
  onClose,
  onOpenJournal,
  onOpenMappamondo,
}) => {
  const [selectedEnding, setSelectedEnding] = useState<EndingType | null>(() => {
    return (localStorage.getItem('differenze_saga_ending_v1') as EndingType) || null;
  });
  const [isEndingConfirmed, setIsEndingConfirmed] = useState<boolean>(() => {
    return Boolean(localStorage.getItem('differenze_saga_ending_v1'));
  });

  if (!isOpen) return null;

  const explorer = EXPLORERS[profile.avatarId] || EXPLORERS.samira;

  const handleChooseEnding = (ending: EndingType) => {
    setSelectedEnding(ending);
    setIsEndingConfirmed(true);
    localStorage.setItem('differenze_saga_ending_v1', ending);
    sound.playVictory();
    triggerHaptic('success');

    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
    });
  };

  const activeEndingData = selectedEnding ? SAGA_ENDINGS[selectedEnding] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-xl animate-fade-in select-none">
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#2a1708] via-[#1a0e04] to-[#0c0602] border-2 border-amber-400/80 rounded-3xl shadow-[0_0_60px_rgba(245,158,11,0.5)] text-white overflow-hidden flex flex-col max-h-[94vh]">
        
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-amber-500/25 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full leather-belt px-5 py-3.5 flex items-center justify-between border-b-2 border-amber-500/60 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full border-2 border-amber-300 overflow-hidden shadow-lg bg-stone-950 shrink-0">
              <img
                src={explorer.portrait}
                alt={explorer.name}
                className="w-full h-full object-cover object-top scale-105"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-amber-300" />
                <span className="text-sm font-black text-amber-200 font-serif tracking-wide uppercase">
                  Gran Finale della Saga
                </span>
                <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] font-bold">
                  120 / 120 LIVELLI
                </span>
              </div>
              <span className="text-[10px] text-amber-400/80 font-serif block">
                Il Mistero di Paititi è Stato Risolto!
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 font-mono text-xs font-black shadow-inner">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span>100% COMPLETATO</span>
          </div>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          
          <div className="relative rounded-2xl bg-gradient-to-b from-amber-950/80 via-yellow-950/50 to-stone-950/90 border-2 border-amber-500/60 p-4 sm:p-5 text-center shadow-2xl overflow-hidden">
            <div className="absolute top-2 right-3 flex items-center gap-1 text-[10px] font-mono text-amber-400/80">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin-slow" />
              <span>Paititi • Livello 120</span>
            </div>

            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-100 border-2 border-yellow-200 shadow-[0_0_35px_rgba(245,158,11,0.8)] flex items-center justify-center text-3xl sm:text-4xl animate-pulse mb-3">
              💎
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-amber-100 font-serif leading-tight">
              HAI CONQUISTATO IL CUORE DI PAITITI!
            </h2>
            <p className="text-xs sm:text-sm text-amber-200/90 max-w-lg mx-auto font-serif italic mt-1.5 leading-relaxed">
              "Attraverso 12 capitoli, dai sotterranei d'Europa alle vette delle Ande, hai superato ogni trappola della Mano Oscura e ricomposto il puzzle archeologico più ambizioso della storia."
            </p>
          </div>

          {isEndingConfirmed && activeEndingData ? (
            <div className={`p-4 sm:p-5 rounded-2xl border-2 shadow-2xl space-y-3 transition-all ${activeEndingData.accentBg} ${activeEndingData.borderColor}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-amber-400 font-serif flex items-center gap-1.5">
                  <span className="text-lg">{activeEndingData.icon}</span>
                  {activeEndingData.badge}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-black/60 border border-white/10 text-xs font-bold text-amber-200">
                  Epilogo Scelto
                </span>
              </div>

              <h3 className={`text-lg sm:text-xl font-black font-serif ${activeEndingData.themeColor}`}>
                {activeEndingData.title}
              </h3>

              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-serif italic bg-black/40 p-3.5 rounded-xl border border-white/10">
                "{activeEndingData.epilogue}"
              </p>

              <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <span className="font-bold text-amber-300 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-yellow-400" />
                  {activeEndingData.loreTitle}
                </span>
                <button
                  type="button"
                  onClick={() => setIsEndingConfirmed(false)}
                  className="text-[11px] text-amber-400 hover:text-amber-300 underline cursor-pointer text-left"
                >
                  Cambia la tua decisione finale
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="text-center">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold uppercase tracking-wider">
                  IL DESTINO DELLA CITTÀ D'ORO
                </span>
                <h3 className="text-base sm:text-lg font-black text-amber-100 font-serif mt-1">
                  Quale sarà la sorte di Paititi e dei 12 Sigilli?
                </h3>
                <p className="text-xs text-amber-300/70">
                  Tocca una delle tre scelte per determinare il finale della tua epopea:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {(Object.keys(SAGA_ENDINGS) as EndingType[]).map(key => {
                  const item = SAGA_ENDINGS[key];
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleChooseEnding(key)}
                      className={`p-3.5 rounded-2xl border-2 flex flex-col text-left justify-between gap-2 transition-all cursor-pointer active:scale-95 group select-none ${item.accentBg} ${item.borderColor} hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-2xl">{item.icon}</span>
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-amber-300 uppercase">
                            {item.badge}
                          </span>
                        </div>
                        <h4 className="text-sm font-black text-amber-100 font-serif leading-tight group-hover:text-yellow-300">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-stone-300 mt-1 leading-snug">
                          {item.shortDesc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-bold text-amber-400 mt-2 pt-2 border-t border-white/10">
                        <span>Scegli questo Finale</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="bg-gradient-to-r from-amber-950/90 via-[#201309] to-amber-950/90 border border-amber-500/40 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-inner">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-amber-300 text-2xl shrink-0 shadow">
                📜
              </div>
              <div className="text-left">
                <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider block font-serif">
                  Certificato Ufficiale • RGS 1928
                </span>
                <span className="text-sm font-bold text-amber-100 font-serif block">
                  {profile.playerName} • Gran Maestro di Paititi
                </span>
                <span className="text-[11px] text-stone-300">
                  Tutti i 12 Capitoli e 120 Livelli registrati negli annali storici.
                </span>
              </div>
            </div>

            <div className="hidden sm:flex flex-col items-end shrink-0">
              <div className="flex items-center gap-1 text-amber-300 font-mono font-black text-xs">
                <Coins className="w-4 h-4 text-yellow-400" />
                <span>+1000 Oro Bonus</span>
              </div>
              <span className="text-[9px] text-emerald-400 font-bold uppercase">Accreditato</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-black/80 border-t border-amber-900/50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                sound.playTap();
                onOpenJournal();
              }}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-500/50 text-indigo-200 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition active:scale-95"
            >
              <BookOpen className="w-4 h-4" />
              <span>Diario Completo</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sound.playTap();
                onOpenMappamondo();
              }}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-amber-950/80 hover:bg-amber-900 border border-amber-500/50 text-amber-200 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition active:scale-95"
            >
              <Globe className="w-4 h-4" />
              <span>Mappamondo 3D</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              sound.playTap();
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-black font-serif tracking-wider text-xs uppercase bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 text-stone-950 shadow-[0_0_20px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition"
          >
            <span>Torna al Campo Base</span>
            <Check className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

      </div>
    </div>
  );
};
