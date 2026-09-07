import { SERVICE_DETAILS, SERVICES } from "@/lib/data";
import DetailHero from "./detail-hero";
import DetailOverview from "./detail-overview";
import DetailDeliverables from "./detail-deliverables";
import DetailProcess from "./detail-process";
import DetailFaq from "./detail-faq";
import InquirySection from "./inquiry-section";

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = SERVICES.find((item) => item.slug === slug);
  const detail = SERVICE_DETAILS[slug];
  if (!service || !detail) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div className="si-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DetailHero service={service} />
      <DetailOverview detail={detail} />
      <DetailDeliverables features={service.features} />
      <DetailProcess />
      <DetailFaq faqs={detail.faqs} />
      <InquirySection />
    </div>
  );
}
