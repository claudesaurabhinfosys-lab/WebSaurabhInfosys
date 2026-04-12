"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 80, suffix: "+", label: "Clients Worldwide", icon: "🌍" },
  { value: 50, suffix: "+", label: "Projects Shipped", icon: "🚀" },
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
    <section className="relative py-20 border-y border-ink/6 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-ink/6 rounded-2xl overflow-hidden border border-ink/6 [&>*:last-child]:col-span-2 sm:[&>*:last-child]:col-span-1">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-surface flex flex-col items-center justify-center text-center px-6 py-8 group hover:bg-card-hover transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1.5 tabular-nums">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} isFloat={stat.isFloat} />
              </div>
              <p className="text-xs sm:text-sm text-ink-light font-medium tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
