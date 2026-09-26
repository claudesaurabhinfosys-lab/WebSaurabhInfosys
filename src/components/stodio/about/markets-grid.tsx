"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { lerp, outQuad, segment, useScrollProgress } from "../use-scroll-progress";
import type { AboutMarket } from "@/lib/data";

type Props = {
  markets: AboutMarket[];
  statValue: ReactNode;
  statLabel: string;
  note: ReactNode;
};

/**
 * The two rows slide in from opposite sides as the section scrolls through —
 * IX2 `a-80` parks row one at `x: -500px` and row two at `x: +500px` at 20%
 * progress and brings both to zero by 75%, on outQuad. The trigger is the
 * whole section (`.our-team-section`), and it is bound to Webflow's `main`
 * breakpoint only: below 992px the rows simply sit in place. The parked
 * offsets live in CSS under the same breakpoint, so phones never render a
 * row pushed off-screen before this script runs.
 *
 * Row one is the stat tile plus the first three markets; row two is the rest
 * plus the closing note, so both rows fill the five-column grid exactly.
 */
export default function MarketsGrid({ markets, statValue, statLabel, note }: Props) {
  const rowOneRef = useRef<HTMLDivElement | null>(null);
  const rowTwoRef = useRef<HTMLDivElement | null>(null);

  const ref = useScrollProgress<HTMLDivElement>(
    (progress) => {
      const desktop = window.matchMedia("(min-width: 992px)").matches;
      const t = outQuad(segment(progress, 0.2, 0.75));
      if (rowOneRef.current) {
        rowOneRef.current.style.transform = desktop ? `translateX(${lerp(-500, 0, t).toFixed(2)}px)` : "";
      }
      if (rowTwoRef.current) {
        rowTwoRef.current.style.transform = desktop ? `translateX(${lerp(500, 0, t).toFixed(2)}px)` : "";
      }
    },
    (node) => node.closest("section"),
  );

  const rowOne = markets.slice(0, 3);
  const rowTwo = markets.slice(3);

  const card = (market: AboutMarket) => (
    <div className="st-market-card" key={market.slug}>
      <Image
        className="st-market-image"
        src={`/images/about/market-${market.slug}.webp`}
        alt={market.name}
        width={294}
        height={294}
      />
      <div className="st-market-info">
        <div className="st-h6 st-market-name">{market.name}</div>
        <div className="st-text-m st-market-role">{market.tagline}</div>
        <div className="st-market-divider" />
      </div>
    </div>
  );

  return (
    <div className="st-markets-rows" ref={ref}>
      <div className="st-markets-grid st-is-first" ref={rowOneRef}>
        <div className="st-market-stat">
          <h3 className="st-h2 st-weight-medium">{statValue}</h3>
          <div className="st-h5 st-mute">{statLabel}</div>
        </div>
        {rowOne.map(card)}
      </div>

      <div className="st-markets-grid st-is-second" ref={rowTwoRef}>
        {rowTwo.map(card)}
        <div className="st-market-note">{note}</div>
      </div>
    </div>
  );
}
