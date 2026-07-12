"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "atria-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const decide = (value: "accepted" | "refused") => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Gestion des cookies"
          className="fixed bottom-4 left-4 z-[55] w-[calc(100%-2rem)] max-w-md rounded-2xl bg-white p-5 shadow-float ring-1 ring-secondary/70 sm:left-6 sm:bottom-6"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary-100 text-primary">
              <Cookie className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div>
              <p className="font-heading text-sm font-bold text-primary">
                Nous respectons votre vie privée
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Nous utilisons des cookies pour améliorer votre expérience.
                Consultez notre{" "}
                <Link
                  href="/cookies"
                  className="font-medium text-accent underline underline-offset-2"
                >
                  politique de cookies
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <Button
              size="md"
              variant="accent"
              className="flex-1"
              onClick={() => decide("accepted")}
            >
              Tout accepter
            </Button>
            <Button
              size="md"
              variant="secondary"
              className="flex-1"
              onClick={() => decide("refused")}
            >
              Refuser
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
