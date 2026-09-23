import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COUNTRY_PAGES } from "@/lib/data";
import CountryPage from "@/components/stodio/country";

const pageData = COUNTRY_PAGES["uk"];

export const metadata: Metadata = {
  title: pageData.meta.title,
  description: pageData.meta.description,
  keywords: pageData.meta.keywords,
  alternates: { canonical: "https://saurabhinfosys.com/uk" },
  openGraph: {
    title: pageData.meta.ogTitle,
    description: pageData.meta.ogDescription,
    url: "https://saurabhinfosys.com/uk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageData.meta.ogTitle,
    description: pageData.meta.ogDescription,
  },
};

export default function Page() {
  if (!pageData) notFound();
  return <CountryPage page={pageData} />;
}
