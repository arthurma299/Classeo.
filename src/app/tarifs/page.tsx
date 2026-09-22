import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tarifs de lancement Classeo : mise en place à partir de 800€, abonnement mensuel à partir de 60€/mois.",
};

const SETUP_ITEMS = [
  "Connexion de vos documents",
  "Réglages du tri automatique",
  "Configuration des alertes d'échéances",
  "Mise en place du tableau de bord",
];

const SUB_ITEMS = [
  "Fonctionnement au quotidien",
  "Mises à jour incluses",
  "Support inclus",
  "Sans engagement de durée",
];

export default function TarifsPage() {
  return (
    <>
      <section className="border-b border-border-soft px-6 pt-16 pb-14 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="mb-4 text-sm font-medium tracking-wide text-gold">
              Tarifs
            </p>
            <h1 className="max-w-xl font-serif text-4xl font-medium text-ink md:text-5xl">
              Une mise en place, un abonnement, pas de mauvaise surprise
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
              Classeo se met en place une fois, puis fonctionne pour vous
              chaque mois. Voici les tarifs de lancement, réservés aux
              premiers clients.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8 shadow-[0_1px_3px_rgba(28,25,23,0.05)]">
                <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">
                  Mise en place
                </p>
                <p className="mt-3 font-serif text-4xl text-ink">
                  à partir de 800€
                </p>
                <span className="mt-4 inline-flex w-fit items-center rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs text-gold-dim">
                  Tarif de lancement
                </span>
                <p className="mt-5 text-[14.5px] leading-relaxed text-ink-soft">
                  Configuration complète adaptée à votre activité.
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-border-soft pt-5">
                  {SETUP_ITEMS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-ink"
                    >
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-dim" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8 shadow-[0_1px_3px_rgba(28,25,23,0.05)]">
                <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">
                  Abonnement mensuel
                </p>
                <p className="mt-3 font-serif text-4xl text-ink">
                  à partir de 60€
                  <span className="text-lg text-ink-soft">/mois</span>
                </p>
                <span className="mt-4 inline-flex w-fit items-center rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs text-gold-dim">
                  Tarif de lancement
                </span>
                <p className="mt-5 text-[14.5px] leading-relaxed text-ink-soft">
                  Fonctionnement, mises à jour et support inclus.
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-border-soft pt-5">
                  {SUB_ITEMS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-ink"
                    >
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-dim" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="mt-6 rounded-xl border border-border-soft bg-surface-raised p-6 text-sm leading-relaxed text-ink-soft">
              <strong className="text-ink">
                Ces montants sont un tarif de lancement
              </strong>
              , proposé aux premiers clients de Classeo. Le prix final
              dépend de la taille de votre entreprise et du volume de
              documents à traiter — écrivez-moi pour un tarif adapté
              précisément à votre situation, sans engagement de votre part.
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-lg"
              >
                Demander un tarif personnalisé
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
