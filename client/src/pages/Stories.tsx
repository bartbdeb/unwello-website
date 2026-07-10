import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { css, El, Placeholder, eyebrow, h2Style } from '../ui'
import { patientStories } from '../content/stories'
import { categoryBySlug } from '../content/treatments'
import { useApp } from '../context'

export default function Stories() {
  const { openFunnel } = useApp()
  const [filter, setFilter] = useState('all')

  const categorySlugs = useMemo(
    () => Array.from(new Set(patientStories.map((s) => s.categorySlug))),
    [],
  )

  const filtered = filter === 'all' ? patientStories : patientStories.filter((s) => s.categorySlug === filter)

  const chipStyle = (active: boolean) =>
    'border:none; font-family:inherit; font-size:13.5px; font-weight:700; padding:9px 16px; border-radius:100px; cursor:pointer; transition:all .15s; white-space:nowrap; ' +
    (active ? 'background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff;' : 'background:#fff; border:1px solid #E1E8F7; color:#5A6580;')

  return (
    <>
      {/* ---- Header ---- */}
      <section style={css('background:linear-gradient(180deg,#E4EDFF 0px,#F4F7FF 400px);')}>
        <div style={css('max-width:1240px; margin:0 auto; padding:32px 32px 48px;')}>
          <div style={css('display:flex; align-items:center; gap:8px; font-size:13px; color:#8B95AD; margin-bottom:22px;')}>
            <Link to="/" style={css('color:#8B95AD;')}>Home</Link>
            <span>›</span>
            <span style={css('color:#16214A; font-weight:600;')}>Stories</span>
          </div>
          <div style={css('max-width:680px;')}>
            <span style={css(eyebrow)}>Patient stories</span>
            <h1 style={css('font-size:44px; line-height:1.08; letter-spacing:-.028em; font-weight:800; margin:12px 0 16px; color:#16214A;')}>Real journeys, real outcomes</h1>
            <p style={css('font-size:17px; line-height:1.65; color:#5A6580; margin:0 0 26px;')}>Every story here is a real patient who travelled to Thailand through Unwello — their treatment, their coordinator, their own words.</p>
            <El as="button" onClick={() => openFunnel()} style={css('background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:15px 28px; border-radius:13px; font-weight:800; font-size:15.5px; cursor:pointer; box-shadow:0 10px 26px rgba(43,80,228,.26);')} hover={css('background:#1B3AB8;')}>Start your own story</El>
          </div>
        </div>
      </section>

      {/* ---- Filters + grid ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:48px 32px 64px;')}>
        <div style={css('display:flex; gap:10px; flex-wrap:wrap; margin-bottom:28px;')}>
          <button onClick={() => setFilter('all')} style={css(chipStyle(filter === 'all'))}>All stories</button>
          {categorySlugs.map((slug) => {
            const cat = categoryBySlug(slug)
            if (!cat) return null
            return (
              <button key={slug} onClick={() => setFilter(slug)} style={css(chipStyle(filter === slug))}>
                {cat.icon} {cat.name}
              </button>
            )
          })}
        </div>

        <div className="uw-grid-3" style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:20px;')}>
          {filtered.map((s) => (
            <Link key={s.slug} to={`/stories/${s.slug}`} style={css('display:block; background:#fff; border:1px solid #E1E8F7; border-radius:20px; overflow:hidden; color:inherit; transition:transform .18s, box-shadow .18s;')}>
              <div style={css('position:relative;')}>
                <Placeholder style="height:190px;" label={s.imgLabel} />
                <span style={css('position:absolute; inset:0; display:flex; align-items:center; justify-content:center;')}>
                  <span style={css('width:52px; height:52px; border-radius:50%; background:rgba(255,255,255,.92); display:flex; align-items:center; justify-content:center; color:#16214A; font-size:17px; padding-left:4px;')}>▶</span>
                </span>
              </div>
              <div style={css('padding:20px 22px 22px;')}>
                <p style={css('font-size:15px; line-height:1.55; margin:0 0 14px; color:#3A4468; font-weight:500;')}>“{s.quote}”</p>
                <div style={css('display:flex; align-items:center; justify-content:space-between; gap:10px;')}>
                  <div style={css('display:flex; flex-direction:column;')}>
                    <span style={css('font-size:13.5px; font-weight:700; color:#16214A;')}>{s.name} {s.flag}</span>
                    <span style={css('font-size:12.5px; color:#8B95AD;')}>{s.procedure}</span>
                  </div>
                  <span style={css('font-size:13px; font-weight:700; color:#2B50E4; white-space:nowrap;')}>Read →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:18px; padding:48px 32px; text-align:center;')}>
            <div style={css('font-size:30px; margin-bottom:10px;')}>🔍</div>
            <h3 style={css('font-size:18px; font-weight:800; color:#16214A; margin:0 0 8px;')}>No stories in this category yet</h3>
            <p style={css('font-size:14.5px; color:#7A85A0; margin:0;')}>Check back soon, or browse all patient stories above.</p>
          </div>
        )}
      </section>

      {/* ---- CTA ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:0 32px 64px;')}>
        <div style={css('background:linear-gradient(120deg,#2B50E4,#1B3AB8); color:#fff; border-radius:24px; padding:44px; display:flex; align-items:center; justify-content:space-between; gap:32px; flex-wrap:wrap; box-shadow:0 20px 50px rgba(43,80,228,.24);')}>
          <div>
            <h2 style={css('font-size:28px; font-weight:800; letter-spacing:-.02em; margin:0 0 8px; max-width:520px;')}>Ready to write your own story?</h2>
            <p style={css('font-size:15px; color:#D3DEFF; margin:0; max-width:480px;')}>Get a free, no-obligation quote and a coordinator who plans everything around your trip.</p>
          </div>
          <El as="button" onClick={() => openFunnel()} style={css('background:#fff; color:#2B50E4; border:none; padding:15px 30px; border-radius:13px; font-weight:800; font-size:15px; cursor:pointer; white-space:nowrap; box-shadow:0 10px 24px rgba(0,0,0,.16);')} hover={css('background:#EAF0FF;')}>Get your free quote</El>
        </div>
      </section>
    </>
  )
}
