import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Integration & App Development Company Singapore | Saurabh Infosys",
  description:
    "Saurabh Infosys is a trusted AI integration, chatbot development, and mobile app development company serving Singapore businesses. 4.9-star Clutch-rated. Built booking apps, service marketplace platforms, and AI solutions for Singapore clients. Get your AI solution in weeks.",
  keywords: [
    "AI integration company Singapore",
    "AI chatbot development Singapore",
    "mobile app development company Singapore",
    "AI automation services Singapore",
    "chatbot development Singapore",
    "generative AI development Singapore",
    "Flutter app development Singapore",
    "AI-enabled app development Singapore",
    "MVP development company Singapore",
    "booking app development Singapore",
    "beauty salon app Singapore",
    "home services app Singapore",
    "ChatGPT integration for business Singapore",
    "WhatsApp chatbot Singapore",
    "AI automation company Singapore",
    "AI software development Singapore",
    "hire AI developer Singapore",
    "AI integration for SME Singapore",
    "LLM development Singapore",
    "custom AI chatbot Singapore",
    "service marketplace app Singapore",
    "appointment booking app Singapore",
  ],
  alternates: { canonical: "https://saurabhinfosys.com/singapore" },
  openGraph: {
    title: "AI Integration & App Development Company Singapore | Saurabh Infosys",
    description:
      "Trusted AI integration and mobile app development for Singapore businesses. 4.9-star Clutch. Built booking apps, service marketplaces, and AI chatbots for Singapore clients.",
    url: "https://saurabhinfosys.com/singapore",
    type: "website",
  },
};

const SG_CLIENTS = [
  {
    name: "SureHands Agency",
    url: "https://surehandagency.com",
    industry: "Domestic Services",
    service: "Service Matching Platform",
    description:
      "Built the digital platform for a Singapore Ministry of Manpower licensed domestic helper placement agency. Streamlines matching families with domestic helpers from Myanmar and Indonesia, handling new placements, transfers, renewals, and long-term aftercare.",
    tech: ["React", "Node.js", "PostgreSQL", "REST API"],
    result: "Digitised the full placement workflow for a licensed Singapore agency serving hundreds of families.",
  },
  {
    name: "Meow Future Labs",
    url: "https://www.meowfuturelabs.com",
    industry: "Beauty & Wellness Tech",
    service: "Booking & Management Platform",
    description:
      "Built the technology backbone for the Meow Group of beauty and wellness brands in Singapore. Powers online booking, appointment management, and customer engagement across multiple salon and clinic locations island-wide.",
    tech: ["Flutter", "Firebase", "Booking Engine", "Push Notifications"],
    result: "Powers appointment booking across multiple Singapore locations for the entire Meow brand group.",
  },
  {
    name: "Meow Aesthetics",
    url: "https://www.meowaesthetics.com",
    industry: "Beauty & Nail Services",
    service: "Mobile Booking App",
    description:
      "Developed the mobile booking app for a premium nail salon and beauty clinic operating across Marine Parade Central and Woods Square in Singapore. Services include gel manicures, nail art, hydrafacials, and lash extensions with online booking and loyalty features.",
    tech: ["Flutter", "Firebase", "Stripe", "Calendar API"],
    result: "Serving clients across Singapore East Side with online booking reducing no-shows via automated reminders.",
  },
  {
    name: "Meow Renovations",
    url: "https://meowrenovations.com",
    industry: "Home Services",
    service: "Home Services Booking Platform",
    description:
      "Built the online platform for a Singapore renovation and home services company, enabling homeowners to browse services, request quotations, and book appointments with contractors. Integrated with WhatsApp for instant communication.",
    tech: ["React", "Node.js", "WhatsApp API", "Google Maps"],
    result: "Streamlined lead capture and project booking for a growing Singapore home services business.",
  },
  {
    name: "Meow Tampines",
    url: "https://www.meowtampines.com",
    industry: "Beauty & Wellness",
    service: "Salon Booking App",
    description:
      "Developed the dedicated booking application for the Tampines location of the Meow beauty group. Features real-time slot availability, stylist selection, service packages, and automated appointment reminders for Singapore customers.",
    tech: ["Flutter", "Firebase", "SMS Gateway", "Payment Gateway"],
    result: "Reduced booking friction and increased repeat customer rate for the Tampines salon location.",
  },
];

const SERVICES_SG = [
  {
    title: "AI Chatbot for Singapore Businesses",
    desc: "Custom AI chatbots for Singapore SMEs and enterprises. WhatsApp AI bots, customer service agents, and GPT-powered internal tools in English and Mandarin. Built with Singapore PDPA compliance in mind.",
  },
  {
    title: "Booking & Appointment App Development",
    desc: "End-to-end booking platforms for Singapore service businesses including beauty salons, clinics, home services, and fitness centres. Real-time availability, automated reminders, and payment integration.",
  },
  {
    title: "AI Integration into Existing Systems",
    desc: "We add AI capabilities to your existing Singapore business software. CRM integrations, AI-powered analytics, and chatbots added to your website or WhatsApp Business account.",
  },
  {
    title: "Service Marketplace Platforms",
    desc: "Multi-sided marketplace apps connecting service providers and customers in Singapore. We have built platforms for domestic helpers, beauty services, and home renovation.",
  },
  {
    title: "Flutter Mobile App Development",
    desc: "Cross-platform iOS and Android apps for Singapore businesses. Single codebase, App Store and Play Store ready. Delivered apps for Singapore clients in beauty, services, and logistics sectors.",
  },
  {
    title: "AI-Enabled SaaS & MVP Development",
    desc: "Ship a production-ready AI-enabled product in 2 weeks using vibe coding. Ideal for Singapore startups and SMEs looking to launch quickly and iterate based on real user feedback.",
  },
];

const FAQS = [
  {
    q: "Can Saurabh Infosys build an AI chatbot for my Singapore business?",
    a: "Yes. We build custom AI chatbots for Singapore businesses using GPT-4o, Claude, and Gemini APIs. Our chatbots support English and Mandarin, integrate with WhatsApp Business, and are built with Singapore PDPA data privacy requirements in mind. We have delivered chatbot and booking platform solutions for multiple Singapore clients.",
  },
  {
    q: "What Singapore businesses has Saurabh Infosys worked with?",
    a: "We have built digital platforms and mobile apps for several Singapore businesses including SureHands Agency, a Ministry of Manpower licensed domestic helper placement firm, and the Meow Group of beauty and wellness brands operating across Marine Parade, Tampines, and Woods Square in Singapore.",
  },
  {
    q: "Can you build a booking app for my Singapore salon, clinic, or home services business?",
    a: "Yes. We specialise in booking and appointment platforms for Singapore service businesses. We have built booking apps for nail salons, beauty clinics, and home services businesses in Singapore with real-time slot management, automated reminders, stylist or provider selection, and payment integration.",
  },
  {
    q: "How long does it take to build an app or AI solution for a Singapore company?",
    a: "A booking or service marketplace app typically takes 4 to 6 weeks. AI chatbot integrations take 1 to 2 weeks. Full AI-enabled SaaS or marketplace platforms take 6 to 10 weeks. We use AI-accelerated development to deliver faster than traditional agencies.",
  },
  {
    q: "What is the cost of building an app or AI integration for a Singapore SME?",
    a: "AI chatbot integrations start from SGD 3,000 to 7,000 for a production-ready bot. Booking apps and service platforms range from SGD 10,000 to 40,000 depending on features and complexity. Singapore businesses get excellent value compared to local Singapore development rates.",
  },
  {
    q: "Is Saurabh Infosys PDPA compliant for Singapore client data?",
    a: "Yes. We build all Singapore projects with data privacy best practices including encrypted storage, minimal data collection principles, and clear data processing agreements aligned with Singapore's Personal Data Protection Act.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://saurabhinfosys.com/#organization",
      name: "Saurabh Infosys",
      url: "https://saurabhinfosys.com",
      logo: "https://saurabhinfosys.com/images/logo.png",
      description:
        "AI integration, chatbot development, and mobile app development company serving businesses in Singapore, USA, UK, and India.",
      areaServed: [
        { "@type": "Country", name: "Singapore" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "India" },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "33",
        bestRating: "5",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "Service",
      name: "AI Integration and App Development for Singapore Businesses",
      provider: { "@id": "https://saurabhinfosys.com/#organization" },
      areaServed: { "@type": "Country", name: "Singapore" },
      description:
        "Custom AI chatbot, booking platform, and mobile app development for Singapore businesses. GPT-4o, Claude, and Gemini integrations. 4.9-star Clutch-rated. Delivered in weeks.",
      url: "https://saurabhinfosys.com/singapore",
    },
  ],
};

export default function SingaporePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-red-600/10 border border-red-500/20 text-red-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Serving Singapore Businesses
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            AI Integration &amp; App Development<br />
            <span className="text-red-400">Company for Singapore</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            We build AI chatbots, booking platforms, and mobile apps for Singapore businesses delivered in weeks, not months.
            4.9-star on Clutch with real Singapore clients in beauty, wellness, home services, and domestic services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
              Get a Free Consultation
            </Link>
            <Link href="/portfolio" className="border border-gray-600 hover:border-gray-400 text-gray-300 font-semibold px-8 py-4 rounded-xl transition-colors">
              View Singapore Client Work
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 border-y border-gray-800 py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "80+", label: "Global Clients" },
            { value: "4.9 Stars", label: "Clutch Rating" },
            { value: "5+", label: "Singapore Projects" },
            { value: "2 Weeks", label: "Average Delivery" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-red-400">{s.value}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-950 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">Real Singapore Client Projects</h2>
          <p className="text-gray-400 text-center mb-14 max-w-2xl mx-auto">
            Production apps and digital platforms built for and used by Singapore businesses and their customers.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {SG_CLIENTS.map((client) => (
              <div key={client.name} className="bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-red-500/40 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <a href={client.url} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white hover:text-red-400 transition-colors">
                      {client.name}
                    </a>
                    <div className="text-red-400 text-sm mt-1">{client.industry} · Singapore</div>
                  </div>
                  <span className="text-xs bg-red-600/10 border border-red-500/20 text-red-400 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                    {client.service}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{client.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {client.tech.map((t) => (
                    <span key={t} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-md">{t}</span>
                  ))}
                </div>
                <div className="text-sm text-green-400 font-medium">Result: {client.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">AI & App Services for Singapore Businesses</h2>
          <p className="text-gray-400 text-center mb-14 max-w-2xl mx-auto">
            From WhatsApp AI bots to full booking platforms. We cover the full digital development stack for Singapore companies.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_SG.map((s) => (
              <div key={s.title} className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-red-500/30 transition-colors">
                <h3 className="text-white font-semibold text-lg mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-gray-900 border border-gray-800 rounded-2xl p-7">
                <h3 className="text-white font-semibold text-lg mb-3">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-700 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Build Your Singapore AI Solution?</h2>
          <p className="text-red-100 text-lg mb-8">
            Get a free 30-minute consultation with our AI team. We will scope your project and give you a delivery timeline within 24 hours.
          </p>
          <Link href="/contact" className="bg-white text-red-700 hover:bg-red-50 font-bold px-10 py-4 rounded-xl transition-colors inline-block">
            Start Your Singapore Project
          </Link>
        </div>
      </section>
    </>
  );
}
