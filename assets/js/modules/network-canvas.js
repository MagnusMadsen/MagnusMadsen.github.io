export function initNetworkCanvas(reducedMotion) {
  const canvas = document.getElementById("networkCanvas");
  const hero = document.querySelector(".hero");
  const saveData = navigator.connection?.saveData;

  if (!canvas || !hero || saveData) return;

  const context = canvas.getContext("2d");
  if (!context) return;

  let width = 0;
  let height = 0;
  let animationFrame = 0;
  let resizeFrame = 0;
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
      accent: index % 9 === 0,
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
    resizeFrame = 0;
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

      const pointerDistance = Math.hypot(
        node.x - pointer.x,
        node.y - pointer.y,
      );
      if (pointerDistance < 150) {
        context.beginPath();
        context.moveTo(node.x, node.y);
        context.lineTo(pointer.x, pointer.y);
        context.strokeStyle = `rgba(255,107,44,${(1 - pointerDistance / 150) * 0.16})`;
        context.lineWidth = 0.7;
        context.stroke();
      }

      for (
        let otherIndex = index + 1;
        otherIndex < nodes.length;
        otherIndex += 1
      ) {
        const other = nodes[otherIndex];
        const distance = Math.hypot(node.x - other.x, node.y - other.y);
        if (distance > 125) continue;

        context.beginPath();
        context.moveTo(node.x, node.y);
        context.lineTo(other.x, other.y);
        context.strokeStyle = `rgba(154,162,173,${(1 - distance / 125) * 0.095})`;
        context.lineWidth = 0.6;
        context.stroke();
      }

      context.beginPath();
      context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      context.fillStyle = node.accent
        ? "rgba(255,107,44,.72)"
        : "rgba(184,193,204,.4)";
      context.fill();
    });

    animationFrame = 0;
    if (!reducedMotion.matches && !document.hidden) {
      animationFrame = window.requestAnimationFrame(draw);
    }
  };

  const restartAnimation = () => {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    draw();
  };

  resize();
  restartAnimation();

  window.addEventListener(
    "resize",
    () => {
      if (resizeFrame) return;
      resizeFrame = window.requestAnimationFrame(() => {
        resize();
        restartAnimation();
      });
    },
    { passive: true },
  );

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
  });

  hero.addEventListener("pointerleave", () => {
    pointer = { x: -1000, y: -1000 };
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      return;
    }

    restartAnimation();
  });

  reducedMotion.addEventListener?.("change", restartAnimation);
}
