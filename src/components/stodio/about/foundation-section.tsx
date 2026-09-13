"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "../reveal";
import Tag from "../tag";
import { CultureIcon, GrowthIcon, MissionIcon } from "../icons";

export type FoundationTab = {
  title: string;
  body: string;
  image: string;
};

const ICONS = [MissionIcon, GrowthIcon, CultureIcon];

/**
 * One row of the list. The body is height-animated rather than mounted and
 * unmounted, so the rows below slide instead of jumping — IX2 `a-24` / `a-25`
 * run it 0 → auto over 400ms on `ease`.
 */
function Row({
  tab,
  Icon,
  open,
  onOpen,
}: {
  tab: FoundationTab;
  Icon: (props: { className?: string }) => React.ReactElement;
  open: boolean;
  onOpen: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  // Measure after paint so the first open animates from a real number, and
  // re-measure on resize because the copy rewraps.
  useEffect(() => {
    const measure = () => setHeight(bodyRef.current?.scrollHeight ?? 0);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [tab.body]);

  return (
    <button
      type="button"
      className={`st-foundation-tab${open ? " st-is-open" : ""}`}
      aria-expanded={open}
      onClick={onOpen}
    >
      <span className="st-foundation-tab-head">
        <Icon className="st-foundation-tab-icon" />
        <span className="st-foundation-tab-title">{tab.title}</span>
      </span>
      <span className="st-foundation-tab-body" style={{ height: open ? height : 0 }}>
        <span className="st-foundation-tab-inner" ref={bodyRef}>
          <span className="st-foundation-tab-copy st-text-m">{tab.body}</span>
        </span>
      </span>
    </button>
  );
}

/**
 * Image on the leading side, the principles list on the trailing side. Picking
 * a row swaps the image as well as opening the body — in the reference these
 * are Webflow tabs, where each pane carries its own picture, so the image is
 * part of the selection rather than decoration beside it.
 *
 * The image panel is absolutely positioned so the list keeps the block's
 * height; the panel is taller than the list and would otherwise stretch it.
 */
export default function FoundationSection({ tabs }: { tabs: FoundationTab[] }) {
  const [active, setActive] = useState(0);

  return (
    <section className="st-foundation-section">
      <div className="st-container">
        <div className="st-foundation-block">
          <Reveal className="st-foundation-media" delay={200}>
            {tabs.map((tab, index) => (
              <Image
                key={tab.image}
                className={`st-foundation-image${index === active ? " st-is-active" : ""}`}
                src={tab.image}
                alt=""
                width={600}
                height={680}
                priority={index === 0}
              />
            ))}
          </Reveal>

          <div className="st-foundation-content">
            <Reveal className="st-tag-block">
              <Tag>Our foundation</Tag>
            </Reveal>
            <Reveal delay={200}>
              <h2 className="st-h3" style={{ marginTop: "var(--st-gap-24)" }}>
                Built on purpose, driven by what we ship
              </h2>
            </Reveal>

            <Reveal delay={300} className="st-foundation-tabs">
              {tabs.map((tab, index) => (
                <Row
                  key={tab.title}
                  tab={tab}
                  Icon={ICONS[index % ICONS.length]}
                  open={index === active}
                  onOpen={() => setActive(index)}
                />
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
