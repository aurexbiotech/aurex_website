'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Eye, 
  Target, 
  Heart, 
  Shield,
  MessageSquare,
  ArrowRight
} from 'lucide-react'

/**
 * Company Section Component - Royal Business Style
 * Replicates the Autobio "Endocrine Hormone" Solutions slide design
 * Full-screen slide with bottom horizontal navigation tabs
 */
const CompanySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)
  const router = useRouter()

  // Route mapping for each topic - using query parameters for specific sections
  const topicRoutes: { [key: number]: string } = {
    0: '/company?section=company-profile', // Company Profile
    1: '/company?section=investor-opportunity', // Investor Opportunity
    2: '/company?section=our-vision', // Our Vision
    3: '/company?section=our-mission', // Our Mission
    4: '/company?section=our-culture', // Our Culture
    5: '/company?section=our-integrity', // Our Integrity
    6: '/company?section=social-responsibilities', // Social Responsibilities
    7: '/company?section=testimonials'  // Testimonials
  }

  // Company sub-topics for bottom navigation
  const companyTopics = [
    {
      id: 'profile',
      name: 'Company Profile',
      icon: Building2,
      title: 'Company Profile',
      description: 'AUREX is a premier diagnostic solutions provider empowering healthcare through advanced automation, precision engineering, and reliable clinical technology. Committed to delivering world-class diagnostic instruments, laboratory automation, and dependable technical support.',
      image: '/images/company-profile.jpg', // Placeholder
      stats: [
        { label: 'Excellence', value: 'High Precision' },
        { label: 'Support', value: '24/7 Dedicated' },
        { label: 'Quality', value: 'Certified Standards' }
      ]
    },
    {
      id: 'investor',
      name: 'Investor Opportunity',
      icon: TrendingUp,
      title: 'Investor Opportunity',
      description: 'Join us in revolutionizing global healthcare. AUREX offers strong growth potential with a commitment to continuous innovation, market expansion, and sustainable healthcare impact.',
      image: '/images/investor.jpg',
      stats: [
        { label: 'Annual Growth', value: '18%' },
        { label: 'Market Cap', value: '$850M' },
        { label: 'ROI', value: '22%' }
      ]
    },
    {
      id: 'vision',
      name: 'Our Vision',
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the world\'s most trusted partner in diagnostic innovation, empowering healthcare professionals with cutting-edge technology that saves lives and improves patient outcomes globally.',
      image: '/images/vision.jpg',
      stats: [
        { label: 'Innovation Focus', value: '100%' },
        { label: 'R&D Investment', value: '18%' },
        { label: 'Patents', value: '200+' }
      ]
    },
    {
      id: 'mission',
      name: 'Our Mission',
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver exceptional diagnostic solutions that enable accurate, timely, and accessible healthcare. We strive to bridge the gap between advanced technology and clinical excellence through continuous innovation.',
      image: '/images/mission.jpg',
      stats: [
        { label: 'Products Launched', value: '50+' },
        { label: 'Tests Daily', value: '2M+' },
        { label: 'Accuracy Rate', value: '99.8%' }
      ]
    },
    {
      id: 'culture',
      name: 'Our Culture',
      icon: Users,
      title: 'Our Culture',
      description: 'We foster a culture of excellence, collaboration, and innovation. Our diverse team of experts works together in an environment that encourages creativity, continuous learning, and professional growth.',
      image: '/images/culture.jpg',
      stats: [
        { label: 'Employee Satisfaction', value: '94%' },
        { label: 'Diversity Score', value: '85%' },
        { label: 'Innovation Index', value: '92%' }
      ]
    },
    {
      id: 'integrity',
      name: 'Our Integrity',
      icon: Shield,
      title: 'Our Integrity',
      description: 'Integrity is at the core of everything we do. We maintain the highest standards of quality, ethics, and regulatory compliance, ensuring trust and reliability in every product and service we deliver.',
      image: '/images/integrity.jpg',
      stats: [
        { label: 'Certifications', value: 'ISO 13485' },
        { label: 'Compliance Rate', value: '100%' },
        { label: 'Audit Score', value: '98%' }
      ]
    },
    {
      id: 'social',
      name: 'Social Responsibilities',
      icon: Heart,
      title: 'Social Responsibilities',
      description: 'We are committed to making healthcare accessible to all. Our social responsibility programs focus on community health initiatives, sustainable practices, and partnerships with medical institutions in underserved regions.',
      image: '/images/social-responsibility.jpg',
      stats: [
        { label: 'Communities Served', value: '150+' },
        { label: 'Donations', value: '$5M+' },
        { label: 'Green Initiatives', value: '100%' }
      ]
    },
    {
      id: 'testimonials',
      name: 'Testimonials',
      icon: MessageSquare,
      title: 'Client Testimonials',
      description: 'Hear from healthcare professionals worldwide who trust AUREX for their diagnostic needs. Our commitment to excellence has earned us partnerships with leading medical institutions globally.',
      image: '/images/testimonials.jpg',
      stats: [
        { label: 'Customer Rating', value: '4.9/5' },
        { label: 'Testimonials', value: '1,200+' },
        { label: 'Partnerships', value: '500+' }
      ]
    }
  ]

  const currentTopic = companyTopics[activeTab]

  // Background images for each topic
  const backgroundImages: { [key: number]: string } = {
    0: '/images/3915891.jpg', // Company Profile
    1: '/images/investor-opportunity-banner.jpg', // Investor Opportunity - business growth
    2: '/images/our-vision-banner.jpg', // Our Vision - future/technology
    3: '/images/our-mission-banner.jpg', // Our Mission - healthcare/medical
    4: '/images/our-culture-banner.jpg', // Our Culture - teamwork
    5: '/images/our-integrity-banner.jpg', // Our Integrity - quality/compliance
    6: '/images/social-responsibilities-banner.jpg', // Social Responsibilities - community
    7: '/images/testimonials-banner.jpg'  // Testimonials - people/healthcare
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F6F8FB]">
      {/* Main Content Container */}
      <div className="relative z-10 h-screen flex flex-col justify-between">
        {/* Top Section Label */}
        <div className="pt-20 sm:pt-22 pl-20 sm:pl-28 lg:pl-36 xl:pl-44 pr-8 sm:pr-14 lg:pr-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#BFBFBF]/50 text-[#1646AF] text-xs font-semibold tracking-wider uppercase shadow-xs"
          >
            Company Overview
          </motion.div>
        </div>

        {/* Main Content Area - Two Column Layout */}
        <div className="flex-1 flex items-center pl-20 sm:pl-28 lg:pl-36 xl:pl-44 pr-8 sm:pr-14 lg:pr-20 py-2 sm:py-4">
          <div className="w-full grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            {/* Main Text Content - Left Side */}
            <div className="space-y-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Main Title - Refined business-class sizing */}
                  <h2 
                    className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#111827] tracking-tight leading-snug"
                  >
                    {currentTopic.title}
                  </h2>

                  {/* Description Text */}
                  <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-xl">
                    {currentTopic.description}
                  </p>

                  {/* More Info Button with AUREX Royal Blue Accent */}
                  <motion.button
                    onClick={() => router.push(topicRoutes[activeTab])}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group mt-2 inline-flex items-center gap-2.5 px-6 py-3 bg-[#1646AF] hover:bg-[#133C99] text-white rounded-lg font-medium shadow-sm transition-all duration-300 cursor-pointer text-sm"
                  >
                    <span>More Info</span>
                    <ArrowRight 
                      size={17} 
                      className="group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image Section - Right Side */}
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
                  src={backgroundImages[activeTab]}
                  alt={currentTopic.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={activeTab === 0}
                  loading={activeTab === 0 ? "eager" : "lazy"}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Horizontal Navigation Bar */}
        <div className="w-full z-20 pb-6 pl-20 sm:pl-28 lg:pl-36 xl:pl-44 pr-8 sm:pr-14 lg:pr-20">
          <div className="relative bg-white/95 backdrop-blur-md rounded-2xl border border-[#BFBFBF]/40 shadow-sm p-2">
            {/* Tabs Row */}
            <div className="flex items-center justify-between gap-1 overflow-x-auto scrollbar-none">
              {companyTopics.map((topic, index) => {
                const TabIcon = topic.icon;
                const isActive = activeTab === index;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setActiveTab(index)}
                    className={`
                      relative flex-1 px-3 py-2.5 rounded-xl font-medium text-xs lg:text-sm transition-all duration-200 whitespace-nowrap
                      ${isActive 
                        ? 'bg-[#133C99] text-white shadow-xs' 
                        : 'text-[#64748B] hover:text-[#111827] hover:bg-[#F6F8FB]'
                      }
                    `}
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      <TabIcon size={16} className={isActive ? 'text-white' : 'text-[#133C99]'} />
                      <span className="hidden md:inline">
                        {topic.name}
                      </span>
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

export default CompanySection
