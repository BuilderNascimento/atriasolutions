"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, staggerItem } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="relative bg-secondary-100 py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Nos services"
            title="Une prestation pour chaque espace"
            description="Des solutions de nettoyage sur mesure, pensées pour les professionnels comme pour les particuliers les plus exigeants."
          />
          <ButtonLink href="/services" variant="primary" size="md" className="shrink-0">
            Tous les services
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </ButtonLink>
        </div>

        <Stagger
          stagger={0.08}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article key={service.slug} variants={staggerItem}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl glass text-primary shadow-soft">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="flex items-center justify-between gap-2 text-lg font-bold text-primary">
                      {service.title}
                      <ArrowUpRight
                        className="h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                        strokeWidth={1.75}
                      />
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {service.short}
                    </p>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
