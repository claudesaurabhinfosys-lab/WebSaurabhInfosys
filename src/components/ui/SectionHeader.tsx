interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${
            light ? "bg-bg/10 text-bg/70" : "bg-accent/10 text-accent"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`font-syne font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-balance ${
          light ? "text-bg" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-bg/60" : "text-ink/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
