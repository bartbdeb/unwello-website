// All site content, ported from the design file (Unwello.dc.html).
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
  { name: 'Rhinoplasty', slug: 'rhinoplasty', icon: '👃', price: '$3,300', blurb: 'Primary and revision nose reshaping.', imgLabel: 'aesthetic surgery', image: '/images/treatments/rhinoplasty.jpg' },
  { name: 'Plastic Surgery', slug: 'plastic-surgery', icon: '✨', price: '$3,900', blurb: 'Body contouring, facelift, breast surgery.', imgLabel: 'surgical suite', image: '/images/treatments/plastic-surgery.jpg' },
  { name: 'Weight Loss', slug: 'weight-loss', icon: '⚖️', price: '$8,500', blurb: 'Gastric sleeve, bypass and balloon procedures.', imgLabel: 'bariatric ward', image: '/images/treatments/weight-loss.jpg' },
  { name: 'Fertility / IVF', slug: 'fertility-ivf', icon: '🍼', price: '$4,100', blurb: 'IVF, ICSI and egg freezing at leading centres.', imgLabel: 'fertility centre', image: '/images/treatments/fertility-ivf.jpg' },
]

export const trustStats = [
  { value: '4.9★', label: 'Average patient rating' },
  { value: '12,000+', label: 'Patients guided' },
  { value: '140+', label: 'Vetted clinics' },
  { value: '60+', label: 'JCI-accredited hospitals' },
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
  { icon: '🗣️', title: 'English-speaking care', body: 'International coordinators and interpreters at every step.' },
  { icon: '🌴', title: 'A recovery destination', body: 'Recover somewhere restful — beaches, wellness and warm hospitality.' },
]

export const stories = [
  { name: 'Sarah', flag: '🇬🇧', procedure: 'Dental implants · Bangkok', quote: 'I saved over £4,000 and the care was better than at home. My coordinator felt like a friend.', imgLabel: 'patient story video' },
  { name: 'Michael', flag: '🇦🇺', procedure: 'Hair transplant · Chiang Mai', quote: 'Everything was arranged before I landed. All I had to do was show up and heal.', imgLabel: 'patient story video' },
  { name: 'Lena', flag: '🇩🇪', procedure: 'IVF · Pattaya', quote: 'After years of trying, this was the team that finally made us feel cared for.', imgLabel: 'patient story video' },
]

export const coordPoints = [
  'One dedicated coordinator from first message to aftercare',
  'You never pay us — clinics do. Quotes are free and non-binding',
  'Reachable 24/7 by WhatsApp, phone or email',
]

export const guides = [
  { cat: 'Costs', title: 'What does dental work really cost in Thailand?', read: '8 min read', imgLabel: 'guide cover' },
  { cat: 'Travel', title: 'Thailand medical visa & entry: a 2026 guide', read: '6 min read', imgLabel: 'guide cover' },
  { cat: 'Recovery', title: 'Best recovery hotels near Bangkok hospitals', read: '5 min read', imgLabel: 'guide cover' },
]

export const footerCols = [
  { title: 'Treatments', links: ['Dental & Implants', 'Hair Transplant', 'Rhinoplasty', 'Weight Loss', 'Fertility / IVF'] },
  { title: 'Cities', links: ['Bangkok', 'Phuket', 'Chiang Mai', 'Pattaya', 'All clinics'] },
  { title: 'Company', links: ['How it works', 'Vetting methodology', 'Patient stories', 'Guides', 'Contact'] },
]

// ---- Funnel option sets ----
export const treatmentOptions = [
  { label: 'Dental', icon: '🦷' },
  { label: 'Hair transplant', icon: '💇' },
  { label: 'Rhinoplasty', icon: '👃' },
  { label: 'Plastic surgery', icon: '✨' },
  { label: 'Weight loss', icon: '⚖️' },
  { label: 'Fertility / IVF', icon: '🍼' },
]
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
