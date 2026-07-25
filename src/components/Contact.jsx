import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ text: '', type: '' });
    
    const name = document.getElementById('name').value || 'A visitor';
    const email = document.getElementById('email').value || 'No email provided';
    const serviceElement = document.getElementById('service');
    // For select elements, getting the text is often better than the raw value, 
    // but the value is fine too. If they haven't selected anything, it will be empty.
    let service = serviceElement.options[serviceElement.selectedIndex]?.text;
    if (service === 'Select...' || !serviceElement.value) {
      service = 'Not specified';
    }
    const message = document.getElementById('message').value || 'No message provided';

    try {
      const response = await fetch('https://n8n-production-be3e1.up.railway.app/webhook/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, service, message })
      });

      if (response.ok) {
        setSubmitMessage({ text: 'Thank you! Your enquiry has been sent successfully.', type: 'success' });
        e.target.reset(); // Reset the form
      } else {
        setSubmitMessage({ text: 'Something went wrong. Please try again.', type: 'error' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage({ text: 'Network error. Please check your connection and try again.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-container">
        
        {/* Left Column: Image with icon */}
        <motion.div 
          className="contact-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" 
            alt="Let's work together" 
            className="contact-image" 
          />
          <div className="contact-icon-badge">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
              <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
              <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
              <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
            </svg>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="contact-heading">LET'S WORK TOGETHER</h2>
          <p className="contact-subtext">
            Let's build something impactful together—whether it's your brand, your website, or your next big idea.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Smith" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="johnsmith@gmail.com" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Needed ?</label>
              <div className="select-wrapper">
                <select id="service" defaultValue="">
                  <option value="" disabled hidden>Select...</option>
                  <option value="website-design">Website Design</option>
                  <option value="branding">Branding</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="web-app">Web App Development</option>
                </select>
                <div className="select-arrow">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">What Can I Help You...</label>
              <textarea id="message" placeholder="Hello, I'd like to enquire about..." rows="5"></textarea>
            </div>

            <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
            
            {submitMessage.text && (
              <p style={{ 
                marginTop: '15px', 
                color: submitMessage.type === 'success' ? '#10B981' : '#EF4444', 
                fontSize: '0.95rem' 
              }}>
                {submitMessage.text}
              </p>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
