"use client";

import { COMPANY, type CountryPageData } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { PrimaryButton } from "@/components/ui/ds-button";

/**
 * hero-v2. A centred two-tone H1, a full-width accent CTA bar, and a
 * 740px media frame carrying the positioning copy.
 *
 * The reference floats three glass pills around the headline. Dropped:
 * with a headline this long they land on letters at every width, and
 * three decorative labels are not worth an unreadable H1.
 *
 * The reference also runs a background showreel in the frame. We have no
 * footage, so it holds a still behind a bottom-weighted scrim — the same
 * call `.about-v1-video-wrap` already makes on the about page.
 */
export default function CountryHero({ page }: { page: CountryPageData }) {
  const { hero } = page;

  const facts = [
    `${COMPANY.stats.clutchRating}★ on Clutch`,
    `${COMPANY.stats.projects} projects shipped`,
    "2-week first release",
  ];

  return (
    <section className="hero-v2 ds-root">
      <div className="container">
        <div className="hero-v2-wrap">
          <div className="hero-v2-head-wrap">
            <Reveal className="hero-heading-wrap">
              {/* Two lines, structurally — the market name always takes
                  the second one in grey. Reflowing on width would put
                  "for the" on its own line at some sizes. */}
              <h1 className="align-center">
                <span className="hero-v2-heading-line">{hero.headingLead}</span>
                <span className="hero-v2-heading-line text-gray">{hero.headingTail}</span>
              </h1>
            </Reveal>
          </div>

          <div className="hero-v2-main-wrap">
            <Reveal index={1} className="hero-v2-button-wrap">
              <PrimaryButton href={hero.ctaHref} label={hero.ctaLabel} className="full" />
            </Reveal>

            <Reveal index={2} className="hero-v2-video-wrap">
              {hero.image ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={hero.image}
                  alt={hero.imageAlt}
                  className="fit-cover hero-v2-panel-image"
                />
              ) : (
                <div className="hero-v2-panel-visual" />
              )}
              <div className="hero-v2-panel-scrim" />

              <div className="hero-v2-panel-content">
                <p className="paragraph-01 hero-v2-panel-details">{hero.intro}</p>
                <div className="hero-v2-facts">
                  {facts.map((fact) => (
                    <div key={fact} className="paragraph-03 hero-v2-fact">
                      {fact}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
