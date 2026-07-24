import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portraitImg from '../assets/boys.png';
import './Hero.css';

const Hero = () => {

  return (
    <section className="ref-hero" id="home">
      <div className="ref-hero-content">
        
        {/* Left Column */}
        <div className="ref-col-left" style={{ position: 'relative', perspective: '1000px' }}>
          <motion.div 
            className="ref-label"
            initial={{ opacity: 0, y: 30, letterSpacing: '8px', filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '2px', filter: 'blur(0px)' }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            ANBUSELVAM &times; AVINASH
          </motion.div>
          <motion.h1 
            className="ref-huge-text text-left"
            initial={{ opacity: 0, y: -60, rotateX: 45, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top center" }}
          >
            FREELANCERZ
          </motion.h1>
        </div>

        {/* Center Column */}
        <div className="ref-col-center">
          <motion.div 
            className="ref-portrait-wrapper"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }} 
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={portraitImg} alt="Anbuselvam & Avinash" className="ref-portrait" />
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="ref-col-right">
          <div className="ref-brand-mark-wrapper">
            <motion.svg 
              viewBox="0 0 100 100" 
              className="ref-brand-mark"
              style={{ color: 'var(--text-primary)' }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <motion.path 
                d="M 10 55 L 25 80 L 45 20 L 95 20" 
                stroke="currentColor" 
                strokeWidth="10" 
                fill="none" 
                strokeLinecap="square" 
                strokeLinejoin="miter" 
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.svg>
          </div>

          <motion.p 
            className="ref-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Founders of Freelancer, crafting premium websites,<br/>
            AI automation &amp; branding.
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
