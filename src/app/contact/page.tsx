import type { Metadata } from "next";
import ContactPage from "@/components/stodio/contact";

export const metadata: Metadata = {
  title: "Contact Saurabh Infosys | AI & Software Studio, Ahmedabad",
  description:
    "Talk to Saurabh Infosys about AI automation, Flutter apps, SaaS platforms and custom software. WhatsApp replies within 2 hours, email within 24.",
  keywords: [
    "contact Saurabh Infosys",
    "software company Ahmedabad contact",
    "hire Flutter developers India",
    "AI automation agency India",
  ],
  alternates: { canonical: "https://saurabhinfosys.com/contact" },
  openGraph: {
    title: "Contact Saurabh Infosys",
    description:
      "AI automation, mobile apps and SaaS platforms. WhatsApp replies within 2 hours.",
    url: "https://saurabhinfosys.com/contact",
    type: "website",
  },
};

export default function Page() {
  return <ContactPage />;
}
