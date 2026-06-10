import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { cities, getCityBySlug } from "@/data/cities"
import CityPageTemplate from "@/templates/CityPageTemplate"
import { SITE_URL, SITE_NAME } from "@/lib/constants"

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }))
}

export async function generateMetadata(props: PageProps<"/[city]">): Promise<Metadata> {
  const { city: slug } = await props.params
  const city = getCityBySlug(slug)
  if (!city) return {}

  const title = `Junk Removal in ${city.name}, ${city.stateCode} — Same-Day Pickup`
  const description = `Professional junk removal in ${city.name}, ${city.stateCode}. ${city.description} Licensed & insured. Get a free quote today.`

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/${city.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${city.slug}`,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
  }
}

function buildCityFaqSchema(city: { name: string; stateCode: string; state: string; county: string; neighborhoods: { name: string }[] }) {
  const faqs = [
    {
      q: `How quickly can you do junk removal in ${city.name}?`,
      a: `We offer same-day and next-day junk removal throughout ${city.name} and ${city.county}. Call us or fill out the form and we'll confirm a time window within minutes.`,
    },
    {
      q: `How much does junk removal cost in ${city.name}?`,
      a: `Pricing is based on volume — how much space your junk takes up in our truck. Most residential pickups in ${city.name} range from $99 to $499. We give you a firm price before any work begins.`,
    },
    {
      q: `Do you serve all neighborhoods in ${city.name}?`,
      a: `Yes. We serve all of ${city.name} and surrounding ${city.county} communities, including ${city.neighborhoods.slice(0, 4).map((n) => n.name).join(", ")}, and more.`,
    },
    {
      q: `Are you licensed and insured in ${city.stateCode}?`,
      a: `Yes. We are fully licensed and insured to operate in ${city.name} and throughout ${city.state}.`,
    },
  ]

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  }
}

export default async function CityPage(props: PageProps<"/[city]">) {
  const { city: slug } = await props.params
  const city = getCityBySlug(slug)

  if (!city) notFound()

  const faqSchema = buildCityFaqSchema(city)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CityPageTemplate city={city} />
    </>
  )
}
