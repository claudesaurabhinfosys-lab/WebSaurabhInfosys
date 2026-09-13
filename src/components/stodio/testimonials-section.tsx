"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./reveal";
import Tag from "./tag";
import { ArrowLeftSmall, ArrowRightSmall, ClientMark, QuoteMark } from "./icons";
import { TESTIMONIALS } from "@/lib/data";

const CARD_WIDTH = 442;
const CARD_GAP = 24;

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const maskRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const measure = () => {
      const width = maskRef.current?.offsetWidth ?? 0;
      setPerView(Math.max(1, Math.floor(width / (CARD_WIDTH + CARD_GAP))));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - perView);
  const clamped = Math.min(index, maxIndex);

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
          <div className="st-slider-mask" ref={maskRef}>
            <div
              className="st-slider-track"
              style={{ transform: `translate3d(-${clamped * (CARD_WIDTH + CARD_GAP)}px, 0, 0)` }}
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
                      <p className="st-text-l">{item.text}</p>
                    </div>
                  </div>

                  <div className="st-testimonial-author">
                    <div className="st-h6 st-weight-medium">{item.name}</div>
                    <div className="st-text-s st-mute">{item.role}</div>
                    <div className="st-text-s st-mute st-mono">{item.country}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>

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
                onClick={() => setIndex((v) => Math.max(0, v - 1))}
                disabled={clamped === 0}
              >
                <ArrowLeftSmall className="st-button-icon" />
              </button>
              <button
                type="button"
                className="st-slider-arrow"
                aria-label="Next testimonial"
                onClick={() => setIndex((v) => Math.min(maxIndex, v + 1))}
                disabled={clamped === maxIndex}
              >
                <ArrowRightSmall className="st-button-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
