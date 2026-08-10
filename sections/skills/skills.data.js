/**
 * KOMPETENCER REDIGERES HER.
 * Tilføj/fjern teknologier i `skills`, eller tilføj en ny kompetencegruppe.
 */
export const skillsSection = {
  index: "03 / TEKNISK VÆRKTØJSKASSE",
  title: "Det jeg arbejder<br />med i praksis.",
  introduction:
    "Kompetencer grupperet efter det problem, de hjælper mig med at løse.",
};

export const skillGroups = [
  {
    icon: "infrastructure",
    title: "Infrastruktur & drift",
    description:
      "Opsætning, containerisering, lagring, adgang og daglig fejlsøgning i Linux-baserede miljøer.",
    skills: [
      "Ubuntu Server",
      "Linux",
      "Docker Compose",
      "RAID",
      "SMB",
      "Nginx",
      "Reverse proxy",
      "DNS",
    ],
  },
  {
    icon: "network",
    title: "Netværk & OT",
    description:
      "Forståelse for trafikflow, segmentering, industrielle protokoller og udstyr tæt på processen.",
    skills: [
      "TCP/IP",
      "VLAN",
      "Routing",
      "NAT",
      "DHCP relay",
      "Juniper SRX",
      "Westermo",
      "Modbus TCP",
      "MQTT",
      "SNMP",
    ],
  },
  {
    icon: "security",
    title: "Sikkerhed & observability",
    description:
      "Indsamling af signaler, analyse af hændelser og kontroller, der gør systemets tilstand synlig.",
    skills: [
      "Wireshark",
      "tcpdump",
      "Scapy",
      "Logging",
      "Monitoring",
      "Adgangskontrol",
      "Risikovurdering",
      "NIS2-kendskab",
      "TryHackMe",
    ],
  },
  {
    icon: "code",
    title: "Kode & data",
    description:
      "Backend, API'er, automatisering og datalagring, når teknikken skal bindes sammen til en løsning.",
    skills: [
      "Python",
      "Flask",
      "FastAPI",
      "JavaScript",
      "SQL",
      "PostgreSQL",
      "Redis",
      "SQLite",
      "ESP32 / C++",
    ],
  },
];
