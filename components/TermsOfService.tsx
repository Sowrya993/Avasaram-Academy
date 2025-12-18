import React from 'react';
import { FileText, CheckCircle, XCircle, AlertTriangle, Scale, BookOpen, Mail } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  const lastUpdated = 'December 18, 2025';

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-stone-900 to-stone-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-2xl mb-6">
            <FileText className="w-8 h-8 text-orange-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-stone-300">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">

            {/* Introduction */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <p className="text-stone-700 leading-relaxed">
                Welcome to Avasaram Academy. By accessing or using our website, enrolling in our courses, or using any of our services, you agree to be bound by these Terms of Service. Please read them carefully before using our services. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-stone-900">1. Acceptance of Terms</h2>
              </div>
              <div className="pl-13 space-y-4 text-stone-600">
                <p>By using Avasaram Academy's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. These terms constitute a legally binding agreement between you and Avasaram Academy.</p>
                <p>You must be at least 18 years old or have parental/guardian consent to use our services.</p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-stone-900">2. Services Provided</h2>
              </div>
              <div className="pl-13 space-y-4 text-stone-600">
                <p>Avasaram Academy provides online educational courses and training programs in technology, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Python Programming</li>
                  <li>Data Science and Analytics</li>
                  <li>Machine Learning and Deep Learning</li>
                  <li>Artificial Intelligence</li>
                  <li>Computer Vision and NLP</li>
                  <li>Career guidance and placement support</li>
                </ul>
                <p>We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.</p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-stone-900">3. User Responsibilities</h2>
              </div>
              <div className="pl-13 space-y-4 text-stone-600">
                <p>As a user of our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information during registration</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not share, distribute, or resell course materials without authorization</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Treat instructors, staff, and fellow students with respect</li>
                  <li>Complete assignments and projects honestly without plagiarism</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-stone-900">4. Prohibited Activities</h2>
              </div>
              <div className="pl-13 space-y-4 text-stone-600">
                <p>The following activities are strictly prohibited:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Recording, downloading, or redistributing course content without permission</li>
                  <li>Sharing login credentials with others</li>
                  <li>Using automated tools to access or scrape our content</li>
                  <li>Posting offensive, abusive, or inappropriate content</li>
                  <li>Impersonating others or misrepresenting your identity</li>
                  <li>Engaging in any activity that disrupts or interferes with our services</li>
                  <li>Violating any applicable laws or regulations</li>
                </ul>
                <p className="font-medium text-stone-800">Violation of these rules may result in immediate termination of your account without refund.</p>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-4">5. Intellectual Property Rights</h2>
              <div className="space-y-4 text-stone-600">
                <p>All content on Avasaram Academy, including but not limited to course materials, videos, text, graphics, logos, and software, is the intellectual property of Avasaram Academy or its content providers and is protected by copyright and other intellectual property laws.</p>
                <p>You are granted a limited, non-exclusive, non-transferable license to access and use the course materials for personal, non-commercial educational purposes only. This license does not include the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reproduce, modify, or distribute course content</li>
                  <li>Use content for commercial purposes</li>
                  <li>Create derivative works based on our content</li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-4">6. Payment Terms</h2>
              <div className="space-y-4 text-stone-600">
                <p>By enrolling in a paid course, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pay all applicable fees as stated at the time of enrollment</li>
                  <li>Provide accurate payment information</li>
                  <li>Authorize us to charge your payment method for the agreed amount</li>
                </ul>
                <p>All prices are listed in Indian Rupees (INR) unless otherwise specified. We reserve the right to change prices at any time, but changes will not affect existing enrollments.</p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-4">7. Course Access and Completion</h2>
              <div className="space-y-4 text-stone-600">
                <p>Upon successful enrollment and payment:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You will receive access to course materials as per the course schedule</li>
                  <li>Course access duration will be as specified at the time of enrollment</li>
                  <li>Certificates of completion (if offered) will be issued upon meeting all course requirements</li>
                  <li>We do not guarantee job placement or specific career outcomes</li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-stone-900">8. Disclaimer of Warranties</h2>
              </div>
              <div className="pl-13 space-y-4 text-stone-600">
                <p>Our services are provided "as is" and "as available" without any warranties of any kind, express or implied. We do not guarantee that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Our services will be uninterrupted or error-free</li>
                  <li>Course content will meet your specific requirements</li>
                  <li>Results or outcomes will be achieved from using our services</li>
                </ul>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-4">9. Limitation of Liability</h2>
              <div className="space-y-4 text-stone-600">
                <p>To the maximum extent permitted by law, Avasaram Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.</p>
                <p>Our total liability for any claims arising from these terms or our services shall not exceed the amount you paid for the specific course or service giving rise to the claim.</p>
              </div>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-4">10. Termination</h2>
              <div className="space-y-4 text-stone-600">
                <p>We reserve the right to suspend or terminate your account and access to our services at our sole discretion, without notice, for any reason, including but not limited to violation of these Terms of Service.</p>
                <p>Upon termination, your right to access course materials will cease immediately, and no refunds will be provided.</p>
              </div>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-4">11. Governing Law</h2>
              <p className="text-stone-600">
                These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-4">12. Changes to Terms</h2>
              <p className="text-stone-600">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes your acceptance of the modified terms. We encourage you to review these terms periodically.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-orange-500" />
                <h2 className="text-xl font-bold text-stone-900">13. Contact Information</h2>
              </div>
              <p className="text-stone-600 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
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
