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
  rover: `
    <div class="project-visual rover-visual" aria-hidden="true">
      <div class="rover-range rover-range-one"></div>
      <div class="rover-range rover-range-two"></div>
      <div class="rover-machine">
        <i class="rover-wheel rover-wheel-front-left"></i>
        <i class="rover-wheel rover-wheel-front-right"></i>
        <i class="rover-wheel rover-wheel-rear-left"></i>
        <i class="rover-wheel rover-wheel-rear-right"></i>
        <div class="rover-body">
          <small>ROVER 01</small>
          <strong>ESP32</strong>
          <span><i></i>AUTO</span>
        </div>
        <div class="rover-sensors"><i></i><i></i><i></i></div>
      </div>
      <div class="rover-telemetry">
        <span>VL53L0X × 3</span><span>ESP-NOW</span><span>4WD</span>
      </div>
    </div>`,
};

function renderFeaturedPreviewContent(preview) {
  if (preview.image) {
    return `
      <img
        src="${preview.image}"
        alt="${preview.imageAlt}"
        width="${preview.width}"
        height="${preview.height}"
        loading="lazy"
        decoding="async"
      />`;
  }

  if (preview.visual === "exploit") {
    return `
      <div class="featured-preview-content exploit-featured-visual" aria-hidden="true">
        <div class="attack-flow">
          <div class="attack-node">
            <small>MASTER</small><strong>10.0.0.10</strong>
          </div>
          <div class="attack-connection"><span></span><em>ARP / MITM</em></div>
          <div class="attack-node attack-node-active">
            <small>INTERCEPT</small><strong>MODBUS MITM</strong>
          </div>
          <div class="attack-connection"><span></span><em>TCP / 502</em></div>
          <div class="attack-node">
            <small>SLAVE</small><strong>PLC-01</strong>
          </div>
        </div>
        <div class="exploit-terminal">
          <code><b>exploit&gt;</b> discovery active</code>
          <code><span>[+]</span> 10.0.0.21 / unit 1 / holding registers</code>
          <code><b>exploit&gt;</b> capture_start</code>
          <code><span>[+]</span> intercept ready / authorized lab</code>
        </div>
      </div>`;
  }

  return `
    <div class="featured-preview-content featured-default-visual" aria-hidden="true">
      <span>PROJEKTVISUAL MANGLER</span>
    </div>`;
}

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
  const overlay = (preview.overlay ?? [])
    .map((item) => `<span>${item}</span>`)
    .join("");

  return `
    <article class="featured-project project-${project.id} reveal">
      <div class="featured-preview">
        <div class="preview-toolbar">
          <span><i></i><i></i><i></i></span>
          <code>${preview.path}</code>
          <small>${preview.status}</small>
        </div>
        ${renderFeaturedPreviewContent(preview)}
        <div class="preview-overlay" aria-hidden="true">
          ${overlay}
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
