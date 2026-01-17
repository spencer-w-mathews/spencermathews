import "./Projects.css";
import techsagna from "../images/techsagna.png";
import simplybulk from "../images/simplybulk.png";
import bluebird from "../images/Bluebird.png";
import rainbow from "../images/rainbow.png";
import chandb from "../images/coloradohikeandbrew.png"
import drakefamilycookbook from "../images/drakefamilycookbook.png"

const projects = [
  {
    title: "Bluebird AGI",
    description:
      "AI-powered communications platform that classifies, drafts, and routes messages to reduce operator load. Built multi-tenant architecture, OAuth integrations, AI pipelines, and secure cloud infrastructure. Marketing site built with sanity CMS for ease of flexibility and use for non-technical partners.",
    link: "https://www.bluebirdagi.com",
    image: bluebird,
    tags: ["React", "OpenAI", "Node", "Azure", "Sanity"],
  },
  {
    title: "Colorado Hike & Brew",
    description:
      "A responsive, modern web application built with React and Vite, focused on clean UI, component-driven architecture, and performance. I built this project to share my love of great hikes and better beers.",
    link: "https://harmonious-boba-de2baf.netlify.app/",
    image: chandb,
    tags: ["React", "Vite", "Netlify"],
  },
  {
    title: "Drake Family Cookbook",
    description:
      "A family cookbook made from my families recipes. Made for my grandmother who has always shared her love through her cooking.",
    link: "https://drakefamilycookbook.com",
    image: drakefamilycookbook,
    tags: ["React", "Vite", "Netlify", "Sanity"],
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
