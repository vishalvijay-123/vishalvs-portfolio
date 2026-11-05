"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, ShieldAlert, Cpu, Code, BrainCircuit, Terminal, ArrowDownRight, Layers, Eye } from "lucide-react";

interface Project {
  title: string;
  category: "Web Development" | "Cybersecurity" | "AI & Automation" | "Embedded & IoT";
  date: string;
  badge?: string;
  description: string;
  tech: string[];
  challenges: string;
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const PROJECTS: Project[] = [
  {
    title: "BodyGold — Fitness Platform, E-Commerce & CMS",
    category: "Web Development",
    date: "Ongoing",
    badge: "In Development",
    description: "Comprehensive web platform and e-commerce ecosystem built for BodyGold fitness center. Features a full merchandise and supplement store with Razorpay checkout, automated membership subscription management, trainer roster profiles, and an interactive CMS admin control center.",
    tech: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Razorpay API", "Tailwind CSS", "JWT"],
    challenges: "Architecting reliable Razorpay checkout and webhook verification workflows for subscriptions and merchandise, designing flexible schemas for tiered memberships and inventory, and enforcing strict role-based access control between admins, trainers, and members.",
    features: [
      "E-Commerce store with product catalogs, shopping cart persistence, and secure Razorpay payment gateway integration.",
      "Tiered gym membership plans with automated billing cycles, subscription status tracking, and member portals.",
      "Interactive 360° CMS admin suite for managing products, trainer schedules, class timetables, and customer orders.",
      "Trainer management module featuring trainer specialties, client booking slots, and roster assignments.",
      "Role-based authentication (RBAC) ensuring protected session security across customer, trainer, and admin accounts."
    ],
  },
  {
    title: "Reset — Habit Transformation Platform",
    category: "Web Development",
    date: "09/2026 – Present",
    badge: "Client Production",
    description: "Personalized habit-building web application and administrative CMS created for a wellness brand. Built with Next.js App Router, Neon PostgreSQL, and secure JWT auth, utilizing AI coding tools for rapid development and refined with thorough security checks.",
    tech: ["Next.js", "React", "TypeScript", "Prisma", "Neon PostgreSQL", "JWT", "Vercel"],
    challenges: "Structuring an adaptable relational data model with Prisma ORM, enforcing rigorous role-based access control boundaries, and coordinating zero-downtime deployment on Vercel.",
    features: [
      "Custom administrative control center for habit blueprints, cohort progression, and client tracking.",
      "Stateless JWT authentication paired with scoped tokens for companion mobile client sync.",
      "Serverless PostgreSQL on Neon featuring automated backups and connection pooling.",
      "Production deployment on Vercel with structured documentation and smooth client handover."
    ],
    demoUrl: "https://reset-with.vercel.app/",
  },
  {
    title: "Old Skool Boxing — Client Website & CMS",
    category: "Web Development",
    date: "09/2025 – 12/2025",
    badge: "Client Production",
    description: "Responsive web presence and content management portal developed for Old Skool Boxing Gym. Features full administrative control over class timetables and coach profiles, hosted with continuous availability on Vercel.",
    tech: ["Vite", "React", "Node.js", "Express", "Neon PostgreSQL", "JWT", "Vercel"],
    challenges: "Streamlining media assets with in-memory Base64 image compression to bypass disk writes, and orchestrating a live database migration from Supabase to Neon PostgreSQL.",
    features: [
      "Modular 5-tab admin dashboard for updating training schedules, announcements, and rosters.",
      "In-memory image compression minimizing server overhead and upload latency.",
      "Database transition to Neon PostgreSQL for enhanced uptime and reduced hosting costs."
    ],
    githubUrl: "https://github.com/vishalvijay-123/oldskoolboxing",
    demoUrl: "https://oldskoolboxing.vercel.app/",
  },
  {
    title: "VS. — Enterprise Company Management Platform",
    category: "Web Development",
    date: "01/2026 – 04/2026",
    description: "A complete enterprise employee management web application featuring interactive dashboards for Admins, Managers, and Employees. Solves complex administrative workflows including task boards, leave requests, attendance tracking, and live notifications.",
    tech: ["Next.js", "React", "TypeScript", "Prisma", "SQLite", "Tailwind CSS", "Node.js", "pdf-parse"],
    challenges: "Configured role-based access control (RBAC) securely across 30+ APIs. Designed database architecture with 10 tables linked symmetrically. Implemented secure login with password hashing, session cookies, and safe file uploading.",
    features: [
      "AI screening engine reading candidate resume PDFs and scoring them to cut screening time by 90%.",
      "Interactive multi-dashboard role interface (Admin/Manager/Employee).",
      "Live dashboard notifications for system events and task updates.",
      "Cookie-based secure session auth and encrypted password storage."
    ],
    githubUrl: "https://github.com/vishalvijay-123/FullStackCompanywebsite",
  },
  {
    title: "Smart Hydroponics Automation System",
    category: "Embedded & IoT",
    date: "Internship Project",
    description: "Automated indoor hydroponic cultivation monitor that balances temperature, humidity, and water reservoirs using hardware sensors and relay pumps.",
    tech: ["ESP32", "C++", "Arduino IDE", "FastAPI", "SQLite", "Python", "Wi-Fi"],
    challenges: "Achieved continuous hardware operations and telemetry streams without microchip memory leaks or Wi-Fi disconnection hang-ups. Created efficient time-series database logging that operates smoothly in low-memory settings.",
    features: [
      "C++ firmware integrating multi-sensors (DHT22, water level) with 99.9% testing uptime.",
      "Relay controller system triggering irrigation pumps dynamically based on real-time sensor limits.",
      "FastAPI REST backend logging time-series telemetry data at 1-minute intervals.",
      "Historical data APIs and live websocket dashboard supporting remote pump override controls."
    ],
  },
  {
    title: "Web Application Security Assessments",
    category: "Cybersecurity",
    date: "Red Team Academy",
    description: "Executed thorough black-box penetration assessments across 5 staging web applications, mapping threat surfaces and evaluating defensive posture against real-world attack vectors.",
    tech: ["Burp Suite", "Nmap", "Kali Linux", "SQLmap", "Dirbuster"],
    challenges: "Analyzing complex web APIs and multi-step entry points to detect nuanced authorization and injection flaws without impacting service availability.",
    features: [
      "Identified critical OWASP Top 10 vulnerabilities including SQL injection, cross-site scripting (XSS), and CORS misconfigurations.",
      "Authored prioritized vulnerability remediation reports with CVSS severity indexing.",
      "Delivered reproducible proof-of-concept walkthroughs assisting developers in validating patches."
    ],
  },
  {
    title: "Custom Vulnerability CTF Box",
    category: "Cybersecurity",
    date: "Defensive Training",
    description: "Created and hosted a custom boot-to-root Linux challenge machine deployed in VirtualBox simulating a legacy target environment with complex vulnerability chains.",
    tech: ["VirtualBox", "Kali Linux", "Metasploit", "Burp Suite", "Linux Bash"],
    challenges: "Designing multi-stage exploit pathways that require logical progression and trigger real privilege escalation vectors without leaving unintended shortcuts.",
    features: [
      "Configured multi-step exploit chains including directory traversal flaws and outdated package privilege escalation.",
      "Designed specifically for hands-on cybersecurity training of student security analysts.",
      "Simulated real-world corporate vulnerabilities within a safe sandboxed environment."
    ],
  },
  {
    title: "USB Automation Device (ATtiny85)",
    category: "Embedded & IoT",
    date: "Hardware Project",
    description: "Prototyped a low-cost, hardware-based keystroke injection tool utilizing an ATtiny85 microcontroller programmed in low-level C++.",
    tech: ["ATtiny85", "C/C++", "Arduino IDE", "DigiKeyboard", "Hardware Design"],
    challenges: "Optimizing code size to fit within ATtiny85's limited 8KB flash space, while managing precise hardware delays to ensure reliable USB HID keyboard emulation across multiple operating systems.",
    features: [
      "Natively emulates a standard USB HID keyboard device upon insertion.",
      "Custom C++ payloads executing automated system diagnostics and setup tasks.",
      "Compact hardware footprint designed for physical penetration testing and system maintenance scripting."
    ],
  },
  {
    title: "Capture-the-Flag (CTF) Lab Environment",
    category: "Cybersecurity",
    date: "Lab Design",
    description: "Configured an isolated sandboxed virtualization environment containing target servers with known vulnerabilities to train security processes.",
    tech: ["VirtualBox", "Kali Linux", "Ubuntu Server", "pfSense", "Docker"],
    challenges: "Segmenting vulnerable hosts on host-only virtual adapters and firewall profiles to completely prevent active exploit payloads from leaking into local networks.",
    features: [
      "Virtual network interfaces segmented via custom pfSense rules.",
      "Multiple Linux servers configured with legacy packages for vulnerability escalation labs.",
      "Aggregates system security access logs for audit review."
    ],
  },
  {
    title: "Vision-Based Color-Sorting Robotic Arm",
    category: "Embedded & IoT",
    date: "Hardware Project",
    description: "Built a 4-DOF robotic arm prototype that sorted objects by color. Integrated a camera module with a Python computer vision script to detect and isolate object colors from live video, relaying motion commands over serial to an Arduino to actuate the servos and place items into color-matched boxes.",
    tech: ["Python", "OpenCV", "Arduino", "Camera Module", "Servo Motors (4x)", "Serial Communication", "C++"],
    challenges: "Overcoming real-world physical and optical hurdles: fluctuating ambient lighting caused inconsistent color thresholding in the camera feed, while mechanical servo calibration, gear slack, and gripper alignment made reliable pick-and-place precision tricky to stabilize.",
    features: [
      "Camera-driven color extraction using Python to identify and categorize objects by color from the video feed.",
      "Serial communication pipeline transmitting target coordinates and motor commands from the vision script to Arduino.",
      "4-DOF robotic arm (4 servos) driving multi-joint movements and gripper actuation.",
      "Automated sorting routine configured to deposit recognized colored items into designated collection boxes."
    ],
  },
  {
    title: "Splunk Log Analysis & Security Monitoring",
    category: "Cybersecurity",
    date: "Monitoring Setup",
    description: "Configured Splunk SIEM dashboards to aggregate, index, and monitor audit logs across distributed Linux and Windows endpoints.",
    tech: ["Splunk Enterprise", "SIEM", "Log Auditing", "Event Correlation", "Security Dashboards"],
    challenges: "Formulating custom Search Processing Language (SPL) queries that highlight brute force attempts and lateral movement patterns while avoiding alert fatigue.",
    features: [
      "Centralized index configurations tracking authentication events and shell commands.",
      "Dynamic dashboards charting anomaly counts, user logins, and failed auth vectors.",
      "Custom alert rules triggering alerts upon detecting critical access signatures."
    ],
  },
  {
    title: "ELK Stack Deployment & Traffic Geolocation",
    category: "Cybersecurity",
    date: "Data Pipeline",
    description: "Built a security intelligence dashboard using the Elastic Stack (ELK) to parse server connection logs and map incoming traffic geolocation details.",
    tech: ["Elasticsearch", "Logstash", "Kibana", "GeoIP", "Nginx Logs"],
    challenges: "Constructing custom Logstash grok patterns to accurately parse access logs and link IP addresses to geolocation datasets in real time.",
    features: [
      "Logstash parsing pipelines structuring web server access logs dynamically.",
      "GeoIP database filters adding geographical coordinates to index models.",
      "Kibana visualizers rendering traffic overlays and country-by-country density graphs."
    ],
  },
  {
    title: "Local Generative AI System (Offline)",
    category: "AI & Automation",
    date: "AI Pipeline",
    description: "Configured local private large language models (LLMs) and image generation interfaces using open-weights models to automate text analysis and image asset building.",
    tech: ["Ollama", "DeepSeek", "SDXL", "Local LLMs", "Python", "GPU Passthrough"],
    challenges: "Configuring hardware-level virtualization and GPU runtimes to support model loading and parallel token inference streams at stable parameters locally.",
    features: [
      "Ollama API backend hosting DeepSeek LLMs locally for sensitive data processing.",
      "Local image generation pipeline powered by SDXL models.",
      "Python scripts parsing resume databases locally using offline PDF extractors."
    ],
  },
  {
    title: "ESP32 Intercommunication Research",
    category: "Embedded & IoT",
    date: "Academic Research",
    description: "Researched peer-to-peer radio frequency network topologies utilizing ESP-NOW protocols to exchange data packages without cellular or router infrastructure.",
    tech: ["ESP32", "ESP-NOW", "C++ Firmware", "Mesh Topologies", "Radio Protocols"],
    challenges: "Mitigating packet collisions and packet loss percentages during simultaneous transmissions over peer-to-peer 2.4GHz radio bands.",
    features: [
      "Direct packet transmission with low latency overhead compared to classic Wi-Fi.",
      "Award-winning research paper outlining ESP32 multiroom intercom configurations.",
      "Low-power wake protocols extending standalone IoT battery operations."
    ],
  },
];

const CATEGORIES = ["All", "Web Development", "Cybersecurity", "Embedded & IoT", "AI & Automation"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  // Filter & Search Logic
  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web Development":
        return <Code className="w-4 h-4" />;
      case "Cybersecurity":
        return <ShieldAlert className="w-4 h-4" />;
      case "Embedded & IoT":
        return <Cpu className="w-4 h-4" />;
      case "AI & Automation":
        return <BrainCircuit className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            {getCategoryIcon(selectedCategory)}
            Portfolio Projects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100"
          >
            Systems I Have Engineered
          </motion.h2>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold tracking-wide rounded-xl border transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  selectedCategory === cat
                    ? "bg-emerald-500 text-slate-950 border-emerald-500 font-bold shadow-lg shadow-emerald-500/10"
                    : "bg-slate-900/60 text-slate-400 border-white/5 hover:border-white/10 hover:text-slate-200"
                }`}
              >
                {cat !== "All" && getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search project or stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-white/5 bg-slate-900/50 hover:bg-slate-900/70 focus:bg-slate-900 focus:border-emerald-500/50 text-sm text-slate-200 placeholder-slate-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-2xl p-6 flex flex-col justify-between glass-hover border-white/5 group relative overflow-hidden"
              >
                <div>
                  {/* Category Indicator */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                        {project.date}
                      </span>
                      {project.badge && (
                        <span className="px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-[9px] font-bold uppercase tracking-wider">
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-white/5 bg-white/5 text-slate-300 text-[10px] font-semibold">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-xl text-slate-100 group-hover:text-emerald-400 transition-colors mb-3 flex items-start gap-2 justify-between">
                    <span>{project.title}</span>
                    <ArrowDownRight className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Expanding block details */}
                  <div className="mb-6">
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
                      className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{expandedProject === project.title ? "Hide Technical Details" : "View Technical Details"}</span>
                    </button>

                    <AnimatePresence>
                      {expandedProject === project.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 flex flex-col gap-4 border-t border-white/5 mt-3 text-xs leading-relaxed">
                            <div>
                              <span className="font-bold text-slate-300 block mb-1">Challenges Solved:</span>
                              <span className="text-slate-400">{project.challenges}</span>
                            </div>
                            <div>
                              <span className="font-bold text-slate-300 block mb-1">Key Features:</span>
                              <ul className="list-disc list-inside text-slate-400 flex flex-col gap-1">
                                {project.features.map((feat, i) => (
                                  <li key={i}>{feat}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-semibold font-mono rounded bg-slate-900 border border-white/5 text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/5 hover:border-white/10 transition-colors cursor-pointer hover-target"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/30 transition-colors cursor-pointer hover-target"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <p className="font-display font-medium text-lg">No matching projects found.</p>
            <p className="text-sm mt-1">Try resetting your filter categories or checking your spelling.</p>
          </div>
        )}
      </div>
    </section>
  );
}
