/**
 * Accordion and arrow glyphs. The plus rotates 45° into a cross when its
 * row opens — the rotation is a CSS transition on the wrapper, so these
 * stay static SVGs.
 */

export function PlusIcon({ size = 24, stroke = "#141414" }: { size?: number; stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowDownIcon({ stroke = "#ffffff" }: { stroke?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M9 3.5v11M9 14.5l-4.5-4.5M9 14.5l4.5-4.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({ stroke = "#141414" }: { stroke?: string }) {
  return (
    <svg
      className="blog-v6-more-arrow"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 9h11M14.5 9L10 4.5M14.5 9L10 13.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function QuoteMarkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M8 4.5C5.2 5.9 3.5 8.4 3.5 11.4c0 2.5 1.4 4.1 3.4 4.1 1.7 0 3-1.2 3-2.9 0-1.6-1.1-2.8-2.7-2.8-.3 0-.6 0-.8.1.4-1.5 1.6-2.9 3.2-3.8L8 4.5Zm8 0c-2.8 1.4-4.5 3.9-4.5 6.9 0 2.5 1.4 4.1 3.4 4.1 1.7 0 3-1.2 3-2.9 0-1.6-1.1-2.8-2.7-2.8-.3 0-.6 0-.8.1.4-1.5 1.6-2.9 3.2-3.8L16 4.5Z"
        fill="#141414"
      />
    </svg>
  );
}

const SOCIALS: Record<string, string> = {
  linkedin:
    "M6.5 8.2h-3V17h3V8.2Zm.2-2.7a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0ZM17 12.3c0-2.6-1.4-3.8-3.2-3.8-1.5 0-2.2.8-2.6 1.4V8.2h-3V17h3v-4.9c0-1.3.5-2 1.5-2s1.3.7 1.3 2V17h3v-4.7Z",
  whatsapp:
    "M10 3.3a6.6 6.6 0 0 0-5.6 10.1L3.4 17l3.7-1a6.6 6.6 0 1 0 2.9-12.7Zm0 1.5a5.1 5.1 0 1 1-2.6 9.5l-.3-.2-2.1.6.6-2-.2-.3A5.1 5.1 0 0 1 10 4.8Zm-2 2.6c-.2 0-.4.1-.5.3-.2.2-.6.6-.6 1.4s.6 1.6.7 1.7c.1.2 1.2 2 3 2.7 1.4.6 1.7.5 2 .4.4 0 1-.4 1.2-.9.1-.4.1-.8 0-.9l-.5-.2-1-.5c-.2 0-.3 0-.4.1l-.5.7c-.1.1-.2.1-.4 0-.2 0-.8-.3-1.4-.9-.5-.5-.9-1-1-1.2 0-.2 0-.3.1-.4l.3-.4v-.4l-.5-1.2c-.1-.3-.2-.3-.4-.3H8Z",
  email:
    "M3.5 5.5h13v9h-13v-9Zm1.6 1.5 4.9 3.6 4.9-3.6H5.1Zm9.9 1.2-4.6 3.4a.8.8 0 0 1-.9 0L5 8.2V13h10V8.2Z",
};

export function SocialIcon({ name }: { name: keyof typeof SOCIALS | string }) {
  const path = SOCIALS[name];
  if (!path) return null;
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d={path} fill="#ffffff" />
    </svg>
  );
}

/** Diagonal out-arrow — marks a card that leaves the page. */
export function ArrowUpRightIcon({ stroke = "#141414" }: { stroke?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M5 13L13 5M13 5H6M13 5V12"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
