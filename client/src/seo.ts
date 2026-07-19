import { SITE_URL } from './components/Seo'

export type BreadcrumbItem = { name: string; path: string }

/** Trims to a max length without cutting mid-word, for meta descriptions built from long-form copy. */
export function truncate(text: string, max: number): string {
  if (text.length <= max) return text
  const cut = text.slice(0, max)
  const lastSpace = cut.lastIndexOf(' ')
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…'
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: SITE_URL + item.path,
    })),
  }
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

// Hospigo is a facilitator, not a licensed provider — plain Organization
// (never MedicalOrganization/MedicalClinic/Physician) keeps this schema
// consistent with the Terms of Service / Medical Disclaimer language.
// No `sameAs` yet — add real social profile URLs here once they exist;
// fabricating placeholder links would misrepresent the business.
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hospigo',
    url: SITE_URL,
    description: 'Hospigo is a medical travel facilitation platform connecting patients with vetted, JCI-accredited hospitals and clinics in Thailand.',
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Hospigo',
    url: SITE_URL,
  }
}

// Describes the independent third-party hospital itself (name, city,
// accreditation) — never Hospigo. Only fields backed by real data are set.
export function hospitalJsonLd(h: { name: string; city: string; slug: string; imageFile: string | null }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Hospital',
    name: h.name,
    address: { '@type': 'PostalAddress', addressLocality: h.city, addressCountry: 'TH' },
    url: `${SITE_URL}/clinics/${h.slug}`,
    ...(h.imageFile ? { image: SITE_URL + h.imageFile } : {}),
  }
}

// Real Hospigo team member, sourced from their own public profile — never
// mark up as a medical/clinical role (Physician, MedicalOrganization staff,
// etc.) unless they hold that license; jobTitle should match the real,
// current title on record.
export function personJsonLd(p: { name: string; jobTitle: string; slug: string; photo: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: p.name,
    jobTitle: p.jobTitle,
    url: `${SITE_URL}/coordinators/${p.slug}`,
    image: SITE_URL + p.photo,
    description: p.description,
    worksFor: { '@type': 'Organization', name: 'Hospigo' },
  }
}

// Deliberately has no "provider" field naming Hospigo — the procedure is
// performed by independent third-party hospitals, not by Hospigo itself.
export function medicalProcedureJsonLd(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description,
  }
}

const MONTHS: Record<string, string> = {
  january: '01', february: '02', march: '03', april: '04', may: '05', june: '06',
  july: '07', august: '08', september: '09', october: '10', november: '11', december: '12',
}

/** Parses loose real-content date strings ("Reviewed June 2026", "3 June 2026") into an ISO date for schema dateModified. Returns undefined if unparseable, rather than guessing. */
export function parseDateToISO(text: string): string | undefined {
  const m = text.match(/(\d{1,2}\s+)?([A-Za-z]+)\s+(\d{4})/)
  if (!m) return undefined
  const month = MONTHS[m[2].toLowerCase()]
  if (!month) return undefined
  const day = m[1] ? m[1].trim().padStart(2, '0') : '01'
  return `${m[3]}-${month}-${day}`
}

/** Adds dateModified to a CreativeWork-derived schema block (e.g. FAQPage) when a real date is available — omits it rather than guessing. */
export function withDateModified<T extends object>(schema: T, dateText: string): T & { dateModified?: string } {
  const iso = parseDateToISO(dateText)
  return iso ? { ...schema, dateModified: iso } : schema
}
