'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { 
  Building2, 
  Layers, 
  FlaskConical, 
  Shield,
  ArrowRight
} from 'lucide-react'

/**
 * Turnkey Projects Slide Component - Royal Business Style
 * EXACT STRUCTURAL CLONE of Company Profile slide
 * Full-screen slide with bottom horizontal navigation tabs
 */
const TurnkeyProjectsSlide: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)
  const router = useRouter()

  // Images for each topic tab
  const topicImages = [
    "/images/lab2.gif", // Hospital Solutions
    "/images/laboratory-excellence.jpg", // Lab Solutions (Laboratory Excellence)
    "/images/research-lab.avif", // Research & Development
    "/images/compliance-assurance.jpg", // Full Compliance Assurance
  ]

  // Turnkey sub-topics for bottom navigation (simplified primary links)
  const turnkeyTopics = [
    {
      id: 'hospital',
      name: 'Hospital Solutions',
      icon: Building2,
      title: 'Turnkey Projects',
      description: 'Transform your vision into reality with our comprehensive end-to-end turnkey solutions. From initial design and regulatory compliance to equipment installation and full commissioning, we deliver complete, operational healthcare facilities that are future-ready and optimized for excellence.',
    },
    {
      id: 'lab',
      name: 'Lab Solutions',
      icon: FlaskConical,
      title: 'Laboratory Excellence',
      description: 'Build state-of-the-art diagnostic laboratories with our holistic turnkey approach. We handle everything from architectural design and workflow optimization to advanced equipment integration and quality assurance, ensuring your lab operates with maximum efficiency and precision.',
    },
    {
      id: 'rnd',
      name: 'R&D Facilities',
      icon: Layers,
      title: 'Research & Development',
      description: 'Establish cutting-edge research facilities equipped for innovation and discovery. Our turnkey solutions encompass facility design, specialized equipment installation, safety compliance, and complete infrastructure setup to support your research mission and scientific breakthroughs.',
    },
    {
      id: 'compliance',
      name: 'Compliance',
      icon: Shield,
      title: 'Full Compliance Assurance',
      description: 'Navigate complex regulatory landscapes with confidence. Our turnkey projects include comprehensive compliance management, from NABL and ISO certifications to environmental and safety standards, ensuring your facility meets all national and international requirements from day one.',
    }
  ]

  const currentTopic = turnkeyTopics[activeTab]

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Layer - Deep Navy Blue with Blurred Architectural Image */}
      <div className="absolute inset-0">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/background.jpg')`,
            filter: 'blur(8px)',
            transform: 'scale(1.1)'
          }}
        />
        
        {/* Deep Navy Blue Gradient Overlay - Matching Company Profile exactly */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1528]/95 via-[#133C99]/85 to-[#0B1528]/95" />
        
        {/* Additional depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        
        {/* Top Context Label - "CAPABILITIES" */}
        <div className="pt-24 pl-16">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-gray-300 font-light"
          >
            Capabilities
          </motion.p>
        </div>

        {/* Main Content Area - Two Column Layout */}
        <div className="flex-1 flex items-center px-16 pb-32">
          <div className="w-full grid grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Main Text Content */}
            <div className="space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Main Title - Large Serif Font */}
                  <h1 
                    className="text-6xl lg:text-7xl font-serif font-bold text-white leading-tight"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {currentTopic.title}
                  </h1>

                  {/* Description Text */}
                  <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                    {currentTopic.description}
                  </p>

                  {/* Action Button with Light Sky Blue Accent */}
                  <motion.button
                    onClick={() => router.push('/capabilities?section=turnkey-projects')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group mt-8 flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white rounded-full font-semibold shadow-lg shadow-sky-500/30 transition-all duration-300"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight 
                      size={20} 
                      className="group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column - GIF Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center items-center"
            >
              <Image 
                src={topicImages[activeTab]}
                alt={`${currentTopic.title} Laboratory`}
                width={800}
                height={600}
                className="w-full max-w-2xl rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Horizontal Navigation Bar - CRUCIAL Element */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="px-8 pb-6">
            {/* Navigation Tabs Container */}
            <div className="relative">
              {/* Background blur panel */}
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-white/10" />
              
              {/* Tabs Row - Simplified for 4 primary links */}
              <div className="relative flex items-center justify-between gap-4 px-6 py-4">
                {turnkeyTopics.map((topic, index) => {
                  const TabIcon = topic.icon
                  return (
                    <motion.button
                      key={topic.id}
                      onClick={() => setActiveTab(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        relative flex-1 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300
                        ${activeTab === index 
                          ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-lg shadow-sky-500/30' 
                          : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/70 hover:text-white'
                        }
                      `}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <TabIcon size={18} />
                        <span className="whitespace-nowrap">
                          {topic.name}
                        </span>
                      </div>
                      
                      {/* Active indicator */}
                      {activeTab === index && (
                        <motion.div
                          layoutId="activeTurnkeyTab"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-sky-400"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TurnkeyProjectsSlide
