export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="shell">
        <a class="brand" href="#top" aria-label="Tilbage til toppen">
          <span class="brand-mark">MM</span>
          <span class="brand-divider">/</span>
          <span class="brand-label">PORTFOLIO</span>
        </a>
        <p>Designet og bygget med ren HTML, CSS &amp; JavaScript.</p>
        <p>© <span data-year>${new Date().getFullYear()}</span> Magnus Madsen</p>
      </div>
    </footer>`;
}
