"use client";

import { useEffect, useEffectEvent, useRef } from "react";

/**
 * Scroll progress across an element, 0 at the moment its top reaches the
 * bottom of the viewport and 1 once its bottom has passed the top — the same
 * span Webflow's SCROLLING_IN_VIEW trigger measures.
 *
 * The reference sets `smoothing: 90` on every one of these, which is why its
 * scrubbed sections lag the scroll slightly instead of snapping to it. The
 * lerp below is that smoothing; without it the motion reads mechanical.
 *
 * `onProgress` is called on every frame and is expected to write styles
 * straight to the DOM. It deliberately does **not** go through React state:
 * re-rendering a subtree sixty times a second during a scroll is exactly the
 * kind of work that drops frames on a mid-range phone.
 */
export function useScrollProgress<T extends HTMLElement>(
  onProgress: (progress: number) => void,
  /** Measure against another element than the ref'd one — Webflow often binds
      the trigger to the enclosing section while animating something inside. */
  measure?: (node: T) => HTMLElement | null,
) {
  const ref = useRef<T | null>(null);
  // Always calls the latest callback without re-running the effect below.
  const emit = useEffectEvent(onProgress);
  const measureRef = useRef(measure);

  useEffect(() => {
    const own = ref.current;
    if (!own) return;
    const node = measureRef.current?.(own) ?? own;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      emit(1);
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
      // The first frame lands exactly, so nothing animates in from a stale value.
      smoothed = smoothed < 0 ? target : smoothed + (target - smoothed) * 0.12;
      if (Math.abs(target - smoothed) < 0.0005) smoothed = target;
      emit(smoothed);
      frame = requestAnimationFrame(tick);
    };

    /* Only run the loop while the element is on or near screen. Several of
       these live on one page, and a frame loop per section running for the
       whole visit is wasted work. Leaving the viewport snaps to the exact end
       value, so a fast fling never leaves a section parked mid-animation. */
    const observer = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(frame);
        if (entry.isIntersecting) {
          frame = requestAnimationFrame(tick);
        } else {
          smoothed = raw();
          emit(smoothed);
        }
      },
      { rootMargin: "50% 0px" },
    );
    observer.observe(node);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return ref;
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

/** Webflow's `outQuad`, for the scrubs that name it. */
export function outQuad(t: number) {
  return 1 - (1 - t) * (1 - t);
}
