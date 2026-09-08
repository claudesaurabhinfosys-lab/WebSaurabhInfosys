/**
 * Post covers. Placeholders until real cover art lands in
 * public/images/blog — the pool is the shared work imagery, cycled so
 * adjacent cards in a row never repeat.
 */
const POOL = [1, 2, 3, 4, 5].map((n) => `/images/work/placeholder-0${n}.webp`);

export function blogImage(index: number) {
  return POOL[index % POOL.length];
}
