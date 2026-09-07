"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SERVICE_PROCESS } from "@/lib/data";
import { useIsDesktop } from "@/lib/use-is-desktop";
import { SectionBadge } from "@/components/ui/section-badge";
import { Reveal } from "@/components/ui/reveal";

/**
 * Desktop: a 250vh runway with a pinned viewport. The stage cards sweep in
 * from one viewport right to half a viewport left, while the wordmark they
 * pass over recedes — scaling to 0.7 and blurring to 5px, so it reads as
 * depth behind the cards rather than a second thing competing for the eye.
 *
 * Both run over the first 53% of the runway and then hold, which is what
 * gives the section a beat to rest on before the page moves off. The
 * numbers are the reference's, measured off it rather than guessed.
 *
 * Below 992px the runway collapses and the cards become a static grid.
 */
const SCRUB_END = 0.53;
const WORDMARK_SCALE_END = 0.7;
const WORDMARK_BLUR_END = 5;

export default function DetailProcess() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const reduce = useReducedMotion();
  const [viewport, setViewport] = useState(0);

  useEffect(() => {
    const measure = () => setViewport(window.innerWidth);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  // Interpolate the numbers, then format — interpolating whole transform
  // strings makes framer ping-pong once they carry a negative value.
  const shift = useTransform(scrollYProgress, [0, SCRUB_END], [viewport, -viewport / 2], {
    clamp: true,
  });
  const rowTransform = useTransform(shift, (v) => `translateX(${v}px)`);

  const scale = useTransform(scrollYProgress, [0, SCRUB_END], [1, WORDMARK_SCALE_END], {
    clamp: true,
  });
  const wordTransform = useTransform(scale, (v) => `translate(-50%, -50%) scale(${v})`);

  const blur = useTransform(scrollYProgress, [0, SCRUB_END], [0, WORDMARK_BLUR_END], {
    clamp: true,
  });
  const wordFilter = useTransform(blur, (v) => `blur(${v}px)`);

  const scrub = isDesktop && !reduce && viewport > 0;

  return (
    <section className="process ds-root">
      <div className="container">
        <div className="process-wrap" ref={wrapRef}>
          <div className="process-sticky">
            <div className="process-inner">
              <Reveal className="process-head-wrap">
                <h2 className="process-heading">A delivery model built for momentum</h2>
              </Reveal>

              <div className="process-main-wrap">
                <motion.div
                  className="process-wordmark"
                  aria-hidden="true"
                  style={scrub ? { transform: wordTransform, filter: wordFilter } : undefined}
                >
                  Process
                </motion.div>

                <motion.div
                  className="process-list-wrap"
                  style={scrub ? { transform: rowTransform } : undefined}
                >
                  {SERVICE_PROCESS.map((step) => (
                    <div className="process-list" key={step.number}>
                      <SectionBadge label={step.badge} variant="light" />
                      <div className="h2 process-number">{step.number}</div>
                      <p className="paragraph-01 process-details">{step.detail}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
