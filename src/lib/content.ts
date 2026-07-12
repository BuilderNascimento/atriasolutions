import {
  SERVICE_APPARTEMENT_IMAGE,
  SERVICE_MAISON_IMAGE,
  SERVICE_BUREAUX_IMAGE,
  SERVICE_FIN_CHANTIER_IMAGE,
  SERVICE_PROFONDEUR_IMAGE,
  SERVICE_RECURRENT_IMAGE,
} from "@/lib/images";
import {
  Sparkles,
  Home,
  Building2,
  HardHat,
  Waves,
  CalendarClock,
  ShieldCheck,
  Zap,
  Users,
  Leaf,
  BadgeCheck,
  Award,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export type PartnerType = {
  name: string;
  logo: "airbnb" | "booking" | "abritel" | "text";
};

export const partnerTypes: PartnerType[] = [
  { name: "Airbnb", logo: "airbnb" },
  { name: "Booking", logo: "booking" },
  { name: "Abritel", logo: "abritel" },
  { name: "Agences immobilières", logo: "text" },
  { name: "Conciergeries", logo: "text" },
  { name: "Hôtels", logo: "text" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "nettoyage-appartement",
    title: "Nettoyage d'appartement",
    short: "La valeur de votre appartement, préservée à chaque passage.",
    description:
      "Chaque intervention protège votre appartement parisien : matériaux nobles préservés, finitions impeccables, réputation entretenue. Bien plus qu'un ménage — une sauvegarde de votre patrimoine.",
    icon: Sparkles,
    image: SERVICE_APPARTEMENT_IMAGE,
    features: [
      "Séjour, chambres et couloirs",
      "Cuisine dégraissée en profondeur",
      "Sanitaires désinfectés",
      "Vitres intérieures",
    ],
  },
  {
    slug: "nettoyage-maison",
    title: "Nettoyage de maison",
    short: "Votre résidence protégée, pièce après pièce.",
    description:
      "Maisons et hôtels particuliers confiés à une équipe dédiée. Notre protocole préserve chaque surface, chaque matériau — pour que votre bien conserve sa valeur et son éclat.",
    icon: Home,
    image: SERVICE_MAISON_IMAGE,
    features: [
      "Toutes pièces et étages",
      "Matériaux nobles préservés",
      "Équipe dédiée",
      "Produits adaptés aux surfaces",
    ],
  },
  {
    slug: "nettoyage-bureaux",
    title: "Nettoyage de bureaux",
    short: "L'image de votre entreprise, protégée au quotidien.",
    description:
      "Vos bureaux reflètent votre standing. Nous protégeons cette image avec un entretien discret, régulier et irréprochable — pour que chaque visiteur perçoive le professionnalisme de votre marque.",
    icon: Building2,
    image: SERVICE_BUREAUX_IMAGE,
    features: [
      "Postes de travail et open spaces",
      "Salles de réunion",
      "Sanitaires et cuisines",
      "Horaires flexibles",
    ],
  },
  {
    slug: "nettoyage-fin-de-chantier",
    title: "Nettoyage de fin de chantier",
    short: "Votre bien livré dans un état irréprochable.",
    description:
      "Après vos travaux, nous restituons un espace prêt à valoriser votre patrimoine. Chaque détail compte pour la présentation à vos acquéreurs ou locataires.",
    icon: HardHat,
    image: SERVICE_FIN_CHANTIER_IMAGE,
    features: [
      "Dépoussiérage complet",
      "Retrait des résidus de travaux",
      "Vitres et menuiseries",
      "Livraison prête à l'emploi",
    ],
  },
  {
    slug: "nettoyage-en-profondeur",
    title: "Nettoyage en profondeur",
    short: "Une remise en état qui préserve la valeur de votre bien.",
    description:
      "Un entretien en profondeur pour les biens qui exigent une attention particulière. Nous protégeons vos surfaces les plus précieuses et prolongeons leur durée de vie.",
    icon: Waves,
    image: SERVICE_PROFONDEUR_IMAGE,
    features: [
      "Détartrage et dégraissage",
      "Désinfection des surfaces",
      "Plinthes, interrupteurs, poignées",
      "Électroménager intérieur",
    ],
  },
  {
    slug: "nettoyage-recurrent",
    title: "Nettoyage récurrent",
    short: "Votre patrimoine entretenu en continu, sans effort.",
    description:
      "Un suivi régulier pour que votre bien ne perde jamais de sa valeur. Idéal pour les rotations Airbnb, les résidences et les portefeuilles immobiliers exigeants.",
    icon: CalendarClock,
    image: SERVICE_RECURRENT_IMAGE,
    features: [
      "Rotations Airbnb",
      "Planning sur mesure",
      "Gestion du linge en option",
      "Interlocuteur dédié",
    ],
  },
];

export type Advantage = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const advantages: Advantage[] = [
  {
    title: "Équipe professionnelle",
    description:
      "Des agents formés, en uniforme et encadrés, sélectionnés pour leur rigueur et leur savoir-faire.",
    icon: Users,
  },
  {
    title: "Réponse rapide",
    description:
      "Une prise en charge réactive et des créneaux disponibles, y compris pour les demandes urgentes.",
    icon: Zap,
  },
  {
    title: "Fiabilité",
    description:
      "Des prestations ponctuelles et constantes, sur lesquelles vous pouvez compter à chaque passage.",
    icon: ShieldCheck,
  },
  {
    title: "Produits éco-responsables",
    description:
      "Des produits respectueux de la santé et de l'environnement, sans compromis sur l'efficacité.",
    icon: Leaf,
  },
  {
    title: "Contrôle qualité",
    description:
      "Une inspection systématique après chaque intervention pour garantir un résultat irréprochable.",
    icon: BadgeCheck,
  },
  {
    title: "Assuré",
    description:
      "Société assurée en responsabilité civile professionnelle pour une tranquillité totale.",
    icon: Award,
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Évaluation",
    description:
      "Vous nous confiez votre bien. Nous analysons vos besoins et évaluons comment mieux protéger votre patrimoine.",
  },
  {
    number: "02",
    title: "Proposition",
    description:
      "Nous établissons un plan de protection sur mesure, clair et transparent, sans engagement.",
  },
  {
    number: "03",
    title: "Planification",
    description:
      "Nous convenons des créneaux et mettons en place le protocole adapté à votre bien.",
  },
  {
    number: "04",
    title: "Intervention",
    description:
      "Notre équipe intervient avec rigueur et discrétion, selon un protocole précis.",
  },
  {
    number: "05",
    title: "Contrôle",
    description:
      "Nous vérifions chaque détail et validons que votre bien est protégé et prêt.",
  },
];

export type Testimonial = {
  name: string;
  location: string;
  stayType: string;
  quote: string;
  highlight?: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Camille Laurent",
    location: "Le Marais, Paris",
    stayType: "Location courte durée",
    quote:
      "L'appartement est magnifique, impeccablement propre et parfaitement préparé à chaque arrivée. Confortable et accueillant dès l'entrée dans les lieux. Mes voyageurs notent systématiquement la propreté 5 étoiles.",
    highlight: "impeccablement propre",
    rating: 5,
  },
  {
    name: "Julien Mercier",
    location: "Property Manager · Paris 11e",
    stayType: "40 logements gérés",
    quote:
      "Une équipe fiable, un interlocuteur unique. La gestion de mes rotations est enfin sereine — qualité constante, ponctualité irréprochable, logements toujours prêts pour le prochain séjour.",
    highlight: "qualité constante",
    rating: 5,
  },
  {
    name: "Sophie Nguyen",
    location: "Agence immobilière · Paris 16e",
    stayType: "Fins de chantier",
    quote:
      "Des espaces livrés parfaitement propres, prêts à présenter aux acquéreurs. Un vrai gain de temps et une image soignée qui reflète notre exigence.",
    highlight: "parfaitement propres",
    rating: 5,
  },
  {
    name: "Marc Dubois",
    location: "Bureaux · Paris 8e",
    stayType: "Entretien régulier",
    quote:
      "Discrétion, ponctualité et résultat irréprochable. Nos espaces sont toujours accueillants pour nos collaborateurs et nos clients.",
    highlight: "résultat irréprochable",
    rating: 5,
  },
];

export type TrustPillar = {
  title: string;
  items: string[];
};

export const trustPillars: TrustPillar[] = [
  {
    title: "Côté voyageur",
    items: [
      "Un bien impeccable qui inspire confiance dès l'arrivée",
      "Standards de propreté qui protègent votre réputation",
      "Une expérience premium qui se traduit en avis 5 étoiles",
    ],
  },
  {
    title: "Côté propriétaire",
    items: [
      "Vérification systématique après chaque séjour",
      "Protection contre les dégradations et pertes de valeur",
      "Un patrimoine toujours prêt, toujours valorisé",
    ],
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Dans quelles zones intervenez-vous ?",
    answer:
      "Nous intervenons à Paris intra-muros et dans toute l'Île-de-France (75, 92, 93, 94 et proche couronne). Contactez-nous pour vérifier la disponibilité sur votre adresse.",
  },
  {
    question: "Comment protéger mon bien avec Atria ?",
    answer:
      "Il vous suffit de remplir notre formulaire ou de nous contacter par téléphone. Nous évaluons votre patrimoine et vous proposons un plan de protection sur mesure, clair et sans engagement.",
  },
  {
    question: "Proposez-vous la protection des logements Airbnb ?",
    answer:
      "Oui. Nous protégeons votre patrimoine locatif avec vérification après chaque séjour, ménage aux standards des plateformes, gestion du linge et suivi des éventuelles dégradations.",
  },
  {
    question: "Mon bien est-il couvert en cas d'incident ?",
    answer:
      "Atria Solutions est assurée en responsabilité civile professionnelle. Chaque intervention est encadrée, sécurisée et réalisée par des équipes formées.",
  },
  {
    question: "Peut-on planifier des interventions récurrentes ?",
    answer:
      "Absolument. Nous proposons des plannings sur mesure : quotidien, hebdomadaire, mensuel ou à la demande, avec un interlocuteur dédié.",
  },
];

export type ServiceAreaZone = {
  name: string;
  code: string;
};

export const serviceAreas: ServiceAreaZone[] = [
  { name: "Paris", code: "75" },
  { name: "Hauts-de-Seine", code: "92" },
  { name: "Seine-Saint-Denis", code: "93" },
  { name: "Val-de-Marne", code: "94" },
  { name: "Yvelines", code: "78" },
  { name: "Essonne", code: "91" },
  { name: "Val-d'Oise", code: "95" },
  { name: "Seine-et-Marne", code: "77" },
];
