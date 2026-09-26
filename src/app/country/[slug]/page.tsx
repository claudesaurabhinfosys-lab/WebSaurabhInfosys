import type { Metadata } from "next";
import { OG_IMAGES, brandTitle } from "@/lib/seo";
import { notFound } from "next/navigation";
import { COUNTRY_PAGES, COUNTRY_SLUGS } from "@/lib/data";
import { COUNTRY_META_DESCRIPTIONS } from "@/lib/meta-descriptions";
import CountryPage from "@/components/stodio/country";


const BASE = "https://saurabhinfosys.com";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return COUNTRY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = COUNTRY_PAGES[slug];
  if (!page) return {};

  // Alias of /<slug>, which the nav and footer link to: canonical points there.
  const url = `${BASE}/${page.slug}`;

  return {
    title: brandTitle(page.meta.title),
    description: COUNTRY_META_DESCRIPTIONS[page.slug] ?? page.meta.description,
    keywords: page.meta.keywords,
    alternates: { canonical: url },
    openGraph: {
      images: OG_IMAGES,
      title: page.meta.ogTitle,
      description: page.meta.ogDescription,
      url,
      type: "website",
    },
    twitter: {
      images: OG_IMAGES,
      card: "summary_large_image",
      title: page.meta.ogTitle,
      description: page.meta.ogDescription,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = COUNTRY_PAGES[slug];
  if (!page) notFound();

  return <CountryPage page={page} />;
}
