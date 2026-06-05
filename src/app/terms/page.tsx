import type { Metadata } from "next"
import { SITE_NAME, SITE_URL, PHONE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE_NAME}. By using our site and requesting a quote you agree to these terms.`,
  alternates: { canonical: `${SITE_URL}/terms` },
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: June 5, 2026</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <section>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the{" "}
            {SITE_NAME} website (the &ldquo;Site&rdquo;) and the services offered through it. By
            using the Site or submitting a quote request, you agree to be bound by these Terms. If
            you do not agree, please do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">About This Service</h2>
          <p>
            {SITE_NAME} is a junk removal lead generation platform. We connect homeowners and
            businesses with licensed, insured junk removal operators across South Florida. We are not
            a junk removal provider ourselves, and the actual removal services are performed by
            independent third-party operators who are solely responsible for the services they
            provide.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Eligibility</h2>
          <p>
            You must be at least 18 years old and able to form a binding contract to use the Site and
            submit a request. By using the Site, you represent and warrant that you meet these
            requirements and that the information you provide is accurate and belongs to you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Consent to Be Contacted</h2>
          <p>
            By submitting a quote request, you authorize {SITE_NAME} and the junk removal operators
            we work with to contact you by phone call, text message (SMS), and email at the contact
            information you provide, including through automated means, regarding your request.
            Consent to receive marketing calls or texts is not a condition of purchasing any goods or
            services. You may opt out at any time as described in our{" "}
            <a href="/privacy" className="text-green-600 hover:underline">Privacy Policy</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Quote Requests &amp; Pricing</h2>
          <p>
            Submitting a quote request through the Site is not a binding contract for services. Any
            prices, estimates, or ranges shown on the Site or provided over the phone are estimates
            only and are subject to change. Final pricing is determined by the local operator
            following an on-site assessment of the items to be removed. You are under no obligation
            to accept any quote.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Acceptable Use</h2>
          <p>You agree not to use the Site to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>submit false, inaccurate, or another person&rsquo;s information without authorization;</li>
            <li>violate any applicable law or regulation;</li>
            <li>interfere with or disrupt the Site or its servers; or</li>
            <li>attempt to gain unauthorized access to any part of the Site or related systems.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Intellectual Property</h2>
          <p>
            The Site and its content, including text, graphics, logos, and design, are owned by or
            licensed to {SITE_NAME} and are protected by intellectual property laws. You may not
            copy, reproduce, distribute, or create derivative works from any part of the Site without
            our prior written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Operators</h2>
          <p>
            Junk removal services are performed by independent third-party operators, not by{" "}
            {SITE_NAME}. We do not control and are not responsible for the acts, omissions, conduct,
            pricing, timeliness, or quality of services provided by any operator. Any dispute
            regarding services should be resolved directly with the operator who performed them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">No Warranty</h2>
          <p>
            The Site and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
            without warranties of any kind, whether express or implied, including warranties of
            merchantability, fitness for a particular purpose, and non-infringement. We do not
            warrant that the Site will be uninterrupted, error-free, or secure, or that any
            information is accurate or complete.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {SITE_NAME} and its affiliates will not be liable
            for any indirect, incidental, special, consequential, or punitive damages, or any loss of
            profits or revenues, arising out of or related to your use of the Site or any services
            provided by a third-party operator, whether based in contract, tort, or any other legal
            theory.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless {SITE_NAME} and its affiliates from any claims,
            damages, liabilities, and expenses (including reasonable attorneys&rsquo; fees) arising
            out of your use of the Site, your violation of these Terms, or your violation of any
            rights of a third party.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Florida, without regard to its
            conflict of laws principles. Any dispute arising out of or relating to these Terms or the
            Site will be subject to the exclusive jurisdiction of the state and federal courts
            located in Florida.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. When we do, we will revise the &ldquo;Last
            updated&rdquo; date above. Your continued use of the Site after any change constitutes
            acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable, the remaining provisions
            will remain in full force and effect.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact</h2>
          <p>
            For questions about these Terms, contact us at{" "}
            <a href="mailto:legal@junkremovalserviceusa.com" className="text-green-600 hover:underline">
              legal@junkremovalserviceusa.com
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
