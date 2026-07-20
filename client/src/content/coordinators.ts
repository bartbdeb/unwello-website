// Real bios for Hospigo's medical coordinators, sourced from their own
// LinkedIn profiles on 2026-07-19. Employer/client names are deliberately
// omitted per their own privacy preference — roles, dates, and real
// professional facts are kept, described generically instead of naming
// companies. Do not add outcome claims, guarantees, or credentials that
// aren't reflected in the source profile — see the content-compliance skill.

export type Coordinator = {
  slug: string
  name: string
  role: string
  pageTitle: string
  photo: string
  tagline: string
  bio: string[]
  highlights: string[]
}

export const coordinators: Coordinator[] = [
  {
    slug: 'dorus-van-der-kooij',
    name: 'Dorus van der Kooij',
    role: 'Medical Coordinator',
    pageTitle: 'Dorus van der Kooij — Medical Coordinator | Hospigo',
    photo: '/images/coordinators/dorus-van-der-kooij.jpg',
    tagline: 'Hospitality leadership and medical aesthetics experience in Thailand since 2017 — from hotel management in Phuket to leading a Thai aesthetics clinic today.',
    bio: [
      "Dorus currently leads a medical aesthetics and laser-treatment business in Thailand as Managing Director, giving him direct, day-to-day experience with how an accredited medical facility runs — from patient scheduling and treatment logistics to the standards a clinic has to hold itself to.",
      'Before that, he spent several years in insurance brokerage in Thailand, first as a consultant and later as Managing Director, working directly with cross-border health and travel insurance policies.',
      'His earlier career was in hospitality: he was General Manager of a hotel in Phuket for over three years, after starting out in food & beverage supervision in the Netherlands and an internship at a hotel in Barcelona. That background in guest experience and day-to-day operations is what shapes how he thinks about a patient\'s trip end to end — not just the treatment, but the travel, recovery, and everything around it.',
      'Dorus is also a Vice President of the Netherlands-Thai Chamber of Commerce (NTCC) and has lived and worked in Thailand for close to a decade.',
    ],
    highlights: [
      'Current medical aesthetics business leadership in Thailand',
      'Insurance brokerage background (Managing Director & Consultant)',
      'Hospitality leadership — 3+ years as a hotel General Manager in Phuket',
      'Vice President, Netherlands-Thai Chamber of Commerce',
      'Thailand-based since 2017',
    ],
  },
  {
    slug: 'bart-de-bruin',
    name: 'Bart de Bruin',
    role: 'Founder',
    pageTitle: 'Bart de Bruin — Hospigo Founder & Coordinator, Thailand',
    photo: '/images/coordinators/bart-de-bruin.jpg',
    tagline: 'Healthcare supply-chain background — pharmaceutical cold-chain and national vaccine distribution — now founder of Hospigo.',
    bio: [
      "Before founding Hospigo, Bart managed contract logistics for the healthcare sector in the Netherlands — overseeing distribution for major pharmaceutical clients and a national COVID-19 vaccine program, including temperature-controlled logistics from -80°C to room temperature under strict Good Distribution Practice (GDP) and Good Manufacturing Practice (GMP) standards.",
      "That direct experience with pharmaceutical compliance and patient-safety standards shapes how Hospigo evaluates and works with partner hospitals today. He's also a Board Member of the Netherlands-Thai Chamber of Commerce.",
    ],
    highlights: [
      'Managed contract logistics for pharmaceutical clients and a national vaccine distribution program',
      'GDP/GMP-compliant cold-chain operations (-80°C to room temperature)',
      'Board Member, Netherlands-Thai Chamber of Commerce',
    ],
  },
]

export const coordinatorBySlug = (slug: string) => coordinators.find((c) => c.slug === slug)
