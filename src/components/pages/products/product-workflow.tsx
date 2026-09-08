"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { SectionBadge } from "@/components/ui/section-badge";
import { useScrollRefresh } from "./use-scroll-refresh";
import type { ProductPage } from "@/lib/data";

/**
 * workflow-v2, with a-41 "Workflow Scroll".
 *
 * A 450vh runway behind a sticky 100vh stage. Across it:
 *   20%  the plate sits at 20% x 15vh, both titles centred and lit
 *   35%  the titles have flown to -80% / +80%
 *
 * The reference also fades the titles across that same window. The scrub
 * itself is exact, but the opacity value would not take on these elements
 * and I could not find what was overriding it, so the stage clips instead
 * and the titles are cut off as they leave. Worth another look.
 *   40%  the plate has grown to 100% x 100vh
 *   42%  the step cards enter at +100%
 *   80%  the cards have travelled to -40%
 *
 * The cards live inside the plate, so they arrive as it finishes opening.
 * Below 992px the reference switches the runway off and shows a static
 * grid instead; that is handled in CSS and mirrored by the second block
 * of markup here.
 */
export function ProductWorkflow({
  page,
  image,
}: {
  page: ProductPage;
  image: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useScrollRefresh();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const width = useTransform(scrollYProgress, [0.2, 0.4], ["20%", "100%"], { clamp: true });
  const height = useTransform(scrollYProgress, [0.2, 0.4], ["15vh", "100vh"], { clamp: true });

  /* full transform strings, not the `x` shorthand — every hook at the top
     level so the order never changes between renders */
  const leftX = useTransform(scrollYProgress, [0.2, 0.35], ["0%", "-80%"], { clamp: true });
  const rightX = useTransform(scrollYProgress, [0.2, 0.35], ["0%", "80%"], { clamp: true });
  const titleOpacity = useTransform(scrollYProgress, [0.2, 0.35], [1, 0], { clamp: true });
  const cardsX = useTransform(scrollYProgress, [0.42, 0.8], ["100%", "-40%"], { clamp: true });

  const cards = page.steps.map((step, i) => (
    <div key={step.label} className="workflow-v2-card">
      <SectionBadge label={step.label} variant="accent" />
      <div className="h2 workflow-v2-number">{String(i + 1).padStart(2, "0")}</div>
      <p className="paragraph-02 text-gray">{step.desc}</p>
    </div>
  ));

  return (
    <section className="workflow-v2 ds-root">
      <div className="container">
        <div className="workflow-v2-wrap" ref={ref}>
          <div className="workflow-v2-sticky">
            <motion.div
              className="workflow-v2-title-wrap left"
              style={reduce ? undefined : { x: leftX }}
            >
              <motion.div
                className="heading-wrap"
                style={reduce ? undefined : { opacity: titleOpacity }}
              >
                <h2>How it</h2>
              </motion.div>
            </motion.div>

            <motion.div
              className="workflow-v2-image-wrap"
              style={reduce ? undefined : { width, height }}
            >
              {/* TODO: a real product screenshot */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt="" className="fit-cover" />

              <motion.div
                className="workflow-v2-list-wrap"
                style={reduce ? undefined : { x: cardsX }}
              >
                {cards}
              </motion.div>
            </motion.div>

            <motion.div
              className="workflow-v2-title-wrap right"
              style={reduce ? undefined : { x: rightX }}
            >
              <motion.div
                className="heading-wrap"
                style={reduce ? undefined : { opacity: titleOpacity }}
              >
                <h2>rolls out</h2>
              </motion.div>
            </motion.div>
          </div>

          {/* ≤991: the runway is off, so the steps show as a plain grid */}
          <div className="workflow-v2-mobile">
            <div className="heading-wrap">
              <h2>How it rolls out</h2>
            </div>
            <div className="workflow-v2-list-wrap">{cards}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
