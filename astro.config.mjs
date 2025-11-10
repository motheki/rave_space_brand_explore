// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders} from "astro/config";

import { SITE } from "./src/consts";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: SITE.URL,
  integrations: [sitemap()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    clientPrerender: true,
      fonts: [
        {
          provider: fontProviders.google(),
          name: "Gasoek One",
          cssVariable: "--font-gasoek"
        },
        {
          provider: fontProviders.google(),
          name: "Martian Mono",
          cssVariable: "--font-martian"
        }
      ]
  },
});
