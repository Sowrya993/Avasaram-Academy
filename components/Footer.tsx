import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
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
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
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
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">A</span>
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
                  className="w-10 h-10 bg-stone-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-stone-400 hover:text-white" />
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
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
