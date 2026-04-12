import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bulk WhatsApp & SMS Marketing Platform India | Saurabh Infosys",
  description: "Send bulk WhatsApp, SMS & email campaigns at India's lowest rates. Pay-per-use from ₹0.02/message. No monthly fee. Powered by MySampark — trusted by SMBs across India.",
  keywords: ["bulk WhatsApp marketing India", "SMS marketing India", "bulk SMS India", "WhatsApp Business API India", "email marketing India", "digital marketing automation India", "bulk messaging platform India", "MySampark"],
  alternates: { canonical: "https://saurabhinfosys.com/services/digital-marketing" },
  openGraph: { title: "Bulk WhatsApp & SMS Marketing — Saurabh Infosys", description: "India's lowest-cost bulk WhatsApp, SMS & email platform. Pay-per-use from ₹0.02/msg.", url: "https://saurabhinfosys.com/services/digital-marketing", type: "website" },
  twitter: { card: "summary_large_image", title: "Bulk WhatsApp Marketing | Saurabh Infosys", description: "Bulk WhatsApp, SMS & email from ₹0.02/message. No monthly fee." },
};

const features = [
  {
    title: "Bulk WhatsApp Campaigns",
    desc: "Send personalised WhatsApp messages to thousands of contacts. Use approved templates, media attachments, and dynamic variables.",
    icon: "💬",
  },
  {
    title: "SMS Marketing Automation",
    desc: "Schedule, trigger, and drip SMS campaigns across DLT-compliant routes. Track delivery and click-through in real time.",
    icon: "📱",
  },
  {
    title: "Email Campaign Builder",
    desc: "Drag-and-drop email builder with merge tags, A/B testing, unsubscribe management, and open/click analytics.",
    icon: "📧",
  },
  {
    title: "Contact List Management",
    desc: "Upload contacts via CSV, segment by tag or behaviour, manage opt-outs, and keep your lists clean automatically.",
    icon: "📋",
  },
  {
    title: "Campaign Analytics",
    desc: "Track delivery rates, open rates, link clicks, conversions, and ROI across every channel in one unified dashboard.",
    icon: "📈",
  },
  {
    title: "API Access for Developers",
    desc: "Send transactional messages directly from your app via REST API. Webhooks for delivery receipts and replies included.",
    icon: "⚙️",
  },
];

const useCases = [
  {
    title: "SMB Campaigns",
    desc: "Announce sales, collect customer feedback, send appointment reminders, or run festival offers — at a fraction of traditional ad spend.",
  },
  {
    title: "Reseller Platforms",
    desc: "White-label the platform for your own clients. Set custom pricing, manage sub-accounts, and earn on every message sent.",
  },
  {
    title: "Integrations",
    desc: "Connect to your CRM, e-commerce store, or ERP via API. Trigger automated campaigns based on customer behaviour or system events.",
  },
];

const pricing = [
  {
    channel: "WhatsApp",
    price: "₹0.35",
    unit: "per message",
    note: "Meta-approved templates",
    highlight: true,
  },
  {
    channel: "SMS",
    price: "₹0.12",
    unit: "per message",
    note: "DLT compliant, all operators",
    highlight: false,
  },
  {
    channel: "Email",
    price: "₹0.02",
    unit: "per email",
    note: "Unlimited attachments & tracking",
    highlight: false,
  },
];

export default function DigitalMarketingServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-bg py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-dm text-accent text-sm uppercase tracking-widest mb-4">
            Digital Marketing Tools
          </p>
          <h1 className="font-syne text-4xl md:text-6xl font-bold leading-tight mb-6">
            Reach 10,000 customers{" "}
            <span className="text-accent">for the cost of a lunch.</span>
          </h1>
          <p className="font-dm text-lg md:text-xl text-bg/75 max-w-2xl mb-6">
            Bulk WhatsApp campaigns, SMS automation, and email marketing —
            all in one platform. Pay per message, no monthly lock-ins, no
            wasted spend.
          </p>
          <p className="font-dm text-bg/50 text-base mb-10">
            WhatsApp from ₹0.35 · SMS from ₹0.12 · Email from ₹0.02
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/918735001217"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-bg font-syne font-semibold px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors text-center"
            >
              Start Sending Today
            </a>
            <Link
              href="/products/mysampark"
              className="inline-block border border-bg/30 text-bg font-syne font-semibold px-8 py-4 rounded-lg hover:border-bg/60 transition-colors text-center"
            >
              See MySampark Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-bg py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-dm text-accent text-sm uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-ink mb-4">
            Every channel. One platform.
          </h2>
          <p className="font-dm text-ink/60 mb-14 max-w-xl">
            Stop juggling five different tools. Manage all your outbound
            customer communication from a single dashboard.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-card rounded-2xl p-6 border border-ink/5 hover:border-accent/30 transition-colors"
              >
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="font-syne font-semibold text-ink text-lg mb-2">
                  {f.title}
                </h3>
                <p className="font-dm text-ink/60 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-card py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-dm text-accent text-sm uppercase tracking-widest mb-3">
            Use Cases
          </p>
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-ink mb-14">
            Who uses this?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-bg rounded-2xl p-8">
                <h3 className="font-syne font-bold text-ink text-xl mb-3">
                  {uc.title}
                </h3>
                <p className="font-dm text-ink/60 text-sm leading-relaxed">
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MySampark Highlight */}
      <section className="bg-bg py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-accent rounded-2xl px-10 py-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <p className="font-dm text-bg/70 text-sm uppercase tracking-widest mb-2">
                Built by us, used by hundreds
              </p>
              <h3 className="font-syne text-bg text-2xl md:text-3xl font-bold mb-3">
                We built our own platform — MySampark.com
              </h3>
              <p className="font-dm text-bg/80 text-base">
                MySampark is used by{" "}
                <strong className="text-bg">500+ businesses</strong> across
                India to run their WhatsApp, SMS, and email campaigns. It's
                not a resold tool — we built it from scratch, and we run it
                ourselves.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/products/mysampark"
                className="inline-block bg-bg text-accent font-syne font-semibold px-8 py-4 rounded-lg hover:bg-bg/90 transition-colors whitespace-nowrap"
              >
                Explore MySampark →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-card py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-dm text-accent text-sm uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-ink mb-4">
            Pay per use. No contracts.
          </h2>
          <p className="font-dm text-ink/60 mb-14 max-w-xl">
            Top up your credits and send. No monthly fees, no seat limits,
            no hidden charges. Scale up or down any time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div
                key={p.channel}
                className={`rounded-2xl p-8 border transition-all ${
                  p.highlight
                    ? "bg-ink border-ink text-bg"
                    : "bg-bg border-ink/5"
                }`}
              >
                <p
                  className={`font-dm text-xs uppercase tracking-widest mb-4 ${
                    p.highlight ? "text-accent" : "text-accent"
                  }`}
                >
                  {p.channel}
                </p>
                <p
                  className={`font-syne text-4xl font-bold mb-1 ${
                    p.highlight ? "text-bg" : "text-ink"
                  }`}
                >
                  {p.price}
                </p>
                <p
                  className={`font-dm text-sm mb-4 ${
                    p.highlight ? "text-bg/60" : "text-ink/50"
                  }`}
                >
                  {p.unit}
                </p>
                <p
                  className={`font-dm text-xs ${
                    p.highlight ? "text-bg/50" : "text-ink/40"
                  }`}
                >
                  {p.note}
                </p>
              </div>
            ))}
          </div>
          <p className="font-dm text-ink/40 text-xs mt-8">
            Volume discounts available. Contact us for enterprise rates.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ink py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-syne text-3xl md:text-5xl font-bold text-bg mb-5">
            Start reaching your customers today.
          </h2>
          <p className="font-dm text-bg/60 text-lg mb-10 max-w-xl mx-auto">
            Top up credits, upload your contacts, and send your first
            campaign in under 10 minutes. We're on WhatsApp if you need help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918735001217"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-bg font-syne font-semibold px-10 py-4 rounded-lg hover:bg-accent/90 transition-colors"
            >
              WhatsApp Us Now
            </a>
            <Link
              href="/products/mysampark"
              className="inline-block border border-bg/30 text-bg font-syne font-semibold px-10 py-4 rounded-lg hover:border-bg/60 transition-colors"
            >
              View MySampark
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
