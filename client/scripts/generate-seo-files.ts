// Regenerates public/sitemap.xml and public/robots.txt from the actual
// content data, so the sitemap can never drift out of sync with real routes.
// Runs automatically after every `npm run build` (see package.json's
// "postbuild" script) — never hand-edit sitemap.xml/robots.txt directly.
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { categories } from '../src/content/treatments'
import { procedures } from '../src/content/procedures'
import { hospitals } from '../src/content/hospitals'
import { patientStories } from '../src/content/stories'
import { newsArticles } from '../src/content/news'

const SITE_URL = 'https://hospigo.com'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PUBLIC_DIR = path.join(__dirname, '..', 'public')

type UrlEntry = { path: string; changefreq: string; priority: string }

const urls: UrlEntry[] = [
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

function buildSitemap(entries: UrlEntry[]): string {
  const urlTags = entries
    .map((e) => `  <url>\n    <loc>${SITE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlTags}\n</urlset>\n`
}

function buildRobotsTxt(): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
}

fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), buildSitemap(urls))
fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), buildRobotsTxt())

console.log(`Generated sitemap.xml with ${urls.length} URLs and robots.txt`)
