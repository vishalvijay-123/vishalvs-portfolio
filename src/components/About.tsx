"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Code, Shield, Terminal, Star, Award, BookOpen } from "lucide-react";

const PHILOSOPHIES = [
  {
    title: "System Architecture",
    description: "Designing end-to-end solutions, connecting IoT sensor grids with resilient cloud APIs and local AI pipelines.",
    icon: Code,
    color: "text-indigo-400 border-indigo-500/10 hover:border-indigo-500/30 bg-indigo-500/5",
  },
  {
    title: "Security Auditing",
    description: "Certified Ethical Hacker targeting system vulnerabilities via black-box tests and creating custom boot-to-root CTF challenge machines.",
    icon: Shield,
    color: "text-emerald-400 border-emerald-500/10 hover:border-emerald-500/30 bg-emerald-500/5",
  },
  {
    title: "AI Integration",
    description: "Running open-source LLMs locally, writing custom parsing algorithms, and programming deterministic scoring engines.",
    icon: Terminal,
    color: "text-purple-400 border-purple-500/10 hover:border-purple-500/30 bg-purple-500/5",
  },
  {
    title: "Hardware Systems",
    description: "Developing ESP32/ATtiny85 firmware in C++, configuring UDP & ESP-NOW multiroom intercom networks, and designing IoT relay grids.",
    icon: Cpu,
    color: "text-amber-400 border-amber-500/10 hover:border-amber-500/30 bg-amber-500/5",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Engineering Philosophy
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100"
          >
            Decoding Complexity, Building Systems
          </motion.h2>
        </div>

        {/* Bio Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-200">
              Who I Am & What I Do
            </h3>
            <p className="text-slate-400 leading-relaxed">
              I am an Electronics & Communication Engineering graduate and a Certified Ethical Hacker who operates at the intersection of hardware, security, and modern web software. I focus on building low-level systems that require robust architectures, secure access control, and low-latency communication.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Whether coding custom firmware for ESP32 boards to synchronize water-flow automation, performing black-box audits on live web platforms, or assembling containerized AI pipelines to parser resumes automatically, I focus on building high-integrity systems that go far beyond standard CRUD applications.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-slate-900/30">
                <Star className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-200 text-sm">Pragmatic Security</h4>
                  <p className="text-xs text-slate-400 mt-1">Ethical hacking background guarantees secure APIs and robust role access control by design.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-slate-900/30">
                <Award className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-200 text-sm">Full Hardware Stack</h4>
                  <p className="text-xs text-slate-400 mt-1">Handling the spectrum from physical copper pins up to TypeScript browser render states.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Decorative glows */}
              <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl glow-blur pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-300" />
              
              {/* Main content box */}
              <div className="relative glass border-white/10 rounded-2xl p-8 max-w-sm flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full border-2 border-emerald-500/30 p-1 mb-6 relative overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-slate-900 border border-emerald-500/20 relative overflow-hidden">
                    <Image
                      src="/Me.jpeg"
                      alt="Vishal V S"
                      fill
                      sizes="96px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <h4 className="font-display font-bold text-xl text-slate-200">Vishal V S</h4>
                <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase mt-1">Kerala, India</p>
                
                <hr className="w-full border-white/5 my-6" />
                
                <div className="w-full text-left flex flex-col gap-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Degree</span>
                    <span className="text-slate-300 font-medium">B.E. ECE (AVIT Chennai)</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Ethics Certification</span>
                    <span className="text-slate-300 font-medium">CEH v12 (EC-Council)</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Defensive Diploma</span>
                    <span className="text-slate-300 font-medium">Red Team Hacker Academy</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">CTF Ranking</span>
                    <span className="text-slate-300 font-medium text-emerald-400">TryHackMe Top 4%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHILOSOPHIES.map((pill, i) => {
            const Icon = pill.icon;
            return (
              <motion.div
                key={pill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 ${pill.color}`}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-lg text-slate-100 mb-2">
                  {pill.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
