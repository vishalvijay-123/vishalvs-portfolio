"use client";

import Link from "next/link";
import { ShieldAlert, Terminal, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Glow Blur backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full glow-blur pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="glass border-red-500/20 max-w-md p-8 rounded-2xl flex flex-col items-center relative z-10"
      >
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-6 animate-pulse">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-red-500 px-2.5 py-1 rounded border border-red-500/20 bg-red-500/5 mb-4">
          Status Code: 404
        </span>

        <h1 className="font-display font-extrabold text-2xl text-slate-100 mb-3">
          Access Denied
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed mb-8 font-mono">
          The requested route was not resolved. Security protocols have logged this request. Please return to a secure endpoint.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-red-500/30 transition-all duration-300 w-full cursor-pointer hover-target"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Safe Zone</span>
        </Link>
      </motion.div>

      {/* Subtle bottom details */}
      <div className="absolute bottom-6 font-mono text-[10px] text-slate-600 flex items-center gap-1.5 pointer-events-none">
        <Terminal className="w-3.5 h-3.5" />
        <span>VVS_SECURE_ROUTER // V1.0.0</span>
      </div>
    </div>
  );
}
