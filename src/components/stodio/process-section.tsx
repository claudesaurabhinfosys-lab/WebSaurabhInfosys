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

/* The reference's "Process Card Scroll" (a-105), read off its IX2 data: every
   card is parked at `translateY(75vh)` and, across the section's scroll
   progress, card 1 rises home over 0-20%, card 2 over 20-40%, card 3 over
   40-60% and card 4 over 60-80%, linearly. The last 20% is a hold, so the row
   is settled and readable before the pin releases. Desktop only — the
   interaction is bound to Webflow's `main` breakpoint (992px and up). */
const PARK_VH = 75;
const STEP = 0.2;

export default function ProcessSection({
  eyebrow = "Our method",
  heading,
  intro,
  steps,
}: Props) {
  const cards = useRef<(HTMLDivElement | null)[]>([]);

  /* Progress spans the whole section, entering to exiting — the reference's
     SCROLLING_IN_VIEW trigger sits on `.process-section`, not on the track. */
  const ref = useScrollProgress<HTMLElement>((progress) => {
    const pinned = window.matchMedia("(min-width: 992px)").matches;
    cards.current.forEach((card, index) => {
      if (!card) return;
      if (!pinned) {
        card.style.transform = "";
        return;
      }
      const t = segment(progress, index * STEP, (index + 1) * STEP);
      card.style.transform = `translate3d(0, ${lerp(PARK_VH, 0, t).toFixed(2)}vh, 0)`;
    });
  });

  return (
    <section className="st-process-section" ref={ref}>
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

          <div className="st-process-sticky">
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
