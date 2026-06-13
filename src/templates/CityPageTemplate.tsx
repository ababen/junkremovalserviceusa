/**
 * CityPageTemplate
 * THE single template for every city landing page.
 * Edit this file → all city pages update automatically.
 */

import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import WhyUsSection from "@/components/WhyUsSection"
import HowItWorks from "@/components/HowItWorks"
import TestimonialsSection from "@/components/TestimonialsSection"
import FaqSection from "@/components/FaqSection"
import ServiceCard from "@/components/ServiceCard"
import TrustBar from "@/components/TrustBar"
import { CityIllustration } from "@/components/illustrations/ServiceIllustrations"
import { City, cities } from "@/data/cities"
import { services } from "@/data/services"

const cityFaqs = (city: City) => [
  {
    q: `How quickly can you do junk removal in ${city.name}?`,
    a: `We offer same-day and next-day junk removal throughout ${city.name} and ${city.county}. Call us or fill out the form and we'll confirm a time window within minutes.`,
  },
  {
    q: `How much does junk removal cost in ${city.name}?`,
    a: `Pricing is based on volume — how much space your junk takes up in our truck. Most residential pickups in ${city.name} range from $99 to $499. We give you a firm price before any work begins.`,
  },
  {
    q: `Do you serve all neighborhoods in ${city.name}?`,
    a: `Yes. We serve all of ${city.name} and surrounding ${city.county} communities, including ${city.neighborhoods
      .slice(0, 4)
      .map((n) => n.name)
      .join(", ")}, and more.`,
  },
  {
    q: `What items do you take in ${city.name}?`,
    a: `Almost everything — furniture, appliances, mattresses, yard waste, construction debris, electronics, and more. Call us if you have a special item and we'll let you know.`,
  },
  {
    q: `Are you licensed and insured in ${city.stateCode}?`,
    a: `Yes. We are fully licensed and insured to operate in ${city.name} and throughout ${city.state}. Every crew member is background-checked.`,
  },
]

interface CityPageTemplateProps {
  city: City
}

export default function CityPageTemplate({ city }: CityPageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-green-900 text-white">
        <TrustBar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-5">
                <CityIllustration width={320} height={160} className="rounded-xl opacity-80" />
              </div>
              <div className="inline-flex items-center gap-2 bg-green-700/40 text-green-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                ⚡ Same-Day Available in {city.name}
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
                Junk Removal in{" "}
                <span className="text-green-400">{city.name}, {city.stateCode}</span>
              </h1>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {city.description} Licensed, insured, and eco-friendly. We haul furniture, appliances, yard waste, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${city.phone.replace(/\\D/g, "")}`}
                  className="flex items-center justify-center gap-2 bg-white text-green-800 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  📞 {city.phone}
                </a>
                <a
                  href="#quote"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  Get Free Quote →
                </a>
              </div>
            </div>
            {/* Lead form */}
            <div id="quote">
              <LeadForm defaultCity={`${city.name}, ${city.stateCode}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our Services in {city.name}
            </h2>
            <p className="text-gray-500 text-lg">
              From single items to full cleanouts — we handle it all.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <WhyUsSection />

      {/* Neighborhoods */}
      {city.neighborhoods.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Neighborhoods We Serve in {city.name}
              </h2>
              <p className="text-gray-500">
                We cover all of {city.name} and the surrounding {city.county} area.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {city.neighborhoods.map((n) => (
                <div
                  key={n.slug}
                  className="bg-gray-50 rounded-lg px-4 py-3 text-sm text-gray-700 font-medium border border-gray-100 hover:border-green-200 hover:text-green-700 transition-colors cursor-default"
                >
                  📍 {n.name}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <TestimonialsSection />

      <FaqSection faqs={cityFaqs(city)} title={`Junk Removal in ${city.name} — FAQs`} />

      {/* Bottom CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Clear the Clutter?</h2>
          <p className="text-green-100 mb-8 text-lg">
            Get a free, no-obligation quote for junk removal in {city.name} today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${city.phone.replace(/\\D/g, "")}`}
              className="bg-white text-green-800 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors text-lg"
            >
              📞 {city.phone}
            </a>
            <a
              href="#quote"
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              Get Free Quote →
            </a>
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-4 font-medium">Also serving:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {cities
              .filter((c) => c.slug !== city.slug)
              .slice(0, 12)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-600 hover:border-green-300 hover:text-green-700 transition-colors"
                >
                  {c.name}, {c.stateCode}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
