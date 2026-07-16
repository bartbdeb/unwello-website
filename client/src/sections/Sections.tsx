import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { css, El, Placeholder, eyebrow, h2Style } from '../ui'
import {
  treatments, trustStats, steps, savingsBase, countryMeta, whyCards,
  coordPoints, footerCols, WHATSAPP_NUMBER,
  type Country,
} from '../data'
import { hospitals, sortRecommended } from '../content/hospitals'
import { patientStories } from '../content/stories'
import { newsArticles } from '../content/news'
import { useApp } from '../context'
import ClinicCard from '../components/ClinicCard'

const featuredStories = patientStories.filter((s) => s.featured)
const featuredNews = newsArticles.filter((n) => n.featured)

const footerLinkRoutes: Record<string, string> = {
  'How it works': '/how-it-works',
  'Patient stories': '/stories',
  Guides: '/news',
  'All clinics': '/clinics',
}

const featuredHospitals = sortRecommended(hospitals).slice(0, 8)

const arrowBtn = 'width:42px; height:42px; border-radius:12px; border:1px solid #E1E8F7; background:#fff; cursor:pointer; font-size:20px; color:#16214A; display:flex; align-items:center; justify-content:center; line-height:1;'

export function TrustBar() {
  return (
    <section style={css('max-width:1240px; margin:0 auto; padding:8px 32px 24px;')}>
      <div className="uw-grid-4" style={css('background:#FFFFFF; border:1px solid #E1E8F7; border-radius:20px; padding:26px 20px; display:grid; grid-template-columns:repeat(4,1fr); gap:12px; box-shadow:0 8px 24px rgba(35,51,47,.05);')}>
        {trustStats.map((t) => (
          <div key={t.label} style={css('display:flex; flex-direction:column; align-items:center; text-align:center; gap:4px; padding:0 8px;')}>
            <span style={css('font-size:30px; font-weight:800; color:#2B50E4; letter-spacing:-.02em;')}>{t.value}</span>
            <span style={css('font-size:13.5px; color:#5A6580; font-weight:500;')}>{t.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Treatments() {
  const navigate = useNavigate()
  return (
    <section style={css('max-width:1240px; margin:0 auto; padding:48px 32px;')}>
      <div style={css('display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:26px; gap:20px;')}>
        <div>
          <span style={css(eyebrow)}>Popular treatments</span>
          <h2 style={css(h2Style)}>What patients travel to Thailand for</h2>
        </div>
        <Link to="/treatments" style={css('font-weight:700; font-size:14.5px; color:#2B50E4; white-space:nowrap;')}>Browse all treatments →</Link>
      </div>
      <div className="uw-grid-3" style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:18px;')}>
        {treatments.map((tr) => (
          <El
            as="button"
            key={tr.name}
            onClick={() => navigate(`/treatments/${tr.slug}`)}
            style={css('text-align:left; border:1px solid #E1E8F7; background:#FFFFFF; border-radius:18px; overflow:hidden; cursor:pointer; padding:0; transition:transform .18s, box-shadow .18s, border-color .18s;')}
            hover={css('transform:translateY(-4px); box-shadow:0 20px 44px rgba(35,51,47,.12); border:1px solid #D2DBF0;')}
          >
            <div style={css('height:150px; position:relative; overflow:hidden;')}>
              <img src={tr.image} alt={tr.name} style={css('width:100%; height:100%; object-fit:cover; display:block;')} />
              <span style={css('position:absolute; top:12px; left:12px; background:#fff; border-radius:100px; padding:5px 12px; font-size:12.5px; font-weight:700; color:#2B50E4; box-shadow:0 3px 10px rgba(35,51,47,.1);')}>from {tr.price}</span>
            </div>
            <div style={css('padding:16px 18px 18px;')}>
              <div style={css('display:flex; align-items:center; justify-content:space-between; gap:10px;')}>
                <span style={css('font-weight:700; font-size:16.5px; color:#16214A;')}>{tr.name}</span>
                <span style={css('font-size:19px;')}>{tr.icon}</span>
              </div>
              <p style={css('margin:6px 0 0; font-size:13.5px; color:#7A85A0; line-height:1.5;')}>{tr.blurb}</p>
            </div>
          </El>
        ))}
      </div>
    </section>
  )
}

export function HowItWorks() {
  const { openFunnel } = useApp()
  return (
    <section id="how" style={css('background:linear-gradient(140deg,#1C2E7C 0%,#0F1B4A 100%); color:#fff; margin-top:24px;')}>
      <div style={css('max-width:1240px; margin:0 auto; padding:64px 32px;')}>
        <div style={css('text-align:center; margin-bottom:44px;')}>
          <span style={css('color:#5B84FF; font-weight:700; font-size:13px; letter-spacing:.12em; text-transform:uppercase;')}>How it works</span>
          <h2 style={css('font-size:38px; font-weight:800; letter-spacing:-.025em; margin:10px 0 0;')}>One coordinator. Everything handled.</h2>
        </div>
        <div className="uw-grid-4" style={css('display:grid; grid-template-columns:repeat(4,1fr); gap:22px;')}>
          {steps.map((st) => (
            <div key={st.n} style={css('position:relative; text-align:center;')}>
              <div style={css('width:52px; height:52px; border-radius:15px; background:rgba(91,132,255,.16); border:1px solid rgba(91,132,255,.4); color:#5B84FF; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:19px; margin:0 auto 18px;')}>{st.n}</div>
              <h3 style={css('font-size:18px; font-weight:700; margin:0 0 8px;')}>{st.title}</h3>
              <p style={css('font-size:14px; line-height:1.6; color:#A6B0D0; margin:0;')}>{st.body}</p>
            </div>
          ))}
        </div>
        <div style={css('text-align:center; margin-top:42px;')}>
          <El as="button" onClick={() => openFunnel()} style={css('background:#5B84FF; color:#16214A; border:none; padding:15px 30px; border-radius:13px; font-weight:800; font-size:15.5px; cursor:pointer; box-shadow:0 10px 26px rgba(91,132,255,.28);')} hover={css('background:#3A63FF;')}>
            Start with a free quote
          </El>
        </div>
      </div>
    </section>
  )
}

export function Clinics() {
  const track = useRef<HTMLDivElement>(null)
  const scrollBy = (dir: number) => track.current?.scrollBy({ left: dir * 360, behavior: 'smooth' })
  return (
    <section id="clinics" style={css('max-width:1240px; margin:0 auto; padding:60px 32px;')}>
      <div style={css('display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:26px; gap:20px;')}>
        <div>
          <span style={css(eyebrow)}>JCI-accredited facilities</span>
          <h2 style={css(h2Style)}>Featured hospitals & clinics</h2>
        </div>
        <div style={css('display:flex; align-items:center; gap:16px;')}>
          <Link to="/clinics" style={css('font-weight:700; font-size:14.5px; color:#2B50E4; white-space:nowrap;')}>All clinics →</Link>
          <div style={css('display:flex; gap:9px;')}>
            <El as="button" onClick={() => scrollBy(-1)} style={css(arrowBtn)} hover={css('background:#F2F6FF; border:1px solid #D2DBF0;')}>‹</El>
            <El as="button" onClick={() => scrollBy(1)} style={css(arrowBtn)} hover={css('background:#F2F6FF; border:1px solid #D2DBF0;')}>›</El>
          </div>
        </div>
      </div>
      <div ref={track} style={css('display:flex; gap:18px; overflow-x:auto; scroll-behavior:smooth; padding:4px 2px 14px; scroll-snap-type:x mandatory;')}>
        {featuredHospitals.map((h) => (
          <div key={h.slug} style={css('flex:0 0 336px; scroll-snap-align:start;')}>
            <ClinicCard h={h} />
          </div>
        ))}
      </div>
    </section>
  )
}

export function Savings() {
  const [country, setCountry] = useState<Country>('US')
  const meta = countryMeta[country]
  const rows = savingsBase.map((r) => {
    const home = r[country]
    const pct = Math.round(((home - r.th) / home) * 100)
    return {
      name: r.name,
      thPrice: '$' + r.th.toLocaleString('en-US'),
      homePrice: meta.symbol + home.toLocaleString('en-US'),
      savings: '−' + pct + '%',
    }
  })
  return (
    <section style={css('background:#E9F0FF;')}>
      <div style={css('max-width:1240px; margin:0 auto; padding:60px 32px;')}>
        <div className="uw-savings" style={css('display:grid; grid-template-columns:.9fr 1.35fr; gap:48px; align-items:center;')}>
          <div>
            <span style={css(eyebrow)}>Transparent pricing</span>
            <h2 style={css(h2Style)}>See how much you could save</h2>
            <p style={css('font-size:16px; line-height:1.6; color:#5A6580; margin:14px 0 24px;')}>Real all-inclusive price ranges from vetted Thai clinics, compared to average costs at home. Choose your country:</p>
            <div style={css('display:inline-flex; background:#fff; border:1px solid #E1E8F7; border-radius:13px; padding:5px; gap:4px;')}>
              {(Object.keys(countryMeta) as Country[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCountry(c)}
                  style={css('border:none; font-family:inherit; font-size:13.5px; font-weight:700; padding:9px 16px; border-radius:9px; cursor:pointer; transition:all .15s; ' + (country === c ? 'background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff;' : 'background:transparent; color:#5A6580;'))}
                >
                  {countryMeta[c].pill}
                </button>
              ))}
            </div>
          </div>
          <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:20px; overflow:hidden; box-shadow:0 14px 34px rgba(35,51,47,.08);')}>
            <div style={css('overflow-x:auto;')}>
              <div style={css('display:grid; grid-template-columns:1.5fr 1fr 1fr .8fr; min-width:480px; padding:15px 22px; background:#16214A; color:#fff; font-size:12.5px; font-weight:700; letter-spacing:.03em;')}>
                <span>Procedure</span>
                <span style={css('text-align:right;')}>Thailand</span>
                <span style={css('text-align:right;')}>{meta.label}</span>
                <span style={css('text-align:right;')}>Save</span>
              </div>
              {rows.map((r) => (
                <div key={r.name} style={css('display:grid; grid-template-columns:1.5fr 1fr 1fr .8fr; min-width:480px; padding:16px 22px; border-bottom:1px solid #ECF1FD; align-items:center;')}>
                  <span style={css('font-weight:700; font-size:14.5px; color:#16214A;')}>{r.name}</span>
                  <span style={css('text-align:right; font-weight:800; font-size:14.5px; color:#2B50E4;')}>{r.thPrice}</span>
                  <span style={css('text-align:right; font-size:14px; color:#8B95AD; text-decoration:line-through;')}>{r.homePrice}</span>
                  <span style={css('text-align:right; font-weight:800; font-size:13.5px; color:#16214A;')}><span style={css('background:#E7ECFF; color:#2B50E4; padding:3px 8px; border-radius:8px;')}>{r.savings}</span></span>
                </div>
              ))}
            </div>
            <div style={css('padding:14px 22px; font-size:12px; color:#8B95AD; text-align:center;')}>Indicative ranges · your personal quote is tailored to your case</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhyThailand() {
  return (
    <section style={css('max-width:1240px; margin:0 auto; padding:64px 32px;')}>
      <div style={css('text-align:center; margin-bottom:40px;')}>
        <span style={css(eyebrow)}>Why Thailand</span>
        <h2 style={css(h2Style)}>A place built for healing, not just treatment</h2>
      </div>
      <div className="uw-grid-5" style={css('display:grid; grid-template-columns:repeat(5,1fr); gap:18px;')}>
        {whyCards.map((w) => (
          <div key={w.title} style={css('background:#FFFFFF; border:1px solid #E1E8F7; border-radius:18px; padding:26px 22px;')}>
            <div style={css('width:48px; height:48px; border-radius:13px; background:#ECF1FD; display:flex; align-items:center; justify-content:center; font-size:22px; margin-bottom:16px;')}>{w.icon}</div>
            <h3 style={css('font-size:17px; font-weight:700; margin:0 0 7px; color:#16214A;')}>{w.title}</h3>
            <p style={css('font-size:14px; line-height:1.6; color:#7A85A0; margin:0;')}>{w.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Stories() {
  return (
    <section id="stories" style={css('background:linear-gradient(140deg,#1C2E7C 0%,#0F1B4A 100%); color:#fff;')}>
      <div style={css('max-width:1240px; margin:0 auto; padding:64px 32px;')}>
        <div style={css('display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:30px; gap:20px;')}>
          <div>
            <span style={css('color:#5B84FF; font-weight:700; font-size:13px; letter-spacing:.12em; text-transform:uppercase;')}>Patient stories</span>
            <h2 style={css('font-size:36px; font-weight:800; letter-spacing:-.025em; margin:10px 0 0;')}>Real journeys, real outcomes</h2>
          </div>
          <Link to="/stories" style={css('color:#5B84FF; font-weight:700; font-size:14.5px; white-space:nowrap;')}>All stories →</Link>
        </div>
        <div className="uw-grid-3" style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:20px;')}>
          {featuredStories.map((s) => (
            <Link key={s.slug} to={`/stories/${s.slug}`} style={css('display:block; background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.1); border-radius:20px; overflow:hidden; color:inherit;')}>
              <div style={css('position:relative;')}>
                <Placeholder dark style="height:200px;" label={s.imgLabel} />
                <span style={css('position:absolute; inset:0; display:flex; align-items:center; justify-content:center;')}>
                  <span style={css('width:54px; height:54px; border-radius:50%; background:rgba(255,255,255,.92); display:flex; align-items:center; justify-content:center; color:#16214A; font-size:18px; padding-left:4px;')}>▶</span>
                </span>
              </div>
              <div style={css('padding:20px 22px 22px;')}>
                <p style={css('font-size:15.5px; line-height:1.55; margin:0 0 16px; color:#EAF0FF; font-weight:500;')}>“{s.quote}”</p>
                <div style={css('display:flex; align-items:center; gap:11px;')}>
                  <Placeholder style="width:40px; height:40px; border-radius:50%; flex:0 0 auto;" />
                  <div style={css('display:flex; flex-direction:column;')}>
                    <span style={css('font-size:13.5px; font-weight:700;')}>{s.name} {s.flag}</span>
                    <span style={css('font-size:12.5px; color:#A6B0D0;')}>{s.procedure}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Coordinator() {
  const { openFunnel } = useApp()
  return (
    <section style={css('max-width:1240px; margin:0 auto; padding:64px 32px;')}>
      <div className="uw-savings" style={css('background:#FFFFFF; border:1px solid #E1E8F7; border-radius:26px; padding:44px; display:grid; grid-template-columns:1.1fr 1fr; gap:48px; align-items:center; box-shadow:0 12px 34px rgba(35,51,47,.06);')}>
        <div>
          <span style={css(eyebrow)}>Your coordinator</span>
          <h2 style={css(h2Style)}>A real person, by your side the whole way</h2>
          <p style={css('font-size:16px; line-height:1.65; color:#5A6580; margin:16px 0 22px;')}>From your first question to your flight home, one dedicated coordinator handles the details — clinic matching, quotes, appointments, interpreter, transfers and aftercare. Free, non-binding, and available 24/7.</p>
          <div style={css('display:flex; flex-direction:column; gap:12px;')}>
            {coordPoints.map((p) => (
              <div key={p} style={css('display:flex; align-items:center; gap:11px; font-size:14.5px; font-weight:600; color:#16214A;')}>
                <span style={css('width:24px; height:24px; border-radius:8px; background:#E7ECFF; color:#2B50E4; display:flex; align-items:center; justify-content:center; font-size:13px; flex:0 0 auto;')}>✓</span>{p}
              </div>
            ))}
          </div>
          <El as="button" onClick={() => openFunnel()} style={css('margin-top:26px; background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:14px 26px; border-radius:12px; font-weight:700; font-size:15px; cursor:pointer; box-shadow:0 8px 20px rgba(43,80,228,.24);')} hover={css('background:#1B3AB8;')}>
            Talk to a coordinator — free
          </El>
        </div>
        <div className="uw-hide-mobile" style={css('display:grid; grid-template-columns:1fr 1fr; gap:14px;')}>
          <img src="/images/coordinators/dorus-van-der-kooij.jpg" alt="Dorus van der Kooij, Medical Coordinator" style={css('width:100%; aspect-ratio:1/1.2; border-radius:18px; object-fit:cover; display:block;')} />
          <div style={css('display:flex; flex-direction:column; gap:14px; padding-top:28px;')}>
            <img src="/images/coordinators/team.jpg" alt="The Hospigo medical coordination team" style={css('width:100%; aspect-ratio:1/1; border-radius:18px; object-fit:cover; display:block;')} />
            <div style={css('background:#16214A; color:#fff; border-radius:18px; padding:20px; display:flex; flex-direction:column; justify-content:center; gap:4px;')}>
              <span style={css('font-size:28px; font-weight:800; letter-spacing:-.02em;')}>7 langs</span>
              <span style={css('font-size:13px; color:#A6B0D0;')}>EN · TH · AR · DE · ZH · RU · FR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Vetting() {
  return (
    <section style={css('max-width:1240px; margin:0 auto; padding:0 32px 64px;')}>
      <div style={css('background:linear-gradient(120deg,#2B50E4,#1B3AB8); color:#fff; border-radius:26px; padding:44px; display:flex; align-items:center; justify-content:space-between; gap:28px; flex-wrap:wrap; box-shadow:0 20px 50px rgba(43,80,228,.24); position:relative; overflow:hidden;')}>
        <div style={css('position:absolute; right:-40px; top:-40px; width:220px; height:220px; border-radius:50%; background:rgba(91,132,255,.18);')} />
        <div style={css('position:relative;')}>
          <span style={css('color:#BCCDFF; font-weight:700; font-size:13px; letter-spacing:.12em; text-transform:uppercase;')}>Our vetting moat</span>
          <h2 style={css('font-size:34px; font-weight:800; letter-spacing:-.025em; margin:10px 0 10px; max-width:560px;')}>Only 8% of clinics we assess make it onto Hospigo</h2>
          <p style={css('font-size:15.5px; line-height:1.6; color:#D3DEFF; margin:0; max-width:520px;')}>Accreditations, doctor credentials, outcome data, review volume, on-site visits and response times — scored and weighted. Nothing gets listed without passing.</p>
        </div>
        <a href="#" style={css('position:relative; background:#fff; color:#2B50E4; padding:15px 28px; border-radius:13px; font-weight:800; font-size:15px; white-space:nowrap; box-shadow:0 10px 24px rgba(0,0,0,.16);')}>See our methodology →</a>
      </div>
    </section>
  )
}

export function Guides() {
  return (
    <section id="guides" style={css('max-width:1240px; margin:0 auto; padding:0 32px 68px;')}>
      <div style={css('display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:26px; gap:20px;')}>
        <div>
          <span style={css(eyebrow)}>Guides & resources</span>
          <h2 style={css(h2Style)}>Plan your trip with confidence</h2>
        </div>
        <Link to="/news" style={css('font-weight:700; font-size:14.5px; color:#2B50E4; white-space:nowrap;')}>All guides →</Link>
      </div>
      <div className="uw-grid-3" style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:20px;')}>
        {featuredNews.map((g) => (
          <El as={Link} key={g.slug} to={`/news/${g.slug}`} style={css('border:1px solid #E1E8F7; background:#fff; border-radius:18px; overflow:hidden; display:block; transition:transform .18s, box-shadow .18s;')} hover={css('transform:translateY(-4px); box-shadow:0 18px 40px rgba(35,51,47,.1);')}>
            <img src={g.image} alt={g.title} style={css('width:100%; height:158px; object-fit:cover; display:block;')} />
            <div style={css('padding:18px 20px 20px;')}>
              <span style={css('font-size:11.5px; font-weight:800; color:#2B50E4; letter-spacing:.06em; text-transform:uppercase;')}>{g.cat}</span>
              <h3 style={css('font-size:17px; font-weight:700; margin:8px 0 8px; color:#16214A; line-height:1.3;')}>{g.title}</h3>
              <span style={css('font-size:13px; color:#8B95AD;')}>{g.read} · Updated {g.date} · 👁 {g.views.toLocaleString('en-US')}</span>
            </div>
          </El>
        ))}
      </div>
    </section>
  )
}

export function FinalCTA() {
  const { openFunnel } = useApp()
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Hospigo, I'd like help planning treatment in Thailand.")}`
  return (
    <section style={css('background:#E9F0FF;')}>
      <div style={css('max-width:1240px; margin:0 auto; padding:70px 32px; text-align:center;')}>
        <h2 style={css('font-size:42px; font-weight:800; letter-spacing:-.03em; margin:0 auto 14px; color:#16214A; max-width:720px; line-height:1.08;')}>Your treatment, planned around your life</h2>
        <p style={css('font-size:17px; color:#5A6580; margin:0 auto 30px; max-width:520px; line-height:1.6;')}>Tell us what you need. Get a free, no-obligation quote and a coordinator who takes it from there.</p>
        <div style={css('display:flex; gap:12px; justify-content:center; flex-wrap:wrap;')}>
          <El as="button" onClick={() => openFunnel()} style={css('background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:16px 34px; border-radius:14px; font-weight:800; font-size:16px; cursor:pointer; box-shadow:0 12px 28px rgba(43,80,228,.28);')} hover={css('background:#1B3AB8;')}>
            Get your free quote
          </El>
          <a href={waLink} target="_blank" rel="noreferrer" style={css('background:#25D366; color:#fff; padding:16px 28px; border-radius:14px; font-weight:800; font-size:16px; display:flex; align-items:center; gap:9px;')}>💬 WhatsApp us</a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer style={css('background:linear-gradient(160deg,#16214A 0%,#0E1838 100%); color:#AEB8D6;')}>
      <div style={css('max-width:1240px; margin:0 auto; padding:56px 32px 32px;')}>
        <div className="uw-grid-4" style={css('display:grid; grid-template-columns:1.4fr 1fr 1fr 1fr; gap:40px; padding-bottom:40px; border-bottom:1px solid rgba(255,255,255,.1);')}>
          <div>
            <div style={css('display:flex; align-items:center; gap:11px; color:#fff; margin-bottom:16px;')}>
              <span style={css('width:32px; height:32px; border-radius:10px; background:linear-gradient(150deg,#2B50E4,#1B3AB8); display:flex; align-items:center; justify-content:center;')}><span style={css('width:14px; height:14px; border-radius:5px; background:#5B84FF;')} /></span>
              <span style={css('font-weight:800; font-size:20px;')}>Hospigo</span>
            </div>
            <p style={css('font-size:14px; line-height:1.6; margin:0 0 18px; max-width:280px;')}>A medical travel platform connecting patients with vetted clinics across Thailand. Free for patients — we're paid by clinics, not you.</p>
            <div style={css('display:flex; gap:8px;')}>
              {['JCI Partner', 'ISO 9001', 'PDPA'].map((b) => (
                <span key={b} style={css('background:rgba(255,255,255,.08); border-radius:9px; padding:6px 11px; font-size:11.5px; font-weight:700; color:#EAF0FF;')}>{b}</span>
              ))}
            </div>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 style={css('color:#fff; font-size:13.5px; font-weight:700; letter-spacing:.04em; margin:0 0 15px; text-transform:uppercase;')}>{col.title}</h4>
              <div style={css('display:flex; flex-direction:column; gap:11px;')}>
                {col.links.map((l) => {
                  const route = footerLinkRoutes[l]
                  return route ? (
                    <Link key={l} to={route} style={css('font-size:14px; color:#AEB8D6;')}>{l}</Link>
                  ) : (
                    <El as="a" key={l} href="#" style={css('font-size:14px; color:#AEB8D6;')} hover={css('color:#5B84FF;')}>{l}</El>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        <div style={css('display:flex; align-items:center; justify-content:space-between; padding-top:24px; gap:20px; flex-wrap:wrap;')}>
          <span style={css('font-size:13px;')}>© 2026 Hospigo. Facilitator, not a medical provider. Content is medically reviewed.</span>
          <div style={css('display:flex; gap:20px; font-size:13px;')}>
            <a href="#" style={css('color:#AEB8D6;')}>Privacy</a>
            <a href="#" style={css('color:#AEB8D6;')}>Terms</a>
            <a href="#" style={css('color:#AEB8D6;')}>Medical Disclaimer</a>
            <a href="#" style={css('color:#AEB8D6;')}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
