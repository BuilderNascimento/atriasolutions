import type { Metadata } from "next";
import { Clock, ShieldCheck, Gem, PhoneCall } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Protéger mon bien",
  description:
    "Évaluez gratuitement la protection de votre patrimoine à Paris. Plan sur mesure, sans engagement, réponse sous 24 h ouvrées.",
  alternates: { canonical: "/devis" },
};

const reassurances = [
  {
    icon: Clock,
    title: "Réponse rapide",
    text: "Un plan de protection clair sous 24 h ouvrées.",
  },
  {
    icon: Gem,
    title: "Sur mesure",
    text: "Chaque bien est unique — notre proposition l'est aussi.",
  },
  {
    icon: ShieldCheck,
    title: "Sans engagement",
    text: "Évaluation gratuite, transparente et sans surprise.",
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
        eyebrow="Évaluation gratuite"
        title="Protégeons votre patrimoine ensemble"
        description="Décrivez votre bien en quelques secondes. Nous vous proposons un plan de protection adapté — clair, rapide, sans engagement."
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
                Pourquoi faire évaluer votre bien&nbsp;?
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Un appartement parisien représente un investissement considérable.
                Une évaluation nous permet de comprendre comment mieux protéger
                sa valeur, sa réputation et votre tranquillité.
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

            <Reveal delay={0.2}>
              <a
                href={siteConfig.contact.phoneHref}
                className="mt-8 inline-flex items-center gap-3 rounded-sm bg-primary p-5 text-white shadow-soft transition-transform hover:-translate-y-0.5"
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
              <div className="rounded-sm border border-secondary/70 bg-white p-6 shadow-card sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
