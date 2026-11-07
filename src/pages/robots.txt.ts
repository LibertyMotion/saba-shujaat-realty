import type { APIRoute } from 'astro';

// Ad landing pages are noindex via meta tag but must stay crawlable for Google AdsBot.
export const GET: APIRoute = ({ site }) =>
  new Response(
    import.meta.env.PUBLIC_PREVIEW === 'true'
      ? 'User-agent: *\nDisallow: /\n' // preview builds stay out of search engines
      : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`,
    {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    }
  );
