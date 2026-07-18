import type { Metadata } from "next";
import { Clock, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Demander un devis",
  description:
    "Demandez un devis gratuit de nettoyage à Paris. Proposition claire sous 24 h ouvrées, sans engagement.",
  alternates: { canonical: "/devis" },
};

const reassurances = [
  {
    icon: Clock,
    title: "Réponse rapide",
    text: "Un devis clair sous 24 h ouvrées.",
  },
  {
    icon: Sparkles,
    title: "Sur mesure",
    text: "Chaque espace est unique, notre proposition aussi.",
  },
  {
    icon: ShieldCheck,
    title: "Sans engagement",
    text: "Devis gratuit, transparent, sans surprise.",
  },
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
        title="Obtenez votre devis en quelques minutes"
        description="Décrivez votre besoin. On vous envoie une proposition claire et adaptée, rapidement et sans engagement."
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
                Surface, type de prestation, fréquence : chaque demande est
                différente. Un devis permet de vous proposer le bon
                service au bon tarif, pour un résultat soigné à Paris.
              </p>
            </Reveal>

            <div className="mt-8 flex flex-col gap-4">
              {reassurances.map((r, i) => {
                const Icon = r.icon;
                return (
                  <Reveal key={r.title} delay={i * 0.1}>
                    <div className="flex items-start gap-4 rounded-sm border border-secondary/70 bg-secondary-100/40 p-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-accent/10 text-accent">
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

            <Reveal delay={0.3}>
              <a
                href={siteConfig.contact.phoneHref}
                className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary hover:text-accent"
              >
                <PhoneCall className="h-4 w-4" strokeWidth={1.75} />
                Ou appelez-nous : {siteConfig.contact.phone}
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
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
