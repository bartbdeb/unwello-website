import { Helmet } from 'react-helmet-async'

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

/** Declares document title, meta description/robots, OG/Twitter tags, and the canonical link for the current page. Rendered via react-helmet-async so it works identically during server prerendering and client-side navigation. */
export default function Seo({ title, description, path, image, noindex }: SeoProps) {
  const url = SITE_URL + path
  const img = image || DEFAULT_OG_IMAGE

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
