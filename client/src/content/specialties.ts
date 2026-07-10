// Generated from thailand_jci_hospital_database_7.xlsx, sheet "2.Hospital Specialties".
// The 28 authoritative specialty categories, grouped exactly as the source
// database groups them. Slugs are stable and used in /treatments/:slug URLs.

export type Specialty = {
  id: string
  slug: string
  name: string
  group: string
  notes: string
}

export const specialties: Specialty[] = [
  {
    "id": "S01",
    "slug": "cardiology",
    "name": "Cardiology & Cardiac Surgery",
    "group": "Major Surgical Specialties",
    "notes": ""
  },
  {
    "id": "S02",
    "slug": "oncology",
    "name": "Oncology / Cancer Treatment",
    "group": "Major Surgical Specialties",
    "notes": ""
  },
  {
    "id": "S03",
    "slug": "orthopedics",
    "name": "Orthopedics & Joint Replacement",
    "group": "Major Surgical Specialties",
    "notes": ""
  },
  {
    "id": "S04",
    "slug": "neurology",
    "name": "Neurology & Neurosurgery",
    "group": "Major Surgical Specialties",
    "notes": ""
  },
  {
    "id": "S05",
    "slug": "organ-transplant",
    "name": "Organ Transplant (Kidney, Liver)",
    "group": "Major Surgical Specialties",
    "notes": ""
  },
  {
    "id": "S06",
    "slug": "weight-loss",
    "name": "Bariatric & Weight-Loss Surgery",
    "group": "Major Surgical Specialties",
    "notes": ""
  },
  {
    "id": "S07",
    "slug": "urology",
    "name": "Urology",
    "group": "Major Surgical Specialties",
    "notes": ""
  },
  {
    "id": "S08",
    "slug": "gastroenterology",
    "name": "Gastroenterology & Digestive Surgery",
    "group": "Major Surgical Specialties",
    "notes": ""
  },
  {
    "id": "S09",
    "slug": "ent",
    "name": "ENT (Ear, Nose & Throat)",
    "group": "Major Surgical Specialties",
    "notes": ""
  },
  {
    "id": "S10",
    "slug": "spine-surgery",
    "name": "Spine Surgery",
    "group": "Major Surgical Specialties",
    "notes": ""
  },
  {
    "id": "S11",
    "slug": "plastic-surgery",
    "name": "Cosmetic & Plastic Surgery",
    "group": "Aesthetic & Elective",
    "notes": ""
  },
  {
    "id": "S12",
    "slug": "dental",
    "name": "Dental Care",
    "group": "Aesthetic & Elective",
    "notes": ""
  },
  {
    "id": "S13",
    "slug": "hair-transplant",
    "name": "Hair Transplant",
    "group": "Aesthetic & Elective",
    "notes": ""
  },
  {
    "id": "S14",
    "slug": "dermatology",
    "name": "Dermatology & Skin Treatments",
    "group": "Aesthetic & Elective",
    "notes": "Medical dermatology (skin checks, psoriasis, eczema, skin cancer screening) — distinct from the device/injectable-led Beauty Clinics tab, which covers non-surgical cosmetic treatments specifically."
  },
  {
    "id": "S15",
    "slug": "eye-care",
    "name": "Eye Care (Ophthalmology)",
    "group": "Aesthetic & Elective",
    "notes": "Includes LASIK and cataract surgery."
  },
  {
    "id": "S16",
    "slug": "fertility-ivf",
    "name": "Fertility & IVF",
    "group": "Reproductive & Family",
    "notes": ""
  },
  {
    "id": "S17",
    "slug": "gender-affirming-care",
    "name": "Gender-Affirming Care",
    "group": "Reproductive & Family",
    "notes": ""
  },
  {
    "id": "S18",
    "slug": "maternity",
    "name": "Maternity & Obstetrics",
    "group": "Reproductive & Family",
    "notes": ""
  },
  {
    "id": "S19",
    "slug": "pediatrics",
    "name": "Pediatrics",
    "group": "Reproductive & Family",
    "notes": ""
  },
  {
    "id": "S20",
    "slug": "health-screenings",
    "name": "Health Screenings & Checkups",
    "group": "Wellness, Prevention & Longevity",
    "notes": ""
  },
  {
    "id": "S21",
    "slug": "anti-aging",
    "name": "Anti-Aging & Longevity Medicine",
    "group": "Wellness, Prevention & Longevity",
    "notes": ""
  },
  {
    "id": "S22",
    "slug": "stem-cell",
    "name": "Stem Cell & Regenerative Medicine",
    "group": "Wellness, Prevention & Longevity",
    "notes": "See Stem Cells tab disclaimer before listing any provider — verify regulatory status and evidence level per clinic."
  },
  {
    "id": "S23",
    "slug": "mental-health",
    "name": "Mental Health & Addiction Treatment",
    "group": "Wellness, Prevention & Longevity",
    "notes": ""
  },
  {
    "id": "S24",
    "slug": "physiotherapy",
    "name": "Physiotherapy, Rehab & Sports Medicine",
    "group": "Wellness, Prevention & Longevity",
    "notes": ""
  },
  {
    "id": "S25",
    "slug": "traditional-thai-medicine",
    "name": "Traditional Thai Medicine & Medical Spa",
    "group": "Wellness, Prevention & Longevity",
    "notes": ""
  },
  {
    "id": "S26",
    "slug": "endocrinology",
    "name": "Endocrinology & Diabetes Care",
    "group": "Chronic & Ongoing Care",
    "notes": "Includes non-surgical medical weight management / GLP-1 programs (e.g. Ozempic-style) by decision on 2026-07-10 — folded in here rather than given a standalone category."
  },
  {
    "id": "S27",
    "slug": "pulmonology",
    "name": "Pulmonology & Respiratory Care",
    "group": "Chronic & Ongoing Care",
    "notes": ""
  },
  {
    "id": "S28",
    "slug": "elderly-care",
    "name": "Elderly / Long-Term & Home Care",
    "group": "Chronic & Ongoing Care",
    "notes": ""
  }
]

export const specialtyBySlug = (slug: string) => specialties.find((s) => s.slug === slug)
export const specialtyById = (id: string) => specialties.find((s) => s.id === id)

export const specialtyGroups = [...new Set(specialties.map((s) => s.group))]
