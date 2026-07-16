// Real check-up package data from thailand_jci_hospital_database_9.xlsx,
// sheet "6.Hospital - Check up Map" — the tiered health-screening packages
// actually sold by name at three hospitals, as opposed to the generic
// specialty-level content in content/treatments.ts. Only Health Screenings &
// Checkups procedures (Executive Health Checkup Package, Cardiac Screening
// Panel) have package-level data; ProcedureDetail.tsx renders this section
// only when packagesByProcedure() returns results.
//
// Source flagged some tier boundaries as "reconstructed from icon grid,
// verify before publishing" (Bangkok Hospital Bangkok tiers 3–4, MedPark
// Platinum tiers) — the numbers here are the source's own best reconstruction,
// not independently re-verified by Hospigo. Flag to a human reviewer before
// treating these as final.

export type CheckupPackage = {
  id: string
  hospitalSlug: string
  hospitalName: string
  packageName: string
  procedureSlug: string
  demographic: string
  duration: string
  itemCount: number
  packagePrice: number
  normalPrice: number
  validPeriod: string
  items: string[]
}

// Splits a comma-separated item list on ", " but not inside parentheses, so
// compound items like "Electrolytes (Sodium, Potassium, Chloride,
// Bicarbonate)" survive as one entry instead of shattering into four.
function splitItems(raw: string): string[] {
  const items: string[] = []
  let depth = 0
  let current = ''
  for (let i = 0; i < raw.length; i++) {
    const ch = raw[i]
    if (ch === '(') depth++
    if (ch === ')') depth--
    if (ch === ',' && depth === 0 && raw[i + 1] === ' ') {
      items.push(current.trim())
      current = ''
      i++
    } else {
      current += ch
    }
  }
  if (current.trim()) items.push(current.trim())
  return items
}

const packageDefs: (Omit<CheckupPackage, 'items'> & { itemsRaw: string })[] = [
  {
    id: 'HC-SAM-01', hospitalSlug: 'bangkok-hospital-samui', hospitalName: 'Bangkok Hospital Samui',
    packageName: 'Healthy', procedureSlug: 'executive-health-checkup-package',
    demographic: 'Male/Female, all ages', duration: '3-4 hrs', itemCount: 17,
    packagePrice: 4900, normalPrice: 8200, validPeriod: 'Book & valid: now – 31 Dec 2026',
    itemsRaw: 'Physical Examination, Complete Blood Count, Fasting Blood Sugar, Cholesterol, Triglyceride, HDL, LDL, Creatinine, AST, ALT, TSH, Urine Analysis, Chest X-ray, Electrocardiogram, Ankle-Brachial Index, Fibro Scan (Liver), Body Composition',
  },
  {
    id: 'HC-SAM-02', hospitalSlug: 'bangkok-hospital-samui', hospitalName: 'Bangkok Hospital Samui',
    packageName: 'Longevity', procedureSlug: 'executive-health-checkup-package',
    demographic: 'Male, all ages', duration: '4-6 hrs', itemCount: 36,
    packagePrice: 11580, normalPrice: 15800, validPeriod: 'Book & valid: now – 31 Dec 2026',
    itemsRaw: 'Physical Examination, Complete Blood Count, Fasting Blood Sugar, Cholesterol, Triglyceride, HDL, LDL, Creatinine, AST, ALT, TSH, Urine Analysis, Chest X-ray, Electrocardiogram, Ankle-Brachial Index, Fibro Scan (Liver), Body Composition, HbA1c (Glycohemoglobin), BUN, Uric Acid, Total Protein, Albumin, Globulin, Total Bilirubin, Direct Bilirubin, Alkaline Phosphatase, Free T3, Free T4, Hepatitis B Surface Antigen, CEA (Colorectal Cancer Marker), AFP (Liver Cancer Marker), Stool Examination, Stool Occult Blood, Ultrasound Upper/Lower Abdomen, Exercise Stress Test / Echocardiogram, PSA (Prostate Cancer Marker)',
  },
  {
    id: 'HC-SAM-03', hospitalSlug: 'bangkok-hospital-samui', hospitalName: 'Bangkok Hospital Samui',
    packageName: 'Longevity', procedureSlug: 'executive-health-checkup-package',
    demographic: 'Female, all ages', duration: '4-6 hrs', itemCount: 39,
    packagePrice: 17200, normalPrice: 25600, validPeriod: 'Book & valid: now – 31 Dec 2026',
    itemsRaw: 'Physical Examination, Complete Blood Count, Fasting Blood Sugar, Cholesterol, Triglyceride, HDL, LDL, Creatinine, AST, ALT, TSH, Urine Analysis, Chest X-ray, Electrocardiogram, Ankle-Brachial Index, Fibro Scan (Liver), Body Composition, HbA1c (Glycohemoglobin), BUN, Uric Acid, Total Protein, Albumin, Globulin, Total Bilirubin, Direct Bilirubin, Alkaline Phosphatase, Free T3, Free T4, Hepatitis B Surface Antigen, CEA (Colorectal Cancer Marker), AFP (Liver Cancer Marker), Stool Examination, Stool Occult Blood, Ultrasound Upper/Lower Abdomen, Exercise Stress Test / Echocardiogram, Thin Prep (Pap Smear), CA15-3 (Breast Cancer Marker), CA125 (Ovarian Cancer Marker), Mammogram with Ultrasound Breast',
  },
  {
    id: 'HC-SAM-04', hospitalSlug: 'bangkok-hospital-samui', hospitalName: 'Bangkok Hospital Samui',
    packageName: 'Ultimate', procedureSlug: 'executive-health-checkup-package',
    demographic: 'Male, all ages', duration: '6-8 hrs', itemCount: 42,
    packagePrice: 23880, normalPrice: 42000, validPeriod: 'Book & valid: now – 31 Dec 2026',
    itemsRaw: 'Physical Examination, Complete Blood Count, Fasting Blood Sugar, Cholesterol, Triglyceride, HDL, LDL, Creatinine, AST, ALT, TSH, Urine Analysis, Chest X-ray, Electrocardiogram, Ankle-Brachial Index, Fibro Scan (Liver), Body Composition, HbA1c (Glycohemoglobin), BUN, Uric Acid, Total Protein, Albumin, Globulin, Total Bilirubin, Direct Bilirubin, Alkaline Phosphatase, Free T3, Free T4, Hepatitis B Surface Antigen, CEA (Colorectal Cancer Marker), AFP (Liver Cancer Marker), Stool Examination, Stool Occult Blood, Ultrasound Upper/Lower Abdomen, Exercise Stress Test / Echocardiogram, Homocysteine, Hepatitis B Surface Antibody, CA19-9 (GI Cancer Marker), Allergy Screening (40 types), Ultrasound Whole Abdomen (upgrade from upper/lower), Lung Function Test (Spirometer), PSA (Prostate Cancer Marker)',
  },
  {
    id: 'HC-SAM-05', hospitalSlug: 'bangkok-hospital-samui', hospitalName: 'Bangkok Hospital Samui',
    packageName: 'Ultimate', procedureSlug: 'executive-health-checkup-package',
    demographic: 'Female, all ages', duration: '6-8 hrs', itemCount: 45,
    packagePrice: 29010, normalPrice: 54500, validPeriod: 'Book & valid: now – 31 Dec 2026',
    itemsRaw: 'Physical Examination, Complete Blood Count, Fasting Blood Sugar, Cholesterol, Triglyceride, HDL, LDL, Creatinine, AST, ALT, TSH, Urine Analysis, Chest X-ray, Electrocardiogram, Ankle-Brachial Index, Fibro Scan (Liver), Body Composition, HbA1c (Glycohemoglobin), BUN, Uric Acid, Total Protein, Albumin, Globulin, Total Bilirubin, Direct Bilirubin, Alkaline Phosphatase, Free T3, Free T4, Hepatitis B Surface Antigen, CEA (Colorectal Cancer Marker), AFP (Liver Cancer Marker), Stool Examination, Stool Occult Blood, Ultrasound Upper/Lower Abdomen, Exercise Stress Test / Echocardiogram, Homocysteine, Hepatitis B Surface Antibody, CA19-9 (GI Cancer Marker), Allergy Screening (40 types), Ultrasound Whole Abdomen (upgrade from upper/lower), Lung Function Test (Spirometer), Thin Prep (Pap Smear), CA15-3 (Breast Cancer Marker), CA125 (Ovarian Cancer Marker), Mammogram with Ultrasound Breast',
  },
  {
    id: 'HC-SAM-06', hospitalSlug: 'bangkok-hospital-samui', hospitalName: 'Bangkok Hospital Samui',
    packageName: 'Heart Check-up', procedureSlug: 'cardiac-screening-panel',
    demographic: 'Male/Female, all ages', duration: '4-6 hrs', itemCount: 14,
    packagePrice: 10050, normalPrice: 18500, validPeriod: 'Book & valid: now – 31 Dec 2026',
    itemsRaw: 'Physical Examination, Complete Blood Count, Fasting Blood Sugar, Cholesterol, Triglyceride, HDL, LDL, Creatinine, Homocysteine, TSH, Chest X-ray, Electrocardiogram, Exercise Stress Test / Echocardiogram, Ankle-Brachial Index',
  },
  {
    id: 'HC-BKK-01', hospitalSlug: 'bangkok-hospital-bangkok', hospitalName: 'Bangkok Hospital Bangkok',
    packageName: 'Essence Check-up', procedureSlug: 'executive-health-checkup-package',
    demographic: 'Below 30 yrs, Male/Female', duration: '1-2 hrs', itemCount: 23,
    packagePrice: 5500, normalPrice: 12355, validPeriod: '1 Feb 2026 – 31 Dec 2026',
    itemsRaw: 'Basic Measurement (Vital Signs, BMI), Physical Examination by Medical Physician, Complete Blood Count (CBC), Fasting Blood Sugar (FBS), HbA1c, Cholesterol, HDL, LDL, Triglyceride, BUN, Creatinine (plus GFR), Uric Acid, SGPT, SGOT, Alkaline Phosphatase, GGT, Vitamin D, Urine Analysis, Chest X-Ray, Ultrasound Whole Abdomen, Electrocardiogram (EKG), Check-up Report Book, Food Coupon',
  },
  {
    id: 'HC-BKK-02', hospitalSlug: 'bangkok-hospital-bangkok', hospitalName: 'Bangkok Hospital Bangkok',
    packageName: 'Superior Check-up', procedureSlug: 'executive-health-checkup-package',
    demographic: '30-40 yrs, Male/Female', duration: '2 hrs', itemCount: 33,
    packagePrice: 13500, normalPrice: 24655, validPeriod: '1 Feb 2026 – 31 Dec 2026',
    itemsRaw: 'Basic Measurement (Vital Signs, BMI), Physical Examination by Medical Physician, Complete Blood Count (CBC), Fasting Blood Sugar (FBS), HbA1c, Cholesterol, HDL, LDL, Triglyceride, BUN, Creatinine (plus GFR), Uric Acid, SGPT, SGOT, Alkaline Phosphatase, GGT, Vitamin D, Urine Analysis, Chest X-Ray, Ultrasound Whole Abdomen, Electrocardiogram (EKG), Check-up Report Book, Food Coupon, Eye Screening by Ophthalmologist, Bilirubin, Total Protein, TSH, Free T4, Free T3, PSA for Prostate Cancer (male), CEA for Gastro-intestinal Cancer, AFP for Liver Cancer, Stool Exam & Occult Blood',
  },
  {
    id: 'HC-BKK-03', hospitalSlug: 'bangkok-hospital-bangkok', hospitalName: 'Bangkok Hospital Bangkok',
    packageName: 'Prestige Check-up', procedureSlug: 'executive-health-checkup-package',
    demographic: '40-50 yrs, Male/Female (EST and non-EST variants)', duration: '3-4 hrs', itemCount: 40,
    packagePrice: 15900, normalPrice: 47655, validPeriod: '1 Feb 2026 – 31 Dec 2026',
    itemsRaw: 'Basic Measurement (Vital Signs, BMI), Physical Examination by Medical Physician, Complete Blood Count (CBC), Fasting Blood Sugar (FBS), HbA1c, Cholesterol, HDL, LDL, Triglyceride, BUN, Creatinine (plus GFR), Uric Acid, SGPT, SGOT, Alkaline Phosphatase, GGT, Vitamin D, Urine Analysis, Chest X-Ray, Ultrasound Whole Abdomen, Electrocardiogram (EKG), Check-up Report Book, Food Coupon, Eye Screening by Ophthalmologist, Bilirubin, Total Protein, TSH, Free T4, Free T3, PSA for Prostate Cancer (male), CEA for Gastro-intestinal Cancer, AFP for Liver Cancer, Stool Exam & Occult Blood, Hearing Screening by Audiologist, Cervical Cancer Screening / Liquid Based Cytology (female), Bone Density Lumbar Hip, Digital Mammogram with Ultrasound Breast Both Sides (female), Exercise Stress Test (EST variant only), Calcium, Inorganic Phosphate',
  },
  {
    id: 'HC-BKK-04', hospitalSlug: 'bangkok-hospital-bangkok', hospitalName: 'Bangkok Hospital Bangkok',
    packageName: 'Signature Check-up', procedureSlug: 'executive-health-checkup-package',
    demographic: '50 yrs+, Male/Female', duration: '4 hrs', itemCount: 42,
    packagePrice: 28000, normalPrice: 59995, validPeriod: '1 Feb 2026 – 31 Dec 2026',
    itemsRaw: 'Basic Measurement (Vital Signs, BMI), Physical Examination by Medical Physician, Complete Blood Count (CBC), Fasting Blood Sugar (FBS), HbA1c, Cholesterol, HDL, LDL, Triglyceride, BUN, Creatinine (plus GFR), Uric Acid, SGPT, SGOT, Alkaline Phosphatase, GGT, Vitamin D, Urine Analysis, Chest X-Ray, Ultrasound Whole Abdomen, Electrocardiogram (EKG), Check-up Report Book, Food Coupon, Eye Screening by Ophthalmologist, Bilirubin, Total Protein, TSH, Free T4, Free T3, PSA for Prostate Cancer (male), CEA for Gastro-intestinal Cancer, AFP for Liver Cancer, Stool Exam & Occult Blood, Hearing Screening by Audiologist, Cervical Cancer Screening / Liquid Based Cytology (female), Bone Density Lumbar Hip, Digital Mammogram with Ultrasound Breast Both Sides (female), Exercise Stress Test (EST variant only), Calcium, Inorganic Phosphate, Vitamin B12, Testosterone (male)',
  },
  {
    id: 'HC-BKK-05', hospitalSlug: 'bangkok-hospital-bangkok', hospitalName: 'Bangkok Hospital Bangkok',
    packageName: 'Longevity Check-up', procedureSlug: 'executive-health-checkup-package',
    demographic: '60 yrs+, Male/Female', duration: '4-6 hrs', itemCount: 48,
    packagePrice: 31500, normalPrice: 64425, validPeriod: '1 Feb 2026 – 31 Dec 2026',
    itemsRaw: 'Basic Measurement (Vital Signs, BMI), Physical Examination by Medical Physician, Complete Blood Count (CBC), Fasting Blood Sugar (FBS), HbA1c, Cholesterol, HDL, LDL, Triglyceride, BUN, Creatinine (plus GFR), Uric Acid, SGPT, SGOT, Alkaline Phosphatase, GGT, Vitamin D, Urine Analysis, Chest X-Ray, Ultrasound Whole Abdomen, Electrocardiogram (EKG), Check-up Report Book, Food Coupon, Eye Screening by Ophthalmologist, Bilirubin, Total Protein, TSH, Free T4, Free T3, PSA for Prostate Cancer (male), CEA for Gastro-intestinal Cancer, AFP for Liver Cancer, Stool Exam & Occult Blood, Hearing Screening by Audiologist, Cervical Cancer Screening / Liquid Based Cytology (female), Bone Density Lumbar Hip, Digital Mammogram with Ultrasound Breast Both Sides (female), Exercise Stress Test (EST variant only), Calcium, Inorganic Phosphate, Vitamin B12, Testosterone (male), Sarcopenia Assessment (Bioelectrical Impedance Analysis), Carotid Doppler, Grip Strength, Geriatrician Physical Examination, Geriatric Assessment, Pharmacist Counselling',
  },
  {
    id: 'HC-MDP-01M', hospitalSlug: 'medpark-hospital', hospitalName: 'MedPark Hospital',
    packageName: 'Preventive (Male)', procedureSlug: 'executive-health-checkup-package',
    demographic: '≤30 yrs, Male', duration: '1-2 hrs', itemCount: 20,
    packagePrice: 8290, normalPrice: 12545, validPeriod: 'Valid until 30 Jun 2026',
    itemsRaw: 'Vital Signs and Physical Examination, Vision Test by Auto Refraction, Complete Blood Count (CBC), Fasting Blood Sugar (FBS), Average Blood Sugar (HbA1c), Total Cholesterol, HDL-C, LDL-C, Triglycerides, ALT/SGPT, AST/SGOT, Gamma GT (GGT), Alkaline Phosphatase (ALP), Blood Urea Nitrogen (BUN), Creatinine & eGFR, Uric Acid, Urine Examination, Stool exam & Occult Blood, Chest X-Ray, Electrocardiogram (EKG)',
  },
  {
    id: 'HC-MDP-02M', hospitalSlug: 'medpark-hospital', hospitalName: 'MedPark Hospital',
    packageName: 'Executive (Male)', procedureSlug: 'executive-health-checkup-package',
    demographic: '30-40 yrs, Male', duration: '2-3 hrs', itemCount: 24,
    packagePrice: 14790, normalPrice: 22600, validPeriod: 'Valid until 30 Jun 2026',
    itemsRaw: 'Vital Signs and Physical Examination, Vision Test by Auto Refraction, Complete Blood Count (CBC), Fasting Blood Sugar (FBS), Average Blood Sugar (HbA1c), Total Cholesterol, HDL-C, LDL-C, Triglycerides, ALT/SGPT, AST/SGOT, Gamma GT (GGT), Alkaline Phosphatase (ALP), Blood Urea Nitrogen (BUN), Creatinine & eGFR, Uric Acid, Urine Examination, Stool exam & Occult Blood, Chest X-Ray, Electrocardiogram (EKG), Advance Eye Screening by Ophthalmologist, Total Bilirubin, Direct Bilirubin, Total Protein, Albumin, Globulin, Hepatitis B Surface Antigen (HBsAg), Hepatitis B Surface Antibody (HBsAb), Hepatitis C IgG (Anti HCV), Ankle Brachial Index (ABI)',
  },
  {
    id: 'HC-MDP-03M', hospitalSlug: 'medpark-hospital', hospitalName: 'MedPark Hospital',
    packageName: 'Comprehensive (Male)', procedureSlug: 'executive-health-checkup-package',
    demographic: '40-50 yrs, Male, with EST', duration: '3-4 hrs', itemCount: 37,
    packagePrice: 29100, normalPrice: 46460, validPeriod: 'Valid until 30 Jun 2026',
    itemsRaw: 'Vital Signs and Physical Examination, Vision Test by Auto Refraction, Complete Blood Count (CBC), Fasting Blood Sugar (FBS), Average Blood Sugar (HbA1c), Total Cholesterol, HDL-C, LDL-C, Triglycerides, ALT/SGPT, AST/SGOT, Gamma GT (GGT), Alkaline Phosphatase (ALP), Blood Urea Nitrogen (BUN), Creatinine & eGFR, Uric Acid, Urine Examination, Stool exam & Occult Blood, Chest X-Ray, Electrocardiogram (EKG), Advance Eye Screening by Ophthalmologist, Total Bilirubin, Direct Bilirubin, Total Protein, Albumin, Globulin, Hepatitis B Surface Antigen (HBsAg), Hepatitis B Surface Antibody (HBsAb), Hepatitis C IgG (Anti HCV), Ankle Brachial Index (ABI), FibroScan, Serum Iron, Ferritin, Folate, Calcium, Liver Cancer Screening (AFP), GI Cancer Screening (CEA), Prostate Cancer Screening (PSA), Thyroid Stimulating Hormone (TSH), Free Thyroxine (FT4), Vitamin D, Ultrasound Whole Abdomen, Exercise Stress Test (EST)',
  },
  {
    id: 'HC-MDP-04M', hospitalSlug: 'medpark-hospital', hospitalName: 'MedPark Hospital',
    packageName: 'Platinum (Male)', procedureSlug: 'executive-health-checkup-package',
    demographic: '50-60 yrs, Male', duration: '3-4 hrs', itemCount: 45,
    packagePrice: 34290, normalPrice: 65980, validPeriod: 'Valid until 30 Jun 2026',
    itemsRaw: 'Vital Signs and Physical Examination, Vision Test by Auto Refraction, Complete Blood Count (CBC), Fasting Blood Sugar (FBS), Average Blood Sugar (HbA1c), Total Cholesterol, HDL-C, LDL-C, Triglycerides, ALT/SGPT, AST/SGOT, Gamma GT (GGT), Alkaline Phosphatase (ALP), Blood Urea Nitrogen (BUN), Creatinine & eGFR, Uric Acid, Urine Examination, Stool exam & Occult Blood, Chest X-Ray, Electrocardiogram (EKG), Advance Eye Screening by Ophthalmologist, Total Bilirubin, Direct Bilirubin, Total Protein, Albumin, Globulin, Hepatitis B Surface Antigen (HBsAg), Hepatitis B Surface Antibody (HBsAb), Hepatitis C IgG (Anti HCV), Ankle Brachial Index (ABI), FibroScan, Serum Iron, Ferritin, Folate, Calcium, Liver Cancer Screening (AFP), GI Cancer Screening (CEA), Prostate Cancer Screening (PSA), Thyroid Stimulating Hormone (TSH), Free Thyroxine (FT4), Vitamin D, Ultrasound Whole Abdomen, Exercise Stress Test (EST), Electrolytes (Sodium, Potassium, Chloride, Bicarbonate), Vitamin B12, Bone Density and TBS of L-Spine and Hips, C-Reactive Protein (CRP), Coronary Artery Calcium Score, Doppler of Carotid Arteries',
  },
  {
    id: 'HC-MDP-05M', hospitalSlug: 'medpark-hospital', hospitalName: 'MedPark Hospital',
    packageName: 'Privilege (Male)', procedureSlug: 'executive-health-checkup-package',
    demographic: '60 yrs+, Male, incl. coronary calcium score', duration: '4-5 hrs', itemCount: 52,
    packagePrice: 46900, normalPrice: 78800, validPeriod: 'Valid until 30 Jun 2026',
    itemsRaw: 'Vital Signs and Physical Examination, Vision Test by Auto Refraction, Complete Blood Count (CBC), Fasting Blood Sugar (FBS), Average Blood Sugar (HbA1c), Total Cholesterol, HDL-C, LDL-C, Triglycerides, ALT/SGPT, AST/SGOT, Gamma GT (GGT), Alkaline Phosphatase (ALP), Blood Urea Nitrogen (BUN), Creatinine & eGFR, Uric Acid, Urine Examination, Stool exam & Occult Blood, Chest X-Ray, Electrocardiogram (EKG), Advance Eye Screening by Ophthalmologist, Total Bilirubin, Direct Bilirubin, Total Protein, Albumin, Globulin, Hepatitis B Surface Antigen (HBsAg), Hepatitis B Surface Antibody (HBsAb), Hepatitis C IgG (Anti HCV), Ankle Brachial Index (ABI), FibroScan, Serum Iron, Ferritin, Folate, Calcium, Liver Cancer Screening (AFP), GI Cancer Screening (CEA), Prostate Cancer Screening (PSA), Thyroid Stimulating Hormone (TSH), Free Thyroxine (FT4), Vitamin D, Ultrasound Whole Abdomen, Exercise Stress Test (EST), Electrolytes (Sodium, Potassium, Chloride, Bicarbonate), Vitamin B12, Bone Density and TBS of L-Spine and Hips, C-Reactive Protein (CRP), Coronary Artery Calcium Score, Doppler of Carotid Arteries, IGF-I, Dehydroepiandrosterone Sulphate (DHEA-S), Cortisol, E2 (Estradiol), Follicular Stimulating Hormone (FSH), Insulin, Luteinizing Hormone (LH), Testosterone',
  },
  {
    id: 'HC-MDP-01F', hospitalSlug: 'medpark-hospital', hospitalName: 'MedPark Hospital',
    packageName: 'Preventive (Female)', procedureSlug: 'executive-health-checkup-package',
    demographic: '≤30 yrs, Female', duration: '1-2 hrs', itemCount: 20,
    packagePrice: 8290, normalPrice: 12545, validPeriod: 'Valid until 30 Jun 2026',
    itemsRaw: 'Vital Signs and Physical Examination, Vision Test by Auto Refraction, Complete Blood Count (CBC), Fasting Blood Sugar (FBS), Average Blood Sugar (HbA1c), Total Cholesterol, HDL-C, LDL-C, Triglycerides, ALT/SGPT, AST/SGOT, Gamma GT (GGT), Alkaline Phosphatase (ALP), Blood Urea Nitrogen (BUN), Creatinine & eGFR, Uric Acid, Urine Examination, Stool exam & Occult Blood, Chest X-Ray, Electrocardiogram (EKG), HPV (Preventive/Executive tiers)',
  },
  {
    id: 'HC-MDP-02F', hospitalSlug: 'medpark-hospital', hospitalName: 'MedPark Hospital',
    packageName: 'Executive (Female)', procedureSlug: 'executive-health-checkup-package',
    demographic: '30-40 yrs, Female, with Thin Prep', duration: '2-3 hrs', itemCount: 26,
    packagePrice: 18390, normalPrice: 27850, validPeriod: 'Valid until 30 Jun 2026',
    itemsRaw: 'Vital Signs and Physical Examination, Vision Test by Auto Refraction, Complete Blood Count (CBC), Fasting Blood Sugar (FBS), Average Blood Sugar (HbA1c), Total Cholesterol, HDL-C, LDL-C, Triglycerides, ALT/SGPT, AST/SGOT, Gamma GT (GGT), Alkaline Phosphatase (ALP), Blood Urea Nitrogen (BUN), Creatinine & eGFR, Uric Acid, Urine Examination, Stool exam & Occult Blood, Chest X-Ray, Electrocardiogram (EKG), HPV (Preventive/Executive tiers), Advance Eye Screening by Ophthalmologist, Total Bilirubin, Direct Bilirubin, Total Protein, Albumin, Globulin, Hepatitis B Surface Antigen (HBsAg), Hepatitis B Surface Antibody (HBsAb), Hepatitis C IgG (Anti HCV), Ankle Brachial Index (ABI), PV & Pap Test (Thin Prep)',
  },
  {
    id: 'HC-MDP-03F', hospitalSlug: 'medpark-hospital', hospitalName: 'MedPark Hospital',
    packageName: 'Comprehensive (Female)', procedureSlug: 'executive-health-checkup-package',
    demographic: '40-50 yrs, Female, with EST/Thin Prep/HPV/Mammogram', duration: '3-4 hrs', itemCount: 40,
    packagePrice: 37150, normalPrice: 62900, validPeriod: 'Valid until 30 Jun 2026',
    itemsRaw: 'Vital Signs and Physical Examination, Vision Test by Auto Refraction, Complete Blood Count (CBC), Fasting Blood Sugar (FBS), Average Blood Sugar (HbA1c), Total Cholesterol, HDL-C, LDL-C, Triglycerides, ALT/SGPT, AST/SGOT, Gamma GT (GGT), Alkaline Phosphatase (ALP), Blood Urea Nitrogen (BUN), Creatinine & eGFR, Uric Acid, Urine Examination, Stool exam & Occult Blood, Chest X-Ray, Electrocardiogram (EKG), HPV (Preventive/Executive tiers), Advance Eye Screening by Ophthalmologist, Total Bilirubin, Direct Bilirubin, Total Protein, Albumin, Globulin, Hepatitis B Surface Antigen (HBsAg), Hepatitis B Surface Antibody (HBsAb), Hepatitis C IgG (Anti HCV), Ankle Brachial Index (ABI), PV & Pap Test (Thin Prep), FibroScan, Serum Iron, Ferritin, Folate, Calcium, Liver Cancer Screening (AFP), GI Cancer Screening (CEA), Prostate Cancer Screening (PSA), Thyroid Stimulating Hormone (TSH), Free Thyroxine (FT4), Vitamin D, Ultrasound Whole Abdomen, Exercise Stress Test (EST), Cancer Antigen 125 (CA125), Cancer Antigen 15-3 (CA15-3)',
  },
  {
    id: 'HC-MDP-04F', hospitalSlug: 'medpark-hospital', hospitalName: 'MedPark Hospital',
    packageName: 'Platinum (Female)', procedureSlug: 'executive-health-checkup-package',
    demographic: '45-60 yrs, Female', duration: '3-4 hrs', itemCount: 47,
    packagePrice: 39100, normalPrice: 74850, validPeriod: 'Valid until 30 Jun 2026',
    itemsRaw: 'Vital Signs and Physical Examination, Vision Test by Auto Refraction, Complete Blood Count (CBC), Fasting Blood Sugar (FBS), Average Blood Sugar (HbA1c), Total Cholesterol, HDL-C, LDL-C, Triglycerides, ALT/SGPT, AST/SGOT, Gamma GT (GGT), Alkaline Phosphatase (ALP), Blood Urea Nitrogen (BUN), Creatinine & eGFR, Uric Acid, Urine Examination, Stool exam & Occult Blood, Chest X-Ray, Electrocardiogram (EKG), HPV (Preventive/Executive tiers), Advance Eye Screening by Ophthalmologist, Total Bilirubin, Direct Bilirubin, Total Protein, Albumin, Globulin, Hepatitis B Surface Antigen (HBsAg), Hepatitis B Surface Antibody (HBsAb), Hepatitis C IgG (Anti HCV), Ankle Brachial Index (ABI), PV & Pap Test (Thin Prep), FibroScan, Serum Iron, Ferritin, Folate, Calcium, Liver Cancer Screening (AFP), GI Cancer Screening (CEA), Prostate Cancer Screening (PSA), Thyroid Stimulating Hormone (TSH), Free Thyroxine (FT4), Vitamin D, Ultrasound Whole Abdomen, Exercise Stress Test (EST), Cancer Antigen 125 (CA125), Cancer Antigen 15-3 (CA15-3), Electrolytes (Sodium, Potassium, Chloride, Bicarbonate), Vitamin B12, Bone Density and TBS of L-Spine and Hips, C-Reactive Protein (CRP), Coronary Artery Calcium Score, Doppler of Carotid Arteries, Digital Mammogram and Breast Ultrasound',
  },
  {
    id: 'HC-MDP-05F', hospitalSlug: 'medpark-hospital', hospitalName: 'MedPark Hospital',
    packageName: 'Privilege (Female)', procedureSlug: 'executive-health-checkup-package',
    demographic: '60 yrs+, Female, incl. coronary calcium score', duration: '4-5 hrs', itemCount: 57,
    packagePrice: 58650, normalPrice: 91300, validPeriod: 'Valid until 30 Jun 2026',
    itemsRaw: 'Vital Signs and Physical Examination, Vision Test by Auto Refraction, Complete Blood Count (CBC), Fasting Blood Sugar (FBS), Average Blood Sugar (HbA1c), Total Cholesterol, HDL-C, LDL-C, Triglycerides, ALT/SGPT, AST/SGOT, Gamma GT (GGT), Alkaline Phosphatase (ALP), Blood Urea Nitrogen (BUN), Creatinine & eGFR, Uric Acid, Urine Examination, Stool exam & Occult Blood, Chest X-Ray, Electrocardiogram (EKG), HPV (Preventive/Executive tiers), Advance Eye Screening by Ophthalmologist, Total Bilirubin, Direct Bilirubin, Total Protein, Albumin, Globulin, Hepatitis B Surface Antigen (HBsAg), Hepatitis B Surface Antibody (HBsAb), Hepatitis C IgG (Anti HCV), Ankle Brachial Index (ABI), PV & Pap Test (Thin Prep), FibroScan, Serum Iron, Ferritin, Folate, Calcium, Liver Cancer Screening (AFP), GI Cancer Screening (CEA), Prostate Cancer Screening (PSA), Thyroid Stimulating Hormone (TSH), Free Thyroxine (FT4), Vitamin D, Ultrasound Whole Abdomen, Exercise Stress Test (EST), Cancer Antigen 125 (CA125), Cancer Antigen 15-3 (CA15-3), Electrolytes (Sodium, Potassium, Chloride, Bicarbonate), Vitamin B12, Bone Density and TBS of L-Spine and Hips, C-Reactive Protein (CRP), Coronary Artery Calcium Score, Doppler of Carotid Arteries, Digital Mammogram and Breast Ultrasound, IGF-I, Dehydroepiandrosterone Sulphate (DHEA-S), Cortisol, E2 (Estradiol), Follicular Stimulating Hormone (FSH), Insulin, Luteinizing Hormone (LH), Testosterone, Progesterone',
  },
]

export const checkupPackages: CheckupPackage[] = packageDefs.map(({ itemsRaw, ...rest }) => ({
  ...rest,
  items: splitItems(itemsRaw),
}))

// Patient-relevant prep/booking notes per hospital (trimmed from the source's
// internal notes — contact details and "flag this for Bart" reminders live in
// the source spreadsheet, not here).
export const hospitalCheckupNotes: Record<string, string> = {
  'bangkok-hospital-samui': 'Fast for 8–10 hours before your appointment. If you\'re female, avoid scheduling within 7 days of your period, and tell staff if pregnancy is possible.',
  'bangkok-hospital-bangkok': 'The Longevity package requires a full fast (food and drink) for 8–10 hours; other tiers allow plain water. The Sarcopenia assessment requires being able to stand unassisted.',
  'medpark-hospital': 'Prices are valid through 30 June 2026 — confirm current pricing with your coordinator before booking, since this runs out sooner than other hospitals\' packages. IGF-I results take 1–2 days to come back.',
}

export const packagesByProcedure = (procedureSlug: string) =>
  checkupPackages.filter((p) => p.procedureSlug === procedureSlug)
