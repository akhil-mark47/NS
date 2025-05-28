"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import { scrollToSection } from '@/lib/utils';
import dynamic from 'next/dynamic';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

// Import animation
import globeAnimationData from '../../public/assets/animations/globe.json';

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

// Floating shapes component
const FloatingShape = ({ className, delay = 0 }: { className: string, delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 0.6, y: 0 }}
    transition={{ 
      duration: 0.8, 
      delay,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: Math.random() * 2
    }}
  />
);

// Particle component for the hero background
const Particle = ({ className, delay = 0 }: { className: string, delay?: number }) => (
  <motion.div
    className={className}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: [0, 1, 1.5, 1],
      opacity: [0, 0.8, 0.2, 0],
    }}
    transition={{ 
      duration: 4 + Math.random() * 2, 
      delay: delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 2
    }}
  />
);

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);
  
  const heroRef = useRef<HTMLDivElement>(null);

  // Animation settings for Lottie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: globeAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navaidixDark via-navaidixDark to-navaidixDark/90 z-0" />
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-navaidixAmber/20 to-transparent z-0 blur-xl" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">        {Array.from({ length: 20 }).map((_, index) => (
          <Particle 
            key={index} 
            className={`absolute w-${Math.floor(Math.random() * 8) + 2} h-${Math.floor(Math.random() * 8) + 2} rounded-full 
                        bg-navaidix${['Amber', 'OrangeDark', 'OrangeLight', 'DarkAmber'][Math.floor(Math.random() * 4)]}/30 blur-md`}
            delay={index * 0.2}
          />
        ))}
      </div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 z-0">        <FloatingShape 
          className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-navaidixAmber/20 blur-xl" 
          delay={0.5}
        />
        <FloatingShape 
          className="absolute top-40 right-[15%] w-24 h-24 rounded-full bg-navaidixOrange/20 blur-xl" 
          delay={1.2}
        />
        <FloatingShape 
          className="absolute bottom-20 left-[20%] w-40 h-40 rounded-full bg-navaidixLightAmber/20 blur-xl" 
          delay={0.8}
        />
        <FloatingShape 
          className="absolute bottom-40 right-[25%] w-36 h-36 rounded-full bg-navaidixOrangeLight/20 blur-xl" 
          delay={1.5}
        />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/assets/patterns/dots.svg')] bg-repeat opacity-10 z-0" />
        {/* Content container */}      <motion.div 
        className="relative z-10 container mx-auto px-4 py-8 md:py-0"
        style={{ opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
          {/* Decorative divider for desktop */}
          <div className="hidden md:block absolute left-1/2 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-navaidixAmber/30 to-transparent"></div>          {/* Left column - Text content */}
          <div className="w-full md:w-1/2 text-left">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 gradient-text relative"
            >
              Hire Top Talent Globally
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-navaidixAmber to-navaidixOrange rounded-full"></div>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-navaidixSlate/80 max-w-2xl mb-8"
            >
              Seamless recruiting solutions for US, APAC, and India with Navaidix
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-navaidixAmber hover:bg-navaidixOrange text-white px-8 py-6 text-lg rounded-full btn-hover-effect"
                >
                  Get Started
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => scrollToSection('services')}
                  variant="outline"
                  className="border-navaidixAmber text-navaidixAmber hover:bg-navaidixAmber/10 px-8 py-6 text-lg rounded-full"
                >
                  Our Services
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right column - Animation */}
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0, -5, 0],
                  scale: [1, 1.03, 1]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                <Lottie options={defaultOptions} height="100%" width="100%" />
              </motion.div>              {/* Light glow effect under the globe */}
              <motion.div 
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-48 h-12 md:w-64 md:h-16 bg-navaidixAmber/40 blur-xl rounded-full"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  width: ["60%", "70%", "60%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="flex flex-col items-center">
            <p className="text-sm text-navaidixAmber/70 mb-2">Scroll to explore</p>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-navaidixAmber"
            >
              <path 
                d="M12 5V19M12 19L19 12M12 19L5 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}