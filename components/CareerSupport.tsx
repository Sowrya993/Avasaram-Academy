import React, { useState } from 'react';
import { Button } from './Button';
import {
  GraduationCap,
  FileText,
  CheckCircle2,
  ArrowRight,
  Send,
  Users,
  Target,
  Award,
  Calendar,
  Clock,
  Star,
  Briefcase,
  BookOpen,
  Lightbulb,
  User,
  Phone,
  Mail,
  MessageSquare,
  HelpCircle,
  Building2,
  TrendingUp,
  Rocket
} from 'lucide-react';

export const CareerSupport: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentStatus: '',
    fieldOfInterest: '',
    preferredDate: '',
    preferredTime: '',
    specificQuestions: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailBody = `
New Career Guidance Session Booking

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Current Status: ${formData.currentStatus}
Field of Interest: ${formData.fieldOfInterest}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}

Specific Questions/Goals:
${formData.specificQuestions}

---
Submitted from Avasaram Academy Career Support Page
      `.trim();

      const mailtoLink = `mailto:sreem4419@gmail.com?subject=New Career Guidance Session Booking - ${formData.fullName}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        currentStatus: '',
        fieldOfInterest: '',
        preferredDate: '',
        preferredTime: '',
        specificQuestions: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const careerChallenges = [
    { icon: GraduationCap, title: 'After 10th/12th', description: 'Confused which stream to choose?' },
    { icon: Building2, title: 'College Selection', description: 'Not sure which college or course fits you?' },
    { icon: HelpCircle, title: 'Career Gap', description: 'Took a break and unsure how to restart?' },
    { icon: TrendingUp, title: 'Career Switch', description: 'Want to change your career path?' },
    { icon: Rocket, title: 'Business Planning', description: 'Dreaming of starting your own venture?' },
    { icon: Target, title: 'Job Placement', description: 'Need guidance to land your dream job?' },
  ];

  const benefits = [
    { icon: Target, text: '1-on-1 Personalized Session', highlight: true },
    { icon: Clock, text: '45 Minutes of Expert Guidance', highlight: false },
    { icon: FileText, text: 'Custom Career Roadmap PDF', highlight: true },
    { icon: BookOpen, text: 'Curated Learning Resources', highlight: false },
    { icon: Lightbulb, text: 'Industry-Specific Insights', highlight: true },
    { icon: Users, text: '7-Day Follow-up Support', highlight: false },
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section - Dark with Orange accent */}
      <section className="relative py-16 bg-stone-900 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/20 to-amber-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-orange-600/15 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-orange-400 text-sm font-semibold">Expert Career Counselling</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Career Guidance & <span className="text-orange-500">Counselling</span>
            </h1>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Stuck at a crossroads? We help you find your path.
            </p>
          </div>

          {/* Challenge Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {careerChallenges.map((challenge, index) => (
              <div
                key={index}
                className="group bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-4 text-center hover:bg-stone-800 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/20">
                  <challenge.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{challenge.title}</h3>
                <p className="text-stone-400 text-xs leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div className="text-center mt-10">
            <p className="text-stone-300 text-lg">
              Whatever your challenge, <span className="text-orange-400 font-semibold">we've got you covered.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-stone-100" id="book-session">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Info Panel */}
            <div className="lg:sticky lg:top-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-bold uppercase tracking-wider mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                Book Your Session
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                Start Your Career Transformation Today
              </h2>

              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                Fill out the form to book your personalized career guidance session. Our expert mentors will help you create a clear roadmap to achieve your professional goals.
              </p>

              {/* Pricing Card */}
              <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 text-white mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="text-stone-400 text-sm uppercase tracking-wider mb-2">Session Investment</div>
                  <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-bold text-orange-500">₹399</span>
                    <span className="text-stone-500 ml-2 line-through">₹999</span>
                    <span className="ml-3 bg-orange-500 px-2 py-1 rounded text-xs font-bold text-white">60% OFF</span>
                  </div>
                  <div className="text-stone-400 text-sm">One-time payment • No hidden charges</div>
                </div>
              </div>

              {/* Benefits List */}
              <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-lg">
                <h3 className="font-bold text-stone-900 mb-4 flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mr-2" />
                  What's Included
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {benefits.map((benefit) => (
                    <div key={benefit.text} className={`flex items-center p-3 rounded-xl ${benefit.highlight ? 'bg-orange-50 border border-orange-100' : 'bg-stone-50'}`}>
                      <benefit.icon className={`w-5 h-5 mr-3 flex-shrink-0 ${benefit.highlight ? 'text-orange-500' : 'text-stone-500'}`} />
                      <span className={`text-sm font-medium ${benefit.highlight ? 'text-orange-700' : 'text-stone-600'}`}>{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Booking Form */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-stone-200/50 border border-stone-200 p-8 md:p-10">
              {submitStatus === 'success' ? (
                /* Success State - Show confirmation instead of form */
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-3">Booking Request Sent!</h3>
                  <p className="text-stone-600 mb-6 max-w-md mx-auto">
                    Your email client should have opened. Please send the email to complete your booking. We'll contact you within 24 hours to confirm your session.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                    <p className="text-green-700 text-sm">
                      <strong>Next Steps:</strong> Check your email client and click "Send" to submit your booking request.
                    </p>
                  </div>
                  <Button
                    onClick={() => setSubmitStatus('idle')}
                    variant="outline"
                    className="border-stone-300 text-stone-700 hover:bg-stone-50"
                  >
                    Book Another Session
                  </Button>
                </div>
              ) : (
                /* Form State */
                <>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-orange-500/20">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">Book Your Session</h3>
                  <p className="text-stone-500 text-sm">Fill in your details below</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border-2 border-stone-200 rounded-xl px-4 py-3.5 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all text-stone-900 placeholder-stone-400"
                    required
                  />
                </div>

                {/* Email & Phone Row */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-2 border-stone-200 rounded-xl px-4 py-3.5 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all text-stone-900 placeholder-stone-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-2 border-stone-200 rounded-xl px-4 py-3.5 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all text-stone-900 placeholder-stone-400"
                      required
                    />
                  </div>
                </div>

                {/* Current Status */}
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    <GraduationCap className="w-4 h-4 inline mr-2" />
                    Current Status *
                  </label>
                  <select
                    name="currentStatus"
                    value={formData.currentStatus}
                    onChange={handleChange}
                    className="w-full border-2 border-stone-200 rounded-xl px-4 py-3.5 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all text-stone-900 bg-white"
                    required
                  >
                    <option value="">Select your current status</option>
                    <option value="school">School Student (10th/12th)</option>
                    <option value="undergraduate">Undergraduate Student</option>
                    <option value="postgraduate">Postgraduate Student</option>
                    <option value="fresher">Fresh Graduate</option>
                    <option value="working">Working Professional</option>
                    <option value="career-gap">Career Gap</option>
                    <option value="career-switch">Looking for Career Switch</option>
                    <option value="business">Planning Business/Startup</option>
                  </select>
                </div>

                {/* Field of Interest */}
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    <Briefcase className="w-4 h-4 inline mr-2" />
                    Field of Interest *
                  </label>
                  <select
                    name="fieldOfInterest"
                    value={formData.fieldOfInterest}
                    onChange={handleChange}
                    className="w-full border-2 border-stone-200 rounded-xl px-4 py-3.5 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all text-stone-900 bg-white"
                    required
                  >
                    <option value="">Select your field of interest</option>
                    <option value="software-dev">Software Development</option>
                    <option value="data-science">Data Science & Analytics</option>
                    <option value="machine-learning">Machine Learning & AI</option>
                    <option value="web-dev">Web Development</option>
                    <option value="mobile-dev">Mobile App Development</option>
                    <option value="cloud">Cloud Computing & DevOps</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="product">Product Management</option>
                    <option value="business">Business & Entrepreneurship</option>
                    <option value="not-sure">Not Sure - Need Guidance</option>
                  </select>
                </div>

                {/* Preferred Date & Time */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full border-2 border-stone-200 rounded-xl px-4 py-3.5 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all text-stone-900"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full border-2 border-stone-200 rounded-xl px-4 py-3.5 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all text-stone-900 bg-white"
                      required
                    >
                      <option value="">Select time slot</option>
                      <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                      <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                      <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                      <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                      <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
                      <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
                      <option value="6:00 PM - 7:00 PM">6:00 PM - 7:00 PM</option>
                      <option value="7:00 PM - 8:00 PM">7:00 PM - 8:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Specific Questions */}
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Specific Questions or Goals (Optional)
                  </label>
                  <textarea
                    name="specificQuestions"
                    rows={4}
                    placeholder="Tell us about your career goals, challenges, or specific questions you'd like addressed during the session..."
                    value={formData.specificQuestions}
                    onChange={handleChange}
                    className="w-full border-2 border-stone-200 rounded-xl px-4 py-3.5 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all resize-none text-stone-900 placeholder-stone-400"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0 py-4 text-lg font-semibold shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Book My Session - ₹399
                    </>
                  )}
                </Button>

                <p className="text-center text-stone-500 text-sm mt-4">
                  By submitting, you agree to our terms of service. We'll contact you within 24 hours to confirm your session.
                </p>
              </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-bold uppercase tracking-wider mb-4">
              <Award className="w-4 h-4 mr-2" />
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Students' Achievements
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg">
              Join the community of successful professionals who transformed their careers with our guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'D.Sannihitha', role: 'Placed at TCS Digital', achievement: '300+ Problems Solved', quote: 'The personalized roadmap was exactly what I needed!' },
              { name: 'D.Nikshitha Rani', role: 'Placed at Infosys', achievement: 'Career Transformation', quote: 'The detailed career strategy helped me crack the interview!', featured: true },
              { name: 'A.Vijay', role: 'Placed at Arka Aerospace', achievement: '5 Star HackerRank', quote: 'Best investment in my career growth journey.' },
            ].map((story) => (
              <div
                key={story.name}
                className={`bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-8 text-center hover:bg-stone-800 hover:border-orange-500/30 transition-all ${story.featured ? 'md:-translate-y-4 ring-2 ring-orange-500/50' : ''}`}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-orange-500/20">
                  {story.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold text-xl text-white mb-1">{story.name}</h3>
                <p className="text-stone-400 text-sm mb-4">{story.role}</p>
                <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full text-xs font-bold mb-4">
                  {story.achievement}
                </span>
                <p className="text-stone-300 italic">"{story.quote}"</p>
                <div className="flex justify-center mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-orange-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Don't let confusion hold you back. Get expert guidance and start your journey to success today.
          </p>
          <a
            href="#book-session"
            className="inline-flex items-center px-8 py-4 bg-stone-900 text-white font-bold rounded-xl shadow-xl hover:bg-stone-800 transition-all hover:-translate-y-1"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Session Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};
