"use client";

import { useRef, useState } from "react";
import Reveal from "./reveal";
import Tag from "./tag";

type Faq = { question: string; answer: string };

type Props = {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  faqs: Faq[];
};

function FaqItem({ faq, open, onToggle }: { faq: Faq; open: boolean; onToggle: () => void }) {
  const bodyRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={`st-faq-wrap${open ? " st-is-open" : ""}`}>
      <button
        type="button"
        className="st-faq-question"
        aria-expanded={open}
        onClick={onToggle}
      >
        <span className="st-faq-q-text">{faq.question}</span>
        <span className="st-faq-plus-wrap" aria-hidden="true">
          <span className="st-faq-plus" />
          <span className="st-faq-plus-v" />
        </span>
      </button>
      <div
        className="st-faq-answer"
        style={{ height: open ? bodyRef.current?.scrollHeight ?? "auto" : 0 }}
      >
        <div ref={bodyRef}>
          <p className="st-faq-answer-text st-text-m">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

/** Left column states the question set; right column is the accordion. */
export default function FaqSection({
  eyebrow = "FAQ",
  heading = "Got questions? We’ve got answers",
  intro = "Everything you need to know about our process, pricing, and how we work together.",
  faqs,
}: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="st-faq-section">
      <div className="st-container">
        <div className="st-faq-block">
          <div className="st-faq-title-block">
            <Reveal className="st-tag-block">
              <Tag>{eyebrow}</Tag>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)" }}>
                {heading}
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="st-text-m st-secondary" style={{ marginTop: "var(--st-gap-16)" }}>
                {intro}
              </p>
            </Reveal>
          </div>

          <div className="st-faq-item-block">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 70}>
                <FaqItem
                  faq={faq}
                  open={open === index}
                  onToggle={() => setOpen(open === index ? null : index)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
