"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll progress across an element, 0 at the moment its top reaches the
 * bottom of the viewport and 1 once its bottom has passed the top — the same
 * span Webflow's SCROLLING_IN_VIEW trigger measures.
 *
 * The reference sets `smoothing: 90` on every one of these, which is why its
 * scrubbed sections lag the scroll slightly instead of snapping to it. The
 * lerp below is that smoothing; without it the motion reads mechanical.
 *
 * Returns a ref to attach and the smoothed progress.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    let frame = 0;
    let smoothed = -1;

    const raw = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const span = rect.height + vh;
      if (span <= 0) return 0;
      return Math.min(1, Math.max(0, (vh - rect.top) / span));
    };

    const tick = () => {
      const target = raw();
      // First frame lands exactly, so nothing animates in from a stale value.
      smoothed = smoothed < 0 ? target : smoothed + (target - smoothed) * 0.12;
      if (Math.abs(target - smoothed) < 0.0005) smoothed = target;
      setProgress((prev) => (Math.abs(prev - smoothed) > 0.0008 ? smoothed : prev));
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return { ref, progress };
}

/** Maps `p` from the [from, to] window onto 0-1, clamped outside it. */
export function segment(p: number, from: number, to: number) {
  if (to <= from) return p >= to ? 1 : 0;
  return Math.min(1, Math.max(0, (p - from) / (to - from)));
}

/** Linear interpolation. */
export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
