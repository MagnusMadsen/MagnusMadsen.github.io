import {
  certifications,
  education,
  employment,
  experienceSection,
} from "./experience.data.js";

function renderTimelineItem(item) {
  const badge = item.badge
    ? `<span class="current-badge"><i></i> ${item.badge}</span>`
    : "";
  const details = item.details ? `<small>${item.details}</small>` : "";

  return `
    <article class="timeline-item${item.current ? " current" : ""} reveal">
      <div class="timeline-date">${item.period}</div>
      <div>
        ${badge}
        <h3>${item.title}</h3>
        <p>${item.organization}</p>
        ${details}
      </div>
    </article>`;
}

function renderCertification(certificate) {
  return `
    <div class="cert-card">
      <div class="cert-icon">${certificate.issuer}</div>
      <div>
        <strong>${certificate.title}</strong>
        <span>${certificate.source}</span>
      </div>
      <i>✓</i>
    </div>`;
}

export function renderExperience() {
  return `
    <section class="section experience-section" id="erfaring" aria-labelledby="experience-title">
      <div class="shell">
        <div class="section-heading reveal">
          <p class="section-index">${experienceSection.index}</p>
          <h2 id="experience-title">${experienceSection.title}</h2>
          <p>${experienceSection.introduction}</p>
        </div>
        <div class="timeline-layout">
          <div class="timeline-column">
            <div class="timeline-label reveal"><span>01</span> UDDANNELSE</div>
            ${education.map(renderTimelineItem).join("")}
          </div>
          <div class="timeline-column">
            <div class="timeline-label reveal"><span>02</span> ERHVERV</div>
            ${employment.map(renderTimelineItem).join("")}
            <div class="certifications reveal">
              <div class="timeline-label"><span>03</span> CERTIFICERINGER</div>
              ${certifications.map(renderCertification).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>`;
}
