"use client";

import { useEffect, useRef, useState } from "react";

/* The reference's counter (IX2 a-7) always travels the same distance: a
   ten-tall strip moved -90%, i.e. nine steps. So the strip is built to *end*
   on the target digit rather than indexing into a fixed 0-9 column — that way
   every digit rolls the same amount, including a target of 0. */
function strip(target: number) {
  return Array.from({ length: 10 }, (_, i) => (target + 1 + i) % 10);
}

/**
 * One rolling digit column. The strip holds 0-9 and slides up to land on the
 * target digit. Every box is exactly `1em` tall with `line-height: 1`, so the
 * clip window matches the glyph box at any font size — which is what stops
 * the digits from being sheared when the type scale changes.
 */
function Digit({ value, delay }: { value: number; delay: number }) {
  const [rolled, setRolled] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setRolled(true), delay);
    return () => window.clearTimeout(id);
  }, [delay]);

  return (
    <span className="st-odo">
      <span className="st-odo-col st-is-rolling" style={{ transform: `translateY(${rolled ? -9 : 0}em)` }}>
        {strip(value).map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </span>
    </span>
  );
}

function isDigit(char: string) {
  return char >= "0" && char <= "9";
}

type Props = {
  /** e.g. "150+", "4.9", "24/7" — digits roll, everything else is static. */
  value: string;
  className?: string;
};

/** Rolls the numeric part of a stat into place the first time it is seen. */
export default function Odometer({ value, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    // Reduced motion is handled in CSS (the roll becomes instant), so every
    // visitor goes through the same observer path.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setPlay(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Stagger: each digit starts 80ms after the one before it; other characters
  // do not count. Worked out up front so render stays free of mutation.
  const chars = value.split("");
  const delays: number[] = [];
  for (let i = 0, digit = 0; i < chars.length; i++) {
    delays.push(isDigit(chars[i]) ? digit++ * 80 : 0);
  }

  return (
    <span ref={ref} className={`st-odo-root${className ? ` ${className}` : ""}`}>
      {chars.map((char, index) => {
        if (isDigit(char)) {
          const delay = delays[index];
          return play ? (
            <Digit key={index} value={Number(char)} delay={delay} />
          ) : (
            <span className="st-odo" key={index}>
              <span className="st-odo-col">
                <span>{strip(Number(char))[0]}</span>
              </span>
            </span>
          );
        }
        return <span key={index}>{char}</span>;
      })}
    </span>
  );
}
