'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DirectionalNavButtons from './DirectionalNavButtons'
import { 
  Globe,
  MapPin
} from 'lucide-react'

/**
 * Horizontal Content Carousel Component - Royal Business Style
 * 
 * A full-screen slide with 3 internal sub-slides for horizontal navigation
 * Features:
 * - Deep Navy Blue gradient background
 * - Smooth horizontal transitions between 3 pages
 * - Bottom-center navigation with directional buttons
 * - High-contrast white text on dark background
 * - Royal Business aesthetic
 */
const HorizontalCarouselSlide: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0)

  // Single sub-slide page
  const pages = [
    {
      id: 'global',
      title: 'Global Network & Support',
      subtitle: 'Worldwide Presence & Service',
      content: 'With operations spanning six continents, AUREX provides comprehensive support to healthcare facilities globally. Our network ensures rapid deployment, local expertise, and 24/7 technical assistance wherever you need us.',
      icon: Globe,
      stats: [
        { label: 'Countries Served', value: '120+' },
        { label: 'Service Centers', value: '85' },
        { label: 'Support Hours', value: '24/7' }
      ]
    }
  ]

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(pages.length - 1, prev + 1))
  }

  // Global office locations for the map
  const globalLocations = [
    { name: 'North America', x: 20, y: 35, pulse: true },
    { name: 'Europe', x: 50, y: 30, pulse: false },
    { name: 'Asia Pacific', x: 75, y: 45, pulse: true },
    { name: 'Latin America', x: 30, y: 60, pulse: false },
    { name: 'Middle East', x: 55, y: 45, pulse: false },
    { name: 'Africa', x: 52, y: 55, pulse: false }
  ]

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Immersive Deep Navy Blue Background */}
      <div className="absolute inset-0">
        {/* Deep Navy Blue Royal Business Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800" />
        
        {/* Subtle Biotech Background Image (blurred) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 blur-sm"
          style={{
            backgroundImage: `url('/images/diagnostic_lab.png')`
          }}
        />
        
        {/* Premium overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-transparent to-blue-900/30" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-screen flex items-center justify-center px-8 py-16">
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Animated Page Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                {/* Page Icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1646AF] to-[#133C99] rounded-2xl shadow-2xl border border-white/20"
                >
                  {React.createElement(pages[currentPage].icon, {
                    size: 40,
                    className: 'text-white'
                  })}
                </motion.div>

                {/* Headline - Serif Font, Silver/White */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h1 
                    className="text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-4 leading-tight"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {pages[currentPage].title}
                  </h1>
                  {pages[currentPage].subtitle && (
                    <p className="text-2xl text-gray-300 font-semibold">
                      {pages[currentPage].subtitle}
                    </p>
                  )}
                </motion.div>

                {/* Content Text */}
                {pages[currentPage].content && (
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl"
                  >
                    {pages[currentPage].content}
                  </motion.p>
                )}

                {/* Statistics */}
                {pages[currentPage].stats.length > 0 && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-3 gap-6 pt-8"
                  >
                    {pages[currentPage].stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-400 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Right Column - Visual Content */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative h-[500px] flex items-center justify-center"
              >
                {/* Page 1 - World Map */}
                {currentPage === 0 && (
                  <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl overflow-hidden p-8">
                    {/* Stylized World Map */}
                    <div className="relative w-full h-full">
                      {/* Map Grid Background */}
                      <div className="absolute inset-0 opacity-20">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          {/* Horizontal lines */}
                          {[...Array(10)].map((_, i) => (
                            <line
                              key={`h-${i}`}
                              x1="0"
                              y1={i * 10}
                              x2="100"
                              y2={i * 10}
                              stroke="currentColor"
                              strokeWidth="0.1"
                              className="text-cyan-400"
                            />
                          ))}
                          {/* Vertical lines */}
                          {[...Array(10)].map((_, i) => (
                            <line
                              key={`v-${i}`}
                              x1={i * 10}
                              y1="0"
                              x2={i * 10}
                              y2="100"
                              stroke="currentColor"
                              strokeWidth="0.1"
                              className="text-cyan-400"
                            />
                          ))}
                        </svg>
                      </div>

                      {/* Location Markers */}
                      {globalLocations.map((location, index) => (
                        <motion.div
                          key={location.name}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="absolute"
                          style={{ left: `${location.x}%`, top: `${location.y}%` }}
                        >
                          {/* Pulsing marker */}
                          {location.pulse && (
                            <motion.div
                              animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute -inset-3 bg-[#1646AF] rounded-full"
                            />
                          )}
                          <MapPin size={24} className="text-[#60A5FA] relative z-10" />
                          <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap">
                            <span className="text-xs text-gray-300 font-medium">
                              {location.name}
                            </span>
                          </div>
                        </motion.div>
                      ))}

                      {/* Connecting lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgb(22, 70, 175)" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="rgb(96, 165, 250)" stopOpacity="0.8" />
                          </linearGradient>
                        </defs>
                        {globalLocations.slice(0, -1).map((location, i) => {
                          const next = globalLocations[i + 1]
                          return (
                            <motion.line
                              key={`line-${i}`}
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1, delay: 0.8 + i * 0.2 }}
                              x1={`${location.x}%`}
                              y1={`${location.y}%`}
                              x2={`${next.x}%`}
                              y2={`${next.y}%`}
                              stroke="url(#lineGradient)"
                              strokeWidth="1"
                              strokeDasharray="4 4"
                            />
                          )
                        })}
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* Bottom Center - Navigation Controls */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4">
        
        {/* Page Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-sm text-gray-300 font-semibold tracking-wider mb-2"
        >
          {currentPage + 1} / {pages.length}
        </motion.div>

        {/* Directional Navigation Buttons */}
        <DirectionalNavButtons
          onPrevious={handlePrevious}
          onNext={handleNext}
          disablePrevious={currentPage === 0}
          disableNext={currentPage === pages.length - 1}
        />

        {/* Progress Dots */}
        <div className="flex space-x-2.5 mt-4">
          {pages.map((page, index) => (
            <button
              key={page.id}
              onClick={() => setCurrentPage(index)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${index === currentPage 
                  ? 'w-8 bg-[#1646AF] shadow-lg shadow-[#1646AF]/50' 
                  : 'w-2 bg-gray-500 hover:bg-gray-400'
                }
              `}
              aria-label={`Go to ${page.title}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-12 w-32 h-32 bg-[#1646AF]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-16 w-40 h-40 bg-[#133C99]/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#1646AF]/10 rounded-full blur-3xl" />
    </section>
  )
}

export default HorizontalCarouselSlide
