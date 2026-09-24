import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment Classeo collecte, utilise et protège les données transmises via le formulaire de contact, conformément au RGPD.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Breadcrumbs label="Politique de confidentialité" />
      <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 text-sm font-medium tracking-wide text-accent">
          Confidentialité
        </p>
        <h1 className="font-serif text-3xl font-medium text-ink md:text-4xl">
          Politique de confidentialité
        </h1>
        <p className="mt-4 text-sm text-ink-faint">
          Dernière mise à jour&nbsp;: 22 septembre 2026
        </p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-soft">
          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              1. Qui est responsable du traitement&nbsp;?
            </h2>
            <p className="mt-3">
              Classeo est édité par Arthur Maurizi, entrepreneur individuel
              (micro-entreprise, en cours d&apos;immatriculation), à titre
              de responsable du traitement des données décrites ci-dessous.
              Pour toute question relative à vos données, vous pouvez
              écrire à{" "}
              <a
                href="mailto:arthur.maurizi.automatisation@gmail.com"
                className="text-accent-dim underline underline-offset-2"
              >
                arthur.maurizi.automatisation@gmail.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              2. Quelles données sont collectées&nbsp;?
            </h2>
            <p className="mt-3">
              Le site collecte uniquement les informations que vous saisissez
              volontairement dans le formulaire de contact&nbsp;: nom,
              entreprise, adresse email et message. Aucune autre donnée
              personnelle n&apos;est collectée par défaut. Si un outil de
              mesure d&apos;audience respectueux de la vie privée (de type
              Plausible, sans cookie ni identifiant publicitaire) est activé,
              seules des statistiques agrégées et anonymes de fréquentation
              sont produites, sans qu&apos;aucune donnée individuelle ne soit
              stockée.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              3. Pourquoi ces données sont-elles collectées&nbsp;?
            </h2>
            <p className="mt-3">
              Les informations transmises via le formulaire de contact sont
              utilisées exclusivement pour répondre à votre demande
              concernant Classeo. Elles ne sont ni revendues, ni utilisées à
              des fins de prospection non sollicitée, ni transmises à des
              tiers à des fins commerciales.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              4. Qui reçoit ces données&nbsp;?
            </h2>
            <p className="mt-3">
              Les messages du formulaire de contact sont traités par
              Netlify, Inc., l&apos;hébergeur du site, qui agit en tant que
              sous-traitant pour la réception et le stockage temporaire des
              soumissions de formulaire (service « Netlify Forms »). Netlify
              peut héberger ces données en dehors de l&apos;Union
              européenne&nbsp;; des garanties contractuelles standard
              (clauses contractuelles types) encadrent ce transfert.
              Arthur Maurizi est seul destinataire final de vos messages.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              5. Combien de temps ces données sont-elles conservées&nbsp;?
            </h2>
            <p className="mt-3">
              Les données transmises via le formulaire de contact sont
              conservées le temps nécessaire pour traiter votre demande, et
              au maximum 3 ans à compter de notre dernier échange, sauf
              obligation légale contraire.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              6. Quels sont vos droits&nbsp;?
            </h2>
            <p className="mt-3">
              Conformément au Règlement Général sur la Protection des
              Données (RGPD) et à la loi Informatique et Libertés, vous
              disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement, de limitation, d&apos;opposition et de
              portabilité sur vos données personnelles. Vous pouvez exercer
              ces droits à tout moment en écrivant à{" "}
              <a
                href="mailto:arthur.maurizi.automatisation@gmail.com"
                className="text-accent-dim underline underline-offset-2"
              >
                arthur.maurizi.automatisation@gmail.com
              </a>
              . Vous disposez également du droit d&apos;introduire une
              réclamation auprès de la CNIL (www.cnil.fr).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-ink">
              7. Cookies
            </h2>
            <p className="mt-3">
              Classeo n&apos;utilise pas de cookies de suivi publicitaire.
              Un bandeau d&apos;information vous permet d&apos;accepter ou
              de refuser les mesures d&apos;audience éventuellement
              activées ; votre choix est mémorisé localement dans votre
              navigateur (localStorage), sans transmission à un tiers.
            </p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
