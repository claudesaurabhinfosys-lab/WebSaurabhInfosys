"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

/**
 * The one entrance animation on the site: 40px rise + 5px blur + fade,
 * fired once when the element scrolls into view.
 *
 * Every section uses this. Nothing invents its own entrance — pass `index`
 * to stagger siblings instead of hand-writing delays.
 *
 * Under prefers-reduced-motion the movement and blur drop out and only the
 * fade remains, which still signals "this is new" without travel.
 */

const DURATION = 0.8;
const STAGGER = 0.08;
const EASE = [0.23, 1, 0.32, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  /** position among staggered siblings — multiplied by 80ms */
  index?: number;
  /** extra delay in seconds, added on top of the stagger */
  delay?: number;
  /** how far into the viewport before it fires */
  margin?: string;
};

export function Reveal({
  index = 0,
  delay = 0,
  margin = "-15%",
  children,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={
        reduce
          ? { opacity: 0 }
          : { opacity: 0, transform: "translateY(40px)", filter: "blur(5px)" }
      }
      whileInView={
        reduce
          ? { opacity: 1 }
          : { opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }
      }
      viewport={{ once: true, margin }}
      transition={{
        duration: reduce ? 0.3 : DURATION,
        ease: EASE,
        delay: delay + index * STAGGER,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
