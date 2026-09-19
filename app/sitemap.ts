import type { MetadataRoute } from 'next';
import { servicesData } from './services/data/servicesData';
import { PUBLISHED_PROJECTS } from './portfolio/data/publishedProjects';
import { INSIGHT_ARTICLES } from './insights/data/insightsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.goldfishmarketing.co.ke';

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/diani`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mombasa`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kenya`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  // Dynamic Service pages (6 routes)
  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(servicesData).map(
    (slug) => ({
      url: `${baseUrl}/services/${slug}`,
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  );

  // Dynamic Portfolio routes
  const portfolioRoutes: MetadataRoute.Sitemap = PUBLISHED_PROJECTS.map(
    (project) => ({
      url: `${baseUrl}/portfolio/${project.slug}`,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  );

  // Dynamic Insights routes
  const insightRoutes: MetadataRoute.Sitemap = INSIGHT_ARTICLES.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
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
