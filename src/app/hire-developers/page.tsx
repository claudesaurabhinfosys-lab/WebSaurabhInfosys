import type { Metadata } from "next";
import { SERVICE_DETAILS } from "@/lib/data";
import ServiceDetailPage from "@/components/stodio/services/service-detail-page";

const SLUG = "hire-developers";
const detail = SERVICE_DETAILS[SLUG];

export const metadata: Metadata = {
  title: detail.seo.title,
  description: detail.seo.description,
  keywords: detail.seo.keywords,
  alternates: { canonical: `https://saurabhinfosys.com/${SLUG}` },
  openGraph: {
    title: detail.seo.title,
    description: detail.seo.description,
    url: `https://saurabhinfosys.com/${SLUG}`,
    type: "website",
  },
};

export default function Page() {
  return <ServiceDetailPage slug={SLUG} />;
}
