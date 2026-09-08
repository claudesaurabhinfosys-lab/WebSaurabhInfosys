"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { PORTFOLIO_PROJECTS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionBadge } from "@/components/ui/section-badge";
import { PrimaryButton } from "@/components/ui/ds-button";
import { ArrowIcon } from "@/components/ui/icons";
import { workImage } from "@/components/pages/portfolio/work-images";

const FEATURED = PORTFOLIO_PROJECTS.slice(0, 4);

/**
 * One project row: a big shot on the left with its index and category
 * underneath, and a small card on the right.
 *
 * Hover (a-63 / a-64, 400ms ease): the View Project pill fades in and the
 * shot pushes to 1.15 — the same pair the portfolio index uses, so both
 * live in CSS on `.work-v5-left-link:hover`.
 *
 * The card is the only bespoke motion here: a-65 scrubs it from
 * `scale(0.85)` at 25% of the row's scroll to `scale(1)` at 32%, so it
 * pops in just after the image has settled rather than arriving with it.
 */
function WorkRow({
  project,
  index,
  total,
}: {
  project: (typeof PORTFOLIO_PROJECTS)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.25, 0.32], [0, 1], { clamp: true });
  const scale = useTransform(scrollYProgress, [0.25, 0.32], [0.85, 1], { clamp: true });
  const transform = useTransform(scale, (v) => `scale(${v})`);

  return (
    <div className="work-v5-item" ref={ref}>
      <div className="work-v5-content">
        <Link href={`/portfolio/${project.slug}`} className="work-v5-left-link">
          <div className="work-v5-image-wrap">
            {/* TODO: real project shots — see public/images/work */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={workImage(project.images, project.id, 0)}
              alt={`${project.title} project cover`}
              className="fit-cover"
              loading={index === 0 ? undefined : "lazy"}
            />
            <div className="work-button-wrap">
              <div className="work-button">
                <div className="work-btn-text-wrap">
                  <div className="primary-btn-mask">
                    <div className="primary-btn-text-group">
                      <div className="paragraph-02 btn-text-01">View project</div>
                      <div className="paragraph-02 btn-text-02" aria-hidden="true">
                        View project
                      </div>
                    </div>
                  </div>
                </div>
                <div className="work-arrow-wrap">
                  <div className="primary-btn-arrow-mask">
                    <ArrowIcon tone="light" />
                    <ArrowIcon tone="dark" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="work-v5-info">
            <div className="paragraph-03 work-number">
              {String(index + 1).padStart(2, "0")}
              <span className="text-gray">/{String(total).padStart(2, "0")}</span>
            </div>
            <div className="work-v5-info-left">
              {/* shown at 479 only, where the card is hidden */}
              <div className="h5 work-v5-title">{project.title}</div>
              <div className="paragraph-03 text-gray">{project.category}</div>
            </div>
          </div>
        </Link>

        <motion.div
          className="work-v5-card"
          style={reduce ? undefined : { opacity, transform }}
        >
          <div className="work-v5-text-wrap">
            <div className="h6">{project.title}</div>
            <div className="paragraph-02 text-gray">{project.category}</div>
          </div>
          <PrimaryButton
            href={`/portfolio/${project.slug}`}
            label="View project"
            className="full"
          />
        </motion.div>
      </div>
    </div>
  );
}

/**
 * work-v5. A sticky heading rail on the left, a column of project rows
 * on the right. Replaces the dark work-v6 panel.
 */
export default function WorkSection() {
  return (
    <section className="work-v5 ds-root">
      <div className="container">
        <div className="work-v5-wrap">
          <Reveal delay={0.1} className="work-v5-head-wrap">
            <SectionBadge label="Projects" />
            <div className="heading-wrap">
              <h2>Built for impact</h2>
            </div>
          </Reveal>

          <div className="work-v5-main-wrap">
            {FEATURED.map((project, i) => (
              <Reveal key={project.slug} delay={0.1}>
                <WorkRow project={project} index={i} total={FEATURED.length} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
