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
    <a
      class="certificate-card"
      href="${certificate.href}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Åbn ${certificate.title}-certifikatet som PDF"
    >
      <div class="certificate-preview">
        <img
          src="${certificate.preview}"
          width="1084"
          height="767"
          alt="${certificate.alt}"
          loading="lazy"
          decoding="async"
        />
        <span class="certificate-verified"><i></i> VERIFICERET</span>
      </div>
      <div class="certificate-meta">
        <div>
          <span>${certificate.issuer} · ${certificate.source}</span>
          <strong>${certificate.title}</strong>
          <small>${certificate.date} · ${certificate.duration}</small>
          <code>${certificate.code}</code>
        </div>
        <span class="certificate-open">
          Åbn PDF
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M7 5h8v8M15 5 6 14" />
          </svg>
        </span>
      </div>
    </a>`;
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
          </div>
        </div>
        <div class="certifications reveal" aria-labelledby="certifications-title">
          <div class="certifications-heading">
            <div class="timeline-label"><span>03</span> CERTIFICERINGER</div>
            <div>
              <h3 id="certifications-title">TryHackMe Learning Paths</h3>
              <p>Dokumenteret træning fra fundamentet til en bred introduktion til cybersikkerhed.</p>
            </div>
          </div>
          <div class="certificate-grid">
            ${certifications.map(renderCertification).join("")}
          </div>
        </div>
      </div>
    </section>`;
}
