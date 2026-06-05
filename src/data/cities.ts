export interface Neighborhood {
  name: string
  slug: string
}

export interface City {
  slug: string
  name: string
  state: string
  stateCode: string
  county: string
  headline: string
  description: string
  neighborhoods: Neighborhood[]
  zipCodes: string[]
  phone: string
}

export const cities: City[] = [
  {
    slug: "miami",
    name: "Miami",
    state: "Florida",
    stateCode: "FL",
    county: "Miami-Dade County",
    headline: "Junk Removal in Miami, FL",
    description:
      "Fast, affordable junk removal throughout Miami and Miami-Dade County. Same-day pickups available.",
    neighborhoods: [
      { name: "Brickell", slug: "brickell" },
      { name: "Coral Gables", slug: "coral-gables" },
      { name: "Hialeah", slug: "hialeah" },
      { name: "Miami Beach", slug: "miami-beach" },
      { name: "Kendall", slug: "kendall" },
      { name: "Doral", slug: "doral" },
      { name: "North Miami", slug: "north-miami" },
      { name: "Homestead", slug: "homestead" },
      { name: "Miami Gardens", slug: "miami-gardens" },
      { name: "Coconut Grove", slug: "coconut-grove" },
      { name: "Little Havana", slug: "little-havana" },
      { name: "Wynwood", slug: "wynwood" },
    ],
    zipCodes: [
      "33101", "33125", "33126", "33127", "33128", "33129", "33130",
      "33131", "33132", "33133", "33134", "33135", "33136", "33137",
      "33138", "33139", "33140", "33141", "33142", "33143", "33144",
      "33145", "33146", "33147", "33150", "33155", "33157", "33161",
      "33162", "33165", "33166", "33167", "33168", "33169", "33172",
      "33174", "33175", "33176", "33177", "33178", "33179", "33180",
      "33181", "33182", "33183", "33184", "33185", "33186", "33187",
      "33188", "33189", "33190", "33193", "33194", "33196",
    ],
    phone: "(855) 885-5865",
  },
  {
    slug: "fort-lauderdale",
    name: "Fort Lauderdale",
    state: "Florida",
    stateCode: "FL",
    county: "Broward County",
    headline: "Junk Removal in Fort Lauderdale, FL",
    description:
      "Reliable junk removal across Fort Lauderdale and Broward County. Licensed, insured, and ready today.",
    neighborhoods: [
      { name: "Las Olas", slug: "las-olas" },
      { name: "Victoria Park", slug: "victoria-park" },
      { name: "Wilton Manors", slug: "wilton-manors" },
      { name: "Oakland Park", slug: "oakland-park" },
      { name: "Lauderdale Lakes", slug: "lauderdale-lakes" },
      { name: "Lauderhill", slug: "lauderhill" },
      { name: "Sunrise", slug: "sunrise" },
      { name: "Plantation", slug: "plantation" },
      { name: "Davie", slug: "davie" },
      { name: "Dania Beach", slug: "dania-beach" },
    ],
    zipCodes: [
      "33301", "33304", "33305", "33306", "33308", "33309", "33310",
      "33311", "33312", "33313", "33314", "33315", "33316", "33317",
      "33319", "33324", "33325", "33326", "33328",
    ],
    phone: "(855) 885-5865",
  },
  {
    slug: "hollywood",
    name: "Hollywood",
    state: "Florida",
    stateCode: "FL",
    county: "Broward County",
    headline: "Junk Removal in Hollywood, FL",
    description:
      "Professional junk removal in Hollywood, FL — residential and commercial pickups, same day available.",
    neighborhoods: [
      { name: "Hollywood Hills", slug: "hollywood-hills" },
      { name: "West Hollywood", slug: "west-hollywood-fl" },
      { name: "Oakwood", slug: "oakwood" },
      { name: "Hallandale Beach", slug: "hallandale-beach" },
      { name: "Dania Beach", slug: "dania-beach" },
    ],
    zipCodes: ["33019", "33020", "33021", "33022", "33023", "33024", "33025"],
    phone: "(855) 885-5865",
  },
  {
    slug: "pembroke-pines",
    name: "Pembroke Pines",
    state: "Florida",
    stateCode: "FL",
    county: "Broward County",
    headline: "Junk Removal in Pembroke Pines, FL",
    description:
      "Affordable junk removal in Pembroke Pines — furniture, appliances, yard waste, and full cleanouts.",
    neighborhoods: [
      { name: "Chapel Trail", slug: "chapel-trail" },
      { name: "Silver Lakes", slug: "silver-lakes" },
      { name: "Pines City Center", slug: "pines-city-center" },
      { name: "Miramar", slug: "miramar" },
    ],
    zipCodes: ["33023", "33024", "33025", "33026", "33027", "33028", "33029"],
    phone: "(855) 885-5865",
  },
  {
    slug: "miramar",
    name: "Miramar",
    state: "Florida",
    stateCode: "FL",
    county: "Broward County",
    headline: "Junk Removal in Miramar, FL",
    description:
      "Fast and friendly junk removal in Miramar, FL. We handle residential and commercial cleanouts.",
    neighborhoods: [
      { name: "Miramar Parkway", slug: "miramar-parkway" },
      { name: "Riviera Isles", slug: "riviera-isles" },
      { name: "Golden Isles", slug: "golden-isles" },
    ],
    zipCodes: ["33023", "33025", "33027", "33029"],
    phone: "(855) 885-5865",
  },
  {
    slug: "pompano-beach",
    name: "Pompano Beach",
    state: "Florida",
    stateCode: "FL",
    county: "Broward County",
    headline: "Junk Removal in Pompano Beach, FL",
    description:
      "Dependable junk hauling in Pompano Beach — from single items to full property cleanouts.",
    neighborhoods: [
      { name: "Lighthouse Point", slug: "lighthouse-point" },
      { name: "Collier City", slug: "collier-city" },
      { name: "Palm Aire", slug: "palm-aire" },
    ],
    zipCodes: ["33060", "33061", "33062", "33063", "33064", "33065", "33066", "33067", "33068", "33069"],
    phone: "(855) 885-5865",
  },
]

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug)
}
