import React, { useState } from 'react';
import { BookOpen, ChevronDown, Award } from 'lucide-react';
import { OFFICIAL_CURRICULUM } from '../data';

export const CurriculumGenerator: React.FC = () => {
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-stone-50">
      
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <div className="inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-stone-200 mb-6">
          <BookOpen className="w-6 h-6 text-orange-500 mr-2" />
          <span className="text-stone-800 font-bold tracking-wide uppercase text-sm">Official Master Syllabus</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 font-serif">
          From Python to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Generative AI</span>
        </h1>
        <p className="text-xl text-stone-500 max-w-3xl mx-auto font-light leading-relaxed">
          The complete roadmap. 9 Modules. 100+ Topics. Zero to Career Ready.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {OFFICIAL_CURRICULUM.map((module, index) => {
            const isOpen = openModuleIndex === index;
            return (
              <div key={module.module} className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                <button 
                  onClick={() => toggleModule(index)}
                  className="w-full flex items-center p-6 text-left focus:outline-none hover:bg-stone-50 transition-colors"
                >
                  {/* Icon Column */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md mr-6 transition-transform duration-300 ${isOpen ? 'scale-110' : ''} ${module.color}`}>
                    {module.icon}
                  </div>

                  {/* Text Column */}
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-1">
                       <span className={`text-xs font-bold uppercase tracking-widest ${isOpen ? 'text-orange-600' : 'text-stone-400'}`}>Module {module.module}</span>
                       <span className={`p-1.5 rounded-full ${isOpen ? 'bg-orange-100 text-orange-600 rotate-180' : 'bg-stone-100 text-stone-400'} transition-all duration-300`}>
                         <ChevronDown className="w-5 h-5" />
                       </span>
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 font-serif mb-1">{module.title}</h3>
                    <p className="text-stone-500 text-sm font-light line-clamp-1">{module.description}</p>
                  </div>
                </button>

                {/* Collapsible Content */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden bg-stone-50/50 ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-8 border-t border-stone-100">
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                      {module.topics.map((topic, i) => (
                        <div key={i} className="flex items-start">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-stone-300 mr-3 flex-shrink-0"></div>
                          <span className="text-stone-700 text-sm leading-relaxed">{topic}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex justify-end">
                       <span className="inline-flex items-center text-xs font-bold text-stone-400 uppercase tracking-widest border border-stone-200 px-3 py-1 rounded-full">
                         <Award className="w-3 h-3 mr-2" />
                         Certificate Module
                       </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-24 text-center">
        <div className="inline-block bg-stone-900 text-white rounded-2xl p-10 md:p-14 shadow-2xl relative overflow-hidden max-w-4xl w-full mx-auto">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="text-left">
               <h3 className="text-3xl font-bold mb-2 font-serif">Ready to start?</h3>
               <p className="text-stone-400">Join the next cohort starting soon.</p>
             </div>
             <button className="px-8 py-3 bg-white text-stone-900 rounded-lg font-bold hover:bg-orange-50 transition-colors shadow-lg">
               Apply Now
             </button>
           </div>
        </div>
      </div>

    </div>
  );
};
