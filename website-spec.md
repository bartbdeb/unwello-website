# Thailand Medical Tourism Platform — Full Page & Feature Spec
Model: Qunomedical/Bookimed-style marketplace, Thailand-only. Commission-funded, free for patients, coordinator per lead.
Phases: [MVP] [P2] [P3]

---

## A. GLOBAL / SHARED COMPONENTS

- **Header (all public pages):** logo; nav: Treatments (mega-menu by specialty), Clinics, Doctors, How It Works, Stories, Guides; phone number; language/currency selector (USD/GBP/EUR/AUD/THB) [P2]; "Get Free Quote" primary CTA button.
- **Footer:** treatment links, city links, company (About, Press, Vetting Methodology, Careers), legal (Privacy, Terms, Medical Disclaimer, Cookies), certification badges, social links, "Medically reviewed content" statement.
- **Floating WhatsApp button** (all pages, mobile-sticky). [MVP]
- **Live chat / AI intake widget** — chat bubble; opens conversational assistant that mirrors the quote funnel questions, then hands off to human coordinator. [P2]
- **Cookie consent banner** — accept/reject/preferences. [MVP]
- **Sticky mobile bottom bar** on treatment/clinic pages: "Get Free Quote" + WhatsApp. [MVP]
- **Reusable cards:** ClinicCard (photo, name, city, rating + review count, accreditation badges, top doctor, price-range line, "Get Quote" + "View Clinic" buttons); DoctorCard (photo, name, specialty, years experience, procedure count, rating); ReviewCard (avatar, name, country flag, procedure, rating, date, text, clinic response, verified badge); PriceTable row (procedure, Thailand price range, home-country price, savings %); TrustBar (ratings from Google/Trustpilot, patient count, press logos).

---

## B. PUBLIC WEBSITE (patient-facing)

### 1. Homepage [MVP]
- Hero: headline (value prop: "World-class treatment in Thailand for up to 70% less"), sub-line, search bar (procedure autocomplete) + "Get Free Quote" CTA, hero image.
- TrustBar: aggregate rating, patients served, clinics vetted, press logos.
- Popular treatments grid (6–8 tiles with starting prices).
- "How it works" strip: 4 steps (Tell us what you need → Get matched & quoted → We arrange everything → Fly, treat, recover) with icons.
- Featured clinics carousel (ClinicCards).
- Savings comparison band: 3–4 procedures, Thailand vs US/UK/AU prices.
- Why Thailand section: JCI hospitals count, recovery destination, cost, English-speaking care.
- Patient stories carousel (video thumbnails + quotes).
- Coordinator introduction: photos of real team, "free, non-binding, 24/7" messaging.
- Vetting teaser: "Only X% of clinics pass" → link to methodology page.
- Guide/blog teaser (3 latest articles).
- Final CTA banner + footer.

### 2. Treatment Category Page (e.g. /dental) [MVP]
One per specialty: Hair Transplant, Dental, Plastic Surgery, Weight Loss, Reproductive Medicine (+ Rhinoplasty, Breast Surgery as sub-landings).
- Breadcrumb; H1; intro paragraph; medically-reviewed-by byline (reviewer name, credentials, date).
- Procedure list within category (cards linking to treatment detail pages, each with price-from).
- Top clinics for this specialty (ClinicCards, 3–5).
- Price comparison table (procedures × Thailand range vs home country).
- FAQ accordion.
- Patient stories filtered to this specialty.
- Inline quote CTA banners (after intro and mid-page).

### 3. Treatment Detail Page (e.g. /dental/dental-implants) [MVP]
- Breadcrumb; H1; medical reviewer byline; last-updated date.
- Quick-facts box: duration, hospital stay, recovery time, price range in Thailand, savings %.
- Sticky sidebar (desktop) / sticky bottom bar (mobile): price range + "Get Free Quote".
- Content sections: what it is, techniques, candidacy, procedure steps, recovery timeline (visual), risks, results (before/after gallery).
- Cost section: detailed Thailand price table by clinic tier, what's included in packages.
- Best clinics for this procedure (ClinicCards).
- Doctors who perform it (DoctorCards).
- Reviews filtered to this procedure.
- FAQ accordion (schema-markup ready).
- Related treatments links.

### 4. City Page (e.g. /bangkok, /phuket, /chiang-mai) [MVP]
- Hero with city imagery; intro on medical care in that city.
- Clinics in this city (filterable ClinicCard grid).
- Popular treatments here with prices.
- Practical info: airport, transfer times, recommended recovery hotels, best season.
- Treatment × city SEO variants (e.g. /bangkok/dental-implants): same layout, procedure-specific copy + clinic list.

### 5. Clinic Search / Listing Page (/clinics) [MVP]
- Filter sidebar (mobile: filter drawer): specialty, procedure, city, price range, rating, accreditations (JCI/ISO), language spoken.
- Sort: recommended (ranking algorithm), rating, price low→high.
- Results: ClinicCard list with pagination; result count; map toggle [P2].
- "Compare" checkbox on each card → compare tray at bottom (up to 3) → Compare page. [P2]
- Empty state: "No exact match — tell us what you need" → quote funnel.

### 6. Clinic Profile Page [MVP]
- Gallery header (photos/video tour).
- Name, city, rating + review count, accreditation badges, vetted badge with tooltip → methodology.
- Sticky CTA: "Get Free Quote from this clinic".
- Tabs or sections: About; Doctors (DoctorCards); Treatments & Prices (table: procedure, price range, package inclusions); Before/After gallery (with consent notice); Reviews (all, unfiltered, with clinic responses, rating breakdown histogram); Facilities & amenities; Location (map, airport distance, nearby recovery hotels); FAQs.
- "What's included" package box: hotel, transfers, interpreter, aftercare.

### 7. Doctor Profile Page [MVP]
- Photo, name, title, specialty, clinic affiliation (link), years of experience, procedures performed count, languages.
- Credentials & memberships list; education timeline.
- Before/after gallery; video intro [P2].
- Reviews mentioning this doctor.
- Telemedicine consultation booking CTA [P2].
- "Get a quote with Dr. X" CTA.

### 8. Clinic Comparison Page [P2]
- Up to 3 clinics side-by-side: photo, rating, accreditations, price for the selected procedure, package inclusions, doctor experience, review count.
- Row-by-row table; highlight-differences toggle; per-column "Get Quote" CTA.

### 9. Patient Stories — Listing + Detail [MVP]
- Listing: filter by treatment; cards with photo/video, name, country, procedure, one-line quote.
- Detail: full narrative (before → journey → recovery), photos/video, cost paid, timeline, clinic & doctor links, "Start your journey" CTA.

### 10. Reviews Page [MVP]
- All-platform reviews, unfiltered (negative included, clinic responses shown).
- Aggregate stats: average rating, count, distribution histogram; Google/Trustpilot widgets.
- Filters: treatment, clinic, rating; verified-patient badge on each.

### 11. How It Works Page [MVP]
- Step-by-step journey (5–6 illustrated steps) from inquiry to aftercare.
- Coordinator team section (photos, names, languages).
- What's free vs what you pay for (transparency box: "You never pay us — clinics do").
- FAQ; CTA.

### 12. Vetting & Ranking Methodology Page [MVP]
- How clinics are selected: criteria list (accreditations, doctor credentials, outcome data, review volume, on-site visits, response time), scoring weights, rejection rate stat.
- How the "recommended" sort works. Builds the trust moat — design it to feel rigorous.

### 13. Guides Hub / Blog (/guides) [MVP]
- Hub landing: featured guide, category filters (by treatment, travel & Thailand, costs), search.
- Article page: H1, medical reviewer byline + date, TOC sidebar, rich content (tables, images, cost boxes), inline quote CTAs, related articles, author/reviewer bio cards.
- Thailand travel guides: visa rules, airports & transfers, recovery hotels, best time to visit, JCI hospital landscape.

### 14. About / Press Page [MVP]
- Mission, founding story, team, press mentions, certifications, partner logos.

### 15. Contact Page [MVP]
- Phone, email, WhatsApp CTA, contact form (name, email, message), office address, response-time promise.

### 16. Legal Pages [MVP]
- Privacy Policy (GDPR + Thai PDPA), Terms & Conditions, Medical Disclaimer (facilitator, not provider), Cookie Policy.

### 17. Financing Page [P3]
- How installments work, partner logos, example monthly breakdown per procedure, eligibility, apply CTA.

### 18. Referral Program Page [P3]
- How it works (share link → friend books → both rewarded), reward amounts, personal referral dashboard link (portal), terms.

### 19. Second Opinion Landing Page [P3]
- Service explainer, pricing, how records are reviewed, specialist list, upload-records CTA → dedicated funnel.

---

## C. QUOTE FUNNEL (standalone flow, minimal header, no nav) [MVP]

Design: one question per screen, large tappable answer buttons, auto-advance on tap, progress bar top, Back link bottom-left, session persistence (resume where left off).

- **Step 1 — Treatment:** "What would you like to do?" → Hair transplant / Dental / Rhinoplasty / Breast surgery / Plastic surgery / Weight loss / Reproductive medicine / Other (Other → free-text).
- **Step 2 — Treatment-specific branch (visual):**
  - Hair: "How would you describe your hair loss?" — 4–6 illustrated stage options + "previous transplant?" yes/no.
  - Dental: "What do you need?" — Implants / Veneers / Crowns / Full restoration / Not sure (icons).
  - Rhinoplasty/Breast/Plastic: goal selection with illustrations + first-time/revision.
  - Weight loss: current situation options (BMI bands) + procedure interest (sleeve/bypass/balloon/not sure).
  - Reproductive: IVF / ICSI / egg freezing / not sure + trying-for duration.
- **Step 3 — Who for:** "Who is this treatment for?" → Myself / Someone else.
- **Step 4 — Timing:** "When would you like to have it done?" → ASAP / In a few weeks / In a few months / I don't know yet. (Drives lead priority in CRM.)
- **Step 5 — Photos:** "Add photos for an accurate quote" — drag/drop or camera capture, multi-upload with thumbnails, guidance overlay per treatment (e.g. scalp angles diagram), privacy reassurance line, "Skip for now" secondary link.
- **Step 6 — Contact preference:** Phone / E-Mail / WhatsApp / No preference.
- **Step 7 — Contact details:** First name, Last name, Email, Phone (intl code picker); consent checkbox naming health-data processing, quote purpose, and transfer to Thai providers; "Send inquiry" primary button.
- **Success screen:** confirmation, what happens next (coordinator contact within X hours), coordinator photo strip; if WhatsApp chosen → auto-open WhatsApp deep link with pre-filled message.
- **States to design:** field validation errors, upload progress/failure, resume-session banner ("Continue where you left off"), already-submitted state.

---

## D. PATIENT PORTAL (logged in) [P2 unless noted]

### 20. Auth Screens
- Sign up (email + password or magic link), login, forgot/reset password, email verification. Account auto-created from funnel submission (claim-account email).

### 21. Patient Dashboard
- Welcome + journey status tracker (Inquiry → Quote → Booked → Travel → Treatment → Aftercare) as visual stepper.
- Next action card ("Review your treatment plan", "Upload passport").
- Coordinator card: photo, name, WhatsApp/call/message buttons.
- Upcoming appointments; quick links to documents, messages, itinerary.

### 22. My Quotes / Treatment Plan
- Quote list; quote detail: clinic + doctor summary, itemized treatment plan, all-inclusive price breakdown (procedure/hotel/transfer/extras), validity date, Accept / Ask a question / Request changes actions.
- Deposit payment screen: amount, methods (card, bank transfer), secure-payment badges, receipt state. [P2, feature 30]

### 23. Documents Vault
- Folder view: Medical records, X-rays/scans, Photos, Travel docs, Invoices.
- Upload, preview, download; encryption/privacy notice; share-with-clinic toggle per document.

### 24. Trip & Appointments
- Itinerary timeline: flights (self-entered), hotel, airport pickup details (driver name/phone), clinic appointments, interpreter info.
- Appointment detail: date/time, location map, prep instructions, add-to-calendar.

### 25. Messages
- Thread with coordinator (text, attachments); WhatsApp continuity note; notification preferences.

### 26. Telemedicine Consultation [P2]
- Booking: pick doctor, available slots, timezone handling; pre-call checklist; video call screen (camera/mic controls, chat sidebar); post-call summary + recording/notes.

### 27. Aftercare Timeline [P3]
- Post-op day-by-day plan; photo check-in tasks ("Day 7: upload healing photo") with camera capture; medication reminders; symptom flag button ("Something doesn't feel right" → alerts coordinator); progress photo gallery over time.

### 28. Referral Dashboard [P3]
- Personal referral link + share buttons, referred friends status list, rewards earned/paid.

### 29. Profile & Settings
- Personal details, password, notification preferences, language/currency, data & privacy (download my data, delete account — GDPR).

---

## E. CLINIC PORTAL [P2]

### 30. Clinic Auth & Onboarding
- Application form: clinic details, specialties, accreditation uploads, doctor CVs, facility photos, pricing sheet.
- Application status screen (submitted → in review → site visit → approved/rejected).

### 31. Clinic Dashboard
- New leads count, response-time metric (affects ranking), conversion stats, upcoming patients, recent reviews.

### 32. Lead Inbox & Lead Detail
- Lead list (new/quoted/won/lost filters); detail: anonymized patient brief (procedure, questionnaire answers, photos), respond-by timer.

### 33. Quote Builder
- Itemized quote form: procedure(s), package inclusions (hotel nights, transfers, interpreter), price, validity, doctor assignment, notes → submit to coordinator for review before patient sees it.

### 34. Profile Management
- Edit clinic content: photos, descriptions, doctor profiles, price list, before/after uploads (with patient-consent attestation checkbox).

### 35. Availability Calendar
- Blocked dates, surgery-slot capacity per week, doctor availability.

### 36. Reviews Management
- Review list; public response composer; flag-for-moderation (disputed review) with reason.

### 37. Commissions & Payouts
- Statement per booked patient: procedure value, commission %, amount due; invoice history; payment status.

---

## F. ADMIN / COORDINATOR CRM [MVP — this is the operational core]

### 38. CRM Pipeline Board
- Kanban: New → Contacted → Qualified → Quoted → Booked → Traveled → Aftercare → Closed (won/lost).
- Lead cards: name, treatment, urgency flag (from funnel Step 4), source, assigned coordinator, last-contact age (SLA color coding).
- Filters: coordinator, treatment, urgency, source; search.

### 39. Lead Detail View
- Full questionnaire answers + photos; contact info + preferred channel; activity timeline (calls, WhatsApp, emails logged); notes; tasks/reminders; quote management (request from clinics, compare clinic quotes, send to patient); status history; lost-reason capture.

### 40. Clinic Management & Vetting
- Clinic directory (active/pending/rejected); vetting checklist workflow (docs verified, credentials checked, site visit report, scoring form → computed ranking score); accreditation expiry alerts; pause/activate listing.

### 41. Review Moderation
- Queue: verify reviewer had a booking → publish; flagged-review resolution; edit-history log (never silently delete — annotate).

### 42. Content Management
- CRUD for treatments, prices, city pages, guides/blog (rich editor, reviewer assignment, publish workflow), FAQs, patient stories.

### 43. Analytics Dashboard
- Funnel: visits → funnel starts → completions → qualified → quoted → booked (conversion % each step, drop-off per funnel step).
- Lead sources, revenue by treatment/clinic, coordinator performance (response time, conversion), abandoned-funnel list for retargeting.

### 44. Admin Settings
- Team/user management (roles: admin, coordinator, content editor), commission rates per clinic, email/WhatsApp templates, consent-record log viewer (GDPR/PDPA audit).

---

## G. TRANSACTIONAL EMAILS / MESSAGES (design templates) [MVP]
- Inquiry confirmation (+ claim-account link), coordinator introduction, quote ready, photo request follow-up, booking confirmation + deposit receipt, pre-travel checklist, appointment reminder, post-treatment check-in, review request, abandoned-funnel recovery ("finish your request"), referral invite [P3].

---

## Build order reminder
MVP = Sections B (pages 1–7, 9–16), C (full funnel), F (CRM), G (emails).
P2 = Patient portal, clinic portal, comparison, telemedicine, AI chat widget, multi-currency, deposits, map view.
P3 = Aftercare, financing, referrals, second opinion, mobile app/PWA, extra languages.
