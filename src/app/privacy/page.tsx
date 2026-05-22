import type { Metadata } from "next"
import { SITE_NAME, SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME}. Learn how we collect, use, and protect your information.`,
  alternates: { canonical: `${SITE_URL}/privacy` },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: January 1, 2026</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
          <p>
            When you request a quote through our website, we collect your name, phone number, city or
            zip code, and a description of the items you need removed. We use this information solely
            to contact you about junk removal services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
          <p>
            We use the information you provide to respond to your service request, connect you with
            a local junk removal operator in your area, and send you relevant service communications.
            We do not sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Lead Sharing</h2>
          <p>
            {SITE_NAME} is a lead generation service. When you submit a quote request, your contact
            information may be shared with licensed junk removal operators in your area who will
            follow up to schedule your service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookies & Analytics</h2>
          <p>
            We may use standard analytics tools (such as Google Analytics) to understand how visitors
            use our site. These tools use cookies to collect anonymous usage data. You can disable
            cookies in your browser settings at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or want to request deletion of your data,
            email us at{" "}
            <a href="mailto:privacy@junkremovalserviceusa.com" className="text-green-600 hover:underline">
              privacy@junkremovalserviceusa.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  )
}
