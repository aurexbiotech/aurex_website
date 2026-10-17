'use client';

import React from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  PhoneCall,
  Linkedin,
  Youtube,
  Facebook
} from 'lucide-react';

// X (Twitter) Icon Component
const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FixedSideBar: React.FC = () => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="bg-gray-100 rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        {/* Contact Tools Section */}
        <div className="p-2 space-y-1">
          {/* Chat */}
          <a
            href="#"
            className="group flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm hover:bg-[#F6F8FB] transition-all duration-300 hover:shadow-md"
          >
            <MessageCircle 
              className="w-6 h-6 text-[#133C99] group-hover:text-[#1646AF] transition-colors duration-300" 
            />
          </a>

          {/* WhatsApp */}
          <a
            href="tel:+919543910101"
            className="group flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm hover:bg-[#F6F8FB] transition-all duration-300 hover:shadow-md"
          >
            <Phone 
              className="w-6 h-6 text-[#133C99] group-hover:text-[#1646AF] transition-colors duration-300" 
            />
          </a>

          {/* Email */}
          <a
            href="mailto:info@aurexbiotech.com"
            className="group flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm hover:bg-[#F6F8FB] transition-all duration-300 hover:shadow-md"
          >
            <Mail 
              className="w-6 h-6 text-[#133C99] group-hover:text-[#1646AF] transition-colors duration-300" 
            />
          </a>

          {/* Phone */}
          <a
            href="tel:+919543910101"
            className="group flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm hover:bg-[#F6F8FB] transition-all duration-300 hover:shadow-md"
          >
            <PhoneCall 
              className="w-6 h-6 text-[#133C99] group-hover:text-[#1646AF] transition-colors duration-300" 
            />
          </a>
        </div>

        {/* Separator Line */}
        <div className="px-4">
          <div className="h-px bg-gray-300"></div>
        </div>

        {/* Social Media Section */}
        <div className="p-2 space-y-1">
          {/* LinkedIn */}
          <a
            href="#"
            className="group flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm hover:bg-[#F6F8FB] transition-all duration-300 hover:shadow-md"
          >
            <Linkedin 
              className="w-6 h-6 text-[#133C99] group-hover:text-[#1646AF] transition-colors duration-300" 
            />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@AnalyzeBiotechindia"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm hover:bg-[#F6F8FB] transition-all duration-300 hover:shadow-md"
          >
            <Youtube 
              className="w-6 h-6 text-[#133C99] group-hover:text-[#1646AF] transition-colors duration-300" 
            />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/AnalyzeBiotech/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm hover:bg-[#F6F8FB] transition-all duration-300 hover:shadow-md"
          >
            <Facebook 
              className="w-6 h-6 text-[#133C99] group-hover:text-[#1646AF] transition-colors duration-300" 
            />
          </a>

          {/* X (Twitter) */}
          <a
            href="#"
            className="group flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm hover:bg-[#F6F8FB] transition-all duration-300 hover:shadow-md"
          >
            <XIcon 
              className="w-6 h-6 text-[#133C99] group-hover:text-[#1646AF] transition-colors duration-300" 
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FixedSideBar;