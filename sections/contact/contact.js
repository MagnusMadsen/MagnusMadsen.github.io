import { siteConfig } from "../../config/site.config.js";

const contactLinks = [
  {
    label: "LINKEDIN",
    title: "Magnus Bøg Madsen",
    description: "Se min profil og tag kontakt",
    href: siteConfig.links.linkedin,
  },
  {
    label: "GITHUB",
    title: "MagnusMadsen",
    description: "Se projekter og kode",
    href: siteConfig.links.github,
  },
];

function renderContactCard({ label, title, description, href }) {
  return `
    <a
      class="contact-card"
      href="${href}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="contact-label">${label}</span>
      <strong>${title}</strong>
      <small>${description}</small>
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M4 10h11M11 6l4 4-4 4" />
      </svg>
    </a>`;
}

export function renderContact() {
  return `
    <section class="contact-section" id="kontakt" aria-labelledby="contact-title">
      <div class="contact-grid-bg" aria-hidden="true"></div>
      <div class="shell contact-inner">
        <p class="section-index reveal">04 / KONTAKT</p>
        <h2 id="contact-title" class="reveal">
          Kunne jeg være<br /><span>den rette for jer?</span>
        </h2>
        <p class="contact-lead reveal">
          Hvis min profil og mine projekter matcher det, I leder efter, kan I
          finde mig på LinkedIn. På GitHub kan I samtidig se mere af det, jeg
          bygger og arbejder med.
        </p>
        <div class="contact-cards reveal">
          ${contactLinks.map(renderContactCard).join("")}
        </div>
      </div>
    </section>`;
}
