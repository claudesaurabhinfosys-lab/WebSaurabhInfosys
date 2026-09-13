import Reveal from "./reveal";
import Tag from "./tag";
import {
  GlyphBlueprint,
  GlyphBox,
  GlyphPulse,
  GlyphTarget,
} from "./icons";

const GLYPHS = [GlyphTarget, GlyphBlueprint, GlyphBox, GlyphPulse];

type Step = { title: string; copy: string };

type Props = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  steps: Step[];
};

/**
 * The dark method slab: heading left, one line of framing right, then one
 * white card per step. Shared by the about page and every service page so the
 * delivery model is described the same way everywhere.
 */
export default function ProcessSection({
  eyebrow = "Our method",
  heading,
  intro,
  steps,
}: Props) {
  return (
    <section className="st-process-section">
      <div className="st-process-bg">
        <div className="st-container">
          <div className="st-process-title-block">
            <div className="st-process-title-left">
              <Reveal className="st-tag-block">
                <Tag on="dark">{eyebrow}</Tag>
              </Reveal>
              <Reveal delay={60}>
                <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)" }}>
                  {heading}
                </h2>
              </Reveal>
            </div>
            {intro && (
              <Reveal delay={120} className="st-process-title-right">
                <p className="st-text-m">{intro}</p>
              </Reveal>
            )}
          </div>

          <div className="st-process-card-wrapper">
            {steps.map((step, index) => {
              const Glyph = GLYPHS[index % GLYPHS.length];
              return (
                <Reveal className="st-process-card" key={step.title} delay={index * 60}>
                  <div className="st-process-card-head st-text-m">
                    <span className="st-process-card-step">Step {index + 1}</span>
                    <span className="st-mute">{step.title}</span>
                  </div>
                  <div className="st-process-card-icon-wrapper">
                    <Glyph className="st-process-card-icon" />
                  </div>
                  <p className="st-text-s st-secondary">{step.copy}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
