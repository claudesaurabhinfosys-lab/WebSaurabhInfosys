import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Saurabh Infosys | Get a Free Quote — Ahmedabad, India",
  description: "Start your project with Saurabh Infosys. Chat on WhatsApp, email, or fill our project brief. We reply within 2 hours. AI agents, Flutter apps, SaaS & GPS systems.",
  keywords: ["contact Saurabh Infosys", "hire software developer India", "get software quote India", "software company contact Ahmedabad", "outsource development India"],
  alternates: { canonical: "https://saurabhinfosys.com/contact" },
  openGraph: { title: "Contact Saurabh Infosys — Get a Free Quote", description: "Start your project today. We reply within 2 hours on WhatsApp.", url: "https://saurabhinfosys.com/contact", type: "website" },
  twitter: { card: "summary_large_image", title: "Contact Saurabh Infosys", description: "Start your project. We reply within 2 hours on WhatsApp." },
};

const BUDGET_OPTIONS = [
  "Under ₹50K",
  "₹50K–₹2L",
  "₹2L–₹5L",
  "₹5L+",
  "Let's discuss",
];

const TARGET_MARKETS = [
  { flag: "🇮🇳", label: "India" },
  { flag: "🇬🇧", label: "UK" },
  { flag: "🇺🇸", label: "USA" },
  { flag: "🇦🇪", label: "Gulf" },
  { flag: "🇦🇺", label: "Australia" },
];

export default function ContactPage() {
  return (
    <main className="font-dm">
      {/* Hero */}
      <section className="bg-ink py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-syne font-semibold text-sm uppercase tracking-widest mb-4">
            Get In Touch
          </p>
          <h1 className="font-syne text-4xl md:text-6xl font-bold text-bg leading-tight max-w-3xl">
            Let&apos;s build something{" "}
            <span className="text-accent">together</span>
          </h1>
          <p className="mt-6 text-bg/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            We prefer WhatsApp — it&apos;s fast, personal, and we&apos;re always
            on it. Send us a message and expect a reply within 2 hours on
            business days.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-bg py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left: Contact Methods */}
            <div className="space-y-6">
              <h2 className="font-syne text-2xl font-bold text-ink mb-8">
                Contact methods
              </h2>

              {/* WhatsApp — Primary */}
              <div className="bg-ink rounded-2xl p-8 border border-green-500/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-syne font-bold text-bg text-lg">WhatsApp</h3>
                      <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                        Preferred
                      </span>
                    </div>
                    <p className="text-bg/50 text-sm">Usually reply within 2 hours</p>
                  </div>
                </div>
                <p className="text-bg/60 text-sm mb-6 leading-relaxed">
                  The fastest way to reach us. Describe your project and
                  we&apos;ll get back to you quickly with honest advice — no
                  sales pitch.
                </p>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-syne font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                >
                  Chat Now on WhatsApp
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Email */}
              <div className="bg-card rounded-2xl p-6 border border-ink/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-ink/5 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-ink/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <h3 className="font-syne font-bold text-ink text-base">Email</h3>
                </div>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-accent font-semibold hover:underline text-sm"
                >
                  {COMPANY.email}
                </a>
                <p className="text-ink/40 text-xs mt-1">We reply within 24 hours</p>
              </div>

              {/* Phone */}
              <div className="bg-card rounded-2xl p-6 border border-ink/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-ink/5 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-ink/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <h3 className="font-syne font-bold text-ink text-base">Phone</h3>
                </div>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="text-accent font-semibold hover:underline text-sm"
                >
                  {COMPANY.phone}
                </a>
                <p className="text-ink/40 text-xs mt-1">Mon–Sat, 10am–7pm IST</p>
              </div>

              {/* Office Info */}
              <div className="bg-card rounded-2xl p-6 border border-ink/5">
                <h3 className="font-syne font-bold text-ink text-base mb-4">
                  Office
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-ink/40 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span className="text-ink/60">{COMPANY.location}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-ink/40 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-ink/60">IST (UTC+5:30) — Mon–Sat, 10am–7pm</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-ink/40 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
                    </svg>
                    <span className="text-ink/60">{COMPANY.website}</span>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-6 bg-ink/5 rounded-xl h-32 flex items-center justify-center border border-ink/10">
                  <p className="text-ink/30 text-sm text-center px-4">
                    Ahmedabad, Gujarat, India — map coming soon
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <h2 className="font-syne text-2xl font-bold text-ink mb-8">
                Send us a message
              </h2>
              <form
                action="/api/contact"
                method="POST"
                className="bg-card rounded-2xl p-8 border border-ink/5 space-y-6"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-ink/70 text-sm font-medium mb-2"
                  >
                    Your name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Rahul Sharma"
                    className="w-full bg-bg border border-ink/10 rounded-xl px-4 py-3 text-ink placeholder-ink/30 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-ink/70 text-sm font-medium mb-2"
                  >
                    Email address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="rahul@company.com"
                    className="w-full bg-bg border border-ink/10 rounded-xl px-4 py-3 text-ink placeholder-ink/30 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-ink/70 text-sm font-medium mb-2"
                  >
                    Tell us about your project{" "}
                    <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="I need a Flutter app that does X, Y, Z. My timeline is..."
                    className="w-full bg-bg border border-ink/10 rounded-xl px-4 py-3 text-ink placeholder-ink/30 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-ink/70 text-sm font-medium mb-2"
                  >
                    Budget range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full bg-bg border border-ink/10 rounded-xl px-4 py-3 text-ink text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a range…</option>
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-syne font-semibold px-6 py-4 rounded-xl transition-colors text-base"
                >
                  Send Message
                </button>

                <p className="text-ink/30 text-xs text-center">
                  Or just WhatsApp us — it&apos;s faster.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Target Markets Strip */}
      <section className="bg-card py-12 border-t border-ink/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-ink/40 text-sm font-medium mb-6 uppercase tracking-widest">
            We work with clients from
          </p>
          <div className="flex items-center justify-center flex-wrap gap-6">
            {TARGET_MARKETS.map((m) => (
              <div
                key={m.label}
                className="flex items-center gap-2 bg-bg rounded-xl px-5 py-3 border border-ink/5"
              >
                <span className="text-xl">{m.flag}</span>
                <span className="font-syne font-semibold text-ink text-sm">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
