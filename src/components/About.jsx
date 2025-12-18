import React from "react";
import "./About.css";
import workspaceImage from "../images/about.png";

const About = ({ isDarkMode }) => {
  return (
    <div className="about-container">
      <div className={`about-content ${isDarkMode ? "dark" : "light"}`}>
        <h1 className="about-heading">Engineering with design sensibilities</h1>
        <p className="about-description">
          I build reliable, human-centered products end-to-end. My work blends
          React, TypeScript, and modern design systems on the front end with
          scalable Node, C#, and SQL backends. Recent efforts span AI-assisted
          productivity tools, secure healthcare workflows, and multi-tenant
          platforms tuned for performance and accessibility.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <h3>How I work</h3>
            <p>
              I partner closely with designers and product leaders, prototyping
              quickly, instrumenting outcomes, and iterating on the details that
              make experiences feel intentional.
            </p>
          </div>
          <div className="about-card stats">
            <div className="stat">
              <span className="stat-number">4+</span>
              <span className="stat-label">Products launched</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Reliability mindset</span>
            </div>
          </div>
        </div>
        <div className="tag-row">
          {[
            "React",
            "React Native",
            "Vite",
            "TypeScript",
            "C#",
            "Node & Express",
            "SQL",
            "MySQL",
            "Design Systems",
            "Accessibility",
            "Cloud & DevOps",
          ].map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="about-image">
        <img src={workspaceImage} alt="Futuristic workspace" />
      </div>
    </div>
  );
};

export default About;
