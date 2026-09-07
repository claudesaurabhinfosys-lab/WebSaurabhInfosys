import { COMPANY } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { PrimaryButton } from "@/components/ui/ds-button";
import { ArrowIcon } from "@/components/ui/icons";

export default function ServicesHero() {
  return (
    <section className="services-v2 ds-root">
      <div className="container">
        <div className="services-v2-head-wrap">
          <div className="services-v2-head-left">
            <Reveal>
              {/* H1 for the outline, H2 metrics for the layout — the
                  reference sets this heading at 72px */}
              <h1 className="h2 services-v2-heading-main">
                Software services built for speed, clarity and scale.
              </h1>
            </Reveal>
          </div>

          <Reveal index={1} className="services-v2-head-right">
            <div className="paragraph-03 services-v2-experience">
              {COMPANY.stats.years} years of shipping
            </div>
            <p className="paragraph-02 text-gray">
              We are the engineering team behind {COMPANY.stats.projects} shipped
              projects for {COMPANY.stats.clients} clients — AI automation, mobile
              apps, and SaaS platforms that go live and stay live.
            </p>
          </Reveal>
        </div>

        <Reveal index={2} className="services-v2-main-wrap">
          <div className="services-v2-image-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/work/placeholder-01.webp"
              alt="A mobile app interface rendered against a blue studio backdrop"
              className="fit-cover"
              width={1080}
              height={760}
            />
          </div>

          <div className="services-v2-card-wrap">
            <div className="h5 services-v2-heading">
              End-to-end product engineering support
            </div>

            <div className="services-v2-card-bottom">
              <div className="services-v2-small-card">
                <div className="services-v2-title-wrap">
                  <div className="h2 services-v2-stat">24/7</div>
                  <a
                    href={`https://wa.me/${COMPANY.whatsapp}`}
                    className="services-v2-arrow-link primary-arrow-wrap"
                    aria-label="Message us on WhatsApp"
                  >
                    <div className="primary-btn-arrow-mask">
                      <ArrowIcon tone="light" />
                      <ArrowIcon tone="light" />
                    </div>
                  </a>
                </div>
                <div className="paragraph-02 text-gray">
                  Support that never sleeps
                </div>
              </div>

              <PrimaryButton href="/contact" label="Work with us" className="full" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
