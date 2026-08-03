"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/content";

const backgrounds = [
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=2000&q=80",
];

function highlightQuote(quote: string, highlight?: string) {
  if (!highlight || !quote.includes(highlight)) return `« ${quote} »`;
  const parts = quote.split(highlight);
  return (
    <>
      « {parts[0]}
      <strong className="font-semibold text-primary">{highlight}</strong>
      {parts[1]} »
    </>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total]
  );

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const current = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-secondary-100/50 py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-10">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-secondary bg-white sm:h-16 sm:w-16">
              <span className="font-heading text-lg font-bold text-primary">
                A.
              </span>
            </span>
            <div>
              <span className="mb-3 block h-px w-12 bg-primary/20" />
              <h2 className="max-w-xl font-heading text-xl font-bold leading-snug text-primary sm:text-2xl lg:text-[1.75rem]">
                Ils apprécient la qualité de notre ménage&nbsp;:
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-10 sm:mt-14">
          {/* Photo: toujours visible, surtout sur mobile */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/9] lg:aspect-[21/9]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={backgrounds[index % backgrounds.length]}
                  alt="Appartement parisien entretenu par Atria Solutions"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 80rem"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 sm:bg-white/10" />
              </motion.div>
            </AnimatePresence>

            {/* Carte overlay uniquement desktop */}
            <div className="absolute inset-0 hidden items-center justify-center p-8 md:flex">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={`desk-${current.name}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full max-w-lg rounded-xl bg-white/95 p-8 shadow-[0_8px_40px_rgba(14,36,56,0.08)] backdrop-blur-sm"
                >
                  <TestimonialBody current={current} />
                </motion.figure>
              </AnimatePresence>
            </div>
          </div>

          {/* Carte mobile: sous la photo, texte complet */}
          <div className="relative z-10 -mt-10 px-3 md:hidden">
            <AnimatePresence mode="wait">
              <motion.figure
                key={`mob-${current.name}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="rounded-xl border border-secondary/70 bg-white p-5 shadow-card"
              >
                <TestimonialBody current={current} />
              </motion.figure>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Témoignage précédent"
            className="absolute left-2 top-[18%] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/95 text-primary shadow-soft transition-all hover:bg-white sm:left-4 sm:top-1/2 sm:h-11 sm:w-11 md:left-6"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Témoignage suivant"
            className="absolute right-2 top-[18%] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/95 text-primary shadow-soft transition-all hover:bg-white sm:right-4 sm:top-1/2 sm:h-11 sm:w-11 md:right-6"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Voir le témoignage de ${t.name}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-primary" : "w-4 bg-primary/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialBody({
  current,
}: {
  current: (typeof testimonials)[number];
}) {
  return (
    <>
      <figcaption className="flex items-center gap-3 sm:gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-secondary-100 font-heading text-sm font-bold text-primary sm:h-12 sm:w-12">
          {current.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
        <span className="min-w-0">
          <span className="block font-heading text-sm font-bold text-primary sm:text-base">
            {current.name}
          </span>
          <span className="block text-xs text-muted sm:text-sm">
            {current.location}
          </span>
        </span>
      </figcaption>

      <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-4 sm:gap-3">
        <div className="flex gap-0.5 text-accent">
          {Array.from({ length: current.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
          ))}
        </div>
        <span className="text-xs text-muted sm:text-sm">{current.stayType}</span>
      </div>

      <blockquote className="mt-4 text-sm leading-relaxed text-ink sm:mt-5 sm:text-[0.95rem] sm:leading-[1.75]">
        {highlightQuote(current.quote, current.highlight)}
      </blockquote>
    </>
  );
}
