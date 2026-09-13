"use client";

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

/**
 * The dark method slab. The card row is pinned inside a 300vh wrapper and the
 * cards rise **one at a time** as the page scrolls past it — IX2 `a-105`
 * parks every card at `translateY(75vh)` at 0% progress, then brings them
 * home at 20 / 40 / 60 / 80%. Below 992px the pin is dropped and the cards
 * just stack.
 */
export default function ProcessSection({
  eyebrow = "Our method",
  heading,
  intro,
  steps,
}: Props) {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

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
                // Card n travels home between n*20% and (n+1)*20%.
                const t = segment(progress, index * 0.2, (index + 1) * 0.2);
                return (
                  <div
                    className="st-process-card"
                    key={step.title}
                    style={{ transform: `translateY(${lerp(75, 0, t)}vh)` }}
                  >
                    <div className="st-process-card-head st-text-l">
                      <span>{step.label ?? `Step ${index + 1}`}</span>
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
