import React from 'react';
import './WhyChooseUs.css';
import { Sparkles, Clock, Zap, Briefcase, DollarSign, Shield } from 'lucide-react';

const reasons = [
  { icon: <Sparkles size={40} strokeWidth={1.5} />, title: 'Modern Design', description: 'Award-winning aesthetics that captivate your audience.' },
  { icon: <Clock size={40} strokeWidth={1.5} />, title: 'Fast Delivery', description: 'We respect your time and always deliver on schedule.' },
  { icon: <Zap size={40} strokeWidth={1.5} />, title: 'SEO Optimized', description: 'Built from the ground up to rank on Google.' },
  { icon: <Briefcase size={40} strokeWidth={1.5} />, title: 'Business Focused', description: 'Strategies designed to increase your bottom line.' },
  { icon: <DollarSign size={40} strokeWidth={1.5} />, title: 'Affordable', description: 'Premium quality without the exorbitant agency fees.' },
  { icon: <Shield size={40} strokeWidth={1.5} />, title: 'Long-Term Support', description: 'We are your digital partners for the long haul.' },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="why-us-section section-padding">
      <div className="container">
        <div className="section-header center">
          <h2 className="text-display section-title">Why Choose Us</h2>
          <p className="text-script highlight-blue center-script">The Freelancerz advantage.</p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card hover-target">
              <div className="reason-icon">{reason.icon}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
