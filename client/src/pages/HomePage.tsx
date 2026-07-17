import Hero from '../sections/Hero'
import {
  TrustBar, Treatments, HowItWorks, Clinics, Savings, WhyThailand,
  Stories, Coordinator, Vetting, Guides, FinalCTA,
} from '../sections/Sections'
import Seo from '../components/Seo'
import JsonLd from '../components/JsonLd'
import { organizationJsonLd, websiteJsonLd } from '../seo'

export default function HomePage() {
  return (
    <>
      <Seo
        title="Medical Tourism in Thailand, Up to 70% Off | Hospigo"
        description="Get matched with vetted, JCI-accredited hospitals in Thailand. Free personal coordinator, transparent all-inclusive quotes, and up to 70% savings on dental, cosmetic, fertility and more."
        path="/"
      />
      <JsonLd id="organization" data={organizationJsonLd()} />
      <JsonLd id="website" data={websiteJsonLd()} />
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
