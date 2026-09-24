import Link from "next/link";

export default function Breadcrumbs({ label }: { label: string }) {
  return (
    <nav aria-label="Fil d'Ariane" className="px-6 pt-6">
      <ol className="mx-auto flex max-w-5xl items-center gap-2 text-xs text-ink-faint">
        <li>
          <Link href="/" className="transition-colors hover:text-accent-dim">
            Accueil
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-ink-soft" aria-current="page">
          {label}
        </li>
      </ol>
    </nav>
  );
}
