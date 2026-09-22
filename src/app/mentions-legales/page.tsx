import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Classeo.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 text-sm font-medium tracking-wide text-gold">
          Informations légales
        </p>
        <h1 className="font-serif text-3xl font-medium text-ink md:text-4xl">
          Mentions légales
        </h1>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-soft">
          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              Éditeur du site
            </h2>
            <p className="mt-3">
              Classeo est édité par Arthur Maurizi, entrepreneur individuel.
              <br />
              Statut&nbsp;: Entrepreneur individuel (micro-entreprise), en
              cours d&apos;immatriculation.
              <br />
              SIRET&nbsp;: en cours d&apos;attribution — sera communiqué dès
              réception.
              <br />
              Adresse&nbsp;: 57100, France.
              <br />
              Email de contact&nbsp;:{" "}
              <a
                href="mailto:arthur.maurizi.automatisation@gmail.com"
                className="text-gold-dim underline underline-offset-2"
              >
                arthur.maurizi.automatisation@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              Directeur de la publication
            </h2>
            <p className="mt-3">Arthur Maurizi.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              Hébergement
            </h2>
            <p className="mt-3">
              Le site est hébergé par Netlify, Inc.
              <br />
              512 2nd Street, Suite 200, San Francisco, CA 94107,
              États-Unis.
              <br />
              https://www.netlify.com
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              Propriété intellectuelle
            </h2>
            <p className="mt-3">
              L&apos;ensemble des éléments présents sur ce site (textes,
              visuels, vidéo) est protégé au titre du droit d&apos;auteur et
              reste la propriété exclusive d&apos;Arthur Maurizi, sauf
              mention contraire.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              Données personnelles
            </h2>
            <p className="mt-3">
              Le traitement des données personnelles collectées sur ce site
              est détaillé dans la{" "}
              <Link
                href="/politique-de-confidentialite"
                className="text-gold-dim underline underline-offset-2"
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
