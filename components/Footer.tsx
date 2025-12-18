import React from 'react';
import { Github, Linkedin, Instagram, Phone, Mail, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { ViewState } from '../types';

interface FooterProps {
  onChangeView?: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ onChangeView }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Courses', href: '#' },
    { label: 'AI Mentor', href: '#' },
    { label: 'Career Support', href: '#' },
  ];

  const courses = [
    { label: 'Python Foundation', href: '#' },
    { label: 'Data Science', href: '#' },
    { label: 'Machine Learning', href: '#' },
    { label: 'Deep Learning', href: '#' },
    { label: 'Computer Vision', href: '#' },
    { label: 'NLP & GenAI', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/avasaram-academy/', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-stone-900 text-stone-300 mt-auto">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 mr-3 rounded-xl overflow-hidden">
                <img
                  src="/logo-bg.png"
                  alt="Avasaram Academy Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white block leading-none">AVASARAM</span>
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.2em]">Academy</span>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Empowering the next generation of engineers with hands-on, career-focused tech education.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stone-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-stone-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-orange-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.label}>
                  <a
                    href={course.href}
                    className="text-stone-400 hover:text-orange-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    {course.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium block">Phone</span>
                  <a href="tel:+918688545761" className="text-stone-400 hover:text-orange-400 transition-colors">
                    +91 8688545761
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium block">Email</span>
                  <a href="mailto:avasaramacademy@gmail.com" className="text-stone-400 hover:text-orange-400 transition-colors">
                    avasaramacademy@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium block">Location</span>
                  <span className="text-stone-400">India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">
              &copy; {currentYear} Avasaram Academy. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-stone-500">
              <button
                onClick={() => onChangeView?.(ViewState.PRIVACY_POLICY)}
                className="hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => onChangeView?.(ViewState.TERMS_OF_SERVICE)}
                className="hover:text-orange-400 transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => onChangeView?.(ViewState.REFUND_POLICY)}
                className="hover:text-orange-400 transition-colors"
              >
                Refund Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918688545761"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-7 h-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  );
};
