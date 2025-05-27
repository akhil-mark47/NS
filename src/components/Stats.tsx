"use client"
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 500, label: 'US Placements', suffix: '+', icon: '🌎' },
  { value: 10000, label: 'APAC Candidates', suffix: '+', icon: '👨‍💼' },
  { value: 50, label: 'Clients in India', suffix: '+', icon: '🏢' },
  { value: 95, label: 'Satisfaction Rate', suffix: '%', icon: '⭐' },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="stats" className="py-24 relative overflow-hidden">      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navaidixAmber/5 to-navaidixOrange/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">        <motion.div
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-navaidixAmber/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-navaidixOrange/10 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navaidixSlate mb-4">Our Global Impact</h2>
          <p className="text-navaidixSlate/70 max-w-2xl mx-auto text-lg">
            We&apos;ve helped companies around the world find exceptional talent and build amazing teams.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-Amber rounded-2xl p-8 shadow-xl border border-navaidixTeal/10 hover:shadow-2xl hover:border-navaidixTeal/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="relative mb-2">
                  <CountUp end={stat.value} duration={2.5} isInView={isInView} />
                  <span className="text-4xl font-bold text-navaidixTeal">{stat.suffix}</span>
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-navaidixTeal to-navaidixPurple rounded-full mb-3"></div>
                <p className="text-navaidixSlate text-lg font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-5">
            <circle cx="50" cy="50" r="49" stroke="currentColor" strokeWidth="2" className="text-navaidixTeal" />
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" className="text-navaidixPurple" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" className="text-navaidixAmber" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function CountUp({ end, duration, isInView }: { end: number; duration: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);
    
    return () => clearInterval(timer);
  }, [end, duration, isInView]);

  return <span className="text-5xl font-bold bg-gradient-to-r from-navaidixTeal to-navaidixPurple bg-clip-text text-transparent">{count}</span>;
}