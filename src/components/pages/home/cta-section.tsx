import { SectionBadge } from "@/components/ui/section-badge";
import { Reveal } from "@/components/ui/reveal";
import { PrimaryButton } from "@/components/ui/ds-button";

export default function CtaSection() {
  return (
    <section className="cta ds-root">
      <div className="container">
        <div className="cta-wrap">
          <div className="cta-content-wrap">
            <Reveal>
              <SectionBadge label="Contact" />
            </Reveal>
            <Reveal index={1}>
              <h2 className="cta-heading">
                Let&rsquo;s turn ambition <span className="text-gray">into execution.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal index={2}>
            <PrimaryButton href="/contact" label="Work with us" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
