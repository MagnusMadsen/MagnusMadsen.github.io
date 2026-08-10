function renderTags(tags) {
  return `<div class="tag-row">${tags.map((tag) => `<span>${tag}</span>`).join("")}</div>`;
}

function renderArrowIcon() {
  return `
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>`;
}

const projectVisuals = {
  jarvis: `
    <div class="project-visual jarvis-visual" aria-hidden="true">
      <div class="jarvis-core"><span>J</span><i></i></div>
      <div class="waveform">
        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <div class="flow-labels">
        <span>WAKE</span><span>STT</span><span>LLM</span><span>TTS</span>
      </div>
    </div>`,
  dashboard: `
    <div class="project-visual dashboard-visual" aria-hidden="true">
      <div class="mini-time"><strong>07:42</strong><span>ODENSE</span></div>
      <div class="mini-weather"><span>18°</span><i></i><small>LET SKYET</small></div>
      <div class="mini-calendar"><b>09</b><span>AUG</span><em>2 events</em></div>
      <div class="mini-status"><i></i> API CACHE: HIT</div>
    </div>`,
  sensor: `
    <div class="project-visual sensor-visual" aria-hidden="true">
      <div class="sensor-ring"><span>87<small>%</small></span></div>
      <div class="sensor-copy">
        <small>PUMPE 01</small><strong>OLIEKLARHED</strong><em><i></i> NORMAL</em>
      </div>
      <div class="sensor-chart"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
    </div>`,
  homelab: `
    <div class="project-visual homelab-visual" aria-hidden="true">
      <div class="rack-row"><span>01</span><b>UBUNTU-SRV</b><i></i><i></i><em>HEALTHY</em></div>
      <div class="rack-row"><span>02</span><b>DOCKER</b><i></i><i></i><em>12 SERVICES</em></div>
      <div class="rack-row"><span>03</span><b>STORAGE</b><i></i><i></i><em>RAID / SMB</em></div>
      <div class="rack-row"><span>04</span><b>NETWORK</b><i></i><i></i><em>VLAN / DNS</em></div>
    </div>`,
};

function renderProjectVisual(project) {
  if (project.image) {
    return `
      <div class="project-visual project-image-visual">
        <img src="${project.image.src}" alt="${project.image.alt}" loading="lazy" decoding="async" />
      </div>`;
  }

  return (
    projectVisuals[project.visual] ?? `
      <div class="project-visual project-default-visual" aria-hidden="true">
        <span>${project.shortLabel ?? "NYT PROJEKT"}</span>
      </div>`
  );
}

export function renderFeaturedProject(project) {
  const { preview } = project;
  const highlights = project.highlights
    .map(
      (highlight, index) => `
        <li><span>${String(index + 1).padStart(2, "0")}</span> ${highlight}</li>`,
    )
    .join("");

  return `
    <article class="featured-project reveal">
      <div class="featured-preview">
        <div class="preview-toolbar">
          <span><i></i><i></i><i></i></span>
          <code>${preview.path}</code>
          <small>${preview.status}</small>
        </div>
        <img
          src="${preview.image}"
          alt="${preview.imageAlt}"
          width="${preview.width}"
          height="${preview.height}"
          loading="lazy"
          decoding="async"
        />
        <div class="preview-overlay" aria-hidden="true">
          ${preview.overlay.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </div>
      <div class="featured-copy">
        <div class="project-meta"><span>${project.category}</span><span>${project.year}</span></div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <ul class="project-highlights">${highlights}</ul>
        ${renderTags(project.tags)}
        <a class="text-link" href="${project.href}" target="_blank" rel="noopener noreferrer">
          ${project.linkLabel}${renderArrowIcon()}
        </a>
      </div>
    </article>`;
}

export function renderProjectCard(project) {
  const projectLink = project.href
    ? `<a class="text-link project-card-link" href="${project.href}" target="_blank" rel="noopener noreferrer">Se projektet${renderArrowIcon()}</a>`
    : "";

  return `
    <article class="project-card project-${project.id} reveal" data-tilt>
      ${renderProjectVisual(project)}
      <div class="project-card-copy">
        <div class="project-meta"><span>${project.category}</span><span>${project.status}</span></div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        ${renderTags(project.tags)}
        ${projectLink}
      </div>
    </article>`;
}
