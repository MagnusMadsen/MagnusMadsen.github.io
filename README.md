# MagnusMadsen.github.io

Personlig CV- og projektportfolio for Magnus Madsen.

Siden er bygget med ren HTML, CSS og JavaScript og udgives direkte med GitHub Pages. Der er ingen npm-pakker, framework eller build-proces.

## Hvor retter jeg hvad?

| Det du vil ændre | Filen du skal åbne |
|---|---|
| Profil-links, lokation, status eller navigation | `config/site.config.js` |
| Forsidens tekst og profilområde | `sections/hero/hero.js` |
| Profilbilledet | `assets/images/portrait/` og `config/site.config.js` |
| Tilføje eller rette projekter | `sections/projects/projects.data.js` |
| Projektsektionens overskrift og samling | `sections/projects/projects.js` |
| Udseendet på et projektkort | `components/project-card/project-card.css` |
| Projektgalleriet og dets navigation | `components/project-gallery/` |
| Webklare projektbilleder | `assets/images/projects/` |
| Projektvideoer og PDF-rapporter | `assets/videos/` og `assets/docs/` |
| Uddannelse, job eller certifikater | `sections/experience/experience.data.js` |
| AV/mediepræsentation og Vimeo-video | `sections/experience/experience.data.js` |
| Billeder fra MBMedier-produktioner | `assets/images/media/mbmedier/` |
| Certifikat-forhåndsvisninger | `assets/images/certificates/` |
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
│   ├── docs/                      # Weboptimerede projektrapporter
│   ├── images/
│   │   ├── certificates/          # WebP-forhåndsvisninger af certifikater
│   │   ├── media/                 # WebP-billeder fra AV- og medieproduktion
│   │   ├── portrait/              # Weboptimeret profilbillede
│   │   └── projects/              # WebP-billeder sorteret efter projekt
│   ├── videos/                    # Komprimeret preview og fulde projektvideoer
│   └── fonts/                     # Lokale webfonts kan tilføjes her
│
├── components/
│   ├── navigation/
│   │   ├── navigation.js          # Renderer og styrer navigationen
│   │   └── navigation.css
│   ├── project-card/
│   │   ├── project-card.js        # Genbrugelig projektskabelon
│   │   └── project-card.css
│   ├── project-gallery/
│   │   ├── project-gallery.js     # Tilgængeligt billed- og videogalleri
│   │   └── project-gallery.css
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

Eksisterende CSS-visualer kan vælges med `visual: "jarvis"`, `"dashboard"`, `"sensor"`, `"homelab"`, `"optilogic"` eller `"rover"`. Brug `"default"` til et neutralt kort.

Et projekt kan få et webklart foto eller screenshot med `media`. Brug `mode: "hybrid"`, hvis billedet skal kombineres med projektets CSS-visual:

```js
media: {
  mode: "hybrid",
  src: "assets/images/projects/mit-projekt/preview.webp",
  alt: "Kort og konkret beskrivelse af billedet",
  width: 1600,
  height: 1200,
  badge: "LIVE / HEALTHY",
},
```

Tilføj et galleri med `gallery.items`. Billeder og video oprettes først i dialogen, når en besøgende åbner galleriet, så de øvrige materialer ikke gør den første sidevisning langsommere:

```js
gallery: {
  buttonLabel: "Se projektmateriale",
  eyebrow: "TEKNISK DEMO",
  title: "Projektets gallerioverskrift",
  description: "Hvad materialet dokumenterer.",
  items: [
    {
      type: "image",
      label: "PROTOTYPE",
      title: "Fysisk opstilling",
      caption: "Hvad den besøgende skal lægge mærke til.",
      src: "assets/images/projects/mit-projekt/prototype.webp",
      alt: "Beskrivelse af prototypen",
      width: 1600,
      height: 1200,
    },
  ],
},
```

Rapporter og GitHub-links tilføjes med projektets `links`-liste. De store hovedprojekter øverst ligger i `featuredProjects` i samme fil.

## Billeder og privatliv

De billeder, som siden bruger, er konverteret til WebP uden EXIF-, kamera- eller GPS-metadata. Gem nye webaktiver under den relevante mappe i `assets/images/` og undgå at publicere originale HEIC-filer direkte.

Et hovedprojekt kan bruge et screenshot i `preview.image` eller et specialbygget CSS-visual i `preview.visual`.

## Sådan hænger siden sammen

1. `index.html` indlæser stylesheets og `js/main.js`.
2. `js/main.js` kalder render-funktionen for hver sektion.
3. En sektions `.data.js` indeholder det gentagne indhold.
4. Sektionens `.js` samler indholdet.
5. Den lille Modbus-previewvideo er komprimeret særskilt; den fulde video indlæses i galleriet.
6. Projektgalleriet indlæser kun det valgte fulde medie, når dialogen åbnes.
7. CSS ligger ved den komponent eller sektion, den påvirker.

Det betyder, at en fejl i projektsektionen normalt kan findes i dens egen mappe uden at lede i resten af siden.

## Lokal visning

ES-moduler skal åbnes gennem en lokal webserver. Kør fra repositoryets rod:

```bash
python -m http.server 8000
```

Åbn derefter `http://localhost:8000`. Stop serveren med `Ctrl+C`.

## Deployment

GitHub Pages udgiver indholdet direkte fra `main`. Ændringer bliver live efter push og den efterfølgende Pages-deployment.
