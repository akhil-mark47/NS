"use client"
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { scrollToSection } from '@/lib/utils';

export default function NavBar() {
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.9]);
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 8]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'About' },
    { label: 'Services', href: 'RecruitingServices' },
    { label: 'Testimonials', href: 'Testimonials' },
    { label: 'Contact', href: 'contact' }
  ];

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setMobileMenuOpen(false);
  };

  return (    <motion.nav
      style={{ 
        backgroundColor: `rgba(15, 23, 42, ${backgroundOpacity})`,
        backdropFilter: `blur(${backdropBlur}px)`
      }}
      className="fixed top-0 left-0 right-0 z-50 border border-navaidixAmber/30 rounded-xl mx-4 mt-1 shadow-lg shadow-navaidixAmber/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >            <div className="mr-2 text-navaidixAmber">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                <path d="M2 12H22" stroke="currentColor" strokeWidth="2" />
                <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-navaidixAmber to-navaidixOrange bg-clip-text text-transparent">Navaidix</h1>
          </motion.div>          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-2">
              {navItems.map((item, index) => (                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                ><button
                    onClick={() => handleNavClick(item.href)}
                    className="px-4 py-2 relative rounded-full border border-navaidixAmber/60 bg-navaidixOrange/10 text-navaidixAmber hover:bg-navaidixAmber/30 hover:text-orange hover:border-navaidixOrangeDark transition-all duration-300 mx-1 hover:shadow-md hover:shadow-navaidixAmberDark/30"
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
            </div>
            
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >            <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-navaidixAmber text-white hover:bg-navaidixOrange shadow-lg shadow-navaidixAmber/20 rounded-full border-2 border-navaidixOrangeDark"
              >
                Get Started
              </Button>
            </motion.div> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-navaidixWhite p-2 border border-navaidixAmber/60 rounded-full bg-navaidixAmber/10 hover:bg-navaidixAmber/30"
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${mobileMenuOpen ? "rotate-90" : ""}`}
              >
                {mobileMenuOpen ? (
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-navaidixSlate/95 backdrop-blur-md rounded-xl border border-navaidixAmber/30 mx-4 mt-1 shadow-md shadow-navaidixAmber/30"
      >        <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
          {navItems.map((item) => (            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="p-3 text-left rounded-full border border-navaidixAmber/60 bg-navaidixAmber/10 text-navaidixWhite hover:bg-navaidixAmber/30 hover:text-white hover:border-navaidixOrange transition-all duration-300 w-full hover:shadow-md hover:shadow-navaidixAmber/30"
            >
              {item.label}
            </button>          ))}
          <Button
            onClick={() => {
              scrollToSection('contact');
              setMobileMenuOpen(false);
            }}
            className="bg-navaidixAmber text-white hover:bg-navaidixOrange w-full mt-2 rounded-full border-2 border-navaidixOrangeDark shadow-lg shadow-navaidixAmber/20"
          >
            Get Started
          </Button>
        </div>
      </motion.div>
    </motion.nav>
  );
}