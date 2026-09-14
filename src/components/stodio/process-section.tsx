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

/* The window in which the card row is actually pinned.
 *
 * `useScrollProgress` measures 0 from the moment the 300vh wrapper's top
 * reaches the bottom of the viewport, so the span it covers is 400vh. The row
 * only pins once the wrapper's top reaches the top of the screen — 100vh
 * later, at 0.25 — and unpins 200vh after that, at 0.75. Anything scheduled
 * outside that window animates while the row is off-screen or sliding away.
 *
 * That is what the original 20/40/60/80 schedule did: the first card finished
 * before the row was pinned at all, and the last was still travelling as the
 * row unpinned, which is why it was cut off at the bottom of the slab. These
 * bounds keep every card's travel inside the pin and leave a hold at the end
 * where all of them sit still, centred and whole. */
const PIN_START = 0.27;
const PIN_END = 0.64;

/**
 * The dark method slab. The card row is pinned inside a 300vh wrapper and the
 * cards rise **one at a time** as the page scrolls past it — IX2 `a-105`
 * parks every card at `translateY(75vh)` at 0% progress and brings them home
 * one after another. Below 992px the pin is dropped and the cards just stack,
 * so the offsets are cleared there.
 */
export default function ProcessSection({
  eyebrow = "Our method",
  heading,
  intro,
  steps,
}: Props) {
  const cards = useRef<(HTMLDivElement | null)[]>([]);

  const slot = (PIN_END - PIN_START) / Math.max(1, steps.length);

  const ref = useScrollProgress<HTMLDivElement>((progress) => {
    const pinned = window.matchMedia("(min-width: 992px)").matches;
    cards.current.forEach((card, index) => {
      if (!card) return;
      if (!pinned) {
        card.style.transform = "";
        return;
      }
      // Each card gets an equal slice of the pinned window, in order.
      const from = PIN_START + index * slot;
      const t = segment(progress, from, from + slot);
      card.style.transform = `translateY(${lerp(75, 0, t).toFixed(2)}vh)`;
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
            <div className="st-process-card-wrapper">
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
                    <div className="st-process-card-head st-text-m">
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
