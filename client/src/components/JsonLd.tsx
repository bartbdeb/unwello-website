import { useEffect } from 'react'

/** Injects a `<script type="application/ld+json">` block into <head>, keyed by id, and removes it on unmount/change. */
export default function JsonLd({ id, data }: { id: string; data: object }) {
  useEffect(() => {
    const scriptId = `ld-json-${id}`
    let el = document.getElementById(scriptId) as HTMLScriptElement | null
    if (!el) {
      el = document.createElement('script')
      el.id = scriptId
      el.type = 'application/ld+json'
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(data)
    return () => { el?.remove() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, JSON.stringify(data)])

  return null
}
