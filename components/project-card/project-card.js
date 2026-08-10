import { renderGalleryTrigger } from "../project-gallery/project-gallery.js";

function renderTags(tags) {
  return `<div class="tag-row">${tags.map((tag) => `<span>${tag}</span>`).join("")}</div>`;
}

function renderArrowIcon() {
  return `
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>`;
}

function renderMediaIcon() {
  return `
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <rect x="3" y="4" width="14" height="12" rx="1" />
      <path d="m6 13 3-3 2.2 2 1.8-1.5 2 2" />
      <circle cx="12.8" cy="7.8" r="1.1" />
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
  optilogic: `
    <div class="project-visual optilogic-visual" aria-hidden="true">
      <div class="optilogic-flow">
        <span>EDGE</span><i></i><span>MQTT</span><i></i><span>QUESTDB</span><i></i><span>API</span>
      </div>
      <div class="optilogic-services">
        <span><i></i>INGESTOR</span>
        <span><i></i>FLASK</span>
        <span><i></i>GRAFANA</span>
      </div>
      <div class="optilogic-copy"><small>SPARKPLUG B</small><strong>EDGE → DATA → DRIFT</strong></div>
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

function renderProjectLink(link) {
  return `
    <a class="text-link project-resource-link" href="${link.href}" target="_blank" rel="noopener noreferrer">
      <span>${link.label}${link.meta ? `<small>${link.meta}</small>` : ""}</span>
      ${renderArrowIcon()}
    </a>`;
}

function getProjectLinks(project) {
  if (project.links?.length) {
    return project.links;
  }

  if (project.href) {
    return [
      {
        label: project.linkLabel ?? "Se projektet",
        href: project.href,
      },
    ];
  }

  return [];
}

function renderProjectActions(project, className = "") {
  const actions = [
    renderGalleryTrigger(project),
    ...getProjectLinks(project).map(renderProjectLink),
  ].filter(Boolean);

  if (!actions.length) {
    return "";
  }

  return `<div class="project-actions ${className}">${actions.join("")}</div>`;
}

function renderExploitFeaturedVisual(project) {
  const { media } = project.preview;

  return `
    <div class="featured-preview-content exploit-featured-visual">
      <div class="exploit-blueprint" aria-hidden="true">
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
      </div>
      <button
        class="exploit-demo-card"
        type="button"
        data-project-gallery-open="${project.id}"
        aria-label="Åbn videodemonstration og labmateriale for ${project.title.replace(/<br\s*\/?>/gi, " ")}"
      >
        <video
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
          poster="${media.src}"
          aria-hidden="true"
          tabindex="-1"
        >
          <source src="${media.videoSrc}" type="video/mp4" />
        </video>
        <span class="exploit-demo-shade" aria-hidden="true"></span>
        <span class="exploit-demo-badge"><i></i>${media.badge}</span>
        <strong>SE VÆRKTØJET I DRIFT</strong>
        <small>Klik for hele demoen + fysisk lab</small>
      </button>
    </div>`;
}

function renderFeaturedPreviewContent(project) {
  const { preview } = project;

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
    return renderExploitFeaturedVisual(project);
  }

  return `
    <div class="featured-preview-content featured-default-visual" aria-hidden="true">
      <span>PROJEKTVISUAL MANGLER</span>
    </div>`;
}

function renderMediaVisual(project, media, visual) {
  const isHybrid = media.mode === "hybrid" && visual;
  const position = media.position ? ` style="object-position: ${media.position}"` : "";
  const dimensions =
    media.width && media.height
      ? ` width="${media.width}" height="${media.height}"`
      : "";
  const galleryButton = project.gallery
    ? `
      <button
        class="project-visual-gallery-button"
        type="button"
        data-project-gallery-open="${project.id}"
        aria-label="${project.gallery.buttonLabel}"
      >
        ${renderMediaIcon()}<span>Åbn galleri</span>
      </button>`
    : "";

  return `
    <div class="project-visual project-media-visual ${isHybrid ? "project-hybrid-visual" : ""}">
      <img
        class="project-media-image"
        src="${media.src}"
        alt="${media.alt}"
        ${dimensions}
        loading="lazy"
        decoding="async"
        ${position}
      />
      <span class="project-media-shade" aria-hidden="true"></span>
      ${isHybrid ? `<div class="project-visual-inset">${visual}</div>` : ""}
      ${media.badge ? `<span class="project-media-badge"><i></i>${media.badge}</span>` : ""}
      ${galleryButton}
    </div>`;
}

function renderProjectVisual(project) {
  const visual = projectVisuals[project.visual];
  const media =
    project.media ??
    (project.image
      ? {
          src: project.image.src,
          alt: project.image.alt,
        }
      : null);

  if (media) {
    return renderMediaVisual(project, media, visual);
  }

  return (
    visual ?? `
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
        ${renderFeaturedPreviewContent(project)}
        <div class="preview-overlay" aria-hidden="true">${overlay}</div>
      </div>
      <div class="featured-copy">
        <div class="project-meta"><span>${project.category}</span><span>${project.year}</span></div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <ul class="project-highlights">${highlights}</ul>
        ${renderTags(project.tags)}
        ${renderProjectActions(project, "featured-actions")}
      </div>
    </article>`;
}

export function renderProjectCard(project) {
  return `
    <article class="project-card project-${project.id} reveal" data-tilt>
      ${renderProjectVisual(project)}
      <div class="project-card-copy">
        <div class="project-meta"><span>${project.category}</span><span>${project.status}</span></div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        ${renderTags(project.tags)}
        ${renderProjectActions(project, "project-card-actions")}
      </div>
    </article>`;
}

export function initProjectCardMedia() {
  const previewVideo = document.querySelector(".exploit-demo-card video");

  if (!previewVideo) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const saveData = navigator.connection?.saveData;

  if (reducedMotion.matches || saveData) {
    previewVideo.autoplay = false;
    previewVideo.pause();
    return;
  }

  if (!("IntersectionObserver" in window)) {
    previewVideo.play().catch(() => {});
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        previewVideo.play().catch(() => {});
      } else {
        previewVideo.pause();
      }
    },
    { threshold: 0.35 },
  );

  observer.observe(previewVideo);
}
