'use client'

import React, { useState, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer'
import { Microscope, Settings, Cpu, Shield, Users, Award, Globe, TrendingUp, Beaker, TestTube, Activity, Zap, Droplet, Leaf, HeartPulse, BarChart3, FlaskRound } from 'lucide-react'

// Type definitions
interface StatItem {
  icon: React.ElementType
  label: string
  value: string
}

interface TimelineItem {
  year: string
  event: string
}

type ContentItem = 
  | { type: 'text'; data: string }
  | { type: 'stats'; data: StatItem[] }
  | { type: 'benefits'; data: string[] }
  | { type: 'timeline'; data: TimelineItem[] }

// Sub-navigation items for products sections
const productsSubNavigation = [
  { id: 'clinical-diagnostics', name: 'Clinical Diagnostics', active: true },
  { id: 'medical-imaging', name: 'Medical Imaging', active: false },
  { id: 'advanced-andrology', name: 'Advanced Andrology', active: false },
  { id: 'transfusion-medicine', name: 'Transfusion Medicine', active: false },
  { id: 'stemcell-research', name: 'Stemcell Research', active: false },
  { id: 'critical-care', name: 'Critical Care', active: false },
  { id: 'sample-tracking', name: 'Sample Tracking', active: false },
  { id: 'analytical-laboratory', name: 'Analytical Laboratory', active: false }
]

// Clinical Diagnostics subdivisions
const clinicalDiagnosticsModels = [
  { id: 'biochemistry', name: 'Biochemistry', fullName: 'Biochemistry Solutions' },
  { id: 'haematology', name: 'Haematology', fullName: 'Haematology Systems' },
  { id: 'immunology-serology', name: 'Immunology and Serology', fullName: 'Immunology and Serology Testing' },
  { id: 'microbiology', name: 'Microbiology', fullName: 'Microbiology Diagnostics' },
  { id: 'molecular-diagnostics', name: 'Molecular Diagnostics', fullName: 'Molecular Diagnostics Technology' },
  { id: 'pathology', name: 'Pathology', fullName: 'Pathology Solutions' },
  { id: 'immunoassay', name: 'Immunoassay', fullName: 'Immunoassay Systems' },
  { id: 'advanced', name: 'Advanced', fullName: 'Advanced Diagnostic Solutions' }
]

// Content data for each products section
const productsContent = {
  'clinical-diagnostics': {
    title: 'Clinical Diagnostics Automations',
    subtitle: 'Advanced Automated Diagnostic Solutions',
    description: 'Comprehensive clinical diagnostics automation systems that deliver precision, speed, and reliability for modern laboratory operations.',
    content: [
      {
        type: 'text',
        data: 'Our clinical diagnostics automation solutions transform laboratory workflows with cutting-edge technology that ensures accurate results, reduces manual intervention, and increases throughput. From sample preparation to result reporting, our systems deliver excellence at every step.'
      },
      {
        type: 'stats',
        data: [
          { icon: Microscope, label: 'Automated Analyzers', value: '50+' },
          { icon: Settings, label: 'Tests per Hour', value: '1,000+' },
          { icon: Shield, label: 'Accuracy Rate', value: '99.9%' },
          { icon: Globe, label: 'Global Installations', value: '5,000+' }
        ]
      },
      {
        type: 'benefits',
        data: [
          'High-throughput immunoassay systems with STAT capabilities',
          'Automated clinical chemistry analyzers with ISE modules',
          'Integrated sample tracking and barcode management',
          'Real-time quality control and result validation',
          'Comprehensive test menus covering all clinical areas',
          'Seamless LIS integration and data management'
        ]
      }
    ]
  },
  'medical-imaging': {
    title: 'Medical Imaging Sciences',
    subtitle: 'Innovative Diagnostic Imaging Solutions',
    description: 'State-of-the-art medical imaging technologies that provide detailed visualization and analysis for accurate diagnostic insights.',
    content: [
      {
        type: 'text',
        data: 'Our medical imaging sciences portfolio combines advanced hardware with intelligent software to deliver exceptional image quality and diagnostic accuracy. Our systems support a wide range of imaging modalities and clinical applications.'
      },
      {
        type: 'timeline',
        data: [
          { year: 'Digital Radiography', event: 'High-resolution X-ray imaging with instant results' },
          { year: 'Ultrasound Systems', event: 'Advanced doppler and 3D/4D imaging capabilities' },
          { year: 'CT Imaging', event: 'Multi-slice computed tomography with AI enhancement' },
          { year: 'MRI Solutions', event: 'High-field magnetic resonance imaging systems' }
        ]
      },
      {
        type: 'stats',
        data: [
          { icon: Activity, label: 'Image Resolution', value: '4K Ultra HD' },
          { icon: Zap, label: 'Processing Speed', value: '2x Faster' },
          { icon: Users, label: 'Patient Comfort', value: '95% Rating' },
          { icon: Award, label: 'Image Quality', value: 'Award Winning' }
        ]
      }
    ]
  },
  'advanced-andrology': {
    title: 'Advanced Andrology',
    subtitle: 'Specialized Reproductive Health Solutions',
    description: 'Comprehensive andrology solutions providing advanced analysis and diagnostic capabilities for male reproductive health assessment.',
    content: [
      {
        type: 'text',
        data: 'Our advanced andrology systems offer precise analysis of male reproductive parameters with automated workflows that ensure accuracy and consistency. These solutions support fertility clinics and reproductive health centers worldwide.'
      },
      {
        type: 'benefits',
        data: [
          'Automated semen analysis with WHO 2021 standards',
          'Sperm morphology assessment using AI algorithms',
          'DNA fragmentation analysis for fertility evaluation',
          'Computer-assisted sperm analysis (CASA) systems',
          'Oxidative stress testing and antioxidant capacity',
          'Comprehensive reporting with reference ranges'
        ]
      },
      {
        type: 'stats',
        data: [
          { icon: Microscope, label: 'Analysis Parameters', value: '25+' },
          { icon: Cpu, label: 'AI Accuracy', value: '98.5%' },
          { icon: TestTube, label: 'Sample Volume', value: '10 μL minimum' },
          { icon: TrendingUp, label: 'Success Rate', value: '95%' }
        ]
      }
    ]
  },
  'transfusion-medicine': {
    title: 'Transfusion Medicine',
    subtitle: 'Blood Banking and Transfusion Safety',
    description: 'Advanced transfusion medicine solutions ensuring blood safety, compatibility testing, and efficient blood bank management.',
    content: [
      {
        type: 'text',
        data: 'Our transfusion medicine portfolio provides comprehensive solutions for blood banks and transfusion services, ensuring patient safety through advanced testing technologies and automated workflows that minimize human error.'
      },
      {
        type: 'timeline',
        data: [
          { year: 'Blood Typing', event: 'Automated ABO/Rh typing with gel card technology' },
          { year: 'Antibody Screening', event: 'Comprehensive antibody identification panels' },
          { year: 'Crossmatching', event: 'Electronic and serological compatibility testing' },
          { year: 'Blood Bank Management', event: 'Integrated inventory and traceability systems' }
        ]
      },
      {
        type: 'stats',
        data: [
          { icon: Shield, label: 'Safety Standards', value: '100% Compliant' },
          { icon: Beaker, label: 'Test Accuracy', value: '99.95%' },
          { icon: Users, label: 'Patient Safety', value: 'Zero Incidents' },
          { icon: Globe, label: 'Blood Banks Served', value: '1,000+' }
        ]
      }
    ]
  },
  'stemcell-research': {
    title: 'Stemcell Research and Medicine',
    subtitle: 'Regenerative Medicine Technologies',
    description: 'Cutting-edge stem cell research and therapeutic solutions supporting regenerative medicine and cellular therapy applications.',
    content: [
      {
        type: 'text',
        data: 'Our stem cell research and medicine solutions provide the advanced technologies needed for cell isolation, characterization, and therapeutic applications, supporting the growing field of regenerative medicine.'
      },
      {
        type: 'benefits',
        data: [
          'Automated cell separation and isolation systems',
          'Flow cytometry for stem cell characterization',
          'Cell culture monitoring and quality control',
          'Cryopreservation and biobanking solutions',
          'Cell therapy manufacturing support',
          'Regulatory compliance documentation'
        ]
      },
      {
        type: 'stats',
        data: [
          { icon: Microscope, label: 'Cell Types Analyzed', value: '50+' },
          { icon: Settings, label: 'Processing Efficiency', value: '95%' },
          { icon: Shield, label: 'Viability Rate', value: '98%' },
          { icon: Award, label: 'Research Projects', value: '500+' }
        ]
      }
    ]
  },
  'critical-care': {
    title: 'Critical Care Solutions',
    subtitle: 'Emergency and ICU Diagnostic Support',
    description: 'Rapid diagnostic solutions designed for critical care environments, providing immediate results for life-saving medical decisions.',
    content: [
      {
        type: 'text',
        data: 'Our critical care solutions deliver rapid, accurate diagnostic results when every second counts. These systems are designed for high-stress environments and provide the reliability and speed required in emergency and intensive care settings.'
      },
      {
        type: 'timeline',
        data: [
          { year: 'Point-of-Care Testing', event: 'Bedside testing with immediate results' },
          { year: 'Blood Gas Analysis', event: 'Rapid arterial and venous blood gas testing' },
          { year: 'Cardiac Markers', event: 'Emergency cardiac enzyme testing' },
          { year: 'Coagulation Testing', event: 'STAT hemostasis monitoring' }
        ]
      },
      {
        type: 'stats',
        data: [
          { icon: Zap, label: 'Result Time', value: '<5 Minutes' },
          { icon: Activity, label: 'Test Accuracy', value: '99.8%' },
          { icon: Shield, label: 'System Uptime', value: '99.9%' },
          { icon: Users, label: 'Lives Impacted', value: '1M+' }
        ]
      }
    ]
  },
  'sample-tracking': {
    title: 'Sample Tracking Automation',
    subtitle: 'Complete Laboratory Workflow Management',
    description: 'Comprehensive sample tracking and laboratory automation systems that ensure specimen integrity and workflow efficiency.',
    content: [
      {
        type: 'text',
        data: 'Our sample tracking automation solutions provide complete laboratory workflow management from specimen collection to result reporting, ensuring chain of custody and eliminating manual errors through intelligent automation.'
      },
      {
        type: 'benefits',
        data: [
          'Automated sample registration and labeling',
          'Robotic specimen handling and processing',
          'Real-time sample tracking and status monitoring',
          'Intelligent aliquot preparation and storage',
          'Automated result validation and reporting',
          'Complete audit trail and traceability'
        ]
      },
      {
        type: 'stats',
        data: [
          { icon: Settings, label: 'Samples Processed', value: '10M+ Daily' },
          { icon: Cpu, label: 'Error Reduction', value: '99.5%' },
          { icon: TrendingUp, label: 'Efficiency Gain', value: '400%' },
          { icon: Globe, label: 'Installations', value: '2,000+' }
        ]
      }
    ]
  },
  'analytical-laboratory': {
    title: 'Analytical Laboratory Automations',
    subtitle: 'Research and Quality Control Solutions',
    description: 'Advanced analytical laboratory automation systems supporting research, development, and quality control applications across industries.',
    content: [
      {
        type: 'text',
        data: 'Our analytical laboratory automation solutions support diverse research and quality control applications with precise, reproducible results. These systems enhance productivity while maintaining the highest standards of analytical excellence.'
      },
      {
        type: 'benefits',
        data: [
          'High-performance liquid chromatography (HPLC) systems',
          'Mass spectrometry solutions for complex analysis',
          'Automated sample preparation and injection',
          'Multi-parameter environmental monitoring',
          'Pharmaceutical quality control testing',
          'Food safety and contamination analysis'
        ]
      },
      {
        type: 'stats',
        data: [
          { icon: Beaker, label: 'Analytical Methods', value: '200+' },
          { icon: Microscope, label: 'Detection Sensitivity', value: 'PPB Level' },
          { icon: Shield, label: 'Precision (CV)', value: '<2%' },
          { icon: Award, label: 'Industry Awards', value: '15+' }
        ]
      }
    ]
  }
}

// Hero Swiper Component - Full-screen swiping carousel
const HeroSwiper = memo(({ currentSlide, setCurrentSlide }: {
  currentSlide: number,
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
}) => {
  const router = useRouter()
  
  const productCategories = [
    {
      id: 'clinical-diagnostics',
      name: 'Clinical Diagnostics Automations',
      icon: Activity,
      description: 'Fully automated clinical diagnostic systems delivering rapid, accurate results with minimal human intervention for enhanced laboratory efficiency',
      image: '/images/bc120-plus.png',
      background: '/images/diagnostic_lab.png',
      color: 'from-[#1646AF] to-[#133C99]',
      models: [
        { id: 'biochemistry', name: 'Biochemistry' },
        { id: 'haematology', name: 'Haematology' },
        { id: 'electrolyte', name: 'Electrolyte' }
      ]
    },
    {
      id: 'medical-imaging',
      
      name: 'Medical Imaging Sciences',
      icon: Microscope,
      description: 'Advanced imaging technologies integrating AI-powered analysis for precise visualization and interpretation of medical specimens',
      image: '/images/medical-imaging.webp',
      background: '/images/background.jpg',
      color: 'from-[#133C99] to-[#0E2A6C]',
      models: []
    },
    {
      id: 'advanced-andrology',
      name: 'Advanced Andrology',
      icon: Users,
      description: 'Specialized systems for comprehensive male reproductive health analysis including sperm quality assessment and fertility diagnostics',
      image: '/images/advanced-andrology.png',
      background: '/images/corporate-background.jpg',
      color: 'from-[#1646AF] to-[#0E2A6C]',
      models: []
    },
    {
      id: 'transfusion-medicine',
      name: 'Transfusion Medicine',
      icon: Droplet,
      description: 'State-of-the-art blood typing, crossmatching, and antibody screening systems ensuring safe and compatible transfusions',
      image: '/images/transfusion-medicine-hero.jpg',
      background: '/images/hero-background.jpg',
      color: 'from-[#1E3A8A] to-[#1646AF]',
      models: []
    },
    {
      id: 'stemcell-research',
      name: 'Stemcell Research and Medicine',
      icon: Leaf,
      description: 'Cutting-edge platforms for stem cell isolation, characterization, and therapeutic applications in regenerative medicine',
      image: '/images/stemcell-research.avif',
      background: '/images/analyzer-device.jpg',
      color: 'from-[#133C99] to-[#1646AF]',
      models: []
    },
    {
      id: 'critical-care',
      name: 'Critical Care Solutions',
      icon: HeartPulse,
      description: 'Rapid point-of-care testing systems providing critical diagnostic information for immediate clinical decision-making',
      image: '/images/critical-care.jpg',
      background: '/images/bc410-features.png',
      color: 'from-[#1646AF] to-[#133C99]',
      models: []
    },
    {
      id: 'sample-tracking',
      name: 'Sample Tracking Automation',
      icon: BarChart3,
      description: 'Intelligent barcode and RFID-based sample management systems ensuring complete traceability and chain of custody',
      image: '/images/sample-tracking.jpg',
      background: '/images/3915891.jpg',
      color: 'from-[#133C99] to-[#0E2A6C]',
      models: []
    },
    {
      id: 'analytical-laboratory',
      name: 'Analytical Laboratory Automations',
      icon: FlaskRound,
      description: 'Comprehensive laboratory automation solutions integrating robotics, AI, and advanced analytics for maximum throughput and accuracy',
      image: '/images/analytical-laboratory.png',
      background: '/images/graphic-illustration-light-blue-wallpaper-template-website-cover-background-design_545033-2371.jpg',
      color: 'from-[#1646AF] to-[#0E2A6C]',
      models: []
    }
  ]

  const currentCategory = productCategories[currentSlide]

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + productCategories.length) % productCategories.length)
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % productCategories.length)
  }

  const handleCategoryClick = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Dynamic Background with Blur */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md scale-110 transition-all duration-700"
              style={{
                backgroundImage: `url("${currentCategory.background}")`
              }}
            />
            {/* AUREX Brand Deep Blue overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B1528]/90 via-[#133C99]/80 to-[#1646AF]/80" />
            {/* Additional overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content - Swiper */}
      <div className="relative z-10 h-full flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full flex items-center px-12"
          >
            {/* Left Side - Content */}
            <div className="w-1/2 pr-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Title */}
                <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
                  {currentCategory.name}
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {currentCategory.description}
                </p>

                {/* Product Models (if available) */}
                {currentCategory.models && currentCategory.models.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-wrap gap-3 mb-6"
                  >
                    {currentCategory.models.map((model) => (
                      <button
                        key={model.id}
                        className={`px-5 py-2.5 bg-gradient-to-r ${currentCategory.color} text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg`}
                      >
                        <span className="text-white font-bold">{model.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (currentCategory.id === 'clinical-diagnostics') {
                        router.push('/products/biochemistry')
                      }
                    }}
                    className={`px-6 py-3 bg-gradient-to-r ${currentCategory.color} text-white rounded-full font-bold hover:opacity-90 transition-opacity shadow-2xl cursor-pointer`}
                  >
                    Learn More
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-3 bg-gray-800/80 backdrop-blur-sm text-white rounded-full font-bold hover:bg-gray-700 transition-colors shadow-2xl flex items-center space-x-2"
                  >
                    <span>+</span>
                    <span>Watch More</span>
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Product Image */}
            <div className="w-1/2 flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <Image 
                  src={currentCategory.image}
                  alt={currentCategory.name}
                  width={currentCategory.id === 'clinical-diagnostics' || currentCategory.id === 'advanced-andrology' ? 500 : 700}
                  height={currentCategory.id === 'clinical-diagnostics' || currentCategory.id === 'advanced-andrology' ? 500 : 700}
                  className={`${
                    currentCategory.id === 'clinical-diagnostics' || currentCategory.id === 'advanced-andrology' 
                      ? 'w-[500px]' 
                      : 'w-[700px]'
                  } h-auto drop-shadow-2xl transition-transform duration-300 hover:scale-105 ${
                    currentCategory.id === 'sample-tracking' ? 'blur-[2px]' : ''
                  }`}
                  priority={currentSlide === 0}
                  loading={currentSlide === 0 ? 'eager' : 'lazy'}
                  quality={85}
                  sizes="(max-width: 768px) 300px, (max-width: 1024px) 500px, 700px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHw/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT3k/VEfEU95P1QbqFhC0Dc8/npRWg+6WwA/dgWDGOSvB2kYwBAomwkjGWd6/5QEBZEZ7n6VQ7D5jW9pWy2rbqBvexKOMdK8M4Qhqy4Q4jvQ=="
                />
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${currentCategory.color} opacity-20 blur-3xl -z-10`} />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-4">
        {/* Previous Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrevious}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/30 transition-all shadow-lg"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </motion.button>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/30 transition-all shadow-lg"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {productCategories.map((_, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-white' 
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  )
})

HeroSwiper.displayName = 'HeroSwiper'

// Original Hero Banner Component - Now unused but kept for reference
const HeroBanner = memo(() => {
  return (
    <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur and Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1528]/90 via-[#133C99]/85 to-[#1646AF]/85 z-10"></div>
        <Image
          src="/images/diagnostic_lab.png"
          alt="Advanced Medical Products and Diagnostic Solutions"
          fill
          className="object-cover object-center blur-sm scale-105"
          priority
          quality={85}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-gray-100 mb-4 sm:mb-6 md:mb-8 tracking-tight">
            Products
          </h1>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto px-2">
            Discover our comprehensive range of innovative medical diagnostic solutions designed to enhance laboratory efficiency and transform patient care.
          </p>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#1646AF]/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-[#133C99]/40 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-white rounded-full opacity-80 animate-ping"></div>
      </div>
    </section>
  )
})

HeroBanner.displayName = 'HeroBanner'

// Sub Navigation Component - Exact same structure as Company page
const SubNavigation = memo(({ activeSection, setActiveSection, setCurrentSlide }: { 
  activeSection: string, 
  setActiveSection: (section: string) => void,
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
}) => {
  
  // Handle hover to change slide
  const handleMouseEnter = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="sticky top-0 z-40 bg-gray-50/95 backdrop-blur-md border-b-2 border-gray-200 shadow-sm">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 py-3 md:py-4">
        <nav className="flex flex-wrap justify-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
          {productsSubNavigation.map((item, index) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveSection(item.id)}
              onMouseEnter={() => handleMouseEnter(index)}
              className={`relative px-2 sm:px-3 md:px-4 py-2 md:py-3 font-semibold text-xs sm:text-sm transition-all duration-300 rounded-t-lg overflow-hidden whitespace-nowrap ${
                activeSection === item.id
                  ? 'text-[#1646AF] bg-white shadow-md'
                  : 'text-gray-600 hover:text-[#1646AF] hover:bg-white/50'
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              {/* AUREX Royal Blue accent underline for active item */}
              <motion.div
                initial={false}
                animate={{
                  scaleX: activeSection === item.id ? 1 : 0,
                  opacity: activeSection === item.id ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1646AF] to-[#133C99] origin-left"
              />
              {/* Hover effect underline */}
              <motion.div
                initial={false}
                animate={{
                  scaleX: 0,
                  opacity: 0
                }}
                whileHover={{
                  scaleX: activeSection === item.id ? 0 : 0.7,
                  opacity: activeSection === item.id ? 0 : 0.6
                }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#1646AF] origin-center"
                style={{ width: '80%' }}
              />
            </motion.button>
          ))}
        </nav>
      </div>
    </section>
  )
})

SubNavigation.displayName = 'SubNavigation'

// Helper content rendering components - matching Company page structure
const TextContent = memo(({ text }: { text: string }) => (
  <div className="mb-12">
    <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
      {text}
    </p>
  </div>
))

TextContent.displayName = 'TextContent'

const BenefitsContent = memo(({ benefits }: { benefits: string[] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="grid md:grid-cols-2 gap-6 mb-12"
  >
    {benefits.map((benefit, index) => (
      <div
        key={index}
        className="flex items-start space-x-4 bg-[#F6F8FB] border border-gray-100 p-6 rounded-lg"
      >
        <div className="bg-[#1646AF] text-white p-2 rounded-full flex-shrink-0 shadow-sm">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-gray-700 font-medium">{benefit}</span>
      </div>
    ))}
  </motion.div>
))

BenefitsContent.displayName = 'BenefitsContent'

const StatsContent = memo(({ stats }: { stats: StatItem[] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
  >
    {stats.map((stat, index) => (
      <div
        key={index}
        className="text-center bg-[#F6F8FB] border border-gray-100 p-6 rounded-xl"
      >
        <stat.icon className="w-8 h-8 text-[#1646AF] mx-auto mb-4" />
        <div className="text-3xl font-bold text-[#0B1528] mb-2">{stat.value}</div>
        <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
      </div>
    ))}
  </motion.div>
))

StatsContent.displayName = 'StatsContent'

const TimelineContent = memo(({ timeline }: { timeline: TimelineItem[] }) => (
  <div className="space-y-6 mb-12">
    {timeline.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex items-start space-x-4 bg-[#F6F8FB] border border-gray-100 p-6 rounded-lg"
      >
        <div className="bg-[#1646AF] text-white px-4 py-2 rounded-lg font-bold min-w-[80px] text-center shadow-sm">
          {item.year}
        </div>
        <p className="text-gray-700 text-lg flex-1">{item.event}</p>
      </motion.div>
    ))}
  </div>
))

TimelineContent.displayName = 'TimelineContent'

export default function ProductsPage() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState('clinical-diagnostics')
  const [selectedModel, setSelectedModel] = useState('biochemistry')
  const [currentSlide, setCurrentSlide] = useState(0)

  const currentContent = productsContent[activeSection as keyof typeof productsContent]

  const renderContent = (item: ContentItem) => {
    switch (item.type) {
      case 'text':
        return <TextContent key={Math.random()} text={item.data as string} />
      case 'stats':
        return <StatsContent key={Math.random()} stats={item.data as StatItem[]} />
      case 'timeline':
        return <TimelineContent key={Math.random()} timeline={item.data as TimelineItem[]} />
      case 'benefits':
        return <BenefitsContent key={Math.random()} benefits={item.data as string[]} />
      default:
        return null
    }
  }

  return (
    <>
      {/* Hero Swiper - Full-screen carousel */}
      <HeroSwiper currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      
      {/* Sub Navigation */}
      <SubNavigation activeSection={activeSection} setActiveSection={setActiveSection} setCurrentSlide={setCurrentSlide} />
      
      {/* Clinical Diagnostics Subdivision Navigation */}
      {activeSection === 'clinical-diagnostics' && (
        <section className="bg-gradient-to-r from-[#133C99] to-[#1646AF] py-3">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-4">
              {clinicalDiagnosticsModels.map((model) => (
                <motion.button
                  key={model.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedModel(model.id)}
                  className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                    selectedModel === model.id
                      ? 'bg-white/20 shadow-lg border-2 border-white/40'
                      : 'hover:bg-white/10 border-2 border-transparent'
                  }`}
                >
                  <div 
                    className="font-aboreto font-bold text-white"
                    style={{ fontFamily: 'var(--font-aboreto), cursive', fontSize: '14px' }}
                  >
                    {model.name}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Biochemistry Special Content */}
      {activeSection === 'clinical-diagnostics' && selectedModel === 'biochemistry' && (
        <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-visible">
          <div className="container mx-auto px-4 sm:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Biochemistry Solutions Section */}
              <div className="grid md:grid-cols-2 gap-12 items-center relative">
                {/* Left Side - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1528] mb-6">
                    Empower Diagnostics with Precision Chemistry
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    AUREX delivers cutting-edge fully automated Biochemistry solutions designed for faster turnaround, superior analytical accuracy, and complete workflow automation.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    From routine profiles to advanced assays — our systems ensure maximum reliability, and seamless scalability for every laboratory need.
                  </p>
                  
                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push('/products/biochemistry')}
                    className="px-8 py-4 bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-[#0B1528] hover:to-[#133C99] transition-all duration-300 cursor-pointer"
                  >
                    Learn More
                  </motion.button>
                </motion.div>

                {/* Right Side - Image with Navigation */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative flex items-center gap-8"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl flex-1">
                    <Image
                      src="/images/biochemistry-diagnostics.webp"
                      alt="Biochemistry Diagnostics"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  
                  {/* Vertical Navigation next to image */}
                  <div className="hidden xl:flex flex-col gap-2 ml-4">
                    <motion.button
                      onClick={() => router.push('/products/biochemistry?model=bc-15')}
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ backgroundColor: '#D3D3D3' }}
                      className="w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-xs font-bold transition-all duration-300 text-gray-700 hover:bg-gradient-to-br hover:from-[#133C99] hover:to-[#1646AF] hover:text-white"
                      title="BC-15"
                    >
                      <span className="text-[9px] text-center leading-tight">BC-15</span>
                    </motion.button>

                    <motion.button
                      onClick={() => router.push('/products/biochemistry?model=bc-310')}
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ backgroundColor: '#D3D3D3' }}
                      className="w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-xs font-bold transition-all duration-300 text-gray-700 hover:bg-gradient-to-br hover:from-[#133C99] hover:to-[#1646AF] hover:text-white"
                      title="BC-310"
                    >
                      <span className="text-[9px] text-center leading-tight">BC-310</span>
                    </motion.button>

                    <motion.button
                      onClick={() => router.push('/products/biochemistry?model=bc-410')}
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ backgroundColor: '#D3D3D3' }}
                      className="w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-xs font-bold transition-all duration-300 text-gray-700 hover:bg-gradient-to-br hover:from-[#133C99] hover:to-[#1646AF] hover:text-white"
                      title="BC-410"
                    >
                      <span className="text-[9px] text-center leading-tight">BC-410</span>
                    </motion.button>

                    <motion.button
                      onClick={() => router.push('/products/biochemistry?model=bc-610')}
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ backgroundColor: '#D3D3D3' }}
                      className="w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-xs font-bold transition-all duration-300 text-gray-700 hover:bg-gradient-to-br hover:from-[#133C99] hover:to-[#1646AF] hover:text-white"
                      title="BC-610"
                    >
                      <span className="text-[9px] text-center leading-tight">BC-610</span>
                    </motion.button>

                    <motion.button
                      onClick={() => router.push('/products/biochemistry?model=bc-810')}
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ backgroundColor: '#D3D3D3' }}
                      className="w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-xs font-bold transition-all duration-300 text-gray-700 hover:bg-gradient-to-br hover:from-[#133C99] hover:to-[#1646AF] hover:text-white"
                      title="BC-810"
                    >
                      <span className="text-[9px] text-center leading-tight">BC-810</span>
                    </motion.button>

                    <motion.button
                      onClick={() => router.push('/products/biochemistry?model=bc-20')}
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ backgroundColor: '#D3D3D3' }}
                      className="w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-xs font-bold transition-all duration-300 text-gray-700 hover:bg-gradient-to-br hover:from-[#133C99] hover:to-[#1646AF] hover:text-white"
                      title="BC-20"
                    >
                      <span className="text-[9px] text-center leading-tight">BC-20</span>
                    </motion.button>

                    <motion.button
                      onClick={() => router.push('/products/biochemistry?model=sa-10')}
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ backgroundColor: '#D3D3D3' }}
                      className="w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-xs font-bold transition-all duration-300 text-gray-700 hover:bg-gradient-to-br hover:from-[#133C99] hover:to-[#1646AF] hover:text-white"
                      title="SA-10"
                    >
                      <span className="text-[9px] text-center leading-tight">SA-10</span>
                    </motion.button>

                    <motion.button
                      onClick={() => router.push('/products/biochemistry?model=electrosis')}
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ backgroundColor: '#D3D3D3' }}
                      className="w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-xs font-bold transition-all duration-300 text-[#1646AF] hover:bg-[#1646AF] hover:text-white"
                      title="ELECTROSIS"
                    >
                      <span className="text-[8px] text-center leading-tight">ELEC</span>
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Haematology Special Content */}
      {activeSection === 'clinical-diagnostics' && selectedModel === 'haematology' && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Haematology Solutions Section */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1528] mb-6">
                    Precision Haematology for Confident Clinical Decisions
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    AUREX offers advanced Hematology Analyzers engineered to deliver accurate, reliable, and fast Complete Blood Count (CBC) results. With smart flagging systems, low reagent consumption, and robust performance — our Analyzers ensure seamless workflow for routine and critical care testing.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 font-semibold italic">
                    Empower your lab with technology that understands every cell
                  </p>
                  
                  {/* Learn More Button */}
                  <Link href="/products/haematology">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-[#0B1528] hover:to-[#133C99] transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Right Side - Image with Sidebar Navigation */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative flex items-center gap-8"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/haematology-blood-cells.jpg"
                      alt="Haematology Blood Cells"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex flex-col gap-2 ml-4">
                    <motion.button
                      onClick={() => router.push('/products/haematology?model=hemotxpro')}
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ backgroundColor: '#D3D3D3' }}
                      className="w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-xs font-bold transition-all duration-300 text-gray-700 hover:bg-gradient-to-br hover:from-red-600 hover:to-pink-600 hover:text-white"
                      title="HemotxPro"
                    >
                      <span className="text-[7px] text-center leading-tight">Hemotx<br/>Pro</span>
                    </motion.button>

                    <motion.button
                      onClick={() => router.push('/products/haematology?model=hemotxi5')}
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ backgroundColor: '#D3D3D3' }}
                      className="w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-xs font-bold transition-all duration-300 text-gray-700 hover:bg-gradient-to-br hover:from-red-600 hover:to-pink-600 hover:text-white"
                      title="Hemotx i5"
                    >
                      <span className="text-[7px] text-center leading-tight">Hemotx<br/>i5</span>
                    </motion.button>

                    <motion.button
                      onClick={() => router.push('/products/haematology?model=hemotxi')}
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ backgroundColor: '#D3D3D3' }}
                      className="w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-xs font-bold transition-all duration-300 text-gray-700 hover:bg-gradient-to-br hover:from-red-600 hover:to-pink-600 hover:text-white"
                      title="Hemotx i"
                    >
                      <span className="text-[7px] text-center leading-tight">Hemotx<br/>i</span>
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Immunology and Serology Special Content */}
      {activeSection === 'clinical-diagnostics' && selectedModel === 'immunology-serology' && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1528] mb-6">
                    Precision Immunology for Today&apos;s Diagnostics
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    AUREX brings advanced Immunology and Serology solutions designed to detect critical disease markers with unmatched sensitivity and reliability. From infectious diseases to autoimmune and hormonal disorders, our portfolio enables faster and more confident clinical decision-making.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 font-semibold italic">
                    Where advanced science meets diagnostic accuracy
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-[#0B1528] hover:to-[#133C99] transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/immunology-serology.webp"
                      alt="Immunology and Serology"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Microbiology Special Content */}
      {activeSection === 'clinical-diagnostics' && selectedModel === 'microbiology' && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1528] mb-6">
                    Strengthening Infection Control with Advanced Microbiology Solutions
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    AUREX delivers a complete range of microbiology systems and culture-based solutions that empower laboratories to accurately identify pathogens and guide effective treatment decisions. From routine bacterial analysis to critical AMR surveillance, our products are engineered to ensure the highest diagnostic confidence.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold italic">
                    Detect. Identify. Guide Therapy.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Our portfolio ensures rapid, reliable and standardized microbiological outcomes that support better patient care across hospitals, clinics, and public health programs.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-[#0B1528] hover:to-[#133C99] transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/microbiology.avif"
                      alt="Microbiology Solutions"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Molecular Diagnostics Special Content */}
      {activeSection === 'clinical-diagnostics' && selectedModel === 'molecular-diagnostics' && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1528] mb-6">
                    Redefining Disease Detection with Molecular Precision
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    AUREX brings innovative Molecular Diagnostics platforms that deliver unparalleled speed, accuracy, and sensitivity in detecting infectious and genetic diseases. Powered by advanced nucleic acid amplification technologies, our solutions enable early diagnosis and actionable results — critical for saving lives.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 font-semibold italic">
                    Precision You Can Trust. Results When They Matter Most.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-[#0B1528] hover:to-[#133C99] transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/molecular-diagnostics.jpg"
                      alt="Molecular Diagnostics"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Pathology Special Content */}
      {activeSection === 'clinical-diagnostics' && selectedModel === 'pathology' && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1528] mb-6">
                    Where Every Specimen Tells a Story — We Deliver the Clarity
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    AUREX empowers laboratories with advanced Pathology solutions that transform tissue and cellular specimens into accurate, actionable clinical insights. From routine cytology to complex onychopathology, our systems ensure precision in every diagnosis that shapes patient treatment pathways.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 font-semibold italic">
                    Stronger Diagnostics. Smarter Decisions. Better Lives.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-[#0B1528] hover:to-[#133C99] transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/pathology.jpg"
                      alt="Pathology Solutions"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Immunoassay Special Content */}
      {activeSection === 'clinical-diagnostics' && selectedModel === 'immunoassay' && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1528] mb-6">
                    Unmatched Sensitivity. Unrivalled Diagnostic Power.
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    AUREX introduces advanced Immunoassay solutions powered by Chemiluminescence (CLIA), enabling laboratories to deliver faster, more precise analysis of critical biomarkers. Designed for superior reliability and high throughput, our systems support clinical decision-making across endocrinology, oncology, cardiology, fertility, and infectious diseases.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 font-semibold italic">
                    Where Clinical Confidence Meets Cutting-Edge Detection.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-[#0B1528] hover:to-[#133C99] transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/immunoassay.webp"
                      alt="Immunoassay Solutions"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Advanced Special Content - All Topics Displayed */}
      {activeSection === 'clinical-diagnostics' && selectedModel === 'advanced' && (
        <>
          {/* Cytogenetics and Genetic Diagnostics */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Section Heading */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#0B1528] mb-4">
                    Cytogenetics and Genetic Diagnostics
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#1646AF] to-[#133C99] mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1528] mb-6">
                      Transforming Genetic Insight into Clinical Precision
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AUREX offers a comprehensive portfolio of Cytogenetic and Genetic Diagnostic solutions that empower clinicians to detect chromosomal abnormalities and hereditary disease risks with confidence. From oncology to reproductive health, our technologies deliver deep genomic insights that guide personalized treatment decisions and improved patient outcomes.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8 font-semibold italic">
                      Where Chromosomes and Genes Reveal the Truth
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-[#0B1528] hover:to-[#133C99] transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src="/images/cytogenetics.jpg"
                        alt="Cytogenetics and Genetic Diagnostics"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Clinical Microbiome and Infective Disease */}
          <section className="py-16 bg-gradient-to-br from-white to-gray-50">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Section Heading */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#0B1528] mb-4">
                    Clinical Microbiome and Infective Disease Diagnostics
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#1646AF] to-[#133C99] mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Image on LEFT (zigzag pattern) */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative order-2 md:order-1"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src="/images/microbiome.jpg"
                        alt="Clinical Microbiome and Infective Disease Diagnostics"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </motion.div>
                  {/* Text on RIGHT */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-6 order-1 md:order-2"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1528] mb-6">
                      Revealing Hidden Pathogens. Protecting Human Health.
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AUREX delivers advanced diagnostics focused on the rapidly evolving fields of infectious diseases and the human microbiome. Our innovative solutions detect pathogens with high sensitivity while providing insights into microbial community balance — critical for patient care, infection control, and public health surveillance.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8 font-semibold italic">
                      Mapping Microbes. Managing Disease. Maximizing Clinical Impact.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-[#0B1528] hover:to-[#133C99] transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Toxicology Diagnostics */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Section Heading */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#0B1528] mb-4">
                    Toxicology Diagnostics
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#1646AF] to-[#133C99] mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1528] mb-6">
                      Safeguarding Lives Through Precision Toxicology
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AUREX offers advanced toxicology diagnostics designed to accurately detect, monitor, and manage exposure to drugs, poisons, and hazardous chemicals. With rapid turnaround and high analytical confidence, our solutions empower clinicians, forensic medicine, workplaces, and public health authorities to make critical decisions — faster.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8 font-semibold italic">
                      Detect. Analyze. Protect.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-[#0B1528] hover:to-[#133C99] transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src="/images/toxicology.webp"
                        alt="Toxicology Diagnostics"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Transfusion Medicine */}
          <section className="py-16 bg-gradient-to-br from-white to-gray-50">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Section Heading */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#0B1528] mb-4">
                    Transfusion Medicine
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#1646AF] to-[#133C99] mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Image on LEFT (zigzag pattern) */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative order-2 md:order-1"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src="/images/transfusion-medicine.jpg"
                        alt="Transfusion Medicine"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </motion.div>
                  {/* Text on RIGHT */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-6 order-1 md:order-2"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1528] mb-6">
                      Empowering Safe Blood. Saving Precious Lives.
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      At AUREX, our Transfusion Medicine solutions are engineered to ensure the highest standards of blood safety, compatibility, and traceability. With state-of-the-art automation, advanced immunohematology assays, and a robust quality-first approach, we help healthcare providers deliver safe transfusions — every single time.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8 font-semibold italic">
                      Because every unit of blood carries the power to save a life.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-[#0B1528] hover:to-[#133C99] transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}
      
      {/* Main Content Area - Hide when any Clinical Diagnostics sub-topic is selected */}
      {!(activeSection === 'clinical-diagnostics' && (
        selectedModel === 'biochemistry' || 
        selectedModel === 'haematology' || 
        selectedModel === 'immunology-serology' || 
        selectedModel === 'microbiology' || 
        selectedModel === 'molecular-diagnostics' || 
        selectedModel === 'pathology' || 
        selectedModel === 'immunoassay' || 
        selectedModel === 'advanced'
      )) && (
      <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#0B1528] mb-6">
                {currentContent.title}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1646AF] to-[#133C99] mx-auto mb-6 rounded-full"></div>
              <h2 className="text-2xl text-gray-700 font-semibold mb-4">
                {currentContent.subtitle}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {currentContent.description}
              </p>
            </motion.div>

            {/* Dynamic Content Rendering */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {currentContent.content.map((item, index: number) => (
                <div key={index}>
                  {renderContent(item as ContentItem)}
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />
    </>
  )
}