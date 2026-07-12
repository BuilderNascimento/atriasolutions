import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LegalBody, LegalBlock } from "@/components/ui/LegalSection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description:
    "Informations sur l'utilisation des cookies sur le site d'Atria Solutions.",
  alternates: { canonical: "/cookies" },
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mentions légales"
        title="Politique de cookies"
        description="Comment et pourquoi nous utilisons les cookies sur ce site."
        breadcrumbs={[
          { name: "Accueil", href: "/" },
          { name: "Cookies", href: "/cookies" },
        ]}
      />
      <LegalBody>
        <p className="text-sm text-muted">
          Dernière mise à jour&nbsp;: {new Date().getFullYear()}
        </p>

        <LegalBlock title="1. Qu'est-ce qu'un cookie ?">
          <p>
            Un cookie est un petit fichier texte déposé sur votre appareil lors de la
            visite d'un site web. Il permet notamment d'améliorer votre expérience de
            navigation et de mesurer l'audience du site.
          </p>
        </LegalBlock>

        <LegalBlock title="2. Cookies utilisés">
          <p>
            Nous utilisons des cookies strictement nécessaires au bon fonctionnement du
            site ainsi que, sous réserve de votre consentement, des cookies de mesure
            d'audience destinés à améliorer nos services.
          </p>
        </LegalBlock>

        <LegalBlock title="3. Gestion de votre consentement">
          <p>
            Lors de votre première visite, une bannière vous permet d'accepter ou de
            refuser le dépôt de cookies non essentiels. Vous pouvez modifier votre choix
            à tout moment en effaçant les cookies de votre navigateur.
          </p>
        </LegalBlock>

        <LegalBlock title="4. Paramétrage du navigateur">
          <p>
            Vous pouvez configurer votre navigateur pour bloquer ou supprimer les
            cookies. Certaines fonctionnalités du site pourraient toutefois ne plus être
            disponibles.
          </p>
        </LegalBlock>

        <LegalBlock title="5. Contact">
          <p>
            Pour toute question relative à notre politique de cookies, contactez-nous à{" "}
            <a href={siteConfig.contact.emailHref} className="text-accent underline underline-offset-2">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </LegalBlock>
      </LegalBody>
    </>
  );
}
