/**
 * HomepageTemplate
 * THE template for the homepage.
 * Edit this file → the homepage updates.
 */

import Link from "next/link"
import Image from "next/image"
import BookingWizard from "@/components/BookingWizard"
import WhyUsSection from "@/components/WhyUsSection"
import HowItWorks from "@/components/HowItWorks"
import TestimonialsSection from "@/components/TestimonialsSection"
import ServiceCard from "@/components/ServiceCard"
import TrustBar from "@/components/TrustBar"
import { services } from "@/data/services"
import { cities } from "@/data/cities"
import { PHONE } from "@/lib/constants"

const trustPills = ["No credit card", "No hidden fees", "No obligation — ever", "Same-day available"]
const heroStats = [
  { num: "500+", label: "5-Star Reviews" },
  { num: "Same Day", label: "Available" },
  { num: "$99", label: "Starts From" },
]

const totalCities = cities.length
const cityListForFaq = cities.map((c) => c.name).join(", ")

const homepageFaqs = [
  {
    q: "What areas do you serve?",
    a: `We currently serve ${totalCities} cities across Miami-Dade, Broward, and Palm Beach County — including ${cityListForFaq} — with more cities coming soon.`,
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
      {/* ── Trust bar (both layouts) ────────────────────────────────────────────────────── */}
      <TrustBar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}

      {/* DESKTOP: Split Screen — photo left | form right */}
      <section className="hidden lg:grid lg:grid-cols-2 min-h-[640px]">

        {/* Left — photo + overlay + content */}
        <div className="relative flex flex-col justify-center px-14 xl:px-20 py-16 overflow-hidden">

          <Image src="/images/hero.jpeg" alt="Junk removal crew loading a truck in Miami" fill className="object-cover" priority />
          {/* Dark overlay sits on top of real photo */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Content */}
          <div className="relative z-10 max-w-lg">
            <div className="flex items-center gap-2 text-green-400 text-xs font-bold tracking-widest uppercase mb-5">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400" />
              Same-Day · Miami &amp; Broward County
            </div>

            <h1 className="text-5xl xl:text-[4rem] font-black text-white leading-none tracking-tight mb-5">
              Just Point.<br />
              <span className="text-green-400">We Haul It All.</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-7">
              Free on-site estimate. Firm price before we touch a thing. No credit card, no deposit, no obligation — ever. South Florida&rsquo;s most trusted junk crew.
            </p>

            {/* Star rating */}
            <div className="flex items-center gap-3 mb-7">
              <span className="text-yellow-400 text-xl tracking-wide">★★★★★</span>
              <span className="text-white font-bold text-sm">4.9</span>
              <span className="text-gray-400 text-sm">· 500+ South Florida reviews</span>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2">
              {trustPills.map((pill) => (
                <span
                  key={pill}
                  className="flex items-center gap-1.5 bg-white/[0.07] border border-white/[0.12] rounded-full px-3 py-1.5 text-gray-300 text-xs font-semibold"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — white booking panel */}
        <div className="bg-white flex flex-col justify-center px-10 xl:px-14 py-10 overflow-y-auto" id="quote">

          {/* Panel header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">Book Your Free Estimate</h2>
              <p className="text-gray-500 text-xs mt-0.5">No credit card. No obligation — ever.</p>
            </div>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">2 min</span>
          </div>

          {/* Social proof */}
          <div className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-xl p-3 mb-5">
            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">M</div>
            <div>
              <p className="text-xs text-green-800 leading-relaxed">&ldquo;Showed up in 2 hours and cleared our whole garage. Price was exactly what they quoted.&rdquo;</p>
              <p className="text-[10px] text-green-700 font-bold mt-1">★★★★★ Maria R. — Miami, FL</p>
            </div>
          </div>

          <BookingWizard />

          <p className="text-center text-xs text-gray-400 mt-4">
            Prefer to call?{" "}
            <a href={`tel:${PHONE.replace(/\\D/g, "")}`} className="text-green-600 font-semibold hover:underline">
              {PHONE}
            </a>
          </p>
        </div>
      </section>

      {/* MOBILE: Image in Card */}
      <section className="lg:hidden">

        {/* Dark header with headline */}
        <div className="bg-gradient-to-br from-gray-900 to-green-950 px-5 pt-7 pb-10">
          <div className="flex items-center gap-2 text-green-400 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400" />
            Same-Day · Miami &amp; Broward
          </div>
          <h1 className="text-4xl font-black text-white leading-none tracking-tight mb-4">
            Just Point.<br />
            <span className="text-green-400">We Haul It All.</span>
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-base tracking-wide">★★★★★</span>
            <span className="text-gray-300 text-sm font-semibold">4.9 · 500+ reviews</span>
          </div>
        </div>

        {/* Card pulled up over the dark section */}
        <div className="bg-gray-50 px-4 pt-0 pb-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl -mt-5" id="quote">

            {/* Photo header with stat overlays */}
            <div className="relative h-36 overflow-hidden">
              <Image src="/images/hero2.png" alt="Junk removal crew loading a truck in Miami" fill className="object-cover" priority />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />
              {/* Stats */}
              <div className="absolute inset-0 flex items-center justify-around px-4">
                {heroStats.map((stat, i) => (
                  <div key={stat.num} className="flex items-center gap-4">
                    {i > 0 && <div className="w-px h-9 bg-white/25" />}
                    <div className="text-center text-white">
                      <div className="text-lg font-black leading-none">{stat.num}</div>
                      <div className="text-[10px] font-semibold opacity-75 uppercase tracking-wide mt-0.5">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wizard area */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h2 className="text-base font-extrabold text-gray-900">Book Your Free Estimate</h2>
                  <p className="text-gray-500 text-[10px] mt-0.5">No credit card. No obligation.</p>
                </div>
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">2 min</span>
              </div>

              {/* Mini social proof */}
              <div className="flex items-start gap-2 bg-green-50 border border-green-100 rounded-xl p-2.5 mb-4">
                <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-[10px] flex-shrink-0">M</div>
                <div>
                  <p className="text-[10px] text-green-800 leading-relaxed">&ldquo;Showed up in 2 hours. Price was exactly as quoted.&rdquo;</p>
                  <p className="text-[9px] text-green-700 font-bold mt-0.5">★★★★★ Maria R. — Miami, FL</p>
                </div>
              </div>

              <BookingWizard />

              <a
                href={`tel:${PHONE.replace(/\\D/g, "")}`}
                className="flex items-center justify-center gap-2 mt-4 text-sm font-semibold text-green-700 hover:text-green-800"
              >
                📞 {PHONE}
              </a>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Reclaim Your Space?</h2>
          <p className="text-green-100 mb-8 text-lg">
            Free on-site estimate. Firm price before we start. No credit card, no deposit, no obligation — ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE.replace(/\\D/g, "")}`}
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
