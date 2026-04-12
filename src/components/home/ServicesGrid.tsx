"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const serviceColors = [
  { bg: "from-indigo-500/8 to-violet-500/8", border: "#6366F1", num: "#6366F1" },
  { bg: "from-sky-500/8 to-blue-500/8",      border: "#0EA5E9", num: "#0EA5E9" },
  { bg: "from-emerald-500/8 to-teal-500/8",  border: "#10B981", num: "#10B981" },
  { bg: "from-amber-500/8 to-orange-500/8",  border: "#F59E0B", num: "#F59E0B" },
  { bg: "from-purple-500/8 to-pink-500/8",   border: "#A855F7", num: "#A855F7" },
  { bg: "from-rose-500/8 to-pink-500/8",     border: "#F43F5E", num: "#F43F5E" },
];

// Bento layout: first item is wide (2 cols), rest fill 1 col each
const spans = ["lg:col-span-2", "", "", "", "", "lg:col-span-2"];

export default function ServicesGrid() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            badge="AI Automation · AI Integration · Vibe Coding"
            title="Proven AI Solutions That Deliver Real Business Impact"
            subtitle="From Agentic AI & GenAI integration to AI-enabled apps and vibe coding MVPs — production-ready software that businesses across India, UK, USA & Gulf rely on every day."
          />
        </motion.div>

        {/* Bento grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {SERVICES.map((service, i) => {
            const c = serviceColors[i % serviceColors.length];
            return (
              <motion.div
                key={service.slug}
                className={spans[i] || ""}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link href={`/services/${service.slug}`} className="block h-full group">
                  <div
                    className={`relative h-full rounded-2xl border border-ink/7 bg-gradient-to-br ${c.bg} p-6 overflow-hidden transition-all duration-300 cursor-pointer hover:border-opacity-80`}
                    style={{ "--hover-border": c.border } as React.CSSProperties}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = c.border; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${c.border}18`; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = ""; (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
                  >
                    {/* Number */}
                    <span
                      className="absolute top-4 right-5 text-5xl font-black opacity-[0.07] select-none font-mono leading-none"
                      style={{ color: c.num }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform group-hover:scale-110"
                      style={{ background: `${c.border}15` }}
                    >
                      {service.icon}
                    </div>

                    <h3 className="font-bold text-lg text-ink mb-2 transition-colors group-hover:text-accent">
                      {service.title}
                    </h3>
                    <p className="text-sm text-ink-light leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Feature pills — visible on wide cards or hover */}
                    {i === 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 3).map((f) => (
                          <span
                            key={f}
                            className="text-xs px-2.5 py-1 rounded-full font-medium"
                            style={{ background: `${c.border}12`, color: c.border }}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5" style={{ color: c.border }}>
                      Explore
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
