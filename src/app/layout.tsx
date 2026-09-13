import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";
import "./stodio.css";
import "./stodio-layout.css";
import "./stodio-sections.css";
import "./stodio-pages.css";
import "./stodio-detail.css";
import Navbar from "@/components/stodio/navbar";
import Footer from "@/components/stodio/footer";
import LenisProvider from "@/components/stodio/lenis-provider";

/* Design-system faces, matching the reference build exactly:
   Geist for everything, Geist Mono for tags, labels and captions. */
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
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
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
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
      <body className="st-root antialiased">
        {/* Google Analytics */}
        <Script
          id="ga-inline"
          strategy="beforeInteractive"
        >{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-CET86HGWMB');`}</Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CET86HGWMB"
          strategy="afterInteractive"
        />
        <LenisProvider />
        <div className="st-page">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}