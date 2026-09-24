import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  SortIcon,
  SearchIcon,
  BellIcon,
  LayersIcon,
  ExportIcon,
  ChartIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Comment ça marche",
  description:
    "Les six fonctions de Classeo, expliquées simplement : tri automatique, recherche en langage naturel, alertes d'échéances, détection de doublons, export comptable et tableau de bord.",
};

const FEATURES = [
  {
    num: "01",
    icon: SortIcon,
    title: "Tri automatique",
    text: "Dès qu'un document arrive (facture, contrat, justificatif), Classeo le lit, comprend de quoi il s'agit et le range dans le bon dossier. Vous n'avez rien à trier vous-même.",
  },
  {
    num: "02",
    icon: SearchIcon,
    title: "Recherche en langage naturel",
    text: "Posez votre question comme vous la formuleriez à voix haute : « montre-moi les factures de la Librairie Moreau » ou « quels contrats se terminent bientôt ? ». Classeo comprend et répond directement.",
  },
  {
    num: "03",
    icon: BellIcon,
    title: "Alertes d'échéances",
    text: "Un contrat qui se renouvelle, une facture à régler, un abonnement à résilier à temps : Classeo vous prévient avant la date, pour que vous ne soyez plus jamais pris de court.",
  },
  {
    num: "04",
    icon: LayersIcon,
    title: "Détection de doublons",
    text: "Deux fois le même justificatif envoyé par erreur ? Classeo les repère automatiquement et évite que vos dossiers se remplissent de copies inutiles.",
  },
  {
    num: "05",
    icon: ExportIcon,
    title: "Export mensuel comptable",
    text: "Chaque mois, un export propre et classé est généré automatiquement, prêt à être envoyé tel quel à votre comptable, sans rien préparer de votre côté.",
  },
  {
    num: "06",
    icon: ChartIcon,
    title: "Tableau de bord",
    text: "Une vue d'ensemble claire de tous vos documents : ce qui est classé, ce qui attend une vérification, ce qui arrive à échéance. En un coup d'œil, vous savez où vous en êtes.",
  },
];

export default function CommentCaMarchePage() {
  return (
    <>
      <Breadcrumbs label="Comment ça marche" />
      <section className="border-b border-border-soft px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <p className="mb-4 text-sm font-medium tracking-wide text-accent">
              Comment ça marche
            </p>
            <h1 className="font-serif text-4xl font-medium text-ink md:text-6xl">
              Six fonctions simples, qui font le travail à votre place
            </h1>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Pas de jargon technique, pas de configuration compliquée à
              apprendre. Voici, en clair, ce que Classeo fait pour vous au
              quotidien.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-28 md:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ num, icon: Icon, title, text }) => (
              <div
                key={num}
                className="glass glass-interactive h-full rounded-xl p-7 transition-transform hover:-translate-y-1"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-raised text-accent-dim">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-serif text-sm text-ink-faint">
                    {num}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium text-ink">
                  {title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:py-36">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="glass rounded-2xl px-8 py-16 text-center sm:px-14 md:py-20">
              <h2 className="font-serif text-3xl font-medium text-ink md:text-4xl">
                Ces fonctionnalités vous parlent&nbsp;?
              </h2>
              <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink-soft">
                Discutons de votre cas précis&nbsp;: chaque activité a ses
                propres documents et ses propres échéances, et Classeo
                s&apos;adapte en conséquence.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full btn-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
              >
                Me contacter
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
