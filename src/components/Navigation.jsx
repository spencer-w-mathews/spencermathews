import React, { useState, useEffect, useRef } from "react";
import "./Navigation.css";

const Navigation = ({
  content,
  onTabChange,
  isDarkMode,
  toggleDarkMode,
  activeTab,
  isOpen,
}) => {
  const handleTabClick = (tab) => {
    onTabChange(tab);
  };
  const contentDivRef = useRef(null);

  useEffect(() => {
    if (contentDivRef.current) {
      contentDivRef.current.scrollTo({
        top: 0,
        behavior: "smooth", // Optional for smooth scrolling
      });
    }
  }, [content]);

  return (
    <div className={`navigation-container`}>
      {/* Navigation Bar */}
      <button className="toggle-dark-mode-mobile" onClick={toggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className={`navbar ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        {["about", "projects", "contact"].map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""} ${
              isDarkMode ? "dark-mode" : "light-mode"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
        <button className="toggle-dark-mode" onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Tab Content */}
      <div
        className={`tab-content ${isDarkMode ? "dark-mode" : "light-mode"} ${
          isOpen ? "open" : ""
        }`}
        style={{ width: "80%" }}
        ref={contentDivRef}
      >
        <div className="x-mark">
          <button onClick={() => onTabChange(null)}>close</button>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Navigation;
