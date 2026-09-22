import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Classeo est conçu et développé par Arthur Maurizi, étudiant en économie à Metz. Découvrez qui se cache derrière l'outil.",
};

export default function AProposPage() {
  return (
    <section className="px-6 pt-16 pb-20 md:pt-24">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <p className="mb-4 text-sm font-medium tracking-wide text-gold">
            À propos
          </p>

          <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-border bg-gradient-to-br from-surface-raised to-surface font-serif text-2xl text-gold-dim shadow-[0_1px_3px_rgba(28,25,23,0.06)]">
            AM
          </div>

          <h1 className="max-w-md font-serif text-4xl font-medium text-ink md:text-5xl">
            Derrière Classeo, une seule personne&nbsp;: moi.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Je m&apos;appelle Arthur Maurizi, étudiant en économie à Metz.
          </p>

          <p className="mt-5 leading-relaxed text-ink-soft">
            J&apos;ai commencé à développer Classeo parce que je voyais,
            autour de moi — chez des artisans, des indépendants, de petites
            entreprises — le même problème revenir sans arrêt&nbsp;: des
            heures perdues chaque mois à chercher, classer et relancer des
            documents administratifs.
          </p>

          <p className="mt-5 leading-relaxed text-ink-soft">
            Je ne suis pas une agence, ni une grosse structure. Classeo est
            un outil que je conçois, que j&apos;installe et que je fais
            évoluer moi-même, avec chacun de mes clients. Ce qui
            m&apos;intéresse, c&apos;est que vous récupériez du temps pour
            ce qui compte vraiment dans votre activité — pas que vous
            appreniez à utiliser un nouveau logiciel compliqué.
          </p>

          <p className="mt-5 leading-relaxed text-ink-soft">
            Si vous avez une question, une remarque, ou juste envie de voir
            si Classeo peut vous aider, vous pouvez m&apos;écrire
            directement — je réponds moi-même, sous 48h.
          </p>

          <p className="mt-6 font-serif text-lg italic text-ink-soft">
            — Arthur
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-lg"
          >
            Discuter avec moi
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
