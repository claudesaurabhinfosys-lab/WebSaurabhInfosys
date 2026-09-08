/**
 * Placeholders until real project shots land in public/images/work.
 * `project.images` overrides them slot by slot once they exist.
 */
const PLACEHOLDERS = [1, 2, 3, 4, 5].map((n) => `/images/work/placeholder-0${n}.webp`);

/** Nth image for a project — real one if we have it, else a placeholder. */
export function workImage(images: string[] | undefined, seed: number, slot: number) {
  return images?.[slot] ?? PLACEHOLDERS[(seed + slot) % PLACEHOLDERS.length];
}

export const PLACEHOLDER_COUNT = PLACEHOLDERS.length;
