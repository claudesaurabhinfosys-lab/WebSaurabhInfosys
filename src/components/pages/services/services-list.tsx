import { SERVICES } from "@/lib/data";
import { SectionBadge } from "@/components/ui/section-badge";
import { Reveal } from "@/components/ui/reveal";
import { PrimaryButton } from "@/components/ui/ds-button";

/**
 * Every row is its own sticky card on a white ground, so scrolling
 * pulls each service up over the one before it — the stack reads as a
 * deck being dealt rather than a list going past.
 */
export default function ServicesList() {
  const total = String(SERVICES.length).padStart(2, "0");

  return (
    <section className="services-v3 ds-root">
      <div className="container">
        <Reveal>
          <SectionBadge label="Service" />
        </Reveal>

        <div className="services-v3-main-wrap">
          {SERVICES.map((service, i) => (
            <div className="services-v3-list" key={service.slug}>
              <div className="services-v3-inner">
                <div className="services-v3-left">
                  <div className="services-v3-top">
                    <div className="services-v3-serial-wrap">
                      <div className="paragraph-03">
                        {i + 1}
                        <span className="text-gray">/{total}</span>
                      </div>
                    </div>
                    <h2 className="services-v3-title">{service.title}</h2>
                  </div>

                  <div className="services-v3-bottom">
                    <div className="h5 services-v3-subtitle">
                      {service.description}
                    </div>
                    <PrimaryButton
                      href={`/services/${service.slug}`}
                      label="See details"
                    />
                  </div>
                </div>

                <div className="services-v3-right">
                  {/* TODO: swap the gradient for real service imagery */}
                  <div className="services-v3-image-wrap" />

                  <div className="services-v3-details-wrap">
                    <div className="paragraph-03 uppercase-label">
                      What&rsquo;s included
                    </div>
                    <ul className="services-v3-features-wrap">
                      {service.features.map((feature) => (
                        <li className="services-v3-features-item" key={feature}>
                          <div className="paragraph-02 text-gray">{feature}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
