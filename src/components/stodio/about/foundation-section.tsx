"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Reveal from "../reveal";
import Tag from "../tag";
import { CultureIcon, GrowthIcon, MissionIcon } from "../icons";

type Belief = { title: string; body: string };

const ICONS = [MissionIcon, GrowthIcon, CultureIcon, MissionIcon, GrowthIcon];

function FoundationTab({
  belief,
  Icon,
  open,
  onOpen,
}: {
  belief: Belief;
  Icon: (props: { className?: string }) => React.ReactElement;
  open: boolean;
  onOpen: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement | null>(null);

  return (
    <button type="button" className="st-foundation-tab" aria-expanded={open} onClick={onOpen}>
      <span className="st-foundation-tab-head">
        <Icon className="st-foundation-tab-icon" />
        <span className="st-foundation-tab-title">{belief.title}</span>
      </span>
      <span
        className="st-foundation-tab-body"
        style={{ height: open ? bodyRef.current?.scrollHeight ?? "auto" : 0, display: "block" }}
      >
        <span ref={bodyRef} style={{ display: "block" }}>
          <p className="st-text-m">{belief.body}</p>
        </span>
      </span>
    </button>
  );
}

/**
 * Image leading, a list of principles trailing where only the open one shows
 * its body — the reference's `foundation-tabs` as a disclosure list. The body
 * animates on height so the rows below never jump.
 */
export default function FoundationSection({ beliefs }: { beliefs: Belief[] }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="st-foundation-section">
      <div className="st-container">
        <div className="st-foundation-block">
          <Reveal className="st-foundation-image-wrapper" delay={200}>
            <Image
              className="st-foundation-image"
              src="/images/about/studio.webp"
              alt="Inside the Saurabh Infosys studio"
              width={600}
              height={680}
            />
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
              {beliefs.map((belief, index) => (
                <FoundationTab
                  key={belief.title}
                  belief={belief}
                  Icon={ICONS[index % ICONS.length]}
                  open={index === open}
                  onOpen={() => setOpen(index === open ? -1 : index)}
                />
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
