import { defineConfig } from 'astro/config';
import lightningcss from 'vite-plugin-lightningcss';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [
      lightningcss({
        browserslist: '>= 0.25%',
      }),
    ]
  }
});