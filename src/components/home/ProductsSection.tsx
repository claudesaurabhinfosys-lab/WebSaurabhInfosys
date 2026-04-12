"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const config = [
  {
    gradient: "from-blue-600 to-indigo-600",
    lightBg: "from-blue-500/6 to-indigo-500/6",
    icon: "🏫",
    badge: "Education",
  },
  {
    gradient: "from-violet-600 to-purple-600",
    lightBg: "from-violet-500/6 to-purple-500/6",
    icon: "🏘️",
    badge: "PropTech",
  },
  {
    gradient: "from-emerald-600 to-teal-600",
    lightBg: "from-emerald-500/6 to-teal-500/6",
    icon: "📢",
    badge: "MarTech",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            badge="Our Products"
            title="Software We Own & Operate"
            subtitle="Three production SaaS products used by hundreds of businesses across India — built and maintained by our team."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {PRODUCTS.map((product, i) => {
            const c = config[i];
            return (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Link href={`/products/${product.slug}`} className="block h-full group">
                  <div className={`relative h-full rounded-2xl border border-ink/7 bg-gradient-to-br ${c.lightBg} overflow-hidden`}
                       style={{ boxShadow: "0 0 0 1px var(--border)" }}>

                    {/* Top gradient bar */}
                    <div className={`h-1.5 w-full bg-gradient-to-r ${c.gradient}`} />

                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-5">
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center text-2xl shadow-lg`}
                        >
                          {c.icon}
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-ink/6 text-ink-light">
                          {c.badge}
                        </span>
                      </div>

                      <h3 className="font-extrabold text-xl text-ink mb-1 group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-ink-light mb-5 leading-relaxed">{product.tagline}</p>

                      {/* Price + CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-ink/6">
                        <div>
                          <span className="text-xl font-extrabold text-ink">{product.price}</span>
                          {product.priceNote && (
                            <p className="text-xs text-ink-light mt-0.5">{product.priceNote}</p>
                          )}
                        </div>
                        <div className={`flex items-center gap-1.5 text-sm font-bold bg-gradient-to-r ${c.gradient} bg-clip-text text-transparent group-hover:gap-2.5 transition-all`}>
                          Learn more
                          <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                               style={{ stroke: "url(#grad)" }}>
                            <defs>
                              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#6366F1" />
                                <stop offset="100%" stopColor="#8B5CF6" />
                              </linearGradient>
                            </defs>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
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
