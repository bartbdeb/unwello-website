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
  {
    slug: 'health-screenings',
    name: 'Health Screenings & Checkup',
    icon: '🩺',
    priceFrom: '$120',
    hero: {
      headline: 'Health screenings & executive checkups in Thailand',
      subcopy: 'Comprehensive, same-day diagnostic checkups at JCI-accredited hospitals — a thorough picture of your health, without the wait.',
    },
    intro:
      'Thailand\'s leading hospitals run dedicated executive health-screening centres offering same-day, comprehensive diagnostic packages — blood panels, imaging, cardiac and cancer-marker screening — often completed in a single visit with results the same or next day. Popular with travellers combining a checkup with their trip, and increasingly with patients seeking a second opinion before major treatment decisions.',
    reviewer: { name: 'Dr. Ananya Phromsuwan', credentials: 'MD, Internal Medicine', date: 'Reviewed June 2026' },
    procedures: [
      { name: 'Basic Health Checkup', slug: 'basic-checkup', priceFrom: '$120', blurb: 'Blood panel, urinalysis, chest X-ray, physical exam.' },
      { name: 'Executive Checkup', slug: 'executive-checkup', priceFrom: '$350', blurb: 'Extended panel with cardiac screening, ultrasound and consultation.' },
      { name: 'Comprehensive Cancer Screening', slug: 'cancer-screening', priceFrom: '$800', blurb: 'Tumor markers, CT/MRI imaging and specialist review.' },
    ],
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
    procedures: [
      { name: 'PRP Joint Therapy', slug: 'prp-joint', priceFrom: '$2,500', blurb: 'Platelet-rich plasma injections for joint and tendon repair.' },
      { name: 'Stem Cell Therapy', slug: 'stem-cell-therapy', priceFrom: '$6,000', blurb: 'Regenerative stem cell treatment for orthopedic and degenerative conditions.' },
      { name: 'Bone Marrow Transplant', slug: 'bone-marrow-transplant', priceFrom: '$35,000', blurb: 'Autologous or allogeneic transplant for hematologic conditions.' },
    ],
    priceTable: [
      { name: 'PRP Joint Therapy', th: 2500, US: 6000, UK: 4000, AU: 5500 },
      { name: 'Stem Cell Therapy', th: 6000, US: 15000, UK: 10000, AU: 14000 },
      { name: 'Bone Marrow Transplant', th: 35000, US: 200000, UK: 120000, AU: 180000 },
    ],
    faqs: [
      { q: 'Is stem cell therapy proven to work?', a: 'Evidence varies by condition and treatment type. Your coordinator will connect you with the clinic\'s specialists to discuss realistic expectations for your specific case before booking.' },
      { q: 'How is this regulated in Thailand?', a: 'Regenerative treatments at facilities we list operate under Thai FDA and Medical Council oversight. We only list JCI-accredited facilities with documented clinical protocols.' },
      { q: 'How long is recovery?', a: 'PRP and joint therapies typically involve minimal downtime; bone marrow transplant requires an extended hospital stay and recovery period, planned in detail with your coordinator.' },
    ],
    storyMatch: '___none___',
  },
  {
    slug: 'orthopedics',
    name: 'Orthopedics',
    icon: '🦴',
    priceFrom: '$8,000',
    hero: {
      headline: 'Orthopedic surgery & joint replacement in Thailand',
      subcopy: 'Hip, knee and joint replacement, spine surgery and sports medicine at hospitals performing thousands of procedures a year.',
    },
    intro:
      'Thailand is a major destination for orthopedic care, with several hospitals specializing in high-volume joint replacement, spine surgery and sports medicine — some performing over 10,000 procedures. Robotic and computer-assisted joint replacement technology is widely available at accredited hospitals, at a fraction of Western prices.',
    reviewer: { name: 'Dr. Krit Sirikul', credentials: 'MD, Orthopedic Surgery', date: 'Reviewed June 2026' },
    procedures: [
      { name: 'Total Knee Replacement', slug: 'knee-replacement', priceFrom: '$12,000', blurb: 'Full knee joint replacement, including robotic-assisted options.' },
      { name: 'Total Hip Replacement', slug: 'hip-replacement', priceFrom: '$13,500', blurb: 'Full hip joint replacement with modern implant options.' },
      { name: 'Spine Surgery', slug: 'spine-surgery', priceFrom: '$8,000', blurb: 'Disc decompression, fusion and minimally invasive spine procedures.' },
    ],
    priceTable: [
      { name: 'Total Knee Replacement', th: 12000, US: 35000, UK: 15000, AU: 25000 },
      { name: 'Total Hip Replacement', th: 13500, US: 38000, UK: 16000, AU: 27000 },
      { name: 'Spine Surgery (fusion)', th: 8000, US: 30000, UK: 14000, AU: 22000 },
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
    name: 'Cardiology',
    icon: '❤️',
    priceFrom: '$15,000',
    hero: {
      headline: 'Cardiology & cardiac surgery in Thailand',
      subcopy: 'Cardiac catheterization, bypass surgery and stroke care at hospitals with dedicated heart centres and 24/7 cardiac units.',
    },
    intro:
      'Several of Thailand\'s largest hospital groups operate dedicated heart centres with 24/7 cardiac catheterization, disease-specific JCI certifications (such as Acute Coronary Syndrome and Primary Stroke), and experienced cardiac surgery teams — at a fraction of the cost of comparable care in the US, UK or Australia.',
    reviewer: { name: 'Dr. Somchai Rojanasin', credentials: 'MD, Cardiology', date: 'Reviewed June 2026' },
    procedures: [
      { name: 'Cardiac Catheterization', slug: 'catheterization', priceFrom: '$15,000', blurb: 'Diagnostic and interventional coronary catheterization.' },
      { name: 'Coronary Bypass Surgery', slug: 'bypass-surgery', priceFrom: '$28,000', blurb: 'CABG surgery for coronary artery disease.' },
      { name: 'Valve Replacement', slug: 'valve-replacement', priceFrom: '$32,000', blurb: 'Heart valve repair or replacement, including minimally invasive options.' },
    ],
    priceTable: [
      { name: 'Cardiac Catheterization', th: 15000, US: 35000, UK: 20000, AU: 30000 },
      { name: 'Coronary Bypass Surgery', th: 28000, US: 120000, UK: 60000, AU: 90000 },
      { name: 'Valve Replacement', th: 32000, US: 150000, UK: 75000, AU: 110000 },
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
    procedures: [
      { name: 'LASIK', slug: 'lasik', priceFrom: '$1,200', blurb: 'Laser vision correction for short/long-sightedness and astigmatism.' },
      { name: 'Cataract Surgery', slug: 'cataract-surgery', priceFrom: '$1,800', blurb: 'Lens replacement surgery, including premium intraocular lens options.' },
      { name: 'Retinal Treatment', slug: 'retinal-treatment', priceFrom: '$2,000', blurb: 'Diagnosis and treatment for retinal conditions.' },
    ],
    priceTable: [
      { name: 'LASIK (both eyes)', th: 1200, US: 4000, UK: 3000, AU: 3800 },
      { name: 'Cataract Surgery (per eye)', th: 1800, US: 5000, UK: 3200, AU: 4500 },
      { name: 'Retinal Treatment', th: 2000, US: 6000, UK: 4000, AU: 5500 },
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
    name: 'Anti-Aging & Longevity',
    icon: '🌿',
    priceFrom: '$300',
    hero: {
      headline: 'Anti-aging & longevity medicine in Thailand',
      subcopy: 'Genomic screening, hormone therapy and preventive longevity programmes at specialized wellness centres.',
    },
    intro:
      'A small number of Thai hospitals have built dedicated anti-aging and longevity programmes — combining genomic medicine, hormone and nutrient therapy, and preventive screening — aimed at healthy patients wanting to proactively manage long-term health rather than treat an existing condition.',
    reviewer: { name: 'Dr. Ananya Phromsuwan', credentials: 'MD, Internal Medicine', date: 'Reviewed June 2026' },
    procedures: [
      { name: 'Longevity Screening Programme', slug: 'longevity-screening', priceFrom: '$300', blurb: 'Genomic and biomarker screening for a personalized longevity plan.' },
      { name: 'Hormone Therapy', slug: 'hormone-therapy', priceFrom: '$500', blurb: 'Hormone assessment and replacement therapy under physician supervision.' },
      { name: 'IV Nutrient Therapy', slug: 'iv-nutrient-therapy', priceFrom: '$150', blurb: 'Vitamin and nutrient infusions for wellness and recovery.' },
    ],
    priceTable: [
      { name: 'Longevity Screening Programme', th: 300, US: 1200, UK: 900, AU: 1100 },
      { name: 'Hormone Therapy (initial course)', th: 500, US: 1800, UK: 1300, AU: 1600 },
      { name: 'IV Nutrient Therapy (per session)', th: 150, US: 400, UK: 300, AU: 380 },
    ],
    faqs: [
      { q: 'Is this evidence-based medicine?', a: 'Programmes vary — some elements (e.g. biomarker screening) are well-established, others (e.g. some hormone or IV protocols) are less rigorously studied. Discuss the evidence for any specific programme with the clinic\'s physician before booking.' },
      { q: 'Do I need this done in person?', a: 'Initial screening and follow-up consultations are done in person; some result reviews can be done remotely with your coordinator\'s help.' },
      { q: 'Is this a one-time visit or ongoing?', a: 'Most longevity programmes are designed as an initial assessment followed by an ongoing plan — your coordinator can help arrange remote follow-up after you return home.' },
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
  { name: 'Health Screenings & Checkup', icon: '🩺', builtSlug: 'health-screenings' },
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
