// Generated from thailand_jci_hospital_database_4.xlsx (JCI Hospital Database sheet).
// Real, verifiable facility data only. No doctor names, prices, or patient
// reviews are fabricated for these real, identifiable institutions.
//
// approved = "Approved by us?" column (shown first, ranked highest).
// fame = a curated 0-100 heuristic score (not from the sheet), derived from
// keyword signals in the Notes/Source and description text (e.g. "flagship",
// "first", "largest", big numbers, press mentions). A rough proxy, not a claim.
// allCategoriesRaw = the sheet's "All Categories" column, split into a list —
// these are the real category names as the source classifies each facility.
// specialties = a small derived subset mapping to Unwello's 6 built Treatment
// Category pages (dental, hair-transplant, rhinoplasty, plastic-surgery,
// weight-loss, fertility-ivf) — only where allCategoriesRaw explicitly supports it.
// imageFile = a real photo matched from the "Hospital pictures" folder by
// normalized facility name; null where no matching picture was supplied.

export type Hospital = {
  slug: string
  name: string
  city: string
  approved: boolean
  fame: number
  jciProgramType: string
  jciSince: string
  ccpc: string[]
  allCategoriesRaw: string[]
  specialties: string[]
  departments: string
  languages: string
  otherAccreditations: string[]
  description: string
  notes: string
  ihcoId: string
  imageFile: string | null
}

export const hospitals: Hospital[] = [
  {
    "slug": "bangkok-hospital-bangkok",
    "name": "Bangkok Hospital Bangkok",
    "city": "Bangkok",
    "approved": true,
    "fame": 95,
    "jciProgramType": "Hospital Program",
    "jciSince": "30 Jun 2007",
    "ccpc": [
      "Acute Coronary Syndrome (2021)",
      "Lung Cancer (2024)",
      "Orthogeriatric (2024)",
      "Primary Stroke (2008)"
    ],
    "allCategoriesRaw": [
      "Cardiology & Cardiac Surgery",
      "Oncology / Cancer Treatment",
      "Neurology & Neurosurgery",
      "Orthopedics & Joint Replacement",
      "Spine Surgery",
      "Health Screenings & Checkups"
    ],
    "specialties": [],
    "departments": "Bangkok Heart Hospital (ECMO, 24/7 cardiac catheterization); Bangkok Cancer Hospital Wattanosoth (TrueBeam radiotherapy, CyberKnife); Neuroscience Center; Orthopedic Center; Trauma Center; Digestive Disease Center; on-campus Bangkok International Hospital for neuro/ortho ('Brain X Bone'). JCI CCPC: Acute Coronary Syndrome, Lung Cancer, Orthogeriatric, Primary Stroke.",
    "languages": "25+ languages including English, Arabic, Chinese, Japanese, Korean, Russian; 200+ interpreters, 33+ international referral offices worldwide, Muslim prayer room",
    "otherAccreditations": [
      "HA (Thailand MOPH)",
      "ISO 27799",
      "ISO 27001",
      "ISO 9001:2015",
      "CAMT/CAMTS",
      "10 total JCI Clinical Care Program Certifications",
      "ELSO Award (first in Thailand)"
    ],
    "description": "Bangkok Hospital (Bangkok Hospital Headquarters) is the flagship facility of Bangkok Dusit Medical Services (BDMS), Thailand's largest private hospital network. Founded in 1972 as one of the country's first private hospitals, it has grown into a major tertiary care campus on New Petchburi Road, combining the main hospital with specialized satellite institutions: Bangkok Heart Hospital, Bangkok Cancer Hospital Wattanosoth, and Bangkok International Hospital (dedicated brain and bone center). The campus holds six consecutive JCI accreditations and 10 JCI Clinical Care Program Certifications, including Acute Coronary Syndrome, Lung Cancer, Orthogeriatric care, and Primary Stroke, making it one of the most heavily disease-specific-certified hospitals in Thailand. Technology includes Da Vinci Xi robotic surgery, MAKOplasty robotic joint replacement, 256-slice CT, 3T MRI, and PET-CT. The hospital serves a very large international patient base supported by 200+ interpreters covering 25-30+ languages, 33+ international patient referral offices around the world, and direct billing arrangements with 100-200+ insurance providers. It is consistently ranked Thailand's #1 or top-5 hospital by Newsweek's World's Best Hospitals list. Given its scale and disease-specific certifications, it is best positioned on your platform as the anchor listing for high-acuity categories: cardiology, oncology, neurology/stroke, and complex orthopedics, while also supporting routine health screening packages.",
    "notes": "Flagship of BDMS, Thailand's largest private hospital network",
    "ihcoId": "60000567",
    "imageFile": "/images/hospitals/bangkok-hospital-bangkok.webp"
  },
  {
    "slug": "addlife-total-check-up-center",
    "name": "Addlife Total Check-Up Center",
    "city": "Bangkok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Ambulatory Care Program",
    "jciSince": "14 Jan 2021",
    "ccpc": [],
    "allCategoriesRaw": [
      "Health Screenings & Executive Checkups"
    ],
    "specialties": [],
    "departments": "Dedicated health-screening/checkup ambulatory center; specific package details not published in sources reviewed.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Addlife Total Check-Up Center is a JCI-accredited Ambulatory Care Program facility in Bangkok (accredited January 2021), specializing in health screening and executive check-up services rather than acute or surgical care. Public information on specific package pricing, specialty depth, and language support is limited compared to the major hospital groups. This makes it a reasonable candidate for a dedicated Health Screenings category listing, but we recommend a direct verification call before publishing package details, pricing, or language claims.",
    "notes": "",
    "ihcoId": "60008589",
    "imageFile": "/images/hospitals/addlife-total-check-up-center.webp"
  },
  {
    "slug": "aikchol-hospital",
    "name": "Aikchol Hospital",
    "city": "Chonburi",
    "approved": false,
    "fame": 70,
    "jciProgramType": "Hospital Program",
    "jciSince": "31 Oct 2015",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty",
      "Cardiology",
      "Orthopedics",
      "Health Screenings & Checkups",
      "Eye Care (Ophthalmology)",
      "Dermatology"
    ],
    "specialties": [],
    "departments": "Departments include Cardiology Center, Orthopedics, Pediatrics, Gynecology, General Surgery, ENT, Ophthalmology, Skin & Aesthetics, Neurosurgery, Radiology, Psychology, Acupuncture, and a 3D Medical Printing Center.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Aikchol Hospital, established in 1981, was the first private hospital in Chonburi province — its name combines the founder's name (Ekkapot) with the province name (Chonburi). Publicly listed on the Stock Exchange of Thailand since 1992, it operates alongside a sister facility, Aikchol 2 Hospital. The hospital covers a broad general and multi-specialty range including cardiology, orthopedics, pediatrics, gynecology, general surgery, ENT, ophthalmology, dermatology/aesthetics, neurosurgery, and a notable 3D Medical Printing Center for surgical planning. JCI accredited since 31 October 2015. As a regional Chonburi hospital rather than an international-patient-focused flagship, language support and procedure-level pricing were not found in public sources — recommend direct verification before publishing patient-facing claims.",
    "notes": "",
    "ihcoId": "60003926",
    "imageFile": "/images/hospitals/aikchol-hospital.jpeg"
  },
  {
    "slug": "bangkok-hospital-ratchasima",
    "name": "Bangkok Hospital Ratchasima",
    "city": "Nakhon Ratchasima",
    "approved": true,
    "fame": 30,
    "jciProgramType": "Hospital Program",
    "jciSince": "31 Aug 2024",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty",
      "Health Screenings & Checkups",
      "Cardiology",
      "Emergency & Trauma"
    ],
    "specialties": [],
    "departments": "General medicine and surgery departments serving the Isaan (northeastern) region; part of the wider BDMS clinical network, so complex cases can be referred to Bangkok Hospital Bangkok or MedPark when needed.",
    "languages": "Not independently verified — regional BDMS hospitals typically offer English-speaking staff with limited additional-language coverage compared to Bangkok flagship sites. Confirm directly before publishing.",
    "otherAccreditations": [
      "HA (Thailand Ministry of Public Health)"
    ],
    "description": "Bangkok Hospital Ratchasima is part of the Bangkok Dusit Medical Services (BDMS) network, serving Nakhon Ratchasima (Korat) and the wider northeastern Isaan region of Thailand. It received JCI Hospital Program accreditation on 31 August 2024, making it one of the more recently accredited facilities in the BDMS network, alongside Thailand Hospital Accreditation (HA) from the Ministry of Public Health. As a regional referral hospital rather than a flagship international campus, published detail on specific specialty centers, procedure pricing, and language support is limited compared to Bangkok Hospital's headquarters campus or its sister Phuket/Chiang Mai/Pattaya branches. For a medical tourism platform, this hospital is best positioned as a regional access point — useful for patients already traveling in or near Nakhon Ratchasima, or as part of a referral pathway into BDMS's larger Bangkok facilities for complex or specialized procedures. Before publishing pricing or language claims for this hospital specifically, we recommend a direct verification call with its International Patient / Marketing department, since — unlike Bangkok Hospital Bangkok, Phuket, or Chiang Mai — it does not appear to publish a dedicated international-patient-facing microsite with the same level of detail.",
    "notes": "",
    "ihcoId": "60007352",
    "imageFile": "/images/hospitals/bangkok-hospital-ratchasima.webp"
  },
  {
    "slug": "chiangmai-ram-hospital",
    "name": "Chiangmai Ram Hospital",
    "city": "Chiang Mai",
    "approved": false,
    "fame": 50,
    "jciProgramType": "Hospital Program",
    "jciSince": "07 Nov 2009",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty",
      "Cardiology",
      "Dentistry",
      "Eye Care (Ophthalmology)",
      "Neurology"
    ],
    "specialties": [
      "dental"
    ],
    "departments": "19 specialties, 84 procedures; strongest reported specialties are Neurology, Dentistry, and Ophthalmology. Advanced tech includes digital X-ray PACS imaging and drug-dispensing robots. Cardiac and paralysis (stroke) treatment are noted strengths.",
    "languages": "English confirmed core; French, Spanish, Japanese, Chinese, Myanmar (Burmese), Korean, and German reported via professional interpreter team",
    "otherAccreditations": [
      "ISO 9001",
      "ISO 14001",
      "HA (Thailand)",
      "Prime Minister's Export Award"
    ],
    "description": "Chiangmai Ram Hospital, founded through a collaboration of Chiang Mai and Ramkhamhaeng Hospital physicians, became the first JCI-accredited hospital in Northern Thailand in November 2009 and remains one of only two JCI-accredited private hospitals in Chiang Mai (alongside Bangkok Hospital Chiang Mai). It is part of the Ramkhamhaeng Group, a hospital network separate from BDMS. The hospital operates 19 specialties and roughly 84 documented procedures, with particular strength in neurology, dentistry, and ophthalmology, alongside coronary disease and stroke treatment. It maintains a professional interpreter team covering German, French, English, Chinese, Japanese, Myanmar (Burmese), and Korean, and holds active partnerships with international assistance providers (International SOS, Asian Assistance, April Assistance) for coordinated international patient care and repatriation support. On your platform, this hospital is a strong secondary listing for Chiang Mai alongside Bangkok Hospital Chiang Mai, particularly for neurology, dental, and eye care categories.",
    "notes": "",
    "ihcoId": "60000020",
    "imageFile": "/images/hospitals/chiangmai-ram-hospital.jpg"
  },
  {
    "slug": "bangkok-international-dental-center",
    "name": "Bangkok International Dental Center",
    "city": "Bangkok",
    "approved": false,
    "fame": 40,
    "jciProgramType": "Ambulatory Care Program",
    "jciSince": "08 Nov 2012",
    "ccpc": [],
    "allCategoriesRaw": [
      "Dental Care"
    ],
    "specialties": [
      "dental"
    ],
    "departments": "Full-scope dental implant center; first private dental center in the ASEAN Economic Community to be JCI accredited (Ambulatory Care Program, since 2012). Uses American-based (CDC, AAMI, WHO, ADA) infection prevention and clinical protocols.",
    "languages": "Not specified in sources reviewed — verify directly",
    "otherAccreditations": [
      "JCI Ambulatory Care standards",
      "among the first ambulatory facilities in Thailand to be JCI accredited"
    ],
    "description": "Bangkok International Dental Center (BIDC) holds the distinction of being the first private dental center in the ASEAN Economic Community to achieve JCI accreditation, first certified in 2012 and re-accredited in 2015 and 2018 under progressively stricter JCI standards editions. As a specialist ambulatory dental facility rather than a general hospital, BIDC's clinical protocols are built on U.S.-based infection prevention and safety standards (CDC, AAMI, WHO, ADA), which is a genuine differentiator versus dental clinics operating without hospital-grade accreditation. The center is positioned as a leading dental implant center in Thailand's dental tourism market. Specific language support and pricing were not detailed in the sources reviewed — recommend verifying directly with the center before publishing on your platform, though its accreditation credentials alone make it a credible anchor listing for your Dental Care category.",
    "notes": "First private dental center in the ASEAN Economic Community to be JCI accredited",
    "ihcoId": "60000319",
    "imageFile": "/images/hospitals/bangkok-international-dental-center.jpg"
  },
  {
    "slug": "bnh-hospital",
    "name": "BNH Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 65,
    "jciProgramType": "Hospital Program",
    "jciSince": "29 May 2009",
    "ccpc": [],
    "allCategoriesRaw": [
      "Women's Health",
      "Maternity & Obstetrics",
      "Orthopedics",
      "Fertility & IVF",
      "Dental Care",
      "Cosmetic & Plastic Surgery",
      "Dermatology",
      "Gastroenterology",
      "Eye Care (Ophthalmology)"
    ],
    "specialties": [
      "dental",
      "plastic-surgery",
      "rhinoplasty",
      "fertility-ivf"
    ],
    "departments": "25+ departments and centers including the Bangkok International Fertility Centre, Breast Health Centre, Cardiometabolic Centre, Dermatology & Beauty Centre, Digestive Care Centre, ENT Centre, Gynaecology Centre, Paediatrics Centre, Shoulder & Joint Centre, Spine Centre, and a dedicated Glaucoma Clinic with a 40+ group annual screening program.",
    "languages": "English and Thai confirmed as core; broader European (Norwegian, French, German, Spanish, Italian, Danish, Swedish) and Asian (Cantonese, Mandarin, Vietnamese, Japanese) interpretation reported by some sources but not independently confirmed as currently active — verify before publishing",
    "otherAccreditations": [
      "HA (Thailand MOPH)",
      "part of the BDMS network"
    ],
    "description": "BNH Hospital, founded in 1898 as the Bangkok Nursing Home to serve Bangkok's expatriate community, is one of Thailand's oldest private hospitals and is described by several sources as the first private international hospital in the country. Now a 95-120 bed facility on Convent Road in the Silom/Sathorn business district, BNH is affiliated with the BDMS network. It operates 25+ specialty departments including a well-regarded Bangkok International Fertility Centre, Breast Health Centre, Cardiometabolic Centre, Dermatology & Beauty Centre, and Shoulder & Joint Centre, and it is particularly noted in industry rankings for gynecology, midwifery, and IVF/fertility care. Reported language support is broad on paper (multiple European and Asian languages), though at least one detailed source lists only English and Thai as confirmed languages, and a recent patient review flagged communication difficulties during a maternity case — worth a direct check on current language staffing before publishing, especially for the maternity department specifically. Central Silom/Sathorn location makes it convenient for hotel-based recovery.",
    "notes": "Founded 1898, one of Thailand's oldest private hospitals",
    "ihcoId": "60000446",
    "imageFile": "/images/hospitals/bnh-hospital.jpg"
  },
  {
    "slug": "bumrungrad-hospital",
    "name": "Bumrungrad Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 115,
    "jciProgramType": "Hospital Program",
    "jciSince": "02 Feb 2002",
    "ccpc": [
      "Breast Cancer (2025)",
      "Heart Failure (2022)"
    ],
    "allCategoriesRaw": [
      "Cardiology & Cardiac Surgery",
      "Oncology / Cancer Treatment",
      "Orthopedics & Joint Replacement",
      "Neurology & Neurosurgery",
      "Spine Surgery",
      "Fertility & IVF",
      "Cosmetic & Plastic Surgery",
      "Eye Care (Ophthalmology)",
      "Gastroenterology",
      "Urology",
      "Dermatology",
      "Endocrinology & Diabetes Care",
      "Pediatrics",
      "Health Screenings & Executive Checkups",
      "Anti-Aging & Longevity Medicine (Genomic Medicine Center)"
    ],
    "specialties": [
      "plastic-surgery",
      "rhinoplasty",
      "fertility-ivf"
    ],
    "departments": "47 specialty centers and clinics spanning 115+ specialties/subspecialties. Highlights: Heart Center (24-hour emergency cardiac intervention, 90-minute door-to-balloon time, CardioInsight arrhythmia diagnostics — only operational unit in Asia Pacific), Horizon Regional Cancer Center (IBM Watson for Oncology, 30 oncology specialists, haploidentical bone marrow transplant for pediatric thalassemia), Orthopedic Center (MAKOplasty robotic joint replacement, 1-3 day recovery), Spine Institute (12,000+ cases/year), Fertility Center (IVF/ICSI/egg freezing — surrogacy not offered), Bumrungrad Center for Genomic Medicine, and ReLEx SMILE laser eye surgery (only hospital in Thailand to offer it). JCI CCPC since 2006-2010 for heart disease, stroke, kidney disease, and diabetes.",
    "languages": "30+ languages including English, Arabic, Chinese (Mandarin & Cantonese), Japanese, Korean, Russian, French, German, Spanish, Hindi, Bengali, Bahasa Indonesia, Vietnamese, Khmer; 150-200+ interpreters, 23 international referral offices worldwide",
    "otherAccreditations": [
      "Global Healthcare Accreditation (GHA) with Excellence",
      "CAP (College of American Pathologists) laboratory accreditation",
      "DNV-GL Managing Infection Risk (MIR) certification — first in Asia",
      "ISO 9001:2015",
      "first hospital in Thailand to receive Hospital Accreditation (HA) and Advanced-HA"
    ],
    "description": "Bumrungrad International Hospital, founded in 1980, is Southeast Asia's largest private hospital and was the first hospital in Asia to receive JCI accreditation (2002), now re-accredited seven consecutive times. The 580-bed campus (63 ICU beds) treats over 1.1 million patients annually — more than 500,000 of them international, from 190+ countries — across 47 specialty centers staffed by 1,200+ physicians, over 210 of whom hold international board certifications (US, UK, Australia, Japan, Germany). Standout capabilities include a Heart Center with door-to-balloon emergency cardiac intervention in 90 minutes, the Horizon Regional Cancer Center using IBM Watson for Oncology, MAKOplasty robotic joint replacement, a comprehensive Fertility Center (IVF/ICSI/egg freezing, though not surrogacy), and Thailand's only ReLEx SMILE laser eye surgery program. Bumrungrad is consistently ranked Thailand's #1 hospital by Newsweek and Statista and placed among the world's top 100. With 30+ languages supported by 150-200+ interpreters and 23 international referral offices, it has the deepest international patient infrastructure of any hospital in this database. Given its scale, reputation, and near-universal specialty coverage, Bumrungrad is a natural anchor listing across almost every category on your platform, particularly cardiology, oncology, orthopedics, fertility, and executive health screenings.",
    "notes": "First JCI-accredited hospital in Asia (2002); 47 specialty centers, 1,200+ physicians",
    "ihcoId": "60000464",
    "imageFile": "/images/hospitals/bumrungrad-hospital.jpg"
  },
  {
    "slug": "bangkok-hospital-phuket",
    "name": "Bangkok Hospital Phuket",
    "city": "Phuket",
    "approved": true,
    "fame": 80,
    "jciProgramType": "Hospital Program",
    "jciSince": "23 May 2009",
    "ccpc": [],
    "allCategoriesRaw": [
      "Cardiology",
      "Orthopedics",
      "Oncology",
      "Neurosurgery",
      "Pediatrics",
      "Cosmetic & Plastic Surgery",
      "Dental Care",
      "Fertility & IVF",
      "Bariatric & Weight-Loss Surgery",
      "Eye Care (Ophthalmology)",
      "Health Screenings & Checkups"
    ],
    "specialties": [
      "dental",
      "plastic-surgery",
      "rhinoplasty",
      "fertility-ivf",
      "weight-loss"
    ],
    "departments": "23+ specialty centers including Cardiology, Orthopedics, Ophthalmology, Oncology, Gynecology/Obstetrics, Colorectal Disease (da Vinci robot-assisted colorectal surgery), Neurosurgery, Pediatrics, ENT, Nephrology, Psychiatry. Known procedures: sleeve gastrectomy (bariatric), spinal surgery, fertility care, senior vision correction, cosmetic surgery, and dental work.",
    "languages": "10+ languages actively supported, including English, German, French, Italian, Spanish, Dutch, Swedish, Finnish, Norwegian, Danish, Russian, Chinese, Japanese, Korean, Arabic, and Tagalog via multilingual coordinators",
    "otherAccreditations": [
      "HQIA (Institute of Hospital Quality Improvement and Accreditation",
      "Thailand)",
      "ISO certifications",
      "30+ total certificates/awards",
      "15 laboratory-specific certificates"
    ],
    "description": "Bangkok Hospital Phuket, established in 1993, was Phuket's first hospital to receive JCI accreditation and is part of the Bangkok Dusit Medical Services (BDMS) network — Asia's largest private hospital group. With 200 inpatient beds and more than 23 specialty centers, it is one of the largest and most advanced medical facilities in southern Thailand, serving an estimated 80,000-90,000 international patients annually from Asia, Australia/Oceania, Europe, the Americas, the Middle East, and Russia/CIS countries. Specialties span cardiology, orthopedics, ophthalmology, oncology, gynecology/obstetrics, colorectal disease (including da Vinci robot-assisted surgery), neurosurgery, pediatrics, and a well-established cosmetic surgery service, alongside popular medical-tourism procedures such as sleeve gastrectomy, fertility care, spinal surgery, and vision correction for older patients. The hospital's International Patients Center provides interpreter services in 10+ languages, embassy and visa-extension documentation support, airport transfer coordination, and direct billing arrangements with major global insurers and TPAs. Its location combines convenient island access with resort-style recovery, making it especially attractive for patients who want to pair treatment with a holiday. Note: independent reviews on language support are mixed for some departments — verify current English-language staffing levels for the specific department/procedure before setting patient expectations on the platform.",
    "notes": "",
    "ihcoId": "60000444",
    "imageFile": "/images/hospitals/bangkok-hospital-phuket.jpg"
  },
  {
    "slug": "chaophya-hospital",
    "name": "Chaophya Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 70,
    "jciProgramType": "Hospital Program",
    "jciSince": "17 Mar 2012",
    "ccpc": [
      "Senile Cataract Surgery (2025)"
    ],
    "allCategoriesRaw": [
      "Cardiology",
      "Spine Surgery",
      "Gastroenterology",
      "Health Screenings & Checkups",
      "Cosmetic & Plastic Surgery (Aesthetic Centre)",
      "Eye Care (Ophthalmology)",
      "Dental Care"
    ],
    "specialties": [
      "dental",
      "plastic-surgery",
      "rhinoplasty"
    ],
    "departments": "Cardiac Program, Spine Centre, Gastrointestinal-Liver Centre, Check-up Programs, Aesthetic Centre, 24-hour Eye Centre, and Dental Centre. JCI CCPC: Senile Cataract Surgery (2025).",
    "languages": "Not specified in sources reviewed — verify directly",
    "otherAccreditations": [
      "ISO 9001:2000 (since 2001)"
    ],
    "description": "Chaophya Hospital, operating since 1991 on a 5.5-acre campus on the west bank of the Chao Phraya River in Bangkok, is a JCI-accredited tertiary private hospital whose medical consultants are primarily drawn from Siriraj Hospital, Thailand's first and largest medical school. It maintains a Cardiac Program, Spine Centre, Gastrointestinal-Liver Centre, Aesthetic Centre, a 24-hour Eye Centre, and a Dental Centre, and holds a JCI Clinical Care Program Certification for Senile Cataract Surgery (2025) — a useful, specific credential for an eye care listing. For international patients, the hospital arranges accommodation through a partnership with a nearby condominium. Language support and detailed pricing were not found in the sources reviewed — recommend direct verification before publishing patient-facing details.",
    "notes": "",
    "ihcoId": "60000227",
    "imageFile": "/images/hospitals/chaophya-hospital.jpg"
  },
  {
    "slug": "deep-harmonicare-ivf-center-thailand",
    "name": "Deep & Harmonicare IVF Center (Thailand)",
    "city": "Bangkok",
    "approved": false,
    "fame": 30,
    "jciProgramType": "Ambulatory Care Program",
    "jciSince": "29 Jul 2021",
    "ccpc": [],
    "allCategoriesRaw": [
      "Fertility & IVF"
    ],
    "specialties": [
      "fertility-ivf"
    ],
    "departments": "One of the few JCI-accredited assisted reproductive institutions in the world and one of the largest single-building IVF centers in Thailand. Reported delivery (not just pregnancy) success rates of 60-80% depending on patient condition. Advanced lab equipment: Embryoscope Plus, ULPA air filtration (99.999% particulate filtration for embryo culture), full genetic testing capability.",
    "languages": "Language assistance included as a standard service per patient package listings; specific language list not detailed — verify directly",
    "otherAccreditations": [
      "JCI Ambulatory Care Program (since 2021)",
      "UK-NEQAS",
      "CAP (College of American Pathologists)",
      "ISO 9001"
    ],
    "description": "Deep & Harmonicare IVF Center (DHC) is one of a small number of assisted reproductive institutions worldwide to hold JCI accreditation, and one of the largest single-building IVF facilities in Thailand. Its laboratory — described by Thailand's Ministry of Public Health as a 'future central laboratory' model — was designed by an ESHRE-qualified specialist to meet U.S. standards for fertilization and embryo culture rooms, and includes an Embryoscope Plus and a ULPA air filtration system rated to filter 99.999% of particulates for embryo culture cleanliness. The center reports delivery success rates (tracking live births rather than just pregnancy rates) of 60-80% depending on individual patient factors, and its clinical team holds memberships in ESHRE, ASRM, and ASPIRE — the major European, American, and Asia-Pacific reproductive medicine societies. Located near Ramkhamhaeng Airport Rail Link station, about 20 minutes from Suvarnabhumi Airport. Given its JCI accreditation specifically for fertility services (a rarer credential than general hospital JCI accreditation), DHC is a strong, specific listing for your Fertility & IVF category.",
    "notes": "",
    "ihcoId": "60009051",
    "imageFile": "/images/hospitals/deep-harmonicare-ivf-center-thailand.jpg"
  },
  {
    "slug": "bangkok-hospital-chiang-mai",
    "name": "Bangkok Hospital Chiang Mai",
    "city": "Chiang Mai",
    "approved": true,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "29 Aug 2015",
    "ccpc": [],
    "allCategoriesRaw": [
      "Cardiology",
      "Orthopedics",
      "Oncology",
      "Bariatric & Weight-Loss Surgery",
      "Fertility & IVF",
      "Cosmetic & Reconstructive Surgery",
      "Dental Care",
      "ENT"
    ],
    "specialties": [
      "dental",
      "plastic-surgery",
      "rhinoplasty",
      "fertility-ivf",
      "weight-loss"
    ],
    "departments": "21 specialized clinics and centers, anchored by a Heart Center affiliated with Oregon Health & Science University and Nagoya University for cardiac care and rehabilitation. Procedures include hip replacement, ACL/PCL/MCL/LCL reconstruction, coronary bypass (CABG), angioplasty, sleeve gastrectomy, and cosmetic procedures (breast augmentation, tummy tuck, blepharoplasty, rhinoplasty).",
    "languages": "English, Mandarin, Japanese, Korean, Burmese, French with dedicated International Medical Services coordinators, plus 24 additional languages available by phone around the clock",
    "otherAccreditations": [
      "CAMTS (Commission on Accreditation of Medical Transport Systems)",
      "accepts TRICARE Overseas Program and Foreign Medical Program"
    ],
    "description": "Bangkok Hospital Chiang Mai opened in 2014 as the 36th hospital in the Bangkok Dusit Medical Services (BDMS) network, bringing metropolitan-level tertiary care to northern Thailand. The 122-bed facility, located 15 minutes from Chiang Mai International Airport, operates 21 specialized clinics and centers and has held continuous JCI accreditation since 2015, most recently renewed through 2027 — one of only two JCI-accredited private hospitals in Chiang Mai. Its Heart Center holds an academic affiliation with Oregon Health & Science University and Nagoya University, supporting ongoing staff training in cardiac care. Beyond cardiology, the hospital covers orthopedics, oncology, bariatric surgery (notably sleeve gastrectomy), fertility and women's health, and cosmetic/reconstructive surgery, with a well-developed cosmetic surgery menu (breast augmentation, tummy tuck, eyelid surgery, rhinoplasty). The dedicated International Medical Services Department provides in-person translation in English, Mandarin, Japanese, Korean, Burmese, and French, with 24 additional languages available by phone 24/7 — a notably broad language offering for a hospital outside Bangkok. It is one of the few Thai hospitals to accept the U.S. Department of Defense's TRICARE Overseas Program and Foreign Medical Program directly, which is a strong differentiator for American military-affiliated patients. Northern Thailand's cultural draw (Lanna heritage, cooler climate, slower pace) makes this hospital a good fit for patients combining treatment with a wellness-oriented recovery trip.",
    "notes": "",
    "ihcoId": "60003747",
    "imageFile": "/images/hospitals/bangkok-hospital-chiang-mai.jpg"
  },
  {
    "slug": "bangpakok-9-international-hospital",
    "name": "Bangpakok 9 International Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "01 Nov 2013",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty",
      "Orthopedics",
      "Oncology",
      "Health Screenings & Checkups"
    ],
    "specialties": [],
    "departments": "30+ centers covering specialties from orthopedics to cancer care. Technology includes ECG, FibroScan (liver assessment), and CAD/CAM dental/prosthetic systems.",
    "languages": "Interpreters available in 7 languages: Arabic, English, Burmese, Cambodian, Filipino, Bengali, and Chinese",
    "otherAccreditations": [
      "HA (Thailand)",
      "Global Healthcare Accreditation (GHA)"
    ],
    "description": "Bangpakok 9 International Hospital (BPK9), founded in 2003, is part of the BPK Hospital Group — an 8-hospital network founded in 1981 by Dr. Chareong Chandrakamol, which also includes Piyavate Hospital. Located on Rama 2 Road about 30 minutes from Suvarnabhumi Airport, BPK9 operates 30+ specialty centers spanning orthopedics through oncology, and holds triple accreditation — JCI, Thailand's Hospital Accreditation (HA), and Global Healthcare Accreditation (GHA) for international patient services, a relatively unusual combination that signals investment in both clinical quality and international-patient experience specifically. The hospital provides interpreter coverage in 7 languages: Arabic, English, Burmese, Cambodian, Filipino, Bengali, and Chinese — a language mix that reflects strong demand from Southeast Asian and Middle Eastern patient corridors specifically, useful to know if you're targeting those regions.",
    "notes": "",
    "ihcoId": "60000840",
    "imageFile": "/images/hospitals/bangpakok-9-international-hospital.jpg"
  },
  {
    "slug": "chularat-3-theparak-hospital",
    "name": "Chularat 3 Theparak Hospital",
    "city": "Samut Prakan",
    "approved": false,
    "fame": 30,
    "jciProgramType": "Hospital Program",
    "jciSince": "12 Apr 2014",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty"
    ],
    "specialties": [],
    "departments": "Part of the Chularat Hospital Group, a multi-branch private hospital network in the Samut Prakan/eastern Bangkok area. Specific specialty center details not found in sources reviewed.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Chularat 3 Theparak Hospital, JCI accredited since April 2014, is part of the Chularat Hospital Group, a private hospital network serving the Samut Prakan/eastern Bangkok corridor near Suvarnabhumi Airport. Public information specific to this branch's specialty centers, technology, and international patient services was limited in the sources reviewed compared to Bangkok's flagship international hospitals. This hospital is likely best suited as a regional/local-access listing rather than a headline international category listing until further verification is done directly with the hospital.",
    "notes": "",
    "ihcoId": "60001851",
    "imageFile": "/images/hospitals/chularat-3-theparak-hospital.webp"
  },
  {
    "slug": "asia-cosmetic-hospital",
    "name": "Asia Cosmetic Hospital",
    "city": "Nonthaburi",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Ambulatory Care Program",
    "jciSince": "24 Sep 2016",
    "ccpc": [],
    "allCategoriesRaw": [
      "Cosmetic & Plastic Surgery",
      "Bariatric & Weight-Loss Surgery"
    ],
    "specialties": [
      "plastic-surgery",
      "rhinoplasty",
      "weight-loss"
    ],
    "departments": "10-department structure focused on cosmetic plastic surgery and bariatric surgery. 10,000+ successful surgeries performed; 2,500 patients/year. Named Breast Augmentation Clinic of the Year and Face-Lifting Surgery Clinic of the Year — Asia-Pacific (GlobalHealth Aesthetics Awards 2023). Runs a CSR program providing free plastic surgery for disabled individuals since 2013.",
    "languages": "English and Thai confirmed",
    "otherAccreditations": [
      "JCI Ambulatory Care Program (4th Edition",
      "since 2016)",
      "ISO 9001:2015",
      "HA (Healthcare Accreditation Institute)",
      "Institute of Hospital Quality Improvement and Accreditation (HQIA)"
    ],
    "description": "Asia Cosmetic Hospital, founded in 2012, is a JCI-accredited facility in Bangkok specializing exclusively in cosmetic plastic surgery and bariatric (weight-loss) surgery. It reports a 0% post-surgery complication rate and has performed over 10,000 surgeries, treating roughly 2,500 patients annually across a 10-department structure that includes a dedicated International Marketing department. The hospital's principal surgeon, Dr. Tanongsak Panyawirunroj, is an active member of the International Society of Aesthetic Plastic Surgery (ISAPS) and the Royal College of Surgeons Thailand. It won 'Best Regional Hospital' from the Socrates committee in Oxford and was named Breast Augmentation Clinic of the Year and Face-Lifting Surgery Clinic of the Year — Asia-Pacific at the 2023 GlobalHealth Aesthetics Awards. The hospital also runs an ongoing CSR program (since 2013) offering free plastic surgery to people with disabilities. As a single-specialty cosmetic and bariatric surgery facility with strong award recognition, this is a solid secondary listing for your Cosmetic & Plastic Surgery and Bariatric categories, particularly for patients seeking a boutique, specialty-focused facility rather than a large general hospital.",
    "notes": "",
    "ihcoId": "60004929",
    "imageFile": "/images/hospitals/asia-cosmetic-hospital.jpg"
  },
  {
    "slug": "bangkok-hospital-hua-hin",
    "name": "Bangkok Hospital Hua Hin",
    "city": "Prachuap Khiri Khan",
    "approved": true,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "21 Jan 2012",
    "ccpc": [],
    "allCategoriesRaw": [
      "Cardiology",
      "Orthopedics",
      "Oncology",
      "Neurology",
      "Gastroenterology",
      "Urology",
      "Obstetrics & Gynecology",
      "Pediatrics",
      "ENT",
      "Eye Care (Ophthalmology)",
      "Fertility & IVF",
      "Dermatology",
      "Health Screenings & Checkups"
    ],
    "specialties": [
      "fertility-ivf"
    ],
    "departments": "30+ specialized departments, including advanced infertility treatment (ICSI - Intra-Cytoplasmic Sperm Injection), focused shockwave therapy for erectile dysfunction, pelvic muscle electromagnetic therapy, and a Sky ICU air-ambulance transfer capability for critical cases.",
    "languages": "English and Thai confirmed; broader multilingual interpreter support available on request but not independently documented at the same depth as Bangkok's flagship campuses — verify current coverage before publishing specific language claims",
    "otherAccreditations": [
      "HA (Thailand MOPH) — typical of BDMS network hospitals",
      "independent ISO certification not confirmed in public sources",
      "verify directly"
    ],
    "description": "Bangkok Hospital Hua Hin is part of the Bangkok Dusit Medical Services (BDMS) network, located on Phetkasem Road in central Hua Hin, roughly 10 minutes from Hua Hin Airport. It is the most recently JCI-accredited hospital in this dataset among the approved list, receiving its accreditation effective 1 March 2024. The hospital operates more than 30 specialized departments spanning cardiology, orthopedics, oncology, neurology, gastroenterology, urology, obstetrics and gynecology, pediatrics, ENT, and ophthalmology, supported by modern diagnostic imaging (MRI, CT) and a 24/7 emergency department with a Sky ICU capability for rapid critical-care transfers. It is particularly noted for advanced infertility treatments such as ICSI, alongside newer non-surgical offerings like focused shockwave therapy for erectile dysfunction and electromagnetic pelvic floor therapy. As a resort-town hospital, it caters heavily to the large expatriate and long-stay tourist population in Hua Hin, offering tailored medical-tourism packages that combine treatment with wellness/leisure stays, plus direct coordination with international insurers. Language support is confirmed for English and Thai; multilingual staffing beyond that is comparatively less documented than at Bangkok Hospital's larger campuses, so we recommend verifying current interpreter coverage before setting expectations for non-English-speaking patients on the platform.",
    "notes": "",
    "ihcoId": "60000202",
    "imageFile": "/images/hospitals/bangkok-hospital-hua-hin.jpg"
  },
  {
    "slug": "jetanin-ivf-clinic",
    "name": "Jetanin IVF Clinic",
    "city": "Bangkok",
    "approved": false,
    "fame": 40,
    "jciProgramType": "Ambulatory Care Program",
    "jciSince": "22 Jul 2017",
    "ccpc": [],
    "allCategoriesRaw": [
      "Fertility & IVF"
    ],
    "specialties": [
      "fertility-ivf"
    ],
    "departments": "First fertility clinic in Southeast Asia to achieve both JCI and RTAC (Australian Reproductive Technology Accreditation Committee) accreditation. First center in Southeast Asia to successfully treat sterile male partners via TESE/ICSI. Reported a successful live birth after 10 years of frozen egg storage. Services: IUI, IVF, IMSI, PESA/TESE, sperm/embryo freezing, sperm DNA fragmentation testing, preimplantation genetic screening.",
    "languages": "Not specified in detail in sources reviewed — international patient services confirmed but specific language list not published",
    "otherAccreditations": [
      "RTAC (Reproductive Technology Accreditation Committee",
      "Australia)",
      "ISO 15189:2012 (laboratory quality management)",
      "ISO 15190 (medical laboratory safety)"
    ],
    "description": "Jetanin IVF Clinic, established in 1995 (originally as Yotse Clinic), is the only fertility clinic in Southeast Asia accredited by both JCI and Australia's RTAC — a combination that signals particularly rigorous laboratory and clinical governance for a single-specialty facility. It was the first center in the region to successfully treat male infertility using the TESE/ICSI method and holds a notable clinical distinction: a successful live birth following 10 years of frozen egg storage. The clinic operates dedicated embryo, genetics, and sperm laboratories, with all procedures performed by in-house specialists and double-witnessed at each lab step as a quality-control measure. Jetanin participates in annual External Quality Assessment with UK and European genomic quality networks. With 9 reproductive specialists and 20+ beds, it is a single-specialty facility rather than a full hospital — well suited as a high-credibility, specialist listing in your Fertility & IVF category, particularly for male-factor infertility cases where its TESE/ICSI track record is a genuine differentiator.",
    "notes": "",
    "ihcoId": "60004839",
    "imageFile": "/images/hospitals/jetanin-ivf-clinic.webp"
  },
  {
    "slug": "kasemrad-hospital-ramkhamhaeng",
    "name": "Kasemrad Hospital Ramkhamhaeng",
    "city": "Bangkok",
    "approved": false,
    "fame": 30,
    "jciProgramType": "Hospital Program",
    "jciSince": "21 Oct 2023",
    "ccpc": [],
    "allCategoriesRaw": [
      "Orthopedics",
      "General / Multi-specialty"
    ],
    "specialties": [],
    "departments": "Orthopedic Center specializing in minimally invasive and laparoscopic hip and knee replacement surgery. Diagnostic technology includes digital X-ray and 128-slice CT scanning.",
    "languages": "Not specified for this specific branch — verify directly",
    "otherAccreditations": [
      "Part of the Kasemrad Hospital Group (Bangkok Chain Hospital PCL)",
      "which holds group-wide DNV GL",
      "JCI",
      "and Thailand HA accreditations across its 15+ hospitals"
    ],
    "description": "Kasemrad Hospital Ramkhamhaeng is part of the Kasemrad Hospital Group, operated by Bangkok Chain Hospital Public Company Limited (BCH) — Thailand's second-largest hospital chain with 15+ hospitals nationwide and recent international expansion into Laos. JCI accredited since October 2023, this branch is particularly known for its Orthopedic Center, offering minimally invasive and laparoscopic hip and knee replacement surgery supported by digital X-ray and 128-slice CT diagnostic imaging. As part of a larger chain, this hospital benefits from group-wide quality systems and accreditation standards (DNV GL, JCI, Thailand HA), though branch-specific details on language support and broader specialty depth beyond orthopedics were limited in the sources reviewed. Best positioned on your platform as an Orthopedics-focused listing pending direct verification of other specialty offerings.",
    "notes": "",
    "ihcoId": "60010354",
    "imageFile": "/images/hospitals/kasemrad-hospital-ramkhamhaeng.png"
  },
  {
    "slug": "bangkok-hospital-pattaya",
    "name": "Bangkok Hospital Pattaya",
    "city": "Chonburi (Pattaya)",
    "approved": true,
    "fame": 80,
    "jciProgramType": "Hospital Program",
    "jciSince": "19 Sep 2009",
    "ccpc": [
      "Acute Coronary Syndrome (2018)"
    ],
    "allCategoriesRaw": [
      "Cardiology",
      "Neurology & Neurosurgery",
      "Dermatology & Cosmetic Surgery",
      "Spine Surgery",
      "Emergency & Trauma",
      "Health Screenings & Checkups"
    ],
    "specialties": [
      "plastic-surgery",
      "rhinoplasty"
    ],
    "departments": "30 specialized centers including the region's only Heart Center with Bangkok-flagship-level cardiac technology, Brain and Neuro-Science Center, Emergency Medical Services Center, Dermatology and Cosmetic Surgery Center, and Minimally Invasive Spine Surgery Center. JCI CCPC: Acute Coronary Syndrome (2018).",
    "languages": "20+ languages supported through the BDMS international patient network",
    "otherAccreditations": [
      "HA (Thailand MOPH)",
      "Prime Minister's Export Award",
      "Healthcare Asia 6-Star Award (2021)"
    ],
    "description": "Bangkok Hospital Pattaya, part of the Bangkok Dusit Medical Services (BDMS) network, is a 300-bed facility serving Thailand's eastern seaboard and Pattaya's large international tourist and expatriate population. First JCI-accredited in 2009 with subsequent re-accreditations in 2012, 2015, 2018, and 2022, the hospital holds a JCI Clinical Care Program Certification for Acute Coronary Syndrome management. It operates 30 specialized centers, most notably a Heart Center offering the same level of cardiac technology as Bangkok's flagship campus — a significant draw given the region otherwise lacks comparable cardiac capability — alongside a Brain and Neuro-Science Center, a dedicated Emergency Medical Services Center, a Dermatology and Cosmetic Surgery Center, and a Minimally Invasive Spine Surgery Center. Roughly 40% of the hospital's patients come from outside Thailand, drawn from 150+ countries, and the hospital offers services in 20+ languages through the wider BDMS international patient network. It has won the Prime Minister's Export Award and the Healthcare Asia 6-Star Award (2021) in recognition of its medical tourism services. On your platform, this hospital is a strong fit for cardiology and cosmetic/dermatology categories specifically for patients already staying in the Pattaya/Eastern Seaboard resort area, and for emergency/trauma coverage given its dedicated EMS center.",
    "notes": "",
    "ihcoId": "60000443",
    "imageFile": "/images/hospitals/bangkok-hospital-pattaya.webp"
  },
  {
    "slug": "natural-home",
    "name": "Natural Home",
    "city": "Bangkok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Long Term Care Program",
    "jciSince": "02 Nov 2023",
    "ccpc": [],
    "allCategoriesRaw": [
      "Elderly / Long-Term & Home Care"
    ],
    "specialties": [],
    "departments": "JCI-accredited Long Term Care Program facility (accredited November 2023). Specific service scope not detailed in sources reviewed.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Natural Home holds a JCI Long Term Care Program accreditation (since November 2023) in Bangkok — one of only two long-term care facilities and the only one alongside Kluaynamthai2 Geriatric Hospital in this database with this specific JCI program type, distinct from general Hospital Program accreditation. Public information on the facility's specific services, capacity, and international patient support was very limited in the sources reviewed. Given the sensitivity and specialized nature of long-term/elder care services, we strongly recommend direct verification of care scope, staffing ratios, and medical oversight before featuring this facility, particularly if targeting international patients arranging long-term care for elderly family members.",
    "notes": "",
    "ihcoId": "60010190",
    "imageFile": "/images/hospitals/natural-home.jpg"
  },
  {
    "slug": "nonthavej-hospital",
    "name": "Nonthavej Hospital",
    "city": "Bangkok (Bangkhen)",
    "approved": false,
    "fame": 30,
    "jciProgramType": "Hospital Program",
    "jciSince": "25 Jun 2011",
    "ccpc": [],
    "allCategoriesRaw": [
      "Cardiology",
      "Cosmetic & Plastic Surgery",
      "General / Multi-specialty",
      "Orthopedics",
      "Eye Care (Ophthalmology)",
      "Dental Care",
      "Oncology",
      "Gynecology",
      "Bariatric & Weight-Loss Surgery"
    ],
    "specialties": [
      "dental",
      "plastic-surgery",
      "rhinoplasty",
      "weight-loss"
    ],
    "departments": "Comprehensive range including cardiac surgery, cosmetic surgery, general surgery, orthopaedic surgery, eye surgery, dental treatment, cancer treatment, gynaecology, and obesity (bariatric) surgery.",
    "languages": "Not specified in sources reviewed — verify directly",
    "otherAccreditations": [],
    "description": "Nonthavej Hospital, located in Bangkhen, Nonthaburi (Greater Bangkok), is a JCI-accredited private hospital (since June 2011) offering a genuinely broad service range for a mid-sized regional facility: cardiac surgery, cosmetic surgery, general surgery, orthopaedic surgery, eye surgery, dental treatment, cancer treatment, gynaecology, and bariatric/obesity surgery. This breadth suggests a general community-hospital model rather than a specialized international flagship. Detailed information on language support, specific specialty centers, and pricing was not found in the sources reviewed — recommend direct verification before publishing patient-facing details, particularly around international-patient services which are not well documented for this hospital compared to Bangkok's larger international-focused facilities.",
    "notes": "",
    "ihcoId": "60000157",
    "imageFile": "/images/hospitals/nonthavej-hospital.jpg"
  },
  {
    "slug": "vejthani-hospital",
    "name": "Vejthani Hospital",
    "city": "Bangkok (Bangkapi)",
    "approved": true,
    "fame": 70,
    "jciProgramType": "Hospital Program",
    "jciSince": "26 Mar 2010",
    "ccpc": [
      "Infertility (2019)",
      "Lumbar Decompression and Fixation (2017)"
    ],
    "allCategoriesRaw": [
      "Orthopedics",
      "Fertility & IVF",
      "Spine Surgery",
      "Organ Transplant (Kidney)",
      "Dental Care",
      "Bariatric & Weight-Loss Surgery",
      "Endocrinology & Diabetes Care"
    ],
    "specialties": [
      "dental",
      "fertility-ivf",
      "weight-loss"
    ],
    "departments": "Known as 'The King of Bones' — 10,000+ joint replacement surgeries performed. Centers include Orthopedics & Joint Replacement, Spine Center, Fertility Center (IVF/ICSI), Kidney Transplant Center, Dental Center. JCI CCPC: Infertility (2019), Lumbar Decompression and Fixation (2017) — first hospital in the world to receive Hepatitis B CCPC and first in Southeast Asia for Lumbar Decompression and Fixation CCPC.",
    "languages": "Translation services in 20+ languages via dedicated coordinators",
    "otherAccreditations": [
      "Global Healthcare Accreditation (GHA) with Excellence",
      "ISO 15189:2012"
    ],
    "description": "Vejthani Hospital, established in 1994 in Bangkok's Bang Kapi district, is a 263-bed private tertiary hospital best known by its nickname 'The King of Bones' for its orthopedic specialization — having performed more than 10,000 joint replacement surgeries and serving 300,000+ patients from 100+ countries annually. It holds JCI accreditation current through 2028 along with several JCI Clinical Care Program Certifications, including Infertility (2019) and Lumbar Decompression and Fixation (2017); notably, Vejthani was the first hospital in the world to receive a JCI CCPC for Hepatitis B management and the first in Southeast Asia to receive one for Lumbar Decompression and Fixation, underscoring the depth of its clinical protocols beyond general accreditation. Beyond orthopedics and spine, the hospital operates a well-regarded Fertility Center offering IVF/ICSI, a Kidney Transplant program, and a Dental Center. International patients are supported by translation services covering 20+ languages. Given its concentrated clinical strength, Vejthani is best positioned on your platform as a primary listing for Orthopedics, Spine Surgery, and Fertility categories, where its certification depth gives it a genuine differentiation advantage over more generalist hospitals in the same price range.",
    "notes": "Known as 'King of Bones'; 10,000+ joint replacements performed",
    "ihcoId": "60000776",
    "imageFile": "/images/hospitals/vejthani-hospital.jpg"
  },
  {
    "slug": "piyavate-hospital",
    "name": "Piyavate Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "03 Jun 2017",
    "ccpc": [],
    "allCategoriesRaw": [
      "Cardiology",
      "Orthopedics & Spine Surgery",
      "Fertility & IVF",
      "Oncology",
      "Bariatric & Weight-Loss Surgery",
      "Cosmetic & Plastic Surgery",
      "Eye Care (Ophthalmology)",
      "Dental Care",
      "Traditional Medicine"
    ],
    "specialties": [
      "dental",
      "plastic-surgery",
      "rhinoplasty",
      "fertility-ivf",
      "weight-loss"
    ],
    "departments": "20+ specialized medical centers including Heart Center, Bone and Joint Institute, Eye and LASIK Center, Fertility Centre, Oncology Center, Robotic Center, Rehabilitation Center, Diabetic Foot Center, Colorectal Surgery Center, NICU, and a Chinese Medicine Center.",
    "languages": "English, Japanese, Arabic, Chinese, Khmer, Malayalam, Bengali, Mandarin, Vietnamese, Russian, and Myanmar reported; patients from 40+ countries served",
    "otherAccreditations": [
      "Hospital Accreditation Institute (HA/PHO)",
      "ISO 9001:2008"
    ],
    "description": "Piyavate Hospital, operating since 1993, is a 150-bed JCI-accredited private hospital in Bangkok's Huai Khwang district, part of the BPK Hospital Group (which also owns Bangpakok 9). It positions itself as a referral center for complex cases, with 20+ specialized centers spanning cardiology, orthopedics/spine, fertility, oncology, minimally invasive and robotic surgery, and even a Chinese Medicine Center — an unusual inclusion that could differentiate it for patients interested in integrated Western/traditional care. Reported language coverage is unusually broad for a mid-sized hospital: English, Japanese, Arabic, Chinese, Khmer, Malayalam, Bengali, Mandarin, Vietnamese, Russian, and Myanmar, serving patients from 40+ countries. Given its Fertility Centre's strong reputation (cited in industry rankings as a leading IVF option) and broad specialty base, Piyavate is a solid secondary listing across cardiology, orthopedics, and fertility categories.",
    "notes": "",
    "ihcoId": "60006071",
    "imageFile": "/images/hospitals/piyavate-hospital.jpg"
  },
  {
    "slug": "ruamjairak-hospital",
    "name": "Ruamjairak Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "20 Dec 2025",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty"
    ],
    "specialties": [],
    "departments": "Not detailed in sources reviewed — very recently JCI accredited.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Ruamjairak Hospital received JCI Hospital Program accreditation on 20 December 2025, making it the most recently accredited facility in this entire database. As a result, public information — specialty centers, pricing, international patient services, language support — is essentially unavailable in the sources reviewed; the accreditation is too recent for third-party medical tourism directories, review platforms, or press coverage to have caught up. Recommend treating this as a facility to revisit for research once more public information becomes available, or contacting the hospital directly if you want to feature it now.",
    "notes": "",
    "ihcoId": "60011794",
    "imageFile": "/images/hospitals/ruamjairak-hospital.webp"
  },
  {
    "slug": "sikarin-hatyai-hospital",
    "name": "Sikarin Hatyai Hospital",
    "city": "Hat Yai, Songkhla",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "20 Feb 2015",
    "ccpc": [
      "Acute Ischemic Stroke (2023)"
    ],
    "allCategoriesRaw": [
      "General / Multi-specialty",
      "Neurology"
    ],
    "specialties": [],
    "departments": "JCI Clinical Care Program Certification for Acute Ischemic Stroke (2023), indicating a specific strength in stroke care protocols.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Sikarin Hatyai Hospital, located in Hat Yai, Songkhla province (southern Thailand, near the Malaysian border), is JCI accredited since February 2015 and holds a JCI Clinical Care Program Certification specifically for Acute Ischemic Stroke management (2023) — a meaningful clinical credential suggesting above-average stroke care protocols for a regional hospital. It's part of the wider Sikarin hospital network (alongside Sikarin Hospital in Bangkok). Detailed information on broader specialty coverage, language support, and pricing for this specific branch was not found in the sources reviewed. Its location makes it a relevant option for patients in the far south of Thailand or arriving via Hat Yai International Airport, and its stroke-care certification is worth highlighting specifically if you list it.",
    "notes": "",
    "ihcoId": "60003265",
    "imageFile": "/images/hospitals/sikarin-hatyai-hospital.jpg"
  },
  {
    "slug": "synphaet-theparak-hospital",
    "name": "Synphaet Theparak Hospital",
    "city": "Samut Prakan",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "14 May 2021",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty"
    ],
    "specialties": [],
    "departments": "Part of the Synphaet Hospital network (sister facilities: Synphaet Hospital, Synphaet Srinakarin, Synphaet Lamlukka, Synphaet Seriruk). Specific center details for this branch not found in sources reviewed.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Synphaet Theparak Hospital, JCI accredited since May 2021, is one of five hospitals in the Synphaet network serving the Samut Prakan/eastern Bangkok area, alongside Synphaet Hospital (Khan Na Yao), Synphaet Srinakarin, Synphaet Lamlukka, and Synphaet Seriruk. Public information specific to this branch's specialty centers and international patient services was limited in the sources reviewed — the Synphaet network's public-facing content is generally less internationally-oriented than BDMS or Samitivej facilities. Best treated as a regional/local-access listing pending direct verification.",
    "notes": "",
    "ihcoId": "60008861",
    "imageFile": "/images/hospitals/synphaet-theparak-hospital.jpg"
  },
  {
    "slug": "princ-hospital-suvarnabhumi",
    "name": "PRINC Hospital Suvarnabhumi",
    "city": "Samut Prakan",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "15 Mar 2023",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty"
    ],
    "specialties": [],
    "departments": "Part of PRINC Healthcare/Vibhavadi Hospital network. Specific specialty center details not found in sources reviewed.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "PRINC Hospital Suvarnabhumi, JCI accredited since March 2023, is located in Samut Prakan near Suvarnabhumi Airport and is part of the PRINC Healthcare hospital network. Its airport-adjacent location could make it a convenient option for patients with tight travel connections or emergency layover needs, but detailed public information on its specialty centers, technology, and international patient services was not found in the sources reviewed. Recommend direct verification before publishing detailed claims.",
    "notes": "",
    "ihcoId": "60009506",
    "imageFile": "/images/hospitals/princ-hospital-suvarnabhumi.jpg"
  },
  {
    "slug": "pitsanuvej-hospital",
    "name": "Pitsanuvej Hospital",
    "city": "Phitsanulok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "21 Dec 2012",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty"
    ],
    "specialties": [],
    "departments": "Regional general hospital serving Phitsanulok province, northern Thailand. Specific specialty details not found in sources reviewed.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Pitsanuvej Hospital, JCI accredited since December 2012, serves Phitsanulok province in northern Thailand — a region with limited private hospital options compared to Bangkok, Chiang Mai, or Phuket. Detailed information on its specialty centers, international patient services, and language support was not found in the sources reviewed. This hospital is likely most relevant to your platform as a regional-access option for patients already in or near Phitsanulok rather than a primary international medical tourism destination — recommend direct verification if you plan to feature it prominently.",
    "notes": "",
    "ihcoId": "60000340",
    "imageFile": "/images/hospitals/pitsanuvej-hospital.webp"
  },
  {
    "slug": "sukumvit-hospital",
    "name": "Sukumvit Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 20,
    "jciProgramType": "Hospital Program",
    "jciSince": "29 Apr 2015",
    "ccpc": [
      "Diabetes Mellitus (2023)"
    ],
    "allCategoriesRaw": [
      "Orthopedics",
      "Organ Transplant (Kidney)",
      "Cosmetic & Plastic Surgery",
      "Spine Surgery",
      "Stem Cell & Regenerative Medicine (Bone Marrow Transplant)",
      "Gastroenterology",
      "Endocrinology & Diabetes Care"
    ],
    "specialties": [
      "plastic-surgery",
      "rhinoplasty"
    ],
    "departments": "20 specialties and centers of excellence, notably: bone marrow transplant, robotic spinal surgery, total joint replacement, kidney transplant, plastic surgery, skin & laser treatment, spine scoliosis surgery, and hand & shoulder surgery. Also covers breast cancer/surgery, digestive & liver disease, nephrology, OB-GYN, neurology, ophthalmology, ENT, and diabetes care. JCI CCPC: Diabetes Mellitus (2023).",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Sukumvit Hospital, founded in 1977 on the historic Sukhumvit Road in Bangkok, is a JCI-accredited private hospital (since April 2015) offering a notably deep specialty list for a mid-sized facility — including bone marrow transplant, robotic spinal surgery, total joint replacement, kidney transplant, and hand & shoulder surgery, supported by a 128-slice CT scanner and a well-equipped rehabilitation center (hyperbaric chamber, TMS room, EMG acupuncture room). It holds a JCI Clinical Care Program Certification for Diabetes Mellitus management (2023). With roughly 243-280 inpatient beds and capacity for 2,000+ patients daily across 97 diagnostic rooms, it is a sizeable general hospital with genuine depth in orthopedics, spine, and transplant medicine. Language support and pricing were not detailed in the sources reviewed — recommend direct verification, but the clinical specialty depth alone makes this a candidate for your Orthopedics and Organ Transplant category listings.",
    "notes": "",
    "ihcoId": "60001796",
    "imageFile": "/images/hospitals/sukumvit-hospital.webp"
  },
  {
    "slug": "synphaet-srinakarin-hospital",
    "name": "Synphaet Srinakarin Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "24 Apr 2021",
    "ccpc": [],
    "allCategoriesRaw": [
      "Cardiology",
      "Gastroenterology",
      "Orthopedics",
      "Gynecology",
      "General / Multi-specialty",
      "Dermatology"
    ],
    "specialties": [],
    "departments": "Multi-disciplinary services across cardiology, gastroenterology, orthopedic, gynecology and obstetrics, internal medicine, and dermatology, supported by internationally-aligned clinical standards.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Synphaet Srinakarin Hospital, JCI accredited since April 2021, is part of the Synphaet Hospital network serving the Srinakarin/eastern Bangkok corridor. It provides integrated diagnostic, medical, and surgical services across cardiology, gastroenterology, orthopedics, gynecology and obstetrics, internal medicine, and dermatology. As with its sister Synphaet facilities, detailed information on international patient services, language support, and specific technology/pricing was limited in the sources reviewed. Best treated as a regional general-hospital listing pending direct verification of international-patient-specific services.",
    "notes": "",
    "ihcoId": "60008863",
    "imageFile": "/images/hospitals/synphaet-srinakarin-hospital.jpg"
  },
  {
    "slug": "the-world-medical-hospital",
    "name": "The World Medical Hospital",
    "city": "Nonthaburi (Pak Kret)",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "12 Dec 2014",
    "ccpc": [],
    "allCategoriesRaw": [
      "Cardiology",
      "Neurology",
      "Stem Cell & Regenerative Medicine",
      "Fertility & IVF",
      "Endocrinology & Diabetes Care",
      "Oncology",
      "Pediatrics",
      "Cosmetic & Plastic Surgery"
    ],
    "specialties": [
      "plastic-surgery",
      "rhinoplasty",
      "fertility-ivf"
    ],
    "departments": "Heart Center, Stroke Center, Advanced Surgery, Advanced Orthopedics, a dedicated Regenerative Medicine Center, Diabetic Foot Center, Aesthetic and Plastic Surgery Center, Obstetrics and Gynecology Center, Hemodialysis Center, IVF, Kidney Center, Diabetes/Thyroid/Endocrine Center, Medical Oncology Center, Advanced Pediatric Center, and a psychiatry clinic.",
    "languages": "Not specified in sources reviewed — verify directly",
    "otherAccreditations": [
      "Part of Bangkok Chain Hospital PCL (BCH) network"
    ],
    "description": "The World Medical Hospital, operating since 2013 under Bangkok Chain Hospital PCL (BCH) in Nonthaburi province (Greater Bangkok), is a 160-bed facility notable for having a dedicated Regenerative Medicine Center alongside its Heart Center, Stroke Center, and standard surgical/orthopedic services — one of relatively few hospitals in this database explicitly branding a stem cell/regenerative medicine service line. It also runs a Medical Oncology Center, an Advanced Pediatric Center, IVF services, and a Diabetic Foot Center. JCI accredited since December 2014. As part of the BCH network (which also includes the Kasemrad hospital group), it benefits from group-wide quality systems. Given its explicit regenerative medicine positioning, this hospital is worth flagging specifically for your Stem Cell & Regenerative Medicine and Anti-Aging & Longevity categories — though we recommend verifying the actual regenerative medicine protocols and evidence base directly, since this field varies significantly in regulatory rigor between providers.",
    "notes": "",
    "ihcoId": "60001260",
    "imageFile": "/images/hospitals/the-world-medical-hospital.jpg"
  },
  {
    "slug": "umc-digital-ai-pet-ct-center",
    "name": "UMC Digital AI PET/CT Center",
    "city": "Bangkok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Ambulatory Care Program",
    "jciSince": "26 Sep 2024",
    "ccpc": [],
    "allCategoriesRaw": [
      "Health Screenings & Executive Checkups",
      "Oncology (Diagnostic Imaging)"
    ],
    "specialties": [],
    "departments": "Dedicated AI-assisted PET/CT diagnostic imaging center — a specialized ambulatory diagnostic facility rather than a treatment hospital, primarily relevant for cancer detection/staging imaging.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "UMC Digital AI PET/CT Center is a JCI-accredited Ambulatory Care Program facility in Bangkok (accredited September 2024), specializing in AI-assisted PET/CT diagnostic imaging — most commonly used for cancer detection, staging, and monitoring, as well as certain neurological and cardiac diagnostic applications. As a diagnostic-only center rather than a treatment hospital, it would function best on your platform as a referral/diagnostic partner listing (e.g., paired with an oncology treatment hospital) rather than a standalone treatment category listing. Detailed public information on pricing, languages, and referral pathways was not found in the sources reviewed — recommend direct verification.",
    "notes": "",
    "ihcoId": "60011060",
    "imageFile": "/images/hospitals/umc-digital-ai-pet-ct-center.jpg"
  },
  {
    "slug": "vichaiyut-hospital-and-vichaiyut-medical-center-hospital",
    "name": "Vichaiyut Hospital and Vichaiyut Medical Center Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "23 Nov 2024",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty",
      "Cardiology",
      "Neurology",
      "Oncology",
      "Orthopedics",
      "Pediatrics"
    ],
    "specialties": [],
    "departments": "Comprehensive range including general surgery, orthopedics, cardiology, neurology, oncology, and pediatrics. Also operates as a teaching hospital with internship, residency, and fellowship programs, and runs a dedicated research center for cancer, cardiology, and neurology.",
    "languages": "Translation services provided for patients who don't speak English or Thai; specific language list not detailed — verify directly",
    "otherAccreditations": [
      "HA (Healthcare Accreditation Institute",
      "Thailand)",
      "royal permission to use the Garuda emblem (granted 2004) — the only private hospital in Thailand with this distinction"
    ],
    "description": "Vichaiyut Hospital, founded in 1993 by Dr. Vichaiyut Chongcharoensukying in the Samsen Nai district of Phaya Thai, Bangkok, is a JCI-accredited teaching hospital with a notable distinction: it is the only private hospital in Thailand granted royal permission to use the Garuda emblem (a mark of official government/royal endorsement), awarded in 2004. Beyond routine care across general surgery, orthopedics, cardiology, neurology, oncology, and pediatrics, the hospital runs active medical education programs (internships, residencies, fellowships) and a dedicated research center focused on cancer, cardiology, and neurology, including participation in clinical trials. It has a dedicated International Medical Center offering language support, visa application assistance, and travel/accommodation coordination. As a teaching and research hospital with royal recognition, Vichaiyut carries a credibility signal distinct from purely commercial medical tourism hospitals — worth highlighting if you want to differentiate listings by institutional pedigree.",
    "notes": "",
    "ihcoId": "60010760",
    "imageFile": "/images/hospitals/vichaiyut-hospital-and-vichaiyut-medical-center-hospital.jpg"
  },
  {
    "slug": "wattanapat-hospital-ao-nang",
    "name": "Wattanapat Hospital Ao Nang",
    "city": "Krabi",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "10 Oct 2020",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty",
      "Emergency & Trauma"
    ],
    "specialties": [],
    "departments": "Regional hospital serving the Ao Nang/Krabi tourist area. Specific specialty center details not found in sources reviewed.",
    "languages": "Not specified — verify directly, though tourist-area location suggests at least basic English support",
    "otherAccreditations": [],
    "description": "Wattanapat Hospital Ao Nang, JCI accredited since October 2020, serves the Ao Nang/Krabi resort area in southern Thailand — a major beach tourism destination. Given its location in a heavily tourist-trafficked area, it likely handles a meaningful volume of travel-related injuries, general medical needs, and emergency care for visitors, though detailed specialty center information and language support were not found in the sources reviewed. This hospital is likely most useful on your platform as a regional safety-net / emergency-care listing for tourists in the Krabi/Ao Nang area rather than a planned medical tourism destination — recommend direct verification before publishing.",
    "notes": "",
    "ihcoId": "60008352",
    "imageFile": "/images/hospitals/wattanapat-hospital-ao-nang.jpg"
  },
  {
    "slug": "queen-sirikit-heart-center-of-the-northeast",
    "name": "Queen Sirikit Heart Center of the Northeast",
    "city": "Khon Kaen",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "26 Aug 2017",
    "ccpc": [],
    "allCategoriesRaw": [
      "Cardiology"
    ],
    "specialties": [],
    "departments": "Dedicated tertiary-level cardiovascular disease center affiliated with Khon Kaen University's Faculty of Medicine, combining clinical care with active cardiovascular research. Mission includes expanding cardiac care services to the broader ASEAN region.",
    "languages": "Not specified in sources reviewed — as an academic/university hospital, English support level should be verified directly",
    "otherAccreditations": [
      "HA (Healthcare Quality Accreditation Institute",
      "Thailand)",
      "JCI re-accredited for a second term (March 2024 - March 2027)",
      "received an 'Outstanding Hospital' award for cardiac patient data management (April 2026)"
    ],
    "description": "Queen Sirikit Heart Center of the Northeast is a specialized academic cardiovascular hospital affiliated with Khon Kaen University's Faculty of Medicine — a public/academic institution rather than a private hospital, which is a distinct profile from most others in this database. It is Thailand's northeastern (Isaan) region's dedicated tertiary-level center for cardiovascular disease treatment and research, with an explicit mission to extend cardiac care services across the ASEAN region. The center received its second JCI re-accreditation (valid March 2024-2027) and holds Thailand's HA quality certification, and was recognized with an 'Outstanding Hospital' award for cardiac patient data management in April 2026. As a public academic center, pricing structures and international-patient-specific services likely differ meaningfully from private hospitals — recommend verifying the international patient pathway directly, as academic hospitals sometimes have less-developed international patient infrastructure despite excellent clinical quality. Worth featuring specifically for your Cardiology category, particularly for patients seeking academic-hospital-grade cardiac research and treatment outside Bangkok.",
    "notes": "",
    "ihcoId": "60005681",
    "imageFile": "/images/hospitals/queen-sirikit-heart-center-of-the-northeast.webp"
  },
  {
    "slug": "samitivej-srinakarin-hospital",
    "name": "Samitivej Srinakarin Hospital",
    "city": "Bangkok",
    "approved": true,
    "fame": 80,
    "jciProgramType": "Hospital Program",
    "jciSince": "11 Aug 2007",
    "ccpc": [],
    "allCategoriesRaw": [
      "Pediatrics",
      "Cardiology",
      "Oncology",
      "Orthopedics & Spine Surgery",
      "Fertility & IVF",
      "Cosmetic & Plastic Surgery",
      "Gastroenterology & Liver",
      "Stem Cell & Regenerative Medicine",
      "Neurology & Neurosurgery",
      "Emergency & Trauma"
    ],
    "specialties": [
      "plastic-surgery",
      "rhinoplasty",
      "fertility-ivf"
    ],
    "departments": "35+ medical and surgical departments including Spine & Revision Spine Center, Bone and Joint Center, Liver & Digestive Institute, Heart Institute, Bone Marrow & Stem Cell Transplantation Center, Breast Center, Fertility Centre, Neurology Centre, Plastic & Aesthetic Surgery Institute, and Samitivej Srinakarin Children's Hospital — Thailand's first private children's hospital.",
    "languages": "Bilingual Thai/English core team; broader Samitivej Group multilingual resources (English, Japanese, Arabic, Mandarin) available through the group's international patient network",
    "otherAccreditations": [
      "HA (Thailand MOPH)",
      "WHO/UNICEF Mother & Baby-Friendly Hospital certification",
      "JCI Certificate of Distinction for Childhood Asthma Program (7 consecutive years through 2018)"
    ],
    "description": "Samitivej Srinakarin Hospital, opened in 1979 in eastern Bangkok near Suvarnabhumi Airport, is a 400+ bed multispecialty tertiary hospital and a flagship of the Samitivej Hospital Group (part of BDMS). It has held continuous JCI accreditation since 2007/2008 and is certified by WHO, UNICEF, and Thailand's Ministry of Public Health as a Mother & Baby-Friendly Hospital. The hospital houses Samitivej Srinakarin Children's Hospital, Thailand's first private children's hospital, alongside 35+ specialty centers spanning cardiology (Heart Institute), oncology (Breast Center), orthopedics and spine (Bone and Joint Center, Spine & Revision Spine Center), fertility, gastroenterology/hepatology (Liver & Digestive Institute), neurology, plastic and aesthetic surgery, and a Bone Marrow & Stem Cell Transplantation Center. Facilities include a 40-bed Critical Care Complex, 12 operating theaters, and an Emergency Air Ambulance service reaching 30+ domestic airports. More than 530 specialist physicians support the hospital, many trained at institutions such as Johns Hopkins and Harvard. International patients receive dedicated support for visas, embassy liaison, interpretation, accommodation, and transportation. Given its pediatric heritage and Mother & Baby-Friendly status, this hospital is a strong anchor listing for your Fertility, Pediatrics, and Maternity/Obstetrics categories, while its Bone Marrow & Stem Cell Transplantation Center also supports Stem Cell & Regenerative Medicine listings.",
    "notes": "",
    "ihcoId": "60000570",
    "imageFile": "/images/hospitals/samitivej-srinakarin-hospital.webp"
  },
  {
    "slug": "sikarin-hospital",
    "name": "Sikarin Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 30,
    "jciProgramType": "Hospital Program",
    "jciSince": "24 Nov 2012",
    "ccpc": [
      "Acute Myocardial Infarction (2016)",
      "Primary Stroke (2014)"
    ],
    "allCategoriesRaw": [
      "Gastroenterology",
      "Nephrology (Kidney Care)",
      "Endocrinology & Diabetes Care",
      "Cardiology",
      "Neurology"
    ],
    "specialties": [],
    "departments": "Recognized for affordability combined with quality, particularly in gastroenterology, kidney care (dialysis and transplant), and diabetes management. JCI CCPC: Acute Myocardial Infarction (2016), Primary Stroke (2014). Modern facilities include a hybrid operating room.",
    "languages": "Multilingual staff for international visitors — specific language list not detailed, verify directly",
    "otherAccreditations": [],
    "description": "Sikarin Hospital, JCI accredited since November 2012, is positioned in industry comparisons as one of Bangkok's more affordable JCI-accredited hospitals without compromising on quality — a useful positioning if your platform wants a value-tier option alongside premium flagships like Bumrungrad or MedPark. It holds two JCI Clinical Care Program Certifications: Acute Myocardial Infarction (2016) and Primary Stroke (2014), and is particularly recognized for gastroenterology, kidney care (including dialysis and transplant), and diabetes management — chronic disease areas that are less commonly highlighted by cosmetic/surgical-focused hospitals. Modern facilities include a hybrid operating room and advanced imaging. Multilingual staff are confirmed to support international visitors, though a specific language list wasn't detailed in sources reviewed. This hospital is a good candidate for your Endocrinology & Diabetes Care and general chronic-care categories, and as a mid-price-point alternative within Cardiology.",
    "notes": "",
    "ihcoId": "60000181",
    "imageFile": "/images/hospitals/sikarin-hospital.webp"
  },
  {
    "slug": "siriraj-piyamaharajkarun-hospital",
    "name": "Siriraj Piyamaharajkarun Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 70,
    "jciProgramType": "Hospital Program",
    "jciSince": "21 Dec 2013",
    "ccpc": [
      "Hip Replacement (2021)",
      "Knee Replacement (2014)"
    ],
    "allCategoriesRaw": [
      "General / Multi-specialty",
      "Orthopedics",
      "Health Screenings & Executive Checkups"
    ],
    "specialties": [],
    "departments": "Full-spectrum tertiary academic hospital care under Mahidol University. JCI CCPC: Hip Replacement (2021), Knee Replacement (2014).",
    "languages": "Not specified in sources reviewed — as an academic hospital, verify directly",
    "otherAccreditations": [],
    "description": "Siriraj Piyamaharajkarun Hospital, located by the Chao Phraya River in Bangkok's Thonburi district, is a tertiary academic hospital affiliated with Mahidol University and holds the distinction of being the first JCI-accredited PUBLIC hospital in Thailand (accredited December 2013) — a meaningfully different institutional profile from the private hospitals that dominate this database. It holds JCI Clinical Care Program Certifications for both Hip Replacement (2021) and Knee Replacement (2014), giving it credible, specific orthopedic credentials. As with other academic/public hospitals, international patient services and pricing structures likely differ from private flagship hospitals — patient reviews describe it as blending Thai hospitality with international healthcare standards and offering affordable packages. Worth featuring for patients seeking academic-hospital-grade care (particularly orthopedic joint replacement) at a different price point than Bangkok's private international hospitals, though international-patient-specific services should be verified directly given its academic/public hospital structure.",
    "notes": "First JCI-accredited PUBLIC hospital in Thailand (Mahidol University)",
    "ihcoId": "60001643",
    "imageFile": "/images/hospitals/siriraj-piyamaharajkarun-hospital.jpg"
  },
  {
    "slug": "srisawan-hospital",
    "name": "Srisawan Hospital",
    "city": "Nakhon Sawan",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "01 Mar 2014",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty"
    ],
    "specialties": [],
    "departments": "Regional general hospital serving Nakhon Sawan province. Specific specialty details not found in sources reviewed.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Srisawan Hospital, JCI accredited since March 2014, serves Nakhon Sawan province in central Thailand. Detailed public information on its specialty centers, international patient services, and language support was not found in the sources reviewed. Likely best positioned as a regional-access listing for patients already in or near Nakhon Sawan rather than a primary international medical tourism destination — recommend direct verification before featuring prominently.",
    "notes": "",
    "ihcoId": "60001745",
    "imageFile": "/images/hospitals/srisawan-hospital.jpg"
  },
  {
    "slug": "vimut-hospital",
    "name": "ViMUT Hospital",
    "city": "Bangkok (Phaya Thai)",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "16 Nov 2024",
    "ccpc": [],
    "allCategoriesRaw": [
      "Cosmetic & Plastic Surgery",
      "Bariatric & Weight-Loss Surgery",
      "Orthopedics",
      "Anti-Aging & Longevity Medicine",
      "Elderly / Long-Term & Home Care (Geriatric Center)"
    ],
    "specialties": [
      "plastic-surgery",
      "rhinoplasty",
      "weight-loss"
    ],
    "departments": "236-bed, 18-story tertiary care facility. Notable service lines: Plastic Surgery and Weight Loss (Gastric Sleeve) Surgery, a dedicated Anti-Aging program with patient success stories and packages, and a Geriatric Center for aging-population care.",
    "languages": "English, Japanese, and Chinese confirmed for the International Healthcare Center; broader coverage not detailed",
    "otherAccreditations": [
      "HA (Thailand)",
      "ISO"
    ],
    "description": "ViMUT Hospital, established in May 2021 in Bangkok's business district, is a newer 236-bed, 18-story tertiary care facility affiliated with Pruksa Holding Public Company Limited, designed in accordance with JCI standards. It has developed a notably strong Anti-Aging and Longevity service line — with dedicated packages, patient-facing video content, and named programs — alongside Plastic Surgery, Bariatric (Gastric Sleeve) Surgery, and a Geriatric Center addressing Thailand's aging population. Its International Healthcare Center offers multilingual medical staff in at least English, Japanese, and Chinese. As one of the few hospitals in this database with an explicit, marketed Anti-Aging & Longevity Medicine service line, ViMUT is a strong candidate to anchor that specific category on your platform — worth verifying the clinical protocols and evidence base behind its longevity offerings directly, as this field varies in rigor across providers.",
    "notes": "",
    "ihcoId": "60010782",
    "imageFile": "/images/hospitals/vimut-hospital.webp"
  },
  {
    "slug": "navamin-9-hospital",
    "name": "Navamin 9 Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "18 May 2013",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty"
    ],
    "specialties": [],
    "departments": "Regional Bangkok general hospital. Specific specialty details not found in sources reviewed.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Navamin 9 Hospital, JCI accredited since May 2013, is a general hospital in Bangkok. Detailed public information on its specialty centers, international patient services, and language support was not found in the sources reviewed — this facility has limited presence in medical tourism-focused directories compared to Bangkok's internationally-marketed hospitals. Recommend direct verification before featuring prominently on your platform.",
    "notes": "",
    "ihcoId": "60000392",
    "imageFile": "/images/hospitals/navamin-9-hospital.png"
  },
  {
    "slug": "phyathai-2-hospital",
    "name": "Phyathai 2 Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "24 May 2014",
    "ccpc": [
      "Infertility - voluntarily withdrawn (2022)"
    ],
    "allCategoriesRaw": [
      "Cardiology",
      "Neurology",
      "Oncology",
      "Orthopedics",
      "Fertility & IVF"
    ],
    "specialties": [
      "fertility-ivf"
    ],
    "departments": "500+ inpatient beds, 60+ medical departments/sub-specialties, 20+ operating theaters, 70+ ICU beds. Heart Center established in cooperation with Harvard Medical International, featuring a hybrid operating room. Note: the hospital's JCI Clinical Care Program Certification for Infertility was voluntarily withdrawn in 2022 — worth confirming current fertility program status before listing it under that category.",
    "languages": "Multilingual services and interpreters confirmed available; specific language list not detailed — verify directly",
    "otherAccreditations": [
      "Part of the Phyathai Hospital Group (founded 1976)"
    ],
    "description": "Phyathai 2 Hospital, established in 1987 on Phaholyothin Road in Bangkok, is part of the Phyathai Hospital Group (founded 1976, also including Phyathai 1 and Phyathai 3). It is a large facility — 500+ beds, 60+ departments, 20+ operating theaters, and 70+ ICU beds — serving over 700,000 patients annually. Its Heart Center was established in cooperation with Harvard Medical International and includes a hybrid operating room for advanced cardiac procedures. One notable flag: JCI records show the hospital's Infertility Clinical Care Program Certification was voluntarily withdrawn in 2022 — this doesn't necessarily mean the fertility program closed, but it's worth confirming current status directly before featuring Phyathai 2 under your Fertility category, since a withdrawn certification is a detail patients researching credentials may notice. The hospital's International Relations Center provides airport transfer, accommodation, and visa assistance for international patients.",
    "notes": "",
    "ihcoId": "60002029",
    "imageFile": "/images/hospitals/phyathai-2-hospital.webp"
  },
  {
    "slug": "prachachuen-imaging-center",
    "name": "Prachachuen Imaging Center",
    "city": "Bangkok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Ambulatory Care Program",
    "jciSince": "03 Feb 2022",
    "ccpc": [],
    "allCategoriesRaw": [
      "Health Screenings & Executive Checkups",
      "Diagnostic Imaging"
    ],
    "specialties": [],
    "departments": "Dedicated ambulatory diagnostic imaging center. Specific imaging modalities and specialties not detailed in sources reviewed.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Prachachuen Imaging Center is a JCI-accredited Ambulatory Care Program diagnostic imaging facility in Bangkok (accredited February 2022). As a diagnostic-only center, it would function best on your platform as a referral/diagnostic partner rather than a standalone treatment listing. Detailed information on imaging modalities offered, pricing, and international patient support was not found in the sources reviewed — recommend direct verification.",
    "notes": "",
    "ihcoId": "60009354",
    "imageFile": "/images/hospitals/prachachuen-imaging-center.jpg"
  },
  {
    "slug": "rachvipa-mri-center",
    "name": "Rachvipa MRI Center",
    "city": "Bangkok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Ambulatory Care Program",
    "jciSince": "21 Mar 2014",
    "ccpc": [],
    "allCategoriesRaw": [
      "Health Screenings & Executive Checkups",
      "Diagnostic Imaging"
    ],
    "specialties": [],
    "departments": "Dedicated ambulatory MRI diagnostic imaging center in Bangkok.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Rachvipa MRI Center is a JCI-accredited Ambulatory Care Program diagnostic imaging facility in Bangkok specializing in MRI imaging, accredited since March 2014 — making it one of the longer-standing ambulatory-only JCI accreditations in Thailand, predating several full hospitals in this database. As a diagnostic-only center, it fits best as a referral/diagnostic partner listing (paired with treatment-focused hospitals) rather than a standalone treatment category. Pricing and international patient support details were not found in sources reviewed — recommend direct verification.",
    "notes": "",
    "ihcoId": "60001687",
    "imageFile": "/images/hospitals/rachvipa-mri-center.jpg"
  },
  {
    "slug": "ramathibodi-chakri-naruebodindra-hospital",
    "name": "Ramathibodi Chakri Naruebodindra Hospital",
    "city": "Samut Prakan",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "12 Oct 2019",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty",
      "Health Screenings & Executive Checkups"
    ],
    "specialties": [],
    "departments": "Academic tertiary hospital affiliated with Mahidol University's Faculty of Medicine Ramathibodi Hospital, located in Samut Prakan. Part of a broader Ramathibodi medical campus that includes the Queen Sirikit Medical Center.",
    "languages": "Not specified in sources reviewed — as an academic hospital, verify directly",
    "otherAccreditations": [],
    "description": "Ramathibodi Chakri Naruebodindra Hospital, JCI accredited since October 2019, is an academic tertiary care hospital in Samut Prakan affiliated with Mahidol University's Faculty of Medicine Ramathibodi Hospital — one of Thailand's most prestigious medical schools and public teaching hospitals. As with other academic institutions in this database (Siriraj Piyamaharajkarun, Queen Sirikit Heart Center), it likely offers strong clinical quality and research-backed care at different pricing and service structures than private international hospitals, but detailed international-patient-facing information was not found in the sources reviewed. Recommend direct verification of international patient pathways before featuring prominently — academic hospitals in Thailand sometimes have less-developed medical tourism infrastructure despite excellent underlying clinical quality.",
    "notes": "",
    "ihcoId": "60008031",
    "imageFile": "/images/hospitals/ramathibodi-chakri-naruebodindra-hospital.jpg"
  },
  {
    "slug": "synphaet-hospital",
    "name": "Synphaet Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 40,
    "jciProgramType": "Hospital Program",
    "jciSince": "21 May 2010",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty"
    ],
    "specialties": [],
    "departments": "Flagship hospital of the Synphaet network, located in the Khan Na Yao district of Bangkok. Broad range of general medical treatments and services.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Synphaet Hospital, JCI accredited since May 2010, is the founding/flagship facility of the Synphaet hospital network in Bangkok's Khan Na Yao district, with sister branches at Srinakarin, Theparak, Lamlukka, and Seriruk. It is described as a well-equipped facility handling a wide range of general medical needs. Detailed information on specific specialty centers, international patient services, and pricing was not found in the sources reviewed — the Synphaet network generally has less internationally-oriented public content than BDMS or Samitivej facilities. Recommend direct verification before featuring prominently for international patients.",
    "notes": "",
    "ihcoId": "60000050",
    "imageFile": "/images/hospitals/synphaet-hospital.webp"
  },
  {
    "slug": "yanhee-hospital",
    "name": "Yanhee Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 30,
    "jciProgramType": "Hospital Program",
    "jciSince": "22 Jan 2011",
    "ccpc": [],
    "allCategoriesRaw": [
      "Cosmetic & Plastic Surgery",
      "Gender-Affirming Care",
      "Dental Care",
      "Dermatology",
      "Bariatric & Weight-Loss Surgery",
      "Cardiology",
      "Fertility & IVF"
    ],
    "specialties": [
      "dental",
      "plastic-surgery",
      "rhinoplasty",
      "fertility-ivf",
      "weight-loss"
    ],
    "departments": "36 treatment centers; 18 board-certified plastic surgeons (all members of the Society of Plastic and Reconstructive Surgeons of Thailand) — the only private hospital in Thailand with a team this size dedicated to cosmetic/reconstructive surgery. Known internationally for gender-affirming surgery expertise (a famous early patient was Muay Thai boxer-turned-actress Nong Toom). Runs 'Operation Bright Smile,' providing 100+ free cleft lip/palate surgeries annually for children (1,115+ helped over 14+ years). Also operates a dedicated 'Dear Heart Center' for cardiovascular care.",
    "languages": "Interpreter/coordination services confirmed in English, Arabic, Chinese, Japanese, Korean, Vietnamese, Myanmar, Cambodian, Burmese, Khmer; some sources cite up to 16 languages available",
    "otherAccreditations": [
      "ISO 9001:2000/2015 (since 2000 — one of the earliest ISO-certified hospitals in Thailand)",
      "HA (Thailand)"
    ],
    "description": "Yanhee International Hospital, founded in 1984, is a 400-bed multi-specialty hospital in Bangkok's Bang Phlat district, JCI-accredited since 2011, and is one of Thailand's most internationally recognized cosmetic and gender-affirming surgery destinations — 72% of its international patients (from 160+ countries) come specifically for aesthetic procedures. Its team of 18 board-certified plastic surgeons is described as the largest dedicated cosmetic surgery team of any Thai private hospital, and Yanhee is particularly well known for sex-reassignment/gender-affirming surgery expertise, alongside a full menu of breast, facial, and body procedures. Beyond cosmetics, it operates as a genuine multi-specialty hospital with cardiology (Dear Heart Center), dental, dermatology, bariatric surgery, and fertility services, meaning cosmetic patients can combine procedures with other care in one stay. Yanhee also runs 'Operation Bright Smile,' a long-running charitable program providing free cleft lip/palate surgery to over 1,115 children since inception. Given its scale and specific reputation, Yanhee is a strong anchor listing for both Cosmetic & Plastic Surgery and Gender-Affirming Care categories specifically.",
    "notes": "",
    "ihcoId": "60000111",
    "imageFile": "/images/hospitals/yanhee-hospital.jpg"
  },
  {
    "slug": "overbrook-hospital",
    "name": "Overbrook Hospital",
    "city": "Chiang Rai",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "03 Feb 2018",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty"
    ],
    "specialties": [],
    "departments": "Regional hospital serving Chiang Rai province, northern Thailand. Specific specialty details not found in sources reviewed.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Overbrook Hospital, JCI accredited since February 2018, is located in Chiang Rai province in far-northern Thailand. Detailed public information on its specialty centers, international patient services, and language support was not found in the sources reviewed. It is likely best positioned as a regional-access listing for patients already in or near Chiang Rai (a growing tourist destination in its own right) rather than a primary international medical tourism target — recommend direct verification before featuring prominently.",
    "notes": "",
    "ihcoId": "60005716",
    "imageFile": "/images/hospitals/overbrook-hospital.jpg"
  },
  {
    "slug": "praram-9-hospital",
    "name": "Praram 9 Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 85,
    "jciProgramType": "Hospital Program",
    "jciSince": "20 Nov 2010",
    "ccpc": [],
    "allCategoriesRaw": [
      "Organ Transplant (Kidney)",
      "Cardiology",
      "Neurology & Neurosurgery",
      "Fertility & IVF",
      "Orthopedics",
      "Oncology",
      "Dental Care"
    ],
    "specialties": [
      "dental",
      "fertility-ivf"
    ],
    "departments": "Kidney Disease and Transplantation Institute (special JCI accreditation + JCI CCPC for kidney transplant care since 2016) — 1,400+ kidney transplants performed over 33 years (1992-2025), Thailand's most active private-sector kidney transplant program. Also: Praram 9 Cardiovascular Institute, Oncocare Centre, Infertility Centre, Prenatal Diagnosis Centre, Orthopaedic Centre, Dental Clinic. First hospital in Thailand to introduce 640-slice CT scanning, 4D ultrasound, and advanced laparoscopic surgery systems; 3.0 Tesla MRI and PET-CT also on site.",
    "languages": "English, Chinese (Mandarin), Burmese, Japanese, Cambodian, and Arabic via in-house medical translators; dedicated PR9 Medical Travel Programme with a referral office in Dhaka, Bangladesh",
    "otherAccreditations": [
      "Global Healthcare Accreditation (GHA) for COVID-19 Guidelines",
      "special JCI accreditation specifically for the Kidney Disease and Transplantation Institute"
    ],
    "description": "Praram 9 Hospital, opened in July 1992 in Bangkok's Huai Khwang district, is JCI-accredited since 2010 and holds a rare, additional specialized JCI accreditation specifically for its Kidney Disease and Transplantation Institute, which has performed 1,400+ kidney transplants over 33 years — the most active kidney transplant program among Thailand's private hospitals, with a success rate above 95-96%. The Institute received the 'Research of the Year' award from the Asian Society of Transplantation in 1999 and has presented 64+ academic papers at international transplant congresses through 2025. Beyond transplant medicine, the 300-bed hospital operates a Cardiovascular Institute, Oncocare Centre, Infertility Centre, and Orthopaedic Centre, and was the first hospital in Thailand to introduce 640-slice CT scanning and 4D ultrasound. Its PR9 Medical Travel Programme provides in-house translation in English, Chinese, Burmese, Japanese, Cambodian, and Arabic, and the hospital operates a dedicated referral office in Dhaka, Bangladesh, reflecting a strong South Asian patient corridor. Given its uniquely deep and specifically JCI-certified kidney transplant program, Praram 9 is the clear anchor listing for your Organ Transplant category, and a solid secondary option for cardiology and fertility.",
    "notes": "1,000+ kidney transplants performed; Newsweek Top 9 Thailand hospital 2025",
    "ihcoId": "60000110",
    "imageFile": "/images/hospitals/praram-9-hospital.jpg"
  },
  {
    "slug": "seriruk-hospital",
    "name": "Seriruk Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "29 May 2021",
    "ccpc": [],
    "allCategoriesRaw": [
      "Fertility & IVF",
      "General / Multi-specialty"
    ],
    "specialties": [
      "fertility-ivf"
    ],
    "departments": "Officially 'Synphaet Seriruk Hospital' — part of the Synphaet network. Operates a Women's Health and Infertility Center and a Kidney Dialysis Center. JCI re-accredited for a second consecutive term (May 2024).",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Seriruk Hospital (formally Synphaet Seriruk Hospital) is part of the five-branch Synphaet hospital network in Bangkok, JCI accredited since May 2021 and successfully re-accredited for a second term in May 2024. It operates a Women's Health and Infertility Center and a Kidney Dialysis Center among its services. As with other Synphaet branches, detailed international-patient-facing information, language support, and pricing were not found in the sources reviewed. Given its fertility center, it's worth a secondary listing under Fertility & IVF pending direct verification of the program's scope and outcomes data.",
    "notes": "",
    "ihcoId": "60008876",
    "imageFile": "/images/hospitals/seriruk-hospital.webp"
  },
  {
    "slug": "synphaet-lamlukka-hospital",
    "name": "Synphaet Lamlukka Hospital",
    "city": "Pathum Thani",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "02 Apr 2021",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty"
    ],
    "specialties": [],
    "departments": "Part of the Synphaet Hospital network, serving Pathum Thani province (Greater Bangkok). Specific specialty details not found in sources reviewed.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Synphaet Lamlukka Hospital, JCI accredited since April 2021, serves Pathum Thani province just north of Bangkok, as part of the Synphaet hospital network. Detailed public information on its specialty centers and international patient services was not found in the sources reviewed. Best treated as a regional/local-access listing pending direct verification.",
    "notes": "",
    "ihcoId": "60008860",
    "imageFile": "/images/hospitals/synphaet-lamlukka-hospital.jpg"
  },
  {
    "slug": "prime-fertility-center",
    "name": "Prime Fertility Center",
    "city": "Bangkok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Ambulatory Care Program",
    "jciSince": "05 Dec 2019",
    "ccpc": [],
    "allCategoriesRaw": [
      "Fertility & IVF"
    ],
    "specialties": [
      "fertility-ivf"
    ],
    "departments": "JCI-accredited Ambulatory Care Program fertility clinic in Bangkok (accredited December 2019). Specific service details, success rates, and technology not found in sources reviewed.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Prime Fertility Center is a JCI-accredited Ambulatory Care Program fertility clinic in Bangkok, accredited since December 2019 — one of several single-specialty, JCI-accredited IVF centers in this database alongside Jetanin and Deep & Harmonicare. Detailed information on its specific services, success rates, laboratory technology, and language support was not found in the sources reviewed, in contrast to its two better-documented fertility-clinic peers. Recommend direct verification before featuring prominently — JCI accreditation for a fertility-specific ambulatory program is still a meaningful quality signal worth including in your Fertility category even with limited additional public detail.",
    "notes": "",
    "ihcoId": "60008265",
    "imageFile": "/images/hospitals/prime-fertility-center.png"
  },
  {
    "slug": "ratchaphruek-hospital",
    "name": "Ratchaphruek Hospital",
    "city": "Khon Kaen",
    "approved": false,
    "fame": 40,
    "jciProgramType": "Hospital Program",
    "jciSince": "24 Aug 2019",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty",
      "Anti-Aging & Longevity Medicine"
    ],
    "specialties": [],
    "departments": "60+ medical specialties across a 14-floor facility, including inpatient/outpatient care, checkups, emergency, ICU, laboratory, diagnostic radiology, surgery, delivery room, neonatal ICU, physical therapy, and hemodialysis. Currently developing what is described as the first dedicated Aesthetic Hospital wing in northeastern Thailand.",
    "languages": "Not specified in sources reviewed — verify directly",
    "otherAccreditations": [
      "Global Healthcare Accreditation (GHA) for Medical Travel Services — first hospital in northeastern Thailand and the 4th in the Asia-Pacific region to achieve this specific accreditation",
      "'Excellent' (5-star) Corporate Governance Report rating from the Thai Institute of Directors Association"
    ],
    "description": "Ratchaphruek Hospital, located in Khon Kaen province (northeastern Thailand/Isaan region), is JCI accredited since August 2019 and holds a notable additional distinction: Global Healthcare Accreditation (GHA) for Medical Travel Services, making it the first hospital in northeastern Thailand and only the fourth in the entire Asia-Pacific region to earn this specific medical-tourism-focused accreditation. This signals a genuine strategic push toward international patients from a region otherwise underrepresented in Thailand's medical tourism industry (which concentrates heavily in Bangkok, Phuket, and Chiang Mai). The 14-floor hospital covers 60+ specialties and is currently developing what's described as the first dedicated Aesthetic Hospital wing in northeastern Thailand. It also holds an 'Excellent' (5-star) corporate governance rating from the Thai Institute of Directors Association — a governance credential rarely highlighted by hospitals but relevant for platform due-diligence purposes. Language support specifics weren't found in sources reviewed. Given its GHA medical-travel accreditation, this is a strong emerging listing for patients interested in northeastern Thailand as an alternative to Bangkok.",
    "notes": "",
    "ihcoId": "60007709",
    "imageFile": "/images/hospitals/ratchaphruek-hospital.jpg"
  },
  {
    "slug": "samitivej-sukhumvit-hospital",
    "name": "Samitivej Sukhumvit Hospital",
    "city": "Bangkok (Thonglor)",
    "approved": true,
    "fame": 70,
    "jciProgramType": "Hospital Program",
    "jciSince": "27 Jan 2007",
    "ccpc": [],
    "allCategoriesRaw": [
      "Pediatrics",
      "Maternity & Obstetrics",
      "Cardiology",
      "Orthopedics & Sports Medicine",
      "Oncology",
      "Gastroenterology",
      "Fertility & IVF",
      "Neurology",
      "Eye Care (Ophthalmology)"
    ],
    "specialties": [
      "fertility-ivf"
    ],
    "departments": "30+ medical specialties, including a Children's Hospital (NICU/PICU), Women's Health and Maternity Center (OB-GYN, IVF), Heart and Vascular Center, Orthopedics and Sports Medicine, oncology, gastroenterology and liver disease, neurology, and ophthalmology. Home to a specialized Japanese Medical Center for the local Japanese expatriate community.",
    "languages": "English, Japanese, Arabic, Mandarin with dedicated international patient coordinators and a specialized Japanese Medical Center",
    "otherAccreditations": [
      "HA (Thailand MOPH)",
      "ISO 9001:2015"
    ],
    "description": "Samitivej Sukhumvit Hospital, founded in 1979 on Sukhumvit Soi 49 in Bangkok's Thonglor district, is a 275-bed tertiary care hospital serving more than 400,000 patients annually with 400+ specialists among 1,200+ healthcare professionals. It was recognized as Thailand's first Mother and Baby-Friendly Hospital by WHO and UNICEF in 1999 and has held JCI accreditation since 2007, alongside Thailand's Hospital Accreditation (HA) and ISO 9001:2015 certification. The hospital offers 30+ medical specialties with particular depth in pediatrics (via its Children's Hospital campus with NICU/PICU), maternity and fertility (Women's Health and Maternity Center, including IVF), cardiology (Heart and Vascular Center), orthopedics and sports medicine, oncology, gastroenterology/liver disease, neurology, and ophthalmology. A distinguishing feature is its dedicated Japanese Medical Center, reflecting the hospital's long-standing service to Bangkok's Japanese expatriate community, alongside broader international patient services in English, Arabic, and Mandarin. Approximately 40% of the hospital's patients come from outside Thailand. On your platform, Samitivej Sukhumvit is well suited as an anchor listing for Maternity & Obstetrics, Pediatrics, and Fertility categories — particularly for patients seeking a hospital with strong Japanese-language support — while also covering cardiology and orthopedics for the broader Bangkok expatriate market.",
    "notes": "WHO/UNICEF Mother & Baby Friendly Hospital designation (1999)",
    "ihcoId": "60000777",
    "imageFile": "/images/hospitals/samitivej-sukhumvit-hospital.webp"
  },
  {
    "slug": "knt-care-home",
    "name": "KNT Care@Home",
    "city": "Bangkok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Home Care Program",
    "jciSince": "01 Feb 2025",
    "ccpc": [],
    "allCategoriesRaw": [
      "Elderly / Long-Term & Home Care"
    ],
    "specialties": [],
    "departments": "JCI-accredited Home Care Program (accredited February 2025 — the newest program type and one of the newest accreditations in this database). Specific service scope not detailed in sources reviewed.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "KNT Care@Home holds a JCI Home Care Program accreditation in Bangkok, accredited February 2025 — the only home-care-specific JCI Program Type facility in this entire database, and one of the most recently accredited facilities overall. Home care programs (in-home nursing, medical support, rehabilitation) are a distinct service category from hospital or ambulatory care, relevant primarily for patients requiring extended recovery support, elderly care, or chronic disease management outside a hospital setting. Public information on specific services, capacity, and international patient applicability was very limited in the sources reviewed. Given the sensitivity of home/elder care services, recommend direct verification of care scope and medical oversight before featuring this facility, particularly for international patients considering extended in-home recovery or elder care arrangements in Thailand.",
    "notes": "",
    "ihcoId": "60011078",
    "imageFile": "/images/hospitals/knt-care-home.jpg"
  },
  {
    "slug": "kluaynamthai-hospital",
    "name": "Kluaynamthai Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "12 Dec 2015",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty"
    ],
    "specialties": [],
    "departments": "Part of the Kluaynamthai hospital group (which also includes Kluaynamthai2 Geriatric Hospital). Specific specialty details not found in sources reviewed.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Kluaynamthai Hospital, JCI accredited since December 2015, is a general hospital in Bangkok and part of a small hospital group that also operates Kluaynamthai2 Geriatric Hospital (a dedicated long-term/elder care facility). Detailed public information on its specialty centers and international patient services was not found in the sources reviewed. Recommend direct verification before featuring prominently.",
    "notes": "",
    "ihcoId": "60003541",
    "imageFile": "/images/hospitals/kluaynamthai-hospital.jpg"
  },
  {
    "slug": "mahachai-hospital",
    "name": "Mahachai Hospital",
    "city": "Samut Sakhon",
    "approved": false,
    "fame": 30,
    "jciProgramType": "Hospital Program",
    "jciSince": "07 Mar 2014",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty"
    ],
    "specialties": [],
    "departments": "Publicly listed regional hospital serving Samut Sakhon province; notably a founding partner in the establishment of MedPark Hospital in Bangkok. Specific specialty details for the Mahachai facility itself not found in sources reviewed.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Mahachai Hospital Public Company Limited, JCI accredited since March 2014, serves Samut Sakhon province southwest of Bangkok. Notably, Mahachai Hospital PCL was a founding corporate partner in establishing MedPark Hospital (profiled elsewhere in this database as one of Bangkok's newest flagship international hospitals) — a connection worth knowing given MedPark's prominence, though it doesn't necessarily mean Mahachai itself offers the same specialty depth or international-patient infrastructure. Detailed public information specific to the Mahachai facility's specialty centers and language support was not found in the sources reviewed — recommend direct verification before featuring prominently.",
    "notes": "",
    "ihcoId": "60001726",
    "imageFile": "/images/hospitals/mahachai-hospital.jpg"
  },
  {
    "slug": "kasemrad-international-hospital-rattanatibeth",
    "name": "Kasemrad International Hospital Rattanatibeth",
    "city": "Nonthaburi",
    "approved": false,
    "fame": 30,
    "jciProgramType": "Hospital Program",
    "jciSince": "21 Nov 2020",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty"
    ],
    "specialties": [],
    "departments": "Comprehensive tertiary care across all specialties, including treatment, disease prevention, rehabilitation, and health promotion services. Part of the Kasemrad Hospital Group / Bangkok Chain Hospital PCL (BCH), a 15+ hospital network.",
    "languages": "Not specified for this specific branch — verify directly",
    "otherAccreditations": [
      "All hospital services accredited by JCI",
      "part of a group holding DNV GL",
      "JCI",
      "and Thailand HA accreditation across its network"
    ],
    "description": "Kasemrad International Hospital Rattanatibeth, a tertiary care hospital that began operations in February 1993, serves Nonthaburi province (Greater Bangkok) as part of the Kasemrad Hospital Group under Bangkok Chain Hospital Public Company Limited (BCH) — Thailand's second-largest private hospital chain with 15+ facilities nationwide and a newly opened international branch in Vientiane, Laos (accredited November 2025). It provides comprehensive, integrated healthcare — treatment, disease prevention, rehabilitation, and health promotion — across all specialties, backed by group-wide accreditation standards (DNV GL, JCI, Thailand HA). Branch-specific details on language support and specialty depth beyond the general description were not found in the sources reviewed — recommend direct verification, though the parent group's scale and accreditation consistency are a reasonable quality signal.",
    "notes": "",
    "ihcoId": "60008591",
    "imageFile": "/images/hospitals/kasemrad-international-hospital-rattanatibeth.jpg"
  },
  {
    "slug": "ladprao-medical-hospital-excellence-medical-center",
    "name": "Ladprao Medical Hospital (Excellence Medical Center)",
    "city": "Bangkok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "27 Jan 2024",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty"
    ],
    "specialties": [],
    "departments": "Recently JCI-accredited (January 2024) general hospital in Bangkok. Specific specialty details not found in sources reviewed.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Ladprao Medical Hospital (also known as Excellence Medical Center), JCI accredited since January 2024, is one of the more recently accredited facilities in this database. As a result, third-party medical tourism directories and review platforms have limited coverage of its specific specialty centers, technology, pricing, and international patient services. Recommend direct verification with the hospital before featuring it prominently, or revisiting research once more public information becomes available as the hospital's international-patient reputation develops.",
    "notes": "",
    "ihcoId": "60010356",
    "imageFile": "/images/hospitals/ladprao-medical-hospital-excellence-medical-center.jpg"
  },
  {
    "slug": "kluaynamthai2-geriatric-hospital",
    "name": "Kluaynamthai2 Geriatric Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Long Term Care Program",
    "jciSince": "15 Nov 2014",
    "ccpc": [],
    "allCategoriesRaw": [
      "Elderly / Long-Term & Home Care"
    ],
    "specialties": [],
    "departments": "JCI-accredited Long Term Care Program facility (since November 2014) specifically dedicated to geriatric care — one of the longer-standing long-term-care-specific JCI accreditations in this database.",
    "languages": "Not specified — verify directly",
    "otherAccreditations": [],
    "description": "Kluaynamthai2 Geriatric Hospital, part of the Kluaynamthai hospital group in Bangkok, holds a JCI Long Term Care Program accreditation specifically for geriatric care, in place since November 2014 — making it one of the more established long-term-care-specific JCI accreditations in Thailand (alongside the more recently accredited Natural Home and KNT Care@Home). As a dedicated geriatric facility, it's a distinct offering from acute-care hospitals and fits specifically under an Elderly/Long-Term Care category rather than general medical tourism categories. Detailed information on capacity, specific services, and international patient/family services (e.g., for families arranging care for aging relatives) was not found in the sources reviewed — recommend direct verification, particularly given the sensitivity of eldercare arrangements for international families.",
    "notes": "",
    "ihcoId": "60002791",
    "imageFile": "/images/hospitals/kluaynamthai2-geriatric-hospital.jpg"
  },
  {
    "slug": "krabi-nakharin-international-hospital",
    "name": "Krabi Nakharin International Hospital",
    "city": "Krabi",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Hospital Program",
    "jciSince": "02 Oct 2015",
    "ccpc": [],
    "allCategoriesRaw": [
      "Health Screenings & Executive Checkups",
      "Emergency & Trauma",
      "General / Multi-specialty"
    ],
    "specialties": [],
    "departments": "General hospital and health-check facility located near Ao Nang and Krabi Airport, offering health check-ups, surgery, and emergency care — positioned for both local residents and medical/leisure tourists in the Krabi region.",
    "languages": "Not specified in sources reviewed — resort-area location suggests at least basic English support, verify directly",
    "otherAccreditations": [],
    "description": "Krabi Nakharin International Hospital, JCI accredited since October 2015, is located near Ao Nang and Krabi Airport in southern Thailand's Krabi province — one of the country's major beach and island tourism destinations. It offers health check-ups, general surgery, and emergency care, serving both the local population and the significant tourist traffic through the Krabi/Ao Nang area (alongside Wattanapat Hospital Ao Nang, also in this database). Detailed information on specialty depth beyond general/emergency care and specific language support was not found in the sources reviewed. This hospital is best positioned as a regional health-screening and emergency-care listing for the Krabi tourist area rather than a planned international treatment destination — recommend direct verification before publishing detailed claims.",
    "notes": "",
    "ihcoId": "60002065",
    "imageFile": "/images/hospitals/krabi-nakharin-international-hospital.jpg"
  },
  {
    "slug": "medpark-hospital",
    "name": "MedPark Hospital",
    "city": "Bangkok",
    "approved": true,
    "fame": 70,
    "jciProgramType": "Hospital Program",
    "jciSince": "25 Feb 2023",
    "ccpc": [],
    "allCategoriesRaw": [
      "Cardiology",
      "Oncology",
      "Orthopedics",
      "Neurology & Neurosurgery",
      "Gastroenterology & Liver",
      "Fertility & Women's Health",
      "Eye Care (Ophthalmology)",
      "ENT",
      "Urology",
      "Dental Care",
      "Cosmetic & Plastic Surgery",
      "Hair Transplant",
      "Stem Cell & Regenerative Medicine (Bone Marrow Transplant)",
      "Health Screenings & Checkups"
    ],
    "specialties": [
      "dental",
      "hair-transplant",
      "plastic-surgery",
      "rhinoplasty",
      "fertility-ivf"
    ],
    "departments": "30+ specialties across the Heart & Vascular Institute, Neuroscience Institute, Cancer Institute (Elekta Versa HD, TrueBeam-class radiotherapy, PET-CT), Orthopedic & Sports Medicine (Mako robotic joint replacement), Women's Health & Fertility, Dental Center (CEREC digital lab, iTero scanner), and Hair Restoration Center. Thailand's first Hybrid Operating Room (256-slice CT + angiography); da Vinci Xi robotic surgery; Bone Marrow Transplantation Unit.",
    "languages": "English, Chinese, Japanese, Arabic as core languages; additional coverage reported up to 15+ languages including Burmese and Russian via international patient coordinators",
    "otherAccreditations": [
      "HA (Thailand MOPH)",
      "ISO 9001:2015",
      "Newsweek #6 Thailand 2025",
      "Prime Minister's Export Award (2023/2024)"
    ],
    "description": "MedPark Hospital is Bangkok's newest flagship international hospital, opened in September 2020 by a consortium of leading Thai specialists (many former Bumrungrad chiefs) together with Mahachai Hospital PCL. The 25-story, 90,000-sqm tower sits on Rama IV Road opposite the Queen Sirikit National Convention Centre, directly connected to Queen Sirikit MRT station via skybridge. With 550 beds, 300 examination rooms, and 350+ specialists (70% holding overseas qualifications), MedPark achieved JCI 7th Edition accreditation in just two years of operation and has since renewed for a second consecutive term. The hospital covers 30+ specialties through named institutes: Heart & Vascular Institute, Neuroscience Institute, Cancer Institute (Elekta Versa HD and TrueBeam-class radiotherapy, PET-CT, LINAC), Orthopedic & Sports Medicine (Mako robotic joint replacement), and Women's Health & Fertility. It houses Thailand's first Hybrid Operating Room combining 256-slice CT with angiography, plus da Vinci Xi robotic surgery and a Bone Marrow Transplantation Unit. A full-scope Dental Center (digital scanning, sedation dentistry) and Hair Restoration Center round out its aesthetic offerings. Because it was purpose-built for international patients from the ground up, MedPark offers modern, uncluttered infrastructure and comparatively fast appointment availability versus older flagship hospitals. On your platform, MedPark is a strong anchor listing across nearly every major surgical category — especially Cancer, Cardiology, and Orthopedics — and a good option to feature for patients prioritizing newer facilities and technology.",
    "notes": "",
    "ihcoId": "60009653",
    "imageFile": "/images/hospitals/medpark-hospital.jpg"
  },
  {
    "slug": "bangkok-hospital-siriroj",
    "name": "Bangkok Hospital Siriroj",
    "city": "Phuket",
    "approved": true,
    "fame": 40,
    "jciProgramType": "Hospital Program",
    "jciSince": "15 Dec 2012",
    "ccpc": [],
    "allCategoriesRaw": [
      "Cosmetic & Plastic Surgery",
      "General / Multi-specialty",
      "Emergency & Trauma",
      "Ophthalmology",
      "Health Screenings & Checkups"
    ],
    "specialties": [
      "plastic-surgery",
      "rhinoplasty"
    ],
    "departments": "Home to the Phuket Plastic Surgery Institute (PPSI), one of Southeast Asia's leading cosmetic surgery centers (breast augmentation, facelifts, body contouring). 30+ medical and surgical specialties across 18 dedicated centers, with an 11-bed ICU and CAMTS-accredited emergency medical services.",
    "languages": "9 languages via dedicated international coordinators, including Russian-speaking medical coordinators",
    "otherAccreditations": [
      "CAMTS (Commission on Accreditation of Medical Transport Systems",
      "USA & EU) for emergency medical services"
    ],
    "description": "Bangkok Hospital Siriroj, formerly known as Phuket International Hospital and later Siriroj International Hospital, opened in 1982 as Phuket's — and southern Thailand's — first private hospital. It joined the Bangkok Dusit Medical Services (BDMS) network in 2014 and has since been awarded JCI accreditation three times. The 196-bed hospital occupies a six-story building with an 11-bed Intensive Care Unit and two floors of private patient rooms, serving over 100,000 patients annually from more than 100 countries. Its standout specialty is the Phuket Plastic Surgery Institute (PPSI), widely regarded as one of Southeast Asia's leading cosmetic surgery centers, performing breast augmentation, facelifts, and body contouring alongside its 30+ broader medical and surgical specialties across 18 centers. The hospital additionally holds CAMTS accreditation (both USA and EU standards) for its emergency medical services — a credential relatively rare among Thai hospitals and a strong signal of trauma/emergency care quality for an island destination popular with tourists. International Services coordinators speak 9 languages, including dedicated Russian-speaking staff, reflecting Phuket's significant Russian tourist and expatriate population. On your platform, Bangkok Hospital Siriroj is best positioned as your primary Cosmetic & Plastic Surgery listing for the Phuket region, complemented by its CAMTS-accredited emergency care as a safety differentiator for medical tourists combining treatment with an island holiday.",
    "notes": "",
    "ihcoId": "60000192",
    "imageFile": "/images/hospitals/bangkok-hospital-siriroj.jpg"
  },
  {
    "slug": "bfc-dental",
    "name": "BFC Dental",
    "city": "Bangkok",
    "approved": false,
    "fame": 0,
    "jciProgramType": "Ambulatory Care Program",
    "jciSince": "07 Mar 2020",
    "ccpc": [],
    "allCategoriesRaw": [
      "Dental Care"
    ],
    "specialties": [
      "dental"
    ],
    "departments": "Established 1994; 25+ dentists and 27+ support staff. Places 4,600+ dental implants annually, supported by an in-house dental lab for faster turnaround. Offers ClearSmile and Fastbraces clear-aligner orthodontics, 3D imaging, and laser systems. JCI accredited in March 2020, re-accredited 2023.",
    "languages": "Not specified in detail in sources reviewed — verify directly",
    "otherAccreditations": [
      "JCI Ambulatory Care Program"
    ],
    "description": "BFC Dental, established in 1994 in the Bangna area of Bangkok, is a JCI-accredited dental clinic (Ambulatory Care Program, since March 2020, re-accredited 2023) with a team of 25+ dentists placing over 4,600 dental implants annually — a substantial volume that suggests significant experience specifically in implant dentistry. Its in-house dental laboratory allows faster turnaround for crowns, veneers, and other lab-fabricated restorations compared to clinics that outsource lab work. The clinic also offers clear-aligner orthodontics (ClearSmile, Fastbraces) alongside standard restorative and cosmetic dentistry, supported by 3D imaging and laser technology. Several of its dentists hold advanced international training credentials (Harvard implant training, German Society for Oral Implantology, Royal College of Dental Surgeons of Thailand fellowships). As a high-volume, JCI-accredited implant specialist with in-house lab capability, BFC Dental is a strong secondary listing for your Dental Care category, particularly for patients specifically seeking dental implants.",
    "notes": "",
    "ihcoId": "60008305",
    "imageFile": "/images/hospitals/bfc-dental.jpg"
  },
  {
    "slug": "kamol-cosmetic-hospital",
    "name": "Kamol Cosmetic Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 40,
    "jciProgramType": "Hospital Program",
    "jciSince": "07 Nov 2015",
    "ccpc": [],
    "allCategoriesRaw": [
      "Cosmetic & Plastic Surgery",
      "Gender-Affirming Care",
      "Bariatric & Weight-Loss Surgery"
    ],
    "specialties": [
      "plastic-surgery",
      "rhinoplasty",
      "weight-loss"
    ],
    "departments": "Purpose-built 5,200-sqm cosmetic and gender-affirming surgery hospital — the first facility in Thailand designed entirely for this specialty. 8 operating rooms, 30 private recovery rooms, adjacent K Garden Medical Hotel for extended recovery. Founder Dr. Kamol Pansritum has performed 5,000+ gender confirmation surgeries and 10,000+ related procedures since 1997, currently 200+ MTF vaginoplasty surgeries annually; a WPATH (World Professional Association for Transgender Health) member. 11 board-certified plastic surgeons total. Serves as an international training center for surgeons learning advanced gender-affirming techniques.",
    "languages": "English, Japanese, Chinese (Mandarin), Arabic, French, Thai, and several others; 8 languages reported by one source",
    "otherAccreditations": [
      "JCI accredited since November 2015"
    ],
    "description": "Kamol Cosmetic Hospital, founded in 2002 by Dr. Kamol Pansritum and moved to its current purpose-built 5,200-square-meter facility in 2009, is one of Southeast Asia's premier destinations specifically for gender-affirming and cosmetic surgery — the first hospital in Thailand designed entirely around this specialty rather than adding it to a general hospital's service list. Dr. Kamol is a WPATH member and one of the highest-volume sex-reassignment surgeons in the world, having personally performed over 5,000 gender confirmation surgeries and more than 10,000 related procedures since 1997, currently averaging 200+ male-to-female vaginoplasty procedures annually; the hospital also trains surgeons internationally in advanced gender-affirming surgical techniques. The facility operates 8 operating rooms and 30 private recovery rooms, with an adjacent K Garden Medical Hotel and dedicated 7th-floor recovery apartments for close medical supervision during extended recovery. Beyond gender-affirming surgery, the 11-surgeon team covers a full cosmetic menu (facelifts, rhinoplasty, breast surgery, body contouring) and bariatric surgery. Given its singular focus and surgeon volume, Kamol is arguably the strongest, most specific anchor listing in this entire database for your Gender-Affirming Care category, and a strong secondary listing for Cosmetic & Plastic Surgery.",
    "notes": "",
    "ihcoId": "60003958",
    "imageFile": "/images/hospitals/kamol-cosmetic-hospital.webp"
  },
  {
    "slug": "kasemrad-prachachuen-hospital",
    "name": "Kasemrad Prachachuen Hospital",
    "city": "Bangkok",
    "approved": false,
    "fame": 30,
    "jciProgramType": "Hospital Program",
    "jciSince": "14 Jan 2024",
    "ccpc": [],
    "allCategoriesRaw": [
      "General / Multi-specialty"
    ],
    "specialties": [],
    "departments": "Part of the Kasemrad Hospital Group / Bangkok Chain Hospital PCL (BCH) network. Specific specialty details for this branch not found in sources reviewed.",
    "languages": "Not specified for this specific branch — verify directly",
    "otherAccreditations": [
      "Part of BCH network holding group-wide DNV GL",
      "JCI",
      "and Thailand HA accreditations"
    ],
    "description": "Kasemrad Prachachuen Hospital, JCI accredited since January 2024, is one of 15+ hospitals in the Kasemrad Hospital Group under Bangkok Chain Hospital Public Company Limited (BCH), Thailand's second-largest private hospital chain. As with several other Kasemrad branches in this database (Ramkhamhaeng, International Rattanatibeth), it benefits from group-wide quality and accreditation systems, but branch-specific specialty and international-patient-service details were not found in the sources reviewed. Recommend direct verification before featuring this specific branch prominently on your platform.",
    "notes": "",
    "ihcoId": "60010385",
    "imageFile": "/images/hospitals/kasemrad-prachachuen-hospital.jpg"
  }
]

export const hospitalBySlug = (slug: string) => hospitals.find((h) => h.slug === slug)

export const sortRecommended = (list: Hospital[]) =>
  [...list].sort((a, b) => {
    if (a.approved !== b.approved) return a.approved ? -1 : 1
    if (b.fame !== a.fame) return b.fame - a.fame
    return a.name.localeCompare(b.name)
  })
