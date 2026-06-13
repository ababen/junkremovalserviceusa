const testimonials = [
  {
    name: "Maria G.",
    location: "Miami, FL",
    stars: 5,
    text: "Called at 9am and they were there by noon. Cleared out my entire garage in under 2 hours. Very professional and left everything spotless.",
  },
  {
    name: "James T.",
    location: "Fort Lauderdale, FL",
    stars: 5,
    text: "Best junk removal experience I've had. The price they quoted was exactly what I paid — no surprises. Will definitely use again.",
  },
  {
    name: "Sandra R.",
    location: "Coral Gables, FL",
    stars: 5,
    text: "They handled an estate cleanout for my mother's house after she passed. Incredibly respectful and efficient. Made a hard day much easier.",
  },
  {
    name: "David L.",
    location: "Brickell, FL",
    stars: 5,
    text: "Used them for a condo renovation cleanout. They removed all the construction debris same day. The crew was fast and careful with the building's floors.",
  },
  {
    name: "Ashley P.",
    location: "Hollywood, FL",
    stars: 5,
    text: "Removed three old mattresses and a broken washer. Quick, affordable, and they even swept up afterward. Highly recommend!",
  },
  {
    name: "Carlos M.",
    location: "Pembroke Pines, FL",
    stars: 5,
    text: "Great service for our office cleanout. They worked around our schedule and had everything hauled away in one trip. Very efficient team.",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <span className="text-amber-400 text-sm">
      {"★".repeat(count)}
    </span>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">What Our Customers Say</h2>
          <p className="text-gray-500 text-lg">500+ five-star reviews across Miami and Broward County</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <Stars count={t.stars} />
              <p className="text-gray-700 text-sm mt-3 mb-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
