import React from 'react';
import { Hero } from '../components/hero';
import { Vision } from '../components/vision';
import { Services } from '../components/services';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Hero />
      <Vision />
      <Services />
      
      {/* Call to Action for Company */}
      <section className="py-24 px-6 md:px-24 bg-off-white flex justify-center items-center">
         <Link to="/company" className="group relative overflow-hidden px-12 py-6 rounded-full border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors duration-500 cursor-scale">
            <span className="font-serif text-xl relative z-10">View Company Profile</span>
         </Link>
      </section>
    </motion.div>
  );
};