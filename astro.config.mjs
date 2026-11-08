// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Set SITE_URL to the real domain before deploying (e.g. https://www.sabashujaat.com).
// It drives canonical URLs, Open Graph URLs and the sitemap.
const site = process.env.SITE_URL || 'https://www.example.com';

// BASE_PATH is only for previews hosted in a sub-folder (GitHub Pages:
// https://libertymotion.github.io/saba-shujaat-realty/). Leave unset in production.
const base = process.env.BASE_PATH || '/';

/**
 * Pages use root-relative links ("/buy/"). When the site is served from a
 * sub-folder, prefix them after the build so they keep working.
 */
/** @returns {import('astro').AstroIntegration} */
function prefixRootLinks() {
  const prefix = base.replace(/\/$/, '');
  return {
    name: 'prefix-root-links',
    hooks: {
      'astro:build:done': ({ dir }) => {
        if (!prefix) return;
        const root = fileURLToPath(dir);
        /** @type {(d: string) => string[]} */
        const walk = (d) =>
          readdirSync(d).flatMap((f) => {
            const p = join(d, f);
            return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
          });
        const attr = /(\s(?:href|src|action|data-success-url|poster)=")\/(?!\/)/g;
        for (const file of walk(root)) {
          const html = readFileSync(file, 'utf8');
          const out = html.replace(attr, (m, a, offset) =>
            html.startsWith(prefix.slice(1) + '/', offset + m.length) ? m : `${a}${prefix}/`
          );
          if (out !== html) writeFileSync(file, out);
        }
      },
    },
  };
}

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Ad landing pages and utility pages stay out of the sitemap (they are also noindex).
      filter: (page) => !/\/(lp|thank-you)\//.test(page),
    }),
    prefixRootLinks(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
