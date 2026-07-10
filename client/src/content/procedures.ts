// Generated from thailand_jci_hospital_database_7.xlsx, sheet "3.Hospital Procedures".
// 117 real procedures, each tied to one of the 28 specialties by slug.
// No per-procedure pricing exists in the source yet (sheet "5.Hospital-Procedure
// Map" is intentionally empty pending verification) — procedure pages show
// category-level indicative pricing instead of inventing per-procedure figures.

export type Procedure = {
  id: string
  slug: string
  name: string
  specialtySlug: string
  notes: string
}

export const procedures: Procedure[] = [
  {
    "id": "P0001",
    "slug": "coronary-artery-bypass-graft-cabg",
    "name": "Coronary Artery Bypass Graft (CABG)",
    "specialtySlug": "cardiology",
    "notes": ""
  },
  {
    "id": "P0002",
    "slug": "angioplasty-stenting",
    "name": "Angioplasty & Stenting",
    "specialtySlug": "cardiology",
    "notes": ""
  },
  {
    "id": "P0003",
    "slug": "heart-valve-repairreplacement",
    "name": "Heart Valve Repair/Replacement",
    "specialtySlug": "cardiology",
    "notes": ""
  },
  {
    "id": "P0004",
    "slug": "electrophysiology-arrhythmia-ablation",
    "name": "Electrophysiology / Arrhythmia Ablation",
    "specialtySlug": "cardiology",
    "notes": ""
  },
  {
    "id": "P0005",
    "slug": "cardiac-health-screening",
    "name": "Cardiac Health Screening",
    "specialtySlug": "cardiology",
    "notes": ""
  },
  {
    "id": "P0006",
    "slug": "chemotherapy",
    "name": "Chemotherapy",
    "specialtySlug": "oncology",
    "notes": ""
  },
  {
    "id": "P0007",
    "slug": "radiation-therapy-incl-protoncyberknife",
    "name": "Radiation Therapy (incl. proton/CyberKnife)",
    "specialtySlug": "oncology",
    "notes": ""
  },
  {
    "id": "P0008",
    "slug": "surgical-tumor-resection",
    "name": "Surgical Tumor Resection",
    "specialtySlug": "oncology",
    "notes": ""
  },
  {
    "id": "P0009",
    "slug": "bone-marrow-transplant",
    "name": "Bone Marrow Transplant",
    "specialtySlug": "oncology",
    "notes": ""
  },
  {
    "id": "P0010",
    "slug": "cancer-screening-staging-imaging",
    "name": "Cancer Screening & Staging Imaging",
    "specialtySlug": "oncology",
    "notes": ""
  },
  {
    "id": "P0011",
    "slug": "total-knee-replacement",
    "name": "Total Knee Replacement",
    "specialtySlug": "orthopedics",
    "notes": "Single / Double"
  },
  {
    "id": "P0012",
    "slug": "total-hip-replacement",
    "name": "Total Hip Replacement",
    "specialtySlug": "orthopedics",
    "notes": "Single / Double"
  },
  {
    "id": "P0013",
    "slug": "aclligament-reconstruction",
    "name": "ACL/Ligament Reconstruction",
    "specialtySlug": "orthopedics",
    "notes": ""
  },
  {
    "id": "P0014",
    "slug": "shoulder-replacement",
    "name": "Shoulder Replacement",
    "specialtySlug": "orthopedics",
    "notes": ""
  },
  {
    "id": "P0015",
    "slug": "robotic-assisted-joint-replacement",
    "name": "Robotic-Assisted Joint Replacement",
    "specialtySlug": "orthopedics",
    "notes": "Single / Double"
  },
  {
    "id": "P0016",
    "slug": "brain-tumor-surgery",
    "name": "Brain Tumor Surgery",
    "specialtySlug": "neurology",
    "notes": ""
  },
  {
    "id": "P0017",
    "slug": "stroke-intervention-thrombectomy",
    "name": "Stroke Intervention (Thrombectomy)",
    "specialtySlug": "neurology",
    "notes": ""
  },
  {
    "id": "P0018",
    "slug": "deep-brain-stimulation",
    "name": "Deep Brain Stimulation",
    "specialtySlug": "neurology",
    "notes": ""
  },
  {
    "id": "P0019",
    "slug": "epilepsy-surgery",
    "name": "Epilepsy Surgery",
    "specialtySlug": "neurology",
    "notes": ""
  },
  {
    "id": "P0020",
    "slug": "spinal-cord-surgery",
    "name": "Spinal Cord Surgery",
    "specialtySlug": "neurology",
    "notes": ""
  },
  {
    "id": "P0021",
    "slug": "kidney-transplant-living-donor",
    "name": "Kidney Transplant (Living Donor)",
    "specialtySlug": "organ-transplant",
    "notes": ""
  },
  {
    "id": "P0022",
    "slug": "kidney-transplant-deceased-donor",
    "name": "Kidney Transplant (Deceased Donor)",
    "specialtySlug": "organ-transplant",
    "notes": ""
  },
  {
    "id": "P0023",
    "slug": "liver-transplant",
    "name": "Liver Transplant",
    "specialtySlug": "organ-transplant",
    "notes": ""
  },
  {
    "id": "P0024",
    "slug": "post-transplant-immunosuppression-management",
    "name": "Post-Transplant Immunosuppression Management",
    "specialtySlug": "organ-transplant",
    "notes": ""
  },
  {
    "id": "P0025",
    "slug": "gastric-sleeve-sleeve-gastrectomy",
    "name": "Gastric Sleeve (Sleeve Gastrectomy)",
    "specialtySlug": "weight-loss",
    "notes": ""
  },
  {
    "id": "P0026",
    "slug": "gastric-bypass",
    "name": "Gastric Bypass",
    "specialtySlug": "weight-loss",
    "notes": ""
  },
  {
    "id": "P0027",
    "slug": "adjustable-gastric-band",
    "name": "Adjustable Gastric Band",
    "specialtySlug": "weight-loss",
    "notes": ""
  },
  {
    "id": "P0028",
    "slug": "revision-bariatric-surgery",
    "name": "Revision Bariatric Surgery",
    "specialtySlug": "weight-loss",
    "notes": ""
  },
  {
    "id": "P0029",
    "slug": "prostate-surgery-incl-robotic-prostatectomy",
    "name": "Prostate Surgery (incl. robotic prostatectomy)",
    "specialtySlug": "urology",
    "notes": ""
  },
  {
    "id": "P0030",
    "slug": "kidney-stone-treatment-eswlurs",
    "name": "Kidney Stone Treatment (ESWL/URS)",
    "specialtySlug": "urology",
    "notes": ""
  },
  {
    "id": "P0031",
    "slug": "urinary-incontinence-treatment",
    "name": "Urinary Incontinence Treatment",
    "specialtySlug": "urology",
    "notes": ""
  },
  {
    "id": "P0032",
    "slug": "erectile-dysfunction-treatment",
    "name": "Erectile Dysfunction Treatment",
    "specialtySlug": "urology",
    "notes": ""
  },
  {
    "id": "P0033",
    "slug": "laparoscopic-gallbladder-surgery",
    "name": "Laparoscopic Gallbladder Surgery",
    "specialtySlug": "gastroenterology",
    "notes": ""
  },
  {
    "id": "P0034",
    "slug": "colorectal-surgery",
    "name": "Colorectal Surgery",
    "specialtySlug": "gastroenterology",
    "notes": ""
  },
  {
    "id": "P0035",
    "slug": "hernia-repair",
    "name": "Hernia Repair",
    "specialtySlug": "gastroenterology",
    "notes": ""
  },
  {
    "id": "P0036",
    "slug": "endoscopycolonoscopy-diagnostics",
    "name": "Endoscopy/Colonoscopy Diagnostics",
    "specialtySlug": "gastroenterology",
    "notes": ""
  },
  {
    "id": "P0037",
    "slug": "liver-disease-management",
    "name": "Liver Disease Management",
    "specialtySlug": "gastroenterology",
    "notes": ""
  },
  {
    "id": "P0038",
    "slug": "sinus-surgery-fess",
    "name": "Sinus Surgery (FESS)",
    "specialtySlug": "ent",
    "notes": ""
  },
  {
    "id": "P0039",
    "slug": "tonsillectomyadenoidectomy",
    "name": "Tonsillectomy/Adenoidectomy",
    "specialtySlug": "ent",
    "notes": ""
  },
  {
    "id": "P0040",
    "slug": "hearing-implants-cochlear",
    "name": "Hearing Implants (Cochlear)",
    "specialtySlug": "ent",
    "notes": ""
  },
  {
    "id": "P0041",
    "slug": "thyroidparathyroid-surgery",
    "name": "Thyroid/Parathyroid Surgery",
    "specialtySlug": "ent",
    "notes": ""
  },
  {
    "id": "P0042",
    "slug": "spinal-fusion",
    "name": "Spinal Fusion",
    "specialtySlug": "spine-surgery",
    "notes": ""
  },
  {
    "id": "P0043",
    "slug": "lumbar-decompression",
    "name": "Lumbar Decompression",
    "specialtySlug": "spine-surgery",
    "notes": ""
  },
  {
    "id": "P0044",
    "slug": "herniated-disc-surgery-incl-minimally-invasive",
    "name": "Herniated Disc Surgery (incl. minimally invasive)",
    "specialtySlug": "spine-surgery",
    "notes": ""
  },
  {
    "id": "P0045",
    "slug": "scoliosis-correction",
    "name": "Scoliosis Correction",
    "specialtySlug": "spine-surgery",
    "notes": ""
  },
  {
    "id": "P0046",
    "slug": "breast-augmentation",
    "name": "Breast Augmentation",
    "specialtySlug": "plastic-surgery",
    "notes": ""
  },
  {
    "id": "P0047",
    "slug": "rhinoplasty",
    "name": "Rhinoplasty",
    "specialtySlug": "plastic-surgery",
    "notes": ""
  },
  {
    "id": "P0048",
    "slug": "facelift",
    "name": "Facelift",
    "specialtySlug": "plastic-surgery",
    "notes": ""
  },
  {
    "id": "P0049",
    "slug": "liposuction-body-contouring",
    "name": "Liposuction / Body Contouring",
    "specialtySlug": "plastic-surgery",
    "notes": ""
  },
  {
    "id": "P0050",
    "slug": "tummy-tuck-abdominoplasty",
    "name": "Tummy Tuck (Abdominoplasty)",
    "specialtySlug": "plastic-surgery",
    "notes": ""
  },
  {
    "id": "P0051",
    "slug": "dental-implants",
    "name": "Dental Implants",
    "specialtySlug": "dental",
    "notes": ""
  },
  {
    "id": "P0052",
    "slug": "veneers",
    "name": "Veneers",
    "specialtySlug": "dental",
    "notes": ""
  },
  {
    "id": "P0053",
    "slug": "crowns-bridges",
    "name": "Crowns & Bridges",
    "specialtySlug": "dental",
    "notes": ""
  },
  {
    "id": "P0054",
    "slug": "all-on-4all-on-6-full-mouth-restoration",
    "name": "All-on-4/All-on-6 Full Mouth Restoration",
    "specialtySlug": "dental",
    "notes": ""
  },
  {
    "id": "P0055",
    "slug": "root-canal-treatment",
    "name": "Root Canal Treatment",
    "specialtySlug": "dental",
    "notes": ""
  },
  {
    "id": "P0056",
    "slug": "orthodontics-invisalign",
    "name": "Orthodontics / Invisalign",
    "specialtySlug": "dental",
    "notes": ""
  },
  {
    "id": "P0057",
    "slug": "fue-hair-transplant",
    "name": "FUE Hair Transplant",
    "specialtySlug": "hair-transplant",
    "notes": ""
  },
  {
    "id": "P0058",
    "slug": "fut-hair-transplant",
    "name": "FUT Hair Transplant",
    "specialtySlug": "hair-transplant",
    "notes": ""
  },
  {
    "id": "P0059",
    "slug": "prp-hair-restoration-therapy",
    "name": "PRP Hair Restoration Therapy",
    "specialtySlug": "hair-transplant",
    "notes": ""
  },
  {
    "id": "P0060",
    "slug": "moleskin-lesion-screening",
    "name": "Mole/Skin Lesion Screening",
    "specialtySlug": "dermatology",
    "notes": ""
  },
  {
    "id": "P0061",
    "slug": "psoriasiseczema-treatment",
    "name": "Psoriasis/Eczema Treatment",
    "specialtySlug": "dermatology",
    "notes": ""
  },
  {
    "id": "P0062",
    "slug": "acne-treatment-medical",
    "name": "Acne Treatment (Medical)",
    "specialtySlug": "dermatology",
    "notes": ""
  },
  {
    "id": "P0063",
    "slug": "skin-cancer-screening-biopsy",
    "name": "Skin Cancer Screening & Biopsy",
    "specialtySlug": "dermatology",
    "notes": ""
  },
  {
    "id": "P0064",
    "slug": "lasik-refractive-surgery",
    "name": "LASIK / Refractive Surgery",
    "specialtySlug": "eye-care",
    "notes": ""
  },
  {
    "id": "P0065",
    "slug": "cataract-surgery",
    "name": "Cataract Surgery",
    "specialtySlug": "eye-care",
    "notes": ""
  },
  {
    "id": "P0066",
    "slug": "glaucoma-treatment",
    "name": "Glaucoma Treatment",
    "specialtySlug": "eye-care",
    "notes": ""
  },
  {
    "id": "P0067",
    "slug": "retina-surgery",
    "name": "Retina Surgery",
    "specialtySlug": "eye-care",
    "notes": ""
  },
  {
    "id": "P0068",
    "slug": "ivf-in-vitro-fertilization",
    "name": "IVF (In Vitro Fertilization)",
    "specialtySlug": "fertility-ivf",
    "notes": ""
  },
  {
    "id": "P0069",
    "slug": "icsi",
    "name": "ICSI",
    "specialtySlug": "fertility-ivf",
    "notes": ""
  },
  {
    "id": "P0070",
    "slug": "egg-freezing",
    "name": "Egg Freezing",
    "specialtySlug": "fertility-ivf",
    "notes": ""
  },
  {
    "id": "P0071",
    "slug": "spermembryo-freezing",
    "name": "Sperm/Embryo Freezing",
    "specialtySlug": "fertility-ivf",
    "notes": ""
  },
  {
    "id": "P0072",
    "slug": "fertility-diagnostics",
    "name": "Fertility Diagnostics",
    "specialtySlug": "fertility-ivf",
    "notes": ""
  },
  {
    "id": "P0073",
    "slug": "male-to-female-surgery-vaginoplasty",
    "name": "Male-to-Female Surgery (Vaginoplasty)",
    "specialtySlug": "gender-affirming-care",
    "notes": ""
  },
  {
    "id": "P0074",
    "slug": "female-to-male-surgery-phalloplastymetoidioplasty",
    "name": "Female-to-Male Surgery (Phalloplasty/Metoidioplasty)",
    "specialtySlug": "gender-affirming-care",
    "notes": ""
  },
  {
    "id": "P0075",
    "slug": "facial-feminization-surgery",
    "name": "Facial Feminization Surgery",
    "specialtySlug": "gender-affirming-care",
    "notes": ""
  },
  {
    "id": "P0076",
    "slug": "top-surgery",
    "name": "Top Surgery",
    "specialtySlug": "gender-affirming-care",
    "notes": ""
  },
  {
    "id": "P0077",
    "slug": "hormone-therapy-management",
    "name": "Hormone Therapy Management",
    "specialtySlug": "gender-affirming-care",
    "notes": ""
  },
  {
    "id": "P0078",
    "slug": "prenatal-care-delivery",
    "name": "Prenatal Care & Delivery",
    "specialtySlug": "maternity",
    "notes": ""
  },
  {
    "id": "P0079",
    "slug": "cesarean-section",
    "name": "Cesarean Section",
    "specialtySlug": "maternity",
    "notes": ""
  },
  {
    "id": "P0080",
    "slug": "high-risk-pregnancy-management",
    "name": "High-Risk Pregnancy Management",
    "specialtySlug": "maternity",
    "notes": ""
  },
  {
    "id": "P0081",
    "slug": "nicu-care",
    "name": "NICU Care",
    "specialtySlug": "maternity",
    "notes": ""
  },
  {
    "id": "P0082",
    "slug": "general-pediatric-care",
    "name": "General Pediatric Care",
    "specialtySlug": "pediatrics",
    "notes": ""
  },
  {
    "id": "P0083",
    "slug": "pediatric-surgery",
    "name": "Pediatric Surgery",
    "specialtySlug": "pediatrics",
    "notes": ""
  },
  {
    "id": "P0084",
    "slug": "neonatal-intensive-care",
    "name": "Neonatal Intensive Care",
    "specialtySlug": "pediatrics",
    "notes": ""
  },
  {
    "id": "P0085",
    "slug": "pediatric-vaccination-programs",
    "name": "Pediatric Vaccination Programs",
    "specialtySlug": "pediatrics",
    "notes": ""
  },
  {
    "id": "P0086",
    "slug": "executive-health-checkup-package",
    "name": "Executive Health Checkup Package",
    "specialtySlug": "health-screenings",
    "notes": ""
  },
  {
    "id": "P0087",
    "slug": "cancer-screening-panel",
    "name": "Cancer Screening Panel",
    "specialtySlug": "health-screenings",
    "notes": ""
  },
  {
    "id": "P0088",
    "slug": "cardiac-screening-panel",
    "name": "Cardiac Screening Panel",
    "specialtySlug": "health-screenings",
    "notes": ""
  },
  {
    "id": "P0089",
    "slug": "geneticgenomic-screening",
    "name": "Genetic/Genomic Screening",
    "specialtySlug": "health-screenings",
    "notes": ""
  },
  {
    "id": "P0090",
    "slug": "hormone-optimization-hrttrt",
    "name": "Hormone Optimization (HRT/TRT)",
    "specialtySlug": "anti-aging",
    "notes": ""
  },
  {
    "id": "P0091",
    "slug": "iv-vitaminnad-therapy",
    "name": "IV Vitamin/NAD+ Therapy",
    "specialtySlug": "anti-aging",
    "notes": ""
  },
  {
    "id": "P0092",
    "slug": "biological-age-testing",
    "name": "Biological Age Testing",
    "specialtySlug": "anti-aging",
    "notes": ""
  },
  {
    "id": "P0093",
    "slug": "longevity-diagnostics-package",
    "name": "Longevity Diagnostics Package",
    "specialtySlug": "anti-aging",
    "notes": ""
  },
  {
    "id": "P0094",
    "slug": "autologous-adipose-derived-stem-cell-therapy",
    "name": "Autologous Adipose-Derived Stem Cell Therapy",
    "specialtySlug": "stem-cell",
    "notes": ""
  },
  {
    "id": "P0095",
    "slug": "bone-marrow-derived-stem-cell-therapy",
    "name": "Bone Marrow-Derived Stem Cell Therapy",
    "specialtySlug": "stem-cell",
    "notes": ""
  },
  {
    "id": "P0096",
    "slug": "prp-platelet-rich-plasma-therapy",
    "name": "PRP (Platelet-Rich Plasma) Therapy",
    "specialtySlug": "stem-cell",
    "notes": ""
  },
  {
    "id": "P0097",
    "slug": "cord-blood-banking",
    "name": "Cord Blood Banking",
    "specialtySlug": "stem-cell",
    "notes": ""
  },
  {
    "id": "P0098",
    "slug": "inpatient-rehab-addiction",
    "name": "Inpatient Rehab (Addiction)",
    "specialtySlug": "mental-health",
    "notes": ""
  },
  {
    "id": "P0099",
    "slug": "outpatient-counselingtherapy",
    "name": "Outpatient Counseling/Therapy",
    "specialtySlug": "mental-health",
    "notes": ""
  },
  {
    "id": "P0100",
    "slug": "psychiatric-evaluation-medication-management",
    "name": "Psychiatric Evaluation & Medication Management",
    "specialtySlug": "mental-health",
    "notes": ""
  },
  {
    "id": "P0101",
    "slug": "post-surgical-physiotherapy",
    "name": "Post-Surgical Physiotherapy",
    "specialtySlug": "physiotherapy",
    "notes": ""
  },
  {
    "id": "P0102",
    "slug": "sports-injury-rehabilitation",
    "name": "Sports Injury Rehabilitation",
    "specialtySlug": "physiotherapy",
    "notes": ""
  },
  {
    "id": "P0103",
    "slug": "neurological-rehabilitation",
    "name": "Neurological Rehabilitation",
    "specialtySlug": "physiotherapy",
    "notes": ""
  },
  {
    "id": "P0104",
    "slug": "traditional-thai-massage-therapy",
    "name": "Traditional Thai Massage Therapy",
    "specialtySlug": "traditional-thai-medicine",
    "notes": ""
  },
  {
    "id": "P0105",
    "slug": "herbal-medicine-consultation",
    "name": "Herbal Medicine Consultation",
    "specialtySlug": "traditional-thai-medicine",
    "notes": ""
  },
  {
    "id": "P0106",
    "slug": "medical-spa-wellness-package",
    "name": "Medical Spa Wellness Package",
    "specialtySlug": "traditional-thai-medicine",
    "notes": ""
  },
  {
    "id": "P0107",
    "slug": "diabetes-management-program",
    "name": "Diabetes Management Program",
    "specialtySlug": "endocrinology",
    "notes": ""
  },
  {
    "id": "P0108",
    "slug": "thyroid-disorder-treatment",
    "name": "Thyroid Disorder Treatment",
    "specialtySlug": "endocrinology",
    "notes": ""
  },
  {
    "id": "P0109",
    "slug": "medical-weight-management-glp-1-program",
    "name": "Medical Weight Management / GLP-1 Program",
    "specialtySlug": "endocrinology",
    "notes": ""
  },
  {
    "id": "P0110",
    "slug": "hormoneendocrine-diagnostics",
    "name": "Hormone/Endocrine Diagnostics",
    "specialtySlug": "endocrinology",
    "notes": ""
  },
  {
    "id": "P0111",
    "slug": "asthmacopd-management",
    "name": "Asthma/COPD Management",
    "specialtySlug": "pulmonology",
    "notes": ""
  },
  {
    "id": "P0112",
    "slug": "sleep-apnea-treatment",
    "name": "Sleep Apnea Treatment",
    "specialtySlug": "pulmonology",
    "notes": ""
  },
  {
    "id": "P0113",
    "slug": "pulmonary-function-testing",
    "name": "Pulmonary Function Testing",
    "specialtySlug": "pulmonology",
    "notes": ""
  },
  {
    "id": "P0114",
    "slug": "long-term-residential-care",
    "name": "Long-Term Residential Care",
    "specialtySlug": "elderly-care",
    "notes": ""
  },
  {
    "id": "P0115",
    "slug": "in-home-nursing-care",
    "name": "In-Home Nursing Care",
    "specialtySlug": "elderly-care",
    "notes": ""
  },
  {
    "id": "P0116",
    "slug": "palliativehospice-care",
    "name": "Palliative/Hospice Care",
    "specialtySlug": "elderly-care",
    "notes": ""
  },
  {
    "id": "P0117",
    "slug": "geriatric-assessment",
    "name": "Geriatric Assessment",
    "specialtySlug": "elderly-care",
    "notes": ""
  }
]

export const procedureBySlug = (specialtySlug: string, slug: string) =>
  procedures.find((p) => p.specialtySlug === specialtySlug && p.slug === slug)

export const proceduresBySpecialty = (specialtySlug: string) =>
  procedures.filter((p) => p.specialtySlug === specialtySlug)
