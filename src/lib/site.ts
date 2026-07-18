/**
 * Configuration centrale du site Atria Solutions.
 */

export const siteConfig = {
  name: "Atria Solutions",
  legalName: "Atria Solutions SAS",
  tagline: "Nettoyage professionnel à Paris",
  description:
    "Atria Solutions, entreprise de nettoyage à Paris et en proche couronne. Appartements, maisons, bureaux, Airbnb et fins de chantier. Une équipe soignée et réactive.",
  url: "https://www.atriasolutionsparis.com",
  locale: "fr_FR",
  contact: {
    phone: "07 49 42 23 52",
    phoneHref: "tel:+33749422352",
    whatsapp: "07 49 42 23 52",
    whatsappHref: "https://wa.me/33749422352",
    email: "contact@atria-solutions.fr",
    emailHref: "mailto:contact@atria-solutions.fr",
    address: "12 Rue de la Paix",
    postalCode: "75002",
    city: "Paris",
    country: "France",
    hours: "Lun-Sam, 8h-20h",
  },
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  },
  stats: {
    years: 5,
    clients: 1200,
    apartments: 650,
    projects: 8700,
  },
  brand: {
    promise: "Un ménage soigné, à Paris.",
    manifestoLine1: "Nous nettoyons avec soin.",
    manifestoLine2: "Pour que votre espace soit toujours accueillant.",
    valueProposition:
      "Propriétaires, hôtes Airbnb ou professionnels : on s'occupe de vos espaces avec exigence, discrétion et attention aux détails.",
    ctaPrimary: "Demander un devis",
    ctaSecondary: "Nous contacter",
  },
} as const;

export type SiteConfig = typeof siteConfig;
