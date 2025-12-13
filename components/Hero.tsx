import React from 'react';
import { Button } from './Button';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onExplore }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
            <span className="flex h-2 w-2 relative mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-white/90 text-sm font-medium tracking-wide">Admissions Open for 2025 Cohort</span>
            <Sparkles className="w-4 h-4 ml-2 text-amber-400" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight animate-fade-in-up">
            <span className="block">Avasaram:</span>
            <span className="block mt-2 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Become the Talent
            </span>
            <span className="block mt-2">Everyone Needs</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-stone-300 mb-10 leading-relaxed max-w-2xl mx-auto font-light animate-fade-in-up animation-delay-200">
            From fundamentals to advanced skills — your growth is our craft.
            Master Python, Data Science, ML & AI with hands-on, career-focused learning.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              onClick={onGetStarted}
              className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0 shadow-2xl shadow-orange-500/25 px-8"
            >
              Start AI Mentorship
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onExplore}
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8"
            >
              <BookOpen className="mr-2 w-5 h-5" />
              Explore Courses
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#fafaf9"/>
        </svg>
      </div>
    </div>
  );
};
