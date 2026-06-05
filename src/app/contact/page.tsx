import type { Metadata } from "next"
import BookingWizard from "@/components/BookingWizard"
import { SITE_NAME, SITE_URL, PHONE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${SITE_NAME} to schedule junk removal in Miami and Broward County. Call us or fill out the form — we respond within 15 minutes.`,
  alternates: { canonical: `${SITE_URL}/contact` },
}

const hours = [
  { day: "Monday – Friday", time: "7:00 AM – 8:00 PM" },
  { day: "Saturday",        time: "7:00 AM – 8:00 PM" },
  { day: "Sunday",          time: "8:00 AM – 6:00 PM" },
]

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gray-900 py-14 px-4 text-center">
        <h1 className="text-4xl font-black text-white mb-3">Contact Us</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Get a free estimate in minutes. A local specialist will call you back within 15 minutes to confirm your pickup.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left — contact info */}
        <div className="space-y-8">

          {/* Phone */}
          <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Call or Text Us</h2>
            <p className="text-gray-500 text-sm mb-4">Available 7 days a week</p>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="flex items-center gap-3 text-green-700 hover:text-green-800 font-bold text-2xl transition-colors"
            >
              📞 {PHONE}
            </a>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Business Hours</h2>
            <div className="space-y-3">
              {hours.map(({ day, time }) => (
                <div key={day} className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 font-medium">{day}</span>
                  <span className="text-gray-900 font-semibold">{time}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 bg-green-50 border border-green-100 rounded-xl px-4 py-3">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
              <p className="text-green-800 text-xs font-semibold">Same-day pickups available — call early to secure your slot</p>
            </div>
          </div>

          {/* Service area */}
          <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Service Area</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              We serve Miami-Dade and Broward County, including Miami, Fort Lauderdale, Hollywood,
              Pembroke Pines, Miramar, and Pompano Beach — with more cities coming soon.
            </p>
          </div>
        </div>

        {/* Right — booking form */}
        <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">Get Your Free Quote</h2>
              <p className="text-gray-500 text-xs mt-0.5">No credit card. No obligation — ever.</p>
            </div>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">2 min</span>
          </div>
          <BookingWizard />
        </div>
      </div>
    </div>
  )
}
