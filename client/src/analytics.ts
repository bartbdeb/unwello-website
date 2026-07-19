// Google Analytics 4, loaded at runtime rather than baked into index.html so
// it can be gated: only in production builds (import.meta.env.PROD), and only
// when VITE_GA_MEASUREMENT_ID is actually set (e.g. in Vercel's project env
// vars) — local dev and preview builds without the var never send data.

declare global {
  interface Window {
    dataLayer: unknown[]
  }
}

function gtag(...args: unknown[]) {
  window.dataLayer.push(args)
}

let initialized = false

export function initAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
  if (!measurementId || !import.meta.env.PROD || initialized) return
  initialized = true

  window.dataLayer = window.dataLayer || []
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  // Consent Mode: gtag.js checks its OWN internal consent state before
  // sending anything — separate from our cookie-banner's own gating logic
  // in cookieConsent.tsx. Without this explicit signal, gtag.js can queue
  // events into dataLayer normally but silently withhold the actual network
  // request. initAnalytics() is only ever called after the visitor has
  // already granted analytics consent via the cookie banner, so it's safe
  // to default-deny then immediately update-grant here.
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
  gtag('consent', 'update', { analytics_storage: 'granted' })

  gtag('js', new Date())
  // send_page_view:false — React Router routes client-side, so page_view
  // events are sent manually on navigation via trackPageView() instead of
  // relying on gtag's own (load-time-only) automatic page_view.
  gtag('config', measurementId, { send_page_view: false })
}

export function trackPageView(path: string) {
  if (!initialized) return
  gtag('event', 'page_view', { page_path: path })
}
