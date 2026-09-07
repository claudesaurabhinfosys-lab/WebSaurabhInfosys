"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SectionBadge } from "@/components/ui/section-badge";
import { Reveal } from "@/components/ui/reveal";
import { ArrowDownIcon } from "@/components/ui/accordion-icons";

const STEPS = [
  {
    title: "Scope and success metrics",
    tags: ["#Week 0", "#Discovery"],
    copy: "We agree what success looks like before anything gets built: the number that has to move, the constraints we are working inside, and the date. It goes in writing, and it is what we measure against at the end.",
  },
  {
    title: "Architecture and data model",
    tags: ["#Week 1", "#Design"],
    copy: "Next we settle how the data is shaped and where it connects to the systems you already run. Getting this right is what lets the product change later without a rewrite, so we spend real time here instead of rushing to screens.",
  },
  {
    title: "Build, one week at a time",
    tags: ["#Week 2+", "#Delivery"],
    copy: "You get working software every week on a staging link you can open and use. Your feedback goes into the next week's build, so nothing waits for a change request queue at the end.",
  },
  {
    title: "Launch, measure, refine",
    tags: ["#Launch", "#Support"],
    copy: "We ship it, add the tracking, and watch the number we agreed on in week zero. Support and improvements carry on after launch — the first version is where the product starts, not where we hand it over.",
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
          <div className="workflow-circle" aria-hidden="true" />
          <div className="workflow-circle _02" aria-hidden="true" />

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
