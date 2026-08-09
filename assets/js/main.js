(() => {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const navLinks = [...document.querySelectorAll('.desktop-nav a, .mobile-nav a')];
  const sections = [...document.querySelectorAll('main section[id]')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const setMenu = (open) => {
    if (!toggle || !mobileNav) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Luk menu' : 'Åbn menu');
    mobileNav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
  };

  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  navLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));
  window.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });

  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    document.querySelectorAll('.reveal').forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
      revealObserver.observe(element);
    });

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-42% 0px -48% 0px', threshold: 0 });
    sections.forEach((section) => sectionObserver.observe(section));
  } else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
  }

  document.querySelectorAll('[data-year]').forEach((element) => { element.textContent = String(new Date().getFullYear()); });

  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (supportsHover && !reducedMotion.matches) {
    document.querySelectorAll('[data-tilt]').forEach((element) => {
      element.addEventListener('pointermove', (event) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        element.style.setProperty('--tilt-x', `${x * 2.8}deg`);
        element.style.setProperty('--tilt-y', `${y * -2.8}deg`);
      });
      element.addEventListener('pointerleave', () => {
        element.style.setProperty('--tilt-x', '0deg');
        element.style.setProperty('--tilt-y', '0deg');
      });
    });
  }

  const canvas = document.getElementById('networkCanvas');
  const hero = document.querySelector('.hero');
  if (!canvas || !hero) return;
  const context = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let frame = 0;
  let nodes = [];
  let pointer = { x: -1000, y: -1000 };

  const createNodes = () => {
    const count = Math.max(16, Math.min(44, Math.floor(width / 34)));
    nodes = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      radius: index % 9 === 0 ? 2.1 : 1.15,
      accent: index % 9 === 0
    }));
  };

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    width = hero.clientWidth;
    height = hero.clientHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    createNodes();
  };

  const draw = () => {
    context.clearRect(0, 0, width, height);
    nodes.forEach((node, index) => {
      if (!reducedMotion.matches) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      const pointerDistance = Math.hypot(node.x - pointer.x, node.y - pointer.y);
      if (pointerDistance < 150) {
        context.beginPath(); context.moveTo(node.x, node.y); context.lineTo(pointer.x, pointer.y);
        context.strokeStyle = `rgba(255,107,44,${(1 - pointerDistance / 150) * 0.16})`;
        context.lineWidth = 0.7; context.stroke();
      }

      for (let otherIndex = index + 1; otherIndex < nodes.length; otherIndex += 1) {
        const other = nodes[otherIndex];
        const distance = Math.hypot(node.x - other.x, node.y - other.y);
        if (distance > 125) continue;
        context.beginPath(); context.moveTo(node.x, node.y); context.lineTo(other.x, other.y);
        context.strokeStyle = `rgba(154,162,173,${(1 - distance / 125) * 0.095})`;
        context.lineWidth = 0.6; context.stroke();
      }

      context.beginPath(); context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      context.fillStyle = node.accent ? 'rgba(255,107,44,.72)' : 'rgba(184,193,204,.4)'; context.fill();
    });
    if (!reducedMotion.matches && !document.hidden) frame = requestAnimationFrame(draw);
  };

  resize(); draw();
  window.addEventListener('resize', resize, { passive: true });
  hero.addEventListener('pointermove', (event) => { pointer = { x: event.clientX, y: event.clientY }; });
  hero.addEventListener('pointerleave', () => { pointer = { x: -1000, y: -1000 }; });
  document.addEventListener('visibilitychange', () => {
    cancelAnimationFrame(frame);
    if (!document.hidden && !reducedMotion.matches) draw();
  });
})();
