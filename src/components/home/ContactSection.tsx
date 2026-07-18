"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  const { contact } = siteConfig;

  const items = [
    { icon: Phone, label: "Téléphone", value: contact.phone, href: contact.phoneHref },
    { icon: Mail, label: "E-mail", value: contact.email, href: contact.emailHref },
    {
      icon: MapPin,
      label: "Adresse",
      value: `${contact.address}, ${contact.postalCode} ${contact.city}`,
    },
    { icon: Clock, label: "Horaires", value: contact.hours },
  ];

  return (
    <section id="contact" className="relative bg-white py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Parlons de votre projet de nettoyage"
          description="Décrivez votre besoin — nous vous répondons sous 24 h ouvrées avec un devis clair et sans engagement."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="flex flex-col gap-4">
              {items.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-secondary/70 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary-100 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wide text-muted">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block font-medium text-primary">
                        {item.value}
                      </span>
                    </span>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}

              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] p-4 font-medium text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
                Écrire sur WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-secondary/70 bg-secondary-100/40 p-6 shadow-soft sm:p-8">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
