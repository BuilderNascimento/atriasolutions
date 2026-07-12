"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { trustPillars } from "@/lib/content";

export function TrustAtria() {
  return (
    <section className="relative bg-white py-28 lg:py-36">
      <div className="container-x max-w-5xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mx-auto mb-8 block h-px w-16 bg-primary/20" />
            <h2 className="font-heading text-2xl font-bold leading-snug text-primary sm:text-3xl lg:text-[2rem] text-balance">
              Pourquoi confier la protection de votre bien à Atria&nbsp;?
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-20">
          {trustPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <div>
                <h3 className="font-heading text-lg font-bold text-accent">
                  {pillar.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 flex justify-center">
            <ButtonLink
              href="/devis"
              variant="secondary"
              className="!rounded-none !border-primary/20 !px-10 !py-4 !text-xs !font-semibold !uppercase !tracking-[0.2em] !text-primary hover:!border-primary hover:!bg-primary hover:!text-white"
            >
              Prendre rendez-vous
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
