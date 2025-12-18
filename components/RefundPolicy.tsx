import React from 'react';
import { Ban, AlertTriangle, HelpCircle, CheckCircle, Mail, Phone } from 'lucide-react';

export const RefundPolicy: React.FC = () => {
  const lastUpdated = 'December 18, 2025';

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-stone-900 to-stone-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-2xl mb-6">
            <Ban className="w-8 h-8 text-orange-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
          <p className="text-stone-300">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">

            {/* Important Notice */}
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-red-800 mb-2">No Refund Policy</h2>
                  <p className="text-red-700 leading-relaxed">
                    All sales at Avasaram Academy are final. Once a payment is made for any course or service, <strong>no refunds will be provided under any circumstances</strong>. Please read this policy carefully before making a purchase.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-4">1. Policy Statement</h2>
              <div className="space-y-4 text-stone-600">
                <p>
                  Avasaram Academy maintains a strict <strong className="text-stone-900">NO REFUND</strong> policy for all courses, programs, and services. By making a payment, you acknowledge and agree that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All fees paid are non-refundable</li>
                  <li>No partial refunds will be issued for partially completed courses</li>
                  <li>No refunds will be provided for unused course access</li>
                  <li>No refunds will be given regardless of course completion status</li>
                  <li>No refunds for dissatisfaction with course content or teaching methods</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-4">2. Reason for This Policy</h2>
              <div className="space-y-4 text-stone-600">
                <p>Our no refund policy exists because:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Course materials and resources are made available immediately upon enrollment</li>
                  <li>Significant investment is made in course preparation, instructor time, and infrastructure</li>
                  <li>Digital educational content cannot be "returned" once accessed</li>
                  <li>We provide free demo sessions before enrollment for you to evaluate our teaching style</li>
                  <li>Detailed course descriptions and syllabi are available before purchase</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-6 h-6 text-amber-600" />
                <h2 className="text-xl font-bold text-stone-900">3. Before You Enroll</h2>
              </div>
              <div className="space-y-4 text-stone-600">
                <p>We strongly encourage you to take the following steps before making any payment:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Book a Free Demo:</strong> Attend our free demo session to understand our teaching methodology and course structure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Review Course Details:</strong> Carefully read the complete course syllabus, duration, and prerequisites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Ask Questions:</strong> Contact us with any questions or concerns before enrolling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Assess Your Commitment:</strong> Ensure you have the time and dedication to complete the course</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Check Technical Requirements:</strong> Verify you have the necessary hardware and internet connectivity</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-4">4. Situations Where No Refund Applies</h2>
              <div className="space-y-4 text-stone-600">
                <p>Refunds will NOT be provided in the following situations (including but not limited to):</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Change of mind after enrollment</li>
                  <li>Inability to attend classes due to personal reasons</li>
                  <li>Technical issues on the student's end (internet, device problems)</li>
                  <li>Dissatisfaction with course content or instructor</li>
                  <li>Failure to complete the course within the specified duration</li>
                  <li>Duplicate payments (credit will be applied to future courses instead)</li>
                  <li>Change in personal or professional circumstances</li>
                  <li>Finding alternative courses or programs elsewhere</li>
                  <li>Account termination due to violation of terms of service</li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-4">5. Course Transfers</h2>
              <div className="space-y-4 text-stone-600">
                <p>
                  While we do not offer refunds, we may consider course transfers on a case-by-case basis:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Transfer requests must be made within 7 days of enrollment</li>
                  <li>Transfers are only possible to courses of equal or higher value</li>
                  <li>Only one transfer is permitted per enrollment</li>
                  <li>Transfer approval is at the sole discretion of Avasaram Academy</li>
                  <li>A transfer fee may apply</li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-4">6. Exceptional Circumstances</h2>
              <div className="space-y-4 text-stone-600">
                <p>
                  In rare and exceptional circumstances, such as the discontinuation of a course by Avasaram Academy before its commencement, we may offer:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Enrollment in an alternative course of equal value</li>
                  <li>Credit towards future courses</li>
                  <li>Any other remedy at our sole discretion</li>
                </ul>
                <p className="font-medium text-stone-800">
                  Note: This does not apply to courses that have already started or where the student has accessed any course materials.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-4">7. Payment Disputes</h2>
              <div className="space-y-4 text-stone-600">
                <p>
                  If you initiate a chargeback or payment dispute with your bank or payment provider:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your access to all Avasaram Academy services will be immediately suspended</li>
                  <li>We will provide evidence of your agreement to this policy to the payment provider</li>
                  <li>You may be responsible for any fees incurred by us due to the dispute</li>
                  <li>Future enrollment at Avasaram Academy may be denied</li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-4">8. Acknowledgment</h2>
              <div className="bg-stone-100 rounded-xl p-6 text-stone-700">
                <p className="leading-relaxed">
                  By completing your enrollment and payment, you acknowledge that you have read, understood, and agree to this No Refund Policy. You confirm that you have had the opportunity to review course details and ask questions before making your purchase decision.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-orange-500" />
                <h2 className="text-xl font-bold text-stone-900">9. Contact Us</h2>
              </div>
              <p className="text-stone-600 mb-4">
                If you have any questions about this Refund Policy before enrolling, please contact us:
              </p>
              <div className="space-y-3 text-stone-700">
                <p><strong>Avasaram Academy</strong></p>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span>Email: <a href="mailto:avasaramacademy@gmail.com" className="text-orange-600 hover:underline">avasaramacademy@gmail.com</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span>Phone: <a href="tel:+918688545761" className="text-orange-600 hover:underline">+91 8688545761</a></span>
                </div>
              </div>
              <p className="text-stone-500 text-sm mt-4">
                We are happy to answer any questions and provide additional information to help you make an informed decision before enrolling.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
