"use client"
import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

const testimonials = [
  { 
    quote: 'Navaidix helped us find 10 exceptional engineers in Hyderabad within just 2 weeks! Their talent pool is unmatched.', 
    author: 'Sarah Johnson',
    position: 'CTO, TechInnovate Inc.',
    image: '/assets/images/avatar1.jpg',
    rating: 5
  },
  { 
    quote: 'The team at Navaidix completely transformed our APAC hiring process. We\'ve reduced time-to-hire by 65%!', 
    author: 'Michael Chang',
    position: 'HR Director, Global Solutions',
    image: '/assets/images/avatar2.jpg',
    rating: 5
  },
  { 
    quote: 'As a startup in Hyderabad, finding the right talent was critical. Navaidix delivered beyond expectations.', 
    author: 'Priya Sharma',
    position: 'Founder, InnovateAI',
    image: '/assets/images/avatar3.jpg',
    rating: 4
  },
  { 
    quote: 'Their understanding of both US and Indian markets makes them uniquely positioned to help with our global expansion.',
    author: 'Robert Williams',
    position: 'VP of Engineering, FutureTech',
    image: '/assets/images/avatar4.jpg',
    rating: 5
  },
];

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-navaidixAmber' : 'text-gray-300'}`}
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Create a duplicated array for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background gradient */}      <div className="absolute inset-0 bg-gradient-to-br from-navaidixAmber/5 via-navaidixOrange/5 to-navaidixAmber/5" />
      
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">           
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">What Our Clients Say</h2>
          <p className="text-navaidixSlate/70 max-w-2xl mx-auto text-lg">
            Discover how we've helped businesses around the world find exceptional talent and build amazing teams.
          </p>
        </motion.div>

        {/* Testimonials marquee */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex space-x-6"
            initial={{ x: 0 }}
            animate={{ 
              x: isHovered ? 0 : "-50%" 
            }}
            transition={{ 
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 md:w-96"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card 
                  className="h-full border border-navaidixAmber/10 backdrop-blur-sm bg-white/90 rounded-xl shadow-xl 
                    transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl"
                >
                  <motion.div 
                    className="p-6"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-navaidixAmber/20 rounded-full flex items-center justify-center mr-4">
                        {testimonial.image ? (
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author} 
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        ) : (
                          <span className="text-xl">{testimonial.author.charAt(0)}</span>
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-navaidixSlate">{testimonial.author}</h4>
                        <p className="text-sm text-navaidixSlate/70">{testimonial.position}</p>
                      </div>
                    </div>
                    
                    <StarRating rating={testimonial.rating} />
                    <div className="mb-3 text-navaidixAmber">
                      <svg className="w-8 h-8 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    
                    <p className="text-navaidixSlate mb-6 italic">"{testimonial.quote}"</p>
                    
                    <div className="h-1 w-16 bg-gradient-to-r from-navaidixAmber to-navaidixOrange rounded-full"></div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}