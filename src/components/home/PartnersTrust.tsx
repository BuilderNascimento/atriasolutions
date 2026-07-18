"use client";

import { Reveal } from "@/components/ui/Reveal";
import { partnerTypes } from "@/lib/content";

function AirbnbMark() {
  return (
    <svg viewBox="0 0 110 32" className="h-9 w-auto sm:h-11" aria-hidden="true">
      <text
        x="0"
        y="26"
        fill="currentColor"
        fontFamily="var(--font-montserrat), system-ui, sans-serif"
        fontSize="30"
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
    <svg viewBox="0 0 130 32" className="h-8 w-auto sm:h-10" aria-hidden="true">
      <text
        x="0"
        y="24"
        fill="currentColor"
        fontFamily="var(--font-montserrat), system-ui, sans-serif"
        fontSize="26"
        fontWeight="700"
      >
        Booking
      </text>
    </svg>
  );
}

function AbritelMark() {
  return (
    <svg viewBox="0 0 110 32" className="h-8 w-auto sm:h-10" aria-hidden="true">
      <text
        x="0"
        y="24"
        fill="currentColor"
        fontFamily="var(--font-montserrat), system-ui, sans-serif"
        fontSize="26"
        fontWeight="700"
      >
        Abritel
      </text>
    </svg>
  );
}

export function PartnersTrust() {
  return (
    <section className="border-y border-secondary/50 bg-white py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mx-auto mb-8 block h-px w-14 bg-primary/12" />
            <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl lg:text-[2rem]">
              Ils nous font confiance.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              Plateformes, agences et professionnels de l&apos;immobilier
              s&apos;appuient sur Atria pour le ménage de leurs logements parisiens.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-2 items-center gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-12">
            {partnerTypes.map((partner) => (
              <div
                key={partner.name}
                className="group flex flex-col items-center justify-center text-center"
                aria-label={partner.name}
              >
                <div
                  className={`transition-colors duration-500 ${
                    partner.logo === "airbnb"
                      ? "text-primary/20 group-hover:text-[#FF5A5F]"
                      : partner.logo === "booking"
                        ? "text-primary/20 group-hover:text-[#003580]"
                        : partner.logo === "abritel"
                          ? "text-primary/20 group-hover:text-accent"
                          : "text-primary/20 group-hover:text-primary/45"
                  }`}
                >
                  {partner.logo === "airbnb" && <AirbnbMark />}
                  {partner.logo === "booking" && <BookingMark />}
                  {partner.logo === "abritel" && <AbritelMark />}
                  {partner.logo === "text" && (
                    <span className="font-heading text-lg font-bold leading-tight tracking-tight sm:text-xl lg:text-[1.35rem]">
                      {partner.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
