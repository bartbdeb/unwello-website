import { Link } from 'react-router-dom'
import { css } from '../ui'
import LegalLayout, { legalH2, legalUl } from '../components/LegalLayout'

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="16 July 2026">
      <p>
        These Terms of Service ("Terms") govern your use of hospigo.com and any related services (the "Site"), operated by <strong>Intermedi Pte. Ltd.</strong>, trading as <strong>Hospigo</strong> ("Hospigo," "we," "us," "our"), a company incorporated in Singapore (UEN 202623943K), registered office at 160 Robinson Road, #14-04 Singapore Business Federation Center, Singapore 068914.
      </p>
      <p>By using the Site or submitting an inquiry through it, you agree to these Terms. If you do not agree, please do not use the Site.</p>

      <h2 style={css(legalH2)}>1. What Hospigo is — and isn't</h2>
      <p>Hospigo is a marketing and facilitation platform that helps prospective patients learn about and get in touch with independent, third-party hospitals, clinics, and medical providers in Thailand.</p>
      <p>Hospigo is <strong>not</strong>:</p>
      <ul style={css(legalUl)}>
        <li>A hospital, clinic, doctor, medical practice, or healthcare provider.</li>
        <li>A provider of medical advice, diagnosis, or treatment recommendations.</li>
        <li>An insurer or travel agency, unless separately stated.</li>
        <li>A guarantor of any medical outcome, provider availability, pricing, or service quality.</li>
      </ul>
      <p>Any hospital, clinic, or doctor referenced on the Site is an independent third party. Hospigo does not employ them, control their clinical decisions, or supervise the care they provide. Any agreement you enter into with a provider is directly between you and that provider.</p>

      <h2 style={css(legalH2)}>2. Eligibility</h2>
      <p>You must be at least 18 years old to submit an inquiry or use the Site. By using the Site, you confirm that you meet this requirement.</p>

      <h2 style={css(legalH2)}>3. Your inquiry and account information</h2>
      <p>When you submit an inquiry through the Site, you agree to provide accurate, current, and complete information. You're responsible for keeping us updated if your contact details change. We handle the information you submit as described in our <Link to="/privacy" style={css('color:#2B50E4; font-weight:600;')}>Privacy Policy</Link>.</p>

      <h2 style={css(legalH2)}>4. No medical advice</h2>
      <p>Nothing on the Site constitutes medical advice. Content on the Site is for general informational purposes only and should not be used as a substitute for consultation with a qualified healthcare professional. Always seek the advice of a qualified physician regarding any medical condition or procedure, including risks, alternatives, and suitability for your individual circumstances.</p>
      <p><strong>The Site is not for medical emergencies.</strong> If you are experiencing a medical emergency, call your local emergency services immediately. Do not use the Site or wait for a response from Hospigo or any provider.</p>

      <h2 style={css(legalH2)}>5. Medical tourism risks</h2>
      <p>Traveling abroad for medical treatment carries risks beyond those of receiving care in your home country, including but not limited to differences in medical standards and regulation, language barriers, travel-related health risks, limited recourse in the event of a complication, and the need for follow-up care after you return home. You are solely responsible for evaluating these risks, for arranging appropriate travel and medical insurance, and for making your own informed decisions about any procedure and provider.</p>

      <h2 style={css(legalH2)}>6. Site content and advertising</h2>
      <p>We aim to keep information about providers, services, and pricing on the Site accurate and up to date, but this information is supplied in part by third-party providers and is subject to change without notice. We do not warrant the completeness or current accuracy of any provider information. Where required, advertising content relating to specific medical facilities is subject to prior regulatory approval in Thailand; the presence of content on the Site does not itself constitute a representation that all applicable approvals are in place at every point in time, and providers remain responsible for their own regulatory compliance.</p>

      <h2 style={css(legalH2)}>7. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul style={css(legalUl)}>
        <li>Use the Site for any unlawful purpose or in violation of these Terms.</li>
        <li>Submit false, misleading, or fraudulent information.</li>
        <li>Attempt to interfere with the security or proper functioning of the Site.</li>
        <li>Scrape, copy, or reuse Site content for commercial purposes without our written permission.</li>
      </ul>
      <p>We may suspend or terminate your access to the Site if we reasonably believe you've violated these Terms.</p>

      <h2 style={css(legalH2)}>8. Intellectual property</h2>
      <p>All content on the Site — including text, graphics, logos, and design — is owned by or licensed to Hospigo and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from Site content without our prior written consent, except for personal, non-commercial use.</p>

      <h2 style={css(legalH2)}>9. Third-party links and services</h2>
      <p>The Site may link to or reference third-party websites or services (including provider websites). We are not responsible for the content, privacy practices, or conduct of third parties, and linking to them does not imply endorsement.</p>

      <h2 style={css(legalH2)}>10. Disclaimers</h2>
      <p>To the fullest extent permitted by applicable law, the Site and its content are provided "as is" and "as available," without warranties of any kind, whether express or implied, including warranties of accuracy, merchantability, fitness for a particular purpose, or non-infringement. Hospigo does not warrant that the Site will be uninterrupted or error-free, or that any medical outcome will meet your expectations.</p>
      <p>Nothing in these Terms excludes or limits any warranty or right that cannot lawfully be excluded or limited under the law of your country of residence, including applicable consumer protection laws in the EU, Canada, and the United States.</p>

      <h2 style={css(legalH2)}>11. Limitation of liability</h2>
      <p>To the fullest extent permitted by applicable law, Hospigo, its officers, employees, and affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits or data, arising out of or related to your use of the Site, your interactions with any third-party provider, or any medical treatment or outcome — even if advised of the possibility of such damages. This limitation does not apply where prohibited by applicable law.</p>

      <h2 style={css(legalH2)}>12. Indemnification</h2>
      <p>You agree to indemnify and hold Hospigo harmless from any claims, losses, or damages arising from your misuse of the Site or your violation of these Terms, to the extent permitted by applicable law.</p>

      <h2 style={css(legalH2)}>13. Governing law and disputes</h2>
      <p>These Terms are governed by the laws of Singapore, without regard to conflict-of-law principles, and any dispute will be subject to the exclusive jurisdiction of the courts of Singapore, except where applicable mandatory consumer-protection law in your country of residence provides otherwise.</p>

      <h2 style={css(legalH2)}>14. General provisions</h2>
      <p><strong>Severability.</strong> If any provision of these Terms is found unenforceable, the remaining provisions remain in full force and effect.</p>
      <p><strong>Entire agreement.</strong> These Terms, together with the Privacy Policy, constitute the entire agreement between you and Hospigo regarding use of the Site, and supersede any prior understandings on that subject.</p>
      <p><strong>No waiver.</strong> Our failure to enforce any provision of these Terms is not a waiver of our right to enforce it later.</p>
      <p><strong>Assignment.</strong> You may not assign your rights under these Terms. We may assign ours in connection with a merger, acquisition, or sale of assets, subject to the same obligations.</p>
      <p><strong>Language.</strong> If these Terms are translated into other languages, the English version prevails in the event of any inconsistency.</p>

      <h2 style={css(legalH2)}>15. Changes to these Terms</h2>
      <p>We may update these Terms from time to time. Continued use of the Site after changes take effect constitutes acceptance of the revised Terms. We will update the "Last updated" date above when changes are made.</p>

      <h2 style={css(legalH2)}>16. Contact us</h2>
      <p>
        Intermedi Pte. Ltd. (trading as Hospigo)<br />
        160 Robinson Road, #14-04 Singapore Business Federation Center, Singapore 068914<br />
        Bart@hospigo.com
      </p>
    </LegalLayout>
  )
}
