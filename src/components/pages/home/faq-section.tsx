"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EmDashHeader from "@/components/shared/em-dash-header";
import { HOME_FAQS } from "@/lib/data";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="si-section">
      <div className="si-container flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
          <div className="pb-2">
            <EmDashHeader label="FAQs" centered />
          </div>
          <p className="si-body text-center text-deep-gray-1">
            All the frequent questions that are asked are here.
          </p>
        </div>

        <div className="flex w-full max-w-4xl flex-col gap-6">
          {HOME_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`w-full rounded-2xl px-6 py-[2.125rem] transition-colors duration-300 ${
                  isOpen ? "bg-primary" : "bg-white-2"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <span
                    className={`si-lead font-semibold leading-tight ${
                      isOpen ? "text-white" : "text-black"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span className="relative flex size-5 shrink-0 items-center justify-center">
                    <span
                      className={`absolute h-[0.156rem] w-[1.13rem] rounded-full ${
                        isOpen ? "bg-white" : "bg-black"
                      }`}
                    />
                    <span
                      className={`absolute h-[0.156rem] w-[1.13rem] rounded-full transition-transform duration-300 ${
                        isOpen ? "rotate-0 bg-white" : "rotate-90 bg-black"
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="si-body-sm pt-6 text-white/90">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
