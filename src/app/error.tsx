"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // No analytics/logging backend wired up yet — keep this as the single
    // place to send client errors to a monitoring service later.
  }, [error]);

  return (
    <section className="px-6 py-28 text-center">
      <div className="mx-auto max-w-md">
        <p className="mb-4 text-sm font-medium tracking-wide text-accent">
          Une erreur est survenue
        </p>
        <h1 className="font-serif text-4xl font-medium text-ink">
          Quelque chose s&apos;est mal passé
        </h1>
        <p className="mt-4 leading-relaxed text-ink-soft">
          La page a rencontré un problème inattendu. Vous pouvez réessayer,
          ou revenir à l&apos;accueil.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-full btn-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="glass glass-interactive inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:text-accent-dim"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
