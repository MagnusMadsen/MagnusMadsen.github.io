import { skillGroups, skillsSection } from "./skills.data.js";

const icons = {
  infrastructure: `<div class="skill-icon infrastructure-icon" aria-hidden="true"><i></i><i></i><i></i></div>`,
  network: `<div class="skill-icon network-icon" aria-hidden="true"><i></i><i></i><i></i><i></i></div>`,
  security: `<div class="skill-icon security-icon" aria-hidden="true"><i></i></div>`,
  code: `<div class="skill-icon code-icon" aria-hidden="true">&lt;/&gt;</div>`,
};

function renderSkillGroup(group, index) {
  return `
    <article class="skill-group reveal">
      ${icons[group.icon] ?? icons.code}
      <div>
        <span class="skill-index">${String(index + 1).padStart(2, "0")}</span>
        <h3>${group.title}</h3>
      </div>
      <p>${group.description}</p>
      <div class="skills-list">
        ${group.skills.map((skill) => `<span>${skill}</span>`).join("")}
      </div>
    </article>`;
}

export function renderSkills() {
  return `
    <section class="section skills-section" id="kompetencer" aria-labelledby="skills-title">
      <div class="shell">
        <div class="section-heading compact reveal">
          <p class="section-index">${skillsSection.index}</p>
          <h2 id="skills-title">${skillsSection.title}</h2>
          <p>${skillsSection.introduction}</p>
        </div>
        <div class="skills-grid">
          ${skillGroups.map(renderSkillGroup).join("")}
        </div>
      </div>
    </section>`;
}
