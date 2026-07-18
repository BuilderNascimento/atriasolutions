"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { siteConfig } from "@/lib/site";

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: siteConfig.stats.apartments, prefix: "+", label: "Espaces entretenus" },
  { value: siteConfig.stats.clients, prefix: "+", label: "Clients satisfaits" },
  { value: siteConfig.stats.projects, prefix: "+", label: "Interventions réalisées" },
  { value: siteConfig.stats.years, label: "Ans d'expérience" },
];

function formatStat(value: number) {
  return value.toLocaleString("fr-FR");
}

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return <span ref={ref}>{formatStat(display)}</span>;
}

export function Stats() {
  return (
    <section className="relative bg-white py-16 lg:py-20">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-y-8 rounded-2xl border border-secondary/60 bg-secondary-100/50 px-5 py-10 sm:px-8 lg:grid-cols-4 lg:gap-y-0 lg:px-10 lg:py-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <p className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-[2.75rem]">
                {stat.prefix}
                <Counter value={stat.value} />
                {stat.suffix}
              </p>
              <p className="mt-2 text-xs font-medium text-muted sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
