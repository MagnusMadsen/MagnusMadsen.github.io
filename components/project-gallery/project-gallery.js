function escapeHtml(value) {
  return String(value).replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character],
  );
}

function renderMediaIcon() {
  return `
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <rect x="3" y="4" width="14" height="12" rx="1" />
      <path d="m6 13 3-3 2.2 2 1.8-1.5 2 2" />
      <circle cx="12.8" cy="7.8" r="1.1" />
    </svg>`;
}

function renderCloseIcon() {
  return `
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m5 5 10 10M15 5 5 15" />
    </svg>`;
}

function renderNavigationIcon(direction) {
  const path = direction === "previous" ? "m12 5-5 5 5 5" : "m8 5 5 5-5 5";

  return `
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="${path}" />
    </svg>`;
}

export function renderGalleryTrigger(project, className = "") {
  if (!project.gallery?.items?.length) {
    return "";
  }

  return `
    <button
      class="text-link gallery-trigger ${className}"
      type="button"
      data-project-gallery-open="${escapeHtml(project.id)}"
    >
      <span>${escapeHtml(project.gallery.buttonLabel ?? "Se projektmateriale")}</span>
      ${renderMediaIcon()}
    </button>`;
}

export function renderProjectGallery() {
  return `
    <dialog class="project-gallery" data-project-gallery aria-labelledby="project-gallery-title">
      <div class="project-gallery-shell">
        <header class="project-gallery-header">
          <div>
            <p class="project-gallery-eyebrow" data-gallery-eyebrow></p>
            <h3 id="project-gallery-title" data-gallery-title></h3>
            <p class="project-gallery-description" data-gallery-description></p>
          </div>
          <button class="project-gallery-close" type="button" data-gallery-close aria-label="Luk projektgalleri">
            ${renderCloseIcon()}
          </button>
        </header>

        <div class="project-gallery-stage" data-gallery-stage aria-live="polite"></div>

        <footer class="project-gallery-footer">
          <div class="project-gallery-items" data-gallery-items aria-label="Vælg projektmateriale"></div>
          <div class="project-gallery-controls">
            <span data-gallery-counter aria-live="polite"></span>
            <button type="button" data-gallery-previous aria-label="Forrige medie">
              ${renderNavigationIcon("previous")}
            </button>
            <button type="button" data-gallery-next aria-label="Næste medie">
              ${renderNavigationIcon("next")}
            </button>
          </div>
        </footer>
      </div>
    </dialog>`;
}

function renderGalleryItem(item) {
  const label = escapeHtml(item.label ?? item.type);
  const title = escapeHtml(item.title ?? "Projektmateriale");
  const caption = escapeHtml(item.caption ?? "");
  const dimensions =
    item.width && item.height
      ? ` width="${Number(item.width)}" height="${Number(item.height)}"`
      : "";

  const media =
    item.type === "video"
      ? `
        <video
          controls
          playsinline
          preload="metadata"
          poster="${escapeHtml(item.poster ?? "")}"
          aria-label="${title}"
        >
          <source src="${escapeHtml(item.src)}" type="video/mp4" />
          Din browser understøtter ikke videoafspilning.
        </video>`
      : `
        <img
          src="${escapeHtml(item.src)}"
          alt="${escapeHtml(item.alt ?? item.title ?? "Projektmateriale")}"
          ${dimensions}
          decoding="async"
        />`;

  return `
    <figure class="project-gallery-media project-gallery-media-${escapeHtml(item.type)}">
      <div class="project-gallery-frame">${media}</div>
      <figcaption>
        <span>${label}</span>
        <h4>${title}</h4>
        <p>${caption}</p>
      </figcaption>
    </figure>`;
}

export function initProjectGallery(projects) {
  const dialog = document.querySelector("[data-project-gallery]");

  if (!dialog) {
    return;
  }

  const projectMap = new Map(
    projects
      .filter((project) => project.gallery?.items?.length)
      .map((project) => [project.id, project]),
  );
  const stage = dialog.querySelector("[data-gallery-stage]");
  const itemNavigation = dialog.querySelector("[data-gallery-items]");
  const counter = dialog.querySelector("[data-gallery-counter]");
  const eyebrow = dialog.querySelector("[data-gallery-eyebrow]");
  const title = dialog.querySelector("[data-gallery-title]");
  const description = dialog.querySelector("[data-gallery-description]");
  const previousButton = dialog.querySelector("[data-gallery-previous]");
  const nextButton = dialog.querySelector("[data-gallery-next]");
  let activeProject = null;
  let activeIndex = 0;
  let opener = null;

  function pauseCurrentVideo() {
    const video = stage.querySelector("video");

    if (typeof video?.pause === "function") {
      video.pause();
    }
  }

  function renderActiveItem() {
    const items = activeProject?.gallery.items ?? [];

    if (!items.length) {
      return;
    }

    activeIndex = (activeIndex + items.length) % items.length;
    pauseCurrentVideo();
    stage.innerHTML = renderGalleryItem(items[activeIndex]);
    counter.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
    previousButton.disabled = items.length < 2;
    nextButton.disabled = items.length < 2;

    itemNavigation
      .querySelectorAll("[data-gallery-item]")
      .forEach((button, index) => {
        const isActive = index === activeIndex;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
  }

  function renderItemNavigation(items) {
    itemNavigation.innerHTML = items
      .map(
        (item, index) => `
          <button
            type="button"
            data-gallery-item="${index}"
            aria-pressed="${index === 0}"
          >
            <span>${String(index + 1).padStart(2, "0")}</span>
            ${escapeHtml(item.label ?? item.type)}
          </button>`,
      )
      .join("");
  }

  function openGallery(projectId, trigger) {
    const project = projectMap.get(projectId);

    if (!project) {
      return;
    }

    activeProject = project;
    activeIndex = 0;
    opener = trigger;
    eyebrow.textContent = project.gallery.eyebrow ?? project.category;
    title.textContent = project.gallery.title ?? project.title.replace(/<br\s*\/?>/gi, " ");
    description.textContent = project.gallery.description ?? project.description;
    renderItemNavigation(project.gallery.items);
    renderActiveItem();
    document.body.classList.add("gallery-open");

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  }

  function cleanupGallery() {
    pauseCurrentVideo();
    document.body.classList.remove("gallery-open");
    stage.innerHTML = "";
    opener?.focus();
    opener = null;
  }

  function closeGallery() {
    pauseCurrentVideo();

    if (typeof dialog.close === "function" && dialog.open) {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
      cleanupGallery();
    }
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-project-gallery-open]");

    if (trigger) {
      openGallery(trigger.dataset.projectGalleryOpen, trigger);
    }
  });

  dialog.addEventListener("click", (event) => {
    const itemButton = event.target.closest("[data-gallery-item]");

    if (itemButton) {
      activeIndex = Number(itemButton.dataset.galleryItem);
      renderActiveItem();
      return;
    }

    if (event.target.closest("[data-gallery-close]")) {
      closeGallery();
      return;
    }

    if (event.target.closest("[data-gallery-previous]")) {
      activeIndex -= 1;
      renderActiveItem();
      return;
    }

    if (event.target.closest("[data-gallery-next]")) {
      activeIndex += 1;
      renderActiveItem();
      return;
    }

    if (event.target === dialog) {
      closeGallery();
    }
  });

  dialog.addEventListener("keydown", (event) => {
    if (event.target.closest("video")) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      activeIndex -= 1;
      renderActiveItem();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      activeIndex += 1;
      renderActiveItem();
    }
  });

  dialog.addEventListener("close", () => {
    cleanupGallery();
  });
}
