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
    short: "Un intérieur impeccable, du sol au plafond.",
    description:
      "Une prestation soignée pour votre appartement parisien : dépoussiérage, sols, cuisine, sanitaires et finitions détaillées. Un résultat irréprochable, à chaque passage.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
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
    short: "Grandes surfaces traitées avec la même exigence.",
    description:
      "Des maisons et hôtels particuliers pris en charge par une équipe dédiée. Nous adaptons notre protocole à chaque espace, matériau et surface pour un entretien haut de gamme.",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
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
    short: "Des espaces de travail sains et représentatifs.",
    description:
      "Entretien professionnel de vos bureaux et espaces communs, en journée ou en horaires décalés. Discrétion, régularité et contrôle qualité pour une image irréprochable.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
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
    short: "La touche finale après vos travaux.",
    description:
      "Élimination des poussières, résidus de plâtre, traces de peinture et gravats fins. Nous livrons des espaces prêts à être habités ou remis au client, sans la moindre trace.",
    icon: HardHat,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80",
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
    short: "Une remise à neuf en profondeur, jusqu'aux détails.",
    description:
      "Un grand nettoyage complet pour les zones les plus exigeantes : détartrage, dégraissage, désinfection et traitement des points habituellement oubliés.",
    icon: Waves,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80",
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
    short: "Un entretien régulier, sans y penser.",
    description:
      "Des passages planifiés à la fréquence de votre choix. Idéal pour les rotations Airbnb, les résidences et les entreprises qui exigent une propreté constante.",
    icon: CalendarClock,
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=80",
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
    title: "Contact",
    description:
      "Vous nous décrivez votre besoin par téléphone, e-mail ou via le formulaire en ligne.",
  },
  {
    number: "02",
    title: "Devis",
    description:
      "Nous établissons un devis clair et détaillé, sans surprise ni engagement.",
  },
  {
    number: "03",
    title: "Planification",
    description:
      "Nous convenons ensemble du créneau idéal et préparons l'intervention.",
  },
  {
    number: "04",
    title: "Nettoyage",
    description:
      "Notre équipe intervient avec un protocole précis et un matériel professionnel.",
  },
  {
    number: "05",
    title: "Contrôle qualité",
    description:
      "Nous vérifions chaque détail et validons le résultat avec vous.",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Camille Laurent",
    role: "Hôte Airbnb · Le Marais",
    quote:
      "Rotations impeccables et toujours dans les temps. Mes voyageurs notent systématiquement la propreté 5 étoiles. Atria est devenu indispensable.",
    rating: 5,
  },
  {
    name: "Julien Mercier",
    role: "Property Manager · 40 logements",
    quote:
      "Une équipe fiable et un interlocuteur unique. La gestion de mes logements est enfin sereine, avec une qualité constante à chaque passage.",
    rating: 5,
  },
  {
    name: "Sophie Nguyen",
    role: "Directrice · Agence immobilière",
    quote:
      "Fins de chantier livrées parfaitement propres, prêtes à présenter aux acquéreurs. Un vrai gain de temps et une image soignée.",
    rating: 5,
  },
  {
    name: "Marc Dubois",
    role: "Responsable · Bureaux Paris 8e",
    quote:
      "Discrétion, ponctualité et résultat irréprochable. Nos espaces sont toujours accueillants pour nos collaborateurs et clients.",
    rating: 5,
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
    question: "Comment obtenir un devis ?",
    answer:
      "Il vous suffit de remplir notre formulaire de demande de devis ou de nous contacter par téléphone. Nous vous répondons rapidement avec une proposition claire et sans engagement.",
  },
  {
    question: "Proposez-vous des rotations pour les logements Airbnb ?",
    answer:
      "Oui. Nous sommes spécialisés dans les rotations Airbnb avec nettoyage complet entre chaque séjour, gestion du linge en option et créneaux adaptés à vos check-in / check-out.",
  },
  {
    question: "Vos produits sont-ils écologiques ?",
    answer:
      "Nous privilégions des produits éco-responsables, efficaces et respectueux de la santé comme de l'environnement, adaptés à chaque type de surface.",
  },
  {
    question: "Êtes-vous assurés ?",
    answer:
      "Oui, Atria Solutions est une société assurée en responsabilité civile professionnelle. Vous bénéficiez d'une prestation encadrée et sécurisée.",
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
