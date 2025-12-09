import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'Services', path: '/services' },
    { name: 'Company', path: '/company' },
  ];

  const isHome = location.pathname === '/';

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full px-6 md:px-12 py-6 flex justify-between items-start z-50 text-white transition-all duration-500 ${mobileMenuOpen ? 'bg-charcoal mix-blend-normal' : 'mix-blend-difference'}`}
    >
      <div>
         <Link to="/" className="flex items-center gap-3 group cursor-scale">
           <img
             src="/favicon.png"
             alt="compassion consulting logo"
             className="h-10 md:h-12 w-auto"
           />
           <div className="font-serif tracking-widest flex flex-col">
             <span className="text-xl md:text-2xl font-light">compassion</span>
             <span className="text-xs md:text-sm uppercase tracking-[0.3em] opacity-70 group-hover:opacity-100 transition-opacity">consulting</span>
           </div>
         </Link>
      </div>
      
      <nav className="hidden md:flex flex-col items-end space-y-1">
        <div className="flex space-x-12">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-[10px] uppercase tracking-[0.2em] transition-colors relative group cursor-scale ${location.pathname === link.path ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              <span className="relative z-10">{link.name}</span>
              <span className={`absolute -bottom-2 left-0 h-[1px] bg-white transition-all duration-300 ease-out ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Hamburger */}
      <div
        className="md:hidden cursor-pointer cursor-scale z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <motion.div
          animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-[1px] bg-white mb-2"
        />
        <motion.div
          animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-[1px] bg-white"
        />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full h-screen bg-charcoal z-40 md:hidden pt-24"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8 pb-24">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl text-white hover:text-gold-accent transition-colors"
              >
                Top
              </Link>
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-serif text-3xl transition-colors ${location.pathname === link.path ? 'text-gold-accent' : 'text-white hover:text-gold-accent'}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};