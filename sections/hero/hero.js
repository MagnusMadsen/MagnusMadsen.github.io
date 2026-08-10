import { siteConfig } from "../../config/site.config.js";

/**
 * Heroens tekst og profiloplysninger redigeres direkte i denne funktion.
 */
export function renderHero() {
  return `
    <section class="hero" id="top" aria-labelledby="hero-title">
      <div class="hero-glow hero-glow-one" aria-hidden="true"></div>
      <div class="hero-glow hero-glow-two" aria-hidden="true"></div>
      <div class="shell hero-grid">
        <div class="hero-copy">
          <p class="eyebrow reveal">
            MAGNUS MADSEN <span>/</span> IT &amp; CYBERSIKKERHED
          </p>
          <h1 id="hero-title" class="reveal">
            Magnus Madsen CV 
            <span>IT, netværk, drift og sikkerhed.</span>
          </h1>
          <p class="hero-lead reveal">
            IT-teknolog og IT-sikkerhedsstuderende med hands-on erfaring i
            Linux, netværk og OT. Min vej ind i IT/OT kombinerer teknisk
            uddannelser med to+ år som selvstændig i AV-teknik.
          </p>
          <div class="hero-actions reveal">
            <a class="button button-primary" href="#projekter">
              Mine projekter
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 10h11M11 6l4 4-4 4" />
              </svg>
            </a>
            <a class="button button-ghost" href="#erfaring">
              Erfaring &amp; uddannelse
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10 4v11M6 11l4 4 4-4" />
              </svg>
            </a>
            <a
              class="button button-ghost"
              href="${siteConfig.links.github}"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M7 5h8v8M15 5 6 14" />
              </svg>
            </a>
          </div>
          <dl class="hero-facts reveal">
            <div>
              <dt>BASE</dt>
              <dd>${siteConfig.location}</dd>
            </div>
            <div>
              <dt>FOKUS</dt>
              <dd>IT/OT sikkerhed</dd>
            </div>
            <div>
              <dt>BAGGRUND</dt>
              <dd>Innovation samt tekniske uddanelser &amp; 5+ år selvstændig virksomhed</dd>
            </div>
            <div>
              <dt>STATUS</dt>
              <dd><span class="status-dot"></span> IT-sikkerheds &amp; studerende</dd>
            </div>
          </dl>
        </div>
        <div class="hero-visual reveal" data-tilt>
          <div class="portrait-frame">
            <div class="portrait-corners" aria-hidden="true"></div>
            <img
              src="${siteConfig.profileImage}"
              width="900"
              height="1200"
              alt="Profilbillede af ${siteConfig.name}"
              fetchpriority="high"
              decoding="async"
            />
            <div class="portrait-scan" aria-hidden="true"></div>
            <div class="portrait-topline">
              <span>NODE: MM-01</span>
              <span class="online"><i></i> ONLINE</span>
            </div>
            <div class="portrait-caption">
              <span>IT-TEKNOLOG</span>
              <strong>Teknisk nysgerrighed.<br />Praktisk gennemførelse.</strong>
            </div>
          </div>
          <div class="floating-card card-uptime" aria-hidden="true">
            <span>UPTIME MINDSET</span>
            <strong>Observe → Understand → Improve</strong>
          </div>
          <div class="floating-card card-signal" aria-hidden="true">
            <span class="signal-bars"><i></i><i></i><i></i><i></i></span>
            <small>PACKETS / SIGNAL / STATE</small>
          </div>
        </div>
      </div>
      <a class="scroll-cue" href="#projekter" aria-label="Fortsæt til projekter">
        <span>SCROLL</span><i></i>
      </a>
    </section>`;
}
