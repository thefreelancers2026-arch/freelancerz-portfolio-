import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import portraitImg from '../assets/portrait.png'; 
import './Navbar.css';

const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Sync state with body class on mount
    if (document.body.classList.contains('light-theme')) {
      setIsLightMode(true);
    }

    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'featured', 'contact'];
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is at or above the middle of the screen
          if (rect.top <= window.innerHeight / 2.5) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isLightMode) {
      document.body.classList.remove('light-theme');
      setIsLightMode(false);
    } else {
      document.body.classList.add('light-theme');
      setIsLightMode(true);
    }
  };

  return (
    <>
      <motion.nav 
        className="ref-navbar"
        initial={{ y: -100, opacity: 0, x: '-50%' }}
        animate={{ y: 0, opacity: 1, x: '-50%' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <div className="ref-nav-container">
          <div className="ref-nav-avatar">
            <img src={portraitImg} alt="Avatar" />
          </div>
          
          <ul className="ref-nav-links">
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#featured" className={activeSection === 'featured' ? 'active' : ''}>Projects</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>

          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            <ul className="mobile-nav-links">
              <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
              <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)} className={activeSection === 'services' ? 'active' : ''}>Services</a></li>
              <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
              <li><a href="#featured" onClick={() => setIsMobileMenuOpen(false)} className={activeSection === 'featured' ? 'active' : ''}>Projects</a></li>
              <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Theme Toggle (Bottom-Center fixed) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        style={{
          position: 'fixed',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999
        }}
      >
        <button 
          onClick={toggleTheme}
          style={{
            width: '46px',
            height: '24px',
            borderRadius: '12px',
            backgroundColor: isLightMode ? '#e5e5e5' : '#111',
            border: `2px solid ${isLightMode ? '#ccc' : '#333'}`,
            display: 'flex',
            alignItems: 'center',
            padding: '2px',
            cursor: 'pointer',
            justifyContent: isLightMode ? 'flex-end' : 'flex-start',
            transition: 'background-color 0.3s ease, border-color 0.3s ease'
          }}
        >
          <motion.div 
            layout
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: 'var(--theme-accent)'
            }}
          />
        </button>
      </motion.div>
    </>
  );
};

export default Navbar;
