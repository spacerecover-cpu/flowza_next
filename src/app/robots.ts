import type { MetadataRoute } from 'next';

// Metadata routes are route handlers, so a static export needs them pinned to
// build time rather than left for a server that will not exist.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://flowza.ai/sitemap.xml',
  };
}
