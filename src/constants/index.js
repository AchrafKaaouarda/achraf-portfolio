import {
  Php,
  python,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  healthWallet,
  Algo,
  Talentflow,
  mvm,
  smr,
  mpm,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Php", icon: Php },
  { title: "JavaScript", icon: javascript },
  { title: "Python", icon: python },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Stagiaire Développeur",
    company_name: "Ministère de la Pêche Maritime – Rabat",
    icon: mpm,
    iconBg: "#fff",
    date: "Mars - Avril 2025",
    points: [
      "Modernisation d’interfaces web dans le cadre du projet de digitalisation",
      "Refonte avec React.js, Redux et TypeScript",
      "Collaboration avec l’équipe IT pour l’intégration et les tests"
    ],
  },
];

export const projects = [
  {
    name: "Health Wallet Morocco",
    description:
      "Plateforme de gestion d’assurance santé (Frontend) Application web multi-rôles (Admin, Médecin, Agent d’assurance) avec tableaux de bord dynamiques et préparation à l’intégration d’un backend futur. ",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Vite", color: "green-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
      { name: "UI Dashboard", color: "yellow-text-gradient" },
    ],
    image: healthWallet,
    source_code_link: "https://github.com/AchrafKaaouarda/Health-Wallet-Morocco",
  },
  {
    name: "Algorithm Visualizer",
    description:
      "Ce projet est une plateforme interactive Objectif : Aider les étudiants à maîtriser les algorithmes grâce à une interface pédagogique, simple, intuitive et visuelle ",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: Algo,
    source_code_link: "https://github.com/AchrafKaaouarda/Executeur-PseudoCode",
  },
  {
    name: "MoveMorocco",
    description:
      "Plateforme web connectant les voyageurs à des services de transport locaux fiables et abordables à travers le Maroc.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Laravel API", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
    ],
    image: mvm,
    source_code_link:
      "https://github.com/AchrafKaaouarda/MoveMorocco",
  },
  {
    name: "TalentFlow",
    description:
      "Plateforme RH ‘Vibe Coding’",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "ShadCN UI", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
    ],
    image: Talentflow,
    source_code_link: "https://github.com/AchrafKaaouarda/Smart_RH",
  },
  {
    name: "SmartResto",
    description:
      "Gestion complète d’un restaurant ",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
      { name: "Laravel 11", color: "pink-text-gradient" },
      { name: "MySQL", color: "blue-text-gradient" },
    ],
    image: smr,
    source_code_link: "https://github.com/AchrafKaaouarda/SmartResto",
  },
  {
    name: "Micos Hotel Management System",
    description:
      "Gestion d’hôtel",
    tags: [
      { name: "Blade", color: "blue-text-gradient" },
      { name: "Bootstrap", color: "green-text-gradient" },
      { name: "Laravel", color: "pink-text-gradient" },
      { name: "MySQL", color: "blue-text-gradient" },
    ],

    image: 'ALT_',
    source_code_link: "https://github.com/AchrafKaaouarda/hotel-micos",
  },
];
