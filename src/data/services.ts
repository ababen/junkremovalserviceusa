export interface Service {
  slug: string
  name: string
  shortName: string
  headline: string
  description: string
  longDescription: string
  items: string[]
  faqs: { q: string; a: string }[]
  icon: string
}

export const services: Service[] = [
  {
    slug: "furniture-removal",
    name: "Furniture Removal",
    shortName: "Furniture",
    headline: "Furniture Removal Made Easy",
    description:
      "We haul away sofas, couches, dressers, beds, tables, and any other furniture — no matter the size.",
    longDescription:
      "Getting rid of old furniture doesn't have to be a headache. Our crew does all the heavy lifting, carrying items from any room, floor, or tight space. We handle everything from single pieces to full household cleanouts.",
    items: [
      "Sofas & Sectionals",
      "Beds & Mattresses",
      "Dressers & Armoires",
      "Dining Tables & Chairs",
      "Desks & Office Furniture",
      "Bookcases & Shelving",
    ],
    faqs: [
      {
        q: "Do you disassemble furniture before removal?",
        a: "Yes, our team will disassemble large furniture pieces like bed frames and sectionals at no extra charge so we can safely remove them.",
      },
      {
        q: "Can you remove furniture from upstairs?",
        a: "Absolutely. Our crew is experienced moving heavy furniture down stairs, through hallways, and out of tight spaces.",
      },
      {
        q: "What happens to the furniture after removal?",
        a: "We donate usable pieces to local charities and recycle or responsibly dispose of the rest.",
      },
    ],
    icon: "🛋️",
  },
  {
    slug: "appliance-removal",
    name: "Appliance Removal",
    shortName: "Appliances",
    headline: "Appliance Removal & Disposal",
    description:
      "From refrigerators to washing machines, we safely remove and recycle all household appliances.",
    longDescription:
      "Old appliances contain materials that must be disposed of properly. We are fully licensed and insured to remove refrigerators, freezers, washers, dryers, dishwashers, ovens, and more — and we ensure they are recycled responsibly.",
    items: [
      "Refrigerators & Freezers",
      "Washers & Dryers",
      "Dishwashers",
      "Ovens & Ranges",
      "Microwaves",
      "Air Conditioners",
    ],
    faqs: [
      {
        q: "Are there extra fees for appliance removal?",
        a: "No hidden fees. Our quote covers all labor, disposal, and recycling fees.",
      },
      {
        q: "Can you remove a refrigerator with food still in it?",
        a: "We recommend emptying the refrigerator first, but we can help if needed. Just let us know ahead of time.",
      },
      {
        q: "Do you recycle appliances?",
        a: "Yes. We recycle up to 80% of the materials from appliances, keeping them out of landfills.",
      },
    ],
    icon: "🧺",
  },
  {
    slug: "mattress-disposal",
    name: "Mattress Disposal",
    shortName: "Mattresses",
    headline: "Mattress Pickup & Disposal",
    description:
      "Same-day mattress removal for any size — twin, full, queen, or king. We handle the heavy lifting.",
    longDescription:
      "Mattresses are one of the hardest items to get rid of on your own. They are bulky, heavy, and most trash services won't take them. We pick up your old mattress, box spring, and bed frame and ensure they are properly recycled or disposed of.",
    items: [
      "Twin & Full Mattresses",
      "Queen & King Mattresses",
      "Box Springs",
      "Bed Frames",
      "Futons",
      "Sofa Beds",
    ],
    faqs: [
      {
        q: "How do I schedule mattress pickup?",
        a: "Fill out our quote form or call us. We offer same-day and next-day appointments in most areas.",
      },
      {
        q: "Can you pick up multiple mattresses?",
        a: "Yes. We charge by volume, so multiple mattresses are no problem.",
      },
      {
        q: "Are mattresses recycled?",
        a: "We work with certified mattress recyclers to divert as much material as possible from landfills.",
      },
    ],
    icon: "🛏️",
  },
  {
    slug: "garage-cleanout",
    name: "Garage Cleanout",
    shortName: "Garage Cleanout",
    headline: "Full Garage Cleanout Service",
    description:
      "Reclaim your garage. We remove tools, old appliances, boxes, junk, and everything in between.",
    longDescription:
      "A cluttered garage is more than an eyesore — it can be a hazard. Our team will clear out everything you no longer need: old tools, paint cans, broken equipment, boxes of junk, and more. We sort recyclables, donate usable items, and dispose of the rest responsibly.",
    items: [
      "Old Tools & Equipment",
      "Paint Cans & Chemicals",
      "Boxes & Clutter",
      "Broken Appliances",
      "Sporting Equipment",
      "Yard & Garden Items",
    ],
    faqs: [
      {
        q: "Do you handle hazardous materials?",
        a: "We can remove paint cans, chemicals, and other household hazardous waste. We partner with certified disposal facilities.",
      },
      {
        q: "How long does a garage cleanout take?",
        a: "Most garage cleanouts take 1–3 hours depending on the amount of junk. We give you a time estimate when booking.",
      },
      {
        q: "Do I need to sort items before you arrive?",
        a: "No sorting required. Just point to what needs to go and our crew handles the rest.",
      },
    ],
    icon: "🏠",
  },
  {
    slug: "estate-cleanout",
    name: "Estate Cleanout",
    shortName: "Estate Cleanout",
    headline: "Compassionate Estate Cleanout",
    description:
      "We handle full estate cleanouts with care and efficiency — helping families through a difficult time.",
    longDescription:
      "Estate cleanouts require sensitivity and speed. Whether you are settling an estate, preparing a home for sale, or clearing out a loved one's belongings, our team works efficiently and respectfully. We handle the entire property — every room, garage, and storage area.",
    items: [
      "Full House Cleanouts",
      "Furniture & Appliances",
      "Clothing & Personal Items",
      "Garage & Basement",
      "Yard & Outdoor Items",
      "Donation Coordination",
    ],
    faqs: [
      {
        q: "Do you donate usable items from estate cleanouts?",
        a: "Yes. We coordinate with local charities and thrift stores to donate usable furniture, clothing, and household goods.",
      },
      {
        q: "How quickly can you complete an estate cleanout?",
        a: "We can typically complete most estate cleanouts in one day. Large properties may take two days.",
      },
      {
        q: "Can I be present during the cleanout?",
        a: "You are welcome to be present. Many families prefer to point out specific items to keep or donate before we begin.",
      },
    ],
    icon: "🏡",
  },
  {
    slug: "construction-debris-removal",
    name: "Construction Debris Removal",
    shortName: "Construction Debris",
    headline: "Construction Debris & Demo Junk Removal",
    description:
      "After renovation or demolition, we clear out all the debris fast — drywall, lumber, concrete, and more.",
    longDescription:
      "Post-construction cleanup is the last thing you want to deal with after a renovation. Our crew quickly loads and hauls away drywall, lumber, tiles, concrete, and other construction waste, leaving your property clean and ready.",
    items: [
      "Drywall & Plaster",
      "Lumber & Wood Scraps",
      "Concrete & Brick",
      "Tile & Flooring",
      "Roofing Materials",
      "Fencing & Decking",
    ],
    faqs: [
      {
        q: "Can you remove concrete and heavy materials?",
        a: "Yes. We have the equipment and experience to haul away concrete, brick, and other heavy construction debris.",
      },
      {
        q: "Do you offer same-day construction debris removal?",
        a: "Yes, we offer same-day service for construction debris when available in your area.",
      },
      {
        q: "Is construction debris recyclable?",
        a: "Much of it is. We sort and recycle concrete, metal, and clean lumber when possible.",
      },
    ],
    icon: "🔨",
  },
  {
    slug: "yard-waste-removal",
    name: "Yard Waste Removal",
    shortName: "Yard Waste",
    headline: "Yard Waste & Debris Removal",
    description:
      "We haul away tree branches, grass clippings, leaves, brush, and any outdoor waste.",
    longDescription:
      "After a storm or landscaping project, yard waste can pile up fast. Our team loads and removes branches, brush, leaves, grass, soil, and other outdoor debris quickly and cleanly. We compost or mulch green waste when possible.",
    items: [
      "Tree Branches & Logs",
      "Brush & Shrubs",
      "Grass Clippings",
      "Leaves & Mulch",
      "Soil & Dirt",
      "Old Fencing & Lumber",
    ],
    faqs: [
      {
        q: "Do you remove tree stumps?",
        a: "We can remove small stumps and surface-level roots. For large stumps, we recommend a stump grinding service first.",
      },
      {
        q: "Can you haul away soil and dirt?",
        a: "Yes. We load and haul away excess soil, dirt, and gravel.",
      },
      {
        q: "Is yard waste composted or recycled?",
        a: "Yes. We take yard waste to facilities that compost or mulch green material.",
      },
    ],
    icon: "🌿",
  },
  {
    slug: "commercial-junk-removal",
    name: "Commercial Junk Removal",
    shortName: "Commercial",
    headline: "Commercial Junk Removal for Businesses",
    description:
      "Office cleanouts, retail junk removal, and commercial debris hauling — fast and professional.",
    longDescription:
      "Businesses need junk removed quickly and with minimal disruption. We serve offices, retail stores, warehouses, restaurants, and property managers with flexible scheduling, including evenings and weekends. Our crew works efficiently to minimize downtime.",
    items: [
      "Office Furniture & Equipment",
      "Retail Fixtures & Displays",
      "Warehouse Junk & Pallets",
      "Restaurant Equipment",
      "Electronics & E-Waste",
      "Renovation Debris",
    ],
    faqs: [
      {
        q: "Do you offer after-hours commercial junk removal?",
        a: "Yes. We can schedule evening or weekend pickups to minimize disruption to your business.",
      },
      {
        q: "Can you handle large commercial cleanouts?",
        a: "Absolutely. We have multiple trucks and crews available for large-scale commercial projects.",
      },
      {
        q: "Do you provide documentation for disposal?",
        a: "Yes. We can provide certificates of disposal for commercial clients who need documentation for compliance purposes.",
      },
    ],
    icon: "🏢",
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
