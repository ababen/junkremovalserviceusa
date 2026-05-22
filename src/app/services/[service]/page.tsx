import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { services, getServiceBySlug } from "@/data/services"
import ServicePageTemplate from "@/templates/ServicePageTemplate"
import { SITE_URL, SITE_NAME } from "@/lib/constants"

export async function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }))
}

export async function generateMetadata(props: PageProps<"/services/[service]">): Promise<Metadata> {
  const { service: slug } = await props.params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  const title = `${service.name} in Miami & South Florida — Same-Day Pickup`
  const description = `Professional ${service.name.toLowerCase()} in Miami, Fort Lauderdale, and Broward County. ${service.description} Licensed & insured. Get a free quote.`

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/services/${service.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/services/${service.slug}`,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
  }
}

export default async function ServicePage(props: PageProps<"/services/[service]">) {
  const { service: slug } = await props.params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageTemplate service={service} />
    </>
  )
}
