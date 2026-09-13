"use client";

import Image from "next/image";
import { useRef } from "react";
import { lerp, segment, useScrollProgress } from "../use-scroll-progress";

/**
 * Per-tile start and end pose, straight out of IX2 `a-79` ("Shoe Case Card
 * scroll"): at 10% scroll progress the tiles sit offset and steeply tilted,
 * by 70% they have settled to zero offset and a gentler angle. Odd tiles come
 * up from below, even ones drop in from above.
 */
const POSE = [
  { y0: 60, r0: -8, r1: -4 },
  { y0: -60, r0: 3, r1: 3 },
  { y0: 60, r0: -4, r1: -2 },
  { y0: -60, r0: 4, r1: 2 },
];

export default function ShowcaseRow({ images }: { images: string[] }) {
  const tiles = useRef<(HTMLDivElement | null)[]>([]);

  const ref = useScrollProgress<HTMLDivElement>((progress) => {
    const t = segment(progress, 0.1, 0.7);
    tiles.current.forEach((tile, index) => {
      if (!tile) return;
      const pose = POSE[index % POSE.length];
      tile.style.transform =
        `translateY(${lerp(pose.y0, 0, t).toFixed(2)}px) rotate(${lerp(pose.r0, pose.r1, t).toFixed(2)}deg)`;
    });
  });

  return (
    <div className="st-showcase-grid" ref={ref}>
      {images.map((src, index) => {
        const pose = POSE[index % POSE.length];
        return (
          <div
            className="st-showcase-item"
            key={src}
            ref={(node) => {
              tiles.current[index] = node;
            }}
            // Server-rendered starting pose, so there is no flash of the
            // settled layout before the first frame runs.
            style={{ transform: `translateY(${pose.y0}px) rotate(${pose.r0}deg)` }}
          >
            <Image
              className="st-showcase-image"
              src={src}
              alt=""
              width={291}
              height={351}
            />
          </div>
        );
      })}
    </div>
  );
}
