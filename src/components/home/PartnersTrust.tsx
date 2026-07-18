"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { partnerTypes } from "@/lib/content";

function AirbnbMark() {
  return (
    <svg viewBox="0 0 110 32" className="h-7 w-auto sm:h-8" aria-hidden="true">
      <text
        x="0"
        y="24"
        fill="currentColor"
        fontFamily="var(--font-montserrat), system-ui, sans-serif"
        fontSize="28"
        fontWeight="800"
        letterSpacing="-0.04em"
      >
        airbnb
      </text>
    </svg>
  );
}

function BookingMark() {
  return (
    <svg viewBox="0 0 130 32" className="h-6 w-auto sm:h-7" aria-hidden="true">
      <text
        x="0"
        y="23"
        fill="currentColor"
        fontFamily="var(--font-montserrat), system-ui, sans-serif"
        fontSize="24"
        fontWeight="700"
      >
        Booking
      </text>
    </svg>
  );
}

function AbritelMark() {
  return (
    <svg viewBox="0 0 110 32" className="h-6 w-auto sm:h-7" aria-hidden="true">
      <text
        x="0"
        y="23"
        fill="currentColor"
        fontFamily="var(--font-montserrat), system-ui, sans-serif"
        fontSize="24"
        fontWeight="700"
      >
        Abritel
      </text>
    </svg>
  );
}

function PartnerLogo({
  name,
  logo,
}: {
  name: string;
  logo: (typeof partnerTypes)[number]["logo"];
}) {
  const brandColor =
    logo === "airbnb"
      ? "group-hover/card:text-[#FF5A5F]"
      : logo === "booking"
        ? "group-hover/card:text-[#003580]"
        : logo === "abritel"
          ? "group-hover/card:text-accent"
          : "group-hover/card:text-primary";

  return (
    <div
      className="group/card flex h-16 min-w-[10.5rem] items-center justify-center rounded-xl border border-secondary/80 bg-white px-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-card sm:h-[4.5rem] sm:min-w-[12rem] sm:px-8"
      aria-label={name}
    >
      <div
        className={`text-primary/35 transition-colors duration-300 ${brandColor}`}
      >
        {logo === "airbnb" && <AirbnbMark />}
        {logo === "booking" && <BookingMark />}
        {logo === "abritel" && <AbritelMark />}
        {logo === "text" && (
          <span className="font-heading text-sm font-bold tracking-tight sm:text-base">
            {name}
          </span>
        )}
      </div>
    </div>
  );
}

export function PartnersTrust() {
  const rowA = partnerTypes;
  const rowB = [...partnerTypes].reverse();

  return (
    <section className="relative overflow-hidden border-y border-secondary/50 bg-secondary-100/40 py-16 lg:py-20">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Partenaires
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-primary sm:text-3xl">
              Ils nous font confiance
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Plateformes, agences et professionnels de l&apos;immobilier
              s&apos;appuient sur Atria pour le ménage et la gestion de leurs
              logements à Paris.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-10">
        {/* Gradientes laterais (estilo logo cloud shadcn) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary-100/90 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary-100/90 to-transparent sm:w-24" />

        <Marquee pauseOnHover className="[--duration:38s]">
          {rowA.map((partner) => (
            <PartnerLogo
              key={`a-${partner.name}`}
              name={partner.name}
              logo={partner.logo}
            />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="mt-4 [--duration:42s]">
          {rowB.map((partner) => (
            <PartnerLogo
              key={`b-${partner.name}`}
              name={partner.name}
              logo={partner.logo}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
