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
