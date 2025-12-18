import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleTabChange = async (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    setIsOpen(false);
    const timer = setTimeout(() => {
      activeTab && setIsOpen(true);
    }, 350);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderedContent = useMemo(() => {
    switch (activeTab) {
      case "about":
        return <About isDarkMode={isDarkMode} />;
      case "projects":
        return <Projects isDarkMode={isDarkMode} />;
      case "contact":
        return <Contact isDarkMode={isDarkMode} />;
      default:
        return null;
    }
  }, [activeTab, isDarkMode]);

  return (
    <div className={`app-container ${isDarkMode ? "dark" : "light"}`}>
      <div className="ambient-bg" />
      <div className="glow blur-one" />
      <div className="glow blur-two" />
      <main className="app-shell">
        <header className="hero">
          <span className="eyebrow">Software Engineer</span>
          <h1>
            Spencer Mathews
            <span className="hero-accent">
              builds resilient digital products.
            </span>
          </h1>
          <p className="hero-body">
            I design and ship thoughtful experiences across web, cloud, and AI.
            From polished UI systems to scalable backends, I thrive on crafting
            products that feel fast, intuitive, and purposeful.
          </p>
          <div className="hero-actions">
            <button
              className="primary-cta"
              onClick={() => handleTabChange("projects")}
            >
              View featured work
            </button>
            <button
              className="ghost-cta"
              onClick={() => handleTabChange("contact")}
            >
              Start a conversation
            </button>
          </div>
          <div className="hero-pills">
            <span className="pill">Product-minded full-stack engineer</span>
            <span className="pill">Design systems & accessibility</span>
            <span className="pill">Performance & platform reliability</span>
          </div>
        </header>
        <Navigation
          activeTab={activeTab}
          onTabChange={handleTabChange}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
          content={renderedContent}
          isOpen={isOpen}
        />
      </main>
    </div>
  );
};

export default App;
