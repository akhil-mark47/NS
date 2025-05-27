"use client"
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
interface ClientLogo {
  name: string;
  logo: string;
}

interface ClientRow {
  row: number;
  logos: ClientLogo[];
}

interface ClientRowProps {
  logos: ClientLogo[];
  direction?: 'left' | 'right';
  speed?: number;
}

const clientLogos: ClientRow[] = [
  // First row clients - Left to Right
  {
    row: 1,    logos: [
      { name: 'Microsoft', logo: '/assets/images/clients/microsoft.svg' },
      { name: 'Google', logo: '/assets/images/clients/google.svg' },
      { name: 'Amazon', logo: '/assets/images/clients/amazon.svg' },
      { name: 'Netflix', logo: '/assets/images/clients/netflix.svg' },
      { name: 'Intel', logo: '/assets/images/clients/intel.svg' },
      { name: 'IBM', logo: '/assets/images/clients/ibm.svg' },
      { name: 'Oracle', logo: '/assets/images/clients/oracle.svg' },
      { name: 'Samsung', logo: '/assets/images/clients/samsung.svg' },
    ]
  },
  // Second row clients - Right to Left
  {
    row: 2,
    logos: [
      { name: 'Adobe', logo: '/assets/images/clients/adobe.svg' },
      { name: 'Spotify', logo: '/assets/images/clients/spotify.svg' },
      { name: 'PayPal', logo: '/assets/images/clients/paypal.svg' },
      { name: 'Oracle', logo: '/assets/images/clients/oracle.svg' },
      { name: 'Samsung', logo: '/assets/images/clients/samsung.svg' },
      { name: 'LinkedIn', logo: '/assets/images/clients/linkedin.svg' },
      { name: 'Cisco', logo: '/assets/images/clients/cisco.svg' },
      { name: 'Dell', logo: '/assets/images/clients/dell.svg' },
    ]
  }
];

const ClientRow: React.FC<ClientRowProps> = ({ logos, direction = 'left', speed = 20 }) => {
  const directionMultiplier = direction === 'left' ? -1 : 1;
  
  return (
    <div className="flex overflow-hidden relative py-6 group">
      <motion.div
        className="flex gap-8 items-center"
        style={{
          width: 'fit-content',
        }}
        animate={{
          x: directionMultiplier * -50 + '%'
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
        whileHover={{ animationPlayState: 'paused' }}
      >
        {/* Original logos */}
        {[...logos, ...logos, ...logos].map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex-shrink-0 w-32 h-32 rounded-xl bg-white/90 border border-navaidixAmber/10 backdrop-blur-sm p-4 
              hover:border-navaidixAmber/30 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={client.logo} 
                alt={`${client.name} logo`}
                className="w-auto h-12 object-contain hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  );
};

export default function OurClients() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navaidixAmber/5 to-navaidixOrange/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">Our Global Clients</h2>
          <p className="text-navaidixSlate/70 max-w-2xl mx-auto text-lg">
            Trusted by leading companies worldwide for their talent acquisition needs
          </p>
        </motion.div>        <div className="space-y-12">
          {/* First row - Right direction */}
          <ClientRow logos={clientLogos[0].logos} direction="right" speed={20} />
          
          {/* Second row - Left direction */}
          <ClientRow logos={clientLogos[1].logos} direction="left" speed={20} />
        </div>
      </div>
    </section>
  );
}
