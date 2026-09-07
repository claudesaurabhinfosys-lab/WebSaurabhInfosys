"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ServiceDetail } from "@/lib/data";
import { SectionBadge } from "@/components/ui/section-badge";
import { Reveal } from "@/components/ui/reveal";
import { PlusIcon } from "@/components/ui/accordion-icons";

/** Same accordion mechanics as the home FAQ, on the service's own questions. */
export default function DetailFaq({ faqs }: { faqs: ServiceDetail["faqs"] }) {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section className="faq ds-root">
      <div className="container">
        <div className="faq-wrap">
          <div className="faq-left">
            <Reveal>
              <SectionBadge label="FAQ" />
            </Reveal>
            <Reveal index={1}>
              <h2>Frequently asked questions</h2>
            </Reveal>
          </div>

          <div className="faq-right">
            <div className="faq-list">
              {faqs.map((faq, i) => {
                const isOpen = i === open;
                return (
                  <Reveal
                    key={faq.q}
                    index={i}
                    className={`faq-item${isOpen ? " is-open" : ""}`}
                  >
                    <button
                      type="button"
                      className="faq-question-wrap"
                      aria-expanded={isOpen}
                      aria-controls={`service-faq-panel-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      <span className="paragraph-m-01">{faq.q}</span>
                      <span className="faq-arrow-wrap">
                        <PlusIcon />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`service-faq-panel-${i}`}
                          className="faq-answer-wrap"
                          initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                          exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        >
                          <p className="paragraph-02 faq-answer">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
