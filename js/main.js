import {
  initNavigation,
  renderNavigation,
} from "../components/navigation/navigation.js";
import { renderFooter } from "../components/footer/footer.js";
import { renderHero } from "../sections/hero/hero.js";
import {
  initProjects,
  renderProjects,
} from "../sections/projects/projects.js";
import { renderExperience } from "../sections/experience/experience.js";
import { renderSkills } from "../sections/skills/skills.js";
import { renderContact } from "../sections/contact/contact.js";
import { initNetworkCanvas } from "./modules/network-canvas.js";
import { initRevealAnimations } from "./modules/reveal.js";
import { initTiltEffects } from "./modules/tilt.js";

function renderPortfolio() {
  const navigationRoot = document.querySelector("[data-navigation-root]");
  const sectionsRoot = document.querySelector("[data-sections-root]");
  const footerRoot = document.querySelector("[data-footer-root]");

  if (!navigationRoot || !sectionsRoot || !footerRoot) {
    throw new Error("Portfolioens mount-punkter mangler i index.html.");
  }

  navigationRoot.innerHTML = renderNavigation();
  sectionsRoot.innerHTML = [
    renderHero(),
    renderProjects(),
    renderExperience(),
    renderSkills(),
    renderContact(),
  ].join("");
  footerRoot.innerHTML = renderFooter();
}

function initInteractions() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  initNavigation();
  initProjects();
  initRevealAnimations(reducedMotion);
  initTiltEffects(reducedMotion);
  initNetworkCanvas(reducedMotion);
}

try {
  renderPortfolio();
  initInteractions();
  document.documentElement.classList.add("app-ready");
} catch (error) {
  document.documentElement.classList.remove("js");
  const sectionsRoot = document.querySelector("[data-sections-root]");

  if (sectionsRoot) {
    sectionsRoot.innerHTML = `
      <section class="render-error">
        <h1>Siden kunne ikke indlæses</h1>
        <p>Prøv at genindlæse siden, eller se projekterne direkte på GitHub.</p>
        <a class="button button-primary" href="https://github.com/MagnusMadsen">Åbn GitHub</a>
      </section>`;
  }

  console.error(error);
}
