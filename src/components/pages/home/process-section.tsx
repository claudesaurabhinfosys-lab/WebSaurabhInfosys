"use client";

import { useState } from "react";
import { HOME_PROCESS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionBadge } from "@/components/ui/section-badge";
import { PrimaryButton } from "@/components/ui/ds-button";

/**
 * process-v2. Four step cards in a row; the open one widens and shows its
 * image and copy, the closed ones show a vertical step label.
 *
 * From a-66 / a-67, all 350ms ease: `.process-tab-link` width 18% → 46%,
 * `.process-tab-content` opacity 0 → 1 with translateX 100% → 0, and the
 * closed label fades out as it goes. Width is the property this needs and
 * has no transform equivalent, so it is a CSS transition on width — the
 * same exception DESIGN.md makes for accordion height.
 *
 * Below 992px every card is open in a grid and the vertical label is
 * dropped, which is the reference's own behaviour.
 *
 * These are real buttons in a tablist, not the reference's anchors, so the
 * steps are reachable and operable from the keyboard.
 */
export default function ProcessSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="process-v2 ds-root">
      <div className="container">
        <div className="process-v2-wrap">
          <Reveal delay={0.1} className="process-v2-head-wrap">
            <div className="process-v2-head-left">
              <SectionBadge label={HOME_PROCESS.badge} />
              <div className="heading-wrap">
                <h2 className="h3 process-v2-heading">{HOME_PROCESS.heading}</h2>
              </div>
            </div>
            <div className="process-v2-head-right">
              <div className="section-button-wrap">
                <PrimaryButton href="/contact" label="Work with us" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="process-v2-main-wrap">
            <div className="process-tab-menu" role="tablist" aria-label="How an engagement runs">
              {HOME_PROCESS.steps.map((step, i) => {
                const isActive = i === active;
                const label = `Step ${String(i + 1).padStart(2, "0")}`;
                return (
                  <button
                    key={step.title}
                    type="button"
                    role="tab"
                    id={`process-tab-${i}`}
                    aria-selected={isActive}
                    aria-controls={`process-panel-${i}`}
                    tabIndex={isActive ? 0 : -1}
                    className={`process-tab-link${isActive ? " is-active" : ""}`}
                    onClick={() => setActive(i)}
                    onFocus={() => setActive(i)}
                  >
                    <div
                      className="process-tab-content"
                      id={`process-panel-${i}`}
                      role="tabpanel"
                      aria-labelledby={`process-tab-${i}`}
                    >
                      <div className="process-main-content">
                        <div className="process-image-wrap">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`/images/process/step-0${i + 1}.webp`}
                            alt=""
                            className="fit-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="process-content-wrap">
                          <SectionBadge label={label} variant="accent" />
                          <div className="process-details-wrap">
                            <div className="h6 process-title">{step.title}</div>
                            <div className="paragraph-02 text-gray">{step.copy}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* the collapsed state: step number over its title */}
                    <div className="process-left-content" aria-hidden="true">
                      <div className="paragraph-03 uppercase-label">{label}</div>
                      <div className="h6 process-title">{step.title}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
