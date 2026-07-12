"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceAreas } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";

export function ServiceArea() {
  return (
    <section id="zone" className="relative bg-white py-24 lg:py-32">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Zone d'intervention"
              title="Paris & toute l'Île-de-France"
              description="Nous protégeons les patrimoines immobiliers à Paris et dans toute l'Île-de-France — au plus près de vos biens."
            />

            <div className="mt-8 flex flex-wrap gap-2.5">
              {serviceAreas.map((zone, i) => (
                <motion.span
                  key={zone.code}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group inline-flex items-center gap-2 rounded-full border border-secondary bg-white px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-accent hover:bg-accent/5"
                >
                  <MapPin className="h-4 w-4 text-accent" strokeWidth={1.75} />
                  {zone.name}
                  <span className="text-xs text-muted">({zone.code})</span>
                </motion.span>
              ))}
            </div>

            <div className="mt-10">
              <ButtonLink href="/devis" variant="accent">
                Protéger mon bien
              </ButtonLink>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl border border-secondary/70 shadow-card"
          >
            <div className="aspect-[4/3] w-full">
              <iframe
                title="Zone d'intervention Atria Solutions — Paris et Île-de-France"
                src="https://www.openstreetmap.org/export/embed.html?bbox=1.8%2C48.6%2C2.8%2C49.05&layer=mapnik&marker=48.8566%2C2.3522"
                className="h-full w-full grayscale-[35%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
