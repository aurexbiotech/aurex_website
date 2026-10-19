'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Youtube, 
  Facebook, 
  ArrowRight
} from 'lucide-react'
import XIcon from './XIcon'

const Footer = () => {
  return (
    <footer className="text-white bg-[#133C99]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div>
              <h3 className="text-xl sm:text-2xl font-black tracking-wider text-white leading-none">AUREX</h3>
              <p className="text-xs text-blue-200 tracking-[0.24em] uppercase mt-1.5 font-semibold">BIOTECH AUTOMATION</p>
            </div>
            
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Leading the future of in vitro diagnostics with cutting-edge technology, 
              precision instruments, and comprehensive solutions for modern laboratories.
            </p>
            
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone size={14} className="text-white/80 flex-shrink-0" />
                <span className="text-sm sm:text-base text-white/90">+91 9543910101</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone size={14} className="text-white/80 flex-shrink-0" />
                <span className="text-sm sm:text-base text-white/90">+91 8144418046</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail size={14} className="text-white/80 flex-shrink-0" />
                <span className="text-sm sm:text-base text-white/90 break-all">sales@aurexbiotech.com</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin size={14} className="text-white/80 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-white/90 leading-relaxed">163B/98, 163/BG,163B/h Chennai Main Road, Mundiyambakkam, Villupuram, VILLUPURAM, TAMIL NADU, 605601</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-semibold text-white">Products</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/products#clinical-diagnostics" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                  Clinical Diagnostics
                </Link>
              </li>
              <li>
                <Link href="/products#medical-imaging" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200">
                  Medical Imaging
                </Link>
              </li>
              <li>
                <Link href="/products#advanced-andrology" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200">
                  Advanced Andrology
                </Link>
              </li>
              <li>
                <Link href="/products#critical-care" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200">
                  Critical Care
                </Link>
              </li>
              <li>
                <Link href="/products#sample-tracking" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200">
                  Sample Tracking
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white hover:text-white/80 font-medium transition-colors flex items-center space-x-1 underline decoration-white/40">
                  <span>View All Products</span>
                  <ArrowRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Services */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-semibold text-white">Solutions & Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/capabilities#turnkey-projects" className="text-white/80 hover:text-white transition-colors">
                  Turnkey Projects
                </Link>
              </li>
              <li>
                <Link href="/capabilities#service" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200">
                  Service Solutions
                </Link>
              </li>
              <li>
                <Link href="/capabilities#supports" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="/capabilities#workshops" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="/itsolutions" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200">
                  IT Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & News */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/company#company-profile" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/capabilities#media-centre" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/company#leadership-programme" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/company#investor-opportunity" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/company#social-responsibilities" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Social Media */}
            <div className="pt-4">
              <h5 className="text-sm font-semibold text-white mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-white/10 hover:bg-white/20 transition-all"
                >
                  <Linkedin size={16} />
                </a>
                <a 
                  href="https://www.youtube.com/@aurexbiotech" 
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-white/10 hover:bg-white/20 transition-all"
                >
                  <Youtube size={16} />
                </a>
                <a 
                  href="https://www.facebook.com/aurexbiotech/" 
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-white/10 hover:bg-white/20 transition-all"
                >
                  <Facebook size={16} />
                </a>
                <a 
                  href="https://x.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                >
                  <XIcon size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-8 bg-[#1646AF] border-t border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold text-white">Stay Updated with AUREX</h3>
              <p className="text-white/80">Get the latest diagnostic advancements, product releases, and technical insights.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 text-white rounded-lg border border-white/30 focus:border-white focus:outline-none flex-1 md:w-80 bg-white/10 placeholder-white/60"
              />
              <button className="px-6 py-3 bg-white text-[#1646AF] hover:bg-[#F6F8FB] hover:text-[#133C99] rounded-lg transition-colors font-medium shadow-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-6 bg-[#0E2A6C]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-white/90 text-sm">
              © 2026 AUREX. All Rights Reserved.
            </div>
            <div className="flex space-x-6 text-sm text-white/80">
              <Link href="/legal" className="hover:text-white transition-colors">
                Sales Policy
              </Link>
              <Link href="/legal#integrity" className="hover:text-white transition-colors">
                Integrity Policy
              </Link>
              <Link href="/legal#disclaimer" className="hover:text-white transition-colors">
                Disclaimer
              </Link>
              <Link href="/legal#cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer