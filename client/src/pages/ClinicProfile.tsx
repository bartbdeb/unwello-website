import { Link, useParams } from 'react-router-dom'
import { css, El, Placeholder, eyebrow, h2Style } from '../ui'
import { hospitalBySlug } from '../content/hospitals'
import { categoryBySlug } from '../content/treatments'
import { specialtyBySlug } from '../content/specialties'
import { useApp } from '../context'
import FaqAccordion from '../components/FaqAccordion'
import ReviewsSection from '../components/ReviewsSection'
import Seo, { SITE_URL } from '../components/Seo'
import JsonLd from '../components/JsonLd'
import { breadcrumbJsonLd, faqJsonLd, hospitalJsonLd, truncate } from '../seo'

// Generic, non-hospital-specific FAQ — real per-facility content (pricing,
// doctors, patient reviews) isn't in the source data, so these explain the
// vetting/quote process instead of making per-hospital claims.
const GENERIC_FAQS = [
  { q: 'What does JCI accreditation mean?', a: 'Joint Commission International accreditation is a globally recognized standard for patient safety and quality of care. Every facility listed on Hospigo holds current JCI accreditation.' },
  { q: 'What does "Hospigo Approved" mean?', a: 'A small subset of JCI-accredited facilities that our team has additionally reviewed and prioritizes when matching patients. All other facilities shown are part of Thailand\'s full JCI-accredited directory.' },
  { q: 'How do I get pricing and doctor details for this facility?', a: 'Request a free quote — your coordinator will confirm specialist availability, an itemized price, and package inclusions directly with the facility for your specific case.' },
  { q: 'Is this facility a good fit for my treatment?', a: 'Share your treatment and details in the free quote form. Your coordinator will confirm fit, or suggest a better-matched facility if this one doesn\'t specialize in what you need.' },
]

export default function ClinicProfile() {
  const { slug = '' } = useParams()
  const { openFunnel } = useApp()
  const h = hospitalBySlug(slug)

  if (!h) {
    return (
      <section style={css('max-width:820px; margin:0 auto; padding:100px 32px; text-align:center;')}>
        <h1 style={css('font-size:32px; font-weight:800; color:#16214A;')}>Facility not found</h1>
        <p style={css('font-size:16px; color:#5A6580; margin:12px 0 24px;')}>We couldn't find that facility.</p>
        <Link to="/clinics" style={css('color:#2B50E4; font-weight:700;')}>← Back to all clinics</Link>
      </section>
    )
  }

  const preferredTreatment = h.specialties[0] ? categoryBySlug(h.specialties[0])?.name : undefined
  const jciYear = (h.jciSince.match(/\d{4}/) || [])[0] ?? h.jciSince
  const clinicDescription =
    h.description || h.notes
      ? truncate(h.description || h.notes, 158)
      : `${h.name} is a JCI-accredited facility in ${h.city}, Thailand${h.approved ? ', Hospigo Approved' : ''}. Get a free, all-inclusive quote from a personal coordinator.`

  return (
    <>
      <Seo
        title={`${h.name} — ${h.city}, Thailand | Hospigo`}
        description={clinicDescription}
        path={`/clinics/${h.slug}`}
        image={h.imageFile ? SITE_URL + h.imageFile : undefined}
      />
      <JsonLd
        id="breadcrumb"
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Clinics', path: '/clinics' },
          { name: h.name, path: `/clinics/${h.slug}` },
        ])}
      />
      <JsonLd id="faq" data={faqJsonLd(GENERIC_FAQS)} />
      <JsonLd id="hospital" data={hospitalJsonLd(h)} />
      {/* ---- Header ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:24px 32px 0;')}>
        <div style={css('display:flex; align-items:center; gap:8px; font-size:13px; color:#8B95AD; margin-bottom:18px;')}>
          <Link to="/" style={css('color:#8B95AD;')}>Home</Link>
          <span>›</span>
          <Link to="/clinics" style={css('color:#8B95AD;')}>Clinics</Link>
          <span>›</span>
          <span style={css('color:#16214A; font-weight:600;')}>{h.name}</span>
        </div>
        {h.imageFile ? (
          <img src={h.imageFile} alt={h.name} style={css('width:100%; height:280px; object-fit:cover; border-radius:20px; display:block;')} />
        ) : (
          <Placeholder style="height:220px; border-radius:20px;" label={h.city} />
        )}
      </section>

      {/* ---- Name / badges + sticky quote card ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:28px 32px;')}>
        <div className="uw-savings" style={css('display:grid; grid-template-columns:1.5fr 1fr; gap:40px; align-items:start;')}>
          <div>
            <div style={css('display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-bottom:10px;')}>
              {h.approved && (
                <span style={css('background:#2E8B57; color:#fff; font-size:12px; font-weight:800; padding:5px 11px; border-radius:8px; letter-spacing:.02em;')}>✓ Hospigo Approved</span>
              )}
              <span style={css('background:#E7ECFF; color:#2B50E4; font-size:12px; font-weight:800; padding:5px 11px; border-radius:8px; letter-spacing:.02em;')}>JCI Accredited</span>
              <span style={css('background:#F2F6FF; color:#5A6580; font-size:12px; font-weight:700; padding:5px 11px; border-radius:8px;')}>{h.jciProgramType}</span>
            </div>
            <h1 style={css('font-size:34px; font-weight:800; letter-spacing:-.02em; margin:0 0 8px; color:#16214A;')}>{h.name}</h1>
            <div style={css('display:flex; align-items:center; gap:14px; font-size:14.5px; color:#5A6580; margin-bottom:16px; flex-wrap:wrap;')}>
              <span>📍 {h.city}</span>
              <span>✓ JCI accredited since {jciYear}</span>
            </div>
            <p style={css('font-size:15px; line-height:1.7; color:#5A6580; margin:0 0 14px;')}>
              {h.description || h.notes || `${h.name} is a JCI-accredited facility in ${h.city}, Thailand, recognized under the ${h.jciProgramType}.`}
            </p>
            {h.languages && !/not specified/i.test(h.languages) && (
              <p style={css('font-size:13.5px; color:#8B95AD; margin:0;')}>🗣️ {h.languages}</p>
            )}
          </div>

          {/* Sticky quote card (desktop only — see .uw-sticky-desktop) */}
          <div className="uw-sticky-desktop" style={css('position:sticky; top:90px; background:#fff; border:1px solid #E1E8F7; border-radius:20px; padding:24px; box-shadow:0 14px 34px rgba(35,51,47,.08);')}>
            <div style={css('font-size:13px; font-weight:700; color:#2B50E4; letter-spacing:.06em; text-transform:uppercase; margin-bottom:10px;')}>Get matched</div>
            <El
              as="button"
              onClick={() => openFunnel(preferredTreatment)}
              style={css('width:100%; background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:15px; border-radius:13px; font-weight:800; font-size:15px; cursor:pointer; box-shadow:0 10px 24px rgba(43,80,228,.26); margin-bottom:18px;')}
              hover={css('background:#1B3AB8;')}
            >
              Get Free Quote for this facility
            </El>
            <div style={css('font-size:12.5px; font-weight:700; color:#16214A; text-transform:uppercase; letter-spacing:.04em; margin-bottom:10px;')}>Every free quote includes</div>
            <div style={css('display:flex; flex-direction:column; gap:9px;')}>
              {['A dedicated coordinator, free and non-binding', 'An itemized price confirmed with the facility', 'Travel & logistics support if you book', 'Aftercare check-ins after treatment'].map((inc) => (
                <div key={inc} style={css('display:flex; align-items:flex-start; gap:9px; font-size:13.5px; color:#3A4468;')}>
                  <span style={css('color:#2B50E4; flex:0 0 auto;')}>✓</span>{inc}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- Specialties ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:20px 32px;')}>
        <span style={css(eyebrow)}>Specialties</span>
        <h2 style={css(h2Style + ' margin-bottom:16px;')}>What this facility treats</h2>
        <div style={css('display:flex; gap:8px; flex-wrap:wrap;')}>
          {h.specialties.map((slug) => {
            const spec = specialtyBySlug(slug)
            const hasPage = !!categoryBySlug(slug)
            const chip = css('background:#ECF1FD; color:#2B50E4; font-size:13px; font-weight:700; padding:7px 13px; border-radius:9px; display:inline-block;')
            return hasPage ? (
              <Link key={slug} to={`/treatments/${slug}`} style={chip}>{spec?.name ?? slug}</Link>
            ) : (
              <span key={slug} style={chip}>{spec?.name ?? slug}</span>
            )
          })}
        </div>
      </section>

      {/* ---- Accreditation & Certifications ---- */}
      <section style={css('background:#E9F0FF;')}>
        <div style={css('max-width:1240px; margin:0 auto; padding:44px 32px;')}>
          <span style={css(eyebrow)}>Verified credentials</span>
          <h2 style={css(h2Style + ' margin-bottom:20px;')}>Accreditation & certifications</h2>
          <div className="uw-grid-3" style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:16px;')}>
            <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:16px; padding:20px;')}>
              <div style={css('font-size:13px; font-weight:700; color:#16214A; text-transform:uppercase; letter-spacing:.04em; margin-bottom:10px;')}>JCI Accreditation</div>
              <div style={css('font-size:14.5px; color:#3A4468; margin-bottom:6px;')}>Program: {h.jciProgramType}</div>
              <div style={css('font-size:14.5px; color:#3A4468;')}>Accredited since: {h.jciSince}</div>
            </div>
            <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:16px; padding:20px;')}>
              <div style={css('font-size:13px; font-weight:700; color:#16214A; text-transform:uppercase; letter-spacing:.04em; margin-bottom:10px;')}>Clinical Care Certifications</div>
              {h.ccpc.length > 0 ? (
                <ul style={css('margin:0; padding-left:18px; font-size:14px; color:#3A4468; line-height:1.7;')}>
                  {h.ccpc.map((c) => <li key={c}>{c}</li>)}
                </ul>
              ) : (
                <span style={css('font-size:13.5px; color:#8B95AD;')}>None listed in the JCI directory.</span>
              )}
            </div>
            <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:16px; padding:20px;')}>
              <div style={css('font-size:13px; font-weight:700; color:#16214A; text-transform:uppercase; letter-spacing:.04em; margin-bottom:10px;')}>Other Accreditations</div>
              {h.otherAccreditations.length > 0 ? (
                <div style={css('display:flex; gap:6px; flex-wrap:wrap;')}>
                  {h.otherAccreditations.map((a) => (
                    <span key={a} style={css('background:#ECF1FD; color:#2B50E4; font-size:12.5px; font-weight:700; padding:4px 9px; border-radius:7px;')}>{a}</span>
                  ))}
                </div>
              ) : (
                <span style={css('font-size:13.5px; color:#8B95AD;')}>Not specified — verify directly with the facility.</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ---- Reviews (real, live from Google) ---- */}
      <ReviewsSection name={h.name} city={h.city} />

      {/* ---- FAQ ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:48px 32px;')}>
        <span style={css(eyebrow)}>Good to know</span>
        <h2 style={css(h2Style + ' margin-bottom:24px;')}>Frequently asked questions</h2>
        <FaqAccordion faqs={GENERIC_FAQS} />
      </section>

      {/* ---- CTA ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:0 32px 64px;')}>
        <div style={css('background:linear-gradient(120deg,#2B50E4,#1B3AB8); color:#fff; border-radius:24px; padding:44px; display:flex; align-items:center; justify-content:space-between; gap:32px; flex-wrap:wrap; box-shadow:0 20px 50px rgba(43,80,228,.24);')}>
          <div>
            <h2 style={css('font-size:28px; font-weight:800; letter-spacing:-.02em; margin:0 0 8px; max-width:520px;')}>Ready to get a quote from {h.name}?</h2>
            <p style={css('font-size:15px; color:#D3DEFF; margin:0; max-width:480px;')}>Free, no-obligation, and matched to your case by your coordinator.</p>
          </div>
          <El as="button" onClick={() => openFunnel(preferredTreatment)} style={css('background:#fff; color:#2B50E4; border:none; padding:15px 30px; border-radius:13px; font-weight:800; font-size:15px; cursor:pointer; white-space:nowrap; box-shadow:0 10px 24px rgba(0,0,0,.16);')} hover={css('background:#EAF0FF;')}>Get your free quote</El>
        </div>
      </section>
    </>
  )
}
