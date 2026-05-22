import type { Metadata } from "next"
import { SITE_NAME, SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE_NAME}. By using our site you agree to these terms.`,
  alternates: { canonical: `${SITE_URL}/terms` },
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: January 1, 2026</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">About This Service</h2>
          <p>
            {SITE_NAME} is a junk removal lead generation platform. We connect homeowners and
            businesses with licensed, insured junk removal operators across South Florida. By using
            this website and submitting a quote request, you agree to these Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Quote Requests</h2>
          <p>
            Submitting a quote request through our website is not a binding contract. Pricing is
            determined by the local operator who contacts you. All pricing is subject to an on-site
            assessment. Quotes provided over the phone or online are estimates only.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">No Warranty</h2>
          <p>
            This website and its content are provided &ldquo;as is.&rdquo; We make no warranties,
            expressed or implied, regarding the accuracy of information or the quality of services
            provided by third-party operators.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
          <p>
            {SITE_NAME} is not liable for any damages arising from your use of this website or from
            services provided by any junk removal operator connected through this platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact</h2>
          <p>
            For questions about these Terms, contact us at{" "}
            <a href="mailto:legal@junkremovalserviceusa.com" className="text-green-600 hover:underline">
              legal@junkremovalserviceusa.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  )
}
