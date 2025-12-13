import React, { useState } from 'react';
import { Button } from './Button';
import { Clock, Hash, IndianRupee, Users, Gift, Sparkles, ArrowRight, Package } from 'lucide-react';
import { DUMMY_COURSES } from '../data';

const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced'];

// Pricing based on level
const getPricing = (level: string) => {
  switch (level) {
    case 'Beginner':
      return { price: 3999, originalPrice: 5999 };
    case 'Intermediate':
      return { price: 4999, originalPrice: 7999 };
    case 'Advanced':
      return { price: 5999, originalPrice: 9999 };
    default:
      return { price: 4999, originalPrice: 7999 };
  }
};

interface CourseListProps {
  onCourseClick?: (courseId: string) => void;
}

export const CourseList: React.FC<CourseListProps> = ({ onCourseClick }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCourses = activeFilter === 'All'
    ? DUMMY_COURSES
    : DUMMY_COURSES.filter(course => course.level === activeFilter);

  return (
    <div className="bg-stone-50">
      {/* Discount Offers Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Combo Offer */}
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-3">
                  <Package className="w-6 h-6 mr-2" />
                  <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-2 py-1 rounded">Combo Offer</span>
                </div>
                <h3 className="text-xl font-bold mb-2">All-in-One Bundle</h3>
                <p className="text-white/80 text-sm mb-3">Python Basic to Advanced - Complete Journey</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">₹14,999</span>
                  <span className="text-white/60 line-through text-sm">₹29,999</span>
                </div>
              </div>
            </div>

            {/* Refer a Friend */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20">
              <div className="flex items-center mb-3">
                <Gift className="w-6 h-6 mr-2 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Referral Bonus</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Refer a Friend</h3>
              <p className="text-white/70 text-sm mb-3">Share with friends and earn rewards</p>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-emerald-400">15% OFF</span>
                <span className="text-white/60 text-sm ml-2">on your course</span>
              </div>
            </div>

            {/* Join with Friend */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20">
              <div className="flex items-center mb-3">
                <Users className="w-6 h-6 mr-2 text-violet-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-violet-400">Group Discount</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Join with a Friend</h3>
              <p className="text-white/70 text-sm mb-3">Learn together, save together</p>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-violet-400">20% OFF</span>
                <span className="text-white/60 text-sm ml-2">for both of you</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Catalog */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-xs mb-3 block">Academy Catalog</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Curated Learning Paths</h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg font-light">
            Built to turn curiosity into capability through hands-on, career-focused learning that prepares you for real opportunities and real results.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1.5 rounded-xl border border-stone-200 shadow-sm">
            {LEVELS.map((level) => (
              <button
                key={level}
                onClick={() => setActiveFilter(level)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter === level
                    ? 'bg-stone-900 text-white shadow-md'
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const pricing = getPricing(course.level);
            return (
              <div
                key={course.id}
                onClick={() => onCourseClick?.(course.id)}
                className="bg-white rounded-xl overflow-hidden border border-stone-200 hover:border-stone-300 transition-all shadow-sm hover:shadow-2xl hover:shadow-stone-200/50 group flex flex-col h-full transform hover:-translate-y-1 duration-300 cursor-pointer"
              >
                <div className="h-52 overflow-hidden relative">
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors z-10 duration-500"></div>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 saturate-[0.95] group-hover:saturate-100"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 rounded-md shadow-lg backdrop-blur-md text-xs font-bold tracking-wide uppercase border
                      ${course.level === 'Beginner' ? 'bg-emerald-50/90 text-emerald-800 border-emerald-100' :
                        course.level === 'Intermediate' ? 'bg-amber-50/90 text-amber-800 border-amber-100' :
                        'bg-rose-50/90 text-rose-800 border-rose-100'}`}>
                      {course.level}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-stone-400 text-xs font-bold mb-3 uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 mr-1.5" />
                    {course.duration}
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 mb-2 leading-tight group-hover:text-orange-700 transition-colors">{course.title}</h3>
                  <p className="text-stone-500 text-sm mb-4 leading-relaxed flex-grow font-light">{course.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4 pt-4 border-t border-stone-100">
                    {course.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="flex items-center px-2.5 py-1 rounded bg-stone-50 text-xs font-medium text-stone-500 border border-stone-100">
                        <Hash className="w-3 h-3 mr-1 text-stone-300" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4 pt-4 border-t border-stone-100">
                    <div className="flex items-baseline gap-2">
                      <span className="flex items-center text-2xl font-bold text-stone-900">
                        <IndianRupee className="w-5 h-5" />
                        {pricing.price.toLocaleString()}
                      </span>
                      <span className="text-stone-400 line-through text-sm">₹{pricing.originalPrice.toLocaleString()}</span>
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded">
                      {Math.round((1 - pricing.price / pricing.originalPrice) * 100)}% OFF
                    </span>
                  </div>

                  <Button
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      onCourseClick?.(course.id);
                    }}
                    className="w-full group-hover:bg-stone-900 group-hover:text-white group-hover:border-stone-900 transition-all"
                  >
                    View Curriculum
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
