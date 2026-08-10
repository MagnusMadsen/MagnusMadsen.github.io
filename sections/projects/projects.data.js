/**
 * PROJEKTER REDIGERES HER.
 *
 * - Ret hovedprojekterne i `featuredProjects`.
 * - Tilføj et nyt kort som et objekt i `projects`.
 * - `visual` kan være: jarvis, dashboard, sensor, homelab, rover eller default.
 * - Et lokalt billede kan senere tilføjes med projektets `image`-felt.
 */
export const projectsSection = {
  index: "01 / PROJEKTER",
  title: "Fremhævede projekter <br /> brugt i virkeligheden.",
  introduction:
    "Fra offensiv Modbus-test og defensiv OT-monitorering til lokal AI, IoT og min første rover.",
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
    href: "https://github.com/MagnusMadsen/Modbus_exploit_program",
    linkLabel: "Udforsk pentestværktøjet på GitHub",
    preview: {
      path: "modbus-exploit / authorized-lab",
      status: "OFFENSIVE TESTING",
      visual: "exploit",
      overlay: ["MITM READY", "TCP / 502"],
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
    href: "https://github.com/MagnusMadsen/Modbus_aware_firewall",
    linkLabel: "Udforsk projektet på GitHub",
    preview: {
      path: "modbus-aware / live-dashboard",
      status: "PASSIVE IDS",
      image:
        "https://raw.githubusercontent.com/MagnusMadsen/Modbus_aware_firewall/main/docs/images/dashboard_overview.png",
      imageAlt: "Dashboard fra Modbus Aware Firewall-projektet",
      width: 1364,
      height: 1107,
      overlay: ["CAPTURE ACTIVE", "TCP / 502"],
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
      "En lokal, always-on stemmeassistent med Raspberry Pi som Edge-device, dansk STT, lokal LLM server og Chatterbox TTS.",
    tags: ["FastAPI", "WebSocket", "Ollama-qwen3.5:9b", "Raspberry Pi"],
  },
  {
    id: "dashboard",
    visual: "dashboard",
    category: "HOME OPS",
    status: "LIVE",
    title: "Family Home Dashboard",
    description:
      "Et vægdashboard til vejr og fælles kalendere med cache, Flask API, Docker og Nginx reverse proxy.",
    tags: ["Flask", "JavaScript", "Docker", "Nginx", "Self-signed certificate"],
  },
  {
    id: "sensor",
    visual: "sensor",
    category: "INDUSTRIEL IoT",
    status: "PROTOTYPE",
    title: "Sensorbaseret oliemåling",
    description:
      "ESP32-system til realtidsmåling, kalibrering, alarmregler og historik via MQTT, SQLite og Streamlit.",
    tags: ["ESP32", "MQTT", "SQLite", "Streamlit"],
  },
  {
    id: "homelab",
    visual: "homelab",
    category: "INFRASTRUKTUR",
    status: "24/7",
    title: "Linux Homelab",
    description:
      "Mit praktiske driftsmiljø til containere, lagring, media, reverse proxy, fjernadgang og netværksservices.",
    tags: ["Ubuntu Server", "RAID", "SMB", "Tailscale", "Filebrowser", "Jellyfin"],
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
  },
];
