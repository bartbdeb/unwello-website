import { Routes, Route } from 'react-router-dom'
import { css, El } from './ui'
import { AppContext } from './context'
import { useFunnel } from './useFunnel'
import { WHATSAPP_NUMBER } from './data'
import Header from './sections/Header'
import { Footer } from './sections/Sections'
import HomePage from './pages/HomePage'
import BrowseTreatments from './pages/BrowseTreatments'
import TreatmentCategory from './pages/TreatmentCategory'
import ProcedureDetail from './pages/ProcedureDetail'
import ClinicsListing from './pages/ClinicsListing'
import ClinicProfile from './pages/ClinicProfile'
import HowItWorksPage from './pages/HowItWorks'
import Stories from './pages/Stories'
import StoryDetail from './pages/StoryDetail'
import News from './pages/News'
import NewsArticle from './pages/NewsArticle'
import QuoteFunnel from './sections/QuoteFunnel'
import AIChat from './sections/AIChat'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const funnel = useFunnel()
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Unwello, I'd like help planning treatment in Thailand.")}`

  return (
    <AppContext.Provider value={{ openFunnel: funnel.openFunnel }}>
      <ScrollToTop />
      <div style={css('width:100%; min-height:100vh; background:#F4F7FF;')}>
        <Header />

        {/* Page content by route */}
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
        </Routes>

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

        {/* Resume banner — shows when there's saved, unfinished funnel progress */}
        {funnel.hasSavedProgress && !funnel.open && (
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
    </AppContext.Provider>
  )
}
