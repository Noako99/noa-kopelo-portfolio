import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  /* The site is served from the root of its own domain now, not from a folder
     under github.io, so there is no base path. public/CNAME carries the domain
     into every build — the deploy runs from an Action, so nothing else would
     put it in dist/. */
  site: 'https://noakopelo.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: [],
  },
});
