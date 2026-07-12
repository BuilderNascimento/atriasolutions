"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-secondary-100 py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="Questions fréquentes"
              title="Protéger son patrimoine, en toute sérénité"
              description="Les réponses aux questions que se posent les propriétaires qui nous confient leurs biens."
            />
            <div className="mt-8 hidden lg:block">
              <ButtonLink href="/contact" variant="primary">
                Poser une question
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-7">
            <dl className="divide-y divide-secondary">
              {faqItems.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="py-2">
                    <dt>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 py-4 text-left"
                      >
                        <span className="font-heading text-base font-bold text-primary sm:text-lg">
                          {item.question}
                        </span>
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen
                              ? "rotate-45 bg-accent text-white"
                              : "bg-white text-primary ring-1 ring-secondary"
                          }`}
                        >
                          <Plus className="h-4 w-4" strokeWidth={2} />
                        </span>
                      </button>
                    </dt>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.dd
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 pr-12 text-sm leading-relaxed text-muted sm:text-base">
                            {item.answer}
                          </p>
                        </motion.dd>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
