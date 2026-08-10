# MagnusMadsen.github.io

Personlig CV- og projektportfolio for Magnus Madsen.

Siden er bygget med ren HTML, CSS og JavaScript og udgives direkte med GitHub Pages. Der er ingen npm-pakker, framework eller build-proces.

## Hvor retter jeg hvad?

| Det du vil ændre | Filen du skal åbne |
|---|---|
| Profil-links, lokation, status eller navigation | `config/site.config.js` |
| Forsidens tekst og profilområde | `sections/hero/hero.js` |
| Tilføje eller rette projekter | `sections/projects/projects.data.js` |
| Projektsektionens overskrift og samling | `sections/projects/projects.js` |
| Udseendet på et projektkort | `components/project-card/project-card.css` |
| Uddannelse, job eller certifikater | `sections/experience/experience.data.js` |
| Kompetencer og teknologier | `sections/skills/skills.data.js` |
| Kontaktteksten | `sections/contact/contact.js` |
| Farver, bredder og fælles knapper | `styles/base.css` |
| Scroll-, tilt- og netværksanimationer | `js/modules/` |

## Struktur

```text
.
├── index.html                     # Metadata og tomme mount-punkter
├── 404.html
├── favicon.svg
├── site.webmanifest
│
├── config/
│   └── site.config.js             # Fælles profil, links og navigation
│
├── assets/
│   ├── images/                    # Lokale billeder kan tilføjes her
│   └── fonts/                     # Lokale webfonts kan tilføjes her
│
├── components/
│   ├── navigation/
│   │   ├── navigation.js          # Renderer og styrer navigationen
│   │   └── navigation.css
│   ├── project-card/
│   │   ├── project-card.js        # Genbrugelig projektskabelon
│   │   └── project-card.css
│   └── footer/
│       ├── footer.js
│       └── footer.css
│
├── sections/
│   ├── hero/
│   │   ├── hero.js
│   │   └── hero.css
│   ├── projects/
│   │   ├── projects.js
│   │   ├── projects.css
│   │   └── projects.data.js
│   ├── experience/
│   │   ├── experience.js
│   │   ├── experience.css
│   │   └── experience.data.js
│   ├── skills/
│   │   ├── skills.js
│   │   ├── skills.css
│   │   └── skills.data.js
│   └── contact/
│       ├── contact.js
│       └── contact.css
│
├── js/
│   ├── main.js                    # Samler og starter hele siden
│   └── modules/
│       ├── reveal.js
│       ├── tilt.js
│       └── network-canvas.js
│
└── styles/
    ├── base.css                   # Fælles design tokens og layout
    └── print.css
```

## Tilføj et projekt

Åbn `sections/projects/projects.data.js` og tilføj et objekt i `projects`:

```js
{
  id: "mit-projekt",
  visual: "default",
  shortLabel: "MIT PROJEKT",
  category: "CYBERSIKKERHED",
  status: "AKTIV",
  title: "Projektets navn",
  description: "En kort forklaring på problemet og løsningen.",
  tags: ["Python", "Docker", "Linux"],
  href: "https://github.com/MagnusMadsen/mit-projekt",
},
```

Eksisterende CSS-visualer kan vælges med `visual: "jarvis"`, `"dashboard"`, `"sensor"` eller `"homelab"`. Brug `"default"` til et neutralt kort. Et almindeligt billede kan senere bruges via projektets valgfri `image`-felt.

## Sådan hænger siden sammen

1. `index.html` indlæser stylesheets og `js/main.js`.
2. `js/main.js` kalder render-funktionen for hver sektion.
3. En sektions `.data.js` indeholder det gentagne indhold.
4. Sektionens `.js` samler indholdet.
5. CSS ligger ved den komponent eller sektion, den påvirker.

Det betyder, at en fejl i projektsektionen normalt kan findes i dens egen mappe uden at lede i resten af siden.

## Lokal visning

ES-moduler skal åbnes gennem en lokal webserver. Kør fra repositoryets rod:

```bash
python -m http.server 8000
```

Åbn derefter `http://localhost:8000`. Stop serveren med `Ctrl+C`.

## Deployment

GitHub Pages udgiver indholdet direkte fra `main`. Ændringer bliver live efter push og den efterfølgende Pages-deployment.
