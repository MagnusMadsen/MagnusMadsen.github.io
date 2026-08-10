import {
  featuredProjects,
  projects,
  projectsSection,
} from "./projects.data.js";
import {
  renderFeaturedProject,
  renderProjectCard,
} from "../../components/project-card/project-card.js";
import { siteConfig } from "../../config/site.config.js";

export function renderProjects() {
  return `
    <section class="section projects-section" id="projekter" aria-labelledby="projects-title">
      <div class="shell">
        <div class="section-heading compact reveal">
          <p class="section-index">${projectsSection.index}</p>
          <h2 id="projects-title">${projectsSection.title}</h2>
          <p>${projectsSection.introduction}</p>
        </div>

        <div class="featured-projects">
          ${featuredProjects.map(renderFeaturedProject).join("")}
        </div>

        <div class="project-grid">
          ${projects.map(renderProjectCard).join("")}
        </div>

        <div class="projects-footer reveal">
          <p>Flere kodeprojekter, skolelabs og eksperimenter ligger på min GitHub.</p>
          <a
            class="button button-ghost"
            href="${siteConfig.links.repositories}"
            target="_blank"
            rel="noopener noreferrer"
          >Se alle repositories</a>
        </div>
      </div>
    </section>`;
}
