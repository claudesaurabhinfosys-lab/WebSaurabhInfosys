import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "./icons";

type Variant = "white" | "brand" | "dark" | "light" | "outline";

const VARIANT_CLASS: Record<Variant, string> = {
  white: "",
  brand: " st-is-brand",
  dark: " st-is-dark",
  light: " st-is-light",
  outline: " st-is-outline",
};

type Common = {
  children: ReactNode;
  variant?: Variant;
  /** Hidden second label revealed on hover. Defaults to the same label. */
  hoverLabel?: ReactNode;
  withIcon?: boolean;
  className?: string;
};

/**
 * The button from the reference build: two stacked copies of the label, the
 * visible one rising out on hover while the duplicate rises in behind it, and
 * the pill tightening from a 44px to a 16px radius at the same time.
 */
function Inner({ children, hoverLabel, withIcon = true }: Pick<Common, "children" | "hoverLabel" | "withIcon">) {
  const second = hoverLabel ?? children;
  return (
    <span className="st-button-content">
      <span className="st-button-inner">
        <span className="st-button-text-wrap">
          <span className="st-button-text">{children}</span>
        </span>
        {withIcon && (
          <span className="st-button-icon-wrap">
            <ArrowUpRight className="st-button-icon" />
          </span>
        )}
      </span>
      <span className="st-button-inner st-is-absolute" aria-hidden="true">
        <span className="st-button-text-wrap">
          <span className="st-button-text">{second}</span>
        </span>
        {withIcon && (
          <span className="st-button-icon-wrap">
            <ArrowUpRight className="st-button-icon" />
          </span>
        )}
      </span>
    </span>
  );
}

export function StButtonLink({
  href,
  variant = "white",
  className = "",
  children,
  hoverLabel,
  withIcon = true,
  ...rest
}: Common & { href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "children" | "className">) {
  const cls = `st-button${VARIANT_CLASS[variant]}${className ? ` ${className}` : ""}`;
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (external) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
        <Inner hoverLabel={hoverLabel} withIcon={withIcon}>
          {children}
        </Inner>
      </a>
    );
  }

  return (
    <Link className={cls} href={href} {...rest}>
      <Inner hoverLabel={hoverLabel} withIcon={withIcon}>
        {children}
      </Inner>
    </Link>
  );
}

export function StButton({
  variant = "white",
  className = "",
  children,
  hoverLabel,
  withIcon = true,
  ...rest
}: Common & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`st-button${VARIANT_CLASS[variant]}${className ? ` ${className}` : ""}`} {...rest}>
      <Inner hoverLabel={hoverLabel} withIcon={withIcon}>
        {children}
      </Inner>
    </button>
  );
}
