import { HOME_ABOUT } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionBadge } from "@/components/ui/section-badge";
import { SplitText } from "@/components/ui/split-text";
import { PrimaryButton } from "@/components/ui/ds-button";
import { workImage } from "@/components/pages/portfolio/work-images";

/**
 * about-v5. The heading spans the column, the badge holds the left rail,
 * the copy sits in a 454px measure, and a small square image pins to the
 * top right corner of the section.
 *
 * The reference renders the heading twice — once full width and once
 * inside the left rail, swapping which is visible at 479. Ours renders it
 * once so the document outline has a single h2; the head wrap just stops
 * hiding at 479 instead.
 *
 * The second paragraph scrubs grey to ink word by word, the same GSAP
 * SplitText effect used on the about page.
 */
export default function AboutSection() {
  return (
    <section className="about-v5 ds-root">
      <div className="container">
        <div className="about-v5-wrap">
          <Reveal delay={0.1} className="about-v5-head-wrap">
            <div className="heading-wrap">
              <h2 className="about-v5-heading">{HOME_ABOUT.heading}</h2>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="about-v5-main-wrap">
            <div className="about-v5-left">
              <SectionBadge label={HOME_ABOUT.badge} />
            </div>

            <div className="about-v5-right">
              <div className="about-v5-copy">
                <p className="paragraph-m-01">{HOME_ABOUT.lead}</p>
                <SplitText className="paragraph-m-01 split-text sm" text={HOME_ABOUT.sub} />
              </div>
              <div className="section-button-wrap">
                <PrimaryButton href="/about" label="About us" />
              </div>
            </div>
          </Reveal>

          <div className="about-v5-image-wrap">
            {/* TODO: a real studio photograph */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={workImage(undefined, 1, 0)}
              alt="The Saurabh Infosys studio in Ahmedabad"
              className="fit-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
