// SSR entry point, built separately via `vite build --ssr` so import.meta.env
// and other Vite-only syntax in the app graph (see src/apiBase.ts) get
// resolved the same way they are for the client build — a plain Node/tsx
// import of App.tsx directly would crash on those. prerender.tsx imports
// the built output of this file, not this file itself. Lives in scripts/
// (not src/) since it's build tooling, not shipped app code — src/'s
// tsconfig has no Node types configured.
import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async'
import { PassThrough } from 'stream'
import App from '../src/App'

export function render(url: string): Promise<{ html: string; helmet: HelmetServerState }> {
  return new Promise((resolve, reject) => {
    const helmetContext: { helmet?: HelmetServerState } = {}
    let html = ''
    const writable = new PassThrough()
    writable.on('data', (chunk: Buffer) => { html += chunk })
    writable.on('end', () => resolve({ html, helmet: helmetContext.helmet! }))
    writable.on('error', reject)

    const { pipe } = renderToPipeableStream(
      React.createElement(
        StaticRouter,
        { location: url },
        React.createElement(HelmetProvider, { context: helmetContext }, React.createElement(App)),
      ),
      {
        onAllReady() {
          pipe(writable)
        },
        onError(err) {
          reject(err)
        },
      },
    )
  })
}
