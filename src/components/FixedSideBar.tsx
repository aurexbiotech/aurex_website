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
      {/* Floating Media Bar - Transparent background with interactive scaling and vivid brand highlights on hover */}
      <div className="flex flex-col items-center space-y-2 bg-transparent">
        {/* Contact Tools Section */}
        <div className="flex flex-col items-center space-y-1.5">
          {/* Chat / Inquire */}
          <div className="relative group flex items-center justify-center">
            <a
              href="/contact"
              aria-label="Live Chat & Customer Inquiry"
              className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ease-out hover:bg-[#1646AF]/15 cursor-pointer"
            >
              <MessageCircle 
                className="w-5 h-5 text-[#133C99] transition-all duration-300 ease-out group-hover:text-[#1646AF] group-hover:scale-130 drop-shadow-xs" 
              />
            </a>
            {/* Tooltip on hover */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 z-50 whitespace-nowrap px-2.5 py-1 rounded-md bg-[#111827] text-white text-xs font-semibold shadow-lg">
              Live Inquiry
            </div>
          </div>

          {/* WhatsApp / Phone */}
          <div className="relative group flex items-center justify-center">
            <a
              href="tel:+919543910101"
              aria-label="Call AUREX via Phone"
              className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ease-out hover:bg-emerald-500/15 cursor-pointer"
            >
              <Phone 
                className="w-5 h-5 text-[#133C99] transition-all duration-300 ease-out group-hover:text-[#25D366] group-hover:scale-130 drop-shadow-xs" 
              />
            </a>
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 z-50 whitespace-nowrap px-2.5 py-1 rounded-md bg-[#111827] text-white text-xs font-semibold shadow-lg">
              WhatsApp & Call: +91 9543910101
            </div>
          </div>

          {/* Email */}
          <div className="relative group flex items-center justify-center">
            <a
              href="mailto:info@aurexbiotech.com"
              aria-label="Send Email to AUREX"
              className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ease-out hover:bg-rose-500/15 cursor-pointer"
            >
              <Mail 
                className="w-5 h-5 text-[#133C99] transition-all duration-300 ease-out group-hover:text-[#EA4335] group-hover:scale-130 drop-shadow-xs" 
              />
            </a>
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 z-50 whitespace-nowrap px-2.5 py-1 rounded-md bg-[#111827] text-white text-xs font-semibold shadow-lg">
              sales@aurexbiotech.com
            </div>
          </div>

          {/* Emergency Hotline */}
          <div className="relative group flex items-center justify-center">
            <a
              href="tel:+918144418046"
              aria-label="Emergency Call Support"
              className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ease-out hover:bg-sky-500/15 cursor-pointer"
            >
              <PhoneCall 
                className="w-5 h-5 text-[#133C99] transition-all duration-300 ease-out group-hover:text-[#0284C7] group-hover:scale-130 drop-shadow-xs" 
              />
            </a>
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 z-50 whitespace-nowrap px-2.5 py-1 rounded-md bg-[#111827] text-white text-xs font-semibold shadow-lg">
              24/7 Hotline: +91 8144418046
            </div>
          </div>
        </div>

        {/* Subtle Separator Line */}
        <div className="w-5 h-px bg-[#133C99]/30 my-0.5" />

        {/* Social Media Section with Brand Highlights on Hover */}
        <div className="flex flex-col items-center space-y-1.5">
          {/* LinkedIn */}
          <div className="relative group flex items-center justify-center">
            <a
              href="#"
              aria-label="AUREX LinkedIn Profile"
              className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ease-out hover:bg-blue-600/15 cursor-pointer"
            >
              <Linkedin 
                className="w-5 h-5 text-[#133C99] transition-all duration-300 ease-out group-hover:text-[#0A66C2] group-hover:scale-130 drop-shadow-xs" 
              />
            </a>
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 z-50 whitespace-nowrap px-2.5 py-1 rounded-md bg-[#111827] text-white text-xs font-semibold shadow-lg">
              LinkedIn
            </div>
          </div>

          {/* YouTube (Highlights Red and Scales Up) */}
          <div className="relative group flex items-center justify-center">
            <a
              href="https://www.youtube.com/@aurexbiotech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AUREX YouTube Channel"
              className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ease-out hover:bg-red-500/15 cursor-pointer"
            >
              <Youtube 
                className="w-5 h-5 text-[#133C99] transition-all duration-300 ease-out group-hover:text-[#FF0000] group-hover:scale-130 drop-shadow-xs" 
              />
            </a>
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 z-50 whitespace-nowrap px-2.5 py-1 rounded-md bg-[#111827] text-white text-xs font-semibold shadow-lg">
              YouTube Channel
            </div>
          </div>

          {/* Facebook */}
          <div className="relative group flex items-center justify-center">
            <a
              href="https://www.facebook.com/aurexbiotech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AUREX Facebook Page"
              className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ease-out hover:bg-blue-500/15 cursor-pointer"
            >
              <Facebook 
                className="w-5 h-5 text-[#133C99] transition-all duration-300 ease-out group-hover:text-[#1877F2] group-hover:scale-130 drop-shadow-xs" 
              />
            </a>
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 z-50 whitespace-nowrap px-2.5 py-1 rounded-md bg-[#111827] text-white text-xs font-semibold shadow-lg">
              Facebook
            </div>
          </div>

          {/* X (Twitter) */}
          <div className="relative group flex items-center justify-center">
            <a
              href="#"
              aria-label="AUREX X Profile"
              className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ease-out hover:bg-gray-900/15 cursor-pointer"
            >
              <XIcon 
                className="w-5 h-5 text-[#133C99] transition-all duration-300 ease-out group-hover:text-[#111827] group-hover:scale-130 drop-shadow-xs" 
              />
            </a>
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 z-50 whitespace-nowrap px-2.5 py-1 rounded-md bg-[#111827] text-white text-xs font-semibold shadow-lg">
              X (Twitter)
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FixedSideBar;