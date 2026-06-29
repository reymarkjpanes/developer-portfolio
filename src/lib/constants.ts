import type { NavLink, Project, SocialLink, SkillCategory } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS: Project[] = [
  {
    title: "Promotional Landing Page",
    description:
      "Collaborated with a designer to build a responsive promotional webpage for Adventure Time. Dynamic content, newsletter integration, and pixel-perfect implementation from Figma.",
    image: "/images/projects/project-1.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/reymarkjpanes",
  },
  {
    title: "World News Blog Platform",
    description:
      "Mastered CSS Grid complexities to build an innovative news homepage with intricate layout decisions for seamless reading experiences.",
    image: "/images/projects/project-2.png",
    technologies: ["Next.js", "CSS Grid", "Node.js", "REST API"],
    liveUrl: "#",
    githubUrl: "https://github.com/reymarkjpanes",
  },
  {
    title: "E-commerce Product Page",
    description:
      "Crafted an engaging product page with dynamic lightbox gallery, seamless cart functionality, and smooth micro-interactions.",
    image: "/images/projects/project-3.png",
    technologies: ["JavaScript", "CSS", "HTML", "Local Storage"],
    liveUrl: "#",
    githubUrl: "https://github.com/reymarkjpanes",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "frontend",
    description: "Building responsive, accessible, and modern user interfaces.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: "backend",
    description: "Developing scalable server-side applications and RESTful APIs.",
    skills: ["Node.js", "Python", "Rust", "REST APIs", "GraphQL"],
  },
  {
    title: "Databases",
    icon: "database",
    description: "Designing and managing structured and cloud-based databases.",
    skills: ["SQLite", "PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    description: "Deploying and hosting web applications.",
    skills: ["Git", "GitHub Actions", "CI/CD", "Vercel", "Docker"],
  },
  {
    title: "Developer Tools",
    icon: "tools",
    description: "Tools I use throughout the software development lifecycle.",
    skills: ["VS Code", "Figma", "Postman", "Terminal", "Linux"],
  },
  {
    title: "AI & Interests",
    icon: "ai",
    description: "AI-powered tools that enhance my productivity and workflow.",
    skills: ["LLM Integration", "Prompt Engineering", "Blockchain", "Web3", "Stellar"],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/reymark-panes",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/reymarkjpanes",
    icon: "github",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/GoldenBees.777/",
    icon: "facebook",
  },
];

export const SITE_CONFIG = {
  name: "Reymark Panes",
  role: "Software & Web Developer",
  email: "reymarkjpanes@gmail.com",
  location: "Parañaque City, Metro Manila",
  heroIntro:
    "I build modern digital experiences with clean code, thoughtful design, and a focus on performance.",
  aboutParagraphs: [
    "I'm a software and web developer with a growing passion for UI/UX design, based in Metro Manila, Philippines. I enjoy transforming ideas into polished digital experiences using modern web technologies from research and ideation to development and deployment.",
    "My journey began with a curiosity about how the web works and has evolved into a passion for building thoughtful, user-centered applications. I enjoy creating clean, maintainable solutions, designing intuitive interfaces, and paying attention to the small details that make software feel seamless and enjoyable to use.",
    "I also embrace AI as part of my creative and development workflow using it to research ideas, explore different approaches, validate concepts, accelerate development, and continuously learn. Rather than replacing creativity, I see AI as a collaborative tool that helps me experiment faster, solve problems more effectively, and refine my work.",
    "As I continue growing as a developer, I'm always exploring new technologies, frameworks, and design patterns challenging myself with new ideas, and improving my craft with every project. My goal is simple: to keep learning, keep building, and create digital experiences that are meaningful, reliable, and built with purpose.",
  ],
} as const;
