import { HugeiconsIcon } from "@hugeicons/react";
import {
  Call02Icon,
  Linkedin01Icon,
  Mail01Icon,
  Tick02Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";

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

export function QuoteMarkIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M8 4.5C5.2 5.9 3.5 8.4 3.5 11.4c0 2.5 1.4 4.1 3.4 4.1 1.7 0 3-1.2 3-2.9 0-1.6-1.1-2.8-2.7-2.8-.3 0-.6 0-.8.1.4-1.5 1.6-2.9 3.2-3.8L8 4.5Zm8 0c-2.8 1.4-4.5 3.9-4.5 6.9 0 2.5 1.4 4.1 3.4 4.1 1.7 0 3-1.2 3-2.9 0-1.6-1.1-2.8-2.7-2.8-.3 0-.6 0-.8.1.4-1.5 1.6-2.9 3.2-3.8L16 4.5Z"
        fill="#141414"
      />
    </svg>
  );
}

/**
 * Social glyphs from @hugeicons/core-free-icons. `currentColor` and the 1.5
 * stroke match the rest of the icon set, and the pill's own colour drives
 * them, so a hover fill needs no second colour to keep in sync.
 */
const SOCIALS = {
  linkedin: Linkedin01Icon,
  whatsapp: WhatsappIcon,
  email: Mail01Icon,
  phone: Call02Icon,
} as const;

export function SocialIcon({ name }: { name: keyof typeof SOCIALS | string }) {
  const icon = SOCIALS[name as keyof typeof SOCIALS];
  if (!icon) return null;
  return (
    <HugeiconsIcon
      icon={icon}
      size={20}
      color="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    />
  );
}

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

/** The tick beside each item in a product's included list. */
export function CheckIcon() {
  return (
    <HugeiconsIcon
      icon={Tick02Icon}
      size={20}
      color="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    />
  );
}
