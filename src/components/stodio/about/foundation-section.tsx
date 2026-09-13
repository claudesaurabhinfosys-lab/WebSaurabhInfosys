"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "../reveal";
import Tag from "../tag";
import { CultureIcon, GrowthIcon, MissionIcon } from "../icons";

type Belief = { title: string; body: string };

const ICONS = [MissionIcon, GrowthIcon, CultureIcon, MissionIcon, GrowthIcon];

/**
 * Image on the left, a list of principles on the right where only the open
 * one shows its body — the reference's `foundation-tabs` in disclosure form.
 */
export default function FoundationSection({ beliefs }: { beliefs: Belief[] }) {
  const [open, setOpen] = useState(1);

  return (
    <section className="st-foundation-section">
      <div className="st-container">
        <div className="st-foundation-block">
          <Reveal className="st-foundation-image-wrapper">
            <Image
              className="st-foundation-image"
              src="/images/about/studio.webp"
              alt="Inside the Saurabh Infosys studio"
              width={600}
              height={720}
            />
          </Reveal>

          <div className="st-foundation-content">
            <div style={{ width: "100%" }}>
              <Reveal className="st-tag-block">
                <Tag>Our foundation</Tag>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)" }}>
                  Built on purpose, driven by what we ship
                </h2>
              </Reveal>

              <div className="st-foundation-tabs">
                {beliefs.map((belief, index) => {
                  const Icon = ICONS[index % ICONS.length];
                  const isOpen = index === open;
                  return (
                    <button
                      key={belief.title}
                      type="button"
                      className="st-foundation-tab"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? -1 : index)}
                    >
                      <span className="st-foundation-tab-head">
                        <Icon className="st-foundation-tab-icon" />
                        <span className="st-h6 st-weight-medium">{belief.title}</span>
                      </span>
                      {isOpen && (
                        <p className="st-foundation-tab-body st-text-m" style={{ marginTop: "var(--st-gap-12)" }}>
                          {belief.body}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
