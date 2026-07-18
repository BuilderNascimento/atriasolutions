"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navItems } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onHome = pathname === "/";
  const transparent = onHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-secondary/60 py-3 shadow-soft"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <Link
          href="/"
          aria-label={`${siteConfig.name}, accueil`}
          className="relative z-10"
        >
          <Logo dark={!transparent} />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    transparent
                      ? "text-white/85 hover:text-white"
                      : "text-primary/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full ${
                        transparent ? "bg-accent-400" : "bg-accent"
                      }`}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.contact.phoneHref}
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              transparent
                ? "text-white/85 hover:text-white"
                : "text-primary/80 hover:text-primary"
            }`}
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            {siteConfig.contact.phone}
          </a>
          <ButtonLink href="/devis" size="md" variant="accent">
            {siteConfig.brand.ctaPrimary}
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
          className={`relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
            transparent && !open
              ? "text-white hover:bg-white/10"
              : "text-primary hover:bg-secondary-100"
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-0 bg-white lg:hidden"
          >
            <div className="container-x flex h-full flex-col pt-28 pb-10">
              <ul className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      className="block border-b border-secondary/60 py-4 font-heading text-2xl font-bold text-primary"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3">
                <ButtonLink href="/devis" variant="accent" className="w-full">
                  {siteConfig.brand.ctaPrimary}
                </ButtonLink>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-secondary py-3.5 font-medium text-primary"
                >
                  <Phone className="h-4 w-4" strokeWidth={1.75} />
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
