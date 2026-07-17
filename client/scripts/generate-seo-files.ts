// Regenerates public/sitemap.xml and public/robots.txt from the actual
// content data (see allRoutes.ts), so the sitemap can never drift out of
// sync with real routes. Runs automatically before every `npm run build`
// (see package.json's "build" script) — never hand-edit sitemap.xml/
// robots.txt directly.
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { allRoutes, type RouteEntry } from './allRoutes'

const SITE_URL = 'https://hospigo.com'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PUBLIC_DIR = path.join(__dirname, '..', 'public')

function buildSitemap(entries: RouteEntry[]): string {
  const urlTags = entries
    .map((e) => `  <url>\n    <loc>${SITE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlTags}\n</urlset>\n`
}

function buildRobotsTxt(): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
}

fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), buildSitemap(allRoutes))
fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), buildRobotsTxt())

console.log(`Generated sitemap.xml with ${allRoutes.length} URLs and robots.txt`)
