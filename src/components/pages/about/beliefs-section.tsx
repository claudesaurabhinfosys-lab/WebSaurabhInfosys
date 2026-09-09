"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
  type MotionValue,
  type PanInfo,
} from "framer-motion";
import { ABOUT, ABOUT_BELIEFS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionBadge } from "@/components/ui/section-badge";
import { PauseIcon, PlayIcon } from "@/components/ui/icons";

/* DESIGN.md §3 in framer-motion's units. The two springs are the whole
   motion vocabulary of this carousel:

   SNAP   — critically damped, no overshoot. Used when the carousel moves
            itself: a dot press, an auto-advance. Nothing physical
            preceded it, so nothing should bounce.
   FLICK  — a little bounce, and only ever handed the release velocity of
            a real drag. Overshoot is earned here; the user threw it. */
const SNAP = { type: "spring", bounce: 0, duration: 0.5 } as const;
const FLICK = { type: "spring", bounce: 0.2, duration: 0.4 } as const;
const REDUCED = { type: "tween", duration: 0.2, ease: [0.23, 1, 0.32, 1] } as const;

/* iOS scroll deceleration, from Apple's Designing Fluid Interfaces sample.
   A flick lands where the gesture was *going*, not where the finger left. */
const DECELERATION = 0.998;
const project = (velocity: number) =>
  (velocity / 1000) * (DECELERATION / (1 - DECELERATION));

/**
 * beliefs. A centred 360px track with its neighbours bleeding out of the
 * panel on both sides. It advances itself every `--dwell-carousel`, and
 * it can be dragged.
 *
 * Three things drive it, in priority order:
 *
 * 1. The drag. `x` is a motion value the pointer owns outright while a
 *    gesture is live, so the slides track the cursor 1:1 instead of
 *    waiting for the release. On release the endpoint is projected from
 *    velocity and the spring is handed that same velocity, so there is no
 *    seam between dragging and settling.
 * 2. The timer. The advance is fired by the `animationend` of the dot
 *    fill rather than a `setInterval`, so the bar the user is watching
 *    and the slide it triggers can never drift apart, and pausing the
 *    animation pauses the carousel for free.
 * 3. The active index. Scale and opacity read continuously off `x`
 *    rather than off the index, so a half-dragged slide is half-scaled.
 *
 * The reference is a Webflow slider whose SLIDER_ACTIVE / SLIDER_INACTIVE
 * interactions scale the inactive images to 0.6 at half opacity. Same
 * numbers, driven off distance rather than a boolean.
 */
export default function BeliefsSection() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  /* Every reason the timer can be holding still. Any one of them parks
     it; it only runs when all are clear. */
  const [dragging, setDragging] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  /* "auto" until the transport is touched. Pressing play is an
     instruction, so from then on hovering no longer parks the timer —
     otherwise the button appears to do nothing, because the hand that
     pressed it is still resting on the carousel. */
  const [intent, setIntent] = useState<"auto" | "playing" | "paused">("auto");

  const x = useMotionValue(0);
  const maskRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  /* Snap points are measured, never computed. The slide is 360px with a
     140px gap at base, a smaller gap at 991 and full-bleed at 479 — any
     constant in here would be wrong at two of the four breakpoints. */
  const offsets = useRef<number[]>([]);
  const span = useRef(1);
  const [bounds, setBounds] = useState({ left: 0, right: 0 });

  const last = ABOUT_BELIEFS.length - 1;

  /* measure() runs from a ResizeObserver, outside React's render, so it
     reads the index off a ref rather than closing over stale state. */
  const activeRef = useRef(active);
  activeRef.current = active;

  const goTo = useCallback(
    (index: number, velocity = 0) => {
      const i = Math.max(0, Math.min(last, index));
      setActive(i);
      const target = -(offsets.current[i] ?? 0);
      if (reduce) animate(x, target, REDUCED);
      else animate(x, target, velocity ? { ...FLICK, velocity } : SNAP);
    },
    [last, reduce, x],
  );

  /* Measure on mount and on resize. A resize re-snaps without animating —
     the layout jumped, so pretending it travelled would be a lie. */
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const slides = Array.from(
        track.querySelectorAll<HTMLElement>(".beliefs-slide-wrapper"),
      );
      offsets.current = slides.map((el) => el.offsetLeft);
      span.current =
        offsets.current.length > 1
          ? offsets.current[1] - offsets.current[0]
          : track.offsetWidth || 1;
      setBounds({ left: -(offsets.current[last] ?? 0), right: 0 });
      x.set(-(offsets.current[activeRef.current] ?? 0));
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [last, x]);

  /* Offscreen and backgrounded carousels do not burn a timer.
     Threshold 0, deliberately: anything stricter latches off the moment
     the page scrolls far enough to put the dots mid-viewport, and since
     nothing scrolls afterwards the observer never fires again. */
  useEffect(() => {
    const node = maskRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(node);
    const onVisibility = () => setTabVisible(!document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const nearestTo = (position: number) => {
    let nearest = 0;
    for (let i = 1; i < offsets.current.length; i += 1) {
      if (
        Math.abs(-offsets.current[i] - position) <
        Math.abs(-offsets.current[nearest] - position)
      ) {
        nearest = i;
      }
    }
    return nearest;
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    setDragging(false);
    const velocity = info.velocity.x;
    /* Where the drag actually reached decides the floor; the projected
       momentum may throw it one slide further and no more. An unclamped
       projection sails past two or three beliefs on a brisk flick, which
       reads as the carousel deciding rather than the user. */
    const settled = nearestTo(x.get());
    const thrown = nearestTo(x.get() + project(velocity));
    const target = Math.max(settled - 1, Math.min(settled + 1, thrown));
    goTo(target, velocity);
  };

  const autoplay = !reduce;
  const attended = intent === "auto" && (hovered || focused);
  const running =
    autoplay && onScreen && tabVisible && !dragging && !attended && intent !== "paused";

  return (
    <section className="beliefs ds-root">
      <div className="container">
        <div className="beliefs-wrap">
          <div className="beliefs-inner">
            <Reveal delay={0.1} className="beliefs-head-wrap">
              <SectionBadge label={ABOUT.beliefsBadge} />
              <div className="heading-wrap">
                <h2>{ABOUT.beliefsHeading}</h2>
              </div>
            </Reveal>

            {/* Hover and focus park the timer for the whole block, dots
                included — reaching for a dot should not start a race
                against the thing you are reaching for. Touch never fires
                this; a tap would otherwise stop the carousel for good. */}
            <Reveal
              delay={0.2}
              className="beliefs-main-wrap"
              onPointerEnter={(e) => {
                if (e.pointerType === "mouse") setHovered(true);
              }}
              onPointerLeave={(e) => {
                if (e.pointerType === "mouse") setHovered(false);
              }}
              /* :focus-visible, not :focus — clicking Play focuses the
                 Play button, and a bare focus rule would have that button
                 immediately re-pause the thing it just started. */
              onFocusCapture={(e) => {
                const el = e.target as HTMLElement;
                if (el.matches?.(":focus-visible")) setFocused(true);
              }}
              onBlurCapture={() => setFocused(false)}
            >
              <div
                className="beliefs-mask"
                ref={maskRef}
                role="group"
                aria-roledescription="carousel"
                aria-label={ABOUT.beliefsHeading}
              >
                <motion.div
                  ref={trackRef}
                  className={`beliefs-track${dragging ? " is-dragging" : ""}`}
                  /* `x` rather than a transform string: a drag has to own a
                     motion value, and framer-motion only writes gestures
                     into x/y. It still compiles to translateX() on the
                     compositor — the transform-string rule in DESIGN.md
                     covers the `animate` prop, which has no gesture to
                     serve. */
                  style={{ x }}
                  drag="x"
                  dragConstraints={bounds}
                  /* Resist at the ends rather than hitting a wall. */
                  dragElastic={0.12}
                  /* Momentum is ours — we project a snap point from
                     velocity instead of letting it coast to a stop. */
                  dragMomentum={false}
                  onDragStart={() => setDragging(true)}
                  onDragEnd={onDragEnd}
                >
                  {ABOUT_BELIEFS.map((belief, i) => (
                    <BeliefSlide
                      key={belief.title}
                      belief={belief}
                      index={i}
                      x={x}
                      offsets={offsets}
                      span={span}
                      reduce={!!reduce}
                    />
                  ))}
                </motion.div>
              </div>

              {/* The reference hides its slider arrows and relies on drag.
                  Dots are keyboard reachable, which arrows-only is not —
                  and the active one doubles as the timer. */}
              <div className="beliefs-nav">
                <div className="beliefs-dots">
                  {ABOUT_BELIEFS.map((belief, i) => (
                    <button
                      key={belief.title}
                      type="button"
                      className={`beliefs-dot${i === active ? " is-active" : ""}`}
                      aria-label={`Show ${belief.title}`}
                      aria-current={i === active}
                      onClick={() => goTo(i)}
                    >
                      <span className="beliefs-dot-rail">
                        {i === active ? (
                          <span
                            /* Remounting on every advance restarts the
                               animation; `animationend` is what actually
                               advances the carousel, so the bar and the
                               slide can never disagree. */
                            key={active}
                            className={`beliefs-dot-fill${running ? " is-running" : ""}`}
                            onAnimationEnd={() => goTo(active === last ? 0 : active + 1)}
                          />
                        ) : null}
                      </span>
                    </button>
                  ))}
                </div>

                {/* WCAG 2.2.2 — content that moves on its own for longer
                    than five seconds needs a way to stop it. */}
                {autoplay ? (
                  <button
                    type="button"
                    className="beliefs-transport"
                    aria-label={
                      intent === "paused" ? "Resume the carousel" : "Pause the carousel"
                    }
                    onClick={() =>
                      setIntent((current) => (current === "paused" ? "playing" : "paused"))
                    }
                  >
                    {intent === "paused" ? <PlayIcon /> : <PauseIcon />}
                  </button>
                ) : null}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * One slide. Its scale and opacity are a function of how far it sits from
 * the centre of the mask *right now* — so mid-drag it is mid-scale, and
 * letting go halfway leaves it halfway rather than snapping a boolean.
 */
function BeliefSlide({
  belief,
  index,
  x,
  offsets,
  span,
  reduce,
}: {
  belief: (typeof ABOUT_BELIEFS)[number];
  index: number;
  x: MotionValue<number>;
  offsets: RefObject<number[]>;
  span: RefObject<number>;
  reduce: boolean;
}) {
  /* 0 when this slide is centred, 1 when it is a full slide away. */
  const distance = useTransform(x, (value) => {
    const offset = offsets.current?.[index] ?? 0;
    const step = span.current || 1;
    return Math.min(1, Math.abs(-value - offset) / step);
  });

  const imageTransform = useTransform(distance, (d) =>
    reduce ? "none" : `scale(${1 - d * 0.4})`,
  );
  const imageOpacity = useTransform(distance, [0, 1], [1, 0.5]);
  const detailsTransform = useTransform(distance, (d) =>
    reduce ? "none" : `translateY(${d * 20}px)`,
  );
  const detailsOpacity = useTransform(distance, [0, 1], [1, 0]);

  /* The caption is decoration once it has faded out — hide it from
     assistive tech at the same point the eye loses it. */
  const [offCentre, setOffCentre] = useState(index !== 0);
  useMotionValueEvent(distance, "change", (d) => setOffCentre(d > 0.5));

  return (
    <div className="beliefs-slide-wrapper">
      <div className="beliefs-content">
        <motion.div
          className="beliefs-image-wrap"
          style={{ transform: imageTransform, opacity: imageOpacity }}
        >
          {/* decorative — the belief title carries the meaning */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/about/belief-0${index + 1}.webp`}
            alt=""
            className="fit-cover"
            loading="lazy"
            draggable={false}
            width={1254}
            height={1254}
          />
        </motion.div>
        <motion.div
          className="beliefs-details-wrap"
          style={{ transform: detailsTransform, opacity: detailsOpacity }}
          aria-hidden={offCentre}
        >
          <div className="h6 beliefs-title">{belief.title}</div>
          <p className="paragraph-02 beliefs-details">{belief.body}</p>
        </motion.div>
      </div>
    </div>
  );
}
