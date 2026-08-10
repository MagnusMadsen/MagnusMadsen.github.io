/**
 * PROJEKTER REDIGERES HER.
 *
 * - Ret hovedprojektet i `featuredProject`.
 * - Tilføj et nyt kort som et objekt i `projects`.
 * - `visual` kan være: jarvis, dashboard, sensor, homelab eller default.
 */
export const projectsSection = {
  index: "01 / UDVALGTE PROJEKTER",
  title: "Bygget for at<br />blive brugt.",
  introduction:
    "Fra industriel netværkstrafik til lokal AI og familiens fælles dashboard.",
};

export const featuredProject = {
  category: "HOVEDPROJEKT",
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
};

export const projects = [
  {
    id: "jarvis",
    visual: "jarvis",
    category: "LOKAL AI",
    status: "AKTIV",
    title: "Jarvis Voice Assistant",
    description:
      "En lokal, always-on stemmeassistent med Raspberry Pi Edge, dansk STT, lokal LLM og streaming TTS.",
    tags: ["FastAPI", "WebSocket", "Ollama", "Raspberry Pi"],
  },
  {
    id: "dashboard",
    visual: "dashboard",
    category: "HOME OPS",
    status: "LIVE",
    title: "Family Home Dashboard",
    description:
      "Et vægdashboard til vejr og fælles kalendere med cache, Flask API, Docker og Nginx reverse proxy.",
    tags: ["Flask", "JavaScript", "Docker", "Nginx"],
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
    tags: ["Ubuntu Server", "RAID", "SMB", "Tailscale"],
  },
];
