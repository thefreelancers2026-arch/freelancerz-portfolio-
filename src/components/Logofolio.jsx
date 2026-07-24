import React from 'react';
import { motion } from 'framer-motion';
import './Logofolio.css';

const brands = [
  {
    name: 'CornFey',
    tagline: 'Corn · Coffee · CornFey',
    description:
      'CornFey brings the essence of its name — Corn love, brew soul and crisp coffee vision — into an elegant brand identity. The logo fuses the comforting warmth of coffee beans and capturing the emotional weight of sipping coffee from a premium mug.',
    colors: ['#6B3A2A', '#C8864C', '#E8C99A', '#FDF5E4'],
    images: [
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600&auto=format&fit=crop',
    ],
  },
  {
    name: 'DesiPavji',
    tagline: 'Desi Pavji',
    description:
      'The DesiPavji logo is crafted in honour of the beloved flavours of homemade fast food and street identity. The name combines "Desi" (desi/home-based) and "Pav" to take you and your order. Medallion Swirls with a Punjabi accent make it truly symbolic of the unique flavours DesiPavji brings you other — Maharashtrian pav dishes often hold a deep vibrant story.',
    colors: ['#FF6B35', '#FFB347', '#FFF0D0', '#2D2D2D'],
    images: [
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=600&auto=format&fit=crop',
    ],
  },
  {
    name: 'Suzi Cosmetics',
    tagline: 'Suzi Cosmetics',
    description:
      'Suzi Cosmetics celebrates vibrant beauty, bold first lines, uniqueness and fullness. The clean logo system uses a minimalist typographic base paired with a colour system that reflects the brand\'s premium yet accessible identity — expressed through clean refined lines and lustrous product packaging.',
    colors: ['#C77DFF', '#E0AAFF', '#F8EDFF', '#1A1A2E'],
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop',
    ],
  },
];

const Logofolio = () => {
  return (
    <section id="brandings" className="logofolio section-padding container">

      {/* Heading */}
      <div className="logofolio-title-container">
        
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-script logofolio-bg"
        >
          Client Showcase
        </motion.h2>

        <div className="logofolio-title-content">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-display logofolio-fg"
          >
            CLIENT SHOWCASE<span className="text-gold">.</span>
          </motion.h2>
          
          <div className="logofolio-sub-elements">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="logofolio-divider"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="logofolio-subtitle"
            >
              A COLLECTION OF BRANDS WE'VE HELPED GROW
            </motion.p>
          </div>
        </div>
      </div>

      {/* Brand Showcases */}
      <div className="brands-list">
        {brands.map((brand, i) => (
          <motion.div
            key={brand.name}
            className="brand-showcase"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            {/* Color swatches column */}
            <div className="brand-swatches">
              {brand.colors.map((color, ci) => (
                <div
                  key={ci}
                  className="brand-swatch"
                  style={{ background: color }}
                />
              ))}
            </div>

            {/* Main content */}
            <div className="brand-main">
              {/* Image bento grid */}
              <div className={`brand-grid brand-grid-${brand.images.length}`}>
                {brand.images.map((src, ii) => (
                  <div key={ii} className="brand-img-cell">
                    <img src={src} alt={`${brand.name} mockup ${ii + 1}`} />
                  </div>
                ))}
              </div>

              {/* Info */}
              <div className="brand-info">
                <h3 className="brand-tagline">{brand.tagline}</h3>
                <p className="brand-desc">{brand.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Logofolio;
