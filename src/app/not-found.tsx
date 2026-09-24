import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-6 py-28 text-center">
      <div className="mx-auto max-w-md">
        <p className="mb-4 text-sm font-medium tracking-wide text-accent">
          Erreur 404
        </p>
        <h1 className="font-serif text-4xl font-medium text-ink">
          Cette page n&apos;existe pas
        </h1>
        <p className="mt-4 leading-relaxed text-ink-soft">
          Le lien que vous avez suivi est peut-être incorrect, ou la page a
          été déplacée. Retournez à l&apos;accueil pour continuer votre
          visite.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full btn-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
