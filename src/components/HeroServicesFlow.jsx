import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import portraitImg from '../assets/boys.png';
import './HeroServicesFlow.css';

const HeroServicesFlow = () => {
  const containerRef = useRef(null);

  // Track if we're on mobile/tablet to adjust transforms
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Active accordion ID for Services
  const [activeId, setActiveId] = useState(null);
  
  const handleToggle = (id) => {
    setActiveId(prevId => prevId === id ? null : id);
  };
  
  // Hello Bubble Text Timer
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowText(prev => !prev);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // MAPPING SCROLL VALUES FOR 3 SECTIONS
  const t1Start = 0.15; // Hero -> Services Start
  const t1End = 0.30;   // Hero -> Services End
  const t2Start = 0.65; // Services -> About Start
  const t2End = 0.80;   // Services -> About End

  // Scale
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1]);

  // Bubble opacity: Visible in Hero, hidden in Services and About
  const bubbleOpacity = useTransform(scrollYProgress, [t1Start, t1End], [1, 0]);

  // Width/Height transforms (Landscape ratio for two people)
  const width = useTransform(scrollYProgress, [t1Start, t1End, t2Start, t2End], isMobile ? ["85vw", "95vw", "95vw", "95vw"] : ["420px", "440px", "440px", "460px"]);
  const height = useTransform(scrollYProgress, [t1Start, t1End, t2Start, t2End], isMobile ? ["56vw", "63vw", "63vw", "63vw"] : ["290px", "310px", "310px", "330px"]);
  const borderRadius = useTransform(scrollYProgress, [t1Start, t1End], ["16px", "12px"]);

  // x: 0 (center) -> ~25vw (Services) -> ~22vw (About). On mobile, keep it centered (0vw).
  const imageX = useTransform(scrollYProgress, [t1Start, t1End, t2Start, t2End], isMobile ? ["0vw", "0vw", "0vw", "0vw"] : ["0vw", "25vw", "25vw", "22vw"]);
  const imageY = useTransform(scrollYProgress, [t1Start, t1End], ["0vh", "0vh"]);

  // rotation: 0 -> 165 (Services) -> 360 (About)
  const rotateY = useTransform(scrollYProgress, [t1Start, t1End, t2Start, t2End], isMobile ? [0, 0, 0, 0] : [0, 165, 165, 360]);
  const rotateX = useTransform(scrollYProgress, [t1Start, t1End, t2Start, t2End], isMobile ? [0, 0, 0, 0] : [0, 5, 5, 0]);
  const rotateZ = useTransform(scrollYProgress, [t1Start, t1End, t2Start, t2End], isMobile ? [0, 0, 0, 0] : [0, -5, -5, 0]);

  return (
    <div ref={containerRef} className="flow-container">
      {/* 1. Normal Hero Section */}
      <Hero />
      
      {/* 2. Normal Services Section */}
      <Services activeId={activeId} handleToggle={handleToggle} />
      
      {/* 3. New About Section */}
      <About />
      
      {/* 4. The Sticky Wrapper that holds the transforming portrait */}
      <div className="flow-sticky-track">
        <div className="flow-sticky-viewport">
          <motion.div 
            className="flow-floating-image-wrapper"
            style={{
              width,
              height,
              borderRadius,
              scale,
              x: imageX,
              y: imageY,
              rotateY,
              rotateX,
              rotateZ,
            }}
          >
            {/* Front Face (Portrait + Bubble) */}
            <motion.div 
              className="card-face card-face-front"
            >
              <motion.img 
                src={portraitImg} 
                alt="Anbuselvam & Avinash" 
                className="card-face-image"
                initial={{ opacity: 0, scale: 1.1, y: 60, rotateX: -20, filter: 'blur(20px) brightness(1.5)' }}
                animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0, filter: 'blur(0px) brightness(1)' }}
                transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "bottom center", perspective: '1000px', position: 'absolute' }}
              />
              
              <motion.div 
                className="ref-hello-bubble"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5, type: 'spring', bounce: 0.4 }}
                style={{ opacity: bubbleOpacity }}
                layout
              >
                <AnimatePresence mode="wait">
                  {!showText ? (
                    <motion.span 
                      key="hand"
                      className="ref-waving-hand" 
                      role="img" 
                      aria-label="wave" 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        rotate: [0, 20, -10, 20, -10, 10, 0, 0] 
                      }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ 
                        rotate: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
                        default: { duration: 0.2 }
                      }}
                      style={{ fontSize: '20px', display: 'inline-block', transformOrigin: 'bottom right' }}
                    >
                      👋🏿
                    </motion.span>
                  ) : (
                    <motion.span
                      key="text"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                      style={{ fontWeight: '500', fontSize: '16px', letterSpacing: '0.5px' }}
                    >
                      HI
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
            
            {/* Back Face (Services Image) */}
            <motion.div 
              className="card-face card-face-back"
            >
              <ServicesBackFace activeId={activeId} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Helper component to render the active service image
import { services } from './Services';

const ServicesBackFace = ({ activeId }) => {
  const activeService = services.find(s => s.id === activeId) || services[0];
  
  return (
    <AnimatePresence mode="wait">
      <motion.img
        key={activeService.id}
        src={activeService.image}
        alt={activeService.title}
        className="card-face-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </AnimatePresence>
  );
};

export default HeroServicesFlow;
