import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

type Crumb = { name: string; href: string };

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
};

export function PageHeader({ eyebrow, title, description, breadcrumbs }: Props) {
  return (
    <section className="relative overflow-hidden bg-primary pt-36 pb-20 text-white lg:pt-44 lg:pb-28">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -left-32 -top-20 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary-400/20 blur-3xl" />

      <div className="container-x relative">
        {breadcrumbs && (
          <Reveal>
            <nav aria-label="Fil d'Ariane" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1 text-sm text-secondary/70">
                {breadcrumbs.map((crumb, i) => (
                  <li key={crumb.href} className="flex items-center gap-1">
                    {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                    {i === breadcrumbs.length - 1 ? (
                      <span className="text-white/90">{crumb.name}</span>
                    ) : (
                      <Link href={crumb.href} className="transition-colors hover:text-white">
                        {crumb.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        )}

        <Reveal>
          {eyebrow && (
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
              <span className="h-px w-6 bg-accent-400" />
              {eyebrow}
            </span>
          )}
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary/85">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
