"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Odometer from "./odometer";

type Props = {
  value: string;
  label: string;
  copy: string;
  /** Revealed behind the stat while the pointer is over it. */
  image?: string;
};

/**
 * A single stat. Hovering it reveals an image behind the card that drifts with
 * the pointer, and lifts the caption from grey to ink — IX2 `a-21` / `a-22`
 * toggle `.counter-bg` and recolour `.text-s.is-secondary` over 500ms, with
 * `a-23` (MOUSE_MOVE) supplying the drift.
 */
export default function CounterItem({ value, label, copy, image }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function onMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    // -1..1 across the card, scaled down to a drift rather than a follow.
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setOffset({ x: x * 24, y: y * 24 });
  }

  return (
    <div
      className={`st-counter-item${hover ? " st-is-hover" : ""}`}
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setOffset({ x: 0, y: 0 });
      }}
      onMouseMove={onMove}
    >
      {image && (
        <Image
          className="st-counter-bg"
          src={image}
          alt=""
          width={400}
          height={300}
          style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(1.08)` }}
        />
      )}
      <div className="st-counter-digit-wrapper">
        <Odometer className="st-counter-digit" value={value} />
      </div>
      <div className="st-counter-divider" />
      <div className="st-counter-content">
        <div className="st-text-xl st-weight-semibold">{label}</div>
        <p className="st-text-s st-counter-copy">{copy}</p>
      </div>
    </div>
  );
}
