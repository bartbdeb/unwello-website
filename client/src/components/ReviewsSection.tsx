import { useEffect, useState } from 'react'
import { css, eyebrow, h2Style } from '../ui'
import { API_BASE } from '../apiBase'

type ReviewsResponse =
  | { configured: false; message?: string }
  | { configured: true; found: false }
  | {
      configured: true
      found: true
      googleName: string
      rating: number | null
      userRatingsTotal: number
      googleMapsUrl: string | null
      reviews: { author: string; rating: number; relativeTime: string; text: string }[]
    }

type State = { status: 'loading' } | { status: 'done'; data: ReviewsResponse } | { status: 'error' }

// Real, third-party reviews for a real, named facility — sourced live from
// Google (via the server's /api/reviews proxy, so the API key stays off the
// client). No review content is authored or fabricated here.
export default function ReviewsSection({ name, city }: { name: string; city: string }) {
  const [state, setState] = useState<State>({ status: 'loading' })

  useEffect(() => {
    let cancelled = false
    setState({ status: 'loading' })
    fetch(`${API_BASE}/api/reviews?name=${encodeURIComponent(name)}&city=${encodeURIComponent(city)}`)
      .then((r) => r.json())
      .then((data) => { if (!cancelled) setState({ status: 'done', data }) })
      .catch(() => { if (!cancelled) setState({ status: 'error' }) })
    return () => { cancelled = true }
  }, [name, city])

  return (
    <section style={css('max-width:1240px; margin:0 auto; padding:20px 32px 48px;')}>
      <span style={css(eyebrow)}>Patient reviews</span>
      <h2 style={css(h2Style + ' margin-bottom:20px;')}>What people say on Google</h2>

      {state.status === 'loading' && (
        <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:16px; padding:28px; text-align:center; color:#8B95AD; font-size:14px;')}>
          Loading reviews…
        </div>
      )}

      {state.status === 'error' && (
        <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:16px; padding:28px; text-align:center; color:#8B95AD; font-size:14px;')}>
          Couldn't load reviews right now — please try again later.
        </div>
      )}

      {state.status === 'done' && !state.data.configured && (
        <div style={css('background:#F2F6FF; border:1px solid #E1E8F7; border-radius:16px; padding:24px; font-size:14px; color:#5A6580; line-height:1.6;')}>
          {state.data.message || "Live reviews aren't connected yet."}
        </div>
      )}

      {state.status === 'done' && state.data.configured && !state.data.found && (
        <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:16px; padding:28px; text-align:center; color:#8B95AD; font-size:14px;')}>
          No Google listing found for this facility yet.
        </div>
      )}

      {state.status === 'done' && state.data.configured && state.data.found && (
        <div className="uw-savings" style={css('display:grid; grid-template-columns:.8fr 1.2fr; gap:36px; align-items:start;')}>
          <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:18px; padding:22px;')}>
            <div style={css('display:flex; align-items:baseline; gap:10px; margin-bottom:10px;')}>
              <span style={css('font-size:36px; font-weight:800; color:#16214A;')}>{state.data.rating ?? '—'}</span>
              <span style={css('color:#F6B33D; font-size:16px;')}>★★★★★</span>
            </div>
            <div style={css('font-size:13px; color:#8B95AD; margin-bottom:16px;')}>{state.data.userRatingsTotal.toLocaleString('en-US')} Google reviews</div>
            {state.data.googleMapsUrl && (
              <a href={state.data.googleMapsUrl} target="_blank" rel="noreferrer" style={css('font-size:13.5px; font-weight:700; color:#2B50E4;')}>View on Google Maps →</a>
            )}
            <div style={css('font-size:11.5px; color:#B7C0DE; margin-top:16px;')}>Reviews via Google</div>
          </div>
          <div style={css('display:flex; flex-direction:column; gap:14px;')}>
            {state.data.reviews.length === 0 && (
              <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:16px; padding:22px; color:#8B95AD; font-size:14px;')}>No individual reviews available from Google for this facility.</div>
            )}
            {state.data.reviews.map((r, i) => (
              <div key={i} style={css('background:#fff; border:1px solid #E1E8F7; border-radius:16px; padding:18px 20px;')}>
                <div style={css('display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:8px;')}>
                  <span style={css('font-weight:700; font-size:14.5px; color:#16214A;')}>{r.author}</span>
                  <span style={css('color:#F6B33D; font-size:13px;')}>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span>
                </div>
                <div style={css('font-size:12.5px; color:#8B95AD; margin-bottom:10px;')}>{r.relativeTime}</div>
                <p style={css('font-size:14px; line-height:1.6; color:#3A4468; margin:0;')}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
