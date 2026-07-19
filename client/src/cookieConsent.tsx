import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { css, El } from './ui'
import { initAnalytics, trackPageView } from './analytics'

// Bump this if the cookie categories/policy change in a way that requires
// re-prompting everyone (GDPR/PDPA: consent must stay specific to what it
// was given for).
const CONSENT_VERSION = 1
const STORAGE_KEY = 'hospigo-cookie-consent'

type ConsentChoice = { necessary: true; analytics: boolean; decidedAt: string; version: number }

function loadStoredConsent(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as ConsentChoice
    return parsed.version === CONSENT_VERSION ? parsed : null
  } catch {
    return null
  }
}

function storeConsent(analytics: boolean): ConsentChoice {
  const choice: ConsentChoice = { necessary: true, analytics, decidedAt: new Date().toISOString(), version: CONSENT_VERSION }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(choice))
  return choice
}

type CookieConsentCtx = {
  showBanner: boolean
  analyticsEnabled: boolean
  acceptAll: () => void
  rejectNonEssential: () => void
  savePreferences: (analytics: boolean) => void
  openPreferences: () => void
}

const CookieConsentContext = createContext<CookieConsentCtx>({
  showBanner: false,
  analyticsEnabled: false,
  acceptAll: () => {},
  rejectNonEssential: () => {},
  savePreferences: () => {},
  openPreferences: () => {},
})

export const useCookieConsent = () => useContext(CookieConsentContext)

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentChoice | null>(null)
  const [ready, setReady] = useState(false)
  const [preferencesOpen, setPreferencesOpen] = useState(false)

  // No analytics script loads until this effect confirms a stored, granted
  // choice — GA4 is never fetched pre-consent (see analytics.ts).
  useEffect(() => {
    const stored = loadStoredConsent()
    setConsent(stored)
    setReady(true)
    if (stored?.analytics) {
      initAnalytics()
      // ScrollToTop only reports page_view on route *changes*, and its own
      // mount-time effect can fire before this one (React runs child effects
      // before parent effects, and ScrollToTop sits below this provider) —
      // so it silently no-ops if analytics isn't initialized yet. Send the
      // landing page's hit explicitly here, or a returning visitor's very
      // first page of the session never gets tracked at all.
      trackPageView(window.location.pathname)
    }
  }, [])

  const apply = (analytics: boolean) => {
    setConsent(storeConsent(analytics))
    setPreferencesOpen(false)
    if (analytics) {
      initAnalytics()
      // ScrollToTop's page_view only fires on route *changes* — send one now
      // for the page the visitor is already on, or accepting mid-session
      // would silently miss it.
      trackPageView(window.location.pathname)
    }
  }

  const isFirstVisit = ready && consent === null
  const value: CookieConsentCtx = {
    showBanner: isFirstVisit || preferencesOpen,
    analyticsEnabled: !!consent?.analytics,
    acceptAll: () => apply(true),
    rejectNonEssential: () => apply(false),
    savePreferences: apply,
    openPreferences: () => setPreferencesOpen(true),
  }

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      {value.showBanner && (
        <CookieBanner
          initialAnalytics={consent?.analytics ?? false}
          dismissable={!isFirstVisit}
          onDismiss={() => setPreferencesOpen(false)}
        />
      )}
    </CookieConsentContext.Provider>
  )
}

function CookieBanner({ initialAnalytics, dismissable, onDismiss }: { initialAnalytics: boolean; dismissable: boolean; onDismiss: () => void }) {
  const { acceptAll, rejectNonEssential, savePreferences } = useCookieConsent()
  const [expanded, setExpanded] = useState(false)
  const [analyticsChecked, setAnalyticsChecked] = useState(initialAnalytics)

  return (
    <div
      className="uw-cookie-banner"
      role="dialog"
      aria-label="Cookie preferences"
      style={css('position:fixed; left:26px; bottom:26px; z-index:70; width:380px; max-width:calc(100vw - 52px); background:#fff; border:1px solid #E1E8F7; border-radius:18px; box-shadow:0 20px 50px rgba(35,51,47,.22); padding:22px; animation:uwFade .25s ease;')}
    >
      {dismissable && (
        <button onClick={onDismiss} aria-label="Close" style={css('position:absolute; top:14px; right:14px; background:none; border:none; color:#B7C0DE; font-size:16px; cursor:pointer; padding:0;')}>✕</button>
      )}

      {!expanded ? (
        <>
          <div style={css('font-size:22px; margin-bottom:8px;')}>🍪</div>
          <div style={css('font-weight:800; font-size:15.5px; color:#16214A; margin-bottom:6px;')}>We use cookies</div>
          <p style={css('font-size:13px; line-height:1.55; color:#5A6580; margin:0 0 16px;')}>
            We use necessary cookies to run this site, and optional analytics cookies (Google Analytics) to understand how it's used — only if you allow them.{' '}
            <Link to="/cookies" style={css('color:#2B50E4; font-weight:600;')}>Cookie Policy</Link>
          </p>
          <div style={css('display:flex; gap:8px; flex-wrap:wrap;')}>
            <El as="button" onClick={acceptAll} style={css('flex:1; background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:11px; border-radius:11px; font-weight:700; font-size:13.5px; cursor:pointer;')} hover={css('background:#1B3AB8;')}>Accept all</El>
            <El as="button" onClick={rejectNonEssential} style={css('flex:1; background:#F2F6FF; color:#16214A; border:1px solid #E1E8F7; padding:11px; border-radius:11px; font-weight:700; font-size:13.5px; cursor:pointer;')} hover={css('background:#E7ECFF;')}>Reject non-essential</El>
          </div>
          <button onClick={() => setExpanded(true)} style={css('width:100%; margin-top:10px; background:none; border:none; font-family:inherit; font-size:12.5px; font-weight:700; color:#2B50E4; cursor:pointer;')}>Manage preferences</button>
        </>
      ) : (
        <>
          <div style={css('font-weight:800; font-size:15.5px; color:#16214A; margin-bottom:14px;')}>Cookie preferences</div>
          <label style={css('display:flex; align-items:center; justify-content:space-between; gap:12px; padding:11px 0; border-bottom:1px solid #ECF1FD;')}>
            <span>
              <span style={css('display:block; font-weight:700; font-size:13.5px; color:#16214A;')}>Necessary</span>
              <span style={css('display:block; font-size:12px; color:#8B95AD; margin-top:2px;')}>Required for the site to function. Always on.</span>
            </span>
            <input type="checkbox" checked disabled aria-label="Necessary cookies (always on)" style={css('width:18px; height:18px; flex:0 0 auto;')} />
          </label>
          <label style={css('display:flex; align-items:center; justify-content:space-between; gap:12px; padding:11px 0;')}>
            <span>
              <span style={css('display:block; font-weight:700; font-size:13.5px; color:#16214A;')}>Analytics</span>
              <span style={css('display:block; font-size:12px; color:#8B95AD; margin-top:2px;')}>Google Analytics — helps us understand site usage. Optional.</span>
            </span>
            <input
              type="checkbox"
              checked={analyticsChecked}
              onChange={(e) => setAnalyticsChecked(e.target.checked)}
              aria-label="Analytics cookies"
              style={css('width:18px; height:18px; accent-color:#2B50E4; flex:0 0 auto;')}
            />
          </label>
          <div style={css('display:flex; gap:8px; margin-top:16px;')}>
            <El as="button" onClick={() => savePreferences(analyticsChecked)} style={css('flex:1; background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:11px; border-radius:11px; font-weight:700; font-size:13.5px; cursor:pointer;')} hover={css('background:#1B3AB8;')}>Save preferences</El>
            {dismissable && (
              <button onClick={onDismiss} style={css('background:none; border:1px solid #E1E8F7; padding:11px 16px; border-radius:11px; font-weight:700; font-size:13.5px; color:#16214A; cursor:pointer; font-family:inherit;')}>Cancel</button>
            )}
          </div>
        </>
      )}
    </div>
  )
}
