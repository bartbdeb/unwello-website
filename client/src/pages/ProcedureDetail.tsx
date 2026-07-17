import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { css, El, eyebrow, h2Style } from '../ui'
import { categoryBySlug } from '../content/treatments'
import { procedureBySlug, proceduresBySpecialty } from '../content/procedures'
import { hospitals, sortRecommended } from '../content/hospitals'
import { packagesByProcedure, hospitalCheckupNotes, type CheckupPackage } from '../content/checkupPackages'
import { useApp } from '../context'
import ClinicCard from '../components/ClinicCard'
import FaqAccordion from '../components/FaqAccordion'
import Seo from '../components/Seo'
import JsonLd from '../components/JsonLd'
import { breadcrumbJsonLd, faqJsonLd, medicalProcedureJsonLd, withDateModified } from '../seo'

export default function ProcedureDetail() {
  const { specialtySlug = '', procedureSlug = '' } = useParams()
  const { openFunnel } = useApp()
  const cat = categoryBySlug(specialtySlug)
  const proc = procedureBySlug(specialtySlug, procedureSlug)

  const packages = proc ? packagesByProcedure(proc.slug) : []
  const packagesByHospital = useMemo(() => {
    const groups = new Map<string, CheckupPackage[]>()
    packages.forEach((p) => {
      if (!groups.has(p.hospitalSlug)) groups.set(p.hospitalSlug, [])
      groups.get(p.hospitalSlug)!.push(p)
    })
    return Array.from(groups.entries())
  }, [packages])

  if (!cat || !proc) {
    return (
      <section style={css('max-width:820px; margin:0 auto; padding:100px 32px; text-align:center;')}>
        <h1 style={css('font-size:32px; font-weight:800; color:#16214A;')}>Procedure not found</h1>
        <p style={css('font-size:16px; color:#5A6580; margin:12px 0 24px;')}>We couldn't find that procedure.</p>
        <Link to="/treatments" style={css('color:#2B50E4; font-weight:700;')}>← Browse all treatments</Link>
      </section>
    )
  }

  const siblingProcedures = proceduresBySpecialty(cat.slug).filter((p) => p.slug !== proc.slug)
  const catClinics = sortRecommended(hospitals.filter((h) => h.specialties.includes(cat.slug))).slice(0, 6)
  const procDescription = `${proc.name} at JCI-accredited ${cat.name.toLowerCase()} facilities in Thailand. Compare vetted clinics and get a free, all-inclusive quote from a personal coordinator.`

  return (
    <>
      <Seo title={`${proc.name} in Thailand | Hospigo`} description={procDescription} path={`/treatments/${cat.slug}/${proc.slug}`} />
      <JsonLd
        id="breadcrumb"
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Treatments', path: '/treatments' },
          { name: cat.name, path: `/treatments/${cat.slug}` },
          { name: proc.name, path: `/treatments/${cat.slug}/${proc.slug}` },
        ])}
      />
      <JsonLd id="medical-procedure" data={medicalProcedureJsonLd(proc.name, procDescription)} />
      {cat.faqs.length > 0 && <JsonLd id="faq" data={withDateModified(faqJsonLd(cat.faqs), cat.reviewer.date)} />}
      {/* ---- Breadcrumb + hero ---- */}
      <section style={css('background:linear-gradient(180deg,#E4EDFF 0px,#F4F7FF 400px);')}>
        <div style={css('max-width:1240px; margin:0 auto; padding:32px 32px 48px;')}>
          <div style={css('display:flex; align-items:center; gap:8px; font-size:13px; color:#8B95AD; margin-bottom:22px; flex-wrap:wrap;')}>
            <Link to="/" style={css('color:#8B95AD;')}>Home</Link>
            <span>›</span>
            <Link to="/treatments" style={css('color:#8B95AD;')}>Treatments</Link>
            <span>›</span>
            <Link to={`/treatments/${cat.slug}`} style={css('color:#8B95AD;')}>{cat.name}</Link>
            <span>›</span>
            <span style={css('color:#16214A; font-weight:600;')}>{proc.name}</span>
          </div>

          <div style={css('max-width:760px;')}>
            <div style={css('display:inline-flex; align-items:center; gap:9px; background:#fff; border:1px solid #E1E8F7; padding:6px 14px 6px 7px; border-radius:100px; font-size:13px; font-weight:600; color:#3A4468; margin-bottom:18px;')}>
              <span style={css('font-size:16px;')}>{cat.icon}</span>
              Part of {cat.name}
            </div>
            <h1 style={css('font-size:42px; line-height:1.06; letter-spacing:-.028em; font-weight:800; margin:0 0 16px; color:#16214A;')}>{proc.name} in Thailand</h1>
            <p style={css('font-size:17px; line-height:1.6; color:#5A6580; margin:0 0 26px;')}>
              {proc.name} is one of the procedures available at Hospigo-vetted, JCI-accredited {cat.name.toLowerCase()} facilities in Thailand. Share your case with a coordinator to get a personalized, all-inclusive quote — free and non-binding.
            </p>
            <div style={css('display:flex; gap:12px; flex-wrap:wrap;')}>
              <El as="button" onClick={() => openFunnel(proc.name)} style={css('background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:15px 28px; border-radius:13px; font-weight:800; font-size:15.5px; cursor:pointer; box-shadow:0 10px 26px rgba(43,80,228,.26);')} hover={css('background:#1B3AB8;')}>Get your free quote</El>
              <a href={packagesByHospital.length > 0 ? '#packages' : '#clinics'} style={css('background:#fff; color:#16214A; border:1px solid #E1E8F7; padding:15px 24px; border-radius:13px; font-weight:700; font-size:15px; display:flex; align-items:center;')}>
                {packagesByHospital.length > 0 ? 'See package options ↓' : 'See facilities ↓'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Real package options (only for procedures with package-level data) ---- */}
      {packagesByHospital.length > 0 && (
        <section id="packages" style={css('max-width:1240px; margin:0 auto; padding:48px 32px;')}>
          <span style={css(eyebrow)}>Real packages, real prices</span>
          <h2 style={css(h2Style + ' margin-bottom:8px;')}>Available {proc.name.toLowerCase()} options</h2>
          <p style={css('font-size:14.5px; color:#7A85A0; margin:0 0 28px; max-width:680px;')}>
            These are the actual named packages sold by each hospital — prices in Thai Baht (฿), straight from the hospital's own pricing. Your coordinator confirms the right tier for you and handles booking.
          </p>
          {packagesByHospital.map(([hospitalSlug, pkgs]) => (
            <div key={hospitalSlug} style={css('margin-bottom:36px;')}>
              <div style={css('display:flex; align-items:center; justify-content:space-between; gap:16px; margin-bottom:6px; flex-wrap:wrap;')}>
                <h3 style={css('font-size:17px; font-weight:800; color:#16214A; margin:0;')}>{pkgs[0].hospitalName}</h3>
                <Link to={`/clinics/${hospitalSlug}`} style={css('font-size:13px; font-weight:700; color:#2B50E4; white-space:nowrap;')}>View clinic →</Link>
              </div>
              {hospitalCheckupNotes[hospitalSlug] && (
                <p style={css('font-size:12.5px; color:#8B95AD; margin:0 0 16px; max-width:680px;')}>ℹ️ {hospitalCheckupNotes[hospitalSlug]}</p>
              )}
              <div className="uw-grid-3" style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:16px;')}>
                {pkgs.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* ---- Other procedures in this category ---- */}
      {siblingProcedures.length > 0 && (
        <section style={css('max-width:1240px; margin:0 auto; padding:44px 32px;')}>
          <span style={css(eyebrow)}>Related</span>
          <h2 style={css(h2Style + ' margin-bottom:20px;')}>Other {cat.name.toLowerCase()} procedures</h2>
          <div className="uw-grid-3" style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:14px;')}>
            {siblingProcedures.map((p) => (
              <Link
                key={p.slug}
                to={`/treatments/${cat.slug}/${p.slug}`}
                style={css('display:block; border:1px solid #E1E8F7; background:#fff; border-radius:14px; padding:16px 18px; font-weight:700; font-size:14px; color:#16214A;')}
              >
                {p.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ---- Matched facilities ---- */}
      <section id="clinics" style={css('background:#E9F0FF;')}>
        <div style={css('max-width:1240px; margin:0 auto; padding:48px 32px;')}>
          <span style={css(eyebrow)}>JCI-accredited facilities</span>
          <h2 style={css(h2Style + ' margin-bottom:8px;')}>Facilities offering {cat.name.toLowerCase()}</h2>
          <p style={css('font-size:14px; color:#7A85A0; margin:0 0 24px; max-width:640px;')}>These facilities are vetted for {cat.name.toLowerCase()} broadly — your coordinator confirms which surgeon and facility perform {proc.name.toLowerCase()} specifically when preparing your quote.</p>
          {catClinics.length > 0 ? (
            <div className="uw-grid-3" style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:18px;')}>
              {catClinics.map((h) => <ClinicCard key={h.slug} h={h} />)}
            </div>
          ) : (
            <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:18px; padding:44px 32px; text-align:center;')}>
              <div style={css('font-size:30px; margin-bottom:10px;')}>🔍</div>
              <h3 style={css('font-size:18px; font-weight:800; color:#16214A; margin:0 0 8px;')}>We're still vetting facilities for this specialty</h3>
              <p style={css('font-size:14.5px; color:#7A85A0; margin:0 0 20px; max-width:420px; margin-left:auto; margin-right:auto;')}>Get a free quote and your coordinator will match you directly with a suitable clinic.</p>
              <El as="button" onClick={() => openFunnel(proc.name)} style={css('background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:13px 26px; border-radius:12px; font-weight:700; font-size:14.5px; cursor:pointer;')} hover={css('background:#1B3AB8;')}>Get my free quote</El>
            </div>
          )}
        </div>
      </section>

      {/* ---- FAQ (reuses the parent category's FAQs — same underlying process questions apply) ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:48px 32px;')}>
        <span style={css(eyebrow)}>Good to know</span>
        <h2 style={css(h2Style + ' margin-bottom:24px;')}>Frequently asked questions</h2>
        <FaqAccordion faqs={cat.faqs} />
      </section>

      {/* ---- CTA ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:0 32px 64px;')}>
        <div style={css('background:linear-gradient(120deg,#2B50E4,#1B3AB8); color:#fff; border-radius:24px; padding:44px; display:flex; align-items:center; justify-content:space-between; gap:32px; flex-wrap:wrap; box-shadow:0 20px 50px rgba(43,80,228,.24);')}>
          <div>
            <h2 style={css('font-size:28px; font-weight:800; letter-spacing:-.02em; margin:0 0 8px; max-width:520px;')}>Ready to explore {proc.name.toLowerCase()} in Thailand?</h2>
            <p style={css('font-size:15px; color:#D3DEFF; margin:0; max-width:480px;')}>Get a free, no-obligation quote and a coordinator who plans everything around your trip.</p>
          </div>
          <El as="button" onClick={() => openFunnel(proc.name)} style={css('background:#fff; color:#2B50E4; border:none; padding:15px 30px; border-radius:13px; font-weight:800; font-size:15px; cursor:pointer; white-space:nowrap; box-shadow:0 10px 24px rgba(0,0,0,.16);')} hover={css('background:#EAF0FF;')}>Get your free quote</El>
        </div>
      </section>
    </>
  )
}

function PackageCard({ pkg }: { pkg: CheckupPackage }) {
  const { openFunnel } = useApp()
  const [open, setOpen] = useState(false)
  const pct = Math.round(((pkg.normalPrice - pkg.packagePrice) / pkg.normalPrice) * 100)

  return (
    <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:16px; padding:18px; display:flex; flex-direction:column; gap:10px;')}>
      <div>
        <h4 style={css('font-size:15.5px; font-weight:800; color:#16214A; margin:0 0 4px;')}>{pkg.packageName}</h4>
        <span style={css('font-size:12px; color:#8B95AD;')}>{pkg.demographic}</span>
      </div>

      <div style={css('display:flex; align-items:baseline; gap:8px;')}>
        <span style={css('font-size:19px; font-weight:800; color:#2B50E4;')}>฿{pkg.packagePrice.toLocaleString('en-US')}</span>
        <span style={css('font-size:13px; color:#B7C0DE; text-decoration:line-through;')}>฿{pkg.normalPrice.toLocaleString('en-US')}</span>
        <span style={css('font-size:11px; font-weight:800; color:#2E8B57; background:#EAF7EE; padding:2px 7px; border-radius:7px;')}>-{pct}%</span>
      </div>

      <div style={css('display:flex; gap:6px; flex-wrap:wrap;')}>
        <span style={css('font-size:11px; font-weight:700; color:#5A6580; background:#F4F7FF; padding:3px 8px; border-radius:7px;')}>⏱ {pkg.duration}</span>
        <span style={css('font-size:11px; font-weight:700; color:#5A6580; background:#F4F7FF; padding:3px 8px; border-radius:7px;')}>{pkg.itemCount} items</span>
      </div>
      <span style={css('font-size:11px; color:#B7C0DE;')}>{pkg.validPeriod}</span>

      <button
        onClick={() => setOpen((o) => !o)}
        style={css('background:none; border:none; padding:0; text-align:left; font-family:inherit; font-size:12.5px; font-weight:700; color:#2B50E4; cursor:pointer; display:flex; align-items:center; gap:5px;')}
      >
        {open ? 'Hide' : 'View'} what's included
        <span style={css('display:inline-block; transition:transform .2s; transform:rotate(' + (open ? '180' : '0') + 'deg);')}>⌄</span>
      </button>
      {open && (
        <ul style={css('margin:0; padding-left:18px; display:flex; flex-direction:column; gap:4px;')}>
          {pkg.items.map((item) => (
            <li key={item} style={css('font-size:12.5px; line-height:1.5; color:#5A6580;')}>{item}</li>
          ))}
        </ul>
      )}

      <El
        as="button"
        onClick={() => openFunnel(`${pkg.packageName} (${pkg.hospitalName})`)}
        style={css('margin-top:4px; width:100%; background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:10px; border-radius:10px; font-weight:700; font-size:13px; cursor:pointer;')}
        hover={css('background:#1B3AB8;')}
      >
        Get quote for this package
      </El>
    </div>
  )
}
