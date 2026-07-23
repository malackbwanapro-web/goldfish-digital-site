import type { MetadataRoute } from 'next';
import { servicesData } from './services/data/servicesData';
import { PORTFOLIO_PROJECTS } from './portfolio/data/portfolioData';
import { INSIGHT_ARTICLES } from './insights/data/insightsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://goldfishdigital.com';
  const currentDate = new Date().toISOString();

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic Service pages (6 routes)
  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(servicesData).map(
    (slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  );

  // Dynamic Portfolio routes
  const portfolioRoutes: MetadataRoute.Sitemap = PORTFOLIO_PROJECTS.map(
    (project) => ({
      url: `${baseUrl}/portfolio/${project.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  );

  // Dynamic Insights routes
  const insightRoutes: MetadataRoute.Sitemap = INSIGHT_ARTICLES.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...portfolioRoutes,
    ...insightRoutes,
  ];
}
