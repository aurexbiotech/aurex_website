'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RoyalProductsSection from './RoyalProductsSection';
import AutobioSolutionsSection from './AutobioSolutionsSection';
import TurnkeyProjectsSlide from './TurnkeyProjectsSlide';
import AutobioAboutSection from './AutobioAboutSection';
import AutobioNewsSection from './AutobioNewsSection';
import AutobioFooter from '@/app/components/AutobioFooter';
import DirectionalNavButtons from './DirectionalNavButtons';
import HorizontalCarouselSlide from './HorizontalCarouselSlide';
import CompanySection from './CompanySection';

// Hero Section Component with 3 Sub-Slides
export const HeroSection: React.FC = () => {
  const router = useRouter();
  const [currentView, setCurrentView] = useState(0);

  // Four different hero sub-slides
  const heroSlides = [
    {
      id: 'innovation',
      branding: 'BIOTRA',
      eyebrow: 'Diagnostic Automation',
      title: ['BC-310'],
      titleColors: ['text-white'],
      description: 'Revolutionizing healthcare through cutting-edge biotechnology solutions that deliver precision, efficiency, and breakthrough results.',
      image: '/images/biotra-device.png',
      imageAlt: 'Biotra BC 310 - Advanced Diagnostic System',
      link: '/products/biochemistry?model=bc-310'
    },
    {
      id: 'precision',
      branding: 'BIOTRA',
      eyebrow: 'Diagnostic Automation',
      title: ['BC-15'],
      titleColors: ['text-white'],
      description: 'Delivering up to 150 tests per hour, the BC15 offers high-precision results and unmatched operational efficiency. Compact, intuitive, and highly reliable - it\'s the smart solution for modern clinical diagnostics.',
      image: '/images/bc-15.png',
      imageAlt: 'BC-15 - Precision Diagnostics',
      link: '/products/biochemistry?model=bc-15'
    },
    {
      id: 'future',
      branding: 'BIOTRA',
      eyebrow: 'Diagnostic Automation',
      title: ['BC-410'],
      titleColors: ['text-white'],
      description: 'Leading the transformation of medical diagnostics with innovative technologies, global expertise, and unwavering commitment to quality.',
      image: '/images/bc120-plus.png',
      imageAlt: 'BC410 - Future Technology',
      link: '/products/biochemistry?model=bc-410'
    },
    {
      id: 'smarlumi',
      branding: 'SmarLumi™',
      eyebrow: 'Chemiluminescence Immunoassay',
      title: ['FC-2100'],
      titleColors: ['text-white'],
      description: 'Fully automated benchtop chemiluminescence immunoassay analyzer delivering magnetic bead precision, rapid test turnaround, and streamlined laboratory automation.',
      image: '/images/smarlumi-fc-2100.png',
      imageAlt: 'SmarLumi™ FC-2100 - Automated Chemiluminescence Immunoassay Analyzer',
      link: '/'
    }
  ];

  // Auto-transition every 6 seconds (slightly longer for better UX)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentView((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, [heroSlides.length]);

  const handlePrevious = () => {
    setCurrentView((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentView((prev) => Math.min(heroSlides.length - 1, prev + 1));
  };

  return (
    <section className="relative h-full flex items-center justify-center overflow-hidden bg-[#F6F8FB]">
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10 py-16 lg:py-0">
        {/* Animated Sub-Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Content Column (~48% width) */}
            <div className="lg:col-span-6 text-center lg:text-left order-2 lg:order-1 space-y-4 sm:space-y-5">
              {/* Category Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex justify-center lg:justify-start"
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 border border-[#BFBFBF]/40 text-xs font-semibold uppercase tracking-wider text-[#1646AF] shadow-xs">
                  {heroSlides[currentView].eyebrow || 'Diagnostic Automation'}
                </span>
              </motion.div>

              {/* BIOTRA Product Heading - Reduced font size with clamp */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
              >
                <h1
                  className="font-extrabold tracking-tight text-[#111827] leading-tight"
                  style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)' }}
                >
                  {heroSlides[currentView].branding}
                </h1>
              </motion.div>

              {/* Product Model */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              >
                <span className="text-xl sm:text-2xl font-bold text-[#1646AF] tracking-wide block">
                  {heroSlides[currentView].title[0]}
                </span>
              </motion.div>

              {/* Description Text */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
                className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                {heroSlides[currentView].description}
              </motion.p>

              {/* Learn More Button - AUREX Royal Blue with White Text */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                className="flex justify-center lg:justify-start pt-2"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push(heroSlides[currentView].link)}
                  className="px-8 py-3.5 bg-[#1646AF] hover:bg-[#133C99] text-white font-medium rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer text-base"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>

            {/* Right Product Column (~52% width) - Seamless display without artificial card */}
            <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2">
              <div className="relative w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[620px] flex items-center justify-center">
                <Image
                  src={heroSlides[currentView].image}
                  alt={heroSlides[currentView].imageAlt}
                  width={720}
                  height={540}
                  className="object-contain max-h-[340px] sm:max-h-[420px] lg:max-h-[480px] w-auto h-auto transition-transform duration-300 hover:scale-102"
                  priority={currentView === 0}
                  loading={currentView === 0 ? 'eager' : 'lazy'}
                  quality={85}
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 480px, 620px"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Center - Slide Indicator and Navigation */}
      <div className="absolute bottom-6 sm:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        {/* Page Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}
          className="text-xs text-[#64748B] font-semibold tracking-wider"
        >
          {currentView + 1} / {heroSlides.length}
        </motion.div>

        {/* Directional Navigation Buttons */}
        <DirectionalNavButtons
          onPrevious={handlePrevious}
          onNext={handleNext}
          disablePrevious={currentView === 0}
          disableNext={currentView === heroSlides.length - 1}
        />

        {/* Progress Dots */}
        <div className="flex space-x-2 mt-1">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentView(index)}
              className={`
                h-2 rounded-full transition-all duration-300 cursor-pointer
                ${index === currentView 
                  ? 'w-7 bg-[#133C99]' 
                  : 'w-2 bg-[#BFBFBF] hover:bg-[#133C99]/60'
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Products Section Component - Royal Business Style
export const ProductsSection: React.FC = () => {
  return <RoyalProductsSection />;
};

// Turnkey Projects Section Component - Royal Business Style (Company Profile Clone)
export const TurnkeyProjectsSection: React.FC = () => {
  return <TurnkeyProjectsSlide />;
};

// Solutions Section Component - Autobio Style
export const SolutionsSection: React.FC = () => {
  return <AutobioSolutionsSection />;
};

// About Section Component - Autobio Style
export const AboutSection: React.FC = () => {
  return <AutobioAboutSection />;
};

// Horizontal Carousel Section - Royal Business Style
export const CarouselSection: React.FC = () => {
  return <HorizontalCarouselSlide />;
};

// Company Overview Section - Royal Business Style (Autobio-inspired)
export const CompanyOverviewSection: React.FC = () => {
  return <CompanySection />;
};

// News Section Component - Autobio Style
export const NewsSection: React.FC = () => {
  return <AutobioNewsSection />;
};

// Footer Section Component - Autobio Style
export const FooterSection: React.FC = () => {
  return <AutobioFooter />;
};