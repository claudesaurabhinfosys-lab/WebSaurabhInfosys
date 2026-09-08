"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import type { CountryPageData } from "@/lib/data";
import { useIsDesktop } from "@/lib/use-is-desktop";
import { SectionBadge } from "@/components/ui/section-badge";
import { Reveal } from "@/components/ui/reveal";

/**
 * One step: the name in accent at H1 size, with its one-line description
 * parked against the left edge of the panel.
 *
 * The description is only legible while its step is near the centre of
 * the viewport — outside the sticky gradient's clear band the step itself
 * is dimmed to nothing — so it scrubs in at 40% of the step's own scroll,
 * holds to 60% and leaves by 70% (a-83). The reference damps that scrub
 * heavily, hence the spring rather than the raw progress value.
 */
function ProcessStep({ title, subtitle }: { title: string; subtitle: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const opacity = useTransform(smooth, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0], { clamp: true });

  const scrub = isDesktop && !reduce;

  return (
    <div className="process-v3-list" ref={ref}>
      <div className="process-v3-title">{title}</div>
      <motion.div
        className="process-v3-subtitle-wrap"
        style={scrub ? { opacity } : undefined}
      >
        <p className="paragraph-01 process-v3-subtitle">{subtitle}</p>
      </motion.div>
    </div>
  );
}

/**
 * process-v3. A black panel with the step names stacked down the middle
 * at display size, read through a 100vh sticky gradient that keeps only
 * the middle band clear — so scrolling the panel moves the legible step
 * rather than moving the type.
 *
 * The gradient does the whole effect in CSS: the list is pulled up over
 * it with `margin-top: -50vh` and given the same distance back as
 * padding, so it scrolls behind a scrim that never moves.
 */
export default function CountryProcess({ page }: { page: CountryPageData }) {
  return (
    <section className="process-v3 ds-root" aria-label="Our process">
      <div className="container">
        <div className="process-v3-wrap">
          <div className="process-v3-badge-wrap">
            <SectionBadge label="Our process" variant="dark" />
          </div>

          <div className="process-v3-shadow" aria-hidden="true" />

          <Reveal className="process-v3-main-wrap">
            {page.process.map((step) => (
              <ProcessStep key={step.title} title={step.title} subtitle={step.subtitle} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
