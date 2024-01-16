import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://ronniedroid.github.io',
  base: 'fossifyorg.github.io',
  i18n: {
    defaultLocale: "en",
    locales: ["en", 'ar'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  integrations: [icon()]
});