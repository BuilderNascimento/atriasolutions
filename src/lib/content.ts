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
    short: "Un appartement propre, accueillant et prêt à vivre.",
    description:
      "Nous prenons soin de votre appartement parisien : pièces de vie, cuisine, sanitaires et détails qui font la différence. Un résultat net et agréable, à chaque passage.",
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
    short: "Toute la maison entretenue, pièce après pièce.",
    description:
      "Maisons et hôtels particuliers confiés à une équipe dédiée. On adapte le travail à chaque surface et à chaque pièce, pour un intérieur propre et soigné.",
    icon: Home,
    image: SERVICE_MAISON_IMAGE,
    features: [
      "Toutes pièces et étages",
      "Matériaux nobles respectés",
      "Équipe dédiée",
      "Produits adaptés aux surfaces",
    ],
  },
  {
    slug: "nettoyage-bureaux",
    title: "Nettoyage de bureaux",
    short: "Des bureaux propres et agréables, tous les jours.",
    description:
      "Vos bureaux accueillent collaborateurs et clients. On assure un entretien discret, régulier et soigné, pour un environnement confortable au travail.",
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
    short: "Un espace livré propre, prêt à être habité ou présenté.",
    description:
      "Après vos travaux, on enlève poussières et résidus pour rendre un lieu propre, prêt pour l'emménagement, une visite ou la location.",
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
    short: "Une remise en état complète, dans les moindres détails.",
    description:
      "Idéal pour un grand ménage, un emménagement ou une remise à neuf. Nous traitons les zones souvent oubliées et redonnons de l'éclat à votre intérieur.",
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
    short: "Un entretien régulier, sans que vous ayez à y penser.",
    description:
      "Planning sur mesure pour garder votre logement ou vos bureaux propres toute l'année. Idéal aussi pour les rotations Airbnb et les résidences.",
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
      "Une prise en charge réactive et des créneaux disponibles, y compris pour les demandes urgentes. Réponse sous 24 h ouvrées.",
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
      "Après chaque intervention, on vérifie le résultat pour s'assurer que tout est bien fait.",
    icon: BadgeCheck,
  },
  {
    title: "Discrétion",
    description:
      "Nous intervenons avec tact et respect, dans des espaces privés comme professionnels.",
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
    title: "Échange",
    description:
      "Vous nous décrivez votre besoin. Nous écoutons, posons les bonnes questions et clarifions le périmètre.",
  },
  {
    number: "02",
    title: "Devis",
    description:
      "On vous envoie une proposition claire, adaptée à votre espace, sans engagement.",
  },
  {
    number: "03",
    title: "Planification",
    description:
      "Nous convenons d'un créneau qui vous convient et préparons l'intervention.",
  },
  {
    number: "04",
    title: "Intervention",
    description:
      "Notre équipe arrive à l'heure, équipe et produits adaptés, et travaille avec soin et discrétion.",
  },
  {
    number: "05",
    title: "Contrôle",
    description:
      "Nous vérifions chaque détail avant de vous rendre un espace propre et prêt.",
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
    location: "Property Manager, Paris 11e",
    stayType: "40 logements gérés",
    quote:
      "Une équipe fiable, un interlocuteur unique. La gestion de mes rotations est enfin sereine : qualité constante, ponctualité, logements toujours prêts pour le prochain séjour.",
    highlight: "qualité constante",
    rating: 5,
  },
  {
    name: "Sophie Nguyen",
    location: "Agence immobilière, Paris 16e",
    stayType: "Fins de chantier",
    quote:
      "Des espaces livrés parfaitement propres, prêts à présenter aux acquéreurs. Un vrai gain de temps et une image soignée qui reflète notre exigence.",
    highlight: "parfaitement propres",
    rating: 5,
  },
  {
    name: "Marc Dubois",
    location: "Bureaux, Paris 8e",
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
      "Un logement impeccable dès l'arrivée",
      "Standards de propreté au niveau des plateformes",
      "Une expérience agréable qui se traduit en avis 5 étoiles",
    ],
  },
  {
    title: "Côté propriétaire",
    items: [
      "Vérification attentive après chaque séjour",
      "Signalement rapide des anomalies ou dégradations",
      "Un logement toujours prêt pour le prochain séjour",
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
      "On intervient à Paris (tous les arrondissements) et dans les communes juste autour : Hauts-de-Seine, Seine-Saint-Denis et Val-de-Marne. Appelez-nous pour vérifier votre adresse.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Remplissez le formulaire ou appelez-nous. On regarde votre besoin et on vous renvoie un devis clair sous 24 h ouvrées, sans engagement.",
  },
  {
    question: "Proposez-vous le ménage Airbnb entre chaque séjour ?",
    answer:
      "Oui. Vérification du logement, ménage aux standards des plateformes, préparation du linge et suivi des éventuelles dégradations.",
  },
  {
    question: "Peut-on planifier des interventions récurrentes ?",
    answer:
      "Oui. On propose des plannings sur mesure : quotidien, hebdomadaire, mensuel ou à la demande, avec un interlocuteur dédié.",
  },
  {
    question: "Comment sont calculés vos tarifs ?",
    answer:
      "Selon la surface, le type de prestation et la fréquence. Contactez-nous pour une estimation claire, sans engagement.",
  },
];

export type ServiceFormula = {
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

/** Formules de service (sans prix affichés) */
export const serviceFormulas: ServiceFormula[] = [
  {
    name: "Ponctuel",
    subtitle: "Une intervention à la demande",
    description:
      "Idéal pour un grand ménage, un emménagement, une visite ou une remise en ordre occasionnelle.",
    features: [
      "Créneau convenu avec vous",
      "Ménage adapté à votre espace",
      "Résultat soigné dès le premier passage",
    ],
  },
  {
    name: "Récurrent",
    subtitle: "Un entretien régulier",
    description:
      "Pour garder votre appartement ou vos bureaux propres toute l'année, sans y penser.",
    features: [
      "Planning hebdomadaire ou bi-mensuel",
      "Équipe habituée à votre espace",
      "Interlocuteur dédié",
    ],
    highlighted: true,
  },
  {
    name: "Airbnb / Rotation",
    subtitle: "Entre chaque séjour",
    description:
      "Préparation complète du logement pour accueillir vos voyageurs dans les meilleures conditions.",
    features: [
      "Vérification et ménage",
      "Linge et consommables",
      "Logement prêt pour l'arrivée",
    ],
  },
];

export type ServiceAreaZone = {
  name: string;
  code: string;
};

/** Zone d'intervention : Paris + proches environs (petite couronne) */
export const serviceAreas: ServiceAreaZone[] = [
  { name: "Paris", code: "75001-75020" },
  { name: "Boulogne, Neuilly, Levallois", code: "92" },
  { name: "Issy, Vanves, Montrouge", code: "92" },
  { name: "Vincennes, Saint-Mandé, Ivry", code: "94" },
  { name: "Montreuil, Pantin, Les Lilas", code: "93" },
  { name: "Saint-Denis, Aubervilliers", code: "93" },
];
