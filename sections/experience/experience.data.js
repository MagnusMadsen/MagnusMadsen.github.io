/**
 * ERFARING OG UDDANNELSE REDIGERES HER.
 * Tilføj et nyt objekt øverst i den relevante liste.
 */
export const experienceSection = {
  index: "02 / ERFARING & UDDANNELSE",
  title: "En bred vej<br />ind i IT.",
  introduction:
    "Teknisk specialisering oven på erfaring med kunder, projekter og levering.",
};

export const education = [
  {
    period: "2026 — 2028",
    title: "IT-Sikkerhed",
    organization: "UCL Erhvervsakademi og Professionshøjskole",
    details: "Cybersikkerhed · Infrastruktur · Risiko · Drift",
    badge: "NUVÆRENDE",
    current: true,
  },
  {
    period: "2024 — 2026",
    title: "IT-Teknolog",
    organization: "UCL",
    details: "Netværk · Programmering · Embedded · Serverdrift",
  },
  {
    period: "2020 — 2022",
    title: "Professionsbachelor",
    organization: "Innovation & Entreprenørskab · UCL",
  },
  {
    period: "2018 — 2020",
    title: "Serviceøkonom",
    organization: "UCL",
  },
  {
    period: "2014 — 2017",
    title: "HHX, Innovation",
    organization: "Tietgen Handelsgymnasium",
  },
];

export const employment = [
  {
    period: "2020 — NU",
    title: "Ejer · MBMedier",
    organization:
      "Strategi, medieproduktion, livestreaming, AV-løsninger, kundekontakt og virksomhedsdrift.",
    details: "Projektledelse · Leverandører · Kundeansvar · Teknik",
    badge: "SELVSTÆNDIG",
    current: true,
  },
  {
    period: "2019 — 2025",
    title: "Medieproducent · AdventureDK",
    organization:
      "Billeder, video og marketingmateriale fra planlægning til færdig leverance.",
  },
];

export const mediaShowcase = {
  label: "03",
  eyebrow: "AV & MEDIEPRODUKTION",
  period: "MBMEDIER · 2020 — NU",
  title: "Teknik, produktion og levering i samme hånd.",
  introduction:
    "Som selvstændig har jeg bygget AV-løsninger, afviklet gaming-livestreams og produceret video fra den første opsætning til den færdige leverance. Det har givet mig praktisk erfaring med signalflow, fejlfinding under tidspres og ansvar for hele den tekniske kæde.",
  capabilities: [
    "Livestream & multicam",
    "Kamera, lys & lyd",
    "Signalflow & AV",
    "Redigering & levering",
  ],
  video: {
    vimeoId: "1217228048",
    title: "MBMedier — reklamefilm",
    label: "53 SEK. SHOWREEL",
    poster: "assets/images/media/mbmedier/showreel-poster.webp",
    posterAlt:
      "Billede fra MBMedier-reklamefilmen med en gaming-livestreamproduktion",
  },
  images: [
    {
      src: "assets/images/media/mbmedier/livestream-control.webp",
      alt: "Livestream-kontrolplads med multiview, lydmåling og fysiske styrepaneler",
      label: "LIVE CONTROL",
    },
    {
      src: "assets/images/media/mbmedier/studio-setup.webp",
      alt: "Kamera-, lys- og interviewopstilling til DBU eFodbold",
      label: "KAMERA & LYS",
    },
    {
      src: "assets/images/media/mbmedier/gaming-stage.webp",
      alt: "Gaming-livestreamscene med kameraer, lys og spillerstationer",
      label: "GAMING EVENT",
    },
  ],
};

export const certifications = [
  {
    issuer: "TryHackMe",
    title: "Cyber Security 101",
    source: "Learning Path",
    date: "14. november 2025",
    duration: "45 timer 53 minutter",
    code: "THM-TGDELWBV49",
    preview:
      "assets/images/certificates/tryhackme-cyber-security-101.webp",
    href: "assets/docs/certifikater/THM-TGDELWBV49.pdf",
    alt: "TryHackMe-certifikat for Cyber Security 101 udstedt til Magnus Bøg Madsen",
  },
  {
    issuer: "TryHackMe",
    title: "Pre Security",
    source: "Learning Path",
    date: "3. marts 2025",
    duration: "7 timer 28 minutter",
    code: "THM-TIYJHYFRAQ",
    preview: "assets/images/certificates/tryhackme-pre-security.webp",
    href: "assets/docs/certifikater/THM-TIYJHYFRAQ (1).pdf",
    alt: "TryHackMe-certifikat for Pre Security udstedt til Magnus Bøg Madsen",
  },
];
