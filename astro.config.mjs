// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://clevier.ai",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
          ca: "ca-ES",
        },
      },
    }),
  ],
  redirects: {
    "/en": "/",
    "/fr": "/",
    "/de": "/",
    "/en/legal-notice": "/aviso-legal",
    "/en/privacy": "/privacidad",
    "/en/cookies": "/cookies",
    "/fr/mentions-legales": "/aviso-legal",
    "/fr/confidentialite": "/privacidad",
    "/fr/cookies": "/cookies",
    "/de/impressum": "/aviso-legal",
    "/de/datenschutz": "/privacidad",
    "/de/cookies": "/cookies",
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "ca"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
