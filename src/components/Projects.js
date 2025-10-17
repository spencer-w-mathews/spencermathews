import React from "react";
import "./Projects.css";
import techsagna from "../images/techsagna.png";
import simplybulk from "../images/simplybulk.png";
import peak from "../images/Peak.png";

const projects = [
  {
    title: "Peak Efficiency",
    description:
      "A React app for a local IT company. Waitlist form connected to google sheets allowing workflows to trigger as soon as client inputs email.",
    link: "https://spencer-w-mathews.github.io/peak-efficiency/",
    image: peak,
  },
  {
    title: "Rainbow Trout Reverie",
    description:
      "A React app for a local Photographer. Contact form built using Email.js. The images for this site are stored in github pages in order to prevent slowness.",
    link: "https://rainbowtroutreverie.com/",
    image: techsagna,
  },
  {
    title: "Techsagna",
    description: "A React app for a local IT company",
    link: "https://spencer-w-mathews.github.io/techsagna/#/",
    image: techsagna,
  },
  {
    title: "Simply Bulk",
    description: "A React app for a local retail store",
    link: "https://spencer-w-mathews.github.io/simplybulkmarket/#/",
    image: simplybulk,
  },
  {
    title: "Portfolio Website",
    description: "This personal portfolio built with React.",
  },
];

const Projects = ({ isDarkMode }) => (
  <section id="projects" className="projects">
    <div className="project-list">
      {projects.map((project) => (
        <div
          key={project.title}
          className={`project-card ${isDarkMode ? "dark" : "light"}`}
        >
          <h3 style={{ marginBottom: 15 }}>{project.title}</h3>
          {project.image && (
            <img
              src={project.image}
              alt="techsagna website"
              width={220}
              style={{ marginBottom: 15 }}
            />
          )}
          <p>{project.description}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
