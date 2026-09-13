import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "../reveal";
import Tag from "../tag";
import Odometer from "../odometer";
import ProcessSection from "../process-section";
import FaqSection from "../faq-section";
import CtaSection from "../cta-section";
import { StButtonLink } from "../button";
import { CheckMark } from "../icons";
import { COMPANY, PRODUCTS, PRODUCT_PAGES } from "@/lib/data";

/** Hero art per product, from the shared services pool. */
const HERO_IMAGE: Record<string, string> = {
  ssms: "/images/services/saas-hero.webp",
  mysociety: "/images/services/gps-hero.webp",
  mysampark: "/images/services/digital-marketing-hero.webp",
};

const PURPOSE_IMAGE: Record<string, string> = {
  ssms: "/images/services/saas.webp",
  mysociety: "/images/services/gps.webp",
  mysampark: "/images/services/digital-marketing.webp",
};

export default function ProductDetailPage({ slug }: { slug: string }) {
  const product = PRODUCTS.find((item) => item.slug === slug);
  const page = PRODUCT_PAGES[slug];
  if (!product || !page) notFound();

  const steps = page.steps.map((step) => ({ title: step.label, copy: step.desc }));

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="st-header st-is-flush">
        <section className="st-detail-hero">
          <div className="st-container">
            <div className="st-detail-hero-inner">
              <div className="st-detail-hero-left">
                <Reveal className="st-tag-block">
                  <Tag on="light">{page.label}</Tag>
                </Reveal>
                <Reveal delay={60}>
                  <h1 className="st-h1" style={{ marginTop: "var(--st-gap-24)" }}>
                    {page.tagline}
                  </h1>
                </Reveal>
              </div>

              <Reveal delay={120} className="st-detail-hero-right">
                <div className="st-counter-digit-wrapper">
                  <Odometer
                    className="st-counter-digit"
                    value={`${page.stat.value}${page.stat.suffix ?? ""}`}
                  />
                </div>
                <div className="st-counter-divider" />
                <p className="st-text-m st-secondary">{page.stat.label}</p>
                <div className="st-button-wrapper st-is-hero">
                  <StButtonLink href="/contact" variant="dark">
                    Request a demo
                  </StButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </div>

      <Reveal className="st-banner">
        <Image
          src={HERO_IMAGE[slug] ?? "/images/services/hero.webp"}
          alt=""
          width={1774}
          height={887}
          priority
        />
      </Reveal>

      {/* ── Overview ─────────────────────────────────────────────────────── */}
      <section className="st-section">
        <div className="st-container">
          <div className="st-split">
            <Reveal className="st-split-label">
              <Tag>Overview</Tag>
            </Reveal>
            <Reveal delay={60} className="st-split-body">
              <p className="st-h5">{page.overview}</p>
              <div>
                <div className="st-text-s st-mono st-upper st-mute">
                  {page.worksWith.heading}
                </div>
                <div className="st-chip-row">
                  {page.worksWith.items.map((item) => (
                    <span className="st-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Highlights ───────────────────────────────────────────────────── */}
      <section className="st-section">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag>Built in</Tag>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)", maxWidth: "760px" }}>
              One platform, a purpose-built app for every role
            </h2>
          </Reveal>

          <div className="st-card-grid">
            {page.highlights.map((highlight, index) => (
              <Reveal
                className={`st-card${index === 0 ? " st-is-ink" : index === 1 ? " st-is-brand" : ""}`}
                key={highlight.title}
                delay={index * 60}
              >
                <div className="st-card-index">[{String(index + 1).padStart(2, "0")}]</div>
                <h3 className="st-h6 st-weight-medium">{highlight.title}</h3>
                <p className="st-text-s st-secondary">{highlight.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Purpose ──────────────────────────────────────────────────────── */}
      <section className="st-section">
        <div className="st-container">
          <div className="st-media-split">
            <Reveal className="st-media-split-media">
              <Image
                src={PURPOSE_IMAGE[slug] ?? "/images/services/saas.webp"}
                alt=""
                width={1536}
                height={1024}
              />
            </Reveal>
            <div className="st-media-split-body">
              <Reveal className="st-tag-block">
                <Tag>Why it exists</Tag>
              </Reveal>
              <Reveal delay={60}>
                <h2 className="st-h3" style={{ marginTop: "var(--st-gap-24)" }}>
                  {page.purpose.heading}
                </h2>
              </Reveal>
              {page.purpose.paragraphs.map((paragraph, index) => (
                <Reveal delay={120 + index * 60} key={paragraph.slice(0, 40)}>
                  <p className="st-text-l st-secondary" style={{ marginTop: "var(--st-gap-24)" }}>
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote + numbers ──────────────────────────────────────────────── */}
      <section className="st-quote-slab">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag on="dark">By the numbers</Tag>
          </Reveal>
          <Reveal delay={60} className="st-quote">
            <p className="st-h3" style={{ marginTop: "var(--st-gap-24)" }}>
              {page.quote}
            </p>
          </Reveal>

          <div className="st-quote-numbers">
            {page.numbers.map((number, index) => (
              <Reveal key={number.label} delay={index * 60}>
                <div className="st-quote-number-value">
                  <Odometer value={`${number.value}${number.suffix ?? ""}`} />
                </div>
                <p className="st-quote-number-label st-text-s">{number.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        eyebrow="Rollout"
        heading="How a rollout runs"
        intro="Four steps from first call to go-live, with your data checked against your own registers before launch."
        steps={steps}
      />

      {/* ── Modules ──────────────────────────────────────────────────────── */}
      <section className="st-section">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag>Modules</Tag>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)", maxWidth: "760px" }}>
              What is in the box
            </h2>
          </Reveal>

          <Reveal delay={120} className="st-table-scroll">
            <table className="st-table">
              <thead>
                <tr>
                  <th scope="col">Module</th>
                  <th scope="col">What it does</th>
                  <th scope="col">Who uses it</th>
                </tr>
              </thead>
              <tbody>
                {page.modules.map((module) => (
                  <tr key={module.name}>
                    <td>{module.name}</td>
                    <td>{module.desc}</td>
                    <td>{module.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* ── Who it is for ────────────────────────────────────────────────── */}
      {product.targetUsers?.length ? (
        <section className="st-section">
          <div className="st-container">
            <Reveal className="st-tag-block">
              <Tag>Who it is for</Tag>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)", maxWidth: "760px" }}>
                Built for the people who run it daily
              </h2>
            </Reveal>
            <div className="st-feature-grid">
              {product.targetUsers.map((user, index) => (
                <Reveal className="st-feature-row" key={user} delay={Math.min(index, 5) * 40}>
                  <CheckMark className="st-feature-check" />
                  <span className="st-text-l">{user}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {page.faqs?.length ? (
        <FaqSection
          eyebrow="FAQ"
          heading={`${product.name}, answered`}
          intro="What schools and societies ask before they switch."
          faqs={page.faqs.map((faq) => ({ question: faq.q, answer: faq.a }))}
        />
      ) : null}

      <CtaSection
        eyebrow="See it live"
        heading={`Walk through ${product.name} with us`}
        ctaLabel="Book a demo"
        ctaHref={`https://wa.me/${COMPANY.whatsapp}`}
      />
    </>
  );
}
