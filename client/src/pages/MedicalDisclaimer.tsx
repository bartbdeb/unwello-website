import { Link } from 'react-router-dom'
import { css } from '../ui'
import LegalLayout, { legalH2 } from '../components/LegalLayout'

export default function MedicalDisclaimer() {
  return (
    <LegalLayout title="Medical Disclaimer" lastUpdated="16 July 2026">
      <p>This disclaimer applies to hospigo.com and all related services (the "Site"), operated by Intermedi Pte. Ltd., trading as Hospigo ("Hospigo," "we," "us," "our").</p>

      <h2 style={css(legalH2)}>Hospigo does not provide medical advice</h2>
      <p>Hospigo is a facilitation service. We help you discover, compare, and get in touch with independent hospitals, clinics, and medical providers, primarily in Thailand. That is the full extent of our role.</p>
      <p>We are not a hospital, clinic, medical practice, or healthcare provider. Nobody at Hospigo will diagnose a condition, recommend a treatment, or give you medical advice — and nothing on this Site should be read as doing so. All content on the Site, including descriptions of procedures, treatments, hospitals, doctors, recovery times, and prices, is provided for <strong>general informational purposes only</strong>.</p>

      <h2 style={css(legalH2)}>No doctor–patient relationship</h2>
      <p>Using the Site, submitting an inquiry, or communicating with Hospigo does not create a doctor–patient relationship between you and Hospigo or anyone who works for us. A doctor–patient relationship can only be formed directly between you and a licensed medical provider you choose to engage.</p>

      <h2 style={css(legalH2)}>Always consult a qualified medical professional</h2>
      <p>Decisions about whether a procedure is right for you — including its risks, benefits, alternatives, and your fitness to travel and undergo treatment — must be made in consultation with a qualified, licensed physician who has examined you and knows your medical history. Never disregard, or delay seeking, professional medical advice because of something you read on this Site.</p>

      <h2 style={css(legalH2)}>Medical emergencies</h2>
      <p><strong>The Site is not for medical emergencies.</strong> If you think you are experiencing a medical emergency, call your local emergency services immediately. Do not submit an inquiry or wait for a response from Hospigo or any provider.</p>

      <h2 style={css(legalH2)}>Independent providers, no guaranteed outcomes</h2>
      <p>Every hospital, clinic, and doctor referenced on or reachable through the Site is an independent third party. Hospigo does not employ them, supervise their work, or control their clinical decisions, and we receive no medical training or licensing ourselves.</p>
      <p>Medicine is not an exact science. No provider can guarantee the outcome of any procedure, and neither can we. Any information on the Site about success rates, recovery times, or results reflects general information or providers' own representations — it is not a promise about your individual outcome.</p>

      <h2 style={css(legalH2)}>Information accuracy</h2>
      <p>We work to keep information about providers, treatments, and pricing current, but much of it is supplied by third-party providers and can change without notice. Always confirm details — including credentials, pricing, and what a quoted price does and does not include — directly with the provider before making any decision or payment.</p>

      <h2 style={css(legalH2)}>Your responsibility</h2>
      <p>Choosing to travel abroad for medical treatment is a significant personal decision that carries additional risks compared to treatment at home, including differences in medical regulation, aftercare logistics, and legal recourse. You are responsible for evaluating those risks, arranging appropriate travel and medical insurance, and making your own informed choices. Our <Link to="/terms" style={css('color:#2B50E4; font-weight:600;')}>Terms of Service</Link> contain further details, including limitations of our liability.</p>

      <h2 style={css(legalH2)}>Questions</h2>
      <p>
        Intermedi Pte. Ltd. (trading as Hospigo)<br />
        160 Robinson Road, #14-04 Singapore Business Federation Center, Singapore 068914<br />
        Bart@hospigo.com
      </p>
    </LegalLayout>
  )
}
