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
      {/* Floating Media Bar without white background container */}
      <div className="flex flex-col items-center space-y-2 bg-transparent">
        {/* Contact Tools Section */}
        <div className="flex flex-col items-center space-y-2">
          {/* Chat */}
          <a
            href="/contact"
            aria-label="Live Chat & Customer Inquiry"
            className="group flex items-center justify-center w-10 h-10 transition-all duration-200 cursor-pointer"
          >
            <MessageCircle 
              className="w-5 h-5 text-[#133C99] group-hover:text-[#1646AF] group-hover:scale-115 transition-all duration-200" 
            />
          </a>

          {/* WhatsApp / Phone */}
          <a
            href="tel:+919543910101"
            aria-label="Call AUREX via Phone"
            className="group flex items-center justify-center w-10 h-10 transition-all duration-200 cursor-pointer"
          >
            <Phone 
              className="w-5 h-5 text-[#133C99] group-hover:text-[#1646AF] group-hover:scale-115 transition-all duration-200" 
            />
          </a>

          {/* Email */}
          <a
            href="mailto:info@aurexbiotech.com"
            aria-label="Send Email to AUREX"
            className="group flex items-center justify-center w-10 h-10 transition-all duration-200 cursor-pointer"
          >
            <Mail 
              className="w-5 h-5 text-[#133C99] group-hover:text-[#1646AF] group-hover:scale-115 transition-all duration-200" 
            />
          </a>

          {/* Emergency Phone */}
          <a
            href="tel:+918144418046"
            aria-label="Emergency Call Support"
            className="group flex items-center justify-center w-10 h-10 transition-all duration-200 cursor-pointer"
          >
            <PhoneCall 
              className="w-5 h-5 text-[#133C99] group-hover:text-[#1646AF] group-hover:scale-115 transition-all duration-200" 
            />
          </a>
        </div>

        {/* Subtle Separator Line */}
        <div className="w-5 h-px bg-[#133C99]/30 my-0.5" />

        {/* Social Media Section */}
        <div className="flex flex-col items-center space-y-2">
          {/* LinkedIn */}
          <a
            href="#"
            aria-label="AUREX LinkedIn Profile"
            className="group flex items-center justify-center w-10 h-10 transition-all duration-200 cursor-pointer"
          >
            <Linkedin 
              className="w-5 h-5 text-[#133C99] group-hover:text-[#1646AF] group-hover:scale-115 transition-all duration-200" 
            />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@aurexbiotech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="AUREX YouTube Channel"
            className="group flex items-center justify-center w-10 h-10 transition-all duration-200 cursor-pointer"
          >
            <Youtube 
              className="w-5 h-5 text-[#133C99] group-hover:text-[#1646AF] group-hover:scale-115 transition-all duration-200" 
            />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/aurexbiotech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="AUREX Facebook Page"
            className="group flex items-center justify-center w-10 h-10 transition-all duration-200 cursor-pointer"
          >
            <Facebook 
              className="w-5 h-5 text-[#133C99] group-hover:text-[#1646AF] group-hover:scale-115 transition-all duration-200" 
            />
          </a>

          {/* X (Twitter) */}
          <a
            href="#"
            aria-label="AUREX X Profile"
            className="group flex items-center justify-center w-10 h-10 transition-all duration-200 cursor-pointer"
          >
            <XIcon 
              className="w-5 h-5 text-[#133C99] group-hover:text-[#1646AF] group-hover:scale-115 transition-all duration-200" 
            />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default FixedSideBar;