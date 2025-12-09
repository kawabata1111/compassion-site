import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// 文字単位のアニメーション用コンポーネント
const RevealText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  // 文字を分割
  const chars = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay }
    }
  };

  const child = {
    hidden: { y: "100%" },
    visible: { 
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1] // Custom bezier for luxurious feel
      } 
    }
  };

  return (
    <motion.div 
      variants={container} 
      initial="hidden" 
      animate="visible"
      className={`flex overflow-hidden ${className}`}
    >
      {chars.map((char, index) => (
        <div key={index} className="overflow-hidden">
          <motion.span variants={child} className="block">
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
};

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 bg-off-white">
        {/* Animated Gradient Blob */}
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-gray-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-60" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-gray-100/60 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-60" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div 
        style={{ opacity }}
        className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center relative z-10"
      >
        {/* Metadata */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute top-32 md:top-40 left-0 md:left-4 flex flex-col items-start gap-4"
        >
          <div className="h-px w-12 bg-charcoal/30" />
          <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-gray-500 writing-vertical h-32">
             Est. 2026 Tokyo
          </p>
        </motion.div>

        {/* Main Title Area */}
        <div className="flex flex-col items-center md:items-start md:pl-[15%] w-full">
          <div className="relative mb-2 md:mb-6 overflow-hidden">
             <motion.p 
               initial={{ y: "100%" }}
               animate={{ y: 0 }}
               transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
               className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gray-600 mb-4 ml-1"
             >
               Financial & Management Consulting
             </motion.p>
          </div>

          <div className="flex flex-col md:block">
            <RevealText 
              text="利よりも、" 
              delay={0.8}
              className="font-serif text-5xl md:text-8xl lg:text-9xl text-charcoal font-light tracking-tight leading-[1.1]" 
            />
            <div className="md:ml-32 mt-2 md:mt-4 overflow-hidden">
               <motion.div
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
                 className="h-[1px] bg-charcoal mb-4 hidden md:block"
               />
               <RevealText 
                text="義を。" 
                delay={1.4}
                className="font-serif text-5xl md:text-8xl lg:text-9xl text-charcoal italic font-medium tracking-tight leading-[1.1]" 
              />
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="absolute bottom-12 right-0 md:right-12 max-w-md text-right hidden md:block"
        >
          <p className="font-serif text-lg text-charcoal/80 mb-2">
            「人の為に動いた人」と<br/>言われること。
          </p>
          <p className="font-sans text-xs text-gray-400 tracking-wider">
             SCROLL TO EXPLORE
          </p>
        </motion.div>

      </motion.div>

      {/* Decorative Parallax Text */}
      <motion.div 
        style={{ y: y1, rotate: 90 }}
        className="absolute -right-20 top-1/2 origin-center pointer-events-none opacity-[0.03] whitespace-nowrap"
      >
        <span className="text-[20vh] font-serif font-thin">COMPASSION</span>
      </motion.div>

    </section>
  );
};