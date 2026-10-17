'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Zap, Shield, Users } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'AutoLumo A6200',
    category: 'Immunoassay',
    description: 'Fully automated chemiluminescent immunoassay analyzer with high throughput and precision.',
    features: ['High Throughput', 'Precision Results', 'Easy Operation', 'Cost Effective'],
    image: '/api/placeholder/400/300',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'AutoMic-i600',
    category: 'Microbiology',
    description: 'Advanced automated ID/AST analyzer for rapid microbial identification and susceptibility testing.',
    features: ['Rapid Results', 'Automated Process', 'Wide Database', 'Quality Assured'],
    image: '/api/placeholder/400/300',
    badge: 'New'
  },
  {
    id: 3,
    name: 'AutoChem B2000',
    category: 'Clinical Chemistry',
    description: 'Comprehensive clinical chemistry analyzer with multiple testing capabilities.',
    features: ['Multi-Parameter', 'High Accuracy', 'User Friendly', 'Reliable'],
    image: '/api/placeholder/400/300',
    badge: 'Award Winner'
  }
]

const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-blue-50 to-indigo-100">
          {/* Placeholder for product image */}
          <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
            <div className="text-6xl text-blue-300">🔬</div>
          </div>
        </div>
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {product.badge}
            </span>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            View Details
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <div>
          <div className="text-sm text-blue-600 font-medium mb-1">{product.category}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </div>

        {/* Features */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-800">Key Features:</h4>
          <div className="grid grid-cols-2 gap-2">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <button className="group/btn w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
            <span>Learn More</span>
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

const ProductsShowcase = () => {
  return (
    <section className="py-16 bg-gray-50">
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
            <div className="h-1 w-12 bg-blue-600"></div>
            <span className="text-blue-600 font-medium">Our Products</span>
            <div className="h-1 w-12 bg-blue-600"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Innovative Diagnostic Solutions
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of cutting-edge diagnostic instruments 
            designed to enhance laboratory efficiency and deliver precise results.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-[#BFBFBF]/30">
            <div className="w-12 h-12 bg-[#F6F8FB] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#1646AF]/20">
              <Award className="text-[#1646AF]" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">ISO Certified</h3>
            <p className="text-[#64748B] text-sm">Quality management systems certified to international standards</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-[#BFBFBF]/30">
            <div className="w-12 h-12 bg-[#F6F8FB] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#1646AF]/20">
              <Zap className="text-[#1646AF]" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">High Performance</h3>
            <p className="text-[#64748B] text-sm">Advanced technology delivering superior accuracy and speed</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-[#BFBFBF]/30">
            <div className="w-12 h-12 bg-[#F6F8FB] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#133C99]/20">
              <Shield className="text-[#133C99]" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Reliable Support</h3>
            <p className="text-[#64748B] text-sm">24/7 technical support and comprehensive service network</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-[#BFBFBF]/30">
            <div className="w-12 h-12 bg-[#F6F8FB] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#133C99]/20">
              <Users className="text-[#133C99]" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Expert Training</h3>
            <p className="text-[#64748B] text-sm">Comprehensive training programs for optimal product utilization</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-[#133C99] rounded-2xl p-8 text-white border border-white/20 shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Laboratory?</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Explore our complete product portfolio and find the perfect solution for your diagnostic needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-white text-[#1646AF] px-8 py-3 rounded-lg font-medium hover:bg-[#F6F8FB] hover:text-[#133C99] transition-colors shadow-sm inline-block">
              View All Products
            </Link>
            <Link href="/contact" className="border border-white/60 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors inline-block">
              Request Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsShowcase