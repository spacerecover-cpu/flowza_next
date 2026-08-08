import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://flowza.ai';
  const routes = [
    '',
    '/platform',
    '/solutions',
    '/industries',
    '/industries/retail',
    '/industries/logistics',
    '/industries/manufacturing',
    '/industries/services',
    '/industries/construction',
    '/industries/healthcare',
    '/industries/wellness',
    '/industries/public',
    // the nine, in catalogue order
    '/products/finance',
    '/products/logispro',
    '/products/spamaster',
    '/products/fleetza',
    '/products/qrforge',
    '/products/pos',
    '/products/club',
    '/products/rentflow',
    '/products/pms',
    '/enterprise',
    '/pricing',
    '/company',
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
