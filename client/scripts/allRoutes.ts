// Single source of truth for every real, enumerable route on the site — used
// by both the sitemap generator and the prerender script, so they can never
// drift out of sync with each other or with real content.
import { categories } from '../src/content/treatments'
import { procedures } from '../src/content/procedures'
import { hospitals } from '../src/content/hospitals'
import { patientStories } from '../src/content/stories'
import { newsArticles } from '../src/content/news'

export type RouteEntry = { path: string; changefreq: string; priority: string }

export const allRoutes: RouteEntry[] = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/treatments', changefreq: 'weekly', priority: '0.8' },
  { path: '/clinics', changefreq: 'weekly', priority: '0.8' },
  { path: '/how-it-works', changefreq: 'monthly', priority: '0.6' },
  { path: '/stories', changefreq: 'weekly', priority: '0.7' },
  { path: '/news', changefreq: 'daily', priority: '0.8' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
  { path: '/medical-disclaimer', changefreq: 'yearly', priority: '0.3' },
  { path: '/cookies', changefreq: 'yearly', priority: '0.3' },
  ...categories.map((c) => ({ path: `/treatments/${c.slug}`, changefreq: 'weekly', priority: '0.7' })),
  ...procedures.map((p) => ({ path: `/treatments/${p.specialtySlug}/${p.slug}`, changefreq: 'monthly', priority: '0.6' })),
  ...hospitals.map((h) => ({ path: `/clinics/${h.slug}`, changefreq: 'monthly', priority: '0.6' })),
  ...patientStories.map((s) => ({ path: `/stories/${s.slug}`, changefreq: 'monthly', priority: '0.5' })),
  ...newsArticles.map((a) => ({ path: `/news/${a.slug}`, changefreq: 'monthly', priority: '0.6' })),
]
