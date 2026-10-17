'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface DirectionalNavButtonsProps {
  onPrevious: () => void
  onNext: () => void
  disablePrevious?: boolean
  disableNext?: boolean
  className?: string
}

/**
 * Directional Navigation Buttons Component - Royal Business Style
 * 
 * A reusable component for horizontal navigation with < | > layout
 * Designed to be placed at the bottom center of slides
 * 
 * Features:
 * - Dark semi-transparent container (Royal Business style)
 * - Off-white/Silver icons with vertical separator
 * - Gold/Bronze hover effect
 * - Smooth animations and transitions
 * - Automatic disable states
 * 
 * @param onPrevious - Function to handle previous navigation
 * @param onNext - Function to handle next navigation
 * @param disablePrevious - Optional: Disable the previous button
 * @param disableNext - Optional: Disable the next button
 * @param className - Optional: Additional CSS classes
 */
export default function DirectionalNavButtons({
  onPrevious,
  onNext,
  disablePrevious = false,
  disableNext = false,
  className = '',
}: DirectionalNavButtonsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
      className={`inline-flex items-center bg-white/95 backdrop-blur-md rounded-lg shadow-sm border border-[#BFBFBF]/40 ${className}`}
    >
      {/* Previous Button (Left Arrow) */}
      <motion.button
        onClick={onPrevious}
        disabled={disablePrevious}
        whileHover={!disablePrevious ? { scale: 1.05 } : {}}
        whileTap={!disablePrevious ? { scale: 0.95 } : {}}
        className={`
          group relative px-4 py-3 sm:px-6 sm:py-4 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center
          ${disablePrevious 
            ? 'opacity-30 cursor-not-allowed' 
            : 'hover:bg-[#F6F8FB] cursor-pointer active:bg-[#F6F8FB]'
          }
        `}
        aria-label="Previous slide"
        aria-disabled={disablePrevious}
      >
        <ChevronLeft
          className={`
            w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200
            ${disablePrevious 
              ? 'text-gray-300' 
              : 'text-[#133C99] group-hover:text-[#1646AF]'
            }
          `}
          strokeWidth={2.5}
        />
      </motion.button>

      {/* Vertical Separator */}
      <div className="h-7 w-px bg-[#BFBFBF]/40" />

      {/* Next Button (Right Arrow) */}
      <motion.button
        onClick={onNext}
        disabled={disableNext}
        whileHover={!disableNext ? { scale: 1.05 } : {}}
        whileTap={!disableNext ? { scale: 0.95 } : {}}
        className={`
          group relative px-4 py-3 sm:px-6 sm:py-4 transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center
          ${disableNext 
            ? 'opacity-30 cursor-not-allowed' 
            : 'hover:bg-[#F6F8FB] cursor-pointer active:bg-[#F6F8FB]'
          }
        `}
        aria-label="Next slide"
        aria-disabled={disableNext}
      >
        <ChevronRight
          className={`
            w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200
            ${disableNext 
              ? 'text-gray-300' 
              : 'text-[#133C99] group-hover:text-[#1646AF]'
            }
          `}
          strokeWidth={2.5}
        />
      </motion.button>
    </motion.div>
  )
}
