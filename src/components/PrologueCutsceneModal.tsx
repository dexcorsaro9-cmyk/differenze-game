import React, { useState, useEffect, useRef } from 'react';
import { EXPLORERS, type ExplorerProfile } from '../data/avatarData';
import { Compass, Sparkles, ArrowRight } from 'lucide-react';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { assetUrl } from '../utils/assetUrl';

interface PrologueCutsceneModalProps {
  isOpen: boolean;
  profile: ExplorerProfile;
  onComplete: () => void;
}

export const PrologueCutsceneModal: React.FC<PrologueCutsceneModalProps> = ({
  isOpen,
  profile,
  onComplete,
}) => {
  const [currentScene, setCurrentScene] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [hasVideoError, setHasVideoError] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const explorer = EXPLORERS[profile.avatarId];

  // Script scenes adapted to the selected explorer's personality
  const scenes = [
    {
      caption: 'ANNO 1928 — ALTOPIANO ANDINO',
      title: 'Il Mistero Dimenticato',
      text:
        profile.avatarId === 'samira'
          ? 'Per secoli, gli archivi hanno trattato la Città d\'Oro come un semplice miraggio. Ma le antiche iscrizioni parlano chiaro: i templi pre-incaici comunicano attraverso frequenze sacre.'
          : 'I cartografi coloniali disegnarono mappe ingannevoli per nascondere l\'accesso alle valli proibite. Ma i riferimenti geodetici incisi sulla roccia non mentono mai.',
      image: '/splash_screen.jpg',
    },
    {
      caption: 'VERSO LA GIUNGLA INESPLORATA',
      title: 'Il Taccuino di Bellini',
      text:
        profile.avatarId === 'samira'
          ? 'Questo taccuino d\'epoca custodisce i rilievi originali della spedizione perduta. Confrontando ogni schizzo con il terreno reale, possiamo decifrare la rotta per Paititi.'
          : 'Ogni pagina di questo taccuino contiene indizi di triangolazione topografica. Tra l\'archivio storico e lo scavo sul campo si celano le differenze decisive.',
      image: '/antique_world_map.jpg',
    },
    {
      caption: 'L\'INIZIO DELLA SPEDIZIONE',
      title: 'Gli Occhi dell\'Esploratore',
      text:
        profile.avatarId === 'samira'
          ? 'Le reliquie andine e gli idoli d\'oro risveglieranno l\'antico santuario. La mia decifrazione è pronta: osserva attentamente, il minimo dettaglio fa la differenza!'
          : 'I dodici varchi delle terre alte ci attendono. Tieni pronta la bussola e la cintura degli strumenti: la spedizione per la città perduta ha inizio!',
      image: explorer.image,
    },
  ];

  useEffect(() => {
    if (!isOpen) {
      setCurrentScene(0);
      setHasVideoError(false);
    } else {
      // Safety timeout: if 17MB video takes more than 2.5s to start playing, fallback to illustrated cards
      const timer = setTimeout(() => {
        if (videoRef.current && (videoRef.current.paused || videoRef.current.readyState < 2)) {
          setHasVideoError(true);
        }
      }, 2500);

      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay with audio was prevented by browser policy; switch to muted and play
            setIsMuted(true);
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play().catch(() => {
                setHasVideoError(true);
              });
            }
          });
        }
      }

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = () => {
    sound.playTap();
    triggerHaptic('light');

    if (currentScene < scenes.length - 1) {
      setCurrentScene(prev => prev + 1);
    } else {
      handleFinish();
    }
  };

  const handleFinish = () => {
    sound.playLevelWin();
    triggerHaptic('success');
    onComplete();
  };

  const activeScene = scenes[currentScene];

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black overflow-hidden select-none animate-fadeIn">
      {/* Background Media: Check for MP4 video, otherwise fallback to high-end Ken Burns motion graphic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {!hasVideoError ? (
          <video
            ref={videoRef}
            src={assetUrl('/videos/prologue_paititi.mp4')}
            autoPlay
            muted={isMuted}
            playsInline
            onError={() => setHasVideoError(true)}
            onEnded={handleFinish}
            className="w-full h-full object-cover object-center scale-105"
          />
        ) : null}

        {/* Fallback procedural Ken Burns cutscene when video file is not yet dropped */}
        {hasVideoError && (
          <div className="relative w-full h-full">
            <img
              key={currentScene}
              src={assetUrl(activeScene.image)}
              alt={activeScene.title}
              className="w-full h-full object-cover object-center animate-kenburns transform scale-105 transition-all duration-1000"
            />
            {/* Cinematic Gradients & Particle Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-black/80" />
            <div className="absolute inset-0 bg-radial-vignette opacity-80" />
          </div>
        )}
      </div>

      {/* Cinematic Frame Border */}
      <div className="absolute inset-0 border-y-8 sm:border-y-12 border-black pointer-events-none z-10" />

      {/* Top Controls: ALWAYS visible with high z-index so user can skip at any time */}
      <div className="absolute top-4 inset-x-4 z-30 flex items-center justify-between safe-pt pointer-events-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 border border-amber-500/50 backdrop-blur-md text-amber-300 text-[11px] font-bold uppercase tracking-widest font-serif shadow-lg">
          <Compass className="w-3.5 h-3.5 animate-spin-slow text-amber-400" />
          <span>Prologo Spedizione</span>
        </div>

        <button
          type="button"
          onClick={handleFinish}
          className="px-3.5 py-1.5 rounded-full bg-amber-950/90 border border-amber-400/80 hover:bg-amber-900 text-amber-200 text-xs font-bold font-serif uppercase tracking-wider backdrop-blur-md active:scale-95 transition cursor-pointer shadow-xl flex items-center gap-1.5"
        >
          <span>Salta Prologo</span>
          <span className="text-amber-400">✕</span>
        </button>
      </div>

      {/* Bottom Subtitle / Narrative Box: ONLY SHOWN IN PROCEDURAL FALLBACK MODE (hasVideoError) */}
      {hasVideoError && (
        <div className="absolute bottom-6 inset-x-3 max-w-md mx-auto z-20 space-y-3">
        {/* Explorer Voice Card */}
        <div className="bg-stone-950/90 border-2 border-amber-500/50 rounded-3xl p-4 shadow-[0_0_40px_rgba(0,0,0,0.9)] backdrop-blur-md space-y-2.5 animate-slideUp">
          
          {/* Explorer Header */}
          <div className="flex items-center justify-between border-b border-amber-950/80 pb-2">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full border-2 border-amber-400/80 overflow-hidden shadow-md shrink-0 bg-stone-900">
                <img
                  src={assetUrl(explorer.portrait)}
                  alt={explorer.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-amber-400 tracking-wider font-serif flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  {activeScene.caption}
                </div>
                <h3 className="text-sm font-black text-amber-100 font-serif leading-none mt-0.5">
                  {profile.playerName} · <span className="text-xs text-amber-300/80 font-medium">{explorer.title}</span>
                </h3>
              </div>
            </div>

            {/* Scene step indicator */}
            <div className="flex items-center gap-1">
              {scenes.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentScene
                      ? 'bg-amber-400 scale-125 shadow-[0_0_8px_#f59e0b]'
                      : 'bg-stone-700'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Dialogue Text */}
          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-serif italic drop-shadow min-h-[50px]">
            "{activeScene.text}"
          </p>

          {/* Action Row */}
          <div className="pt-1 flex items-center justify-between">
            <div className="text-[10px] text-stone-400 font-mono">
              Scena {currentScene + 1} di {scenes.length}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="py-2 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 text-xs font-black font-serif uppercase tracking-wider shadow-lg flex items-center gap-1.5 active:scale-95 transition cursor-pointer"
            >
              <span>{currentScene === scenes.length - 1 ? 'Inizia Tutorial' : 'Continua'}</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};
