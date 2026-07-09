// Content model for Treatment Category pages (spec section B2, expressed as data).
// One reusable page template renders any of these records. Content lives in code
// for now; later this can move to a CMS/backend without changing the template.

import type { Country } from '../data'

export type Procedure = {
  name: string
  slug: string
  priceFrom: string
  blurb: string
}

export type PriceRow = {
  name: string
  th: number
} & Record<Country, number>

export type Faq = { q: string; a: string }

export type TreatmentCategory = {
  slug: string
  name: string
  icon: string
  priceFrom: string
  hero: { headline: string; subcopy: string }
  intro: string
  reviewer: { name: string; credentials: string; date: string }
  procedures: Procedure[]
  priceTable: PriceRow[]
  faqs: Faq[]
  // Matching facilities are looked up dynamically from content/hospitals.ts by
  // specialty (hospital.specialties.includes(category.slug)) — see TreatmentCategory.tsx.
  storyMatch: string // substring to filter patient stories by
}

export const categories: TreatmentCategory[] = [
  {
    slug: 'dental',
    name: 'Dental & Implants',
    icon: '🦷',
    priceFrom: '$680',
    hero: {
      headline: 'Dental treatment in Thailand',
      subcopy:
        'Implants, veneers, crowns and full-mouth restoration at JCI-accredited clinics — for a fraction of home-country prices, with a coordinator handling everything.',
    },
    intro:
      'Thailand is one of the world’s leading destinations for dental care. International patients travel to Bangkok, Phuket and Chiang Mai for high-quality implants and cosmetic dentistry performed by internationally trained dentists, often saving 50–70% versus the US, UK or Australia. Every clinic on Unwello is vetted for accreditation, dentist credentials and patient outcomes.',
    reviewer: { name: 'Dr. Anong Pattanapong', credentials: 'DDS, Implantology', date: 'Reviewed June 2026' },
    procedures: [
      { name: 'Dental Implants', slug: 'dental-implants', priceFrom: '$680', blurb: 'Titanium implant + crown to replace missing teeth.' },
      { name: 'Veneers', slug: 'veneers', priceFrom: '$250', blurb: 'Porcelain or composite veneers for a full smile makeover.' },
      { name: 'Crowns & Bridges', slug: 'crowns', priceFrom: '$300', blurb: 'Ceramic crowns and bridges to restore damaged teeth.' },
      { name: 'Full-Mouth Restoration', slug: 'full-mouth', priceFrom: '$6,500', blurb: 'All-on-4 / All-on-6 full-arch implant solutions.' },
    ],
    priceTable: [
      { name: 'Single Dental Implant', th: 680, US: 4200, UK: 2600, AU: 4800 },
      { name: 'Porcelain Veneer (per tooth)', th: 300, US: 1500, UK: 900, AU: 1600 },
      { name: 'Zirconia Crown', th: 320, US: 1300, UK: 800, AU: 1400 },
      { name: 'All-on-4 (per arch)', th: 6500, US: 26000, UK: 14000, AU: 24000 },
    ],
    faqs: [
      { q: 'How long do I need to stay in Thailand for implants?', a: 'Most implant treatments involve two visits: implant placement, then crown fitting after healing (3–6 months). Some clinics offer immediate-load implants that shorten this. Your coordinator plans the timeline around your trip.' },
      { q: 'Are Thai dental clinics safe and accredited?', a: 'The clinics on Unwello hold international accreditations (JCI, ISO) and their dentists are internationally trained. We verify credentials and outcomes before listing any clinic.' },
      { q: 'What does the all-inclusive price cover?', a: 'Quotes are transparent and typically bundle the procedure, materials, clinic fees and — where offered — hotel, airport transfers and interpreter. Your personal quote spells out exactly what’s included.' },
      { q: 'Will my dentist speak English?', a: 'Yes. All listed clinics provide English-speaking dentists, and interpreters are available for other languages.' },
    ],
    storyMatch: 'ental',
  },
  {
    slug: 'hair-transplant',
    name: 'Hair Transplant',
    icon: '💇',
    priceFrom: '$2,400',
    hero: {
      headline: 'Hair transplants in Thailand',
      subcopy: 'FUE and DHI hair restoration by high-volume specialist surgeons, with natural results and all-inclusive packages.',
    },
    intro:
      'Thailand’s hair-restoration clinics perform thousands of FUE and DHI procedures each year, at prices well below Western clinics. Surgeons are experienced with high graft counts and a range of hair types. Every clinic on Unwello is vetted for technique, hygiene and results.',
    reviewer: { name: 'Dr. Malee Thongchai', credentials: 'MD, Hair Restoration', date: 'Reviewed June 2026' },
    procedures: [
      { name: 'FUE Hair Transplant', slug: 'fue', priceFrom: '$2,400', blurb: 'Follicular Unit Extraction — minimally invasive, no linear scar.' },
      { name: 'DHI Hair Transplant', slug: 'dhi', priceFrom: '$2,900', blurb: 'Direct Hair Implantation for dense, precise placement.' },
      { name: 'Beard & Eyebrow Transplant', slug: 'beard-eyebrow', priceFrom: '$1,800', blurb: 'Facial hair restoration using FUE technique.' },
    ],
    priceTable: [
      { name: 'FUE (up to 2,500 grafts)', th: 2400, US: 9000, UK: 6000, AU: 9000 },
      { name: 'FUE (up to 4,000 grafts)', th: 3200, US: 12000, UK: 9000, AU: 13000 },
      { name: 'DHI (up to 3,000 grafts)', th: 2900, US: 11000, UK: 8000, AU: 12000 },
    ],
    faqs: [
      { q: 'How many grafts will I need?', a: 'It depends on your degree of hair loss and goals. Share photos with your coordinator and the clinic’s surgeon will estimate graft count and price in your quote.' },
      { q: 'How long is recovery?', a: 'Most people return to normal activities within a few days. Transplanted hair sheds initially and regrows over 6–12 months.' },
      { q: 'Is it a single visit?', a: 'Yes — FUE/DHI is typically completed in one visit of 1–2 days, making it ideal for a short trip.' },
    ],
    storyMatch: 'air',
  },
  {
    slug: 'rhinoplasty',
    name: 'Rhinoplasty',
    icon: '👃',
    priceFrom: '$3,300',
    hero: {
      headline: 'Rhinoplasty in Thailand',
      subcopy: 'Primary and revision nose reshaping by board-certified plastic surgeons at accredited hospitals.',
    },
    intro:
      'Thailand is a renowned destination for cosmetic facial surgery. Rhinoplasty specialists offer both primary and complex revision procedures, with meticulous, natural-looking results at accessible prices. All surgeons on Unwello are vetted and hospital-based.',
    reviewer: { name: 'Dr. Krit Sirikul', credentials: 'MD, Plastic & Reconstructive Surgery', date: 'Reviewed June 2026' },
    procedures: [
      { name: 'Primary Rhinoplasty', slug: 'primary', priceFrom: '$3,300', blurb: 'First-time nose reshaping for form and function.' },
      { name: 'Revision Rhinoplasty', slug: 'revision', priceFrom: '$4,500', blurb: 'Corrective surgery after a previous procedure.' },
      { name: 'Tip Plasty', slug: 'tip-plasty', priceFrom: '$1,900', blurb: 'Refinement of the nasal tip only.' },
    ],
    priceTable: [
      { name: 'Primary Rhinoplasty', th: 3300, US: 9500, UK: 7000, AU: 11000 },
      { name: 'Revision Rhinoplasty', th: 4500, US: 15000, UK: 10000, AU: 16000 },
      { name: 'Tip Plasty', th: 1900, US: 6000, UK: 4500, AU: 7000 },
    ],
    faqs: [
      { q: 'How long should I stay for recovery?', a: 'Plan for about 7–10 days in Thailand so your surgeon can remove the splint and check healing before you fly home.' },
      { q: 'Can I combine it with other procedures?', a: 'Often yes. Discuss your goals with the coordinator and surgeon; combined procedures are planned for safety.' },
      { q: 'Are the surgeons board-certified?', a: 'Yes. Every surgeon on Unwello is verified for certification, hospital privileges and experience.' },
    ],
    storyMatch: 'hinoplasty',
  },
  {
    slug: 'plastic-surgery',
    name: 'Plastic Surgery',
    icon: '✨',
    priceFrom: '$3,900',
    hero: {
      headline: 'Plastic surgery in Thailand',
      subcopy: 'Body contouring, facelifts and breast surgery by experienced surgeons in JCI-accredited hospitals.',
    },
    intro:
      'From body contouring to facial rejuvenation, Thailand’s plastic-surgery hospitals combine international standards with significant savings. Unwello vets every surgeon and facility for safety, accreditation and outcomes.',
    reviewer: { name: 'Dr. Krit Sirikul', credentials: 'MD, Plastic & Reconstructive Surgery', date: 'Reviewed June 2026' },
    procedures: [
      { name: 'Breast Augmentation', slug: 'breast-augmentation', priceFrom: '$3,900', blurb: 'Implant-based or fat-transfer augmentation.' },
      { name: 'Liposuction', slug: 'liposuction', priceFrom: '$2,800', blurb: 'Targeted fat removal and body contouring.' },
      { name: 'Facelift', slug: 'facelift', priceFrom: '$5,200', blurb: 'Surgical facial rejuvenation.' },
      { name: 'Tummy Tuck', slug: 'tummy-tuck', priceFrom: '$4,600', blurb: 'Abdominoplasty for a flatter, firmer abdomen.' },
    ],
    priceTable: [
      { name: 'Breast Augmentation', th: 3900, US: 11000, UK: 8000, AU: 13000 },
      { name: 'Liposuction (per area)', th: 2800, US: 7000, UK: 5000, AU: 8000 },
      { name: 'Facelift', th: 5200, US: 15000, UK: 11000, AU: 17000 },
    ],
    faqs: [
      { q: 'How long is the recovery stay?', a: 'It varies by procedure — typically 7–14 days in Thailand. Your coordinator builds a recovery plan and can arrange a comfortable recovery hotel.' },
      { q: 'What about aftercare when I get home?', a: 'Clinics provide post-op instructions and remote follow-up; your coordinator stays in touch through recovery.' },
      { q: 'Are the hospitals accredited?', a: 'Yes — listed facilities hold JCI/ISO accreditation and international patient services.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'weight-loss',
    name: 'Weight Loss',
    icon: '⚖️',
    priceFrom: '$8,500',
    hero: {
      headline: 'Weight-loss surgery in Thailand',
      subcopy: 'Gastric sleeve, bypass and balloon procedures by bariatric specialists, with full pre- and post-op support.',
    },
    intro:
      'Bariatric surgery in Thailand is performed by experienced specialists in accredited hospitals with dedicated international patient care. Unwello vets every bariatric programme for safety, surgeon experience and follow-up support.',
    reviewer: { name: 'Dr. Somchai Rojanasin', credentials: 'MD, Bariatric Surgery', date: 'Reviewed June 2026' },
    procedures: [
      { name: 'Gastric Sleeve', slug: 'gastric-sleeve', priceFrom: '$8,500', blurb: 'Sleeve gastrectomy — the most common bariatric procedure.' },
      { name: 'Gastric Bypass', slug: 'gastric-bypass', priceFrom: '$11,000', blurb: 'Roux-en-Y bypass for significant, lasting weight loss.' },
      { name: 'Gastric Balloon', slug: 'gastric-balloon', priceFrom: '$3,500', blurb: 'Non-surgical, temporary balloon placement.' },
    ],
    priceTable: [
      { name: 'Gastric Sleeve', th: 8500, US: 19000, UK: 12000, AU: 20000 },
      { name: 'Gastric Bypass', th: 11000, US: 24000, UK: 15000, AU: 25000 },
      { name: 'Gastric Balloon', th: 3500, US: 8000, UK: 6000, AU: 9000 },
    ],
    faqs: [
      { q: 'How long do I stay in hospital and in Thailand?', a: 'Typically 2–4 nights in hospital and around 10–14 days in Thailand so your surgeon can confirm you’re healing well before you fly.' },
      { q: 'Is there pre-op assessment?', a: 'Yes. You’ll complete pre-op tests and consultations; the clinic reviews your medical history to confirm you’re a candidate.' },
      { q: 'What follow-up is provided?', a: 'Bariatric programmes include dietary guidance and follow-up; your coordinator helps arrange remote check-ins after you return home.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'fertility-ivf',
    name: 'Fertility / IVF',
    icon: '🍼',
    priceFrom: '$4,100',
    hero: {
      headline: 'Fertility & IVF in Thailand',
      subcopy: 'IVF, ICSI and egg freezing at leading reproductive-medicine centres, with compassionate, discreet care.',
    },
    intro:
      'Thailand’s fertility centres are among Asia’s most advanced, offering IVF, ICSI and egg freezing with high standards of care at accessible prices. Unwello vets each centre for lab quality, specialist experience and success-rate transparency.',
    reviewer: { name: 'Dr. Ratana Chaiyaphon', credentials: 'MD, Reproductive Medicine', date: 'Reviewed June 2026' },
    procedures: [
      { name: 'IVF Cycle', slug: 'ivf', priceFrom: '$4,100', blurb: 'Standard in-vitro fertilisation cycle.' },
      { name: 'ICSI', slug: 'icsi', priceFrom: '$4,800', blurb: 'Intracytoplasmic sperm injection with IVF.' },
      { name: 'Egg Freezing', slug: 'egg-freezing', priceFrom: '$3,200', blurb: 'Oocyte cryopreservation for future family planning.' },
    ],
    priceTable: [
      { name: 'IVF Cycle', th: 4100, US: 15000, UK: 8000, AU: 11000 },
      { name: 'IVF with ICSI', th: 4800, US: 17000, UK: 9500, AU: 13000 },
      { name: 'Egg Freezing', th: 3200, US: 11000, UK: 7000, AU: 9000 },
    ],
    faqs: [
      { q: 'How long is an IVF trip?', a: 'An IVF cycle usually involves being in Thailand for roughly 2–3 weeks, or split across two visits. Your coordinator plans the schedule with the clinic.' },
      { q: 'What are the legal considerations?', a: 'Fertility regulations vary by treatment and situation. The clinic’s specialists will explain what applies to your case during consultation.' },
      { q: 'Are success rates shared?', a: 'Yes — we prioritise centres that are transparent about their success rates, and your coordinator can help you compare.' },
    ],
    storyMatch: 'IVF',
  },
]

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug)

// Header mega-menu list — deliberately broader than the homepage's 6 "popular
// treatments" (which stay as-is). `builtSlug` links to a real Treatment
// Category page where one exists; items without one open the quote funnel
// pre-filled with their name instead of a dead link.
export type MegaMenuItem = { name: string; icon: string; builtSlug?: string }

export const megaMenuItems: MegaMenuItem[] = [
  { name: 'Health Screenings & Checkup', icon: '🩺' },
  { name: 'Dental Care', icon: '🦷', builtSlug: 'dental' },
  { name: 'Cosmetic & Plastic Surgery', icon: '✨', builtSlug: 'plastic-surgery' },
  { name: 'Stem Cell & Regenerative Medicine', icon: '🧬' },
  { name: 'Fertility & IVF', icon: '🍼', builtSlug: 'fertility-ivf' },
  { name: 'Orthopedics', icon: '🦴' },
  { name: 'Cardiology', icon: '❤️' },
  { name: 'Eye Care (Ophthalmology)', icon: '👁️' },
  { name: 'Bariatric & Weight-Loss Surgery', icon: '⚖️', builtSlug: 'weight-loss' },
  { name: 'Anti-Aging & Longevity', icon: '🌿' },
]
