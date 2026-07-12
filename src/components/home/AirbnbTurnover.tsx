"use client";

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

type TurnoverCard = {
  icon: LucideIcon;
  image: string;
  title: string;
  intro: string;
  bullets: string[];
  outro: string;
};

const cards: TurnoverCard[] = [
  {
    icon: ClipboardCheck,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    title: "Vérification du logement après le départ des voyageurs",
    intro:
      "Après chaque séjour, notre équipe intervient dans le logement et commence par effectuer une vérification attentive de son état général :",
    bullets: [
      "Vérification que les clés sont bien présentes",
      "Contrôle de l'état du logement et des équipements",
      "Signalement immédiat d'éventuelles anomalies ou dégradations",
    ],
    outro:
      "Ces étapes permettent de s'assurer que votre logement est en bon état pour accueillir les prochains voyageurs dans de bonnes conditions.",
  },
  {
    icon: BedDouble,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
    title: "Ménage professionnel entre chaque séjour",
    intro:
      "Après la vérification du logement, notre équipe réalise un ménage complet et standardisé :",
    bullets: [
      "Nettoyage des pièces de vie et chambres",
      "Entretien de la cuisine et de la salle de bain",
      "Remise en ordre du logement",
      "Préparation du linge (draps, serviettes, torchons) et consommables",
    ],
    outro:
      "Ce ménage entre chaque séjour permet de garantir un niveau de propreté conforme aux standards des plateformes de location courte durée comme Airbnb ou Booking.",
  },
  {
    icon: SprayCan,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
    title: "Nettoyage approfondi sur demande du propriétaire",
    intro:
      "En complément du ménage standard, nous pouvons organiser ponctuellement un « deep cleaning » afin d'approfondir certains éléments du logement :",
    bullets: [
      "Nettoyage plus poussé des équipements",
      "Entretien des zones moins accessibles",
      "Demandes particulières du propriétaire",
    ],
    outro:
      "Cette prestation peut être programmée de manière ponctuelle ou régulière, selon vos besoins.",
  },
  {
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&w=900&q=80",
    title: "Gestion des dégradations et démarches auprès des plateformes",
    intro:
      "En cas de dégradation constatée après un séjour, nous prenons en charge l'ensemble des démarches administratives :",
    bullets: [
      "Analyse des dégâts et constitution du dossier",
      "Transmission des photos et justificatifs",
      "Demande de prise en charge auprès de la plateforme concernée (ex : AirCover sur Airbnb)",
    ],
    outro:
      "Notre objectif est de protéger votre logement et défendre vos intérêts, tout en limitant les démarches.",
  },
];

function TurnoverCardItem({ card }: { card: TurnoverCard }) {
  const [open, setOpen] = useState(false);
  const Icon = card.icon;

  return (
    <motion.article
      variants={staggerItem}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-secondary/70 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
        <span className="absolute -bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-accent shadow-soft ring-1 ring-secondary/60">
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 pt-8">
        <h3 className="font-heading text-base font-bold leading-snug text-primary">
          {card.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{card.intro}</p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-4 inline-flex items-center gap-1.5 self-start border-b border-accent/40 pb-0.5 text-sm font-semibold text-accent transition-colors hover:border-accent"
        >
          {open ? "Réduire" : "Lire plus"}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            strokeWidth={2}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <ul className="mt-4 space-y-2.5">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-ink">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-muted">{card.outro}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export function AirbnbTurnover() {
  return (
    <section id="airbnb" className="relative bg-white py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Conciergerie Airbnb"
          title="Propreté et gestion des départs des locations Airbnb à Paris"
          description="Un accompagnement complet entre chaque séjour : vérification, ménage aux standards des plateformes, nettoyage approfondi et gestion des dégradations."
        />

        <Stagger
          stagger={0.1}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card) => (
            <TurnoverCardItem key={card.title} card={card} />
          ))}
        </Stagger>

        <div className="mt-14 flex justify-center">
          <ButtonLink href="/devis" variant="accent">
            Confier la gestion de mon Airbnb
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
