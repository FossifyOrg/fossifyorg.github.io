import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.fossify.org',
  i18n: {
    defaultLocale: "en",
    locales: ["en", 'ar'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [icon()]
});