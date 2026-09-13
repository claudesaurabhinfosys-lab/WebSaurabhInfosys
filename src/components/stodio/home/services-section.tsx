"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "../reveal";
import Tag from "../tag";
import { ArrowRight, TagIcon } from "../icons";
import { SERVICES } from "@/lib/data";

/** The four services that lead the home page, with their preview art. */
const FEATURED = SERVICES.slice(0, 4).map((service, index) => ({
  slug: service.slug,
  title: service.shortTitle ?? service.title,
  blurb: service.description,
  image: `/images/services/${service.slug}.webp`,
  number: `[0${index + 1}]`,
}));

export default function ServicesSection() {
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
              <div className="st-service-title-flex">
                <h2 className="st-h2">Everything</h2>
                <Image
                  className="st-service-title-image"
                  src="/images/about/identity.webp"
                  alt=""
                  width={80}
                  height={60}
                />
                <h2 className="st-h2">your brand needs</h2>
              </div>
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
                    <p className="st-text-l" style={{ marginTop: "var(--st-gap-12)" }}>
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
