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

const TARGET_MARKETS = ["🇮🇳 India", "🇬🇧 UK", "🇺🇸 USA", "🇦🇪 Gulf", "🇦🇺 Australia"];

export default function ContactPage() {
  return (
    <main className="font-dm">
      {/* Hero + Form — everything above the fold */}
      <section className="relative py-16 md:py-24">

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: Info */}
            <div className="flex flex-col gap-8">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/8 border border-accent/15 text-accent text-sm font-semibold mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Available for new projects
                </span>
                <h1 className="font-syne text-4xl md:text-5xl font-bold text-ink leading-tight mb-4">
                  Let&apos;s build something{" "}
                  <span className="text-accent">remarkable</span>
                </h1>
                <p className="text-ink-light text-lg leading-relaxed">
                  We reply within 2 hours on business days. WhatsApp is fastest — or fill the form and we&apos;ll get back to you.
                </p>
              </div>

              {/* Single merged contact card */}
              <div className="bg-white rounded-3xl border border-ink/8 shadow-sm overflow-hidden">
                {/* WhatsApp — highlighted */}
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-green-50 border-b border-green-100 hover:bg-green-100 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-syne font-bold text-ink text-sm">WhatsApp</span>
                      <span className="text-xs px-2 py-0.5 bg-green-200 text-green-800 rounded-full font-semibold">Fastest</span>
                    </div>
                    <p className="text-ink/60 text-xs mt-0.5">{COMPANY.phone} · Usually within 2 hrs</p>
                  </div>
                  <svg className="w-4 h-4 text-green-600 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-4 p-5 border-b border-ink/6 hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-syne font-bold text-ink text-sm">Email</p>
                    <p className="text-ink/60 text-xs mt-0.5 truncate">{COMPANY.email} · Within 24 hrs</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 p-5 border-b border-ink/6 hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-syne font-bold text-ink text-sm">Phone</p>
                    <p className="text-ink/60 text-xs mt-0.5">{COMPANY.phone} · Mon–Sat, 10am–7pm IST</p>
                  </div>
                </a>

                {/* Office + Markets */}
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <svg className="w-4 h-4 text-ink/30 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p className="text-ink/60 text-xs leading-relaxed">Aastha-99, Behin Bharvi Tower, Nr NH-8, CTM, Amraiwadi, Ahmedabad 380026</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {TARGET_MARKETS.map((m) => (
                      <span key={m} className="text-xs px-2.5 py-1 bg-gray-50 border border-ink/8 rounded-full text-ink/60 font-medium">{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <h2 className="font-syne text-xl font-bold text-ink mb-5">Send us a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="font-syne text-xl font-bold text-ink mb-1">Find Us</h2>
            <p className="text-ink-light text-sm">Aastha-99, Behin Bharvi Tower, CTM Amraiwadi, Ahmedabad 380026</p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-ink/8 shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=XJWP%2BXP+Ahmedabad,+Gujarat&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
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
