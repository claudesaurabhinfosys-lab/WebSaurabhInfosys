"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ABOUT, ABOUT_BELIEFS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionBadge } from "@/components/ui/section-badge";
import { workImage } from "@/components/pages/portfolio/work-images";

const EASE = [0.25, 0.1, 0.25, 1] as const;

/* Slide width plus the gap between slides — the track shifts by exactly
   this much per step so the active slide always lands centred. */
const SLIDE = 360;
const GAP = 140;

/**
 * beliefs. A centred 360px track with its neighbours bleeding out of the
 * panel on both sides.
 *
 * The reference is a Webflow slider whose SLIDER_ACTIVE / SLIDER_INACTIVE
 * interactions (a-27 / a-28, 600ms ease) scale the inactive images to 0.6
 * at half opacity and drop their captions out entirely. Same numbers here,
 * driven off the active index instead of Webflow's slider.
 */
export default function BeliefsSection() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section className="beliefs ds-root">
      <div className="container">
        <div className="beliefs-wrap">
          <div className="beliefs-inner">
            <Reveal delay={0.1} className="beliefs-head-wrap">
              <SectionBadge label={ABOUT.beliefsBadge} />
              <div className="heading-wrap">
                <h2>{ABOUT.beliefsHeading}</h2>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="beliefs-main-wrap">
              <div className="beliefs-mask">
                <motion.div
                  className="beliefs-track"
                  animate={{ transform: `translateX(-${active * (SLIDE + GAP)}px)` }}
                  transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
                >
                  {ABOUT_BELIEFS.map((belief, i) => {
                    const isActive = i === active;
                    return (
                      <div key={belief.title} className="beliefs-slide-wrapper">
                        <div className="beliefs-content">
                          <motion.div
                            className="beliefs-image-wrap"
                            animate={{
                              transform: `scale(${isActive || reduce ? 1 : 0.6})`,
                              opacity: isActive || reduce ? 1 : 0.5,
                            }}
                            transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
                          >
                            {/* TODO: real imagery per principle */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={workImage(undefined, i, 0)} alt="" className="fit-cover" />
                          </motion.div>
                          <motion.div
                            className="beliefs-details-wrap"
                            animate={{
                              transform: `translateY(${isActive || reduce ? 0 : 20}px)`,
                              opacity: isActive || reduce ? 1 : 0,
                            }}
                            transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
                            aria-hidden={!isActive}
                          >
                            <div className="h6 beliefs-title">{belief.title}</div>
                            <p className="paragraph-02 beliefs-details">{belief.body}</p>
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              {/* The reference hides its slider arrows and relies on drag.
                  Dots are keyboard reachable, which arrows-only is not. */}
              <div className="beliefs-nav">
                {ABOUT_BELIEFS.map((belief, i) => (
                  <button
                    key={belief.title}
                    type="button"
                    className={`beliefs-dot${i === active ? " is-active" : ""}`}
                    aria-label={`Show ${belief.title}`}
                    aria-current={i === active}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
