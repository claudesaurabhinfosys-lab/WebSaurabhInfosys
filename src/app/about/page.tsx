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

const MARKETS = [
  {
    flags: "🇮🇳",
    name: "India",
    tagline: "Domestic Market",
    desc: "SMBs, startups, schools, and housing societies across Gujarat, Delhi, and Mumbai. Our roots and our largest market.",
    countries: ["India"],
  },
  {
    flags: "🇬🇧🇩🇪🇧🇪🇭🇷",
    name: "Europe",
    tagline: "European Markets",
    desc: "UK, Germany, Belgium, and Croatia clients seeking world-class software at startup-friendly prices. SaaS platforms, mobile apps, and AI integrations.",
    countries: ["UK", "Germany", "Belgium", "Croatia"],
  },
  {
    flags: "🇸🇬🇲🇾🇭🇰",
    name: "Asia Pacific",
    tagline: "APAC Markets",
    desc: "Singapore, Malaysia, and Hong Kong clients across healthcare, logistics, and fintech. Time-zone aligned and English-first.",
    countries: ["Singapore", "Malaysia", "Hong Kong"],
  },
  {
    flags: "🇺🇸",
    name: "Americas",
    tagline: "North America",
    desc: "US clients who want Silicon Valley quality at a fraction of the cost. Startups and scale-ups building AI-enabled products fast.",
    countries: ["USA"],
  },
  {
    flags: "🇦🇪🇸🇦",
    name: "Gulf Region",
    tagline: "Middle East",
    desc: "UAE, Saudi Arabia, and broader GCC clients. Fintech, retail tech, and enterprise software.",
    countries: ["UAE", "Saudi Arabia"],
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
            A full-stack software and AI studio based in Ahmedabad — with 80+ clients
            across India, UK, Europe, Asia Pacific, the Americas, and the Gulf.
            We specialise in AI automation, mobile apps, and SaaS platforms, with an
            obsession for quality and shipping fast.
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
          <div className="max-w-3xl">
            <h2 className="font-syne text-3xl md:text-4xl font-bold text-ink mb-8">
              Who we are
            </h2>
            <div className="space-y-5 text-ink/70 leading-relaxed text-base md:text-lg">
              <p>
                Saurabh Infosys is an Ahmedabad-based software and AI studio that
                specialises in building applications and digital products for businesses
                of all sizes. We work with Flutter, React, Next.js, Node.js, and
                the latest AI platforms — delivering solutions that are fast, reliable,
                and built to scale.
              </p>
              <p>
                Our commitment to quality and attention to detail ensure that every
                project meets the highest standards. We work closely with our clients
                from initial consultation through to final delivery — treating every
                project with the same care we would our own.
              </p>
              <p>
                From our first international project — a Flutter app for a Hong Kong
                dental lab now serving 30,000+ customers across 20 countries — we
                have proved that world-class software can be built from India without
                compromising on quality or communication.
              </p>
              <p>
                Today we run three live SaaS products of our own: SSMS (school
                management), MySociety (housing society management), and MySampark
                (bulk WhatsApp and SMS marketing). Building and operating our own
                products keeps us sharp, accountable, and deeply familiar with what
                it actually takes to ship great software.
              </p>
              <p>
                In 2024 we went all-in on AI. We believe every business will need
                AI automation in the next few years — and we are building those
                solutions today. WhatsApp AI bots, agentic workflows, RAG knowledge
                bases, voice agents — we are at the forefront of practical AI
                for Indian and global businesses.
              </p>
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
              Our clients are spread across India, Europe, Asia Pacific,
              the Americas, and the Gulf — united by a need for reliable,
              fast, cost-effective software.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MARKETS.map((market) => (
              <div
                key={market.name}
                className="bg-bg/5 border border-bg/10 rounded-2xl p-8 hover:bg-bg/10 transition-colors"
              >
                <span className="text-3xl mb-4 block">{market.flags}</span>
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
            <p className="text-ink/70 text-lg max-w-xl mx-auto">
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
                    <p className="text-ink/60 text-sm mt-0.5">
                      {client.flag} {client.country}
                    </p>
                  </div>
                  <span className="flex-shrink-0 px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-semibold">
                    {client.category}
                  </span>
                </div>
                <p className="text-ink/75 text-sm leading-relaxed mb-4">
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
            <p className="text-ink/70 text-lg max-w-2xl mx-auto">
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
                <p className="text-ink/75 text-sm leading-relaxed">{card.desc}</p>
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
