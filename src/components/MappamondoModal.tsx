import React, { useState, useRef, useEffect, useMemo } from 'react';
import { 
  Globe, 
  X, 
  Sparkles, 
  Lock, 
  CheckCircle2, 
  Navigation, 
  Award, 
  RotateCw, 
  ChevronLeft, 
  ChevronRight, 
  MapPin,
  Play,
  Plane,
  FastForward,
  ScrollText
} from 'lucide-react';
import { SAGA_MILESTONES_120 } from '../data/sagaLore';
import { EXPLORERS, ALL_OUTFITS, type ExplorerProfile } from '../data/avatarData';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { assetUrl } from '../utils/assetUrl';
import type { SagaMilestone } from '../types/game';
import { useTranslation } from '../i18n/LanguageContext';

interface MappamondoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLevelId: number;
  completedLevelIds: number[];
  onSelectLevel?: (levelId: number) => void;
  onOpenStageBriefing?: (stageNumber: number) => void;
  profile?: ExplorerProfile;
}

interface StageCoord {
  stageNumber: number;
  targetLevel: number;
  lat: number;
  lon: number;
  name: string;
  location: string;
}

const STAGE_COORDINATES: StageCoord[] = [
  { stageNumber: 1, targetLevel: 10, lat: 51.75, lon: -1.25, name: "Lo Studio di Oxford", location: "Oxford / Londra, Inghilterra" },
  { stageNumber: 2, targetLevel: 20, lat: 48.85, lon: 2.35, name: "I Sotterranei dell'Ossario", location: "Parigi, Francia" },
  { stageNumber: 3, targetLevel: 30, lat: 45.44, lon: 12.33, name: "La Bottega dell'Alchimista", location: "Venezia, Italia" },
  { stageNumber: 4, targetLevel: 40, lat: 35.29, lon: 25.16, name: "Il Labirinto di Minosse", location: "Cnosso, Creta" },
  { stageNumber: 5, targetLevel: 50, lat: 31.20, lon: 29.91, name: "La Biblioteca Sommersa", location: "Alessandria, Egitto" },
  { stageNumber: 6, targetLevel: 60, lat: 25.68, lon: 32.63, name: "La Tomba dei Trenta Sacerdoti", location: "Luxor, Egitto" },
  { stageNumber: 7, targetLevel: 70, lat: 29.20, lon: 25.51, name: "L'Oracolo delle Dune", location: "Oasi di Siwa, Sahara" },
  { stageNumber: 8, targetLevel: 80, lat: 30.32, lon: 35.44, name: "La Porta Scavata nella Roccia", location: "Petra, Giordania" },
  { stageNumber: 9, targetLevel: 90, lat: -25.69, lon: -54.43, name: "La Gola del Tuono d'Acqua", location: "Iguazú, Foresta Pluviale" },
  { stageNumber: 10, targetLevel: 100, lat: -14.73, lon: -75.13, name: "I Geoglifi degli Dei", location: "Nazca, Perù" },
  { stageNumber: 11, targetLevel: 110, lat: -13.16, lon: -72.54, name: "La Cittadella tra le Nubi", location: "Machu Picchu, Ande" },
  { stageNumber: 12, targetLevel: 120, lat: -12.45, lon: -71.50, name: "La Camera d'Oro di Paititi", location: "Santuario di Paititi" },
];

// Mathematical 3D Spherical Vector Utilities
const latLonToVec3 = (lat: number, lon: number): [number, number, number] => {
  const phi = (lat * Math.PI) / 180;
  const lambda = (lon * Math.PI) / 180;
  return [
    Math.cos(phi) * Math.sin(lambda),
    Math.sin(phi),
    Math.cos(phi) * Math.cos(lambda),
  ];
};

const vec3ToLatLon = (v: [number, number, number]): { lat: number; lon: number } => {
  const norm = Math.hypot(v[0], v[1], v[2]) || 1;
  const y = Math.max(-1, Math.min(1, v[1] / norm));
  const lat = (Math.asin(y) * 180) / Math.PI;
  const lon = (Math.atan2(v[0], v[2]) * 180) / Math.PI;
  return { lat, lon };
};

const slerpVec3 = (
  v1: [number, number, number],
  v2: [number, number, number],
  t: number
): [number, number, number] => {
  let dot = v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
  dot = Math.max(-1, Math.min(1, dot));
  const theta = Math.acos(dot);
  if (Math.abs(theta) < 0.0001) return v1;
  const sinTheta = Math.sin(theta);
  const a = Math.sin((1 - t) * theta) / sinTheta;
  const b = Math.sin(t * theta) / sinTheta;
  return [
    a * v1[0] + b * v2[0],
    a * v1[1] + b * v2[1],
    a * v1[2] + b * v2[2],
  ];
};

// Simplified Landmass Polygons for globe fallback
const CONTINENT_POLYGONS: [number, number][][] = [
  // Europe & Asia
  [
    [70, 20], [72, 60], [70, 100], [68, 140], [60, 170], [45, 140], [35, 120],
    [22, 115], [10, 105], [8, 77], [24, 68], [25, 55], [30, 48], [37, 36],
    [36, -5], [44, -9], [48, -4], [55, 8], [58, 5], [60, 25], [70, 20]
  ],
  // Africa
  [
    [37, 10], [32, 32], [22, 37], [12, 51], [0, 42], [-10, 40], [-25, 33],
    [-34, 18], [-33, 26], [-20, 13], [-5, 12], [5, 2], [5, -4], [15, -17],
    [35, -6], [37, 10]
  ],
  // North America
  [
    [72, -155], [70, -130], [68, -85], [58, -60], [47, -53], [42, -70],
    [30, -82], [25, -80], [20, -87], [16, -92], [23, -106], [32, -117],
    [48, -125], [60, -145], [65, -168], [72, -155]
  ],
  // South America
  [
    [12, -72], [10, -62], [5, -52], [-2, -44], [-8, -35], [-23, -42],
    [-35, -55], [-45, -65], [-55, -68], [-52, -75], [-40, -74], [-18, -70],
    [-5, -81], [5, -77], [12, -72]
  ],
  // Australia
  [
    [-12, 131], [-12, 142], [-20, 149], [-28, 153], [-37, 150], [-38, 140],
    [-35, 118], [-22, 114], [-15, 124], [-12, 131]
  ]
];

export const MappamondoModal: React.FC<MappamondoModalProps> = ({
  isOpen,
  onClose,
  currentLevelId,
  completedLevelIds,
  onSelectLevel,
  onOpenStageBriefing,
  profile,
}) => {
  const { language, t, interpolate } = useTranslation();
  const explorer = EXPLORERS[profile?.avatarId || 'samira'];
  const activeOutfit = ALL_OUTFITS.find(o => o.id === profile?.equippedOutfitId);
  const explorerPortrait = activeOutfit?.image || explorer.portrait;
  const originLat = explorer.originCoords.lat;
  const originLon = explorer.originCoords.lon;
  const originCity = `${explorer.originCity} (${explorer.originCountry})`;
  const destLat = 51.50; // London / Oxford
  const destLon = -0.12;
  const destCity = language === 'en'
    ? "London / Oxford (England)"
    : language === 'es'
    ? "Londres / Oxford (Inglaterra)"
    : "Londra / Oxford (Inghilterra)";

  const originVec = useMemo(() => latLonToVec3(originLat, originLon), [originLat, originLon]);
  const destVec = useMemo(() => latLonToVec3(destLat, destLon), [destLat, destLon]);

  const [selectedStageNumber, setSelectedStageNumber] = useState<number>(() => {
    const stage = Math.min(12, Math.floor((currentLevelId - 1) / 10) + 1);
    return stage;
  });

  const [rotY, setRotY] = useState<number>(-10);
  const [rotX, setRotX] = useState<number>(20);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);
  const mapDataRef = useRef<{ data: Uint8ClampedArray; width: number; height: number } | null>(null);

  // Cinematic Airplane Flight State
  const [isFlightActive, setIsFlightActive] = useState<boolean>(false);
  const [flightProgress, setFlightProgress] = useState<number>(0); // 0 to 1
  const [hasLanded, setHasLanded] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDraggingRef = useRef<boolean>(false);
  const startMouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);
  const avatarImgRef = useRef<HTMLImageElement | null>(null);

  // Load avatar portrait for rendering onto canvas
  useEffect(() => {
    const img = new Image();
    img.src = explorerPortrait;
    img.onload = () => {
      avatarImgRef.current = img;
    };
  }, [explorerPortrait]);

  // Load World Map Texture
  useEffect(() => {
    const img = new Image();
    img.src = assetUrl('/antique_world_map.jpg');
    img.onload = () => {
      const off = document.createElement('canvas');
      off.width = img.width;
      off.height = img.height;
      const offCtx = off.getContext('2d');
      if (offCtx) {
        offCtx.drawImage(img, 0, 0);
        const imgData = offCtx.getImageData(0, 0, img.width, img.height);
        mapDataRef.current = { data: imgData.data, width: img.width, height: img.height };
        setIsMapLoaded(true);
      }
    };
  }, []);

  // When opening Mappamondo: if starting out with no completed levels, launch cinematic flight!
  useEffect(() => {
    if (isOpen) {
      const stage = Math.min(12, Math.floor((currentLevelId - 1) / 10) + 1);
      setSelectedStageNumber(stage);

      if (completedLevelIds.length === 0 && !hasLanded) {
        startFlightSequence();
      } else if (!isFlightActive) {
        // Center on target stage
        const target = STAGE_COORDINATES.find(s => s.stageNumber === stage);
        if (target) {
          setRotY(target.lon);
          setRotX(Math.max(-25, Math.min(35, target.lat * 0.6)));
        }
      }
    }
  }, [isOpen, currentLevelId]);

  const startFlightSequence = () => {
    setIsFlightActive(true);
    setFlightProgress(0);
    setIsAutoRotating(false);
    sound.playAirplaneFlight(4.5);
    triggerHaptic('medium');

    // Align camera to origin first
    setRotY(originLon);
    setRotX(Math.max(-25, Math.min(35, originLat * 0.6)));

    const startTime = performance.now();
    const duration = 4500; // 4.5 seconds

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      // Smooth cubic bezier easing
      const easedT = t * t * (3 - 2 * t);
      setFlightProgress(easedT);

      // Slerp along Great-Circle and follow with camera
      const currentV = slerpVec3(originVec, destVec, easedT);
      const coords = vec3ToLatLon(currentV);
      setRotY(coords.lon);
      setRotX(Math.max(-25, Math.min(35, coords.lat * 0.6)));

      if (t < 1) {
        animFrameRef.current = requestAnimationFrame(tick);
      } else {
        completeTouchdown();
      }
    };

    animFrameRef.current = requestAnimationFrame(tick);
  };

  const completeTouchdown = () => {
    cancelAnimationFrame(animFrameRef.current);
    setIsFlightActive(false);
    setFlightProgress(1);
    setHasLanded(true);
    setSelectedStageNumber(1);
    setRotY(destLon);
    setRotX(Math.max(-25, Math.min(35, destLat * 0.6)));
    sound.playLevelWin();
    triggerHaptic('success');
  };

  const skipFlight = () => {
    completeTouchdown();
  };

  // Focus globe on selected stage when not in flight
  useEffect(() => {
    if (isFlightActive) return;
    const target = STAGE_COORDINATES.find(s => s.stageNumber === selectedStageNumber);
    if (target) {
      setRotY(target.lon);
      setRotX(Math.max(-25, Math.min(35, target.lat * 0.6)));
    }
  }, [selectedStageNumber, isFlightActive]);

  // Slow Auto-Rotation when idle
  useEffect(() => {
    if (!isOpen || isFlightActive) return;

    let lastTime = performance.now();
    const loop = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      if (isAutoRotating && !isDraggingRef.current) {
        setRotY(prev => (prev + delta * 8) % 360);
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isOpen, isAutoRotating, isFlightActive]);

  // Render 3D World Globe on Canvas
  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2 - 10;
    const R = Math.min(width, height) * 0.38;

    ctx.clearRect(0, 0, width, height);

    // 1. Draw Stand & Base Shadow
    const baseGradient = ctx.createRadialGradient(cx, cy + R + 25, 5, cx, cy + R + 25, R * 0.8);
    baseGradient.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
    baseGradient.addColorStop(1, 'transparent');
    ctx.fillStyle = baseGradient;
    ctx.fillRect(cx - R, cy + R + 10, R * 2, 40);

    // 2. Brass Meridian Ring Behind Globe
    ctx.save();
    ctx.strokeStyle = '#c89d32';
    ctx.lineWidth = 7;
    ctx.shadowColor = '#000000';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(cx, cy, R + 7, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = '#ffe27a';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, R + 9, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // 3. Render 3D Sphere Texture
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.clip();

    if (mapDataRef.current) {
      const { data: srcData, width: sw, height: sh } = mapDataRef.current;
      const diam = Math.ceil(R * 2);
      const sphereImgData = ctx.createImageData(diam, diam);
      const dst = sphereImgData.data;

      const rotY_rad = (rotY * Math.PI) / 180;
      const rotX_rad = (rotX * Math.PI) / 180;
      const cosX = Math.cos(rotX_rad);
      const sinX = Math.sin(rotX_rad);
      const cosY = Math.cos(rotY_rad);
      const sinY = Math.sin(rotY_rad);

      for (let py = 0; py < diam; py++) {
        const y = (py - R) / R;
        const row = py * diam;
        for (let px = 0; px < diam; px++) {
          const x = (px - R) / R;
          const r2 = x * x + y * y;
          if (r2 <= 1) {
            const z = Math.sqrt(1 - r2);
            const y1 = y * cosX - z * sinX;
            const z1 = y * sinX + z * cosX;
            const x2 = x * cosY + z1 * sinY;
            const z2 = -x * sinY + z1 * cosY;
            const y2 = y1;

            const lat = Math.asin(Math.max(-1, Math.min(1, y2)));
            const lon = Math.atan2(x2, z2);

            const u = (lon + Math.PI) / (2 * Math.PI);
            const v = 0.5 - lat / Math.PI;

            const sx = Math.floor(u * (sw - 1)) % sw;
            const sy = Math.floor(v * (sh - 1)) % sh;

            const sIdx = (sy * sw + sx) * 4;
            const dIdx = (row + px) * 4;

            const diff = Math.max(0, -0.3 * x + 0.4 * y + 0.86 * z);
            let light = 0.45 + 0.55 * diff;
            const fresnel = (1 - z) * 0.35;
            light = Math.max(0.2, light - fresnel);

            dst[dIdx] = srcData[sIdx] * light;
            dst[dIdx + 1] = srcData[sIdx + 1] * light;
            dst[dIdx + 2] = srcData[sIdx + 2] * light;
            dst[dIdx + 3] = 255;
          }
        }
      }
      const offSphere = document.createElement('canvas');
      offSphere.width = diam;
      offSphere.height = diam;
      const offSphereCtx = offSphere.getContext('2d');
      if (offSphereCtx) {
        offSphereCtx.putImageData(sphereImgData, 0, 0);
        ctx.drawImage(offSphere, cx - R, cy - R);
      }
    } else {
      const oceanGrad = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.3, R * 0.1, cx, cy, R);
      oceanGrad.addColorStop(0, '#594028');
      oceanGrad.addColorStop(0.6, '#312113');
      oceanGrad.addColorStop(1, '#180f08');
      ctx.fillStyle = oceanGrad;
      ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
    }

    // 3D Projection Helper
    const rotY_rad = (rotY * Math.PI) / 180;
    const rotX_rad = (rotX * Math.PI) / 180;
    const cosRX = Math.cos(rotX_rad);
    const sinRX = Math.sin(rotX_rad);

    const project3D = (lat: number, lon: number): { x: number; y: number; z: number } => {
      const phi = (lat * Math.PI) / 180;
      const lambda = (lon * Math.PI) / 180;
      const cosP = Math.cos(phi);
      const sinP = Math.sin(phi);
      const dL = lambda - rotY_rad;
      const cosDL = Math.cos(dL);
      const sinDL = Math.sin(dL);

      const x = cosP * sinDL;
      const y = -sinP * cosRX + cosP * sinRX * cosDL;
      const z = cosP * cosRX * cosDL + sinP * sinRX;

      return {
        x: cx + x * R,
        y: cy + y * R,
        z,
      };
    };

    // Latitude & Longitude Grids
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.15)';
    ctx.lineWidth = 1;
    [-60, -30, 0, 30, 60].forEach(lat => {
      ctx.beginPath();
      let started = false;
      for (let lon = -180; lon <= 180; lon += 5) {
        const p = project3D(lat, lon);
        if (p.z > 0) {
          if (!started) { ctx.moveTo(p.x, p.y); started = true; }
          else { ctx.lineTo(p.x, p.y); }
        } else { started = false; }
      }
      ctx.stroke();
    });

    for (let lon = -180; lon < 180; lon += 30) {
      ctx.beginPath();
      let started = false;
      for (let lat = -80; lat <= 80; lat += 4) {
        const p = project3D(lat, lon);
        if (p.z > 0) {
          if (!started) { ctx.moveTo(p.x, p.y); started = true; }
          else { ctx.lineTo(p.x, p.y); }
        } else { started = false; }
      }
      ctx.stroke();
    }

    // Continents Fallback
    if (!mapDataRef.current) {
      CONTINENT_POLYGONS.forEach(poly => {
        ctx.beginPath();
        let hasVisible = false;
        let first = true;
        poly.forEach(([lat, lon]) => {
          const p = project3D(lat, lon);
          if (p.z > -0.2) {
            if (first) { ctx.moveTo(p.x, p.y); first = false; }
            else { ctx.lineTo(p.x, p.y); }
            if (p.z > 0) hasVisible = true;
          }
        });
        if (hasVisible) {
          ctx.closePath();
          ctx.fillStyle = 'rgba(217, 119, 6, 0.35)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(251, 191, 36, 0.45)';
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      });
    }

    // Draw Unlocked Stage Connecting Arcs
    ctx.save();
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    for (let i = 0; i < STAGE_COORDINATES.length - 1; i++) {
      const s1 = STAGE_COORDINATES[i];
      const s2 = STAGE_COORDINATES[i + 1];
      if (completedLevelIds.includes(s1.targetLevel)) {
        ctx.beginPath();
        let started = false;
        for (let t = 0; t <= 1; t += 0.05) {
          const lat = s1.lat + (s2.lat - s1.lat) * t;
          const lon = s1.lon + (s2.lon - s1.lon) * t;
          const p = project3D(lat, lon);
          if (p.z > 0) {
            if (!started) { ctx.moveTo(p.x, p.y); started = true; }
            else { ctx.lineTo(p.x, p.y); }
          } else { started = false; }
        }
        ctx.stroke();
      }
    }
    ctx.restore();

    // CINEMATIC FLIGHT: Red dashed flight trajectory from Explorer Origin to London/Oxford
    if (flightProgress > 0) {
      ctx.save();
      ctx.strokeStyle = '#ef4444'; // Classic Indiana Jones red dashed flight line
      ctx.lineWidth = 3;
      ctx.setLineDash([6, 4]);
      ctx.shadowColor = 'rgba(239, 68, 68, 0.8)';
      ctx.shadowBlur = 6;
      ctx.beginPath();
      let started = false;
      const numSteps = Math.max(10, Math.floor(flightProgress * 80));
      for (let step = 0; step <= numSteps; step++) {
        const t = step / 80;
        if (t > flightProgress) break;
        const v = slerpVec3(originVec, destVec, t);
        const c = vec3ToLatLon(v);
        const p = project3D(c.lat, c.lon);
        if (p.z > 0) {
          if (!started) { ctx.moveTo(p.x, p.y); started = true; }
          else { ctx.lineTo(p.x, p.y); }
        } else { started = false; }
      }
      ctx.stroke();
      ctx.restore();

      // Origin Beacon
      const pOrigin = project3D(originLat, originLon);
      if (pOrigin.z > 0) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(pOrigin.x, pOrigin.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#10b981';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#6ee7b7';
        ctx.font = 'bold 9px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(originCity, pOrigin.x, pOrigin.y + 14);
        ctx.restore();
      }

      // Destination Target Rings (London / Oxford)
      const pDest = project3D(destLat, destLon);
      if (pDest.z > 0) {
        ctx.save();
        const pulseR = 8 + Math.sin(performance.now() * 0.008) * 3;
        ctx.beginPath();
        ctx.arc(pDest.x, pDest.y, pulseR, 0, Math.PI * 2);
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 1.8;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(pDest.x, pDest.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#f59e0b';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#fef08a';
        ctx.font = 'bold 9px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Londra / Oxford', pDest.x, pDest.y - 12);
        ctx.restore();
      }

      // AIRPLANE & AVATAR BADGE ALONG TRAJECTORY
      if (flightProgress < 1) {
        const curV = slerpVec3(originVec, destVec, flightProgress);
        const nextV = slerpVec3(originVec, destVec, Math.min(1, flightProgress + 0.02));
        const curCoords = vec3ToLatLon(curV);
        const nextCoords = vec3ToLatLon(nextV);
        const p = project3D(curCoords.lat, curCoords.lon);
        const pNext = project3D(nextCoords.lat, nextCoords.lon);

        if (p.z > 0) {
          const heading = Math.atan2(pNext.y - p.y, pNext.x - p.x);

          // Draw Vintage 1928 Expedition Monoplane
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(heading);

          // Plane shadow
          ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
          ctx.beginPath();
          ctx.ellipse(0, 5, 12, 4, 0, 0, Math.PI * 2);
          ctx.fill();

          // Wings
          ctx.fillStyle = '#f59e0b';
          ctx.strokeStyle = '#78350f';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(-3, -15, 6, 30, 2);
          ctx.fill();
          ctx.stroke();

          // Fuselage
          ctx.fillStyle = '#fbbf24';
          ctx.beginPath();
          ctx.ellipse(0, 0, 14, 4, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Tail fin
          ctx.fillStyle = '#d97706';
          ctx.beginPath();
          ctx.roundRect(-11, -5, 3, 10, 1);
          ctx.fill();

          // Spinning Propeller
          const propAngle = (performance.now() * 0.04) % (Math.PI * 2);
          ctx.save();
          ctx.translate(14, 0);
          ctx.rotate(propAngle);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(0, -6);
          ctx.lineTo(0, 6);
          ctx.stroke();
          ctx.restore();

          ctx.restore();

          // CIRCULAR AVATAR BADGE floating with the airplane
          const avatarX = p.x + 20;
          const avatarY = p.y - 20;
          const avatarR = 15;

          ctx.save();
          ctx.beginPath();
          ctx.arc(avatarX, avatarY, avatarR + 2, 0, Math.PI * 2);
          ctx.fillStyle = '#f59e0b';
          ctx.shadowColor = '#f59e0b';
          ctx.shadowBlur = 10;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(avatarX, avatarY, avatarR, 0, Math.PI * 2);
          ctx.clip();

          if (avatarImgRef.current && avatarImgRef.current.complete) {
            ctx.drawImage(
              avatarImgRef.current,
              avatarX - avatarR,
              avatarY - avatarR,
              avatarR * 2,
              avatarR * 2
            );
          } else {
            ctx.fillStyle = '#10b981';
            ctx.fill();
          }
          ctx.restore();

          ctx.beginPath();
          ctx.arc(avatarX, avatarY, avatarR, 0, Math.PI * 2);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }
    }

    // Draw 12 Stage Markers
    STAGE_COORDINATES.forEach(stage => {
      const p = project3D(stage.lat, stage.lon);
      if (p.z <= 0) return;

      const isStageCompleted = completedLevelIds.includes(stage.targetLevel);
      const isCurrentStage =
        currentLevelId > (stage.stageNumber - 1) * 10 &&
        currentLevelId <= stage.stageNumber * 10;
      const isSelected = stage.stageNumber === selectedStageNumber;

      const haloRadius = isSelected ? 18 : 12;
      const pinGrad = ctx.createRadialGradient(p.x, p.y, 2, p.x, p.y, haloRadius);

      if (isStageCompleted) {
        pinGrad.addColorStop(0, 'rgba(52, 211, 153, 0.9)');
        pinGrad.addColorStop(0.5, 'rgba(16, 185, 129, 0.4)');
        pinGrad.addColorStop(1, 'transparent');
      } else if (isCurrentStage) {
        pinGrad.addColorStop(0, 'rgba(251, 191, 36, 1)');
        pinGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.5)');
        pinGrad.addColorStop(1, 'transparent');
      } else {
        pinGrad.addColorStop(0, 'rgba(148, 163, 184, 0.6)');
        pinGrad.addColorStop(1, 'transparent');
      }

      ctx.fillStyle = pinGrad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, haloRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(p.x, p.y, isSelected ? 6 : 4.5, 0, Math.PI * 2);
      ctx.fillStyle = isStageCompleted ? '#10b981' : isCurrentStage ? '#f59e0b' : '#64748b';
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = isSelected ? '#fef08a' : '#ffffff';
      ctx.font = isSelected ? 'bold 11px sans-serif' : 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`T${stage.stageNumber}`, p.x, p.y - (isSelected ? 10 : 8));
    });

    // Glass Lens Overlay
    const sphereShine = ctx.createRadialGradient(
      cx - R * 0.45,
      cy - R * 0.45,
      R * 0.05,
      cx,
      cy,
      R
    );
    sphereShine.addColorStop(0, 'rgba(255, 255, 255, 0.35)');
    sphereShine.addColorStop(0.3, 'rgba(255, 255, 255, 0.05)');
    sphereShine.addColorStop(0.7, 'transparent');
    sphereShine.addColorStop(1, 'rgba(0, 0, 0, 0.6)');
    ctx.fillStyle = sphereShine;
    ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
    ctx.restore();

    // Brass Stand Pole & Wooden Base
    ctx.save();
    ctx.fillStyle = '#d4af37';
    ctx.beginPath();
    ctx.arc(cx, cy - R - 10, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#92400e';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy + R + 10, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    const woodGrad = ctx.createLinearGradient(cx - 14, 0, cx + 14, 0);
    woodGrad.addColorStop(0, '#382414');
    woodGrad.addColorStop(0.5, '#54361e');
    woodGrad.addColorStop(1, '#231509');
    ctx.fillStyle = woodGrad;
    ctx.fillRect(cx - 8, cy + R + 10, 16, 20);

    ctx.beginPath();
    ctx.ellipse(cx, cy + R + 30, 48, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  }, [
    isOpen,
    rotY,
    rotX,
    currentLevelId,
    completedLevelIds,
    selectedStageNumber,
    isMapLoaded,
    isFlightActive,
    flightProgress,
    originLat,
    originLon,
    originCity,
    destLat,
    destLon,
  ]);

  if (!isOpen) return null;

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isFlightActive) return;
    (e.target as HTMLElement)?.setPointerCapture?.(e.pointerId);
    isDraggingRef.current = true;
    startMouseRef.current = { x: e.clientX, y: e.clientY };
    setIsAutoRotating(false);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || isFlightActive) return;
    const dx = e.clientX - startMouseRef.current.x;
    const dy = e.clientY - startMouseRef.current.y;

    if (Number.isFinite(dx) && Number.isFinite(dy)) {
      setRotY(prev => prev + dx * 0.6);
      setRotX(prev => Math.max(-45, Math.min(45, prev - dy * 0.4)));
      startMouseRef.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handlePointerUp = (e?: React.PointerEvent<HTMLDivElement>) => {
    if (e && (e.target as HTMLElement)?.releasePointerCapture) {
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
    }
    isDraggingRef.current = false;
  };

  const selectedMilestone: SagaMilestone =
    SAGA_MILESTONES_120.find(m => m.stageNumber === selectedStageNumber) ||
    SAGA_MILESTONES_120[0];

  const isSelectedCompleted = completedLevelIds.includes(selectedMilestone.targetLevel);
  const isSelectedCurrent =
    currentLevelId > (selectedMilestone.stageNumber - 1) * 10 &&
    currentLevelId <= selectedMilestone.targetLevel;

  const totalStagesCompleted = SAGA_MILESTONES_120.filter(m =>
    completedLevelIds.includes(m.targetLevel)
  ).length;

  // 10 Individual Levels in current stage
  const stageMinLevel = (selectedMilestone.stageNumber - 1) * 10 + 1;
  const stageLevels = Array.from({ length: 10 }, (_, i) => stageMinLevel + i);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl animate-in fade-in duration-300 select-none text-stone-100">
      <div className="w-full max-w-[440px] h-full bg-gradient-to-b from-[#180f08] via-[#100804] to-[#080402] border-x border-amber-600/40 flex flex-col justify-between overflow-hidden relative shadow-2xl">
        
        {/* Top Header: Mappamondo Tab Title & Controls */}
        <div className="safe-pt pt-6 pb-2.5 px-4 bg-gradient-to-r from-[#241509] via-[#351e0e] to-[#241509] border-b-2 border-amber-600/60 flex items-center justify-between shadow-xl shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/50 shadow-[0_0_12px_rgba(245,158,11,0.3)]">
              <Globe className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-black uppercase tracking-wider text-amber-200 font-serif">
                  {t.hub.worldMap}
                </h3>
                <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-amber-500/30 text-amber-300 border border-amber-400/50">
                  12 {t.levelSelect.stage.toUpperCase()}
                </span>
              </div>
              <p className="text-[10px] text-stone-400">
                {interpolate(t.treasureMap.unlockedStage, { completed: totalStagesCompleted, total: 12 })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Replay Flight Button */}
            {!isFlightActive && (
              <button
                onClick={() => startFlightSequence()}
                className="p-2 rounded-xl bg-amber-950/60 hover:bg-amber-900 border border-amber-500/50 text-amber-300 transition-all active:scale-95 cursor-pointer"
                title={language === 'en' ? "Replay Expedition Flight to London" : language === 'es' ? "Repetir Vuelo de Expedición a Londres" : "Rivedi Volo Spedizione per Londra"}
              >
                <Plane className="w-4 h-4" />
              </button>
            )}

            {/* Auto-Rotate Toggle */}
            <button
              onClick={() => setIsAutoRotating(!isAutoRotating)}
              disabled={isFlightActive}
              className={`p-2 rounded-xl border transition-all ${
                isAutoRotating
                  ? 'bg-amber-500/20 border-amber-500/60 text-amber-300'
                  : 'bg-stone-800 border-stone-700 text-stone-400 hover:text-white'
              }`}
              title={t.relics.toggleAutoRotate}
            >
              <RotateCw className={`w-4 h-4 ${isAutoRotating ? 'animate-spin-slow' : ''}`} />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-800/90 hover:bg-rose-950 border border-stone-700 hover:border-rose-500/60 text-stone-300 hover:text-white transition-all active:scale-90 cursor-pointer"
              title={t.common.close}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* FLIGHT IN-PROGRESS TOP BANNER */}
        {isFlightActive && (
          <div className="bg-gradient-to-r from-red-950 via-amber-950 to-red-950 border-b-2 border-red-500/50 px-3 py-1.5 flex items-center justify-between text-amber-200 shadow-xl animate-fadeIn shrink-0">
            <div className="flex items-center gap-2 truncate pr-2">
              <div className="w-8 h-8 rounded-full border-2 border-amber-400 overflow-hidden shrink-0 shadow-md">
                <img src={explorerPortrait} alt={explorer.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="truncate">
                <div className="text-[10px] font-black uppercase tracking-wider text-red-400 font-serif flex items-center gap-1">
                  <Plane className="w-3 h-3 text-yellow-400 animate-pulse" />
                  {language === 'en' ? "1928 Expedition Flight" : language === 'es' ? "Vuelo Expedición 1928" : "Volo Spedizione 1928"}
                </div>
                <div className="text-[11px] font-bold text-white font-serif truncate">
                  {originCity} ➔ <span className="text-amber-300">{destCity}</span>
                </div>
              </div>
            </div>

            <button
              onClick={skipFlight}
              className="px-2.5 py-1 rounded-lg bg-stone-900/90 border border-amber-500/60 text-amber-300 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <FastForward className="w-3 h-3" />
              {t.prologue.skip}
            </button>
          </div>
        )}

        {/* ARRIVAL ALERT BANNER AFTER TOUCHDOWN */}
        {!isFlightActive && selectedStageNumber === 1 && completedLevelIds.length === 0 && (
          <div className="bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 border-b border-amber-500/50 px-3 py-1.5 flex items-center justify-between text-amber-200 text-[11px] font-serif shadow-md">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-spin-slow" />
              <span>{language === 'en' ? "Arrived in London! Select Level 1 to investigate the Study!" : language === 'es' ? "¡Llegada a Londres! ¡Selecciona el 1° nivel para investigar el Estudio!" : "Arrivato a Londra! Seleziona il 1° livello per indagare nello Studio!"}</span>
            </span>
            <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-400/40">
              {t.levelSelect.level} 1
            </span>
          </div>
        )}

        {/* Center: The Interactive 3D World Globe */}
        <div 
          className="flex-1 w-full relative flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <canvas
            ref={canvasRef}
            width={380}
            height={340}
            className="touch-none max-w-full block"
          />

          {/* Quick navigation arrows around globe (disabled during flight) */}
          {!isFlightActive && (
            <>
              <button
                onClick={() => {
                  sound.playSuccess();
                  setSelectedStageNumber(prev => (prev === 1 ? 12 : prev - 1));
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-stone-900/80 hover:bg-amber-950 border border-amber-500/50 text-amber-300 shadow-xl active:scale-90 cursor-pointer"
                title={`${t.levelSelect.stage} ${t.common.previous}`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  sound.playSuccess();
                  setSelectedStageNumber(prev => (prev === 12 ? 1 : prev + 1));
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-stone-900/80 hover:bg-amber-950 border border-amber-500/50 text-amber-300 shadow-xl active:scale-90 cursor-pointer"
                title={`${t.levelSelect.stage} ${t.common.next}`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Touch instruction hint */}
              <div className="absolute bottom-1 bg-stone-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30 text-[10px] text-amber-200/90 flex items-center gap-1.5 shadow-md pointer-events-none">
                <Sparkles className="w-3 h-3 text-amber-400 animate-spin-slow" />
                <span>{t.treasureMap.dragToRotate}</span>
              </div>
            </>
          )}
        </div>

        {/* Bottom Section: Stage Inspector Sheet & Stage Carousel */}
        <div className="safe-pb bg-gradient-to-b from-[#21140a] via-[#170e06] to-[#0c0602] border-t-2 border-amber-600/60 p-3.5 shadow-2xl shrink-0 flex flex-col gap-2.5">
          
          {/* Stage Detail Card */}
          <div className="bg-[#2a1a0d]/90 border border-amber-500/40 rounded-2xl p-3 shadow-lg flex flex-col gap-2">
            {/* Header: Stage #, Status, Coordinates */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-md bg-amber-500/25 border border-amber-400/50 text-[10px] font-black uppercase tracking-wider text-amber-200 font-serif">
                  {interpolate(t.treasureMap.stageLevel, { stage: selectedMilestone.stageNumber, level: selectedMilestone.targetLevel })}
                </span>
                <span className="text-[9px] font-mono text-amber-400/80">
                  {selectedMilestone.mapCoordinates.split(' - ')[0]}
                </span>
              </div>

              {isSelectedCompleted ? (
                <div className="flex items-center gap-1 text-emerald-400 text-[10px] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t.hiddenObject.deciphered.replace(':', '')}</span>
                </div>
              ) : isSelectedCurrent ? (
                <div className="flex items-center gap-1 text-amber-400 text-[10px] font-bold animate-pulse">
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{t.treasureMap.inProgressStage}</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-stone-500 text-[10px] font-bold">
                  <Lock className="w-3 h-3" />
                  <span>{interpolate(t.treasureMap.unlockedAtLevel, { level: selectedMilestone.targetLevel })}</span>
                </div>
              )}
            </div>

            {/* Title & Location */}
            <div>
              <h4 className="text-sm font-black text-white font-serif leading-tight">
                {selectedMilestone.stageTitle}
              </h4>
              <p className="text-[11px] text-amber-300 font-serif flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                <span>{selectedMilestone.location}</span>
              </p>
            </div>

            {/* 10 LEVEL CHIPS OF THIS STAGE (Direct Level Selection from Globe) */}
            <div className="pt-1.5 border-t border-amber-500/20">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 font-serif">
                  {t.treasureMap.exploreStageLevels}
                </span>
                <span className="text-[9px] text-stone-400">
                  {interpolate(t.treasureMap.solvedLevels, { solved: stageLevels.filter(lvl => completedLevelIds.includes(lvl)).length })}
                </span>
              </div>
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
                {stageLevels.map(lvl => {
                  const isCompleted = completedLevelIds.includes(lvl);
                  const isCurrent = lvl === currentLevelId;
                  const isUnlocked = isCompleted || isCurrent || lvl === 1 || completedLevelIds.includes(lvl - 1);

                  return (
                    <button
                      key={lvl}
                      disabled={!isUnlocked || isFlightActive}
                      onClick={() => {
                        if (isUnlocked && onSelectLevel) {
                          sound.playTap();
                          onSelectLevel(lvl);
                          onClose();
                        }
                      }}
                      className={`h-7 rounded-lg font-mono text-[11px] font-bold flex items-center justify-center transition-all ${
                        isCurrent
                          ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-stone-950 ring-2 ring-yellow-300 shadow-[0_0_10px_rgba(245,158,11,0.8)] scale-105 cursor-pointer font-black animate-pulse'
                          : isCompleted
                          ? 'bg-emerald-800/70 border border-emerald-500/50 text-emerald-200 cursor-pointer hover:bg-emerald-700'
                          : isUnlocked
                          ? 'bg-amber-950/60 border border-amber-500/50 text-amber-300 cursor-pointer hover:bg-amber-900/80'
                          : 'bg-stone-900/70 border border-stone-800 text-stone-600 cursor-not-allowed'
                      }`}
                      title={isUnlocked ? interpolate(t.treasureMap.playLevel, { level: lvl }) : `${t.levelSelect.level} ${lvl} ${t.levelSelect.locked}`}
                    >
                      {isCompleted ? '✓' : isCurrent ? `▶ ${lvl}` : isUnlocked ? lvl : '🔒'}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Relic Prize & Primary Action Play Button */}
            <div className="flex items-center justify-between pt-2 border-t border-amber-500/20 gap-2">
              <div className="flex items-center gap-1.5 text-[10px] text-amber-300 font-bold truncate shrink">
                <Award className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                <span className="truncate">{selectedMilestone.unlockedRelic}</span>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                {onOpenStageBriefing && (
                  <button
                    disabled={isFlightActive}
                    onClick={() => {
                      sound.playTap();
                      onOpenStageBriefing(selectedMilestone.stageNumber);
                      onClose();
                    }}
                    className="px-2.5 py-1.5 rounded-xl font-bold text-[10px] sm:text-[11px] bg-[#2a1b0d] hover:bg-[#3d2713] text-amber-300 border border-amber-500/50 shadow flex items-center gap-1 active:scale-95 transition-all cursor-pointer"
                    title={`${t.hub.stageDispatch} ${selectedMilestone.stageNumber}`}
                  >
                    <ScrollText className="w-3.5 h-3.5 text-amber-400" />
                    <span className="hidden xs:inline">{t.treasureMap.dispatchBtn}</span>
                  </button>
                )}

                {onSelectLevel && (
                  <button
                    disabled={isFlightActive}
                    onClick={() => {
                      sound.playTap();
                      if (selectedMilestone.stageNumber === 1 && completedLevelIds.length === 0 && onOpenStageBriefing) {
                        onOpenStageBriefing(1);
                        onClose();
                        return;
                      }
                      const targetLevel = isSelectedCurrent
                        ? currentLevelId
                        : isSelectedCompleted
                        ? (selectedMilestone.stageNumber - 1) * 10 + 1
                        : (selectedMilestone.stageNumber - 1) * 10 + 1;
                      onSelectLevel(targetLevel);
                      onClose();
                    }}
                    className={`px-3 py-1.5 rounded-xl font-black text-[10px] sm:text-[11px] uppercase tracking-wider shadow-lg flex items-center gap-1 active:scale-95 transition-all shrink-0 cursor-pointer ${
                      selectedMilestone.stageNumber === 1 && completedLevelIds.length === 0
                        ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-stone-950 animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.6)] border border-yellow-200'
                        : isSelectedCurrent
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-950 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                        : isSelectedCompleted
                        ? 'bg-stone-800 hover:bg-stone-700 text-amber-200 border border-amber-500/40'
                        : 'bg-stone-850 text-stone-500 border border-stone-800'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>
                      {selectedMilestone.stageNumber === 1 && completedLevelIds.length === 0
                        ? `🧭 ${t.treasureMap.startLevel1}`
                        : isSelectedCurrent
                        ? `▶ ${interpolate(t.treasureMap.playLevel, { level: currentLevelId })}`
                        : isSelectedCompleted
                        ? `🔄 ${t.treasureMap.replayStage}`
                        : `🔒 ${t.treasureMap.lockedBtn}`}
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Quick Stage Slider (12 Dots/Buttons across the World) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {STAGE_COORDINATES.map(s => {
              const completed = completedLevelIds.includes(s.targetLevel);
              const isSelected = s.stageNumber === selectedStageNumber;
              const isCurrent =
                currentLevelId > (s.stageNumber - 1) * 10 &&
                currentLevelId <= s.targetLevel;

              return (
                <button
                  key={s.stageNumber}
                  disabled={isFlightActive}
                  onClick={() => {
                    sound.playSuccess();
                    setSelectedStageNumber(s.stageNumber);
                  }}
                  className={`h-8 px-2.5 rounded-lg shrink-0 flex items-center justify-center text-[10px] font-black border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-amber-400 bg-amber-500/40 text-yellow-200 shadow-[0_0_10px_rgba(245,158,11,0.5)] scale-105'
                      : completed
                      ? 'border-emerald-500/60 bg-emerald-950/40 text-emerald-300'
                      : isCurrent
                      ? 'border-amber-500/80 bg-amber-950/60 text-amber-300 ring-1 ring-amber-400'
                      : 'border-stone-800 bg-stone-950 text-stone-600'
                  }`}
                  title={`${t.levelSelect.stage} ${s.stageNumber}: ${s.name}`}
                >
                  {completed ? (
                    <span>✓ T{s.stageNumber}</span>
                  ) : isCurrent ? (
                    <span>▶ T{s.stageNumber}</span>
                  ) : (
                    <span className="flex items-center gap-0.5">
                      <Lock className="w-2.5 h-2.5" />
                      T{s.stageNumber}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
