import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Atria Solutions pour un devis de nettoyage à Paris. Téléphone, e-mail, WhatsApp ou formulaire. Réponse sous 24 h ouvrées.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { contact } = siteConfig;

  const items = [
    { icon: Phone, label: "Téléphone", value: contact.phone, href: contact.phoneHref },
    { icon: Mail, label: "E-mail", value: contact.email, href: contact.emailHref },
    {
      icon: MapPin,
      label: "Adresse",
      value: `${contact.address}, ${contact.postalCode} ${contact.city}`,
    },
    { icon: Clock, label: "Horaires", value: contact.hours },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet de nettoyage"
        description="Décrivez votre besoin. Notre équipe vous répond rapidement par le canal de votre choix."
        breadcrumbs={[
          { name: "Accueil", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                Coordonnées
              </h2>
              <p className="mt-3 text-muted">
                Notre équipe vous répond du lundi au samedi.
              </p>
            </Reveal>
            <div className="mt-8 flex flex-col gap-4">
              {items.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-center gap-4 rounded-2xl border border-secondary/70 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary-100 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wide text-muted">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block font-medium text-primary">
                        {item.value}
                      </span>
                    </span>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {inner}
                  </a>
                ) : (
                  <div key={item.label}>{inner}</div>
                );
              })}
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] p-4 font-medium text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
                Écrire sur WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-2xl border border-secondary/70 bg-secondary-100/40 p-6 shadow-soft sm:p-8">
                <h2 className="text-2xl font-bold text-primary">Envoyez-nous un message</h2>
                <p className="mt-2 text-sm text-muted">
                  Remplissez le formulaire, nous revenons vers vous rapidement.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="container-x">
          <div className="overflow-hidden rounded-2xl border border-secondary/70 shadow-card">
            <div className="aspect-[21/9] w-full">
              <iframe
                title="Localisation Atria Solutions à Paris"
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.28%2C48.84%2C2.40%2C48.88&layer=mapnik&marker=48.8686%2C2.3312"
                className="h-full w-full grayscale-[35%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
