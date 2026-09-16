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
  ChevronLeft, 
  ChevronRight,
  ShieldAlert
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
  const [selectedRelic, setSelectedRelic] = useState<CollectibleRelic>(() => ALL_COLLECTIBLE_RELICS[0]);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [tiltX, setTiltX] = useState<number>(0);
  const [tiltY, setTiltY] = useState<number>(0);
  const [imageError, setImageError] = useState<boolean>(false);

  useEffect(() => {
    setImageError(false);
  }, [selectedRelic?.id]);

  const displayCaseRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);
  const startPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Continuous subtle 3D slow turntable rotation
  useEffect(() => {
    if (!isOpen || !isAutoRotating) return;
    const interval = setInterval(() => {
      setRotationAngle(prev => (prev + 0.8) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isOpen, isAutoRotating]);

  if (!isOpen) return null;

  const safeRelic = selectedRelic || ALL_COLLECTIBLE_RELICS[0];
  const safeDiscoveredIds = Array.isArray(discoveredRelicIds) ? discoveredRelicIds : [];
  const totalRelics = ALL_COLLECTIBLE_RELICS.length;
  const discoveredCount = ALL_COLLECTIBLE_RELICS.filter(r => safeDiscoveredIds.includes(r.id)).length;
  const progressPercent = totalRelics > 0 ? Math.round((discoveredCount / totalRelics) * 100) : 0;
  const isSelectedDiscovered = safeDiscoveredIds.includes(safeRelic.id);
  const rawIdx = ALL_COLLECTIBLE_RELICS.findIndex(r => r.id === safeRelic.id);
  const selectedIndex = rawIdx >= 0 ? rawIdx : 0;

  // Pointer / Touch 3D Parallax Tilt Handler
  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDraggingRef.current) {
      const deltaX = e.clientX - startPosRef.current.x;
      const deltaY = e.clientY - startPosRef.current.y;
      setRotationAngle(prev => prev + deltaX * 0.7);
      setTiltX(Math.max(-20, Math.min(20, deltaY * 0.35)));
      startPosRef.current = { x: e.clientX, y: e.clientY };
    } else if (displayCaseRef.current) {
      const rect = displayCaseRef.current.getBoundingClientRect();
      const w = rect.width || 1;
      const h = rect.height || 1;
      const x = (e.clientX - rect.left) / w - 0.5;
      const y = (e.clientY - rect.top) / h - 0.5;
      const ny = x * 14;
      const nx = -y * 14;
      if (Number.isFinite(ny)) setTiltY(ny);
      if (Number.isFinite(nx)) setTiltX(nx);
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

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#080503]/98 text-stone-100 select-none animate-in fade-in duration-300 backdrop-blur-xl">
      {/* Top Archaeological Museum Header */}
      <div className="pt-7 sm:pt-6 pb-3 px-4 sm:px-6 min-h-[4.5rem] bg-gradient-to-r from-[#1c1007] via-[#2d1a0d] to-[#1c1007] border-b-2 border-amber-600/60 flex items-center justify-between shadow-2xl relative z-20">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-400/50 shadow-[0_0_15px_rgba(245,158,11,0.25)]">
            <Landmark className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm sm:text-base font-black tracking-wider text-amber-200 uppercase font-serif">
                SALA DELLE RELIQUIE • ROYAL GEOGRAPHICAL SOCIETY
              </h2>
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500/25 text-amber-300 border border-amber-500/40">
                LONDRA 1928
              </span>
            </div>
            <p className="text-[11px] text-stone-400">
              Collezione Bellini • {discoveredCount} / {totalRelics} Reperti Portati alla Luce ({progressPercent}%)
            </p>
          </div>
        </div>

        {/* Header Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`px-3 py-1.5 rounded-xl border transition-all text-xs font-bold flex items-center gap-1.5 ${
              isAutoRotating
                ? 'bg-amber-500/20 border-amber-500/60 text-amber-300'
                : 'bg-stone-800/90 border-stone-700 text-stone-400 hover:text-white'
            }`}
            title="Attiva/Disattiva Rotazione Automatica 360°"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isAutoRotating ? 'animate-spin-slow' : ''}`} />
            <span className="hidden xs:inline">360°</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-800/80 hover:bg-rose-950 border border-stone-700 hover:border-rose-500/60 text-stone-300 hover:text-white transition-all active:scale-95 ml-1"
            title="Chiudi Museo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Exhibition Hall */}
      <div className="flex-1 relative flex flex-col md:flex-row overflow-hidden">
        {/* Showcase / Vitrine Area */}
        <div
          ref={displayCaseRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="flex-1 relative cursor-grab active:cursor-grabbing flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#120904] via-[#1a0d06] to-[#0a0502] p-4"
        >
          {/* Volumetric Gallery Spotlight & Atmosphere */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Overhead cone of light */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[750px] pointer-events-none opacity-40"
              style={{
                background: 'radial-gradient(ellipse at 50% 0%, rgba(254, 240, 138, 0.45) 0%, rgba(245, 158, 11, 0.12) 45%, transparent 75%)',
                filter: 'blur(30px)',
              }}
            />
            {/* Polished Parquet / Marble Floor Reflection */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-48 opacity-25"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, rgba(245,158,11,0.08) 100%), repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 40px)',
                transform: 'perspective(400px) rotateX(65deg)',
                transformOrigin: 'bottom center',
              }}
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Reperto Precedente"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-xl bg-stone-900/85 hover:bg-amber-950/90 border-2 border-amber-600/50 hover:border-amber-400 text-amber-300 shadow-[0_4px_20px_rgba(0,0,0,0.8)] transition-all active:scale-90 hover:scale-105"
          >
            <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Reperto Successivo"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-xl bg-stone-900/85 hover:bg-amber-950/90 border-2 border-amber-600/50 hover:border-amber-400 text-amber-300 shadow-[0_4px_20px_rgba(0,0,0,0.8)] transition-all active:scale-90 hover:scale-105"
          >
            <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>

          {/* THE MASTER ARCHIVAL VITRINE (LA TECA D'ECCELLENZA) - Compact & Elegant */}
          <div 
            className="relative flex flex-col items-center justify-center transition-transform duration-100 ease-out origin-center my-auto"
            style={{
              transform: `perspective(1100px) rotateY(${(Number.isFinite(tiltY) ? tiltY : 0) + Math.sin((Number.isFinite(rotationAngle) ? rotationAngle : 0) * Math.PI / 180) * 8}deg) rotateX(${Number.isFinite(tiltX) ? tiltX : 0}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Vitrine Outer Structure - Balanced Compact Size */}
            <div className="relative w-52 xs:w-56 sm:w-64 md:w-72 rounded-2xl p-1 bg-gradient-to-b from-[#6b421a] via-[#3a200d] to-[#1a0d05] border-2 border-amber-500/70 shadow-[0_15px_40px_rgba(0,0,0,0.95),0_0_25px_rgba(245,158,11,0.2)] overflow-hidden">
              
              {/* Vitrine Glass Chamber */}
              <div className="relative w-full h-44 xs:h-48 sm:h-52 rounded-xl bg-gradient-to-b from-[#180f08]/90 via-[#0d0704]/95 to-[#050201] overflow-hidden flex flex-col items-center justify-center border border-amber-400/30 p-2">
                
                {/* Caustic Glass Highlights */}
                <div className="absolute top-0 left-6 w-10 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 pointer-events-none" />
                <div className="absolute top-0 right-8 w-5 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 pointer-events-none" />
                
                {/* Backlight Halo behind the Relic */}
                <div 
                  className="absolute w-36 h-36 rounded-full pointer-events-none opacity-50"
                  style={{
                    background: isSelectedDiscovered
                      ? 'radial-gradient(circle, rgba(251, 191, 36, 0.45) 0%, rgba(217, 119, 6, 0.15) 50%, transparent 75%)'
                      : 'radial-gradient(circle, rgba(148, 163, 184, 0.2) 0%, transparent 65%)',
                  }}
                />

                {isSelectedDiscovered ? (
                  /* THE DISCOVERED RELIC SPECIMEN - 100% VISIBLE WITH OBJECT-CONTAIN */
                  <div className="relative z-10 flex flex-col items-center">
                    {/* The Specimen with Fine Gilded Framing */}
                    <div className="relative w-32 h-32 xs:w-36 xs:h-36 sm:w-40 sm:h-40 rounded-xl overflow-hidden border border-amber-400/80 shadow-[0_10px_25px_rgba(0,0,0,0.9),0_0_15px_rgba(245,158,11,0.25)] group bg-[#120a05] flex items-center justify-center p-1.5">
                      {!imageError ? (
                        <img
                          src={assetUrl(safeRelic.image)}
                          alt={safeRelic.name}
                          onError={() => setImageError(true)}
                          className="w-full h-full object-contain select-none pointer-events-none transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center bg-stone-900/90 rounded-lg text-amber-300">
                          <Sparkles className="w-8 h-8 text-amber-400 animate-pulse mb-1" />
                          <span className="text-[10px] font-bold font-serif line-clamp-1">{safeRelic.name}</span>
                          <span className="text-[8px] text-amber-400/80 font-mono">1928 • Reperto Storico</span>
                        </div>
                      )}
                      
                      {/* Specular Glare & Corner Ornaments */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none" />
                      <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-amber-300 pointer-events-none" />
                      <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-amber-300 pointer-events-none" />
                      <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-amber-300 pointer-events-none" />
                      <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-amber-300 pointer-events-none" />
                    </div>

                    {/* Stepped Crimson Velvet Plinth */}
                    <div className="w-36 xs:w-40 sm:w-44 h-3 mt-1 rounded-t bg-gradient-to-r from-[#4c0519] via-[#881337] to-[#4c0519] border-t border-x border-amber-500/80 shadow-md flex items-center justify-center">
                      <div className="w-full h-0.5 bg-amber-400/50" />
                    </div>
                  </div>
                ) : (
                  /* SEALED UNDISCOVERED RELIC */
                  <div className="relative z-10 flex flex-col items-center justify-center text-center p-3">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-stone-900 via-stone-950 to-black border-2 border-stone-700/80 flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.9)] relative overflow-hidden">
                      <div className="absolute inset-0 bg-radial-vignette opacity-70" />
                      <Lock className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600/70 animate-pulse" />
                    </div>
                    
                    <span className="mt-2.5 px-2.5 py-0.5 rounded-full bg-stone-900/90 border border-amber-600/40 text-[9px] sm:text-[10px] font-extrabold text-amber-400 uppercase tracking-wider flex items-center gap-1 shadow">
                      <ShieldAlert className="w-3 h-3 text-amber-500" />
                      Non Dissotterrato
                    </span>
                    <p className="mt-1 text-[10px] text-stone-400 max-w-[170px] leading-tight font-serif italic">
                      Livello {selectedRelic.hiddenLevelId} • Esplora la scena per trovarlo
                    </p>
                  </div>
                )}
              </div>

              {/* INTEGRATED CAST BRASS MUSEUM PLAQUE - Compact */}
              <div className="w-full p-2 sm:p-2.5 bg-gradient-to-b from-[#241308] via-[#1a0d05] to-[#120803] border-t border-amber-600/80 rounded-b-xl flex flex-col items-center text-center relative">
                {/* Brass Screws at Corners */}
                <div className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-amber-500/80 border border-amber-200 shadow-sm" />
                <div className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-amber-500/80 border border-amber-200 shadow-sm" />
                <div className="absolute bottom-1 left-1.5 w-1.5 h-1.5 rounded-full bg-amber-500/80 border border-amber-200 shadow-sm" />
                <div className="absolute bottom-1 right-1.5 w-1.5 h-1.5 rounded-full bg-amber-500/80 border border-amber-200 shadow-sm" />

                {/* Plaque Inner Cartouche */}
                <div className="w-full px-2 py-1 rounded-md bg-gradient-to-r from-amber-900/40 via-amber-600/20 to-amber-900/40 border border-amber-500/40 shadow-inner">
                  <h3 className="text-[11px] sm:text-xs font-black tracking-wider uppercase text-amber-200 font-serif line-clamp-1">
                    {isSelectedDiscovered ? selectedRelic.name : `TECA N. ${selectedIndex + 1} • REPERTO SEPOLTO`}
                  </h3>
                  <p className="text-[9px] text-amber-400/80 font-serif italic line-clamp-1 mt-0.5">
                    {isSelectedDiscovered ? selectedRelic.subtitle : `Celato nel Settore ${selectedRelic.hiddenLevelId}`}
                  </p>
                </div>

                <div className="mt-0.5 flex items-center justify-between w-full px-1.5 text-[8px] font-mono text-amber-300/70">
                  <span>CATALOGO #{selectedIndex + 1}</span>
                  <span>{isSelectedDiscovered ? selectedRelic.era.split(' (')[0] : 'SCONOSCIUTO'}</span>
                </div>
              </div>
            </div>

            {/* Interaction Hint */}
            <div className="mt-2 pointer-events-none bg-stone-900/90 backdrop-blur-md px-3 py-0.5 rounded-full border border-amber-500/40 text-[9px] text-amber-200/90 flex items-center gap-1 shadow-md">
              <Sparkles className="w-2.5 h-2.5 text-amber-400 animate-spin-slow" />
              <span>Trascina per ruotare ed esaminare</span>
            </div>
          </div>
        </div>

        {/* Right Inspection Drawer: Parchment Field Log */}
        <div className="w-full md:w-96 lg:w-[420px] bg-gradient-to-b from-[#1b1007] via-[#140b04] to-[#0a0502] border-t-2 md:border-t-0 md:border-l-2 border-amber-600/60 p-4 sm:p-5 overflow-y-auto flex flex-col justify-between shadow-[-10px_0_35px_rgba(0,0,0,0.85)] max-h-[45vh] md:max-h-full">
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
            <h3 className="text-lg sm:text-xl font-black text-amber-100 font-serif leading-snug mb-1">
              {isSelectedDiscovered ? selectedRelic.name : 'Artefatto Avvolto nel Mistero'}
            </h3>
            <p className="text-xs text-amber-400/90 italic mb-4 font-serif">
              {isSelectedDiscovered ? selectedRelic.subtitle : 'Sepolto nelle sabbie del tempo'}
            </p>

            {isSelectedDiscovered ? (
              <div className="space-y-3 sm:space-y-4">
                {/* Archaeological Metadata */}
                <div className="grid grid-cols-2 gap-2 bg-[#261609]/80 p-3 rounded-2xl border border-amber-500/30">
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
                <div className="bg-[#29170a]/75 border border-amber-500/40 p-4 rounded-2xl relative shadow-inner">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-amber-400 mb-1.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    Diario di Campo del Prof. Bellini:
                  </div>
                  <p className="text-xs sm:text-sm text-amber-100/95 font-serif italic leading-relaxed">
                    "{selectedRelic.lore}"
                  </p>
                </div>

                {/* Reward Claimed */}
                <div className="bg-emerald-950/40 border border-emerald-500/40 p-3 rounded-2xl flex items-center justify-between shadow">
                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs font-bold text-emerald-200">Bounty Riscattata:</span>
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
                <p className="text-xs text-stone-400">
                  Questo tesoro attende di essere dissotterrato nella scena del crimine archeologica del <strong className="text-amber-300">Livello {selectedRelic.hiddenLevelId}</strong>.
                </p>
                <div className="bg-[#24150a] border border-amber-500/30 p-3 rounded-2xl text-xs text-amber-300/90 font-serif italic leading-relaxed">
                  <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-amber-400 uppercase not-italic mb-1">
                    <Compass className="w-3 h-3" />
                    <span>Indizio del Diario</span>
                  </div>
                  "{selectedRelic.hintClue}"
                </div>
              </div>
            )}
          </div>

          {/* Quick Carousel Selector with Real Thumbnails at Bottom */}
          <div className="mt-4 pt-3 border-t border-amber-500/20">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-wider font-bold text-amber-400/80 mb-2">
              <span>Galleria Reperti (20 Teca):</span>
              <span className="text-stone-400 font-mono">{selectedIndex + 1}/20</span>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {ALL_COLLECTIBLE_RELICS.map((r, idx) => {
                const found = safeDiscoveredIds.includes(r.id);
                const isCurrent = r.id === safeRelic.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => {
                      sound.playSuccess();
                      setSelectedRelic(r);
                    }}
                    className={`relative w-11 h-11 rounded-xl shrink-0 overflow-hidden border-2 transition-all group ${
                      isCurrent
                        ? 'border-amber-400 scale-110 shadow-[0_0_12px_rgba(245,158,11,0.6)] z-10'
                        : found
                        ? 'border-amber-700/60 opacity-80 hover:opacity-100 hover:border-amber-400'
                        : 'border-stone-800 bg-stone-950 opacity-40 hover:opacity-70'
                    }`}
                    title={found ? r.name : `Teca #${idx + 1} (Sigillata)`}
                  >
                    {found ? (
                      <img
                        src={assetUrl(r.image)}
                        alt={r.name}
                        className="w-full h-full object-cover select-none pointer-events-none"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-stone-950 text-stone-500">
                        <Lock className="w-3.5 h-3.5" />
                        <span className="text-[8px] font-mono mt-0.5">{idx + 1}</span>
                      </div>
                    )}

                    {/* Active highlight corner dot */}
                    {isCurrent && (
                      <div className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]" />
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
