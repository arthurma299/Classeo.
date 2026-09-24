import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Classeo est conçu et développé par Arthur Maurizi, étudiant en économie à Metz. Découvrez qui se cache derrière l'outil.",
};

export default function AProposPage() {
  return (
    <>
      <Breadcrumbs label="À propos" />
      <section className="px-6 pt-20 pb-24 md:pt-28">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <div className="text-center">
            <p className="mb-4 text-sm font-medium tracking-wide text-accent">
              À propos
            </p>

            <div className="glass mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full font-serif text-2xl text-accent-dim">
              AM
            </div>

            <h1 className="mx-auto max-w-md font-serif text-4xl font-medium text-ink md:text-6xl">
              Derrière Classeo, une seule personne&nbsp;: moi.
            </h1>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-ink-soft">
            Je m&apos;appelle Arthur Maurizi, étudiant en économie à Metz.
          </p>

          <p className="mt-5 leading-relaxed text-ink-soft">
            J&apos;ai commencé à développer Classeo parce que je voyais,
            chez des artisans, des indépendants, de petites entreprises
            autour de moi, le même problème revenir sans arrêt&nbsp;: des
            heures perdues chaque mois à chercher, classer et relancer des
            documents administratifs.
          </p>

          <p className="mt-5 leading-relaxed text-ink-soft">
            Je ne suis pas une agence, ni une grosse structure. Classeo est
            un outil que je conçois, que j&apos;installe et que je fais
            évoluer moi-même, avec chacun de mes clients. Ce qui
            m&apos;intéresse, c&apos;est que vous récupériez du temps pour
            ce qui compte vraiment dans votre activité, pas que vous
            appreniez à utiliser un nouveau logiciel compliqué.
          </p>

          <p className="mt-5 leading-relaxed text-ink-soft">
            Si vous avez une question, une remarque, ou juste envie de voir
            si Classeo peut vous aider, écrivez-moi directement&nbsp;: je
            réponds moi-même, sous 48h.
          </p>

          <p className="mt-6 font-serif text-lg italic text-ink-soft">
            — Arthur
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full btn-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
          >
            Discuter avec moi
          </Link>
        </Reveal>
      </div>
      </section>
    </>
  );
}
