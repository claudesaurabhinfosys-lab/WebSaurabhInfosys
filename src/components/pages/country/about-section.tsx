import type { CountryPageData } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionBadge } from "@/components/ui/section-badge";
import { PrimaryButton } from "@/components/ui/ds-button";

/**
 * about-v4. A snow-white panel: the statement sits top-left on wide
 * screens with a narrow badge rail beneath it, and the image plus body
 * copy fill the right.
 *
 * The reference prints the statement twice and hides one copy per
 * breakpoint — `.about-v4-head-wrap` above 991, the copy inside
 * `.about-v4-left` below it. We keep that, with the duplicate marked
 * `aria-hidden` so a screen reader hears the statement once.
 */
export default function CountryAbout({ page }: { page: CountryPageData }) {
  const { about } = page;

  return (
    <section className="about-v4 ds-root">
      <div className="container">
        <div className="about-v4-wrap">
          <Reveal className="about-v4-head-wrap">
            <h2 className="about-v4-heading">{about.heading}</h2>
          </Reveal>

          <div className="about-v4-main-wrap">
            <div className="about-v4-left">
              <Reveal>
                <SectionBadge label={about.badge} />
              </Reveal>
              {/* the ≤991 copy of the statement — hidden from AT so the
                  heading is not announced twice */}
              <div className="about-v4-heading about-v4-heading-mobile" aria-hidden="true">
                {about.heading}
              </div>
            </div>

            <div className="about-v4-right">
              <Reveal index={1} className="about-v4-image-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={about.image} alt={about.imageAlt} className="fit-cover" />
              </Reveal>

              <div className="about-v4-content-wrap">
                <Reveal index={2}>
                  <p className="paragraph-01 about-v4-details">
                    <span className="about-v4-span">{about.leadSpan}</span>
                    {about.body}
                  </p>
                </Reveal>
                <Reveal index={3} className="section-button-wrap">
                  <PrimaryButton href={about.buttonHref} label={about.buttonLabel} />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
