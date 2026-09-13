import Reveal from "../reveal";
import Tag from "../tag";
import Odometer from "../odometer";
import { COMPANY } from "@/lib/data";

const STATS = [
  {
    value: COMPANY.stats.clients,
    label: "Clients served",
    copy: "From first-time founders to 25-year-old enterprises — each treated like our only one.",
  },
  {
    value: COMPANY.stats.projects,
    label: "Products shipped",
    copy: "Mobile apps, SaaS platforms and AI systems live in production today.",
  },
  {
    value: COMPANY.stats.clutchRating,
    label: "Clutch rating",
    copy: `${COMPANY.stats.clutchReviews} verified reviews. No compromises, no "just okay."`,
  },
  {
    value: COMPANY.stats.years,
    label: "Years of expertise",
    copy: "Flutter, React, Node and the current generation of AI platforms.",
  },
];

export default function CounterSection() {
  return (
    <section className="st-counter-section">
      <div className="st-container">
        <div className="st-counter-block">
          <Reveal className="st-tag-block">
            <Tag>By the numbers</Tag>
          </Reveal>

          <div className="st-counter-grid">
            {STATS.map((stat, index) => (
              <Reveal className="st-counter-item" key={stat.label} delay={index * 90}>
                <div className="st-counter-digit-wrapper">
                  <Odometer className="st-counter-digit" value={stat.value} />
                </div>
                <div className="st-counter-divider" />
                <div className="st-counter-content">
                  <div className="st-h6 st-weight-medium">{stat.label}</div>
                  <p className="st-text-s st-secondary">{stat.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
