"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { Section } from "@/components/layout/Section";
import { SkillCard } from "@/components/cards/SkillCard";
import {
  HiOutlineDesktopComputer,
  HiOutlineServer,
  HiOutlineDatabase,
  HiOutlineDeviceMobile,
  HiOutlineCloud,
} from "react-icons/hi";
import { HiOutlineWrenchScrewdriver, HiOutlineSparkles } from "react-icons/hi2";
import { TbCompass } from "react-icons/tb";
import type { SkillCategory } from "@/lib/types";

const SKILL_DATA: SkillCategory[] = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and modern user interfaces.",
    icon: "frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Developing scalable server-side applications and RESTful APIs.",
    icon: "backend",
    skills: [
      "PHP",
      "Laravel",
      "Node.js",
      "Express.js",
      "Java",
      "C#",
      "Python",
      "RESTful APIs",
    ],
  },
  {
    title: "Database Technologies",
    description:
      "Designing and managing structured and cloud-based databases.",
    icon: "database",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Microsoft SQL Server",
      "Firebase Realtime Database",
      "Cloud Firestore",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Creating native Android applications and Firebase-powered mobile solutions.",
    icon: "mobile",
    skills: ["Java", "Android SDK", "Firebase", "Firebase SDK"],
  },
  {
    title: "Developer Tools",
    description:
      "Tools I use throughout the software development lifecycle.",
    icon: "tools",
    skills: [
      "Git",
      "GitHub",
      "Visual Studio Code",
      "Android Studio",
      "Kiro IDE",
      "Postman",
      "Figma",
      "Jira",
      "Trello",
      "XAMPP",
      "Composer",
    ],
  },
  {
    title: "Cloud & Deployment",
    description: "Deploying and hosting web applications.",
    icon: "cloud",
    skills: ["Vercel", "GitHub Pages"],
  },
  {
    title: "AI Development Stack",
    description:
      "AI-powered tools that enhance my productivity, development workflow, and problem-solving.",
    icon: "ai",
    skills: ["ChatGPT", "Claude", "Gemini", "Google AI Studio"],
  },
  {
    title: "Areas of Interest",
    description:
      "Technologies and fields I'm continuously exploring.",
    icon: "interest",
    skills: [
      "Software Engineering",
      "Full-Stack Development",
      "Mobile App Development",
      "Cloud Computing",
      "Artificial Intelligence",
      "System Architecture",
      "Emerging Technologies",
    ],
  },
];

const iconMap: Record<string, React.ReactNode> = {
  frontend: <HiOutlineDesktopComputer size={22} />,
  backend: <HiOutlineServer size={22} />,
  database: <HiOutlineDatabase size={22} />,
  mobile: <HiOutlineDeviceMobile size={22} />,
  tools: <HiOutlineWrenchScrewdriver size={22} />,
  cloud: <HiOutlineCloud size={22} />,
  ai: <HiOutlineSparkles size={22} />,
  interest: <TbCompass size={22} />,
};

export function Skills() {
  return (
    <Section id="skills">
      {/* Section Header */}
      <motion.div variants={fadeUp} className="mb-16">
        <p className="font-body text-sm font-medium uppercase tracking-widest text-accent">
          Skills
        </p>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-5xl">
          Tech Stack.
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-text-secondary md:text-lg">
          The technologies, frameworks, and tools I use to design, build, and
          deploy modern software solutions.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_DATA.map((category) => (
          <SkillCard
            key={category.title}
            title={category.title}
            description={category.description}
            skills={category.skills}
            icon={iconMap[category.icon || ""]}
          />
        ))}
      </div>
    </Section>
  );
}
