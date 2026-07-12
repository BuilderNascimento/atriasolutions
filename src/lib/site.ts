/**
 * Configuration centrale du site Atria Solutions.
 * Modifiez ces valeurs pour mettre à jour les coordonnées, liens et informations
 * partout sur le site en une seule fois.
 */

export const siteConfig = {
  name: "Atria Solutions",
  legalName: "Atria Solutions SAS",
  tagline: "Protection de patrimoine à Paris",
  description:
    "Atria Solutions protège votre patrimoine immobilier à Paris. Au-delà du nettoyage : préservation de la valeur, de la réputation et de la tranquillité des propriétaires, hôtes Airbnb et gestionnaires en Île-de-France.",
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
    promise: "Nous protégeons votre patrimoine.",
    manifestoLine1: "Nous ne nettoyons pas.",
    manifestoLine2: "Nous protégeons votre patrimoine.",
    valueProposition:
      "Votre bien immobilier représente un investissement précieux. Nous préservons sa valeur, sa réputation et votre tranquillité.",
    ctaPrimary: "Protéger mon bien",
    ctaSecondary: "Nous contacter",
  },
} as const;

export type SiteConfig = typeof siteConfig;
