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
    <aside 
      aria-label="Quick contact and social channels" 
      className="fixed right-3 sm:right-6 top-1/2 transform -translate-y-1/2 z-40 hidden sm:block"
    >
      <div className="bg-white rounded-xl shadow-md border border-[#BFBFBF]/40 overflow-hidden">
        {/* Contact Tools Section */}
        <div className="p-1.5 space-y-1">
          {/* Chat */}
          <a
            href="/contact"
            aria-label="Live Chat & Customer Inquiry"
            className="group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-lg hover:bg-[#F6F8FB] transition-all duration-200"
          >
            <MessageCircle 
              className="w-5 h-5 text-[#133C99] group-hover:text-[#1646AF] transition-colors duration-200" 
            />
          </a>

          {/* WhatsApp */}
          <a
            href="tel:+919543910101"
            aria-label="Call AUREX via Phone"
            className="group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-lg hover:bg-[#F6F8FB] transition-all duration-200"
          >
            <Phone 
              className="w-5 h-5 text-[#133C99] group-hover:text-[#1646AF] transition-colors duration-200" 
            />
          </a>

          {/* Email */}
          <a
            href="mailto:info@aurexbiotech.com"
            aria-label="Send Email to AUREX"
            className="group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-lg hover:bg-[#F6F8FB] transition-all duration-200"
          >
            <Mail 
              className="w-5 h-5 text-[#133C99] group-hover:text-[#1646AF] transition-colors duration-200" 
            />
          </a>

          {/* Phone */}
          <a
            href="tel:+918144418046"
            aria-label="Emergency Call Support"
            className="group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-lg hover:bg-[#F6F8FB] transition-all duration-200"
          >
            <PhoneCall 
              className="w-5 h-5 text-[#133C99] group-hover:text-[#1646AF] transition-colors duration-200" 
            />
          </a>
        </div>

        {/* Separator Line */}
        <div className="px-3">
          <div className="h-px bg-[#BFBFBF]/40"></div>
        </div>

        {/* Social Media Section */}
        <div className="p-1.5 space-y-1">
          {/* LinkedIn */}
          <a
            href="#"
            aria-label="AUREX LinkedIn Profile"
            className="group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-lg hover:bg-[#F6F8FB] transition-all duration-200"
          >
            <Linkedin 
              className="w-5 h-5 text-[#133C99] group-hover:text-[#1646AF] transition-colors duration-200" 
            />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@AnalyzeBiotechindia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="AUREX YouTube Channel"
            className="group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-lg hover:bg-[#F6F8FB] transition-all duration-200"
          >
            <Youtube 
              className="w-5 h-5 text-[#133C99] group-hover:text-[#1646AF] transition-colors duration-200" 
            />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/AnalyzeBiotech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="AUREX Facebook Page"
            className="group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-lg hover:bg-[#F6F8FB] transition-all duration-200"
          >
            <Facebook 
              className="w-5 h-5 text-[#133C99] group-hover:text-[#1646AF] transition-colors duration-200" 
            />
          </a>

          {/* X (Twitter) */}
          <a
            href="#"
            aria-label="AUREX X Profile"
            className="group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-lg hover:bg-[#F6F8FB] transition-all duration-200"
          >
            <XIcon 
              className="w-5 h-5 text-[#133C99] group-hover:text-[#1646AF] transition-colors duration-200" 
            />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default FixedSideBar;