import type { Metadata } from "next"
import { SITE_NAME, SITE_URL, PHONE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME}. Learn how we collect, use, share, and protect your information, and your choices around calls and text messages.`,
  alternates: { canonical: `${SITE_URL}/privacy` },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: June 5, 2026</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <section>
          <p>
            This Privacy Policy explains how {SITE_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) collects, uses, shares, and protects information about you when you
            visit our website, request a quote, or otherwise interact with us. By using our website
            or submitting a request, you agree to the practices described in this policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
          <p>We collect the following categories of information:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Information you provide.</strong> When you request a quote, we collect your
              name, phone number, city or ZIP code, the requested service, your preferred pickup
              window, and any description of the items you need removed.
            </li>
            <li>
              <strong>Automatically collected information.</strong> When you visit our site, we may
              automatically collect your IP address, browser type, device information, pages viewed,
              and referring URLs through cookies and similar technologies.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>respond to your quote request and schedule your service;</li>
            <li>connect you with a licensed junk removal operator in your area;</li>
            <li>contact you by phone call, text message (SMS), or email about your request;</li>
            <li>operate, maintain, and improve our website and services; and</li>
            <li>comply with legal obligations and enforce our terms.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Calls &amp; Text Messages (SMS Consent)</h2>
          <p>
            By submitting your phone number through our website, you expressly consent to receive
            phone calls and text messages from {SITE_NAME} and the junk removal operators we work
            with at the number provided, including calls and messages sent using an automatic
            telephone dialing system or prerecorded or artificial voice, for the purpose of
            responding to and servicing your request. Consent is not a condition of purchasing any
            goods or services.
          </p>
          <p>
            Message and data rates may apply. Message frequency varies. You may opt out of text
            messages at any time by replying <strong>STOP</strong>, and you may reply{" "}
            <strong>HELP</strong> for assistance. You may opt out of phone calls by telling us during
            any call that you no longer wish to be contacted. Mobile opt-in information and consent
            are not shared with third parties for their own marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Share Your Information</h2>
          <p>
            {SITE_NAME} is a lead generation service. When you submit a quote request, your contact
            information and request details may be shared with one or more licensed junk removal
            operators in your area so they can follow up to schedule your service. We may also share
            information with service providers who help us operate our business (for example, email
            delivery, customer relationship management, and analytics providers), and when required
            by law or to protect our rights. <strong>We do not sell your personal information.</strong>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Services</h2>
          <p>
            We use trusted third-party services to operate our website, including email delivery,
            CRM/lead-routing tools, address autocomplete, and analytics providers. These providers
            process information on our behalf and are obligated to protect it. Their use of your
            information is governed by their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookies &amp; Analytics</h2>
          <p>
            We may use cookies and similar technologies, including standard analytics tools (such as
            Google Analytics), to understand how visitors use our site and to improve performance.
            These tools collect usage data that may be associated with your device. You can disable
            or delete cookies through your browser settings at any time, though some features of the
            site may not function properly as a result.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Data Retention</h2>
          <p>
            We retain your information for as long as necessary to fulfill the purposes described in
            this policy, to comply with our legal obligations, resolve disputes, and enforce our
            agreements. When information is no longer needed, we take reasonable steps to delete or
            de-identify it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Data Security</h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards designed to protect
            your information. However, no method of transmission over the internet or electronic
            storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Your Choices &amp; Rights</h2>
          <p>
            You may request to access, correct, or delete the personal information we hold about you,
            and you may opt out of marketing communications, by contacting us using the details
            below. Depending on your state of residence, you may have additional rights under
            applicable privacy laws. We will respond to verified requests as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Children&rsquo;s Privacy</h2>
          <p>
            Our website is not directed to children under the age of 13, and we do not knowingly
            collect personal information from children. If you believe a child has provided us with
            personal information, please contact us so we can remove it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the
            &ldquo;Last updated&rdquo; date above. Your continued use of the website after any change
            constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, want to exercise your rights, or wish to
            request deletion of your data, contact us at{" "}
            <a href="mailto:privacy@junkremovalserviceusa.com" className="text-green-600 hover:underline">
              privacy@junkremovalserviceusa.com
            </a>{" "}
            or call{" "}
            <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-green-600 hover:underline">
              {PHONE}
            </a>.
          </p>
        </section>
      </div>
    </div>
  )
}
