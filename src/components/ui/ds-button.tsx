import Link from "next/link";
import { ArrowIcon } from "./icons";

type Props = {
  href: string;
  label: string;
  /** external / mailto links skip the client router */
  external?: boolean;
  className?: string;
};

function ButtonInner({ label, variant }: { label: string; variant: "primary" | "secondary" }) {
  return (
    <>
      <div className={variant === "primary" ? "primary-btn-text-wrap" : "secondary-btn-text-wrap"}>
        <div className={variant === "primary" ? "primary-btn-mask" : "secondary-btn-mask"}>
          <div className="primary-btn-text-group">
            <div className="paragraph-02 btn-text-01">{label}</div>
            <div className="paragraph-02 btn-text-02" aria-hidden="true">
              {label}
            </div>
          </div>
        </div>
      </div>
      <div className={variant === "primary" ? "primary-arrow-wrap" : "secondary-arrow-wrap"}>
        <div className={variant === "primary" ? "primary-btn-arrow-mask" : "secondary-btn-arrow-mask"}>
          {/* both light: the arrow pill is brand blue at rest and black on
              hover, so the glyph stays white through the whole slide */}
          <ArrowIcon tone="light" />
          <ArrowIcon tone="light" />
        </div>
      </div>
    </>
  );
}

export function PrimaryButton({ href, label, external, className }: Props) {
  const cls = className ? `primary-button ${className}` : "primary-button";
  if (external) {
    return (
      <a href={href} className={cls}>
        <ButtonInner label={label} variant="primary" />
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      <ButtonInner label={label} variant="primary" />
    </Link>
  );
}

export function SecondaryButton({ href, label, external, className }: Props) {
  const cls = className ? `secondary-button ${className}` : "secondary-button";
  if (external) {
    return (
      <a href={href} className={cls}>
        <ButtonInner label={label} variant="secondary" />
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      <ButtonInner label={label} variant="secondary" />
    </Link>
  );
}
