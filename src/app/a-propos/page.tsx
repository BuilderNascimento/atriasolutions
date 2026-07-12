import type { Metadata } from "next";
import Image from "next/image";
import { Target, Gem, HeartHandshake, Sparkles, ConciergeBell, Wrench, Building } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { Stats } from "@/components/home/Stats";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Atria Solutions, entreprise de nettoyage premium à Paris. Professionnalisme, souci du détail, qualité et satisfaction client au cœur de notre démarche.",
  alternates: { canonical: "/a-propos" },
};

const values = [
  {
    icon: Target,
    title: "Professionnalisme",
    description:
      "Des équipes formées et encadrées, un protocole précis et une exigence constante sur chaque prestation.",
  },
  {
    icon: Gem,
    title: "Souci du détail",
    description:
      "Rien n'est laissé au hasard : ce sont les finitions qui font la différence entre propre et impeccable.",
  },
  {
    icon: Sparkles,
    title: "Qualité",
    description:
      "Un contrôle systématique après chaque intervention pour garantir un résultat à la hauteur de vos attentes.",
  },
  {
    icon: HeartHandshake,
    title: "Satisfaction client",
    description:
      "Votre tranquillité est notre objectif. Nous construisons des relations durables, fondées sur la confiance.",
  },
];

const future = [
  {
    icon: ConciergeBell,
    title: "Conciergerie",
    description: "Gestion des accueils, remise des clés et services voyageurs.",
  },
  {
    icon: Building,
    title: "Gestion locative",
    description: "Prise en charge complète de vos biens en location courte durée.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Petits travaux et entretien technique de vos espaces.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: "À propos", url: "/a-propos" },
        ]}
      />
      <PageHeader
        eyebrow="À propos d'Atria"
        title="L'excellence du nettoyage, au service de Paris"
        description="Atria Solutions est née d'une conviction : le nettoyage professionnel mérite le même niveau d'exigence que les plus belles marques."
        breadcrumbs={[
          { name: "Accueil", href: "/" },
          { name: "À propos", href: "/a-propos" },
        ]}
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1200&q=80"
                alt="Équipe de nettoyage professionnelle Atria Solutions"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Notre histoire"
              title="Une approche premium du nettoyage"
              description="Nous accompagnons hôtes Airbnb, gestionnaires immobiliers, agences, hôtels, bureaux et particuliers avec une même promesse : un service fiable, discret et irréprochable."
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Chaque intervention est pensée comme une prestation sur mesure.
                Nous sélectionnons nos produits, formons nos équipes et
                contrôlons nos résultats pour offrir une propreté qui se voit et
                qui dure.
              </p>
              <p>
                Notre ambition : devenir la référence du nettoyage haut de gamme
                à Paris et en Île-de-France, en plaçant la qualité et la
                confiance au centre de tout ce que nous faisons.
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/devis" variant="accent">
                Travailler avec nous
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary-100 py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Nos valeurs"
            title="Ce qui nous guide au quotidien"
          />
          <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <StaggerItem
                  key={v.title}
                  className="rounded-2xl bg-white p-7 shadow-soft"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-primary">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {v.description}
                  </p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <Stats />

      <section className="bg-white py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Bientôt disponible"
            title="Des services qui vont plus loin"
            description="Nous développons une offre complète pour prendre soin de vos biens de A à Z."
          />
          <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
            {future.map((f) => {
              const Icon = f.icon;
              return (
                <StaggerItem
                  key={f.title}
                  className="relative overflow-hidden rounded-2xl border border-secondary/70 bg-white p-8 shadow-soft"
                >
                  <span className="absolute right-5 top-5 rounded-full bg-accent/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-accent">
                    À venir
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-100 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-primary">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {f.description}
                  </p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>
    </>
  );
}
