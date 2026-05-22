const badges = [
  { icon: "✅", label: "Licensed & Insured" },
  { icon: "⚡", label: "Same-Day Available" },
  { icon: "♻️", label: "80% Recycled" },
  { icon: "⭐", label: "500+ 5-Star Reviews" },
  { icon: "🔒", label: "Upfront Pricing" },
]

export default function TrustBar() {
  return (
    <div className="bg-green-700 text-white py-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
          {badges.map((b) => (
            <span key={b.label} className="flex items-center gap-1.5 text-sm font-medium whitespace-nowrap">
              <span>{b.icon}</span> {b.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
