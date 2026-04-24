"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  worldY: number;
  depth: number;
  vx: number;
  vy: number;
  size: number;
  baseOpacity: number;
  pulseSpeed: number;
  pulseOffset: number;
};

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const particleCount = prefersReducedMotion ? 36 : isMobile ? 90 : 150;
    const maxLinkDistance = isMobile ? 100 : 135;
    const speedFactor = prefersReducedMotion ? 0.2 : isMobile ? 0.38 : 0.56;
    const pulseStrength = prefersReducedMotion ? 0.12 : 0.26;
    const worldHeightMultiplier = 1;

    let width = 0;
    let height = 0;
    let worldHeight = 0;
    let frame = 0;
    let time = 0;
    let particles: Particle[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      worldHeight = Math.max(
        document.documentElement.scrollHeight * worldHeightMultiplier,
        height,
      );
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticles = () => {
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        worldY: Math.random() * worldHeight,
        depth: 0.18 + Math.random() * 0.95,
        vx: (Math.random() - 0.5) * speedFactor,
        vy: (Math.random() - 0.5) * speedFactor,
        size: Math.random() * 2.86 + 0.78,
        baseOpacity: 0.2 + Math.random() * 0.55,
        pulseSpeed: 0.25 + Math.random() * 0.9,
        pulseOffset: Math.random() * Math.PI * 2,
      }));
    };

    const drawAmbientGlow = () => {
      const gradientTop = context.createRadialGradient(
        width * 0.18,
        height * 0.22,
        0,
        width * 0.18,
        height * 0.22,
        width * 0.62,
      );
      gradientTop.addColorStop(0, "rgba(90, 150, 255, 0.14)");
      gradientTop.addColorStop(1, "rgba(90, 150, 255, 0)");

      const gradientBottom = context.createRadialGradient(
        width * 0.82,
        height * 0.78,
        0,
        width * 0.82,
        height * 0.78,
        width * 0.58,
      );
      gradientBottom.addColorStop(0, "rgba(60, 120, 255, 0.1)");
      gradientBottom.addColorStop(1, "rgba(60, 120, 255, 0)");

      context.fillStyle = gradientTop;
      context.fillRect(0, 0, width, height);
      context.fillStyle = gradientBottom;
      context.fillRect(0, 0, width, height);
    };

    const getScreenY = (particle: Particle) => particle.worldY;

    const draw = () => {
      context.clearRect(0, 0, width, height);
      drawAmbientGlow();

      time += 0.008;

      const visibleParticles: Array<{
        x: number;
        screenY: number;
        alpha: number;
      }> = [];

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.x += p.vx;
        p.worldY += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.worldY < 0 || p.worldY > worldHeight) p.vy *= -1;

        const screenY = getScreenY(p);

        if (screenY < -50 || screenY > height + 50) continue;

        const pulse = 1 + Math.sin(time * p.pulseSpeed * 60 + p.pulseOffset) * pulseStrength;
        const alpha = Math.min(1, p.baseOpacity * pulse);
        const glowSize = p.size * 4.8;

        // Outer soft glow
        context.beginPath();
        context.arc(p.x, screenY, glowSize, 0, Math.PI * 2);
        context.fillStyle = `rgba(100, 160, 255, ${alpha * 0.08})`;
        context.fill();

        // Core particle
        context.beginPath();
        context.arc(p.x, screenY, p.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(210, 230, 255, ${alpha})`;
        context.fill();

        visibleParticles.push({ x: p.x, screenY, alpha });
      }

      for (let i = 0; i < visibleParticles.length; i += 1) {
        for (let j = i + 1; j < visibleParticles.length; j += 1) {
          const dx = visibleParticles[i].x - visibleParticles[j].x;
          const dy = visibleParticles[i].screenY - visibleParticles[j].screenY;
          const distance = Math.hypot(dx, dy);

          if (distance < maxLinkDistance) {
            const alpha =
              (1 - distance / maxLinkDistance) *
              0.22 *
              Math.min(visibleParticles[i].alpha, visibleParticles[j].alpha);
            context.beginPath();
            context.moveTo(visibleParticles[i].x, visibleParticles[i].screenY);
            context.lineTo(visibleParticles[j].x, visibleParticles[j].screenY);
            context.strokeStyle = `rgba(110, 170, 255, ${alpha})`;
            context.lineWidth = 0.45;
            context.stroke();
          }
        }
      }

      frame = window.requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.95]"
      aria-hidden="true"
    />
  );
}
