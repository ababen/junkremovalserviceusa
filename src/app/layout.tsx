import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, PHONE } from "@/lib/constants"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Fast, Affordable, Eco-Friendly`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ["junk removal", "junk hauling", "Miami junk removal", "Fort Lauderdale junk removal", "same day junk removal", "South Florida junk removal"],
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Fast, Affordable, Eco-Friendly`,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: SITE_URL,
  telephone: PHONE,
  description: SITE_DESCRIPTION,
  image: `${SITE_URL}/opengraph-image`,
  logo: `${SITE_URL}/opengraph-image`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "33101",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.7617,
    longitude: -80.1918,
  },
  areaServed: [
    { "@type": "City", name: "Miami" },
    { "@type": "City", name: "Fort Lauderdale" },
    { "@type": "City", name: "Hollywood" },
    { "@type": "City", name: "Pembroke Pines" },
    { "@type": "City", name: "Miramar" },
    { "@type": "City", name: "Pompano Beach" },
  ],
  sameAs: [],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "20:00",
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
