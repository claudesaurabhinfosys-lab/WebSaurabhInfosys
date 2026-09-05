/**
 * The square-dot pill that labels every section — "OUR WORK", "WORKFLOW",
 * "FAQ". Always DM Mono, always uppercase, four surface variants.
 */
export function SectionBadge({
  label,
  variant = "default",
}: {
  label: string;
  /** default: on white · accent: brand blue fill · dark: on a dark panel · light: on a tinted panel */
  variant?: "default" | "accent" | "dark" | "light";
}) {
  const surface = variant === "default" ? "" : ` ${variant}`;
  return (
    <div className="section-badge-wrap">
      <div className={`badge-wrap${surface}`}>
        <div className="badge-dot" />
        <div className="paragraph-03 badge-title">{label}</div>
      </div>
    </div>
  );
}
