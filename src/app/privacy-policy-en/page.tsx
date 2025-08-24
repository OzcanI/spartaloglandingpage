import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - SpartaLog',
  description: 'Privacy policy and data protection principles of the SpartaLog application.',
}

export default function PrivacyPolicyEnPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800">
          <h1 className="text-3xl font-bold text-[#02cf68] mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none prose-invert">
            <p className="text-sm text-gray-400 mb-6">
              <strong>Last Updated:</strong> August 25, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">1. Introduction</h2>
              <p className="text-gray-300 mb-4">
                At SpartaLog (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;app&rdquo;), we value your privacy and are committed to protecting it. 
                This Privacy Policy explains what information we collect, use, and share when you use the SpartaLog application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">2. Information Collection</h2>
              
              <h3 className="text-xl font-medium text-[#02cf68] mb-3">2.1 Personal Information</h3>
              <p className="text-gray-300 mb-4">
                To use the SpartaLog application, we collect the following information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>Email Address:</strong> For account creation and login purposes</li>
              </ul>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-300 mb-4">
                During app usage, the following information may be automatically collected:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>Usage Data:</strong> In-app purchases, crash reporting</li>
                <li><strong>Analytics Data:</strong> Usage statistics collected through Google Analytics</li>
                <li><strong>Advertising Data:</strong> Data related to ad display and interaction</li>
                <li><strong>Device Information:</strong> Device type, operating system, app version</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">3. Information Usage</h2>
              <p className="text-gray-300 mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Account creation and authentication</li>
                <li>Processing in-app purchases</li>
                <li>Improving app performance and fixing errors</li>
                <li>Analyzing user experience</li>
                <li>Displaying personalized advertisements</li>
                <li>Ensuring app security</li>
                <li>Fulfilling legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">4. Information Sharing</h2>
              <p className="text-gray-300 mb-4">
                We may share your information with third parties in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>Advertising Partners:</strong> For personalized advertisements</li>
                <li><strong>Analytics Providers:</strong> For services like Google Analytics</li>
                <li><strong>Payment Processors:</strong> For in-app purchases</li>
                <li><strong>Legal Requirements:</strong> When required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">5. Third-Party Services and SDKs</h2>
              <p className="text-gray-300 mb-4">
                Our app uses the following third-party services and SDKs:
              </p>
              
              <h3 className="text-xl font-medium text-[#02cf68] mb-3">5.1 Analytics Services</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>Google Analytics:</strong> For usage statistics and performance analysis</li>
                <li><strong>Firebase Analytics:</strong> For app usage data analysis</li>
              </ul>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">5.2 Advertising Services</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>Google AdMob:</strong> For ad display and ad performance analysis</li>
                <li><strong>Facebook Audience Network:</strong> For personalized advertisements</li>
              </ul>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">5.3 Crash Reporting</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>Firebase Crashlytics:</strong> For app error detection and resolution</li>
              </ul>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">5.4 Payment Services</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>Google Play Billing:</strong> For Android in-app purchases</li>
                <li><strong>Apple App Store In-App Purchases:</strong> For iOS in-app purchases</li>
              </ul>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">5.5 Platform Services</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>Google Play Services:</strong> For Android platform integration</li>
                <li><strong>Apple App Store Connect:</strong> For iOS platform integration</li>
              </ul>

              <p className="text-gray-300 mb-4">
                These services have their own privacy policies and may process your data according to their policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">6. Third-Party Privacy Policies</h2>
              <p className="text-gray-300 mb-4">
                You can access the privacy policies of the third-party services we use through the following links:
              </p>
              
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <h4 className="text-lg font-medium text-[#02cf68] mb-3">Google Services:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#02cf68] hover:underline">Google Play Services (Analytics)</a></li>
                  <li>• <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-[#02cf68] hover:underline">Firebase Crashlytics (Crash Reporting)</a></li>
                  <li>• <a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener noreferrer" className="text-[#02cf68] hover:underline">AdMob (Advertising)</a></li>
                  <li>• <a href="https://developer.android.com/google/play/billing" target="_blank" rel="noopener noreferrer" className="text-[#02cf68] hover:underline">Google Play Billing (In-App Purchases)</a></li>
                </ul>
                
                <h4 className="text-lg font-medium text-[#02cf68] mb-3 mt-4">Apple Services:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer" className="text-[#02cf68] hover:underline">Apple Privacy Policy</a></li>
                  <li>• <a href="https://developer.apple.com/app-store/review/guidelines/" target="_blank" rel="noopener noreferrer" className="text-[#02cf68] hover:underline">App Store Review Guidelines</a></li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">7. Data Retention</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>Email Address:</strong> Stored as long as your account is active</li>
                <li><strong>Workout Data:</strong> Workouts you create are stored with your account</li>
                <li><strong>Advertising and Analytics Data:</strong> Stored as general usage statistics</li>
                <li><strong>Crash Reports:</strong> Stored for the time necessary to resolve errors</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">8. User Rights</h2>
              <p className="text-gray-300 mb-4">
                You have the following rights:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Access to your personal data</li>
                <li>Correction of your data</li>
                <li>Deletion of your data</li>
                <li>Objection to data processing</li>
                <li>Data portability</li>
                <li>Opt-out of ad personalization</li>
              </ul>
              <p className="text-gray-300 mb-4">
                You can exercise these rights by contacting us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-gray-300 mb-4">
                SpartaLog is not designed for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If we discover that we have collected information 
                from a child under 13, we will immediately delete such information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">10. Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate security measures to protect your data. However, please note that 
                no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">11. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 mb-4">
                Our app may use cookies and similar tracking technologies to improve your experience.
                These technologies include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Analytics cookies (for usage statistics)</li>
                <li>Advertising cookies (for personalized ads)</li>
                <li>Functional cookies (for app features)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 mb-4">
                We may update this Privacy Policy from time to time. Changes will be posted on this page and 
                the &ldquo;Last Updated&rdquo; date will be modified. We encourage you to check this page regularly for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">13. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <p className="text-gray-300"><strong>Developer:</strong> İbrahim Özcan</p>
                <p className="text-gray-300"><strong>Email:</strong> ibosnfs1997@gmail.com</p>
                <p className="text-gray-300"><strong>Address:</strong> Bursa, Turkey</p>
              </div>
            </section>

            <div className="border-t border-gray-700 pt-6 mt-8">
              <p className="text-sm text-gray-400 italic">
                This Privacy Policy applies to the use of the SpartaLog application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
