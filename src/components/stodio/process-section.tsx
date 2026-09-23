"use client";

import { useRef } from "react";
import Reveal from "./reveal";
import Tag from "./tag";
import { lerp, segment, useScrollProgress } from "./use-scroll-progress";
import {
  GlyphBlueprint,
  GlyphBox,
  GlyphPulse,
  GlyphTarget,
} from "./icons";

const GLYPHS = [GlyphTarget, GlyphBlueprint, GlyphBox, GlyphPulse];

type Step = {
  /** The bold lead-in — "Day 1", "Week 2", "Step 3". */
  label?: string;
  title: string;
  copy: string;
};

type Props = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  steps: Step[];
};

/* The pin's own geometry, matching `.st-process-card-wrapper` in CSS. */
const STICKY_TOP = 50;
/* Where a card waits before its turn. The reference parks every one of them at
   `translate3d(0, 75vh, 0)` and brings them home one after another — in a live
   DOM snapshot card 1 sits mid-flight at 11.56vh while cards 2, 3 and 4 all
   still read exactly 75vh. */
const PARK_VH = 75;
/* A tail of the pin where every card sits still, so the last one is settled and
   readable before the row releases rather than arriving as it slides away. */
const HOLD = 0.12;
/* How much of the sequence runs before the pin engages, in card slots. At two,
   the first card starts rising at the moment the row's top edge appears, so the
   clipped row is never on screen empty. Higher pre-reveals card one on tall
   viewports; lower leaves a visible gap on short ones. */
const RUNWAY = 2;

export default function ProcessSection({
  eyebrow = "Our method",
  heading,
  intro,
  steps,
}: Props) {
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const row = useRef<HTMLDivElement | null>(null);

  const ref = useScrollProgress<HTMLDivElement>((progress) => {
    const pinned = window.matchMedia("(min-width: 992px)").matches;
    if (!pinned || !row.current) {
      for (const card of cards.current) if (card) card.style.transform = "";
      return;
    }

    /* Read the pin window off the live boxes rather than hard-coding it.
       Progress spans `track + viewport`, so the row pins once the track's top
       reaches `STICKY_TOP` and releases when the track's bottom gets there.
       Fixed guesses drifted with viewport height and left a dead stretch of
       scroll where nothing moved at all. */
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const track = row.current.parentElement?.offsetHeight ?? 0;
    const rowHeight = row.current.offsetHeight;
    const span = track + vh;
    if (span <= 0) return;

    const start = (vh - STICKY_TOP) / span;
    const end = (vh + track - STICKY_TOP - rowHeight) / span;
    const pin = Math.max(0.0001, end - start);

    /* The sequence opens `RUNWAY` slots *before* the pin engages, not on it.
       Starting it on the pin meant the row spent its whole approach — about a
       viewport of scrolling — as a clipped, empty box: the heading sat on
       screen with nothing but black beneath it, and you had to scroll past it
       before the first card appeared at all. */
    const seqStart = start - (pin * RUNWAY) / Math.max(1, steps.length);
    const seqEnd = end - pin * HOLD;
    const slot = (seqEnd - seqStart) / Math.max(1, steps.length);

    cards.current.forEach((card, index) => {
      if (!card) return;
      // Each card gets an equal slice, in order.
      const from = seqStart + index * slot;
      const t = segment(progress, from, from + slot);
      card.style.transform = `translate3d(0, ${lerp(PARK_VH, 0, t).toFixed(2)}vh, 0)`;
    });
  });

  return (
    <section className="st-process-section">
      <div className="st-process-bg">
        <div className="st-container">
          <div className="st-process-title-block">
            <div className="st-process-title-left">
              <Reveal className="st-tag-block">
                <Tag on="dark">{eyebrow}</Tag>
              </Reveal>
              <Reveal delay={200}>
                <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)" }}>
                  {heading}
                </h2>
              </Reveal>
            </div>
            {intro && (
              <Reveal delay={300} className="st-process-title-right">
                <p className="st-text-m">{intro}</p>
              </Reveal>
            )}
          </div>

          <div className="st-process-sticky" ref={ref}>
            <div className="st-process-card-wrapper" ref={row}>
              {steps.map((step, index) => {
                const Glyph = GLYPHS[index % GLYPHS.length];
                return (
                  <div
                    className="st-process-card"
                    key={step.title}
                    ref={(node) => {
                      cards.current[index] = node;
                    }}
                  >
                    <div className="st-process-card-head st-text-l">
                      <span className="st-process-card-label">
                        {step.label ?? `Step ${index + 1}`}
                      </span>
                      <span className="st-mute">{step.title}</span>
                    </div>
                    <div className="st-process-card-icon-wrapper">
                      <Glyph className="st-process-card-icon" />
                    </div>
                    <p className="st-process-card-body st-text-s">{step.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
