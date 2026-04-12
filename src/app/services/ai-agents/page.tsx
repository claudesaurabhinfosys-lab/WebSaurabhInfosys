import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, COMPANY } from "@/lib/data";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What AI automation services does Saurabh Infosys offer?",
      acceptedAnswer: { "@type": "Answer", text: "We build WhatsApp automation bots, RAG knowledge base systems, voice agents, lead qualification bots, and custom AI workflows that automate your business operations 24/7." },
    },
    {
      "@type": "Question",
      name: "Can you integrate AI into my existing software or CRM?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We specialise in AI integration — connecting GPT-4o, LangChain, and custom AI models to your existing CRM, ERP, WhatsApp, or any business tool via APIs." },
    },
    {
      "@type": "Question",
      name: "How long does it take to build and deploy an AI agent?",
      acceptedAnswer: { "@type": "Answer", text: "Most AI agents go live within 2–3 weeks. Simple WhatsApp bots can be ready in under a week. Complex RAG systems or voice agents typically take 3–4 weeks." },
    },
    {
      "@type": "Question",
      name: "What is the cost of AI automation services in India?",
      acceptedAnswer: { "@type": "Answer", text: "AI automation projects start from ₹50,000 depending on complexity. WhatsApp bots, CRM integrations, and RAG systems are priced based on scope. Contact us on WhatsApp for a free quote." },
    },
  ],
};

export const metadata: Metadata = {
  title: "AI Automation & AI Integration Services India | Saurabh Infosys",
  description: "Top AI automation & AI integration company in India. Build WhatsApp bots, RAG systems, voice agents & integrate AI into your existing software. 80+ clients, 4.9★ Clutch. Ahmedabad.",
  keywords: [
    "AI automation services India",
    "AI integration services India",
    "AI automation company Ahmedabad",
    "AI integration company Gujarat",
    "WhatsApp bot development India",
    "RAG knowledge base India",
    "voice agent development India",
    "business automation India",
    "ChatGPT integration India",
    "LangChain developer India",
    "AI chatbot development India",
    "automate business workflows India",
  ],
  alternates: { canonical: "https://saurabhinfosys.com/services/ai-agents" },
  openGraph: { title: "AI Automation & AI Integration Services — Saurabh Infosys", description: "Top AI automation & integration company in India. WhatsApp bots, RAG systems, voice agents & AI integrations. 80+ clients, 4.9★ Clutch.", url: "https://saurabhinfosys.com/services/ai-agents", type: "website" },
  twitter: { card: "summary_large_image", title: "AI Automation & Integration | Saurabh Infosys", description: "AI automation services & AI integration — WhatsApp bots, RAG systems, voice agents. India's AI-first software studio." },
};

const service = SERVICES[0];

const featureIcons: string[] = ["💬", "📚", "🎙️", "🔗", "🎯", "⚙️"];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We map your workflows, identify automation opportunities, and define the agent's scope.",
  },
  {
    number: "02",
    title: "Design",
    desc: "Conversation flows, knowledge architecture, and integration points are designed collaboratively.",
  },
  {
    number: "03",
    title: "Build",
    desc: "We build, train, and integrate your AI agent with your existing tools and APIs.",
  },
  {
    number: "04",
    title: "Deploy",
    desc: "Go live with monitoring, dashboards, and ongoing support to keep agents performing.",
  },
];

export default function AIAgentsPage() {
  return (
    <main className="bg-bg text-ink font-dm">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <section className="bg-bg pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-accent text-white text-xs font-syne font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            AI Automation &amp; Integration
          </span>
          <h1 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-ink mb-6 max-w-4xl">
            AI automation &amp; integration{" "}
            <span className="text-accent">that works 24/7</span>
          </h1>
          <p className="text-lg md:text-xl text-ink/70 max-w-2xl mb-10 leading-relaxed">
            We deliver AI automation services and AI integration for Indian businesses — WhatsApp bots that qualify leads, RAG systems that answer customer
            questions, voice agents in Hindi &amp; English, and seamless AI integration into your existing CRM or software.
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
              Chat on WhatsApp
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

      {/* ── Features ── */}
      <section className="bg-card py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-syne font-bold text-xs uppercase tracking-widest text-accent mb-3">
            What We Build
          </p>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ink mb-12">
            Everything your AI stack needs
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

      {/* ── Use Cases ── */}
      <section className="bg-bg py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-syne font-bold text-xs uppercase tracking-widest text-accent mb-3">
            Use Cases
          </p>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ink mb-12">
            Built for real business problems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.useCases.map((uc) => (
              <div
                key={uc.title}
                className="bg-card rounded-2xl p-8 border border-ink/8"
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

      {/* ── Process ── */}
      <section className="bg-ink py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-syne font-bold text-xs uppercase tracking-widest text-accent mb-3">
            Our Process
          </p>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-14">
            From idea to live agent in weeks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-5">
                  <span className="font-syne font-bold text-white text-lg">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-syne font-bold text-xl text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-card py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-syne font-bold text-xs uppercase tracking-widest text-accent mb-3">FAQ</p>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ink mb-12">
            Common questions about AI automation &amp; integration
          </h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((q) => (
              <div key={q.name} className="bg-bg rounded-2xl p-8 border border-ink/8">
                <h3 className="font-syne font-bold text-xl text-ink mb-3">{q.name}</h3>
                <p className="text-ink/65 leading-relaxed">{q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-ink py-20 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-5">
            Ready to automate your business?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Let&apos;s scope your first AI agent together. Most go live within 2–3
            weeks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white font-syne font-semibold px-8 py-4 rounded-full hover:bg-accent-dark transition-colors text-lg"
            >
              Start on WhatsApp
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
