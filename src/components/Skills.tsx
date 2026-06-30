"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Cpu, Code, Database, Eye, Globe, Share2 } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "text-indigo-400 border-indigo-500/10 hover:border-indigo-500/30 bg-indigo-500/5",
    skills: ["TypeScript", "Python", "C/C++", "JavaScript", "SQL", "Bash"],
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    color: "text-emerald-400 border-emerald-500/10 hover:border-emerald-500/30 bg-emerald-500/5",
    skills: ["Burp Suite", "Metasploit", "Nmap", "Wireshark", "Kali Linux", "RBAC", "SIEM (ELK, Splunk)", "CEH Certified"],
  },
  {
    title: "Embedded & IoT",
    icon: Cpu,
    color: "text-amber-400 border-amber-500/10 hover:border-amber-500/30 bg-amber-500/5",
    skills: ["ESP32 / ESP-NOW", "Arduino / ATtiny85", "C/C++ Firmware", "I2C, SPI, UART, GPIO", "Relay Control Grids", "Sensor Integration (DHT22, etc)"],
  },
  {
    title: "AI & Automation",
    icon: Terminal,
    color: "text-purple-400 border-purple-500/10 hover:border-purple-500/30 bg-purple-500/5",
    skills: ["Ollama / Local LLMs", "DeepSeek Integration", "SDXL Image Pipelines", "Deterministic Scoring Engines", "pdf-parse API Automation"],
  },
  {
    title: "Frontend Web",
    icon: Globe,
    color: "text-cyan-400 border-cyan-500/10 hover:border-cyan-500/30 bg-cyan-500/5",
    skills: ["React 19", "Next.js 16 (App Router)", "TypeScript", "Tailwind CSS v4", "shadcn/ui & Radix UI", "TanStack Query v5", "Zustand State Management"],
  },
  {
    title: "Backend & Auth",
    icon: Share2,
    color: "text-rose-400 border-rose-500/10 hover:border-rose-500/30 bg-rose-500/5",
    skills: ["Node.js / Express", "FastAPI (Python)", "REST API Design", "Prisma ORM", "JWT & bcrypt", "Cookie-based Session Auth"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-blue-400 border-blue-500/10 hover:border-blue-500/30 bg-blue-500/5",
    skills: ["PostgreSQL", "Supabase", "SQLite", "MySQL", "MongoDB"],
  },
  {
    title: "Infrastructure",
    icon: Eye,
    color: "text-teal-400 border-teal-500/10 hover:border-teal-500/30 bg-teal-500/5",
    skills: ["Docker & Compose", "Linux (Kali, Ubuntu, Arch)", "Git & Version Control", "VirtualBox", "GPU Passthrough Configuration"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Glow Blur backdrop */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Cpu className="w-3.5 h-3.5" />
            Core Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100"
          >
            Technical Competence
          </motion.h2>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg ${cat.color}`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-display font-bold text-slate-200 text-sm tracking-wide">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill List */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-md bg-white/5 hover:bg-white/10 text-slate-300 hover:text-slate-100 border border-white/5 hover:border-white/10 transition-colors duration-150"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
