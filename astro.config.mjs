// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Cossette Texte",
      cssVariable: "--font-cossette",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Cossette Titre",
      cssVariable: "--font-cossette-titre",
    },
  ],

  integrations: [svelte()],
});
