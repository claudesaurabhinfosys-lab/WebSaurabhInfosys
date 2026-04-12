"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const avatarColors = [
  "from-indigo-500 to-violet-500",
  "from-sky-500 to-blue-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
];

export default function Testimonials() {
  const featured = TESTIMONIALS[0];
  const rest = TESTIMONIALS.slice(1);

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            badge="Client Stories"
            title="Trusted by Builders Worldwide"
            subtitle="Every review verified on Clutch.co — our 4.9★ rating reflects work we're genuinely proud of."
          />
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          className="mt-12 mb-5 relative rounded-3xl border border-accent/15 bg-gradient-to-br from-accent/5 to-purple-500/5 p-8 sm:p-10 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Giant quote mark */}
          <div className="absolute top-6 right-8 text-[120px] font-serif text-accent/8 leading-none select-none pointer-events-none">"</div>

          <div className="flex gap-1 mb-5">
            {Array(5).fill(0).map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-xl sm:text-2xl font-medium text-ink leading-relaxed mb-6 max-w-3xl">
            &ldquo;{featured.text}&rdquo;
          </p>

          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarColors[0]} flex items-center justify-center text-white text-base font-bold shrink-0`}>
              {featured.name.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-ink">{featured.name}</p>
              <p className="text-sm text-ink-light">{featured.role} · {featured.country}</p>
            </div>
          </div>
        </motion.div>

        {/* Rest of testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((t, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-ink/7 bg-card p-5 overflow-hidden group hover:border-accent/25 transition-colors"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -3 }}
            >
              <div className="flex gap-0.5 mb-3">
                {Array(5).fill(0).map((_, s) => (
                  <svg key={s} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-ink-light leading-relaxed mb-4 line-clamp-4">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-2.5 mt-auto">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${avatarColors[(i + 1) % avatarColors.length]} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-bold text-ink leading-tight">{t.name}</p>
                  <p className="text-xs text-ink-light leading-tight mt-0.5">{t.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clutch CTA */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a href="https://clutch.co" target="_blank" rel="noopener noreferrer"
             className="group inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-ink/8 bg-surface hover:border-accent/30 transition-all hover:shadow-lg hover:shadow-accent/8">
            <span className="text-xl">⭐</span>
            <div>
              <p className="text-sm font-bold text-ink group-hover:text-accent transition-colors">4.9 / 5.0 on Clutch.co</p>
              <p className="text-xs text-ink-light">33+ verified client reviews</p>
            </div>
            <svg className="w-4 h-4 text-ink-light group-hover:text-accent group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
