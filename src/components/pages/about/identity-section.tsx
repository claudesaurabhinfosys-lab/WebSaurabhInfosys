import { ABOUT } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionBadge } from "@/components/ui/section-badge";
import { SplitText } from "@/components/ui/split-text";
import { PrimaryButton } from "@/components/ui/ds-button";

/**
 * identity. Two scrubbed statements over a hairline, then the story
 * paragraph beside a tall image.
 *
 * Both statements use the word-by-word grey-to-ink scrub the reference
 * drives with GSAP SplitText.
 */
export default function IdentitySection() {
  return (
    <section className="identity ds-root">
      <div className="container">
        <div className="identity-wrap">
          <Reveal delay={0.1} className="identity-top-wrap">
            <SectionBadge label={ABOUT.identityBadge} />
            <div className="identity-heading-wrap">
              <div className="heading-wrap">
                {/* h2 for the outline, H4 size to match the reference element */}
                <SplitText as="h2" className="h4 split-text" text={ABOUT.identityLead} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="identity-bottom-wrap">
            <div className="identity-image-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about/identity.webp"
                alt="Saurabh Infosys — an Ahmedabad-built software and AI studio"
                className="fit-cover"
                width={1448}
                height={1086}
              />
            </div>

            <div className="identity-details-wrap">
              <div className="heading-wrap">
                <SplitText className="h6 split-text" text={ABOUT.identitySub} />
              </div>
              {ABOUT.identityBody.map((paragraph) => (
                <p key={paragraph} className="paragraph-02 text-gray">
                  {paragraph}
                </p>
              ))}
              <div className="section-button-wrap">
                <PrimaryButton href="/contact" label="Work with us" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
