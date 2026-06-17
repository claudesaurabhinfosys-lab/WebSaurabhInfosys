import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services | Saurabh Infosys — AI, Flutter, SaaS & More",
  description: "Explore all services offered by Saurabh Infosys: AI Agents, Vibe Coding MVPs, Flutter Apps, GPS & Fleet Systems, SaaS Platforms, and Digital Marketing tools. 100+ projects delivered.",
  keywords: ["software development services India", "AI agents development", "Flutter app development", "SaaS platform development", "GPS fleet management", "digital marketing tools"],
  alternates: { canonical: "https://saurabhinfosys.com/services" },
  openGraph: {
    title: "Our Services — Saurabh Infosys",
    description: "AI Agents, Flutter Apps, SaaS Platforms, GPS Systems & more. 100+ projects delivered for clients in India, UK, USA & Gulf.",
    url: "https://saurabhinfosys.com/services",
    type: "website",
  },
};

const serviceColors = [
  { bg: "from-indigo-500/8 to-violet-500/8", border: "#6366F1", iconBg: "#6366F115" },
  { bg: "from-sky-500/8 to-blue-500/8",      border: "#0EA5E9", iconBg: "#0EA5E915" },
  { bg: "from-emerald-500/8 to-teal-500/8",  border: "#10B981", iconBg: "#10B98115" },
  { bg: "from-amber-500/8 to-orange-500/8",  border: "#F59E0B", iconBg: "#F59E0B15" },
  { bg: "from-purple-500/8 to-pink-500/8",   border: "#A855F7", iconBg: "#A855F715" },
  { bg: "from-rose-500/8 to-pink-500/8",     border: "#F43F5E", iconBg: "#F43F5E15" },
];

export default function ServicesPage() {
  return (
    <main className="font-dm">
      {/* Hero */}
      <section className="bg-gradient-to-br from-bg to-gray-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-syne font-semibold text-sm uppercase tracking-widest mb-4">
            What We Build
          </p>
          <h1 className="font-syne text-4xl md:text-6xl font-bold text-ink leading-tight max-w-4xl mx-auto">
            Services that drive{" "}
            <span className="text-accent">real business impact</span>
          </h1>
          <p className="mt-6 text-ink-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From AI automation to mobile apps and SaaS platforms — we ship production-ready software that businesses across India, UK, USA &amp; Gulf rely on every day.
          </p>
          <div className="mt-4 flex items-center justify-center gap-6 text-sm text-ink-light flex-wrap">
            <span className="flex items-center gap-1.5">
              <span className="text-accent font-bold">100+</span> projects delivered
            </span>
            <span className="w-1 h-1 rounded-full bg-ink/20 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <span className="text-accent font-bold">80+</span> clients worldwide
            </span>
            <span className="w-1 h-1 rounded-full bg-ink/20 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <span className="text-accent font-bold">4.9&#x2605;</span> on Clutch
            </span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-bg py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const c = serviceColors[i % serviceColors.length];
              return (
                <div
                  key={service.slug}
                  className={`relative rounded-2xl border border-ink/8 bg-gradient-to-br ${c.bg} bg-surface p-7 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = c.border;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${c.border}18`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  {/* Number watermark */}
                  <span
                    className="absolute top-4 right-5 text-5xl font-black opacity-[0.06] select-none font-mono leading-none"
                    style={{ color: c.border }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: c.iconBg }}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h2 className="font-syne font-bold text-xl text-ink mb-3 transition-colors group-hover:text-accent">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-ink-light leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
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

                  {/* CTA */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3"
                    style={{ color: c.border }}
                  >
                    Learn More
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-accent to-accent2 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-white mb-4">
            Not sure which service fits your needs?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            WhatsApp us — we&apos;ll give you honest advice within 2 hours. No sales pitch, just clarity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/918735001217"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-accent font-syne font-bold px-8 py-4 rounded-xl hover:bg-white/95 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-syne font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
