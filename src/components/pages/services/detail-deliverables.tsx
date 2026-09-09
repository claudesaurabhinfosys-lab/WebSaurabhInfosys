import { SectionBadge } from "@/components/ui/section-badge";
import { Reveal } from "@/components/ui/reveal";
import { PrimaryButton } from "@/components/ui/ds-button";

export default function DetailDeliverables({
  features,
  slug,
  title,
}: {
  features: readonly string[];
  slug: string;
  title: string;
}) {
  return (
    <section className="services-v5 ds-root">
      <div className="container">
        <Reveal className="services-v5-wrap">
          <div className="services-v5-content-wrap">
            <div className="services-v5-head-wrap">
              <SectionBadge label="Deliverables" variant="light" />
              <h2 className="h3 services-v5-heading">
                What&rsquo;s included in this service
              </h2>
            </div>

            <div className="services-v5-bottom">
              <div className="services-v5-details-wrap">
                <div className="paragraph-03 uppercase-label">What&rsquo;s included</div>
                <ul className="services-v5-list">
                  {features.map((feature) => (
                    <li key={feature}>
                      <div className="paragraph-02 text-gray">{feature}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <PrimaryButton href="/contact" label="Work with us" className="full" />
            </div>
          </div>

          <div className="services-v5-image-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/services/${slug}-deliverables.webp`}
              alt={`${title} deliverables from Saurabh Infosys`}
              className="fit-cover"
              loading="lazy"
              width={1536}
              height={1024}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
