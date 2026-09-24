import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Message envoyé",
  description: "Votre message a bien été envoyé à Classeo.",
};

export default function MerciPage() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent-dim">
          <CheckIcon className="h-6 w-6" />
        </div>
        <h1 className="font-serif text-3xl font-medium text-ink">
          Message bien reçu
        </h1>
        <p className="mt-4 leading-relaxed text-ink-soft">
          Merci pour votre message. Je le lis moi-même et je vous réponds
          sous 48h.
        </p>
        <Link
          href="/"
          className="glass glass-interactive mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:text-accent-dim"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
