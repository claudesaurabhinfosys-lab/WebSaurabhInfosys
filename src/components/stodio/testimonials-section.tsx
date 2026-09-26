"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./reveal";
import Tag from "./tag";
import { ArrowLeftSmall, ArrowRightSmall, ClientMark, QuoteMark } from "./icons";
import { TESTIMONIALS } from "@/lib/data";

/* Any horizontal drag longer than this pages the slider. */
const SWIPE_THRESHOLD = 40;

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  /* Distance from one card's left edge to the next, read off the DOM: the card
     is 442px on desktop but shrinks to the mask's width on phones, so a fixed
     step slid the track by the wrong amount and left cards cut in half. */
  const [step, setStep] = useState(0);
  const maskRef = useRef<HTMLDivElement | null>(null);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const mask = maskRef.current;
    if (!mask) return;
    const measure = () => {
      const card = mask.querySelector<HTMLElement>(".st-testimonial-card");
      if (!card) return;
      const gap = parseFloat(getComputedStyle(card).marginRight) || 0;
      const next = card.offsetWidth + gap;
      setStep(next);
      // The last card's gap is empty space, so it does not count against fit.
      setPerView(Math.max(1, Math.floor((mask.offsetWidth + gap) / next)));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(mask);
    return () => observer.disconnect();
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - perView);
  const clamped = Math.min(index, maxIndex);

  const go = (delta: number) => setIndex((v) => Math.min(maxIndex, Math.max(0, Math.min(v, maxIndex) + delta)));

  return (
    <section className="st-testimonial-section">
      <div className="st-container">
        <div className="st-testimonial-title-block">
          <div className="st-testimonial-left">
            <Reveal className="st-tag-block">
              <Tag on="dark">Collaborations</Tag>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)" }}>
                Why they love working with us
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="st-testimonial-right">
            <p className="st-text-m">
              We do not just finish projects; we build the thing that keeps
              working afterwards. Here is what our clients say.
            </p>
          </Reveal>
        </div>

        <div className="st-slider">
          <div
            className="st-slider-mask"
            ref={maskRef}
            onTouchStart={(event) => {
              touchX.current = event.touches[0].clientX;
            }}
            onTouchEnd={(event) => {
              if (touchX.current === null) return;
              const dx = event.changedTouches[0].clientX - touchX.current;
              touchX.current = null;
              if (Math.abs(dx) > SWIPE_THRESHOLD) go(dx < 0 ? 1 : -1);
            }}
          >
            <div
              className="st-slider-track"
              style={{ transform: `translate3d(-${clamped * step}px, 0, 0)` }}
            >
              {TESTIMONIALS.map((item) => (
                <article className="st-testimonial-card" key={item.name}>
                  <div>
                    <div className="st-testimonial-card-top">
                      <div
                        className="st-testimonial-avatar"
                        style={{
                          display: "grid",
                          placeItems: "center",
                          backgroundColor: "var(--st-secondary-bg)",
                          color: "var(--st-white)",
                          fontSize: "var(--st-h4-size)",
                          fontWeight: "var(--st-semibold)",
                        }}
                        aria-hidden="true"
                      >
                        {item.name.charAt(0)}
                      </div>
                      <div className="st-testimonial-logo">
                        <ClientMark className="st-logo-mark" />
                        {item.role.split(",").slice(-1)[0].trim()}
                      </div>
                    </div>

                    <div className="st-testimonial-body">
                      <QuoteMark className="st-testimonial-quote-mark" />
                      <p className={item.text.length > 240 ? "st-text-m" : "st-text-l"}>{item.text}</p>
                    </div>
                  </div>

                  <div className="st-testimonial-author">
                    <div className="st-h6 st-weight-medium">{item.name}</div>
                    <div className="st-text-s st-mute">{item.role}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Nothing to page through when every card already fits. */}
          {maxIndex > 0 && (
          <div className="st-slider-nav">
            <div className="st-slider-dots">
              {Array.from({ length: maxIndex + 1 }).map((_, dot) => (
                <button
                  key={dot}
                  type="button"
                  className={`st-slider-dot${dot === clamped ? " st-is-active" : ""}`}
                  aria-label={`Go to slide ${dot + 1}`}
                  onClick={() => setIndex(dot)}
                />
              ))}
            </div>
            <div className="st-slider-arrows">
              <button
                type="button"
                className="st-slider-arrow"
                aria-label="Previous testimonial"
                onClick={() => go(-1)}
                disabled={clamped === 0}
              >
                <ArrowLeftSmall className="st-button-icon" />
              </button>
              <button
                type="button"
                className="st-slider-arrow"
                aria-label="Next testimonial"
                onClick={() => go(1)}
                disabled={clamped === maxIndex}
              >
                <ArrowRightSmall className="st-button-icon" />
              </button>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}
