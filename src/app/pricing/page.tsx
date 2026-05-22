import type { Metadata } from "next"
import Link from "next/link"
import { PHONE, SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Junk Removal Pricing in Miami & Broward County — Upfront, No Hidden Fees",
  description:
    "See junk removal pricing for Miami and Broward County. Volume-based pricing starting at $99. No hidden fees. Get a free quote before any work begins.",
  alternates: { canonical: `${SITE_URL}/pricing` },
}

const tiers = [
  {
    name: "Minimum Load",
    volume: "⅛ Truck",
    price: "$99–$149",
    desc: "A few boxes, 1–2 small items, or a single piece of furniture.",
    items: ["Single furniture piece", "Small pile of boxes", "1–2 appliances"],
  },
  {
    name: "Small Load",
    volume: "¼ Truck",
    price: "$149–$250",
    desc: "A small room's worth of items or a garage corner cleanout.",
    items: ["Bedroom set", "Garage corner", "Small office cleanout"],
  },
  {
    name: "Medium Load",
    volume: "½ Truck",
    price: "$250–$400",
    desc: "Half a truckload — ideal for a full room or moderate cleanout.",
    items: ["Full bedroom + living room", "Moderate garage cleanout", "Small estate"],
    popular: true,
  },
  {
    name: "Large Load",
    volume: "¾ Truck",
    price: "$400–$550",
    desc: "Most of a full truck — great for multi-room cleanouts.",
    items: ["Multiple rooms", "Large garage cleanout", "Full office cleanout"],
  },
  {
    name: "Full Truck",
    volume: "Full Truck",
    price: "$550–$700+",
    desc: "Maximum capacity — whole home, estate, or commercial cleanout.",
    items: ["Whole-home cleanout", "Estate cleanout", "Commercial cleanout"],
  },
]

const faqs = [
  {
    q: "How is pricing determined?",
    a: "We price by volume — how much space your items take up in our truck. You get a firm price before any work begins.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. The price you're quoted is the price you pay. We include all labor, truck fees, and disposal costs.",
  },
  {
    q: "Is there a minimum charge?",
    a: "Yes, our minimum is $99 for any haul, regardless of size.",
  },
  {
    q: "Do you charge for stairs or difficult access?",
    a: "We may add a small surcharge for items above the 3rd floor without elevator access or in very tight spaces. We'll always tell you upfront.",
  },
  {
    q: "Can I get an exact price before you arrive?",
    a: "We can give you a range over the phone or form. The final price is confirmed on-site before we start work.",
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-green-900 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Simple, <span className="text-green-400">Upfront Pricing</span>
          </h1>
          <p className="text-xl text-gray-300">
            Volume-based pricing. No hidden fees. You get a firm quote before we touch a thing.
          </p>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-6 flex flex-col ${
                  tier.popular
                    ? "border-green-500 shadow-lg shadow-green-100"
                    : "border-gray-100 shadow-sm"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">{tier.volume}</p>
                  <h2 className="text-xl font-bold text-gray-900">{tier.name}</h2>
                  <p className="text-3xl font-extrabold text-gray-900 mt-2">{tier.price}</p>
                </div>
                <p className="text-sm text-gray-500 mb-4">{tier.desc}</p>
                <ul className="space-y-1.5 mt-auto">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            Estate and commercial cleanouts may exceed full-truck pricing. All prices include labor, truck, and disposal.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-green-50 border-y border-green-100 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Exact Price</h2>
          <p className="text-gray-500 mb-6">Fill out the form or call us — we respond within 15 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="bg-gray-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors"
            >
              📞 {PHONE}
            </a>
            <Link
              href="/#quote"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Get Free Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Pricing FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-1">{faq.q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
