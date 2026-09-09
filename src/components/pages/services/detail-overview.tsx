import type { ServiceDetail } from "@/lib/data";
import { SectionBadge } from "@/components/ui/section-badge";
import { Reveal } from "@/components/ui/reveal";
import { PrimaryButton } from "@/components/ui/ds-button";

export default function DetailOverview({
  detail,
  slug,
  title,
}: {
  detail: ServiceDetail;
  slug: string;
  title: string;
}) {
  return (
    <section className="services-v4 ds-root">
      <div className="container">
        <Reveal>
          <SectionBadge label="Overview" />
        </Reveal>

        <Reveal index={1} className="services-v4-wrap">
          <div className="services-v4-left">
            <div className="services-v4-image-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/services/${slug}.webp`}
                alt={`What ${title} covers at Saurabh Infosys`}
                className="fit-cover"
                loading="lazy"
                width={1536}
                height={1024}
              />
            </div>

            <div className="services-v4-details-wrap">
              <h2 className="services-v4-heading">What this service is about</h2>
              <div className="services-v4-details">
                {detail.overview.map((paragraph) => (
                  <p className="paragraph-02" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="services-v4-card">
            <p className="paragraph-02 text-gray">{detail.note}</p>
            <PrimaryButton href="/contact" label="Work with us" className="full" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
