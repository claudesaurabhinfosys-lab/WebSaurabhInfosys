"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/data";

const services = [
  {
    label: "AI Automation",
    color: "#6366F1",
    code: [
      { text: "$ saurabh-infosys run:agent", type: "cmd" },
      { text: "▶  Connecting to WhatsApp Business API...", type: "info" },
      { text: "▶  Loading RAG knowledge base (2,400 docs)", type: "info" },
      { text: "✔  Agent online — handling 847 queries/day", type: "success" },
      { text: 'User: "What is my order status?"', type: "dim" },
      { text: 'Bot:  "Order #4821 ships in 2 hrs 🚚"', type: "accent" },
    ],
  },
  {
    label: "AI Integration",
    color: "#A855F7",
    code: [
      { text: "$ saurabh-infosys integrate:ai --target=crm", type: "cmd" },
      { text: "▶  Connecting to existing CRM API...", type: "info" },
      { text: "▶  Injecting AI layer — GPT-4o + embeddings", type: "info" },
      { text: "✔  Smart lead scoring active", type: "success" },
      { text: "✔  Auto-replies enabled for 23 templates", type: "success" },
      { text: "▶  AI integration live — 0 code changes needed", type: "accent" },
    ],
  },
  {
    label: "Vibe Coding",
    color: "#F59E0B",
    code: [
      { text: "$ vibe-code --mvp --deadline=14days", type: "cmd" },
      { text: "▶  Scaffolding Next.js + Supabase...", type: "info" },
      { text: "▶  AI generating components (Day 3)...", type: "info" },
      { text: "✔  Auth, payments & dashboard done", type: "success" },
      { text: "✔  MVP live on Day 14 🚀", type: "success" },
      { text: "▶  Starting ₹75,000 — full source code yours", type: "accent" },
    ],
  },
  {
    label: "AI-Enabled Apps",
    color: "#0EA5E9",
    code: [
      { text: "$ flutter build --ai-features --release", type: "cmd" },
      { text: "▶  Compiling for iOS + Android...", type: "info" },
      { text: "▶  Integrating AI chat + recommendations...", type: "info" },
      { text: "✔  Build complete — AI features active", type: "success" },
      { text: "✔  Smart search, chatbot & analytics live", type: "success" },
      { text: "▶  Uploading to App Store & Play Store...", type: "accent" },
    ],
  },
];

type LineType = "cmd" | "info" | "success" | "dim" | "accent";

const lineClass: Record<LineType, string> = {
  cmd:     "text-white font-semibold",
  info:    "text-zinc-400",
  success: "text-emerald-400",
  dim:     "text-zinc-500",
  accent:  "text-indigo-400",
};

function TerminalWindow() {
  const [svcIdx, setSvcIdx] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    setVisibleLines(0);
    const t = setInterval(() => {
      setVisibleLines((v) => {
        if (v >= services[svcIdx].code.length) {
          clearInterval(t);
          return v;
        }
        return v + 1;
      });
    }, 420);
    return () => clearInterval(t);
  }, [svcIdx]);

  useEffect(() => {
    const t = setInterval(() => setSvcIdx((i) => (i + 1) % services.length), 5000);
    return () => clearInterval(t);
  }, []);

  const svc = services[svcIdx];

  return (
    <div className="w-full max-w-md xl:max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-white/8"
         style={{ boxShadow: `0 0 80px ${svc.color}22, 0 40px 80px rgba(0,0,0,0.4)` }}>
      {/* Chrome */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-white/6">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full terminal-dot-red" />
          <div className="w-3 h-3 rounded-full terminal-dot-yellow" />
          <div className="w-3 h-3 rounded-full terminal-dot-green" />
        </div>
        <div className="flex items-center gap-2">
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => setSvcIdx(i)}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                i === svcIdx ? "text-white" : "text-zinc-500 hover:text-zinc-300"
              }`}
              style={i === svcIdx ? { background: `${s.color}22`, color: s.color } : {}}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
      {/* Terminal body */}
      <div className="bg-zinc-950 px-5 py-5 font-mono text-[13px] leading-6 min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={svcIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {svc.code.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex items-start gap-2 ${lineClass[line.type as LineType]}`}
              >
                {line.type === "cmd" && <span className="text-indigo-500 shrink-0">~</span>}
                {line.type !== "cmd" && <span className="shrink-0 opacity-0">~</span>}
                <span>{line.text}</span>
              </motion.div>
            ))}
            {visibleLines < svc.code.length && (
              <span className="animate-blink text-indigo-400">▋</span>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Status bar */}
      <div className="px-5 py-2 bg-zinc-900 flex items-center gap-3 border-t border-white/5">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-glow-pulse" />
        <span className="text-xs text-zinc-500 font-mono">saurabh-infosys.com</span>
        <span className="ml-auto text-xs font-mono" style={{ color: svc.color }}>
          {svc.label}
        </span>
      </div>
    </div>
  );
}

const words = ["AI Automation", "AI Integration", "Vibe Coding", "AI-Enabled Apps", "Flutter Apps", "SaaS Platforms"];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % words.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] left-[15%] w-[800px] h-[800px] rounded-full bg-accent/8 blur-[160px] animate-float" />
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/8 blur-[140px] animate-float2" />
        <div className="absolute -bottom-[20%] left-[40%] w-[500px] h-[500px] rounded-full bg-blue-600/6 blur-[120px] animate-float" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left column */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/8 mb-8"
            >
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-accent text-sm font-semibold">Available for new projects</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="block text-ink">We Ship</span>

              <span className="block relative h-[2.5em] md:h-[1.15em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIdx}
                    className="gradient-text absolute left-0"
                    initial={{ y: 50, opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -50, opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {words[wordIdx]}
                  </motion.span>
                </AnimatePresence>
              </span>

              <span className="block text-ink">That Scale.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-ink-light text-lg xl:text-xl max-w-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Saurabh Infosys is an AI-first software studio in Ahmedabad. We specialise in AI automation, AI integration, vibe coding, and AI-enabled apps — serving startups and enterprises across India, UK, USA and the Gulf.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 mb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white gradient-bg shadow-lg shadow-accent/25 text-[15px]"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </motion.a>

              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold border border-ink/10 text-ink hover:border-accent/40 hover:text-accent transition-colors text-[15px]"
                >
                  View Portfolio
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust row */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                { n: "80+", l: "Clients" },
                { n: "4.9★", l: "Clutch" },
                { n: "50+", l: "Projects" },
                { n: "4+", l: "Years" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-lg font-extrabold text-accent">{s.n}</span>
                  <span className="text-sm text-ink-light">{s.l}</span>
                  {i < 3 && <span className="w-px h-4 bg-ink/10 ml-2" />}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — Terminal */}
          <motion.div
            className="hidden lg:flex justify-end"
            initial={{ opacity: 0, x: 40, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <TerminalWindow />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-light/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
