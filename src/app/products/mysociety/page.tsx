import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MySociety — Housing Society Management App India | ₹5/Flat/Month",
  description: "MySociety is a modern society management app for housing societies & apartment complexes. Maintenance collection, visitor gate, complaints & notices. ₹5/flat/month.",
  keywords: ["society management app India", "housing society software", "apartment management system India", "maintenance collection app", "society management software Gujarat", "MySociety app", "RWA management software India"],
  alternates: { canonical: "https://saurabhinfosys.com/products/mysociety" },
  openGraph: { title: "MySociety — Society Management App | ₹5/Flat/Month", description: "Manage your housing society digitally. Maintenance, visitors, complaints & notices. ₹5/flat/month.", url: "https://saurabhinfosys.com/products/mysociety", type: "website" },
  twitter: { card: "summary_large_image", title: "MySociety | Society Management App", description: "Digital society management for housing complexes. ₹5/flat/month." },
};

const features = [
  {
    icon: "💰",
    title: "Maintenance Collection",
    desc: "Collect maintenance dues online, send automated reminders, and track payment history with one click.",
  },
  {
    icon: "🚪",
    title: "Visitor Gate Management",
    desc: "Log and approve visitor entries digitally — residents get instant mobile alerts for every visitor.",
  },
  {
    icon: "📢",
    title: "Complaints & Requests",
    desc: "Residents raise complaints and track resolution status. No more missed WhatsApp messages.",
  },
  {
    icon: "📌",
    title: "Notice Board",
    desc: "Publish announcements and notices digitally — every resident is notified instantly.",
  },
  {
    icon: "👥",
    title: "Resident Directory",
    desc: "A searchable, always up-to-date directory of all flats and residents in your complex.",
  },
  {
    icon: "🚗",
    title: "Parking Management",
    desc: "Assign and track parking slots for residents and visitors to avoid disputes.",
  },
  {
    icon: "🔧",
    title: "Vendor Tracking",
    desc: "Manage service vendors, contracts, and payments from a single dashboard.",
  },
  {
    icon: "💬",
    title: "WhatsApp Alerts",
    desc: "Automated WhatsApp notifications for dues, visitor entries, notices, and maintenance updates.",
  },
];

const includedFeatures = [
  "Unlimited residents & flats",
  "Online maintenance collection",
  "Visitor & gate management",
  "Complaints & ticketing",
  "Notice board & announcements",
  "Resident directory",
  "WhatsApp & in-app alerts",
  "Dedicated society admin panel",
];

export default function MySocietyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block bg-accent/10 text-accent font-dm font-semibold text-sm px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
            Society Management System
          </div>
          <h1 className="font-syne text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
            Modern society management
            <br />
            for the digital age
          </h1>
          <p className="font-dm text-ink-light text-lg md:text-xl max-w-2xl mx-auto mb-8">
            From maintenance collection to visitor tracking — MySociety brings
            every aspect of your housing society online, saving hours of manual
            work every month.
          </p>
          <div className="mb-10">
            <span className="font-syne text-3xl font-bold text-accent">
              ₹5
            </span>
            <span className="font-dm text-ink-light text-base ml-1">
              /flat/month
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mysociety.saurabhinfosys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white font-syne font-semibold text-base px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors"
            >
              Visit MySociety
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

      {/* Target users */}
      <section className="bg-card py-8">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-dm text-ink-light text-sm text-center mb-4 uppercase tracking-wide">
            Built for
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Housing Societies",
              "Apartment Complexes",
              "Gated Communities",
            ].map((label) => (
              <span
                key={label}
                className="font-dm text-sm font-medium bg-bg text-ink border border-ink/10 px-5 py-2 rounded-full"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-bg py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-syne text-4xl font-bold text-ink mb-4">
              Everything your society needs
            </h2>
            <p className="font-dm text-ink-light text-lg max-w-xl mx-auto">
              One app for residents, one dashboard for the committee — managing
              your complex has never been this simple.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-card rounded-2xl p-6 border border-ink/5"
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

      {/* ROI Calculator */}
      <section className="bg-ink py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-syne text-4xl font-bold text-white mb-4">
              The numbers make sense
            </h2>
            <p className="font-dm text-white/60 text-lg max-w-xl mx-auto">
              MySociety pays for itself in the very first month.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="font-syne text-4xl font-bold text-accent mb-2">
                  ₹500
                </p>
                <p className="font-dm text-white/70 text-sm">
                  Total cost for a 100-flat society/month
                </p>
              </div>
              <div>
                <p className="font-syne text-4xl font-bold text-white mb-2">
                  10+
                </p>
                <p className="font-dm text-white/70 text-sm">
                  Hours of manual work saved every month
                </p>
              </div>
              <div>
                <p className="font-syne text-4xl font-bold text-white mb-2">
                  ₹5
                </p>
                <p className="font-dm text-white/70 text-sm">
                  Per flat per month — less than a chai
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-8 text-center">
              <p className="font-dm text-white/80 text-base">
                For a{" "}
                <span className="font-semibold text-white">100-flat society</span>{" "}
                — just{" "}
                <span className="text-accent font-semibold">₹500/month</span>.
                Saves{" "}
                <span className="font-semibold text-white">
                  10+ hours of manual work
                </span>{" "}
                on maintenance follow-ups, visitor logs, and complaint tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-card py-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-syne text-4xl font-bold text-ink mb-4">
              Transparent pricing
            </h2>
            <p className="font-dm text-ink-light text-lg">
              Pay only for the flats you have. Billed annually.
            </p>
          </div>
          <div className="bg-ink rounded-3xl p-8 md:p-10 text-center">
            <p className="font-dm text-white/60 text-sm uppercase tracking-widest mb-3">
              Per Flat · Annual Billing
            </p>
            <div className="mb-2">
              <span className="font-syne text-6xl font-bold text-white">
                ₹5
              </span>
              <span className="font-dm text-white/60 text-lg ml-2">
                /flat/month
              </span>
            </div>
            <p className="font-dm text-accent font-semibold text-sm mb-8">
              All features included
            </p>
            <ul className="text-left space-y-3 mb-10">
              {includedFeatures.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-dm text-white/80 text-sm"
                >
                  <span className="text-accent font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://mysociety.saurabhinfosys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-accent text-white font-syne font-semibold text-base py-4 rounded-xl hover:bg-accent-dark transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-bg py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-5xl mb-6">💬</div>
          <blockquote className="font-dm text-ink text-xl md:text-2xl leading-relaxed mb-8">
            &ldquo;MySociety has made managing our 200-flat complex a breeze.
            Maintenance collection used to be a nightmare — now residents pay
            online and the committee always knows who is due. Absolutely
            love it.&rdquo;
          </blockquote>
          <p className="font-syne font-semibold text-ink text-base">
            Amit Patel
          </p>
          <p className="font-dm text-ink-light text-sm mt-1">
            Secretary, Shivalik Heights, Ahmedabad
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ink py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Bring your society online today
          </h2>
          <p className="font-dm text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Join hundreds of societies already managing smarter with MySociety.
            Setup takes less than a day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mysociety.saurabhinfosys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white font-syne font-semibold text-base px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors"
            >
              Visit MySociety
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
