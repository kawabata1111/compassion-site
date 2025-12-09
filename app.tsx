import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Philosophy } from './pages/Philosophy';
import { ServicesPage } from './pages/Services';
import { Company } from './pages/Company';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-off-white text-charcoal font-sans antialiased selection:bg-charcoal selection:text-white min-h-screen flex flex-col">
        {/* Custom Cursor is hidden on mobile for better UX */}
        <div className="hidden md:block">
          <CustomCursor />
        </div>
        
        <Header />
        
        <main className="w-full flex-grow">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;