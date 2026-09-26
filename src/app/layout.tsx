import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./stodio.css";
import "./stodio-layout.css";
import "./stodio-sections.css";
import "./stodio-pages.css";
import "./stodio-about.css";
import "./stodio-detail.css";
import "./stodio-product.css";
import "./stodio-country.css";
import Navbar from "@/components/stodio/navbar";
import { NAV_LINKS } from "@/components/stodio/nav-links";
import Footer from "@/components/stodio/footer";
import LenisProvider from "@/components/stodio/lenis-provider";
import LazyToaster from "@/components/stodio/lazy-toaster";
import { COMPANY } from "@/lib/company";
import { OG_IMAGES, SITE_NAME, SITE_URL, jsonLd } from "@/lib/seo";

/* Design-system faces, matching the reference build exactly:
   Geist for everything, Geist Mono for tags, labels and captions. */
/* Both are variable fonts: with no `weight` list, next/font emits one
   @font-face per file covering the full weight axis instead of repeating the
   same file once per weight. */
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: {
    default: "Saurabh Infosys — AI Automation, AI Integration & Vibe Coding | Ahmedabad",
    template: "%s | Saurabh Infosys",
  },
  description:
    "Top AI automation & AI integration company in Ahmedabad: AI agents, vibe coding MVPs, Flutter apps & SaaS. 80+ clients, 4.9★ Clutch. India, UK, USA & Gulf.",
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
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://saurabhinfosys.com",
    siteName: "Saurabh Infosys",
    images: OG_IMAGES,
    title: "Saurabh Infosys — AI Automation, AI Integration & Vibe Coding | Ahmedabad",
    description: "Top AI automation & AI integration company in Ahmedabad. AI agents, AI-enabled apps, vibe coding MVPs, Flutter apps & SaaS. 80+ clients, 4.9★ Clutch.",
  },
  twitter: {
    card: "summary_large_image",
    images: OG_IMAGES,
    title: "Saurabh Infosys — AI Automation & Integration Studio",
    description: "AI automation, AI integration, vibe coding, AI-enabled apps. 80+ clients. 4.9★ Clutch. Ahmedabad, India.",
  },
};

/* The original Organization node, plus an @id so page-level schema
   (BlogPosting, BreadcrumbList, Service) can point at it, and a WebSite node. */
const SITE_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
                        "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "Saurabh Infosys",
            url: "https://saurabhinfosys.com",
            logo: "https://saurabhinfosys.com/saurabhInfosys.webp",
            description: "AI automation, AI integration and vibe coding company in Ahmedabad, India. Specialists in AI agents, AI-enabled apps, Flutter apps, SaaS platforms, and GPS fleet management.",
            address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressRegion: "Gujarat", addressCountry: "IN" },
            contactPoint: { "@type": "ContactPoint", contactType: "sales", availableLanguage: ["English", "Hindi"] },
            areaServed: [
              { "@type": "Country", name: "India" },
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Australia" },
              { "@type": "Country", name: "Singapore" },
            ],
            sameAs: [COMPANY.clutch, COMPANY.linkedin],
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
          },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(SITE_LD)} />
      </head>
      <body className="st-root">
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
          <Navbar links={NAV_LINKS} />
          <main>{children}</main>
          <Footer />
        </div>
        <LazyToaster />
      </body>
    </html>
  );
}