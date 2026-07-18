"use client";

import {
  TURNOVER_VERIFICATION_IMAGE,
  TURNOVER_MENAGE_IMAGE,
  TURNOVER_PROFONDEUR_IMAGE,
  TURNOVER_DEGRADATIONS_IMAGE,
} from "@/lib/images";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ClipboardCheck,
  BedDouble,
  SprayCan,
  ShieldCheck,
  ChevronDown,
  Check,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, staggerItem } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

type TurnoverCard = {
  icon: LucideIcon;
  image: string;
  title: string;
  intro: string;
  bullets: string[];
};

const cards: TurnoverCard[] = [
  {
    icon: ClipboardCheck,
    image: TURNOVER_VERIFICATION_IMAGE,
    title: "Vérification après départ",
    intro: "Contrôle attentif de l'état du logement avant le prochain séjour.",
    bullets: [
      "Clés et équipements vérifiés",
      "Anomalies signalées immédiatement",
      "Logement prêt pour l'arrivée suivante",
    ],
  },
  {
    icon: BedDouble,
    image: TURNOVER_MENAGE_IMAGE,
    title: "Ménage entre chaque séjour",
    intro: "Nettoyage complet aux standards Airbnb et Booking.",
    bullets: [
      "Pièces de vie, cuisine et salle de bain",
      "Remise en ordre du logement",
      "Linge et consommables préparés",
    ],
  },
  {
    icon: SprayCan,
    image: TURNOVER_PROFONDEUR_IMAGE,
    title: "Nettoyage approfondi",
    intro: "Deep cleaning ponctuel sur demande du propriétaire.",
    bullets: [
      "Équipements et zones peu accessibles",
      "Demandes particulières prises en charge",
      "Programmable selon vos besoins",
    ],
  },
  {
    icon: ShieldCheck,
    image: TURNOVER_DEGRADATIONS_IMAGE,
    title: "Suivi des dégradations",
    intro: "Dossier et démarches auprès des plateformes, sans stress.",
    bullets: [
      "Photos et justificatifs transmis",
      "Demande de prise en charge (ex. AirCover)",
      "Vous êtes accompagné à chaque étape",
    ],
  },
];

function TurnoverCardItem({
  card,
  open,
  onToggle,
}: {
  card: TurnoverCard;
  open: boolean;
  onToggle: () => void;
}) {
  const Icon = card.icon;

  return (
    <motion.article
      variants={staggerItem}
      className="group flex flex-col overflow-hidden rounded-xl border border-secondary/70 bg-white shadow-soft transition-shadow duration-300 hover:shadow-card"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={card.image}
          alt={`${card.title}, Atria Solutions Paris`}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-accent shadow-soft">
          <Icon className="h-4 w-4" strokeWidth={1.75} />
        </span>
      </div>

      <div className="flex flex-col p-4 sm:p-5">
        <h3 className="font-heading text-[0.95rem] font-bold leading-snug text-primary">
          {card.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
          {card.intro}
        </p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 space-y-2 overflow-hidden"
            >
              {card.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-ink">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="mt-3 inline-flex min-h-10 items-center gap-1 self-start text-sm font-semibold text-accent transition-colors hover:text-accent-600"
        >
          {open ? "Réduire" : "Voir le détail"}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            strokeWidth={2}
          />
        </button>
      </div>
    </motion.article>
  );
}

export function AirbnbTurnover() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="airbnb" className="relative bg-white py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Location courte durée"
          title="Nous préparons vos logements entre chaque séjour"
          description="Vérification, ménage aux standards des plateformes et suivi, pour que chaque arrivée soit impeccable."
        />

        <Stagger
          stagger={0.08}
          className="mt-12 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card, i) => (
            <TurnoverCardItem
              key={card.title}
              card={card}
              open={openIndex === i}
              onToggle={() => setOpenIndex((prev) => (prev === i ? null : i))}
            />
          ))}
        </Stagger>

        <div className="mt-12 flex justify-center">
          <ButtonLink href="/devis" variant="accent">
            {siteConfig.brand.ctaPrimary}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
