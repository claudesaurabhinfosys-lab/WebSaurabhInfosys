"use client";

import { useEffect, useState } from "react";

/**
 * True at ≥992px. Scroll-driven layouts go static below that breakpoint,
 * so the inline styles framer-motion writes have to come off with them.
 */
export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 992px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return isDesktop;
}
