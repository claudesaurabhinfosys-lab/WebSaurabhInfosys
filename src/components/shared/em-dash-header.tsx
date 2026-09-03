import { cn } from "@/lib/utils";

interface EmDashHeaderProps {
  label: string;
  light?: boolean;
  centered?: boolean;
  className?: string;
}

export default function EmDashHeader({ label, light = false, centered = false, className }: EmDashHeaderProps) {
  return (
    <div className={cn("si-rule-header", light && "si-rule-header--light", centered && "justify-center", className)}>
      <span className="si-rule" />
      <h2 className={cn("si-section-title", light ? "si-on-dark" : "si-ink")}>{label}</h2>
    </div>
  );
}
