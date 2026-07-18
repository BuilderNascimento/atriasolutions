"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, Send } from "lucide-react";
import { services } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "peer w-full min-h-11 rounded-xl border border-secondary bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-accent focus:ring-2 focus:ring-accent/20 aria-[invalid=true]:border-red-400";

const labelClass = "mb-1.5 block text-sm font-medium text-primary";

function RequiredMark() {
  return (
    <span className="text-accent" aria-hidden="true">
      {" "}
      *
    </span>
  );
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [touched, setTouched] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched(true);
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("loading");
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setTouched(false);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative">
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            role="status"
            aria-live="polite"
            className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl bg-white/98 p-8 text-center shadow-card backdrop-blur-sm"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Check className="h-8 w-8" strokeWidth={2} />
            </span>
            <h3 className="mt-5 font-heading text-xl font-bold text-primary">
              Demande bien reçue !
            </h3>
            <p className="mt-2 max-w-sm text-sm text-muted">
              Merci. Notre équipe vous recontacte sous 24&nbsp;h ouvrées avec
              une proposition adaptée.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 min-h-11 rounded-full px-5 text-sm font-medium text-accent underline underline-offset-4"
            >
              Envoyer une autre demande
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <p className="text-xs text-muted">
          Les champs marqués d&apos;un <span className="text-accent">*</span> sont
          obligatoires pour une réponse rapide.
        </p>

        <div className={`grid gap-5 ${compact ? "" : "sm:grid-cols-2"}`}>
          <div>
            <label htmlFor="name" className={labelClass}>
              Nom complet
              <RequiredMark />
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="Votre nom"
              className={inputClass}
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Téléphone
              <RequiredMark />
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="Votre numéro"
              className={inputClass}
              aria-required="true"
            />
          </div>
        </div>

        <div className={`grid gap-5 ${compact ? "" : "sm:grid-cols-2"}`}>
          <div>
            <label htmlFor="email" className={labelClass}>
              E-mail
              <RequiredMark />
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Votre e-mail"
              className={inputClass}
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="address" className={labelClass}>
              Adresse à Paris
            </label>
            <input
              id="address"
              name="address"
              autoComplete="street-address"
              placeholder="Arrondissement ou adresse"
              className={inputClass}
            />
          </div>
        </div>

        <div className={`grid gap-5 ${compact ? "" : "sm:grid-cols-2"}`}>
          <div>
            <label htmlFor="service" className={labelClass}>
              Service souhaité
              <RequiredMark />
            </label>
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className={inputClass}
              aria-required="true"
            >
              <option value="" disabled>
                Choisissez un service
              </option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Airbnb / Rotation">Airbnb / Rotation</option>
              <option value="Autre">Autre demande</option>
            </select>
          </div>
          <div>
            <label htmlFor="preferredDate" className={labelClass}>
              Date souhaitée
            </label>
            <input
              id="preferredDate"
              name="preferredDate"
              type="date"
              className={inputClass}
              min={new Date().toISOString().slice(0, 10)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Message
            <RequiredMark />
          </label>
          <textarea
            id="message"
            name="message"
            rows={compact ? 5 : 6}
            required
            placeholder="Surface approximative, fréquence souhaitée, accès au logement…"
            className={`${inputClass} min-h-[8rem] resize-y`}
            aria-required="true"
          />
        </div>

        {status === "error" && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
            Une erreur est survenue. Merci de réessayer ou de nous appeler.
          </p>
        )}

        {touched && status === "idle" && (
          <p className="sr-only">Veuillez remplir les champs obligatoires.</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-white shadow-soft transition-all duration-300 hover:bg-accent-600 hover:shadow-card disabled:opacity-70 sm:w-auto"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Envoi en cours…
            </>
          ) : (
            <>
              Demander un devis
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
            </>
          )}
        </button>

        <p className="text-xs leading-relaxed text-muted">
          En soumettant ce formulaire, vous acceptez notre{" "}
          <a href="/confidentialite" className="underline underline-offset-2 hover:text-accent">
            politique de confidentialité
          </a>
          . Vos données ne sont jamais partagées. Réponse sous 24&nbsp;h ouvrées.
        </p>
      </form>
    </div>
  );
}
