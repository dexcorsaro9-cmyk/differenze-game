import React, { useEffect, useRef } from 'react';

interface AmbientParticlesProps {
  imageIndex: 0 | 1; // 0 for Image A, 1 for Image B
  hasSteam?: boolean; // Steam is present only in Image A!
}

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
  type: 'dust' | 'sparkle';
}

export const AmbientParticles: React.FC<AmbientParticlesProps> = ({ imageIndex }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
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

    // Spawn subtle dust motes (drifting through sunbeams)
    const spawnDust = () => {
      if (particles.filter(p => p.type === 'dust').length < 25) {
        particles.push({
          x: Math.random() * canvas.width * 0.55, // Mostly in the sunbeam area (left side)
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.2) * 0.3,
          vy: 0.15 + Math.random() * 0.25, // Gentle downward/forward float
          radius: 1 + Math.random() * 2,
          alpha: 0,
          maxAlpha: 0.3 + Math.random() * 0.5,
          life: 0,
          maxLife: 200 + Math.random() * 250,
          type: 'dust',
        });
      }
    };

    // Spawn occasional star sparkles on brass instruments
    const spawnSparkle = () => {
      if (particles.filter(p => p.type === 'sparkle').length < 3 && Math.random() < 0.03) {
        const isGlobe = Math.random() > 0.5;
        const targetX = isGlobe ? canvas.width * 0.93 : canvas.width * 0.46;
        const targetY = isGlobe ? canvas.height * 0.61 : canvas.height * 0.58;

        particles.push({
          x: targetX + (Math.random() - 0.5) * 25,
          y: targetY + (Math.random() - 0.5) * 25,
          vx: 0,
          vy: 0,
          radius: 3 + Math.random() * 4,
          alpha: 0,
          maxAlpha: 0.85,
          life: 0,
          maxLife: 60,
          type: 'sparkle',
        });
      }
    };

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      spawnDust();
      spawnSparkle();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;

        // Fade in and fade out
        const halfLife = p.maxLife / 2;
        if (p.life < halfLife) {
          p.alpha = (p.life / halfLife) * p.maxAlpha;
        } else {
          p.alpha = ((p.maxLife - p.life) / halfLife) * p.maxAlpha;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Draw particle
        if (p.type === 'dust') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(254, 240, 138, ${p.alpha})`; // Warm golden dust
          ctx.shadowColor = 'rgba(250, 204, 21, 0.8)';
          ctx.shadowBlur = 4;
          ctx.fill();
        } else if (p.type === 'sparkle') {
          // 4-point star sparkle glint
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
          ctx.shadowColor = 'rgba(251, 191, 36, 1)';
          ctx.shadowBlur = 8;
          
          ctx.beginPath();
          ctx.moveTo(-p.radius, 0);
          ctx.quadraticCurveTo(0, 0, 0, -p.radius * 1.5);
          ctx.quadraticCurveTo(0, 0, p.radius, 0);
          ctx.quadraticCurveTo(0, 0, 0, p.radius * 1.5);
          ctx.quadraticCurveTo(0, 0, -p.radius, 0);
          ctx.fill();
          ctx.restore();
        }

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
  }, [imageIndex]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-15 w-full h-full"
    />
  );
};
