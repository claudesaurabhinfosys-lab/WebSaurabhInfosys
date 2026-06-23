import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Saurabh Infosys | Get a Free Quote — Ahmedabad, India",
  description: "Start your project with Saurabh Infosys. Chat on WhatsApp, email, or fill our project brief. We reply within 2 hours. AI agents, Flutter apps, SaaS & GPS systems.",
  keywords: ["contact Saurabh Infosys", "hire software developer India", "get software quote India", "software company contact Ahmedabad", "outsource development India"],
  alternates: { canonical: "https://saurabhinfosys.com/contact" },
  openGraph: { title: "Contact Saurabh Infosys — Get a Free Quote", description: "Start your project today. We reply within 2 hours on WhatsApp.", url: "https://saurabhinfosys.com/contact", type: "website" },
  twitter: { card: "summary_large_image", title: "Contact Saurabh Infosys", description: "Start your project. We reply within 2 hours on WhatsApp." },
};

const TARGET_MARKETS = [
  { flag: "🇮🇳", label: "India" },
  { flag: "🇬🇧", label: "UK" },
  { flag: "🇺🇸", label: "USA" },
  { flag: "🇦🇪", label: "Gulf" },
  { flag: "🇦🇺", label: "Australia" },
];

const contactMethods = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    badge: "Preferred",
    badgeColor: "bg-green-100 text-green-700",
    iconBg: "bg-green-100 text-green-600",
    value: "+91 8735001217",
    sub: "Usually reply within 2 hours",
    href: `https://wa.me/${COMPANY.whatsapp}`,
    external: true,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    iconBg: "bg-accent/10 text-accent",
    value: COMPANY.email,
    sub: "Reply within 24 hours",
    href: `mailto:${COMPANY.email}`,
    external: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Phone",
    iconBg: "bg-purple-100 text-purple-600",
    value: COMPANY.phone,
    sub: "Mon–Sat, 10am–7pm IST",
    href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <main className="font-dm">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-purple-500/6 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/8 border border-accent/15 text-accent text-sm font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for new projects
          </span>
          <h1 className="font-syne text-4xl md:text-6xl font-bold text-ink leading-tight max-w-3xl mb-6">
            Let&apos;s build something{" "}
            <span className="text-accent">remarkable</span>
          </h1>
          <p className="text-ink-light text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            We prefer WhatsApp — it&apos;s fast and personal. Send us a message and expect a reply within 2 hours on business days.
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { label: "150+ Projects", icon: "🚀" },
              { label: "2hr Response", icon: "⚡" },
              { label: "4.9★ Clutch", icon: "⭐" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 text-sm font-semibold text-ink/70">
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="bg-bg py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Left: Contact info (2/5) */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="font-syne text-xl font-bold text-ink mb-6">Reach us directly</h2>

              {contactMethods.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.external ? "_blank" : undefined}
                  rel={m.external ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-ink/6 hover:border-accent/30 hover:shadow-md transition-all duration-200 group"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${m.iconBg}`}>
                    {m.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-syne font-bold text-ink text-sm">{m.label}</span>
                      {m.badge && (
                        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${m.badgeColor}`}>{m.badge}</span>
                      )}
                    </div>
                    <p className="text-ink font-medium text-sm group-hover:text-accent transition-colors truncate">{m.value}</p>
                    <p className="text-ink/40 text-xs mt-0.5">{m.sub}</p>
                  </div>
                </a>
              ))}

              {/* Office card */}
              <div className="p-5 bg-white rounded-2xl border border-ink/6 space-y-3">
                <h3 className="font-syne font-bold text-ink text-sm">Office</h3>
                <div className="space-y-2.5 text-sm text-ink/60">
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-ink/30 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>{COMPANY.location}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-ink/30 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Mon–Sat, 10am–7pm IST (UTC+5:30)</span>
                  </div>
                </div>
              </div>

              {/* Markets */}
              <div className="p-5 bg-white rounded-2xl border border-ink/6">
                <h3 className="font-syne font-bold text-ink text-sm mb-3">We serve clients in</h3>
                <div className="flex flex-wrap gap-2">
                  {TARGET_MARKETS.map((m) => (
                    <span key={m.label} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-ink/6 rounded-full text-xs font-semibold text-ink/70">
                      {m.flag} {m.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form (3/5) */}
            <div className="lg:col-span-3">
              <h2 className="font-syne text-xl font-bold text-ink mb-6">Send us a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-syne text-2xl font-bold text-ink mb-2">Find Us</h2>
            <p className="text-ink-light text-sm">{COMPANY.location}</p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-ink/8 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1!2d72.5490!3d23.0169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba8f6137%3A0x7d1546e60f432b39!2sSaurabh%20Infosys!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Saurabh Infosys Location"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
