import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { LegalBody, LegalBlock } from "@/components/ui/LegalSection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions générales",
  description:
    "Conditions générales de vente et d'utilisation des services de nettoyage Atria Solutions.",
  alternates: { canonical: "/conditions" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mentions légales"
        title="Conditions générales"
        description="Les conditions applicables à nos prestations et à l'utilisation de ce site."
        breadcrumbs={[
          { name: "Accueil", href: "/" },
          { name: "Conditions générales", href: "/conditions" },
        ]}
      />
      <LegalBody>
        <p className="text-sm text-muted">
          Dernière mise à jour&nbsp;: {new Date().getFullYear()}
        </p>

        <LegalBlock title="1. Objet">
          <p>
            Les présentes conditions générales régissent les prestations de nettoyage
            proposées par {siteConfig.legalName} ainsi que l'utilisation du présent site.
          </p>
        </LegalBlock>

        <LegalBlock title="2. Devis et commandes">
          <p>
            Toute prestation fait l'objet d'un devis préalable, gratuit et sans
            engagement. La prestation est confirmée après acceptation écrite du devis
            par le client.
          </p>
        </LegalBlock>

        <LegalBlock title="3. Tarifs et paiement">
          <p>
            Les tarifs sont indiqués dans le devis. Les modalités et délais de paiement
            y sont précisés. Tout retard de paiement peut entraîner des pénalités
            conformément à la réglementation en vigueur.
          </p>
        </LegalBlock>

        <LegalBlock title="4. Exécution des prestations">
          <p>
            Nous nous engageons à réaliser les prestations avec professionnalisme, dans
            le respect des créneaux convenus. Le client s'engage à faciliter l'accès aux
            locaux concernés.
          </p>
        </LegalBlock>

        <LegalBlock title="5. Annulation">
          <p>
            Toute annulation doit être communiquée dans un délai raisonnable. Les
            conditions d'annulation sont précisées dans le devis accepté.
          </p>
        </LegalBlock>

        <LegalBlock title="6. Responsabilité et assurance">
          <p>
            {siteConfig.legalName} est assurée en responsabilité civile professionnelle.
            Notre responsabilité ne saurait être engagée en cas de force majeure ou de
            mauvaise utilisation des locaux par le client.
          </p>
        </LegalBlock>

        <LegalBlock title="7. Droit applicable">
          <p>
            Les présentes conditions sont soumises au droit français. Tout litige relève
            de la compétence des tribunaux compétents.
          </p>
        </LegalBlock>
      </LegalBody>
    </>
  );
}
