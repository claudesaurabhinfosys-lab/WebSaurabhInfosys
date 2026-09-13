const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/**
 * "2026-04-10" -> "April 10, 2026".
 *
 * Parsed by hand rather than through `toLocaleDateString`: this renders in
 * a static export, so the string is produced at build time and again on
 * hydration. Anything locale- or timezone-dependent can disagree between
 * the two and blow up as a hydration mismatch.
 */
export function formatPostDate(iso: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!match) return iso;

  const [, year, month, day] = match;
  const name = MONTHS[Number(month) - 1];
  if (!name) return iso;

  return `${name} ${Number(day)}, ${year}`;
}
