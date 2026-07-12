"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, staggerItem } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="relative bg-secondary-100 py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Témoignages"
          title="La confiance de nos clients"
          description="Hôtes, gestionnaires et entreprises nous confient l'entretien de leurs espaces au quotidien."
        />

        <Stagger className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-soft transition-shadow duration-300 hover:shadow-card"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-secondary" strokeWidth={1.5} />
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 fill-current" />
                ))}
              </div>
              <blockquote className="relative mt-5 text-base leading-relaxed text-ink">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-white">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span>
                  <span className="block text-sm font-bold text-primary">{t.name}</span>
                  <span className="block text-xs text-muted">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
