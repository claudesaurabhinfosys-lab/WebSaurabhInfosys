import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SaaS Platform Development Company India | Multi-Tenant | Saurabh Infosys",
  description: "We build multi-tenant SaaS platforms with subscription billing, RBAC & scalable cloud infra. We operate 3 live SaaS products ourselves — so we build what works.",
  keywords: ["SaaS development India", "multi-tenant SaaS India", "SaaS platform development", "subscription billing software India", "SaaS developer Ahmedabad", "cloud software development India", "B2B SaaS development"],
  alternates: { canonical: "https://saurabhinfosys.com/services/saas" },
  openGraph: { title: "SaaS Platform Development — Saurabh Infosys", description: "Multi-tenant SaaS with billing, RBAC & cloud infra. We run our own 3 SaaS products too.", url: "https://saurabhinfosys.com/services/saas", type: "website" },
  twitter: { card: "summary_large_image", title: "SaaS Development | Saurabh Infosys", description: "Multi-tenant SaaS platforms built by a team that runs their own SaaS products." },
};

const features = [
  {
    title: "Multi-Tenant Architecture",
    desc: "Isolated tenant data, custom subdomains, and per-tenant configuration — built right from day one, not bolted on later.",
    icon: "🏗️",
  },
  {
    title: "Subscription Billing (Razorpay / Stripe)",
    desc: "Recurring plans, usage-based billing, free trials, proration, and invoicing — integrated out of the box.",
    icon: "💳",
  },
  {
    title: "Role-Based Access Control",
    desc: "Super admins, org admins, managers, and end users — each with fine-grained permissions across every module.",
    icon: "🔐",
  },
  {
    title: "Admin Super Dashboard",
    desc: "A master control panel to manage all tenants, monitor usage, trigger comms, and analyse revenue metrics.",
    icon: "🖥️",
  },
  {
    title: "API-First Design",
    desc: "Every feature exposed via REST or GraphQL. Integrate with CRMs, mobile apps, third-party tools, and webhooks.",
    icon: "⚡",
  },
  {
    title: "Scalable Cloud Infrastructure",
    desc: "Deployed on AWS or DigitalOcean with auto-scaling, managed databases, CDN, and zero-downtime deployments.",
    icon: "☁️",
  },
];

const useCases = [
  {
    title: "Vertical SaaS",
    desc: "Domain-specific platforms for real estate, housing societies, schools, clinics, or logistics — built with deep workflow knowledge.",
  },
  {
    title: "Marketplace Platforms",
    desc: "Multi-sided platforms with buyer/seller/admin roles, transaction flows, and commission logic built in.",
  },
  {
    title: "Internal SaaS",
    desc: "Replace your spreadsheets and WhatsApp groups with a proper multi-user tool your team actually enjoys using.",
  },
];

const ownProducts = [
  {
    name: "SSMS",
    tagline: "School & Society Management System",
    desc: "A full-featured SaaS platform for managing student records, fees, attendance, and staff — used by schools across India.",
    href: "/products/ssms",
    accent: true,
  },
  {
    name: "MySociety",
    tagline: "Housing Society Management",
    desc: "Maintenance billing, visitor management, complaint tracking, and committee tools for residential societies.",
    href: "/products/mysociety",
    accent: false,
  },
  {
    name: "MySampark",
    tagline: "Bulk Communication Platform",
    desc: "WhatsApp, SMS, and email campaign platform used by 500+ businesses for outreach, alerts, and marketing.",
    href: "/products/mysampark",
    accent: false,
  },
];

const techStack = [
  "Next.js",
  "PostgreSQL",
  "Razorpay / Stripe",
  "Supabase",
  "AWS / DigitalOcean",
];

export default function SaaSServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-bg py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-dm text-accent text-sm uppercase tracking-widest mb-4">
            SaaS Platform Development
          </p>
          <h1 className="font-syne text-4xl md:text-6xl font-bold leading-tight mb-6">
            We don't just build SaaS.{" "}
            <span className="text-accent">We run our own.</span>
          </h1>
          <p className="font-dm text-lg md:text-xl text-bg/75 max-w-2xl mb-6">
            SSMS, MySociety, and MySampark are SaaS products we built and
            operate ourselves — serving thousands of users across India. When
            we build your platform, we bring that operator mindset with us.
          </p>
          <p className="font-dm text-bg/50 text-base mb-10">
            Multi-tenant architecture · Subscription billing · Role-based
            access · Production-hardened
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/918735001217"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-bg font-syne font-semibold px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors text-center"
            >
              Discuss Your SaaS Idea
            </a>
            <Link
              href="/contact"
              className="inline-block border border-bg/30 text-bg font-syne font-semibold px-8 py-4 rounded-lg hover:border-bg/60 transition-colors text-center"
            >
              Get a Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-bg py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-dm text-accent text-sm uppercase tracking-widest mb-3">
            What we build in
          </p>
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-ink mb-4">
            Everything a production SaaS needs
          </h2>
          <p className="font-dm text-ink/60 mb-14 max-w-xl">
            We skip the boilerplate debates and ship platforms that are
            ready for real users from day one.
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
            What kind of SaaS can we build?
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

      {/* Own SaaS Products */}
      <section className="bg-bg py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-dm text-accent text-sm uppercase tracking-widest mb-3">
            Proof of Work
          </p>
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-ink mb-4">
            Our own SaaS products
          </h2>
          <p className="font-dm text-ink/60 mb-14 max-w-xl">
            We eat our own cooking. These are live, paying-customer SaaS
            platforms we built and continue to operate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ownProducts.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className={`rounded-2xl p-8 border transition-all hover:-translate-y-1 block group ${
                  p.accent
                    ? "bg-accent border-accent text-bg"
                    : "bg-card border-ink/5 hover:border-accent/30"
                }`}
              >
                <h3
                  className={`font-syne font-bold text-2xl mb-1 ${
                    p.accent ? "text-bg" : "text-ink"
                  }`}
                >
                  {p.name}
                </h3>
                <p
                  className={`font-dm text-xs uppercase tracking-widest mb-4 ${
                    p.accent ? "text-bg/70" : "text-accent"
                  }`}
                >
                  {p.tagline}
                </p>
                <p
                  className={`font-dm text-sm leading-relaxed ${
                    p.accent ? "text-bg/75" : "text-ink/60"
                  }`}
                >
                  {p.desc}
                </p>
                <span
                  className={`inline-block mt-6 font-dm text-sm font-medium underline underline-offset-2 ${
                    p.accent ? "text-bg" : "text-accent"
                  }`}
                >
                  View product →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-card py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-ink rounded-2xl px-10 py-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <p className="font-dm text-accent text-sm uppercase tracking-widest mb-2">
                Tech Stack
              </p>
              <h3 className="font-syne text-bg text-2xl font-bold mb-2">
                Modern, proven, scalable
              </h3>
              <p className="font-dm text-bg/60 text-sm">
                We use the same stack across all our own products — so you
                get a team that knows it deeply, not just theoretically.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-bg/10 text-bg font-dm text-xs px-3 py-1.5 rounded-full border border-bg/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ink py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-syne text-3xl md:text-5xl font-bold text-bg mb-5">
            Let's build your SaaS together.
          </h2>
          <p className="font-dm text-bg/60 text-lg mb-10 max-w-xl mx-auto">
            Share your idea over WhatsApp and we'll come back with a
            scope, timeline, and honest estimate — no sales pitch.
          </p>
          <a
            href="https://wa.me/918735001217"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-bg font-syne font-semibold px-10 py-4 rounded-lg hover:bg-accent/90 transition-colors"
          >
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </>
  );
}
