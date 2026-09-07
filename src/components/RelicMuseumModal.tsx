import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Landmark, 
  Sparkles, 
  Lock, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Compass, 
  RotateCw, 
  Coins, 
  Eye, 
  ChevronLeft, 
  ChevronRight,
  Gamepad2
} from 'lucide-react';
import { ALL_COLLECTIBLE_RELICS, type CollectibleRelic } from '../data/collectiblesData';
import { sound } from '../utils/audio';
import { assetUrl } from '../utils/assetUrl';

interface RelicMuseumModalProps {
  isOpen: boolean;
  onClose: () => void;
  discoveredRelicIds: string[];
}

export const RelicMuseumModal: React.FC<RelicMuseumModalProps> = ({
  isOpen,
  onClose,
  discoveredRelicIds,
}) => {
  const [selectedRelic, setSelectedRelic] = useState<CollectibleRelic>(ALL_COLLECTIBLE_RELICS[0]);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [tiltX, setTiltX] = useState<number>(0);
  const [tiltY, setTiltY] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'3d_room' | 'unity_webgl'>('3d_room');
  const [isUnityAvailable, setIsUnityAvailable] = useState<boolean>(false);

  const displayCaseRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);
  const startPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Check if Unity WebGL build exists
  useEffect(() => {
    if (isOpen) {
      fetch('/unity_museum/index.html', { method: 'HEAD' })
        .then(res => setIsUnityAvailable(res.ok))
        .catch(() => setIsUnityAvailable(false));
    }
  }, [isOpen]);

  // Continuous 3D slow turntable rotation
  useEffect(() => {
    if (!isOpen || !isAutoRotating) return;
    const interval = setInterval(() => {
      setRotationAngle(prev => (prev + 1.2) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isOpen, isAutoRotating]);

  if (!isOpen) return null;

  const totalRelics = ALL_COLLECTIBLE_RELICS.length;
  const discoveredCount = ALL_COLLECTIBLE_RELICS.filter(r => discoveredRelicIds.includes(r.id)).length;
  const progressPercent = Math.round((discoveredCount / totalRelics) * 100);
  const isSelectedDiscovered = discoveredRelicIds.includes(selectedRelic.id);
  const selectedIndex = ALL_COLLECTIBLE_RELICS.findIndex(r => r.id === selectedRelic.id);

  // Mouse / Touch 3D Parallax Tilt Handler
  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDraggingRef.current) {
      const deltaX = e.clientX - startPosRef.current.x;
      const deltaY = e.clientY - startPosRef.current.y;
      setRotationAngle(prev => prev + deltaX * 0.8);
      setTiltX(Math.max(-25, Math.min(25, deltaY * 0.4)));
      startPosRef.current = { x: e.clientX, y: e.clientY };
    } else if (displayCaseRef.current) {
      const rect = displayCaseRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTiltY(x * 18);
      setTiltX(-y * 18);
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startPosRef.current = { x: e.clientX, y: e.clientY };
    setIsAutoRotating(false);
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handlePrev = () => {
    sound.playSuccess();
    const prevIdx = selectedIndex === 0 ? totalRelics - 1 : selectedIndex - 1;
    setSelectedRelic(ALL_COLLECTIBLE_RELICS[prevIdx]);
  };

  const handleNext = () => {
    sound.playSuccess();
    const nextIdx = selectedIndex === totalRelics - 1 ? 0 : selectedIndex + 1;
    setSelectedRelic(ALL_COLLECTIBLE_RELICS[nextIdx]);
  };

  // Render High-Definition Unique 3D Relic Graphics
  const render3DRelic = (relic: CollectibleRelic, isFound: boolean) => {
    if (!isFound) {
      return (
        <div className="relative flex flex-col items-center justify-center filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-stone-900 via-stone-950 to-black border-2 border-stone-800 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-vignette opacity-70" />
            <Lock className="w-12 h-12 text-stone-600 animate-pulse" />
          </div>
          <span className="mt-3 px-3 py-1 rounded-full bg-stone-900/90 border border-stone-800 text-[11px] font-bold text-stone-500 uppercase tracking-widest">
            Teca Sigillata
          </span>
        </div>
      );
    }

    // High Definition Authentic 3D Relic Asset Render
    const relicImages: Record<string, string> = {
      relic_chachapoya_idol: '/relics/chachapoya_idol.jpg',
      relic_jade_mask: '/relics/jade_mask.jpg',
      relic_crystal_skull: '/relics/crystal_skull.jpg',
      relic_tanis_medallion: '/relics/sun_disk.jpg',
      relic_egyptian_scarab: '/relics/chachapoya_idol.jpg',
      relic_coronado_cross: '/relics/sun_disk.jpg',
    };

    const imgSrc = relicImages[relic.id] || '/relics/chachapoya_idol.jpg';

    return (
      <div 
        className="relative flex flex-col items-center justify-center transition-transform duration-100 ease-out"
        style={{
          transform: `perspective(1000px) rotateY(${rotationAngle * 0.12}deg) rotateX(${tiltX}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Volumetric Artifact Glow & Museum Spotlight */}
        <div className="absolute -top-16 w-44 h-44 rounded-full bg-amber-500/25 blur-2xl pointer-events-none animate-pulse" />

        {/* 3D Glass & Brass Showcase with AAA Render */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-2 border-amber-400/80 shadow-[0_15px_40px_rgba(0,0,0,0.9),0_0_30px_rgba(245,158,11,0.4)] bg-gradient-to-b from-[#180f08] via-[#0d0704] to-black flex items-center justify-center group">
          <img
            src={assetUrl(imgSrc)}
            alt={relic.name}
            className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
          />

          {/* Glass Reflection & Shimmer Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none rounded-3xl" />
          <div className="absolute inset-0 border border-amber-400/40 rounded-3xl pointer-events-none" />

          {/* Subtle Golden Corner Ornaments */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-amber-400/80 rounded-tl-sm pointer-events-none" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-amber-400/80 rounded-tr-sm pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-amber-400/80 rounded-bl-sm pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-amber-400/80 rounded-br-sm pointer-events-none" />
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/95 text-stone-100 select-none animate-in fade-in duration-300 backdrop-blur-xl">
      {/* Top Archeological Header */}
      <div className="h-16 px-4 bg-gradient-to-r from-[#231509] via-[#382312] to-[#231509] border-b-2 border-amber-600/70 flex items-center justify-between shadow-2xl relative z-20">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-400/50 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            <Landmark className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-black tracking-wider text-amber-200 uppercase font-serif">
                SALA DELLE RELIQUIE 3D
              </h2>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500/30 text-amber-200 border border-amber-400/50">
                UNITY 3D READY
              </span>
            </div>
            <p className="text-[11px] text-stone-400">
              Collezione Imperiale di Paititi • {discoveredCount} / {totalRelics} Reliquie alla Luce ({progressPercent}%)
            </p>
          </div>
        </div>

        {/* View Mode Switch & Controls */}
        <div className="flex items-center gap-2">
          {/* Switch between Unity WebGL & 3D Interactive Room */}
          <div className="flex bg-stone-900/90 p-1 rounded-2xl border border-amber-600/40">
            <button
              onClick={() => setViewMode('3d_room')}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === '3d_room'
                  ? 'bg-amber-500/30 text-amber-200 border border-amber-400/60 shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Sala HD 3D</span>
            </button>

            <button
              onClick={() => setViewMode('unity_webgl')}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === 'unity_webgl'
                  ? 'bg-amber-500/30 text-amber-200 border border-amber-400/60 shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>Unity Engine</span>
            </button>
          </div>

          <button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`p-2 rounded-2xl border transition-all text-xs font-bold flex items-center gap-1.5 ${
              isAutoRotating
                ? 'bg-amber-500/20 border-amber-500/60 text-amber-300'
                : 'bg-stone-800 border-stone-700 text-stone-400 hover:text-white'
            }`}
            title="Rotazione 360°"
          >
            <RotateCw className={`w-4 h-4 ${isAutoRotating ? 'animate-spin-slow' : ''}`} />
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-2xl bg-stone-800/80 hover:bg-rose-950 border border-stone-700 hover:border-rose-500/60 text-stone-300 hover:text-white transition-all active:scale-95 ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main 3D Exhibition Space */}
      <div className="flex-1 relative flex flex-col md:flex-row overflow-hidden">
        {viewMode === 'unity_webgl' ? (
          /* Unity WebGL Viewport Container */
          <div className="flex-1 w-full h-full relative bg-stone-950 flex flex-col items-center justify-center p-6 text-center">
            {isUnityAvailable ? (
              <iframe
                src={assetUrl('/unity_museum/index.html')}
                title="Unity 3D Museum Hall"
                className="w-full h-full border-2 border-amber-600/50 rounded-2xl shadow-2xl"
              />
            ) : (
              <div className="max-w-lg bg-stone-900/90 border-2 border-amber-500/60 p-8 rounded-3xl shadow-2xl space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400 flex items-center justify-center mx-auto text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                  <Gamepad2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black text-amber-200 font-serif">
                  Pipeline Unity 6 (6000.5.4f1) Pronta
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-serif italic">
                  "Il motore Unity è installato sul tuo sistema in <code className="text-amber-400 bg-black/50 px-1.5 py-0.5 rounded">C:\Program Files\Unity\Hub\Editor\6000.5.4f1</code> con il modulo WebGLSupport attivo. Compilando la scena in <code className="text-amber-400 bg-black/50 px-1.5 py-0.5 rounded">public/unity_museum/</code>, la simulazione 3D nativa apparirà in questo riquadro!"
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setViewMode('3d_room')}
                    className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-950 font-black text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all"
                  >
                    Guarda la Sala 3D Retroilluminata
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Ultra-High Definition 3D Interactive Hall */
          <div
            ref={displayCaseRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="flex-1 w-full h-full relative cursor-grab active:cursor-grabbing flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#140b05] via-[#241409] to-[#0c0602]"
          >
            {/* Background 3D Temple Vault Pillars & Chiaroscuro */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Reflective Dark Marble Floor Grid */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1/2 opacity-30"
                style={{
                  background: 'linear-gradient(180deg, transparent 0%, rgba(245,158,11,0.1) 100%), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 60px)',
                  transform: 'perspective(500px) rotateX(60deg)',
                  transformOrigin: 'bottom center',
                }}
              />
              {/* Volumetric Spotlights from Top */}
              <div className="absolute top-0 left-1/4 w-72 h-[120%] bg-gradient-to-b from-amber-300/10 via-amber-500/5 to-transparent blur-3xl transform -rotate-12 pointer-events-none" />
              <div className="absolute top-0 right-1/4 w-72 h-[120%] bg-gradient-to-b from-amber-300/10 via-amber-500/5 to-transparent blur-3xl transform rotate-12 pointer-events-none" />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-2xl bg-stone-900/80 hover:bg-amber-950/90 border-2 border-amber-600/50 hover:border-amber-400 text-amber-300 shadow-[0_4px_25px_rgba(0,0,0,0.8)] transition-all active:scale-90 hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-2xl bg-stone-900/80 hover:bg-amber-950/90 border-2 border-amber-600/50 hover:border-amber-400 text-amber-300 shadow-[0_4px_25px_rgba(0,0,0,0.8)] transition-all active:scale-90 hover:scale-105"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* THE BACKLIT GLASS DISPLAY CASE (TECA DI CRISTALLO RETROILLUMINATA) */}
            <div 
              className="relative flex flex-col items-center justify-center transition-transform duration-100 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${tiltY}deg) rotateX(${tiltX}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Glass Display Cylindrical Case */}
              <div className="relative w-64 sm:w-80 h-80 sm:h-96 rounded-t-3xl border-2 border-amber-400/60 bg-gradient-to-b from-amber-500/10 via-sky-400/5 to-amber-500/20 backdrop-blur-xs flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.35),inset_0_0_30px_rgba(255,255,255,0.2)] overflow-hidden">
                {/* Curved Glass Specular Highlight Refraction */}
                <div className="absolute top-0 left-4 w-6 h-full bg-gradient-to-r from-white/20 via-white/10 to-transparent blur-[2px] pointer-events-none transform -skew-x-6" />
                <div className="absolute top-0 right-4 w-4 h-full bg-gradient-to-l from-white/15 to-transparent blur-[1px] pointer-events-none" />

                {/* Crimson Velvet Base Inside Case */}
                <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-[#4c0519] to-[#881337] border-t-2 border-amber-400/60 shadow-inner" />

                {/* THE 3D ARTIFACT SUSPENDED INSIDE */}
                <div className="relative z-10 -translate-y-4">
                  {render3DRelic(selectedRelic, isSelectedDiscovered)}
                </div>

                {/* BACKLIGHT BEAM (RETROILLUMINAZIONE VOLUMETRICA DAL BASSO) */}
                <div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-36 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 100%, rgba(251, 191, 36, 0.75) 0%, rgba(217, 119, 6, 0.4) 40%, transparent 75%)',
                  }}
                />
              </div>

              {/* RETRO-ILLUMINATED PEDESTAL BASE (BASAMENTO IN MOGANO & OTTONE) */}
              <div className="relative w-72 sm:w-92 h-20 bg-gradient-to-b from-[#382312] via-[#231509] to-[#120a04] border-2 border-amber-500 rounded-b-2xl shadow-[0_20px_40px_rgba(0,0,0,0.9),0_0_30px_rgba(245,158,11,0.5)] flex flex-col items-center justify-center">
                {/* Glowing LED Ring around Pedestal */}
                <div className="absolute -top-1 w-full h-2 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 shadow-[0_0_15px_#f59e0b] rounded-full" />
                
                {/* Brass Plaque with Inscribed Name */}
                <div className="px-4 py-1 rounded-xl bg-gradient-to-r from-amber-700/60 via-amber-500/40 to-amber-700/60 border border-amber-400/80 text-center shadow-md">
                  <span className="text-[11px] sm:text-xs font-black tracking-wider uppercase text-amber-200 font-serif">
                    {isSelectedDiscovered ? selectedRelic.name : '??? REPERTO SEPOLTO'}
                  </span>
                </div>
                <span className="text-[9px] text-amber-400/70 font-mono mt-1">
                  TECA ARCHEOLOGICA N. {selectedIndex + 1} • {selectedRelic.era.split(' (')[0]}
                </span>
              </div>

              {/* Interactive Drag Hint */}
              <div className="mt-4 pointer-events-none bg-stone-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-500/40 text-[11px] text-amber-200/90 flex items-center gap-2 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                <span>Trascina con mouse/touch per ruotare ed esaminare la teca 3D</span>
              </div>
            </div>
          </div>
        )}

        {/* Right Inspection Drawer: Parchment Field Log */}
        <div className="w-full md:w-96 bg-gradient-to-b from-[#1e1308] via-[#160d05] to-[#0c0602] border-t-2 md:border-t-0 md:border-l-2 border-amber-600/60 p-5 overflow-y-auto flex flex-col justify-between shadow-[-10px_0_35px_rgba(0,0,0,0.85)]">
          <div>
            {/* Status & Rarity Badge */}
            <div className="flex items-center justify-between mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${
                !isSelectedDiscovered
                  ? 'bg-stone-900 border-stone-700 text-stone-500'
                  : selectedRelic.rarity === 'Mitico'
                  ? 'bg-amber-500/30 border-amber-400 text-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                  : selectedRelic.rarity === 'Leggendario'
                  ? 'bg-purple-900/40 border-purple-400 text-purple-200'
                  : 'bg-emerald-900/40 border-emerald-400 text-emerald-200'
              }`}>
                {isSelectedDiscovered ? selectedRelic.rarity : 'Non Dissotterrato'}
              </span>

              <span className="text-xs font-mono font-bold text-amber-400">
                TECA #{selectedIndex + 1} / {totalRelics}
              </span>
            </div>

            {/* Relic Title */}
            <h3 className="text-xl font-black text-amber-100 font-serif leading-snug mb-1">
              {isSelectedDiscovered ? selectedRelic.name : 'Artefatto Avvolto nel Mistero'}
            </h3>
            <p className="text-xs text-amber-400/90 italic mb-4 font-serif">
              {isSelectedDiscovered ? selectedRelic.subtitle : 'Sepolto nelle sabbie del tempo'}
            </p>

            {isSelectedDiscovered ? (
              <div className="space-y-4">
                {/* Archaeological Metadata */}
                <div className="grid grid-cols-2 gap-2 bg-[#2a1b0d]/80 p-3 rounded-2xl border border-amber-500/30">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-[9px] uppercase tracking-wider text-stone-400">Epoca Storica</div>
                      <div className="text-xs font-bold text-stone-200">{selectedRelic.era}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-[9px] uppercase tracking-wider text-stone-400">Sito di Scavo</div>
                      <div className="text-xs font-bold text-stone-200 truncate">{selectedRelic.location}</div>
                    </div>
                  </div>
                </div>

                {/* Professor Bellini's Field Diary Note */}
                <div className="bg-[#2d1b0d]/70 border border-amber-500/40 p-4 rounded-2xl relative">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-amber-400 mb-1.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    Diario di Campo del Prof. Bellini:
                  </div>
                  <p className="text-xs sm:text-sm text-amber-100/90 font-serif italic leading-relaxed">
                    "{selectedRelic.lore}"
                  </p>
                </div>

                {/* Reward Claimed */}
                <div className="bg-emerald-950/40 border border-emerald-500/40 p-3 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs font-bold text-emerald-200">Valore Riscattato:</span>
                  </div>
                  <span className="text-sm font-black text-yellow-400">+{selectedRelic.coinReward} 🪙</span>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center mx-auto text-amber-500/60">
                  <Lock className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-stone-300">
                  Reperto ancora Sepolto
                </h4>
                <div className="bg-[#24150a] border border-amber-500/30 p-3 rounded-2xl text-xs text-amber-300/90 font-serif italic leading-relaxed">
                  <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-amber-400 uppercase not-italic mb-1">
                    <Compass className="w-3 h-3" />
                    <span>Indizio Archeologico</span>
                  </div>
                  "{selectedRelic.hintClue}"
                </div>
              </div>
            )}
          </div>

          {/* Quick Carousel Selector at Bottom */}
          <div className="mt-5 pt-3 border-t border-amber-500/20">
            <div className="text-[10px] uppercase tracking-wider font-bold text-amber-400/80 mb-2">
              Seleziona Teca:
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
              {ALL_COLLECTIBLE_RELICS.map((r, idx) => {
                const found = discoveredRelicIds.includes(r.id);
                const isCurrent = r.id === selectedRelic.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => {
                      sound.playSuccess();
                      setSelectedRelic(r);
                    }}
                    className={`w-9 h-9 rounded-xl shrink-0 flex items-center justify-center text-sm font-bold border transition-all ${
                      isCurrent
                        ? 'border-amber-400 bg-amber-500/40 scale-110 shadow-[0_0_10px_rgba(245,158,11,0.5)] text-white'
                        : found
                        ? 'border-amber-700/60 bg-[#2b1b0d] text-amber-300 hover:border-amber-500'
                        : 'border-stone-800 bg-stone-950 text-stone-600'
                    }`}
                    title={found ? r.name : `Teca #${idx + 1} (Sigillata)`}
                  >
                    {found ? (
                      <span>{r.iconType === 'idol' ? '🗿' : r.iconType === 'scarab' ? '𓆣' : r.iconType === 'cross' ? '✝️' : r.iconType === 'skull' ? '💀' : '🏺'}</span>
                    ) : (
                      <Lock className="w-3 h-3" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
