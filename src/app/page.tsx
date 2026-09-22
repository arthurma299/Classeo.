import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  SortIcon,
  SearchIcon,
  BellIcon,
  LayersIcon,
  ExportIcon,
  ChartIcon,
  ArrowRightIcon,
} from "@/components/Icons";

const CAPABILITIES = [
  "Tri automatique",
  "Recherche en langage naturel",
  "Alertes d'échéances",
  "Détection de doublons",
  "Export mensuel comptable",
  "Tableau de bord",
];

const PAIN_POINTS = [
  "Une facture égarée qu'il faut chercher pendant vingt minutes dans les mails.",
  "Un contrat qui se renouvelle tout seul parce que personne n'a vu la date passer.",
  "Des dossiers qui s'entassent, jamais vraiment triés, « à faire plus tard ».",
  "Un export à préparer à la main chaque mois pour votre comptable.",
];

const MINI_FEATURES = [
  { icon: SortIcon, label: "Tri automatique de vos documents" },
  { icon: SearchIcon, label: "Recherche en langage naturel" },
  { icon: BellIcon, label: "Alertes d'échéances" },
  { icon: LayersIcon, label: "Détection de doublons" },
  { icon: ExportIcon, label: "Export mensuel comptable" },
  { icon: ChartIcon, label: "Tableau de bord clair" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border-soft px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2.5 text-sm font-medium tracking-wide text-gold">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              Automatisation documentaire
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="max-w-2xl font-serif text-4xl font-medium leading-[1.15] text-ink md:text-6xl">
              Vos documents, classés tout seuls.{" "}
              <span className="italic text-gold-dim">Vous</span>, enfin
              tranquille.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Factures, contrats, justificatifs qui s&apos;accumulent,
              qu&apos;on retrouve jamais au bon moment, des échéances
              qu&apos;on découvre trop tard&hellip; Classeo trie, range et
              retrouve vos documents à votre place — pour que vous
              n&apos;ayez plus à y penser.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-lg"
              >
                Me contacter
              </Link>
              <Link
                href="#demo"
                className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-gold-dim hover:text-gold-dim"
              >
                Voir la démo
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capability marquee */}
      <div className="overflow-hidden border-b border-border-soft bg-surface py-5">
        <div className="flex w-max animate-marquee gap-10 [animation-play-state:running] hover:[animation-play-state:paused]">
          {[...CAPABILITIES, ...CAPABILITIES, ...CAPABILITIES].map(
            (item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-sm text-ink-faint"
              >
                <span className="h-1 w-1 rounded-full bg-gold" />
                {item}
              </span>
            )
          )}
        </div>
      </div>

      {/* Problem */}
      <section className="border-b border-border-soft px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="mb-4 text-sm font-medium tracking-wide text-gold">
              Le problème
            </p>
            <h2 className="max-w-xl font-serif text-3xl font-medium text-ink">
              Vous reconnaissez cette situation&nbsp;?
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {PAIN_POINTS.map((text, i) => (
              <Reveal key={text} delay={i * 80}>
                <div className="h-full rounded-lg border border-border bg-surface p-6 text-[15px] leading-relaxed text-ink shadow-[0_1px_3px_rgba(28,25,23,0.05)] transition-shadow hover:shadow-[0_4px_16px_rgba(28,25,23,0.08)]">
                  <span className="mr-2 text-red-soft">—</span>
                  {text}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="border-b border-border-soft px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="mb-4 text-sm font-medium tracking-wide text-gold">
              La solution
            </p>
            <h2 className="max-w-xl font-serif text-3xl font-medium text-ink">
              Classeo s&apos;occupe du tri, vous récupérez le temps
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
              Classeo est un système qui range vos documents automatiquement
              dès leur arrivée, les retrouve en une phrase, et vous alerte
              avant les échéances importantes. Pas de logiciel compliqué à
              apprendre, pas d&apos;organisation à revoir&nbsp;: Classeo
              s&apos;adapte à votre façon de travailler, pas l&apos;inverse.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {MINI_FEATURES.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={i * 60}>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-raised text-gold-dim">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-[15px] text-ink">{label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={360}>
            <Link
              href="/comment-ca-marche"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-gold-dim transition-colors hover:text-gold"
            >
              Voir en détail comment ça marche
              <ArrowRightIcon />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Demo video */}
      <section id="demo" className="border-b border-border-soft px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="mb-4 text-sm font-medium tracking-wide text-gold">
              En pratique
            </p>
            <h2 className="max-w-xl font-serif text-3xl font-medium text-ink">
              Voyez Classeo en action
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
              Une démonstration concrète, en quelques minutes&nbsp;: le tri
              automatique, la recherche en langage naturel et les alertes,
              tels que vous les utiliseriez au quotidien.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_48px_-28px_rgba(28,25,23,0.25)]">
              <video controls preload="metadata" className="block w-full bg-black">
                <source src="/assets/demo-classeo.mp4" type="video/mp4" />
                Votre navigateur ne prend pas en charge la lecture vidéo.
              </video>
            </div>
            <p className="mt-4 text-center text-xs text-ink-faint">
              Vidéo de démonstration — aucune configuration nécessaire de
              votre côté.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface px-8 py-14 text-center shadow-[0_4px_16px_rgba(28,25,23,0.06)] sm:px-14">
              <h2 className="mx-auto max-w-md font-serif text-3xl font-medium text-ink">
                Envie de voir ce que Classeo peut faire pour votre gestion
                documentaire&nbsp;?
              </h2>
              <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink-soft">
                Un échange de quinze minutes suffit pour savoir si Classeo
                peut vous faire gagner du temps. Pas d&apos;engagement, pas
                de discours commercial — juste un regard sur votre
                situation.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-lg"
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
