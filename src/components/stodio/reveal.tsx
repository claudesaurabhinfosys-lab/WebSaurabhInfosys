"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger, in milliseconds, applied as a transition-delay. */
  delay?: number;
  /** Element to render. Defaults to a div so it never changes the layout box. */
  as?: ElementType;
  className?: string;
  /** Fraction of the element that must be visible before it plays. */
  threshold?: number;
  style?: React.CSSProperties;
};

/**
 * The single entrance animation for the whole site: rise 50px, un-blur 5px,
 * fade in over 1200ms on outQuart — the exact values read out of the reference
 * build's IX2 "Fade In" action lists. Plays once, then stops observing.
 *
 * Two things here are defensive rather than decorative:
 *
 * 1. The element starts translated 50px *down*, so the box the observer
 *    measures sits 50px below where it will settle. The bottom rootMargin
 *    cancels that out, so the trigger tests the resting position. The
 *    reference's own SCROLL_INTO_VIEW events all carry scrollOffsetValue: 0.
 *
 * 2. IntersectionObserver intersects with every clipping ancestor, not just
 *    the viewport. A <Reveal> inside a short `overflow: hidden` box therefore
 *    reports zero intersection while it is offset, and can never trigger its
 *    own reveal. The rect fallback below breaks that deadlock, so no layout
 *    change can leave a section permanently invisible.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  threshold = 0,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    let done = false;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) finish();
        }
      },
      { threshold, rootMargin: "0px 0px 50px 0px" },
    );

    // The element's own geometry, ignoring any clipping ancestor.
    //
    // The test is "has it reached the fold", not "is it on screen": anything
    // already scrolled past must be revealed too. A jump — a restored scroll
    // position, an in-page anchor, a fast flick — can skip an element without
    // ever giving it an on-screen frame, and a reveal that only fires while
    // visible would leave it blank for good.
    const hasEntered = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return rect.top - 50 < vh;
    };

    function cleanup() {
      observer.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    }

    function finish() {
      if (done) return;
      done = true;
      setShown(true);
      cleanup();
    }

    function check() {
      if (hasEntered()) finish();
    }

    observer.observe(node);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    check();

    return cleanup;
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={`st-reveal${shown ? " st-is-in" : ""}${className ? ` ${className}` : ""}`}
      style={{ ...style, ["--st-reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
