import type { Metadata } from "next"
import Link from "next/link"
import { PHONE, SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "About Us — Same-Day Junk Removal in Miami & Broward",
  description:
    "Junk Removal Service USA connects South Florida homeowners and businesses with licensed, insured junk removal crews. Same-day service, upfront pricing, eco-friendly disposal.",
  alternates: { canonical: `${SITE_URL}/about` },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-green-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Junk Removal <span className="text-green-400">You Can Trust</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We connect South Florida homeowners and businesses with licensed, insured junk removal
            crews — with same-day availability and upfront pricing. No surprises.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              Junk Removal Service USA is a South Florida–based lead generation platform dedicated
              to making junk removal simple, transparent, and affordable. We partner with vetted,
              licensed junk removal operators across Miami-Dade and Broward County so you get fast
              local service without the hassle of searching.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We believe getting rid of junk should be stress-free. Our mission is to give every
              South Florida homeowner, renter, and business access to reliable same-day junk removal
              at a fair price — with a commitment to recycling and donating up to 80% of what we haul.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Choose Us</h2>
            <ul className="space-y-3">
              {[
                { icon: "✅", label: "Licensed & Insured", detail: "All partner operators are fully licensed and carry liability insurance." },
                { icon: "⚡", label: "Same-Day Available", detail: "We often have crews available within hours of your call." },
                { icon: "♻️", label: "Eco-Friendly Disposal", detail: "Up to 80% of hauls are recycled, donated, or repurposed." },
                { icon: "💰", label: "Upfront Pricing", detail: "You get a firm quote before any work starts — no surprise charges." },
                { icon: "⭐", label: "500+ 5-Star Reviews", detail: "Our crews are trusted by thousands of South Florida families." },
              ].map(({ icon, label, detail }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">{icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{label}</p>
                    <p className="text-sm text-gray-500">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Service Area</h2>
            <p className="text-gray-600 leading-relaxed">
              We currently serve Miami, Fort Lauderdale, Hollywood, Pembroke Pines, Miramar, and
              Pompano Beach — with more cities coming soon across South Florida.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-green-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-green-100 mb-6">Get a free, no-obligation quote in minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="bg-white text-green-800 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
            >
              📞 {PHONE}
            </a>
            <Link
              href="/#quote"
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Get Free Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
