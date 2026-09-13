import Image from "next/image";

type Props = {
  /** `light` = the white lockup for dark surfaces, `dark` = the colour one. */
  variant?: "light" | "dark";
  className?: string;
  priority?: boolean;
};

/**
 * The Saurabh Infosys lockup. Two real assets rather than one recoloured file,
 * because the colour version carries the brand blue and the white version is
 * the only one that stays legible on the dark slabs.
 *
 * Sized by height, not width: the lockup is a two-line mark (~1.63:1), so
 * fixing the width the way a single-line wordmark would makes it tower over
 * the nav row.
 */
export default function Logo({ variant = "light", className = "", priority }: Props) {
  const light = variant === "light";
  return (
    <Image
      className={className}
      src={light ? "/SaurabhInfosysWhite.png" : "/saurabhInfosys.webp"}
      alt="Saurabh Infosys"
      width={light ? 800 : 150}
      height={light ? 491 : 95}
      priority={priority}
    />
  );
}
