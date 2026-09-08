"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const DIM = "#7d7d7d";
const INK = "#141414";

/* GSAP's stagger maths, mapped onto one scroll progress value — the same
   derivation the removed home intro section used. A staggered tween of N words runs
   for DURATION + STAGGER * (N - 1); word i starts at i * STAGGER into that
   and lasts DURATION. Dividing through by the total gives each word its
   slice of 0 → 1, so the last word finishes exactly at the end of the range
   and the wave stays tight. */
const WORD_DURATION = 0.5;
const WORD_STAGGER = 0.1;

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
  return <motion.span style={{ color }}>{word} </motion.span>;
}

/**
 * The reference's GSAP SplitText effect: each word darkens from steel grey
 * to ink as the block scrolls through the viewport, left to right.
 *
 * Under reduced motion every word renders at full ink immediately — the
 * text is never left grey and unreadable.
 *
 * @param as  the element to render; the class carries the size
 */
export function SplitText({
  text,
  className,
  as: Tag = "div",
}: {
  text: string;
  className?: string;
  as?: "div" | "h1" | "h2" | "h3" | "h4";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // matches ScrollTrigger start "top center" / end "bottom center"
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const words = text.split(" ");
  const total = WORD_DURATION + WORD_STAGGER * (words.length - 1);

  if (reduce) {
    return (
      <Tag ref={ref} className={className} style={{ color: INK }}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => {
        const start = (i * WORD_STAGGER) / total;
        return (
          <ScrubWord
            key={`${word}-${i}`}
            word={word}
            start={start}
            end={start + WORD_DURATION / total}
            progress={scrollYProgress}
          />
        );
      })}
    </Tag>
  );
}
