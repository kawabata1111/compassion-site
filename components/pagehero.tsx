import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
  jpTitle: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, jpTitle }) => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-end pb-24 px-6 md:px-24 overflow-hidden bg-off-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-gray-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block text-xs md:text-sm uppercase tracking-[0.3em] text-gray-500 mb-6 flex items-center">
             <span className="w-12 h-px bg-gray-400 mr-4"></span>
             {subtitle}
          </span>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-6xl md:text-9xl text-charcoal leading-none tracking-tight mb-4"
            >
              {title}
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-serif text-xl md:text-2xl text-gray-500 italic mt-4"
          >
            {jpTitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};