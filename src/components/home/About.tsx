"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  "Professionnalisme et discrétion",
  "Souci du détail à chaque étape",
  "Qualité constante et contrôlée",
  "Fiabilité et ponctualité",
];

export function About() {
  return (
    <section id="a-propos" className="relative bg-white py-24 lg:py-32">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
                  alt="Agent d'entretien professionnel Atria Solutions"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-6 -right-4 rounded-2xl bg-primary p-6 text-white shadow-float sm:-right-8 sm:p-7"
            >
              <p className="font-heading text-3xl font-bold text-accent-400">100%</p>
              <p className="mt-1 max-w-[9rem] text-sm text-secondary/80">
                Satisfaction client, notre priorité absolue
              </p>
            </motion.div>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="À propos d'Atria"
              title="Une entreprise pensée pour l'excellence"
              description="Atria Solutions accompagne hôtes Airbnb, gestionnaires, agences et entreprises avec une seule ambition : offrir un service de nettoyage irréprochable, fiable et haut de gamme."
            />

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar, i) => (
                <motion.li
                  key={pillar}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-3 text-sm font-medium text-primary"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  {pillar}
                </motion.li>
              ))}
            </ul>

            <div className="mt-10">
              <ButtonLink href="/a-propos" variant="primary">
                En savoir plus sur nous
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
