import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { css, El, eyebrow, h2Style } from '../ui'
import { categoryBySlug } from '../content/treatments'
import { proceduresBySpecialty } from '../content/procedures'
import { hospitals, sortRecommended } from '../content/hospitals'
import { patientStories } from '../content/stories'
import { newsArticles } from '../content/news'
import { countryMeta, type Country } from '../data'
import { useApp } from '../context'
import ClinicCard from '../components/ClinicCard'
import FaqAccordion from '../components/FaqAccordion'

const CLINICS_VISIBLE = 6

export default function TreatmentCategory() {
  const { slug = '' } = useParams()
  const { openFunnel } = useApp()
  const cat = categoryBySlug(slug)
  const [country, setCountry] = useState<Country>('US')
  const [showAllClinics, setShowAllClinics] = useState(false)

  if (!cat) {
    return (
      <section style={css('max-width:820px; margin:0 auto; padding:100px 32px; text-align:center;')}>
        <h1 style={css('font-size:32px; font-weight:800; color:#16214A;')}>Treatment not found</h1>
        <p style={css('font-size:16px; color:#5A6580; margin:12px 0 24px;')}>We couldn’t find that treatment. Browse our treatments or get a free quote.</p>
        <Link to="/" style={css('color:#2B50E4; font-weight:700;')}>← Back to home</Link>
      </section>
    )
  }

  const meta = countryMeta[country]
  const catClinics = sortRecommended(hospitals.filter((h) => h.specialties.includes(cat.slug)))
  const catStories = patientStories.filter((s) => cat.storyMatch !== '___none___' && s.procedure.includes(cat.storyMatch))
  const catProcedures = proceduresBySpecialty(cat.slug)
  const catNews = newsArticles.filter((a) => a.categorySlug === cat.slug)

  return (
    <>
      {/* ---- Sub-hero ---- */}
      <section style={css('background:linear-gradient(180deg,#E4EDFF 0px,#F4F7FF 400px);')}>
        <div style={css('max-width:1240px; margin:0 auto; padding:32px 32px 48px;')}>
          <div style={css('display:flex; align-items:center; gap:8px; font-size:13px; color:#8B95AD; margin-bottom:22px;')}>
            <Link to="/" style={css('color:#8B95AD;')}>Home</Link>
            <span>›</span>
            <span style={css('color:#5A6580;')}>Treatments</span>
            <span>›</span>
            <span style={css('color:#16214A; font-weight:600;')}>{cat.name}</span>
          </div>

          <div className="uw-hero" style={css('display:grid; grid-template-columns:1.15fr .85fr; gap:48px; align-items:center;')}>
            <div>
              <div style={css('display:inline-flex; align-items:center; gap:9px; background:#fff; border:1px solid #E1E8F7; padding:6px 14px 6px 7px; border-radius:100px; font-size:13px; font-weight:600; color:#3A4468; margin-bottom:18px;')}>
                <span style={css('font-size:16px;')}>{cat.icon}</span>
                All-inclusive from <strong style={css('color:#2B50E4;')}>{cat.priceFrom}</strong>
              </div>
              <h1 style={css('font-size:46px; line-height:1.05; letter-spacing:-.028em; font-weight:800; margin:0 0 18px; color:#16214A;')}>{cat.hero.headline}</h1>
              <p style={css('font-size:17px; line-height:1.6; color:#5A6580; margin:0 0 26px; max-width:520px;')}>{cat.hero.subcopy}</p>
              <div style={css('display:flex; gap:12px; flex-wrap:wrap;')}>
                <El as="button" onClick={() => openFunnel(cat.name)} style={css('background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:15px 28px; border-radius:13px; font-weight:800; font-size:15.5px; cursor:pointer; box-shadow:0 10px 26px rgba(43,80,228,.26);')} hover={css('background:#1B3AB8;')}>Get your free {cat.name.split(' ')[0].toLowerCase()} quote</El>
                <a href="#clinics" style={css('background:#fff; color:#16214A; border:1px solid #E1E8F7; padding:15px 24px; border-radius:13px; font-weight:700; font-size:15px; display:flex; align-items:center;')}>See clinics ↓</a>
              </div>
            </div>
            <div className="uw-hide-mobile" style={css('background:#fff; border:1px solid #E1E8F7; border-radius:22px; padding:26px; box-shadow:0 18px 44px rgba(35,51,47,.1);')}>
              <div style={css('font-size:13px; font-weight:700; color:#2B50E4; letter-spacing:.08em; text-transform:uppercase; margin-bottom:16px;')}>Quick facts</div>
              {[
                ['Starting price', cat.priceFrom + ' all-inclusive'],
                ['Savings vs. home', 'up to 70%'],
                ['Clinics available', catClinics.length + ' vetted'],
                ['Coordinator', 'Free · 24/7'],
              ].map(([k, v]) => (
                <div key={k} style={css('display:flex; align-items:center; justify-content:space-between; gap:16px; padding:12px 0; border-bottom:1px solid #ECF1FD;')}>
                  <span style={css('font-size:14px; color:#7A85A0;')}>{k}</span>
                  <span style={css('font-size:14px; font-weight:700; color:#16214A; text-align:right;')}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- Intro + reviewer byline ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:44px 32px 8px;')}>
        <div style={css('max-width:820px;')}>
          <p style={css('font-size:17px; line-height:1.7; color:#3A4468; margin:0 0 16px;')}>{cat.intro}</p>
          <div style={css('display:flex; align-items:center; gap:11px; font-size:13.5px; color:#8B95AD;')}>
            <span style={css('width:34px; height:34px; border-radius:50%; background:#ECF1FD; display:flex; align-items:center; justify-content:center; font-size:15px;')}>🩺</span>
            <span>Medically reviewed by <strong style={css('color:#16214A;')}>{cat.reviewer.name}</strong>, {cat.reviewer.credentials} · {cat.reviewer.date}</span>
          </div>
        </div>
      </section>

      {/* ---- Procedures within category (real, from the JCI database) ---- */}
      {catProcedures.length > 0 && (
        <section style={css('max-width:1240px; margin:0 auto; padding:44px 32px;')}>
          <span style={css(eyebrow)}>Procedures</span>
          <h2 style={css(h2Style + ' margin-bottom:24px;')}>{cat.name} options</h2>
          <div className="uw-grid-3" style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:16px;')}>
            {catProcedures.map((p) => (
              <Link
                key={p.slug}
                to={`/treatments/${cat.slug}/${p.slug}`}
                style={css('display:block; text-align:left; border:1px solid #E1E8F7; background:#fff; border-radius:16px; padding:20px; font-family:inherit; transition:transform .16s, box-shadow .16s;')}
              >
                <span style={css('font-weight:700; font-size:16px; color:#16214A;')}>{p.name}</span>
                <span style={css('display:block; margin-top:12px; font-size:13px; font-weight:700; color:#2B50E4;')}>Learn more →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ---- Price comparison ---- */}
      <section style={css('background:#E9F0FF;')}>
        <div style={css('max-width:1240px; margin:0 auto; padding:56px 32px;')}>
          <div style={css('display:flex; align-items:flex-end; justify-content:space-between; gap:20px; margin-bottom:22px; flex-wrap:wrap;')}>
            <div>
              <span style={css(eyebrow)}>Transparent pricing</span>
              <h2 style={css(h2Style)}>{cat.name} costs vs. home</h2>
            </div>
            <div style={css('display:inline-flex; background:#fff; border:1px solid #E1E8F7; border-radius:13px; padding:5px; gap:4px;')}>
              {(Object.keys(countryMeta) as Country[]).map((c) => (
                <button key={c} onClick={() => setCountry(c)} style={css('border:none; font-family:inherit; font-size:13.5px; font-weight:700; padding:9px 16px; border-radius:9px; cursor:pointer; transition:all .15s; ' + (country === c ? 'background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff;' : 'background:transparent; color:#5A6580;'))}>{countryMeta[c].pill}</button>
              ))}
            </div>
          </div>
          <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:20px; overflow:hidden; box-shadow:0 14px 34px rgba(35,51,47,.08);')}>
            <div style={css('overflow-x:auto;')}>
              <div style={css('display:grid; grid-template-columns:1.6fr 1fr 1fr .8fr; min-width:480px; padding:15px 22px; background:#16214A; color:#fff; font-size:12.5px; font-weight:700; letter-spacing:.03em;')}>
                <span>Procedure</span><span style={css('text-align:right;')}>Thailand</span><span style={css('text-align:right;')}>{meta.label}</span><span style={css('text-align:right;')}>Save</span>
              </div>
              {cat.priceTable.map((r) => {
                const home = r[country]
                const pct = Math.round(((home - r.th) / home) * 100)
                return (
                  <div key={r.name} style={css('display:grid; grid-template-columns:1.6fr 1fr 1fr .8fr; min-width:480px; padding:16px 22px; border-bottom:1px solid #ECF1FD; align-items:center;')}>
                    <span style={css('font-weight:700; font-size:14.5px; color:#16214A;')}>{r.name}</span>
                    <span style={css('text-align:right; font-weight:800; font-size:14.5px; color:#2B50E4;')}>${r.th.toLocaleString('en-US')}</span>
                    <span style={css('text-align:right; font-size:14px; color:#8B95AD; text-decoration:line-through;')}>{meta.symbol}{home.toLocaleString('en-US')}</span>
                    <span style={css('text-align:right; font-weight:800; font-size:13.5px;')}><span style={css('background:#E7ECFF; color:#2B50E4; padding:3px 8px; border-radius:8px;')}>−{pct}%</span></span>
                  </div>
                )
              })}
            </div>
            <div style={css('padding:14px 22px; font-size:12px; color:#8B95AD; text-align:center;')}>Indicative ranges · your personal quote is tailored to your case</div>
          </div>
        </div>
      </section>

      {/* ---- Top clinics ---- */}
      <section id="clinics" style={css('max-width:1240px; margin:0 auto; padding:56px 32px;')}>
        <span style={css(eyebrow)}>JCI-accredited facilities</span>
        <h2 style={css(h2Style + ' margin-bottom:24px;')}>Facilities for {cat.name.toLowerCase()}</h2>
        {catClinics.length > 0 ? (
          <>
            <div className="uw-grid-3" style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:18px;')}>
              {catClinics.slice(0, CLINICS_VISIBLE).map((h) => (
                <ClinicCard key={h.slug} h={h} />
              ))}
            </div>
            {catClinics.length > CLINICS_VISIBLE && (
              <>
                <div style={css('display:grid; grid-template-rows:' + (showAllClinics ? '1fr' : '0fr') + '; transition:grid-template-rows .4s ease;')}>
                  <div style={css('overflow:hidden; min-height:0;')}>
                    <div className="uw-grid-3" style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin-top:18px;')}>
                      {catClinics.slice(CLINICS_VISIBLE).map((h) => (
                        <ClinicCard key={h.slug} h={h} />
                      ))}
                    </div>
                  </div>
                </div>
                <div style={css('display:flex; justify-content:center; margin-top:24px;')}>
                  <El
                    as="button"
                    onClick={() => setShowAllClinics((v) => !v)}
                    style={css('width:44px; height:44px; border-radius:50%; border:1px solid #E1E8F7; background:#fff; cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:16px; color:#2B50E4; box-shadow:0 6px 16px rgba(35,51,47,.08); transition:transform .3s ease; transform:rotate(' + (showAllClinics ? '180deg' : '0deg') + ');')}
                    hover={css('background:#F2F6FF; border:1px solid #D2DBF0;')}
                    aria-label={showAllClinics ? 'Show fewer clinics' : 'Show more clinics'}
                  >
                    ⌄
                  </El>
                </div>
              </>
            )}
          </>
        ) : (
          <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:18px; padding:44px 32px; text-align:center;')}>
            <div style={css('font-size:30px; margin-bottom:10px;')}>🔍</div>
            <h3 style={css('font-size:18px; font-weight:800; color:#16214A; margin:0 0 8px;')}>We're still vetting facilities for this specialty</h3>
            <p style={css('font-size:14.5px; color:#7A85A0; margin:0 0 20px; max-width:420px; margin-left:auto; margin-right:auto;')}>Get a free quote and your coordinator will match you directly with a suitable clinic — no need to wait for the directory.</p>
            <El as="button" onClick={() => openFunnel(cat.name)} style={css('background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:13px 26px; border-radius:12px; font-weight:700; font-size:14.5px; cursor:pointer;')} hover={css('background:#1B3AB8;')}>Get my free quote</El>
          </div>
        )}
      </section>

      {/* ---- Patient stories (if any match) ---- */}
      {catStories.length > 0 && (
        <section style={css('background:linear-gradient(140deg,#1C2E7C 0%,#0F1B4A 100%); color:#fff;')}>
          <div style={css('max-width:1240px; margin:0 auto; padding:56px 32px;')}>
            <span style={css('color:#5B84FF; font-weight:700; font-size:13px; letter-spacing:.12em; text-transform:uppercase;')}>Patient stories</span>
            <h2 style={css('font-size:32px; font-weight:800; letter-spacing:-.025em; margin:10px 0 24px;')}>Real {cat.name.toLowerCase()} journeys</h2>
            <div className="uw-grid-3" style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:20px;')}>
              {catStories.map((s) => (
                <Link key={s.slug} to={`/stories/${s.slug}`} style={css('display:block; background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.1); border-radius:20px; padding:22px; color:inherit;')}>
                  <p style={css('font-size:15.5px; line-height:1.55; margin:0 0 16px; color:#EAF0FF; font-weight:500;')}>“{s.quote}”</p>
                  <div style={css('font-size:13.5px; font-weight:700;')}>{s.name} {s.flag}</div>
                  <div style={css('font-size:12.5px; color:#A6B0D0;')}>{s.procedure}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- Related reading (cross-linked from the newsroom) ---- */}
      {catNews.length > 0 && (
        <section style={css('max-width:1240px; margin:0 auto; padding:56px 32px 0;')}>
          <span style={css(eyebrow)}>Related reading</span>
          <h2 style={css(h2Style + ' margin-bottom:24px;')}>Guides for {cat.name.toLowerCase()}</h2>
          <div className="uw-grid-3" style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:18px;')}>
            {catNews.map((a) => (
              <Link key={a.slug} to={`/news/${a.slug}`} style={css('display:block; border:1px solid #E1E8F7; background:#fff; border-radius:16px; padding:18px; color:inherit;')}>
                <span style={css('font-size:11px; font-weight:800; color:#2B50E4; letter-spacing:.06em; text-transform:uppercase;')}>{a.cat}</span>
                <h3 style={css('font-size:15.5px; font-weight:700; margin:8px 0 6px; color:#16214A; line-height:1.3;')}>{a.title}</h3>
                <span style={css('font-size:12.5px; color:#8B95AD;')}>{a.read} · Updated {a.date} · 👁 {a.views.toLocaleString('en-US')}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ---- FAQ ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:56px 32px;')}>
        <span style={css(eyebrow)}>Good to know</span>
        <h2 style={css(h2Style + ' margin-bottom:24px;')}>{cat.name} FAQs</h2>
        <FaqAccordion faqs={cat.faqs} />
      </section>

      {/* ---- CTA banner ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:0 32px 64px;')}>
        <div style={css('background:linear-gradient(120deg,#2B50E4,#1B3AB8); color:#fff; border-radius:24px; padding:44px; display:flex; align-items:center; justify-content:space-between; gap:32px; flex-wrap:wrap; box-shadow:0 20px 50px rgba(43,80,228,.24);')}>
          <div>
            <h2 style={css('font-size:30px; font-weight:800; letter-spacing:-.02em; margin:0 0 8px; max-width:560px;')}>Ready to explore {cat.name.toLowerCase()} in Thailand?</h2>
            <p style={css('font-size:15.5px; color:#D3DEFF; margin:0; max-width:520px;')}>Get a free, no-obligation quote and a coordinator who plans everything around your trip.</p>
          </div>
          <El as="button" onClick={() => openFunnel(cat.name)} style={css('background:#fff; color:#2B50E4; border:none; padding:15px 30px; border-radius:13px; font-weight:800; font-size:15.5px; cursor:pointer; white-space:nowrap; box-shadow:0 10px 24px rgba(0,0,0,.16);')} hover={css('background:#EAF0FF;')}>Get your free quote</El>
        </div>
      </section>
    </>
  )
}
