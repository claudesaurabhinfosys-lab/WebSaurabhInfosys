"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { PORTFOLIO_PROJECTS } from "@/lib/data";
import { SectionBadge } from "@/components/ui/section-badge";
import { Reveal } from "@/components/ui/reveal";
import { WorkArrowIcon } from "@/components/ui/icons";

/* Five featured projects. Images are placeholders until we have real
   project shots — see public/images/work. */
const FEATURED = PORTFOLIO_PROJECTS.slice(0, 5).map((project, i) => ({
  ...project,
  image: `/images/work/placeholder-0${i + 1}.webp`,
}));

/**
 * The left rail: a sticky 310px window onto a taller stack of titles that
 * translates 35% → -45% of its own height as the whole section passes.
 *
 * The reference smooths the scrub heavily (Webflow smoothing: 70), which
 * reads as lag rather than a hard 1:1 scrub — reproduced here with a spring
 * on the progress value.
 */
function WorkTitleRail({ progress }: { progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const reduce = useReducedMotion();
  const smoothed = useSpring(progress, { stiffness: 60, damping: 20, mass: 0.6 });
  const shift = useTransform(smoothed, [0.27, 0.8], [35, -45], { clamp: true });
  // full transform string, not the `y` shorthand — the shorthand is not
  // hardware accelerated and drops frames while the page is still loading
  const transform = useTransform(shift, (v) => `translateY(${v}%)`);

  return (
    <Reveal className="work-left-list-wrap">
      <motion.div className="work-v6-left-list" style={reduce ? undefined : { transform }}>
        {FEATURED.map((project) => (
          <div key={project.slug} className="h5 work-v6-title">
            {project.title}
          </div>
        ))}
      </motion.div>
      <div className="work-left-cover" />
      <div className="work-left-cover bottom" />
    </Reveal>
  );
}

export default function WorkSection() {
  const innerRef = useRef<HTMLDivElement>(null);

  // 0% when the section's top hits the viewport bottom, 100% when its
  // bottom hits the viewport top — Webflow's SCROLLING_IN_VIEW definition.
  const { scrollYProgress } = useScroll({
    target: innerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section className="work-v6 ds-root">
      <div className="container">
        <div className="work-v6-wrap">
          <div className="work-v6-inner" ref={innerRef}>
            <div className="work-v6-left">
              <Reveal>
                <SectionBadge label="Our Work" variant="accent" />
              </Reveal>
              <WorkTitleRail progress={scrollYProgress} />
            </div>

            <div className="work-v6-right">
              <Reveal className="work-v6-list">
                {FEATURED.map((project, i) => (
                  <div className="work-v6-item" key={project.slug}>
                    <Link href={`/portfolio/${project.slug}`} className="work-v6-link">
                      <div className="work-v6-content-wrap">
                        <div className="work-v6-image-wrap">
                          {/* TODO: replace with real project imagery */}
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={project.image}
                            alt={project.title}
                            loading={i === 0 ? undefined : "lazy"}
                            className="fit-cover work-v6-image"
                          />
                          <WorkArrowIcon />
                        </div>
                        {/* shown ≤991 only, where the left rail is hidden */}
                        <div className="work-v6-title-wrap">
                          <div className="paragraph-m-01 work-v6-title">{project.title}</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </Reveal>
            </div>

            <div className="work-v6-shadow-wrapper">
              <div className="work-v6-shadow" />
              <div className="work-v6-shadow bottom" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
