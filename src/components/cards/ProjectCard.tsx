"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((y - centerY) / centerY) * -3);
    setRotateY(((x - centerX) / centerX) * 3);
  }

  function handleMouseLeave() {
    setRotateX(0);
    setRotateY(0);
  }

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="card-elevated group overflow-hidden rounded-xl border border-border bg-bg-surface/60 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_16px_48px_var(--color-shadow)]"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-secondary">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 md:p-8">
        <h3 className="font-display text-xl font-bold tracking-tight text-text-primary md:text-2xl">
          {project.title}
        </h3>
        <p className="font-body text-sm leading-relaxed text-text-secondary md:text-base">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-bg-secondary/50 px-2.5 py-1 font-body text-xs font-medium text-text-secondary transition-colors duration-200 group-hover:border-accent/30 group-hover:text-text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-2 flex items-center gap-4">
          {project.liveUrl && (
            <motion.a
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-text-secondary transition-colors hover:text-accent"
              aria-label={`Live demo of ${project.title}`}
            >
              <HiExternalLink size={16} />
              Live Demo
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-text-secondary transition-colors hover:text-accent"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <FaGithub size={16} />
              Source
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
