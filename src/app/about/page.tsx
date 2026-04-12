import type { Metadata } from "next";
import Link from "next/link";
import { CLIENTS, COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Saurabh Infosys | AI-First Software Studio, Ahmedabad India",
  description: "Saurabh Infosys is an AI-first software development studio in Ahmedabad, Gujarat. 4+ years, 80+ clients across India, UK, USA & Gulf, 3 live SaaS products, 4.9★ Clutch.",
  keywords: ["software company Ahmedabad", "IT company Gujarat", "software development company India", "AI software studio India", "about Saurabh Infosys", "software developers Ahmedabad"],
  alternates: { canonical: "https://saurabhinfosys.com/about" },
  openGraph: { title: "About Saurabh Infosys — AI-First Software Studio", description: "4+ years, 80+ clients, 3 SaaS products, 4.9★ Clutch. Built in Ahmedabad, shipping globally.", url: "https://saurabhinfosys.com/about", type: "website" },
  twitter: { card: "summary_large_image", title: "About Saurabh Infosys", description: "AI-first software studio from Ahmedabad. 80+ clients, 4.9★ Clutch, 3 SaaS products." },
};

const MILESTONES = [
  { year: "2020", label: "Founded", desc: "Started as a freelance studio in Ahmedabad" },
  { year: "2021", label: "First int'l client", desc: "Delivered Flutter app for Hong Kong dental lab" },
  { year: "2022", label: "First SaaS", desc: "Launched SSMS — school management platform" },
  { year: "2023", label: "3 SaaS products", desc: "MySociety & MySampark added to product suite" },
  { year: "2024", label: "AI-first pivot", desc: "Integrated AI agents across all service lines" },
];

const MARKETS = [
  {
    flag: "🇮🇳",
    name: "India",
    tagline: "Domestic Market",
    desc: "SMBs, startups, schools, and housing societies across Gujarat, Delhi, and Mumbai. Our roots and our largest market.",
  },
  {
    flag: "🇬🇧🇺🇸",
    name: "UK & USA",
    tagline: "Western Markets",
    desc: "English-speaking clients who want world-class quality at startup-friendly prices. SaaS platforms, mobile apps, and AI integrations.",
  },
  {
    flag: "🇦🇪",
    name: "Gulf Region",
    tagline: "Middle East",
    desc: "UAE, Saudi Arabia, and broader GCC clients. Fintech, retail tech, and enterprise software with Arabic language support.",
  },
];

export default function AboutPage() {
  return (
    <main className="font-dm">
      {/* Hero */}
      <section className="bg-ink py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-syne font-semibold text-sm uppercase tracking-widest mb-4">
            About Us
          </p>
          <h1 className="font-syne text-4xl md:text-6xl font-bold text-bg leading-tight max-w-4xl">
            Building India&apos;s AI-first future{" "}
            <span className="text-accent">from Ahmedabad</span>
          </h1>
          <p className="mt-6 text-bg/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            What started as a one-person freelance studio in 2020 has grown into
            a full-stack software team with 80+ clients across 4 continents, 3
            live SaaS products, and an unwavering obsession with shipping fast
            and building right.
          </p>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-accent py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: COMPANY.stats.clients, label: "Happy Clients" },
              { value: COMPANY.stats.projects + " projects", label: "Delivered" },
              { value: COMPANY.stats.years + " years", label: "In Business" },
              { value: COMPANY.stats.saasProducts + " SaaS", label: "Products Live" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-syne font-bold text-3xl md:text-4xl text-white">
                  {stat.value}
                </p>
                <p className="text-white/70 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-bg py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Text */}
            <div>
              <h2 className="font-syne text-3xl md:text-4xl font-bold text-ink mb-6">
                Our story
              </h2>
              <div className="space-y-5 text-ink/70 leading-relaxed">
                <p>
                  Saurabh Infosys was founded in 2020 by Saurabh Patel, a
                  software engineer who left a corporate job to build products he
                  actually believed in. The first year was scrappy — client work
                  by day, SaaS ideas by night.
                </p>
                <p>
                  By 2021, the first international client arrived: a dental lab
                  in Hong Kong needed a Flutter app to serve 30,000 customers
                  across 20 countries. That project proved that world-class
                  software could be built from Ahmedabad at a fraction of the
                  Western cost — without compromising on quality.
                </p>
                <p>
                  2022 saw the launch of SSMS, our first SaaS product — a
                  school management system that&apos;s now used by dozens of
                  institutions across India. MySociety and MySampark followed in
                  2023, completing a suite of three live, paying products.
                </p>
                <p>
                  In 2024, we went all-in on AI. We believe every business in
                  India will need AI agents, and we&apos;re building them. From
                  WhatsApp lead bots to voice IVR systems in Hindi and English —
                  this is the next decade&apos;s defining technology, and we
                  intend to be at the forefront of it in India.
                </p>
              </div>
            </div>

            {/* Right: Timeline */}
            <div className="bg-card rounded-2xl p-8 border border-ink/5">
              <h3 className="font-syne font-bold text-ink text-xl mb-8">
                Key milestones
              </h3>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-ink/10" />

                <div className="space-y-8">
                  {MILESTONES.map((m, i) => (
                    <div key={m.year} className="flex gap-6 relative">
                      {/* Dot */}
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-syne font-bold text-xs z-10 ${
                          i === MILESTONES.length - 1
                            ? "bg-accent text-white"
                            : "bg-ink text-bg"
                        }`}
                      >
                        {m.year.slice(2)}
                      </div>
                      <div className="pt-2">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-syne font-bold text-ink text-sm">
                            {m.year}
                          </span>
                          <span className="text-accent font-semibold text-sm">
                            — {m.label}
                          </span>
                        </div>
                        <p className="text-ink/50 text-sm">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="bg-ink py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-syne text-3xl md:text-4xl font-bold text-bg mb-4">
              Markets we serve
            </h2>
            <p className="text-bg/50 text-lg max-w-xl mx-auto">
              Our clients are spread across India, Western markets, and the Gulf
              — united by a need for reliable, fast, cost-effective software.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MARKETS.map((market) => (
              <div
                key={market.name}
                className="bg-bg/5 border border-bg/10 rounded-2xl p-8 hover:bg-bg/10 transition-colors"
              >
                <span className="text-4xl mb-4 block">{market.flag}</span>
                <h3 className="font-syne font-bold text-bg text-xl mb-1">
                  {market.name}
                </h3>
                <p className="text-accent text-sm font-semibold mb-3">
                  {market.tagline}
                </p>
                <p className="text-bg/50 text-sm leading-relaxed">{market.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Clients Section */}
      <section className="bg-card py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-syne text-3xl md:text-4xl font-bold text-ink mb-4">
              Clients who trust us
            </h2>
            <p className="text-ink/50 text-lg max-w-xl mx-auto">
              A snapshot of the businesses we&apos;ve built software for —
              across healthcare, transport, fitness, and government sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                className="bg-bg rounded-2xl p-6 border border-ink/5 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="font-syne font-bold text-ink text-base leading-snug">
                      {client.name}
                    </p>
                    <p className="text-ink/40 text-sm mt-0.5">
                      {client.flag} {client.country}
                    </p>
                  </div>
                  <span className="flex-shrink-0 px-3 py-1 bg-ink/5 text-ink/50 text-xs rounded-full font-medium">
                    {client.category}
                  </span>
                </div>
                <p className="text-ink/60 text-sm leading-relaxed mb-4">
                  {client.description}
                </p>
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                  {client.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ahmedabad Section */}
      <section className="bg-bg py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-syne text-3xl md:text-4xl font-bold text-ink mb-4">
              World-class software at{" "}
              <span className="text-accent">startup-friendly prices</span>
            </h2>
            <p className="text-ink/50 text-lg max-w-2xl mx-auto">
              Why Ahmedabad? Because it gives us every advantage — and we pass
              those advantages on to you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💰",
                title: "Cost Advantage",
                desc: "Our rates are 60–70% lower than UK/US agencies with zero compromise on code quality or communication.",
              },
              {
                icon: "🕐",
                title: "Timezone Overlap",
                desc: "IST works naturally with UK mornings and Australian afternoons. Gulf clients share near-identical hours.",
              },
              {
                icon: "🗣️",
                title: "English-First Team",
                desc: "Every engineer and PM on our team communicates fluently in English. No lost-in-translation moments.",
              },
              {
                icon: "🎓",
                title: "Top-Tier Talent",
                desc: "Ahmedabad is home to IIM, IIT Gandhinagar, and dozens of top engineering colleges feeding our talent pipeline.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-card rounded-2xl p-6 border border-ink/5"
              >
                <span className="text-3xl mb-4 block">{card.icon}</span>
                <h3 className="font-syne font-bold text-ink text-base mb-2">
                  {card.title}
                </h3>
                <p className="text-ink/60 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-syne text-3xl md:text-5xl font-bold text-bg mb-6">
            Ready to work with us?
          </h2>
          <p className="text-bg/60 text-lg mb-10 max-w-xl mx-auto">
            Drop us a message on WhatsApp — we reply within 2 hours on business
            days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-white font-syne font-semibold px-8 py-4 rounded-xl hover:bg-accent/90 transition-colors text-base"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/portfolio"
              className="inline-block bg-bg/10 text-bg font-syne font-semibold px-8 py-4 rounded-xl hover:bg-bg/20 transition-colors text-base border border-bg/20"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
