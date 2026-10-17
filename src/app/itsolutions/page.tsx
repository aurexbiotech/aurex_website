'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { Monitor, Activity, Database } from 'lucide-react'

// Sub-navigation items
const itSolutionsSubNavigation = [
  { id: 'clinical-diagnostics', name: 'Clinical Diagnostics Management', active: true },
  { id: 'hospital-management', name: 'Hospital Management', active: false },
  { id: 'lab-management', name: 'R&D Lab Management', active: false }
]

// Hero Banner Component
const HeroBanner = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528]/90 via-[#133C99]/85 to-[#1646AF]/85 z-10"></div>
        <Image
          src="/images/background.jpg"
          alt="IT Solutions and Technology"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-100 mb-8 tracking-tight">
            IT Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Advanced IT solutions for modern healthcare and laboratory management.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Sub Navigation Component
const SubNavigation = ({ activeSection, setActiveSection }: { 
  activeSection: string, 
  setActiveSection: (section: string) => void 
}) => {
  return (
    <section className="sticky top-0 z-40 bg-gray-50/95 backdrop-blur-md border-b-2 border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex flex-wrap justify-center gap-1">
          {itSolutionsSubNavigation.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveSection(item.id)}
              className={`px-6 py-3 font-semibold text-sm transition-all duration-300 border-b-2 ${
                activeSection === item.id
                  ? 'text-[#1646AF] border-[#1646AF] bg-white shadow-sm'
                  : 'text-gray-600 border-transparent hover:text-[#1646AF] hover:bg-white/50'
              }`}
            >
              {item.name}
            </motion.button>
          ))}
        </nav>
      </div>
    </section>
  )
}

// Main IT Solutions Page Component
export default function ITSolutionsPage() {
  const [activeSection, setActiveSection] = useState('clinical-diagnostics')

  const getSectionIcon = () => {
    switch (activeSection) {
      case 'clinical-diagnostics': return Monitor
      case 'hospital-management': return Activity
      case 'lab-management': return Database
      default: return Monitor
    }
  }

  const getSectionTitle = () => {
    const section = itSolutionsSubNavigation.find(nav => nav.id === activeSection)
    return section ? section.name : 'Clinical Diagnostics Management'
  }

  const Icon = getSectionIcon()

  return (
    <>
      <HeroBanner />
      <SubNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Icon className="w-16 h-16 text-[#1646AF] mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-[#0B1528]">
                {getSectionTitle()}
              </h1>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1646AF] to-[#133C99] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge IT solutions for {getSectionTitle().toLowerCase()}, 
              designed to streamline operations and enhance efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#F6F8FB] border border-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[#1646AF]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1528] mb-3 text-center">
                  IT Solution {item}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Advanced IT solution for {getSectionTitle().toLowerCase()}.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}