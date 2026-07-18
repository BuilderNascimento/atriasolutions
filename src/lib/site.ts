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
  // Remplacez par votre domaine réel (ex. www.atria-solutions.fr) une fois configuré
  url: "https://atriasolutions.vercel.app",
  locale: "fr_FR",
  contact: {
    // Coordonnées de démonstration — à remplacer par vos informations réelles
    phone: "+33 1 84 80 00 00",
    phoneHref: "tel:+33184800000",
    whatsapp: "+33 6 00 00 00 00",
    whatsappHref: "https://wa.me/33600000000",
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
    clients: 100,
    apartments: 200,
    projects: 350,
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
