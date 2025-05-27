"use client"
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const categories = [
  { 
    title: 'Tech Talent',
    description: 'Find top software engineers, data scientists, and tech leaders for US-based companies.', 
    icon: '💻',
    color: 'from-navaidixAmber to-navaidixOrange',
    features: ['Software Engineers', 'Data Scientists', 'Product Managers', 'UX/UI Designers'],
    stats: '500+ placements'
  },
  { 
    title: 'APAC Recruitment', 
    description: 'Connect with skilled professionals across Asia-Pacific regions with our specialized network.', 
    icon: '🌏',
    color: 'from-navaidixOrange to-navaidixDarkAmber',
    features: ['Regional Expertise', 'Local Market Knowledge', 'Multilingual Support', 'Visa Assistance'],
    stats: '10,000+ candidates'
  },
  { 
    title: 'India Domestic', 
    description: 'Hire the best talent in India with our Hyderabad-based recruiting team.', 
    icon: '🏢',
    color: 'from-navaidixDarkAmber to-navaidixOrangeLight',
    features: ['IT Professionals', 'Startup Talent', 'Enterprise Solutions', 'Remote Teams'],
    stats: '50+ active clients'
  },
  { 
    title: 'Executive Search', 
    description: 'Find C-level executives and senior leadership talent for your organization.', 
    icon: '👔',
    color: 'from-navaidixOrangeLight to-navaidixOrangeDark',
    features: ['C-Suite Executives', 'VP Level', 'Directors', 'Senior Managers'],
    stats: '95% success rate'
  },
  { 
    title: 'Remote Teams', 
    description: 'Build distributed teams with top talent from around the globe.', 
    icon: '🌐',
    color: 'from-navaidixOrangeDark to-navaidixLightAmber',
    features: ['Fully Remote', 'Hybrid Teams', 'Global Coordination', 'Seamless Integration'],
    stats: '300+ remote placements'
  },
  { 
    title: 'Specialized Industries', 
    description: 'Industry-specific recruitment for healthcare, fintech, and more.', 
    icon: '⚕️',
    color: 'from-navaidixLightAmber to-navaidixAmber',
    features: ['Healthcare', 'Finance', 'E-commerce', 'Education'],
    stats: '20+ industries served'
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export default function JobCategories() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-navaidixWhite to-navaidixLightSlate/30" />
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-5 bg-[url('/assets/patterns/shapes.svg')] bg-repeat" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">            <div className="flex items-center justify-center bg-navaidixAmber/10 rounded-full p-2 w-16 h-16 mx-auto">
              <svg className="w-8 h-8 text-navaidixAmber" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">Our Recruitment Services</h2>
          <p className="text-navaidixSlate/70 max-w-2xl mx-auto text-lg">
            Specialized recruitment solutions tailored to your industry, region, and specific hiring needs.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="h-full"
            >
              <Card className="h-full bg-white border border-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <CardHeader className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{category.icon}</span>
                      <CardTitle className="text-xl font-bold text-navaidixSlate">{category.title}</CardTitle>
                    </div>
                    <div className="text-xs font-medium px-2 py-1 rounded-full bg-navaidixAmber/10 text-navaidixAmber">
                      {category.stats}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-navaidixSlate/70 mb-4">{category.description}</p>
                    <ul className="space-y-2 mb-6">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-navaidixSlate">
                        <svg className="w-4 h-4 mr-2 text-navaidixAmber" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    variant="outline"
                    className={`w-full border border-${category.color.split(' ')[0].split('-')[1]}/30 hover:bg-${category.color.split(' ')[0].split('-')[1]}/10`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}