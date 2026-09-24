"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/comment-ca-marche", label: "Comment ça marche" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/a-propos", label: "À propos" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-nav sticky top-0 z-30">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-5 px-6 py-4">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          Classeo<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-sm transition-colors ${
                  isActive ? "text-accent" : "text-ink-soft hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full btn-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
          >
            Me contacter
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="glass-soft flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="glass-nav border-t border-border-soft px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-base ${
                  pathname === link.href ? "text-accent" : "text-ink-soft"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full btn-accent px-5 py-2.5 text-sm font-semibold text-white"
            >
              Me contacter
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
