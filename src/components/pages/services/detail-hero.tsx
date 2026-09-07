import type { SERVICES } from "@/lib/data";
import { SectionBadge } from "@/components/ui/section-badge";
import { Reveal } from "@/components/ui/reveal";
import { PrimaryButton } from "@/components/ui/ds-button";

type Service = (typeof SERVICES)[number];

export default function DetailHero({ service }: { service: Service }) {
  return (
    <section className="services-v2 ds-root">
      <div className="container">
        <div className="services-v2-head-wrap">
          <div className="services-v2-head-left">
            <Reveal className="services-v2-heading-wrap">
              <SectionBadge label={service.shortTitle} />
              {/* H1 for the outline, H2 metrics for the layout */}
              <h1 className="h2 services-v2-heading-main">{service.title}</h1>
            </Reveal>
          </div>

          <Reveal index={1} className="services-v2-head-right gap">
            <p className="paragraph-02 text-gray">{service.description}</p>
            <div className="services-v2-button-wrap">
              <PrimaryButton href="/contact" label="Start a project" />
            </div>
          </Reveal>
        </div>

        <Reveal index={2} className="services-image-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/work/placeholder-02.webp"
            alt={`${service.title} at Saurabh Infosys`}
            className="fit-cover"
            width={1440}
            height={690}
          />
        </Reveal>
      </div>
    </section>
  );
}
