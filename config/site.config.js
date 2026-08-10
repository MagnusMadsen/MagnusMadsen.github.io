/**
 * Fælles oplysninger, der bruges flere steder på siden.
 * Ret profil-links, status og navigation her.
 */
export const siteConfig = Object.freeze({
  name: "Magnus Madsen",
  fullName: "Magnus Mathias Bøg Madsen",
  location: "Odense, Danmark",
  status: "Åben for muligheder",
  profileImage: "https://avatars.githubusercontent.com/u/40494689?v=4",
  links: {
    github: "https://github.com/MagnusMadsen",
    repositories: "https://github.com/MagnusMadsen?tab=repositories",
    linkedin: "https://www.linkedin.com/in/magnus-b%C3%B8g-madsen/",
  },
  navigation: [
    { label: "Forside", href: "#top" },
    { label: "Projekter", href: "#projekter" },
    { label: "Erfaring", href: "#erfaring" },
    { label: "Kompetencer", href: "#kompetencer" },
    { label: "Kontakt", href: "#kontakt" },
  ],
});
