# MagnusMadsen.github.io

Personlig CV- og projektportfolio for Magnus Madsen.

Siden er bygget med ren HTML, CSS og JavaScript og udgives direkte med GitHub Pages. Der er ingen framework-, npm- eller build-afhængigheder.

## Struktur

```text
.
├── index.html
├── 404.html
├── favicon.svg
├── site.webmanifest
├── assets/
│   ├── css/
│   │   ├── base.css          # Design tokens, reset og fælles komponenter
│   │   ├── navigation.css    # Header og navigation
│   │   ├── hero.css          # Forsiden og profilbilledet
│   │   ├── projects.css      # Projektkort og projektgrafik
│   │   ├── resume.css        # Erfaring, uddannelse og kompetencer
│   │   ├── contact.css       # Kontaktsektion og footer
│   │   ├── responsive.css    # Breakpoints og reduced-motion
│   │   └── print.css         # Printlayout
│   └── js/
│       ├── main.js           # Starter sidens moduler
│       └── modules/
│           ├── navigation.js
│           ├── network-canvas.js
│           ├── reveal.js
│           └── tilt.js
├── robots.txt
└── sitemap.xml
```

HTML-indholdet bliver i `index.html`, så siden fortsat fungerer uden JavaScript og er let for søgemaskiner at læse. CSS og JavaScript er opdelt efter ansvar, så en ændring i eksempelvis navigationen ikke kræver arbejde i projekt- eller kontaktkoden.

## Lokal visning

Start en simpel webserver fra repositoryets rod:

```bash
python -m http.server 8000
```

Åbn derefter `http://localhost:8000`.

## Deployment

GitHub Pages udgiver indholdet fra `main`. Ændringer bliver live efter push og den efterfølgende Pages-deployment.
