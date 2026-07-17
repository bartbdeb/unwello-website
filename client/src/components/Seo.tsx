import { useEffect } from 'react'

export const SITE_NAME = 'Hospigo'
// Hardcoded rather than derived from window.location — canonical/OG URLs must
// always point at the production domain, never localhost or a Vercel preview URL.
export const SITE_URL = 'https://hospigo.com'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero/lifestyle.jpg`

type SeoProps = {
  /** Full tag text, e.g. "Dental Implants in Thailand, from $680 | Hospigo" */
  title: string
  /** 140–160 characters, written to earn the click. */
  description: string
  /** Path only, e.g. "/treatments/dental" — used to build the canonical/OG URL. */
  path: string
  image?: string
  noindex?: boolean
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Updates document title, meta description/robots, OG/Twitter tags, and the canonical link for the current page. Renders nothing. */
export default function Seo({ title, description, path, image, noindex }: SeoProps) {
  useEffect(() => {
    document.title = title

    const url = SITE_URL + path
    const img = image || DEFAULT_OG_IMAGE

    setMeta('name', 'description', description)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', img)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', img)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }, [title, description, path, image, noindex])

  return null
}
