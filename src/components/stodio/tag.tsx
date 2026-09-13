import type { ReactNode } from "react";
import { TagIcon } from "./icons";

type Props = {
  children: ReactNode;
  /** `dark` = sitting on a dark slab (white pill), `light` = on a tinted slab. */
  on?: "default" | "dark" | "light";
  className?: string;
};

/** The eyebrow pill that opens every section: brand plus-square + mono label. */
export default function Tag({ children, on = "default", className = "" }: Props) {
  const variant = on === "dark" ? " st-on-dark" : on === "light" ? " st-on-light" : "";
  return (
    <div className={`st-tag${variant}${className ? ` ${className}` : ""}`}>
      <TagIcon className="st-tag-icon" />
      <div>{children}</div>
    </div>
  );
}
