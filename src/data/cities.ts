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
    phone: "(305) 555-0100",
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
    phone: "(954) 555-0200",
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
    phone: "(954) 555-0300",
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
    phone: "(954) 555-0400",
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
    phone: "(954) 555-0500",
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
    phone: "(954) 555-0600",
  },
  {
    slug: "orlando",
    name: "Orlando",
    state: "Florida",
    stateCode: "FL",
    county: "Orange County",
    headline: "Junk Removal in Orlando, FL",
    description:
      "Same-day junk removal across Orlando and Orange County. Estate cleanouts, apartment turnovers, and garage hauls done fast.",
    neighborhoods: [
      { name: "Downtown Orlando", slug: "downtown-orlando" },
      { name: "Winter Park", slug: "winter-park" },
      { name: "Lake Nona", slug: "lake-nona" },
      { name: "Dr. Phillips", slug: "dr-phillips" },
      { name: "Baldwin Park", slug: "baldwin-park" },
      { name: "College Park", slug: "college-park" },
      { name: "Conway", slug: "conway" },
      { name: "Azalea Park", slug: "azalea-park" },
    ],
    zipCodes: [
      "32801", "32803", "32804", "32805", "32806", "32807", "32808",
      "32809", "32810", "32811", "32812", "32814", "32819", "32822",
      "32824", "32827", "32828", "32829", "32835", "32839",
    ],
    phone: "(407) 555-0700",
  },
  {
    slug: "tampa",
    name: "Tampa",
    state: "Florida",
    stateCode: "FL",
    county: "Hillsborough County",
    headline: "Junk Removal in Tampa, FL",
    description:
      "Reliable junk hauling throughout Tampa and Hillsborough County. Residential cleanouts, furniture removal, and commercial debris.",
    neighborhoods: [
      { name: "Ybor City", slug: "ybor-city" },
      { name: "Hyde Park", slug: "hyde-park" },
      { name: "Westshore", slug: "westshore" },
      { name: "Channelside", slug: "channelside" },
      { name: "Seminole Heights", slug: "seminole-heights" },
      { name: "Brandon", slug: "brandon" },
      { name: "Carrollwood", slug: "carrollwood" },
      { name: "New Tampa", slug: "new-tampa" },
    ],
    zipCodes: [
      "33602", "33603", "33604", "33605", "33606", "33607", "33609",
      "33610", "33611", "33612", "33613", "33614", "33615", "33616",
      "33617", "33618", "33619", "33624", "33625", "33629", "33647",
    ],
    phone: "(813) 555-0800",
  },
  {
    slug: "jacksonville",
    name: "Jacksonville",
    state: "Florida",
    stateCode: "FL",
    county: "Duval County",
    headline: "Junk Removal in Jacksonville, FL",
    description:
      "Full-service junk removal across Jacksonville and Duval County. From single-item pickups to whole-home and office cleanouts.",
    neighborhoods: [
      { name: "Riverside", slug: "riverside" },
      { name: "San Marco", slug: "san-marco" },
      { name: "Avondale", slug: "avondale" },
      { name: "Mandarin", slug: "mandarin" },
      { name: "Southside", slug: "southside" },
      { name: "Arlington", slug: "arlington" },
      { name: "Springfield", slug: "springfield" },
      { name: "Jacksonville Beach", slug: "jacksonville-beach" },
    ],
    zipCodes: [
      "32202", "32204", "32205", "32206", "32207", "32208", "32209",
      "32210", "32211", "32216", "32217", "32218", "32220", "32221",
      "32223", "32224", "32225", "32226", "32244", "32246", "32256", "32258",
    ],
    phone: "(904) 555-0900",
  },
  {
    slug: "st-petersburg",
    name: "St. Petersburg",
    state: "Florida",
    stateCode: "FL",
    county: "Pinellas County",
    headline: "Junk Removal in St. Petersburg, FL",
    description:
      "Fast, eco-friendly junk removal in St. Petersburg and across Pinellas County. Same-day pickups for homes and businesses.",
    neighborhoods: [
      { name: "Old Northeast", slug: "old-northeast" },
      { name: "Kenwood", slug: "kenwood" },
      { name: "Downtown St. Pete", slug: "downtown-st-pete" },
      { name: "Gulfport", slug: "gulfport" },
      { name: "Snell Isle", slug: "snell-isle" },
      { name: "Tyrone", slug: "tyrone" },
      { name: "Pinellas Point", slug: "pinellas-point" },
    ],
    zipCodes: [
      "33701", "33702", "33703", "33704", "33705", "33707", "33708",
      "33709", "33710", "33711", "33712", "33713", "33714", "33715", "33716",
    ],
    phone: "(727) 555-1000",
  },
  {
    slug: "west-palm-beach",
    name: "West Palm Beach",
    state: "Florida",
    stateCode: "FL",
    county: "Palm Beach County",
    headline: "Junk Removal in West Palm Beach, FL",
    description:
      "Licensed, insured junk removal throughout West Palm Beach and Palm Beach County. Estate cleanouts and same-day hauling.",
    neighborhoods: [
      { name: "Downtown West Palm Beach", slug: "downtown-west-palm-beach" },
      { name: "El Cid", slug: "el-cid" },
      { name: "Northwood", slug: "northwood" },
      { name: "Flamingo Park", slug: "flamingo-park" },
      { name: "Wellington", slug: "wellington" },
      { name: "Royal Palm Beach", slug: "royal-palm-beach" },
      { name: "Lake Worth", slug: "lake-worth" },
    ],
    zipCodes: [
      "33401", "33403", "33404", "33405", "33406", "33407", "33409",
      "33411", "33412", "33413", "33414", "33415", "33417",
    ],
    phone: "(561) 555-1100",
  },
  {
    slug: "cape-coral",
    name: "Cape Coral",
    state: "Florida",
    stateCode: "FL",
    county: "Lee County",
    headline: "Junk Removal in Cape Coral, FL",
    description:
      "Same-day junk removal across Cape Coral and Lee County. Garage cleanouts, furniture hauling, and storm debris removal.",
    neighborhoods: [
      { name: "Pelican", slug: "pelican" },
      { name: "Cape Harbour", slug: "cape-harbour" },
      { name: "Tarpon Point", slug: "tarpon-point" },
      { name: "Sandoval", slug: "sandoval" },
      { name: "Pine Island", slug: "pine-island" },
    ],
    zipCodes: ["33904", "33909", "33914", "33990", "33991", "33993"],
    phone: "(239) 555-1200",
  },
  {
    slug: "fort-myers",
    name: "Fort Myers",
    state: "Florida",
    stateCode: "FL",
    county: "Lee County",
    headline: "Junk Removal in Fort Myers, FL",
    description:
      "Reliable junk hauling throughout Fort Myers and Southwest Florida. Residential and commercial cleanouts done fast.",
    neighborhoods: [
      { name: "Downtown River District", slug: "downtown-river-district" },
      { name: "McGregor", slug: "mcgregor" },
      { name: "Fort Myers Beach", slug: "fort-myers-beach" },
      { name: "Gateway", slug: "gateway" },
      { name: "Whiskey Creek", slug: "whiskey-creek" },
      { name: "Iona", slug: "iona" },
    ],
    zipCodes: ["33901", "33907", "33908", "33912", "33913", "33916", "33919", "33966"],
    phone: "(239) 555-1300",
  },
  {
    slug: "sarasota",
    name: "Sarasota",
    state: "Florida",
    stateCode: "FL",
    county: "Sarasota County",
    headline: "Junk Removal in Sarasota, FL",
    description:
      "Fast, eco-friendly junk removal in Sarasota and Sarasota County. Estate cleanouts, downsizing, and same-day pickups.",
    neighborhoods: [
      { name: "Downtown Sarasota", slug: "downtown-sarasota" },
      { name: "Siesta Key", slug: "siesta-key" },
      { name: "Lido Key", slug: "lido-key" },
      { name: "Gulf Gate", slug: "gulf-gate" },
      { name: "Bee Ridge", slug: "bee-ridge" },
      { name: "Southside Village", slug: "southside-village" },
    ],
    zipCodes: [
      "34231", "34232", "34233", "34234", "34235", "34236",
      "34237", "34238", "34239", "34240", "34241", "34242",
    ],
    phone: "(941) 555-1400",
  },
  {
    slug: "naples",
    name: "Naples",
    state: "Florida",
    stateCode: "FL",
    county: "Collier County",
    headline: "Junk Removal in Naples, FL",
    description:
      "Licensed, insured junk removal throughout Naples and Collier County. Premium estate cleanouts and white-glove hauling.",
    neighborhoods: [
      { name: "Old Naples", slug: "old-naples" },
      { name: "Park Shore", slug: "park-shore" },
      { name: "Pelican Bay", slug: "pelican-bay" },
      { name: "Golden Gate", slug: "golden-gate" },
      { name: "North Naples", slug: "north-naples" },
      { name: "Vineyards", slug: "vineyards" },
    ],
    zipCodes: [
      "34102", "34103", "34104", "34105", "34108", "34109",
      "34110", "34112", "34113", "34114", "34116", "34119",
    ],
    phone: "(239) 555-1500",
  },
  {
    slug: "tallahassee",
    name: "Tallahassee",
    state: "Florida",
    stateCode: "FL",
    county: "Leon County",
    headline: "Junk Removal in Tallahassee, FL",
    description:
      "Dependable junk removal in Tallahassee and Leon County. Apartment turnovers, student move-outs, and full property cleanouts.",
    neighborhoods: [
      { name: "Midtown", slug: "midtown" },
      { name: "Myers Park", slug: "myers-park" },
      { name: "Frenchtown", slug: "frenchtown" },
      { name: "Killearn", slug: "killearn" },
      { name: "Southwood", slug: "southwood" },
      { name: "Betton Hills", slug: "betton-hills" },
    ],
    zipCodes: [
      "32301", "32303", "32304", "32305", "32308",
      "32309", "32310", "32311", "32312", "32317",
    ],
    phone: "(850) 555-1600",
  },
]

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug)
}
