import React, { useState, useEffect, useRef } from 'react';
import { EXPLORERS, type ExplorerProfile } from '../data/avatarData';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { assetUrl } from '../utils/assetUrl';
import { useTranslation } from '../i18n/LanguageContext';

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
  const { language, t } = useTranslation();
  const [currentScene, setCurrentScene] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [hasVideoError, setHasVideoError] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const explorer = EXPLORERS[profile.avatarId];

  // Script scenes adapted to the selected explorer's personality and language
  const scenesByLang = {
    it: [
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
    ],
    en: [
      {
        caption: 'YEAR 1928 — ANDEAN HIGHLANDS',
        title: 'The Forgotten Mystery',
        text:
          profile.avatarId === 'samira'
            ? 'For centuries, archives considered the City of Gold a mere mirage. But ancient inscriptions reveal the truth: pre-Incan temples communicate through sacred acoustic frequencies.'
            : 'Colonial cartographers drew deceitful maps to conceal the forbidden valley paths. But geodetic survey points carved into ancient rock never lie.',
        image: '/splash_screen.jpg',
      },
      {
        caption: 'TOWARDS THE UNCHARTED JUNGLE',
        title: "Bellini's Field Journal",
        text:
          profile.avatarId === 'samira'
            ? 'This vintage notebook preserves original survey sketches of the lost trek. Comparing each sketch with the terrain, we can chart our course to Paititi.'
            : 'Every page of this journal holds topographic triangulation clues. The key differences between historical archives and the field will unlock the path.',
        image: '/antique_world_map.jpg',
      },
      {
        caption: 'EXPEDITION COMMENCES',
        title: "The Explorer's Keen Eye",
        text:
          profile.avatarId === 'samira'
            ? 'Andean relics and golden idols will awaken the sanctuary. My decryptions are ready: look closely, the smallest detail makes all the difference!'
            : 'Twelve highland gateways await us. Ready your compass and tool belt: our quest for the lost city begins now!',
        image: explorer.image,
      },
    ],
    es: [
      {
        caption: 'AÑO 1928 — ALTIPLANO ANDINO',
        title: 'El Misterio Olvidado',
        text:
          profile.avatarId === 'samira'
            ? 'Durante siglos, los archivos trataron la Ciudad de Oro como un espejismo. Pero las inscripciones antiguas hablan claro: los templos preincaicos resuenan con frecuencias sagradas.'
            : 'Los cartógrafos coloniales trazaron mapas engañosos para ocultar las rutas prohibidas. Pero las marcas geodésicas talladas en la roca nunca mienten.',
        image: '/splash_screen.jpg',
      },
      {
        caption: 'HACIA LA SELVA INEXPLORADA',
        title: 'El Diario de Bellini',
        text:
          profile.avatarId === 'samira'
            ? 'Este cuaderno de campo custodia los bocetos originales de la expedición perdida. Comparando cada dibujo con el terreno real, descifraremos la ruta hacia Paititi.'
            : 'Cada página de este diario contiene pistas de triangulación topográfica. Entre el archivo histórico y la excavación se ocultan las diferencias clave.',
        image: '/antique_world_map.jpg',
      },
      {
        caption: 'EL COMIENZO DE LA EXPEDICIÓN',
        title: 'Los Ojos del Explorador',
        text:
          profile.avatarId === 'samira'
            ? 'Las reliquias andinas y los ídolos de oro despertarán el antiguo santuario. Mis descifrados están listos: ¡observa con atención, cada detalle cuenta!'
            : 'Doce pasos de las altas cumbres nos aguardan. Prepara la brújula y el equipo: ¡la expedición hacia la ciudad perdida comienza ahora!',
        image: explorer.image,
      },
    ],
  };

  const scenes = scenesByLang[language] || scenesByLang.it;

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
    <div
      onClick={handleNext}
      className="fixed inset-0 z-60 flex items-center justify-center bg-black overflow-hidden select-none animate-fadeIn cursor-pointer"
    >
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

      {/* Single Small Skip Button in Upper Right */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 safe-pt pointer-events-auto">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleFinish();
          }}
          className="px-3 py-1 rounded-full bg-black/60 hover:bg-black/85 border border-amber-500/40 hover:border-amber-400 text-amber-200 hover:text-white text-xs font-bold font-serif uppercase tracking-wider backdrop-blur-md active:scale-95 transition-all cursor-pointer shadow-lg flex items-center gap-1"
        >
          <span>{t.prologue.skip}</span>
          <span className="text-amber-400 text-[10px]">➔</span>
        </button>
      </div>
    </div>
  );
};
