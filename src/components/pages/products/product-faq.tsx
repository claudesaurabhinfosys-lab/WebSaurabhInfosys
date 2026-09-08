"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SectionBadge } from "@/components/ui/section-badge";
import { Reveal } from "@/components/ui/reveal";
import { PlusIcon } from "@/components/ui/accordion-icons";

/**
 * The FAQ, in about-03's panel variant: the same accordion as the home
 * FAQ but sat on a snow-white panel with the rows flush to its edges
 * instead of carded one by one.
 */
export function ProductFaq({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section className="faq ds-root">
      <div className="container">
        <div className="faq-wrap v3">
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
                      aria-controls={`product-faq-${i}`}
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
                          id={`product-faq-${i}`}
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
