import React, { useEffect, useRef } from 'react';

import './Hero.css';
import Skills from './Skills';
import gsap from 'gsap';

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const lines = textRef.current.querySelectorAll('.line');

    // GSAP Animation for each line
    gsap.fromTo(
      lines,
      { opacity: 0, y: -90, x: 0 }, // Starting state
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1.5,
        stagger: 0.9, // Delay between each line
        ease: 'power1',
      }
    );

    const lines2 = textRef.current.querySelectorAll('.line2');

    // GSAP Animation for each line
    gsap.fromTo(
      lines2,
      { opacity: 0, y: 90, x: 0 }, // Starting state
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 3,
        stagger: 0.9, // Delay between each line
        ease: 'power1',
      }
    );
  }, []);

  return(
  <div className='home-page'>
    <div className="hero" ref={textRef}>
      <div className="hero-content">
        <h2 className="line">Hello, I'm Spencer.</h2>
        <p className="line2">Full-Stack Software Engineer</p>
      </div>
      
    </div>
  </div>
)};

export default Hero;
