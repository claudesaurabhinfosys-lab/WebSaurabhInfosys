"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { COMPANY } from "@/lib/data";

const floatingTech = ["React", "Flutter", "Next.js", "Python", "Node.js", "FastAPI", "PostgreSQL", "Firebase", "AWS", "Docker"];

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 gradient-bg-animated" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
           style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

      {/* Floating blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-[80px] animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-[100px] animate-float2 pointer-events-none" />

      {/* Floating tech badges — hidden on mobile to prevent overflow */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none overflow-hidden">
        {floatingTech.map((tech, i) => (
          <motion.div
            key={tech}
            className="absolute glass-strong rounded-full px-3 py-1.5 text-xs font-semibold text-white/60"
            style={{
              top: `${10 + (i * 8.5) % 80}%`,
              left: `${(i % 2 === 0 ? 3 : 82) + (i * 1.5) % 6}%`,
            }}
            animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
            transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          >
            {tech}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/8 text-white/90 text-sm font-semibold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            Ready to build something great?
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
            Let&apos;s Build
            <br />
            <span className="opacity-75">Something Remarkable.</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/65 max-w-xl mx-auto mb-10 leading-relaxed">
            2-week MVPs to enterprise platforms — we move fast, think deep, and build software that lasts for years.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <motion.a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-accent bg-white hover:bg-white/95 transition-colors text-base shadow-2xl shadow-black/20"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Start on WhatsApp
            </motion.a>

            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold border border-white/20 text-white hover:bg-white/10 transition-colors text-base"
              >
                Send a Project Brief
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Mini trust row */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <span>⚡ Typical response: &lt; 2 hours</span>
            <span>🌏 India · UK · USA · Gulf</span>
            <span>⭐ 4.9★ on Clutch</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
