"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "classeo-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  // The stored choice only exists in the browser, so this must run after
  // mount to keep server- and client-rendered markup identical (avoids a
  // hydration mismatch on this dialog's presence in the DOM).
  useEffect(() => {
    let shouldShow = true;
    try {
      shouldShow = !window.localStorage.getItem(STORAGE_KEY);
    } catch {
      shouldShow = true;
    }
    if (shouldShow) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    }
  }, []);

  function choose(value: "accepted" | "declined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Ignore storage failures; the banner still closes for this visit.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Préférences de cookies"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 px-6 py-5 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-ink-soft">
          Classeo utilise uniquement des mesures d&apos;audience respectueuses
          de la vie privée (sans cookie de suivi publicitaire). Consultez
          notre{" "}
          <Link
            href="/politique-de-confidentialite"
            className="font-medium text-gold-dim underline underline-offset-2"
          >
            politique de confidentialité
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("declined")}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-gold-dim"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gold-hover"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
