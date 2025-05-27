"use client"
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: false, margin: "-100px" });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log form data (in real app, you might send this to an API)
      console.log('Form submitted:', formData);
      
      // Show success message
      setSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (err: unknown) {
      console.error('Form submission error:', err);
      setError('Failed to submit form. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navaidixDark to-navaidixSlate z-0" />
      
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-navaidixAmber rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-20 w-80 h-80 bg-navaidixOrange rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-navaidixDarkAmber rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0" />
      
      <div className="container relative mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in <span className="gradient-text">Touch</span></h2>
          <p className="text-xl text-navaidixLightSlate max-w-2xl mx-auto">
            Have questions or ready to start your recruiting journey? Reach out to our team today.
          </p>
        </motion.div>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact form */}
          <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl glass-card"
              variants={formVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div variants={itemVariants}>
                  <Label htmlFor="name" className="text-white mb-2 block">Full Name</Label>                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/10 border-navaidixAmber/30 text-white focus:border-navaidixAmber focus:ring-navaidixAmber/50 placeholder:text-white/50"
                    placeholder="John Doe"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Label htmlFor="email" className="text-white mb-2 block">Email Address</Label>                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/10 border-navaidixAmber/30 text-white focus:border-navaidixAmber focus:ring-navaidixAmber/50 placeholder:text-white/50"
                    placeholder="john@example.com"
                    required
                  />
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants} className="mb-6">
                <Label htmlFor="company" className="text-white mb-2 block">Company Name</Label>                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-white/10 border-navaidixAmber/30 text-white focus:border-navaidixAmber focus:ring-navaidixAmber/50 placeholder:text-white/50"
                  placeholder="Your Company"
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-6">
                <Label htmlFor="message" className="text-white mb-2 block">Message</Label>                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/10 border-navaidixAmber/30 text-white focus:border-navaidixAmber focus:ring-navaidixAmber/50 placeholder:text-white/50 min-h-[120px]"
                  placeholder="Tell us about your requirements..."
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full py-6 text-lg font-medium bg-gradient-to-r from-navaidixAmber to-navaidixOrange hover:from-navaidixOrange hover:to-navaidixAmber text-white rounded-xl transition-all duration-300 shadow-lg"
                  >
                    {loading ? 'Submitting...' : 'Send Message'}
                  </Button>
                </motion.div>
                {success && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-navaidixGreen text-center font-medium"
                  >
                    Message sent successfully! We&apos;ll get back to you soon.
                  </motion.p>
                )}
                {error && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-red-400 text-center"
                  >
                    {error}
                  </motion.p>
                )}
              </motion.div>
            </motion.form>
        </div>
      </div>
    </section>
  );
}