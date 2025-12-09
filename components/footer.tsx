import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-off-white pt-24 pb-12 px-6 md:px-24 relative overflow-hidden">
      
      {/* Decorative large text */}
      <div className="absolute top-12 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none">
         <h2 className="text-[15vw] font-serif leading-none whitespace-nowrap text-center text-white">
            COMPASSION
         </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 border-b border-gray-800 pb-24">
        
        {/* Nav Links */}
        <div className="md:col-span-5 flex flex-col justify-between">
           <div>
             <span className="text-[10px] uppercase tracking-[0.3em] text-gold-accent block mb-8">Navigation</span>
             <ul className="space-y-4 font-serif text-xl">
               <li><Link to="/" className="hover:text-gold-accent transition-colors">Top</Link></li>
               <li><Link to="/philosophy" className="hover:text-gold-accent transition-colors">Philosophy</Link></li>
               <li><Link to="/services" className="hover:text-gold-accent transition-colors">Services</Link></li>
               <li><Link to="/company" className="hover:text-gold-accent transition-colors">Company</Link></li>
             </ul>
           </div>
        </div>

        {/* Contact Right */}
        <div className="md:col-span-7 md:pl-16 flex flex-col justify-between">
           <div>
             <span className="text-[10px] uppercase tracking-[0.3em] text-gold-accent block mb-12">Contact Us</span>
             <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-12 text-gray-200">
               人生設計に寄り添う伴走型の生涯アドバイザーを目指して。
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <a 
               href="mailto:nakagawa@compassion-c.com" 
               className="group flex flex-col justify-center items-center border border-gray-700 py-8 hover:bg-off-white hover:text-charcoal transition-all duration-500 cursor-scale"
             >
               <span className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-charcoal/60 mb-2">Email</span>
               <span className="font-serif text-lg">nakagawa@compassion-c.com</span>
             </a>
             <a
               href="tel:08011227217"
               className="group flex flex-col justify-center items-center bg-off-white text-charcoal py-8 hover:bg-gold-accent transition-all duration-500 cursor-scale"
             >
               <span className="text-xs uppercase tracking-widest text-charcoal/60 mb-2">Phone</span>
               <span className="font-serif text-lg">080-1122-7217</span>
             </a>
           </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-600">
        <p>&copy; 2026 Compassion Consulting Inc.</p>
        <p className="mt-2 md:mt-0 font-serif italic text-gray-500">Righteousness over Profit.</p>
      </div>
    </footer>
  );
};