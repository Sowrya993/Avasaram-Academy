import React from 'react';
import { Shield, Eye, Database, Lock, Users, Mail, AlertTriangle } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  const lastUpdated = 'December 18, 2025';

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-stone-900 to-stone-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-orange-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-stone-300">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">

            {/* Introduction */}
            <div>
              <p className="text-stone-600 leading-relaxed">
                Avasaram Academy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. By using our services, you consent to the practices described in this policy.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-stone-900">1. Information We Collect</h2>
              </div>
              <div className="pl-13 space-y-4 text-stone-600">
                <p><strong className="text-stone-800">Personal Information:</strong> When you register for our courses or services, we collect personal information including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Educational background</li>
                  <li>Payment information (processed securely through third-party payment processors)</li>
                </ul>
                <p><strong className="text-stone-800">Usage Data:</strong> We automatically collect information about how you interact with our platform, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Course progress and completion data</li>
                  <li>Device information</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-stone-900">2. How We Use Your Information</h2>
              </div>
              <div className="pl-13 space-y-4 text-stone-600">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, operate, and maintain our educational services</li>
                  <li>Process your course enrollments and payments</li>
                  <li>Send you course updates, materials, and important notifications</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our courses and develop new educational content</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-stone-900">3. Information Sharing and Disclosure</h2>
              </div>
              <div className="pl-13 space-y-4 text-stone-600">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our platform (payment processors, email services, hosting providers)</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-stone-900">4. Data Security</h2>
              </div>
              <div className="pl-13 space-y-4 text-stone-600">
                <p>We implement appropriate technical and organizational security measures to protect your personal information, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                </ul>
                <p>However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.</p>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-stone-900">5. Your Rights</h2>
              </div>
              <div className="pl-13 space-y-4 text-stone-600">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations)</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> Request your data in a commonly used format</li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-4">6. Cookies and Tracking Technologies</h2>
              <div className="space-y-4 text-stone-600">
                <p>We use cookies and similar tracking technologies to enhance your experience on our platform. These help us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and login status</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve our services based on user behavior</li>
                </ul>
                <p>You can control cookies through your browser settings. Disabling cookies may affect the functionality of our platform.</p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-4">7. Third-Party Links</h2>
              <p className="text-stone-600">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-4">8. Children's Privacy</h2>
              <p className="text-stone-600">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-4">9. Changes to This Policy</h2>
              <p className="text-stone-600">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after any changes constitutes your acceptance of the updated policy.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-orange-500" />
                <h2 className="text-xl font-bold text-stone-900">10. Contact Us</h2>
              </div>
              <p className="text-stone-600 mb-4">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="space-y-2 text-stone-700">
                <p><strong>Avasaram Academy</strong></p>
                <p>Email: <a href="mailto:avasaramacademy@gmail.com" className="text-orange-600 hover:underline">avasaramacademy@gmail.com</a></p>
                <p>Phone: <a href="tel:+918688545761" className="text-orange-600 hover:underline">+91 8688545761</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
