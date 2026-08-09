import { initNavigation } from "./modules/navigation.js";
import { initNetworkCanvas } from "./modules/network-canvas.js";
import { initRevealAnimations } from "./modules/reveal.js";
import { initTiltEffects } from "./modules/tilt.js";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

initNavigation();
initRevealAnimations(reducedMotion);
initTiltEffects(reducedMotion);
initNetworkCanvas(reducedMotion);

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
