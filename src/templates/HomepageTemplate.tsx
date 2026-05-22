/**
 * HomepageTemplate
 * THE template for the homepage.
 * Edit this file → the homepage updates.
 */

import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import WhyUsSection from "@/components/WhyUsSection"
import HowItWorks from "@/components/HowItWorks"
import TestimonialsSection from "@/components/TestimonialsSection"
import ServiceCard from "@/components/ServiceCard"
import TrustBar from "@/components/TrustBar"
import { services } from "@/data/services"
import { cities } from "@/data/cities"
import { PHONE } from "@/lib/constants"

const homepageFaqs = [
  {
    q: "What areas do you serve?",
    a: "We currently serve Miami, Fort Lauderdale, Hollywood, Pembroke Pines, Miramar, and Pompano Beach — with more cities coming soon.",
  },
  {
    q: "How is junk removal priced?",
    a: "We price by volume — how much space your items take up in our truck. You get a firm price before any work begins, with no hidden fees.",
  },
  {
    q: "Do you offer same-day service?",
    a: "Yes. We offer same-day junk removal throughout South Florida, subject to availability. Call us or fill out the form to check availability.",
  },
  {
    q: "What items can't you take?",
    a: "We take almost everything. The only items we cannot haul are biohazardous materials, asbestos, and certain chemicals. Call us if you're unsure.",
  },
  {
    q: "Is there a minimum load size?",
    a: "Our minimum load is a ¼ truckload, starting at $99. That covers a few boxes, a single piece of furniture, or a small pile of junk.",
  },
]

export default function HomepageTemplate() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-green-900 text-white">
        <TrustBar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-700/40 text-green-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                ⚡ Same-Day Available · South Florida
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
                Junk Removal{" "}
                <span className="text-green-400">Done Right.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Fast, affordable junk removal across Miami and Broward County. Licensed, insured, and eco-friendly. We haul it all so you don't have to.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${PHONE.replace(/\D/g, "")}`}
                  className="flex items-center justify-center gap-2 bg-white text-green-800 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg"
                >
                  📞 {PHONE}
                </a>
                <a
                  href="#quote"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-lg transition-colors text-lg"
                >
                  Get Free Quote →
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-400">
                <span>✅ No Hidden Fees</span>
                <span>⭐ 500+ 5-Star Reviews</span>
                <span>♻️ Eco-Friendly</span>
              </div>
            </div>
            {/* Lead form */}
            <div id="quote">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What We Remove</h2>
            <p className="text-gray-500 text-lg">
              From single items to full property cleanouts — we handle everything.
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

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Service Areas</h2>
            <p className="text-gray-500 text-lg">
              Serving Miami-Dade and Broward County with fast, reliable junk removal.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="group bg-gray-50 hover:bg-green-50 border border-gray-100 hover:border-green-200 rounded-xl p-6 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                    {city.name}, {city.stateCode}
                  </h3>
                  <span className="text-gray-400 group-hover:text-green-500 transition-colors">→</span>
                </div>
                <p className="text-sm text-gray-500">{city.county}</p>
                <p className="text-xs text-gray-400 mt-1">{city.neighborhoods.length} neighborhoods served</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {homepageFaqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Rid of the Junk Today</h2>
          <p className="text-green-100 mb-8 text-lg">
            Free quotes. Same-day pickups. Upfront pricing. No surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="bg-white text-green-800 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors text-lg"
            >
              📞 {PHONE}
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
    </>
  )
}
