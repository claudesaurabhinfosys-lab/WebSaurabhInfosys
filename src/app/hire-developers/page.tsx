import type { Metadata } from "next";
import { OG_IMAGES, brandTitle } from "@/lib/seo";
import { SERVICE_DETAILS } from "@/lib/data";
import ServiceDetailPage from "@/components/stodio/services/service-detail-page";

const SLUG = "hire-developers";
const detail = SERVICE_DETAILS[SLUG];

export const metadata: Metadata = {
  title: brandTitle(detail.seo.title),
  description: detail.seo.description,
  keywords: detail.seo.keywords,
  // Same page as /services/<slug>, which the site links to: canonical points there.
  alternates: { canonical: `https://saurabhinfosys.com/services/${SLUG}` },
  openGraph: {
    images: OG_IMAGES,
    title: detail.seo.title,
    description: detail.seo.description,
    url: `https://saurabhinfosys.com/${SLUG}`,
    type: "website",
  },
};

export default function Page() {
  return <ServiceDetailPage slug={SLUG} />;
}
