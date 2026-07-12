import Link from "next/link";
import type { SVGProps } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { navItems, services } from "@/lib/content";

function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function Linkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 8.4h3.1V21H3.4V8.4Zm5.06 0h2.97v1.72h.04c.41-.78 1.42-1.6 2.93-1.6 3.13 0 3.71 2.06 3.71 4.74V21h-3.09v-5.66c0-1.35-.02-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98V21H8.46V8.4Z" />
    </svg>
  );
}

function Facebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.53-1.5H17V3.6c-.28-.04-1.25-.12-2.38-.12-2.36 0-3.97 1.44-3.97 4.08v2.28H8v3.1h2.65V21h2.85Z" />
    </svg>
  );
}

const legalLinks = [
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "Conditions générales", href: "/conditions" },
  { label: "Politique de cookies", href: "/cookies" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { contact } = siteConfig;

  return (
    <footer className="bg-primary text-secondary">
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="flex flex-col leading-none">
              <span className="font-heading text-2xl font-bold text-white">
                Atria<span className="text-accent-400">.</span>
              </span>
              <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-secondary/70">
                Solutions
              </span>
            </span>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-secondary/75">
              Société de nettoyage professionnel à Paris. Des prestations haut de
              gamme pour appartements, maisons, bureaux et fins de chantier en
              Île-de-France.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
                { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/15 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-secondary/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/devis"
                  className="text-secondary/80 transition-colors hover:text-white"
                >
                  Devis
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-secondary/80 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent-400" strokeWidth={1.75} />
                <span className="text-secondary/80">
                  {contact.address}, {contact.postalCode} {contact.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4.5 w-4.5 shrink-0 text-accent-400" strokeWidth={1.75} />
                <a href={contact.phoneHref} className="text-secondary/80 transition-colors hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 shrink-0 text-accent-400" strokeWidth={1.75} />
                <a href={contact.emailHref} className="text-secondary/80 transition-colors hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li className="pt-1 text-xs text-secondary/60">{contact.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-secondary/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.legalName}. Tous droits réservés.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
