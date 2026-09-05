"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { COMPANY } from "@/lib/data";
import { SecondaryButton } from "@/components/ui/ds-button";
import { StarBadgeIcon } from "@/components/ui/icons";
import { RotatingText } from "@/components/ui/rotating-text";

/* The headline is two lines: a fixed dark first line, and a grey second
   line that rotates. Every option has to work as the tail of "We ship
   software …" and stay under ~16 characters so it never wraps to a third
   line at the 120px display size. */
const TAILS = ["that scales.", "that converts.", "that lasts.", "that pays off."];

/* Entrance: 40px rise + 5px blur, staggered — same as the reference build. */
const RISE = {
  hidden: { opacity: 0, y: 40, filter: "blur(5px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};
const EASE = [0.25, 0.1, 0.25, 1] as const;

/** The sticky showreel scroll only runs on desktop; below 992px the CSS
 *  flattens the block to a static image, so the inline styles must go. */
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 992px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return isDesktop;
}

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // Reference keyframes: 28% -> 50%  size 50%/40vh -> 100%/100vh
  //                      50% -> 60%  sticky opacity 1 -> 0.8
  const width = useTransform(scrollYProgress, [0.28, 0.5], ["50%", "100%"]);
  const height = useTransform(scrollYProgress, [0.28, 0.5], ["40vh", "100vh"]);
  const stickyOpacity = useTransform(scrollYProgress, [0.5, 0.6], [1, 0.8]);

  return (
    <section className="hero ds-root">
      <div className="container">
        <div className="hero-wrap">
          <div className="hero-header-wrap">
            <div className="hero-left">
              <motion.div
                className="hero-badge"
                variants={RISE}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.8, ease: EASE }}
              >
                <StarBadgeIcon />
                <div className="badge-text-wrap">
                  <div className="paragraph-03 rating">Rating</div>
                  <div className="paragraph-03">{COMPANY.stats.clutchRating}</div>
                </div>
              </motion.div>

              <motion.div
                variants={RISE}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              >
                <h1 className="hero-heading">
                  <span className="hero-heading-line">We ship software</span>
                  <RotatingText texts={TAILS} className="text-gray" />
                </h1>
              </motion.div>
            </div>

            <motion.div
              className="hero-right"
              variants={RISE}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            >
              <div className="h6-medium hero-title">Have a serious project?</div>
              <div className="hero-cta-image">
                {/* TODO: replace with a Saurabh Infosys team photo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero/placeholder-card.webp"
                  alt="Saurabh Infosys delivery team"
                  className="fit-cover hero-image"
                />
              </div>
              <SecondaryButton
                href={`mailto:${COMPANY.email}`}
                label={COMPANY.email}
                external
                className="fit"
              />
            </motion.div>
          </div>

          <motion.div
            className="hero-main-wrap"
            ref={scrollRef}
            variants={RISE}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          >
            {/* keyed so a breakpoint change remounts the node and drops the
                inline sizes framer-motion wrote for the other layout */}
            <motion.div
              key={isDesktop ? "desktop" : "mobile"}
              className="hero-sticky"
              style={isDesktop ? { opacity: stickyOpacity } : undefined}
            >
              <motion.div
                className="hero-image-wrap"
                style={isDesktop ? { width, height } : undefined}
              >
                {/* TODO: replace with the Saurabh Infosys showreel poster */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero/placeholder-showreel.webp"
                  alt="Showreel"
                  className="fit-cover hero-image"
                />
                <div className="hero-image-label">
                  <div className="paragraph-02 hero-label">Showreel</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
