import { Link, useNavigate } from 'react-router-dom'
import { css, El, eyebrow, h2Style } from '../ui'
import { specialties, specialtyGroups } from '../content/specialties'
import { categoryBySlug } from '../content/treatments'
import { useApp } from '../context'
import Seo from '../components/Seo'
import JsonLd from '../components/JsonLd'
import { breadcrumbJsonLd } from '../seo'

export default function BrowseTreatments() {
  const { openFunnel } = useApp()
  const navigate = useNavigate()

  return (
    <section style={css('max-width:1240px; margin:0 auto; padding:40px 32px 64px;')}>
      <Seo
        title="Browse All Treatments in Thailand | Hospigo"
        description="Explore treatment categories across Thailand's JCI-accredited hospitals — dental, cosmetic, fertility, orthopedics and more. Get a free personalized quote."
        path="/treatments"
      />
      <JsonLd id="breadcrumb" data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'All Treatments', path: '/treatments' }])} />
      <div style={css('display:flex; align-items:center; gap:8px; font-size:13px; color:#8B95AD; margin-bottom:22px;')}>
        <Link to="/" style={css('color:#8B95AD;')}>Home</Link>
        <span>›</span>
        <span style={css('color:#16214A; font-weight:600;')}>All Treatments</span>
      </div>

      <span style={css(eyebrow)}>Full directory</span>
      <h1 style={css('font-size:38px; line-height:1.08; letter-spacing:-.028em; font-weight:800; margin:10px 0 14px; color:#16214A;')}>Browse every treatment we cover</h1>
      <p style={css('font-size:16px; line-height:1.65; color:#5A6580; margin:0 0 40px; max-width:680px;')}>
        28 categories across 5 areas of care. Categories marked <strong style={css('color:#16214A;')}>Available now</strong> already have vetted clinics and a full guide — everything else, tell us what you need and your coordinator will match you directly.
      </p>

      <div style={css('display:flex; flex-direction:column; gap:40px;')}>
        {specialtyGroups.map((group) => (
          <div key={group}>
            <h2 style={css(h2Style + ' font-size:22px; margin-bottom:16px;')}>{group}</h2>
            <div className="uw-grid-3" style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:12px;')}>
              {specialties.filter((s) => s.group === group).map((s) => {
                const hasPage = !!categoryBySlug(s.slug)
                return (
                  <El
                    as="button"
                    key={s.slug}
                    onClick={() => (hasPage ? navigate(`/treatments/${s.slug}`) : openFunnel(s.name))}
                    style={css('display:flex; align-items:center; justify-content:space-between; gap:10px; text-align:left; border:1px solid #E1E8F7; background:#fff; border-radius:14px; padding:16px 18px; cursor:pointer; font-family:inherit; transition:transform .15s, box-shadow .15s;')}
                    hover={css('transform:translateY(-2px); box-shadow:0 12px 26px rgba(35,51,47,.08); border:1px solid #D2DBF0;')}
                  >
                    <span style={css('font-weight:700; font-size:14.5px; color:#16214A;')}>{s.name}</span>
                    {hasPage ? (
                      <span style={css('flex:0 0 auto; font-size:11px; font-weight:800; color:#2E8B57; background:#EAF7EE; padding:4px 8px; border-radius:7px; white-space:nowrap;')}>Available now</span>
                    ) : (
                      <span style={css('flex:0 0 auto; font-size:12px; color:#B7C0DE;')}>›</span>
                    )}
                  </El>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div style={css('margin-top:48px; background:linear-gradient(120deg,#2B50E4,#1B3AB8); color:#fff; border-radius:22px; padding:36px; display:flex; align-items:center; justify-content:space-between; gap:28px; flex-wrap:wrap;')}>
        <div>
          <h2 style={css('font-size:22px; font-weight:800; margin:0 0 6px;')}>Not sure which category fits?</h2>
          <p style={css('font-size:14.5px; color:#D3DEFF; margin:0;')}>Tell us what you need — your coordinator will point you to the right care.</p>
        </div>
        <El as="button" onClick={() => openFunnel()} style={css('background:#fff; color:#2B50E4; border:none; padding:13px 24px; border-radius:12px; font-weight:800; font-size:14.5px; cursor:pointer; white-space:nowrap;')} hover={css('background:#EAF0FF;')}>Get your free quote</El>
      </div>
    </section>
  )
}
