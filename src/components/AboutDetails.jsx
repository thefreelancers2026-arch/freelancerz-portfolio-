import React from 'react';
import { motion } from 'framer-motion';
import './AboutDetails.css';

const AboutDetails = () => {
  return (
    <section className="about-details section-padding container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="intro-text"
      >
        <p>My Name is <span>Aayushi</span> and I am a Freelance</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="title-wrapper"
      >
        <h1 className="text-display title-bold">Graphic</h1>
        <motion.h2 
          initial={{ opacity: 0, x: 50, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-script title-script"
        >
          designer.
        </motion.h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="about-me"
      >
        <h3 className="section-subtitle">About Me</h3>
        <p className="about-desc">
          I am a graphic designer with confidence in my abilities and the capacity to work effectively under tight deadlines. My passion lies in creating visual elements that exceed my clients' expectations. I strive to push the boundaries of my creativity and deliver outstanding results.
        </p>
      </motion.div>


    </section>
  );
};

export default AboutDetails;
