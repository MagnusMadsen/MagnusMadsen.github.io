export function initNavigation() {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const navLinks = [
    ...document.querySelectorAll(".desktop-nav a, .mobile-nav a"),
  ];
  const sections = [...document.querySelectorAll("main section[id]")];

  const setMenu = (open) => {
    if (!toggle || !mobileNav) return;

    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Luk menu" : "Åbn menu");
    mobileNav.setAttribute("aria-hidden", String(!open));
    mobileNav.classList.toggle("is-open", open);
    mobileNav.inert = !open;
    document.body.classList.toggle("nav-open", open);
  };

  setMenu(false);

  toggle?.addEventListener("click", () => {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth > 820) setMenu(false);
    },
    { passive: true },
  );

  let headerUpdateQueued = false;
  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
    headerUpdateQueued = false;
  };

  const queueHeaderUpdate = () => {
    if (headerUpdateQueued) return;
    headerUpdateQueued = true;
    window.requestAnimationFrame(updateHeader);
  };

  updateHeader();
  window.addEventListener("scroll", queueHeaderUpdate, { passive: true });

  if (!("IntersectionObserver" in window)) return;

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", isActive);

          if (isActive) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-42% 0px -48% 0px", threshold: 0 },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}
