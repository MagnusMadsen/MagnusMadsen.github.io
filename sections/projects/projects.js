import {
  featuredProjects,
  projects,
  projectsSection,
} from "./projects.data.js";
import {
  initProjectCardMedia,
  renderFeaturedProject,
  renderProjectCard,
} from "../../components/project-card/project-card.js";
import {
  initProjectGallery,
  renderProjectGallery,
} from "../../components/project-gallery/project-gallery.js";

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
      </div>
      ${renderProjectGallery()}
    </section>`;
}

export function initProjects() {
  initProjectGallery([...featuredProjects, ...projects]);
  initProjectCardMedia();
}
