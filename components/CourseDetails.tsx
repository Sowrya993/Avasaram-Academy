import React, { useState } from 'react';
import { Course } from '../types';
import { Button } from './Button';
import { ArrowLeft, Clock, CheckCircle2, BookOpen, PlayCircle, Hash, ChevronDown, Award, Zap, Users, Globe, CalendarDays, Code, Briefcase, FileText, Github, IndianRupee } from 'lucide-react';
import { OFFICIAL_CURRICULUM } from '../data';

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

interface CourseDetailsProps {
  course: Course;
  onBack: () => void;
}

export const CourseDetails: React.FC<CourseDetailsProps> = ({ course, onBack }) => {
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);

  const pricing = getPricing(course.level);

  const handleEnroll = () => {
    alert(`Thank you for your interest in ${course.title}! Please contact us at +91 8688545761 to finalize your enrollment.`);
  };

  // Check if course has detailed syllabus override, otherwise fallback to official curriculum modules
  const hasDetailedSyllabus = course.detailedSyllabus && course.detailedSyllabus.length > 0;
  const courseModules = OFFICIAL_CURRICULUM.filter(module => course.modules.includes(module.module));

  // Total modules count (either detailed weeks or official modules)
  const moduleCount = hasDetailedSyllabus ? course.detailedSyllabus!.length : courseModules.length;
  const moduleLabel = hasDetailedSyllabus ? "Weeks" : "Modules";

  const toggleModule = (index: number) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  const learningOutcomes = [
    "Master core theoretical concepts and practical applications",
    "Build industry-grade projects for your portfolio",
    "Debug complex systems and optimize performance",
    "Collaborate using modern version control workflows"
  ];

  return (
    <div className="animate-fade-in bg-stone-50 min-h-screen pb-20">
      {/* Navigation Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-stone-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
           <button
             onClick={onBack}
             className="flex items-center text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors group"
           >
             <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center mr-2 group-hover:bg-stone-200 transition-colors">
                <ArrowLeft className="w-4 h-4" />
             </div>
             Back to Catalog
           </button>
           <span className="text-sm font-bold text-stone-900 hidden md:block">{course.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-stone-900 text-white overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border
                  ${course.level === 'Beginner' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
                    course.level === 'Intermediate' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                    'bg-rose-500/20 text-rose-300 border-rose-500/30'}`}>
                  {course.level}
                </span>
                <span className="flex items-center text-stone-300 text-sm font-medium bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  <Clock className="w-3.5 h-3.5 mr-2" />
                  {course.duration}
                </span>
                <span className="flex items-center text-stone-300 text-sm font-medium bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  <Globe className="w-3.5 h-3.5 mr-2" />
                  Online / Hybrid
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                {course.title}
              </h1>
              <p className="text-lg md:text-xl text-stone-300 mb-8 font-light max-w-2xl leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {course.tags.map(tag => (
                  <span key={tag} className="flex items-center px-3 py-1 rounded bg-white/10 hover:bg-white/20 transition-colors border border-white/10 text-xs font-medium text-stone-200">
                    <Hash className="w-3 h-3 mr-1.5 opacity-50" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero Price Card */}
            <div className="hidden lg:block w-80">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-stone-400 text-sm mb-1">Course Fee</div>
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-stone-400 line-through text-lg">₹{pricing.originalPrice.toLocaleString()}</span>
                    <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2 py-1 rounded">
                      {Math.round((1 - pricing.price / pricing.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                  <div className="flex items-center justify-center text-4xl font-bold text-white">
                    <IndianRupee className="w-8 h-8" />
                    {pricing.price.toLocaleString()}
                  </div>
                  <div className="text-stone-400 text-xs mt-2">One-time payment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Main Content Area */}
          <div className="lg:w-2/3 space-y-12">

            {/* What you'll learn */}
            <section className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center">
                 <Zap className="w-6 h-6 mr-3 text-orange-500 fill-orange-50" />
                 What You'll Achieve
              </h2>
              <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                 {learningOutcomes.map((item, idx) => (
                   <div key={idx} className="flex items-start">
                     <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                     <span className="text-stone-700 leading-relaxed font-light">{item}</span>
                   </div>
                 ))}
              </div>
            </section>

            {/* Curriculum Accordion */}
            <section>
              <div className="flex items-center justify-between mb-8">
                 <h2 className="text-2xl font-bold text-stone-900 flex items-center">
                   <BookOpen className="w-6 h-6 mr-3 text-orange-500" />
                   End-to-End Curriculum
                 </h2>
                 <span className="text-sm font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                   {moduleCount} {moduleLabel}
                 </span>
              </div>

              <div className="space-y-4">
                {/*
                  Render Detailed Syllabus if available (for Python & ML courses),
                  otherwise fallback to standard module rendering
                */}
                {hasDetailedSyllabus ? (
                  course.detailedSyllabus!.map((week, idx) => {
                    const isOpen = openModuleIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                          isOpen ? 'border-orange-200 shadow-lg shadow-orange-100/50 ring-1 ring-orange-100' : 'border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <button
                          onClick={() => toggleModule(idx)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50/50 transition-colors focus:outline-none"
                        >
                          <div className="flex items-center gap-4 md:gap-6">
                             <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm flex-shrink-0 transition-transform duration-300 ${isOpen ? 'scale-110' : ''} bg-blue-600`}>
                               <CalendarDays className="w-6 h-6 text-white" />
                             </div>
                             <div>
                                <h3 className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-stone-900' : 'text-stone-700'}`}>
                                  {week.title}
                                </h3>
                                <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mt-1">{week.days.length} Days</div>
                             </div>
                          </div>
                          <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-orange-100 text-orange-600 rotate-180' : 'bg-stone-100 text-stone-400'}`}>
                            <ChevronDown className="w-5 h-5" />
                          </div>
                        </button>

                        {/* Detailed Week Content */}
                        <div
                          className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            isOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6 pt-0 border-t border-dashed border-stone-200 bg-stone-50/30">
                            <div className="space-y-3 pt-4">
                              {week.days.map((dayItem, i) => (
                                <div key={i} className="flex items-start bg-white p-3 rounded-lg border border-stone-100 hover:border-orange-200 transition-colors">
                                  <div className="text-xs font-bold bg-stone-900 text-white px-2 py-1 rounded mr-3 flex-shrink-0 min-w-[50px] text-center">
                                    {dayItem.day}
                                  </div>
                                  <span className="text-sm text-stone-700 font-medium leading-relaxed">
                                    {dayItem.topic}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  // Fallback to Standard Module Rendering for other courses
                  courseModules.map((module, idx) => {
                    const isOpen = openModuleIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                          isOpen ? 'border-orange-200 shadow-lg shadow-orange-100/50 ring-1 ring-orange-100' : 'border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <button
                          onClick={() => toggleModule(idx)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50/50 transition-colors focus:outline-none"
                        >
                          <div className="flex items-center gap-4 md:gap-6">
                             <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm flex-shrink-0 transition-transform duration-300 ${isOpen ? 'scale-110' : ''} ${module.color}`}>
                               {module.icon}
                             </div>
                             <div>
                                <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Module {module.module}</div>
                                <h3 className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-stone-900' : 'text-stone-700'}`}>
                                  {module.title}
                                </h3>
                             </div>
                          </div>
                          <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-orange-100 text-orange-600 rotate-180' : 'bg-stone-100 text-stone-400'}`}>
                            <ChevronDown className="w-5 h-5" />
                          </div>
                        </button>

                        <div
                          className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            isOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6 pt-0 border-t border-dashed border-stone-200 bg-stone-50/30">
                            <p className="py-4 text-stone-600 italic border-b border-stone-100 mb-4 text-sm leading-relaxed">
                              {module.description}
                            </p>

                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                              {module.topics.map((topic, i) => (
                                <div key={i} className="flex items-start group">
                                  <div className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-orange-300 group-hover:bg-orange-500 transition-colors flex-shrink-0"></div>
                                  <span className="text-sm text-stone-700 leading-relaxed group-hover:text-stone-900 transition-colors">
                                    {topic}
                                  </span>
                                </div>
                              ))}
                            </div>

                            <div className="mt-6 inline-flex items-center px-3 py-1.5 rounded-lg bg-orange-50 border border-orange-100">
                               <Award className="w-4 h-4 text-orange-500 mr-2" />
                               <span className="text-xs font-bold text-orange-700 uppercase tracking-wide">Includes Capstone Project & Hands-on Labs</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </section>

             {/* Projects Section - Renders if projectSections exist */}
            {course.projectSections && course.projectSections.length > 0 && (
              <section className="mt-12 animate-fade-in-up">
                <h2 className="text-2xl font-bold text-stone-900 flex items-center mb-8">
                   <Code className="w-6 h-6 mr-3 text-orange-500" />
                   Hands-on Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {course.projectSections.map((section, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                       <h3 className="text-lg font-bold text-stone-900 mb-6 flex items-center border-b border-stone-100 pb-4">
                         <span className="w-1.5 h-6 bg-orange-500 rounded-full mr-3"></span>
                         {section.title}
                       </h3>
                       <div className="space-y-4">
                         {section.projects.map((project, pIdx) => (
                           <div key={pIdx} className="bg-stone-50 rounded-xl p-4 border border-stone-100 hover:border-orange-200 transition-colors group">
                             <div className="font-bold text-stone-800 text-sm mb-2 group-hover:text-orange-700 transition-colors">{project.title}</div>
                             <div className="flex items-start gap-2">
                               <div className="mt-1 w-1 h-1 rounded-full bg-stone-400"></div>
                               <div className="text-xs text-stone-500 font-medium leading-snug">Skills: {project.skills}</div>
                             </div>
                           </div>
                         ))}
                       </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Sticky Sidebar */}
          <div className="lg:w-1/3 relative">
            <div className="sticky top-24 space-y-6">

              {/* Enrollment Card */}
              <div className="bg-white rounded-2xl shadow-xl shadow-stone-200 border border-stone-200 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-orange-500 to-rose-500"></div>
                <div className="p-6">
                  <div className="flex items-end justify-between mb-6">
                     <div>
                       <span className="text-stone-500 text-sm font-medium line-through">₹{pricing.originalPrice.toLocaleString()}</span>
                       <div className="flex items-center text-3xl font-bold text-stone-900">
                         <IndianRupee className="w-7 h-7" />
                         {pricing.price.toLocaleString()}
                       </div>
                     </div>
                     <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold">
                       {Math.round((1 - pricing.price / pricing.originalPrice) * 100)}% OFF
                     </span>
                  </div>

                  <Button size="lg" className="w-full mb-4 bg-stone-900 hover:bg-stone-800 shadow-lg shadow-stone-900/20" onClick={handleEnroll}>
                    Enroll Now
                  </Button>

                  {hasDetailedSyllabus && (
                     <Button variant="outline" className="w-full mb-4 flex items-center justify-center gap-2 text-stone-600 hover:text-stone-900 hover:bg-stone-50">
                        <FileText className="w-4 h-4" />
                        Download Syllabus PDF
                     </Button>
                  )}

                  <p className="text-xs text-center text-stone-400 mb-6">30-Day Money-Back Guarantee</p>

                  <div className="space-y-4 border-t border-stone-100 pt-6">
                    <div className="flex items-center text-sm text-stone-700">
                      <PlayCircle className="w-5 h-5 mr-3 text-stone-400" />
                      <span>100+ Hours of Live Classes</span>
                    </div>
                    <div className="flex items-center text-sm text-stone-700">
                      <Users className="w-5 h-5 mr-3 text-stone-400" />
                      <span>1-on-1 Mentorship</span>
                    </div>
                    <div className="flex items-center text-sm text-stone-700">
                      <Globe className="w-5 h-5 mr-3 text-stone-400" />
                      <span>Lifetime Access</span>
                    </div>
                    <div className="flex items-center text-sm text-stone-700">
                      <BookOpen className="w-5 h-5 mr-3 text-stone-400" />
                      <span>Comprehensive Notes & Material</span>
                    </div>
                    <div className="flex items-center text-sm text-stone-700">
                      <Briefcase className="w-5 h-5 mr-3 text-stone-400" />
                      <span>Interview Prep (Mock + HR)</span>
                    </div>
                    <div className="flex items-center text-sm text-stone-700">
                      <Github className="w-5 h-5 mr-3 text-stone-400" />
                      <span>LinkedIn & GitHub Optimization</span>
                    </div>
                  </div>
                </div>
                <div className="bg-stone-50 p-4 border-t border-stone-200 text-center">
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-1">Upcoming Batch: Jan 15th</span>
                  <span className="text-xs font-medium text-stone-400 flex items-center justify-center">
                    Questions? Call <span className="text-stone-700 font-bold ml-1">+91 8688545761</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
