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

const FAQS = [
  {
    q: "Combien de temps faut-il pour la mise en place ?",
    a: "Comptez quelques jours entre notre premier échange et la mise en route complète, le temps de connecter vos documents et de régler le tri automatique à votre façon. Vous n'avez rien à faire de votre côté pendant cette phase.",
  },
  {
    q: "Mes données sont-elles en sécurité ?",
    a: "Oui. Vos documents servent uniquement au tri et à la recherche, ils ne sont ni partagés ni revendus. Le détail complet figure dans la politique de confidentialité.",
  },
  {
    q: "Que se passe-t-il si je change d'avis ?",
    a: "L'abonnement est sans engagement de durée : vous pouvez arrêter à tout moment. Seule la mise en place initiale reste due, puisqu'elle correspond au travail de configuration déjà réalisé.",
  },
  {
    q: "Est-ce compatible avec mon expert-comptable actuel ?",
    a: "Oui. Classeo génère un export mensuel clair, prêt à être transmis tel quel à votre comptable, quel qu'il soit, sans changer vos habitudes de travail avec lui.",
  },
  {
    q: "Faut-il des compétences techniques ?",
    a: "Aucune. Une fois la mise en place terminée, il n'y a rien à apprendre ni à configurer : Classeo s'adapte à votre façon de travailler, pas l'inverse.",
  },
];

// Scattered (s*) -> settled (t*) transforms for the little "documents" that
// open the hero: chaotic pile first, tidy fanned stack once it resolves.
const DOCS = [
  { sx: "-96px", sy: "-40px", sr: "-16deg", tx: "-16px", ty: "-8px", tr: "-6deg" },
  { sx: "88px", sy: "-64px", sr: "12deg", tx: "-8px", ty: "-4px", tr: "-2deg" },
  { sx: "-78px", sy: "52px", sr: "9deg", tx: "0px", ty: "0px", tr: "1deg" },
  { sx: "104px", sy: "34px", sr: "-11deg", tx: "8px", ty: "4px", tr: "4deg" },
  { sx: "14px", sy: "-84px", sr: "6deg", tx: "16px", ty: "8px", tr: "7deg" },
  { sx: "-24px", sy: "78px", sr: "-7deg", tx: "-22px", ty: "10px", tr: "-9deg" },
] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero — problem -> transition -> solution, in one continuous stage */}
      <section className="border-b border-border-soft px-6 pt-16 pb-16 md:pt-20 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative mx-auto grid h-44 w-full max-w-xs place-items-center md:h-52">
            <div className="scale-[0.62] [grid-area:1/1] sm:scale-90 md:scale-100">
              {DOCS.map((d, i) => (
                <div
                  key={i}
                  className="hero-doc absolute left-1/2 top-1/2 h-16 w-[52px] rounded-lg border bg-surface shadow-sm"
                  style={
                    {
                      "--sx": d.sx,
                      "--sy": d.sy,
                      "--sr": d.sr,
                      "--tx": d.tx,
                      "--ty": d.ty,
                      "--tr": d.tr,
                    } as React.CSSProperties
                  }
                >
                  <div className="absolute inset-x-2.5 top-3 h-[3px] rounded-full bg-border-soft" />
                  <div className="absolute inset-x-2.5 top-6 h-[3px] w-2/3 rounded-full bg-border-soft" />
                </div>
              ))}
            </div>

            <p className="hero-problem [grid-area:1/1] max-w-[22ch] font-serif text-2xl font-medium text-ink md:text-3xl">
              Trop de temps perdu dans la paperasse.
            </p>
          </div>

          <div className="hero-solution">
            <p className="mb-5 inline-flex items-center justify-center gap-2.5 text-sm font-medium tracking-wide text-accent">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Automatisation documentaire
            </p>
            <h1 className="mx-auto max-w-2xl font-serif text-4xl font-medium leading-[1.15] text-ink md:text-6xl">
              Vos documents, classés tout seuls.{" "}
              <span className="italic text-accent-dim">Vous</span>, enfin
              tranquille.
            </h1>
          </div>

          <p className="hero-lede mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Factures, contrats, justificatifs qui s&apos;accumulent,
            qu&apos;on retrouve jamais au bon moment, des échéances
            qu&apos;on découvre trop tard&hellip; Classeo trie, range et
            retrouve vos documents à votre place, pour que vous n&apos;ayez
            plus à y penser.
          </p>
          <div className="hero-ctas mt-9 flex flex-wrap justify-center gap-3.5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full btn-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
            >
              Me contacter
            </Link>
            <Link
              href="#demo"
              className="glass glass-interactive inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:text-accent-dim"
            >
              Voir la démo
            </Link>
          </div>
        </div>
      </section>

      {/* Capability marquee */}
      <div className="glass-soft overflow-hidden py-5">
        <div className="flex w-max animate-marquee gap-10 [animation-play-state:running] hover:[animation-play-state:paused]">
          {[...CAPABILITIES, ...CAPABILITIES, ...CAPABILITIES].map(
            (item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-sm text-ink-faint"
              >
                <span className="h-1 w-1 rounded-full bg-accent" />
                {item}
              </span>
            )
          )}
        </div>
      </div>

      {/* Problem */}
      <section className="border-b border-border-soft px-6 py-28 md:py-36">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <p className="mb-4 text-sm font-medium tracking-wide text-accent">
                Le problème
              </p>
              <h2 className="font-serif text-4xl font-medium text-ink md:text-5xl">
                Vous reconnaissez cette situation&nbsp;?
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {PAIN_POINTS.map((text) => (
              <div
                key={text}
                className="glass glass-interactive h-full rounded-lg p-6 text-[15px] leading-relaxed text-ink"
              >
                <span className="mr-2 text-red-soft">—</span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="border-b border-border-soft px-6 py-28 md:py-36">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <p className="mb-4 text-sm font-medium tracking-wide text-accent">
                La solution
              </p>
              <h2 className="font-serif text-4xl font-medium text-ink md:text-5xl">
                Classeo s&apos;occupe du tri, vous récupérez le temps
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Classeo est un système qui range vos documents automatiquement
                dès leur arrivée, les retrouve en une phrase, et vous alerte
                avant les échéances importantes. Pas de logiciel compliqué à
                apprendre, pas d&apos;organisation à revoir&nbsp;: Classeo
                s&apos;adapte à votre façon de travailler, pas l&apos;inverse.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-2xl gap-x-8 gap-y-5 sm:grid-cols-2">
            {MINI_FEATURES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-raised text-accent-dim">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <span className="text-[15px] text-ink">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/comment-ca-marche"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-dim transition-colors hover:text-accent"
            >
              Voir en détail comment ça marche
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Demo video */}
      <section id="demo" className="border-b border-border-soft px-6 py-28 md:py-36">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <p className="mb-4 text-sm font-medium tracking-wide text-accent">
                En pratique
              </p>
              <h2 className="font-serif text-4xl font-medium text-ink md:text-5xl">
                Voyez Classeo en action
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Une démonstration concrète, en quelques minutes&nbsp;: le tri
                automatique, la recherche en langage naturel et les alertes,
                tels que vous les utiliseriez au quotidien.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass mt-8 overflow-hidden rounded-2xl">
              <video controls preload="metadata" className="block w-full bg-black">
                <source src="/assets/demo-classeo.mp4" type="video/mp4" />
                Votre navigateur ne prend pas en charge la lecture vidéo.
              </video>
            </div>
            <p className="mt-4 text-center text-xs text-ink-faint">
              Vidéo de démonstration. Classeo est un outil jeune&nbsp;: les
              premiers clients sont en cours d&apos;intégration, cette
              démonstration reste la meilleure façon de juger par vous-même.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border-soft px-6 py-28 md:py-36">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <p className="mb-4 text-sm font-medium tracking-wide text-accent">
                Questions fréquentes
              </p>
              <h2 className="font-serif text-4xl font-medium text-ink md:text-5xl">
                Ce qu&apos;on me demande le plus souvent
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 space-y-3">
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="glass group rounded-xl px-6 py-5 open:pb-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-ink">
                  {q}
                  <span className="shrink-0 text-accent-dim transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-6 py-28 md:py-36">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="glass rounded-2xl px-8 py-16 text-center sm:px-14 md:py-20">
              <h2 className="mx-auto max-w-md font-serif text-3xl font-medium text-ink md:text-4xl">
                Envie de voir ce que Classeo peut faire pour votre gestion
                documentaire&nbsp;?
              </h2>
              <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink-soft">
                Un échange de quinze minutes suffit pour savoir si Classeo
                peut vous faire gagner du temps. Pas d&apos;engagement, pas
                de discours commercial, juste un regard sur votre situation.
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
