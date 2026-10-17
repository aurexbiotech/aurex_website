'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TestTube, 
  Microscope, 
  Dna, 
  Stethoscope, 
  Heart,
  Activity,
  Zap,
  Eye,
  Play,
  ArrowRight
} from 'lucide-react';

interface ProductCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  title: string;
  product: {
    name: string;
    model: string;
    image: string;
    description: string;
  };
}

const ProductsSection: React.FC = () => {
  const categories: ProductCategory[] = [
    {
      id: 'immunoassay',
      name: 'Immunoassay',
      icon: <TestTube className="w-5 h-5" />,
      title: 'Immunoassay',
      product: {
        name: 'AutoLumo Analyzer',
        model: 'Advanced Analyzer',
        image: '/api/placeholder/400/300',
        description: 'Advanced chemiluminescent immunoassay analyzer with high throughput capabilities'
      }
    },
    {
      id: 'microbiology',
      name: 'Microbiology',
      icon: <Microscope className="w-5 h-5" />,
      title: 'Microbiology',
      product: {
        name: 'MicroScope Pro',
        model: 'AUREX M300',
        image: '/api/placeholder/400/300',
        description: 'Automated microbiology system for rapid pathogen identification'
      }
    },
    {
      id: 'molecular',
      name: 'Molecular',
      icon: <Dna className="w-5 h-5" />,
      title: 'Molecular Diagnostics',
      product: {
        name: 'GeneSeq Ultra',
        model: 'AUREX G500',
        image: '/api/placeholder/400/300',
        description: 'Next-generation molecular diagnostic platform for genetic analysis'
      }
    },
    {
      id: 'hematology',
      name: 'Hematology',
      icon: <Heart className="w-5 h-5" />,
      title: 'Hematology',
      product: {
        name: 'BloodCount Elite',
        model: 'AUREX H200',
        image: '/api/placeholder/400/300',
        description: 'Comprehensive hematology analyzer with advanced cell counting'
      }
    },
    {
      id: 'biochemistry',
      name: 'Biochemistry',
      icon: <Activity className="w-5 h-5" />,
      title: 'Biochemistry',
      product: {
        name: 'BioChem Master',
        model: 'AUREX B700',
        image: '/api/placeholder/400/300',
        description: 'High-performance biochemistry analyzer for clinical diagnostics'
      }
    },
    {
      id: 'coagulation',
      name: 'Coagulation',
      icon: <Stethoscope className="w-5 h-5" />,
      title: 'Coagulation',
      product: {
        name: 'CoagTest Pro',
        model: 'AUREX C400',
        image: '/api/placeholder/400/300',
        description: 'Automated coagulation testing system for hemostasis analysis'
      }
    },
    {
      id: 'urine',
      name: 'Urine Analysis',
      icon: <Eye className="w-5 h-5" />,
      title: 'Urine Analysis',
      product: {
        name: 'UrineScope Digital',
        model: 'AUREX U100',
        image: '/api/placeholder/400/300',
        description: 'Digital urine analysis system with microscopic examination'
      }
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section className="relative h-full overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1528] via-[#133C99] to-[#1646AF]" />
      
      {/* Blurred Lab Equipment Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full bg-cover bg-center filter blur-sm"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex">
        {/* Left Side - Categories Navigation */}
        <div className="w-1/3 p-8 flex flex-col justify-center">
          <div className="space-y-1">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className={`
                  w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300
                  ${selectedCategory.id === category.id 
                    ? 'bg-white/20 backdrop-blur-sm border border-white/30' 
                    : 'hover:bg-white/10 border border-transparent'
                  }
                `}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Dot Indicator */}
                <div className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${selectedCategory.id === category.id ? 'bg-cyan-400' : 'bg-white/40'}
                `} />
                
                {/* Icon */}
                <div className={`
                  flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300
                  ${selectedCategory.id === category.id 
                    ? 'bg-cyan-400 text-slate-900' 
                    : 'bg-white/20 text-white'
                  }
                `}>
                  {category.icon}
                </div>
                
                {/* Category Name */}
                <span className={`
                  font-medium transition-all duration-300
                  ${selectedCategory.id === category.id ? 'text-white' : 'text-gray-300'}
                `}>
                  {category.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right Side - Product Display */}
        <div className="w-2/3 p-8 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center"
            >
              {/* Category Title */}
              <motion.h2 
                className="text-6xl font-bold text-white mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {selectedCategory.title}
              </motion.h2>

              {/* Product Image Container */}
              <motion.div
                className="relative mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative mx-auto w-[500px] h-96 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                  {/* Product Image Placeholder */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#1646AF] to-[#133C99] rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-white/20">
                        <span className="text-white text-3xl font-extrabold tracking-wider">AUREX</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedCategory.product.name}
                      </h3>
                      <p className="text-[#64748B] text-sm px-6">
                        {selectedCategory.product.description}
                      </p>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-[#1646AF] rounded-full animate-pulse" />
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/60 rounded-full" />
                  <div className="absolute top-1/2 left-4 w-1 h-8 bg-gradient-to-b from-[#1646AF] to-transparent rounded-full" />
                </div>
              </motion.div>

              {/* Call to Action Buttons */}
              <motion.div
                className="flex justify-center space-x-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {/* Specific Product Button */}
                <button className="group flex items-center space-x-3 bg-[#1646AF] hover:bg-[#133C99] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#1646AF]/30 hover:shadow-xl hover:scale-105 border border-white/20">
                  <Zap className="w-5 h-5" />
                  <span>{selectedCategory.product.model}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Watch More Button */}
                <button className="group flex items-center space-x-3 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Play className="w-5 h-5" />
                  <span>+ Watch More</span>
                </button>
              </motion.div>

              {/* Additional Product Info */}
              <motion.div
                className="mt-12 flex justify-center space-x-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="text-white/80">
                  <div className="text-2xl font-bold text-white mb-1">99.8%</div>
                  <div className="text-sm">Accuracy</div>
                </div>
                <div className="text-white/80">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
                <div className="text-white/80">
                  <div className="text-2xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm">Labs</div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#1646AF]/15 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-[#133C99]/20 rounded-full blur-xl" />
      <div className="absolute top-3/4 left-1/3 w-16 h-16 bg-[#1646AF]/10 rounded-full blur-xl" />
    </section>
  );
};

export default ProductsSection;