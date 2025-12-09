import React from 'react';
import { motion } from 'framer-motion';
import { DesignConcept } from '../types';

interface ConceptDisplayProps {
  concept: DesignConcept;
}

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVars = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const ConceptDisplay: React.FC<ConceptDisplayProps> = ({ concept }) => {
  return (
    <motion.section 
      variants={containerVars}
      initial="hidden"
      animate="show"
      className="px-6 md:px-24 py-12 pb-32 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12"
    >
      {/* Sidebar Info */}
      <div className="md:col-span-4 flex flex-col space-y-12">
        <motion.div variants={itemVars}>
          <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4">Palette</h3>
          <div className="flex space-x-4">
            {concept.colorPalette.map((color, idx) => (
              <div key={idx} className="group relative">
                <div 
                  className="w-12 h-12 rounded-full border border-gray-100 shadow-sm transition-transform duration-500 hover:scale-110" 
                  style={{ backgroundColor: color }} 
                />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                  {color}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVars}>
          <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4">Elements</h3>
          <ul className="space-y-2">
            {concept.visualElements.map((el, idx) => (
              <li key={idx} className="font-serif text-xl text-charcoal border-b border-gray-100 py-2">
                {el}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="md:col-span-8 flex flex-col space-y-8 md:pl-12">
        <motion.div variants={itemVars}>
          <span className="font-sans text-xs border border-black px-3 py-1 rounded-full uppercase tracking-wide">
            Concept
          </span>
        </motion.div>
        
        <motion.h2 
          variants={itemVars}
          className="font-serif text-5xl md:text-7xl leading-tight text-charcoal"
        >
          {concept.title}
        </motion.h2>
        
        <motion.p 
          variants={itemVars}
          className="font-serif italic text-2xl md:text-3xl text-gray-400"
        >
          "{concept.tagline}"
        </motion.p>
        
        <motion.div variants={itemVars} className="h-px w-24 bg-black my-8" />
        
        <motion.p 
          variants={itemVars}
          className="font-sans text-lg md:text-xl leading-relaxed text-gray-700 max-w-2xl"
        >
          {concept.narrative}
        </motion.p>
      </div>
    </motion.section>
  );
};