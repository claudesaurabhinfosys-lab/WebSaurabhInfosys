"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import { useIsDesktop } from "@/lib/use-is-desktop";
import { SectionBadge } from "@/components/ui/section-badge";
import { Reveal } from "@/components/ui/reveal";
import { QuoteMarkIcon } from "@/components/ui/accordion-icons";

type Testimonial = (typeof TESTIMONIALS)[number];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="testimonial-v1-list">
      <div className="testimonial-v1-card">
        <div className="testimonial-v1-content">
          <div className="testimonial-v1-top">
            <div className="testimonial-v1-avatar" aria-hidden="true">
              {initials(item.name)}
            </div>
            <div className="testimonial-v1-flag">
              <QuoteMarkIcon />
            </div>
          </div>
          <p className="paragraph-01">{item.text}</p>
        </div>
        <div className="testimonial-v1-info">
          <div className="paragraph-m-01">{item.name}</div>
          <div className="paragraph-03 testimonial-v1-role">{item.role}</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Desktop: a 400vh runway with a sticky viewport, the card row translating
 * horizontally against scroll. Below 992px the runway collapses and the same
 * cards run as a CSS marquee — off the main thread, so it stays smooth while
 * the rest of the page is still loading.
 */
export default function TestimonialsSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const smoothed = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.5 });
  const shift = useTransform(smoothed, [0.1, 0.9], [4, -68], { clamp: true });
  const transform = useTransform(shift, (v) => `translateX(${v}%)`);

  return (
    <section className="testimonial-v1 ds-root">
      <div className="container">
        <div className="testimonial-v1-wrap" ref={wrapRef}>
          <div className="testimonial-v1-sticky">
            <Reveal>
              <SectionBadge label="Testimonials" />
            </Reveal>

            <motion.div
              className="testimonial-v1-main-wrap"
              style={isDesktop ? { transform } : undefined}
            >
              {TESTIMONIALS.map((item) => (
                <TestimonialCard key={item.name} item={item} />
              ))}
            </motion.div>

            <div className="testimonial-v1-marquee">
              {[0, 1].map((copy) => (
                <div className="testimonial-v1-list-wrap" key={copy} aria-hidden={copy === 1}>
                  {TESTIMONIALS.map((item) => (
                    <TestimonialCard key={item.name} item={item} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
