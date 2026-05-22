"use client"

import { useState, useTransition } from "react"
import { services } from "@/data/services"

interface LeadFormProps {
  defaultCity?: string
  defaultService?: string
  compact?: boolean
}

export default function LeadForm({ defaultCity = "", defaultService = "", compact = false }: LeadFormProps) {
  const [isPending, startTransition] = useTransition()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    startTransition(async () => {
      try {
        const res = await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
        if (!res.ok) throw new Error("Submission failed")
        setSubmitted(true)
      } catch {
        setError("Something went wrong. Please call us directly.")
      }
    })
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-1">We received your request!</h3>
        <p className="text-green-700 text-sm">A local specialist will call you within 15 minutes.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-xl shadow-lg border border-gray-100 ${compact ? "p-5" : "p-6 sm:p-8"} space-y-4`}
    >
      {!compact && (
        <div className="text-center mb-2">
          <h2 className="text-2xl font-bold text-gray-900">Get a Free Quote</h2>
          <p className="text-gray-500 text-sm mt-1">We respond within 15 minutes</p>
        </div>
      )}

      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Smith"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(305) 555-0100"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            City / Zip Code *
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            defaultValue={defaultCity}
            placeholder="Miami, FL"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            defaultValue={defaultService}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="other">Other / Not Sure</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Describe What Needs to Go
        </label>
        <textarea
          id="description"
          name="description"
          rows={compact ? 2 : 3}
          placeholder="e.g. Old sofa, 2 mattresses, boxes of junk in the garage..."
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
        />
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-3 rounded-lg transition-colors text-sm"
      >
        {isPending ? "Sending..." : "Get My Free Quote →"}
      </button>

      <p className="text-center text-xs text-gray-400">
        No spam. No obligation. We call you within 15 minutes.
      </p>
    </form>
  )
}
