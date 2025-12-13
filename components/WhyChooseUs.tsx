import React from 'react';
import { Briefcase, Users, IndianRupee, Video } from 'lucide-react';

const features = [
  {
    icon: Briefcase,
    title: 'Job-Oriented',
    description: 'Master Python, DSA & AI designed specifically for career growth and industry demands.',
    iconColor: 'bg-orange-500',
  },
  {
    icon: Users,
    title: 'Expert-Led',
    description: 'Learn from industry pros who have cracked top tech interviews at leading companies.',
    iconColor: 'bg-emerald-500',
  },
  {
    icon: IndianRupee,
    title: 'Affordable',
    description: 'Budget-friendly pricing without compromising on quality. Education for everyone.',
    iconColor: 'bg-amber-500',
  },
  {
    icon: Video,
    title: 'Live & Interactive',
    description: 'Real-time doubt solving, group discussions, mock tests & comprehensive study material.',
    iconColor: 'bg-rose-500',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-xs mb-3 block">Why Choose Avasaram</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Education That <span className="text-orange-500">Transforms</span> Careers
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg font-light">
            We don't just teach code — we build job-ready professionals with hands-on experience and industry mentorship.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-stone-900 p-6 rounded-2xl hover:bg-stone-800 transition-all duration-300"
            >
              <div className={`w-12 h-12 ${feature.iconColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
