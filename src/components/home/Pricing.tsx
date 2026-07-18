"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, staggerItem } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { serviceFormulas } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function Pricing() {
  return (
    <section id="formules" className="relative bg-secondary-100 py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Nos formules"
          title="Trois façons de travailler avec nous"
          description="Choisissez le rythme qui vous convient. On adapte chaque intervention à votre espace à Paris. Devis gratuit, sans engagement."
        />

        <Stagger
          stagger={0.1}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {serviceFormulas.map((formula) => (
            <motion.article
              key={formula.name}
              variants={staggerItem}
              className={`flex h-full flex-col rounded-2xl p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
                formula.highlighted
                  ? "bg-primary text-white ring-2 ring-accent"
                  : "bg-white text-primary"
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                  formula.highlighted ? "text-accent-400" : "text-accent"
                }`}
              >
                {formula.name}
              </p>
              <p className="mt-4 font-heading text-2xl font-bold sm:text-3xl">
                {formula.subtitle}
              </p>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  formula.highlighted ? "text-secondary/80" : "text-muted"
                }`}
              >
                {formula.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {formula.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        formula.highlighted
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
                  variant={formula.highlighted ? "accent" : "secondary"}
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
          Devis gratuit, sans engagement. Réponse sous 24&nbsp;h ouvrées
        </p>
      </div>
    </section>
  );
}
