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
    tagline: 'Healthcare supply-chain and logistics background, including pharmaceutical cold-chain and vaccine distribution — now applying that to founding Hospigo.',
    bio: [
      "Before founding Hospigo, Bart managed contract logistics operations specifically for the healthcare sector in the Netherlands — overseeing warehousing and distribution for major pharmaceutical clients and a national COVID-19 vaccine distribution program. That meant directing temperature-controlled logistics across multiple ranges, from -80°C to room temperature, for sensitive vaccines and medicines under strict Good Distribution Practice (GDP) and Good Manufacturing Practice (GMP) standards, with full budget and P&L accountability for the operation.",
      'He built that expertise through a competitive two-year leadership development program, which included site management of a large-scale operation with 50+ staff, transport planning and dispatch for a fleet of trucks, and safety-initiative leadership. He holds a Lean Six Sigma Green Belt and completed a certification in Organizational Behavioral Management at Vrije Universiteit Amsterdam.',
      'Earlier in his career, Bart worked in B2B sales and business development, including a stretch selling into medical institutes and a life-sciences industry internship — early, direct exposure to how healthcare organizations buy and operate.',
      'Bart currently also leads logistics operations, including Free Zone and general warehousing, for an international freight and supply-chain company in Thailand, and serves as a Board Member of the Netherlands-Thai Chamber of Commerce (NTCC). He studied at Hogeschool Utrecht.',
    ],
    highlights: [
      'Managed contract logistics for Tier-1 pharmaceutical clients and a national vaccine distribution program',
      'GDP/GMP-compliant cold-chain operations (-80°C to room temperature)',
      'Lean Six Sigma Green Belt; Organizational Behavioral Management certification (Vrije Universiteit Amsterdam)',
      'Board Member, Netherlands-Thai Chamber of Commerce',
      'Studied at Hogeschool Utrecht',
    ],
  },
]

export const coordinatorBySlug = (slug: string) => coordinators.find((c) => c.slug === slug)
