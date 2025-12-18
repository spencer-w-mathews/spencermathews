import React from "react";
import "./About.css";
import workspaceImage from "../images/about.png"; // Import the generated image

const About = ({ isDarkMode }) => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={workspaceImage} alt="Futuristic Workspace" />
      </div>
      <div className={`about-content ${isDarkMode ? "dark" : "light"}`}>
        <h1 className="about-heading">About Me</h1>
        <p className="about-description">
          I am a skilled developer with expertise in React, C#, SQL, TypeScript,
          CSS, Express, and MongoDB. I have spent the past two years
          contributing to the health tech industry, building impactful solutions
          that improve lives. Before transitioning into tech, I honed my
          interpersonal skills over five years working at a carwash, where I
          developed a strong ability to connect with people and understand their
          needs—a foundation that complements my technical expertise.
        </p>
      </div>
    </div>
  );
};

export default About;
