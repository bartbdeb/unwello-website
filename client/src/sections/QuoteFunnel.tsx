import { css, El, Placeholder } from '../ui'
import { treatmentOptions, whoForOptions, timingOptions, contactPrefOptions } from '../data'
import type { FunnelState } from '../useFunnel'

const qTitle = 'font-size:21px; font-weight:800; letter-spacing:-.02em; color:#16214A; margin:0 0 6px;'
const qSub = 'font-size:14px; color:#7A85A0; margin:0 0 20px; line-height:1.5;'
const optCard = 'display:flex; flex-direction:column; align-items:flex-start; gap:8px; padding:16px; border:1px solid #E1E8F7; background:#fff; border-radius:14px; cursor:pointer; font-family:inherit; text-align:left; transition:all .15s;'
const optRow = 'display:flex; align-items:center; gap:13px; padding:16px 18px; border:1px solid #E1E8F7; background:#fff; border-radius:14px; cursor:pointer; font-family:inherit; text-align:left; transition:all .15s;'
const optHover = 'border:1px solid #3A63FF; box-shadow:0 6px 16px rgba(43,80,228,.12);'
const inputStyle = 'width:100%; padding:14px 16px; border:1px solid #E1E8F7; border-radius:12px; font-size:15px; background:#fff; outline:none; color:#16214A;'

export default function QuoteFunnel({ funnel }: { funnel: FunnelState }) {
  const { open, step, ans, f, formError, progressPct, isSuccess, showBack, closeFunnel, goBack, select, setContact, submit } = funnel
  if (!open) return null

  return (
    <div
      onClick={closeFunnel}
      style={css('position:fixed; inset:0; z-index:100; background:rgba(35,51,47,.5); backdrop-filter:blur(4px); display:flex; align-items:center; justify-content:center; padding:24px; animation:uwFade .2s ease;')}
    >
      <div onClick={(e) => e.stopPropagation()} style={css('width:100%; max-width:560px; background:#F4F7FF; border-radius:24px; overflow:hidden; box-shadow:0 40px 90px rgba(0,0,0,.35); max-height:92vh; display:flex; flex-direction:column;')}>
        {/* header */}
        <div style={css('padding:20px 26px 0; display:flex; flex-direction:column; gap:14px;')}>
          <div style={css('display:flex; align-items:center; justify-content:space-between;')}>
            <div style={css('display:flex; align-items:center; gap:9px;')}>
              <span style={css('width:28px; height:28px; border-radius:9px; background:linear-gradient(150deg,#2B50E4,#1B3AB8); display:flex; align-items:center; justify-content:center;')}><span style={css('width:12px; height:12px; border-radius:4px; background:#5B84FF;')} /></span>
              <span style={css('font-weight:800; font-size:16px; color:#16214A;')}>Free quote</span>
            </div>
            <El as="button" onClick={closeFunnel} style={css('width:34px; height:34px; border-radius:10px; border:1px solid #E1E8F7; background:#fff; cursor:pointer; font-size:16px; color:#5A6580; display:flex; align-items:center; justify-content:center;')} hover={css('background:#F2F6FF;')}>✕</El>
          </div>
          <div style={css('height:6px; background:#E1E8F7; border-radius:100px; overflow:hidden;')}>
            <div style={css('height:100%; background:#2B50E4; border-radius:100px; transition:width .4s ease; width:' + progressPct + ';')} />
          </div>
        </div>

        {/* body */}
        <div style={css('padding:26px; overflow-y:auto;')}>
          {step === 1 && (
            <div style={css('animation:uwSlide .22s ease;')}>
              <h3 style={css(qTitle)}>What would you like to do?</h3>
              <p style={css(qSub)}>Pick the treatment you're considering.</p>
              <div style={css('display:grid; grid-template-columns:1fr 1fr; gap:10px;')}>
                {treatmentOptions.map((o) => (
                  <El as="button" key={o.label} onClick={() => select('treatment', o.label)} style={css(optCard)} hover={css(optHover)}>
                    <span style={css('font-size:20px;')}>{o.icon}</span>
                    <span style={css('font-weight:700; font-size:14.5px; color:#16214A;')}>{o.label}</span>
                  </El>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={css('animation:uwSlide .22s ease;')}>
              <h3 style={css(qTitle)}>Who is this treatment for?</h3>
              <p style={css(qSub)}>This helps your coordinator prepare.</p>
              <div style={css('display:flex; flex-direction:column; gap:10px;')}>
                {whoForOptions.map((o) => (
                  <El as="button" key={o.label} onClick={() => select('whoFor', o.label)} style={css(optRow)} hover={css(optHover)}>
                    <span style={css('font-size:20px;')}>{o.icon}</span>
                    <span style={css('font-weight:700; font-size:15px; color:#16214A;')}>{o.label}</span>
                    <span style={css('margin-left:auto; color:#B7C0DE;')}>›</span>
                  </El>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={css('animation:uwSlide .22s ease;')}>
              <h3 style={css(qTitle)}>When would you like to have it done?</h3>
              <p style={css(qSub)}>An estimate is fine — plans can change.</p>
              <div style={css('display:flex; flex-direction:column; gap:10px;')}>
                {timingOptions.map((o) => (
                  <El as="button" key={o.label} onClick={() => select('timing', o.label)} style={css(optRow)} hover={css(optHover)}>
                    <span style={css('font-size:20px;')}>{o.icon}</span>
                    <span style={css('font-weight:700; font-size:15px; color:#16214A;')}>{o.label}</span>
                    <span style={css('margin-left:auto; color:#B7C0DE;')}>›</span>
                  </El>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div style={css('animation:uwSlide .22s ease;')}>
              <h3 style={css(qTitle)}>How should we reach you?</h3>
              <p style={css(qSub)}>Your coordinator will use your preferred channel.</p>
              <div style={css('display:grid; grid-template-columns:1fr 1fr; gap:10px;')}>
                {contactPrefOptions.map((o) => (
                  <El as="button" key={o.label} onClick={() => select('contactPref', o.label)} style={css(optCard)} hover={css(optHover)}>
                    <span style={css('font-size:20px;')}>{o.icon}</span>
                    <span style={css('font-weight:700; font-size:14.5px; color:#16214A;')}>{o.label}</span>
                  </El>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div style={css('animation:uwSlide .22s ease;')}>
              <h3 style={css(qTitle)}>Where should we send your quote?</h3>
              <p style={css(qSub)}>Free and non-binding. Your data is processed under GDPR & Thai PDPA.</p>
              <div style={css('display:flex; flex-direction:column; gap:12px;')}>
                <div style={css('display:grid; grid-template-columns:1fr 1fr; gap:10px;')}>
                  <input value={f.first} onChange={(e) => setContact({ first: e.target.value })} placeholder="First name" style={css(inputStyle)} />
                  <input value={f.last} onChange={(e) => setContact({ last: e.target.value })} placeholder="Last name" style={css(inputStyle)} />
                </div>
                <input value={f.email} onChange={(e) => setContact({ email: e.target.value })} placeholder="Email address" style={css(inputStyle)} />
                <input value={f.phone} onChange={(e) => setContact({ phone: e.target.value })} placeholder="Phone (with country code)" style={css(inputStyle)} />
                {formError && <span style={css('font-size:13px; color:#C25B4E; font-weight:600;')}>{formError}</span>}
                <label style={css('display:flex; align-items:flex-start; gap:10px; font-size:12.5px; color:#5A6580; line-height:1.5; cursor:pointer;')}>
                  <input type="checkbox" checked={f.consent} onChange={(e) => setContact({ consent: e.target.checked })} style={css('margin-top:2px; width:16px; height:16px; accent-color:#2B50E4; flex:0 0 auto;')} />
                  <span>I consent to Unwello processing my health data to prepare a quote, and to sharing it with vetted Thai providers for this purpose.</span>
                </label>
                <El as="button" onClick={submit} style={css('background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:15px; border-radius:13px; font-weight:800; font-size:15.5px; cursor:pointer; box-shadow:0 8px 20px rgba(43,80,228,.24); margin-top:4px;')} hover={css('background:#1B3AB8;')}>
                  Send my inquiry
                </El>
              </div>
            </div>
          )}

          {isSuccess && (
            <div style={css('text-align:center; animation:uwFade .3s ease; padding:8px 0;')}>
              <div style={css('width:70px; height:70px; border-radius:50%; background:#E7ECFF; color:#2B50E4; display:flex; align-items:center; justify-content:center; font-size:34px; margin:0 auto 20px;')}>✓</div>
              <h3 style={css('font-size:24px; font-weight:800; color:#16214A; margin:0 0 10px; letter-spacing:-.02em;')}>You're all set{f.first ? ', ' + f.first : ''}!</h3>
              <p style={css('font-size:15px; color:#5A6580; line-height:1.6; margin:0 auto 24px; max-width:400px;')}>Your coordinator will reach out within a few hours with matched clinics and a transparent quote. No obligation, ever.</p>
              <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:16px; padding:18px; display:flex; align-items:center; gap:14px; text-align:left; margin-bottom:20px;')}>
                <Placeholder style="width:52px; height:52px; border-radius:50%; flex:0 0 auto;" />
                <div>
                  <div style={css('font-weight:700; font-size:14.5px; color:#16214A;')}>Nara will be your coordinator</div>
                  <div style={css('font-size:13px; color:#8B95AD;')}>Speaks EN · TH · DE · Replies in ~2h</div>
                </div>
              </div>
              <El as="button" onClick={closeFunnel} style={css('background:#16214A; color:#fff; border:none; padding:14px 30px; border-radius:12px; font-weight:700; font-size:15px; cursor:pointer;')} hover={css('background:#0E1838;')}>Back to site</El>
            </div>
          )}

          {showBack && (
            <El as="button" onClick={goBack} style={css('margin-top:20px; background:none; border:none; color:#8B95AD; font-size:13.5px; font-weight:600; cursor:pointer; padding:0;')} hover={css('color:#16214A;')}>← Back</El>
          )}
        </div>
      </div>
    </div>
  )
}
