import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import './InstagramFeed.css';

const posts = [
  '/insta/uiux.png',
  '/insta/webdev.png',
  '/insta/branding.png',
  '/insta/marketing.png',
  '/insta/agency.png',
];

const InstagramFeed = () => {
  const containerRef = useRef(null);
  
  // Optional: Horizontal scroll effect tied to page scroll, or just standard overflow scroll.
  // We'll use standard CSS overflow for a more native feel, with a custom scrollbar.

  return (
    <section className="instagram-section">
      <div className="container">
        
        {/* Profile Header */}
        <motion.div 
          className="insta-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="insta-profile-pic">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="Profile" />
          </div>
          <div className="insta-info">
            <h3 className="insta-name">FREELANCERZ</h3>
            <a href="#" className="insta-follow-btn">Follow</a>
          </div>
        </motion.div>

        {/* Posts Carousel */}
        <motion.div 
          className="insta-carousel-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="insta-carousel" ref={containerRef}>
            {posts.map((src, index) => (
              <div key={index} className="insta-post">
                <img src={src} alt={`Instagram post ${index + 1}`} />
              </div>
            ))}
            
            {/* Nav button - decorative for the UI */}
            <div className="insta-nav-next">
              <ChevronRight size={24} color="#111" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default InstagramFeed;
