import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import "./globals.css";

const baskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const description =
  "Classeo automatise le tri, la recherche et le suivi de vos documents administratifs. Pensé pour les indépendants, artisans et petites entreprises.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Classeo — Vos documents, classés tout seuls",
    template: "%s — Classeo",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
    title: "Classeo — Vos documents, classés tout seuls",
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Classeo — Vos documents, classés tout seuls",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description,
  url: SITE_URL,
  founder: {
    "@type": "Person",
    name: "Arthur Maurizi",
  },
  address: {
    "@type": "PostalAddress",
    postalCode: "57100",
    addressCountry: "FR",
  },
  areaServed: "FR",
  priceRange: "€€",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${baskerville.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {plausibleDomain && (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className="min-h-full flex flex-col font-sans text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
