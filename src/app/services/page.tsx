import type { Metadata } from "next";
import { OG_IMAGES, brandTitle } from "@/lib/seo";
import ServicesPage from "@/components/stodio/services";

export const metadata: Metadata = {
  title: brandTitle("AI Automation Agency & Software Studio | Saurabh Infosys"),
  description:
    "AI agents, workflow automation, Flutter apps and MVPs for businesses in the USA, UK, Australia and Singapore. 100+ projects delivered, 4.9★ on Clutch.",
  keywords: [
    "AI automation agency",
    "offshore software development",
    "Flutter app development company",
    "custom AI agents",
    "workflow automation agency",
    "SaaS MVP development",
    "hire offshore developers",
  ],
  alternates: { canonical: "https://saurabhinfosys.com/services" },
  openGraph: {
    images: OG_IMAGES,
    title: "AI Automation Agency & Software Studio | Saurabh Infosys",
    description:
      "AI agents, workflow automation, Flutter apps and MVPs for businesses in the USA, UK, Australia and Singapore. 100+ projects delivered, 4.9★ on Clutch.",
    url: "https://saurabhinfosys.com/services",
    type: "website",
  },
};

export default function Page() {
  return <ServicesPage />;
}
