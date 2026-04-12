import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — 50+ Projects | Saurabh Infosys",
  description: "Browse 50+ delivered projects across AI, Flutter, GPS, SaaS, fintech, health-tech, and more. Real work. Real clients. India, UK, USA & Gulf.",
  keywords: ["software portfolio India", "Flutter app portfolio", "AI projects India", "SaaS development portfolio", "mobile app development examples", "custom software projects Ahmedabad"],
  alternates: { canonical: "https://saurabhinfosys.com/portfolio" },
  openGraph: {
    title: "Portfolio — 50+ Projects | Saurabh Infosys",
    description: "Real work for real clients — AI agents, Flutter apps, SaaS platforms, GPS systems and more.",
    url: "https://saurabhinfosys.com/portfolio",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Portfolio | Saurabh Infosys", description: "50+ delivered projects across AI, Flutter, SaaS, GPS and more." },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
