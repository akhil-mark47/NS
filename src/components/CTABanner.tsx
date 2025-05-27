"use client"
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';

export default function CTABanner() {
  const bannerRef = useRef(null);
  const isInView = useInView(bannerRef, { once: false, margin: "-100px" });
  
  return (
    <section 
      ref={bannerRef}
      className="relative py-24 overflow-hidden"
    >      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-navaidixDarkAmber via-navaidixAmber to-navaidixOrange z-0" />
        {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-navaidixLightAmber rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-20 w-80 h-80 bg-navaidixOrangeLight rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-navaidixOrangeDark rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0" />
      
      {/* Content container */}
      <div className="container relative mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 md:p-16 rounded-2xl text-center"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-md">
                Ready to Transform Your <span className="gradient-text">Hiring Process</span>?
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Connect with our team today and discover how Navaidix can help you find exceptional talent around the globe.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-navaidixOrangeDark hover:bg-navaidixLightAmber hover:text-navaidixDarkAmber px-8 py-7 text-lg rounded-full shadow-lg font-semibold btn-hover-effect"
                >
                  Start Your Journey
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => scrollToSection('testimonials')}
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/20 px-8 py-7 text-lg rounded-full backdrop-blur-sm font-semibold"
                >
                  See Success Stories
                </Button>
              </motion.div>
            </motion.div>
              {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-navaidixLightAmber/80 blur-sm"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-navaidixOrangeDark/80 blur-sm"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}