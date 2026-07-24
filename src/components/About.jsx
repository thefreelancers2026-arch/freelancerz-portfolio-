import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Left Content Column */}
        <div className="about-content">
          <motion.h2 
            className="about-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            ABOUT US
          </motion.h2>
          
          <motion.p 
            className="about-desc"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Hi, We're Freelancerz — a creative digital agency passionate about building premium websites, powerful brand identities and AI-powered business solutions that help businesses grow online.
          </motion.p>

          {/* Stats Grid */}
          <div className="about-stats-grid">
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="stat-value">1+</h3>
              <p className="stat-label">Years of Experience</p>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="stat-value">05</h3>
              <p className="stat-label">Completed Projects</p>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="stat-value">05</h3>
              <p className="stat-label">Happy Clients</p>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="about-contact-grid">
            <motion.div 
              className="contact-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h4>Call Today :</h4>
              <p>+91 87780 77747</p>
              <p>+91 88381 95254</p>
            </motion.div>
            <motion.div 
              className="contact-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h4>Email :</h4>
              <p>thefreelancers2026@gmail.com</p>
            </motion.div>
          </div>

        </div>

        {/* Right Column (Empty to receive the floating image) */}
        <div className="about-right-empty">
          {/* The sticky image will land here from HeroServicesFlow */}
        </div>
        
      </div>
    </section>
  );
};

export default About;
