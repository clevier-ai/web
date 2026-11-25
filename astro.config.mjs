// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://clevier.ai",
  adapter: cloudflare(),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
          ca: "ca-ES",
          en: "en-GB",
        },
      },
    }),
  ],
  redirects: {
    "/fr": "/",
    "/de": "/",
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
