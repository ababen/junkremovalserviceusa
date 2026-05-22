const reasons = [
  {
    icon: "📞",
    title: "15-Minute Response",
    description: "Submit a quote request and a local specialist calls you back within 15 minutes — no waiting around.",
  },
  {
    icon: "💰",
    title: "Upfront, Flat-Rate Pricing",
    description: "No hidden fees, no surprises. You get a firm price before any work begins.",
  },
  {
    icon: "⚡",
    title: "Same-Day Pickups",
    description: "Need it gone today? We offer same-day junk removal throughout South Florida.",
  },
  {
    icon: "♻️",
    title: "Eco-Friendly Disposal",
    description: "We recycle, donate, or responsibly dispose of up to 80% of what we haul, keeping it out of landfills.",
  },
  {
    icon: "🔒",
    title: "Licensed & Insured",
    description: "Every crew member is background-checked. We carry full liability insurance for your peace of mind.",
  },
  {
    icon: "⭐",
    title: "500+ 5-Star Reviews",
    description: "Our reputation is built on thousands of happy customers across Miami and Broward County.",
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose Us?</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We make junk removal fast, fair, and stress-free.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{r.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
