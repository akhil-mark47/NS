"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3,
    } 
  },
};

const itemVariants = { 
  hidden: { opacity: 0, y: 30 }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 10 
    } 
  } 
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navaidixAmber/5 via-navaidixOrange/5 to-navaidixAmber/5" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-3 h-3 rounded-full 
              ${i % 2 === 0 ? 'bg-navaidixAmber' : 'bg-navaidixOrange'}
              opacity-20 blur-sm`}
            animate={{ 
              y: [0, -100, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ 
              duration: 5 + i,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${50 + (i * 10)}%`
            }}
          />
        ))}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-navaidixAmber/5 blur-xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-navaidixOrange/5 blur-xl animate-pulse" />
      
      {/* Decorative lines */}
      <motion.div 
        className="absolute h-px w-full max-w-md bg-gradient-to-r from-transparent via-navaidixAmber/20 to-transparent top-20 left-1/4"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div 
        className="absolute h-px w-full max-w-md bg-gradient-to-r from-transparent via-navaidixOrange/20 to-transparent bottom-20 right-1/4"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/assets/patterns/grid.svg')] bg-repeat opacity-5 z-0" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text inline-block">Who We Are</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-navaidixAmber to-navaidixOrange mx-auto rounded-full mb-6"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div 
              variants={itemVariants}              className="bg-white/10 border border-navaidixAmber/20 rounded-2xl p-6 backdrop-blur-md hover:border-navaidixAmber/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-navaidixAmber/10 group"
            >
              <h3 className="text-xl font-semibold mb-3 text-navaidixAmber group-hover:text-navaidixOrange transition-colors">A Fresh Approach</h3>
              <p className="text-navaidixSlate/90">
                A dynamic startup with a fresh approach to global recruitment.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white/10 border border-navaidixAmber/20 rounded-2xl p-6 backdrop-blur-md hover:border-navaidixAmber/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-navaidixAmber/10 group"
            >
              <h3 className="text-xl font-semibold mb-3 text-navaidixAmber group-hover:text-navaidixOrange transition-colors">Global Connections</h3>
              <p className="text-navaidixSlate/90">
                Connects talented professionals with innovative organizations worldwide.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white/10 border border-navaidixAmber/20 rounded-2xl p-6 backdrop-blur-md hover:border-navaidixAmber/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-navaidixAmber/10 group"
            >
              <h3 className="text-xl font-semibold mb-3 text-navaidixAmber group-hover:text-navaidixOrange transition-colors">Personalized Matching</h3>
              <p className="text-navaidixSlate/90">
                Offers a personalized approach, leveraging industry expertise to ensure the perfect match for both candidates and employers.
              </p>
            </motion.div>
          </motion.div>
            {/* Right column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-navaidixAmber/30 bg-white/5 backdrop-blur-md">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-navaidixAmber/10 to-navaidixOrange/10"></div>
              <div className="absolute inset-0 bg-[url('/assets/patterns/grid.svg')] bg-repeat opacity-5"></div>
              
              {/* Content container */}
              <div className="relative h-full flex items-center justify-between px-8 z-20">
                {/* Left side - Text content */}
                <div className="w-1/2 space-y-6">
                  <motion.h3 
                    className="text-3xl font-bold gradient-text"
                    animate={{ 
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  >
                    Navaidix Solutions
                  </motion.h3>
                  <p className="text-navaidixSlate/90 leading-relaxed">
                    Founded in 2025, we are transforming the global recruitment landscape with innovative solutions and personalized approaches. Our mission is to bridge the gap between exceptional talent and visionary organizations.
                  </p>
                  <div className="pt-4">
                    <div className="flex gap-8">
                      <div>
                        <p className="text-3xl font-bold gradient-text">500+</p>
                        <p className="text-navaidixAmber/80 text-sm">Placements</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold gradient-text">20+</p>
                        <p className="text-navaidixAmber/80 text-sm">Countries</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold gradient-text">95%</p>
                        <p className="text-navaidixAmber/80 text-sm">Success Rate</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Logo */}
                <div className="w-1/2 flex justify-center items-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotateZ: [0, 2, 0, -2, 0],
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                    className="relative"
                  >
                    <div className="w-40 h-40 rounded-full bg-navaidixAmber/20 backdrop-blur-md flex items-center justify-center border border-navaidixAmber/50">
                      <div className="text-navaidixAmber text-6xl font-bold">N</div>
                    </div>
                    <div className="absolute -inset-4 rounded-full border-2 border-dashed border-navaidixAmber/30 animate-spin-slow"></div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-navaidixAmber rounded-full opacity-20 blur-xl"></div>
                    <div className="absolute -top-8 -left-8 w-24 h-24 bg-navaidixOrange rounded-full opacity-20 blur-xl"></div>
                  </motion.div>
                </div>
              </div>

              {/* Background blob - positioned behind content */}
              <div className="absolute inset-0 -z-10 opacity-30">
                <Image 
                  src="/assets/patterns/about-blob.svg" 
                  alt="Background shape" 
                  width={600} 
                  height={600} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
