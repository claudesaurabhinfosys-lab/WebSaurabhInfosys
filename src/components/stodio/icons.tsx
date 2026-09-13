/* Stodio icon set — every icon inherits `currentColor` and fills its box.
   Sizes come from the class on the wrapper, never from the SVG itself. */

type P = { className?: string };

/** Diagonal arrow used inside every button and link. */
export function ArrowUpRight({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12L12 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 4H12V10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Long right arrow — the "view all" and service-row marker. */
export function ArrowRight({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M27.53 16.5298L18.53 25.5298C18.3878 25.6623 18.1998 25.7344 18.0055 25.731C17.8112 25.7276 17.6258 25.6489 17.4884 25.5115C17.351 25.3741 17.2723 25.1887 17.2688 24.9944C17.2654 24.8001 17.3375 24.612 17.47 24.4698L25.1887 16.7498H5C4.80109 16.7498 4.61032 16.6708 4.46967 16.5302C4.32902 16.3895 4.25 16.1988 4.25 15.9998C4.25 15.8009 4.32902 15.6102 4.46967 15.4695C4.61032 15.3289 4.80109 15.2498 5 15.2498H25.1887L17.47 7.52985C17.3375 7.38767 17.2654 7.19962 17.2688 7.00532C17.2723 6.81102 17.351 6.62564 17.4884 6.48822C17.6258 6.35081 17.8112 6.2721 18.0055 6.26867C18.1998 6.26524 18.3878 6.33737 18.53 6.46985L27.53 15.4698C27.6705 15.6105 27.7493 15.8011 27.7493 15.9998C27.7493 16.1986 27.6705 16.3892 27.53 16.5298Z" fill="currentColor" />
    </svg>
  );
}

export function ArrowLeftSmall({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M8.70694 12.293L4.41394 7.99997H13.9999V5.99997H4.41394L8.70694 1.70697L7.29294 0.292969L0.585938 6.99997L7.29294 13.707L8.70694 12.293Z" fill="currentColor" />
    </svg>
  );
}

export function ArrowRightSmall({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ transform: "scaleX(-1)" }}>
      <path d="M8.70694 12.293L4.41394 7.99997H13.9999V5.99997H4.41394L8.70694 1.70697L7.29294 0.292969L0.585938 6.99997L7.29294 13.707L8.70694 12.293Z" fill="currentColor" />
    </svg>
  );
}

/** The brand plus-square that opens every eyebrow tag. */
export function TagIcon({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M16.25 2.5H3.75C3.41848 2.5 3.10054 2.6317 2.86612 2.86612C2.6317 3.10054 2.5 3.41848 2.5 3.75V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V3.75C17.5 3.41848 17.3683 3.10054 17.1339 2.86612C16.8995 2.6317 16.5815 2.5 16.25 2.5ZM13.125 10.625H10.625V13.125C10.625 13.2908 10.5592 13.4497 10.4419 13.5669C10.3247 13.6842 10.1658 13.75 10 13.75C9.83424 13.75 9.67527 13.6842 9.55806 13.5669C9.44085 13.4497 9.375 13.2908 9.375 13.125V10.625H6.875C6.70924 10.625 6.55027 10.5592 6.43306 10.4419C6.31585 10.3247 6.25 10.1658 6.25 10C6.25 9.83424 6.31585 9.67527 6.43306 9.55806C6.55027 9.44085 6.70924 9.375 6.875 9.375H9.375V6.875C9.375 6.70924 9.44085 6.55027 9.55806 6.43306C9.67527 6.31585 9.83424 6.25 10 6.25C10.1658 6.25 10.3247 6.31585 10.4419 6.43306C10.5592 6.55027 10.625 6.70924 10.625 6.875V9.375H13.125C13.2908 9.375 13.4497 9.44085 13.5669 9.55806C13.6842 9.67527 13.75 9.83424 13.75 10C13.75 10.1658 13.6842 10.3247 13.5669 10.4419C13.4497 10.5592 13.2908 10.625 13.125 10.625Z" fill="currentColor" />
    </svg>
  );
}

/** Eight-point asterisk that opens the client marquee. */
export function StarBurst({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M22.7428 13.2871C22.2703 9.23848 21.7715 4.96373 21.7715 0H26.2285C26.2285 4.90798 25.7321 9.17729 25.2602 13.2305C24.8759 16.5336 24.5082 19.6932 24.4399 22.938C26.6779 20.6036 28.6356 18.1284 30.6864 15.5356C33.2149 12.3388 35.8852 8.96334 39.3948 5.45357L42.5465 8.60525C39.076 12.0757 35.7056 14.7433 32.5061 17.2759L32.5031 17.2782C29.8969 19.3414 27.4038 21.3149 25.062 23.5601C28.2948 23.4918 31.4293 23.126 34.7126 22.7429C38.7613 22.2703 43.0363 21.7715 48 21.7715V26.2285C43.0922 26.2285 38.8229 25.7318 34.7699 25.2602L34.7669 25.26C31.4645 24.8758 28.3058 24.5083 25.062 24.4399C27.3948 26.6762 29.8687 28.6331 32.4599 30.6824L32.464 30.6859C35.6609 33.2147 39.0365 35.8847 42.5465 39.3948L39.3948 42.5465C35.9243 39.0761 33.2568 35.706 30.7246 32.5067L30.7186 32.4984L30.7135 32.4918C28.653 29.8897 26.6819 27.4006 24.4399 25.062C24.5082 28.3068 24.8759 31.4664 25.2602 34.7695C25.7321 38.8228 26.2285 43.092 26.2285 48H21.7715C21.7715 43.0363 22.2703 38.7616 22.7428 34.7129L22.7437 34.7063C23.1264 31.4252 23.4918 28.2926 23.5601 25.062C21.3181 27.4006 19.347 29.8897 17.2865 32.4918L17.2814 32.4984L17.2754 32.5067C14.7432 35.706 12.0757 39.0761 8.60525 42.5465L5.45357 39.3948C8.96351 35.8847 12.3391 33.2147 15.536 30.6859L15.5401 30.6824C18.1313 28.6331 20.6052 26.6762 22.938 24.4399C19.6932 24.5084 16.5335 24.876 13.2301 25.2602C9.17712 25.7318 4.90781 26.2285 0 26.2285V21.7715C4.96373 21.7715 9.23873 22.2703 13.2874 22.7429C16.5707 23.126 19.7052 23.4918 22.938 23.5601C20.5952 21.314 18.1012 19.3399 15.4939 17.2759C12.2944 14.7433 8.92399 12.0757 5.45357 8.60525L8.60525 5.45357C12.1148 8.96334 14.7851 12.3388 17.3136 15.5356C19.3644 18.1283 21.3221 20.6035 23.5601 22.9378C23.4918 19.7072 23.1264 16.5748 22.7437 13.2937L22.7428 13.2871Z" fill="currentColor" />
    </svg>
  );
}

export function CalendarIcon({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M19.5 3H17.25V2.25C17.25 2.05109 17.171 1.86032 17.0303 1.71967C16.8897 1.57902 16.6989 1.5 16.5 1.5C16.3011 1.5 16.1103 1.57902 15.9697 1.71967C15.829 1.86032 15.75 2.05109 15.75 2.25V3H8.25V2.25C8.25 2.05109 8.17098 1.86032 8.03033 1.71967C7.88968 1.57902 7.69891 1.5 7.5 1.5C7.30109 1.5 7.11032 1.57902 6.96967 1.71967C6.82902 1.86032 6.75 2.05109 6.75 2.25V3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM6.75 4.5V5.25C6.75 5.44891 6.82902 5.63968 6.96967 5.78033C7.11032 5.92098 7.30109 6 7.5 6C7.69891 6 7.88968 5.92098 8.03033 5.78033C8.17098 5.63968 8.25 5.44891 8.25 5.25V4.5H15.75V5.25C15.75 5.44891 15.829 5.63968 15.9697 5.78033C16.1103 5.92098 16.3011 6 16.5 6C16.6989 6 16.8897 5.92098 17.0303 5.78033C17.171 5.63968 17.25 5.44891 17.25 5.25V4.5H19.5V7.5H4.5V4.5H6.75ZM19.5 19.5H4.5V9H19.5V19.5ZM13.125 12.375C13.125 12.5975 13.059 12.815 12.9354 13C12.8118 13.185 12.6361 13.3292 12.4305 13.4144C12.225 13.4995 11.9988 13.5218 11.7805 13.4784C11.5623 13.435 11.3618 13.3278 11.2045 13.1705C11.0472 13.0132 10.94 12.8127 10.8966 12.5945C10.8532 12.3762 10.8755 12.15 10.9606 11.9445C11.0458 11.7389 11.19 11.5632 11.375 11.4396C11.56 11.316 11.7775 11.25 12 11.25C12.2984 11.25 12.5845 11.3685 12.7955 11.5795C13.0065 11.7905 13.125 12.0766 13.125 12.375ZM17.25 12.375C17.25 12.5975 17.184 12.815 17.0604 13C16.9368 13.185 16.7611 13.3292 16.5555 13.4144C16.35 13.4995 16.1238 13.5218 15.9055 13.4784C15.6873 13.435 15.4868 13.3278 15.3295 13.1705C15.1722 13.0132 15.065 12.8127 15.0216 12.5945C14.9782 12.3762 15.0005 12.15 15.0856 11.9445C15.1708 11.7389 15.315 11.5632 15.5 11.4396C15.685 11.316 15.9025 11.25 16.125 11.25C16.4234 11.25 16.7095 11.3685 16.9205 11.5795C17.1315 11.7905 17.25 12.0766 17.25 12.375ZM9 16.125C9 16.3475 8.93402 16.565 8.8104 16.75C8.68679 16.935 8.51109 17.0792 8.30552 17.1644C8.09995 17.2495 7.87375 17.2718 7.65552 17.2284C7.43729 17.185 7.23684 17.0778 7.0795 16.9205C6.92217 16.7632 6.81502 16.5627 6.77162 16.3445C6.72821 16.1262 6.75049 15.9 6.83564 15.6945C6.92078 15.4889 7.06498 15.3132 7.24998 15.1896C7.43499 15.066 7.6525 15 7.875 15C8.17337 15 8.45952 15.1185 8.6705 15.3295C8.88147 15.5405 9 15.8266 9 16.125ZM13.125 16.125C13.125 16.3475 13.059 16.565 12.9354 16.75C12.8118 16.935 12.6361 17.0792 12.4305 17.1644C12.225 17.2495 11.9988 17.2718 11.7805 17.2284C11.5623 17.185 11.3618 17.0778 11.2045 16.9205C11.0472 16.7632 10.94 16.5627 10.8966 16.3445C10.8532 16.1262 10.8755 15.9 10.9606 15.6945C11.0458 15.4889 11.19 15.3132 11.375 15.1896C11.56 15.066 11.7775 15 12 15C12.2984 15 12.5845 15.1185 12.7955 15.3295C13.0065 15.5405 13.125 15.8266 13.125 16.125ZM17.25 16.125C17.25 16.3475 17.184 16.565 17.0604 16.75C16.9368 16.935 16.7611 17.0792 16.5555 17.1644C16.35 17.2495 16.1238 17.2718 15.9055 17.2284C15.6873 17.185 15.4868 17.0778 15.3295 16.9205C15.1722 16.7632 15.065 16.5627 15.0216 16.3445C14.9782 16.1262 15.0005 15.9 15.0856 15.6945C15.1708 15.4889 15.315 15.3132 15.5 15.1896C15.685 15.066 15.9025 15 16.125 15C16.4234 15 16.7095 15.1185 16.9205 15.3295C17.1315 15.5405 17.25 15.8266 17.25 16.125Z" fill="currentColor" />
    </svg>
  );
}

export function QuoteMark({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M8 4.5c-3 1-4.6 3.3-4.6 6.4 0 2.6 1.4 4.1 3.3 4.1 1.7 0 2.9-1.2 2.9-2.9 0-1.6-1.1-2.7-2.6-2.7-.2 0-.5 0-.7.1.3-1.5 1.4-2.7 2.9-3.3L8 4.5Zm8.4 0c-3 1-4.6 3.3-4.6 6.4 0 2.6 1.4 4.1 3.3 4.1 1.7 0 2.9-1.2 2.9-2.9 0-1.6-1.1-2.7-2.6-2.7-.2 0-.5 0-.7.1.3-1.5 1.4-2.7 2.9-3.3l-1.2-1.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CheckMark({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12.4l2.6 2.6L16 9.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusMark({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/* ── Social ─────────────────────────────────────────────────────────────── */

export function LinkedInIcon({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M3.6 5.9H1.3V14h2.3V5.9ZM2.5 2A1.3 1.3 0 1 0 2.5 4.6 1.3 1.3 0 0 0 2.5 2ZM14.7 9.3c0-2.2-1.2-3.6-3-3.6-1 0-1.8.5-2.2 1.2V5.9H7.2V14h2.3V9.7c0-1 .5-1.7 1.4-1.7.9 0 1.4.6 1.4 1.7V14h2.4V9.3Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.8" y="1.8" width="12.4" height="12.4" rx="3.6" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="11.8" cy="4.2" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M9.6 15V9h2l.4-2.4H9.6V5.2c0-.7.2-1.2 1.2-1.2h1.3V1.9A17 17 0 0 0 10.2 1.8c-1.9 0-3.1 1.1-3.1 3.2v1.6H5v2.4h2.1V15h2.5Z" />
    </svg>
  );
}

export function XIcon({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M12.3 1.8h2.3L9.6 7.5l5.9 7.7h-4.6L7.3 10.5l-4.1 4.7H.9l5.4-6.1L.6 1.8h4.7l3.2 4.3 3.8-4.3Zm-.8 12h1.3L4.6 3.1H3.2l8.3 10.7Z" />
    </svg>
  );
}

export function YouTubeIcon({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M15.2 4.8a1.9 1.9 0 0 0-1.3-1.3C12.7 3.2 8 3.2 8 3.2s-4.7 0-5.9.3A1.9 1.9 0 0 0 .8 4.8C.5 6 .5 8 .5 8s0 2 .3 3.2c.2.6.7 1.1 1.3 1.3 1.2.3 5.9.3 5.9.3s4.7 0 5.9-.3a1.9 1.9 0 0 0 1.3-1.3c.3-1.2.3-3.2.3-3.2s0-2-.3-3.2ZM6.5 10.3V5.7L10.4 8l-3.9 2.3Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1.5a6.4 6.4 0 0 0-5.5 9.7L1.5 14.5l3.4-.9A6.4 6.4 0 1 0 8 1.5Zm0 1.3a5.1 5.1 0 1 1-2.6 9.5l-.2-.1-2 .5.5-2-.1-.2A5.1 5.1 0 0 1 8 2.8Zm-2.3 2.5c-.1 0-.3 0-.5.2-.2.2-.6.6-.6 1.4 0 .8.6 1.6.7 1.7.1.1 1.2 1.9 3 2.6 1.5.6 1.8.5 2.1.4.3 0 1-.4 1.1-.8.1-.4.1-.8.1-.8l-.4-.2-1.1-.5c-.2 0-.3 0-.4.1l-.5.7c-.1.1-.2.1-.4 0-.2 0-.8-.3-1.4-.9-.5-.5-.9-1-1-1.2 0-.2 0-.3.1-.4l.3-.3.2-.4v-.3l-.5-1.2c-.1-.3-.2-.3-.4-.3Z" />
    </svg>
  );
}

/* ── Brand mark ─────────────────────────────────────────────────────────── */

/** Saurabh Infosys wordmark — the four-square glyph plus the name. */
export function Wordmark({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 230 34" fill="none" aria-label="Saurabh Infosys">
      <g fill="var(--st-brand)">
        <rect x="0" y="4" width="11" height="11" rx="2.5" />
        <rect x="13.5" y="0.5" width="8.5" height="8.5" rx="2" opacity="0.75" />
        <rect x="2.5" y="18" width="8.5" height="8.5" rx="2" opacity="0.75" />
        <rect x="14.5" y="12" width="11" height="11" rx="2.5" />
      </g>
      <text
        x="34"
        y="24"
        fill="currentColor"
        fontFamily="var(--st-font-primary)"
        fontSize="23"
        fontWeight="600"
        letterSpacing="-0.8"
      >
        Saurabh Infosys
      </text>
    </svg>
  );
}

/* ── Process card art ───────────────────────────────────────────────────── */
/* Oversized flat glyphs, one per step, in the card's own tint. */

export function GlyphTarget({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="currentColor" aria-hidden="true">
      <path d="M100 6a94 94 0 1 0 0 188 94 94 0 0 0 0-188Zm0 28a66 66 0 1 1 0 132 66 66 0 0 1 0-132Z" />
      <path d="M100 62a38 38 0 1 0 0 76 38 38 0 0 0 0-76Zm0 24a14 14 0 1 1 0 28 14 14 0 0 1 0-28Z" />
    </svg>
  );
}

export function GlyphBlueprint({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="currentColor" aria-hidden="true">
      <rect x="16" y="16" width="76" height="76" rx="16" />
      <rect x="108" y="16" width="76" height="52" rx="16" />
      <rect x="16" y="108" width="52" height="76" rx="16" />
      <rect x="84" y="84" width="100" height="100" rx="20" />
    </svg>
  );
}

export function GlyphBox({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="currentColor" aria-hidden="true">
      <path d="M100 10 22 52v96l78 42 78-42V52L100 10Zm0 28 46 25-46 25-46-25 46-25ZM44 84l44 24v58l-44-24V84Zm68 82v-58l44-24v58l-44 24Z" />
    </svg>
  );
}

export function GlyphPulse({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <path
        d="M10 112h38l22-72 30 128 26-84 18 28h46"
        stroke="currentColor"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Small line icons for the foundation list ───────────────────────────── */

export function MissionIcon({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 1v6M16 25v6M1 16h6M25 16h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function GrowthIcon({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="3" y="12" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="19" y="4" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="19" y="20" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M13 16h3v-8h3M16 16v8h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CultureIcon({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M3 24c4-7 10-11 13-11s9 4 13 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 28c5-4 15-4 20 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="16" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

/** Compact mark used as a generic client logo in the marquee. */
export function ClientMark({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.5 14.4 9l7.6 2.4-7.6 2.4L12 22.5 9.6 13.8 2 11.4 9.6 9 12 1.5Z" />
    </svg>
  );
}
