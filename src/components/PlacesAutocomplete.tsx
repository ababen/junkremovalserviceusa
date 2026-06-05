"use client"

import { useEffect, useRef } from "react"
import { setOptions, importLibrary } from "@googlemaps/js-api-loader"

interface Props {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

let configured = false

function loadPlaces(): Promise<google.maps.PlacesLibrary> {
  if (!configured) {
    setOptions({
      key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
      v: "weekly",
    })
    configured = true
  }
  return importLibrary("places") as Promise<google.maps.PlacesLibrary>
}

export default function PlacesAutocomplete({ value, onChange, placeholder, className }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    if (!apiKey || !inputRef.current) return

    loadPlaces().then(({ Autocomplete }) => {
      if (!inputRef.current || autocompleteRef.current) return

      autocompleteRef.current = new Autocomplete(inputRef.current, {
        types: ["(cities)"],
        componentRestrictions: { country: "us" },
        fields: ["address_components", "name"],
      })

      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current?.getPlace()
        if (!place?.address_components) return

        const city =
          place.address_components.find(c => c.types.includes("locality"))?.long_name ??
          place.address_components.find(c => c.types.includes("sublocality"))?.long_name ??
          place.name ??
          ""
        const state =
          place.address_components.find(c =>
            c.types.includes("administrative_area_level_1")
          )?.short_name ?? ""

        onChange(state ? `${city}, ${state}` : city)
      })
    })

    return () => {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current)
        autocompleteRef.current = null
      }
    }
  }, [onChange])

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className={className}
      autoComplete="off"
    />
  )
}
