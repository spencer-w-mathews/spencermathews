import React, { useState } from 'react';
import './App.css';
import Navigation from '../src/components/Navigation'; // Import your Navigation component
import About from '../src/components/About'; // Assuming AboutPage is one of the components
 import Projects from '../src/components/Projects'; // Assuming ProjectsPage is another component
 import Contact from '../src/components/Contact'; // Assuming ContactPage is another component

const App = () => {
  const [activeTab, setActiveTab] = useState(null); // Track the active tab
  const [isDarkMode, setIsDarkMode] = useState(true); // Track dark mode toggle

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Define which component to show based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className='background'></div>
      {/* Navigation */}
      <Navigation 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        content={renderContent()}
      />

      {/* Content Area */}
      {/* <div className="content-container">
        {renderContent()}
      </div> */}
    </div>
  );
};

export default App;
