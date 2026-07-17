// Static-site generation: renders every real route (see allRoutes.ts) to
// complete, standalone HTML at build time — full <title>/meta/JSON-LD and
// the actual visible content, not just an empty <div id="root">.
//
// Runs after both `vite build` (client) and `vite build --ssr src/entry-
// server.tsx` (server) — see package.json's "build" script — since it needs
// dist/index.html as a template and the SSR-built entry-server for
// rendering. Importing src/entry-server.tsx directly here (instead of the
// built output) would crash on import.meta.env — see that file's comment.
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { allRoutes } from './allRoutes'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST_DIR = path.join(__dirname, '..', 'dist')
const SERVER_DIR = path.join(__dirname, '..', 'dist-server')

async function main() {
  const entryPath = path.join(SERVER_DIR, 'entry-server.js')
  const { render } = await import(pathToFileUrl(entryPath))
  const template = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8')
  let failures = 0

  for (const route of allRoutes) {
    try {
      const { html: appHtml, helmet } = await render(route.path)
      const headTags = [helmet.title.toString(), helmet.meta.toString(), helmet.link.toString(), helmet.script.toString()].join('\n')

      const finalHtml = template
        // Strip the static placeholder title/description — Helmet's per-route versions replace them.
        .replace(/<title>.*?<\/title>\s*/s, '')
        .replace(/<meta name="description"[^>]*>\s*/s, '')
        .replace('</head>', `${headTags}\n  </head>`)
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

      const outDir = route.path === '/' ? DIST_DIR : path.join(DIST_DIR, route.path)
      fs.mkdirSync(outDir, { recursive: true })
      fs.writeFileSync(path.join(outDir, 'index.html'), finalHtml)
    } catch (err) {
      failures++
      console.error(`Failed to prerender ${route.path}:`, err)
    }
  }

  fs.rmSync(SERVER_DIR, { recursive: true, force: true })

  console.log(`Prerendered ${allRoutes.length - failures}/${allRoutes.length} routes${failures ? ` (${failures} failed)` : ''}`)
  if (failures > 0) process.exit(1)
}

function pathToFileUrl(p: string): string {
  return 'file://' + p.replace(/\\/g, '/')
}

main()
