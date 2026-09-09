import Link from "next/link";
import { ABOUT, SERVICES } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionBadge } from "@/components/ui/section-badge";
import { PrimaryButton } from "@/components/ui/ds-button";
import { ArrowIcon } from "@/components/ui/icons";

/**
 * role-v1. A tinted statement card beside a bordered list of services.
 *
 * Row hover (a-29 / a-30, 350ms ease): the surface fills snow white, the
 * arrow chip turns brand blue, its icon pair slides 100% so the second
 * arrow takes the first one's place, and the thumbnail pushes to 1.13.
 * All four live in CSS on `.role-v1-content:hover`, gated behind a
 * fine-pointer query.
 */
export default function RoleSection() {
  return (
    <section className="role-v1 ds-root">
      <div className="container">
        <div className="role-v1-wrap">
          <Reveal delay={0.1}>
            <SectionBadge label={ABOUT.roleBadge} />
          </Reveal>

          <Reveal delay={0.2} className="role-v1-main-wrap">
            <div className="role-v1-card">
              <div className="role-v1-details-wrap">
                <p className="h6 role-v1-details">{ABOUT.roleLead}</p>
                <p className="h6 role-v1-details">{ABOUT.roleSub}</p>
              </div>
              <div className="section-button-wrap">
                <PrimaryButton href="/contact" label="Work with us" className="full" />
              </div>
            </div>

            <div className="role-v1-list-wrap">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="services-link"
                >
                  <div className="role-v1-content">
                    <div className="role-v1-details">
                      <div className="role-v1-image-wrap">
                        {/* decorative — the service title sits beside it */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`/images/services/${service.slug}.webp`}
                          alt=""
                          className="fit-cover"
                          loading="lazy"
                          width={1536}
                          height={1024}
                        />
                      </div>
                      <div className="h6 role-v1-title">{service.title}</div>
                    </div>
                    <div className="role-v1-link">
                      <div className="role-v1-icons">
                        {/* dark on the resting snow-white chip, white on the
                            brand blue one that slides in behind it */}
                        <ArrowIcon tone="light" />
                        <ArrowIcon tone="dark" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
