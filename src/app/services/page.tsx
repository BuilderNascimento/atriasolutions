import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { services } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nos expertises",
  description:
    "Atria Solutions protège votre patrimoine à Paris : appartements, maisons, bureaux, fins de chantier et biens locatifs. Chaque intervention préserve la valeur de votre bien.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <PageHeader
        eyebrow="Nos expertises"
        title="Chaque bien mérite une protection sur mesure"
        description="Nous adaptons notre protocole à chaque patrimoine — pour préserver sa valeur, sa réputation et votre tranquillité."
        breadcrumbs={[
          { name: "Accueil", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />

      <div className="bg-white">
        {services.map((service, i) => {
          const Icon = service.icon;
          const reversed = i % 2 === 1;
          return (
            <section
              key={service.slug}
              id={service.slug}
              className={`scroll-mt-24 py-20 lg:py-28 ${
                i % 2 === 1 ? "bg-secondary-100" : "bg-white"
              }`}
            >
              <div className="container-x">
                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <Reveal>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <span className="flex h-13 w-13 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <h2 className="mt-6 text-2xl font-bold text-primary sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm font-medium text-primary">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <ButtonLink href="/devis" variant="accent" size="md">
                        {siteConfig.brand.ctaPrimary}
                      </ButtonLink>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="relative overflow-hidden bg-primary py-20 text-white lg:py-24">
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="container-x relative flex flex-col items-center gap-8 text-center">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-bold text-balance sm:text-4xl">
              Un patrimoine à protéger ? Parlons-en.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-secondary/85">
              Chaque bien est unique. Décrivez le vôtre et recevez un plan de
              protection adapté, rapidement.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/devis" variant="accent">
                {siteConfig.brand.ctaPrimary}
              </ButtonLink>
              <ButtonLink
                href={siteConfig.contact.phoneHref}
                variant="secondary"
                className="!bg-white/10 !text-white !ring-white/25 hover:!bg-white/20"
              >
                {siteConfig.contact.phone}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
