import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'

// GA4 is initialized from cookieConsent.tsx, gated on the user's actual
// consent choice — never unconditionally here.

const container = document.getElementById('root')!
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)

// Production serves prerendered HTML per route (see scripts/prerender.ts) —
// hydrate onto it. The Vite dev server has no prerendered markup (empty
// #root), so fall back to a plain client render there.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app)
} else {
  ReactDOM.createRoot(container).render(app)
}
