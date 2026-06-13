/**
 * ServicePageTemplate
 * THE single template for every service landing page.
 * Edit this file → all service pages update automatically.
 */

import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import WhyUsSection from "@/components/WhyUsSection"
import HowItWorks from "@/components/HowItWorks"
import TestimonialsSection from "@/components/TestimonialsSection"
import FaqSection from "@/components/FaqSection"
import TrustBar from "@/components/TrustBar"
import { serviceIllustrationMap } from "@/components/illustrations/ServiceIllustrations"
import { Service } from "@/data/services"
import { cities } from "@/data/cities"
import { PHONE } from "@/lib/constants"

interface ServicePageTemplateProps {
  service: Service
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const Illustration = serviceIllustrationMap[service.slug]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-green-900 text-white">
        <TrustBar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {Illustration ? (
                <div className="mb-5 flex items-center gap-4">
                  <Illustration width={80} height={80} className="rounded-xl" />
                  <span className="text-5xl">{service.icon}</span>
                </div>
              ) : (
                <div className="text-5xl mb-5">{service.icon}</div>
              )}
              <div className="inline-flex items-center gap-2 bg-green-700/40 text-green-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                ⚡ Same-Day Pickups Available
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
                {service.headline}
              </h1>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {service.longDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${PHONE.replace(/\D/g, "")}`}
                  className="flex items-center justify-center gap-2 bg-white text-green-800 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  📞 {PHONE}
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
              <LeadForm defaultService={service.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* What We Take */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What We Remove
              </h2>
              <p className="text-gray-500 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                Don&apos;t see your item? Call us — we take almost everything.
              </p>
            </div>

            {/* Pricing info */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How Pricing Works</h3>
              <div className="space-y-4">
                {[
                  { label: "Small Load (¼ truck)", price: "From $99", desc: "A few boxes, one small item" },
                  { label: "Medium Load (½ truck)", price: "From $199", desc: "Several items or one large piece" },
                  { label: "Full Truck", price: "From $399", desc: "Garage, estate, or major cleanout" },
                ].map((tier) => (
                  <div key={tier.label} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{tier.label}</p>
                      <p className="text-xs text-gray-400">{tier.desc}</p>
                    </div>
                    <span className="text-green-700 font-bold">{tier.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">
                Prices are estimates. Final price confirmed before any work starts.
              </p>
              <a
                href="#quote"
                className="mt-5 w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors text-sm"
              >
                Get My Exact Price →
              </a>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <WhyUsSection />
      <TestimonialsSection />

      <FaqSection
        faqs={service.faqs}
        title={`${service.name} — Common Questions`}
      />

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {service.name} Near You
          </h2>
          <p className="text-gray-500 mb-8">
            We offer {service.name.toLowerCase()} throughout South Florida.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="bg-gray-50 border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-600 hover:border-green-300 hover:text-green-700 hover:bg-green-50 transition-colors"
              >
                {service.shortName} in {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Schedule {service.name}?
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Get a free quote in minutes. Same-day pickups available.
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
