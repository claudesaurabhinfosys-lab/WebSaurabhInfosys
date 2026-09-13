"use client";

import { useMemo, useState } from "react";
import Reveal from "../reveal";
import Tag from "../tag";
import MarqueeSection from "../marquee-section";
import CtaSection from "../cta-section";
import WorkCard from "../work-card";
import { StButtonLink } from "../button";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_PROJECTS } from "@/lib/data";
import { workImage } from "@/components/stodio/lib/work-images";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const projects = useMemo(
    () =>
      PORTFOLIO_PROJECTS.map((project, index) => ({
        ...project,
        image: workImage(project.images, index, 0),
      })).filter((project) => filter === "All" || project.category === filter),
    [filter],
  );

  return (
    <>
      <div className="st-header st-is-light">
        <section className="st-hero st-is-light">
          <div className="st-container">
            <div className="st-hero-content">
              <Reveal className="st-tag-block">
                <Tag on="light">Our portfolio</Tag>
              </Reveal>

              <div className="st-hero-title-block st-is-row">
                <Reveal delay={100}>
                  <h1 className="st-h1">Turning ideas into shipped products</h1>
                </Reveal>

                <Reveal delay={200}>
                  <div className="st-hero-intro">
                    <p className="st-text-m st-secondary">
                      {PORTFOLIO_PROJECTS.length} delivered projects across AI,
                      Flutter, SaaS, fintech, logistics and health tech — for
                      clients in India, the UK, Europe, APAC, the Americas and
                      the Gulf.
                    </p>
                    <div className="st-button-wrapper st-is-hero">
                      <StButtonLink href="/contact" variant="dark">
                        Reach out
                      </StButtonLink>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </div>

      <MarqueeSection />

      <section className="st-projects-section">
        <div className="st-container">
          <div className="st-projects-filter">
            {PORTFOLIO_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                className={`st-filter-pill${filter === category ? " st-is-active" : ""}`}
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="st-projects-grid">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 2) * 90}>
                <WorkCard
                  href={`/portfolio/${project.slug}`}
                  title={project.title}
                  service={project.category}
                  image={project.image}
                  priority={index < 2}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Start a project"
        heading="Have something like this in mind?"
        ctaLabel="Tell us about it"
      />
    </>
  );
}
