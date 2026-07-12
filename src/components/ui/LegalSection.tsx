import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function LegalBody({ children }: { children: ReactNode }) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x max-w-3xl">
        <Reveal>
          <div className="space-y-10">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}

export function LegalBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-bold text-primary sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-muted">
        {children}
      </div>
    </div>
  );
}
