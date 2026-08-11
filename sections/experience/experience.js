import {
  certifications,
  education,
  employment,
  experienceSection,
  mediaShowcase,
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

function renderMediaImage(image) {
  return `
    <figure class="media-still">
      <img
        src="${image.src}"
        width="693"
        height="520"
        alt="${image.alt}"
        loading="lazy"
        decoding="async"
      />
      <figcaption>${image.label}</figcaption>
    </figure>`;
}

function renderMediaShowcase() {
  const { video } = mediaShowcase;

  return `
    <div class="media-experience reveal" aria-labelledby="media-experience-title">
      <div class="media-experience-heading">
        <div class="timeline-label"><span>${mediaShowcase.label}</span> ${mediaShowcase.eyebrow}</div>
        <div>
          <p class="media-experience-period">${mediaShowcase.period}</p>
          <h3 id="media-experience-title">${mediaShowcase.title}</h3>
        </div>
      </div>
      <div class="media-experience-grid">
        <button
          class="media-showreel"
          type="button"
          data-media-video-open
          aria-label="Afspil ${video.title} med lyd"
        >
          <img
            class="media-showreel-poster"
            src="${video.poster}"
            width="1280"
            height="720"
            alt="${video.posterAlt}"
            loading="lazy"
            decoding="async"
          />
          <span
            class="media-showreel-preview"
            data-media-video-preview
            data-vimeo-id="${video.vimeoId}"
            aria-hidden="true"
          ></span>
          <span class="media-showreel-shade" aria-hidden="true"></span>
          <span class="media-showreel-caption">
            <span>
              <small>${video.label}</small>
              <strong>${video.title}</strong>
            </span>
            <span class="media-showreel-play" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="m9 7 8 5-8 5V7Z" />
              </svg>
            </span>
          </span>
          <span class="media-showreel-sound">KLIK FOR LYD</span>
        </button>
        <div class="media-experience-story">
          <p>${mediaShowcase.introduction}</p>
          <ul class="media-capabilities" aria-label="AV- og mediekompetencer">
            ${mediaShowcase.capabilities.map((capability) => `<li>${capability}</li>`).join("")}
          </ul>
        </div>
      </div>
      <div class="media-stills" aria-label="Billeder fra gaming-livestreamproduktion">
        ${mediaShowcase.images.map(renderMediaImage).join("")}
      </div>
      <dialog
        class="media-video-dialog"
        data-media-video-dialog
        aria-labelledby="media-video-dialog-title"
      >
        <div class="media-video-dialog-panel">
          <div class="media-video-dialog-header">
            <div>
              <span>MBMEDIER / SHOWREEL</span>
              <h3 id="media-video-dialog-title">${video.title}</h3>
            </div>
            <button type="button" data-media-video-close aria-label="Luk videoen">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
          <div class="media-video-player" data-media-video-player></div>
        </div>
      </dialog>
    </div>`;
}

export function initExperienceMedia() {
  const openButton = document.querySelector("[data-media-video-open]");
  const closeButton = document.querySelector("[data-media-video-close]");
  const preview = document.querySelector("[data-media-video-preview]");
  const dialog = document.querySelector("[data-media-video-dialog]");
  const player = document.querySelector("[data-media-video-player]");

  if (!openButton || !closeButton || !preview || !dialog || !player) {
    return;
  }

  const vimeoId = preview.dataset.vimeoId;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const saveData = navigator.connection?.saveData === true;

  if (!reducedMotion.matches && !saveData) {
    const loadPreview = () => {
      if (preview.childElementCount > 0) {
        return;
      }

      preview.innerHTML = `
        <iframe
          src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&amp;muted=1&amp;loop=1&amp;autopause=0&amp;background=1&amp;dnt=1"
          title="Lydløs forhåndsvisning af ${mediaShowcase.video.title}"
          tabindex="-1"
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>`;
    };

    if ("IntersectionObserver" in window) {
      const previewObserver = new IntersectionObserver(
        (entries, observer) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            loadPreview();
            observer.disconnect();
          }
        },
        { rootMargin: "240px 0px", threshold: 0.01 },
      );

      previewObserver.observe(openButton);
    } else {
      loadPreview();
    }
  }

  const closeDialog = () => {
    if (dialog.open) {
      dialog.close();
    }

    player.replaceChildren();
    document.body.classList.remove("media-dialog-open");
  };

  openButton.addEventListener("click", () => {
    player.innerHTML = `
      <iframe
        src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&amp;muted=0&amp;dnt=1&amp;color=f49a53"
        title="${mediaShowcase.video.title}"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>`;
    dialog.showModal();
    document.body.classList.add("media-dialog-open");
  });

  closeButton.addEventListener("click", closeDialog);
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeDialog();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeDialog();
    }
  });
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
        ${renderMediaShowcase()}
        <div class="certifications reveal" aria-labelledby="certifications-title">
          <div class="certifications-heading">
            <div class="timeline-label"><span>04</span> CERTIFICERINGER</div>
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
