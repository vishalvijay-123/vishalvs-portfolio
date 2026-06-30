"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MessageSquare, Terminal } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    
    // Fallback if no Web3Forms access key environment variable is configured
    if (!accessKey) {
      const mailtoUrl = `mailto:vishalvijay0369@gmail.com?subject=${encodeURIComponent(
        formState.subject
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
      )}`;
      
      window.location.href = mailtoUrl;
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden border-t border-white/5 bg-slate-950/40">
      {/* Background glow blob */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full glow-blur pointer-events-none" />

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
            <MessageSquare className="w-3.5 h-3.5" />
            Connect
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100"
          >
            Get In Touch
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-200">
              Let&apos;s Build Something Secure
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              I am open to discussions regarding full-stack software development, ethical penetration testing, embedded system prototyping, or local AI pipeline setup. Feel free to shoot me an email or find me on socials!
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:vishalvijay0369@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/20 hover:bg-slate-900/40 hover:border-emerald-500/20 transition-all group cursor-pointer hover-target"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-0.5">Email</span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                    vishalvijay0369@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/vishalvijay678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/20 hover:bg-slate-900/40 hover:border-indigo-500/20 transition-all group cursor-pointer hover-target"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-0.5">LinkedIn</span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-indigo-400 transition-colors">
                    linkedin.com/in/vishalvijay678
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/vishalvijay-123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/20 hover:bg-slate-900/40 hover:border-purple-500/20 transition-all group cursor-pointer hover-target"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-0.5">GitHub</span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-purple-400 transition-colors">
                    github.com/vishalvijay-123
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="glass rounded-2xl p-8 border-white/5 relative">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="px-4 py-3 rounded-xl border border-white/5 bg-slate-900/40 focus:bg-slate-900 focus:border-emerald-500/50 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="px-4 py-3 rounded-xl border border-white/5 bg-slate-900/40 focus:bg-slate-900 focus:border-emerald-500/50 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Subject
                  </label>
                  <input
                    required
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Collaboration proposal..."
                    className="px-4 py-3 rounded-xl border border-white/5 bg-slate-900/40 focus:bg-slate-900 focus:border-emerald-500/50 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Hey Vishal, let's talk about..."
                    className="px-4 py-3 rounded-xl border border-white/5 bg-slate-900/40 focus:bg-slate-900 focus:border-emerald-500/50 text-sm text-slate-200 placeholder-slate-600 outline-none resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 disabled:bg-slate-800 disabled:text-slate-500 shadow-lg shadow-emerald-500/10 cursor-pointer hover-target"
                >
                  {status === "submitting" ? (
                    <>
                      <Terminal className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : status === "success" ? (
                    <span>Message Sent!</span>
                  ) : status === "error" ? (
                    <span className="text-red-200">Failed to Send (Try Again)</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
