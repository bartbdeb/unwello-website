import { Link } from 'react-router-dom'
import { css, El, eyebrow, h2Style } from '../ui'
import { useApp } from '../context'
import FaqAccordion from '../components/FaqAccordion'

const journey = [
  { n: '1', title: 'Tell us what you need', body: 'A 2-minute form — treatment, timing and how to reach you. No medical jargon required.' },
  { n: '2', title: 'Get matched & quoted', body: 'Your coordinator shortlists vetted, JCI-accredited facilities and gets you a transparent, all-inclusive quote.' },
  { n: '3', title: 'Review & choose', body: 'Compare your options with your coordinator — no pressure, no obligation to book.' },
  { n: '4', title: 'We arrange everything', body: 'Appointments, flights guidance, hotel, transfers and an interpreter if you need one.' },
  { n: '5', title: 'Fly & treat', body: 'Arrive to a confirmed plan. Your coordinator stays reachable throughout your treatment.' },
  { n: '6', title: 'Recover & aftercare', body: 'Post-treatment check-ins and support even after you\'re back home.' },
]

const team = [
  { name: 'Bart de Bruin', focus: 'Medical Coordinator', languages: ['EN', 'NL'], photo: '/images/coordinators/bart-de-bruin.jpg' },
  { name: 'Dorus van der Kooij', focus: 'Medical Coordinator', languages: ['EN', 'NL'], photo: '/images/coordinators/dorus-van-der-kooij.jpg' },
]

const faqs = [
  { q: 'Is Hospigo really free for patients?', a: 'Yes. We\'re paid a referral fee by the clinic if you book — never by you. You pay the clinic directly for your treatment and any travel you arrange, at the price they quote.' },
  { q: 'How fast will a coordinator respond?', a: 'Most inquiries get a first reply within a few hours. Urgency you flag in the quote form (e.g. "as soon as possible") is used to prioritize faster follow-up.' },
  { q: 'Can I choose the clinic myself?', a: 'Yes. Your coordinator recommends vetted, JCI-accredited facilities that match your treatment, but the final choice is always yours — nothing is booked without your confirmation.' },
  { q: 'What if something goes wrong during my trip?', a: 'Your coordinator is reachable throughout your treatment and stays involved in aftercare — if an issue comes up with the clinic or your logistics, tell your coordinator first.' },
]

export default function HowItWorksPage() {
  const { openFunnel } = useApp()
  return (
    <>
      {/* ---- Header ---- */}
      <section style={css('background:linear-gradient(180deg,#E4EDFF 0px,#F4F7FF 400px);')}>
        <div style={css('max-width:1240px; margin:0 auto; padding:32px 32px 56px;')}>
          <div style={css('display:flex; align-items:center; gap:8px; font-size:13px; color:#8B95AD; margin-bottom:22px;')}>
            <Link to="/" style={css('color:#8B95AD;')}>Home</Link>
            <span>›</span>
            <span style={css('color:#16214A; font-weight:600;')}>How It Works</span>
          </div>
          <div style={css('max-width:680px;')}>
            <span style={css(eyebrow)}>How it works</span>
            <h1 style={css('font-size:44px; line-height:1.08; letter-spacing:-.028em; font-weight:800; margin:12px 0 16px; color:#16214A;')}>One coordinator. Everything handled, start to finish.</h1>
            <p style={css('font-size:17px; line-height:1.65; color:#5A6580; margin:0 0 26px;')}>From your first message to your flight home — and your recovery after — a dedicated coordinator plans and manages every step. Free, non-binding, and available whenever you need them.</p>
            <El as="button" onClick={() => openFunnel()} style={css('background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:15px 28px; border-radius:13px; font-weight:800; font-size:15.5px; cursor:pointer; box-shadow:0 10px 26px rgba(43,80,228,.26);')} hover={css('background:#1B3AB8;')}>Start with a free quote</El>
          </div>
        </div>
      </section>

      {/* ---- Journey steps ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:56px 32px;')}>
        <span style={css(eyebrow)}>Your journey</span>
        <h2 style={css(h2Style + ' margin-bottom:28px;')}>Six steps, one point of contact</h2>
        <div className="uw-grid-3" style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:22px;')}>
          {journey.map((st) => (
            <div key={st.n} style={css('background:#fff; border:1px solid #E1E8F7; border-radius:18px; padding:24px;')}>
              <div style={css('width:44px; height:44px; border-radius:13px; background:#ECF1FD; color:#2B50E4; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:17px; margin-bottom:16px;')}>{st.n}</div>
              <h3 style={css('font-size:17px; font-weight:700; margin:0 0 8px; color:#16214A;')}>{st.title}</h3>
              <p style={css('font-size:14px; line-height:1.6; color:#7A85A0; margin:0;')}>{st.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- What's free vs what you pay ---- */}
      <section style={css('background:#E9F0FF;')}>
        <div style={css('max-width:1240px; margin:0 auto; padding:56px 32px;')}>
          <div className="uw-savings" style={css('display:grid; grid-template-columns:1fr 1fr; gap:28px;')}>
            <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:20px; padding:30px;')}>
              <div style={css('display:flex; align-items:center; gap:10px; margin-bottom:14px;')}>
                <span style={css('width:36px; height:36px; border-radius:11px; background:#EAF7EE; color:#2E8B57; display:flex; align-items:center; justify-content:center; font-size:18px;')}>✓</span>
                <h3 style={css('font-size:18px; font-weight:800; margin:0; color:#16214A;')}>Always free</h3>
              </div>
              <ul style={css('margin:0; padding-left:20px; font-size:14.5px; line-height:1.9; color:#3A4468;')}>
                <li>Your personal coordinator, start to finish</li>
                <li>Matching, quotes and comparisons across facilities</li>
                <li>Appointment scheduling and logistics support</li>
                <li>Aftercare check-ins</li>
              </ul>
            </div>
            <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:20px; padding:30px;')}>
              <div style={css('display:flex; align-items:center; gap:10px; margin-bottom:14px;')}>
                <span style={css('width:36px; height:36px; border-radius:11px; background:#ECF1FD; color:#2B50E4; display:flex; align-items:center; justify-content:center; font-size:18px;')}>💳</span>
                <h3 style={css('font-size:18px; font-weight:800; margin:0; color:#16214A;')}>What you pay for</h3>
              </div>
              <p style={css('font-size:14.5px; line-height:1.7; color:#3A4468; margin:0 0 10px;')}>You pay the clinic directly, at the price they quote you — never Hospigo. That typically covers:</p>
              <ul style={css('margin:0; padding-left:20px; font-size:14.5px; line-height:1.9; color:#3A4468;')}>
                <li>Your treatment and any hospital stay</li>
                <li>Travel: flights, hotel, local transfers (as agreed in your plan)</li>
              </ul>
            </div>
          </div>
          <p style={css('font-size:13px; color:#8B95AD; text-align:center; margin:22px 0 0;')}>We're paid a referral fee by the clinic if you book — that's how we stay free for patients, always.</p>
        </div>
      </section>

      {/* ---- Coordinator team ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:56px 32px;')}>
        <span style={css(eyebrow)}>Your coordinator</span>
        <h2 style={css(h2Style + ' margin-bottom:24px;')}>Meet the team</h2>
        <div className="uw-grid-2" style={css('display:grid; grid-template-columns:repeat(2,1fr); gap:18px;')}>
          {team.map((t) => (
            <div key={t.name} style={css('background:#fff; border:1px solid #E1E8F7; border-radius:18px; padding:22px; display:flex; gap:14px; align-items:flex-start;')}>
              <img src={t.photo} alt={t.name} style={css('width:56px; height:56px; border-radius:50%; flex:0 0 auto; object-fit:cover;')} />
              <div>
                <div style={css('font-weight:800; font-size:16px; color:#16214A;')}>{t.name}</div>
                <div style={css('font-size:13px; color:#7A85A0; margin:2px 0 8px;')}>{t.focus}</div>
                <div style={css('display:flex; gap:6px; flex-wrap:wrap;')}>
                  {t.languages.map((l) => (
                    <span key={l} style={css('background:#ECF1FD; color:#2B50E4; font-size:11px; font-weight:700; padding:3px 8px; border-radius:7px;')}>{l}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:20px 32px 56px;')}>
        <span style={css(eyebrow)}>Good to know</span>
        <h2 style={css(h2Style + ' margin-bottom:24px;')}>Frequently asked questions</h2>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* ---- CTA ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:0 32px 64px;')}>
        <div style={css('background:linear-gradient(120deg,#2B50E4,#1B3AB8); color:#fff; border-radius:24px; padding:44px; display:flex; align-items:center; justify-content:space-between; gap:32px; flex-wrap:wrap; box-shadow:0 20px 50px rgba(43,80,228,.24);')}>
          <div>
            <h2 style={css('font-size:28px; font-weight:800; letter-spacing:-.02em; margin:0 0 8px; max-width:520px;')}>Ready to start your journey?</h2>
            <p style={css('font-size:15px; color:#D3DEFF; margin:0; max-width:480px;')}>Tell us what you need — free, no-obligation, and matched to your case.</p>
          </div>
          <El as="button" onClick={() => openFunnel()} style={css('background:#fff; color:#2B50E4; border:none; padding:15px 30px; border-radius:13px; font-weight:800; font-size:15px; cursor:pointer; white-space:nowrap; box-shadow:0 10px 24px rgba(0,0,0,.16);')} hover={css('background:#EAF0FF;')}>Get your free quote</El>
        </div>
      </section>
    </>
  )
}
