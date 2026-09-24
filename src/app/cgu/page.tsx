import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description:
    "Conditions générales d'utilisation du site Classeo et du service d'automatisation documentaire.",
};

export default function CguPage() {
  return (
    <>
      <Breadcrumbs label="CGU" />
      <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 text-sm font-medium tracking-wide text-accent">
          Conditions
        </p>
        <h1 className="font-serif text-3xl font-medium text-ink md:text-4xl">
          Conditions générales d&apos;utilisation
        </h1>
        <p className="mt-4 text-sm text-ink-faint">
          Dernière mise à jour&nbsp;: 22 septembre 2026
        </p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-soft">
          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              1. Objet
            </h2>
            <p className="mt-3">
              Les présentes conditions générales d&apos;utilisation (CGU)
              régissent l&apos;accès et l&apos;utilisation du site
              vitrine classeo.fr (le « Site »), édité par Arthur Maurizi.
              Le Site a pour objet de présenter le service Classeo
              d&apos;automatisation documentaire et de permettre aux
              visiteurs d&apos;entrer en contact avec son éditeur. Il ne
              permet ni achat en ligne, ni création de compte.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              2. Acceptation
            </h2>
            <p className="mt-3">
              En accédant au Site, vous reconnaissez avoir pris connaissance
              des présentes CGU et les accepter sans réserve.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              3. Utilisation du formulaire de contact
            </h2>
            <p className="mt-3">
              Le formulaire de contact est réservé à des demandes
              authentiques concernant le service Classeo. Toute utilisation
              abusive, automatisée (spam) ou frauduleuse du formulaire est
              interdite et pourra faire l&apos;objet d&apos;un blocage.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              4. Propriété intellectuelle
            </h2>
            <p className="mt-3">
              L&apos;ensemble des contenus présents sur le Site (textes,
              visuels, vidéo de démonstration, charte graphique) est la
              propriété d&apos;Arthur Maurizi, sauf mention contraire, et ne
              peut être reproduit sans autorisation préalable.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              5. Le service Classeo
            </h2>
            <p className="mt-3">
              Les tarifs, fonctionnalités et modalités du service Classeo
              présentés sur le Site sont donnés à titre indicatif et
              peuvent évoluer. Toute mise en place du service fait l&apos;objet
              d&apos;un échange préalable et, le cas échéant, d&apos;un
              accord spécifique entre Arthur Maurizi et le client, distinct
              des présentes CGU qui ne couvrent que la navigation sur le
              Site.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              6. Responsabilité
            </h2>
            <p className="mt-3">
              Le Site est fourni « en l&apos;état ». Arthur Maurizi met tout
              en œuvre pour assurer l&apos;exactitude des informations
              publiées, mais ne saurait être tenu responsable d&apos;une
              indisponibilité temporaire du Site ou d&apos;erreurs
              involontaires dans son contenu.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              7. Droit applicable
            </h2>
            <p className="mt-3">
              Les présentes CGU sont soumises au droit français. En cas de
              litige, une solution amiable sera recherchée en priorité
              avant toute action judiciaire.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              8. Contact
            </h2>
            <p className="mt-3">
              Pour toute question relative aux présentes CGU, vous pouvez
              utiliser le{" "}
              <Link href="/contact" className="text-accent-dim underline underline-offset-2">
                formulaire de contact
              </Link>{" "}
              du Site.
            </p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
