import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICE_DETAILS, SERVICES } from "@/lib/data";
import ServiceDetailPage from "@/components/stodio/services/service-detail-page";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = SERVICE_DETAILS[slug];
  if (!detail) return {};

  const url = `https://saurabhinfosys.com/services/${slug}`;
  return {
    title: detail.seo.title,
    description: detail.seo.description,
    keywords: detail.seo.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: detail.seo.title,
      description: detail.seo.description,
      url,
      type: "website",
    },
    twitter: {
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
