// Content model for Treatment Category pages (spec section B2, expressed as data).
// One reusable page template renders any of these records. Content lives in code
// for now; later this can move to a CMS/backend without changing the template.
//
// Procedures are NOT hand-typed here — they're pulled live from
// content/procedures.ts (real data from the JCI database, tab 3) filtered by
// this category's slug, so category/procedure/clinic stay connected by
// construction rather than by two authors keeping two lists in sync.

import type { Country } from '../data'

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
  priceTable: PriceRow[]
  faqs: Faq[]
  // Matching facilities are looked up dynamically from content/hospitals.ts by
  // specialty (hospital.specialties.includes(category.slug)) — see TreatmentCategory.tsx.
  // Matching procedures are looked up dynamically from content/procedures.ts —
  // see proceduresBySpecialty(category.slug).
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
    slug: 'plastic-surgery',
    name: 'Cosmetic & Plastic Surgery',
    icon: '✨',
    priceFrom: '$3,900',
    hero: {
      headline: 'Cosmetic & plastic surgery in Thailand',
      subcopy: 'Body contouring, facelifts, rhinoplasty and breast surgery by experienced surgeons in JCI-accredited hospitals.',
    },
    intro:
      'From body contouring to facial rejuvenation, Thailand’s plastic-surgery hospitals combine international standards with significant savings. Unwello vets every surgeon and facility for safety, accreditation and outcomes.',
    reviewer: { name: 'Dr. Krit Sirikul', credentials: 'MD, Plastic & Reconstructive Surgery', date: 'Reviewed June 2026' },
    priceTable: [
      { name: 'Breast Augmentation', th: 3900, US: 11000, UK: 8000, AU: 13000 },
      { name: 'Rhinoplasty', th: 3300, US: 9500, UK: 7000, AU: 11000 },
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
    name: 'Bariatric & Weight-Loss Surgery',
    icon: '⚖️',
    priceFrom: '$8,500',
    hero: {
      headline: 'Weight-loss surgery in Thailand',
      subcopy: 'Gastric sleeve, bypass and balloon procedures by bariatric specialists, with full pre- and post-op support.',
    },
    intro:
      'Bariatric surgery in Thailand is performed by experienced specialists in accredited hospitals with dedicated international patient care. Unwello vets every bariatric programme for safety, surgeon experience and follow-up support.',
    reviewer: { name: 'Dr. Somchai Rojanasin', credentials: 'MD, Bariatric Surgery', date: 'Reviewed June 2026' },
    priceTable: [
      { name: 'Gastric Sleeve', th: 8500, US: 19000, UK: 12000, AU: 20000 },
      { name: 'Gastric Bypass', th: 11000, US: 24000, UK: 15000, AU: 25000 },
      { name: 'Adjustable Gastric Band', th: 5500, US: 15000, UK: 9000, AU: 14000 },
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
    name: 'Fertility & IVF',
    icon: '🍼',
    priceFrom: '$4,100',
    hero: {
      headline: 'Fertility & IVF in Thailand',
      subcopy: 'IVF, ICSI and egg freezing at leading reproductive-medicine centres, with compassionate, discreet care.',
    },
    intro:
      'Thailand’s fertility centres are among Asia’s most advanced, offering IVF, ICSI and egg freezing with high standards of care at accessible prices. Unwello vets each centre for lab quality, specialist experience and success-rate transparency.',
    reviewer: { name: 'Dr. Ratana Chaiyaphon', credentials: 'MD, Reproductive Medicine', date: 'Reviewed June 2026' },
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
  {
    slug: 'health-screenings',
    name: 'Health Screenings & Checkups',
    icon: '🩺',
    priceFrom: '$120',
    hero: {
      headline: 'Health screenings & checkups in Thailand',
      subcopy: 'Comprehensive, same-day diagnostic checkups at JCI-accredited hospitals — a thorough picture of your health, without the wait.',
    },
    intro:
      'Thailand\'s leading hospitals run dedicated executive health-screening centres offering same-day, comprehensive diagnostic packages — blood panels, imaging, cardiac and cancer-marker screening — often completed in a single visit with results the same or next day. Popular with travellers combining a checkup with their trip, and increasingly with patients seeking a second opinion before major treatment decisions.',
    reviewer: { name: 'Dr. Ananya Phromsuwan', credentials: 'MD, Internal Medicine', date: 'Reviewed June 2026' },
    priceTable: [
      { name: 'Basic Health Checkup', th: 120, US: 500, UK: 350, AU: 450 },
      { name: 'Executive Checkup', th: 350, US: 1500, UK: 1000, AU: 1400 },
      { name: 'Comprehensive Cancer Screening', th: 800, US: 3500, UK: 2200, AU: 3000 },
    ],
    faqs: [
      { q: 'How long does a checkup take?', a: 'Basic packages typically take half a day; executive and comprehensive packages usually take a full day, with results reviewed the same or next day.' },
      { q: 'Do I need to fast beforehand?', a: 'Most blood-panel packages require 8–12 hours of fasting. Your coordinator will confirm exact prep instructions once your package is chosen.' },
      { q: 'Can I get my results explained by a doctor?', a: 'Yes — every package includes a consultation with a physician to review your results and flag anything that needs follow-up.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'stem-cell',
    name: 'Stem Cell & Regenerative Medicine',
    icon: '🧬',
    priceFrom: '$2,500',
    hero: {
      headline: 'Stem cell & regenerative medicine in Thailand',
      subcopy: 'Regenerative therapies for joint, orthopedic and anti-aging applications, delivered under strict clinical protocols at accredited facilities.',
    },
    intro:
      'Thailand hosts a small number of specialized centres offering regenerative medicine — stem cell therapy, PRP (platelet-rich plasma) and related treatments — most often for joint and orthopedic regeneration, with some facilities also offering bone marrow transplant programmes. This is a developing field; Unwello only lists facilities with clear clinical protocols and JCI accreditation, and recommends a thorough consultation before committing to any regenerative treatment.',
    reviewer: { name: 'Dr. Somchai Rojanasin', credentials: 'MD, Regenerative Medicine', date: 'Reviewed June 2026' },
    priceTable: [
      { name: 'PRP Joint Therapy', th: 2500, US: 6000, UK: 4000, AU: 5500 },
      { name: 'Stem Cell Therapy', th: 6000, US: 15000, UK: 10000, AU: 14000 },
      { name: 'Bone Marrow-Derived Therapy', th: 8500, US: 20000, UK: 14000, AU: 18000 },
    ],
    faqs: [
      { q: 'Is stem cell therapy proven to work?', a: 'Evidence varies by condition and treatment type. Your coordinator will connect you with the clinic\'s specialists to discuss realistic expectations for your specific case before booking.' },
      { q: 'How is this regulated in Thailand?', a: 'Regenerative treatments at facilities we list operate under Thai FDA and Medical Council oversight. We only list JCI-accredited facilities with documented clinical protocols.' },
      { q: 'How long is recovery?', a: 'PRP and joint therapies typically involve minimal downtime; more involved regenerative treatments may need a longer recovery period, planned in detail with your coordinator.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'orthopedics',
    name: 'Orthopedics & Joint Replacement',
    icon: '🦴',
    priceFrom: '$12,000',
    hero: {
      headline: 'Orthopedic surgery & joint replacement in Thailand',
      subcopy: 'Hip, knee and joint replacement, plus ACL and shoulder surgery, at hospitals performing thousands of procedures a year.',
    },
    intro:
      'Thailand is a major destination for orthopedic care, with several hospitals specializing in high-volume joint replacement, sports medicine and complex reconstruction — some performing over 10,000 procedures. Robotic and computer-assisted joint replacement technology is widely available at accredited hospitals, at a fraction of Western prices.',
    reviewer: { name: 'Dr. Krit Sirikul', credentials: 'MD, Orthopedic Surgery', date: 'Reviewed June 2026' },
    priceTable: [
      { name: 'Total Knee Replacement', th: 12000, US: 35000, UK: 15000, AU: 25000 },
      { name: 'Total Hip Replacement', th: 13500, US: 38000, UK: 16000, AU: 27000 },
      { name: 'Robotic-Assisted Joint Replacement', th: 16000, US: 42000, UK: 19000, AU: 30000 },
    ],
    faqs: [
      { q: 'How long is the hospital stay?', a: 'Joint replacement typically requires 3–5 nights in hospital, followed by physiotherapy; most patients plan 2–3 weeks in Thailand in total.' },
      { q: 'What implants are used?', a: 'Hospitals we list use internationally recognized implant brands — your surgeon will discuss options and any cost differences during consultation.' },
      { q: 'Is rehab included?', a: 'Initial physiotherapy is typically included in the hospital stay; your coordinator can help arrange extended rehab if needed before you fly home.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'cardiology',
    name: 'Cardiology & Cardiac Surgery',
    icon: '❤️',
    priceFrom: '$15,000',
    hero: {
      headline: 'Cardiology & cardiac surgery in Thailand',
      subcopy: 'Cardiac catheterization, bypass surgery and arrhythmia treatment at hospitals with dedicated heart centres and 24/7 cardiac units.',
    },
    intro:
      'Several of Thailand\'s largest hospital groups operate dedicated heart centres with 24/7 cardiac catheterization, disease-specific JCI certifications (such as Acute Coronary Syndrome and Primary Stroke), and experienced cardiac surgery teams — at a fraction of the cost of comparable care in the US, UK or Australia.',
    reviewer: { name: 'Dr. Somchai Rojanasin', credentials: 'MD, Cardiology', date: 'Reviewed June 2026' },
    priceTable: [
      { name: 'Angioplasty & Stenting', th: 15000, US: 35000, UK: 20000, AU: 30000 },
      { name: 'Coronary Artery Bypass Graft', th: 28000, US: 120000, UK: 60000, AU: 90000 },
      { name: 'Heart Valve Repair/Replacement', th: 32000, US: 150000, UK: 75000, AU: 110000 },
    ],
    faqs: [
      { q: 'Is emergency cardiac care available?', a: 'The hospitals we list with dedicated heart centres operate 24/7 cardiac units — but Unwello is built for planned treatment, not emergencies. For a medical emergency, contact local emergency services directly.' },
      { q: 'What certifications should I look for?', a: 'Look for JCI Clinical Care Program Certifications in areas like Acute Coronary Syndrome or Primary Stroke — these indicate disease-specific quality standards beyond general hospital accreditation.' },
      { q: 'How long do I need to stay in Thailand?', a: 'Diagnostic catheterization may only need a few days; bypass or valve surgery typically requires 2–3 weeks including recovery before your surgeon clears you to fly.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'eye-care',
    name: 'Eye Care (Ophthalmology)',
    icon: '👁️',
    priceFrom: '$1,200',
    hero: {
      headline: 'Eye care & ophthalmology in Thailand',
      subcopy: 'LASIK, cataract surgery and specialist ophthalmology care at accredited hospitals and dedicated eye centres.',
    },
    intro:
      'Thailand\'s ophthalmology centres offer LASIK and other refractive surgery, cataract surgery, and general eye care using modern diagnostic and surgical technology, at a fraction of prices in the US, UK or Australia — with several hospitals holding disease-specific certifications for cataract surgery.',
    reviewer: { name: 'Dr. Nichakan Boon', credentials: 'MD, Ophthalmology', date: 'Reviewed June 2026' },
    priceTable: [
      { name: 'LASIK (both eyes)', th: 1200, US: 4000, UK: 3000, AU: 3800 },
      { name: 'Cataract Surgery (per eye)', th: 1800, US: 5000, UK: 3200, AU: 4500 },
      { name: 'Retina Surgery', th: 2000, US: 6000, UK: 4000, AU: 5500 },
    ],
    faqs: [
      { q: 'How long does LASIK recovery take?', a: 'Most patients see clearly within a day or two, with a follow-up check before flying home — plan for a few days in Thailand around the procedure.' },
      { q: 'Am I a candidate for LASIK?', a: 'Candidacy depends on your prescription and corneal thickness. An in-person or remote pre-assessment with the clinic will confirm before you travel.' },
      { q: 'Is cataract surgery done on both eyes at once?', a: 'Usually one eye at a time, a few days to weeks apart, to let the first eye heal and confirm results before the second procedure.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'anti-aging',
    name: 'Anti-Aging & Longevity Medicine',
    icon: '🌿',
    priceFrom: '$300',
    hero: {
      headline: 'Anti-aging & longevity medicine in Thailand',
      subcopy: 'Genomic screening, hormone therapy and preventive longevity programmes at specialized wellness centres.',
    },
    intro:
      'A small number of Thai hospitals have built dedicated anti-aging and longevity programmes — combining genomic medicine, hormone and nutrient therapy, and preventive screening — aimed at healthy patients wanting to proactively manage long-term health rather than treat an existing condition.',
    reviewer: { name: 'Dr. Ananya Phromsuwan', credentials: 'MD, Internal Medicine', date: 'Reviewed June 2026' },
    priceTable: [
      { name: 'Longevity Diagnostics Package', th: 300, US: 1200, UK: 900, AU: 1100 },
      { name: 'Hormone Optimization (HRT/TRT)', th: 500, US: 1800, UK: 1300, AU: 1600 },
      { name: 'IV Vitamin/NAD+ Therapy (per session)', th: 150, US: 400, UK: 300, AU: 380 },
    ],
    faqs: [
      { q: 'Is this evidence-based medicine?', a: 'Programmes vary — some elements (e.g. biomarker screening) are well-established, others (e.g. some hormone or IV protocols) are less rigorously studied. Discuss the evidence for any specific programme with the clinic\'s physician before booking.' },
      { q: 'Do I need this done in person?', a: 'Initial screening and follow-up consultations are done in person; some result reviews can be done remotely with your coordinator\'s help.' },
      { q: 'Is this a one-time visit or ongoing?', a: 'Most longevity programmes are designed as an initial assessment followed by an ongoing plan — your coordinator can help arrange remote follow-up after you return home.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'oncology',
    name: 'Oncology / Cancer Treatment',
    icon: '🎗️',
    priceFrom: '$3,000',
    hero: {
      headline: 'Cancer treatment in Thailand',
      subcopy: 'Chemotherapy, radiation therapy and surgical oncology at JCI-accredited cancer centres, including proton therapy and CyberKnife at leading hospitals.',
    },
    intro:
      'Thailand\'s largest hospital groups operate dedicated cancer centres combining surgical oncology, chemotherapy and advanced radiotherapy (including CyberKnife and proton therapy at select hospitals) with multidisciplinary tumor boards. Unwello vets each centre for accreditation, technology and disease-specific certifications.',
    reviewer: { name: 'Dr. Piyawan Suksai', credentials: 'MD, Medical Oncology', date: 'Reviewed July 2026' },
    priceTable: [
      { name: 'Chemotherapy (per cycle)', th: 3000, US: 12000, UK: 7000, AU: 9000 },
      { name: 'Radiation Therapy (course)', th: 9000, US: 45000, UK: 25000, AU: 35000 },
      { name: 'Surgical Tumor Resection', th: 15000, US: 60000, UK: 30000, AU: 45000 },
    ],
    faqs: [
      { q: 'Can I get a second opinion before committing to treatment in Thailand?', a: 'Yes — sharing your existing scans, pathology and records with your coordinator lets the receiving hospital\'s oncology team give an initial assessment before you travel.' },
      { q: 'How is my treatment plan coordinated with my home doctors?', a: 'Hospitals we list provide detailed medical reports and imaging you can share with your home oncologist for continuity of care after you return.' },
      { q: 'How long is a typical treatment course in Thailand?', a: 'This varies enormously by cancer type and stage — from a single diagnostic visit to multi-week chemotherapy or radiotherapy courses. Your coordinator builds a timeline once your case is reviewed.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'neurology',
    name: 'Neurology & Neurosurgery',
    icon: '🧠',
    priceFrom: '$8,000',
    hero: {
      headline: 'Neurology & neurosurgery in Thailand',
      subcopy: 'Brain and spinal cord surgery, stroke intervention and epilepsy treatment at hospitals with dedicated neuroscience centres.',
    },
    intro:
      'Thailand\'s leading neuroscience centres combine advanced imaging, stroke-intervention capability and neurosurgical expertise for conditions ranging from brain tumors to epilepsy — several hospitals hold JCI Primary Stroke certification, a specific marker of stroke-care quality.',
    reviewer: { name: 'Dr. Thanawat Kittikun', credentials: 'MD, Neurosurgery', date: 'Reviewed July 2026' },
    priceTable: [
      { name: 'Brain Tumor Surgery', th: 20000, US: 90000, UK: 45000, AU: 65000 },
      { name: 'Stroke Intervention (Thrombectomy)', th: 15000, US: 70000, UK: 35000, AU: 50000 },
      { name: 'Deep Brain Stimulation', th: 25000, US: 100000, UK: 55000, AU: 75000 },
    ],
    faqs: [
      { q: 'Is Thailand suitable for stroke emergencies?', a: 'Unwello is built for planned treatment, not emergencies — for an acute stroke, contact local emergency services immediately. JCI Primary Stroke-certified hospitals are relevant for patients researching stroke-ready facilities for future reference.' },
      { q: 'What imaging is used for diagnosis?', a: 'Listed hospitals use modern MRI, CT and specialized neuro-imaging; your coordinator can arrange for existing scans to be reviewed before you travel.' },
      { q: 'How long is recovery after neurosurgery?', a: 'This varies widely by procedure and condition — your neurosurgeon will discuss an expected hospital stay and recovery timeline specific to your case.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'organ-transplant',
    name: 'Organ Transplant (Kidney, Liver)',
    icon: '🫀',
    priceFrom: '$40,000',
    hero: {
      headline: 'Kidney & liver transplant in Thailand',
      subcopy: 'Living-donor kidney and liver transplant programmes at hospitals with established transplant teams and post-transplant care.',
    },
    intro:
      'A small number of Thai hospitals operate dedicated transplant programmes for kidney and liver transplantation, along with post-transplant immunosuppression management. Organ transplantation involves significant legal, ethical and medical requirements — Thai law restricts living organ donation to specific eligible donor relationships, and Unwello only lists hospitals operating within these regulatory frameworks.',
    reviewer: { name: 'Dr. Wichai Boonprasert', credentials: 'MD, Transplant Surgery', date: 'Reviewed July 2026' },
    priceTable: [
      { name: 'Kidney Transplant (Living Donor)', th: 40000, US: 150000, UK: 80000, AU: 120000 },
      { name: 'Liver Transplant', th: 90000, US: 350000, UK: 180000, AU: 280000 },
      { name: 'Post-Transplant Management (per year)', th: 6000, US: 25000, UK: 15000, AU: 20000 },
    ],
    faqs: [
      { q: 'Who is eligible to be a living donor in Thailand?', a: 'Thai regulations generally restrict living organ donation to close relatives or spouses, verified through a formal ethics review — your coordinator can explain the specific requirements that apply to your situation.' },
      { q: 'How long do I need to stay in Thailand?', a: 'Transplant surgery and initial recovery typically require several weeks in Thailand, with the exact duration depending on your medical team\'s assessment and recovery progress.' },
      { q: 'What ongoing care is needed after I return home?', a: 'Immunosuppression management is lifelong — your coordinator helps arrange detailed handover records so your home nephrologist or hepatologist can continue care.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'urology',
    name: 'Urology',
    icon: '🩺',
    priceFrom: '$3,500',
    hero: {
      headline: 'Urology treatment in Thailand',
      subcopy: 'Prostate surgery, kidney stone treatment and urological care, including robotic-assisted procedures, at accredited hospitals.',
    },
    intro:
      'Thailand\'s urology departments offer a full range of treatment, from minimally invasive kidney stone procedures to robotic-assisted prostate surgery, at hospitals with modern surgical technology and experienced urologists.',
    reviewer: { name: 'Dr. Suchada Wattanakul', credentials: 'MD, Urology', date: 'Reviewed July 2026' },
    priceTable: [
      { name: 'Kidney Stone Treatment (ESWL/URS)', th: 3500, US: 12000, UK: 7000, AU: 9500 },
      { name: 'Prostate Surgery (incl. robotic)', th: 9000, US: 35000, UK: 18000, AU: 26000 },
      { name: 'Urinary Incontinence Treatment', th: 4500, US: 15000, UK: 9000, AU: 12000 },
    ],
    faqs: [
      { q: 'Is robotic-assisted surgery available?', a: 'Yes, several hospitals we list offer robotic-assisted prostate and urological surgery — your coordinator can confirm availability for your specific procedure.' },
      { q: 'How long is recovery?', a: 'Minimally invasive procedures like kidney stone treatment often allow return to normal activity within days; surgical procedures need longer, discussed with your urologist beforehand.' },
      { q: 'Will I need follow-up after I return home?', a: 'Your coordinator can arrange for detailed records to be shared with a urologist at home for any needed follow-up care.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'gastroenterology',
    name: 'Gastroenterology & Digestive Surgery',
    icon: '🫁',
    priceFrom: '$2,500',
    hero: {
      headline: 'Gastroenterology & digestive surgery in Thailand',
      subcopy: 'Laparoscopic gallbladder surgery, colorectal surgery, hernia repair and digestive diagnostics at JCI-accredited hospitals.',
    },
    intro:
      'Thai hospitals perform a high volume of laparoscopic and minimally invasive digestive surgery — from gallbladder removal to colorectal surgery and hernia repair — alongside comprehensive endoscopy and liver-disease management.',
    reviewer: { name: 'Dr. Narong Pattaravanich', credentials: 'MD, Gastroenterology', date: 'Reviewed July 2026' },
    priceTable: [
      { name: 'Laparoscopic Gallbladder Surgery', th: 4500, US: 15000, UK: 8500, AU: 12000 },
      { name: 'Hernia Repair', th: 2500, US: 9000, UK: 5500, AU: 7500 },
      { name: 'Colorectal Surgery', th: 9000, US: 35000, UK: 18000, AU: 26000 },
    ],
    faqs: [
      { q: 'Is minimally invasive surgery available?', a: 'Yes — most digestive surgery listed here is performed laparoscopically, meaning smaller incisions and faster recovery than open surgery.' },
      { q: 'How long will I need to stay in Thailand?', a: 'Straightforward laparoscopic procedures often need under a week; more complex colorectal surgery needs longer — your surgeon will confirm during consultation.' },
      { q: 'Can I get an endoscopy/colonoscopy as a standalone visit?', a: 'Yes, diagnostic endoscopy and colonoscopy are commonly booked as standalone visits, often combined with a health screening package.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'ent',
    name: 'ENT (Ear, Nose & Throat)',
    icon: '👂',
    priceFrom: '$2,000',
    hero: {
      headline: 'ENT (ear, nose & throat) care in Thailand',
      subcopy: 'Sinus surgery, tonsillectomy, hearing implants and thyroid surgery at accredited hospitals with dedicated ENT departments.',
    },
    intro:
      'Thailand\'s ENT specialists treat everything from chronic sinus conditions to thyroid disorders and hearing loss, using modern diagnostic and surgical technology including cochlear implant programmes at select hospitals.',
    reviewer: { name: 'Dr. Ploenchan Srisawat', credentials: 'MD, Otolaryngology', date: 'Reviewed July 2026' },
    priceTable: [
      { name: 'Sinus Surgery (FESS)', th: 3500, US: 12000, UK: 7000, AU: 9500 },
      { name: 'Tonsillectomy/Adenoidectomy', th: 2000, US: 7000, UK: 4500, AU: 6000 },
      { name: 'Thyroid/Parathyroid Surgery', th: 6000, US: 20000, UK: 11000, AU: 16000 },
    ],
    faqs: [
      { q: 'Are cochlear hearing implants available?', a: 'Yes, select hospitals we list offer cochlear implant programmes — your coordinator can confirm which facility fits your specific case.' },
      { q: 'How long is recovery after sinus surgery?', a: 'Most patients recover within 1–2 weeks, with a follow-up check before flying home to confirm healing is on track.' },
      { q: 'Is thyroid surgery performed by ENT or a separate specialist?', a: 'Depending on the hospital, thyroid surgery may be performed by an ENT surgeon or an endocrine surgeon — your coordinator will match you with the right specialist.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'spine-surgery',
    name: 'Spine Surgery',
    icon: '🦴',
    priceFrom: '$9,000',
    hero: {
      headline: 'Spine surgery in Thailand',
      subcopy: 'Spinal fusion, disc surgery and scoliosis correction, including minimally invasive techniques, at hospitals with dedicated spine centres.',
    },
    intro:
      'Thailand\'s spine centres offer both traditional and minimally invasive spinal surgery — from lumbar decompression to complex fusion and scoliosis correction — often at hospitals that also specialize in broader orthopedic care.',
    reviewer: { name: 'Dr. Krit Sirikul', credentials: 'MD, Orthopedic & Spine Surgery', date: 'Reviewed July 2026' },
    priceTable: [
      { name: 'Lumbar Decompression', th: 9000, US: 30000, UK: 15000, AU: 22000 },
      { name: 'Spinal Fusion', th: 16000, US: 55000, UK: 28000, AU: 40000 },
      { name: 'Herniated Disc Surgery (minimally invasive)', th: 11000, US: 38000, UK: 19000, AU: 28000 },
    ],
    faqs: [
      { q: 'Is minimally invasive spine surgery available?', a: 'Yes — several hospitals we list offer minimally invasive techniques for disc and decompression surgery, which can mean less pain and faster recovery than open surgery.' },
      { q: 'How long is the hospital stay?', a: 'Minimally invasive procedures may need only 2–3 nights; complex fusion surgery typically needs longer, with 2–3 weeks total in Thailand for recovery before flying.' },
      { q: 'Will I need physiotherapy after surgery?', a: 'Yes, physiotherapy is a standard part of spine surgery recovery — your coordinator can help arrange this either in Thailand or after you return home.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'dermatology',
    name: 'Dermatology & Skin Treatments',
    icon: '🧴',
    priceFrom: '$80',
    hero: {
      headline: 'Dermatology & skin treatments in Thailand',
      subcopy: 'Medical skin checks, psoriasis and eczema treatment, acne care and skin-cancer screening by board-certified dermatologists.',
    },
    intro:
      'Thailand\'s dermatology departments treat both medical skin conditions — psoriasis, eczema, acne — and provide skin-cancer screening and biopsy, distinct from purely cosmetic device-led treatments. Every dermatologist we list is board-certified and hospital-affiliated.',
    reviewer: { name: 'Dr. Supaporn Charoensuk', credentials: 'MD, Dermatology', date: 'Reviewed July 2026' },
    priceTable: [
      { name: 'Mole/Skin Lesion Screening', th: 80, US: 300, UK: 200, AU: 260 },
      { name: 'Acne Treatment (Medical, per course)', th: 250, US: 900, UK: 600, AU: 800 },
      { name: 'Skin Cancer Screening & Biopsy', th: 350, US: 1200, UK: 800, AU: 1000 },
    ],
    faqs: [
      { q: 'Is this the same as cosmetic beauty treatments?', a: 'No — this category covers medical dermatology (diagnosis and treatment of skin conditions). Non-surgical cosmetic treatments like injectables and laser devices are a separate category.' },
      { q: 'Do I need a referral to see a dermatologist?', a: 'No referral is needed — you can book a consultation directly through your coordinator.' },
      { q: 'How quickly can I get biopsy results?', a: 'Most hospitals return biopsy results within a few days to a week; your coordinator will confirm the exact timeline with the clinic.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'gender-affirming-care',
    name: 'Gender-Affirming Care',
    icon: '🏳️‍⚧️',
    priceFrom: '$4,500',
    hero: {
      headline: 'Gender-affirming surgery in Thailand',
      subcopy: 'One of the world\'s most established destinations for gender-affirming surgery, with decades of surgical experience and dedicated, respectful care teams.',
    },
    intro:
      'Thailand has one of the longest track records globally in gender-affirming surgery, with surgeons who have performed thousands of procedures and hospitals experienced in providing discreet, dignified care alongside hormone therapy management. Unwello vets every facility for surgical experience, accreditation and patient-centred care standards.',
    reviewer: { name: 'Dr. Kittipong Ruangrit', credentials: 'MD, Gender-Affirming Surgery', date: 'Reviewed July 2026' },
    priceTable: [
      { name: 'Top Surgery', th: 4500, US: 12000, UK: 8000, AU: 10000 },
      { name: 'Male-to-Female Surgery (Vaginoplasty)', th: 12000, US: 30000, UK: 20000, AU: 25000 },
      { name: 'Facial Feminization Surgery', th: 8000, US: 25000, UK: 16000, AU: 20000 },
    ],
    faqs: [
      { q: 'How experienced are the surgeons?', a: 'Thailand\'s gender-affirming surgeons are among the most experienced globally, with many having performed thousands of procedures — your coordinator can share specific surgeon experience during matching.' },
      { q: 'Is hormone therapy management included?', a: 'Ongoing hormone therapy management is typically arranged separately from surgery — your coordinator can help connect you with the right specialist for both.' },
      { q: 'How long should I plan to stay in Thailand?', a: 'This varies by procedure — from around 2 weeks for top surgery to 3–4 weeks for more complex procedures, to allow for proper healing before you fly home.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'maternity',
    name: 'Maternity & Obstetrics',
    icon: '🤰',
    priceFrom: '$2,500',
    hero: {
      headline: 'Maternity & obstetric care in Thailand',
      subcopy: 'Prenatal care, delivery and high-risk pregnancy management at hospitals with dedicated maternity wings and NICU care.',
    },
    intro:
      'Thailand\'s maternity hospitals combine modern obstetric care with hotel-like birthing suites, experienced neonatal teams and — at several hospitals — WHO/UNICEF Mother & Baby Friendly designations, making them popular with expat families and medical travellers alike.',
    reviewer: { name: 'Dr. Rungnapa Thongdee', credentials: 'MD, Obstetrics & Gynecology', date: 'Reviewed July 2026' },
    priceTable: [
      { name: 'Prenatal Care & Delivery (vaginal)', th: 2500, US: 13000, UK: 6000, AU: 9000 },
      { name: 'Cesarean Section', th: 4000, US: 18000, UK: 9000, AU: 13000 },
      { name: 'High-Risk Pregnancy Management', th: 6000, US: 25000, UK: 13000, AU: 18000 },
    ],
    faqs: [
      { q: 'Can I plan to deliver in Thailand as a visitor?', a: 'Yes, many hospitals we list welcome international patients for delivery — your coordinator will help plan timing around your due date and any travel restrictions for late pregnancy.' },
      { q: 'Is NICU care available if needed?', a: 'Yes, hospitals with dedicated maternity wings typically have NICU facilities for premature or high-risk newborns.' },
      { q: 'What documentation will I need for my baby afterward?', a: 'Hospitals provide birth records needed for your home country\'s registration process — your coordinator can guide you on what to arrange in advance.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'pediatrics',
    name: 'Pediatrics',
    icon: '🧸',
    priceFrom: '$100',
    hero: {
      headline: 'Pediatric care in Thailand',
      subcopy: 'General pediatric care, pediatric surgery and neonatal intensive care at hospitals with dedicated children\'s wings.',
    },
    intro:
      'Thailand\'s pediatric hospitals and dedicated children\'s wings provide general and specialist pediatric care, from routine checkups and vaccinations to pediatric surgery and neonatal intensive care, with staff experienced in treating international and expat families.',
    reviewer: { name: 'Dr. Chatchai Wongsawat', credentials: 'MD, Pediatrics', date: 'Reviewed July 2026' },
    priceTable: [
      { name: 'General Pediatric Consultation', th: 100, US: 250, UK: 180, AU: 220 },
      { name: 'Pediatric Vaccination Programs', th: 150, US: 400, UK: 280, AU: 350 },
      { name: 'Pediatric Surgery (minor)', th: 3500, US: 12000, UK: 7000, AU: 9500 },
    ],
    faqs: [
      { q: 'Can my child see a specialist without a referral?', a: 'No referral is needed — your coordinator can book a pediatric specialist consultation directly.' },
      { q: 'Are vaccination records compatible with my home country?', a: 'Hospitals provide detailed vaccination records; check with your home pediatrician on compatibility with your country\'s schedule.' },
      { q: 'Is NICU-level care available for premature infants?', a: 'Yes, hospitals with dedicated pediatric wings typically include neonatal intensive care for premature or unwell newborns.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'mental-health',
    name: 'Mental Health & Addiction Treatment',
    icon: '💆',
    priceFrom: '$3,000',
    hero: {
      headline: 'Mental health & addiction treatment in Thailand',
      subcopy: 'Inpatient rehabilitation, outpatient therapy and psychiatric care at accredited facilities known for privacy and holistic, longer-stay programmes.',
    },
    intro:
      'Thailand has become a respected destination for mental health and addiction treatment, with facilities offering inpatient rehabilitation, outpatient counseling and psychiatric care in private, discreet settings — often combining clinical treatment with a restorative environment.',
    reviewer: { name: 'Dr. Anchalee Boonyarit', credentials: 'MD, Psychiatry', date: 'Reviewed July 2026' },
    priceTable: [
      { name: 'Outpatient Counseling/Therapy (per session)', th: 80, US: 200, UK: 150, AU: 180 },
      { name: 'Psychiatric Evaluation & Medication Management', th: 150, US: 400, UK: 300, AU: 350 },
      { name: 'Inpatient Rehab (per week)', th: 3000, US: 10000, UK: 7000, AU: 8500 },
    ],
    faqs: [
      { q: 'How private is treatment?', a: 'Facilities we list emphasize confidentiality and discretion, with private rooms and dedicated care teams — your coordinator handles all arrangements discreetly.' },
      { q: 'How long are typical inpatient programmes?', a: 'Programmes commonly range from 2–8 weeks depending on the condition and treatment plan, agreed with the clinical team before you travel.' },
      { q: 'Is family involvement possible?', a: 'Many programmes offer family therapy sessions, in person or remotely — ask your coordinator about options when planning your treatment.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'physiotherapy',
    name: 'Physiotherapy, Rehab & Sports Medicine',
    icon: '🏃',
    priceFrom: '$50',
    hero: {
      headline: 'Physiotherapy & sports medicine in Thailand',
      subcopy: 'Post-surgical rehabilitation, sports injury treatment and neurological rehab, often combined with recovery from another procedure.',
    },
    intro:
      'Thailand\'s physiotherapy and sports medicine centres support recovery after surgery, sports injuries and neurological conditions — many patients combine a rehab programme with recovery from orthopedic or spine surgery booked through Unwello.',
    reviewer: { name: 'Dr. Somsak Intharathep', credentials: 'MD, Physical Medicine & Rehabilitation', date: 'Reviewed July 2026' },
    priceTable: [
      { name: 'Post-Surgical Physiotherapy (per session)', th: 50, US: 150, UK: 100, AU: 130 },
      { name: 'Sports Injury Rehabilitation (per week)', th: 400, US: 1200, UK: 800, AU: 1000 },
      { name: 'Neurological Rehabilitation (per week)', th: 600, US: 1800, UK: 1200, AU: 1500 },
    ],
    faqs: [
      { q: 'Can I combine this with surgery booked through Unwello?', a: 'Yes — this is common. Your coordinator can build a combined recovery plan alongside orthopedic, spine or sports-injury surgery.' },
      { q: 'How many sessions will I need?', a: 'This depends on your condition and goals — your physiotherapist will build a personalized plan after an initial assessment.' },
      { q: 'Can I continue rehab remotely after I go home?', a: 'Many programmes provide a home exercise plan and can coordinate with a physiotherapist in your home country for continuity.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'traditional-thai-medicine',
    name: 'Traditional Thai Medicine & Medical Spa',
    icon: '🌺',
    priceFrom: '$40',
    hero: {
      headline: 'Traditional Thai medicine & medical spa',
      subcopy: 'Traditional Thai massage, herbal medicine consultations and medical spa wellness packages, often paired with recovery after treatment.',
    },
    intro:
      'Traditional Thai massage and herbal medicine have centuries of history in Thailand, and many hospitals and wellness centres now offer them alongside modern medical spa packages — a popular complement to recovery after surgery or simply as a standalone wellness trip.',
    reviewer: { name: 'Dr. Duangjai Srisuwan', credentials: 'Traditional Thai Medicine Practitioner', date: 'Reviewed July 2026' },
    priceTable: [
      { name: 'Traditional Thai Massage Therapy (per session)', th: 40, US: 120, UK: 90, AU: 110 },
      { name: 'Herbal Medicine Consultation', th: 60, US: 150, UK: 110, AU: 130 },
      { name: 'Medical Spa Wellness Package', th: 200, US: 600, UK: 450, AU: 550 },
    ],
    faqs: [
      { q: 'Is this a substitute for medical treatment?', a: 'No — traditional Thai medicine and spa services are wellness-focused and complement, rather than replace, medical treatment.' },
      { q: 'Can I combine this with recovery from surgery?', a: 'Yes, many patients add wellness sessions to their recovery plan after a procedure — ask your coordinator when planning your trip.' },
      { q: 'Do I need a doctor\'s approval first?', a: 'If you\'re recovering from recent surgery, check with your treating doctor before booking massage or spa treatments to make sure it\'s appropriate for your recovery stage.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'endocrinology',
    name: 'Endocrinology & Diabetes Care',
    icon: '💉',
    priceFrom: '$150',
    hero: {
      headline: 'Endocrinology & diabetes care in Thailand',
      subcopy: 'Diabetes management, thyroid treatment and medical weight-management programmes, including GLP-1 (Ozempic-style) protocols, under specialist supervision.',
    },
    intro:
      'Thailand\'s endocrinology departments manage diabetes, thyroid disorders and hormone conditions, and increasingly offer medically supervised GLP-1 weight-management programmes as a non-surgical alternative or complement to bariatric surgery.',
    reviewer: { name: 'Dr. Chalermchai Boonma', credentials: 'MD, Endocrinology', date: 'Reviewed July 2026' },
    priceTable: [
      { name: 'Hormone/Endocrine Diagnostics', th: 150, US: 500, UK: 350, AU: 450 },
      { name: 'Diabetes Management Program (initial)', th: 300, US: 1000, UK: 700, AU: 900 },
      { name: 'Medical Weight Management / GLP-1 Program (per month)', th: 250, US: 1200, UK: 800, AU: 1000 },
    ],
    faqs: [
      { q: 'Is the GLP-1 weight-management program the same as bariatric surgery?', a: 'No — this is a non-surgical, medication-based program supervised by an endocrinologist. It can be a standalone option or used alongside surgical weight loss, depending on your case.' },
      { q: 'Can I continue diabetes management remotely after returning home?', a: 'Your coordinator can arrange detailed records for your home endocrinologist, and some clinics offer remote follow-up consultations.' },
      { q: 'How often will I need monitoring?', a: 'This depends on your specific condition and treatment — your endocrinologist will set a monitoring schedule during your initial consultation.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'pulmonology',
    name: 'Pulmonology & Respiratory Care',
    icon: '🫁',
    priceFrom: '$200',
    hero: {
      headline: 'Pulmonology & respiratory care in Thailand',
      subcopy: 'Asthma and COPD management, sleep apnea treatment and pulmonary function testing at accredited hospitals.',
    },
    intro:
      'Thailand\'s pulmonology departments provide diagnosis and ongoing management for asthma, COPD and sleep apnea, alongside comprehensive pulmonary function testing — often as part of a broader health screening visit.',
    reviewer: { name: 'Dr. Nattapong Srisuk', credentials: 'MD, Pulmonology', date: 'Reviewed July 2026' },
    priceTable: [
      { name: 'Pulmonary Function Testing', th: 200, US: 700, UK: 450, AU: 600 },
      { name: 'Sleep Apnea Treatment (initial assessment + CPAP)', th: 600, US: 2500, UK: 1600, AU: 2000 },
      { name: 'Asthma/COPD Management Program (initial)', th: 300, US: 1000, UK: 700, AU: 900 },
    ],
    faqs: [
      { q: 'Can I combine this with a health screening visit?', a: 'Yes — pulmonary function testing is often added to an executive health checkup package.' },
      { q: 'Is a sleep study required for sleep apnea diagnosis?', a: 'Yes, an overnight or home sleep study is typically required before a CPAP or treatment plan is prescribed — your coordinator can arrange this.' },
      { q: 'How is ongoing management handled after I go home?', a: 'Your coordinator can arrange detailed records for your home pulmonologist, and some programmes include remote follow-up.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'elderly-care',
    name: 'Elderly / Long-Term & Home Care',
    icon: '🧓',
    priceFrom: '$60',
    hero: {
      headline: 'Elderly & long-term care in Thailand',
      subcopy: 'Residential long-term care, in-home nursing and palliative care, popular with retirees and expat families seeking quality care at accessible cost.',
    },
    intro:
      'Thailand has a well-developed long-term and elderly care sector, offering residential care facilities, in-home nursing and palliative/hospice care — a popular option for retirees, expats and families seeking quality care for aging relatives at a fraction of costs elsewhere.',
    reviewer: { name: 'Dr. Kanokwan Phetcharat', credentials: 'MD, Geriatric Medicine', date: 'Reviewed July 2026' },
    priceTable: [
      { name: 'Geriatric Assessment', th: 150, US: 500, UK: 350, AU: 450 },
      { name: 'In-Home Nursing Care (per day)', th: 60, US: 250, UK: 180, AU: 220 },
      { name: 'Long-Term Residential Care (per month)', th: 1200, US: 6000, UK: 4000, AU: 5000 },
    ],
    faqs: [
      { q: 'Can family visit or stay nearby?', a: 'Yes — most facilities welcome family visits and can help arrange nearby accommodation for extended family stays.' },
      { q: 'What level of medical support is available?', a: 'Facilities range from assisted living to full nursing and palliative care — your coordinator will match the right level of care to your specific needs.' },
      { q: 'Is this only for long-term stays?', a: 'No — in-home nursing and geriatric assessments are also available for shorter-term or respite care needs.' },
    ],
    storyMatch: '___none___',
  },
]

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug)

// Header mega-menu list — deliberately broader than the homepage's 6 "popular
// treatments" (which stay as-is). `builtSlug` links to a real Treatment
// Category page where one exists; items without one open the quote funnel
// pre-filled with their name instead of a dead link.
export type MegaMenuItem = { name: string; icon: string; builtSlug?: string }

export const megaMenuItems: MegaMenuItem[] = [
  { name: 'Health Screenings & Checkups', icon: '🩺', builtSlug: 'health-screenings' },
  { name: 'Dental Care', icon: '🦷', builtSlug: 'dental' },
  { name: 'Cosmetic & Plastic Surgery', icon: '✨', builtSlug: 'plastic-surgery' },
  { name: 'Stem Cell & Regenerative Medicine', icon: '🧬', builtSlug: 'stem-cell' },
  { name: 'Fertility & IVF', icon: '🍼', builtSlug: 'fertility-ivf' },
  { name: 'Orthopedics', icon: '🦴', builtSlug: 'orthopedics' },
  { name: 'Cardiology', icon: '❤️', builtSlug: 'cardiology' },
  { name: 'Eye Care (Ophthalmology)', icon: '👁️', builtSlug: 'eye-care' },
  { name: 'Bariatric & Weight-Loss Surgery', icon: '⚖️', builtSlug: 'weight-loss' },
  { name: 'Anti-Aging & Longevity', icon: '🌿', builtSlug: 'anti-aging' },
]
