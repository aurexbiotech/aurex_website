'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Globe, Award, Building2, Microscope } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    number: '25+',
    label: 'Years Experience',
    description: 'Leading innovation in diagnostics'
  },
  {
    icon: Globe,
    number: '100+',
    label: 'Countries Served',
    description: 'Global reach and presence'
  },
  {
    icon: Building2,
    number: '5000+',
    label: 'Laboratories',
    description: 'Worldwide laboratory network'
  },
  {
    icon: Microscope,
    number: '500+',
    label: 'Products',
    description: 'Comprehensive solutions portfolio'
  },
  {
    icon: Users,
    number: '6000+',
    label: 'Employees',
    description: 'Expert team worldwide'
  },
  {
    icon: Award,
    number: '50+',
    label: 'Awards',
    description: 'Industry recognition'
  }
]

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-1 w-12 bg-[#1646AF]"></div>
            <span className="text-[#1646AF] font-bold tracking-wider uppercase text-sm">About AUREX</span>
            <div className="h-1 w-12 bg-[#1646AF]"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Committed to Excellence in Healthcare
          </h2>
          
          <p className="text-xl text-[#64748B] max-w-4xl mx-auto leading-relaxed">
            We uphold the tenet of &ldquo;committed to the advancement and improvement of medical laboratory 
            technology, serving human health&rdquo; and strive to provide both cost-efficient and high-quality 
            products to medical laboratories worldwide.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center p-8 bg-[#F6F8FB] border border-[#BFBFBF]/40 rounded-2xl hover:border-[#1646AF]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white border border-[#1646AF]/20 shadow-sm rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <stat.icon className="text-[#1646AF]" size={32} />
              </div>
              
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-gray-900 mb-2"
              >
                {stat.number}
              </motion.div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</h3>
              <p className="text-[#64748B]">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Company Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Innovation Driven by Purpose
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Since our founding, AUREX has been at the forefront of diagnostic innovation, 
                developing cutting-edge solutions that transform healthcare delivery worldwide.
              </p>
              
              <p>
                Our commitment to research and development, combined with our deep understanding of 
                laboratory needs, enables us to create products that enhance efficiency, accuracy, 
                and accessibility in medical diagnostics.
              </p>
              
              <p>
                We believe that advanced diagnostic technology should be accessible to laboratories 
                of all sizes, from major medical centers to remote healthcare facilities.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Our Core Values</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900">Innovation</div>
                    <div className="text-sm text-gray-600">Continuous advancement in technology</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900">Quality</div>
                    <div className="text-sm text-gray-600">Uncompromising standards</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900">Reliability</div>
                    <div className="text-sm text-gray-600">Dependable solutions</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-gray-900">Service</div>
                    <div className="text-sm text-gray-600">Customer-focused approach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              {/* Laboratory Scene Illustration */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-200 rounded-lg flex items-center justify-center">
                    <Microscope className="text-blue-700" size={32} />
                  </div>
                  <div>
                    <div className="h-3 bg-blue-300 rounded w-24 mb-2"></div>
                    <div className="h-2 bg-blue-200 rounded w-32"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-white rounded-lg shadow-sm"></div>
                  <div className="h-20 bg-white rounded-lg shadow-sm"></div>
                  <div className="h-20 bg-white rounded-lg shadow-sm"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                  <div className="text-sm text-blue-700 font-medium">Status: Online</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#1646AF]/20 to-[#133C99]/20 rounded-full blur-xl"
            ></motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-[#133C99]/20 to-[#1646AF]/20 rounded-full blur-xl"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection