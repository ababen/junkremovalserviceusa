import Link from "next/link"
import { services } from "@/data/services"
import { cities } from "@/data/cities"
import { PHONE } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-white font-bold text-lg flex items-center gap-2 mb-3">
              <span>♻️</span> JunkRemovalServiceUSA
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Fast, affordable junk removal across South Florida. Licensed, insured, and eco-friendly.
            </p>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="text-green-400 font-semibold text-sm hover:text-green-300 transition-colors"
            >
              📞 {PHONE}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-3">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-3">Service Areas</h3>
            <ul className="space-y-2">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${c.slug}`}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {c.name}, {c.stateCode}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-3">Company</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/pricing", label: "Pricing" },
                { href: "/#quote", label: "Get a Free Quote" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-1 text-xs text-gray-500">
              <p>✅ Licensed & Insured</p>
              <p>♻️ Up to 80% Recycled</p>
              <p>⚡ Same-Day Available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} JunkRemovalServiceUSA. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
