export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ProjectInfo {
  label: string;
  value: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "linkedin" | "github" | "facebook" | "twitter" | "instagram";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon?: string;
  skills: string[];
}
