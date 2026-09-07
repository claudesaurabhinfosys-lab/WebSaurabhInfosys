"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { PrimaryButton } from "@/components/ui/ds-button";
import { Reveal } from "@/components/ui/reveal";

const PARAGRAPHS = [
  "We build for founders and operators who move fast and expect the software to keep up. Teams where shipping cadence is the advantage, and where the gap between a two-week MVP and a two-quarter roadmap decides the outcome.",
  "Our role is simple: add speed without giving up standards. How we work shifts with the product, the market, and the stage you are actually at.",
];

const DIM = "#7d7d7d";
const INK = "#141414";

/* GSAP's stagger maths, mapped onto one scroll progress value.
   A staggered tween of N words runs for DURATION + STAGGER * (N - 1); word i
   starts at i * STAGGER into that and lasts DURATION. Dividing through by the
   total gives each word its slice of 0 → 1, so the last word finishes exactly
   at the end of the range and the wave stays tight instead of lighting a
   third of the paragraph at once. */
const WORD_DURATION = 0.5;
const WORD_STAGGER = 0.1;

/**
 * Each word darkens from steel grey to ink as the paragraph scrolls
 * through the viewport, left to right. The reference does this with GSAP
 * SplitText on a scrubbed ScrollTrigger; this is the same effect driven
 * off one scroll progress value with a per-word window.
 */
function ScrubWord({
  word,
  start,
  end,
  progress,
}: {
  word: string;
  start: number;
  end: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const color = useTransform(progress, [start, end], [DIM, INK], { clamp: true });
  return (
    <motion.span className="word" style={{ color }}>
      {word}{" "}
    </motion.span>
  );
}

export default function IntroSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // matches ScrollTrigger start "top center" / end "bottom center"
  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start center", "end center"],
  });

  const words = PARAGRAPHS.map((p) => p.split(" "));
  const total = words.reduce((n, p) => n + p.length, 0);
  const span = WORD_DURATION + WORD_STAGGER * (total - 1);
  let cursor = 0;

  return (
    <section className="intro-v4 ds-root">
      <div className="container">
        <div className="intro-v4-wrap">
          <div ref={headingRef}>
            <h2 className="intro-v4-heading">
              {words.map((paragraph, pi) => (
                <span key={pi} style={{ display: "block", marginTop: pi ? "1em" : 0 }}>
                  {paragraph.map((word) => {
                    const i = cursor++;
                    const start = (i * WORD_STAGGER) / span;
                    return reduce ? (
                      <span key={i} className="word" style={{ color: INK }}>
                        {word}{" "}
                      </span>
                    ) : (
                      <ScrubWord
                        key={i}
                        word={word}
                        start={start}
                        end={(i * WORD_STAGGER + WORD_DURATION) / span}
                        progress={scrollYProgress}
                      />
                    );
                  })}
                </span>
              ))}
            </h2>
          </div>

          <Reveal className="intro-v4-card-wrap">
            <div className="intro-v4-text-wrap">
              <div className="paragraph-03 intro-v4-title">Time to first working build</div>
              <div className="intro-v4-price">
                2 weeks <span className="intro-price-duration">from kickoff.</span>
              </div>
            </div>
            <div className="intro-v4-button-wrap">
              <PrimaryButton href="/contact" label="Book a call" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
