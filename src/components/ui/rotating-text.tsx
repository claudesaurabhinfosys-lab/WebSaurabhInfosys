"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const INTERVAL_MS = 2600;
const DURATION = 0.45;
/* 0.02 rather than 0.03: with a sequential swap the whole word has to leave
   before the next arrives, so the stagger is paid twice per cycle. At 0.03 a
   14-character word leaves the line blank long enough to read as a bug. */
const STAGGER = 0.02;
const EASE = [0.23, 1, 0.32, 1] as const;

/** Grapheme-safe split so emoji and combining marks stay whole. */
function toCharacters(text: string): string[] {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), (part) => part.segment);
  }
  return Array.from(text);
}

/**
 * One word swapping for the next on a timer, character by character: the
 * outgoing set lifts and fades from the first letter, the incoming set rises
 * into place behind it.
 *
 * The word sits on its own line, so a longer word never reflows the lines
 * around it. Under prefers-reduced-motion the characters cross-fade in place
 * with no travel.
 */
export function RotatingText({
  texts,
  className,
}: {
  texts: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (texts.length <= 1) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % texts.length),
      INTERVAL_MS,
    );
    return () => window.clearInterval(id);
  }, [texts.length]);

  const current = texts[index] ?? "";
  const characters = toCharacters(current);

  return (
    <span className={className ? `rotating-text ${className}` : "rotating-text"}>
      {/* the live value for screen readers — the animated copy is decorative */}
      <span className="sr-only" aria-live="polite">
        {current}
      </span>

      {/* wait, not popLayout: the outgoing word finishes leaving before the
          next one arrives, so the two never overlap or fight for position */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span className="rotating-text-word" key={index} aria-hidden="true">
          {characters.map((char, i) => (
            <motion.span
              className="rotating-text-char"
              key={`${index}-${i}`}
              initial={
                reduce
                  ? { opacity: 0 }
                  : // 140%, not 100%: the mask is padded below the line box so
                    // descenders are not clipped, and a character starting only
                    // one line-height down peeks into that padding
                    { opacity: 0, transform: "translateY(140%)" }
              }
              animate={
                reduce ? { opacity: 1 } : { opacity: 1, transform: "translateY(0%)" }
              }
              exit={
                reduce
                  ? { opacity: 0 }
                  : { opacity: 0, transform: "translateY(-120%)" }
              }
              transition={{
                duration: reduce ? 0.2 : DURATION,
                ease: EASE,
                delay: reduce ? 0 : i * STAGGER,
              }}
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
