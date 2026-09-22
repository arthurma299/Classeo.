import Link from "next/link";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/comment-ca-marche", label: "Comment ça marche" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Confidentialité" },
  { href: "/cgu", label: "CGU" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border-soft">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <p className="font-serif text-lg font-semibold text-ink">
              Classeo<span className="text-gold">.</span>
            </p>
            <p className="mt-2 max-w-[32ch] text-sm text-ink-faint">
              Automatisation documentaire pour indépendants, artisans et petites entreprises.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-soft transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-border-soft pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-ink-faint">
            © 2026 Classeo — un projet d&apos;Arthur Maurizi
          </p>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-ink-faint transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
