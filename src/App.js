import React, { useEffect, useState } from "react";
import "./App.css";
import Navigation from "../src/components/Navigation"; // Import your Navigation component
import About from "../src/components/About"; // Assuming AboutPage is one of the components
import Projects from "../src/components/Projects"; // Assuming ProjectsPage is another component
import Contact from "../src/components/Contact"; // Assuming ContactPage is another component

const App = () => {
  const [activeTab, setActiveTab] = useState(null); // Track the active tab
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [content, setContent] = useState(<></>); // Track dark mode toggle
  const [isOpen, setIsOpen] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    // Smoothly close the content div before reopening when the tab changes
    setIsOpen(false);
    const timer = setTimeout(() => {
      activeTab && setIsOpen(true);
      renderContent(); // Open the content after closing
    }, 500); // Match the transition duration for the closing effect
    return () => clearTimeout(timer);
  }, [activeTab]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Define which component to show based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return setContent(<About />);
      case "projects":
        return setContent(<Projects />);
      case "contact":
        return setContent(<Contact />);
      default:
        return null;
    }
  };

  return (
    <div className={`app-container ${isDarkMode ? "dark" : "light"}`}>
      <div className="background"></div>
      {/* Navigation */}
      <Navigation
        activeTab={activeTab}
        onTabChange={handleTabChange}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        content={content}
        isOpen={isOpen}
      />

      {/* Content Area */}
      {/* <div className="content-container">
        {renderContent()}
      </div> */}
    </div>
  );
};

export default App;
