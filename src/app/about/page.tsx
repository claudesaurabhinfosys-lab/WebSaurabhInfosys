import type { Metadata } from "next";
import { OG_IMAGES, brandTitle } from "@/lib/seo";
import AboutPage from "@/components/stodio/about";

export const metadata: Metadata = {
  title: brandTitle("About Saurabh Infosys | AI-First Software Studio, Ahmedabad India"),
  description:
    "Saurabh Infosys: AI-first software studio in Ahmedabad, Gujarat. 4+ years, 80+ clients across India, UK, USA & Gulf, 3 live SaaS products, 4.9★ Clutch.",
  keywords: [
    "software company Ahmedabad",
    "IT company Gujarat",
    "software development company India",
    "AI software studio India",
    "about Saurabh Infosys",
    "software developers Ahmedabad",
  ],
  alternates: { canonical: "https://saurabhinfosys.com/about" },
  openGraph: {
    images: OG_IMAGES,
    title: "About Saurabh Infosys — AI-First Software Studio",
    description:
      "4+ years, 80+ clients, 3 SaaS products, 4.9★ Clutch. Built in Ahmedabad, shipping globally.",
    url: "https://saurabhinfosys.com/about",
    type: "website",
  },
  twitter: {
    images: OG_IMAGES,
    card: "summary_large_image",
    title: "About Saurabh Infosys",
    description:
      "AI-first software studio from Ahmedabad. 80+ clients, 4.9★ Clutch, 3 SaaS products.",
  },
};

export default function Page() {
  return <AboutPage />;
}
