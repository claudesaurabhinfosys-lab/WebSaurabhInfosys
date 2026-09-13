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
import { HOME_FAQS, SERVICE_PROCESS, SERVICES } from "@/lib/data";

/** The one line of "what you get, how fast" that belongs beside each service. */
const DELIVERY: Record<string, string> = {
  "ai-agents": "Live in 2–3 weeks",
  "vibe-coding": "MVP in 14 days",
  flutter: "iOS + Android, one codebase",
  gps: "Fleet-ready in 4 weeks",
  saas: "Multi-tenant from day one",
  "digital-marketing": "Ongoing retainer",
};

const PROCESS_STEPS = SERVICE_PROCESS.map((step) => ({
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
                <Tag on="light">What we do</Tag>
              </Reveal>

              <div className="st-hero-title-block st-is-row">
                <Reveal delay={60}>
                  <h1 className="st-h1">Six ways we ship your product</h1>
                </Reveal>

                <Reveal delay={120}>
                  <div className="st-hero-intro">
                    <p className="st-text-m st-secondary">
                      AI automation, AI-accelerated builds, mobile, fleet, SaaS
                      and growth. Each one is a team that has shipped it before,
                      not a line on a capability deck.
                    </p>
                    <div className="st-button-wrapper st-is-hero">
                      <StButtonLink href="/contact" variant="dark">
                        Start a project
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
            <Tag>Services</Tag>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)", maxWidth: "760px" }}>
              Pick the one that matches the problem
            </h2>
          </Reveal>

          <div className="st-list">
            {SERVICES.map((service, index) => (
              <Reveal key={service.slug} delay={Math.min(index, 4) * 50}>
                <Link className="st-list-row" href={`/services/${service.slug}`}>
                  <div className="st-list-row-name">
                    <h3 className="st-h5 st-weight-medium">{service.title}</h3>
                    <p className="st-text-s st-list-row-blurb">
                      {service.features.slice(0, 3).join(" · ")}
                    </p>
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

      <ProcessSection
        heading="A delivery model designed for momentum"
        intro="The same four steps on every engagement, whichever service you start with."
        steps={PROCESS_STEPS}
      />

      <TestimonialsSection />

      <FaqSection faqs={HOME_FAQS} />

      <CtaSection
        eyebrow="Get started"
        heading="Tell us what you are building"
        ctaLabel="Book a consultation"
      />
    </>
  );
}
