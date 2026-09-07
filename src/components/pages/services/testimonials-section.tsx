"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import { useIsDesktop } from "@/lib/use-is-desktop";
import { SectionBadge } from "@/components/ui/section-badge";
import { Reveal } from "@/components/ui/reveal";
import { QuoteRingIcon } from "@/components/ui/icons";
import { QuoteMarkIcon } from "@/components/ui/accordion-icons";

type Testimonial = (typeof TESTIMONIALS)[number];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

/** The offset classes are what stagger the cards down the two columns. */
const OFFSETS = ["", " _02", " _03", " _04", " _05"];

function TestimonialCard({ item, offset }: { item: Testimonial; offset: string }) {
  return (
    <div className={`testimonials-v1-list${offset}`}>
      <div className="testimonials-v1-item">
        <div className="testimonials-v1-top">
          <div className="testimonials-v1-author-wrap">
            {/* initials on a tinted square — we have no client photographs */}
            <div className="testimonials-v1-author-image" aria-hidden="true">
              {initials(item.name)}
            </div>
            <div className="testimonials-v1-info">
              <div className="paragraph-m-01 name">{item.name}</div>
              <div className="paragraph-02 position">{item.role}</div>
            </div>
          </div>
          {/* the reference links each author's profile here; we have none, so
              the slot carries the quote glyph instead of an invented link */}
          <div className="testimonials-v1-link">
            <QuoteMarkIcon />
          </div>
        </div>
        <div className="testimonials-v1-bottom">
          <p className="paragraph-01 testimonials-v1-details">
            &ldquo; {item.text}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Two offset columns of quote cards over a ring of type that stays pinned
 * behind them: the ring sits in a 100vh sticky box and the card list is
 * pulled back over it with a -100vh margin, so it holds centre while the
 * cards scroll past and turns with the scroll.
 *
 * Below 992px the ring is hidden and the columns collapse, so the rotation
 * is desktop-only — there is nothing to turn otherwise.
 */
export default function ServicesTestimonials() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });
  const transform = useTransform(scrollYProgress, (v) => `rotate(${v * 360}deg)`);

  const spin = isDesktop && !reduce;

  return (
    <section className="testimonials-v1 ds-root">
      <div className="container">
        <div className="testimonials-v1-wrap">
          <div className="testimonials-v1-head-wrap">
            <Reveal>
              <SectionBadge label="Testimonials" />
            </Reveal>
            <Reveal index={1}>
              <h2 className="align-center testimonials-v1-heading">
                Trusted by the teams we build for
              </h2>
            </Reveal>
          </div>

          <div className="testimonials-v1-main-wrap" ref={wrapRef}>
            <div className="testimonials-v1-circle-wrap">
              <div className="testimonials-v1-circle-area">
                <motion.div
                  className="testimonials-v1-circle-spin"
                  style={spin ? { transform } : undefined}
                >
                  <QuoteRingIcon />
                </motion.div>
                <div className="circle-quote">
                  <QuoteMarkIcon size={75} />
                </div>
              </div>
            </div>

            <div className="testimonials-v1-list-wrap">
              <div className="testimonials-v1-column">
                {TESTIMONIALS.slice(0, 3).map((item, i) => (
                  <TestimonialCard key={item.name} item={item} offset={OFFSETS[i]} />
                ))}
              </div>
              <div className="testimonials-v1-column _02">
                {TESTIMONIALS.slice(3, 5).map((item, i) => (
                  <TestimonialCard key={item.name} item={item} offset={OFFSETS[i + 3]} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
