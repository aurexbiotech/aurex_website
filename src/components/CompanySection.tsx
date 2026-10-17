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
    1: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80', // Investor Opportunity - business growth
    2: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80', // Our Vision - future/technology
    3: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80', // Our Mission - healthcare/medical
    4: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80', // Our Culture - teamwork
    5: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80', // Our Integrity - quality/compliance
    6: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80', // Social Responsibilities - community
    7: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80'  // Testimonials - people/healthcare
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Dynamic Background with Blur - Different image for each topic */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 blur-md transition-all duration-500"
          style={{
            backgroundImage: `url(${backgroundImages[activeTab]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* Top Section Label (like "Solution" in the reference) */}
        <div className="pt-24 pl-16">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-gray-300 font-light"
          >
            Company
          </motion.p>
        </div>

        {/* Main Content Area - Two Column Layout */}
        <div className="flex-1 flex items-center px-16 pb-32">
          <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Main Text Content - Left Side */}
            <div className="space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
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

                  {/* More Info Button with AUREX Royal Blue Accent */}
                  <motion.button
                    onClick={() => router.push(topicRoutes[activeTab])}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group mt-8 flex items-center gap-3 px-8 py-4 bg-[#1646AF] hover:bg-[#133C99] text-white rounded-full font-semibold shadow-lg shadow-[#1646AF]/30 transition-all duration-300 border border-white/20"
                  >
                    <span>More Info</span>
                    <ArrowRight 
                      size={20} 
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
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Horizontal Navigation Bar - CRUCIAL Element */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="px-8 pb-6">
            {/* Navigation Tabs Container */}
            <div className="relative">
              {/* Background blur panel */}
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-white/10" />
              
              {/* Tabs Row */}
              <div className="relative flex items-center justify-between gap-2 px-6 py-4">
                {companyTopics.map((topic, index) => {
                  const TabIcon = topic.icon
                  return (
                    <motion.button
                      key={topic.id}
                      onClick={() => setActiveTab(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        relative flex-1 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300
                        ${activeTab === index 
                          ? 'bg-[#1646AF] text-white shadow-lg shadow-[#1646AF]/40 border border-white/20' 
                          : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/70 hover:text-white'
                        }
                      `}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <TabIcon size={16} />
                        <span className="hidden lg:inline whitespace-nowrap">
                          {topic.name}
                        </span>
                      </div>
                      
                      {/* Active indicator */}
                      {activeTab === index && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white"
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

export default CompanySection
