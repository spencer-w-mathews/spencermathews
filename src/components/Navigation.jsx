import { useEffect, useRef } from "react";
import { FiBriefcase, FiMail, FiMoon, FiSun, FiUser } from "react-icons/fi";
import "./Navigation.css";

const tabs = [
  { id: "about", label: "About", icon: <FiUser /> },
  { id: "projects", label: "Projects", icon: <FiBriefcase /> },
  { id: "contact", label: "Contact", icon: <FiMail /> },
];

const Navigation = ({
  content,
  onTabChange,
  isDarkMode,
  toggleDarkMode,
  activeTab,
  isOpen,
}) => {
  const contentDivRef = useRef(null);

  useEffect(() => {
    if (contentDivRef.current) {
      contentDivRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [content]);

  return (
    <div className="navigation-container">
      <nav className={`navbar ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <div className="brand">
          <span className="brand-mark">SM</span>
          <div className="brand-copy">
            <span className="brand-name">Spencer Mathews</span>
            <span className="brand-role">Product-minded engineer</span>
          </div>
        </div>
        <div className="tab-group">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
        <button className="toggle-dark-mode" onClick={toggleDarkMode}>
          {isDarkMode ? <FiSun /> : <FiMoon />}
          <span>{isDarkMode ? "Light" : "Dark"} mode</span>
        </button>
      </nav>

      <div
        className={`tab-content ${isDarkMode ? "dark-mode" : "light-mode"} ${
          isOpen ? "open" : ""
        }`}
        ref={contentDivRef}
      >
        <div className="tab-content-header">
          <div className="tab-label">
            {tabs.find((tab) => tab.id === activeTab)?.icon}
            <span>{tabs.find((tab) => tab.id === activeTab)?.label}</span>
          </div>
          <button className="close-button" onClick={() => onTabChange("about")}>
            Close
          </button>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Navigation;
