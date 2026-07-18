"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star, ShieldCheck, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=2400&q=80"
          alt="Intérieur d'appartement lumineux et soigné à Paris"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/90"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(30,142,90,0.18),transparent_55%)]" />

      <div className="container-x relative z-10 pt-28 pb-16">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-accent-400" />
            Paris · Proche couronne
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-6 text-4xl font-bold leading-[1.05] text-white text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Un ménage soigné, digne de Paris.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-secondary/90 sm:text-xl"
          >
            Appartements, maisons, bureaux et logements Airbnb —
            une équipe professionnelle pour des espaces propres et accueillants.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <ButtonLink href="/devis" variant="accent">
              {siteConfig.brand.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
            </ButtonLink>
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="!bg-white/10 !text-white !ring-white/25 backdrop-blur-sm hover:!bg-white/20"
            >
              {siteConfig.brand.ctaSecondary}
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/80"
          >
            <span className="inline-flex items-center gap-2">
              <span className="flex text-accent-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span>+{siteConfig.stats.clients} clients satisfaits</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4.5 w-4.5 text-accent-400" strokeWidth={1.75} />
              Résultat soigné
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4.5 w-4.5 text-accent-400" strokeWidth={1.75} />
              Société assurée · RC Pro
            </span>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  );
}
