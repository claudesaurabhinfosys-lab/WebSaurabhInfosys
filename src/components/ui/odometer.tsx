"use client";

import { useMemo, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* Webflow's "ease" curve, so this matches the rest of the ported motion. */
const EASE = [0.25, 0.1, 0.25, 1] as const;
const STRIP = 5; // digits in a strip, as the reference builds them

/**
 * One digit of the counter.
 *
 * The strip is built so the REAL digit is the one sitting in the window at
 * rest — with JS off, or under reduced motion, the correct number renders.
 * The roll is decoration on top of a correct static value.
 *
 * Alternate digits rest at opposite ends of their strip and travel in
 * opposite directions, which is what gives the reference its counter-
 * rotating look rather than one uniform scroll.
 *
 * `inView` is passed in rather than observed here: the strip is translated
 * a whole strip-length away inside its clipped window, so its own clipped
 * intersection rect is empty and an observer on it never fires.
 */
function DigitStrip({
  digit,
  index,
  inView,
}: {
  digit: string;
  index: number;
  inView: boolean;
}) {
  const reduce = useReducedMotion();
  // even digits rest at the bottom of their strip, odd ones at the top
  const alignEnd = index % 2 === 0;

  const strip = useMemo(() => {
    const lead = Array.from(
      { length: STRIP - 1 },
      (_, i) => String((Number(digit) + i + 1) % 10)
    );
    return alignEnd ? [...lead, digit] : [digit, ...lead];
  }, [digit, alignEnd]);

  // the row clips to one digit, so a whole strip is (STRIP - 1) digits of travel
  const travel = (STRIP - 1) * 100;
  const from = alignEnd ? `translateY(${travel}%)` : `translateY(-${travel}%)`;
  const settled = "translateY(0%)";

  return (
    <motion.div
      className={`statistics-number-box${alignEnd ? " upper" : ""}`}
      initial={{ transform: reduce ? settled : from }}
      animate={{ transform: inView || reduce ? settled : from }}
      transition={{ duration: reduce ? 0 : 1.2, ease: EASE, delay: index * 0.08 }}
      aria-hidden="true"
    >
      {strip.map((d, i) => (
        <div key={i}>{d}</div>
      ))}
    </motion.div>
  );
}

/**
 * The slot-machine counter from the reference.
 *
 * Each digit is a vertical strip inside a clipped row. The row is exactly
 * one digit tall and the strip overflows it, so a percentage translate on
 * the strip moves it by whole digits: 100% is one digit, not one strip.
 *
 * @param value  the number as written, e.g. "4.9", "150", "80"
 * @param prefix static character before the digits, e.g. "$"
 * @param suffix static character after them, e.g. "+", "%", "★"
 * @param size   "h1" matches the reference's large counters
 */
export function Odometer({
  value,
  prefix,
  suffix,
  size,
}: {
  value: string;
  prefix?: string;
  suffix?: string;
  size?: "h1";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  const label = `${prefix ?? ""}${value}${suffix ?? ""}`;
  let digitIndex = 0;

  return (
    <div
      ref={ref}
      className={`statistics-number-wrap${size ? ` ${size}` : ""}`}
      role="img"
      aria-label={label}
    >
      {prefix && <div aria-hidden="true">{prefix}</div>}
      {value.split("").map((char, i) =>
        /\d/.test(char) ? (
          <DigitStrip key={i} digit={char} index={digitIndex++} inView={inView} />
        ) : (
          // separators (the "." in 4.9) stay put
          <div key={i} aria-hidden="true">
            {char}
          </div>
        )
      )}
      {suffix && <div aria-hidden="true">{suffix}</div>}
    </div>
  );
}
