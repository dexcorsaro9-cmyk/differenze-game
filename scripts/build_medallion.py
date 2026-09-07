medallion_code = """import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';

interface EpicPortalMedallionProps {
  onActivate: () => void;
  isUnlocked?: boolean;
}

export const EpicPortalMedallion: React.FC<EpicPortalMedallionProps> = ({ onActivate }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isActivating, setIsActivating] = useState<boolean>(false);
  const isActivatingRef = useRef<boolean>(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    // 2. WebGL Renderer with High Precision & Alpha
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 3. Dynamic Cinematic Lighting (Temple Torchlight + Sun Glint)
    const ambientLight = new THREE.AmbientLight(0xffecd0, 1.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff5cc, 3.5);
    sunLight.position.set(5, 7, 6);
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    rimLight.position.set(-6, -4, 4);
    scene.add(rimLight);

    const corePointLight = new THREE.PointLight(0xf59e0b, 4.0, 10);
    corePointLight.position.set(0, 0, 0.5);
    scene.add(corePointLight);

    // 4. Medallion Hierarchy Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Materials: AAA Physically-Based Metallic Gold & Antique Patina Brass
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.92,
      roughness: 0.22,
    });

    const darkBrassMaterial = new THREE.MeshStandardMaterial({
      color: 0x5c4018,
      metalness: 0.85,
      roughness: 0.4,
    });

    const turquoiseMaterial = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      metalness: 0.3,
      roughness: 0.2,
      emissive: 0x0284c7,
      emissiveIntensity: 0.4,
    });

    const rubyCoreMaterial = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.4,
      roughness: 0.1,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.9,
    });

    // Outer Ring: Sun God Ray Disk (16 Ray Protrusions)
    const outerGroup = new THREE.Group();
    const outerRimGeo = new THREE.TorusGeometry(2.4, 0.14, 20, 64);
    const outerRim = new THREE.Mesh(outerRimGeo, goldMaterial);
    outerGroup.add(outerRim);

    // 16 Incan Sun God Rays
    const numRays = 16;
    for (let i = 0; i < numRays; i++) {
      const angle = (i / numRays) * Math.PI * 2;
      const rayGeo = new THREE.ConeGeometry(0.18, 0.75, 4);
      const ray = new THREE.Mesh(rayGeo, goldMaterial);
      ray.position.set(Math.cos(angle) * 2.55, Math.sin(angle) * 2.55, 0);
      ray.rotation.z = angle - Math.PI / 2;
      outerGroup.add(ray);
    }
    masterGroup.add(outerGroup);

    // Middle Concentric Astrolabe Gear Ring (Counter-rotating)
    const midGroup = new THREE.Group();
    const midRingGeo = new THREE.TorusGeometry(1.65, 0.1, 16, 48);
    const midRing = new THREE.Mesh(midRingGeo, darkBrassMaterial);
    midGroup.add(midRing);

    // 8 Turquoise Astrolabe Beads
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const beadGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const bead = new THREE.Mesh(beadGeo, turquoiseMaterial);
      bead.position.set(Math.cos(angle) * 1.65, Math.sin(angle) * 1.65, 0.08);
      midGroup.add(bead);
    }
    masterGroup.add(midGroup);

    // Inner Mechanical Ring with Glyphs
    const innerRingGeo = new THREE.TorusGeometry(0.95, 0.08, 16, 36);
    const innerRing = new THREE.Mesh(innerRingGeo, goldMaterial);
    masterGroup.add(innerRing);

    // Center Core: Ancient Paititi Solar Jewel (Octahedron with bevels)
    const coreGeo = new THREE.OctahedronGeometry(0.65, 1);
    const coreMesh = new THREE.Mesh(coreGeo, rubyCoreMaterial);
    coreMesh.position.z = 0.1;
    masterGroup.add(coreMesh);

    // 5. Floating Ethereal Golden Sparks Particles
    const particleCount = 65;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 6;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 3 + 0.5;
      particleSpeeds[i] = 0.008 + Math.random() * 0.015;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xfef08a,
      size: 0.08,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Interactive Pointer Tilt Smoothing
    let targetRotX = 0;
    let targetRotY = 0;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetRotY = x * 0.45;
      targetRotX = -y * 0.45;
    };

    window.addEventListener('pointermove', handlePointerMove);

    // 6. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Rotation speeds (normal vs fast spin on activate)
      const speedMultiplier = isActivatingRef.current ? 7.5 : 1.0;

      outerGroup.rotation.z += 0.25 * delta * speedMultiplier;
      midGroup.rotation.z -= 0.4 * delta * speedMultiplier;
      coreMesh.rotation.y += 0.6 * delta * speedMultiplier;
      coreMesh.rotation.x += 0.4 * delta * speedMultiplier;

      // Pulsating central light & jewel
      const pulse = Math.sin(elapsedTime * 3) * 0.5 + 0.5;
      corePointLight.intensity = (isActivatingRef.current ? 8.0 : 3.0) + pulse * 1.5;
      rubyCoreMaterial.emissiveIntensity = (isActivatingRef.current ? 3.0 : 0.8) + pulse * 0.4;

      // Parallax mouse tilt lerp
      masterGroup.rotation.y += (targetRotY - masterGroup.rotation.y) * 0.08;
      masterGroup.rotation.x += (targetRotX - masterGroup.rotation.x) * 0.08;

      // Float sparks upward
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += particleSpeeds[i];
        if (positions[i * 3 + 1] > 3.5) {
          positions[i * 3 + 1] = -3.5;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handleActivateClick = () => {
    if (isActivating) return;
    setIsActivating(true);
    isActivatingRef.current = true;

    // Epic ancient temple chime & stone mechanism sound
    sound.playRelicFound();
    triggerHaptic('medium');

    setTimeout(() => {
      onActivate();
    }, 750);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full max-w-sm mx-auto select-none">
      {/* 3D WebGL Real-time Astrolabe Artifact Display */}
      <div
        onClick={handleActivateClick}
        className="relative w-56 h-56 sm:w-64 sm:h-64 cursor-pointer flex items-center justify-center group"
      >
        {/* Soft atmospheric golden backglow */}
        <div className={`absolute inset-4 rounded-full bg-amber-500/25 blur-2xl transition-all duration-500 pointer-events-none ${
          isActivating ? 'scale-150 bg-amber-400/60 blur-3xl' : 'group-hover:scale-115 group-hover:bg-amber-400/40'
        }`} />

        {/* Outer subtle rotating runic ring guide */}
        <div className="absolute inset-0 rounded-full border border-dashed border-amber-500/30 animate-spin-slow pointer-events-none" />

        {/* Three.js Canvas Container */}
        <div ref={mountRef} className="w-full h-full relative z-10" />

        {/* Center prompt text overlay on hover */}
        {!isActivating && (
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-200 bg-black/75 px-2.5 py-1 rounded-full border border-amber-500/60 backdrop-blur-sm shadow-xl font-serif">
              Tocca l'Astrolabio
            </span>
          </div>
        )}
      </div>

      {/* Epic Legendary Archaeological Start Button */}
      <button
        type="button"
        onClick={handleActivateClick}
        disabled={isActivating}
        className={`w-full relative px-6 py-4 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 active:scale-95 shadow-2xl border-2 ${
          isActivating
            ? 'bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 border-amber-200 text-stone-950 scale-105 shadow-[0_0_50px_rgba(251,191,36,0.9)]'
            : 'bg-gradient-to-b from-[#2e1d0e] via-[#1a0f06] to-[#0d0702] border-amber-400/80 hover:border-amber-300 text-amber-100 hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] group'
        }`}
      >
        {/* Animated golden shimmer beam */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent pointer-events-none" />

        {/* 4 Corner Brass Rivets */}
        <div className="brass-corner-bracket brass-corner-tl opacity-80" />
        <div className="brass-corner-bracket brass-corner-tr opacity-80" />
        <div className="brass-corner-bracket brass-corner-bl opacity-80" />
        <div className="brass-corner-bracket brass-corner-br opacity-80" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          {/* Top Inscription */}
          <div className="flex items-center gap-2 mb-1">
            <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-amber-400/60" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-amber-400/90 font-serif">
              {isActivating ? '✦ SBLOCCO DEL VARCO IN CORSO ✦' : '✦ ROYAL GEOGRAPHICAL SOCIETY ✦'}
            </span>
            <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-amber-400/60" />
          </div>

          {/* Main Title */}
          <span className="text-base sm:text-lg font-black font-serif tracking-[0.22em] uppercase text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-200 to-yellow-500 drop-shadow-[0_2px_10px_rgba(245,158,11,0.5)]">
            {isActivating ? 'ACCESSO A PAITITI...' : 'INIZIA LA SPEDIZIONE'}
          </span>

          {/* Subtitle */}
          <span className="text-[10px] font-serif italic text-amber-300/80 tracking-widest mt-0.5">
            « Tocca per decifrare il primo sito »
          </span>
        </div>
      </button>
    </div>
  );
};
"""

with open("src/components/EpicPortalMedallion.tsx", "w", encoding="utf-8") as f:
    f.write(medallion_code)
print("Created EpicPortalMedallion.tsx")
