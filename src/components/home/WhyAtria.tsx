"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, staggerItem } from "@/components/ui/Reveal";
import { advantages } from "@/lib/content";

export function WhyAtria() {
  return (
    <section id="pourquoi" className="relative bg-white py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Pourquoi Atria"
          title="L'exigence du détail, à chaque intervention"
          description="Une approche rigoureuse et un savoir-faire qui font la différence sur chaque prestation, du premier contact au contrôle final."
        />

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl border border-secondary/70 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-accent/5 transition-transform duration-500 group-hover:scale-150" />
                <span className="relative flex h-13 w-13 items-center justify-center rounded-xl bg-secondary-100 text-primary transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="relative mt-6 text-lg font-bold text-primary">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
