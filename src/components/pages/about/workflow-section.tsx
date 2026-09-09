"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ABOUT } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionBadge } from "@/components/ui/section-badge";

const EASE = [0.25, 0.1, 0.25, 1] as const;

/**
 * workflow. Four step titles stacked down the centre in steel grey;
 * hovering one opens its image above it and its caption to the left.
 *
 * From a-31 / a-32, all 500ms ease: `.workflow-image-wrap` height 0 → auto,
 * `.workflow-title` steel grey → ink, and the sibling caption fades up
 * from 30px. Height is the one property this needs that has no transform
 * equivalent — the same exception DESIGN.md already makes for accordions.
 *
 * Below 992px the reference drops the interaction entirely: every step
 * shows its image and sits black in a two-column grid. That is handled in
 * CSS, so this only gates the hover state itself.
 */
export default function AboutWorkflowSection() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="workflow ds-root">
      <div className="container">
        <div className="workflow-inner">
          <Reveal delay={0.1}>
            <SectionBadge label={ABOUT.workflowBadge} />
          </Reveal>

          <Reveal delay={0.2} className="workflow-main-wrap">
            {ABOUT.workflowSteps.map((step, i) => {
              const isOpen = active === i;
              return (
                <div
                  key={step.title}
                  className={`workflow-list${isOpen ? " is-active" : ""}`}
                >
                  <div
                    className="workflow-center-content"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                  >
                    <motion.div
                      className="workflow-image-wrap"
                      initial={false}
                      animate={{ height: isOpen || reduce ? "auto" : 0 }}
                      transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
                    >
                      {/* decorative — the step title sits directly below it */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/images/about/workflow-0${i + 1}.webp`}
                        alt=""
                        className="fit-cover"
                        loading="lazy"
                        width={1536}
                        height={1024}
                      />
                    </motion.div>

                    <div className="workflow-content-wrap">
                      <h3 className="h2 workflow-title">{step.title}</h3>
                      {/* shown ≤991 only, where the caption rail is hidden */}
                      <div className="paragraph-01 workflow-subtitle">{step.subtitle}</div>
                    </div>
                  </div>

                  <motion.div
                    className="workflow-subtitle-wrap"
                    initial={false}
                    animate={{
                      opacity: isOpen ? 1 : 0,
                      transform: `translateY(${isOpen ? 0 : 30}px)`,
                    }}
                    transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
                    aria-hidden="true"
                  >
                    <div className="paragraph-01">{step.subtitle}</div>
                  </motion.div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
