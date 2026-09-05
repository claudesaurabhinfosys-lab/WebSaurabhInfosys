"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { PrimaryButton } from "@/components/ui/ds-button";
import { Reveal } from "@/components/ui/reveal";

const PARAGRAPHS = [
  "Saurabh Infosys builds for founders and operators who move fast and expect the software to keep up. We work with teams where shipping cadence is the advantage, and where the difference between a two-week MVP and a two-quarter roadmap decides the outcome.",
  "Our role is straightforward: add speed without giving up standards. The engagement model shifts with the product, the market, and the stage the company is actually at.",
];

const DIM = "#7d7d7d";
const INK = "#141414";

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

  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const words = PARAGRAPHS.map((p) => p.split(" "));
  const total = words.reduce((n, p) => n + p.length, 0);
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
                    // each word lights over a window that slides across the
                    // paragraph, so the darkening reads as a wave not a fade
                    const start = (i / total) * 0.75;
                    return reduce ? (
                      <span key={i} className="word" style={{ color: INK }}>
                        {word}{" "}
                      </span>
                    ) : (
                      <ScrubWord
                        key={i}
                        word={word}
                        start={start}
                        end={start + 0.25}
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
              <div className="paragraph-03 intro-v4-title">Typical MVP ships in</div>
              <div className="intro-v4-price">
                2 weeks <span className="intro-price-duration">/start to launch.</span>
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
