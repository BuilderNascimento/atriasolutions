"use client";

import type { ComponentPropsWithoutRef } from "react";

type MarqueeProps = ComponentPropsWithoutRef<"div"> & {
  reverse?: boolean;
  pauseOnHover?: boolean;
  repeat?: number;
};

/**
 * Marquee infinito (padrão Magic UI / shadcn ecosystem).
 * Scroll horizontal contínuo, com pause no hover.
 */
export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  repeat = 4,
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 [--duration:35s] [--gap:1.25rem] ${className}`}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={`flex shrink-0 justify-around gap-[var(--gap)] ${
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
