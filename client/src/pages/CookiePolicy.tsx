import { Link } from 'react-router-dom'
import { css } from '../ui'
import { useCookieConsent } from '../cookieConsent'
import LegalLayout, { legalH2 } from '../components/LegalLayout'

const tableRow = 'display:grid; grid-template-columns:1.1fr 1fr 2fr 1fr; gap:12px; padding:14px 0; border-bottom:1px solid #ECF1FD; font-size:13.5px;'

export default function CookiePolicy() {
  const { openPreferences } = useCookieConsent()

  return (
    <LegalLayout title="Cookie Policy" lastUpdated="16 July 2026">
      <p>
        This policy explains what cookies and similar technologies (like browser local storage) Hospigo uses, why, and how you can control them. It should be read alongside our <Link to="/privacy" style={css('color:#2B50E4; font-weight:600;')}>Privacy Policy</Link>. Hospigo is committed to complying with Singapore's Personal Data Protection Act (PDPA), the EU/UK General Data Protection Regulation (GDPR), Canada's PIPEDA, and applicable US state privacy laws (such as the CCPA/CPRA).
      </p>

      <h2 style={css(legalH2)}>What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. We also use your browser's local storage for some of the same purposes — everything below applies to both. We don't use cookies or local storage to identify you personally unless you've submitted a quote request or otherwise given us your details directly.
      </p>

      <h2 style={css(legalH2)}>The two categories we use</h2>
      <p>
        <strong>Necessary</strong> — required for the site to function (like remembering your cookie choice, or resuming an unfinished quote request). These can't be switched off, because the site can't work properly without them, and under PDPA/GDPR they don't require consent since they're strictly necessary for a service you've requested.
      </p>
      <p>
        <strong>Analytics</strong> — Google Analytics 4, which helps us understand how the site is used (pages visited, general location, device type) so we can improve it. This is optional and <strong>off by default</strong> — it only loads after you actively choose "Accept all" or turn it on in preferences.
      </p>

      <h2 style={css(legalH2)}>Specific cookies &amp; storage we use</h2>
      <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:16px; padding:0 20px; margin:0 0 8px; overflow-x:auto;')}>
        <div style={css(tableRow + ' font-weight:800; color:#16214A; border-bottom:2px solid #16214A;')}>
          <span>Name</span><span>Type</span><span>Purpose</span><span>Duration</span>
        </div>
        <div style={css(tableRow)}>
          <span>hospigo-cookie-consent</span><span>Local storage</span><span>Remembers your cookie preference so we don't ask every visit.</span><span>Until cleared</span>
        </div>
        <div style={css(tableRow)}>
          <span>hospigo_funnel_progress</span><span>Local storage</span><span>Lets you resume an unfinished quote request.</span><span>Until cleared</span>
        </div>
        <div style={css(tableRow)}>
          <span>hospigo-viewed:*</span><span>Session storage</span><span>Prevents a single visit from inflating an article's view count.</span><span>Browser session</span>
        </div>
        <div style={css(tableRow + ' border-bottom:none;')}>
          <span>_ga, _ga_*</span><span>Cookie (Google)</span><span>Google Analytics — distinguishes visitors and sessions. Only set if you accept Analytics.</span><span>Up to 2 years</span>
        </div>
      </div>

      <h2 style={css(legalH2)}>Your rights</h2>
      <p>
        Depending on where you're located, you may have the right to access, correct, delete, or export your personal data, to withdraw consent at any time, and to object to certain processing. Singapore's PDPA, Canada's PIPEDA, and EU/UK GDPR give you these rights directly; if you're a US resident in a state with its own privacy law, you may have a right to opt out of the "sale" or "sharing" of personal information — we don't sell personal data, and Analytics only runs with your opt-in consent regardless of where you're visiting from. See our <Link to="/privacy" style={css('color:#2B50E4; font-weight:600;')}>Privacy Policy</Link> for the full detail on your rights and how to exercise them.
      </p>
      <p>
        You can change your analytics choice at any time — click below to reopen preferences, or use the "Cookie preferences" link in the footer of any page.
      </p>
      <button
        onClick={openPreferences}
        style={css('background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:13px 24px; border-radius:12px; font-weight:700; font-size:14.5px; cursor:pointer; font-family:inherit; margin:8px 0 32px;')}
      >
        Manage cookie preferences
      </button>

      <h2 style={css(legalH2)}>Who to contact</h2>
      <p>
        Hospigo is operated by Intermedi Pte. Ltd., 160 Robinson Road, #14-04 Singapore Business Federation Center, Singapore 068914. For any question about this policy or to exercise a privacy right, contact us at Bart@hospigo.com.
      </p>
    </LegalLayout>
  )
}
