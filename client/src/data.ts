// All site content, ported from the design file (Hospigo.dc.html).
// Kept in one place so it can later be swapped for a CMS / API.

export type Treatment = {
  name: string
  slug: string
  icon: string
  price: string
  blurb: string
  imgLabel: string
  image: string
}

export const treatments: Treatment[] = [
  { name: 'Dental & Implants', slug: 'dental', icon: '🦷', price: '$680', blurb: 'Implants, veneers, crowns and full-mouth restoration.', imgLabel: 'dental clinic', image: '/images/treatments/dental.jpg' },
  { name: 'Hair Transplant', slug: 'hair-transplant', icon: '💇', price: '$2,400', blurb: 'FUE & DHI by high-volume specialist surgeons.', imgLabel: 'hair clinic', image: '/images/treatments/hair-transplant.jpg' },
  // Rhinoplasty is a procedure under the "Cosmetic & Plastic Surgery" specialty
  // (not its own top-level specialty in the real taxonomy) — slug points to its
  // nested procedure page.
  { name: 'Rhinoplasty', slug: 'plastic-surgery/rhinoplasty', icon: '👃', price: '$3,300', blurb: 'Primary and revision nose reshaping.', imgLabel: 'aesthetic surgery', image: '/images/treatments/rhinoplasty.jpg' },
  { name: 'Plastic Surgery', slug: 'plastic-surgery', icon: '✨', price: '$3,900', blurb: 'Body contouring, facelift, breast surgery.', imgLabel: 'surgical suite', image: '/images/treatments/plastic-surgery.jpg' },
  { name: 'Weight Loss', slug: 'weight-loss', icon: '⚖️', price: '$8,500', blurb: 'Gastric sleeve, bypass and balloon procedures.', imgLabel: 'bariatric ward', image: '/images/treatments/weight-loss.jpg' },
  { name: 'Fertility / IVF', slug: 'fertility-ivf', icon: '🍼', price: '$4,100', blurb: 'IVF, ICSI and egg freezing at leading centres.', imgLabel: 'fertility centre', image: '/images/treatments/fertility-ivf.jpg' },
]

// Real, verifiable stats only (per content-compliance skill, section 1 — no
// invented social proof). hospitalCount is derived from the real hospital
// database (client/src/content/hospitals.ts), not a marketing round-number.
// The Thailand #2 ranking was independently verified against the cited
// source (Travel & Tour World's "Top 50 Medical Tourism Destinations 2026")
// on 2026-07-19 — re-verify before reusing if this file is edited much later.
// `kind: 'stat'` renders as the highlighted gradient tile; `kind: 'promise'`
// renders as an icon + heading + body tile.
import { hospitals as _hospitalsForCount } from './content/hospitals'
export const trustStats = [
  {
    kind: 'stat' as const,
    value: String(_hospitalsForCount.length),
    label: 'JCI-accredited hospitals in Thailand — the same standard used by top US hospitals',
    source: 'Source: Joint Commission International',
  },
  {
    kind: 'promise' as const,
    icon: '🕒',
    heading: '10+ years of healthcare experience',
    body: 'Our team brings over a decade of experience in international healthcare and medical tourism.',
  },
  {
    kind: 'promise' as const,
    icon: '🌏',
    heading: 'Ranked #2 worldwide',
    body: "Thailand is ranked the world's #2 medical tourism destination for 2026.",
    source: 'Source: Travel & Tour World, 2026 Rankings',
  },
  {
    kind: 'promise' as const,
    icon: '🤝',
    heading: 'Free for patients',
    body: 'Our partner clinics pay us — your price is the same as booking direct.',
  },
]

export const steps = [
  { n: '1', title: 'Tell us what you need', body: 'Share your treatment and timing in a 2-minute form — no medical jargon required.' },
  { n: '2', title: 'Get matched & quoted', body: 'We shortlist vetted clinics and send transparent, all-inclusive quotes.' },
  { n: '3', title: 'We arrange everything', body: 'Appointments, hotel, transfers and interpreter — handled by your coordinator.' },
  { n: '4', title: 'Fly, treat, recover', body: 'Arrive to a plan. We stay with you through treatment and aftercare.' },
]

// Clinic/hospital data lives in content/hospitals.ts (generated from the real
// JCI hospital database) — see that file for the Hospital type and helpers.

export type Country = 'US' | 'UK' | 'AU'

export const savingsBase = [
  { name: 'Dental Implant', th: 680, US: 4200, UK: 2600, AU: 4800 },
  { name: 'Hair Transplant (FUE)', th: 2400, US: 12000, UK: 9000, AU: 13000 },
  { name: 'Rhinoplasty', th: 3300, US: 9500, UK: 7000, AU: 11000 },
  { name: 'IVF Cycle', th: 4100, US: 15000, UK: 8000, AU: 11000 },
]

export const countryMeta: Record<Country, { symbol: string; label: string; pill: string }> = {
  US: { symbol: '$', label: 'USA avg', pill: '🇺🇸 USA' },
  UK: { symbol: '£', label: 'UK avg', pill: '🇬🇧 UK' },
  AU: { symbol: 'A$', label: 'Australia avg', pill: '🇦🇺 Australia' },
}

export const whyCards = [
  { icon: '🏥', title: 'JCI-grade hospitals', body: 'World-standard accreditation, modern facilities and international patient wings.' },
  { icon: '💷', title: 'Up to 70% savings', body: 'The same procedure and quality at a fraction of home-country prices.' },
  { icon: '⚡', title: 'Zero waiting times', body: 'Skip the queues — get appointments and procedures scheduled in days, not months.' },
  { icon: '🗣️', title: 'English-speaking care', body: 'International coordinators and interpreters at every step.' },
  { icon: '🌴', title: 'A recovery destination', body: 'Recover somewhere restful — beaches, wellness and warm hospitality.' },
]

// Patient stories and news/guides content now live in content/stories.ts and
// content/news.ts respectively (they power the full /stories and /news
// sections, not just the homepage teasers) — import from there instead.

export const coordPoints = [
  'One dedicated coordinator from first message to aftercare',
  'You never pay us — clinics do. Quotes are free and non-binding',
  'Reachable 24/7 by WhatsApp, phone or email',
]

export const footerCols = [
  { title: 'Treatments', links: ['Dental & Implants', 'Hair Transplant', 'Rhinoplasty', 'Weight Loss', 'Fertility / IVF'] },
  { title: 'Cities', links: ['Bangkok', 'Phuket', 'Chiang Mai', 'Pattaya', 'All clinics'] },
  { title: 'Company', links: ['How it works', 'Vetting methodology', 'Patient stories', 'Guides', 'Contact'] },
]

// ---- Funnel option sets ----
// 10 standard treatments + a trailing "Others" catch-all (kept separate so it
// can be styled/handled distinctly from the standard options).
export const treatmentOptions = [
  { label: 'Dental', icon: '🦷' },
  { label: 'Hair transplant', icon: '💇' },
  { label: 'Rhinoplasty', icon: '👃' },
  { label: 'Plastic surgery', icon: '✨' },
  { label: 'Weight loss', icon: '⚖️' },
  { label: 'Fertility / IVF', icon: '🍼' },
  { label: 'Health screenings', icon: '🩺' },
  { label: 'Orthopedics', icon: '🦴' },
  { label: 'Cardiology', icon: '❤️' },
  { label: 'Eye care', icon: '👁️' },
]
export const treatmentOtherOption = { label: 'Others', icon: '➕' }
export const whoForOptions = [
  { label: 'Myself', icon: '🙂' },
  { label: 'Someone else', icon: '👥' },
]
export const timingOptions = [
  { label: 'As soon as possible', icon: '⚡' },
  { label: 'In a few weeks', icon: '📅' },
  { label: 'In a few months', icon: '🗓️' },
  { label: "I'm just exploring", icon: '🔍' },
]
export const contactPrefOptions = [
  { label: 'Phone', icon: '📞' },
  { label: 'Email', icon: '✉️' },
  { label: 'WhatsApp', icon: '💬' },
  { label: 'No preference', icon: '🤝' },
]

export const WHATSAPP_NUMBER = '66211234567' // placeholder — swap for the real business number
export const PHONE_DISPLAY = '+66 2 123 4567'
