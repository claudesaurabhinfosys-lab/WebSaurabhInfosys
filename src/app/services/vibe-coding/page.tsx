import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, COMPANY } from "@/lib/data";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is vibe coding?",
      acceptedAnswer: { "@type": "Answer", text: "Vibe coding is an AI-accelerated software development approach where AI tools do heavy lifting — writing code, generating UI, and scaffolding backends — allowing developers to ship 5–10x faster. Saurabh Infosys uses vibe coding to deliver production-ready MVPs in just 2 weeks." },
    },
    {
      "@type": "Question",
      name: "How much does MVP development cost in India?",
      acceptedAnswer: { "@type": "Answer", text: "Our MVP development starts from ₹75,000 and includes a fully production-ready app, admin dashboard, payment integration, and full source code — delivered in 14 days." },
    },
    {
      "@type": "Question",
      name: "What are AI-enabled apps?",
      acceptedAnswer: { "@type": "Answer", text: "AI-enabled apps are mobile or web applications with built-in AI features — smart search, AI chatbots, personalised recommendations, automation, or document processing. We build AI-enabled apps for startups and enterprises across India, UK, USA and the Gulf." },
    },
    {
      "@type": "Question",
      name: "How fast can you build an AI-enabled app?",
      acceptedAnswer: { "@type": "Answer", text: "Using vibe coding and AI-accelerated development, we can ship a basic AI-enabled app in 2 weeks. Apps with advanced AI features like RAG, voice, or custom models typically take 3–5 weeks." },
    },
  ],
};

export const metadata: Metadata = {
  title: "Vibe Coding & AI-Enabled App Development India | ₹75,000 | Saurabh Infosys",
  description: "India's #1 vibe coding studio — ship AI-enabled apps & MVPs in 2 weeks from ₹75,000. AI-accelerated development using latest AI tools. Trusted by startups across India, UK & USA.",
  keywords: [
    "vibe coding India",
    "vibe coding services",
    "AI enabled app development India",
    "AI-enabled apps India",
    "MVP development India",
    "rapid MVP development India",
    "AI-accelerated development",
    "build AI app 2 weeks",
    "vibe coding company India",
    "AI app development Ahmedabad",
    "startup MVP India",
    "build MVP 2 weeks",
  ],
  alternates: { canonical: "https://saurabhinfosys.com/services/vibe-coding" },
  openGraph: { title: "Vibe Coding & AI-Enabled Apps — Saurabh Infosys", description: "India's #1 vibe coding studio. Ship AI-enabled apps in 2 weeks from ₹75,000. AI-accelerated, no hidden costs.", url: "https://saurabhinfosys.com/services/vibe-coding", type: "website" },
  twitter: { card: "summary_large_image", title: "Vibe Coding & AI-Enabled Apps | Saurabh Infosys", description: "Vibe coding & AI-enabled app development. ₹75,000 MVP in 2 weeks. India's AI-first studio." },
};

const service = SERVICES[1];

const featureIcons: string[] = ["⚡", "🧱", "🗄️", "💳", "📊", "🛟"];

const week1Tasks = ["Discovery & Requirements", "UI/UX Design", "Tech Stack Setup"];
const week2Tasks = ["Core Feature Build", "Testing & QA", "Deploy & Handoff"];

export default function VibeCodingPage() {
  return (
    <main className="bg-bg text-ink font-dm">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <section className="bg-bg pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-accent text-white text-xs font-syne font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            ⚡ Vibe Coding / AI-Enabled Apps
          </span>
          <h1 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-ink mb-6 max-w-4xl">
            Vibe coding &amp; AI-enabled apps in{" "}
            <span className="text-accent">2 weeks</span>
          </h1>
          <p className="text-lg md:text-xl text-ink/70 max-w-2xl mb-10 leading-relaxed">
            India&apos;s leading vibe coding studio — we use AI-accelerated development to build production-ready AI-enabled apps and MVPs at a fraction of traditional cost. Validate your idea before the market moves on.
          </p>
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
              Let&apos;s Build It
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

      {/* ── Pricing Callout ── */}
      <section className="bg-accent py-14 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-syne font-bold text-white text-2xl md:text-3xl">
              Starting from ₹75,000
            </p>
            <p className="text-white/80 text-lg mt-1">
              MVP delivered in 14 days. No hidden costs. Full source code included.
            </p>
          </div>
          <a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center bg-white text-accent font-syne font-bold px-7 py-3.5 rounded-full hover:bg-ink hover:text-white transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-card py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-syne font-bold text-xs uppercase tracking-widest text-accent mb-3">
            What&apos;s Included
          </p>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ink mb-12">
            A complete product, not just code
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

      {/* ── Timeline Visual ── */}
      <section className="bg-bg py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-syne font-bold text-xs uppercase tracking-widest text-accent mb-3">
            Timeline
          </p>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ink mb-12">
            14 days. Two focused sprints.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Week 1 */}
            <div className="bg-card rounded-2xl p-8 border border-ink/8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="font-syne font-bold text-white text-sm">W1</span>
                </div>
                <div>
                  <p className="font-syne font-bold text-ink text-lg">Week 1</p>
                  <p className="text-ink/50 text-sm">Days 1–7</p>
                </div>
              </div>
              <ul className="space-y-3">
                {week1Tasks.map((task) => (
                  <li key={task} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="text-ink/80">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Week 2 */}
            <div className="bg-ink rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="font-syne font-bold text-white text-sm">W2</span>
                </div>
                <div>
                  <p className="font-syne font-bold text-white text-lg">Week 2</p>
                  <p className="text-white/50 text-sm">Days 8–14</p>
                </div>
              </div>
              <ul className="space-y-3">
                {week2Tasks.map((task) => (
                  <li key={task} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="text-white/80">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-ink/50 text-sm">
            On Day 14 you receive a live URL, full source code, and a handoff
            call. No surprises.
          </p>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="bg-card py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-syne font-bold text-xs uppercase tracking-widest text-accent mb-3">
            Use Cases
          </p>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ink mb-12">
            Who builds MVPs with us
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

      {/* ── FAQ ── */}
      <section className="bg-bg py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-syne font-bold text-xs uppercase tracking-widest text-accent mb-3">FAQ</p>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ink mb-12">
            Questions about vibe coding &amp; AI-enabled apps
          </h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((q) => (
              <div key={q.name} className="bg-card rounded-2xl p-8 border border-ink/8">
                <h3 className="font-syne font-bold text-xl text-ink mb-3">{q.name}</h3>
                <p className="text-ink/65 leading-relaxed">{q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-ink py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-5">
            Your idea deserves a live product
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Most founders overthink and under-ship. We help you do the opposite —
            get live in 14 days and iterate from real user feedback.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white font-syne font-semibold px-8 py-4 rounded-full hover:bg-accent-dark transition-colors text-lg"
            >
              Start Your MVP
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
