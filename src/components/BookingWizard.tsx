"use client"

import { useState, useTransition } from "react"
import dynamic from "next/dynamic"
import { services } from "@/data/services"
import { PHONE } from "@/lib/constants"

const PlacesAutocomplete = dynamic(() => import("@/components/PlacesAutocomplete"), { ssr: false })

type Step = 1 | 2 | 3

interface WizardState {
  service: string
  city: string
  date: string
  time: string
  name: string
  phone: string
  notes: string
}

const dateChoices = [
  { value: "today",     label: "Today",     sub: "Same-Day"  },
  { value: "tomorrow",  label: "Tomorrow",  sub: "Next-Day"  },
  { value: "this-week", label: "This Week", sub: "3–5 Days"  },
  { value: "flexible",  label: "Flexible",  sub: "Call Me"   },
]

const timeChoices = [
  { value: "morning",   label: "Morning",   sub: "7am – 12pm"    },
  { value: "afternoon", label: "Afternoon", sub: "12pm – 5pm"    },
  { value: "evening",   label: "Evening",   sub: "5pm – 8pm"     },
  { value: "anytime",   label: "Anytime",   sub: "I'm flexible"  },
]

const Checkmark = () => (
  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

export default function BookingWizard() {
  const [step, setStep] = useState<Step>(1)
  const [done, setDone] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState<WizardState>({
    service: "", city: "", date: "", time: "", name: "", phone: "", notes: "",
  })

  function update(key: keyof WizardState, value: string) {
    setState(prev => ({ ...prev, [key]: value }))
  }

  const canNext1 = state.service !== "" && state.city.trim() !== ""
  const canNext2 = state.date !== "" && state.time !== ""
  const canSubmit = state.name.trim() !== "" && state.phone.trim() !== ""

  function handleSubmit() {
    setSubmitError("")
    const svc = services.find(s => s.slug === state.service)
    startTransition(async () => {
      try {
        const res = await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: state.name,
            phone: state.phone,
            city: state.city,
            service: state.service,
            description: [
              svc && `Service: ${svc.name}`,
              `Date: ${state.date}`,
              `Time: ${state.time}`,
              state.notes && `Notes: ${state.notes}`,
            ].filter(Boolean).join(" | "),
          }),
        })
        if (!res.ok) throw new Error()
        setDone(true)
      } catch {
        setSubmitError("Something went wrong. Please call us directly.")
      }
    })
  }

  if (done) {
    const svc = services.find(s => s.slug === state.service)
    return (
      <div className="text-center py-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <Checkmark />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">You&rsquo;re on the list!</h3>
        <p className="text-gray-500 text-sm mb-5">
          A local specialist will call you within 15 minutes to confirm your pickup.
        </p>
        <div className="bg-green-50 border border-green-100 rounded-xl p-3 text-sm text-left">
          <p className="text-green-800 font-semibold">{svc?.name ?? "Junk Removal"} · {state.city}</p>
          <p className="text-green-700 text-xs mt-0.5 capitalize">{state.date} · {state.time}</p>
        </div>
        <p className="text-xs text-gray-400 mt-5">
          Need us now?{" "}
          <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-green-600 font-semibold hover:underline">
            {PHONE}
          </a>
        </p>
      </div>
    )
  }

  const stepLabels: Record<Step, string> = { 1: "What & Where", 2: "When", 3: "Your Info" }

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-semibold text-gray-500">Step {step} of 3</span>
          <span className="text-xs text-gray-400">{stepLabels[step]}</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* ── Step 1: Service + Location ───────────────────────── */}
      {step === 1 && (
        <div>
          <h2 className="text-lg font-extrabold text-gray-900 mb-0.5">What can we haul for you?</h2>
          <p className="text-gray-500 text-xs mb-4">Select a service and your location.</p>

          <div className="grid grid-cols-4 gap-2 mb-4">
            {services.map(svc => (
              <button
                key={svc.slug}
                type="button"
                onClick={() => update("service", svc.slug)}
                className={[
                  "flex flex-col items-center gap-1 rounded-xl border-2 p-2 text-center transition-all cursor-pointer",
                  state.service === svc.slug
                    ? "border-green-500 bg-green-50"
                    : "border-gray-100 bg-gray-50 hover:border-green-200",
                ].join(" ")}
              >
                <span className="text-xl leading-none">{svc.icon}</span>
                <span className={[
                  "text-[10px] font-semibold leading-tight",
                  state.service === svc.slug ? "text-green-800" : "text-gray-600",
                ].join(" ")}>
                  {svc.shortName}
                </span>
              </button>
            ))}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
            <PlacesAutocomplete
              value={state.city}
              onChange={v => update("city", v)}
              placeholder="Miami, FL"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <button
            onClick={() => setStep(2)}
            disabled={!canNext1}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Next →
          </button>
          <p className="text-center text-xs text-gray-400 mt-3">No credit card. No obligation — ever.</p>
        </div>
      )}

      {/* ── Step 2: Schedule ─────────────────────────────────── */}
      {step === 2 && (
        <div>
          <h2 className="text-lg font-extrabold text-gray-900 mb-0.5">When should we come?</h2>
          <p className="text-gray-500 text-xs mb-4">Pick your preferred pickup window.</p>

          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Pickup Day</p>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {dateChoices.map(opt => (
              <button
                key={opt.value}
                type="button"
                onClick={() => update("date", opt.value)}
                className={[
                  "flex flex-col items-center gap-0.5 rounded-xl border-2 px-1 py-2.5 text-center transition-all cursor-pointer",
                  state.date === opt.value
                    ? "border-green-500 bg-green-50"
                    : "border-gray-100 bg-gray-50 hover:border-green-200",
                ].join(" ")}
              >
                <span className={[
                  "text-xs font-bold leading-none",
                  state.date === opt.value ? "text-green-800" : "text-gray-700",
                ].join(" ")}>{opt.label}</span>
                <span className="text-[10px] text-gray-400 leading-none mt-0.5">{opt.sub}</span>
              </button>
            ))}
          </div>

          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Time Window</p>
          <div className="grid grid-cols-4 gap-2 mb-5">
            {timeChoices.map(opt => (
              <button
                key={opt.value}
                type="button"
                onClick={() => update("time", opt.value)}
                className={[
                  "flex flex-col items-center gap-0.5 rounded-xl border-2 px-1 py-2.5 text-center transition-all cursor-pointer",
                  state.time === opt.value
                    ? "border-green-500 bg-green-50"
                    : "border-gray-100 bg-gray-50 hover:border-green-200",
                ].join(" ")}
              >
                <span className={[
                  "text-xs font-bold leading-none",
                  state.time === opt.value ? "text-green-800" : "text-gray-700",
                ].join(" ")}>{opt.label}</span>
                <span className="text-[10px] text-gray-400 leading-none mt-0.5">{opt.sub}</span>
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setStep(1)}
              className="w-1/3 border border-gray-200 hover:bg-gray-50 text-gray-600 font-semibold py-3 rounded-lg transition-colors text-sm"
            >
              ← Back
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={!canNext2}
              className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-colors text-sm"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* ── Step 3: Contact ──────────────────────────────────── */}
      {step === 3 && (
        <div>
          <h2 className="text-lg font-extrabold text-gray-900 mb-0.5">Almost done!</h2>
          <p className="text-gray-500 text-xs mb-4">We&rsquo;ll call you within 15 minutes to confirm your pickup.</p>

          {/* Booking summary */}
          <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 mb-4 text-xs text-gray-500 flex-wrap">
            <span className="text-green-700 font-semibold">
              {services.find(s => s.slug === state.service)?.shortName}
            </span>
            <span>·</span>
            <span>{state.city}</span>
            <span>·</span>
            <span className="capitalize">{state.date}</span>
            <span>·</span>
            <span className="capitalize">{state.time}</span>
          </div>

          <div className="space-y-3 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                value={state.name}
                onChange={e => update("name", e.target.value)}
                placeholder="John Smith"
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                value={state.phone}
                onChange={e => update("phone", e.target.value)}
                placeholder="(305) 555-0100"
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Describe the Junk{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                value={state.notes}
                onChange={e => update("notes", e.target.value)}
                rows={2}
                placeholder="e.g. Old sofa, broken fridge, boxes of clutter..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
            </div>
          </div>

          {submitError && <p className="text-red-600 text-sm mb-3">{submitError}</p>}

          <div className="flex gap-2">
            <button
              onClick={() => setStep(2)}
              className="w-1/3 border border-gray-200 hover:bg-gray-50 text-gray-600 font-semibold py-3 rounded-lg transition-colors text-sm"
            >
              ← Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={!canSubmit || isPending}
              className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-colors text-sm"
            >
              {isPending ? "Sending..." : "Get My Free Quote →"}
            </button>
          </div>

          <p className="text-center text-xs text-gray-400 mt-3">
            No credit card. No deposit. No obligation — ever.
          </p>
        </div>
      )}
    </div>
  )
}
