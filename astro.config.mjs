import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import vue from "@astrojs/vue";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  plugins: ['@astrojs/svelte'],
  integrations: [svelte(), react(), vue({ appEntrypoint: '/src/pages/_app' }), tailwind()],
  vite: {
    ssr: {
      noExternal: ["@smui/drawer",  "@smui/list", "@smui/button",],
    },
  }
});