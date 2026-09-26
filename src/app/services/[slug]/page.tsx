import type { Metadata } from "next";
import { OG_IMAGES, brandTitle, primaryServiceSlug } from "@/lib/seo";
import { notFound } from "next/navigation";
import { SERVICE_DETAILS } from "@/lib/data";
import ServiceDetailPage from "@/components/stodio/services/service-detail-page";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(SERVICE_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = SERVICE_DETAILS[slug];
  if (!detail) return {};

  // Legacy aliases (ai-agents, flutter, gps...) render a primary service's
  // page; their canonical names that primary URL.
  const url = `https://saurabhinfosys.com/services/${primaryServiceSlug(slug)}`;
  return {
    title: brandTitle(detail.seo.title),
    description: detail.seo.description,
    keywords: detail.seo.keywords,
    alternates: { canonical: url },
    openGraph: {
      images: OG_IMAGES,
      title: detail.seo.title,
      description: detail.seo.description,
      url,
      type: "website",
    },
    twitter: {
      images: OG_IMAGES,
      card: "summary_large_image",
      title: detail.seo.title,
      description: detail.seo.description,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  if (!SERVICE_DETAILS[slug]) notFound();
  return <ServiceDetailPage slug={slug} />;
}
