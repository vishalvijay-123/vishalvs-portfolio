"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, Award, ExternalLink } from "lucide-react";

interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  roleBadge?: string;
  details: string[];
  metrics?: string;
  tech?: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const EXPERIENCE: TimelineItem[] = [
  {
    title: "Freelance Web Developer & Consultant",
    subtitle: "Reset — Habit Transformation Platform",
    period: "09/2026 – Present",
    roleBadge: "Client Production",
    demoUrl: "https://reset-with.vercel.app/",
    details: [
      "Engineered an end-to-end habit transformation platform and coaching CMS for a wellness client, managing everything from architecture planning through live Vercel deployment.",
      "Designed resilient schemas using Prisma ORM with Neon Serverless PostgreSQL and implemented secure JWT auth, utilizing AI coding tools to accelerate development.",
      "Conducted thorough security and access-control reviews, ensuring hardened token flows, robust session handling, and protected API endpoints.",
      "Oversaw database migrations, automated backup pipelines, and guided complete client handover and training."
    ],
    tech: ["Next.js", "React", "TypeScript", "Prisma", "Neon PostgreSQL", "JWT", "Vercel"]
  },
  {
    title: "Embedded Systems & IoT Intern",
    subtitle: "HCL Technologies, Chennai",
    period: "01/2026 – 04/2026",
    roleBadge: "Internship",
    details: [
      "Built a functioning smart hydroponics automation prototype using ESP32 microcontrollers to track environmental metrics and control irrigation pumps via relay modules.",
      "Authored C++ firmware and built a lightweight FastAPI telemetry logging backend with SQLite, leveraging AI coding tools to streamline implementation.",
      "Assembled and bench-tested hardware circuits, validating resilience against sensor disconnects, power fluctuations, and Wi-Fi outages."
    ],
    tech: ["ESP32", "C++", "Arduino IDE", "FastAPI", "SQLite", "Python"]
  },
  {
    title: "Freelance Web Developer",
    subtitle: "Old Skool Boxing Gym — Client Website & CMS",
    period: "09/2025 – 12/2025",
    roleBadge: "Client Production",
    demoUrl: "https://oldskoolboxing.vercel.app/",
    githubUrl: "https://github.com/vishalvijay-123/oldskoolboxing",
    details: [
      "Developed and launched a high-performance web portal for a boxing gym featuring a 5-tab administrative panel for managing schedules, announcements, and trainer rosters.",
      "Architected the full-stack system in React, Node.js, and Express, pairing AI assistants with rigorous manual testing and code auditing.",
      "Successfully transitioned production data from Supabase to Neon PostgreSQL to boost reliability and optimize operating overhead."
    ],
    tech: ["Vite", "React", "Node.js", "Express", "Neon PostgreSQL", "JWT", "Vercel"]
  }
];

const EDUCATION: TimelineItem[] = [
  {
    title: "B.E. Electronics and Communication Engineering",
    subtitle: "Aarupadai Veedu Institute of Technology, Chennai",
    period: "Graduated on 2026",
    metrics: "CGPA: 8.276 / 10.0",
    details: [
      "Specialized in microcontrollers, sensor integration, digital signals, and communication protocols.",
      "Acquired a solid engineering foundation spanning circuit design, embedded systems, and modern software development."
    ]
  },
  {
    title: "12th Standard (AISSCE)",
    subtitle: "Christ Nagar Senior Secondary School, Thiruvananthapuram",
    period: "CBSE Board",
    metrics: "Score: 86.6%",
    details: ["Focused on Physics, Chemistry, Mathematics, and Computer Science."]
  },
  {
    title: "10th Standard",
    subtitle: "Amrita Vidyalayam",
    period: "Completed",
    metrics: "Score: 100%",
    details: ["Achieved maximum GPA score."]
  }
];

export default function Timeline() {
  return (
    <>
      {/* SECTION 1: Experience */}
      <section id="experience" className="relative py-24 md:py-32 overflow-hidden border-t border-white/5 bg-slate-950/20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full glow-blur pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-16 justify-center text-center">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-500 block">Professional</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-100 font-sans">Work Experience</h2>
            </div>
          </div>

          <div className="relative border-l border-white/10 pl-8 ml-4 flex flex-col gap-12">
            {EXPERIENCE.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Glowing timeline node */}
                <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full border-2 border-emerald-500/50 bg-slate-950 flex items-center justify-center group-hover:border-emerald-400 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:bg-emerald-400 animate-pulse" />
                </div>

                <div className="glass p-8 rounded-2xl border-white/5 glass-hover">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      {item.roleBadge && (
                        <span className="px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-[10px] font-semibold tracking-wide uppercase">
                          {item.roleBadge}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {item.githubUrl && (
                        <a
                          href={item.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                          <span>GitHub</span>
                        </a>
                      )}
                      {item.demoUrl && (
                        <a
                          href={item.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Visit Live Site</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-100 group-hover:text-emerald-400 transition-colors mb-1">
                    {item.title}
                  </h3>
                  <h4 className="text-md font-semibold text-slate-400 mb-6">{item.subtitle}</h4>

                  <ul className="text-sm text-slate-400 leading-relaxed list-disc list-inside flex flex-col gap-3.5 mb-8">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="pl-1 text-justify">{detail}</li>
                    ))}
                  </ul>

                  {item.tech && (
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-semibold font-mono rounded bg-slate-900 border border-white/5 text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Education */}
      <section id="education" className="relative py-24 md:py-32 overflow-hidden border-t border-white/5 bg-slate-950/40">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full glow-blur pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-16 justify-center text-center">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-500 block">Academic</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-100 font-sans">Education History</h2>
            </div>
          </div>

          <div className="relative border-l border-white/10 pl-8 ml-4 flex flex-col gap-12">
            {EDUCATION.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Glowing timeline node */}
                <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full border-2 border-indigo-500/50 bg-slate-950 flex items-center justify-center group-hover:border-indigo-400 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 group-hover:bg-indigo-400 animate-pulse" />
                </div>

                <div className="glass p-8 rounded-2xl border-white/5 glass-hover">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <span className="px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    {item.metrics && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold">
                        <Award className="w-3.5 h-3.5" />
                        {item.metrics}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-100 group-hover:text-indigo-400 transition-colors mb-1">
                    {item.title}
                  </h3>
                  <h4 className="text-md font-semibold text-slate-400 mb-6">{item.subtitle}</h4>

                  <ul className="text-sm text-slate-400 leading-relaxed list-disc list-inside flex flex-col gap-3">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="pl-1">{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
