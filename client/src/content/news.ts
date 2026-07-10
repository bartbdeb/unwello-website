// Guides & news content for the /news listing + /news/:slug article pages.
// Structured per the Newsroom feature spec: sectioned body (for a real table
// of contents), a named editorial reviewer (E-E-A-T signal for YMYL medical
// content), optional cost tables for comparison-format articles, and an
// optional categorySlug that cross-links the article into its matching
// /treatments/:slug page (and back — see TreatmentCategory's "Related
// reading" module).
//
// The homepage "Guides & resources" teaser (Sections.tsx) reads the same
// array, filtered to `featured` — keep `cat`, `title`, `read` and `image`
// present on every entry so that teaser keeps working unmodified.
//
// Cover images are NOT hand-picked per article. Each of the 6 chapters has a
// pool of real photos (client/public/images/news/<chapter-slug>/), and every
// article is assigned the next image in its chapter's pool, in order,
// wrapping around once the pool is exhausted (see `imageForChapter` below).
// This means a new article appended to `articleDefs` automatically gets a
// photo — nobody has to remember to pick one — and chapters with more
// articles than photos just start reusing images rather than falling back to
// a placeholder.

import type { Faq, PriceRow } from './treatments'

export type ArticleSection = {
  heading: string
  paragraphs: string[]
}

export type ArticleFormat = 'Cost guide' | 'Checklist' | 'Explainer' | 'City guide' | 'Guide'

export const formatMeta: Record<ArticleFormat, { icon: string }> = {
  'Cost guide': { icon: '💰' },
  Checklist: { icon: '✅' },
  Explainer: { icon: '📖' },
  'City guide': { icon: '📍' },
  Guide: { icon: '🧭' },
}

// Fixed taxonomy chapters — every article's `cat` must be one of these six.
// Unlike a category list derived from whichever articles happen to exist,
// this stays stable as the newsroom grows, so the hub's chapter rail doesn't
// reshuffle every time a new article ships.
export const NEWS_CHAPTERS = [
  'Cost & Pricing',
  'Travel & Visas',
  'Recovery & Logistics',
  'Safety & Accreditation',
  'City Guides',
  'Planning Process',
] as const

export type NewsChapter = (typeof NEWS_CHAPTERS)[number]

// Chapter -> folder slug under client/public/images/news/. The pool sizes
// differ per chapter (however many real photos exist for that topic) — the
// rotation function below only needs the count, not a fixed number.
const CHAPTER_IMAGE_FOLDER: Record<NewsChapter, string> = {
  'Cost & Pricing': 'cost-pricing',
  'Travel & Visas': 'travel-visas',
  'Recovery & Logistics': 'recovery-logistics',
  'Safety & Accreditation': 'safety-accreditation',
  'City Guides': 'city-guides',
  'Planning Process': 'planning-process',
}

const CHAPTER_IMAGE_COUNT: Record<NewsChapter, number> = {
  'Cost & Pricing': 13,
  'Travel & Visas': 12,
  'Recovery & Logistics': 5,
  'Safety & Accreditation': 4,
  'City Guides': 4,
  'Planning Process': 3,
}

// Deterministic rotation: the Nth article ever written for a chapter gets
// image (N mod pool size) + 1. Same article always renders the same photo
// (no random reshuffling on every page load); the next new article in that
// chapter automatically picks up the next photo in the pool.
function imageForChapter(chapter: NewsChapter, indexInChapter: number): string {
  const count = CHAPTER_IMAGE_COUNT[chapter]
  const n = (indexInChapter % count) + 1
  return `/images/news/${CHAPTER_IMAGE_FOLDER[chapter]}/${n}.jpg`
}

export type NewsArticle = {
  slug: string
  cat: NewsChapter
  format: ArticleFormat
  title: string
  dek: string
  excerpt: string
  read: string
  date: string
  views: number
  author: string
  reviewer: { name: string; credentials: string }
  image: string
  categorySlug?: string
  costTable?: PriceRow[]
  sections: ArticleSection[]
  faqs: Faq[]
  featured?: boolean
}

const articleDefs: Omit<NewsArticle, 'image'>[] = [
  {
    slug: 'dental-costs-thailand',
    cat: 'Cost & Pricing',
    format: 'Cost guide',
    title: 'What does dental work really cost in Thailand?',
    dek: 'A transparent, procedure-by-procedure price breakdown at JCI-accredited Thai clinics, compared to the US, UK and Australia.',
    excerpt: 'A transparent breakdown of implant, veneer and crown pricing across Thailand\'s JCI-accredited clinics, compared to the US, UK and Australia.',
    read: '8 min read',
    date: '3 June 2026',
    views: 6240,
    author: 'Unwello Editorial Team',
    reviewer: { name: 'Dr. Anong Pattanapong', credentials: 'DDS, Implantology' },
    categorySlug: 'dental',
    costTable: [
      { name: 'Single Dental Implant', th: 680, US: 4200, UK: 2600, AU: 4800 },
      { name: 'Porcelain Veneer (per tooth)', th: 300, US: 1500, UK: 900, AU: 1600 },
      { name: 'Zirconia Crown', th: 320, US: 1300, UK: 800, AU: 1400 },
      { name: 'All-on-4 (per arch)', th: 6500, US: 26000, UK: 14000, AU: 24000 },
    ],
    sections: [
      {
        heading: 'Why the price gap is so large',
        paragraphs: [
          'Dental treatment is consistently one of the top reasons patients travel to Thailand — and the price gap is a big part of why. A single dental implant that costs $4,200 in the US or £2,600 in the UK typically runs $680 at a JCI-accredited Thai clinic, all-inclusive of the implant, abutment and crown.',
          'That saving isn\'t a sign of lower quality. Thailand\'s leading dental hospitals use the same implant systems (Straumann, Nobel Biocare) and imaging technology as Western clinics, and many dentists trained or did fellowships abroad. The price difference comes down to lower operating costs, a large domestic patient base that subsidises fixed costs, and a currency exchange rate that favours international patients.',
        ],
      },
      {
        heading: 'What "all-inclusive" should actually include',
        paragraphs: [
          'What should be included in an all-inclusive dental quote? At minimum: the procedure itself, materials, clinic fees, and any sedation used. The best clinics also flag exactly what isn\'t included upfront — such as bone grafting if it turns out to be needed, which is a common variable cost that can catch patients off guard if it\'s not disclosed before treatment.',
        ],
      },
      {
        heading: 'Planning the timeline',
        paragraphs: [
          'Timeline matters too. A single implant typically needs two visits spaced three to six months apart (placement, then the crown once the bone has healed), though same-day-load options exist for suitable cases. If you\'re combining implants with veneers or a full-mouth restoration, your coordinator should build a timeline around your travel plans rather than the other way around.',
          'Our advice: always ask for a written, itemized quote before booking travel, and confirm what happens if additional treatment — like a bone graft — turns out to be necessary once your dentist examines you in person.',
        ],
      },
    ],
    faqs: [
      { q: 'Is the quoted price really the final price?', a: 'A properly itemized quote should hold unless your dentist finds something during the in-person exam that changes the treatment plan — for example, needing a bone graft before an implant can be placed. Ask upfront what happens to the price in that scenario.' },
      { q: 'How many trips does a full-mouth restoration need?', a: 'Typically two to three visits over several months, spaced around healing time. Your coordinator can sequence this around your own travel availability.' },
      { q: 'Do Thai dental clinics use the same materials as Western clinics?', a: 'The JCI-accredited clinics Unwello lists use internationally recognized implant and material brands — the same ones used in the US, UK and Australia.' },
    ],
    featured: true,
  },
  {
    slug: 'thailand-medical-visa-guide-2026',
    cat: 'Travel & Visas',
    format: 'Checklist',
    title: 'Thailand medical visa & entry: a 2026 guide',
    dek: 'Entry requirements, the Medical Treatment (Non-Immigrant M) visa, and how long you can actually stay for treatment.',
    excerpt: 'Everything you need to know about entry requirements, the Medical Treatment (Non-Immigrant M) visa, and how long you can stay for treatment.',
    read: '6 min read',
    date: '18 May 2026',
    views: 4890,
    author: 'Unwello Editorial Team',
    reviewer: { name: 'Somchai Trirat', credentials: 'Licensed Immigration Consultant' },
    sections: [
      {
        heading: 'Do you even need a special visa?',
        paragraphs: [
          'Most short medical trips to Thailand — a health screening, a single dental visit, a consultation — don\'t require anything beyond the standard tourist entry available to citizens of many countries, which typically allows a stay of 30 to 60 days depending on nationality.',
        ],
      },
      {
        heading: 'The Medical Treatment (Non-Immigrant "M") visa',
        paragraphs: [
          'For longer or multi-stage treatment — IVF cycles, bariatric surgery follow-up, multi-visit implant work — Thailand offers a Medical Treatment visa (Non-Immigrant Category "M"), which allows longer stays and can be extended in-country with a letter from your treating hospital confirming an ongoing treatment plan.',
          'To apply, you\'ll generally need: a passport valid for at least six months, a letter of acceptance or appointment confirmation from a Thai hospital, proof of funds, and — depending on your embassy — a medical certificate. Requirements vary by Thai consulate, so always confirm the current list directly with the consulate covering your country before applying.',
        ],
      },
      {
        heading: 'Practical tips',
        paragraphs: [
          'One practical tip: ask your coordinator for the treatment confirmation letter as early as possible in the process. Many consulates require it as a supporting document, and hospitals typically need a few business days to issue it once your treatment date is confirmed.',
          'If your treatment plan changes while you\'re in Thailand — for example, your recovery takes longer than expected — a licensed immigration agent or the hospital\'s international patient office can usually help arrange a visa extension without requiring you to leave the country.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I get a medical visa on arrival?', a: 'No — the Medical Treatment (Non-Immigrant "M") visa must be applied for at a Thai embassy or consulate before you travel. Standard tourist entry, where applicable to your nationality, is separate and doesn\'t require pre-approval.' },
      { q: 'Can I extend my stay once I\'m already in Thailand?', a: 'Yes, with a supporting letter from your treating hospital confirming an ongoing treatment plan. Extensions are handled at Thai Immigration offices.' },
      { q: 'Does a companion travelling with me need a different visa?', a: 'Companions typically travel on standard tourist entry rather than a medical visa, since the medical visa is tied to the patient\'s treatment. Confirm requirements for your specific nationality before booking.' },
    ],
    featured: true,
  },
  {
    slug: 'best-recovery-hotels-bangkok',
    cat: 'Recovery & Logistics',
    format: 'Guide',
    title: 'Best recovery hotels near Bangkok hospitals',
    dek: 'Where you stay after a procedure matters — proximity, accessibility, and the small details that make a real difference.',
    excerpt: 'A practical guide to choosing where to stay during recovery — proximity, accessibility, and the small details that make a real difference.',
    read: '5 min read',
    date: '2 May 2026',
    views: 3150,
    author: 'Unwello Editorial Team',
    reviewer: { name: 'Nara Sirisak', credentials: 'Senior Patient Coordinator' },
    sections: [
      {
        heading: 'Why location matters more than you think',
        paragraphs: [
          'Where you stay after a procedure matters more than most patients expect. A hotel five minutes from your hospital by taxi is a very different recovery experience than one across the city — especially in the first 48 to 72 hours after surgery, when follow-up visits are more frequent.',
        ],
      },
      {
        heading: 'What to look for, by procedure type',
        paragraphs: [
          'For procedures with mobility restrictions — joint replacement, some cosmetic surgery — look for hotels with step-free access, a lift directly to your floor, and ideally a kitchenette or fridge, since hospital-adjacent hotels in Bangkok\'s medical districts are used to patients who don\'t want to go out for every meal.',
        ],
      },
      {
        heading: 'Bangkok\'s two main medical hubs',
        paragraphs: [
          'Bangkok\'s two main medical hubs — around Sukhumvit (Bumrungrad, Samitivej Sukhumvit) and around Silom/Sathorn (BNH, several Bangkok Hospital Group facilities) — each have a cluster of hotels that specifically cater to recovering patients, often with medical-stay rates and late checkout built in.',
          'Your coordinator can usually recommend two or three options in the right price range near your specific hospital, and in many cases can book the room as part of your overall quote — which is worth taking advantage of, since it removes one more thing to plan around a physically demanding week.',
        ],
      },
    ],
    faqs: [
      { q: 'How close should my hotel be to the hospital?', a: 'Within a 10-minute taxi ride is a good rule of thumb for the first week after most procedures, closer still if mobility is restricted.' },
      { q: 'Can my coordinator book the hotel for me?', a: 'Yes — in most cases hotel booking near your hospital can be included as part of your overall quote, so it\'s one less thing to arrange yourself.' },
      { q: 'How many follow-up visits should I plan around?', a: 'This varies by procedure — always confirm with your surgical team before choosing accommodation, since a 10-minute walk stops being convenient during a physically demanding recovery.' },
    ],
    featured: true,
  },
  {
    slug: 'what-is-jci-accreditation',
    cat: 'Safety & Accreditation',
    format: 'Explainer',
    title: 'What JCI accreditation actually means for patients',
    dek: 'JCI is the gold standard in international hospital accreditation — what it verifies, what it doesn\'t, and why Unwello only lists JCI hospitals.',
    excerpt: 'JCI is the gold standard in international hospital accreditation — here\'s what it verifies, what it doesn\'t, and why Unwello only lists JCI hospitals.',
    read: '7 min read',
    date: '14 April 2026',
    views: 2780,
    author: 'Unwello Editorial Team',
    reviewer: { name: 'Dr. Ananya Phromsuwan', credentials: 'MD, Internal Medicine' },
    sections: [
      {
        heading: 'The audit behind the badge',
        paragraphs: [
          'Joint Commission International (JCI) accreditation is widely considered the gold standard for international hospital quality — a rigorous, on-site audit process covering patient safety protocols, infection control, staff qualifications, medication management and facility standards, renewed every three years.',
          'Unlike a marketing badge, JCI accreditation requires hospitals to demonstrate compliance with over a thousand specific measurable elements, verified by surveyors who spend several days on-site reviewing patient records, interviewing staff, and observing procedures in real time.',
        ],
      },
      {
        heading: 'Disease-specific certifications go further',
        paragraphs: [
          'Some hospitals go further with JCI\'s disease- or condition-specific certifications — for example Primary Stroke, Acute Coronary Syndrome, or Hip/Knee Replacement — which layer additional, procedure-specific quality benchmarks on top of the base hospital accreditation. These are worth looking for if you\'re considering a specific high-acuity procedure.',
        ],
      },
      {
        heading: 'What it doesn\'t tell you',
        paragraphs: [
          'What JCI accreditation doesn\'t tell you: it doesn\'t rate individual surgeons, guarantee a specific outcome, or cover pricing transparency. That\'s why Unwello combines JCI accreditation with our own additional vetting — doctor credentials, outcome data where available, and direct verification calls — before any clinic is listed.',
          'In practice, this means every facility on Unwello has already cleared one of healthcare\'s most demanding external audits before our own team even begins reviewing it.',
        ],
      },
    ],
    faqs: [
      { q: 'Is JCI accreditation the same as ISO 9001?', a: 'No — ISO 9001 certifies quality management processes generally, while JCI accreditation specifically audits clinical care standards, patient safety and hospital operations. JCI is the more clinically rigorous of the two.' },
      { q: 'How often is JCI accreditation renewed?', a: 'Every three years, via a full on-site re-survey — hospitals don\'t simply keep the badge indefinitely.' },
      { q: 'Does every hospital on Unwello hold JCI accreditation?', a: 'Yes — it\'s the baseline requirement before Unwello\'s own additional vetting (doctor credentials, outcomes, direct verification) even begins.' },
    ],
  },
  {
    slug: 'choosing-a-medical-coordinator',
    cat: 'Planning Process',
    format: 'Explainer',
    title: 'What a good medical travel coordinator actually does',
    dek: 'Coordinators are the difference between a stressful trip and a smooth one — what to expect, and the questions worth asking first.',
    excerpt: 'Coordinators are the difference between a stressful trip and a smooth one — here\'s what to expect from a good one, and questions worth asking.',
    read: '6 min read',
    date: '29 March 2026',
    views: 2410,
    author: 'Unwello Editorial Team',
    reviewer: { name: 'Nara Sirisak', credentials: 'Senior Patient Coordinator' },
    sections: [
      {
        heading: 'Before you land',
        paragraphs: [
          'A medical travel coordinator\'s job starts long before you land in Thailand: reviewing your case, shortlisting appropriate clinics, negotiating a transparent quote, and making sure your treating doctor has everything they need before your first consultation.',
        ],
      },
      {
        heading: 'While you\'re there',
        paragraphs: [
          'Once you\'re in Thailand, a good coordinator handles the logistics that are easy to underestimate from abroad — interpreter arrangements if needed, transport between your hotel and appointments, and being a single point of contact if a schedule needs to shift.',
          'Perhaps most importantly, a coordinator is your advocate if something doesn\'t go to plan — a delayed lab result, an unexpected recommendation from your surgeon, a question about your quote. Having one person who already knows your full case, rather than starting from scratch with hospital admin each time, makes those moments far less stressful.',
        ],
      },
      {
        heading: 'Questions worth asking before you commit',
        paragraphs: [
          'Questions worth asking any coordinator before you commit: Are you paid by the clinic or by me? It should always be the clinic — a free service to patients is a sign the coordinator\'s incentives are aligned with getting you good care, not upselling. What happens if my treatment plan changes once I\'m examined in person? And can you connect me directly with the treating doctor before I travel, not just a sales representative?',
          'At Unwello, every patient is assigned one dedicated coordinator from their first enquiry through aftercare — free, because we\'re paid a referral fee by the clinic only if you book, never by you.',
        ],
      },
    ],
    faqs: [
      { q: 'Is a coordinator the same as a travel agent?', a: 'No — a medical coordinator focuses on matching you to the right clinic and doctor, managing the treatment plan and quote, and being your advocate throughout treatment. Travel logistics are part of the role, but the medical case is the core of it.' },
      { q: 'Who pays the coordinator?', a: 'A trustworthy coordinator is paid by the clinic only if you book — never by the patient. That keeps their incentives aligned with finding you the right care, not the most expensive option.' },
      { q: 'Can I speak to the doctor directly before travelling?', a: 'A good coordinator can arrange a video consultation with your treating doctor before you commit to travel — this is worth asking for explicitly.' },
    ],
  },
  {
    slug: 'medical-tourism-insurance-thailand',
    cat: 'Cost & Pricing',
    format: 'Explainer',
    title: 'Does travel or health insurance cover treatment in Thailand?',
    dek: 'What standard travel insurance covers, what it typically excludes for planned procedures, and what to check before you book.',
    excerpt: 'A practical look at what standard travel insurance covers, what it typically excludes for planned procedures, and what to check before you book.',
    read: '7 min read',
    date: '11 March 2026',
    views: 1930,
    author: 'Unwello Editorial Team',
    reviewer: { name: 'Somchai Trirat', credentials: 'Licensed Immigration Consultant' },
    sections: [
      {
        heading: 'What standard travel insurance actually covers',
        paragraphs: [
          'Standard travel insurance is designed for unexpected medical emergencies while abroad — not for planned, elective procedures you\'ve travelled specifically to receive. Most policies explicitly exclude any treatment that was the purpose of your trip, so it\'s important not to assume your usual travel policy has you covered.',
        ],
      },
      {
        heading: 'Specialist medical tourism insurance',
        paragraphs: [
          'Some specialist medical tourism insurance products do exist, covering complications arising from a planned overseas procedure — for example, if you need follow-up care after returning home for an issue related to your original treatment. These are worth researching separately from standard travel insurance if your procedure carries any elevated risk profile.',
        ],
      },
      {
        heading: 'Domestic insurance and cross-border coverage',
        paragraphs: [
          'Domestic health insurance in your home country occasionally covers treatment abroad, particularly in cases where a long domestic waiting list is documented — some UK and EU patients, for instance, have successfully claimed under cross-border healthcare provisions. This varies enormously by country and insurer, so it requires direct confirmation with your provider, not general guidance.',
          'What all patients should budget for regardless of insurance: a contingency fund for extended recovery time if complications require a longer stay, and separate travel insurance that explicitly covers medical evacuation, in case a rare complication requires care beyond what your treating hospital can provide.',
        ],
      },
    ],
    faqs: [
      { q: 'Will my regular travel insurance cover my procedure?', a: 'Almost certainly not for the procedure itself — most policies exclude treatment that was the purpose of the trip. It may still cover unrelated emergencies during your stay.' },
      { q: 'Can my coordinator help with an insurance claim?', a: 'Your coordinator can\'t give insurance advice, but can provide the documentation — itemized quotes, medical reports — that most insurers and cross-border healthcare schemes require to process a claim.' },
      { q: 'Should I still buy travel insurance if it won\'t cover my procedure?', a: 'Yes — for medical evacuation coverage and any unrelated emergencies during your stay, which standard procedure-specific quotes don\'t address.' },
    ],
  },
  {
    slug: 'bangkok-vs-phuket-vs-chiang-mai',
    cat: 'City Guides',
    format: 'City guide',
    title: 'Bangkok, Phuket or Chiang Mai: where should you get treated?',
    dek: 'A city-by-city comparison for medical travellers — hospital depth, recovery environment, and getting there.',
    excerpt: 'A city-by-city comparison for medical travellers — hospital depth, recovery environment, and getting there.',
    read: '6 min read',
    date: '20 February 2026',
    views: 3560,
    author: 'Unwello Editorial Team',
    reviewer: { name: 'Nara Sirisak', credentials: 'Senior Patient Coordinator' },
    sections: [
      {
        heading: 'Bangkok: the deepest bench',
        paragraphs: [
          'Bangkok has by far the deepest concentration of internationally accredited hospitals and specialists, including several of Southeast Asia\'s largest private hospital campuses. If your case is complex, high-acuity, or needs a rare sub-specialty, Bangkok is almost always the right starting point.',
        ],
      },
      {
        heading: 'Phuket: care plus a beach recovery',
        paragraphs: [
          'Phuket offers strong JCI-accredited hospital care with the added appeal of a beach recovery — a popular pairing for cosmetic surgery, dental work and health screenings where patients want a restful few days built into the trip. The tradeoff is a somewhat smaller range of high-acuity specialists compared to Bangkok.',
        ],
      },
      {
        heading: 'Chiang Mai: slower pace, strong specific strengths',
        paragraphs: [
          'Chiang Mai, in Thailand\'s cooler north, has a smaller but genuinely capable JCI-accredited hospital presence, particularly strong in cardiology and orthopedics, with the advantage of a slower pace and cultural attractions that suit longer recovery stays — hair transplants and joint replacements, for example.',
        ],
      },
      {
        heading: 'Mixing treatment and recovery cities',
        paragraphs: [
          'Getting between cities is straightforward — frequent domestic flights connect Bangkok with both Phuket and Chiang Mai in under two hours — so it\'s entirely possible to have a procedure in Bangkok and recover somewhere else, which some patients specifically request.',
          'Ultimately, the right city depends on your specific procedure more than personal preference — your coordinator will typically recommend a location based on where the strongest match for your case is, and can factor in a preferred recovery environment where the medical case allows.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I have surgery in one city and recover in another?', a: 'Yes — this is common. Domestic flights between Bangkok, Phuket and Chiang Mai take under two hours, and your coordinator can plan the split if your surgeon confirms it\'s medically appropriate.' },
      { q: 'Which city is best for cosmetic procedures with a recovery trip?', a: 'Phuket is a popular pairing for this — strong JCI-accredited care alongside a beach recovery environment.' },
      { q: 'Does city choice affect price?', a: 'Not significantly for the procedure itself, though accommodation costs vary. Your coordinator will match you to the facility best suited to your case regardless of city.' },
    ],
  },
  {
    slug: 'medical-tourism-safety-checklist',
    cat: 'Safety & Accreditation',
    format: 'Checklist',
    title: 'A safety checklist before booking treatment abroad',
    dek: 'Eight questions to ask any clinic or platform before committing to medical treatment overseas.',
    excerpt: 'Eight questions to ask any clinic or platform before committing to medical treatment overseas — accreditation, credentials, and red flags to watch for.',
    read: '9 min read',
    date: '6 February 2026',
    views: 2050,
    author: 'Unwello Editorial Team',
    reviewer: { name: 'Dr. Ananya Phromsuwan', credentials: 'MD, Internal Medicine' },
    sections: [
      {
        heading: 'Why a checklist, not just marketing',
        paragraphs: [
          'Medical tourism has grown quickly, and not every provider markets itself as carefully as it should. Before booking any procedure abroad, it\'s worth working through a short checklist rather than relying on a clinic\'s own marketing.',
        ],
      },
      {
        heading: 'Accreditation and credentials',
        paragraphs: [
          'Is the hospital internationally accredited? Look specifically for JCI, or an equivalent recognized body — not just an ISO 9001 certificate, which covers quality management processes but not clinical care standards directly.',
          'Can you verify the treating doctor\'s credentials independently? A reputable clinic will readily share a surgeon\'s qualifications, board certifications, and where they trained — and won\'t discourage you from checking them elsewhere.',
        ],
      },
      {
        heading: 'Pricing and complications',
        paragraphs: [
          'Is pricing transparent and itemized before you travel? Vague quotes or pressure to pay a large deposit before you\'ve seen a written breakdown are both red flags.',
          'What happens if something goes wrong? Ask specifically about the clinic\'s complication rate for your procedure if available, and what its policy is for follow-up care if you need it after returning home.',
        ],
      },
      {
        heading: 'Who\'s coordinating your care',
        paragraphs: [
          'Who is coordinating your care, and who pays them? A coordinator paid by the clinic only when you book — not by you, and not on commission per upsell — has aligned incentives. One who pressures you toward a specific, more expensive package is worth questioning.',
          'Unwello\'s vetting process — JCI accreditation as a baseline, plus doctor credential checks, outcome data review and direct verification calls — is built to answer exactly these questions before a clinic is ever listed on our platform.',
        ],
      },
    ],
    faqs: [
      { q: 'What\'s the single biggest red flag to watch for?', a: 'Pressure to pay a large deposit before you\'ve seen a written, itemized quote. Reputable clinics are transparent about pricing upfront.' },
      { q: 'How can I verify a surgeon\'s credentials myself?', a: 'Ask the clinic directly for board certification details and training history — a reputable provider will share this readily and won\'t discourage independent verification.' },
      { q: 'What should I do if I can\'t get a straight answer about complication rates?', a: 'Treat it as a warning sign. Clinics confident in their outcomes are typically willing to discuss complication rates for your specific procedure.' },
    ],
  },
]

const chapterCounters = {} as Record<NewsChapter, number>
export const newsArticles: NewsArticle[] = articleDefs.map((a) => {
  const i = chapterCounters[a.cat] ?? 0
  chapterCounters[a.cat] = i + 1
  return { ...a, image: imageForChapter(a.cat, i) }
})

export const newsBySlug = (slug: string) => newsArticles.find((a) => a.slug === slug)
