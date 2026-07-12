import { siteConfig } from "@/lib/site";
import { faqItems, services } from "@/lib/content";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const { contact } = siteConfig;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "CleaningService",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: contact.phone,
        email: contact.email,
        image: `${siteConfig.url}/opengraph-image`,
        priceRange: "€€",
        address: {
          "@type": "PostalAddress",
          streetAddress: contact.address,
          postalCode: contact.postalCode,
          addressLocality: contact.city,
          addressCountry: "FR",
        },
        areaServed: [
          { "@type": "City", name: "Paris" },
          { "@type": "AdministrativeArea", name: "Île-de-France" },
        ],
        geo: {
          "@type": "GeoCoordinates",
          latitude: 48.8686,
          longitude: 2.3312,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "08:00",
          closes: "20:00",
        },
        sameAs: [
          siteConfig.social.instagram,
          siteConfig.social.linkedin,
          siteConfig.social.facebook,
        ],
        makesOffer: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.short,
          },
        })),
      }}
    />
  );
}

export function FaqSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${siteConfig.url}${item.url}`,
        })),
      }}
    />
  );
}
