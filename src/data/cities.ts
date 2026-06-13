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
  // ── Palm Beach County ───────────────────────────────────────
  {
    slug: "north-palm-beach",
    name: "North Palm Beach",
    state: "Florida",
    stateCode: "FL",
    county: "Palm Beach County",
    headline: "Junk Removal in North Palm Beach, FL — Waterfront & Inland",
    description:
      "Coastal junk removal serving North Palm Beach — from waterfront condos on the Intracoastal to the in-land neighborhoods just south of Juno Beach. Same-day pickups, sand-ready crews.",
    neighborhoods: [
      { name: "North Palm Beach Village", slug: "npb-village" },
      { name: "Lost Tree Village", slug: "lost-tree" },
      { name: "Old Port Cove", slug: "old-port-cove" },
      { name: "Frenchman's Harbor", slug: "frenchmans-harbor" },
      { name: "Captains Key", slug: "captains-key" },
      { name: "Prospect Park", slug: "prospect-park" },
      { name: "Hidden Key", slug: "hidden-key" },
      { name: "Lake Colony", slug: "lake-colony" },
    ],
    zipCodes: ["33408"],
    phone: "(855) 885-5865",
  },
  {
    slug: "juno-beach",
    name: "Juno Beach",
    state: "Florida",
    stateCode: "FL",
    county: "Palm Beach County",
    headline: "Junk Removal in Juno Beach, FL — Quiet Coastal Living",
    description:
      "Junk hauling for Juno Beach homes, condos, and oceanfront properties. Careful crews for salt-air patios, hurricane-prep cleanouts, and post-storm debris removal.",
    neighborhoods: [
      { name: "Juno Beach Condos", slug: "juno-condos" },
      { name: "Ocean Trace", slug: "ocean-trace" },
      { name: "Beach Walk", slug: "beach-walk" },
      { name: "Juno Isles", slug: "juno-isles" },
      { name: "Bluffs", slug: "bluffs" },
    ],
    zipCodes: ["33408"],
    phone: "(855) 885-5865",
  },
  {
    slug: "palm-beach-gardens",
    name: "Palm Beach Gardens",
    state: "Florida",
    stateCode: "FL",
    county: "Palm Beach County",
    headline: "Junk Removal in Palm Beach Gardens, FL",
    description:
      "Full-service junk removal across Palm Beach Gardens — from PGA National to the shops at Downtown at the Gardens. Furniture, appliances, hot tubs, and garage cleanouts.",
    neighborhoods: [
      { name: "PGA National", slug: "pga-national" },
      { name: "BallenIsles", slug: "ballenisles" },
      { name: "Evergrene", slug: "evergrene" },
      { name: "Mirabella", slug: "mirabella" },
      { name: "Frenchmans Reserve", slug: "frenchmans-reserve" },
      { name: "The Bears Club", slug: "bears-club" },
      { name: "Avenir", slug: "avenir" },
      { name: "Downtown at the Gardens", slug: "downtown-gardens" },
      { name: "Eastpointe", slug: "eastpointe" },
      { name: "Cabana Colony", slug: "cabana-colony" },
    ],
    zipCodes: ["33410", "33412", "33418"],
    phone: "(855) 885-5865",
  },
  {
    slug: "jupiter",
    name: "Jupiter",
    state: "Florida",
    stateCode: "FL",
    county: "Palm Beach County",
    headline: "Junk Removal in Jupiter, FL — Inlet to Farms",
    description:
      "Reliable junk removal across Jupiter — from the Inlet and Jupiter Island to Abacoa and the Farms. Same-day service, dock-friendly crews for waterfront estates.",
    neighborhoods: [
      { name: "Jupiter Inlet Colony", slug: "jupiter-inlet-colony" },
      { name: "Jupiter Island", slug: "jupiter-island" },
      { name: "Admirals Cove", slug: "admirals-cove" },
      { name: "The Loxahatchee Club", slug: "loxahatchee-club" },
      { name: "Jonathan's Landing", slug: "jonathans-landing" },
      { name: "Abacoa", slug: "abacoa" },
      { name: "The Farms", slug: "the-farms" },
      { name: "Maplewood", slug: "maplewood" },
      { name: "Pennock Point", slug: "pennock-point" },
    ],
    zipCodes: ["33458", "33469", "33477", "33478"],
    phone: "(855) 885-5865",
  },
  {
    slug: "tequesta",
    name: "Tequesta",
    state: "Florida",
    stateCode: "FL",
    county: "Palm Beach County",
    headline: "Junk Removal in Tequesta, FL",
    description:
      "Small-town junk removal for the Village of Tequesta — single items, full cleanouts, and tight-driveway-friendly crews.",
    neighborhoods: [
      { name: "Tequesta Country Club", slug: "tequesta-country-club" },
      { name: "North Palm Beach Heights", slug: "npb-heights" },
      { name: "Riverbend", slug: "riverbend" },
      { name: "Heritage Oaks", slug: "heritage-oaks" },
    ],
    zipCodes: ["33469"],
    phone: "(855) 885-5865",
  },
  {
    slug: "west-palm-beach",
    name: "West Palm Beach",
    state: "Florida",
    stateCode: "FL",
    county: "Palm Beach County",
    headline: "Junk Removal in West Palm Beach, FL",
    description:
      "Down-to-the-Isle junk removal — serving West Palm Beach from Clematis to the Acreage. Apartments, condos, single-family, and commercial cleanouts same day.",
    neighborhoods: [
      { name: "CityPlace", slug: "cityplace" },
      { name: "Clematis Street", slug: "clematis" },
      { name: "Northwood", slug: "northwood" },
      { name: "El Cid", slug: "el-cid" },
      { name: "Grandview Heights", slug: "grandview-heights" },
      { name: "SoSo (South of Southern)", slug: "soso" },
      { name: "Westgate", slug: "westgate" },
      { name: "Belvedere Homes", slug: "belvedere-homes" },
      { name: "The Acreage", slug: "the-acreage" },
      { name: "Loxahatchee Groves", slug: "loxahatchee-groves" },
      { name: "Palm Beach Lakes", slug: "palm-beach-lakes" },
    ],
    zipCodes: [
      "33401", "33405", "33406", "33407", "33409", "33411",
      "33412", "33415", "33417",
    ],
    phone: "(855) 885-5865",
  },
  {
    slug: "palm-beach",
    name: "Palm Beach",
    state: "Florida",
    stateCode: "FL",
    county: "Palm Beach County",
    headline: "Junk Removal in Palm Beach, FL — Discreet Island Service",
    description:
      "White-glove junk removal on the Island of Palm Beach. Discreet crews, unmarked trucks on request, and discreet scheduling for estate cleanouts and renovations.",
    neighborhoods: [
      { name: "Mid-Town", slug: "mid-town" },
      { name: "South End", slug: "south-end" },
      { name: "North End", slug: "north-end" },
      { name: "Billionaires Row", slug: "billionaires-row" },
      { name: "Royal Palm Way", slug: "royal-palm-way" },
      { name: "Worth Avenue", slug: "worth-avenue" },
    ],
    zipCodes: ["33480"],
    phone: "(855) 885-5865",
  },
  {
    slug: "palm-beach-shores",
    name: "Palm Beach Shores",
    state: "Florida",
    stateCode: "FL",
    county: "Palm Beach County",
    headline: "Junk Removal in Palm Beach Shores, FL",
    description:
      "Boutique junk removal for the small town of Palm Beach Shores — condo cleanouts, balcony junk, and storm prep.",
    neighborhoods: [
      { name: "Palm Beach Shores Resort Area", slug: "pbs-resort" },
      { name: "Ocean Avenue District", slug: "ocean-ave" },
    ],
    zipCodes: ["33404"],
    phone: "(855) 885-5865",
  },
  {
    slug: "riviera-beach",
    name: "Riviera Beach",
    state: "Florida",
    stateCode: "FL",
    county: "Palm Beach County",
    headline: "Junk Removal in Riviera Beach, FL",
    description:
      "Honest, fast junk removal in Riviera Beach — from the Marina District to the Heights. Apartment, house, and commercial cleanouts.",
    neighborhoods: [
      { name: "Marina District", slug: "marina-district" },
      { name: "Riviera Beach Heights", slug: "rb-heights" },
      { name: "Blue Heron", slug: "blue-heron" },
      { name: "President Country Club", slug: "president-country-club" },
    ],
    zipCodes: ["33404"],
    phone: "(855) 885-5865",
  },
  {
    slug: "singer-island",
    name: "Singer Island",
    state: "Florida",
    stateCode: "FL",
    county: "Palm Beach County",
    headline: "Junk Removal on Singer Island, FL",
    description:
      "Oceanfront junk hauling for Singer Island condos and homes — hurricane-debris, post-renovation, and full cleanouts with crews used to tight beachfront access.",
    neighborhoods: [
      { name: "Singer Island Oceanfront", slug: "si-oceanfront" },
      { name: "Singer Island Condos", slug: "si-condos" },
      { name: "MacArthur State Park Area", slug: "macarthur-area" },
    ],
    zipCodes: ["33404"],
    phone: "(855) 885-5865",
  },
  {
    slug: "lake-park",
    name: "Lake Park",
    state: "Florida",
    stateCode: "FL",
    county: "Palm Beach County",
    headline: "Junk Removal in Lake Park, FL",
    description:
      "Quick, local junk removal for the Town of Lake Park — furniture, appliances, garage cleanouts. Easy scheduling, fair pricing.",
    neighborhoods: [
      { name: "Downtown Lake Park", slug: "downtown-lake-park" },
      { name: "Lake Park Estates", slug: "lake-park-estates" },
      { name: "Kelsey City", slug: "kelsey-city" },
    ],
    zipCodes: ["33403"],
    phone: "(855) 885-5865",
  },
  {
    slug: "mangonia-park",
    name: "Mangonia Park",
    state: "Florida",
    stateCode: "FL",
    county: "Palm Beach County",
    headline: "Junk Removal in Mangonia Park, FL",
    description:
      "Small-town junk removal in Mangonia Park — apartments, rentals, and single-family cleanouts. Fast response, no job too small.",
    neighborhoods: [
      { name: "Mangonia Park Town", slug: "mangonia-town" },
      { name: "Australian Pines", slug: "australian-pines" },
    ],
    zipCodes: ["33407"],
    phone: "(855) 885-5865",
  },
]

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug)
}
