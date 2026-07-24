import React from 'react';
import './Process.css';

const steps = [
  { num: '01', title: 'Discovery', desc: 'Understanding your goals, target audience, and business requirements.' },
  { num: '02', title: 'Research', desc: 'Analyzing competitors and market trends to position you perfectly.' },
  { num: '03', title: 'Strategy', desc: 'Mapping out the complete user journey and digital blueprint.' },
  { num: '04', title: 'Design', desc: 'Crafting pixel-perfect, luxury interfaces aligned with your brand.' },
  { num: '05', title: 'Development', desc: 'Building robust, scalable solutions using cutting-edge tech.' },
  { num: '06', title: 'Launch', desc: 'Deploying the final product with comprehensive testing.' },
  { num: '07', title: 'Marketing', desc: 'Executing high-ROI campaigns to drive instant traffic.' },
  { num: '08', title: 'Growth', desc: 'Continuous optimization, analytics tracking, and scaling.' },
];

const Process = () => {
  return (
    <section id="process" className="process-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="text-display section-title">Our Process</h2>
          <p className="text-script highlight-blue">From concept to reality.</p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step hover-target">
              <div className="step-number text-display">{step.num}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
