import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Saurabh Infosys — AI Automation, AI Integration & Vibe Coding | Ahmedabad",
    template: "%s | Saurabh Infosys",
  },
  description:
    "Top AI automation & AI integration company in Ahmedabad. We build AI agents, AI-enabled apps, vibe coding MVPs, Flutter apps & SaaS platforms. 80+ clients, 4.9★ Clutch. Serving India, UK, USA & Gulf.",
  keywords: [
    "AI automation services India",
    "AI integration services Ahmedabad",
    "agentic AI development India",
    "generative AI development India",
    "GenAI services India",
    "vibe coding India",
    "AI enabled apps development",
    "AI agents development India",
    "automation services Ahmedabad",
    "AI software company India",
    "Flutter app development company",
    "SaaS development Ahmedabad",
    "MVP development India",
    "WhatsApp bot development India",
    "business automation India",
    "AI integration company Gujarat",
    "vibe coding services India",
    "AI-powered app development",
    "AI consulting services India",
    "custom software development Gujarat",
    "school management software India",
    "society management software India",
    "bulk WhatsApp marketing India",
    "LLM development India",
    "conversational AI India",
    "AI copilot development India",
    "ChatGPT integration India",
    "enterprise AI solutions India",
    "workflow automation India",
    "intelligent automation India",
    "multi-agent AI development India",
    "AI voice agent development India",
    "AI-first app development India",
    "AI automation company Ahmedabad",
    "AI integration services India",
    "AI process automation India",
    "enterprise AI integration India",
    "custom AI model development India",
  ],
  metadataBase: new URL("https://saurabhinfosys.com"),
  alternates: { canonical: "https://saurabhinfosys.com" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://saurabhinfosys.com",
    siteName: "Saurabh Infosys",
    title: "Saurabh Infosys — AI Automation, AI Integration & Vibe Coding | Ahmedabad",
    description: "Top AI automation & AI integration company in Ahmedabad. AI agents, AI-enabled apps, vibe coding MVPs, Flutter apps & SaaS. 80+ clients, 4.9★ Clutch.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Infosys — AI Automation & Integration Studio",
    description: "AI automation, AI integration, vibe coding, AI-enabled apps. 80+ clients. 4.9★ Clutch. Ahmedabad, India.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Saurabh Infosys",
            url: "https://saurabhinfosys.com",
            logo: "https://saurabhinfosys.com/images/logo.png",
            description: "AI automation, AI integration and vibe coding company in Ahmedabad, India. Specialists in AI agents, AI-enabled apps, Flutter apps, SaaS platforms, and GPS fleet management.",
            address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressRegion: "Gujarat", addressCountry: "IN" },
            contactPoint: { "@type": "ContactPoint", contactType: "sales", availableLanguage: ["English", "Hindi"] },
            sameAs: ["https://clutch.co"],
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "33", bestRating: "5" },
            knowsAbout: ["AI Automation", "AI Integration", "Agentic AI", "Generative AI", "GenAI Services", "Vibe Coding", "AI-enabled Apps", "WhatsApp Bots", "RAG Systems", "Flutter Development", "SaaS Platforms", "Business Automation", "AI Consulting", "LLM Development", "Conversational AI", "AI Copilots", "ChatGPT Integration", "Enterprise AI Solutions", "Workflow Automation", "Intelligent Automation", "Multi-Agent AI Systems", "AI Voice Agents", "AI-First Development", "Process Automation", "Enterprise AI Integration", "Custom AI Model Development"],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "AI & Software Development Services",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation Services", description: "WhatsApp bots, RAG knowledge systems, and voice agents that automate business workflows 24/7." } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Integration Services", description: "Integrate AI capabilities into existing business software, CRMs, and workflows." } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vibe Coding / MVP Development", description: "AI-accelerated MVP development — ship a production-ready app in 2 weeks." } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Enabled App Development", description: "Mobile and web apps with built-in AI features — chatbots, recommendations, automation." } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flutter Mobile App Development", description: "Cross-platform iOS & Android apps with a single codebase." } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Platform Development", description: "End-to-end SaaS platforms with multi-tenancy, billing, and admin dashboards." } },
              ],
            },
          }) }}
        />
      </head>
      <body className="font-montserrat bg-bg text-ink antialiased">

        {/* Global animated background — grid + floating orbs */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute -top-[20%] left-[15%] w-[800px] h-[800px] rounded-full bg-accent/8 blur-[160px] animate-float" />
          <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/8 blur-[140px] animate-float2" />
          <div className="absolute -bottom-[20%] left-[40%] w-[500px] h-[500px] rounded-full bg-blue-600/6 blur-[120px] animate-float" />
        </div>
        {/* Google Analytics */}
        <Script
          id="ga-inline"
          strategy="beforeInteractive"
        >{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-6DRPCYYNQ5');`}</Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6DRPCYYNQ5"
          strategy="afterInteractive"
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}