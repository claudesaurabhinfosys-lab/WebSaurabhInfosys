"use client";

import { useMemo, useState } from "react";
import Reveal from "../reveal";
import Tag from "../tag";
import MarqueeSection from "../marquee-section";
import CtaSection from "../cta-section";
import WorkCard from "../work-card";
import { StButtonLink } from "../button";
import { COMPANY } from "@/lib/company";

export type PortfolioCard = { slug: string; title: string; category: string; image: string };

type Props = {
  /** Card fields only, built by the server page — the full case studies in
      data.ts stay out of the browser bundle. */
  projects: PortfolioCard[];
  categories: readonly string[];
};

export default function PortfolioPage({ projects: allProjects, categories }: Props) {
  const [filter, setFilter] = useState("All");

  const projects = useMemo(
    () => allProjects.filter((project) => filter === "All" || project.category === filter),
    [allProjects, filter],
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
                      {COMPANY.stats.projects} projects delivered across AI,
                      Flutter, SaaS, fintech, logistics and health tech — for
                      clients in India, the UK, Europe, APAC, the Americas and
                      the Gulf. {allProjects.length} of them are showcased here.
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
            {categories.map((category) => (
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
              <Reveal
                key={project.slug}
                delay={(index % 2) * 90}
                className={
                  index === projects.length - 1 && projects.length % 2 === 1
                    ? "st-is-single"
                    : ""
                }
              >
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
