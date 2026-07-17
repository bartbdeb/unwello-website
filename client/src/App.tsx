import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { css, El } from './ui'
import { AppContext } from './context'
import { ViewsProvider } from './viewsContext'
import { CookieConsentProvider, useCookieConsent } from './cookieConsent'
import { useFunnel } from './useFunnel'
import { WHATSAPP_NUMBER } from './data'
import Header from './sections/Header'
import { Footer } from './sections/Sections'
import QuoteFunnel from './sections/QuoteFunnel'
import AIChat from './sections/AIChat'
import ScrollToTop from './components/ScrollToTop'

// Route-level code splitting: each page (and the content data it pulls in —
// hospitals.ts alone is 2000+ lines of real JCI data) becomes its own chunk,
// so e.g. a visitor landing directly on a news article isn't also
// downloading ClinicProfile/TreatmentCategory code they'll never use.
const HomePage = lazy(() => import('./pages/HomePage'))
const BrowseTreatments = lazy(() => import('./pages/BrowseTreatments'))
const TreatmentCategory = lazy(() => import('./pages/TreatmentCategory'))
const ProcedureDetail = lazy(() => import('./pages/ProcedureDetail'))
const ClinicsListing = lazy(() => import('./pages/ClinicsListing'))
const ClinicProfile = lazy(() => import('./pages/ClinicProfile'))
const HowItWorksPage = lazy(() => import('./pages/HowItWorks'))
const Stories = lazy(() => import('./pages/Stories'))
const StoryDetail = lazy(() => import('./pages/StoryDetail'))
const News = lazy(() => import('./pages/News'))
const NewsArticle = lazy(() => import('./pages/NewsArticle'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const MedicalDisclaimer = lazy(() => import('./pages/MedicalDisclaimer'))

export default function App() {
  const funnel = useFunnel()

  return (
    <AppContext.Provider value={{ openFunnel: funnel.openFunnel }}>
    <ViewsProvider>
    <CookieConsentProvider>
      <AppShell funnel={funnel} />
    </CookieConsentProvider>
    </ViewsProvider>
    </AppContext.Provider>
  )
}

function AppShell({ funnel }: { funnel: ReturnType<typeof useFunnel> }) {
  const { showBanner } = useCookieConsent()
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Hospigo, I'd like help planning treatment in Thailand.")}`

  return (
    <>
      <ScrollToTop />
      <div style={css('width:100%; min-height:100vh; background:#F4F7FF;')}>
        <Header />

        {/* Page content by route */}
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/treatments" element={<BrowseTreatments />} />
            <Route path="/treatments/:slug" element={<TreatmentCategory />} />
            <Route path="/treatments/:specialtySlug/:procedureSlug" element={<ProcedureDetail />} />
            <Route path="/clinics" element={<ClinicsListing />} />
            <Route path="/clinics/:slug" element={<ClinicProfile />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:slug" element={<StoryDetail />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsArticle />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/medical-disclaimer" element={<MedicalDisclaimer />} />
          </Routes>
        </Suspense>

        <Footer />

        {/* Floating WhatsApp */}
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          style={css('position:fixed; bottom:26px; right:26px; width:58px; height:58px; border-radius:50%; background:#25D366; display:flex; align-items:center; justify-content:center; font-size:26px; box-shadow:0 10px 26px rgba(37,211,102,.4); z-index:40;')}
        >
          💬
        </a>

        {/* AI intake assistant */}
        <AIChat />

        {/* Resume banner — shows when there's saved, unfinished funnel progress.
            Deferred while the cookie banner is up so the two bottom-left
            cards don't stack on top of each other. */}
        {funnel.hasSavedProgress && !funnel.open && !showBanner && (
          <div className="uw-resume-banner" style={css('position:fixed; bottom:26px; left:26px; background:#fff; border:1px solid #E1E8F7; border-radius:16px; box-shadow:0 16px 40px rgba(35,51,47,.18); padding:16px 18px; display:flex; align-items:center; gap:14px; z-index:39; max-width:340px; animation:uwFade .3s ease;')}>
            <span style={css('font-size:22px;')}>📝</span>
            <div style={css('flex:1;')}>
              <div style={css('font-weight:700; font-size:14px; color:#16214A;')}>Continue your quote</div>
              <div style={css('font-size:12.5px; color:#8B95AD;')}>You have an unfinished request.</div>
            </div>
            <El as="button" onClick={funnel.resumeFunnel} style={css('background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:9px 14px; border-radius:10px; font-weight:700; font-size:13px; cursor:pointer;')} hover={css('background:#1B3AB8;')}>Resume</El>
            <button onClick={funnel.dismissResume} aria-label="Dismiss" style={css('background:none; border:none; color:#B7C0DE; font-size:16px; cursor:pointer; padding:0;')}>✕</button>
          </div>
        )}

        {/* Quote funnel modal */}
        <QuoteFunnel funnel={funnel} />
      </div>
    </>
  )
}
