'use client';

import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const AutobioFooter: React.FC = () => {
  return (
    <footer className="w-full text-white relative overflow-hidden bg-[#133C99]">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%),
            linear-gradient(45deg, transparent 49%, rgba(255,255,255,0.02) 50%, transparent 51%)
          `
        }} />
      </div>
      
      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        
        {/* Top section with logo and social media */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          
          {/* Company logo and tagline */}
          <div className="mb-8 lg:mb-0">
            <h3 className="text-2xl lg:text-3xl font-black tracking-wider text-white leading-none">AUREX</h3>
            <p className="text-blue-200 text-xs tracking-[0.24em] uppercase mt-1.5 font-semibold">BIOTECH AUTOMATION</p>
          </div>

          {/* Social media icons */}
          <div className="flex flex-col items-start lg:items-end">
            <h4 className="text-lg font-semibold mb-4 text-blue-100">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Linkedin className="w-6 h-6 text-white group-hover:text-blue-200" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Youtube className="w-6 h-6 text-white group-hover:text-red-400" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Facebook className="w-6 h-6 text-white group-hover:text-blue-400" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Twitter className="w-6 h-6 text-white group-hover:text-blue-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"></div>

        {/* Six column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Company Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-100 relative">
              Company
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-300 to-blue-200"></div>
            </h4>
            <ul className="space-y-3">
              <li><a href="/company" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Company Profile</a></li>
              <li><a href="/company#social-responsibilities" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Social Responsibilities</a></li>
              <li><a href="/company#leadership-programme" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Leadership Programme</a></li>
              <li><a href="/company#investor" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Investor Opportunity</a></li>
              <li><a href="/company#vision" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Our Vision</a></li>
              <li><a href="/company#mission" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Our Mission</a></li>
              <li><a href="/company#culture" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Our Culture</a></li>
              <li><a href="/company#integrity" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Our Integrity</a></li>
              <li><a href="/company#testimonials" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Testimonials</a></li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-100 relative">
              Products
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-300 to-blue-200"></div>
            </h4>
            <ul className="space-y-3">
              <li><a href="/products#clinical-diagnostics" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Clinical Diagnostics Automations</a></li>
              <li><a href="/products#medical-imaging" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Medical Imaging Sciences</a></li>
              <li><a href="/products#advanced-andrology" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Advanced Andrology</a></li>
              <li><a href="/products#transfusion-medicine" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Transfusion Medicine</a></li>
              <li><a href="/products#stemcell-research" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Stemcel Research and Medicine</a></li>
              <li><a href="/products#critical-care" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Critical Care Solutions</a></li>
              <li><a href="/products#sample-tracking" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Sample Tracking Automation</a></li>
              <li><a href="/products#analytical-laboratory" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Analytical Laboratory Automations</a></li>
            </ul>
          </div>

          {/* Application Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-100 relative">
              Application
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-300 to-blue-200"></div>
            </h4>
            <ul className="space-y-3">
              <li><a href="/application#clinical-diagnostics" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Clinical Diagnostics</a></li>
              <li><a href="/application#life-science" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Life Science Research</a></li>
              <li><a href="/application#patient-monitoring" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Patient Monitoring</a></li>
              <li><a href="/application#veterinary" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Veterinary Solutions</a></li>
            </ul>
          </div>

          {/* Capabilities Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-100 relative">
              Capabilities
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-300 to-blue-200"></div>
            </h4>
            <ul className="space-y-3">
              <li><a href="/capabilities#turnkey-projects" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Turnkey Projects</a></li>
              <li><a href="/capabilities#service" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Service</a></li>
              <li><a href="/capabilities#supports" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Supports</a></li>
              <li><a href="/capabilities#knowledge-centre" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Knowledge Centre</a></li>
              <li><a href="/capabilities#digital-learning" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Digital Learning Platforms</a></li>
              <li><a href="/capabilities#skill-centre" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Skill Centre</a></li>
              <li><a href="/capabilities#downloads" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Downloads</a></li>
              <li><a href="/capabilities#workshops" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Workshops</a></li>
              <li><a href="/capabilities#media-centre" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Media Centre</a></li>
              <li><a href="/capabilities#blogs" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Blogs</a></li>
            </ul>
          </div>

          {/* IT Solutions Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-100 relative">
              IT Solutions
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-300 to-blue-200"></div>
            </h4>
            <ul className="space-y-3">
              <li><a href="/itsolutions#clinical-diagnostics" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Clinical Diagnostics Managements</a></li>
              <li><a href="/itsolutions#hospital" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Hospital Management</a></li>
              <li><a href="/itsolutions#rnd-lab" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Research and Development Laboratory Management</a></li>
            </ul>
          </div>

          {/* Contact Us & Legal Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-100 relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-300 to-blue-200"></div>
            </h4>
            <ul className="space-y-3">
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Inquire Now</a></li>
              <li><a href="/contact#support" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Technical Support</a></li>
              <li><a href="/contact#sales" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Sales Offices</a></li>
              <li><a href="/contact#distributor" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Find a Distributor</a></li>
              <li><a href="/legal#tenders" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Legal Tenders</a></li>
              <li><a href="/legal#sales-policy" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Our Sales Policy</a></li>
              <li><a href="/legal#service-policy" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Our Service Policy</a></li>
              <li><a href="/legal#warranty" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Warranty Policy</a></li>
              <li><a href="/legal#integrity" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Integrity Policy</a></li>
              <li><a href="/legal#disclaimers" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Disclaimers</a></li>
              <li><a href="/legal#cookies" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:pl-2">Cookies Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom contact and legal bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-white/80" />
                <span className="text-sm text-gray-300">163B/98, 163/BG,163B/h Chennai Main Road, Mundiyambakkam, Villupuram, VILLUPURAM, TAMIL NADU, 605601</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white/80" />
                <span className="text-sm text-gray-300">+91 9543910101</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white/80" />
                <span className="text-sm text-gray-300">+91 8144418046</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-white/80" />
                <span className="text-sm text-gray-300">sales@aurexbiotech.com</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-300">
              © 2026 AUREX. All rights reserved.
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default AutobioFooter;