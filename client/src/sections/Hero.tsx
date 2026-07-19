import { useState } from 'react'
import { css, El } from '../ui'
import { treatments } from '../data'
import { hospitals } from '../content/hospitals'
import { useApp } from '../context'

export default function Hero() {
  const { openFunnel } = useApp()
  const [query, setQuery] = useState('')
  const [focus, setFocus] = useState(false)

  const q = query.trim().toLowerCase()
  const suggestions = (q ? treatments.filter((t) => t.name.toLowerCase().includes(q)) : treatments).slice(0, 5)
  const showSuggest = focus && suggestions.length > 0

  return (
    <section style={css('max-width:1240px; margin:0 auto; padding:56px 32px 40px;')}>
      <div className="uw-hero" style={css('display:grid; grid-template-columns:1.05fr 1fr; gap:56px; align-items:center;')}>
        <div>
          <div style={css('display:inline-flex; align-items:center; gap:9px; background:#FFFFFF; border:1px solid #E1E8F7; padding:7px 15px 7px 8px; border-radius:100px; font-size:13px; font-weight:600; color:#3A4468; box-shadow:0 2px 8px rgba(35,51,47,.05); margin-bottom:24px;')}>
            <span style={css('background:#E7ECFF; color:#2B50E4; padding:3px 9px; border-radius:100px; font-weight:700; font-size:12px;')}>JCI</span>
            {hospitals.length} internationally accredited hospitals
          </div>
          <h1 style={css('font-size:57px; line-height:1.03; letter-spacing:-.028em; font-weight:800; margin:0 0 20px; color:#16214A;')}>
            World-class care in Thailand, for up to{' '}
            <span style={css('color:#2B50E4; position:relative; white-space:nowrap;')}>
              70% less
              <span style={css('position:absolute; left:0; right:0; bottom:2px; height:9px; background:#5B84FF; opacity:.42; border-radius:4px; z-index:-1;')} />
            </span>
          </h1>
          <p style={css('font-size:18px; line-height:1.6; color:#5A6580; margin:0 0 30px; max-width:500px;')}>
            Get matched with vetted clinics, a transparent all-inclusive quote, and a personal coordinator who arranges everything — flights, hotel, treatment, recovery. Free for patients, always.
          </p>

          <div style={css('display:flex; gap:10px; background:#FFFFFF; border:1px solid #E1E8F7; border-radius:16px; padding:8px; box-shadow:0 12px 30px rgba(35,51,47,.08); max-width:520px; position:relative;')}>
            <div style={css('display:flex; align-items:center; gap:10px; flex:1; padding-left:12px;')}>
              <span style={css('color:#2B50E4; font-size:18px;')}>🔍</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => window.setTimeout(() => setFocus(false), 150)}
                placeholder="Search a treatment — e.g. dental implants"
                style={css('border:none; outline:none; font-size:15px; width:100%; background:transparent; color:#16214A;')}
              />
            </div>
            <El
              as="button"
              onClick={() => openFunnel(suggestions.length === 1 ? suggestions[0].name : undefined)}
              style={css('background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:13px 22px; border-radius:11px; font-weight:700; font-size:14.5px; cursor:pointer; white-space:nowrap;')}
              hover={css('background:#1B3AB8;')}
            >
              Get Free Quote
            </El>
            {showSuggest && (
              <div style={css('position:absolute; top:calc(100% + 8px); left:0; right:0; background:#fff; border:1px solid #E1E8F7; border-radius:14px; box-shadow:0 20px 44px rgba(35,51,47,.16); padding:6px; z-index:20; animation:uwFade .14s ease;')}>
                {suggestions.map((s) => (
                  <El
                    as="button"
                    key={s.name}
                    onMouseDown={() => openFunnel(s.name)}
                    style={css('display:flex; align-items:center; justify-content:space-between; width:100%; padding:11px 13px; border:none; background:transparent; border-radius:10px; cursor:pointer; text-align:left;')}
                    hover={css('background:#F2F6FF;')}
                  >
                    <span style={css('font-weight:600; font-size:14px; color:#16214A;')}>{s.name}</span>
                    <span style={css('font-size:12.5px; color:#8B95AD;')}>from {s.price}</span>
                  </El>
                ))}
              </div>
            )}
          </div>
          <p style={css('font-size:13px; color:#8B95AD; margin:14px 0 0;')}>No obligation · Reply within a few hours · Free, always</p>
        </div>

        <div className="uw-hide-mobile" style={css('position:relative;')}>
          <img
            src="/images/hero/lifestyle.jpg"
            alt="Patient and doctor in Thailand"
            style={css('width:100%; aspect-ratio:4/4.4; object-fit:cover; border-radius:24px; box-shadow:0 30px 70px rgba(35,51,47,.16); display:block;')}
          />
          <div style={css('position:absolute; bottom:22px; left:-26px; background:#fff; border:1px solid #E1E8F7; border-radius:16px; padding:14px 18px; box-shadow:0 16px 36px rgba(35,51,47,.14); display:flex; align-items:center; gap:12px; animation:uwFade .5s ease;')}>
            <span style={css('width:42px; height:42px; border-radius:12px; background:linear-gradient(150deg,#2B50E4,#1B3AB8); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:18px;')}>✓</span>
            <div style={css('display:flex; flex-direction:column;')}>
              <span style={css('font-size:13px; color:#16214A; font-weight:700;')}>JCI Accredited</span>
              <span style={css('font-size:12.5px; color:#5A6580; font-weight:600;')}>Every listed hospital</span>
            </div>
          </div>
          <div style={css('position:absolute; top:24px; right:-22px; background:#16214A; color:#fff; border-radius:16px; padding:14px 18px; box-shadow:0 16px 36px rgba(35,51,47,.24); animation:uwFade .7s ease;')}>
            <div style={css('font-size:22px; font-weight:800; letter-spacing:-.02em; line-height:1;')}>$680</div>
            <div style={css('font-size:12px; color:#AEB8D6; margin-top:3px;')}>Medical check · from</div>
          </div>
        </div>
      </div>
    </section>
  )
}
