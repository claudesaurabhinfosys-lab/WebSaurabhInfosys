"use client";

import { useEffect } from "react";

/**
 * framer's `useScroll` measures its target once on mount. Anything that
 * reflows the page after that — the webfont swapping in and re-flowing
 * every heading above the section, or a late image — leaves the cached
 * offset stale, and the scrub then runs a few hundred pixels out of step
 * with where the section actually is.
 *
 * framer re-measures on resize, so telling it the window resized once the
 * fonts have settled is enough to put it back in sync.
 */
export function useScrollRefresh() {
  useEffect(() => {
    const refresh = () => window.dispatchEvent(new Event("resize"));

    // once the webfonts are in and every heading has its final height
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(refresh).catch(() => {});
    }

    // and once every image below the fold has reserved its box
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);
}
