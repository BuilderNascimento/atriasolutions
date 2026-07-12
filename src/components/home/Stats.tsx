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
  { value: siteConfig.stats.apartments, prefix: "+", label: "Appartements nettoyés" },
  { value: siteConfig.stats.clients, prefix: "+", label: "Clients satisfaits" },
  { value: siteConfig.stats.projects, prefix: "+", label: "Projets réalisés" },
  { value: siteConfig.stats.years, label: "Ans d'expérience" },
];

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
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return <span ref={ref}>{display}</span>;
}

export function Stats() {
  return (
    <section className="relative bg-white py-20 lg:py-24">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-y-12 rounded-3xl border border-secondary/60 bg-secondary-100/50 px-6 py-14 lg:grid-cols-4 lg:px-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <p className="font-heading text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
                {stat.prefix}
                <Counter value={stat.value} />
                {stat.suffix}
              </p>
              <p className="mt-3 text-sm font-medium text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
