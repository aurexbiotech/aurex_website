'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FullPageSection {
  id: string;
  name: string;
  component: React.ComponentType;
}

interface FullPageProps {
  sections: FullPageSection[];
  transitionType?: 'fade' | 'slide';
  transitionDuration?: number;
  enableKeyboard?: boolean;
  enableWheel?: boolean;
}

const FullPage: React.FC<FullPageProps> = ({
  sections,
  transitionType = 'fade',
  transitionDuration = 0.8,
  enableKeyboard = true,
  enableWheel = true,
}) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Navigation handler
  const navigateToSection = useCallback((index: number) => {
    if (index >= 0 && index < sections.length && index !== currentSectionIndex && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSectionIndex(index);
      
      // Reset transition state after animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration * 1000);
    }
  }, [currentSectionIndex, sections.length, isTransitioning, transitionDuration]);

  // Keyboard navigation
  useEffect(() => {
    if (!enableKeyboard) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          navigateToSection(currentSectionIndex - 1);
          break;
        case 'ArrowDown':
          event.preventDefault();
          navigateToSection(currentSectionIndex + 1);
          break;
        case 'Home':
          event.preventDefault();
          navigateToSection(0);
          break;
        case 'End':
          event.preventDefault();
          navigateToSection(sections.length - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSectionIndex, navigateToSection, enableKeyboard, sections.length]);

  // Mouse wheel navigation
  useEffect(() => {
    if (!enableWheel) return;

    let wheelTimeout: NodeJS.Timeout;
    
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      
      // Debounce wheel events to prevent rapid scrolling
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (event.deltaY > 0) {
          navigateToSection(currentSectionIndex + 1);
        } else if (event.deltaY < 0) {
          navigateToSection(currentSectionIndex - 1);
        }
      }, 50);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(wheelTimeout);
    };
  }, [currentSectionIndex, navigateToSection, enableWheel]);

  // Animation variants
  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const slideVariants = {
    initial: (direction: number) => ({
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    animate: {
      y: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      y: direction > 0 ? '-100%' : '100%',
      opacity: 0
    })
  };

  const currentVariants = transitionType === 'slide' ? slideVariants : fadeVariants;

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Navigation Dots */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-4">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => navigateToSection(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300 ease-out
                ${index === currentSectionIndex 
                  ? 'bg-[#1646AF] scale-125 shadow-lg shadow-[#1646AF]/50 ring-2 ring-white' 
                  : 'bg-white/60 hover:bg-[#1646AF] hover:scale-110 backdrop-blur-sm border border-white/20'
                }
              `}
              aria-label={`Go to ${sections[index].name} section`}
            />
          ))}
        </div>
        
        {/* Section Counter */}
        <div className="mt-6 text-center">
          <span className="text-sm font-semibold text-white drop-shadow-md">
            {String(currentSectionIndex + 1).padStart(2, '0')}/{String(sections.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Section Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait" custom={currentSectionIndex}>
          <motion.div
            key={currentSectionIndex}
            custom={currentSectionIndex}
            variants={currentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: transitionDuration,
              ease: "easeInOut"
            }}
            className="absolute inset-0 w-full h-full"
          >
            {(() => {
              const CurrentComponent = sections[currentSectionIndex].component;
              return <CurrentComponent />;
            })()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-slate-700/50">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-white">
              {sections[currentSectionIndex].name}
            </span>
            <div className="w-16 h-1 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#1646AF] to-[#133C99] rounded-full transition-all duration-300 ease-out"
                style={{ width: `${((currentSectionIndex + 1) / sections.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FullPage;