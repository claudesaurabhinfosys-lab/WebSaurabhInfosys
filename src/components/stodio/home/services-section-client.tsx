"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "../reveal";
import Tag from "../tag";
import { ArrowRight, TagIcon } from "../icons";

export type FeaturedService = {
  slug: string;
  title: string;
  blurb: string;
  image: string;
  number: string;
};

/* Client half: only the hover/active state lives here. The list is built on
   the server (services-section.tsx) so data.ts stays out of the bundle. */
export default function ServicesSectionClient({ services: FEATURED }: { services: FeaturedService[] }) {
  const [active, setActive] = useState(0);

  return (
    <section className="st-service-section">
      <div className="st-container">
        <div className="st-service-content">
          <div className="st-service-title-wrapper">
            <Reveal>
              <div className="st-tag-block">
                <Tag on="dark">Services</Tag>
              </div>
              {/* One heading, laid out as the reference: "Everything [chip] your"
                  on the first line, "brand needs" under it. */}
              <h2 className="st-h2 st-service-title">
                <span className="st-service-title-flex">
                  <span>Everything</span>
                  <Image
                    className="st-service-title-image"
                    src="/images/hero/strip-05.webp"
                    alt=""
                    width={160}
                    height={120}
                  />
                  <span>your</span>
                </span>
                <span className="st-service-title-line">brand needs</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="st-service-title-right st-text-s">
                We build high-impact digital products through strategy, design,
                clean engineering and applied AI.
              </div>
            </Reveal>
          </div>

          <div className="st-service-item-block">
            {FEATURED.map((service, index) => (
              <div
                className={`st-service-item${index === active ? " st-is-active" : ""}`}
                key={service.slug}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="st-service-row"
                  aria-label={service.title}
                >
                  <span className="st-service-icon-wrap">
                    <ArrowRight className="st-service-icon" />
                  </span>
                  <span className="st-service-main">
                    <span className="st-service-name">{service.title}</span>
                    <span className="st-service-number st-mono">{service.number}</span>
                  </span>
                </Link>

                <div className="st-service-item-content">
                  <Image
                    className="st-service-item-image"
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={200}
                  />
                  <div className="st-service-item-info">
                    <div className="st-service-category">
                      <TagIcon className="st-service-category-icon" />
                      <div className="st-text-m st-mute">{service.title}</div>
                    </div>
                    <p className="st-text-m st-service-blurb">
                      {service.blurb}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
