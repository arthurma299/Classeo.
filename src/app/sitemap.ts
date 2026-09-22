import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const ROUTES = [
  "",
  "/comment-ca-marche",
  "/tarifs",
  "/contact",
  "/a-propos",
  "/politique-de-confidentialite",
  "/cgu",
  "/mentions-legales",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}
