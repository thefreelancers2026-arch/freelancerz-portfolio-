import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import HeroServicesFlow from './components/HeroServicesFlow';
import FeaturedProjects from './components/FeaturedProjects';
import Contact from './components/Contact';
import './index.css';

function App() {

  useEffect(() => {
    // Only initialize smooth scroll if intro is complete (or if we want it initialized but locked)
    // Actually lenis can be initialized, we just lock overflow in IntroSequence.
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <HeroServicesFlow />
      <FeaturedProjects />
      <Contact />
    </div>
  );
}

export default App;
