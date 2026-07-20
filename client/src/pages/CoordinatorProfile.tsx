import { Link, useParams } from 'react-router-dom'
import { css, eyebrow } from '../ui'
import { coordinatorBySlug } from '../content/coordinators'
import { useApp } from '../context'
import Seo, { SITE_URL } from '../components/Seo'
import JsonLd from '../components/JsonLd'
import { breadcrumbJsonLd, personJsonLd, truncate } from '../seo'

export default function CoordinatorProfile() {
  const { slug = '' } = useParams()
  const { openFunnel } = useApp()
  const c = coordinatorBySlug(slug)

  if (!c) {
    return (
      <section style={css('max-width:820px; margin:0 auto; padding:100px 32px; text-align:center;')}>
        <h1 style={css('font-size:32px; font-weight:800; color:#16214A;')}>Coordinator not found</h1>
        <p style={css('font-size:16px; color:#5A6580; margin:12px 0 24px;')}>We couldn't find that profile.</p>
        <Link to="/" style={css('color:#2B50E4; font-weight:700;')}>← Back home</Link>
      </section>
    )
  }

  return (
    <>
      <Seo
        title={c.pageTitle}
        description={truncate(c.tagline, 158)}
        path={`/coordinators/${c.slug}`}
        image={SITE_URL + c.photo}
      />
      <JsonLd
        id="breadcrumb"
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: c.name, path: `/coordinators/${c.slug}` },
        ])}
      />
      <JsonLd id="person" data={personJsonLd({ name: c.name, jobTitle: c.role, slug: c.slug, photo: c.photo, description: c.tagline })} />

      <section style={css('max-width:1240px; margin:0 auto; padding:24px 32px 0;')}>
        <div style={css('display:flex; align-items:center; gap:8px; font-size:13px; color:#8B95AD; margin-bottom:18px;')}>
          <Link to="/" style={css('color:#8B95AD;')}>Home</Link>
          <span>›</span>
          <span style={css('color:#16214A; font-weight:600;')}>{c.name}</span>
        </div>
      </section>

      <section style={css('max-width:920px; margin:0 auto; padding:8px 32px 56px;')}>
        <div style={css('display:flex; align-items:center; gap:22px; margin-bottom:28px; flex-wrap:wrap;')}>
          <img src={c.photo} alt={`${c.name}, ${c.role} at Hospigo`} style={css('width:104px; height:104px; border-radius:50%; object-fit:cover; display:block; box-shadow:0 10px 26px rgba(35,51,47,.12);')} />
          <div>
            <span style={css(eyebrow)}>{c.role}</span>
            <h1 style={css('font-size:32px; font-weight:800; letter-spacing:-.02em; margin:8px 0 4px; color:#16214A;')}>{c.name}</h1>
            <p style={css('font-size:15px; color:#5A6580; margin:0; max-width:520px;')}>{c.tagline}</p>
          </div>
        </div>

        <div className="uw-savings" style={css('display:grid; grid-template-columns:1.5fr 1fr; gap:36px; align-items:start;')}>
          <div>
            {c.bio.map((p, i) => (
              <p key={i} style={css('font-size:15.5px; line-height:1.75; color:#3A4468; margin:0 0 16px;')}>{p}</p>
            ))}
            <p style={css('font-size:12.5px; line-height:1.6; color:#8B95AD; margin:20px 0 0;')}>
              Sourced from {c.name.split(' ')[0]}'s own professional profile. See our{' '}
              <Link to="/medical-disclaimer" style={css('color:#5A6580; text-decoration:underline;')}>Medical Disclaimer</Link> — Hospigo coordinators are not medical professionals and don't provide clinical advice.
            </p>
          </div>
          <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:18px; padding:22px;')}>
            <div style={css('font-size:13px; font-weight:700; color:#16214A; text-transform:uppercase; letter-spacing:.04em; margin-bottom:14px;')}>Background</div>
            <div style={css('display:flex; flex-direction:column; gap:12px; margin-bottom:22px;')}>
              {c.highlights.map((h) => (
                <div key={h} style={css('display:flex; align-items:flex-start; gap:10px; font-size:13.5px; color:#3A4468; line-height:1.5;')}>
                  <span style={css('width:20px; height:20px; border-radius:7px; background:#ECF1FD; color:#2B50E4; display:flex; align-items:center; justify-content:center; font-size:11px; flex:0 0 auto; margin-top:1px;')}>✓</span>
                  {h}
                </div>
              ))}
            </div>
            <button
              onClick={() => openFunnel()}
              style={css('width:100%; background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:13px 20px; border-radius:12px; font-weight:700; font-size:14.5px; cursor:pointer;')}
            >
              Talk to your coordinator
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
