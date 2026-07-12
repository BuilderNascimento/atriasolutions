import type { Metadata } from "next";
import { Clock, ShieldCheck, BadgeCheck, PhoneCall } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Demander un devis",
  description:
    "Obtenez un devis gratuit et sans engagement pour vos prestations de nettoyage à Paris. Réponse rapide, tarifs clairs, qualité garantie.",
  alternates: { canonical: "/devis" },
};

const reassurances = [
  { icon: Clock, title: "Réponse rapide", text: "Une proposition claire sous 24 h ouvrées." },
  { icon: BadgeCheck, title: "Sans engagement", text: "Un devis gratuit et transparent, sans surprise." },
  { icon: ShieldCheck, title: "Société assurée", text: "Une prestation encadrée et sécurisée." },
];

export default function DevisPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: "Devis", url: "/devis" },
        ]}
      />
      <PageHeader
        eyebrow="Devis gratuit"
        title="Recevez votre devis personnalisé"
        description="Décrivez votre besoin en quelques secondes. Nous vous proposons une solution adaptée et un tarif clair, rapidement."
        breadcrumbs={[
          { name: "Accueil", href: "/" },
          { name: "Devis", href: "/devis" },
        ]}
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                Pourquoi demander un devis&nbsp;?
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Chaque projet est unique. Un devis nous permet de vous proposer
                la prestation la plus adaptée à vos besoins et à votre budget.
              </p>
            </Reveal>

            <div className="mt-8 flex flex-col gap-4">
              {reassurances.map((r, i) => {
                const Icon = r.icon;
                return (
                  <Reveal key={r.title} delay={i * 0.1}>
                    <div className="flex items-start gap-4 rounded-2xl border border-secondary/70 bg-secondary-100/40 p-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </span>
                      <span>
                        <span className="block font-bold text-primary">{r.title}</span>
                        <span className="mt-0.5 block text-sm text-muted">{r.text}</span>
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.2}>
              <a
                href={siteConfig.contact.phoneHref}
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-primary p-5 text-white shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <PhoneCall className="h-5 w-5 text-accent-400" strokeWidth={1.75} />
                <span>
                  <span className="block text-xs text-secondary/70">Préférez-vous appeler ?</span>
                  <span className="font-bold">{siteConfig.contact.phone}</span>
                </span>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-secondary/70 bg-white p-6 shadow-card sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
