/**
 * PROJEKTER REDIGERES HER.
 *
 * - Ret hovedprojekterne i `featuredProjects`.
 * - Tilføj et nyt kort som et objekt i `projects`.
 * - `visual` vælger den tekniske CSS-illustration.
 * - `media` vælger kortets primære foto eller screenshot.
 * - `gallery.items` indeholder de billeder og videoer, der åbnes i projektgalleriet.
 * - `links` bruges til GitHub, rapporter og andre projektreferencer.
 */
export const projectsSection = {
  index: "01 / PROJEKTER",
  title: "Fremhævede projekter <br /> brugt i virkeligheden.",
  introduction:
    "Fra offensiv Modbus-test og defensiv OT-monitorering til lokal AI, industrielle dataplatforme og min første rover.",
};

export const featuredProjects = [
  {
    id: "modbus-exploit",
    category: "OFFENSIV OT-SIKKERHED",
    year: "2026",
    title: "Modbus MITM<br />Exploit",
    description:
      "Et offensivt værktøj til autoriseret penetrationstest af Modbus TCP-miljøer. Det samler MITM-positionering, discovery, trafikopsamling og kontrolleret manipulation i én terminalbaseret arbejdsgang.",
    highlights: [
      "Bridge- og MITM-positionering i isolerede OT-testmiljøer",
      "Discovery, packet capture, parsing og live-overvågning",
      "Manual takeover, fake master/slave og capture/replay",
    ],
    tags: ["Python", "Scapy", "Pymodbus", "Linux networking"],
    links: [
      {
        label: "Udforsk pentestværktøjet",
        href: "https://github.com/MagnusMadsen/Modbus_exploit_program",
        meta: "GitHub",
      },
    ],
    preview: {
      path: "modbus-exploit / authorized-lab",
      status: "OFFENSIVE TESTING",
      visual: "exploit",
      overlay: ["MITM READY", "TCP / 502"],
      media: {
        src: "assets/images/projects/modbus/exploit-demo-poster.webp",
        videoSrc: "assets/videos/modbus-exploit-preview.mp4",
        alt: "Videobillede fra demonstrationen af Modbus MITM-værktøjet",
        width: 608,
        height: 1080,
        badge: "LIVE PREVIEW / UDEN LYD",
      },
    },
    gallery: {
      buttonLabel: "Se demo og lab",
      eyebrow: "OFFENSIVT TESTLAB",
      title: "Fra terminalværktøj til fysisk Modbus-lab",
      description:
        "Værktøjet er demonstreret i et isoleret miljø med fysisk OT-udstyr, trafikopsamling og kontrollerede angrebsscenarier.",
      items: [
        {
          type: "vimeo",
          label: "DEMO / 02:10",
          title: "Modbus MITM Exploit i drift",
          caption:
            "Se den samlede arbejdsgang i et isoleret, autoriseret Modbus TCP-testmiljø — fra kortlægning af enheder til trafikopsamling og kontrolleret overtagelse.",
          vimeoId: "1217245580",
          aspect: "portrait",
          featureTitle: "Repoet samler hele pentest-flowet",
          features: [
            "ARP-spoof og bridge-mode placerer testværktøjet mellem master og slave",
            "Discovery kortlægger Modbus-enheder, unit IDs, coils og registre",
            "Live parsing og watchers viser trafik, funktioner og manipulation i realtid",
            "Manual takeover og spoofing afprøver kontrollerede kommandoer mod test-slaves",
            "PCAP capture og replay dokumenterer og gentager et autoriseret testforløb",
          ],
          link: {
            label: "Se kode og dokumentation",
            href: "https://github.com/MagnusMadsen/Modbus_exploit_program",
            meta: "GitHub",
          },
        },
        {
          type: "image",
          label: "INTERFACE",
          title: "Terminalbaseret angrebsflade",
          caption:
            "Samlet adgang til discovery, bridge/MITM, packet capture, replay og simulerede master/slave-funktioner.",
          src: "assets/images/projects/modbus/exploit-interface.webp",
          alt: "Terminalmenuen i Modbus MITM Exploit-programmet",
          width: 1097,
          height: 1352,
        },
        {
          type: "image",
          label: "FYSISK LAB",
          title: "Projektet demonstreret med rigtigt udstyr",
          caption:
            "Testopstillingen blev bygget, dokumenteret og præsenteret som et samlet offensivt og defensivt OT-sikkerhedsprojekt.",
          src: "assets/images/projects/modbus/lab-showcase.webp",
          alt: "Magnus ved den fysiske Modbus-labopstilling",
          width: 1200,
          height: 1600,
        },
        {
          type: "image",
          label: "LABOPSTILLING",
          title: "Kablet Modbus TCP-testmiljø",
          caption:
            "Master, slaver, OT-switch, Kali-system og IDS blev samlet i en reproducerbar fysisk opstilling.",
          src: "assets/images/projects/modbus/lab-topology.webp",
          alt: "Den fysiske Modbus TCP-labopstilling set ovenfra",
          width: 1200,
          height: 1600,
        },
      ],
    },
  },
  {
    id: "modbus-aware",
    category: "DEFENSIV OT-SIKKERHED",
    year: "2026",
    title: "Modbus-aware<br />OT-monitorering",
    description:
      "En passiv sikkerheds- og monitoreringsprototype til industrielle Modbus TCP-miljøer. Systemet fortolker netværkstrafik, opbygger baseline og gør enheder, forbindelser, registerændringer, latency og alarmer synlige.",
    highlights: [
      "Scapy packet capture og Modbus-parsing",
      "Events, kritiske registre og ARP-identitetsændringer",
      "Flask, PostgreSQL, Redis, SNMP og Docker Compose",
    ],
    tags: ["Python", "Modbus TCP", "PostgreSQL", "Docker"],
    links: [
      {
        label: "Udforsk IDS-projektet",
        href: "https://github.com/MagnusMadsen/Modbus_aware_firewall",
        meta: "GitHub",
      },
      {
        label: "Læs hovedopgaven",
        href: "assets/docs/Linux-baseret-IDS-hovedopgave.pdf",
        meta: "PDF / 5,3 MB",
      },
    ],
    preview: {
      path: "modbus-aware / live-dashboard",
      status: "PASSIVE IDS",
      image: "assets/images/projects/modbus/ids-dashboard.webp",
      imageAlt: "Dashboard fra Modbus-aware IDS-projektet",
      width: 1364,
      height: 1107,
      overlay: ["CAPTURE ACTIVE", "TCP / 502"],
    },
    gallery: {
      buttonLabel: "Se arkitektur og testlab",
      eyebrow: "DEFENSIV OT-MONITORERING",
      title: "Samme lab - nu set fra forsvarssiden",
      description:
        "Den passive IDS modtager spejlet trafik, afkoder Modbus-funktioner og registrerer indikatorer uden at påvirke proceskommunikationen.",
      items: [
        {
          type: "image",
          label: "ARKITEKTUR",
          title: "Angreb, port mirror og passiv IDS",
          caption:
            "Det samlede dataflow fra Modbus-master gennem MITM-positionen og videre til IDS, database og operatørflade.",
          src: "assets/images/projects/modbus/ot-lab-architecture.webp",
          alt: "Arkitekturdiagram over Modbus OT-lab med MITM-angreb og passiv IDS",
          width: 1593,
          height: 1163,
        },
        {
          type: "image",
          label: "OPERATØRFLADE",
          title: "Live-overblik og alarmhåndtering",
          caption:
            "Dashboardet samler forbindelser, latency, hændelser, kritiske registre og godkendelse af alarmer.",
          src: "assets/images/projects/modbus/ids-dashboard.webp",
          alt: "Modbus-aware dashboard med trafik og alarmer",
          width: 1364,
          height: 1107,
        },
        {
          type: "image",
          label: "FYSISK TOPOLOGI",
          title: "Testmiljøet bag målingerne",
          caption:
            "Fysisk netværk med Siemens-master, virtuelle slaver, OT-switch, Kali-system og separat IDS-enhed.",
          src: "assets/images/projects/modbus/lab-topology.webp",
          alt: "Fysisk Modbus-netværk med industrielt udstyr og testcomputere",
          width: 1200,
          height: 1600,
        },
      ],
    },
  },
];

export const projects = [
  {
    id: "jarvis",
    visual: "jarvis",
    category: "LOKAL AI",
    status: "AKTIV",
    title: "Jarvis Voice Assistant",
    description:
      "En lokal, always-on stemmeassistent med Raspberry Pi som edge-enhed, dansk STT, lokal LLM-server og Chatterbox TTS.",
    tags: ["FastAPI", "WebSocket", "Ollama / Qwen 3.5", "Raspberry Pi"],
  },
  {
    id: "dashboard",
    category: "HOME OPS",
    status: "LIVE",
    title: "Family Home Dashboard",
    description:
      "Et vægdashboard til vejr og fælles kalendere med cache, Flask API, Docker og Nginx reverse proxy.",
    tags: ["Flask", "JavaScript", "Docker", "Nginx"],
    media: {
      src: "assets/images/projects/dashboard/ui-overview.webp",
      alt: "Forsiden på Magnus' familiedashboard med vejr, tid og familiebillede",
      width: 1434,
      height: 1141,
      position: "center top",
      badge: "LIVE / CACHE HIT",
    },
    gallery: {
      buttonLabel: "Se dashboardet i brug",
      eyebrow: "HOME OPS",
      title: "Fra prototype til fast vægdashboard",
      description:
        "Frontenden, den fysiske prototype og den daglige visning er samlet i ét lokalt driftet familiesystem.",
      items: [
        {
          type: "image",
          label: "UI / FORSIDE",
          title: "Vejr, klokke og familieoverblik",
          caption:
            "Forsiden samler aktuelle vejrmålinger, prognose, kalenderadgang og billeder i en rolig vægvisning.",
          src: "assets/images/projects/dashboard/ui-overview.webp",
          alt: "Home Dashboard med vejr, klokke og familieindhold",
          width: 1434,
          height: 1141,
        },
        {
          type: "image",
          label: "VÆGVISNING",
          title: "Dashboardet monteret i køkkenet",
          caption:
            "Den færdige vejrvisning kører på en fast tablet som en naturlig del af hjemmet.",
          src: "assets/images/projects/dashboard/wall-weather.webp",
          alt: "Tablet på væggen med dashboardets vejrside",
          width: 1200,
          height: 1600,
        },
        {
          type: "image",
          label: "KALENDER",
          title: "Fælles kalender i samme grænseflade",
          caption:
            "Kalenderen åbnes uden sideskift og anvender cache, så data er klar, når visningen vælges.",
          src: "assets/images/projects/dashboard/wall-calendar.webp",
          alt: "Tablet på væggen med dashboardets kalender",
          width: 1200,
          height: 1600,
        },
        {
          type: "image",
          label: "PROTOTYPE",
          title: "Hardware og sensorer under udvikling",
          caption:
            "Dashboardet fungerer også som praktisk testflade for lokale sensorer og nye integrationer.",
          src: "assets/images/projects/dashboard/hardware-prototype.webp",
          alt: "Breadboard og sensorer brugt sammen med dashboardet",
          width: 1200,
          height: 1600,
        },
      ],
    },
  },
  {
    id: "optilogic-oil",
    visual: "optilogic",
    category: "INDUSTRIEL IoT & DATA",
    status: "END-TO-END",
    title: "Optilogic oliemåling",
    description:
      "Ét samlet industrielt IoT-forløb: ESP32-baseret måling og kalibrering af olieklarhed koblet til edge-services, MQTT, tidsserier, API og live driftsoverblik.",
    tags: ["ESP32", "MQTT / Sparkplug B", "QuestDB", "FastAPI", "Docker"],
    media: {
      mode: "hybrid",
      src: "assets/images/projects/oil-sensor/exhibition.webp",
      alt: "Optilogic oliemåling præsenteret med sensor, hardware og live dashboard",
      width: 1200,
      height: 1600,
      position: "center 54%",
      badge: "SENSOR → EDGE → DRIFT",
    },
    links: [
      {
        label: "Læs projektrapporten",
        href: "assets/docs/Optilogic-rapport.pdf",
        meta: "PDF / 3 MB",
      },
    ],
    gallery: {
      buttonLabel: "Se hele løsningen",
      eyebrow: "INDUSTRIEL IoT & EDGE DATA",
      title: "Fra fysisk oliemåling til driftsoverblik",
      description:
        "Projektet samler fysisk sensor, lokal kalibrering og alarmregler med standardiseret dataflow, tidsserier, API, dashboards og overvågning af platformens services.",
      items: [
        {
          type: "image",
          label: "SAMLET LØSNING",
          title: "Hardware og live data præsenteret samlet",
          caption:
            "Sensor, ESP32, lokal visning, MQTT-dataflow og dashboard blev demonstreret som én sammenhængende industriel prototype.",
          src: "assets/images/projects/oil-sensor/exhibition.webp",
          alt: "Projektstand med Optilogic oliemåling, hardware og live dashboard",
          width: 1200,
          height: 1600,
        },
        {
          type: "image",
          label: "PROTOTYPE",
          title: "Sensor, ESP32 og lokal visning",
          caption:
            "Målingen blev udviklet og testet med fysisk sensor, LCD, kalibrering og MQTT-dataflow.",
          src: "assets/images/projects/oil-sensor/prototype.webp",
          alt: "Oliemåler-prototype med sensor, ESP32 og LCD",
          width: 1200,
          height: 1600,
        },
        {
          type: "image",
          label: "SENSORTEST",
          title: "Kalibrering med fysisk væskeprøve",
          caption:
            "Sensor, display og styrekode blev testet samlet med en kontrolleret væskeprøve før den endelige præsentation.",
          src: "assets/images/projects/oil-sensor/sensor-test.webp",
          alt: "Testopstilling med væskesensor, ESP32 og display",
          width: 1200,
          height: 1600,
        },
        {
          type: "image",
          label: "ARKITEKTUR",
          title: "Dataflow fra edge-enhed til webapp",
          caption:
            "ESP32/Olimex, MQTT, Sparkplug B, QuestDB, FastAPI og Flask er opdelt i tydelige lag med logging og healthchecks.",
          src: "assets/images/projects/optilogic/architecture.webp",
          alt: "Arkitekturdiagram over Optilogic oliemåling og edge-data platform",
          width: 1600,
          height: 868,
        },
        {
          type: "image",
          label: "DRIFT",
          title: "Healthchecks på tværs af platformen",
          caption:
            "Frontenden viser containerstatus og fejltilstande, så dataflowets enkelte services kan følges i drift.",
          src: "assets/images/projects/optilogic/healthchecks.webp",
          alt: "Mørkt healthcheck-dashboard med status for Optilogic-platformens services",
          width: 1600,
          height: 1140,
        },
        {
          type: "image",
          label: "LIVE DATA",
          title: "Måledata som tidsserie",
          caption:
            "Dashboardet gør kontinuerlige procesmålinger og ændringer synlige over tid.",
          src: "assets/images/projects/optilogic/airflow.webp",
          alt: "Dashboardgraf med procesmålinger over tid",
          width: 1600,
          height: 796,
        },
        {
          type: "image",
          label: "LIVE DATA",
          title: "Tydelige procesændringer",
          caption:
            "Tidsserierne gør det muligt at se driftsskift, fald og stabile perioder direkte i brugerfladen.",
          src: "assets/images/projects/optilogic/pressure.webp",
          alt: "Dashboardgraf med trykmålinger over tid",
          width: 1600,
          height: 791,
        },
        {
          type: "image",
          label: "LIVE DATA",
          title: "Flere måletyper i samme pipeline",
          caption:
            "Den samme datapipeline håndterer flere sensortyper med ensartet timestamping, lagring og visning.",
          src: "assets/images/projects/optilogic/temperature.webp",
          alt: "Dashboardgraf med temperaturmålinger over tid",
          width: 1600,
          height: 794,
        },
      ],
    },
  },
  {
    id: "homelab",
    visual: "homelab",
    category: "INFRASTRUKTUR",
    status: "24/7",
    title: "Linux Homelab",
    description:
      "Mit praktiske driftsmiljø til containere, lagring, media, reverse proxy, fjernadgang og netværksservices.",
    tags: ["Ubuntu Server", "RAID", "SMB", "Tailscale", "Jellyfin"],
  },
  {
    id: "rover",
    visual: "rover",
    category: "FØRSTE PROJEKT",
    status: "2024",
    title: "ESP32 Rover",
    description:
      "Mit første større tekniske projekt: en firehjulet ESP32-rover med tre afstandssensorer, manuel og autonom kørsel samt trådløs fjernstyring via ESP-NOW.",
    tags: ["ESP32", "Arduino/C++", "ESP-NOW", "FreeRTOS", "VL53L0X"],
    media: {
      mode: "hybrid",
      src: "assets/images/projects/rover/rover-and-arm.webp",
      alt: "ESP32-roveren ved siden af et robotarm-projekt",
      width: 1567,
      height: 1600,
      position: "center 58%",
      badge: "ROVER 01 / 4WD",
    },
    gallery: {
      buttonLabel: "Se roverens udvikling",
      eyebrow: "FØRSTE PROJEKT / 2024",
      title: "Det projekt, der startede rejsen",
      description:
        "Billederne viser den samlede prototype, elektronikken i chassiset og den håndholdte ESP-NOW-controller.",
      items: [
        {
          type: "image",
          label: "SAMLET PROTOTYPE",
          title: "Rover og robotarm",
          caption:
            "Den færdige rover samlet med den øvrige hardware fra det første større projektforløb.",
          src: "assets/images/projects/rover/rover-and-arm.webp",
          alt: "Firehjulet ESP32-rover ved siden af en lille robotarm",
          width: 1567,
          height: 1600,
        },
        {
          type: "image",
          label: "CHASSIS",
          title: "Elektronik og mekanik samlet",
          caption:
            "ESP32, motordriver, strømforsyning og kabling monteret i det firehjulede chassis.",
          src: "assets/images/projects/rover/rover-chassis.webp",
          alt: "Åbent roverchassis med ESP32, batteri og ledningsføring",
          width: 1200,
          height: 1600,
        },
        {
          type: "image",
          label: "ESP-NOW",
          title: "Egen håndholdt controller",
          caption:
            "En separat ESP32-controller med to joysticks styrer roveren trådløst via ESP-NOW.",
          src: "assets/images/projects/rover/controller.webp",
          alt: "Håndholdt sort ESP32-controller med to joysticks",
          width: 1201,
          height: 1600,
        },
      ],
    },
  },
];
