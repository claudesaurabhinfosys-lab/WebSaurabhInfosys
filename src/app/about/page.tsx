import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about";

export const metadata: Metadata = {
  title: "About Saurabh Infosys | AI-First Software Studio, Ahmedabad India",
  description:
    "Saurabh Infosys is an AI-first software development studio in Ahmedabad, Gujarat. 4+ years, 80+ clients across India, UK, USA & Gulf, 3 live SaaS products, 4.9★ Clutch.",
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
    title: "About Saurabh Infosys — AI-First Software Studio",
    description:
      "4+ years, 80+ clients, 3 SaaS products, 4.9★ Clutch. Built in Ahmedabad, shipping globally.",
    url: "https://saurabhinfosys.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Saurabh Infosys",
    description:
      "AI-first software studio from Ahmedabad. 80+ clients, 4.9★ Clutch, 3 SaaS products.",
  },
};

export default function Page() {
  return <AboutPage />;
}
