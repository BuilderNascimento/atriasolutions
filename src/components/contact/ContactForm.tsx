"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, Send } from "lucide-react";
import { services } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "peer w-full rounded-xl border border-secondary bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20";

const labelClass = "mb-1.5 block text-sm font-medium text-primary";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
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
            className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl bg-white/95 p-8 text-center backdrop-blur-sm"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Check className="h-8 w-8" strokeWidth={2} />
            </span>
            <h3 className="mt-5 font-heading text-xl font-bold text-primary">
              Message envoyé
            </h3>
            <p className="mt-2 max-w-sm text-sm text-muted">
              Merci pour votre demande. Notre équipe vous recontacte dans les
              plus brefs délais.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm font-medium text-accent underline underline-offset-4"
            >
              Envoyer une autre demande
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className={`grid gap-5 ${compact ? "" : "sm:grid-cols-2"}`}>
          <div>
            <label htmlFor="name" className={labelClass}>
              Nom complet
            </label>
            <input id="name" name="name" required placeholder="Jean Dupont" className={inputClass} />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Téléphone
            </label>
            <input id="phone" name="phone" type="tel" required placeholder="+33 6 12 34 56 78" className={inputClass} />
          </div>
        </div>

        <div className={`grid gap-5 ${compact ? "" : "sm:grid-cols-2"}`}>
          <div>
            <label htmlFor="email" className={labelClass}>
              E-mail
            </label>
            <input id="email" name="email" type="email" required placeholder="jean@exemple.fr" className={inputClass} />
          </div>
          <div>
            <label htmlFor="address" className={labelClass}>
              Adresse
            </label>
            <input id="address" name="address" placeholder="Paris, 75002" className={inputClass} />
          </div>
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            Service souhaité
          </label>
          <select id="service" name="service" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Sélectionnez un service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Autre">Autre demande</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={compact ? 3 : 4}
            required
            placeholder="Décrivez votre besoin (surface, fréquence, date souhaitée…)"
            className={`${inputClass} resize-none`}
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-red-600">
            Une erreur est survenue. Merci de réessayer ou de nous appeler.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-white shadow-soft transition-all duration-300 hover:bg-accent-600 hover:shadow-card disabled:opacity-70 sm:w-auto"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Envoi en cours…
            </>
          ) : (
            <>
              Demander une évaluation
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
            </>
          )}
        </button>

        <p className="text-xs leading-relaxed text-muted">
          En soumettant ce formulaire, vous acceptez notre{" "}
          <a href="/confidentialite" className="underline underline-offset-2 hover:text-accent">
            politique de confidentialité
          </a>
          . Vos données ne sont jamais partagées.
        </p>
      </form>
    </div>
  );
}
