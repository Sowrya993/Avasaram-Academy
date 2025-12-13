import React from 'react';
import { ViewState } from '../types';
import { BookOpen, MessageSquare, Menu, X, Zap, Compass, Sparkles } from 'lucide-react';
import { Button } from './Button';

interface NavbarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', view: ViewState.HOME, icon: <Zap className="w-4 h-4" /> },
    { label: 'Courses', view: ViewState.COURSES, icon: <BookOpen className="w-4 h-4" /> },
    { label: 'AI Mentor', view: ViewState.TUTOR, icon: <MessageSquare className="w-4 h-4" /> },
    { label: 'Career Support', view: ViewState.CAREER_SUPPORT, icon: <Compass className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-2 px-4 text-center text-sm font-medium">
        <span className="inline-flex items-center">
          <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
          New: AI-Powered Learning Assistant Now Available!
          <button
            onClick={() => onChangeView(ViewState.TUTOR)}
            className="ml-2 underline hover:no-underline font-semibold"
          >
            Try Now
          </button>
        </span>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-stone-200/50'
          : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => onChangeView(ViewState.HOME)}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-shadow">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-stone-900 tracking-tight group-hover:text-orange-600 transition-colors leading-none">
                    AVASARAM
                  </span>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] leading-none mt-1">
                    Academy
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => onChangeView(item.view)}
                  className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    currentView === item.view
                      ? 'bg-stone-900 text-white shadow-lg'
                      : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                >
                  <span className={`mr-2 ${currentView === item.view ? 'text-orange-400' : 'text-stone-400'}`}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              ))}

              {/* CTA Button */}
              <Button
                onClick={() => onChangeView(ViewState.COURSES)}
                className="ml-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0 shadow-lg shadow-orange-500/25"
              >
                Enroll Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-stone-800" />
                ) : (
                  <Menu className="w-6 h-6 text-stone-800" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`lg:hidden absolute w-full bg-white border-t border-stone-100 shadow-xl transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  onChangeView(item.view);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex w-full items-center px-4 py-4 rounded-xl text-base font-medium transition-all ${
                  currentView === item.view
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:bg-stone-50'
                }`}
              >
                <span className={`mr-3 ${currentView === item.view ? 'text-orange-400' : 'text-stone-400'}`}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => {
                onChangeView(ViewState.COURSES);
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0"
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};
