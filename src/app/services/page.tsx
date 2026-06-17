import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | Saurabh Infosys — AI, Flutter, SaaS & More",
  description: "Explore all services offered by Saurabh Infosys: AI Agents, Vibe Coding MVPs, Flutter Apps, GPS & Fleet Systems, SaaS Platforms, and Digital Marketing. 150+ projects delivered.",
  keywords: ["software development services India", "AI agents development", "Flutter app development", "SaaS platform development", "GPS fleet management", "digital marketing India"],
  alternates: { canonical: "https://saurabhinfosys.com/services" },
  openGraph: {
    title: "Our Services — Saurabh Infosys",
    description: "AI Agents, Flutter Apps, SaaS Platforms, GPS Systems & more. 150+ projects delivered for clients in India, UK, USA & Gulf.",
    url: "https://saurabhinfosys.com/services",
    type: "website",
  },
};

const serviceList = [
  {
    slug: "ai-agents",
    icon: "🤖",
    title: "AI Agents & Bots",
    description: "WhatsApp automation bots, RAG knowledge bases, voice agents, and custom AI workflows that run your business operations 24/7 without human intervention.",
    features: ["WhatsApp Bots", "RAG Systems", "Voice Agents", "CRM Integration"],
    gradient: "from-indigo-500/8 to-violet-500/8",
  },
  {
    slug: "vibe-coding",
    icon: "⚡",
    title: "Vibe Coding / MVPs",
    description: "Ship a fully functional MVP in 2 weeks. We use AI-assisted development to move fast without cutting corners — your idea, live and working in record time.",
    features: ["2-Week MVPs", "Next.js & Supabase", "Auth & Payments", "Full Source Code"],
    gradient: "from-sky-500/8 to-blue-500/8",
  },
  {
    slug: "flutter",
    icon: "📱",
    title: "Flutter Apps",
    description: "Cross-platform mobile apps for iOS and Android from a single codebase. Beautiful UI, native performance, and AI features built in from day one.",
    features: ["iOS & Android", "AI Features", "Offline Support", "App Store Deploy"],
    gradient: "from-emerald-500/8 to-teal-500/8",
  },
  {
    slug: "gps",
    icon: "🗺️",
    title: "GPS & Fleet Systems",
    description: "Real-time vehicle tracking, route optimisation, driver analytics, and maintenance scheduling for logistics and transport businesses.",
    features: ["Live Tracking", "Route Optimisation", "Driver Analytics", "Maintenance Alerts"],
    gradient: "from-amber-500/8 to-orange-500/8",
  },
  {
    slug: "saas",
    icon: "☁️",
    title: "SaaS Platforms",
    description: "Multi-tenant SaaS products with subscription billing, role-based access, dashboards, and everything needed to build and scale a software business.",
    features: ["Multi-Tenant", "Stripe Billing", "Admin Dashboard", "API-First"],
    gradient: "from-purple-500/8 to-pink-500/8",
  },
  {
    slug: "digital-marketing",
    icon: "📣",
    title: "Digital Marketing",
    description: "AI-powered bulk WhatsApp, SMS, and email marketing campaigns. Reach your customers where they are and track results in real time.",
    features: ["Bulk WhatsApp", "SMS Campaigns", "Email Marketing", "Analytics"],
    gradient: "from-rose-500/8 to-pink-500/8",
  },
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
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-ink-light flex-wrap">
            <span className="flex items-center gap-1.5">
              <span className="text-accent font-bold">150+</span> Projects Delivered
            </span>
            <span className="w-1 h-1 rounded-full bg-ink/20 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <span className="text-accent font-bold">80+</span> Clients Worldwide
            </span>
            <span className="w-1 h-1 rounded-full bg-ink/20 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <span className="text-accent font-bold">4.9★</span> Clutch Rating
            </span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-bg py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceList.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`relative rounded-2xl border border-ink/8 bg-gradient-to-br ${service.gradient} p-7 flex flex-col hover:shadow-xl hover:-translate-y-1.5 hover:border-accent/30 transition-all duration-300 group`}
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-5 text-5xl font-black opacity-[0.06] select-none font-mono leading-none text-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/70 border border-ink/6 flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                  {service.icon}
                </div>

                {/* Title */}
                <h2 className="font-syne font-bold text-xl text-ink mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-ink-light leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((f) => (
                    <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-white/60 border border-ink/8 text-ink-light font-medium">
                      {f}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
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
