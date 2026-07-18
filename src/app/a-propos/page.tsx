import type { Metadata } from "next";
import Image from "next/image";
import { Sparkles, HeartHandshake, Clock, Leaf, ConciergeBell, Wrench, Building } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { PartnersTrust } from "@/components/home/PartnersTrust";
import { ProtectionManifesto } from "@/components/home/ProtectionManifesto";
import { Stats } from "@/components/home/Stats";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Atria Solutions — entreprise de nettoyage professionnel à Paris. Une équipe soignée, réactive et assurée pour appartements, bureaux et logements Airbnb.",
  alternates: { canonical: "/a-propos" },
};

const values = [
  {
    icon: Sparkles,
    title: "Exigence",
    description:
      "Les détails font la différence. Nous soignons chaque coin, chaque surface, chaque finition.",
  },
  {
    icon: Clock,
    title: "Ponctualité",
    description:
      "Nous arrivons à l'heure, respectons les créneaux convenus et tenons nos engagements.",
  },
  {
    icon: Leaf,
    title: "Respect",
    description:
      "Produits adaptés, surfaces préservées, espaces traités avec soin — comme s'ils étaient les nôtres.",
  },
  {
    icon: HeartHandshake,
    title: "Confiance",
    description:
      "Votre tranquillité compte. Nous construisons des relations durables, fondées sur la fiabilité.",
  },
];

const future = [
  {
    icon: ConciergeBell,
    title: "Conciergerie",
    description: "Accompagnement élargi pour l'expérience voyageur et le propriétaire.",
  },
  {
    icon: Building,
    title: "Gestion locative",
    description: "Prise en charge du ménage et de la préparation de vos biens en location.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Entretien préventif pour garder vos espaces en excellent état.",
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
        title="Une entreprise de nettoyage à taille humaine, à Paris"
        description="Atria Solutions est née d'une conviction simple : un espace propre, c'est un espace plus agréable à vivre — pour vous, vos voyageurs et vos clients."
        breadcrumbs={[
          { name: "Accueil", href: "/" },
          { name: "À propos", href: "/a-propos" },
        ]}
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1200&q=80"
                alt="Équipe Atria Solutions — nettoyage professionnel à Paris"
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
              eyebrow="Notre mission"
              title="Prendre soin de vos espaces, au quotidien"
              description="Nous accompagnons propriétaires, hôtes Airbnb, gestionnaires, agences et hôtels avec une promesse claire : un ménage soigné, fiable et adapté à Paris."
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Que ce soit pour un appartement, des bureaux ou une rotation
                Airbnb, nous intervenons avec la même exigence : propreté,
                ponctualité et un vrai sens du détail.
              </p>
              <p>
                Notre ambition : devenir une référence du nettoyage
                professionnel à Paris — là où la qualité et la confiance ne
                sont pas des options, mais des exigences.
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/devis" variant="accent">
                {siteConfig.brand.ctaPrimary}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <PartnersTrust />
      <ProtectionManifesto />

      <section className="bg-secondary-100 py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Nos valeurs"
            title="Ce qui guide chaque intervention"
          />
          <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <StaggerItem
                  key={v.title}
                  className="rounded-sm bg-white p-7 shadow-soft"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary text-white">
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
            title="Aller encore plus loin avec vous"
            description="Nous développons de nouveaux services pour accompagner vos besoins au quotidien."
          />
          <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
            {future.map((f) => {
              const Icon = f.icon;
              return (
                <StaggerItem
                  key={f.title}
                  className="relative overflow-hidden rounded-sm border border-secondary/70 bg-white p-8 shadow-soft"
                >
                  <span className="absolute right-5 top-5 rounded-full bg-accent/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-accent">
                    À venir
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary-100 text-primary">
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
