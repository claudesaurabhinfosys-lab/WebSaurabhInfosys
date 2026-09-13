import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../reveal";
import Tag from "../tag";
import ProcessSection from "../process-section";
import FaqSection from "../faq-section";
import CtaSection from "../cta-section";
import { StButtonLink } from "../button";
import { ArrowUpRight, CheckMark } from "../icons";
import { COMPANY, SERVICE_DETAILS, SERVICE_PROCESS, SERVICES } from "@/lib/data";

const PROCESS_STEPS = SERVICE_PROCESS.map((step) => ({
  label: `Step ${step.number}`,
  title: step.badge,
  copy: step.detail,
}));

export default function ServiceDetailPage({ slug }: { slug: string }) {
  const service = SERVICES.find((item) => item.slug === slug);
  const detail = SERVICE_DETAILS[slug];
  if (!service || !detail) notFound();

  const others = SERVICES.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="st-header st-is-flush">
        <section className="st-detail-hero">
          <div className="st-container">
            <div className="st-detail-hero-inner">
              <div className="st-detail-hero-left">
                <Reveal className="st-tag-block">
                  <Tag on="light">{service.shortTitle ?? service.title}</Tag>
                </Reveal>
                <Reveal delay={60}>
                  <h1 className="st-h1" style={{ marginTop: "var(--st-gap-24)" }}>
                    {service.title}
                  </h1>
                </Reveal>
              </div>

              <Reveal delay={120} className="st-detail-hero-right">
                <p className="st-text-l st-secondary">{service.description}</p>
                <div className="st-button-wrapper st-is-hero">
                  <StButtonLink href="/contact" variant="dark">
                    Get a quote
                  </StButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </div>

      <Reveal className="st-banner">
        <Image
          src={`/images/services/${slug}-hero.webp`}
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
              {detail.overview.map((paragraph) => (
                <p className="st-text-l" key={paragraph.slice(0, 40)}>
                  {paragraph}
                </p>
              ))}
              <div className="st-note-card">
                <div className="st-text-s st-mono st-upper st-mute">Timeline</div>
                <p className="st-h6 st-weight-medium" style={{ marginTop: "var(--st-gap-8)" }}>
                  {detail.note}
                </p>
                <StButtonLink href={`https://wa.me/${COMPANY.whatsapp}`} variant="brand">
                  Ask on WhatsApp
                </StButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── What is included ─────────────────────────────────────────────── */}
      <section className="st-section">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag>What is included</Tag>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)", maxWidth: "760px" }}>
              Everything that ships with {service.shortTitle ?? service.title}
            </h2>
          </Reveal>

          <div className="st-feature-grid">
            {service.features.map((feature, index) => (
              <Reveal className="st-feature-row" key={feature} delay={Math.min(index, 5) * 40}>
                <CheckMark className="st-feature-check" />
                <span className="st-text-l">{feature}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ────────────────────────────────────────────────────── */}
      {service.useCases?.length ? (
        <section className="st-section">
          <div className="st-container">
            <Reveal className="st-tag-block">
              <Tag>Where it pays off</Tag>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)", maxWidth: "760px" }}>
                The problems this solves
              </h2>
            </Reveal>

            <div className="st-card-grid">
              {service.useCases.map((useCase, index) => (
                <Reveal
                  className={`st-card${index === 0 ? " st-is-ink" : ""}`}
                  key={useCase.title}
                  delay={index * 60}
                >
                  <div className="st-card-index">
                    [{String(index + 1).padStart(2, "0")}]
                  </div>
                  <h3 className="st-h6 st-weight-medium">{useCase.title}</h3>
                  <p className="st-text-s st-secondary">{useCase.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ProcessSection
        heading="How the work runs"
        intro="Four steps, same on every engagement, so you always know where the project is."
        steps={PROCESS_STEPS}
      />

      <FaqSection
        eyebrow="FAQ"
        heading={`${service.shortTitle ?? service.title}, answered`}
        intro="The questions clients ask before they start."
        faqs={detail.faqs.map((faq) => ({ question: faq.q, answer: faq.a }))}
      />

      {/* ── Other services ───────────────────────────────────────────────── */}
      <section className="st-section st-is-tight">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag>Also from the studio</Tag>
          </Reveal>

          <div className="st-list" style={{ marginTop: "var(--st-gap-32)" }}>
            {others.map((other, index) => (
              <Reveal key={other.slug} delay={index * 50}>
                <Link className="st-list-row" href={`/services/${other.slug}`}>
                  <div className="st-list-row-name">
                    <h3 className="st-h5 st-weight-medium">{other.title}</h3>
                  </div>
                  <span className="st-row-arrow" aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Get started"
        heading="Ready when you are"
        ctaLabel="Book a consultation"
      />
    </>
  );
}
