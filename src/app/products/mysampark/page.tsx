import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MySampark — Bulk WhatsApp, SMS & Email Platform India | Pay Per Use",
  description: "MySampark: India's pay-per-use bulk messaging platform. WhatsApp ₹0.35/msg, SMS ₹0.12/msg, Email ₹0.02/msg. No monthly fee. Trusted by SMBs across India.",
  keywords: ["bulk WhatsApp India", "bulk SMS India", "bulk email India", "WhatsApp marketing platform", "SMS marketing platform India", "MySampark", "bulk messaging India", "pay per use WhatsApp"],
  alternates: { canonical: "https://saurabhinfosys.com/products/mysampark" },
  openGraph: { title: "MySampark — Bulk WhatsApp, SMS & Email | Pay Per Use", description: "India's lowest-cost bulk messaging. WhatsApp ₹0.35, SMS ₹0.12, Email ₹0.02 per message.", url: "https://saurabhinfosys.com/products/mysampark", type: "website" },
  twitter: { card: "summary_large_image", title: "MySampark Bulk Messaging | India", description: "Bulk WhatsApp, SMS & email — India's pay-per-use messaging platform." },
};

const features = [
  {
    icon: "💬",
    title: "Bulk WhatsApp",
    desc: "Send personalised WhatsApp messages to thousands of contacts at once using approved templates.",
  },
  {
    icon: "📱",
    title: "SMS Builder",
    desc: "Create and send SMS campaigns with custom sender IDs, scheduling, and DND filtering.",
  },
  {
    icon: "📧",
    title: "Email Campaigns",
    desc: "Design beautiful HTML email campaigns with an easy editor — no coding needed.",
  },
  {
    icon: "📂",
    title: "Contact Lists",
    desc: "Import, segment, and manage your contact lists for targeted messaging.",
  },
  {
    icon: "📊",
    title: "Analytics",
    desc: "Track delivery rates, opens, clicks, and conversions for every campaign in real time.",
  },
  {
    icon: "📝",
    title: "Template Library",
    desc: "Pre-approved WhatsApp templates and email templates for common use cases.",
  },
  {
    icon: "🔌",
    title: "API Access",
    desc: "Integrate MySampark into your own systems with a simple REST API and developer docs.",
  },
  {
    icon: "🤝",
    title: "Reseller Program",
    desc: "Resell MySampark credits under your own brand and earn 20% commission on every recharge.",
  },
];

const channels = [
  {
    icon: "💬",
    name: "WhatsApp",
    price: "₹0.35",
    unit: "per message",
    color: "text-green-400",
    features: [
      "Approved business templates",
      "Rich media (images, PDFs)",
      "Delivery receipts",
      "Two-way messaging",
    ],
  },
  {
    icon: "📱",
    name: "SMS",
    price: "₹0.12",
    unit: "per message",
    color: "text-blue-400",
    features: [
      "Transactional & promotional",
      "Custom sender ID",
      "DND scrubbing",
      "Unicode support",
    ],
  },
  {
    icon: "📧",
    name: "Email",
    price: "₹0.02",
    unit: "per email",
    color: "text-purple-400",
    features: [
      "HTML & text emails",
      "Open & click tracking",
      "Unsubscribe management",
      "Bulk scheduling",
    ],
  },
];

const whyPoints = [
  {
    icon: "🔓",
    title: "No monthly lock-in",
    desc: "Pay only for what you send. Recharge when you need. No subscriptions, no wasted money.",
  },
  {
    icon: "🇮🇳",
    title: "Built for Indian SMBs",
    desc: "Affordable pricing, INR billing, DLT compliance, and support that understands your business.",
  },
  {
    icon: "💬",
    title: "WhatsApp first",
    desc: "WhatsApp delivers 5x better open rates than SMS. MySampark is built with WhatsApp as the primary channel.",
  },
  {
    icon: "💼",
    title: "Reseller-friendly",
    desc: "White-label the platform and resell to your own clients — earn recurring commissions effortlessly.",
  },
];

export default function MySamparkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block bg-accent/10 text-accent font-dm font-semibold text-sm px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
            Bulk WhatsApp · SMS · Email
          </div>
          <h1 className="font-syne text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
            Reach thousands,
            <br />
            spend pennies
          </h1>
          <p className="font-dm text-ink-light text-lg md:text-xl max-w-2xl mx-auto mb-8">
            MySampark is India&apos;s pay-per-use messaging platform for
            growing businesses. Send bulk WhatsApp, SMS, and Email campaigns
            with zero monthly commitment.
          </p>
          <div className="mb-10">
            <span className="font-syne text-xl font-bold text-accent">
              Pay per use — no monthly fee
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mysampark.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white font-syne font-semibold text-base px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors"
            >
              Visit MySampark
            </a>
            <a
              href="https://wa.me/918735001217"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-ink text-white font-syne font-semibold text-base px-8 py-4 rounded-lg hover:bg-ink/80 transition-colors"
            >
              <span>💬</span> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-card py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-syne text-4xl font-bold text-ink mb-4">
              One platform, every channel
            </h2>
            <p className="font-dm text-ink-light text-lg max-w-xl mx-auto">
              Everything you need to run effective marketing campaigns —
              WhatsApp, SMS, and Email — from a single dashboard.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-bg rounded-2xl p-6 border border-ink/5"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-syne text-lg font-semibold text-ink mb-2">
                  {f.title}
                </h3>
                <p className="font-dm text-ink-light text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Pricing */}
      <section className="bg-ink py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-syne text-4xl font-bold text-white mb-4">
              Simple per-message pricing
            </h2>
            <p className="font-dm text-white/60 text-lg max-w-xl mx-auto">
              Recharge your wallet and pay only for the messages you send.
              No contracts, no expiry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {channels.map((ch) => (
              <div
                key={ch.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="text-4xl mb-4">{ch.icon}</div>
                <h3 className={`font-syne text-xl font-bold mb-1 ${ch.color}`}>
                  {ch.name}
                </h3>
                <div className="mb-1">
                  <span className="font-syne text-4xl font-bold text-white">
                    {ch.price}
                  </span>
                </div>
                <p className="font-dm text-white/50 text-sm mb-6">
                  {ch.unit}
                </p>
                <ul className="space-y-2 text-left">
                  {ch.features.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-dm text-white/70 text-sm"
                    >
                      <span className="text-accent">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MySampark */}
      <section className="bg-bg py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-syne text-4xl font-bold text-ink mb-4">
              Why MySampark
            </h2>
            <p className="font-dm text-ink-light text-lg max-w-xl mx-auto">
              Built by marketers, for Indian businesses that want results
              without the overhead.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {whyPoints.map((p) => (
              <div key={p.title} className="flex gap-5">
                <div className="text-3xl flex-shrink-0">{p.icon}</div>
                <div>
                  <h3 className="font-syne text-lg font-semibold text-ink mb-2">
                    {p.title}
                  </h3>
                  <p className="font-dm text-ink-light text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reseller Callout */}
      <section className="bg-card py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-ink rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="text-5xl flex-shrink-0">🤝</div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-syne text-3xl font-bold text-white mb-3">
                Become a MySampark Reseller
              </h2>
              <p className="font-dm text-white/70 text-base mb-6">
                Earn{" "}
                <span className="text-accent font-semibold">
                  20% commission
                </span>{" "}
                on every recharge your clients make. White-label the platform,
                set your own prices, and build a recurring income stream —
                with zero investment.
              </p>
              <a
                href="https://wa.me/918735001217"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white font-syne font-semibold text-base px-7 py-3.5 rounded-lg hover:bg-accent-dark transition-colors"
              >
                <span>💬</span> Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ink py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start sending in minutes
          </h2>
          <p className="font-dm text-white/60 text-lg mb-10 max-w-xl mx-auto">
            No setup fees. No monthly commitment. Recharge and start reaching
            your customers on WhatsApp, SMS, and Email today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mysampark.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white font-syne font-semibold text-base px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors"
            >
              Visit MySampark
            </a>
            <a
              href="https://wa.me/918735001217"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/10 text-white font-syne font-semibold text-base px-8 py-4 rounded-lg hover:bg-white/20 transition-colors"
            >
              <span>💬</span> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
