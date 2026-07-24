import React from 'react';
import { motion } from 'framer-motion';
import './FeaturedProjects.css';

const projects = [
  {
    title: 'KGS Home Decors',
    subtitle: 'Luxury Website Design',
    category: 'Website Design • SEO • Branding',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80',
    link: 'https://www.kgshomedecors.com/'
  },
  {
    title: 'Boss Event Decorators',
    subtitle: 'Event Management Platform',
    category: 'Website Design',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=80',
    link: 'https://wedding-planner-two-pi.vercel.app/'
  },
  {
    title: 'Suganya Cakes',
    subtitle: 'Bakery E-Commerce',
    category: 'Website Design • Branding',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1400&q=80',
    link: 'https://suganya-cake.vercel.app/'
  },
  {
    title: 'Vaadivaasal Turf',
    subtitle: 'Sports Booking System',
    category: 'Website Design',
    image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?auto=format&fit=crop&w=1400&q=80',
  },

  {
    title: 'Legal Associates',
    subtitle: 'Law Firm Website',
    category: 'Website Design • SEO',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1400&q=80',
    link: '#'
  }
];

const FeaturedProjects = () => {
  return (
    <section className="featured-section" id="featured">
      <div className="featured-container">
        
        {/* Header Section */}
        <motion.div 
          className="featured-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="featured-title">FEATURED PROJECTS</h2>
          <p className="featured-desc">
            These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design and impactful storytelling.
          </p>
        </motion.div>

        {/* Project Cards */}
        {projects.map((project, index) => {
          const CardContent = (
            <div className="featured-image-wrapper">
              <img 
                src={project.image} 
                alt={project.title} 
                className="featured-image"
              />
              <div className="featured-overlay">
                <span className="featured-tag">{project.category}</span>
                <h3 className="featured-project-title">{project.title}</h3>
                <p className="featured-project-desc">{project.subtitle}</p>
              </div>
            </div>
          );

          return (
            <motion.a 
              href={project.link || '#'}
              key={index}
              className="featured-card"
              target={project.link ? "_blank" : "_self"}
              rel={project.link ? "noopener noreferrer" : ""}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {CardContent}
            </motion.a>
          );
        })}

      </div>
    </section>
  );
};

export default FeaturedProjects;
