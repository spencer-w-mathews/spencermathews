import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      // Function to handle resizing
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup: remove event listener on unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <nav className="navbar">
        {windowSize.width < 768 &&
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
}
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <div onClick={toggleMenu}className='close'></div>
          <li><a href="#" className="nav-link" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={toggleMenu}>About</a></li>
          <li><a href="#projects" className="nav-link" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
);
}

export default Header;
