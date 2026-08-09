export function initTiltEffects(reducedMotion) {
  const supportsHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;
  if (!supportsHover || reducedMotion.matches) return;

  document.querySelectorAll("[data-tilt]").forEach((element) => {
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const updateTilt = () => {
      const rect = element.getBoundingClientRect();
      const x = (pointerX - rect.left) / rect.width - 0.5;
      const y = (pointerY - rect.top) / rect.height - 0.5;

      element.style.setProperty("--tilt-x", `${x * 2.8}deg`);
      element.style.setProperty("--tilt-y", `${y * -2.8}deg`);
      frame = 0;
    };

    element.addEventListener("pointermove", (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (!frame) frame = window.requestAnimationFrame(updateTilt);
    });

    element.addEventListener("pointerleave", () => {
      window.cancelAnimationFrame(frame);
      frame = 0;
      element.style.setProperty("--tilt-x", "0deg");
      element.style.setProperty("--tilt-y", "0deg");
    });
  });
}
