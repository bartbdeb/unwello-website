import Hero from '../sections/Hero'
import {
  TrustBar, Treatments, HowItWorks, Clinics, Savings, WhyThailand,
  Stories, Coordinator, Vetting, Guides, FinalCTA,
} from '../sections/Sections'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Treatments />
      <HowItWorks />
      <Clinics />
      <Savings />
      <WhyThailand />
      <Stories />
      <Coordinator />
      <Vetting />
      <Guides />
      <FinalCTA />
    </>
  )
}
