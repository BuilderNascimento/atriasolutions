"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, staggerItem } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { pricingPackages } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function Pricing() {
  return (
    <section id="tarifs" className="relative bg-secondary-100 py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Tarifs indicatifs"
          title="Des formules claires, un devis sur mesure"
          description="Les prix ci-dessous sont indicatifs. Chaque devis tient compte de la surface, du type de prestation et de la fréquence."
        />

        <Stagger
          stagger={0.1}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {pricingPackages.map((pkg) => (
            <motion.article
              key={pkg.name}
              variants={staggerItem}
              className={`flex h-full flex-col rounded-2xl p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
                pkg.highlighted
                  ? "bg-primary text-white ring-2 ring-accent"
                  : "bg-white text-primary"
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                  pkg.highlighted ? "text-accent-400" : "text-accent"
                }`}
              >
                {pkg.name}
              </p>
              <p className="mt-4 font-heading text-2xl font-bold sm:text-3xl">
                {pkg.priceHint}
              </p>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  pkg.highlighted ? "text-secondary/80" : "text-muted"
                }`}
              >
                {pkg.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        pkg.highlighted
                          ? "bg-accent/20 text-accent-400"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink
                  href="/devis"
                  variant={pkg.highlighted ? "accent" : "secondary"}
                  size="md"
                  className="w-full !justify-center"
                >
                  {siteConfig.brand.ctaPrimary}
                </ButtonLink>
              </div>
            </motion.article>
          ))}
        </Stagger>

        <p className="mt-10 text-center text-sm text-muted">
          Devis gratuit · Sans engagement · Réponse sous 24&nbsp;h ouvrées
        </p>
      </div>
    </section>
  );
}
