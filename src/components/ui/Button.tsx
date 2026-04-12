import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 font-dm";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-dark shadow-sm hover:shadow-md",
    outline: "border-2 border-ink text-ink hover:bg-ink hover:text-bg",
    ghost: "text-ink/70 hover:text-ink hover:bg-ink/5",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      );
    }
    return <Link href={href} className={cls}>{children}</Link>;
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
