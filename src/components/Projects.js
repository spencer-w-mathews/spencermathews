import React from 'react';
import './Projects.css';
import techsagna from '../techsagna.png'

const projects = [
  { title: 'Portfolio Website', description: 'This personal portfolio built with React.' },
  { title: 'Techsagna', description: 'A React app for a local IT company', link: 'https://spencer-w-mathews.github.io/techsagna/#/', image:  techsagna},
];

const Projects = () => (
  <section id="projects" className="projects">
    <div className="project-list">
      {projects.map(project => (
        <div key={project.title} className="project-card">
          <h3 style={{marginBottom: 15}}>{project.title}</h3>
          {project.image && 
            <img src={project.image} alt='techsagna website' width={220} style={{marginBottom: 15}}/>
          }
          <p>{project.description}</p>
          {project.link && 
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          }
        </div>
      ))}
    </div>
  </section>
);

export default Projects;