/**
 * Post covers live in public/images/blogs as `<slug>.webp`. A post listed in
 * NO_COVER has no file yet and borrows a related service image instead of
 * rendering a broken frame — remove the slug here once its cover lands.
 */
const NO_COVER: Record<string, string> = {
  "pwa-essential-2025": "/images/services/app-development-hero.webp",
};

export function blogImage(slug: string) {
  return NO_COVER[slug] ?? `/images/blogs/${slug}.webp`;
}
