import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface InputSectionProps {
  onGenerate: (prompt: string) => void;
  isLoading: boolean;
}

export const InputSection: React.FC<InputSectionProps> = ({ onGenerate, isLoading }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onGenerate(prompt);
    }
  };

  return (
    <section className="px-6 md:px-24 py-12 md:py-24 w-full max-w-7xl mx-auto relative z-10">
      <form onSubmit={handleSubmit} className="relative">
        <label className="block text-xs uppercase tracking-widest text-gray-400 mb-6">
          Define the Subject
        </label>
        <div className="relative group">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. Silence in a cathedral..."
            className="w-full bg-transparent border-b border-gray-300 py-4 text-3xl md:text-5xl font-serif text-charcoal focus:outline-none focus:border-charcoal transition-colors placeholder:text-gray-200"
            disabled={isLoading}
          />
          <AnimatePresence>
            {prompt.length > 0 && !isLoading && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 p-4 rounded-full hover:bg-black hover:text-white transition-colors duration-500"
              >
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
        
        {isLoading && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="mt-8 flex items-center space-x-4"
          >
            <div className="w-12 h-[1px] bg-black animate-pulse" />
            <span className="font-serif italic text-lg text-gray-400">Thinking...</span>
          </motion.div>
        )}
      </form>
    </section>
  );
};