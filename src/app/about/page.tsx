'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Shield, 
  Lightbulb,
  Target
} from 'lucide-react'
import Footer from '@/components/Footer'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously pushing the boundaries of diagnostic technology',
    color: 'from-[#1646AF] to-[#133C99]'
  },
  {
    icon: Shield,
    title: 'Quality',
    description: 'Maintaining the highest standards in all our products and services',
    color: 'from-[#133C99] to-[#0E2A6C]'
  },
  {
    icon: Heart,
    title: 'Patient Care',
    description: 'Every solution designed with patient outcomes in mind',
    color: 'from-[#1646AF] to-[#0E2A6C]'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Striving for perfection in everything we do',
    color: 'from-[#1E3A8A] to-[#1646AF]'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0B1528] via-[#133C99] to-[#1646AF] text-white py-12 sm:py-16 md:py-20 pt-20 sm:pt-24 md:pt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-blue-200 mb-3 sm:mb-4">About</h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-wider">AUREX</h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl">
                AUREX is a pioneering force in biotechnology innovation, developing cutting-edge diagnostic solutions that bridge the gap between advanced science and practical healthcare applications.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed max-w-3xl mt-4 sm:mt-6">
                Our mission is to democratize access to precision diagnostics, enabling healthcare professionals worldwide to deliver faster, more accurate results that improve patient outcomes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We are committed to the advancement and improvement of medical laboratory technology, 
                  serving human health by providing innovative, reliable, and accessible diagnostic solutions 
                  to healthcare providers worldwide.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2"></div>
                    <p className="text-gray-600">Advance medical laboratory technology</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2"></div>
                    <p className="text-gray-600">Improve healthcare outcomes</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2"></div>
                    <p className="text-gray-600">Serve global healthcare needs</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#F6F8FB] border border-gray-100 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To be the global leader in diagnostic innovation, enabling healthcare professionals 
                  to make informed decisions that save lives and improve patient care worldwide.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1646AF] mb-1">2030</div>
                    <div className="text-sm text-gray-600">Carbon Neutral</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1646AF] mb-1">150+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our decisions and shape our culture
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}