/* Design-system icons, traced 1:1 from the reference build assets. */

export function ArrowIcon({ tone }: { tone: "light" | "dark" }) {
  return (
    <svg
      className="primary-btn-arrow"
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 19L26 19M26 19L19 12M26 19L19 26"
        stroke={tone === "light" ? "#ffffff" : "#141414"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarBadgeIcon() {
  return (
    <svg
      className="badge-icon"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      aria-hidden="true"
    >
      <rect width="30" height="30" fill="var(--colors--purple-blue)" />
      <path
        d="M15 23C14.2308 18.9612 11 15.699 7 15.0777C11 14.301 14.2308 11.0388 15 7C15.6154 11.0388 18.8462 14.301 23 15.0777C18.8462 15.699 15.6154 18.9612 15 23Z"
        fill="white"
      />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg
      className="web-icon"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="7.25" stroke="#141414" strokeWidth="1.2" />
      <ellipse cx="9" cy="9" rx="3.25" ry="7.25" stroke="#141414" strokeWidth="1.2" />
      <path d="M2 9h14" stroke="#141414" strokeWidth="1.2" />
    </svg>
  );
}

export function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      {open ? (
        <path d="M4 4L14 14M14 4L4 14" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" />
      ) : (
        <>
          <path d="M3 6.5h12" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M3 11.5h12" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

/** 60px white circle with a diagonal up-right arrow — the work card hover badge. */
export function WorkArrowIcon() {
  return (
    <svg
      className="work-arrow"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      aria-hidden="true"
    >
      <rect width="60" height="60" rx="30" fill="white" />
      <path
        d="M25.0503 34.9497L34.9498 25.0503M34.9498 25.0503L25.0503 25.0503M34.9498 25.0503L34.9498 34.9497"
        stroke="#141414"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
