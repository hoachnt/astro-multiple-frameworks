import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
    integrations: [svelte(), react(), vue()],
    vite: {
        ssr: {
            noExternal: [
                "@smui/drawer",
                "@smui/common",
                "@smui/list",
                "@smui/button",
                "@mui/material",
            ],
        },
    },
});
