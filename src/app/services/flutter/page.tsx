import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Flutter App Development Company India | iOS & Android | Saurabh Infosys",
  description: "Cross-platform iOS & Android Flutter apps by India's top Flutter developers. Trusted by 30K+ users globally. Deployed to App Store & Play Store. Ahmedabad, India.",
  keywords: ["Flutter app development India", "Flutter developer Ahmedabad", "iOS Android app development", "cross-platform mobile app India", "Flutter app company Gujarat", "mobile app development India", "hire Flutter developer India"],
  alternates: { canonical: "https://saurabhinfosys.com/services/flutter" },
  openGraph: { title: "Flutter App Development — Saurabh Infosys", description: "iOS & Android apps from one codebase. Trusted by clients across Hong Kong, USA & India. 4.9★ Clutch.", url: "https://saurabhinfosys.com/services/flutter", type: "website" },
  twitter: { card: "summary_large_image", title: "Flutter App Development | Saurabh Infosys", description: "Cross-platform iOS & Android apps. Trusted by 30K+ users globally." },
};

const service = SERVICES[2];

const featureIcons: string[] = ["📱", "🏪", "🔥", "🔔", "📡", "🚀"];

const portfolioItems = [
  {
    name: "Modern Dental Lab",
    country: "Hong Kong",
    flag: "🇭🇰",
    description:
      "Flutter app for dental lab management, serving 30,000+ dental professionals across 20 countries. Custom order flows, real-time status tracking, and multi-language support.",
    highlight: "30K+ customers · 20 countries",
    category: "Healthcare",
  },
  {
    name: "Curvd by CapriCurves",
    country: "USA",
    flag: "🇺🇸",
    description:
      "iOS & Android fitness app with personalised workout plans, progress tracking, and in-app purchases via RevenueCat. Live on both App Store and Play Store.",
    highlight: "Live on App Store & Play Store",
    category: "Health & Fitness",
  },
  {
    name: "School Bus Tracker",
    country: "India",
    flag: "🇮🇳",
    description:
      "Parent-facing Flutter app with live Google Maps bus tracking, estimated arrival notifications, and driver communication panel for school transport operators.",
    highlight: "Real-time GPS · Push Alerts",
    category: "Education / Transport",
  },
];

const platformBadges = [
  { label: "iOS", icon: "" },
  { label: "Android", icon: "" },
  { label: "App Store", icon: "" },
  { label: "Play Store", icon: "" },
];

export default function FlutterPage() {
  return (
    <main className="bg-bg text-ink font-dm">

      {/* ── Hero ── */}
      <section className="bg-bg pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-accent text-white text-xs font-syne font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            📱 Flutter Mobile Apps
          </span>
          <h1 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-ink mb-6 max-w-4xl">
            Cross-platform apps that{" "}
            <span className="text-accent">users love</span>
          </h1>
          <p className="text-lg md:text-xl text-ink/70 max-w-2xl mb-6 leading-relaxed">
            One codebase. Two stores. We&apos;ve shipped Flutter apps trusted by
            30,000+ customers across 20 countries — from Hong Kong&apos;s leading
            dental lab to Curvd, a live US fitness app on both the App Store and
            Play Store.
          </p>
          {/* Social proof strip */}
          <div className="flex flex-wrap gap-4 mb-10">
            <span className="inline-flex items-center gap-2 bg-card border border-ink/10 text-ink text-sm font-syne font-semibold px-4 py-2 rounded-full">
              🇭🇰 Modern Dental Lab — 30K+ customers
            </span>
            <span className="inline-flex items-center gap-2 bg-card border border-ink/10 text-ink text-sm font-syne font-semibold px-4 py-2 rounded-full">
              🇺🇸 Curvd — Live on both stores
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white font-syne font-semibold px-7 py-3.5 rounded-full hover:bg-accent-dark transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.856L0 24l6.335-1.51A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.732.89.933-3.636-.234-.374A9.818 9.818 0 1112 21.818z" />
              </svg>
              Start Your App
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border-2 border-ink text-ink font-syne font-semibold px-7 py-3.5 rounded-full hover:bg-ink hover:text-white transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ── Platform Badges ── */}
      <section className="bg-ink py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {/* iOS */}
            <div className="flex items-center gap-3 text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 opacity-80">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="font-syne font-semibold text-lg">iOS</span>
            </div>
            <div className="w-px h-8 bg-white/20 hidden md:block" />
            {/* Android */}
            <div className="flex items-center gap-3 text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 opacity-80">
                <path d="M17.523 15.341a.961.961 0 01-.96.961.961.961 0 01-.961-.96.961.961 0 01.96-.962.961.961 0 01.961.961zm-10.046 0a.961.961 0 01-.96.961.961.961 0 01-.961-.96.961.961 0 01.96-.962.961.961 0 01.961.961zm10.369-4.957l1.914-3.313a.397.397 0 00-.145-.543.397.397 0 00-.543.145l-1.938 3.355A11.44 11.44 0 0012 9.187c-1.783 0-3.465.422-4.934 1.16L5.128 7.02a.397.397 0 00-.543-.145.397.397 0 00-.145.543L6.354 10.73C3.647 12.27 1.837 15.11 1.837 18.37H22.16c0-3.26-1.81-6.1-4.314-7.986z" />
              </svg>
              <span className="font-syne font-semibold text-lg">Android</span>
            </div>
            <div className="w-px h-8 bg-white/20 hidden md:block" />
            {/* App Store */}
            <div className="flex items-center gap-3 text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 opacity-80">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="font-syne font-semibold text-lg">App Store</span>
            </div>
            <div className="w-px h-8 bg-white/20 hidden md:block" />
            {/* Play Store */}
            <div className="flex items-center gap-3 text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 opacity-80">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199a1 1 0 010 1.732L15.394 12l2.304-2.303zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
              </svg>
              <span className="font-syne font-semibold text-lg">Play Store</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-card py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-syne font-bold text-xs uppercase tracking-widest text-accent mb-3">
            What We Deliver
          </p>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ink mb-12">
            Production-grade Flutter, end to end
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <div
                key={feature}
                className="bg-bg rounded-2xl p-6 border border-ink/8 hover:border-accent/40 hover:shadow-lg transition-all group"
              >
                <span className="text-3xl mb-4 block">{featureIcons[i]}</span>
                <p className="font-syne font-semibold text-ink text-lg group-hover:text-accent transition-colors">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio Highlights ── */}
      <section className="bg-bg py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-syne font-bold text-xs uppercase tracking-widest text-accent mb-3">
            Portfolio Highlights
          </p>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ink mb-12">
            Apps we&apos;ve shipped
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.name}
                className="bg-card rounded-2xl overflow-hidden border border-ink/8 hover:shadow-xl transition-shadow group"
              >
                <div className="bg-ink p-6 flex items-center justify-between">
                  <span className="text-4xl">{item.flag}</span>
                  <span className="text-white/40 font-syne text-xs uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-syne font-bold text-xl text-ink mb-1">
                    {item.name}
                  </h3>
                  <p className="text-accent text-xs font-syne font-semibold uppercase tracking-wide mb-3">
                    {item.country}
                  </p>
                  <p className="text-ink/65 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="inline-block bg-accent/10 text-accent text-xs font-syne font-semibold px-3 py-1 rounded-full">
                    {item.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="bg-card py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-syne font-bold text-xs uppercase tracking-widest text-accent mb-3">
            Use Cases
          </p>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ink mb-12">
            What we build for you
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.useCases.map((uc) => (
              <div
                key={uc.title}
                className="bg-bg rounded-2xl p-8 border border-ink/8"
              >
                <div className="w-10 h-1 bg-accent rounded-full mb-5" />
                <h3 className="font-syne font-bold text-xl text-ink mb-3">
                  {uc.title}
                </h3>
                <p className="text-ink/65 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-ink py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-5">
            Ready to build your Flutter app?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            From your first Figma screen to live on both stores — we handle it
            all. Let&apos;s talk about your app idea today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white font-syne font-semibold px-8 py-4 rounded-full hover:bg-accent-dark transition-colors text-lg"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-syne font-semibold px-8 py-4 rounded-full hover:border-white transition-colors text-lg"
            >
              Send an Email
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
