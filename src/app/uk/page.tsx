import type { Metadata } from "next";
import { OG_IMAGES, brandTitle } from "@/lib/seo";
import { notFound } from "next/navigation";
import { COUNTRY_PAGES } from "@/lib/data";
import CountryPage from "@/components/stodio/country";

const pageData = COUNTRY_PAGES["uk"];

export const metadata: Metadata = {
  title: brandTitle(pageData.meta.title),
  description: pageData.meta.description,
  keywords: pageData.meta.keywords,
  alternates: { canonical: "https://saurabhinfosys.com/uk" },
  openGraph: {
    images: OG_IMAGES,
    title: pageData.meta.ogTitle,
    description: pageData.meta.ogDescription,
    url: "https://saurabhinfosys.com/uk",
    type: "website",
  },
  twitter: {
    images: OG_IMAGES,
    card: "summary_large_image",
    title: pageData.meta.ogTitle,
    description: pageData.meta.ogDescription,
  },
};

export default function Page() {
  if (!pageData) notFound();
  return <CountryPage page={pageData} />;
}
