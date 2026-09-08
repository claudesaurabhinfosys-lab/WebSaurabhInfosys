import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COUNTRY_PAGES, COUNTRY_SLUGS } from "@/lib/data";
import { CountryPage } from "@/components/pages/country";

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

  const url = `${BASE}/country/${page.slug}`;

  return {
    title: page.meta.title,
    description: page.meta.description,
    keywords: page.meta.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: page.meta.ogTitle,
      description: page.meta.ogDescription,
      url,
      type: "website",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = COUNTRY_PAGES[slug];
  if (!page) notFound();

  return <CountryPage page={page} />;
}
