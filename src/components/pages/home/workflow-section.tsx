"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SectionBadge } from "@/components/ui/section-badge";
import { Reveal } from "@/components/ui/reveal";
import { ArrowDownIcon } from "@/components/ui/accordion-icons";

const STEPS = [
  {
    title: "Scoping and success metrics",
    tags: ["#Week 0", "#Discovery"],
    copy: "We start by agreeing what success looks like — the metric that moves, the constraints we are working inside, and the timeline. Nothing gets built before that is written down.",
  },
  {
    title: "Architecture and data model",
    tags: ["#Week 1", "#Design"],
    copy: "The data model and integration surface come next. Getting this right is what lets the product change later without a rewrite, so we spend real time here rather than rushing to screens.",
  },
  {
    title: "Build in weekly increments",
    tags: ["#Week 2+", "#Delivery"],
    copy: "You see working software every week, on a staging URL you can use. Feedback lands in the next increment rather than a change request queue at the end.",
  },
  {
    title: "Launch, measure, iterate",
    tags: ["#Launch", "#Support"],
    copy: "We ship, instrument, and watch the metric we agreed on. Support and iteration continue past launch — the first version is a starting point, not a handover.",
  },
];

export default function WorkflowSection() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const step = STEPS[active];

  return (
    <section className="workflow-v3 ds-root">
      <div className="container">
        <div className="workflow-v3-wrap">
          <div className="workflow-v3-inner">
            <Reveal>
              <SectionBadge label="Workflow" variant="dark" />
            </Reveal>

            <div className="workflow-v3-main-wrap">
              <div className="workflow-v3-tab">
                <Reveal className="workflow-v3-tab-menu">
                  {STEPS.map((s, i) => {
                    const open = i === active;
                    return (
                      <button
                        type="button"
                        key={s.title}
                        className={`workflow-v3-link${open ? " is-active" : ""}`}
                        aria-expanded={open}
                        onClick={() => setActive(i)}
                      >
                        <div className="h6-medium workflow-v3-title">{s.title}</div>
                        <div className="workflow-v3-tag-wrap">
                          <AnimatePresence initial={false}>
                            {open && (
                              <motion.div
                                initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                                animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                                exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                              >
                                <div className="workflow-v3-tag-list">
                                  {s.tags.map((tag) => (
                                    <div className="paragraph-03 workflow-v3-tag" key={tag}>
                                      {tag}
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </button>
                    );
                  })}
                </Reveal>

                <div className="workflow-v3-right">
                  <Reveal className="workflow-v3-tab-content" index={1}>
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.p
                        key={active}
                        className="paragraph-01 workflow-v3-copy"
                        initial={{ opacity: 0, filter: "blur(4px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(4px)" }}
                        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                      >
                        {step.copy}
                      </motion.p>
                    </AnimatePresence>

                    <button
                      type="button"
                      className="workflow-v3-step-button"
                      aria-label="Next step"
                      onClick={() => setActive((i) => (i + 1) % STEPS.length)}
                    >
                      <ArrowDownIcon />
                    </button>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
