'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ChevronUp } from 'lucide-react';

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
  const router = useRouter();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Navigation handler
  const navigateToSection = useCallback((index: number) => {
    if (index < 0) {
      // Navigate UP from the very first section (Hero) back to SmarLumi™ FC-2100 introduction page
      router.push('/');
      return;
    }
    if (index >= 0 && index < sections.length && index !== currentSectionIndex && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSectionIndex(index);
      
      // Reset transition state after animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration * 1000);
    }
  }, [currentSectionIndex, sections.length, isTransitioning, transitionDuration, router]);

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

  // Touch navigation for mobile swipe up/down
  useEffect(() => {
    let touchStartY = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;
      if (diffY > 60) {
        // Swiped up -> go down to next section
        navigateToSection(currentSectionIndex + 1);
      } else if (diffY < -60) {
        // Swiped down -> go up to previous section (or SmarLumi if at section 0)
        navigateToSection(currentSectionIndex - 1);
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSectionIndex, navigateToSection]);

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
      {/* Up Button when at Section 0 (Hero): Goes back up to SmarLumi™ FC-2100 */}
      {currentSectionIndex === 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-40"
        >
          <button
            onClick={() => router.push('/')}
            aria-label="Go up to SmarLumi™ FC-2100 page"
            title="Go up to SmarLumi™ FC-2100"
            className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white/95 hover:bg-white text-[#133C99] hover:text-[#1646AF] border border-[#133C99]/30 hover:border-[#1646AF] shadow-sm hover:shadow-md transition-all duration-300 text-xs sm:text-sm font-bold tracking-wide cursor-pointer hover:scale-105"
          >
            <ChevronUp size={16} className="transition-transform group-hover:-translate-y-1 text-[#133C99] stroke-[2.5]" />
            <span>SmarLumi™ FC-2100</span>
          </button>
        </motion.div>
      )}

      {/* Navigation Dots on Left */}
      <div className="fixed left-3 sm:left-5 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-3.5 items-center">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => navigateToSection(index)}
              className={`
                w-2.5 h-2.5 rounded-full transition-all duration-300 ease-out cursor-pointer
                ${index === currentSectionIndex 
                  ? 'bg-[#133C99] scale-125 ring-2 ring-[#133C99]/30' 
                  : 'bg-[#BFBFBF] hover:bg-[#133C99] hover:scale-110'
                }
              `}
              aria-label={`Go to ${sections[index].name} section`}
            />
          ))}
        </div>
        
        {/* Section Counter & Label */}
        <div className="mt-3 text-center flex flex-col items-center">
          <span className="text-[11px] font-bold text-[#133C99]">
            {String(currentSectionIndex + 1).padStart(2, '0')}/{String(sections.length).padStart(2, '0')}
          </span>
          <span className="text-[8.5px] font-bold text-[#64748B] tracking-wider uppercase mt-0.5 max-w-[56px] truncate">
            {sections[currentSectionIndex].name}
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
    </div>
  );
};

export default FullPage;