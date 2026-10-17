'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DirectionalNavButtons from './DirectionalNavButtons';
import { 
  Calendar, 
  Clock, 
  Award, 
  Users, 
  Microscope, 
  ChevronRight,
  ExternalLink,
  Star
} from 'lucide-react';

interface NewsItem {
  id: number;
  headline: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
  featured?: boolean;
}

interface SidebarEvent {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  type: 'event' | 'announcement' | 'award';
}

const AutobioNewsSection: React.FC = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentView, setCurrentView] = useState(0);
  const maxViews = 3; // Placeholder for future content views

  // Auto-transition every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentView((prev) => (prev + 1) % maxViews);
    }, 5000);

    return () => clearInterval(timer);
  }, [maxViews]);

  const handlePrevious = () => {
    setCurrentView((prev) => (prev - 1 + maxViews) % maxViews);
  };

  const handleNext = () => {
    setCurrentView((prev) => (prev + 1) % maxViews);
  };

  const newsItems: NewsItem[] = [
    {
      id: 1,
      headline: 'AUREX Unveils New T-Series at ADLM 2025',
      description: 'Revolutionary diagnostic platform showcased at the Association for Diagnostics & Laboratory Medicine annual conference, featuring AI-powered analysis and 50% faster processing times.',
      date: 'October 8, 2025',
      category: 'Product Launch',
      readTime: '3 min read',
      featured: true
    },
    {
      id: 2,
      headline: 'Partnership with Global Health Initiative Expands Access',
      description: 'Strategic alliance brings advanced diagnostic tools to underserved communities worldwide, supporting healthcare equity and improving patient outcomes in developing regions.',
      date: 'October 5, 2025',
      category: 'Partnership',
      readTime: '2 min read'
    },
    {
      id: 3,
      headline: 'Breakthrough Research Published in Nature Biotechnology',
      description: 'Our research team\'s groundbreaking findings on molecular diagnostics featured in prestigious scientific journal, advancing the field of precision medicine.',
      date: 'October 2, 2025',
      category: 'Research',
      readTime: '4 min read'
    },
    {
      id: 4,
      headline: '$75M Series C Funding Round Successfully Completed',
      description: 'Major funding milestone reached to accelerate R&D initiatives and global expansion, backed by leading healthcare investors and venture capital firms.',
      date: 'September 28, 2025',
      category: 'Funding',
      readTime: '3 min read'
    },
    {
      id: 5,
      headline: 'FDA Approval Granted for Next-Gen Diagnostic Platform',
      description: 'Regulatory milestone achieved for our innovative diagnostic system, paving the way for widespread clinical deployment across healthcare networks.',
      date: 'September 25, 2025',
      category: 'Regulatory',
      readTime: '2 min read'
    }
  ];

  const sidebarEvents: SidebarEvent[] = [
    {
      id: 'event-1',
      title: 'MEDICA 2025 Trade Show',
      date: 'Nov 13-16, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'Düsseldorf, Germany',
      type: 'event'
    },
    {
      id: 'event-2',
      title: 'Q3 Financial Results',
      date: 'Oct 15, 2025',
      time: '2:00 PM EST',
      location: 'Virtual Event',
      type: 'announcement'
    },
    {
      id: 'award-1',
      title: 'Innovation Excellence Award',
      date: 'Sep 20, 2025',
      location: 'Biotech Innovation Summit',
      type: 'award'
    }
  ];

  // Auto-rotate news items
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
    }, 8000); // Change every 8 seconds
    
    return () => clearInterval(interval);
  }, [newsItems.length]);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Product Launch': 'text-white bg-[#1646AF]',
      'Partnership': 'text-white bg-[#133C99]',
      'Research': 'text-white bg-[#0E2A6C]',
      'Funding': 'text-white bg-[#1646AF]',
      'Regulatory': 'text-white bg-[#133C99]'
    };
    return colors[category as keyof typeof colors] || 'text-white bg-[#1646AF]';
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'event': return <Calendar className="w-5 h-5" />;
      case 'announcement': return <Users className="w-5 h-5" />;
      case 'award': return <Award className="w-5 h-5" />;
      default: return <Calendar className="w-5 h-5" />;
    }
  };

  const currentNews = newsItems[currentNewsIndex];

  return (
    <section className="relative h-full overflow-hidden">
      {/* AUREX Deep Blue Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1528] via-[#133C99] to-[#0E2A6C]" />
      
      {/* Blurred Lab Work Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full bg-cover bg-center filter blur-sm"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1' opacity='0.1'%3E%3Cpath d='M20 20 L60 20 L60 60 L20 60 Z'/%3E%3Ccircle cx='40' cy='30' r='8'/%3E%3Cpath d='M32 45 L48 45 M35 50 L45 50 M38 55 L42 55'/%3E%3Cpath d='M25 35 L30 40 L25 45'/%3E%3Cpath d='M55 35 L50 40 L55 45'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Main Content Area */}
        <div className="flex-1 flex">
          {/* Left Side - Main News Content */}
          <div className="w-2/3 p-12 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentNews.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* Category Badge */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(currentNews.category)}`}>
                    {currentNews.featured && <Star className="w-4 h-4 mr-2" />}
                    {currentNews.category}
                  </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  className="text-6xl font-bold text-white mb-8 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {currentNews.headline}
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="text-xl text-white/90 mb-8 leading-relaxed max-w-4xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {currentNews.description}
                </motion.p>

                {/* News Meta Information */}
                <motion.div
                  className="flex items-center space-x-8 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="flex items-center space-x-3 text-white/80">
                    <Calendar className="w-5 h-5 text-blue-300" />
                    <span className="font-medium">{currentNews.date}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/80">
                    <Clock className="w-5 h-5 text-blue-300" />
                    <span className="font-medium">{currentNews.readTime}</span>
                  </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <button className="group flex items-center space-x-3 bg-[#1646AF] hover:bg-[#133C99] text-white font-semibold px-8 py-4 rounded-2xl border border-white/20 transition-all duration-300 shadow-lg shadow-[#1646AF]/30 hover:shadow-xl hover:scale-105">
                    <span className="text-lg">Read Full Article</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Sidebar - Secondary News/Events */}
          <div className="w-1/3 p-8 flex flex-col justify-center">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Microscope className="w-6 h-6 mr-3 text-[#93C5FD]" />
                Upcoming Events
              </h3>

              <div className="space-y-6">
                {sidebarEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className="group p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#1646AF]/30 rounded-lg flex items-center justify-center text-[#93C5FD]">
                        {getEventIcon(event.type)}
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                          {event.title}
                        </h4>
                        
                        <div className="space-y-1 text-sm text-white/70">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-2 text-blue-300" />
                            {event.date}
                          </div>
                          
                          {event.time && (
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-2 text-blue-300" />
                              {event.time}
                            </div>
                          )}
                          
                          {event.location && (
                            <div className="flex items-center">
                              <ExternalLink className="w-3 h-3 mr-2 text-blue-300" />
                              {event.location}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* View All Events Button */}
              <motion.button
                className="w-full mt-6 bg-[#1646AF] hover:bg-[#133C99] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-[#1646AF]/30 hover:shadow-xl border border-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View All Events
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Navigation - Numbered Circle Buttons */}
        <div className="relative z-20 bg-black/30 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-12 py-6">
            <div className="flex items-center justify-between">
              {/* Navigation Circles */}
              <div className="flex items-center space-x-4">
                <span className="text-white/80 font-medium mr-4">News Articles:</span>
                {newsItems.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentNewsIndex(index)}
                    className={`
                      w-12 h-12 rounded-full font-bold transition-all duration-300 shadow-lg
                      ${index === currentNewsIndex 
                        ? 'bg-[#1646AF] text-white scale-110 shadow-lg shadow-[#1646AF]/40 ring-2 ring-white' 
                        : 'bg-white/15 text-white/80 hover:bg-white/25 hover:scale-105'
                      }
                    `}
                    whileHover={{ scale: index === currentNewsIndex ? 1.1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: index === currentNewsIndex ? 1.1 : 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {index + 1}
                  </motion.button>
                ))}
              </div>

              {/* Auto-play Indicator */}
              <div className="flex items-center space-x-3 text-white/80">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-[#1646AF] rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-[#1646AF] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-[#1646AF] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                <span className="text-sm font-medium">Auto-rotating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-32 h-32 bg-[#1646AF]/15 rounded-full blur-xl" />
      <div className="absolute bottom-1/3 right-12 w-24 h-24 bg-[#133C99]/20 rounded-full blur-xl" />
      <div className="absolute top-2/3 left-1/4 w-16 h-16 bg-[#1646AF]/10 rounded-full blur-xl" />

      {/* Directional Navigation Buttons - Bottom Center */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50">
        <DirectionalNavButtons
          onPrevious={handlePrevious}
          onNext={handleNext}
          disablePrevious={currentView === 0}
          disableNext={currentView === maxViews - 1}
        />
      </div>
    </section>
  );
};

export default AutobioNewsSection;