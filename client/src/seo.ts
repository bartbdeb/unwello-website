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

// Hospigo is a facilitator, not a licensed provider — MedicalBusiness (not
// Physician/MedicalClinic) keeps this schema consistent with the Terms of
// Service / Medical Disclaimer language.
export function medicalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Hospigo',
    url: SITE_URL,
    description: 'Hospigo is a medical travel facilitation platform connecting patients with vetted, JCI-accredited hospitals and clinics in Thailand.',
    areaServed: 'Thailand',
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
