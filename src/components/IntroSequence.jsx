/**
 * FREELANCERZ — Clean Brand Opening
 * White screen. Logo. Tagline. Dissolves into Hero.
 */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './IntroSequence.css';

export default function IntroSequence({ onComplete }) {
  const overlay = useRef(null);
  const wordRef = useRef(null);
  const tagRef = useRef(null);
  const ruleT = useRef(null);
  const ruleB = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = 'auto';
        if (onComplete) onComplete();
      },
    });

    // Rules grow from centre outward
    tl.to([ruleT.current, ruleB.current], {
      width: '52vw',
      opacity: 1,
      duration: 0.7,
      ease: 'power3.out',
    }, 0.2);

    // Logo rises in
    tl.fromTo(wordRef.current,
      { opacity: 0, y: '3vh' },
      { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out' },
      0.25
    );

    // Tagline fades below
    tl.fromTo(tagRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      0.85
    );

    // Hold for 0.7s then dissolve into Hero
    tl.to([ruleT.current, ruleB.current, tagRef.current],
      { opacity: 0, duration: 0.35, ease: 'power2.inOut' }, 1.8);
    tl.to(wordRef.current,
      { y: '-4vh', opacity: 0, duration: 0.55, ease: 'power3.inOut' }, 1.85);
    tl.to(overlay.current,
      { opacity: 0, duration: 0.5, ease: 'power2.inOut' }, 2.1);

    return () => {
      tl.kill();
      document.body.style.overflow = 'auto';
    };
  }, [onComplete]);

  return (
    <div className="intro-overlay" ref={overlay}>
      <div id="f-brand-reveal" className="intro-frame" style={{ opacity: 1 }}>
        <div className="intro-line intro-line--h f-rule-t" ref={ruleT} />
        <h2 className="intro-brand-word" ref={wordRef}>
          FREELANCER<span className="intro-brand-dot">.</span>
        </h2>
        <p className="intro-brand-tag" ref={tagRef}>
          We Build Digital Experiences.
        </p>
        <div className="intro-line intro-line--h f-rule-b" ref={ruleB} />
      </div>
    </div>
  );
}
