import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
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
      <Breadcrumbs label="Tarifs" />
      <section className="border-b border-border-soft px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <p className="mb-4 text-sm font-medium tracking-wide text-accent">
              Tarifs
            </p>
            <h1 className="font-serif text-4xl font-medium text-ink md:text-6xl">
              Une mise en place, un abonnement, pas de mauvaise surprise
            </h1>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Classeo se met en place une fois, puis fonctionne pour vous
              chaque mois. Voici les tarifs de lancement, réservés aux
              premiers clients.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-28 md:py-36">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal>
              <div className="glass glass-interactive flex h-full flex-col rounded-2xl p-8">
                <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">
                  Mise en place
                </p>
                <p className="mt-3 font-serif text-4xl text-ink">
                  à partir de 800€
                </p>
                <span className="mt-4 inline-flex w-fit items-center rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs text-accent-dim">
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
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-dim" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="glass glass-interactive flex h-full flex-col rounded-2xl p-8">
                <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">
                  Abonnement mensuel
                </p>
                <p className="mt-3 font-serif text-4xl text-ink">
                  à partir de 60€
                  <span className="text-lg text-ink-soft">/mois</span>
                </p>
                <span className="mt-4 inline-flex w-fit items-center rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs text-accent-dim">
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
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-dim" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="glass-soft mt-6 rounded-xl p-6 text-sm leading-relaxed text-ink-soft">
              <strong className="text-ink">
                Ces montants sont un tarif de lancement
              </strong>
              , proposé aux premiers clients de Classeo. Le prix final
              dépend de la taille de votre entreprise et du volume de
              documents à traiter. Écrivez-moi pour un tarif adapté
              précisément à votre situation, sans engagement de votre part.
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full btn-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
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
