import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Integration & App Development Company USA | Saurabh Infosys",
  description:
    "Saurabh Infosys is a trusted AI integration, chatbot development, and mobile app development company serving US businesses. 4.9-star Clutch-rated. Built apps for US clients in retail, fitness, luxury auto, and on-demand services. Get your AI solution in weeks.",
  keywords: [
    "AI integration company USA",
    "AI chatbot development USA",
    "mobile app development company USA",
    "AI automation services USA",
    "chatbot development USA",
    "generative AI development USA",
    "Flutter app development USA",
    "AI-enabled app development USA",
    "MVP development company USA",
    "on-demand app development USA",
    "fitness app development USA",
    "ChatGPT integration for business USA",
    "WhatsApp chatbot development USA",
    "AI automation company USA",
    "AI software development USA",
    "hire AI developer USA",
    "AI integration for small business USA",
    "vibe coding company USA",
    "LLM development USA",
    "custom AI chatbot USA",
  ],
  alternates: { canonical: "https://saurabhinfosys.com/usa" },
  openGraph: {
    title: "AI Integration & App Development Company USA | Saurabh Infosys",
    description:
      "Trusted AI integration and mobile app development for US businesses. 4.9-star Clutch. Real results for US clients in retail, fitness, luxury auto and on-demand delivery.",
    url: "https://saurabhinfosys.com/usa",
    type: "website",
  },
};

const US_CLIENTS = [
  {
    name: "Digital Retail Display",
    url: "https://digitalretaildisplay.com",
    industry: "Retail Technology",
    service: "AI-Enabled Digital Platform",
    description:
      "Built an interactive digital touchscreen selling platform that lets retailers sell products without physical inventory. Uses AI-driven product recommendations and customer engagement flows across beauty, travel retail, and general retail sectors.",
    tech: ["React", "Node.js", "AI Recommendations", "REST API"],
    result: "Deployed across multiple US retail locations, eliminating inventory overhead while increasing basket size.",
  },
  {
    name: "Exotics Now",
    url: "https://exoticsnow.com",
    industry: "Luxury Automotive",
    service: "Mobile App & Booking Platform",
    description:
      "Built the iOS and Android app for a US luxury car rental and sales platform featuring Lamborghinis, Ferraris, Rolls-Royces, and BMWs. Integrated AI-powered vehicle matching, financing pre-qualification, and chauffeur booking flows.",
    tech: ["Flutter", "Firebase", "Stripe", "AI Matching"],
    result: "Live on App Store and Play Store, handling reservations and vehicle sales across multiple US states.",
  },
  {
    name: "CURVD",
    url: "https://curvdapp.com",
    industry: "Health & Fitness",
    service: "AI Fitness Platform",
    description:
      "Developed a full-stack AI fitness platform generating approximately $500,000 per year in revenue. Delivers personalised workout plans, AI-generated meal prep guides, and a community engine with adaptive difficulty based on user progress.",
    tech: ["Flutter", "OpenAI", "Firebase", "Node.js"],
    result: "Approx $500K ARR. Thousands of active users with AI-personalised plans and community features.",
  },
  {
    name: "Washry",
    url: "https://washry.app",
    industry: "On-Demand Services",
    service: "On-Demand Laundry Marketplace",
    description:
      "Built the complete three-sided marketplace covering customer app, driver app, and laundry partner app for an on-demand laundry and dry-cleaning platform. Features real-time order tracking, driver dispatch, and route optimisation.",
    tech: ["Flutter", "Laravel", "Google Maps", "Push Notifications"],
    result: "Connecting users, drivers, and dry-cleaning partners with real-time logistics and automated dispatch.",
  },
];

const SERVICES_USA = [
  {
    title: "AI Chatbot & Agent Development",
    desc: "Custom AI chatbots and agents for US businesses covering customer support, lead qualification, WhatsApp AI, and ChatGPT-powered internal tools. Deployed in days, not months.",
  },
  {
    title: "AI Integration into Existing Software",
    desc: "We integrate GPT-4o, Claude, Gemini, and open-source LLMs into your existing CRM, ERP, or business platform without rebuilding from scratch.",
  },
  {
    title: "Flutter Mobile App Development",
    desc: "Cross-platform iOS and Android apps from a single codebase. We have shipped apps with 30,000 plus users across 20 countries including the US market.",
  },
  {
    title: "AI-Enabled SaaS & MVP Development",
    desc: "Ship a production-ready AI-enabled SaaS or MVP in 2 weeks using vibe coding. Ideal for US startups looking to validate fast and raise capital.",
  },
  {
    title: "On-Demand & Marketplace Platforms",
    desc: "Three-sided marketplace apps covering user, driver or provider, and admin with real-time tracking, payments, and AI dispatch.",
  },
  {
    title: "RAG Knowledge Bases & AI Search",
    desc: "Retrieval-Augmented Generation systems that let your customers or staff query your product catalogue, documents, or knowledge base in plain English.",
  },
];

const FAQS = [
  {
    q: "Can Saurabh Infosys build an AI chatbot for my US business?",
    a: "Yes. We build custom AI chatbots using GPT-4o, Claude, and Gemini APIs for US businesses across retail, healthcare, real estate, and e-commerce. We have delivered chatbot solutions for US clients in weeks with full integration into websites, WhatsApp, or internal tools.",
  },
  {
    q: "How do you integrate AI into an existing software system?",
    a: "We connect your existing CRM, ERP, or web platform to AI via API integrations. We have integrated AI into platforms using REST APIs, webhooks, and direct LLM SDK integrations for US clients including retail and fitness platforms.",
  },
  {
    q: "What is the typical cost to build an AI integration or chatbot for a US company?",
    a: "AI chatbot integrations typically start from $2,000 to $5,000 for a production-ready bot. Full mobile apps or AI-enabled SaaS platforms range from $8,000 to $30,000 depending on complexity. US clients get significantly better value compared to hiring US-based developers at equivalent hourly rates.",
  },
  {
    q: "How long does it take to deliver an AI integration project?",
    a: "Simple AI chatbot integrations take 1 to 2 weeks. Full mobile apps or AI-enabled platforms take 4 to 8 weeks using our AI-accelerated vibe coding approach. We delivered CURVD, a full AI fitness app, in under 8 weeks.",
  },
  {
    q: "Do you sign NDAs and provide IP ownership for US clients?",
    a: "Yes. All US clients receive full IP ownership transfer, NDA protection, and source code handover on project completion. We operate transparently with US-standard contracts.",
  },
  {
    q: "What US businesses has Saurabh Infosys worked with?",
    a: "We have worked with US businesses including Digital Retail Display in retail tech, Exotics Now in luxury automotive, CURVD in fitness with approximately $500K ARR, and Washry in on-demand laundry services. Our US clients span retail, automotive, health and fitness, and on-demand service sectors.",
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
        "AI integration, chatbot development, and mobile app development company serving businesses in the USA, Singapore, UK, and India.",
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Singapore" },
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
      name: "AI Integration and Chatbot Development for US Businesses",
      provider: { "@id": "https://saurabhinfosys.com/#organization" },
      areaServed: { "@type": "Country", name: "United States" },
      description:
        "Custom AI chatbot, AI agent, and mobile app development for US businesses. GPT-4o, Claude, and Gemini integrations. 4.9-star Clutch-rated. Delivered in weeks.",
      url: "https://saurabhinfosys.com/usa",
    },
  ],
};

export default function USAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Serving US Businesses
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            AI Integration &amp; App Development<br />
            <span className="text-blue-400">Company for USA</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            We build AI chatbots, AI integrations, and mobile apps for US businesses delivered in weeks, not months.
            4.9-star on Clutch with real US clients across retail, fitness, automotive, and on-demand services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
              Get a Free AI Consultation
            </Link>
            <Link href="/portfolio" className="border border-gray-600 hover:border-gray-400 text-gray-300 font-semibold px-8 py-4 rounded-xl transition-colors">
              View US Client Work
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 border-y border-gray-800 py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "80+", label: "Global Clients" },
            { value: "4.9 Stars", label: "Clutch Rating" },
            { value: "4+", label: "US Projects Live" },
            { value: "2 Weeks", label: "Average Delivery" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-blue-400">{s.value}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-950 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">Real US Client Projects</h2>
          <p className="text-gray-400 text-center mb-14 max-w-2xl mx-auto">
            Production apps and AI integrations used by thousands of customers across the United States.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {US_CLIENTS.map((client) => (
              <div key={client.name} className="bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-blue-500/40 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <a href={client.url} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                      {client.name}
                    </a>
                    <div className="text-blue-400 text-sm mt-1">{client.industry} · USA</div>
                  </div>
                  <span className="text-xs bg-blue-600/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">AI Services for US Businesses</h2>
          <p className="text-gray-400 text-center mb-14 max-w-2xl mx-auto">
            From ChatGPT integrations to full mobile apps. We cover the full AI development stack for US companies.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_USA.map((s) => (
              <div key={s.title} className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors">
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

      <section className="bg-blue-600 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Build Your AI Solution?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Get a free 30-minute consultation with our AI team. We will scope your project and give you a delivery timeline within 24 hours.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-10 py-4 rounded-xl transition-colors inline-block">
            Start Your AI Project
          </Link>
        </div>
      </section>
    </>
  );
}
