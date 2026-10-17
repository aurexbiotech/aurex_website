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

  // Three different hero sub-slides
  const heroSlides = [
    {
      id: 'innovation',
      branding: 'BIOTRA',
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
      title: ['BC-410'],
      titleColors: ['text-white'],
      description: 'Leading the transformation of medical diagnostics with innovative technologies, global expertise, and unwavering commitment to quality.',
      image: '/images/bc120-plus.png',
      imageAlt: 'BC410 - Future Technology',
      link: '/products/biochemistry?model=bc-410'
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
    <section className="relative h-full flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/graphic-illustration-light-blue-wallpaper-template-website-cover-background-design_545033-2371.jpg"
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
          quality={75}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHw/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT3k/VEfEU95P1QbqFhC0Dc8/npRWg+6WwA/dgWDGOSvB2kYwBAomwkjGWd6/5QEBZEZ7n6VQ7D5jW9pWy2rbqBvexKOMdK8M4Qhqy4Q4jvQ=="
        />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10 z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 z-10">
        {/* Animated Sub-Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center px-4 sm:px-6 lg:px-16"
          >
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* BIOTRA Branding - Always Visible */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                className="flex flex-col items-center lg:items-start mb-3 sm:mb-4"
              >
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-aboreto font-extrabold mb-2"
                  style={{ color: '#FFFFFF', fontFamily: 'var(--font-aboreto), cursive', letterSpacing: '2px' }}
                >
                  BIOTRA
                </h1>
              </motion.div>

              {/* Main Title - BC Models with Aboreto Font */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                className="font-bold mb-4 sm:mb-6 leading-tight text-center lg:text-left"
              >
                <span 
                  className={`block font-aboreto`}
                  style={{
                    color: '#333333',
                    letterSpacing: '0.1em',
                    fontWeight: '900',
                    fontFamily: 'var(--font-aboreto), cursive',
                    fontSize: '12px'
                  }}
                >
                  {heroSlides[currentView].title[0]}
                </span>
                {heroSlides[currentView].title[1] && (
                  <span className={`block ${heroSlides[currentView].titleColors[1]}`}>
                    {heroSlides[currentView].title[1]}
                  </span>
                )}
                {heroSlides[currentView].title[2] && (
                  <span className={`block ${heroSlides[currentView].titleColors[2]}`}>
                    {heroSlides[currentView].title[2]}
                  </span>
                )}
              </motion.h2>

              {/* Description Text */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
                className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 text-center lg:text-left max-w-xl mx-auto lg:mx-0 px-2 sm:px-0"
              >
                {heroSlides[currentView].description}
              </motion.p>

              {/* Learn More Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                className="flex justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push(heroSlides[currentView].link)}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-[#1646AF] hover:bg-[#133C99] text-white font-semibold rounded-lg shadow-lg shadow-[#1646AF]/30 hover:shadow-xl transition-all duration-300 cursor-pointer text-sm sm:text-base border border-white/20"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
            {/* Right Content (Image) - Responsive Size */}
            <div className="flex justify-center lg:justify-end items-center lg:pr-8 order-1 lg:order-2">
              <Image
                src={heroSlides[currentView].image}
                alt={heroSlides[currentView].imageAlt}
                width={900}
                height={650}
                className="rounded-xl object-contain w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[900px] transition-transform duration-300 hover:scale-105"
                priority={currentView === 0}
                loading={currentView === 0 ? 'eager' : 'lazy'}
                quality={85}
                sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 900px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHw/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT3k/VEfEU95P1QbqFhC0Dc8/npRWg+6WwA/dgWDGOSvB2kYwBAomwkjGWd6/5QEBZEZ7n6VQ7D5jW9pWy2rbqBvexKOMdK8M4Qhqy4Q4jvQ=="
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1646AF]/20 to-[#133C99]/20 blur-3xl -z-10 scale-110"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Center - Page Indicator and Navigation */}
      <div className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 sm:gap-3">
        {/* Page Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}
          className="text-xs sm:text-sm text-gray-300 font-semibold tracking-wider mb-1"
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
        <div className="flex space-x-2.5 mt-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentView(index)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${index === currentView 
                  ? 'w-8 bg-[#1646AF] shadow-lg shadow-[#1646AF]/50' 
                  : 'w-2 bg-gray-500 hover:bg-gray-400'
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