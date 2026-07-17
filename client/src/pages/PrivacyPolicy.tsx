import { Link } from 'react-router-dom'
import { css } from '../ui'
import LegalLayout, { legalH2, legalUl, legalCallout } from '../components/LegalLayout'

const tableRow = 'display:grid; grid-template-columns:1.4fr 1fr 1.2fr; gap:12px; padding:14px 0; border-bottom:1px solid #ECF1FD; font-size:13.5px;'

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="16 July 2026"
      description="How Hospigo collects, uses, and protects your personal data, including health-related information, under GDPR, PDPA and other applicable privacy laws."
      path="/privacy"
    >
      <p>Effective for: hospigo.com and all related subdomains and services (the "Site")</p>

      <h2 style={css(legalH2)}>1. Who we are</h2>
      <p>
        Hospigo is operated by <strong>Intermedi Pte. Ltd.</strong> ("Hospigo," "we," "us," or "our"), a company incorporated in Singapore (UEN 202623943K), with its registered office at 160 Robinson Road, #14-04 Singapore Business Federation Center, Singapore 068914.
      </p>
      <p>
        Hospigo connects prospective patients with independent, third-party hospitals, clinics, and medical providers located in Thailand (and potentially other destinations in the future). Hospigo is a marketing and facilitation service — we are not a hospital, clinic, doctor, or insurer, and we do not provide medical advice or medical services ourselves. See our <Link to="/terms" style={css('color:#2B50E4; font-weight:600;')}>Terms of Service</Link> for details on the nature of our service.
      </p>
      <p>
        For any question about this policy or your personal data, contact our designated Data Protection Officer at <strong>Bart@hospigo.com</strong>. (This person is our designated contact for data protection matters under Singapore's Personal Data Protection Act and other applicable privacy laws.)
      </p>

      <h3 style={css('font-size:16px; font-weight:800; color:#16214A; margin:20px 0 8px;')}>EU Representative</h3>
      <p>
        Because Hospigo has no establishment in the European Union but processes personal data of individuals located in the EU, we are required under Article 27 of the GDPR to appoint an EU representative.
      </p>
      <div style={css(legalCallout)}>
        EU Representative name, address, and contact details to be added here once appointed. This policy should not be published to EU visitors until this section is complete.
      </div>

      <h2 style={css(legalH2)}>2. What information we collect</h2>
      <p>When you use our inquiry / lead form or otherwise contact us, we may collect:</p>
      <ul style={css(legalUl)}>
        <li><strong>Contact information</strong>: name, email address, phone number, country of residence.</li>
        <li><strong>Health-related information you choose to share</strong>: the type of procedure you're interested in, relevant medical history, or other health details you provide to help us match you with an appropriate provider. This is "special category" / sensitive data under several of the laws that apply to us, and we treat it accordingly (see Section 4).</li>
        <li><strong>Technical information</strong>: IP address, browser type, device information, and general usage data collected automatically via cookies and similar technologies (see Section 8).</li>
        <li><strong>Communications</strong>: records of correspondence between you and Hospigo, including consent records (what you agreed to, and when).</li>
      </ul>
      <p>We do not currently process payments or bookings directly through the Site. If that changes, this policy will be updated to describe how payment data is handled.</p>

      <h2 style={css(legalH2)}>3. Why we collect it, and our legal basis</h2>
      <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:16px; padding:0 20px; margin:0 0 16px; overflow-x:auto;')}>
        <div style={css(tableRow + ' font-weight:800; color:#16214A; border-bottom:2px solid #16214A;')}>
          <span>Purpose</span><span>What data</span><span>Legal basis</span>
        </div>
        <div style={css(tableRow)}>
          <span>Responding to your inquiry and matching you with a provider</span><span>Contact info, health-related info</span><span>Your explicit, opt-in consent</span>
        </div>
        <div style={css(tableRow)}>
          <span>Sending you information you've requested (e.g. marketing updates)</span><span>Contact info</span><span>Your separate, opt-in consent</span>
        </div>
        <div style={css(tableRow)}>
          <span>Operating and securing the Site</span><span>Technical data</span><span>Our legitimate interest in running a functioning, secure website</span>
        </div>
        <div style={css(tableRow + ' border-bottom:none;')}>
          <span>Complying with legal obligations (e.g. breach notification, regulator requests)</span><span>Any of the above, as relevant</span><span>Legal obligation</span>
        </div>
      </div>
      <p>
        Where we rely on your consent — which is the basis for essentially all health-related data we collect — you may withdraw it at any time by contacting us at Bart@hospigo.com. Withdrawing consent does not affect the lawfulness of anything we did before you withdrew it, but it may mean we can no longer help connect you with a provider.
      </p>
      <p>We ask for consent to health-related data collection and to marketing communications <strong>separately</strong> — ticking one does not mean you've agreed to the other.</p>

      <h2 style={css(legalH2)}>4. Sensitive / health data</h2>
      <p>
        Some of what you share with us (for example, details about a medical condition or procedure) is treated as sensitive personal data under the GDPR (health data, Article 9), Singapore's PDPA, Canada's PIPEDA, and comparable US state laws (including Washington's My Health My Data Act and California's Confidentiality of Medical Information Act). Regardless of which of these applies to you, we apply the same practice across the board:
      </p>
      <ul style={css(legalUl)}>
        <li>We only collect it with your clear, affirmative, opt-in consent, given separately from any other consent (e.g. marketing).</li>
        <li>We only use it to match you with a suitable medical provider and respond to your inquiry — not for advertising profiling or sale to third parties.</li>
        <li>We limit access internally to staff who need it to process your inquiry.</li>
        <li>We do not sell health-related personal data.</li>
      </ul>

      <h2 style={css(legalH2)}>5. Who we share your information with</h2>
      <p>We share your information only where necessary to provide our service:</p>
      <ul style={css(legalUl)}>
        <li><strong>Partner hospitals and clinics</strong> in Thailand, so they can respond to your inquiry — only with your consent, and only the information relevant to your inquiry.</li>
        <li><strong>Service providers</strong> who help us run the Site (e.g. hosting, email/CRM, form processing), acting under contractual confidentiality and data protection obligations.</li>
        <li><strong>Regulators or authorities</strong>, where required by law.</li>
        <li><strong>A successor entity</strong>, if Hospigo is ever involved in a merger, acquisition, or sale of assets — subject to the same protections described here.</li>
      </ul>
      <p>We do not sell your personal data to third parties for their own marketing purposes.</p>

      <h2 style={css(legalH2)}>6. International data transfers</h2>
      <p>
        Hospigo is based in Singapore, our partner providers are in Thailand, and we serve visitors from Canada, the United States, and the European Economic Area, among other places. This means your data will typically be transferred across borders. Where we transfer personal data out of the EEA, Singapore, or other jurisdictions with transfer restrictions, we use appropriate safeguards (such as standard contractual clauses or equivalent mechanisms) as required by applicable law.
      </p>

      <h2 style={css(legalH2)}>7. How long we keep your data</h2>
      <p>
        We retain inquiry data (including any health-related information you shared) for up to <strong>24 months after our last contact with you</strong>, after which it is deleted or anonymized — unless you ask us to delete it sooner, or a longer retention period is required by law (for example, for accounting or legal defense purposes). Consent records are kept for as long as needed to demonstrate compliance. We periodically review and delete data we no longer need.
      </p>

      <h2 style={css(legalH2)}>8. Cookies and similar technologies</h2>
      <p>
        The Site uses cookies and similar technologies for basic functionality and, only with your consent, analytics. Analytics cookies are off by default and only load if you actively opt in via our cookie banner. See our <Link to="/cookies" style={css('color:#2B50E4; font-weight:600;')}>Cookie Policy</Link> for the specific cookies we use and how to change your choice at any time.
      </p>

      <h2 style={css(legalH2)}>9. Your rights</h2>
      <p>Depending on where you live, you may have rights to:</p>
      <ul style={css(legalUl)}>
        <li>Access the personal data we hold about you.</li>
        <li>Correct inaccurate data.</li>
        <li>Request deletion of your data.</li>
        <li>Restrict or object to certain processing.</li>
        <li>Receive your data in a portable format.</li>
        <li>Withdraw consent at any time.</li>
        <li>Lodge a complaint with your local data protection authority — for example, the Personal Data Protection Commission in Singapore, the Office of the Privacy Commissioner of Canada, your national supervisory authority if you're in the EU, or your state Attorney General / the FTC in the United States.</li>
      </ul>
      <p>
        <strong>For residents of certain US states</strong> (including California, Washington, and others with comprehensive privacy laws): you may have additional rights to opt out of the "sale" or "sharing" of personal information and of targeted advertising. Hospigo does not sell your personal information or share it for cross-context behavioral advertising. If that ever changes, we will update this policy and provide the required opt-out mechanisms first.
      </p>
      <p>To exercise any of these rights, contact us at <strong>Bart@hospigo.com</strong>. We will respond within the timeframe required by applicable law. We will not discriminate against you for exercising any privacy right.</p>

      <h2 style={css(legalH2)}>10. Security</h2>
      <p>
        We use reasonable technical and organizational measures to protect your information, including encryption in transit (HTTPS) and access controls. No system is completely secure, and we cannot guarantee absolute security. If we become aware of a breach affecting your personal data, we will notify you and any relevant regulator as required by applicable law (including, where applicable, the FTC Health Breach Notification Rule, PIPEDA's mandatory breach reporting, and GDPR's 72-hour notification requirement).
      </p>

      <h2 style={css(legalH2)}>11. Children's privacy</h2>
      <p>The Site is not directed at children, and we do not knowingly collect personal data from anyone under 18. If you believe a child has provided us with personal data, contact us and we will delete it.</p>

      <h2 style={css(legalH2)}>12. Changes to this policy</h2>
      <p>We may update this policy from time to time. We will post the updated version here with a new "Last updated" date, and where changes are material, we will provide additional notice as appropriate.</p>

      <h2 style={css(legalH2)}>13. Contact us</h2>
      <p>
        Intermedi Pte. Ltd. (trading as Hospigo)<br />
        160 Robinson Road, #14-04 Singapore Business Federation Center, Singapore 068914<br />
        Bart@hospigo.com
      </p>
    </LegalLayout>
  )
}
