import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "accent";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  md: "text-sm min-h-11 px-5 py-2.5",
  lg: "text-base min-h-12 px-7 py-3.5",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-soft hover:bg-primary-600 hover:shadow-card hover:-translate-y-0.5",
  accent:
    "bg-accent text-white shadow-soft hover:bg-accent-600 hover:shadow-card hover:-translate-y-0.5",
  secondary:
    "bg-white text-primary ring-1 ring-secondary hover:ring-primary/30 hover:-translate-y-0.5 shadow-soft",
  ghost:
    "text-primary hover:bg-secondary-100",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  size = "lg",
  className = "",
  children,
  ...props
}: BaseProps & ComponentProps<typeof Link>) {
  return (
    <Link
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "lg",
  className = "",
  children,
  ...props
}: BaseProps & ComponentProps<"button">) {
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
