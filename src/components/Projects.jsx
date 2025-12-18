import "./Projects.css";
import techsagna from "../images/techsagna.png";
import simplybulk from "../images/simplybulk.png";
import bluebird from "../images/Bluebird.png";
import rainbow from "../images/rainbow.png";

const projects = [
  {
    title: "Bluebird AGI",
    description:
      "Bluebird is a SaaS application designed to reduce cognitive load in email-heavy workflows through AI-driven classification, tone analysis, and automation. I serve as the Founding Software Developer, responsible for system architecture, full-stack development, OAuth integrations, cloud infrastructure, and AI workflows. The application is currently in beta, with ongoing work centered on performance, security, and multi-tenant scalability.",
    link: "https://spencer-w-mathews.github.io/peak-efficiency/",
    image: bluebird,
  },
  {
    title: "Rainbow Trout Reverie",
    description:
      "A React app for a local Photographer. Contact form built using Email.js. The images for this site are stored in github pages in order to prevent slowness.",
    link: "https://rainbowtroutreverie.com/",
    image: rainbow,
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
