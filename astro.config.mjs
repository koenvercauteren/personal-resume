// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  experimental: {
    responsiveImages: true,
  },
  image: {
    experimentalLayout: "constrained",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});
