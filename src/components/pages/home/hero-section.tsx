import { CLIENTS, COMPANY, TESTIMONIALS } from "@/lib/data";
import { SecondaryButton } from "@/components/ui/ds-button";
import { StarBadgeIcon } from "@/components/ui/icons";
import { ArrowUpRightIcon } from "@/components/ui/accordion-icons";
import { RotatingText } from "@/components/ui/rotating-text";
import { Reveal } from "@/components/ui/reveal";

/* The headline is two lines: a fixed dark first line, and a grey second
   line that rotates. Every option has to work as the tail of "We ship
   software …" and stay under ~16 characters so it never wraps to a third
   line at the 120px display size. */
const TAILS = ["that scales.", "that converts.", "that lasts.", "that pays off."];

const LEAD = TESTIMONIALS[0];

/**
 * Headline and the latest launch on the left, the contact card on the right,
 * then a trust strip: a labelled rule, the client row, and one quote.
 *
 * No hero media. The reference's sticky showreel was a stock video frame
 * standing in for footage we do not have, and it cost 300vh of scroll to say
 * nothing. The space went to real clients and a real quote instead.
 */
export default function HeroSection() {
  return (
    <section className="hero ds-root">
      <div className="container">
        <div className="hero-header-wrap">
          <div className="hero-left">
            <Reveal>
              <div className="hero-badge">
                <StarBadgeIcon />
                <div className="badge-text-wrap">
                  <div className="paragraph-03 rating">Rating</div>
                  <div className="paragraph-03">{COMPANY.stats.clutchRating}</div>
                </div>
              </div>
            </Reveal>

            <Reveal index={1}>
              <h1 className="hero-heading">
                <span className="hero-heading-line">We ship software</span>
                <RotatingText texts={TAILS} className="text-gray" />
              </h1>
            </Reveal>

            <Reveal index={2} className="hero-bottom-row">
              <a
                href="https://mysampark.com"
                target="_blank"
                rel="noreferrer"
                className="hero-launch-card"
              >
                <div className="hero-launch-thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/mysampark-logo.svg" alt="" className="hero-launch-logo" />
                </div>
                <div className="hero-launch-body">
                  <div className="paragraph-03 hero-launch-eyebrow">New launch</div>
                  <div className="paragraph-m-01 hero-launch-title">MySampark</div>
                  <div className="caption hero-launch-copy">
                    Housing society management, live across India.
                  </div>
                </div>
                {/* same masked slide as the buttons: one glyph leaves, an
                    identical one arrives */}
                <span className="hero-launch-arrow">
                  <span className="hero-launch-arrow-mask">
                    <ArrowUpRightIcon />
                    <ArrowUpRightIcon />
                  </span>
                </span>
              </a>

              <p className="paragraph-01 hero-bottom-copy">
                AI automation, mobile apps and SaaS platforms for teams who need
                them working in weeks, not quarters.
              </p>
            </Reveal>
          </div>

          <Reveal index={3} className="hero-right">
            <div className="h6-medium hero-title">Have a serious project?</div>
            <div className="hero-cta-image">
              <img
                src="/images/hero/placeholder-card.webp"
                alt="Saurabh Infosys delivery team"
                className="fit-cover hero-image"
              />
            </div>
            <SecondaryButton
              href={`mailto:${COMPANY.email}`}
              label={COMPANY.email}
              external
              className="fit"
            />
          </Reveal>
        </div>

        <div className="hero-intro-wrap">
          <div className="hero-brand-wrap">
            <Reveal className="hero-brand-title-wrap">
              <div className="hero-brand-divider" />
              <div className="paragraph-03 hero-brand-title">
                Trusted by teams across four continents
              </div>
              <div className="hero-brand-divider" />
            </Reveal>

            <Reveal index={1} className="hero-brand-list">
              {CLIENTS.map((client) => (
                <div className="paragraph-m-01 hero-brand-item" key={client.name}>
                  {client.name}
                </div>
              ))}
            </Reveal>
          </div>

          <div className="hero-intro-details-wrap">
            <Reveal index={2}>
              <blockquote className="hero-intro-heading">
                &ldquo;{LEAD.text}&rdquo;
              </blockquote>
            </Reveal>
            <Reveal index={3} className="hero-quote-info">
              <div className="paragraph-m-01 align-center">{LEAD.name}</div>
              <div className="caption author-tagline">{LEAD.role}</div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
