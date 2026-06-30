"use client";

import { motion } from "framer-motion";
import { Award, ShieldAlert, Cpu, Trophy, Star, ArrowUpRight } from "lucide-react";

interface Item {
  title: string;
  issuer: string;
  desc: string;
  icon: any;
  color: string;
  link?: string;
}

const ITEMS: Item[] = [
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    desc: "Demonstrates standard ethical hacking methodologies, footprinting, vulnerability scanning, system hacking, and network audit controls.",
    icon: ShieldAlert,
    color: "text-emerald-400 border-emerald-500/10 hover:border-emerald-500/30 bg-emerald-500/5",
  },
  {
    title: "TryHackMe Top 4% Global Rank",
    issuer: "TryHackMe Platform",
    desc: "Ranked globally for solving hands-on challenges covering penetration testing, network auditing, privilege escalation, and active directory exploit chains.",
    icon: Trophy,
    color: "text-amber-400 border-amber-500/10 hover:border-amber-500/30 bg-amber-500/5",
    link: "https://tryhackme.com",
  },
  {
    title: "Second Prize - International Research Conference",
    issuer: "ICTIH'26 International Conference",
    desc: "Awarded second place for publishing research and demonstrating a novel hardware project: 'Multiroom ESP32 Intercommunication Network Architecture'.",
    icon: Cpu,
    color: "text-indigo-400 border-indigo-500/10 hover:border-indigo-500/30 bg-indigo-500/5",
  },
  {
    title: "CTF Competition Winner",
    issuer: "Red Team Hacker Academy",
    desc: "Secured multiple wins at competitive capture-the-flag (CTF) events involving reverse engineering, binary exploitation, and privilege escalation.",
    icon: Star,
    color: "text-purple-400 border-purple-500/10 hover:border-purple-500/30 bg-purple-500/5",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Award className="w-3.5 h-3.5" />
            Milestones
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100"
          >
            Certifications & Achievements
          </motion.h2>
        </div>

        {/* Grid cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            const CardContent = (
              <>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-1">
                      {item.issuer}
                    </span>
                    <h3 className="font-display font-bold text-lg text-slate-200 group-hover:text-slate-100 transition-colors mb-2 flex items-center gap-1.5">
                      <span>{item.title}</span>
                      {item.link && <ArrowUpRight className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </>
            );

            return item.link ? (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 block cursor-pointer hover-target ${item.color}`}
              >
                {CardContent}
              </motion.a>
            ) : (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 ${item.color}`}
              >
                {CardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
