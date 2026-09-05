"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SERVICES } from "@/lib/data";
import { SectionBadge } from "@/components/ui/section-badge";
import { Reveal } from "@/components/ui/reveal";
import { PlusIcon } from "@/components/ui/accordion-icons";
import { SecondaryButton } from "@/components/ui/ds-button";

export default function ServicesSection() {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section className="services-v8 ds-root">
      <div className="container">
        <Reveal>
          <SectionBadge label="Our Services" />
        </Reveal>

        <div className="services-v8-main-wrap">
          {SERVICES.map((service, i) => {
            const isOpen = i === open;
            return (
              <Reveal
                key={service.slug}
                index={i}
                className={`services-v8-item${isOpen ? " is-open" : ""}`}
              >
                <button
                  type="button"
                  className="services-v8-top"
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${service.slug}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <div className="services-v8-title-wrap">
                    <div className="h3 services-v8-number">
                      {String(i + 1).padStart(2, "0")}.
                    </div>
                    <h3>{service.title}</h3>
                  </div>
                  <div className="services-v8-arrow">
                    <PlusIcon size={28} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`service-panel-${service.slug}`}
                      className="services-v8-bottom"
                      initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="services-v8-bottom-content">
                        {/* TODO: swap the gradient for real service imagery */}
                        <div className="services-v8-image-wrap" />
                        <div className="services-v8-details-wrap">
                          <div>
                            <p className="paragraph-02 services-v8-subtitle">
                              {service.description}
                            </p>
                            <div className="services-v8-feature-list">
                              {service.features.map((feature) => (
                                <div className="paragraph-03 services-v8-feature" key={feature}>
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                          <SecondaryButton
                            href={`/services/${service.slug}`}
                            label="See details"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
