import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = ({ content, onTabChange, isDarkMode, toggleDarkMode }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Smoothly close the content div before reopening when the tab changes
    setIsOpen(false);
    const timer = setTimeout(() => {
      activeTab && setIsOpen(true);
      onTabChange(activeTab); // Open the content after closing
    }, 600); // Match the transition duration for the closing effect
    return () => clearTimeout(timer);
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    
  };

  // const toggleDarkMode = () => {
  //   toggleDarkMode(!isDarkMode);
  // };

  return (
    <div className={`navigation-container`}>
      {/* Navigation Bar */}
      <div className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        {['about', 'projects', 'contact'].map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''} ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
        <button className="toggle-dark-mode" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Tab Content */}
      <div
        className={`tab-content ${isDarkMode ? 'dark-mode' : 'light-mode'} ${isOpen ? 'open' : ''}`}
        style={{ width: '80%' }}
      >
        {content}
      </div>
    </div>
  );
};

export default Navigation;
