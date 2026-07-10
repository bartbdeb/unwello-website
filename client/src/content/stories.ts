// Patient story content for the /stories listing + /stories/:slug detail pages.
// `procedure` intentionally keeps the same "<Treatment> · <City>" shape used by
// the homepage teaser and by TreatmentCategory's storyMatch substring filter —
// don't rename existing entries' procedure text without checking data.ts usage.

export type PatientStory = {
  slug: string
  name: string
  flag: string
  country: string
  procedure: string
  categorySlug: string
  quote: string
  imgLabel: string
  summary: string
  body: string[]
  results: string
  treatedAt: string
  featured?: boolean
}

export const patientStories: PatientStory[] = [
  {
    slug: 'sarah-dental-implants-bangkok',
    name: 'Sarah',
    flag: '🇬🇧',
    country: 'United Kingdom',
    procedure: 'Dental implants · Bangkok',
    categorySlug: 'dental',
    quote: 'I saved over £4,000 and the care was better than at home. My coordinator felt like a friend.',
    imgLabel: 'patient story video',
    summary: 'A UK teacher replaces three missing teeth with implants for a fraction of her home quote — and comes home with a new travel habit.',
    body: [
      "I'd been putting off dental implants for two years because the quote from my local dentist in Leeds was just impossible — over £6,000 for three implants. A friend who'd had veneers done in Bangkok suggested I look into it, and that's how I found Unwello.",
      'What surprised me most wasn\'t the price — it was how little I had to figure out myself. My coordinator, Nara, asked for my X-rays and a call with my UK dentist\'s notes, then came back within a day with two clinic options and transparent, all-inclusive quotes. No back-and-forth, no hidden fees.',
      'I flew out for eight days. The clinic in Bangkok felt more like a boutique hotel than a dental surgery — private rooms, English-speaking staff, and a dentist who spent forty minutes on my first consultation alone. The implant placement itself was straightforward, and Nara had already arranged my hotel two minutes from the clinic.',
      "The final crowns went on five months later during a second, shorter trip. Total cost including flights and hotel: under £2,000. I've since recommended Unwello to three people at work.",
    ],
    results: 'Three dental implants with crowns, completed across two visits, at roughly a third of the UK quote.',
    treatedAt: 'Bangkok Hospital Bangkok',
    featured: true,
  },
  {
    slug: 'michael-hair-transplant-chiang-mai',
    name: 'Michael',
    flag: '🇦🇺',
    country: 'Australia',
    procedure: 'Hair transplant · Chiang Mai',
    categorySlug: 'hair-transplant',
    quote: 'Everything was arranged before I landed. All I had to do was show up and heal.',
    imgLabel: 'patient story video',
    summary: 'An Australian engineer combines a 3,000-graft FUE procedure with a week of recovery in northern Thailand.',
    body: [
      "I'd researched hair transplants for about a year before actually booking anything — mostly because every clinic I found in Australia wanted $15,000+ and a six-month wait. Unwello's coordinator matched me with a specialist clinic in Chiang Mai within two days of my enquiry.",
      'The whole process — consultation, graft-count estimate from photos, pricing, and a provisional date — was handled over WhatsApp and email before I ever left home. My coordinator flagged that Chiang Mai\'s slower pace and cooler climate would suit the recovery period better than Bangkok, which turned out to be great advice.',
      'The procedure itself took a full day — just under 3,000 grafts using FUE. The surgical team was clearly high-volume; everything felt practiced and calm. I stayed for a week afterward, mostly resting at a hotel the coordinator had pre-booked, with a short check-up before flying home.',
      "Ten months on, the results have exceeded what I expected from the before/after photos I was shown. The whole trip, flights included, cost less than a third of the Australian quotes I'd collected.",
    ],
    results: 'FUE hair transplant, ~3,000 grafts, single-visit procedure with a one-week recovery stay.',
    treatedAt: 'Bangkok Hospital Chiang Mai',
    featured: true,
  },
  {
    slug: 'lena-ivf-pattaya',
    name: 'Lena',
    flag: '🇩🇪',
    country: 'Germany',
    procedure: 'IVF · Pattaya',
    categorySlug: 'fertility-ivf',
    quote: 'After years of trying, this was the team that finally made us feel cared for.',
    imgLabel: 'patient story video',
    summary: 'A German couple travel to Pattaya for their third IVF cycle after two unsuccessful rounds at home — and this time, it worked.',
    body: [
      'My husband and I had gone through two rounds of IVF in Germany without success, and the cost — plus the emotional toll of feeling like a number in a busy clinic — had worn us both down. A friend from an online fertility forum mentioned Thailand, and Unwello came up in my research as a way to compare clinics without doing all the vetting myself.',
      'What stood out immediately was how thorough the intake was. Our coordinator asked for our full treatment history and previous cycle notes, and connected us with a fertility centre in Pattaya that specialises in cases with a prior failed cycle. We had a video consultation with the embryologist before we even booked flights.',
      'We spent just over three weeks in Thailand for the stimulation, retrieval and transfer. The clinic\'s lab is genuinely impressive — better equipment than anything we\'d seen at home — and the doctor explained every step and every number in a way our previous clinic never had time for.',
      "We found out we were pregnant two weeks after flying home. Our coordinator still checks in occasionally, even now, just to see how things are going.",
    ],
    results: 'IVF cycle with ICSI, single embryo transfer, resulting in a confirmed pregnancy.',
    treatedAt: 'Bangkok Hospital Pattaya',
    featured: true,
  },
  {
    slug: 'james-knee-replacement-bangkok',
    name: 'James',
    flag: '🇺🇸',
    country: 'United States',
    procedure: 'Knee replacement · Bangkok',
    categorySlug: 'orthopedics',
    quote: 'The robotic-assisted surgery and the surgeon\'s experience gave me real confidence — and I was walking again faster than my doctor at home predicted.',
    imgLabel: 'patient story video',
    summary: 'A retired US postal worker gets a robotic-assisted total knee replacement for a fraction of his American out-of-pocket estimate.',
    body: [
      "My knee had gotten bad enough that stairs were a two-handed operation. My US surgeon quoted me around $35,000 out of pocket after insurance, with a three-month wait for a surgery slot. That's when my daughter found Unwello while researching options abroad.",
      'My coordinator walked me through what a robotic-assisted total knee replacement in Bangkok would involve, including realistic hospital-stay and recovery timelines. I had a video call with the orthopedic surgeon before committing, which put my mind at ease more than any brochure could.',
      'The hospital stay was five nights, with physiotherapy starting the day after surgery. The technology used — I was told it was the same robotic system some major US hospitals use — combined with a surgeon who told me he performs this procedure several times a week, made me feel like I was in exceptionally experienced hands.',
      'I flew home three weeks later, already off crutches. The total cost, including flights and my wife\'s hotel stay, came to well under half of my US quote.',
    ],
    results: 'Robotic-assisted total knee replacement, 5-night hospital stay, walking unaided within three weeks.',
    treatedAt: 'Vejthani Hospital',
  },
  {
    slug: 'amara-rhinoplasty-phuket',
    name: 'Amara',
    flag: '🇨🇦',
    country: 'Canada',
    procedure: 'Rhinoplasty · Phuket',
    categorySlug: 'plastic-surgery',
    quote: 'My coordinator understood exactly what I wanted from the photos I sent — the surgeon barely needed me to explain anything twice.',
    imgLabel: 'patient story video',
    summary: 'A Canadian marketing consultant combines a revision rhinoplasty with a week of recovery on Phuket\'s coast.',
    body: [
      'This was actually my second rhinoplasty — my first, done at home, hadn\'t healed the way I\'d hoped. That made me a lot more cautious the second time around, and a lot more selective about who I\'d trust with a revision procedure.',
      'My coordinator asked for photos from every angle and a copy of my original surgical notes, then matched me with a plastic surgeon in Phuket who specialises specifically in revision cases — not just first-time rhinoplasty. That distinction mattered a lot to me.',
      "The consultation in person confirmed everything from the video call: the surgeon had clearly reviewed my case in detail beforehand and had specific, considered opinions about what my first surgeon had gotten wrong. The procedure and initial recovery took ten days, most of which I spent at a quiet resort near the clinic that my coordinator had suggested.",
      "It's been eight months and I'm finally happy with the result. Recovering somewhere calm, rather than rushing back to a busy job, made a real difference to how I feel about the whole experience.",
    ],
    results: 'Revision rhinoplasty with a 10-day in-country recovery period before flying home.',
    treatedAt: 'Bangkok Hospital Phuket',
  },
  {
    slug: 'daniel-executive-checkup-bangkok',
    name: 'Daniel',
    flag: '🇸🇬',
    country: 'Singapore',
    procedure: 'Health screening · Bangkok',
    categorySlug: 'health-screenings',
    quote: 'I booked a routine checkup and it caught something my annual physical at home had missed for two years running.',
    imgLabel: 'patient story video',
    summary: 'A Singapore-based executive adds a same-day comprehensive health screening to a Bangkok business trip.',
    body: [
      "I travel to Bangkok for work a few times a year, and a colleague mentioned that a lot of the international hospitals there run same-day executive health screenings that are more thorough — and cheaper — than what's available back home. I figured I'd try it on my next trip.",
      'Booking through Unwello meant I didn\'t have to research which package covered what myself — my coordinator matched the screening to my age, family history and the fact that I hadn\'t had a cardiac work-up in a few years, and had everything scheduled around my meetings.',
      'The whole thing took about six hours: bloodwork, imaging, a cardiac stress test and a consultation with an internal medicine physician who actually sat down and went through every result with me, not just the summary page.',
      "The screening flagged an irregular marker that my regular checkups at home had never picked up, and I've since followed up with a specialist. It was a genuinely useful trip, not just a box-ticking exercise.",
    ],
    results: 'Comprehensive executive health screening completed in a single day, alongside a business trip.',
    treatedAt: 'Bumrungrad International Hospital',
  },
  {
    slug: 'priya-gastric-sleeve-bangkok',
    name: 'Priya',
    flag: '🇬🇧',
    country: 'United Kingdom',
    procedure: 'Gastric sleeve · Bangkok',
    categorySlug: 'weight-loss',
    quote: 'The pre-op support and the follow-up planning were more thorough than anything the NHS waiting list would have given me.',
    imgLabel: 'patient story video',
    summary: 'A UK nurse undergoes gastric sleeve surgery after a multi-year NHS waiting list, with full pre- and post-op coordination.',
    body: [
      "I'd been on an NHS waiting list for bariatric surgery for almost three years with no clear timeline, and my health was getting worse while I waited. As a nurse myself, I wanted to be sure whatever I chose privately met a genuinely high clinical standard, not just a fast one.",
      'My coordinator sent me the bariatric programme\'s protocols, surgeon credentials and post-op support structure before I committed to anything — which, frankly, was more transparency than I\'d gotten from some private options in the UK.',
      'I spent twelve days in Thailand: pre-op assessment, the gastric sleeve procedure itself, four nights in hospital, and follow-up consultations before I was cleared to fly. The dietitian support was structured and detailed, with a written plan I could hand to my GP when I got home.',
      "A year on, I've lost the weight I was aiming for and my coordinator helped arrange remote check-ins with the surgical team along the way. It felt like a proper clinical pathway, not a one-off procedure.",
    ],
    results: 'Laparoscopic gastric sleeve, 4-night hospital stay, with a structured 12-month remote follow-up plan.',
    treatedAt: 'Bangkok Hospital Bangkok',
  },
  {
    slug: 'oliver-cardiac-stenting-bangkok',
    name: 'Oliver',
    flag: '🇦🇺',
    country: 'Australia',
    procedure: 'Cardiac stenting · Bangkok',
    categorySlug: 'cardiology',
    quote: 'The cardiac team moved fast without ever making me feel rushed — I understood every decision before it was made.',
    imgLabel: 'patient story video',
    summary: 'An Australian retiree has planned angioplasty and stenting at a JCI-certified heart centre after a cardiologist referral back home flagged a long public wait.',
    body: [
      "My GP flagged a coronary blockage during a routine check, and while it wasn't an emergency, my specialist made clear it needed addressing before it became one. The public wait for a non-urgent cardiac procedure back home stretched out further than I was comfortable with.",
      'Unwello\'s coordinator connected me with a hospital that holds a specific disease-certification for cardiac care, and arranged for my Australian cardiologist\'s reports to be reviewed by the Thai cardiac team before I travelled, so there were no surprises on arrival.',
      'The angioplasty and stenting procedure went smoothly, with the same standard of monitoring and technology I\'d have expected at a major hospital at home. I stayed in Thailand for just under two weeks total, including a few days of planned rest before the flight home.',
      "My coordinator arranged for a full medical report to go straight to my cardiologist in Australia, so my ongoing care picked up exactly where the Thailand team left off.",
    ],
    results: 'Planned angioplasty with stenting at a JCI-certified cardiac centre, two-week total trip.',
    treatedAt: 'Bangkok Hospital Bangkok',
  },
]

export const storyBySlug = (slug: string) => patientStories.find((s) => s.slug === slug)
