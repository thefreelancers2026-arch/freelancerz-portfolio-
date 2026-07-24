import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import './OurWorks.css';

const projects = [
  {
    id: 1,
    title: 'KGS Home Decors',
    subtitle: 'Luxury Website Design',
    category: 'Website Design • SEO • Branding',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    color: '#7C3AED'
  },
  {
    id: 2,
    title: 'Boss Event Decorators',
    subtitle: 'Event Management Platform',
    category: 'Website Design',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    color: '#3B82F6'
  },
  {
    id: 3,
    title: 'Suganya Cakes',
    subtitle: 'Bakery E-Commerce',
    category: 'Website Design • Branding',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
    color: '#EC4899'
  },
  {
    id: 4,
    title: 'Vaadivaasal Turf',
    subtitle: 'Sports Booking System',
    category: 'Website Design',
    image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?auto=format&fit=crop&w=1200&q=80',
    color: '#10B981'
  },
  {
    id: 5,
    title: 'Freelancerz',
    subtitle: 'Freelance Marketplace',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80',
    color: '#F59E0B'
  },
  {
    id: 6,
    title: 'Feders Clothing',
    subtitle: 'E-Commerce Website',
    category: 'Website Design • SEO',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    color: '#6366F1'
  }
];

const OurWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt logic
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Map to max 2 degrees
    setTilt({
      x: (y / (rect.height / 2)) * -2,
      y: (x / (rect.width / 2)) * 2,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    setIsDragging(false);
    const swipeThreshold = 50;
    if (offset.x < -swipeThreshold) {
      nextSlide();
    } else if (offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  // Auto-play feature with pause on hover
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging && !isHovered) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [isDragging, isHovered]);

  const getOffset = (index) => {
    let diff = (index - currentIndex) % projects.length;
    if (diff > Math.floor(projects.length / 2)) diff -= projects.length;
    if (diff < -Math.floor(projects.length / 2)) diff += projects.length;
    return diff;
  };

  return (
    <section id="works" className="our-works-section">
      <div className="works-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="works-title"
        >
          Our Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="works-subtitle"
        >
          Crafting premium digital experiences for ambitious brands.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="gradient-divider" 
        />
      </div>

      <motion.div 
        className="carousel-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div className="carousel-track">
          <AnimatePresence initial={false}>
            {projects.map((project, index) => {
              const offset = getOffset(index);
              const isCenter = offset === 0;

              // Calculate strict Cover Flow positions (No Overlapping)
              const absOffset = Math.abs(offset);
              const zIndex = 10 - absOffset;
              
              // Exactly 15-18% scale reduction per the specs
              const scale = isCenter ? 1 : absOffset === 1 ? 0.82 : 0.65;
              
              // Strict 25 degree inward rotation
              const rotateY = isCenter ? 0 : offset > 0 ? -25 : 25;
              
              // 105% offset ensures cards NEVER touch and NEVER overlap
              const translateX = offset === 0 ? '0%' : offset > 0 ? `${absOffset * 105}%` : `-${absOffset * 105}%`;
              
              const opacity = isCenter ? 1 : absOffset === 1 ? 0.75 : 0; // Updated to 0.75 per specs

              return (
                <motion.div
                  key={project.id}
                  className="carousel-card"
                  initial={false}
                  animate={{
                    scale,
                    rotateY,
                    x: translateX,
                    zIndex,
                    opacity,
                    filter: isCenter ? 'brightness(1)' : 'brightness(0.85)',
                    y: isCenter ? [0, -3, 0] : 0, // Gentle floating
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1], // Custom cinematic cubic-bezier
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" } // Slowed down to 6s
                  }}
                  onMouseMove={isCenter ? handleMouseMove : undefined}
                  onMouseLeave={isCenter ? handleMouseLeave : undefined}
                  style={{
                    boxShadow: isCenter ? `0 0 180px 0 ${project.color}0A` : 'none', // 4% opacity (0A), 180px blur
                  }}
                  onClick={() => {
                    if (!isCenter && Math.abs(offset) === 1) {
                      offset > 0 ? nextSlide() : prevSlide();
                    }
                  }}
                >
                  <motion.div 
                    className="card-inner"
                    animate={{
                      rotateX: isCenter ? tilt.x : 0,
                      rotateY: isCenter ? tilt.y : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {/* Unified Premium Layout for ALL Cards */}
                    <div className="card-content">
                      <div className="content-left">
                        <p className="project-category">{project.subtitle}</p>
                        <h3 className="project-title">
                          {project.title.split(' ').map((word, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: isCenter ? 1 : 0, y: isCenter ? 0 : 15 }}
                              transition={{ duration: 0.6, delay: isCenter ? 0.3 + (i * 0.08) : 0, ease: [0.22, 1, 0.36, 1] }}
                              style={{ display: 'inline-block', marginRight: '0.25em' }}
                            >
                              {word}
                            </motion.span>
                          ))}
                        </h3>
                        <div className="project-services">
                          {project.category.split(' • ').map((service, i) => (
                            <span key={i} className="service-chip">{service}</span>
                          ))}
                        </div>
                        <div className="btn-wrapper">
                            <button className="view-project-btn">
                              View Project <ArrowRight size={16} />
                            </button>
                        </div>
                      </div>
                      
                      {/* Pure Website Screenshot */}
                      <div className="content-right">
                        <div className="screenshot-wrapper">
                          <img src={project.image} alt={project.title} className="project-img" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Glassmorphic Controls (Outside Carousel Container) */}
      <div className="carousel-controls-wrapper">
        <button className="control-btn prev-btn" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>
        <button className="control-btn next-btn" onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="pagination-dots">
        {projects.map((_, idx) => (
          <button
            key={idx}
            className={`dot-indicator ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default OurWorks;
