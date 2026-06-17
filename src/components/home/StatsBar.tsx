"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 80, suffix: "+", label: "Clients Worldwide", icon: "🌍" },
  { value: 100, suffix: "+", label: "Projects Shipped", icon: "🚀" },
  { value: 4,  suffix: "+", label: "Years Building", icon: "⚙️" },
  { value: 4.9, suffix: "★", label: "Clutch Rating", icon: "⭐", isFloat: true },
  { value: 3,  suffix: "",  label: "Own SaaS Products", icon: "📦" },
];

function AnimatedNumber({ value, suffix, isFloat }: { value: number; suffix: string; isFloat?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const ctrl = animate(0, value, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent = isFloat ? v.toFixed(1) : Math.floor(v).toString();
        }
      },
    });
    return ctrl.stop;
  }, [inView, value, isFloat]);

  return (
    <div ref={containerRef}>
      <span ref={ref}>0</span>
      {suffix}
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="relative py-24 border-y border-ink/6 overflow-hidden">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-indigo-50/30 to-violet-50/20" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      {/* Accent glow orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-ink/6 rounded-2xl overflow-hidden border border-ink/6 shadow-sm [&>*:last-child]:col-span-2 sm:[&>*:last-child]:col-span-1">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-surface/90 backdrop-blur-sm flex flex-col items-center justify-center text-center px-6 py-10 group hover:bg-white transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-4xl sm:text-5xl font-black gradient-text mb-2 tabular-nums tracking-tight font-syne">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} isFloat={stat.isFloat} />
              </div>
              <p className="text-xs sm:text-sm text-ink-light font-semibold tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
