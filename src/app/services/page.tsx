import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/services";

export const metadata: Metadata = {
  title: "Our Services | Saurabh Infosys — AI, Flutter, SaaS & More",
  description: "Explore all services offered by Saurabh Infosys: AI Agents, Vibe Coding MVPs, Flutter Apps, GPS & Fleet Systems, SaaS Platforms, and Digital Marketing. 150+ projects delivered.",
  keywords: ["software development services India", "AI agents development", "Flutter app development", "SaaS platform development", "GPS fleet management", "digital marketing India"],
  alternates: { canonical: "https://saurabhinfosys.com/services" },
  openGraph: {
    title: "Our Services — Saurabh Infosys",
    description: "AI Agents, Flutter Apps, SaaS Platforms, GPS Systems & more. 150+ projects delivered for clients in India, UK, USA & Gulf.",
    url: "https://saurabhinfosys.com/services",
    type: "website",
  },
};

export default function Page() {
  return <ServicesPage />;
}
