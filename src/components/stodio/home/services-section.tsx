import { SERVICES } from "@/lib/data";
import ServicesSectionClient from "./services-section-client";

/* One line each, deliberately close in length. The `description` field these
   used to borrow is SEO copy: the first ran 242 characters against 89 for the
   third, so the preview card jumped from 366px to 481px between rows and the
   longest one pushed the last card out of the slab. */
const BLURB: Record<string, string> = {
  "ai-automation-services": "WhatsApp bots, AI voice agents and custom workflows that run 24/7.",
  "app-development": "Flutter mobile apps and launch-ready MVPs shipped in 2 to 4 weeks.",
  "integration-services": "Two-way CRM, accounting and API integrations eliminating manual data entry.",
  "hire-developers": "Dedicated AI and Flutter engineers working on your schedule and timezone.",
  "white-label-software": "Turnkey school, property, fleet and marketing SaaS platforms under your brand.",
  "ai-agents": "WhatsApp bots, RAG systems and voice agents that run your workflows 24/7.",
  "vibe-coding": "AI-accelerated builds. A production-ready MVP in your hands in two weeks.",
  flutter: "One codebase, iOS and Android. Live on both stores, built to stay maintainable.",
  gps: "Live vehicle tracking, route optimisation and fleet analytics in one dashboard.",
  saas: "Multi-tenant platforms with billing and admin built in from day one.",
  "digital-marketing": "Search, social and paid, measured against pipeline rather than impressions.",
};

/** The four services that lead the home page, with their preview art. */
const FEATURED = SERVICES.slice(0, 4).map((service, index) => ({
  slug: service.slug,
  title: service.shortTitle ?? service.title,
  blurb: BLURB[service.slug] ?? service.description,
  image: `/images/services/${service.slug}.webp`,
  number: `[0${index + 1}]`,
}));

export default function ServicesSection() {
  return <ServicesSectionClient services={FEATURED} />;
}
