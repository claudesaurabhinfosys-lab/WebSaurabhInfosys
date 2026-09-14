"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let instance: Lenis | null = null;

/**
 * The running Lenis instance, or null under reduced motion and before mount.
 *
 * Anything that covers the page — the mobile nav sheet today — has to stop
 * Lenis as well as the document, because Lenis drives scrolling from wheel and
 * touch events and keeps going even when `body` is `overflow: hidden`.
 */
export function getLenis() {
  return instance;
}

/**
 * Smooth scroll, matching the reference build's Lenis setup (lerp 0.1).
 * Disabled outright when the visitor asks for reduced motion.
 */
export default function LenisProvider() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.1 });
    instance = lenis;
    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      if (instance === lenis) instance = null;
    };
  }, []);

  return null;
}
