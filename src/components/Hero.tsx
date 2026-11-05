"use client";

import { useEffect, useState, useRef } from "react";
import { Terminal, Shield, Cpu, Code, ArrowRight, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = [
  { text: "Full Stack Developer", icon: Code, color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5" },
  { text: "Cybersecurity Engineer", icon: Shield, color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5" },
  { text: "AI & Automation Developer", icon: Terminal, color: "text-purple-400 border-purple-500/20 bg-purple-500/5" },
  { text: "Electronics & IoT Engineer", icon: Cpu, color: "text-amber-400 border-amber-500/20 bg-amber-500/5" },
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Cycle roles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Canvas particle backdrop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      hue: number;
    }> = [];

    // Initialize particles
    const initParticles = () => {
      const particleCount = Math.min(60, Math.floor(width / 20));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.5 + 0.5,
          speedX: Math.random() * 0.4 - 0.2,
          speedY: Math.random() * 0.4 - 0.2,
          opacity: Math.random() * 0.5 + 0.1,
          hue: Math.random() > 0.5 ? 150 : 260, // Emerald green or purple
        });
      }
    };

    initParticles();

    // Render particles
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw grids (subtle grid background)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, ${p.opacity})`;
        ctx.shadowColor = `hsla(${p.hue}, 80%, 60%, 0.8)`;
        ctx.shadowBlur = p.size * 3;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow
      });

      // Draw lines between nearby particles
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.15;
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const ActiveIcon = ROLES[currentRoleIndex].icon;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full glow-blur pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full glow-blur pointer-events-none animate-pulse-slow" />

      {/* Content wrapper */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Hacker tag / Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          Systems engineer & certified ethical hacker
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-6"
        >
          <span className="block text-slate-100">Hello, I&apos;m</span>
          <span className="text-gradient">Vishal V S</span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-16 flex items-center justify-center mb-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRoleIndex}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`inline-flex items-center gap-2 px-4 py-2 border rounded-xl font-display text-lg sm:text-2xl font-bold tracking-wide shadow-lg ${ROLES[currentRoleIndex].color}`}
            >
              <ActiveIcon className="w-5 sm:w-6 h-5 sm:h-6" />
              <span>{ROLES[currentRoleIndex].text}</span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="max-w-xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-12"
        >
          Building secure, production-grade systems from microcontrollers and IoT circuits to containerized AI pipelines and full-stack cloud applications.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none"
        >
          <button
            onClick={() => handleScrollTo("projects")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer hover-target"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleScrollTo("contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-white/20 font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer hover-target"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
