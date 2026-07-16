import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../analytics'

// Scrolls to top on route change (but preserves in-page #anchor jumps), and
// reports the new path to GA4 — React Router navigates client-side, so
// gtag's own load-time-only page_view would otherwise only ever see the
// very first URL of the visit.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
    trackPageView(pathname)
  }, [pathname, hash])
  return null
}
