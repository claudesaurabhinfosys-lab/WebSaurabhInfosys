import type { Metadata } from "next";
import { OG_IMAGES, brandTitle } from "@/lib/seo";
import ProductsPage from "@/components/stodio/products";

export const metadata: Metadata = {
  title: brandTitle("Our Products | Saurabh Infosys — School ERP, Society & Campaign Software"),
  description:
    "The three SaaS products Saurabh Infosys builds and runs: SSMS school management, MySociety housing society management, and MySampark WhatsApp, SMS and email campaigns.",
  keywords: [
    "school management software India",
    "society management software India",
    "WhatsApp campaign software India",
    "school ERP India",
    "housing society app India",
  ],
  alternates: { canonical: "https://saurabhinfosys.com/products" },
  openGraph: {
    images: OG_IMAGES,
    title: "Our Products — Saurabh Infosys",
    description:
      "SSMS school management, MySociety housing society management and MySampark campaigns — SaaS we build, run and support.",
    url: "https://saurabhinfosys.com/products",
    type: "website",
  },
};

export default function Page() {
  return <ProductsPage />;
}
