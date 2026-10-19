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
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F6F8FB]">
      {/* Main Content Container */}
      <div className="relative z-10 h-screen flex flex-col justify-between">
        
        {/* Top Context Label - "CAPABILITIES" */}
        <div className="pt-24 pl-20 sm:pl-28 lg:pl-36 xl:pl-44 pr-8 sm:pr-14 lg:pr-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#BFBFBF]/50 text-[#1646AF] text-xs font-semibold tracking-wider uppercase shadow-xs"
          >
            Capabilities
          </motion.div>
        </div>

        {/* Main Content Area - Two Column Layout */}
        <div className="flex-1 flex items-center pl-20 sm:pl-28 lg:pl-36 xl:pl-44 pr-8 sm:pr-14 lg:pr-20 pb-24">
          <div className="w-full grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            
            {/* Left Column - Main Text Content */}
            <div className="space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  {/* Main Title */}
                  <h2 
                    className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#111827] tracking-tight leading-snug"
                  >
                    {currentTopic.title}
                  </h2>

                  {/* Description Text */}
                  <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-xl">
                    {currentTopic.description}
                  </p>

                  {/* Action Button with AUREX Royal Blue */}
                  <motion.button
                    onClick={() => router.push('/capabilities?section=turnkey-projects')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group mt-2 inline-flex items-center gap-2.5 px-6 py-3 bg-[#1646AF] hover:bg-[#133C99] text-white rounded-lg font-medium shadow-sm transition-all duration-300 cursor-pointer text-sm"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight 
                      size={17} 
                      className="group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column - Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="relative h-[280px] sm:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden shadow-md border border-[#BFBFBF]/40 bg-[#F6F8FB]"
              >
                <Image 
                  src={topicImages[activeTab]}
                  alt={`${currentTopic.title} Laboratory`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Horizontal Navigation Bar */}
        <div className="w-full z-20 pb-6 pl-20 sm:pl-28 lg:pl-36 xl:pl-44 pr-8 sm:pr-14 lg:pr-20">
          <div className="relative bg-white/95 backdrop-blur-md rounded-2xl border border-[#BFBFBF]/40 shadow-sm p-2">
            {/* Tabs Row */}
            <div className="flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
              {turnkeyTopics.map((topic, index) => {
                const TabIcon = topic.icon;
                const isActive = activeTab === index;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setActiveTab(index)}
                    className={`
                      relative flex-1 px-4 py-3 rounded-xl font-medium text-xs lg:text-sm transition-all duration-200 whitespace-nowrap
                      ${isActive 
                        ? 'bg-[#133C99] text-white shadow-xs' 
                        : 'text-[#64748B] hover:text-[#111827] hover:bg-[#F6F8FB]'
                      }
                    `}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <TabIcon size={16} className={isActive ? 'text-white' : 'text-[#133C99]'} />
                      <span>{topic.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TurnkeyProjectsSlide
