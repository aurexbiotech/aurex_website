'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Building2 } from 'lucide-react';
import DirectionalNavButtons from './DirectionalNavButtons';

const AutobioAboutSection: React.FC = () => {
  const [currentView, setCurrentView] = useState(0);
  const maxViews = 3; // Placeholder for future content views

  // Auto-transition every 5 seconds 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentView((prev) => (prev + 1) % maxViews);
    }, 5000);

    return () => clearInterval(timer);
  }, [maxViews]);

  const handlePrevious = () => {
    setCurrentView((prev) => (prev - 1 + maxViews) % maxViews);
  };

  const handleNext = () => {
    setCurrentView((prev) => (prev + 1) % maxViews);
  };

  // Global office locations for map pins
  // Commented out to fix ESLint warning - can be used for future features
  // const globalOffices = [
  //   { name: 'Chennai, India', x: 78, y: 45, isHeadquarters: true },
  //   { name: 'New York, USA', x: 25, y: 35, isHeadquarters: false },
  //   { name: 'London, UK', x: 52, y: 30, isHeadquarters: false },
  //   { name: 'Singapore', x: 82, y: 55, isHeadquarters: false },
  //   { name: 'Berlin, Germany', x: 55, y: 32, isHeadquarters: false },
  //   { name: 'Tokyo, Japan', x: 88, y: 40, isHeadquarters: false },
  //   { name: 'Sydney, Australia', x: 90, y: 70, isHeadquarters: false },
  //   { name: 'São Paulo, Brazil', x: 32, y: 65, isHeadquarters: false }
  // ];

  // Company statistics
  // Commented out to fix ESLint warning - can be used for future features
  // const companyStats = [
  //   {
  //     number: '10+',
  //     label: 'YEARS R&D EXPERIENCE',
  //     icon: <Award className="w-8 h-8" />,
  //     color: 'text-blue-600'
  //   },
  //   {
  //     number: '150+',
  //     label: 'EMPLOYEES',
  //     icon: <Users className="w-8 h-8" />,
  //     color: 'text-green-600'
  //   },
  //   {
  //     number: '$50M+',
  //     label: 'OPERATING INCOME',
  //     icon: <TrendingUp className="w-8 h-8" />,
  //     color: 'text-purple-600'
  //   },
  //   {
  //     number: '50+',
  //     label: 'COUNTRIES SERVED',
  //     icon: <Globe className="w-8 h-8" />,
  //     color: 'text-cyan-600'
  //   }
  // ];

  // World map dots pattern
  // Commented out to fix ESLint warning - can be used for future features
  // const generateMapDots = () => {
  //   const dots = [];
  //   for (let i = 0; i < 200; i++) {
  //     const x = Math.random() * 100;
  //     const y = Math.random() * 100;
  //     const opacity = Math.random() * 0.4 + 0.1;
  //     dots.push(
  //       <circle
  //         key={i}
  //         cx={`${x}%`}
  //         cy={`${y}%`}
  //         r="1"
  //         fill="#3b82f6"
  //         opacity={opacity}
  //         className="animate-pulse"
  //         style={{ animationDelay: `${Math.random() * 2}s` }}
  //       />
  //     );
  //   }
  //   return dots;
  // };

  return (
    <section className="relative h-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Large Circular Bokeh Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large bokeh circles */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-200/40 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-300/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-10 w-48 h-48 bg-cyan-300/30 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-10 right-1/3 w-72 h-72 bg-blue-100/40 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {/* Content */}
        <div className="w-full max-w-4xl px-16 py-12 flex flex-col justify-center">
          {/* Company Title */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-light text-gray-500 mb-2">About</h2>
            <h1 className="text-6xl font-bold text-blue-600">AUREX</h1>
          </motion.div>

          {/* Company Description */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Founded in 2015, AUREX has emerged as a pioneering force in biotechnology 
              innovation, developing cutting-edge diagnostic solutions that bridge the gap between 
              advanced science and practical healthcare applications.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Our mission is to democratize access to precision diagnostics, enabling healthcare 
              professionals worldwide to deliver faster, more accurate results that improve patient outcomes.
            </p>
          </motion.div>

          {/* Company Location */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <Building2 className="w-6 h-6 text-blue-600" />
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">HEADQUARTERS</p>
              <p className="text-xl font-bold text-gray-900">CHENNAI, INDIA</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60" />
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-40" />
      <div className="absolute top-2/3 left-1/6 w-1 h-1 bg-blue-500 rounded-full animate-pulse opacity-50" />

      {/* Directional Navigation Buttons - Bottom Center */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50">
        <DirectionalNavButtons
          onPrevious={handlePrevious}
          onNext={handleNext}
          disablePrevious={currentView === 0}
          disableNext={currentView === maxViews - 1}
        />
      </div>
    </section>
  );
};

export default AutobioAboutSection;