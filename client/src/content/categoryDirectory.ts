// Full 28-category directory shown on the "Browse all treatments" overview
// page — grouped into 5 clinical families. `builtSlug` links to a real
// Treatment Category page where one exists; everything else opens the quote
// funnel pre-filled with its name so nothing is a dead end.

export type DirectoryItem = { name: string; builtSlug?: string }
export type DirectoryGroup = { title: string; items: DirectoryItem[] }

export const categoryDirectory: DirectoryGroup[] = [
  {
    title: 'Major Surgical Specialties',
    items: [
      { name: 'Cardiology & Cardiac Surgery', builtSlug: 'cardiology' },
      { name: 'Oncology / Cancer Treatment' },
      { name: 'Orthopedics & Joint Replacement', builtSlug: 'orthopedics' },
      { name: 'Neurology & Neurosurgery' },
      { name: 'Organ Transplant (Kidney, Liver)' },
      { name: 'Bariatric & Weight-Loss Surgery', builtSlug: 'weight-loss' },
      { name: 'Urology' },
      { name: 'Gastroenterology & Digestive Surgery' },
      { name: 'ENT (Ear, Nose & Throat)' },
      { name: 'Spine Surgery' },
    ],
  },
  {
    title: 'Aesthetic & Elective',
    items: [
      { name: 'Cosmetic & Plastic Surgery', builtSlug: 'plastic-surgery' },
      { name: 'Dental Care', builtSlug: 'dental' },
      { name: 'Hair Transplant', builtSlug: 'hair-transplant' },
      { name: 'Dermatology & Skin Treatments' },
      { name: 'Eye Care (Ophthalmology) — incl. LASIK, cataract', builtSlug: 'eye-care' },
    ],
  },
  {
    title: 'Reproductive & Family',
    items: [
      { name: 'Fertility & IVF', builtSlug: 'fertility-ivf' },
      { name: 'Gender-Affirming Care' },
      { name: 'Maternity & Obstetrics' },
      { name: 'Pediatrics' },
    ],
  },
  {
    title: 'Wellness, Prevention & Longevity',
    items: [
      { name: 'Health Screenings & Executive Checkups', builtSlug: 'health-screenings' },
      { name: 'Anti-Aging & Longevity Medicine', builtSlug: 'anti-aging' },
      { name: 'Stem Cell & Regenerative Medicine', builtSlug: 'stem-cell' },
      { name: 'Mental Health & Addiction Treatment' },
      { name: 'Physiotherapy, Rehab & Sports Medicine' },
      { name: 'Traditional Thai Medicine & Medical Spa' },
    ],
  },
  {
    title: 'Chronic & Ongoing Care',
    items: [
      { name: 'Endocrinology & Diabetes Care' },
      { name: 'Pulmonology & Respiratory Care' },
      { name: 'Elderly / Long-Term & Home Care' },
    ],
  },
]
