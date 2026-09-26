import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/stodio/reveal";
import Tag from "@/components/stodio/tag";
import CtaSection from "@/components/stodio/cta-section";
import { StButtonLink } from "@/components/stodio/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

/* The reference's 404: the home hero's dark slab and background image, the
   "404 Error" tag, a single-line headline capped at 700px, and the intro plus
   one brand button pushed to the right — then the shared CTA. */
export default function NotFound() {
  return (
    <>
      <div className="st-header">
        <section className="st-hero">
          <Image
            className="st-hero-bg"
            src="/images/hero/home-hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="st-hero-scrim" />

          <div className="st-container">
            <div className="st-hero-content">
              <Reveal className="st-tag-block">
                <Tag>404 Error</Tag>
              </Reveal>

              <div className="st-hero-title-block st-is-404">
                <Reveal delay={100}>
                  <h1 className="st-h1">Oops! This page is off the grid</h1>
                </Reveal>
              </div>

              <div className="st-hero-content-wrapper st-is-404">
                <Reveal delay={200}>
                  <div className="st-hero-intro">
                    <h2 className="st-h4">
                      The page you are looking for has moved or no longer
                      exists. Let&rsquo;s get you back on track.
                    </h2>
                    <div className="st-button-wrapper st-is-hero">
                      <StButtonLink href="/" variant="brand">
                        Back to Home
                      </StButtonLink>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CtaSection eyebrow="Get started" heading="Transform Your Ideas Today" ctaLabel="Book a Consultation" />
    </>
  );
}
