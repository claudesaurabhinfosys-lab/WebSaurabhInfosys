import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

type PillButtonVariant = "brand" | "light" | "outline";

interface PillButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: PillButtonVariant;
  external?: boolean;
  className?: string;
}

const iconTone: Record<PillButtonVariant, string> = {
  brand: "si-btn-icon--light",
  light: "si-btn-icon--dark",
  outline: "si-btn-icon--dark",
};

export default function PillButton({
  href,
  onClick,
  children,
  variant = "brand",
  external = false,
  className,
}: PillButtonProps) {
  const classes = cn("si-btn", `si-btn--${variant}`, className);

  const content = (
    <>
      <span className="si-btn-label">
        <span className="si-btn-label-in block">{children}</span>
        <span className="si-btn-label-out block">{children}</span>
      </span>
      <span className={cn("si-btn-icon", iconTone[variant])}>
        <HugeiconsIcon icon={ArrowUpRight01Icon} size={24} className="si-btn-arrow-in" />
        <HugeiconsIcon icon={ArrowUpRight01Icon} size={24} className="si-btn-arrow-out" />
      </span>
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
