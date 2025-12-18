import "./Projects.css";
import techsagna from "../images/techsagna.png";
import simplybulk from "../images/simplybulk.png";
import bluebird from "../images/Bluebird.png";
import rainbow from "../images/rainbow.png";

const projects = [
  {
    title: "Bluebird AGI",
    description:
      "AI-powered communications platform that classifies, drafts, and routes messages to reduce operator load. Built multi-tenant architecture, OAuth integrations, AI pipelines, and secure cloud infrastructure.",
    link: "https://spencer-w-mathews.github.io/peak-efficiency/",
    image: bluebird,
    tags: ["React", "OpenAI", "Node", "Azure"],
  },
  {
    title: "Rainbow Trout Reverie",
    description:
      "Minimalist photography experience with tailored content delivery and EmailJS-powered booking flow optimized for mobile conversions.",
    link: "https://rainbowtroutreverie.com/",
    image: rainbow,
    tags: ["React", "EmailJS", "Responsive UX"],
  },
  {
    title: "Techsagna",
    description:
      "Brand-forward presence for a local IT team with modular page blocks, CMS-ready structure, and crisp performance budgets.",
    link: "https://spencer-w-mathews.github.io/techsagna/#/",
    image: techsagna,
    tags: ["React", "Design Systems", "Animations"],
  },
  {
    title: "Simply Bulk",
    description:
      "Retail experience highlighting merchandising, local sourcing, and clear calls-to-action for shoppers.",
    link: "https://spencer-w-mathews.github.io/simplybulkmarket/#/",
    image: simplybulk,
    tags: ["React", "UX Writing", "Static Site"],
  },
];

const Projects = ({ isDarkMode }) => (
  <section id="projects" className="projects">
    <div className="projects-header">
      <div>
        <p className="eyebrow">Selected work</p>
        <h2>Impactful products with clarity and craft</h2>
        <p className="projects-lead">
          A sampling of products that balance usability, reliability, and visual
          polish. Each engagement pairs thoughtful UX with strong engineering
          fundamentals.
        </p>
      </div>
      <div className={`project-pill ${isDarkMode ? "dark" : "light"}`}>
        <span className="pill-dot" />
        Shipping fast without sacrificing detail.
      </div>
    </div>
    <div className="project-grid">
      {projects.map((project) => (
        <article
          key={project.title}
          className={`project-card ${isDarkMode ? "dark" : "light"}`}
        >
          {project.image && (
            <div className="project-visual">
              <img src={project.image} alt={project.title} />
            </div>
          )}
          <div className="project-body">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags?.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          {project.link && (
            <a
              className="project-link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View live
            </a>
          )}
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
