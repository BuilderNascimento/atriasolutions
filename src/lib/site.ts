/**
 * Configuration centrale du site Atria Solutions.
 * Modifiez ces valeurs pour mettre à jour les coordonnées, liens et informations
 * partout sur le site en une seule fois.
 */

export const siteConfig = {
  name: "Atria Solutions",
  legalName: "Atria Solutions SAS",
  tagline: "Nettoyage professionnel à Paris",
  description:
    "Atria Solutions — entreprise de nettoyage professionnel à Paris. Appartements, maisons, bureaux, Airbnb et fins de chantier. Une équipe soignée, réactive et assurée.",
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
    hours: "Lun – Sam · 8h00 – 20h00",
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
    /** ~3 ans × 5/j + 1 an × 9/j (365 j) ≈ 8 760 */
    projects: 8700,
  },
  brand: {
    promise: "Un ménage soigné, digne de Paris.",
    manifestoLine1: "Nous nettoyons avec soin.",
    manifestoLine2: "Pour que votre espace soit toujours accueillant.",
    valueProposition:
      "Propriétaires, hôtes Airbnb et professionnels : nous prenons soin de vos espaces avec exigence, discrétion et un vrai sens du détail.",
    ctaPrimary: "Demander un devis",
    ctaSecondary: "Nous contacter",
  },
} as const;

export type SiteConfig = typeof siteConfig;
