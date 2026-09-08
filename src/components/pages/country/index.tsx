import { COMPANY, type CountryPageData } from "@/lib/data";
import ServicesTestimonials from "@/components/pages/services/testimonials-section";
import InquirySection from "@/components/pages/services/inquiry-section";
import CountryHero from "./hero-section";
import CountryServices from "./services-section";
import CountryAbout from "./about-section";
import CountryWork from "./work-section";
import CountryProcess from "./process-section";
import CountryBlog from "./blog-section";
import CountryFaq from "./faq-section";

const BASE = "https://saurabhinfosys.com";

/** Organization + FAQPage + Service, the three the old market pages carried. */
function schema(page: CountryPageData) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE}/#organization`,
        name: COMPANY.name,
        url: BASE,
        logo: `${BASE}/images/logo.png`,
        description: page.schema.orgDescription,
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Singapore" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "India" },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: COMPANY.stats.clutchRating,
          reviewCount: COMPANY.stats.clutchReviews,
          bestRating: "5",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "Service",
        name: page.schema.serviceName,
        provider: { "@id": `${BASE}/#organization` },
        areaServed: { "@type": "Country", name: page.countryFull },
        description: page.schema.serviceDescription,
        url: `${BASE}/country/${page.slug}`,
      },
    ],
  };
}

/**
 * The market landing page, ported from home-02: hero-v2, services-v6,
 * about-v4, work-v3, process-v3, testimonials-v1, blog-v5, faq, inquiry.
 *
 * Every market renders this same component from its `COUNTRY_PAGES`
 * entry, so a new market is a data entry rather than a new route.
 *
 * Rhythm: light through the first four sections, the process panel black
 * at roughly the halfway mark, light again to the footer — which is the
 * page's second dark surface.
 */
export function CountryPage({ page }: { page: CountryPageData }) {
  return (
    <div className="si-page country-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(page)) }}
      />

      <CountryHero page={page} />
      <CountryServices page={page} />
      <CountryAbout page={page} />
      <CountryWork page={page} />
      <CountryProcess page={page} />
      <ServicesTestimonials heading={page.testimonialsHeading} />
      <CountryBlog page={page} />
      <CountryFaq page={page} />
      <InquirySection />
    </div>
  );
}
