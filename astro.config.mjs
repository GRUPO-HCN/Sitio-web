// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://GRUPO-HCN.github.io',
  base: '/Sitio-web/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
