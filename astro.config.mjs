// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production runs at the root of www.blaetterdach.com. The GitHub Pages
// preview sets SITE_URL and BASE_PATH so it can live under /blaetterdach.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://www.blaetterdach.com',
  base: process.env.BASE_PATH ?? '/',
  integrations: [sitemap({ filter: (page) => !/\/(danke|404)\/?$/.test(page) })],
  build: {
    assets: 'assets'
  }
});
