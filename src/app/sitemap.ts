import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://m7-site.vercel.app';
  const currentDate = new Date();

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/facilities', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/shifts', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/membership', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/merchandise', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/merchandise/tshirt', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/merchandise/shaker', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.85, changeFrequency: 'monthly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
