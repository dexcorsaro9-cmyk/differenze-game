import React, { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../utils/motion';

interface AmbientParticlesProps {
  imageIndex: 0 | 1; // 0 for Image A, 1 for Image B
  hasSteam?: boolean; // Steam is present only in Image A!
  chapterNumber?: number;
}

type ParticleType =
  | 'dust' // Chapter 1-2: Oxford Study golden dust
  | 'study_sparkle' // Chapter 1-2: Brass lens sparkle
  | 'firefly' // Chapter 3-5: Amazonian rainforest glowing firefly
  | 'spore' // Chapter 3-5: Rainforest atmospheric mist spore
  | 'snow' // Chapter 6-8: Andean crisp snow flurry
  | 'ember' // Chapter 6-8: Mountain torch ember spark
  | 'solar_mote' // Chapter 9+: Sacred Inti radiant solar mote
  | 'sacred_sparkle'; // Chapter 9+: Golden glyph sparkle

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  maxAlpha: number;
  life: number;
  maxLife: number;
  type: ParticleType;
  color?: string;
  oscillationSpeed?: number;
  oscillationOffset?: number;
}

export const AmbientParticles: React.FC<AmbientParticlesProps> = ({
  imageIndex,
  chapterNumber = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // A continuous drifting particle field is pure decoration: skip it outright when the
    // player has asked for reduced motion, rather than animating it more slowly.
    if (prefersReducedMotion()) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    const particles: Particle[] = [];

    // Resize canvas to match display perfectly using ResizeObserver
    const updateSize = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        canvas.width = Math.round(rect.width);
        canvas.height = Math.round(rect.height);
      }
    };
    updateSize();

    let resizeObserver: ResizeObserver | null = null;
    if (window.ResizeObserver && canvas.parentElement) {
      resizeObserver = new ResizeObserver(updateSize);
      resizeObserver.observe(canvas.parentElement);
    }
    window.addEventListener('resize', updateSize);

    // =========================================================================
    // BIOME SPAWNERS
    // =========================================================================

    // Biome 1: Oxford Study (Dust + Brass Sparkles)
    const spawnOxford = () => {
      if (particles.filter((p) => p.type === 'dust').length < 22) {
        particles.push({
          x: Math.random() * canvas.width * 0.7,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.25) * 0.35,
          vy: 0.15 + Math.random() * 0.25,
          radius: 1 + Math.random() * 2,
          alpha: 0,
          maxAlpha: 0.35 + Math.random() * 0.45,
          life: 0,
          maxLife: 220 + Math.random() * 200,
          type: 'dust',
        });
      }

      if (particles.filter((p) => p.type === 'study_sparkle').length < 2 && Math.random() < 0.02) {
        particles.push({
          x: canvas.width * (0.2 + Math.random() * 0.6),
          y: canvas.height * (0.3 + Math.random() * 0.5),
          vx: 0,
          vy: 0,
          radius: 3 + Math.random() * 3,
          alpha: 0,
          maxAlpha: 0.85,
          life: 0,
          maxLife: 55,
          type: 'study_sparkle',
        });
      }
    };

    // Biome 2: Amazonian Rainforest (Luminescent Fireflies + Jungle Spores)
    const spawnAmazon = () => {
      if (particles.filter((p) => p.type === 'firefly').length < 16) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.5,
          radius: 2 + Math.random() * 2.5,
          alpha: 0,
          maxAlpha: 0.7 + Math.random() * 0.3,
          life: 0,
          maxLife: 280 + Math.random() * 160,
          type: 'firefly',
          oscillationSpeed: 0.03 + Math.random() * 0.04,
          oscillationOffset: Math.random() * Math.PI * 2,
        });
      }

      if (particles.filter((p) => p.type === 'spore').length < 12) {
        particles.push({
          x: Math.random() * canvas.width,
          y: canvas.height + 5,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -0.2 - Math.random() * 0.3, // Upward drifting jungle mist spore
          radius: 1.5 + Math.random() * 2,
          alpha: 0,
          maxAlpha: 0.25 + Math.random() * 0.3,
          life: 0,
          maxLife: 300 + Math.random() * 150,
          type: 'spore',
        });
      }
    };

    // Biome 3: High Andes (Crisp Snow Flurries + Torch Embers)
    const spawnAndes = () => {
      if (particles.filter((p) => p.type === 'snow').length < 28) {
        particles.push({
          x: Math.random() * (canvas.width + 100) - 50,
          y: -10,
          vx: -0.4 - Math.random() * 0.7, // Wind-driven alpine drift
          vy: 0.7 + Math.random() * 0.9, // Gentle snowfall
          radius: 1.5 + Math.random() * 2.5,
          alpha: 0,
          maxAlpha: 0.5 + Math.random() * 0.45,
          life: 0,
          maxLife: 260 + Math.random() * 120,
          type: 'snow',
          oscillationSpeed: 0.02 + Math.random() * 0.03,
          oscillationOffset: Math.random() * Math.PI * 2,
        });
      }

      if (particles.filter((p) => p.type === 'ember').length < 6 && Math.random() < 0.06) {
        particles.push({
          x: canvas.width * (0.4 + Math.random() * 0.5),
          y: canvas.height * 0.8 + Math.random() * 30,
          vx: -0.3 + (Math.random() - 0.5) * 0.5,
          vy: -0.8 - Math.random() * 0.7, // Rising torch spark
          radius: 1.2 + Math.random() * 1.5,
          alpha: 0,
          maxAlpha: 0.85,
          life: 0,
          maxLife: 100 + Math.random() * 60,
          type: 'ember',
        });
      }
    };

    // Biome 4: Inti Sun Temple (Radiant Solar Motes + Sacred Glyphs)
    const spawnIntiTemple = () => {
      if (particles.filter((p) => p.type === 'solar_mote').length < 22) {
        particles.push({
          x: Math.random() * canvas.width,
          y: canvas.height + 10,
          vx: (Math.random() - 0.5) * 0.4,
          vy: -0.4 - Math.random() * 0.5, // Ascending golden solar energy
          radius: 2 + Math.random() * 2.5,
          alpha: 0,
          maxAlpha: 0.55 + Math.random() * 0.35,
          life: 0,
          maxLife: 260 + Math.random() * 150,
          type: 'solar_mote',
        });
      }

      if (particles.filter((p) => p.type === 'sacred_sparkle').length < 4 && Math.random() < 0.04) {
        particles.push({
          x: canvas.width * (0.2 + Math.random() * 0.6),
          y: canvas.height * (0.2 + Math.random() * 0.6),
          vx: 0,
          vy: 0,
          radius: 4 + Math.random() * 4,
          alpha: 0,
          maxAlpha: 0.95,
          life: 0,
          maxLife: 70,
          type: 'sacred_sparkle',
        });
      }
    };

    // =========================================================================
    // ANIMATION LOOP
    // =========================================================================
    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Trigger biomes according to chapter
      if (chapterNumber <= 2) {
        spawnOxford();
      } else if (chapterNumber <= 5) {
        spawnAmazon();
      } else if (chapterNumber <= 8) {
        spawnAndes();
      } else {
        spawnIntiTemple();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;

        // Fade In & Out curve
        const halfLife = p.maxLife / 2;
        if (p.life < halfLife) {
          p.alpha = (p.life / halfLife) * p.maxAlpha;
        } else {
          p.alpha = ((p.maxLife - p.life) / halfLife) * p.maxAlpha;
        }

        // Apply movement
        if (p.type === 'firefly' && p.oscillationSpeed && p.oscillationOffset !== undefined) {
          p.x += p.vx + Math.sin(frame * p.oscillationSpeed + p.oscillationOffset) * 0.6;
          p.y += p.vy + Math.cos(frame * p.oscillationSpeed * 0.7 + p.oscillationOffset) * 0.4;
        } else if (p.type === 'snow' && p.oscillationSpeed && p.oscillationOffset !== undefined) {
          p.x += p.vx + Math.sin(frame * p.oscillationSpeed + p.oscillationOffset) * 0.4;
          p.y += p.vy;
        } else {
          p.x += p.vx;
          p.y += p.vy;
        }

        // =====================================================================
        // DRAW PARTICLES
        // =====================================================================
        ctx.save();

        if (p.type === 'dust') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(254, 240, 138, ${p.alpha})`; // Warm Oxford lamplight dust
          ctx.shadowColor = 'rgba(250, 204, 21, 0.6)';
          ctx.shadowBlur = 4;
          ctx.fill();
        } else if (p.type === 'study_sparkle' || p.type === 'sacred_sparkle') {
          // 4-pointed diamond star sparkle
          ctx.translate(p.x, p.y);
          const isSacred = p.type === 'sacred_sparkle';
          ctx.fillStyle = isSacred
            ? `rgba(255, 245, 180, ${p.alpha})`
            : `rgba(255, 255, 255, ${p.alpha})`;
          ctx.shadowColor = isSacred
            ? 'rgba(245, 158, 11, 0.95)'
            : 'rgba(251, 191, 36, 0.9)';
          ctx.shadowBlur = isSacred ? 12 : 8;

          ctx.beginPath();
          ctx.moveTo(-p.radius, 0);
          ctx.quadraticCurveTo(0, 0, 0, -p.radius * 1.6);
          ctx.quadraticCurveTo(0, 0, p.radius, 0);
          ctx.quadraticCurveTo(0, 0, 0, p.radius * 1.6);
          ctx.quadraticCurveTo(0, 0, -p.radius, 0);
          ctx.fill();
        } else if (p.type === 'firefly') {
          // Pulsing emerald/gold rainforest firefly
          const pulse = Math.sin(frame * 0.08 + (p.oscillationOffset || 0)) * 0.3 + 0.7;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * pulse, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(167, 243, 208, ${p.alpha * pulse})`; // Soft jade emerald
          ctx.shadowColor = 'rgba(52, 211, 153, 0.95)';
          ctx.shadowBlur = 9;
          ctx.fill();

          // Golden warm core
          ctx.beginPath();
          ctx.arc(p.x, p.y, (p.radius * 0.5) * pulse, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(253, 224, 71, ${p.alpha * 0.9})`;
          ctx.fill();
        } else if (p.type === 'spore') {
          // Soft jungle mist moisture spore
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(209, 250, 229, ${p.alpha * 0.6})`;
          ctx.fill();
        } else if (p.type === 'snow') {
          // Crisp Andean mountain snow flurry
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(241, 245, 249, ${p.alpha})`;
          ctx.shadowColor = 'rgba(226, 232, 240, 0.7)';
          ctx.shadowBlur = 3;
          ctx.fill();
        } else if (p.type === 'ember') {
          // Rising torch ember spark
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(251, 146, 60, ${p.alpha})`;
          ctx.shadowColor = 'rgba(239, 68, 68, 0.9)';
          ctx.shadowBlur = 6;
          ctx.fill();
        } else if (p.type === 'solar_mote') {
          // Inti radiant sun mote
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(252, 211, 77, ${p.alpha})`;
          ctx.shadowColor = 'rgba(245, 158, 11, 0.9)';
          ctx.shadowBlur = 8;
          ctx.fill();
        }

        ctx.restore();

        // Clean dead particles
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      animFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', updateSize);
      resizeObserver?.disconnect();
    };
  }, [imageIndex, chapterNumber]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-15 w-full h-full"
    />
  );
};
