import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import portraitImg from '../assets/portrait.png';
import './Services.css';

export const services = [
  {
    id: 'website',
    title: '1. PREMIUM WEBSITE DESIGN',
    points: [
      'Business Websites',
      'E-commerce Websites',
      'Landing Pages',
      'Portfolio Websites',
      'Premium UI/UX',
      'SEO Optimized',
      'Mobile Responsive'
    ],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'ai',
    title: '2. AI AUTOMATION',
    points: [
      'Gmail Auto Reply',
      'WhatsApp Automation',
      'Telegram Automation',
      'AI Chatbots',
      'Lead Automation',
      'Workflow Automation'
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'social',
    title: '3. SOCIAL MEDIA',
    points: [
      'Instagram Handling',
      'Content Creation',
      'Video Shooting',
      'Video Editing',
      'Reels Creation'
    ],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'seo',
    title: '4. SEO',
    points: [
      'Website SEO',
      'Google Ranking',
      'Speed Optimization',
      'Keyword Research',
      'Performance Tracking'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop'
  }
];

const Services = ({ activeId, handleToggle }) => {



  return (
    <section id="services" className="services-section">
      <div className="services-container">
        
        {/* Left Column: Text & Accordion */}
        <div className="services-left">
          <div className="services-title-wrapper">
            <motion.h2 
              className="services-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              WHAT WE CAN DO FOR YOU
            </motion.h2>
          </div>
          
          <motion.p 
            className="services-desc"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            At Freelancerz, we create premium digital experiences that help businesses grow.
          </motion.p>

          <div className="services-accordion">
            {services.map((service, index) => {
              const isOpen = activeId === service.id;

              return (
                <motion.div 
                  key={service.id} 
                  className={`accordion-item ${isOpen ? 'open' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), ease: [0.22, 1, 0.36, 1] }}
                >
                  <button 
                    className="accordion-header" 
                    onClick={() => handleToggle(service.id)}
                  >
                    <span className="accordion-title">{service.title}</span>
                    <ChevronUp size={20} className={`accordion-icon ${isOpen ? 'open' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="accordion-content-wrapper"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                      >
                        <ul className="accordion-list">
                          {service.points.map((point, i) => (
                            <li key={i}>
                              <CheckCircle2 size={16} className="check-icon" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column */}
        <div className="services-right">
          <div className="sticky-image-container">
            {/* Empty space! The scroll-linked portrait will lock into here */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
