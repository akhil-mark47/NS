"use client"

import { motion } from 'framer-motion';
import { scrollToSection } from '@/lib/utils';

// Social icon component
const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-10 h-10 rounded-full bg-navaidixAmber/20 hover:bg-navaidixAmber/40 text-white transition-all duration-300"
    whileHover={{ scale: 1.1, y: -3 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

// Footer link component
const FooterLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <motion.button
    onClick={onClick}
    className="text-navaidixLightSlate hover:text-navaidixAmber transition-all duration-300"
    whileHover={{ x: 3 }}
  >
    {children}
  </motion.button>
);

export default function Footer() {
  const footerLinks = [
    { name: 'Home', section: 'home' },
    { name: 'Services', section: 'services' },
    { name: 'Testimonials', section: 'testimonials' },
    { name: 'Contact', section: 'contact' },
  ];

  return (    <footer className="relative bg-gradient-to-b from-navaidixDark to-navaidixSlate/95 text-navaidixWhite pt-20 pb-8 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navaidixAmber via-navaidixOrange to-navaidixDarkAmber" />
      
      {/* Background shapes */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-navaidixAmber/10 rounded-full blur-3xl" />
      <div className="absolute -top-20 right-10 w-40 h-40 bg-navaidixOrange/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Company section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Navaidix Solutions Private Limited</h3>
            <p className="text-navaidixLightSlate mb-6 max-w-md">
              A global talent solution provider connecting exceptional professionals with 
              innovative companies across the US, APAC, and India.
            </p>
            <div className="flex space-x-4">
              <SocialIcon 
                href="https://linkedin.com"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                }
              />
              <SocialIcon 
                href="https://twitter.com"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                }
              />
              <SocialIcon 
                href="https://facebook.com"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                }
              />
            </div>
          </motion.div>
          
          {/* Links section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              {footerLinks.map((link, index) => (
                <FooterLink 
                  key={index} 
                  onClick={() => scrollToSection(link.section)}
                >
                  {link.name}
                </FooterLink>
              ))}
            </div>
          </motion.div>
          
          {/* Contact section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="flex flex-col space-y-4">              <div className="flex items-center space-x-3">
                <div className="text-navaidixAmber">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-navaidixLightSlate">Hyderabad, Telangana, India</p>
              </div>              <div className="flex items-center space-x-3">
                <div className="text-navaidixAmber">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <p className="text-navaidixLightSlate">contact@navaidix.com</p>
              </div>              <div className="flex items-center space-x-3">
                <div className="text-navaidixAmber">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <p className="text-navaidixLightSlate">+91 123-456-7890</p>
              </div>
            </div>
          </motion.div>
        </div>
          {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-navaidixAmber/30 to-transparent my-8" />
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-navaidixLightSlate/70 text-sm">
            © {new Date().getFullYear()} Navaidix Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}