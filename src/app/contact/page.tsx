import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SubmitButton from "@/components/SubmitButton";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Classeo pour discuter de votre gestion documentaire. Réponse sous 48h.",
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs label="Contact" />
      <section className="px-6 pt-20 pb-24 md:pt-28">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <div className="text-center">
            <p className="mb-4 text-sm font-medium tracking-wide text-accent">
              Contact
            </p>
            <h1 className="mx-auto max-w-md font-serif text-4xl font-medium text-ink md:text-6xl">
              Parlons de votre gestion documentaire
            </h1>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Décrivez-moi rapidement votre situation, je vous réponds sous
              48h avec un retour concret, pas un discours commercial.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/merci"
            className="glass mt-10 rounded-2xl p-8"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Ne pas remplir&nbsp;: <input name="bot-field" />
              </label>
            </p>

            <div className="mb-5">
              <label htmlFor="nom" className="mb-2 block text-sm text-ink-faint">
                Nom
              </label>
              <input
                id="nom"
                name="nom"
                type="text"
                required
                minLength={2}
                maxLength={100}
                placeholder="Votre nom"
                className="w-full rounded-md border border-border bg-surface-raised px-3.5 py-3 text-[15px] text-ink outline-none transition-shadow placeholder:text-ink-faint focus:border-accent-dim focus:ring-4 focus:ring-accent/15"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="entreprise"
                className="mb-2 block text-sm text-ink-faint"
              >
                Entreprise
              </label>
              <input
                id="entreprise"
                name="entreprise"
                type="text"
                maxLength={100}
                placeholder="Nom de votre entreprise (ou activité)"
                className="w-full rounded-md border border-border bg-surface-raised px-3.5 py-3 text-[15px] text-ink outline-none transition-shadow placeholder:text-ink-faint focus:border-accent-dim focus:ring-4 focus:ring-accent/15"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="mb-2 block text-sm text-ink-faint">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={200}
                placeholder="vous@exemple.com"
                className="w-full rounded-md border border-border bg-surface-raised px-3.5 py-3 text-[15px] text-ink outline-none transition-shadow placeholder:text-ink-faint focus:border-accent-dim focus:ring-4 focus:ring-accent/15"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-ink-faint"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                minLength={10}
                maxLength={2000}
                placeholder="Quelques mots sur votre situation documentaire actuelle..."
                className="w-full resize-y rounded-md border border-border bg-surface-raised px-3.5 py-3 text-[15px] text-ink outline-none transition-shadow placeholder:text-ink-faint focus:border-accent-dim focus:ring-4 focus:ring-accent/15"
              />
            </div>

            <div data-netlify-recaptcha="true" className="mb-6" />

            <SubmitButton />
          </form>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 text-center text-xs text-ink-faint">
            Vos informations ne servent qu&apos;à vous répondre. Pas de
            newsletter, pas de démarchage superflu.
          </p>
        </Reveal>
      </div>
      </section>
    </>
  );
}
