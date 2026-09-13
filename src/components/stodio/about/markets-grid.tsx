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
 * The two rows slide in from opposite sides as the block scrolls through —
 * IX2 `a-80` parks row one at `x: -500px` and row two at `x: +500px` at 20%
 * progress and brings both to zero by 75%, on outQuad.
 *
 * Row one is the stat tile plus the first three markets; row two is the rest
 * plus the closing note, so both rows fill the five-column grid exactly.
 */
export default function MarketsGrid({ markets, statValue, statLabel, note }: Props) {
  const rowOneRef = useRef<HTMLDivElement | null>(null);
  const rowTwoRef = useRef<HTMLDivElement | null>(null);

  const ref = useScrollProgress<HTMLDivElement>((progress) => {
    const t = outQuad(segment(progress, 0.2, 0.75));
    if (rowOneRef.current) {
      rowOneRef.current.style.transform = `translateX(${lerp(-500, 0, t).toFixed(2)}px)`;
    }
    if (rowTwoRef.current) {
      rowTwoRef.current.style.transform = `translateX(${lerp(500, 0, t).toFixed(2)}px)`;
    }
  });

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
      <div
        className="st-markets-grid"
        ref={rowOneRef}
        style={{ transform: "translateX(-500px)" }}
      >
        <div className="st-market-stat">
          <h3 className="st-h2 st-weight-medium">{statValue}</h3>
          <div className="st-h5 st-mute">{statLabel}</div>
        </div>
        {rowOne.map(card)}
      </div>

      <div
        className="st-markets-grid st-is-second"
        ref={rowTwoRef}
        style={{ transform: "translateX(500px)" }}
      >
        {rowTwo.map(card)}
        <div className="st-market-note">{note}</div>
      </div>
    </div>
  );
}
