import React, { useEffect, useRef } from 'react';
import './About.css';
import gsap from 'gsap';

const About = () => {

  const textRef = useRef(null);

  useEffect(() => {
    const lines = textRef.current.querySelectorAll('.line');

    // GSAP Animation for each line
    gsap.fromTo(
      lines,
      { opacity: 0, y: 10, x: 0, rotateY: 100}, // Starting state
      {
        opacity: 1,
        y: 0,
        x: 0,
        rotateY: 0,
        duration: 1.5,
        stagger: 0.9, // Delay between each line
        ease: 'power1',
      }
    );

  }, []);


  return(
  <div id="about" className="about" ref={textRef}>
    {/* <h2>About Me</h2> */}
    <p className='line'>
    I am a skilled developer with expertise in React, C#, SQL, TypeScript, CSS, Express, and MongoDB. I have spent the past two years contributing to the health tech industry, building impactful solutions that improve lives. Before transitioning into tech, I honed my interpersonal skills over five years working at a carwash, where I developed a strong ability to connect with people and understand their needs—a foundation that complements my technical expertise.
    </p>
  </div>
)};


export default About;
