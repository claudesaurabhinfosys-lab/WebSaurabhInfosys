import Image from "next/image";
import Reveal from "../reveal";
import Tag from "../tag";
import FaqSection from "../faq-section";
import TestimonialsSection from "../testimonials-section";
import CtaSection from "../cta-section";
import { StButtonLink } from "../button";
import { StarBurst } from "../icons";
import { COMPANY, PORTFOLIO_PROJECTS, type CountryPageData } from "@/lib/data";
import { workImage } from "@/components/stodio/lib/work-images";

const BASE = "https://saurabhinfosys.com";

function schema(page: CountryPageData) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE}/#organization`,
        name: COMPANY.name,
        url: BASE,
        logo: `${BASE}/saurabhInfosys.webp`,
        description: page.schema.orgDescription,
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Singapore" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Australia" },
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

export function CountryPage({ page }: { page: CountryPageData }) {
  const { hero, about, services, clients, industries } = page;

  const facts = [
    `${COMPANY.stats.clutchRating}★ on Clutch`,
    `${COMPANY.stats.projects} shipped`,
    "Overlapping hours",
    "100% IP handover",
  ];

  /* The reference gives every location row a photo to expand on hover. Five of
     our country clients have a portfolio entry we can borrow the cover shot
     from; the rest fall back to the same placeholder pool the work grid uses,
     so no row is left with an empty frame that never opens. */
  const thumbFor = (name: string, index: number) => {
    const match = PORTFOLIO_PROJECTS.findIndex(
      (project) => project.title.toLowerCase() === name.toLowerCase(),
    );
    return match >= 0
      ? workImage(PORTFOLIO_PROJECTS[match].images, match, 0)
      : workImage(undefined, index, 0);
  };

  /* The band scrolls these past twice. Short, flat claims rather than the
     service titles, which run long enough to break the rhythm of the rail. */
  const keywords = [
    "AI automation",
    `${page.country} business hours`,
    "Flutter apps",
    `${COMPANY.stats.clutchRating}★ on Clutch`,
    "MVP in weeks",
    "100% IP handover",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(page)) }}
      />

      {/* ── 1. Hero ───────────────────────────────────────────────────────── */}
      <div className="st-header">
        <section className="st-hero">
          <Image
            className="st-hero-bg"
            src={hero.image}
            alt={hero.imageAlt}
            fill
            priority
            sizes="100vw"
          />
          {/* The left-weighted wash, as the home hero uses. `st-is-even` is for
              centred heroes; this content is left-aligned, so the even wash was
              darkening the whole frame to hold contrast it only needed on one
              side. */}
          <div className="st-hero-scrim" />

          <div className="st-container">
            <div className="st-hero-content">
              <Reveal className="st-tag-block" delay={0}>
                <Tag on="dark">{page.country}</Tag>
              </Reveal>

              <div className="st-hero-title-block st-is-home">
                <Reveal delay={100}>
                  <h1 className="st-h1">
                    <span>{hero.headingLead}</span>{" "}
                    <span className="st-mute">{hero.headingTail}</span>
                  </h1>
                </Reveal>
                <Reveal delay={200}>
                  <p className="st-hero-subtext st-text-m">{hero.intro}</p>
                </Reveal>
              </div>

              <div className="st-hero-content-wrapper st-is-home">
                <Reveal delay={300}>
                  <div className="st-hero-meta">
                    {facts.map((item) => (
                      <div className="st-text-l" key={item}>
                        <span className="st-hero-meta-plus">+</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={400}>
                  <div className="st-hero-intro st-is-home">
                    <h2 className="st-h4">
                      AI automation, mobile and web engineering for {page.countryFull}
                    </h2>
                    <div className="st-button-wrapper st-is-hero">
                      <StButtonLink href={hero.ctaHref || "/contact"} variant="brand">
                        {hero.ctaLabel || "Book an audit"}
                      </StButtonLink>
                      <StButtonLink href="/portfolio">Selected Work</StButtonLink>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── 2. Statement ──────────────────────────────────────────────────── */}
      <section className="st-statement-section">
        <div className="st-container">
          <div className="st-statement-block">
            <Reveal className="st-tag-block">
              <Tag>{about.badge}</Tag>
            </Reveal>
            <Reveal delay={100} className="st-statement-right">
              <h2 className="st-h2">{about.heading}</h2>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Keyword band ───────────────────────────────────────────────── */}
      <div className="st-keyword-band">
        <div className="st-keyword-track">
          {[0, 1].map((copy) => (
            <div className="st-keyword-row" key={copy} aria-hidden={copy === 1}>
              {keywords.map((word) => (
                <div className="st-keyword-item" key={`${copy}-${word}`}>
                  <StarBurst className="st-keyword-icon" />
                  {word}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. About ──────────────────────────────────────────────────────── */}
      <section className="st-section">
        <div className="st-container">
          <div className="st-media-split">
            <div className="st-media-split-body">
              <Reveal>
                <p className="st-text-l st-secondary" style={{ maxWidth: "600px" }}>
                  <strong className="st-weight-semibold" style={{ color: "var(--st-primary)" }}>
                    {about.leadSpan}
                  </strong>{" "}
                  {about.body}
                </p>
              </Reveal>
              <Reveal delay={100}>
                <div className="st-button-wrapper st-is-hero">
                  <StButtonLink href={about.buttonHref || "/contact"} variant="dark">
                    {about.buttonLabel || "Start a project"}
                  </StButtonLink>
                </div>
              </Reveal>
            </div>

            {about.image && (
              <Reveal delay={200} className="st-media-split-media st-country-figure">
                <Image src={about.image} alt={about.imageAlt} width={720} height={520} />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ── 5. Capabilities ───────────────────────────────────────────────── */}
      <section className="st-section">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag>Capabilities</Tag>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)", maxWidth: "780px" }}>
              Built for businesses in {page.countryFull}
            </h2>
          </Reveal>

          <div className="st-pill-list">
            {services.map((service, index) => (
              <Reveal className="st-pill-row" key={service.title} delay={Math.min(index, 4) * 50}>
                <div className="st-pill-row-left">
                  <h3 className="st-h4 st-weight-medium">{service.title}</h3>
                </div>
                <div className="st-pill-row-right">
                  <p className="st-text-s st-pill-row-copy">{service.desc}</p>
                  <span className="st-pill-row-mark" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Case studies ───────────────────────────────────────────────── */}
      {clients?.length ? (
        <section className="st-slab-section">
          <div className="st-slab">
            <div className="st-container">
              <Reveal className="st-tag-block">
                <Tag on="dark">Case studies</Tag>
              </Reveal>
              <Reveal delay={60}>
                <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)", maxWidth: "720px" }}>
                  {page.workHeading || "Proven delivery for international clients"}
                </h2>
              </Reveal>

              <div className="st-case-list">
                {clients.map((client, index) => (
                  <Reveal className="st-case-row" key={client.name} delay={Math.min(index, 4) * 60}>
                    <div className="st-case-left">
                      <span className="st-case-thumb" aria-hidden="true">
                        <Image
                          src={thumbFor(client.name, index)}
                          alt=""
                          width={120}
                          height={80}
                        />
                      </span>
                      <div>
                        <div className="st-text-s st-mono st-upper st-case-industry">
                          {client.industry}
                        </div>
                        <h3 className="st-h4 st-weight-medium st-case-name">
                          {client.url ? (
                            <a href={client.url} target="_blank" rel="noopener noreferrer">
                              {client.name}
                            </a>
                          ) : (
                            client.name
                          )}
                        </h3>
                      </div>
                    </div>

                    <div className="st-case-right">
                      <p className="st-text-l st-case-result">{client.result}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="st-button-wrapper">
                <StButtonLink href="/portfolio" variant="white">
                  View all projects
                </StButtonLink>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* ── 7. Industries ─────────────────────────────────────────────────── */}
      <section className="st-section">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag>Industries</Tag>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)", maxWidth: "720px" }}>
              Industries we support in {page.country}
            </h2>
          </Reveal>

          <div className="st-stage-rail">
            {industries.map((item, index) => (
              <Reveal className="st-stage" key={item.title} delay={Math.min(index, 4) * 60}>
                <div className="st-stage-number">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="st-h6 st-weight-medium st-stage-title">{item.title}</h3>
                <p className="st-text-s st-stage-copy">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Testimonials ───────────────────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── 9. FAQs ───────────────────────────────────────────────────────── */}
      <FaqSection
        eyebrow={`${page.country} FAQ`}
        heading={`${page.country} questions, answered`}
        intro="Working hours, invoicing, local integrations and code ownership."
        faqs={page.faqs}
      />

      {/* ── 10. CTA ───────────────────────────────────────────────────────── */}
      <CtaSection
        eyebrow="Free automation audit"
        heading={`Book an audit for your ${page.country} operations`}
        ctaLabel="Book an audit"
      />
    </>
  );
}
export default CountryPage;
