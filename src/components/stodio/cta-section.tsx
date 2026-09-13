import Reveal from "./reveal";
import Tag from "./tag";
import { StButtonLink } from "./button";

type Props = {
  eyebrow?: string;
  heading?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

/** The closing panel every page ends on before the footer. */
export default function CtaSection({
  eyebrow = "Get started",
  heading = "Transform Your Ideas Today",
  ctaLabel = "Book a Consultation",
  ctaHref = "/contact",
}: Props) {
  return (
    <section className="st-cta-section">
      <div className="st-container">
        <div className="st-cta-block">
          <Reveal>
            <Tag>{eyebrow}</Tag>
          </Reveal>
          <Reveal delay={200} className="st-cta-title">
            <h2 className="st-h1">{heading}</h2>
          </Reveal>
          <Reveal delay={300}>
            <div className="st-button-wrapper st-is-cta">
              <StButtonLink href={ctaHref} variant="brand">
                {ctaLabel}
              </StButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
