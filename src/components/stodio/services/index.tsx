import Link from "next/link";
import Reveal from "../reveal";
import Tag from "../tag";
import MarqueeSection from "../marquee-section";
import ProcessSection from "../process-section";
import FaqSection from "../faq-section";
import TestimonialsSection from "../testimonials-section";
import CtaSection from "../cta-section";
import { StButtonLink } from "../button";
import { ArrowUpRight } from "../icons";
import { SERVICE_PROCESS, SERVICES, SERVICES_HUB } from "@/lib/data";

/** The one line of "what you get, how fast" that belongs beside each service. */
const DELIVERY: Record<string, string> = {
  "ai-automation-services": "Live in 2–3 weeks",
  "app-development": "MVP in 2–4 weeks",
  "integration-services": "API sync in days",
  "hire-developers": "2-week trial",
  "white-label-software": "Deploy in 7 days",
};

const PROCESS_STEPS = SERVICE_PROCESS.map((step) => ({
  label: `Step ${step.number}`,
  title: step.badge,
  copy: step.detail,
}));

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="st-header st-is-light">
        <section className="st-hero st-is-light">
          <div className="st-container">
            <div className="st-hero-content">
              <Reveal className="st-tag-block">
                <Tag on="light">Services</Tag>
              </Reveal>

              <div className="st-hero-title-block st-is-row">
                <Reveal delay={60}>
                  <h1 className="st-h1">
                    AI automation and software{" "}
                    <span className="st-mute">for growing businesses</span>
                  </h1>
                </Reveal>

                <Reveal delay={120}>
                  <div className="st-hero-intro">
                    <p className="st-text-m st-secondary">{SERVICES_HUB.hero.intro}</p>
                    <div className="st-button-wrapper st-is-hero">
                      <StButtonLink href="/contact" variant="dark">
                        {SERVICES_HUB.hero.cta}
                      </StButtonLink>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </div>

      <MarqueeSection />

      {/* ── The list ─────────────────────────────────────────────────────── */}
      <section className="st-list-section">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag>What we do</Tag>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)", maxWidth: "760px" }}>
              Five ways we ship
            </h2>
          </Reveal>

          <div className="st-list">
            {SERVICES.map((service, index) => (
              <Reveal key={service.slug} delay={Math.min(index, 4) * 50}>
                <Link className="st-list-row" href={`/services/${service.slug}`}>
                  <div className="st-list-row-name">
                    <h3 className="st-h5 st-weight-medium">{service.title}</h3>
                    <p className="st-text-s st-list-row-blurb">{service.blurb}</p>
                  </div>

                  <div className="st-list-row-foot">
                    <div className="st-list-row-meta st-text-s st-mono st-upper">
                      <span className="st-list-row-meta-item">
                        {DELIVERY[service.slug] ?? "Scoped per project"}
                      </span>
                    </div>
                    <span className="st-row-arrow" aria-hidden="true">
                      <ArrowUpRight />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why international clients work with us ───────────────────────── */}
      <section className="st-section">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag>Why us</Tag>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)", maxWidth: "760px" }}>
              Why international clients stay
            </h2>
          </Reveal>

          <div className="st-card-grid">
            {SERVICES_HUB.whyWorkWithUs.map((item, index) => (
              <Reveal
                className={`st-card${index === 0 ? " st-is-ink" : ""}`}
                key={item.title}
                delay={index * 60}
              >
                <div className="st-card-index">[{String(index + 1).padStart(2, "0")}]</div>
                <h3 className="st-h6 st-weight-medium">{item.title}</h3>
                <p className="st-text-s st-secondary">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        heading="A delivery model built for momentum"
        intro="The same four steps on every engagement, whichever service you start with."
        steps={PROCESS_STEPS}
      />

      <TestimonialsSection />

      <FaqSection
        eyebrow="Services FAQ"
        heading="Frequently asked questions"
        intro="Time zones, code ownership, pricing and kickoff."
        faqs={SERVICES_HUB.faqs}
      />

      <CtaSection
        eyebrow="Free automation audit"
        heading="Book your free automation audit"
        ctaLabel="Book an audit"
      />
    </>
  );
}
