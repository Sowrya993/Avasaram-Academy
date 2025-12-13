import React, { useState, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CourseList } from './components/CourseList';
import { Footer } from './components/Footer';
import { ViewState } from './types';
import { DUMMY_COURSES } from './data';

// Lazy load heavy components for code-splitting
const AITutor = lazy(() => import('./components/AITutor').then(m => ({ default: m.AITutor })));
const CourseDetails = lazy(() => import('./components/CourseDetails').then(m => ({ default: m.CourseDetails })));
const CareerSupport = lazy(() => import('./components/CareerSupport').then(m => ({ default: m.CareerSupport })));

// Loading fallback component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[400px] bg-stone-50">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 relative">
        <div className="absolute inset-0 rounded-full border-4 border-stone-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-orange-500 border-t-transparent animate-spin"></div>
      </div>
      <p className="mt-4 text-stone-500 font-medium">Loading...</p>
    </div>
  </div>
);

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const handleCourseClick = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentView(ViewState.COURSE_DETAILS);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewChange = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return (
          <>
            <Hero
              onGetStarted={() => handleViewChange(ViewState.TUTOR)}
              onExplore={() => handleViewChange(ViewState.COURSES)}
            />
            <WhyChooseUs />
          </>
        );
      case ViewState.COURSES:
        return <CourseList onCourseClick={handleCourseClick} />;
      case ViewState.COURSE_DETAILS:
        const selectedCourse = DUMMY_COURSES.find(c => c.id === selectedCourseId);
        if (!selectedCourse) return <CourseList onCourseClick={handleCourseClick} />;
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <CourseDetails
              course={selectedCourse}
              onBack={() => handleViewChange(ViewState.COURSES)}
            />
          </Suspense>
        );
      case ViewState.TUTOR:
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <AITutor />
          </Suspense>
        );
      case ViewState.CAREER_SUPPORT:
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <CareerSupport />
          </Suspense>
        );
      default:
        return (
          <Hero
            onGetStarted={() => handleViewChange(ViewState.TUTOR)}
            onExplore={() => handleViewChange(ViewState.COURSES)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-800 font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navbar currentView={currentView} onChangeView={handleViewChange} />

      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer />
    </div>
  );
}

export default App;
