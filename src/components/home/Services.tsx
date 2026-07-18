"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/content";

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section id="services" className="relative bg-secondary-100 py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Nos services"
            title="Ménage et gestion, adaptés à chaque espace"
            description="Survolez un service pour le découvrir. Appartement, maison, bureau ou location : on s'adapte à votre besoin."
          />
          <ButtonLink href="/services" variant="primary" size="md" className="shrink-0">
            Tous les services
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </ButtonLink>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:gap-6">
            {/* Panneau image interactif */}
            <div className="relative min-h-[22rem] overflow-hidden rounded-2xl bg-primary shadow-card lg:col-span-7 lg:min-h-[32rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.slug}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.image}
                    alt={`${active.title}, Atria Solutions Paris`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${active.slug}-copy`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                  >
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                      <ActiveIcon className="h-3.5 w-3.5" strokeWidth={1.75} />
                      {active.title}
                    </span>
                    <p className="mt-4 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
                      {active.short}
                    </p>
                    <ul className="mt-5 hidden gap-x-6 gap-y-2 sm:grid sm:grid-cols-2">
                      {active.features.slice(0, 4).map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-white/80"
                        >
                          <Check className="h-3.5 w-3.5 shrink-0 text-accent-400" strokeWidth={2.5} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services#${active.slug}`}
                      className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent-400 transition-colors hover:text-white"
                    >
                      En savoir plus
                      <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Liste interactive */}
            <div className="flex flex-col gap-2 lg:col-span-5">
              {services.map((service, i) => {
                const Icon = service.icon;
                const isActive = i === activeIndex;

                return (
                  <button
                    key={service.slug}
                    type="button"
                    onMouseEnter={() => setActiveIndex(i)}
                    onFocus={() => setActiveIndex(i)}
                    onClick={() => setActiveIndex(i)}
                    aria-pressed={isActive}
                    className={`group flex w-full items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition-all duration-300 sm:px-5 sm:py-4 ${
                      isActive
                        ? "border-accent/40 bg-white shadow-card"
                        : "border-transparent bg-white/60 hover:border-secondary hover:bg-white hover:shadow-soft"
                    }`}
                  >
                    <span
                      className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-16 ${
                        isActive ? "ring-2 ring-accent/50" : ""
                      }`}
                    >
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        loading="lazy"
                        sizes="64px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <Icon
                          className={`h-4 w-4 shrink-0 ${
                            isActive ? "text-accent" : "text-muted"
                          }`}
                          strokeWidth={1.75}
                        />
                        <span
                          className={`truncate font-heading text-sm font-bold sm:text-base ${
                            isActive ? "text-primary" : "text-primary/80"
                          }`}
                        >
                          {service.title}
                        </span>
                      </span>
                      <span className="mt-1 line-clamp-1 text-xs text-muted sm:text-sm">
                        {service.short}
                      </span>
                    </span>

                    <ArrowUpRight
                      className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                        isActive
                          ? "translate-x-0.5 -translate-y-0.5 text-accent"
                          : "text-muted/50 group-hover:text-muted"
                      }`}
                      strokeWidth={1.75}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
