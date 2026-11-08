"use client";

import React, { useEffect, useRef } from "react";

interface VfxCanvasProps {
  burstFlowerShower?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  targetAlpha: number;
  hue: number;
  decay: number;
  pulseSpeed: number;
  pulsePhase: number;
}

interface Petal {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  colorType: "lotus" | "marigold" | "gold";
  alpha: number;
  swingPhase: number;
}

export default function VfxCanvas({ burstFlowerShower }: VfxCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const petalsRef = useRef<Petal[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -100, y: -100, active: false });

  // Spawn flower shower when triggered
  useEffect(() => {
    if (burstFlowerShower) {
      const petals: Petal[] = [];
      const width = window.innerWidth;
      const count = 75;
      for (let i = 0; i < count; i++) {
        const typeRoll = Math.random();
        petals.push({
          x: Math.random() * width,
          y: -20 - Math.random() * 250,
          vx: (Math.random() - 0.5) * 1.5,
          vy: 1.8 + Math.random() * 2.5,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.05,
          size: 9 + Math.random() * 11,
          colorType: typeRoll < 0.45 ? "marigold" : typeRoll < 0.8 ? "lotus" : "gold",
          alpha: 0.9,
          swingPhase: Math.random() * Math.PI * 2,
        });
      }
      petalsRef.current = [...petalsRef.current, ...petals];
    }
  }, [burstFlowerShower]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Initial ambient embers
    const particleCount = 45;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.3 - Math.random() * 0.6,
        radius: 1 + Math.random() * 2.2,
        alpha: Math.random() * 0.6 + 0.2,
        targetAlpha: Math.random() * 0.7 + 0.3,
        hue: Math.random() > 0.4 ? 42 : 32, // Gold / Warm saffron ember
        decay: 0.002 + Math.random() * 0.004,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }
    particlesRef.current = particles;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render ambient golden particles
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulsePhase += p.pulseSpeed;
        const currentAlpha = Math.max(0.05, p.alpha + Math.sin(p.pulsePhase) * 0.25);

        // Repel or swirl around mouse
        if (mouseRef.current.active) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 0) {
            const force = (120 - dist) / 120;
            p.x += (dx / dist) * force * 1.5;
            p.y += (dy / dist) * force * 1.5;
          }
        }

        // Loop bounds
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw glowing ember
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.5);
        gradient.addColorStop(0, `hsla(${p.hue}, 95%, 65%, ${currentAlpha})`);
        gradient.addColorStop(0.5, `hsla(${p.hue}, 90%, 50%, ${currentAlpha * 0.4})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 90%, 50%, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Render falling petals (Pushpa Vrishti)
      if (petalsRef.current.length > 0) {
        for (let i = petalsRef.current.length - 1; i >= 0; i--) {
          const petal = petalsRef.current[i];
          petal.swingPhase += 0.04;
          petal.x += petal.vx + Math.sin(petal.swingPhase) * 1.2;
          petal.y += petal.vy;
          petal.rotation += petal.rotationSpeed;

          ctx.save();
          ctx.translate(petal.x, petal.y);
          ctx.rotate(petal.rotation);

          // Petal colors: marigold (orange-gold), lotus (pink-rose), or celestial gold
          let fillGradient: CanvasGradient;
          if (petal.colorType === "marigold") {
            fillGradient = ctx.createLinearGradient(0, -petal.size, 0, petal.size);
            fillGradient.addColorStop(0, `rgba(255, 179, 0, ${petal.alpha})`);
            fillGradient.addColorStop(1, `rgba(230, 81, 0, ${petal.alpha * 0.9})`);
          } else if (petal.colorType === "lotus") {
            fillGradient = ctx.createLinearGradient(0, -petal.size, 0, petal.size);
            fillGradient.addColorStop(0, `rgba(244, 143, 177, ${petal.alpha})`);
            fillGradient.addColorStop(1, `rgba(216, 27, 96, ${petal.alpha * 0.85})`);
          } else {
            fillGradient = ctx.createLinearGradient(0, -petal.size, 0, petal.size);
            fillGradient.addColorStop(0, `rgba(255, 236, 179, ${petal.alpha})`);
            fillGradient.addColorStop(1, `rgba(255, 215, 0, ${petal.alpha * 0.9})`);
          }

          // Oval petal shape
          ctx.beginPath();
          ctx.ellipse(0, 0, petal.size * 0.45, petal.size, 0, 0, Math.PI * 2);
          ctx.fillStyle = fillGradient;
          ctx.shadowColor = petal.colorType === "gold" ? "rgba(255, 215, 0, 0.4)" : "rgba(255, 138, 101, 0.3)";
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.restore();

          // Remove if fell below viewport
          if (petal.y > height + 40) {
            petalsRef.current.splice(i, 1);
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20 h-full w-full"
      aria-hidden="true"
    />
  );
}
