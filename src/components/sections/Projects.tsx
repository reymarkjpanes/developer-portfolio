"use client";

import { motion } from "framer-motion";
import { fadeUp, blurIn } from "@/lib/motion";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { PROJECTS } from "@/lib/constants";

export function Projects() {
  return (
    <Section id="projects">
      <motion.div variants={blurIn} className="mb-16">
        <p className="font-body text-sm font-medium uppercase tracking-widest text-accent">
          Projects
        </p>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-5xl">
          Selected work.
        </h2>
        <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-text-secondary">
          A curated collection of projects that showcase my approach to solving
          problems through code and design.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            custom={index}
            transition={{ delay: index * 0.15 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
