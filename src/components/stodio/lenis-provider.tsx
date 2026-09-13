"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooth scroll, matching the reference build's Lenis setup (lerp 0.1).
 * Disabled outright when the visitor asks for reduced motion.
 */
export default function LenisProvider() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.1 });
    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
