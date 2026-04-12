"use client";

import { motion } from "framer-motion";
import { CLIENTS } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const duplicated = [...CLIENTS, ...CLIENTS];

export default function ClientLogos() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            badge="Trusted By"
            title="Clients Across 4 Continents"
            subtitle="Startups to enterprises — we've built for businesses in India, Australia, UK, USA and the Gulf."
          />
        </motion.div>

        {/* Marquee */}
        <div className="mt-12 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 animate-marquee w-max">
            {duplicated.map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 rounded-2xl border border-ink/8 bg-card p-5 flex flex-col gap-2"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-ink">{client.name}</span>
                  <span className="text-xs text-ink-light bg-ink/5 px-2 py-0.5 rounded-full">{client.country}</span>
                </div>
                <p className="text-xs text-ink-light leading-relaxed">{client.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
