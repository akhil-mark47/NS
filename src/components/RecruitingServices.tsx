"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';

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

// Service card component
const ServiceCard = ({ 
  title, 
  description, 
  features, 
  benefits, 
  icon, 
  index 
}: { 
  title: string; 
  description: string; 
  features: { title: string; description: string }[]; 
  benefits: string[];
  icon: string;
  index: number;
}) => (
  <motion.div
    variants={itemVariants}    className={`bg-white/10 border border-navaidixAmber/20 rounded-2xl overflow-hidden backdrop-blur-md hover:border-navaidixAmber/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-navaidixAmber/10 group ${index % 2 === 1 ? 'md:mt-12' : ''}`}
  >
    <div className="h-1 bg-gradient-to-r from-navaidixAmber to-navaidixOrange"></div>
    
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navaidixAmber/20 to-navaidixOrange/20 backdrop-blur-md flex items-center justify-center border border-navaidixAmber/50 mr-4 group-hover:from-navaidixAmber/30 group-hover:to-navaidixOrange/30 transition-all duration-300">
          <span className="text-navaidixAmber text-2xl group-hover:scale-110 transition-transform">{icon}</span>
        </div>
        <h3 className="text-2xl font-semibold text-navaidixAmber group-hover:text-navaidixOrange transition-colors">{title}</h3>
      </div>
      
      <p className="text-navaidixSlate/80 mb-6">{description}</p>
        <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3 text-navaidixOrange">Features:</h4>
        <div className="space-y-4">
          {features.map((feature, i) => (
            <div key={i} className="flex">
              <div className="text-navaidixAmber mr-2 mt-1 flex-shrink-0 group-hover:text-navaidixOrange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-navaidixSlate/90">{feature.title}</p>
                <p className="text-sm text-navaidixSlate/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-semibold mb-3 text-navaidixAmber">Why Choose Our {title}:</h4>
        <ul className="list-none space-y-2">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-center">
              <div className="text-navaidixAmber mr-2 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-navaidixSlate/80">{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-8">
        <Button 
          onClick={() => scrollToSection('contact')}
          className="bg-navaidixAmber text-white hover:bg-navaidixOrange w-full rounded-full border-2 border-navaidixOrangeDark shadow-lg shadow-navaidixAmber/20"
        >
          Learn More
        </Button>
      </div>
    </div>
  </motion.div>
);



export default function RecruitingServices() {
  // Services data
  const services = [
    {
      title: "Domestic Recruiting",
      description: "A startup connecting local talent with leading organizations through an extensive network and industry expertise.",
      icon: "🏢",
      features: [
        {
          title: "Local Talent Network",
          description: "Access to a growing network of pre-screened local professionals across various industries."
        },
        {
          title: "Industry Expertise",
          description: "Specialized recruiters with a deep understanding of local market dynamics and industry requirements."
        },
        {
          title: "Personalized Service",
          description: "Tailored recruitment solutions meeting specific needs of both candidates and employers."
        },
        {
          title: "Market Insights",
          description: "Regular updates on local job market trends, salary benchmarks, and industry developments."
        }
      ],
      benefits: [
        "Growing local network of qualified candidates.",
        "Deep understanding of regional market dynamics.",
        "Customized recruitment strategies.",
        "Comprehensive candidate screening process.",
        "Ongoing support throughout the hiring process."
      ]
    },
    {
      title: "US Recruiting",
      description: "A startup specializing in connecting global talent with leading US organizations through innovative recruitment solutions.",
      icon: "🗽",
      features: [
        {
          title: "US Market Expertise",
          description: "Deep understanding of US job market trends and business culture."
        },
        {
          title: "Coast-to-Coast Coverage",
          description: "Recruitment services across major US cities and regions."
        },
        {
          title: "Executive Search",
          description: "Specialized placement services for senior and executive-level positions."
        },
        {
          title: "Visa Support",
          description: "Assistance with work authorization and visa requirements for international candidates."
        }
      ],
      benefits: [
        "Access to top US startups and opportunities.",
        "Understanding of US work culture and expectations.",
        "Expertise in US employment laws and regulations.",
        "Strong network across major US tech hubs.",
        "Support with relocation and visa processes."
      ]
    },
    {
      title: "APAC Recruiting",
      description: "A startup bridging talent across the Asia-Pacific region with innovative recruitment solutions.",
      icon: "🌏",
      features: [
        {
          title: "APAC Coverage",
          description: "Extensive network across major APAC markets including Singapore, Japan, Australia, and more."
        },
        {
          title: "Cultural Expertise",
          description: "Deep understanding of diverse APAC business cultures and practices."
        },
        {
          title: "Multilingual Support",
          description: "Recruitment services in multiple Asian languages for better communication."
        },
        {
          title: "Regional Network",
          description: "Strong connections with leading APAC startups and organizations."
        }
      ],
      benefits: [
        "Presence in major APAC business hubs.",
        "Understanding of local business practices.",
        "Multilingual recruitment teams.",
        "Cross-border placement expertise.",
        "Cultural integration support."
      ]
    }
  ];

  return (
    <section id="services" className="relative py-24 overflow-hidden">      {/* Background gradient */}
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
          <h2 className="text-4xl font-bold mb-4 gradient-text inline-block">Our Recruiting Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-navaidixAmber to-navaidixOrange mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-navaidixSlate/80 max-w-3xl mx-auto">
            We offer specialized recruitment solutions tailored to different markets, helping you find the perfect opportunity wherever your career takes you.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              features={service.features}
              benefits={service.benefits}
              icon={service.icon}
            />
          ))}
        </motion.div>
        
       
      </div>
    </section>
  );
}
