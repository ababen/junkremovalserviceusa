"use client"

import Link from "next/link"
import { useState } from "react"
import { services } from "@/data/services"
import { PHONE } from "@/lib/constants"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-green-700">
            <span className="text-2xl">♻️</span>
            <span className="hidden sm:block">JunkRemovalServiceUSA</span>
            <span className="sm:hidden">JRSUSA</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-green-700 transition-colors">
                Services <span className="text-xs">▾</span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-green-50 hover:text-green-700 transition-colors text-sm"
                  >
                    <span>{s.icon}</span> {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/pricing" className="hover:text-green-700 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-green-700 transition-colors">
              About
            </Link>
          </nav>

          {/* CTA + phone */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="hidden sm:flex items-center gap-1.5 text-green-700 font-semibold text-sm hover:text-green-800 transition-colors"
            >
              <span>📞</span> {PHONE}
            </a>
            <Link
              href="/#quote"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              Free Quote
            </Link>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded text-gray-600 hover:text-gray-900"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Services</p>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700"
              onClick={() => setMenuOpen(false)}
            >
              <span>{s.icon}</span> {s.name}
            </Link>
          ))}
          <hr className="border-gray-100" />
          <Link href="/pricing" className="block text-sm text-gray-700 hover:text-green-700" onClick={() => setMenuOpen(false)}>
            Pricing
          </Link>
          <Link href="/about" className="block text-sm text-gray-700 hover:text-green-700" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="block text-sm font-semibold text-green-700">
            📞 {PHONE}
          </a>
        </div>
      )}
    </header>
  )
}
