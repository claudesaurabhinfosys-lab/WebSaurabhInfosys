"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "../reveal";
import Tag from "../tag";
import { ArrowRight, TagIcon } from "../icons";
import { SERVICES } from "@/lib/data";

/* One line each, deliberately close in length. The `description` field these
   used to borrow is SEO copy: the first ran 242 characters against 89 for the
   third, so the preview card jumped from 366px to 481px between rows and the
   longest one pushed the last card out of the slab. */
const BLURB: Record<string, string> = {
  "ai-automation-services": "WhatsApp bots, AI voice agents and custom workflows that run 24/7.",
  "app-development": "Flutter mobile apps and launch-ready MVPs shipped in 2 to 4 weeks.",
  "integration-services": "Two-way CRM, accounting and API integrations eliminating manual data entry.",
  "hire-developers": "Dedicated AI and Flutter engineers working on your schedule and timezone.",
  "white-label-software": "Turnkey school, property, fleet and marketing SaaS platforms under your brand.",
  "ai-agents": "WhatsApp bots, RAG systems and voice agents that run your workflows 24/7.",
  "vibe-coding": "AI-accelerated builds. A production-ready MVP in your hands in two weeks.",
  flutter: "One codebase, iOS and Android. Live on both stores, built to stay maintainable.",
  gps: "Live vehicle tracking, route optimisation and fleet analytics in one dashboard.",
  saas: "Multi-tenant platforms with billing and admin built in from day one.",
  "digital-marketing": "Search, social and paid, measured against pipeline rather than impressions.",
};

/** The four services that lead the home page, with their preview art. */
const FEATURED = SERVICES.slice(0, 4).map((service, index) => ({
  slug: service.slug,
  title: service.shortTitle ?? service.title,
  blurb: BLURB[service.slug] ?? service.description,
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
