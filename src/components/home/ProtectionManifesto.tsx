"use client";

import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export function ProtectionManifesto() {
  return (
    <section className="relative bg-primary py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container-x relative max-w-4xl">
        <Reveal>
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-accent-400">
            Notre promesse
          </span>
          <blockquote className="font-heading text-3xl font-bold leading-[1.12] text-balance sm:text-4xl lg:text-5xl">
            {siteConfig.brand.manifestoLine1}
            <br />
            <span className="text-secondary/90">{siteConfig.brand.manifestoLine2}</span>
          </blockquote>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-secondary/80 sm:text-lg">
            {siteConfig.brand.valueProposition} Chaque passage vise un intérieur
            propre, agréable et prêt à vivre, sans stress ni surprise.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-10 text-sm text-secondary/70">
            <span>Propreté soignée</span>
            <span className="hidden text-white/20 sm:inline">/</span>
            <span>Équipe fiable</span>
            <span className="hidden text-white/20 sm:inline">/</span>
            <span>Réponse sous 24 h</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
