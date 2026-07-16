import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { API_BASE } from './apiBase'

type ViewCounts = Record<string, number>

type ViewsCtx = {
  /** Live view count for a slug, falling back to `seed` until the real count has loaded. */
  viewsFor: (slug: string, seed: number) => number
  /** Records one view for this slug (once per browser session) and updates the live count. */
  registerView: (slug: string) => void
}

const ViewsContext = createContext<ViewsCtx>({ viewsFor: (_slug, seed) => seed, registerView: () => {} })
export const useViews = () => useContext(ViewsContext)

const SESSION_KEY_PREFIX = 'hospigo-viewed:'

export function ViewsProvider({ children }: { children: ReactNode }) {
  const [counts, setCounts] = useState<ViewCounts>({})
  const registered = useRef(new Set<string>())

  useEffect(() => {
    fetch(`${API_BASE}/api/views`)
      .then((r) => (r.ok ? r.json() : {}))
      .then((data: ViewCounts) => setCounts(data))
      .catch(() => {})
  }, [])

  const registerView = (slug: string) => {
    // Once per tab session per article — a page refresh or repeat visit in
    // the same session shouldn't keep inflating the count.
    const sessionKey = SESSION_KEY_PREFIX + slug
    if (registered.current.has(slug) || sessionStorage.getItem(sessionKey)) return
    registered.current.add(slug)
    sessionStorage.setItem(sessionKey, '1')

    fetch(`${API_BASE}/api/views/${encodeURIComponent(slug)}`, { method: 'POST' })
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { slug: string; views: number } | null) => {
        if (data) setCounts((prev) => ({ ...prev, [data.slug]: data.views }))
      })
      .catch(() => {})
  }

  const viewsFor = (slug: string, seed: number) => counts[slug] ?? seed

  return <ViewsContext.Provider value={{ viewsFor, registerView }}>{children}</ViewsContext.Provider>
}
