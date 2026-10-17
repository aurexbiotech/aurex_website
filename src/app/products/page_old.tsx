'use client'

import React, { useState, memo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { Microscope, Settings, Cpu, Shield, Users, Award, Globe, TrendingUp, Beaker, TestTube, Activity, Zap } from 'lucide-react'

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
  { id: 'BC-410', name: 'BC-410', fullName: 'Auto Hematology Analyzer' },
  { id: 'BC-610', name: 'BC-610', fullName: 'Semi-Auto Hematology Analyzer' },
  { id: 'BC-810', name: 'BC-810', fullName: 'Auto Chemistry Analyzer' }
]

// BC-410 specific content
const bc410Content = {
  modelNumber: 'AS-800',
  modelName: 'Auto Chemistry Analyzer',
  title: 'Innovative Design Leads The Future',
  description: 'Simple and novel appearance design, constant speed 800T/H.',
  image: '/images/bc410.png',
  featuresImage: '/images/bc410-features.png',
  samplingImage: '/images/bc410-sampling.jpg',
  detailImage1: '/images/bc410-detail1.jpg',
  detailImage2: '/images/bc410-detail2.jpg',
  features: [
    'Innovative Design: Simple and novel appearance design for modern laboratories',
    'High Throughput: Constant speed of 800 tests per hour',
    'Advanced Technology: Fully automated chemistry analysis system',
    'Reliable Performance: Consistent and accurate results',
    'User-Friendly Interface: Easy operation and maintenance',
    'Comprehensive Testing: Wide range of clinical chemistry parameters'
  ],
  keyFeatures: [
    {
      title: 'Efficient',
      description: 'Integration of professional design, constant speed 800T/H, smoother & more efficient daily work'
    },
    {
      title: 'Reliable',
      description: 'Selection of key components and strict reliable design'
    },
    {
      title: 'Accurate',
      description: '150μl minimum reaction volume, micro volume of 2μl sampling, 0.1μl sampling accuracy'
    },
    {
      title: 'Friendly',
      description: 'Easy to use operation interface, simple and fast operation mode'
    }
  ],
  intelligentSampling: {
    title: 'Intelligent Sampling',
    description: 'Intelligent frequency conversion sampling technology makes sampling more accurate, anti-collision protection can largely extend the service life of sampling probe.'
  }
}

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

// Hero Banner Component - Exact same structure as Company page
const HeroBanner = memo(() => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur and Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-cyan-900/60 to-slate-800/70 z-10"></div>
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
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-100 mb-8 tracking-tight">
            Products
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Discover our comprehensive range of innovative medical diagnostic solutions designed to enhance laboratory efficiency and transform patient care.
          </p>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-orange-500 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-white rounded-full opacity-80 animate-ping"></div>
      </div>
    </section>
  )
})

HeroBanner.displayName = 'HeroBanner'

// Sub Navigation Component - Exact same structure as Company page
const SubNavigation = memo(({ activeSection, setActiveSection }: { 
  activeSection: string, 
  setActiveSection: (section: string) => void 
}) => {
  return (
    <section className="sticky top-0 z-40 bg-gray-50/95 backdrop-blur-md border-b-2 border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex flex-wrap justify-center gap-2">
          {productsSubNavigation.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveSection(item.id)}
              className={`relative px-4 py-3 font-semibold text-sm transition-all duration-300 rounded-t-lg overflow-hidden ${
                activeSection === item.id
                  ? 'text-[#0B1528] bg-white shadow-md'
                  : 'text-gray-600 hover:text-[#0B1528] hover:bg-white/50'
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              {/* Gold/Bronze accent underline for active item */}
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
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#1646AF] to-[#133C99] origin-center"
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
        className="flex items-start space-x-4 bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg"
      >
        <div className="bg-gradient-to-r from-[#1646AF] to-[#133C99] text-white p-2 rounded-full flex-shrink-0">
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
        className="text-center bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl"
      >
        <stat.icon className="w-8 h-8 text-[#0B1528] mx-auto mb-4" />
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
        className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg"
      >
        <div className="bg-gradient-to-r from-[#1646AF] to-[#133C99] text-white px-4 py-2 rounded-lg font-bold min-w-[80px] text-center">
          {item.year}
        </div>
        <p className="text-gray-700 text-lg flex-1">{item.event}</p>
      </motion.div>
    ))}
  </div>
))

TimelineContent.displayName = 'TimelineContent'

export default function ProductsPage() {
  const [activeSection, setActiveSection] = useState('clinical-diagnostics')
  const [selectedModel, setSelectedModel] = useState('BC-410')

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
      {/* Hero Banner */}
      <HeroBanner />
      
      {/* Sub Navigation */}
      <SubNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Clinical Diagnostics Subdivision Navigation */}
      {activeSection === 'clinical-diagnostics' && (
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-3">
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
                  <div className="text-white font-bold text-sm">
                    {model.name}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* BC-410 Product Detail Section */}
      {activeSection === 'clinical-diagnostics' && selectedModel === 'BC-410' && (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Side - Content */}
              <div className="space-y-6">
                {/* Model Number */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-5xl md:text-6xl font-bold text-blue-600 mb-2">
                    {bc410Content.modelNumber}
                  </h2>
                  <p className="text-xl text-gray-600 font-semibold">
                    {bc410Content.modelName}
                  </p>
                </motion.div>

                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {bc410Content.title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {bc410Content.description}
                  </p>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-3"
                >
                  {bc410Content.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-blue-600 text-white p-1.5 rounded-full flex-shrink-0 mt-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Side - Product Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="relative">
                  <Image
                    src={bc410Content.image}
                    alt={`${bc410Content.modelNumber} ${bc410Content.modelName}`}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* BC-410 Key Features Section with Image */}
      {activeSection === 'clinical-diagnostics' && selectedModel === 'BC-410' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Side - Key Features */}
              <div className="space-y-8">
                {bc410Content.keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          {index === 0 && (
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                          )}
                          {index === 1 && (
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          )}
                          {index === 2 && (
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                          )}
                          {index === 3 && (
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                          )}
                        </svg>
                      </div>
                    </div>
                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Side - Features Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="relative">
                  <Image
                    src={bc410Content.featuresImage}
                    alt="BC-410 Key Features"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* BC-410 Intelligent Sampling Section */}
      {activeSection === 'clinical-diagnostics' && selectedModel === 'BC-410' && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Side - Intelligent Sampling Content */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start space-x-4"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                  </div>
                  {/* Content */}
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      {bc410Content.intelligentSampling.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {bc410Content.intelligentSampling.description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Sampling Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  {/* Main Large Image */}
                  <div className="col-span-2">
                    <Image
                      src={bc410Content.samplingImage}
                      alt="Intelligent Sampling System"
                      width={800}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  {/* Two smaller images below */}
                  <div>
                    <Image
                      src={bc410Content.detailImage1}
                      alt="Sampling Detail 1"
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div>
                    <Image
                      src={bc410Content.detailImage2}
                      alt="Sampling Detail 2"
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Main Content Area - Hide when BC-410 is selected */}
      {!(activeSection === 'clinical-diagnostics' && selectedModel === 'BC-410') && (
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
              <div className="w-24 h-1 bg-gradient-to-r from-[#1646AF] to-[#133C99] mx-auto mb-6"></div>
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
