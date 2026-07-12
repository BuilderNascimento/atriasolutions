import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LegalBody, LegalBlock } from "@/components/ui/LegalSection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et de protection des données personnelles (RGPD) d'Atria Solutions.",
  alternates: { canonical: "/confidentialite" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mentions légales"
        title="Politique de confidentialité"
        description="La protection de vos données personnelles est une priorité pour Atria Solutions."
        breadcrumbs={[
          { name: "Accueil", href: "/" },
          { name: "Confidentialité", href: "/confidentialite" },
        ]}
      />
      <LegalBody>
        <p className="text-sm text-muted">
          Dernière mise à jour&nbsp;: {new Date().getFullYear()}
        </p>

        <LegalBlock title="1. Responsable du traitement">
          <p>
            {siteConfig.legalName}, dont le siège est situé {siteConfig.contact.address},{" "}
            {siteConfig.contact.postalCode} {siteConfig.contact.city}, est responsable du
            traitement des données personnelles collectées sur ce site.
          </p>
        </LegalBlock>

        <LegalBlock title="2. Données collectées">
          <p>
            Nous collectons les données que vous nous transmettez volontairement via
            nos formulaires de contact et de devis&nbsp;: nom, adresse e-mail, numéro
            de téléphone, adresse, service souhaité et message.
          </p>
        </LegalBlock>

        <LegalBlock title="3. Finalités du traitement">
          <p>
            Vos données sont utilisées uniquement pour répondre à vos demandes,
            établir des devis, assurer le suivi de nos prestations et, le cas échéant,
            vous adresser des informations relatives à nos services.
          </p>
        </LegalBlock>

        <LegalBlock title="4. Base légale">
          <p>
            Le traitement repose sur votre consentement et sur l'exécution de mesures
            précontractuelles prises à votre demande (article 6 du RGPD).
          </p>
        </LegalBlock>

        <LegalBlock title="5. Durée de conservation">
          <p>
            Vos données sont conservées pendant la durée nécessaire au traitement de
            votre demande, puis archivées ou supprimées conformément aux obligations
            légales en vigueur.
          </p>
        </LegalBlock>

        <LegalBlock title="6. Vos droits">
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification,
            d'effacement, de limitation, d'opposition et de portabilité de vos données.
            Pour exercer ces droits, écrivez-nous à{" "}
            <a href={siteConfig.contact.emailHref} className="text-accent underline underline-offset-2">
              {siteConfig.contact.email}
            </a>
            .
          </p>
          <p>
            Vous pouvez également introduire une réclamation auprès de la CNIL
            (www.cnil.fr).
          </p>
        </LegalBlock>

        <LegalBlock title="7. Sécurité">
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles
            appropriées afin de protéger vos données contre tout accès non autorisé,
            perte ou altération.
          </p>
        </LegalBlock>

        <LegalBlock title="8. Contact">
          <p>
            Pour toute question relative à cette politique, contactez-nous à{" "}
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
