"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="container-x relative">
        <SectionHeading
          light
          eyebrow="Notre méthode"
          title="Un processus simple et maîtrisé"
          description="Cinq étapes claires, de votre première prise de contact jusqu'au contrôle qualité final."
        />

        <div className="relative mt-20">
          <div className="absolute left-6 top-0 h-full w-px bg-white/15 lg:left-0 lg:top-[3.25rem] lg:h-px lg:w-full" />
          <motion.div
            initial={{ scaleX: 0, scaleY: 0 }}
            whileInView={{ scaleX: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-6 top-0 h-full w-px origin-top bg-accent lg:left-0 lg:top-[3.25rem] lg:h-px lg:w-full lg:origin-left"
          />

          <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-5 pl-0 lg:block"
              >
                <div className="relative z-10 flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-white/20 bg-primary font-heading text-lg font-bold text-accent-400 shadow-lg">
                  {step.number}
                </div>
                <div className="lg:mt-7">
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary/70">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
