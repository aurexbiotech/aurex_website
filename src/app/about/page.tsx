'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Award, 
  Globe, 
  Heart, 
  Shield, 
  Lightbulb,
  Target,
  Calendar,
  Building2
} from 'lucide-react'

const milestones = [
  { year: '1999', event: 'Company founded with a vision to revolutionize diagnostics' },
  { year: '2005', event: 'First immunoassay analyzer launched' },
  { year: '2010', event: 'Expanded into microbiology solutions' },
  { year: '2015', event: 'Reached 50+ countries worldwide' },
  { year: '2020', event: 'Launched molecular diagnostics platform' },
  { year: '2024', event: 'Serving 100+ countries with 500+ products' }
]

const leadership = [
  {
    name: 'Dr. Sarah Chen',
    title: 'Chief Executive Officer',
    bio: 'Leading AUREX with 20+ years of experience in healthcare innovation.',
    education: 'PhD in Biomedical Engineering, Harvard University'
  },
  {
    name: 'Dr. Michael Rodriguez',
    title: 'Chief Technology Officer',
    bio: 'Driving technological advancement and R&D initiatives.',
    education: 'PhD in Molecular Biology, Stanford University'
  },
  {
    name: 'Lisa Johnson',
    title: 'Chief Operating Officer',
    bio: 'Overseeing global operations and quality management.',
    education: 'MBA Operations Management, Wharton School'
  },
  {
    name: 'Dr. James Liu',
    title: 'VP of Research & Development',
    bio: 'Leading innovation in diagnostic technologies.',
    education: 'PhD in Clinical Chemistry, MIT'
  }
]

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
    <div className="min-h-screen bg-gray-50">
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

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              25 years of innovation and growth in diagnostic technology
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#BFBFBF]"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                      <div className="text-2xl font-bold text-[#1646AF] mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-[#1646AF] rounded-full border-4 border-white shadow-md z-10"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence in healthcare diagnostics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="h-48 bg-gradient-to-br from-[#F6F8FB] to-blue-50 flex items-center justify-center">
                  <Users className="text-[#1646AF]" size={64} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <div className="text-[#1646AF] font-medium mb-3">{leader.title}</div>
                  <p className="text-gray-600 text-sm mb-3">{leader.bio}</p>
                  <div className="text-xs text-gray-500 border-t pt-3">
                    {leader.education}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#133C99] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-wide">AUREX by the Numbers</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our global impact in advancing healthcare diagnostics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Calendar, number: '25+', label: 'Years of Innovation' },
              { icon: Globe, number: '100+', label: 'Countries Served' },
              { icon: Building2, number: '5,000+', label: 'Laboratories' },
              { icon: Award, number: '50+', label: 'Industry Awards' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#1646AF] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}