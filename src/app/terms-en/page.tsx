import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions - SpartaLog',
  description: 'Terms and conditions for the SpartaLog application.',
}

export default function TermsEnPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800">
          <h1 className="text-3xl font-bold text-[#02cf68] mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none prose-invert">
            <p className="text-sm text-gray-400 mb-6">
              <strong>Last Updated:</strong> August 25, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">1. Parties</h2>
              <p className="text-gray-300 mb-4">
                These Terms and Conditions (&ldquo;Terms&rdquo;) govern the use of the SpartaLog application.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>User:</strong> The person using the SpartaLog application</li>
                <li><strong>Developer:</strong> İbrahim Özcan - The developer and provider of the SpartaLog application</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">2. Terms of Use</h2>
              
              <h3 className="text-xl font-medium text-[#02cf68] mb-3">2.1 Age Requirement</h3>
              <p className="text-gray-300 mb-4">
                You must be at least 13 years old to use the SpartaLog application. Users under 13 years of age 
                may not use the application.
              </p>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">2.2 Usage Conditions</h3>
              <p className="text-gray-300 mb-4">
                When using the application, you must comply with the following conditions:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Use the application for legal purposes</li>
                <li>Respect the rights of others</li>
                <li>Do not compromise the security of the application</li>
                <li>Do not share spam or harmful content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">3. Accounts and Access</h2>
              
              <h3 className="text-xl font-medium text-[#02cf68] mb-3">3.1 Account Creation</h3>
              <p className="text-gray-300 mb-4">
                You must create an account to use the SpartaLog application. When creating an account, 
                you must provide a valid email address.
              </p>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">3.2 Account Security</h3>
              <p className="text-gray-300 mb-4">
                The privacy and security of your account information is your responsibility. You must take 
                necessary measures to ensure the security of your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">4. Pricing and Payments</h2>
              
              <h3 className="text-xl font-medium text-[#02cf68] mb-3">4.1 Application Fee</h3>
              <p className="text-gray-300 mb-4">
                The SpartaLog application offers basic features free of charge. Advertisements are displayed 
                within the application.
              </p>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">4.2 Advertisements</h3>
              <p className="text-gray-300 mb-4">
                Third-party advertisements are displayed within the application. These advertisements may be 
                personalized and shown based on your usage data.
              </p>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">4.3 Refund Policy</h3>
              <p className="text-gray-300 mb-4">
                The refund policy for in-app purchases is subject to the refund policies of Apple App Store 
                and Google Play Store. You can submit refund requests through the relevant platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">5. Prohibited Use</h2>
              <p className="text-gray-300 mb-4">
                The following activities are strictly prohibited:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Attempting to hack the application or exploit security vulnerabilities</li>
                <li>Sharing spam, harmful content, or misleading information</li>
                <li>Violating the rights of others</li>
                <li>Attempting to disrupt the normal operation of the application</li>
                <li>Sharing content that violates copyright laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">6. Content</h2>
              
              <h3 className="text-xl font-medium text-[#02cf68] mb-3">6.1 User Content</h3>
              <p className="text-gray-300 mb-4">
                You can enter your exercise data as text in the application. The accuracy and appropriateness 
                of this content is your responsibility.
              </p>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">6.2 Copyright</h3>
              <p className="text-gray-300 mb-4">
                All content, design, and software of the SpartaLog application are under the copyright of 
                the developer. Copying, modifying, or distributing application content is prohibited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">7. Disclaimer and Limitations</h2>
              
              <h3 className="text-xl font-medium text-[#02cf68] mb-3">7.1 Warranty Disclaimer</h3>
              <p className="text-gray-300 mb-4">
                The SpartaLog application is provided &ldquo;as is&rdquo;. No warranty is given that the 
                application will work without errors. Application interruptions, errors, or data loss may occur.
              </p>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">7.2 Limitation of Liability</h3>
              <p className="text-gray-300 mb-4">
                The developer is not responsible for direct or indirect damages arising from the use of the 
                application. This includes data loss, business interruption, or other material/moral damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">8. Termination</h2>
              <p className="text-gray-300 mb-4">
                You can terminate your account at any time. Additionally, your account may be terminated by 
                the developer in the following cases:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Violation of these terms of use</li>
                <li>Compromising the security of the application</li>
                <li>Violating the rights of other users</li>
                <li>Engaging in behavior contrary to legal regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">9. Governing Law and Jurisdiction</h2>
              <p className="text-gray-300 mb-4">
                These terms of use are subject to the laws of the Republic of Turkey. In case of disputes, 
                Istanbul Courts and Enforcement Offices are authorized.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">10. Changes</h2>
              <p className="text-gray-300 mb-4">
                These terms of use may be updated from time to time. Changes will be posted on this page and 
                the &ldquo;Last Updated&rdquo; date will be modified. We recommend checking this page regularly 
                to stay informed of changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">11. Contact</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these terms of use, please contact us:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <p className="text-gray-300"><strong>Developer:</strong> İbrahim Özcan - The developer and provider of the SpartaLog application</p>
                <p className="text-gray-300"><strong>Email:</strong> ibosnfs1997@gmail.com</p>
                <p className="text-gray-300"><strong>Address:</strong> Bursa, Turkey</p>
              </div>
            </section>

            <div className="border-t border-gray-700 pt-6 mt-8">
              <p className="text-sm text-gray-400 italic">
                These Terms and Conditions apply to the use of the SpartaLog application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
