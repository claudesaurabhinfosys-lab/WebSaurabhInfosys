import Link from "next/link";
import { COMPANY, PORTFOLIO_PROJECTS } from "@/lib/data";
import { SecondaryButton } from "@/components/ui/ds-button";
import { ArrowIcon, StarBadgeIcon } from "@/components/ui/icons";
import { ArrowUpRightIcon } from "@/components/ui/accordion-icons";
import { RotatingText } from "@/components/ui/rotating-text";
import { Reveal } from "@/components/ui/reveal";
import { Odometer } from "@/components/ui/odometer";
import { workImage } from "@/components/pages/portfolio/work-images";

/* The headline is two lines: a fixed dark first line, and a grey second
   line that rotates. Every option has to work as the tail of "We ship
   software …" and stay short enough not to wrap at the display size. */
const TAILS = ["that scales.", "that converts.", "that lasts.", "that pays off."];

const NEWEST = PORTFOLIO_PROJECTS[0];

/** One card in the row. Same component and hover as the portfolio index. */
function HeroCard({
  href,
  image,
  alt,
  label,
}: {
  href: string;
  image: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="work-item">
      <Link href={href} className="work-link">
        <div className="work-v1-card">
          <div className="work-v1-image-wrap sm">
            {/* TODO: real project shots — see public/images/work */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={alt} className="fit-cover work-v1-image" />
            <div className="work-button-wrap">
              <div className="work-button">
                <div className="work-btn-text-wrap">
                  <div className="primary-btn-mask">
                    <div className="primary-btn-text-group">
                      <div className="paragraph-02 btn-text-01">{label}</div>
                      <div className="paragraph-02 btn-text-02" aria-hidden="true">
                        {label}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="work-arrow-wrap">
                  <div className="primary-btn-arrow-mask">
                    <ArrowIcon tone="light" />
                    <ArrowIcon tone="dark" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

/**
 * The hero, merged from the two references.
 *
 * From home-01: the head row — rating badge, the two-line headline, and the
 * "Have a serious project?" card holding the right column. That card is the
 * one thing a visitor can act on without scrolling, so it stays above the
 * fold.
 *
 * From home-03: the card row underneath — a counter card, the newest launch
 * and the newest project, all three the same 330px height.
 *
 * home-03's full-width email bar is dropped. It said exactly what the
 * contact card already says, and two identical mailto CTAs one above the
 * other is a choice the visitor has to read twice to discover is not a
 * choice at all.
 */
export default function HeroSection() {
  return (
    <section className="hero-v3 ds-root">
      <div className="container">
        <div className="hero-v3-wrap">
          <div className="hero-v3-head-wrap">
            <div className="hero-v3-head-left">
              <Reveal delay={0.1}>
                <div className="hero-badge">
                  <StarBadgeIcon />
                  <div className="badge-text-wrap">
                    <div className="paragraph-03 rating">
                      Rating {COMPANY.stats.clutchRating}
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="hero-heading-wrap">
                  <h1 className="hero-heading">
                    <span className="hero-heading-line">We ship software</span>
                    <RotatingText texts={TAILS} className="text-gray" />
                  </h1>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="hero-aside">
              <div className="hero-right">
                <div className="h6-medium hero-title">
                  Have a serious
                  <br />
                  project?
                </div>
                <div className="hero-cta-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/hero/contact-card.webp"
                    alt="Creative directors in natural sunlight against open sky"
                    className="fit-cover hero-image"
                  />
                </div>
                <SecondaryButton
                  href={`mailto:${COMPANY.email}`}
                  label={COMPANY.email}
                  external
                  className="full"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.25} className="hero-v3-main-wrap">
            <div className="hero-v3-content-wrap">
              <div className="hero-v3-left">
                <div className="paragraph-03 uppercase-label">(Recent work)</div>

                <div className="hero-v3-left-content">
                  <div className="hero-v3-number-wrap">
                    <Odometer value={COMPANY.stats.projects.replace("+", "")} suffix="+" />
                    <div className="paragraph-m-02 text-gray">Projects delivered</div>
                  </div>

                  <Link href="/portfolio" className="hero-v3-link">
                    <ArrowUpRightIcon />
                    <div className="paragraph-03 hero-v3-link-title">All projects</div>
                    <div className="hero-v3-link-underline" />
                  </Link>
                </div>
              </div>

              <div className="hero-v3-right">
                <HeroCard
                  href="/products/mysampark"
                  image={workImage(undefined, 3, 0)}
                  alt="MySampark — bulk WhatsApp and SMS marketing"
                  label="New launch"
                />
                <HeroCard
                  href={`/portfolio/${NEWEST.slug}`}
                  image={workImage(NEWEST.images, NEWEST.id, 0)}
                  alt={`${NEWEST.title} project cover`}
                  label="View project"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
